function upDate(previewPic){
    target = document.getElementById('image');
    target.innerHTML = previewPic.alt;

    target.style.backgroundImage = "url(" + previewPic.src + ")"
}

function unDo(){
    target = document.getElementById('image');
    target.style.backgroundImage = "url('')";
    target.innerHTML = "Hover over an image below to display here.";
}