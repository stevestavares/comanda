function login() {
    $("#tela").empty();
    $("#tela").append(
        '<div class="login" id="login">' +
            '<div class="login-header">' +
                '<img class="login-header-logo" src="images/login/login-logo.png" />' +
            '</div>' +
            '<div class="login-content">' +
                '<div class="login-content-user">' +
                    '<div class="login-password-content">' +
                        '<img class="login-content-image-user" src="images/login/login-user.png" />' +
                        '<input type="text" class="login-password-input" id="login-user" placeholder="Usuário" value="Walter"/>' +
                    '</div>' +
                '</div>' +
            '<div class="login-content-password">' +
                '<div class="login-password-content">' +
                    '<img class="login-content-image-user" src="images/login/login-password.png" />' +
                    '<input type="password" class="login-password-input" id="login-password" placeholder="Senha" value="1"/>' +
                '</div>' +
            '</div>' +
        '</div>' +
            '<div class="login-footer">' +
                '<div class="login-footer-botoes">' +
                    '<p align="right">' +
                        '<img id="imgLogin" class="login-img-button" src="images/login/login-confirm.png" />' +
                        '<img id="imgCancela" class="login-img-button" src="images/login/login-cancel.png" />' +
                    '</p>' +
                '</div>' +
            '</div>' +
        '</div>');

      registraEventosLogin();

}

function registraEventosLogin() {
    $("#imgLogin").click(function () {
        autentica();
    });
    $("#imgCancela").click(function () {
    });
}

function autentica() {
        principal();
}