function startApp() {
    $('#show-gen-qr').hide();
    $('#show-scan-qr').hide();
}

// Запуск функции при загрузке страницы
window.addEventListener('load', async function () {
    startApp();
})