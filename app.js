let form = document.getElementById("form-qr");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let accountName = "Vũ Đình Toàn";
    let content = document.getElementById("input-transfer-content").value;
    let amount = document.getElementById("input-transfer-amount").value;
    let bankName = "Vietcombank";
    let bankNumber = "113366668888";
    let img = document.getElementById("qr-image");
    let imageUrl = `https://api.vietqr.io/${bankName}/${bankNumber}/${amount}/${content}/vietqr_net_2.jpg?accountName=${accountName}`;
    img.src = imageUrl;
});