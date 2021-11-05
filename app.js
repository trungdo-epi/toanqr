let form = document.getElementById("form-qr");
form.addEventListener("keydown", (event) => {
    let key = event.key;

    if (key == "Enter") {
        let activeElm = document.activeElement
        let content = document.getElementById("input-transfer-content");
        let amount = document.getElementById("input-transfer-amount");
        if (activeElm == content && content.value != "" && amount.value == "") {
            amount.focus();
            event.preventDefault();
        }
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let bankName = "Vietcombank";
    let bankNumber = "1111514131";
    let accountName = "Vũ Đình Toàn";
    let content = document.getElementById("input-transfer-content").value;
    let amount = document.getElementById("input-transfer-amount").value;
    if (content != "" && amount != "") {
        let img = document.getElementById("qr-image");
        let imageUrl = `https://api.vietqr.io/${bankName}/${bankNumber}/${amount}/${encodeURI(content)}/vietqr_net_2.jpg?accountName=${encodeURI(accountName)}`;
        img.src = imageUrl;
    }
});