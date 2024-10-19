function enlargeImage(y) {
    y.style.height = "85px";
    y.style.width = "105px";
    y.style.borderColor = "linear-gradient(to right, red , yellow)";
    y.firstChild.style.size = "30px";
  }
function normalImg(y){
    y.style.height = "80px";
    y.style.width = "100px";
    y.firstChild.style.size = "25px";
}
document.addEventListener('keydown',function(e){
    if(e.key === 'a')
    {
        var change = document.getElementById('block1');
        enlargeImage(block1);
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio1");
        x.play();
    }
    if(e.key === 's')
    {
        var change = document.getElementById('block2');
        enlargeImage(block2);
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio2");
        x.play();
    }
    if(e.key === 'd')
    {
        var change = document.getElementById('block3');
        enlargeImage(block3);
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio3");
        x.play();
    }
    if(e.key === 'f')
    {
        var change = document.getElementById('block4');
        enlargeImage(block4);
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio4");
        x.play();
    }
    if(e.key === 'g')
    {
        var change = document.getElementById('block5');
        enlargeImage(block5);
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio5");
        x.play();
    }
    if(e.key === 'h')
    {
        var change = document.getElementById('block6');
        enlargeImage(block6);
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio6");
        x.play();
    }
    if(e.key === 'j')
    {
        var change = document.getElementById('block7');
        enlargeImage(block7);
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio7");
        x.play();
    }
    if(e.key === 'k')
    {
        var change = document.getElementById('block8');
        enlargeImage(block8);
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio8");
        x.play();
    }
    if(e.key === 'l')
    {
        var change = document.getElementById('block9');
        enlargeImage(block9);
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio9");
        x.play();
    }
})
document.addEventListener('keypress',function(e){
    if(e.key === 'a')
    {
        var change = document.getElementById('block1');
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio1");
        x.play();
    }
    if(e.key === 's')
    {
        var change = document.getElementById('block2');
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio2");
        x.play();
    }
    if(e.key === 'd')
    {
        var change = document.getElementById('block3');
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio3");
        x.play();
    }
    if(e.key === 'f')
    {
        var change = document.getElementById('block4');
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio4");
        x.play();
    }
    if(e.key === 'g')
    {
        var change = document.getElementById('block5');
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio5");
        x.play();
    }
    if(e.key === 'h')
    {
        var change = document.getElementById('block6');
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio6");
        x.play();
    }
    if(e.key === 'j')
    {
        var change = document.getElementById('block7');
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio7");
        x.play();
    }
    if(e.key === 'k')
    {
        var change = document.getElementById('block8');
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio8");
        x.play();
    }
    if(e.key === 'l')
    {
        var change = document.getElementById('block9');
        change.style.borderColor   = "blue";
        var x=document.getElementById("audio9");
        x.play();
    }
})
document.addEventListener('keyup',function(e){
    if(e.key === 'a')
    {
        var change = document.getElementById('block1');
        change.style.borderColor   = "black";
        normalImg(block1);
    }
    if(e.key === 's')
    {
        var change = document.getElementById('block2');
        change.style.borderColor   = "black";
        normalImg(block2);
    }
    if(e.key === 'd')
    {
        var change = document.getElementById('block3');
        change.style.borderColor   = "black";
        normalImg(block3);
    }
    if(e.key === 'f')
    {
        var change = document.getElementById('block4');
        change.style.borderColor   = "black";
        normalImg(block4);
    }
    if(e.key === 'g')
    {
        var change = document.getElementById('block5');
        change.style.borderColor   = "black";
        normalImg(block5);
    }
    if(e.key === 'h')
    {
        var change = document.getElementById('block6');
        change.style.borderColor   = "black";
        normalImg(block6);
    }
    if(e.key === 'j')
    {
        var change = document.getElementById('block7');
        change.style.borderColor   = "black";
        normalImg(block7);
    }
    if(e.key === 'k')
    {
        var change = document.getElementById('block8');
        change.style.borderColor   = "black";
        normalImg(block8);
    }
    if(e.key === 'l')
    {
        var change = document.getElementById('block9');
        change.style.borderColor   = "black";
        normalImg(block9);
    }
})