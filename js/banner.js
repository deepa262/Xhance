 $(function(){
 
  $("#pi").on("click", function(){
    console.log("pi button clicked");
          window.open("https://www.xhance.com/files/XHANCE_Patient_Information.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('https://www.xhance.com/files/XHANCE_Patient_Information.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");

  });
     
      $("#ppi").on("click", function(){
    console.log("pi button clicked");
              window.open("https://www.xhance.com/files/XHANCE_Instructions_for_Use.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('https://www.xhance.com/files/XHANCE_Instructions_for_Use.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");

  });
       $("#pi1").on("click", function(){
    console.log("pi button clicked");
          window.open("https://www.xhance.com/files/XHANCE_Patient_Information.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('https://www.xhance.com/files/XHANCE_Patient_Information.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");

  });
     
      $("#ppi1").on("click", function(){
    console.log("pi button clicked");
              window.open("https://www.xhance.com/files/XHANCE_Instructions_for_Use.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('https://www.xhance.com/files/XHANCE_Instructions_for_Use.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");

  });
            $("#BottomBar").on("click", function BorderAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
   .to(BottomBar1, 1, { width:1080,height:60,top:0,zIndex:8,opacity:1,marginTop:132})
    .to(isi, 1, { width: 1080,height:1400,top:0,zIndex:7,marginTop:172}, '-=1')
      .to(BottomBar, 1, { opacity:0}, '-=1')
  });
     $("#BottomBar1").on("click", function Border1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .to(BottomBar1 , 1, {top:1218})
 .to(isi, 1, { width: 1080,height:564,top:1210,zIndex:9,marginTop:132}, '-=1')
  .to(BottomBar , 1, { width: 1080,height:40,top:1218,zIndex:10,opacity:1}, '-=1') 
  });

  var pressTimer;

  $("#overall_mask").on("touchend", function(){
    clearTimeout(pressTimer);
    return false;
  }).on("touchstart", function(){
    pressTimer = window.setTimeout(function(){
      WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideActivateLauncherPanel('100', '700')");
    },1000)
    return false;
  });

});

function startScrolling(waitTime){
  delayScrollingStart = waitTime;
  setTimeout(function autoScroll(delayScrollingStart){
    ascroll = setInterval(function(){
      elem = $("#isi")[0];
      if (elem.scrollTop != 3200){
        elem.scrollTop += 1;
      }
    }, 28);
  }, delayScrollingStart);
}

// Begin non-ISI animation code

function headline1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(headline2, 1, {opacity:0})   
}
function headline1disAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .to(headline1, 1, {opacity:0})
     .to(headline2, 1, {opacity:0}, '-=1')
}
function headline2Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(headline5, 1, {left:1080,opacity:0}, '-=0.5')
   .from(headline3, 1, {opacity:0})   
     .from(headline33, 1, {opacity:0}, '-=1')   
    
}
function headline2disAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
     .to(headline3, 1, {opacity:0})
}
function headline3Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(headline7, 1, {left:-1080,opacity:0})          
}
function headline3disAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
     .to(headline7, 1, {opacity:0})
    .to(headline5, 1, {left:1080,opacity:0}, '-=1')
}
function headline4Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(headline8, 1, {opacity:0})   
    .from(headline10, 1, {opacity:0}, '-=1')   
}
function headline4disAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
     .to(headline8, 1, {opacity:0})
     .to(headline33, 1, {opacity:0}, '-=1')   
}
function headline5Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
   .from(headline11, 1, {opacity:0})   
    .from(headline12, 1, {opacity:0}, '+=0.5')   
}
function animate(){
   startScrolling(2000);
    headline1Appear(1);
 headline1disAppear(5);
    headline2Appear(6);
    headline2disAppear(9);
       headline3Appear(10);
     headline3disAppear(13);
    headline4Appear(14);
    headline4disAppear(16);
    headline5Appear(18);
}


$(document).on("touchstart", "#isi", function(){
 clearInterval(ascroll);
 WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(15)"); 
});

function onWallboardIdleSlideDisplay(){
  console.log("onWallboardIdleSlideDisplay");
}

function onWallboardIdleSlideTimerStart(){
  console.log("onWallboardIdleSlideTimerStart");
}

function onWallboardIdleSlideTimerStop(){
  clearInterval(ascroll);
}

animate();
