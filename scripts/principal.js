function principal() {
    $("#tela").empty();
    $("#menu").empty();
    constroiViewMenu();
    configuraMenuPrincipal();
    constroiViewPrincipal();
    configuraPrincipal();
    registraEventosPrincipal()
}

function configuraMenuPrincipal() {
    $("#spanVoltar").hide();
    $("#spanTitulo").text("Menu Principal");
}

function constroiViewPrincipal() {
    $("#tela").append(
        '<div class="principal">' +
            '<div class="principal-header">' +
                '<div class="principal-content-grid">' +
                    '<div class="principal-content-grid-linha1">' +
                        '<p align="center">' +
                            '<a id="btnMesa" hidden="hidden" href="#">' +
                                '<img class="principal-img-button-vertical" src="images/principal/mesa.png" />' +
                            '</a>' +
                            '<a id="btnComanda" hidden="hidden" href="#">' +
                                '<img class="principal-img-button-vertical" src="images/principal/comanda.png" />' +
                            '</a>' +
                            '<a id="btnSomenteMesa" hidden="hidden" href="#">' +
                                '<img class="principal-img-button-horizontal-mesacomanda" src="images/principal/smesa.png" />' +
                            '</a>' +
                            '<a id="btnSomenteComanda" hidden="hidden" href="#">' +
                                '<img class="principal-img-button-horizontal-mesacomanda" src="images/principal/scomanda.png" />' +
                            '</a>' +
                        '</p>' +
                        '<p align="center">' +
                            '<a id="btnListaProduto" href="#">' +
                                '<img class="principal-img-button-horizontal" src="images/principal/produtos.png" />' +
                            '</a>' +
                        '</p>' +
                    '</div>' +
                '</div>' +

            '</div>' +
        '</div>'

        );
};

function registraEventosPrincipal() {
    $("#btnMesa").click(function () {
        exibeMesas();
    });
    $("#btnComanda").click(function () {
    });
    $("#btnSomenteMesa").click(function () {
        exibeMesas();
    });
    $("#btnSomenteComanda").click(function () {
    });
    $("#btnListaProduto").click(function () {
        exibeViewGrupos();
    });
    $("#btnProduto").click(function () {
        produtos();
    });
    $("#btnCliente").click(function () {
        exibeViewCliente();
    })
    $("#btnVoltarPrincipal").click(function () {
        principal();
    });

}

function configuraPrincipal() {
                $("#btnMesa").show();
                $("#btnComanda").show();

}