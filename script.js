var x = document.getElementById("one");
var y = document.getElementById("two");
var z = document.getElementById("three");
var w = document.getElementById("four");

String[] str = {x, y, z, w};
int count = 0;
function playAudio()
 {
     str[count].play();
}

function pauseAudio() {
    str[count].pause();
}
function forwardAudio()
{
    if(count>=0 && count<arr.count-1)
    {
    count++;
    str[count].play();
    }
}
function backwardAudio()
{
    if(count>=0 && count<arr.count-1)
    {
    count--;
    str[count].play();
    }
}