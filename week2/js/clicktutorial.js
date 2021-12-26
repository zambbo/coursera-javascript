function openParagraph(){
    let x = document.getElementsByTagName('p')[0];
    alert(x.innerHTML);
    x.className = "open";
}

function closeParagraph(){
    let x = document.getElementsByTagName('p')[0];
    alert(x.innerHTML);
    x.className = 'close';
}