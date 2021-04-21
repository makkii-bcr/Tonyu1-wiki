function showPage(page, isNotScroll) {
    var pages = document.getElementsByClassName('pagediv');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    document.getElementById(page).style.display = 'block';
    if (!isNotScroll) {
        window.scrollBy(0, -99999999);
    }
}

function catHashTag() {
    var l = new String(document.location);
    var p = l.search('#!');
    var page = "index";
    if (p != -1) {
        page = l.substring(l.search('#!') + 2, l.length);
    }
    // console.log(page);
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
