import * as QrScanner from "../../node_modules/qr-scanner/qr-scanner";
document.querySelector('#qr-scan-button').addEventListener('click', scanQR)
function scanQR(){
    /*let html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 300 });
    html5QrcodeScanner.render(onScanSuccess);*/
    const qrScanner = new QrScanner($('#show-scan-qr2'), result => console.log('decoded qr code:', result));
    qrScanner.start();
    $('#show-scan-qr').show();
    console.log("scan")
}
/*function onScanSuccess(decodedText, decodedResult) {
    console.log(decodedText);
    const obj = JSON.parse(decodedText);
    console.log(typeof obj.adress);
    console.log("qrcodeResult");
    $('#addr').val(obj.adress);
    $('#polid').val(obj.policyid);
}*/