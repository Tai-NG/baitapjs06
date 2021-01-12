document.getElementById("taoTheDiv").addEventListener("click", function () {
    // var n = 5;

    console.log(rs);
    for (var i = 1; i <= 5; i++) {
        if (i % 2 == 0) {
            console.log("123");
            var rs = document.createElement("div");
            rs.style.height = "30px"
            document.getElementById("footer").appendChild(rs);
            rs.style.backgroundColor = "red";

        } else {
            console.log("456");
            var rs = document.createElement("div");
            rs.style.height = "30px"
            document.getElementById("footer").appendChild(rs);

            rs.style.backgroundColor = "green";

        }
    }
});