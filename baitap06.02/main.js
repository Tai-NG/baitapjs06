function tinhTong() {
    var txtSoX = parseInt(document.getElementById("txtSoX").value);
    var txtSoN = parseInt(document.getElementById("txtSoN").value);
    var tong = 0;
    for (var i = 1; i <= txtSoN; i++) {
        tong += Math.pow(txtSoX, i);
    }
    console.log(tong);

    document.getElementById("cardFooter").innerHTML = "Kết quả là: " + tong;
}