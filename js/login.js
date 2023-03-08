$(document).ready(function() {
    var EMPTY = "";
    $('#msgLogin').hide();
    $('#msgPassword').hide();
    $(document).on("click", "#loginButton", function() {
        var account = $('#account').val();
        var password = $('#password').val();
        if (account === EMPTY || account.trim() === EMPTY) {
            $('#msgLogin').find("span").text("Login IDを入力してください。");
            $('#msgLogin').show();

        }

        if (password === EMPTY || password.trim() === EMPTY) {
            $('#msgPassword').find("span").text("Passwordを入力してください。");
            $('#msgPassword').show();
        }

        if (account === "upr" && password === "p@ssw0rd") {
            window.location.href = '../dasboardUser.html';

        } else {
            if ((account !== EMPTY && account.trim() !== EMPTY) || (password !== EMPTY && password.trim() !== EMPTY)) {
                $('#msgLogin').hide();
                $('#msgPassword').hide();
                $('#msgLogin').find("span").text("ログインIDまたはパスワードが間違っています。");
                $('#msgLogin').show();
            }
        }
    });





});