function showPage(page, isNotScroll) {
    if (isNotScroll) {
        var pages = document.getElementsByClassName('pagediv');
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.display = 'none';
        }
        var showPageDiv = document.getElementById(page);
        showPageDiv.style.display = 'block';
        loadImg(showPageDiv);
    } else {
        setTimeout(function () { window.scrollBy(0, -99999999); }, 0);
    }
}
function loadImg(showPageDiv) {
    var imgs = showPageDiv.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
        var elem = imgs[i];
        var src = elem.getAttribute('src-t');
        if (!src) break;
        elem.setAttribute('src', src);
    }
}

function catHashTag() {
    var l = new String(document.location);
    var p = l.search('#!');
    var page = "index";
    if (p != -1) {
        page = l.substring(p + 2, l.length);
        var p2 = page.search('#');
        if (p2 != -1) {
            page = page.substring(0, p2);
        }
    }
    console.log(page);
    return page;
}

window.onpopstate = function (event) {
    // console.log('location: ' + document.location + ', state: ' + JSON.stringify(event.state));
    var page = catHashTag();
    showPage(page, true);
};

window.onload = function (event) {
    // console.log('location: ' + document.location + ', state: ' + JSON.stringify(event.state));
    var page = catHashTag();
    showPage(page, true);
};
