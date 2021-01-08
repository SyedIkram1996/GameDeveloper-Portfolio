//the modal
var modal = document.getElementById("myModal");

//the image that showed on model
var modalImg = document.getElementById("modal-image");

//the image we click on
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
// var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");
var img11 = document.getElementById("myImg11"); 
var img12 = document.getElementById("myImg12");
var img13 = document.getElementById("myImg13"); 


//the image we want to show on modal
var imgfinal = document.getElementById("myfinalImg");
var imgfinal2 = document.getElementById("myfinalImg2");
var imgfinal3 = document.getElementById("myfinalImg3");
var imgfinal4 = document.getElementById("myfinalImg4");
var imgfinal5 = document.getElementById("myfinalImg5");
var imgfinal6 = document.getElementById("myfinalImg6");
var imgfinal7 = document.getElementById("myfinalImg7");
var imgfinal8 = document.getElementById("myfinalImg8");
// var imgfinal9 = document.getElementById("myfinalImg9");
var imgfinal10 = document.getElementById("myfinalImg10");
var imgfinal11 = document.getElementById("myfinalImg11");
var imgfinal12 = document.getElementById("myfinalImg12");
var imgfinal13 = document.getElementById("myfinalImg13");

//caption text
var captionText = document.getElementById("caption");

//close modal
var span = document.getElementsByClassName("close")[0];


img.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal2.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal3.src;
    captionText.innerHTML = this.alt;
}

img4.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal4.src;
    captionText.innerHTML = this.alt;
}

img5.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal5.src;
    captionText.innerHTML = this.alt;
}

img6.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal6.src;
    captionText.innerHTML = this.alt;
}

img7.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal7.src;
    captionText.innerHTML = this.alt;
}

img8.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal8.src;
    captionText.innerHTML = this.alt;
}

// img9.onclick = function()
// {
//     modal.style.display="block";
//     modalImg.src = imgfinal9.src;
//     captionText.innerHTML = this.alt;
// }

img10.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal10.src;
    captionText.innerHTML = this.alt;
}

img11.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal11.src;
    captionText.innerHTML = this.alt;
}

img12.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal12.src;
    captionText.innerHTML = this.alt;
}

img13.onclick = function()
{
    modal.style.display="block";
    modalImg.src = imgfinal13.src;
    captionText.innerHTML = this.alt;
}



span.onclick = function()
{
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}