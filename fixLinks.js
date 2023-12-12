questions = document.getElementsByClassName("formulation clearfix");
for (var quest of questions) {
    if (quest.querySelector(".attachments") != null) {
        var img = quest.querySelector(".attachments").querySelector("a");
        var link = img.href.replace("?forcedownload=1", "");
        var graderView = quest.parentElement.querySelector(".graderinfo").querySelector("img").parentElement;
        var image = graderView.querySelector("img").cloneNode(true);
        graderView.querySelector('img').style.height = 300;
        graderView.querySelector('img').style.width = 'auto';
        if (link.includes(".png") || link.includes(".jpg")) {
            image.style.height = "auto";
            image.src = link;
            graderView.appendChild(image);
        } else if (link.includes('.pdf')) {
            var pdf = document.createElement("iframe");
            pdf.src = link;
            pdf.title = "webviewer";
            pdf.frameBorder = 0;
            pdf.width = 200;
            pdf.height = 300;
            graderView.appendChild(pdf);
        }
        if (graderView.querySelector('br') != null) {
            graderView.removeChild(graderView.querySelector('br'));
        }
    }
}
