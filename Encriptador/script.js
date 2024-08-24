document.getElementById("encryptBtn").onclick = function() {
    const inputText = document.getElementById("inputText").value;
    const encryptedText = encryptText(inputText);
    document.getElementById("outputText").value = encryptedText;
}

document.getElementById("decryptBtn").onclick = function() {
    const inputText = document.getElementById("inputText").value;
    const decryptedText = decryptText(inputText);
    document.getElementById("outputText").value = decryptedText;
}

document.getElementById("copyBtn").onclick = function() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function encryptText(text) {
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    return decryptedText;
}
