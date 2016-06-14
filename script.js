function playVideo(autoplay, loop) {
   var theSelect = document.getElementById("jukeVids");
   var theArgs;
   if(autoplay == 1) {
      theArgs = "&amp;autoplay=1";
   }
   if(loop == 1) {
      theArgs += "&amp;loop=1";
   }
 
   for(var i = 0; i < theSelect.length; i++) {
      if(theSelect.options[i].selected) {
         var so = new SWFObject(theSelect.options[i].value + theArgs, "mymovie", "425", "350", "8", "#fff");
         so.write("jukePlayer");
         break;
      }
   }
}