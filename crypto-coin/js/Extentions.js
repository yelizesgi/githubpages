function EncryptStringAES(text) {
    if (text != null) {
        var key = CryptoJS.enc.Utf8.parse('coinranking30e252f11e6a42ab9c9cce0cf7a8eaa9e5a75a462e1f40b9');
        var iv = CryptoJS.enc.Utf8.parse('coinranking30e252f11e6a42ab9c9cce0cf7a8eaa9e5a75a462e1f40b9');

        var encryptedstr = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(text), key,
            {
                keySize: 128,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return encryptedstr;
    }
    else {
        return "";
    }

}

function DecryptStringAES(text) {
    if (text != null) {
        var key = CryptoJS.enc.Utf8.parse('coinranking30e252f11e6a42ab9c9cce0cf7a8eaa9e5a75a462e1f40b9');
        var iv = CryptoJS.enc.Utf8.parse('coinranking30e252f11e6a42ab9c9cce0cf7a8eaa9e5a75a462e1f40b9');

        const crypted = CryptoJS.enc.Base64.parse(text);

        var decryptedstr = CryptoJS.AES.decrypt({ ciphertext: crypted }, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decryptedstr.toString(CryptoJS.enc.Utf8);
    }
    else {

    }
}

const showLoading = () => {
    loading.style.display = "block";
}

const removeLoading = () => {
    loading.style.display = "none";
}
