function generateQR() {
    $('#show-gen-qr').show();
    $('#show-scan-qr').hide();
    $('#qrcode').empty();
    const address = $('#address').val();
    const policyid = $('#policyid').val();
    console.log(typeof address);
    console.log(typeof policyid);

    if ((address == "")||(policyid == "")) {alert("Заполните поля!"); return}
    const qrtext = JSON.stringify({
        address: address,
        policyid: policyid
    });
    
    new QRious({element: document.getElementById("qrcode"), size: 256, level: 'L', value: qrtext});
    console.log(qrtext);
    $('#show-gen-qr').show();
}