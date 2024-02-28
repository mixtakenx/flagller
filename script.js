function displayFlag() {
    var colorInput = document.getElementById("colorInput").value;
    var colors = colorInput.split(",");
    var flagHTML = "";

    for (var i = 0; i < colors.length; i++) {
        flagHTML += `<div style="width: 100%; height: 100%; background-color: ${colors[i].trim()};"></div>`;
    }

    document.getElementById("flag").innerHTML = flagHTML;
}
