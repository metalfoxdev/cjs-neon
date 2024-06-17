function LoadData(){
    var TitleData = localStorage.getItem("Title");
    var FaviData = localStorage.getItem("Favi");
    if (TitleData === null) {
    document.title = "JustStudy";
    document.querySelector("link[rel='shortcut icon']").href = '../../assets/img/favicon.ico';
    document.getElementById("SettingDropdown").innerHTML = "TabCloaker - JustStudy";
    }
    else {
        document.title = TitleData;
        document.querySelector("link[rel='shortcut icon']").href = "../../" + FaviData;
        console.log("../../" + FaviData);
    }
    
}

// start of woopra code
!function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");
    
woopra.config({
domain: "juststudy-ebgh.onrender.com",
outgoing_tracking: true,
download_tracking: true,
click_tracking: true
});

woopra.track();
// end of woopra code

document.addEventListener("DOMContentLoaded", (event) => {
    LoadData()
    console.log("Page Loaded")
  });
