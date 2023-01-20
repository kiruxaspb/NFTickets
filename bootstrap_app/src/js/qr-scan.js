function ScanQR() {
    $('#show-gen-qr').hide();
    $('#show-scan-qr').show();

    function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code scanned = ${decodedText}`, decodedResult);
        const obj = JSON.parse(decodedText);
        console.log(obj);
        $("#address").val(obj.address);
        $("#policyid").val(obj.policyid);
        checkTicket(obj.address, obj.policyid);
        // After scanning, the input data is checked immediately
    }

    const html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 350 }
    );
    html5QrcodeScanner.render(onScanSuccess);
}
