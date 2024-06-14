document.getElementById('password-generator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var passwordLength = document.getElementById('password-length').value;
    var includeUppercase = document.getElementById('include-uppercase').checked;
    var includeNumbers = document.getElementById('include-numbers').checked;
    var includeSpecial = document.getElementById('include-special').checked;

    var password = generatePassword(passwordLength, includeUppercase, includeNumbers, includeSpecial);
    document.getElementById('generated-password').innerText = "Senha gerada: " + password;
});

function generatePassword(length, uppercase, numbers, special) {
    var charset = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numberCharset = '0123456789';
    var specialCharset = '!@#$%^&*()_+{}[]|:;"<>,.?/~';

    if (uppercase) {
        charset += uppercaseCharset;
    }
    if (numbers) {
        charset += numberCharset;
    }
    if (special) {
        charset += specialCharset;
    }

    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
