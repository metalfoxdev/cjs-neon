ASSET_PREFIX="",SCRIPT_PREFIX="",SCENE_PATH="977668.json",CONTEXT_OPTIONS={antialias:!0,alpha:!1,preserveDrawingBuffer:!1,preferWebGl2:!0},SCRIPTS=[34621449,34621513,34621375,34621435,34621446,34621316,34621311,34621501,34621436,34621421,34621430,34621514,34621380,34621507,34621448,34621392,34621459,34621454,34621422,34621333,34621300,34621426,34621455,34621437,34621393,34621517,34621495,34621425,34621442,34621405,34621389,34621516,34621411,34621335,34621500,34621377,34621463,34621447,34621458,34621445,34621491,34621423,34621429,34621456,34621383,34621476,34621385,34621487,34621439,34621301,34621488,34621391,34621515,34621427],CONFIG_FILENAME="config.json",INPUT_SETTINGS={useKeyboard:!0,useMouse:!0,useGamepads:!1,useTouch:!0},pc.script.legacy=!1,PRELOAD_MODULES=[{moduleName:"Ammo",glueUrl:"files/assets/34629338/1/ammo.wasm.js",wasmUrl:"files/assets/34629339/1/ammo.wasm.wasm",fallbackUrl:"files/assets/34629337/1/ammo.js",preload:!0}];
var loadModules=function(e,n,o){function t(e,n,o,t){!function(e,n){var o=document.createElement("script");o.onload=function(){n()},o.onerror=function(){throw new Error("failed to load "+e)},o.async=!0,o.src=e,document.head.appendChild(o)}(n,function(){var n=window[e];window[e+"Lib"]=n,n({locateFile:function(){return o}}).then(function(n){window[e]=n,t()})})}if(void 0===e||0===e.length)setTimeout(o);else{var l=e.length,r=function(){0===--l&&o()},a=function(){try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){const e=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(e instanceof WebAssembly.Module)return new WebAssembly.Instance(e)instanceof WebAssembly.Instance}}catch(e){}return!1}();e.forEach(function(e){if(!e.hasOwnProperty("preload")||e.preload)if(a)t(e.moduleName,n+e.glueUrl,n+e.wasmUrl,r);else{if(!e.fallbackUrl)throw new Error("wasm not supported and no fallback supplied for module "+e.moduleName);t(e.moduleName,n+e.fallbackUrl,"",r)}else r()})}};
!function(){var e,t,n,o=function(){n.resizeCanvas(e.width,e.height),e.style.width="",e.style.height="";var t=n._fillMode;t!=pc.FILLMODE_NONE&&t!=pc.FILLMODE_KEEP_ASPECT||(t==pc.FILLMODE_NONE&&e.clientHeight<window.innerHeight||e.clientWidth/e.clientHeight>=window.innerWidth/window.innerHeight?e.style.marginTop=Math.floor((window.innerHeight-e.clientHeight)/2)+"px":e.style.marginTop="")},i=function(e){var t=document.createElement("div");t.innerHTML=['<table style="background-color: #8CE; width: 100%; height: 100%;">',"  <tr>",'      <td align="center">','          <div style="display: table-cell; vertical-align: middle;">','              <div style="">'+e+"</div>","          </div>","      </td>","  </tr>","</table>"].join("\n"),document.body.appendChild(t)};(e=document.createElement("canvas")).setAttribute("id","application-canvas"),e.setAttribute("tabindex",0),e.onselectstart=function(){return!1},document.body.appendChild(e),t=function(e){return{elementInput:new pc.ElementInput(e,{useMouse:INPUT_SETTINGS.useMouse,useTouch:INPUT_SETTINGS.useTouch}),keyboard:INPUT_SETTINGS.useKeyboard?new pc.Keyboard(window):null,mouse:INPUT_SETTINGS.useMouse?new pc.Mouse(e):null,gamepads:INPUT_SETTINGS.useGamepads?new pc.GamePads:null,touch:INPUT_SETTINGS.useTouch&&pc.platform.touch?new pc.TouchDevice(e):null}}(e=e);try{n=new pc.Application(e,{elementInput:t.elementInput,keyboard:t.keyboard,mouse:t.mouse,gamepads:t.gamepads,touch:t.touch,graphicsDeviceOptions:window.CONTEXT_OPTIONS,assetPrefix:window.ASSET_PREFIX||"",scriptPrefix:window.SCRIPT_PREFIX||"",scriptsOrder:window.SCRIPTS||[]})}catch(e){return void(e instanceof pc.UnsupportedBrowserError?i('This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to find out more.</a>'):e instanceof pc.ContextCreationError?i('It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>'):i("Could not initialize application. Error: "+e))}var r=function(){n.configure(CONFIG_FILENAME,function(t){t&&console.error(t),function(t,n,o){e.classList&&e.classList.add("fill-mode-"+t);var i="@media screen and (min-aspect-ratio: "+n+"/"+o+") {";i+="    #application-canvas.fill-mode-KEEP_ASPECT {",i+="        width: auto;",i+="        height: 100%;",i+="        margin: 0 auto;",i+="    }",i+="}",document.head.querySelector&&(document.head.querySelector("style").innerHTML+=i)}(n._fillMode,n._width,n._height),setTimeout(function(){o(),window.addEventListener("resize",o,!1),window.addEventListener("orientationchange",o,!1),n.preload(function(e){e&&console.error(e),n.loadScene(SCENE_PATH,function(e,t){e&&console.error(e),n.start()})})})})};PRELOAD_MODULES.length>0?loadModules(PRELOAD_MODULES,ASSET_PREFIX,r):r()}();
pc.script.createLoadingScreen(function(e){var t,a,i=function(){var e=document.getElementById("application-splash-wrapper");e&&e.parentElement&&e.parentElement.removeChild(e)};t=["@import url('https://fonts.googleapis.com/css?family=Kanit:700&display=swap');","body {","   background-color: #283538;","}",".hide {","   opacity: 0 !important;","   transition: opacity 0.35s;","}","@keyframes appear {","   0% {opacity: 0; }","   100% {opacity: 1; }","}","@keyframes rotate {","   0% {transform: rotate(0deg);}","   100% {transform: rotate(180deg);}","}","#application-splash-wrapper {","   background-color: #283538;","   position: absolute;","   top: 0;","   left: 0;","   height: 100%;","   width: 100%;","   opacity: 1","}","#application-splash {","    position: absolute;","    left: 0;","    right: 0;","    top: 0;","    bottom: 0;","    margin: auto;","}","#application-splash #gearMiddle {","   position: absolute;","   left: calc(51% - 75px);","   top: calc(48% - 75px);","   width: 144px;","   animation: appear 1s ease-out, rotate 1.5s linear infinite;","   transition: width 0.2s;","}","#application-splash #gearRight {","   position: absolute;","   left: calc(51% + 1px);","   top: calc(48% - 168px);","   width: 117px;","   animation: appear 1s ease-out, rotate 1.5s linear infinite reverse;","   transition: width 0.2s;","}","#application-splash #gearLeft {","   position: absolute;","   left: calc(51% - 188px);","   top: calc(48% - 57px);","   width: 117px;","   animation: appear 1s ease-out, rotate 1.5s linear infinite reverse;","   transition: width 0.2s;","}","#progress-text {","   position: fixed;","   width: 100%;","   text-align: center;","   top: calc(48% + 85px);;","   color: #ffffff;","   font-size: 32px;","   font-family: Kanit;","   animation: appear 1s ease-out;","}","@media (max-width: 480px), (max-height: 480px) {","   #application-splash #gearMiddle {","       width: 75px;","       left: calc(55% - 42.5px);","       top: calc(48% - 32.5px);","       transition: width 0.2s;","   }","   #application-splash #gearRight {","       width: 58px;","       left: calc(55% - 2px);","       top: calc(48% - 77px);","       transition: width 0.2s;","   }","   #application-splash #gearLeft {","       width: 58px;","       left: calc(55% - 99px);","       top: calc(48% - 22px);","       transition: width 0.2s;","   }","   #progress-text {","       top: calc(48% + 50px);;","       font-size: 28px;","}","}"].join("\n"),(a=document.createElement("style")).type="text/css",a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t)),document.head.appendChild(a),function(){var e=document.createElement("div");e.id="application-splash-wrapper",document.body.appendChild(e);var t=document.createElement("div");t.id="application-splash",e.appendChild(t),t.style.display="none";var a=document.createElement("img");a.src="data:image/png;base64,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",a.id="gearLeft",t.appendChild(a);var i=document.createElement("img");i.src=a.src,i.id="gearRight",t.appendChild(i);var o=document.createElement("img");o.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACWCAYAAAAxHwGlAAAJm0lEQVR4nO2d/3XbOBaFL9SA3UE0FURbgTUVWFtBtBUkW4G1FdhTgTUVWFOBuRVYW4GZCqxUcPcPQB6ZJin+AIgH6H3n+GTGsYUb8PIBBB8eDDKH5BWADYAFgGv3ZygOAPbuvx+MMX8FbEsJDckrki+Mx13sPgiNiS0gJCRvAexiajDGZN3Hs9gCcscNodmSu4FCzne6IkFDMHI30Dy2AKiBkmYeWwDsk1+25G6gZWwBkKEhGNkaSNDkVSNQokiZe0jREQQ10ASQ/BJbQyhyNpCkoWMeW0AocjbQMraAE5axBYQiZwNJikCStHglZwOJmQNBlhavZGkggZNWNVBizGMLqKBDWGIsYwuoQvImtoYQ5GqgeWwBNcxjCwhBlslOJF8h74LtjTH/iC3CN9lFIJLfIM88ALDIcRjLKgK5F6gl5E5aDwCWxpj/xRbii2wikDNPAbnmAay2raBMgdFkYSC37lMgjfWWBYBC4FrVIEYNYSdjemmM+elBzxANdwB+QHbkqeMA4Icx5s8YjZP8Ctdnxpj/Tt143X6rZ5LfpgrPJL/WaEiRZ04UjWiv23eSrxUNL1NpOAp5aumQN5KPDPjE4TohN4JtQiR5Q3tNorRfFfOlR6e8kryjJ3e7tp/7XZekeKWnG4+2r+qiTRvhoxCHX8BnDhziaEPv48B2U+SRA6cCJG/ZPkK08TSkzb7ixtJ5iKO9ix7d71wabyTv2SEq0PbTHftFmyZ6RcDOT2G0d8Qefld5SwBb97kH971jBY0V0ngsn4Id/q76UeXYV77o9cqlj4HuYMukKPmz7rq80MlALoyWYxQpSXEAMDfG/Dr3g11Xorej5CipcQ27OHuWsxGIAmrsKNGYn3vD0BqB3MR561ORkhQP537g3BC2QXrvmBR/rM491jcOYbQv25oeHZXLYQ+bw1Q7oW6LQGfDl3IRLNDihdoIRJsWug0kSEmTRV0m5ScDUX5aqBKHwhjze/WbdUPYBmoe5TNLt6TzgQ8RyK0476EGUuopjTG/nX6jGoEeoOZRmpmzknj2HoHc834xtSIlOQ6wE+qfwMcIpI/tSheucZKVMQNsjjE090bpzvq4Qm30sV0ZSGGM+X0GYA01j9KfJcmbGTrmfShKDcsZZFayUBJhBn3jrozA6OqzMpASwGLmFoQW0EikdGcHu5j4awYAzkRLaO6zcp4HY8w/jwlmdekcl7j/a4+/N+8dKt+f4+Pwfjw+fDORNkl82i/WlFB2C5tQlvu8qIQ1wq7LHqgqrp9W7ivnvmoszdeWE/0FbqwLKCwWXos7udX8HQTWp/bAHsCqaXtPY060Mean2yOd20vWLex+J2+VwYwxv1y23trXZwphCxt5xlWfo63KkXqFjDfaXO+gMJ/KaZ0KTvUprpDykDZpPUKGqWQyFb36qneRTZL3SOv9WZTazLT76gqkNbnu3Ve9y/waY/6NtMb6VYzC3q7N9dTtjqCAnRtO01e05eqk832Szki/nx6H/vvG1ol+gt/qWD6p3ccUg5z7aayBJBeeqt1JGQPKrjOwHFNofNRRB259QGLHbKWYB3ifD0l8z7gfW6Xex1kZhYfP8M02toAaJC7Ijr75szTQ5Gc/dMBpKmPrqFCO/QAfBjqc/5FJkThUHJGsbRBZHPdUQeKc7Ig0AxVjPyBHA5WxBbRQxhbgGzXQhMQ6Uy0kORpImZDsDCTxCaxCEVvACfOxH5CdgZRezMd+gBpIGUV2BmImpyGnQnYGgvwswGVsASeMTnbL0UDL2AKa4EQnWvdgdHpyjgaSnEKaUipwJ3wYSNoFW8cW0IK0DQkihjBpmXbXrCmIHRs3fEnrq8XYYTVHAwEyNUkdvpZjfnmUgWg36kkbwoCTKqKCkGqgUTfbYAO50LcZ03hgNrEFHKHd5SnxRgPszTZ47WxMBNpC9prLkh2354bERcJNbB1n2A79xUG7Mtw+ovXQRidmZYz5K0bDTKsG99YY86++v9TLQK5DCsh7HG3jw9kOU5FoX+1gi0h1rpXUeQhze5tKpNUhgL37d1O+I3NtFUivr1YACnetO9HJQO5pK+VKrgsA+ymezE42EaZmniMLWBN1Wks7ayA339mOFCWBa9iOCbZf3n12yjfakWPUPttXbSXuUhzDu1LA1sDxsnvVRZ0NZC5gjmUL21e186KmIpsp1rYZwhb26WNQGmzmxjmlsU5iXZnfSzzyew97wxQADm2GcvOoJewyxjy4MjnUFp+qHrqb0vqOEocfxpg/jv9jgOznO4p/3hcdjQvJO+Q/31H8sgewNCRfcVljueKPwpBkbBVKuswga6ekkhblDPJKjijpsNVjv5WhFABWM7dEvYmrRUmQ9emJhX9AdmUvRRbb42uN95Vo4bWMFVnMjwZ6T+dw7zgklqJVZLE9falafRemE2qljQNs9HlP7fiQUOb+Qur+JSU+D9W8oKZ8oGcIrnKhROFT9AGaU1rXweUoqfEp+gANBnKTpE1oRUoyHNDwgNWWVP8AeccYKHGojT5A+7Hfv6CP9QpQGmP+0/SXZ3emar7QxdN6IF2XjYVrf1qUxNid27HSaW+8JttfJLWP7VW67o3/AZ1QXxqbLkUWOhlIUz4ujv3p1p02+pZ3eYG/rT8H2GzIEp/Tahfua+2prdQpTr5OWcI+4Kzg9/3lqJOcGyH51cMh9y8kv3WpDkryluQjyTcP7abIK8nvPNNXJK9o+/TFQ5v3/hxTL/Z+gKg3WiN0rjtTafPK/f6l8Ea7xXxIX32hvUZDbro3hq6mT3sxu4p7Zsdo07HtG9q7MlfeSN7RX399I/nUo/1Bph0i7PZMJ9wzYEUw18m58chAfUYble7YfvM9hWi7TdRdRcAzp3Iw3jvl2ecVjMQzBw7tA/vthp+nA68cGPUGVWmVBK1pH5BeFuUBdmdDzAqyxyfqfZ/CmtlBG436jPWxeaK8o58GkXwEOoVpZFIWsNW+srjjczPQFezWpHlkKU10er+UElkdOOcuzDq2jhYai1WmSlYR6Aj9vnLxRWmM+S22CN9kFYFOkFhxpIgtIAS5GkgiZWwBIcjVQBL3+EvUNBo10HSUsQWEIMtJNACQsmo/GmOy7OtcIxAgKwqVsQWEQg00DWVsAaHI2UBlbAEnSDKzV3I2kKSLlu2OFjXQNBSxBYQiWwNNfcjuGcrYAkKRrYEcIqKQMDN7RQ0UHgkagpG7gcrYAiBDQzByN5CEu1+ChmCogcJTxhYQkqwNJGTyKsHEwcjaQI6YZfoKX2fTKxHhsP38Y3nMZetOG/8H7WkUhj37rD8AAAAASUVORK5CYII=",o.id="gearMiddle",t.appendChild(o),o.onload=function(){t.style.display="block"};var p=document.createElement("div");p.id="progress-text",t.appendChild(p),p.innerHTML="0%"}(),e.on("preload:end",function(){console.log("preload:end"),e.off("preload:progress"),skipTitleScreen()&&"undefined"!=typeof famobi&&famobi.onRequest&&famobi.onRequest("startGame",function(){console.log("famobi.startGame"),i(),WindowManager.startGameplay()}),"undefined"!=typeof famobi&&famobi.setPreloadProgress&&setTimeout(()=>famobi.setPreloadProgress(100),200)}),e.on("preload:progress",function(e){var t=document.getElementById("progress-text");t&&(e=Math.min(1,Math.max(0,e)),t.innerHTML=Math.floor(99*e)+"%"),window.famobi&&window.famobi.setPreloadProgress&&window.famobi.setPreloadProgress(Math.floor(99*e))}),e.on("start",function(){console.log("app:start"),skipTitleScreen()||i()})});