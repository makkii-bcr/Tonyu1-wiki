
(function () {
    var rootPath = '/Tonyu1-wiki';

    /** 該当ページを表示 */
    function showPage(page) {
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
                    var page = getPageFromAtag(e);
                    var isHashUrl = e.target.hash;
                    if (page && !page.match(/[\.\/]+/)) { // 「.」や「/」が付いてない時
                        showPage(page);
                        // console.log(page);
                        if (!isHashUrl) { // URLに#が無い時
                            if (page == 'index') {
                                history.pushState(null, null, './');
                            } else if (page.indexOf('/') != -1) {
                                return;
                            } else {
                                history.pushState(null, null, page);
                            }
                            e.preventDefault();
                            window.scrollBy(0, -9999999);
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

    var locate = function (event) {
        var page = getPageFromPopState(document.location.pathname);
        showPage(page);
        event.preventDefault();
    };

    var ready = function (event) {
        // var page = getPageFromPopState(document.location.pathname);
        // if (page != null) {
        //     showPage(page);
        //     if (page == 'index') {
        //         history.replaceState(null, null, './');
        //     } else {
        //         history.replaceState(null, null, page);
        //     }
        // }
        convAHref();
        if (typeof window.onpopstate !== 'undefined') {
            window.onpopstate = locate;
        } else {
            window.onhashchange = locate;
        }
    };
    document.addEventListener("DOMContentLoaded", ready);
})();
