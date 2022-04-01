var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.formURL("BirthdayImage.jpg", function (Img){
    block_imag_object = Img;

    block_imag_object.scalToWidth(700);
    block_imag_object.scalToHeight(510);
    block_imag_object.set({
    top:0,
    left:0
    });
    canvas.add(block_imag_object);
    });
	
}

function playSound(){
	x.play();
}
