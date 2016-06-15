var songs;
var audiolist =["1" ,"2" ,"3" ,"4" , "5", "6"];
var value = 0;
var typ = ".mp3"

function music()
{
    songs = new Audio();
    songs.src=audiolist[0]+typ;
    this.play = function(){songs.play()};
    this.stop = function(){ songs.pause();songs.load();};
    this.song = function(song){songs.src = song};
    this.pause = function(){songs.pause()};
}

var x = new music();

$("#pause").click(function()
{
    x.pause();
});

$("#play").on("click",function()
{
    if(songs.src!="")
        try
    {
     x.play();

     $("#audioname").html("Playlist Number: " +audiolist[value]);

    }
 catch(err)
 {
    console.log("songs not found");
 }
});

$("#piece").click(function()
{
    x.song(audiolist[0]+typ);
    value = 0;
    x.play();
    $("#audioname").html("Playlist Number: " +audiolist[value]);
});

$("#what").click(function()
{
    x.song(audiolist[1]+typ);
    value = 1;
    x.play();
    $("#audioname").html("Playlist Number: "+audiolist[value]);
});

$("#wild").click(function()
{
    x.song(audiolist[2]+typ);
    value  = 2;
    x.play();
    $("#audioname").html("Playlist Number: " +audiolist[value]);
});

$("#break").click(function()
{
    x.song(audiolist[3]+typ);
    value  = 3;
    x.play();
    $("#audioname").html("Playlist Number: " +audiolist[value]);
});

$("#two").click(function()
{
    x.song(audiolist[4]+typ);
    value  = 4;
    x.play();
    $("#audioname").html("Playlist Number: " +audiolist[value]);
});

$("#december").click(function()
{
    x.song(audiolist[5]+typ);
    value  = 5;
    x.play();
    $("#audioname").html("Playlist Number:  " +audiolist[value]);
});


$("#stop").click(function()
{
    x.stop();
    songs.currentTime = 0;
    $("#audioname").html("");

});

$("#forward").click(function()
{
    value = (value+1)%audiolist.length;

    if(value>5)

    {
        songs.src = audiolist[value];
        x.play();
        $("#audioname").html("Playlist Number: "+newAdded[value-6]);

    }

    else
    {
        songs.src=audiolist[value]+typ;
        x.play();
        $("#audioname").html("Playlist Number: "+audiolist[value]);
    }
});

$("#backward").click(function()
{
    value = (value-1)%audiolist.length;
        songs.src=audiolist[value]+typ;
        x.play();
        $("#audioname").html("Playlist Number: "+audiolist[value]);
    
});


$("#addToTrack").click(function()
{
  x.stop();
  var path = document.getElementById("path").value;
  if(path =="")
    return;

  console.log(path);
  audiolist.push(path);
  songs.src = audiolist[audiolist.length-1];
  console.log(audiolist);
  value = audiolist.length-1;
  x.play();
  var song = document.getElementById("songname").value;
  if(song == "")
    song = "Undefined";
  
});