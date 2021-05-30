
(function(){
    var rootPath = '/Tonyu1-wiki';

    function showPage(page) {
        var pages = document.getElementsByClassName('pagediv');
        for (var i = 0; i < pages.length; i++) {
            var p = pages[i];
            if (p.id == page) {
                if (p != null) {
                    p.style.display = 'block';
                    document.title = p.title;
                    loadImg(p);
                } else {
                    var notFoundPageDiv = document.getElementById('a-notfound');
                    notFoundPageDiv.style.display = 'block';
                }
            } else {
                p.style.display = 'none';
            }
        }
    }

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

    function convAHref() {
        var atags = document.getElementsByTagName('a');
        for (var i = 0; i < atags.length; i++) {
            var elem = atags[i];
            var src = elem.getAttribute('href');
            if (src) {
                elem.addEventListener('click', function(e) {
                    var page = getPageFromAtag(e);
                    if (page) {
                        if (!page.match(/[\.\/]+/)) { // 「.」や「/」が付いてない時
                            showPage(page);
                        }
                        // console.log(page);
                        if (page == 'index') {
                            history.pushState(null, null, './');
                        } else if (page.indexOf('/') != -1) {
                            return;
                        } else {
                            history.pushState(null, null, page);
                        }
                        window.scrollBy(0, -9999999);
                        e.preventDefault();
                    }
                });
            }
        };
    }

    function getOriginFromTarget(t) {
        // IEはtarget.originが無い
        return t.origin || t.protocol + '//' + t.host
    }

    function getPageFromAtag(e) {
        if (e.target) {
            if (location.origin == getOriginFromTarget(e.target)) {
                if (e.target.pathname) {
                    var page = e.target.pathname.replace(rootPath, '');
                    if (page == '/') {
                        page = 'index';
                    } else {
                        page = page.substring(1);
                    }
                    return page;
                }
            }
        }
        return null;
    }

    function getPageFromPopState(pathname) {
        if (pathname) {
            var page = pathname.replace(rootPath, '');
            if (page == '/') {
                page = 'index';
            } else {
                page = page.substring(1);
            }
            return page;
        }
        return null;
    }

    function getPageFromOnload() {
        var prm = {};
        location.search.substring(1).split('&').forEach(function(v) {
            var s = v.split('=');
            prm[s[0]] = s[1];
        });
        var page = prm['pg'];
        if (page != null) {
            if (page == '/') {
                page = 'index';
            } else {
                page = page.substring(1);
            }
        }
        return page;
    }

    var locate = function (event) {
        // console.log('locate location: ' + document.location + ', state: ' + JSON.stringify(event.state));
        // console.log(event);
        var page = getPageFromPopState(document.location.pathname);
        showPage(page);
        // history.pushState(null, null, page);
        event.preventDefault();
    };

    var ready = function (event) {
        // console.log('onload location: ' + document.location + ', state: ' + JSON.stringify(event.state));
        var page = getPageFromOnload();
        if (page != null) {
            showPage(page);
            if (page == 'index') {
                history.replaceState(null, null, './');
            } else {
                history.replaceState(null, null, page);
            }
        }
        convAHref();
        if (typeof window.onpopstate !== 'undefined') {
            window.onpopstate = locate;
        } else {
            window.onhashchange = locate;
        }
    };
    document.addEventListener("DOMContentLoaded", ready);
    // window.onload = load;
})();
