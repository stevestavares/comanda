function splash() {
    $("#tela").append(
        '<div class="splash-div-header">' +
            '<img class="splash-header" src="images/splash-header.png" />' +
        '</div>' +
        '<div class="splash-div-content">' +
            '<div>' +
                '<img class="splash-content" src="images/Logomarca.png" />' +
           '</div>' +
            '<div id="splash-load">' +
                '<img class="splash-load" src="images/splash-load1.png" />' +
                '<img class="splash-load" src="images/splash-load2.png" />' +
                '<img class="splash-load" src="images/splash-load3.png" />' +
            '</div>' +
        '</div>' +
        '<div class="splash-div-footer">' +
            '<img class="splash-footer" src="images/splash-footer.png" />' +
        '</div>');
};
