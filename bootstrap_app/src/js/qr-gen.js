function generateQR(){
    $('#show-scan-qr').hide();
    $('#show-gen-qr').show();
    $('#qrcode').empty();
    const addr = $('#addr').val();
    const polid = $('#polid').val();
    console.log(typeof addr);
    console.log(typeof polid);
    if ((addr == "")||(polid == "")) {alert("Заполните поля!"); return}
    const qrtext = JSON.stringify({
        adress: addr,
        policyid: polid
    });
    new QRious({element: document.getElementById("qrcode"), size: 256, level: 'L', value: qrtext});
    console.log(qrtext);
    $('#show-gen-qr').show();
}