require(['jquery'],function($){require(['jquery','jqueryui'],function($,jqui){var url=$(location).attr('href');$("#page-my-index div#course-overview-section").parent().css({"height":"20em"});var urlc=window.location.href;var wantsenc=JSON.stringify(urlc);window.parent.postMessage('{"type":"update","payload":{"lastVisited":'+wantsenc+'}}','*')
var nVer=navigator.appVersion;var nAgt=navigator.userAgent;var browserName=navigator.appName;var fullVersion=''+parseFloat(navigator.appVersion);var majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if((verOffset=nAgt.indexOf("Chrome"))!=-1){browserName="Chrome";fullVersion=nAgt.substring(verOffset+7)}else if((verOffset=nAgt.indexOf("Firefox"))!=-1){browserName="Firefox";fullVersion=nAgt.substring(verOffset+8)}else if((nameOffset=nAgt.lastIndexOf(' ')+1)<(verOffset=nAgt.lastIndexOf('/'))){browserName=nAgt.substring(nameOffset,verOffset);fullVersion=nAgt.substring(verOffset+1);if(browserName.toLowerCase()==browserName.toUpperCase()){browserName=navigator.appName}}
if((ix=fullVersion.indexOf(";"))!=-1)
fullVersion=fullVersion.substring(0,ix);if((ix=fullVersion.indexOf(" "))!=-1)
fullVersion=fullVersion.substring(0,ix);majorVersion=parseInt(''+fullVersion,10);if(isNaN(majorVersion)){fullVersion=''+parseFloat(navigator.appVersion);majorVersion=parseInt(navigator.appVersion,10)}
var platform='Tekstac';var isIE=!1||!!document.documentMode;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){if(!1||!!document.documentMode){$('<div id="unsupported-site" align="center" style="background-color: orange; color: white; padding-top: 10px; height: 50px;">'+'<p > '+platform+' is not compatible with Internet Explorer. Use latest version of Chrome, Firefox or Microsoft Edge</p> </div>').insertBefore($(".top-bar"))}else if(!!window.chrome){if(majorVersion<50){$('<div id="unsupported-site" align="center" style="background-color: orange; color: white; padding-top: 10px; height: 50px;">'+'<p > '+platform+' is not compatible with your version of Chrome. Use latest version of Chrome, Firefox or Microsoft Edge. </p> </div>').insertBefore($(".top-bar"))}}else if(typeof InstallTrigger!=='undefined'){if(majorVersion<52){$('<div id="unsupported-site" align="center" style="background-color: orange; color: white; padding-top: 10px; height: 50px;">'+'<p > '+platform+' is not compatible with your version of Firefox. Use latest version of Chrome, Firefox or Microsoft Edge. </p> </div>').insertBefore($(".top-bar"))}}else if(!isIE&&!!window.StyleMedi||/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]"})(!window.safari||(typeof safari!=='undefined'&&safari.pushNotification))){}else{$('<div id="unsupported-site" align="center" style="background-color: orange; color: white; padding-top: 10px; height: 50px;">'+'<p > '+platform+' is Best viewed on latest versions of Chrome, Firefox and Microsoft Edge </p> </div>').insertBefore($(".top-bar"))}}else{if(!1||!!document.documentMode){$('#header').prepend($('<div id="unsupported-site" align="center" style="background-color: orange; color: white; padding-top: 10px; height: 38px;">'+'<p > '+platform+' is not compatible with Internet Explorer. Use latest version of Chrome, Firefox or Microsoft Edge</p> </div>'))}else if(!!window.chrome){if(majorVersion<50){$('#header').prepend($('<div id="unsupported-site" align="center" style="background-color: orange; color: white; padding-top: 10px; height: 38px;">'+'<p > '+platform+' is not compatible with your version of Chrome. Use latest version of Chrome, Firefox or Microsoft Edge. </p> </div>'))}}else if(typeof InstallTrigger!=='undefined'){if(majorVersion<52){$('#header').prepend($('<div id="unsupported-site" align="center" style="background-color: orange; color: white; padding-top: 10px; height: 38px;">'+'<p > '+platform+' is not compatible with your version of Firefox. Use latest version of Chrome, Firefox or Microsoft Edge. </p> </div>'))}}else if(!isIE&&!!window.StyleMedi||/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]"})(!window.safari||(typeof safari!=='undefined'&&safari.pushNotification))){}else{$('#header').prepend($('<div id="unsupported-site" align="center" style="background-color: orange; color: white; padding-top: 10px; height: 38px;">'+'<p > '+platform+' is Best viewed on latest versions of Chrome, Firefox and Microsoft Edge </p> </div>'))}}
$('a[data-key*="localboostnavigationcustombottomusers1"]').addClass('border-top')})
$(".navlogic").click(function(){var checkexp=$(".navaccen").attr("aria-expanded");if(checkexp=='false'){$(".navlogic").css("left","-1%");$(".navlogic").css("opacity","0.5");$(".iconarrow").css("transform","none")}else{$(".navlogic").css("left","285px");$(".navlogic").css("opacity","1.5");$(".iconarrow").css("transform","rotate(180deg)")}});$("#page").click(function(){var checkexp=$(".navaccen").attr("aria-expanded");if(checkexp=='true'){jQuery(".navlogic").trigger("click");$(".navlogic").find(":button").trigger("click")}});$(document).ready(function(){const onChangeElement=(qSelector,cb)=>{const targetNode=document.getElementById(qSelector);if(targetNode){const config={attributes:!0,childList:!1,subtree:!1};const callback=function(mutationsList,observer){cb($(qSelector))};const observer=new MutationObserver(callback);observer.observe(targetNode,config)}else{console.error("onChangeElement: Invalid Selector")}}
onChangeElement('nav-drawer',function(jqueryElement){if($('#nav-drawer').hasClass('closed')){$(".navlogic").css("left","-1%");$(".navlogic").css("opacity","0.5");$(".iconarrow").css("transform","none")}
var checkexp=$(".navaccen").attr("aria-expanded");if(checkexp=='false'){$(".navlogic").css("left","-1%");$(".navlogic").css("opacity","0.5");$(".iconarrow").css("transform","none")}else{$(".navlogic").css("left","285px");$(".navlogic").css("opacity","1.5");$(".iconarrow").css("transform","rotate(180deg)")}})});if(window.matchMedia("(min-width: 800px)").matches){}else{$("p").removeClass("tip");$("div").removeClass("tip")}})