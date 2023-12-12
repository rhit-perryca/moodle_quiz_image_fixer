questions = document.getElementsByClassName("formulation clearfix");
var doRotation = true;
var rotateAmmount = -90;
for (var quest of questions) {
    //Check if image question
    if (quest.querySelector(".attachments") != null) {
        //grab image and link
        var img = quest.querySelector(".attachments").querySelector("a");
        var link = img.href.replace("?forcedownload=1", "");
        
        //grab container of answer image
        var graderView = quest.parentElement.querySelector(".graderinfo").querySelector("img").parentElement;
        var image = graderView.querySelector("img").cloneNode(true);  
        //style answer image
        graderView.querySelector('img').style.height = 500;
        graderView.querySelector('img').style.width = 'auto';
        if (link.includes(".png") || link.includes(".jpg")) {
            image.style.height = "auto";
            image.src = link;
            if(doRotation)
                image.style.transform = `rotate(${rotateAmmount}deg)`;
           
            var newImage = graderView.appendChild(image);
            newImage.style.width = 'auto';
            newImage.style.height = '500px';
            var xCenter = newImage.offsetWidth / 2;
            var yCenter = newImage.offsetHeight / 2;
            newImage.style.transformOrigin = `${yCenter}px ${xCenter}px`;
            const _ = newImage.offsetheight;
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
        const _ = graderView.offsetheight;
    }
}
