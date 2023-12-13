questions = document.getElementsByClassName("formulation clearfix");
const rotate = (event)=>{
    var img = event.target||event.srcElement;
    var parent = img.parentElement;
    img.parentElement.removeChild(img);
    img.rot+=90
    img.rot=img.rot%360;
    img.style.transform=`rotate(${img.rot}deg)`;
    var newImg = parent.appendChild(img);
    newImg.addEventListener("click",rotate);
};
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
        graderView.querySelector('img').style.height = '300px';
        graderView.querySelector('img').style.width = 'auto';
        if (link.includes(".png") || link.includes(".jpg")||link.includes('jpeg')) {
            image.style.height = "auto";
            image.src = link;
            image.style.width='400px';
            image.style.height='auto';
            var newImg = graderView.appendChild(image);
            var maxHW=Math.max(newImg.height,newImg.width);
            if(newImg.height<newImg.width){
                var margins=(maxHW-newImg.height)/2;
                newImg.style.marginTop=margins+'px';
                newImg.style.marginBottom=margins+'px';
            }else{
                var margins=(maxHW-newImg.width)/2;
                newImg.style.marginLeft=margins+'px';
                newImg.style.marginRight=margins+'px';
            }
            newImg.rot=0;
            newImg.addEventListener("click",rotate);
        } else if (link.includes('.pdf')) {
            var pdf = document.createElement("iframe");
            pdf.src = link;
            pdf.title = "webviewer";
            pdf.frameBorder = 0;
            pdf.width = 500;
            pdf.height = 600;
            graderView.appendChild(pdf);
        }
        if (graderView.querySelector('br') != null) {
            graderView.removeChild(graderView.querySelector('br'));
        }
    }
}