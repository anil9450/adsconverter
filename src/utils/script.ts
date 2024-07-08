interface ScriptsProps {
  adsSlot: string;
  url: string;
}

const generateScript = ({ adsSlot, url }: ScriptsProps) => {
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

export default generateScript;
