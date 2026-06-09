function downloadZIP(url) {
    const filename = url.split("\/")[1];
    const downloadLink = document.createElement("a");

    downloadLink.href = url;
    downloadLink.download = filename;

    downloadLink.click();
}