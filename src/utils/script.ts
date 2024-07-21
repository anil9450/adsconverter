interface ScriptsCombProps {
  adsSlot: string;
  url: string;
  scriptName: string;
}

interface ScriptsProps {
  adsSlot: string;
  url: string;
}

const getScript1 = ({ adsSlot, url }: ScriptsProps) => {
  return `
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <div id="ad-popup">
        <style id="style"></style>
        <div class="fixed-width">
            <div id="close-popup"> 
                <span class="ourPowerOf"></span>
                <span class="close-btn">x</span>
            </div>
            <div id="magicbidpopupad">
                <script>
                    window.googletag = window.googletag || {cmd: []};
                    googletag.cmd.push(function() {
                        googletag.defineSlot('${adsSlot}', [[300, 600],[300, 250],[336, 280],[250, 250]], 'magicbidpopupad').addService(googletag.pubads());
                        googletag.pubads().set('page_url', '${url}');
                        googletag.enableServices();
                    });
                </script>
            </div>
        </div>
    </div>   
    <script>
        document.getElementById("style").innerHTML = "@media(max-width:459px){.fixed-width{width: 100%;}#close-popup{min-width: 100%;padding: 0px 10px;}}";
        document.querySelector(".fixed-width").setAttribute("style","min-width: 316px;min-height: 350px; display: none;background-color: #ffffff;border-radius: 4px; padding: 10px;");
        document.getElementById("close-popup").setAttribute("style", "width: 100%;min-width:270px;height: 40px;padding: 10px 0px;display: flex;flex-direction: row;justify-content: space-between;align-items: center;color: gray; font-family: helvetica, sans-serif; border: solid #9a9a9a 0px; border-width:0px 0px 1px 0px");
        document.getElementById("magicbidpopupad").setAttribute("style", "padding: 10px 8px 10px 8px; box-shadow: 0px 10px 20px 0px rgba(128, 128, 128, 0.645); border-radius: 2px; overflow: hidden;");
        document.querySelector(".close-btn").setAttribute("style", "width: 20px;height: 20px;background-color: #9a9a9a; color: #fff;border-radius: 2px;border: 1px solid #b1b1b1;text-align: center;cursor: pointer;");
        document.querySelector(".ourPowerOf").setAttribute("style", "color: red; cursor: pointer;");
        
        document.querySelector(".ourPowerOf").innerHTML = "Powered By <span style='color: #206cd7;'>Monetiscope</span>";
        document.querySelector(".ourPowerOf span").addEventListener("click", function() {
            window.location.href = "https://monetiscope.com";
        });
    
        var adpop = document.getElementById("ad-popup");
        window.addEventListener("scroll", function () {
            if (window.pageYOffset >= 200) {
                if (googletag.cmd.push(function() {
                    googletag.display('magicbidpopupad')
                })) {
                    document.querySelector(".fixed-width").style.display = "block";
                    if (document.getElementById("ad-popup")) { 
                        document.getElementById("ad-popup").setAttribute("style", "width: 100%;height: 100vh;position: fixed;top: 0;left: 0;display: flex;flex-direction: column;justify-content: center;align-items: center;flex-wrap: nowrap;background-color: #0000008f;box-sizing:border-box; z-index: 9999999999;");
                    }
                } else {
                    console.log("ad-not-loaded");
                    adpop.style.display = "none";
                    adpop.setAttribute("id", "ad-closed");        
                }
            }
        });
    
        document.getElementById("close-popup").addEventListener("click", function () {
            adpop.style.display = "none";
            adpop.setAttribute("id", "ad-closed");
        });
    </script>
    `;
};

const getScript2 = ({ adsSlot, url }: ScriptsProps) => {
  return `
  Head Code
  —-----------
  <script>
  window.googletag = window.googletag || {cmd: []};
  var anchorSlot;
  googletag.cmd.push(function() {
  anchorSlot = googletag.defineOutOfPageSlot('${adsSlot}',
  googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR);
  if (anchorSlot) {
  anchorSlot.addService(googletag.pubads());
  }
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
  });
  </script>`;
};

const getScript3 = ({ adsSlot, url }: ScriptsProps) => {
  return `
    <script>
  window.googletag = window.googletag || {cmd: []};
  var anchorSlot;
  googletag.cmd.push(function() {
  anchorSlot = googletag.defineOutOfPageSlot('${adsSlot}',
  googletag.enums.OutOfPageFormat.TOP_ANCHOR);
  if (anchorSlot) {
  anchorSlot.addService(googletag.pubads());
  }
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
  });
  </script>
    `;
};

const getScript4 = ({ adsSlot, url }: ScriptsProps) => {
  return `
Head code
  ======
  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
  <script>
  window.googletag = window.googletag || {cmd: []};
  var interstitialSlot;
  googletag.cmd.push(function() {
  interstitialSlot = googletag.defineOutOfPageSlot('${adsSlot}',
  googletag.enums.OutOfPageFormat.INTERSTITIAL);
  if (interstitialSlot) {
  interstitialSlot.addService(googletag.pubads());
  }
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
  });
  </script>
  Body code
  =====
  <script>
  googletag.cmd.push(function() {
  googletag.display(interstitialSlot);
  });
  </script>
    `;
};

const getScript5 = ({ adsSlot, url }: ScriptsProps) => {
  return `
 Head code
  =============
  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
  <script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
  var REFRESH_KEY = 'refresh';
  var REFRESH_VALUE = 'true';
  var mapping = googletag.sizeMapping().
  addSize([800,90], [728, 90]).
  addSize([0, 0], [320, 50]).
  build();
  googletag.defineSlot('${adsSlot}', [728, 90],
  '1-monetiscope-sticky-ad').setTargeting(REFRESH_KEY,
  REFRESH_VALUE).defineSizeMapping(mapping).addService(googletag.pubads());
  var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 30;
  googletag.pubads().addEventListener('impressionViewable', function(event) {
  var slot = event.slot;
  if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
  setTimeout(function() {
  googletag.pubads().refresh([slot]);
  }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
  }
  }); googletag.pubads().enableSingleRequest();
  googletag.enableServices();
  });
  </script>
  Body Code
  ===================
  <style type='text/css'>
  .sticky_ad_beta {
  width: 100%;
  float: left;
  text-align: center;
  background: #fff;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 99;
  padding-top: 4px;
  box-shadow: 0 -3px 3px rgba(0, 0, 0, .2)!important;
  } footer{
  padding-bottom: 120px;
  } .
  close_sticky_ad_beta{
  position: absolute;
  top: -20px;
  background: #fff;
  color: #000;
  right: 12px;
  height: 20px;
  width: 20px;
  font-size: 26px;
  line-height: 23px;
  box-shadow: 0 -3px 3px rgba(0, 0, 0, .2)!important;
  border-radius: 2px 2px 0 0;
  }
  </style>
  <div class="sticky_ad_beta" id="sticky_ad_beta">
  <span class="close_sticky_ad_beta" id="close_sticky_ad_beta"> × </span>
  <!-- /23057650086/MS_pharmabharat_Bottom_Sticky -->
  <div id='1-monetiscope-sticky-ad'>
  <script>
  googletag.cmd.push(function() { googletag.display('1-monetiscope-sticky-ad'); });
  </script>
  </div>
  </div>
  <script type="text/javascript">
  document.getElementById("close_sticky_ad_beta").onclick=function(){
  document.getElementById("sticky_ad_beta").style.display="none";
  document.getElementById("sticky_ad_beta").innerHTML="";
  }
  </script>
 `;
};

const getScript6 = ({ adsSlot, url }: ScriptsProps) => {
  return `
    Head Code
  ======
  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
  <script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
  var mapping = googletag.sizeMapping().
  addSize([800,90], [728,90]).
  addSize([0, 0], [300, 250]).
  build();
  googletag.defineSlot('${adsSlot}', [728, 90],
  'monetiscope-res-ad').defineSizeMapping(mapping).addService(googletag.pubads());
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
  });
  </script>
  body
  =====
  <!-- /22615882408/TTS_coursesanswer_RES -->
  <div id='monetiscope-res-ad'>
  <script>
  googletag.cmd.push(function() { googletag.display('monetiscope-res-ad'); });
  </script>
  </div>
    `;
};

const getScript7 = ({ adsSlot, url }: ScriptsProps) => {
  return `
  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
  <div id="Monetiscope_300X250_1">
  <script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
  googletag.defineSlot('${adsSlot}', [[1, 1], [336, 280], 'fluid',
  [300, 250]], 'Monetiscope_300X250_1').addService(googletag.pubads());
  googletag.pubads().set('page_url', '${url}');
  googletag.enableServices();
  googletag.display('Monetiscope_300X250_1');
  });
  </script>
  </div>
  `;
};

const getScript8 = ({ adsSlot, url }: ScriptsProps) => {
  return `
  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
  <div id="monetiscope_300X600_1">
  <script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
  googletag.defineSlot('${adsSlot}', [300, 600],
  'monetiscope_300X600_1').addService(googletag.pubads());
  googletag.pubads().set('page_url', '${url}');
  googletag.enableServices();
  googletag.display('monetiscope_300X600_1');
  });
  </script>
  </div>
  `;
};

const getScript9 = ({ adsSlot, url }: ScriptsProps) => {
  return `
<style>
  .parallax-ad-container{position:relative;width:100%;height:320px;margin:0
  auto;overflow:hidden}.parallax-ad{position:absolute!important;top:0!important;left:0!important;wi
  dth:100%!important;height:100%!important;border:0!important;margin:0!important;padding:0!im
  portant;clip:rect(0,auto,auto,0)!important}.parallax-ad>iframe{position:fixed;top:130px;height:100
  %;transform:translateX(-50%);margin-left:0!important}.ad-label{font-family:Arial,Helvetica,sans-s
  erif;font-size:.875rem;color:#8d969e;text-align:center;padding:1rem 1rem 0 1rem}
  </style>
  <div id="customParallax">
  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
  <div id="monetiscope-flying-carpet">
  <script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
  googletag.defineSlot('${adsSlot}', [300, 600],
  'monetiscope-flying-carpet').addService(googletag.pubads());
  googletag.pubads().set('page_url', '${url}');
  googletag.enableServices();
  googletag.display('monetiscope-flying-carpet');
  });
  </script>
  </div>
  </div>
  <div class="ad-label">
  <p>Advertisement</p>
  </div>
  <script>
  document.addEventListener('DOMContentLoaded',function(){const
  parallax=document.getElementById('#customParallax');let parallaxContainer;let parallaxAd;let
  iframe;const interval=function(){if(document.querySelector('#customParallax >
  div')){parallaxContainer=document.querySelector('#customParallax >
  div');if(document.querySelector('#customParallax > div >
  div')){parallaxAd=document.querySelector('#customParallax > div >
  div');if(parallaxAd.querySelector('iframe')){iframe=parallaxAd.querySelector('iframe');parallaxCon
  tainer.classList.add('parallax-ad-container');parallaxAd.classList.add('parallax-ad');function
  setIframeSize(){iframe.style.marginLeft=parallaxAd.offsetWidth/2+'px'}
  setIframeSize();window.addEventListener('resize',setIframeSize);clearInterval(interval)}}}};setInt
  erval(interval,100)})
  </script>
    `;
};

const getScript10 = ({ adsSlot, url }: ScriptsProps) => {
  return `
    Head Code
  —------------
  <script async
  src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script><script>window.googletag=wi
  ndow.googletag||{cmd:[]};googletag.cmd.push(function(){var REFRESH_KEY='refresh';var
  REFRESH_VALUE='true';googletag.defineSlot('${adsSlot}',[[160,60
  0]],'div-LDWebStickyAds').setTargeting(REFRESH_KEY,REFRESH_VALUE).addService(google
  tag.pubads());var
  SECONDS_TO_WAIT_AFTER_VIEWABILITY=30;googletag.pubads().addEventListener('impre
  ssionViewable',function(event){var
  slot=event.slot;if(slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE)>-1){setTimeou
  t(function(){googletag.pubads().refresh([slot]);},SECONDS_TO_WAIT_AFTER_VIEWABILITY*1
  000);}});googletag.pubads().enableSingleRequest();googletag.pubads().collapseEmptyDivs(true
  );googletag.enableServices();});</script><style>.stickyads_Left{position:fixed;left:0px;top:25px;t
  ext-align:center;z-index:999999;background-color:rgba(0,0,0,0.1)}.stickyads_Left
  .btn_left{position:absolute;top:-12px;left:80px;transform:translate(-50%,
  -50%);-ms-transform:translate(-50%,
  -50%);background-color:#555;color:white;font-size:16px;border:none;cursor:pointer;border-radiu
  s:25px;text-align:center}.stickyads_Left .btn_left:hover{background-color:red}@media only
  screen and (max-width: 480px){.stickyads_Left{display:none}}</style><div id='closebtn_Left'
  class='stickyads_Left'><div
  id='div-LDWebStickyAds'><script>googletag.cmd.push(function(){googletag.display('div-LDWeb
  StickyAds')});</script></div><button class='btn_left'
  onclick='change_css_Left()'>x</button></div> <script>function
  change_css_Left(){document.getElementById('closebtn_Left').style.cssText='display:none;';}</sc
  ript>
    `;
};

const getScript11 = ({ adsSlot, url }: ScriptsProps) => {
  return `
Head Code
  —------------
  <script async
  src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script><script>window.googletag=wi
  ndow.googletag||{cmd:[]};googletag.cmd.push(function(){var REFRESH_KEY='refresh';var
  REFRESH_VALUE='true';googletag.defineSlot('${adsSlot}',[[160,6
  00]],'div-RDWebStickyAds').setTargeting(REFRESH_KEY,REFRESH_VALUE).addService(goog
  letag.pubads());var
  SECONDS_TO_WAIT_AFTER_VIEWABILITY=30;googletag.pubads().addEventListener('impre
  ssionViewable',function(event){var
  slot=event.slot;if(slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE)>-1){setTimeou
  t(function(){googletag.pubads().refresh([slot]);},SECONDS_TO_WAIT_AFTER_VIEWABILITY*1
  000);}});googletag.pubads().enableSingleRequest();googletag.pubads().collapseEmptyDivs(true
  );googletag.enableServices();});</script><style>.stickyads_Right{position:fixed;right:0px;top:25p
  x;text-align:center;z-index:999999;background-color:rgba(0,0,0,0.1)}.stickyads_Right
  .btn_Right{position:absolute;top:-12px;right:80px;transform:translate(-50%,
  -50%);-ms-transform:translate(-50%,
  -50%);background-color:#555;color:white;font-size:16px;border:none;cursor:pointer;border-radiu
  s:25px;text-align:center}.stickyads_Right .btn_Right:hover{background-color:red}@media only
  screen and (max-width: 480px){.stickyads_Right{display:none}}</style><div id='closebtn_Right'
  class='stickyads_Right'><div
  id='div-RDWebStickyAds'><script>googletag.cmd.push(function(){googletag.display('div-RDWe
  bStickyAds')});</script></div><button class='btn_Right'
  onclick='change_css_Right()'>x</button></div> <script>function
  change_css_Right(){document.getElementById('closebtn_Right').style.cssText='display:none;';}
  </script>`;
};

const generateScript = ({ adsSlot, url, scriptName }: ScriptsCombProps) => {
  if (scriptName === "POP-UP Ad") {
    return getScript1({ adsSlot, url });
  }

  if (scriptName === "BOTTOM ANCHOR") {
    return getScript2({ adsSlot, url });
  }

  if (scriptName === "TOP ANCHOR AD") {
    return getScript3({ adsSlot, url });
  }

  if (scriptName === "INTERSTITIAL Ad") {
    return getScript4({ adsSlot, url });
  }

  if (scriptName === "Bottom sticky refresh ad") {
    return getScript5({ adsSlot, url });
  }

  if (scriptName === "RESPONSIVE Ad") {
    return getScript6({ adsSlot, url });
  }

  if (scriptName === "300X250 ad") {
    return getScript7({ adsSlot, url });
  }

  if (scriptName === "300X600 Side-bar ad") {
    return getScript8({ adsSlot, url });
  }

  if (scriptName === "FLYING CARPET Ad") {
    return getScript9({ adsSlot, url });
  }

  if (scriptName === "LEFT SIDE STICKY Ad") {
    return getScript10({ adsSlot, url });
  }

  if (scriptName === "RIGHT SIDE STICKY AD") {
    return getScript11({ adsSlot, url });
  }
};

export default generateScript;
