
(function () {
    var isDev = $isDev;
    var rootPath = '/Tonyu1-wiki';

    /** 該当ページを表示 */
    function showPage(page, hash) {
        var isFoundPage = false;
        var pages = document.getElementsByClassName('pagediv');
        for (var i = 0; i < pages.length; i++) {
            var p = pages[i];
            if (p != null) {
                if (p.id == page) {
                    isFoundPage = true;
                    p.style.display = 'block';
                    document.title = p.attributes.title2.value;
                    loadImg(p);
                } else {
                    p.style.display = 'none';
                }
            }
        }
        if (!isFoundPage) {
            var notFoundPageDiv = document.getElementById('404');
            notFoundPageDiv.style.display = 'block';
            document.title = notFoundPageDiv.title;
        }
    }

    function accessLog(a) {
        var r = localStorage.getItem('r');
        var obj = null;
        if (r == null) {
            obj = {r: Math.random()};
            localStorage.setItem('r', JSON.stringify(obj));
        } else {
            obj = JSON.parse(r);
        }
        sendData({
            a: a,
            rf: document.referrer,
            r: obj.r,
            u: navigator.userAgent,
            w: window.innerWidth,
            h: window.innerHeight,
            dw: window.screen.width,
            dh: window.screen.height,
            l1: navigator.language,
            la: navigator.languages
        });
    }

    /** 該当ページの画像を読み込む */
    function loadImg(showPageDiv) {
        var imgs = showPageDiv.getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++) {
            var elem = imgs[i];
            var src = elem.getAttribute('src-t');
            if (src) {
                elem.setAttribute('src', src);
            }
        };
    }

    /** aタグのイベントを書き換えて、SPAができるようにする */
    function convAHref() {
        var atags = document.getElementsByTagName('a');
        for (var i = 0; i < atags.length; i++) {
            var elem = atags[i];
            var src = elem.getAttribute('href');
            if (src) {
                elem.addEventListener('click', function (e) {
                    var nowPage = getPageFromPopState(document.location.pathname);
                    var page = getPageFromAtag(e);
                    var hashUrl = e.target.hash;
                    if (!isDev) {
                        setTimeout(function(){
                            accessLog(e.target.origin + "/" + e.target.pathname + hashUrl);
                        }, 0);
                    }
                    if (page && !page.match(/[\.\/]+/)) { // 「.」や「/」が付いてない時
                        showPage(page, hashUrl);
                        // console.log(page);
                        if (page == 'index') {
                            history.pushState(null, null, './' + hashUrl);
                        } else if (page.indexOf('/') != -1) {
                            return;
                        } else {
                            history.pushState(null, null, page + hashUrl);
                        }
                        e.preventDefault();
                        if (!hashUrl) { // URLに#が無い時
                            window.scroll(0, 0);
                        } else {
                            var hashElem = document.getElementById(decodeURI(hashUrl.substring(1)));
                            if (!hashElem) {
                                window.scroll(0, 0);
                                return;
                            }
                            var offsetTop = hashElem.offsetTop;
                            var userAgent = window.navigator.userAgent.toLowerCase();
                            if (userAgent.match(/msie/) || userAgent.match(/trident/)) {
                                window.scroll(offsetTop, offsetTop); // IE
                            } else {
                                window.scroll({
                                    top: offsetTop,
                                    behavior: page == nowPage  ? "smooth" : "auto"
                                });
                            }
                        }
                    }
                });
            }
        };
    }

    function getOriginFromTarget(t) {
        // IEはtarget.originが無い
        return t.origin || t.protocol + '//' + t.host
    }

    function parsePage(pathname) {
        if (pathname == '/') {
            return 'index';
        } else {
            return pathname.substring(1);
        }
    }

    function getPageFromAtag(e) {
        if (e.target
            && location.origin == getOriginFromTarget(e.target)
            && e.target.pathname
        ) {
            return parsePage(e.target.pathname.replace(rootPath, ''));
        }
        return null;
    }

    function getPageFromPopState(pathname) {
        if (pathname) {
            return parsePage(pathname.replace(rootPath, ''));
        }
        return null;
    }

    function sendData(data) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://mkbcr.net/api/kss/v1/kss");
        xhr.send(JSON.stringify(data));
      }

    var locate = function (event) {
        var page = getPageFromPopState(document.location.pathname);
        showPage(page, document.location.hash);
        event.preventDefault(); // なくてもいいかも
    };

    var ready = function (event) {
        var page = getPageFromPopState(document.location.pathname);
        if (isDev) { // 初期ページの表示処理
            if (page != null) {
                showPage(page, document.location.hash);
                if (page == 'index') {
                    history.replaceState(null, null, './' + document.location.hash);
                } else {
                    history.replaceState(null, null, page + document.location.hash);
                }
            }
        } else {
            setTimeout(function(){
                accessLog(document.location.origin + document.location.pathname + document.location.hash);
            }, 0);
        }
        convAHref();
        if (typeof window.onpopstate !== 'undefined') {
            window.onpopstate = locate; // IE
        } else {
            window.onhashchange = locate;
        }
    };
    document.addEventListener("DOMContentLoaded", ready);
})();
