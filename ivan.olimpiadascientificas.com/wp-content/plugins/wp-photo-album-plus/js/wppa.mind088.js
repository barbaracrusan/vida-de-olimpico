// wppa.js
//
// conatins common vars and functions
//

var wppaJsVersion='6.3.17';var wppaVersion='0';var wppaDebug;var wppaFullValign=[];var wppaFullHalign=[];var wppaFullFrameDelta=[];var wppaAnimationSpeed;var wppaImageDirectory;var wppaAutoColumnWidth=[];var wppaAutoColumnFrac=[];var wppaThumbnailAreaDelta;var wppaSlideShowTimeOut=2500;var wppaFadeInAfterFadeOut=false;var wppaTextFrameDelta=0;var wppaBoxDelta=0;var wppaPreambule;var wppaHideWhenEmpty=false;var wppaThumbnailPitch=[];var wppaFilmStripLength=[];var wppaFilmStripMargin=[];var wppaFilmStripAreaDelta=[];var wppaFilmShowGlue=false;var wppaIsMini=[];var wppaPortraitOnly=[];var wppaSlideShow;var wppaPhoto;var wppaOf;var wppaNextPhoto;var wppaPreviousPhoto;var wppaSlower;var wppaFaster;var wppaNextP;var wppaPrevP;var wppaAvgRating;var wppaMyRating;var wppaAvgRat;var wppaMyRat;var wppaDislikeMsg;var wppaMiniTreshold=300;var wppaStart='Start';var wppaStop='Stop';var wppaPleaseName;var wppaPleaseEmail;var wppaPleaseComment;var wppaRatingOnce=true;var wppaBGcolorNumbar='transparent';var wppaBcolorNumbar='transparent';var wppaBGcolorNumbarActive='transparent';var wppaBcolorNumbarActive='transparent';var wppaFontFamilyNumbar='';var wppaFontSizeNumbar='';var wppaFontColorNumbar='';var wppaFontWeightNumbar='';var wppaFontFamilyNumbarActive='';var wppaFontSizeNumbarActive='';var wppaFontColorNumbarActive='';var wppaFontWeightNumbarActive='';var wppaNumbarMax='10';var wppaAjaxUrl='';var wppaLang='';var wppaNextOnCallback=false;var wppaStarOpacity=0.2;var wppaSlideWrap=true;var wppaLightBox=[];var wppaEmailRequired=true;var wppaSlideBorderWidth=0;var wppaSlideInitRunning=[];var wppaAnimationType='fadeover';var wppaSlidePause=[];var wppaSlideBlank=[];var wppaRatingMax=5;var wppaRatingDisplayType='graphic';var wppaRatingPrec=2;var wppaFilmPageSize=[];var wppaAspectRatio=[];var wppaFullSize=[];var wppaStretch=false;var wppaThumbSpaceAuto=false;var wppaMinThumbSpace=4;var wppaMagnifierCursor='';var wppaArtMonkyLink='none';var wppaAutoOpenComments=false;var wppaUpdateAddressLine=false;var wppaFilmThumbTitle='';var wppaUploadUrl='';var wppaVoteForMe='';var wppaVotedForMe='';var wppaSlideSwipe=true;var wppaLightboxSingle=[];var wppaMaxCoverWidth=300;var wppaDownLoad='Download';var wppaSiteUrl='';var wppaWppaUrl='';var wppaIncludeUrl='';var wppaSlideToFullpopup=false;var wppaComAltSize=75;var wppaBumpViewCount=true;var wppaFotomoto=false;var wppaArtMonkeyButton=true;var wppaShortQargs=false;var wppaOvlHires=false;var wppaMasonryCols=[];var wppaVideoPlaying=[];var wppaAudioPlaying=[];var wppaSlideVideoStart=false;var wppaSlideAudioStart=false;var wppaAudioHeight=28;var wppaHis=0;var wppaStartHtml=[];var wppaCanAjaxRender=false;var wppaCanPushState=false;var wppaAllowAjax=true;var wppaMaxOccur=0;var wppaFirstOccur=0;var wppaUsePhotoNamesInUrls=false;var wppaShareHideWhenRunning=false;var wppaCommentRequiredAfterVote=true;var wppaTopMoc=0;var wppaColWidth=[];var wppaFotomotoHideWhenRunning=false;var wppaFotomotoMinWidth=400;var wppaPhotoView=[];var wppaBackgroundColorImage='';var wppaPopupLinkType='';var wppaPopupOnclick=[];var wppaThumbTargetBlank=false;var wppaRel='rel';var wppaStartSymbolUrl='';var wppaPauseSymbolUrl='';var wppaStopSymbolUrl='';var wppaStartPauseSymbolSize='64';var wppaStartPauseSymbolBradius='32';var wppaStopSymbolSize='48';var wppaStopSumbolBradius='24';var _wppaId=[];var _wppaAvg=[];var _wppaDisc=[];var _wppaMyr=[];var _wppaVRU=[];var _wppaLinkUrl=[];var _wppaLinkTitle=[];var _wppaLinkTarget=[];var _wppaCommentHtml=[];var _wppaIptcHtml=[];var _wppaExifHtml=[];var _wppaToTheSame=false;var _wppaSlides=[];var _wppaNames=[];var _wppaFullNames=[];var _wppaDsc=[];var _wppaOgDsc=[];var _wppaCurIdx=[];var _wppaNxtIdx=[];var _wppaTimeOut=[];var _wppaSSRuns=[];var _wppaFg=[];var _wppaTP=[];var _wppaIsBusy=[];var _wppaFirst=[];var _wppaVoteInProgress=false;var _wppaTextDelay;var _wppaUrl=[];var _wppaSkipRated=[];var _wppaLbTitle=[];var _wppaStateCount=0;var _wppaDidGoto=[];var _wppaShareUrl=[];var _wppaShareHtml=[];var _wppaFilmNoMove=[];var _wppaHiresUrl=[];var _wppaIsVideo=[];var _wppaVideoHtml=[];var _wppaAudioHtml=[];var _wppaVideoNatWidth=[];var _wppaVideoNatHeight=[];var __wppaOverruleRun=false;var wppaOvlUrls;var wppaOvlTitles;var wppaOvlIdx=0;var wppaOvlFirst=true;var wppaOvlKbHandler='';var wppaOvlSizeHandler='';var wppaOvlPadTop=5;var wppaOvlIsSingle;var wppaOvlRunning=false;var wppaOvlVideoHtmls;var wppaOvlAudioHtmls;var wppaOvlVideoNaturalWidths;var wppaOvlVideoNaturalHeights;var wppaOvlMode='normal';var wppaOvlVideoPlaying=false;var wppaOvlAudioPlaying=false;var wppaOvlShowLegenda=true;var wppaOvlShowStartStop=true;var wppaOvlRadius=0;var wppaOvlBorderWidth=16;var wppaOvlLeftSymbolUrl;var wppaOvlRightSymbolUrl;var wppaLeftRightSymbolSize=32;var wppaLeftRightSymbolBradius=4;var wppaOvlTxtHeight=36;var wppaOvlOpacity=0.8;var wppaOvlOnclickType='none';var wppaOvlTheme='black';var wppaOvlAnimSpeed=300;var wppaOvlSlideSpeed=3000;var wppaVer4WindowWidth=800;var wppaVer4WindowHeight=600;var wppaOvlFontFamily='Helvetica';var wppaOvlFontSize='10';var wppaOvlFontColor='';var wppaOvlFontWeight='bold';var wppaOvlLineHeight='12';var wppaOvlShowCounter=true;var wppaOvlIsVideo=false;var wppaShowLegenda='';var wppaOvlFsPhotoId=0;var wppaPhotoId=0;var wppaOvlVideoStart=false;var wppaOvlAudioStart=false;var wppaLastIptc='';var wppaLastExif='';jQuery(document).ready(function(){var anyAutocol=false;for(mocc=1;mocc<=wppaTopMoc;mocc++){if(wppaAutoColumnWidth[mocc]){wppaColWidth[mocc]=0;_wppaDoAutocol(mocc);anyAutocol=true;}}
_wppaTextDelay=wppaAnimationSpeed;if(wppaFadeInAfterFadeOut)_wppaTextDelay*=2;if(anyAutocol){jQuery(window).resize(function(){for(mocc=1;mocc<=wppaTopMoc;mocc++){if(wppaAutoColumnWidth[mocc]){wppaColWidth[mocc]=0;_wppaDoAutocol(mocc);}}});}});jQuery(document).ready(function(e){if(wppaAllowAjax&&jQuery.ajax()){wppaCanAjaxRender=true;}
if(typeof(history.pushState)!='undefined'){var i=1;while(i<=wppaMaxOccur){wppaStartHtml[i]=jQuery('#wppa-container-'+i).html();i++;}
wppaCanPushState=true;}});function wppaUpdateLightboxes(){if(typeof(wppaInitOverlay)=='function'){wppaInitOverlay();}
if(typeof(myLightbox)!='undefined'){if(typeof(myLightbox.updateImageList)=='function'){myLightbox.updateImageList();}}
if(jQuery().prettyPhoto){jQuery("a[rel^='prettyPhoto']").prettyPhoto({deeplinking:false,});}}
function wppaStopVideo(mocc){var id=[];var video;var i;id[1]='wppa-overlay-img';id[2]='theimg0-'+mocc;id[3]='theimg1-'+mocc;i=0;while(i<3){i++;video=document.getElementById(id[i]);if(video){if(typeof(video.pause)=='function'){video.pause();wppaConsoleLog('Video '+id[i]+' paused','force');}}}}
function wppaStopAudio(){var items=jQuery('audio');if(items.length>0){var i=0;while(i<items.length){if(jQuery(items[i]).attr('data-from')=='wppa'){items[i].pause();}
i++;}}}
function wppaMakeFullsizeUrl(url){var temp;var temp2;url=url.replace('/thumbs/','/');temp=url.split('//');if(temp[1]){temp2=temp[1].split('/');url=temp[0]+'//';}
else{temp2=temp[0].split('/');url='';}
var j=0;while(j<temp2.length){var chunk=temp2[j];var w=chunk.split('_');if(w[0]!='w'){if(j!=0)url+='/';url+=chunk;}
j++;}
return url;}
function wppaGetContainerWidth(mocc){var elm=document.getElementById('wppa-container-'+mocc);var w=0;if(!wppaAutoColumnWidth[mocc])return elm.clientWidth;while(w==0){elm=elm.parentNode;w=jQuery(elm).width();}
return w*wppaAutoColumnFrac[mocc];}
function _wppaDoAutocol(mocc){wppaConsoleLog('Doing autocol '+mocc);if(!wppaAutoColumnWidth[mocc])return;var w;var h;w=wppaGetContainerWidth(mocc);wppaColWidth[mocc]=w;jQuery(".wppa-container-"+mocc).css('width',w);jQuery(".wppa-asym-text-frame-"+mocc).css('width',w-wppaTextFrameDelta);jQuery(".wppa-cover-box-"+mocc).css('width',w-wppaBoxDelta);var exists=jQuery(".wppa-cover-box-mcr-"+mocc);var MCRWidth;if(exists.length>1){var nCovers=parseInt((w+8)/(wppaMaxCoverWidth+8))+1;var coverMax1=nCovers-1;MCRWidth=parseInt(((w+8)/nCovers)-8);var idx=0;while(idx<exists.length){var col=idx%nCovers;switch(col){case 0:jQuery(exists[idx]).css({'marginLeft':'0px','clear':'both','float':'left'});break;case coverMax1:jQuery(exists[idx]).css({'marginLeft':'8px','clear':'none','float':'right'});break;default:jQuery(exists[idx]).css({'marginLeft':'8px','clear':'none','float':'left'});}
idx++;}
jQuery(".wppa-asym-text-frame-mcr-"+mocc).css('width',MCRWidth-wppaTextFrameDelta);jQuery(".wppa-cover-box-mcr-"+mocc).css('width',MCRWidth-wppaBoxDelta);}
else{jQuery(".wppa-asym-text-frame-mcr-"+mocc).css('width',w-wppaTextFrameDelta);jQuery(".wppa-cover-box-mcr-"+mocc).css({'width':(w-wppaBoxDelta),'marginLeft':'0px','float':'left'});}
jQuery(".wppa-thumb-area-"+mocc).css('width',w-wppaThumbnailAreaDelta);if(wppaThumbSpaceAuto){var tfw=parseInt(jQuery(".thumbnail-frame-"+mocc).css('width'));if(tfw){var minspc=wppaMinThumbSpace;var weff=w-wppaThumbnailAreaDelta-7;var nthumbs=parseInt(weff/(tfw+minspc));var availsp=weff-nthumbs*tfw;var newspc=parseInt(0.5+availsp/(nthumbs+1));jQuery(".thumbnail-frame-"+mocc).css({marginLeft:newspc});}}
jQuery(".thumbnail-frame-comalt-"+mocc).css('width',w-wppaThumbnailAreaDelta);jQuery(".wppa-com-alt-"+mocc).css('width',w-wppaThumbnailAreaDelta-wppaComAltSize-20);var row=1;var rowHeightPix;var rowHeightPerc=jQuery('#wppa-mas-h-'+row+'-'+mocc).attr('data-height-perc');while(rowHeightPerc){rowHeightPix=rowHeightPerc*(w-wppaThumbnailAreaDelta)/100;jQuery('#wppa-mas-h-'+row+'-'+mocc).css('height',rowHeightPix);row++;rowHeightPerc=jQuery('#wppa-mas-h-'+row+'-'+mocc).attr('data-height-perc');}
wppaSetMasHorFrameWidthsForIeAndChrome(mocc);jQuery(".wppa-file-"+mocc).css('width',w-16);jQuery(".wppa-file-mcr-"+mocc).css('width',MCRWidth-wppaBoxDelta-6);wppaFormatSlide(mocc);jQuery("#audio-slide-"+mocc).css('width',w-wppaBoxDelta-6);jQuery(".wppa-comment-textarea-"+mocc).css('width',w*0.7);wppaFilmStripLength[mocc]=w-wppaFilmStripAreaDelta[mocc];jQuery("#filmwindow-"+mocc).css('width',wppaFilmStripLength[mocc]);_wppaAdjustFilmstrip(mocc);if(!wppaIsMini[mocc]&&typeof(_wppaSlides[mocc])!='undefined'){if(wppaColWidth[mocc]<wppaMiniTreshold){jQuery('#prev-arrow-'+mocc).html(wppaPrevP);jQuery('#next-arrow-'+mocc).html(wppaNextP);jQuery('#wppa-avg-rat-'+mocc).html(wppaAvgRat);jQuery('#wppa-my-rat-'+mocc).html(wppaMyRat);jQuery('#counter-'+mocc).html((_wppaCurIdx[mocc]+1)+' / '+_wppaSlides[mocc].length);}
else{jQuery('#prev-arrow-'+mocc).html(wppaPreviousPhoto);jQuery('#next-arrow-'+mocc).html(wppaNextPhoto);jQuery('#wppa-avg-rat-'+mocc).html(wppaAvgRating);jQuery('#wppa-my-rat-'+mocc).html(wppaMyRating);jQuery('#counter-'+mocc).html(wppaPhoto+' '+(_wppaCurIdx[mocc]+1)+' '+wppaOf+' '+_wppaSlides[mocc].length);}}
jQuery(".wppa-sphoto-"+mocc).css('width',w);jQuery(".wppa-simg-"+mocc).css('width',w-2*wppaSlideBorderWidth);jQuery(".wppa-simg-"+mocc).css('height','');jQuery(".wppa-mphoto-"+mocc).css('width',w+10);jQuery(".wppa-mimg-"+mocc).css('width',w);jQuery(".wppa-mimg-"+mocc).css('height','');}
function wppaSetMasHorFrameWidthsForIeAndChrome(mocc){var frames=jQuery('.wppa-mas-h-'+mocc);var tnm=wppaMinThumbSpace;for(var i=0;i<frames.length;i++){var img=wppaGetChildI(frames[i]);if(img){if(img.nodeName=='IMG'){if(!img.complete){setTimeout('wppaSetMasHorFrameWidthsForIeAndChrome( '+mocc+' )',400);return;}}
var wd=((img.naturalWidth)/(img.naturalHeight)*(img.height))+tnm;jQuery(frames[i]).css({'width':wd});}}}
function wppaGetChildI(parent){var children=parent.childNodes;var img=false;var i;for(i=0;i<children.length;i++){var child=children[i];if(child.id){if(child.id.substr(0,2)=='i-'){return child;}}
var grandChild=wppaGetChildI(child);if(grandChild){return grandChild;}}
return false;}
var wppaFotomotoLoaded=false;var wppaFotomotoToolbarIds=[];function fotomoto_loaded(){wppaFotomotoLoaded=true;}
function wppaFotomotoToolbar(mocc,url){if(wppaColWidth[mocc]>=wppaFotomotoMinWidth){jQuery('#wppa-fotomoto-container-'+mocc).css('display','inline');jQuery('#wppa-fotomoto-checkout-'+mocc).css('display','inline');}
else{jQuery('#wppa-fotomoto-container-'+mocc).css('display','none');jQuery('#wppa-fotomoto-checkout-'+mocc).css('display','none');return;}
if(wppaFotomoto&&document.getElementById('wppa-fotomoto-container-'+mocc)){if(wppaFotomotoLoaded){FOTOMOTO.API.checkinImage(url);wppaFotomotoToolbarIds[mocc]=FOTOMOTO.API.showToolbar('wppa-fotomoto-container-'+mocc,url);}
else{setTimeout('wppaFotomotoToolbar( '+mocc+',"'+url+'" )',200);wppaConsoleLog('Waiting for Fotomoto');}}}
function wppaFotomotoHide(mocc){jQuery('#wppa-fotomoto-container-'+mocc).css('display','none');jQuery('#wppa-fotomoto-checkout-'+mocc).css('display','none');}
function wppaGetCurrentFullUrl(mocc,idx){var xurl=document.location.href;var url;var temp1=xurl.split("?");var temp2='nil';var temp3;var i=0;var first=true;var pfx;if(!wppaShortQargs)pfx='wppa-';else pfx='';if(temp1[1])temp2=temp1[1].split("&");var albumSeen=false;url=temp1[0];if(temp2!='nil'){if(temp2.length>0){while(i<temp2.length){temp3=temp2[i].split("=");if(temp3[0]==pfx+'album')albumSeen=true;if(temp3[0]!=pfx+'photo'){if(first)url+="?";else url+="&";first=false;url+=temp2[i];}
i++;}}}
if(!albumSeen)return'';if(first)url+="?";else url+="&";if(wppaUsePhotoNamesInUrls){url+=pfx+'photo='+encodeURIComponent(_wppaNames[mocc][idx]);}
else{url+=pfx+'photo='+_wppaId[mocc][idx];}
return url;}
function wppaStringContainsForbiddenChars(str){var forbidden=['?','&','#','/','"',"'"];var i=0;while(i<forbidden.length){if(str.indexOf(forbidden[i])!=-1){return true;}
i++;}
return false;}
window.onpopstate=function(event){var occ=0;if(wppaCanPushState){if(event.state){occ=event.state.occur;switch(event.state.type){case'html':jQuery('#wppa-container-'+occ).html(event.state.html);break;case'slide':_wppaGoto(occ,event.state.slide);break;}}
else if(wppaUpdateAddressLine){occ=wppaFirstOccur;jQuery('#wppa-container-'+occ).html(wppaStartHtml[occ]);wppaFirstOccur=0;if(occ==0){var url=document.location.href;var urls=url.split("&wppa-occur=");occ=parseInt(urls[1]);}
var url=document.location.href;var urls=url.split("&wppa-photo=");var photo=parseInt(urls[1]);if(photo>0){var idx=0;while(idx<_wppaId[occ].length){if(_wppaId[occ][idx]==photo)break;idx++;}
if(idx<_wppaId[occ].length)_wppaGoto(occ,idx);}}
if(document.getElementById('theslide0-'+occ)){_wppaStop(occ);}}
if(typeof(wppaQRUpdate)!='undefined')wppaQRUpdate(document.location.href);};function wppaPushStateSlide(mocc,slide,url){if(!wppaIsMini[mocc]){if(wppaCanPushState&&wppaUpdateAddressLine){if(url!=''){try{history.pushState({page:wppaHis,occur:mocc,type:'slide',slide:slide},"---",url);wppaConsoleLog('Slide history stack updated');}
catch(err){wppaConsoleLog('Slide history stack update failed');}}}}}
function wppaRepairScriptTags(text){var temp;var newtext;if(typeof(text)=='undefined')return'';temp=text.split('[script');if(temp.length==1)return text;newtext=temp[0];var idx=0;while(temp.length>idx){newtext+='<script';idx++;newtext+=temp[idx];}
temp=newtext.split('[/script');newtext=temp[0];idx=0;while(temp.length>idx){newtext+='</script';idx++;newtext+=temp[idx];}
return newtext;}
function wppaRepairBrTags(text){var newtext;if(typeof(text)=='undefined')return'';newtext=text.replace('[br /]','<br />');return newtext;}
function wppaTrimAlt(text){var newtext;if(typeof(text)=='undefined')return'';if(text.length>13){newtext=text.substr(0,10)+'...';}
else newtext=text;return newtext;}
var wppaFbInitBusy=false;function wppaFbInit(){if(!wppaFbInitBusy){if(typeof(FB)!='undefined'){wppaFbInitBusy=true;setTimeout('_wppaFbInit()',10);}
else{wppaConsoleLog('Fb wait');setTimeout('wppaFbInit()',200);}}
else{wppaConsoleLog('Fb Init busy');}}
function _wppaFbInit(){FB.init({status:true,xfbml:true});wppaFbInitBusy=false;}
function wppaInsertAtCursor(elm,value){if(document.selection){elm.focus();sel=document.selection.createRange();sel.text=value;}
else if(elm.selectionStart||elm.selectionStart=='0'){var startPos=elm.selectionStart;var endPos=elm.selectionEnd;elm.value=elm.value.substring(0,startPos)
+value
+elm.value.substring(endPos,elm.value.length);elm.selectionStart=startPos+value.length;elm.selectionEnd=startPos+value.length;}else{elm.value+=value;}}
function wppaGeoInit(mocc,lat,lon){var myLatLng=new google.maps.LatLng(lat,lon);var mapOptions={disableDefaultUI:false,panControl:false,zoomControl:true,mapTypeControl:true,scaleControl:true,streetViewControl:true,overviewMapControl:true,zoom:10,center:myLatLng,};var map=new google.maps.Map(document.getElementById("map-canvas-"+mocc),mapOptions);var marker=new google.maps.Marker({position:myLatLng,map:map,title:""});google.maps.event.addListener(map,"center_changed",function(){window.setTimeout(function(){map.panTo(marker.getPosition());},1000);});}
function wppaEncode(xtext){var text,result;if(typeof(xtext)=='undefined')return;text=xtext;result=text.replace(/#/g,'||HASH||');text=result;result=text.replace(/&/g,'||AMP||');text=result;var temp=text.split('+');var idx=0;result='';while(idx<temp.length){result+=temp[idx];idx++;if(idx<temp.length)result+='||PLUS||';}
return result;}
function wppaUrlToId(url){var temp=url.split('/wppa/');if(temp.length==1){temp=url.split('/upload/');}
if(temp.length==1){return 0;}
temp=temp[1];temp=temp.split('.');temp=temp[0].replace('/','');temp=temp.replace('/','');temp=temp.replace('/','');temp=temp.replace('/','');temp=temp.replace('/','');return temp;}
function wppaSuperSearchSelect(mocc,go){jQuery('#wppa-ss-albumopt-'+mocc).css('display','none');jQuery('#wppa-ss-albumcat-'+mocc).css('display','none');jQuery('#wppa-ss-albumname-'+mocc).css('display','none');jQuery('#wppa-ss-albumtext-'+mocc).css('display','none');jQuery('#wppa-ss-photoopt-'+mocc).css('display','none');jQuery('#wppa-ss-photoname-'+mocc).css('display','none');jQuery('#wppa-ss-photoowner-'+mocc).css('display','none');jQuery('#wppa-ss-phototag-'+mocc).css('display','none');jQuery('#wppa-ss-phototext-'+mocc).css('display','none');jQuery('#wppa-ss-photoexif-'+mocc).css('display','none');jQuery('#wppa-ss-photoiptc-'+mocc).css('display','none');jQuery('#wppa-ss-exifopts-'+mocc).css('display','none');jQuery('#wppa-ss-iptcopts-'+mocc).css('display','none');jQuery('#wppa-ss-spinner-'+mocc).css('display','none');jQuery('#wppa-ss-button-'+mocc).css('display','none');var s1=jQuery('#wppa-ss-pa-'+mocc).val();var s2='';var s3='';var data='';switch(s1){case'a':jQuery('#wppa-ss-albumopt-'+mocc).css('display','');s2=jQuery('#wppa-ss-albumopt-'+mocc).val();switch(s2){case'c':jQuery('#wppa-ss-albumcat-'+mocc).css('display','');var set=jQuery('.wppa-ss-albumcat-'+mocc);data='';var i;for(i=0;i<set.length;i++){if(jQuery(set[i]).attr('selected')=='selected'){data+='.'+jQuery(set[i]).val();}}
data=data.substr(1);if(data!=''){jQuery('#wppa-ss-button-'+mocc).css('display','');}
break;case'n':jQuery('#wppa-ss-albumname-'+mocc).css('display','');data=jQuery('#wppa-ss-albumname-'+mocc).val();if(data!=null){jQuery('#wppa-ss-button-'+mocc).css('display','');}
break;case't':jQuery('#wppa-ss-albumtext-'+mocc).css('display','');var set=jQuery('.wppa-ss-albumtext-'+mocc);data='';var i;for(i=0;i<set.length;i++){if(jQuery(set[i]).attr('selected')=='selected'){data+='.'+jQuery(set[i]).val();}}
data=data.substr(1);if(data!=''){jQuery('#wppa-ss-button-'+mocc).css('display','');}
break;}
break;case'p':jQuery('#wppa-ss-photoopt-'+mocc).css('display','');s2=jQuery('#wppa-ss-photoopt-'+mocc).val();switch(s2){case'n':jQuery('#wppa-ss-photoname-'+mocc).css('display','');data=jQuery('#wppa-ss-photoname-'+mocc).val();if(data!=null){jQuery('#wppa-ss-button-'+mocc).css('display','');}
break;case'o':jQuery('#wppa-ss-photoowner-'+mocc).css('display','');data=jQuery('#wppa-ss-photoowner-'+mocc).val();if(data!=null){jQuery('#wppa-ss-button-'+mocc).css('display','');}
break;case'g':jQuery('#wppa-ss-phototag-'+mocc).css('display','');var set=jQuery('.wppa-ss-phototag-'+mocc);data='';var i;for(i=0;i<set.length;i++){if(jQuery(set[i]).attr('selected')=='selected'){data+='.'+jQuery(set[i]).val();}}
data=data.substr(1);if(data!=''){jQuery('#wppa-ss-button-'+mocc).css('display','');}
break;case't':jQuery('#wppa-ss-phototext-'+mocc).css('display','');var set=jQuery('.wppa-ss-phototext-'+mocc);data='';var i;for(i=0;i<set.length;i++){if(jQuery(set[i]).attr('selected')=='selected'){data+='.'+jQuery(set[i]).val();}}
data=data.substr(1);if(data!=''){jQuery('#wppa-ss-button-'+mocc).css('display','');}
break;case'i':jQuery('#wppa-ss-photoiptc-'+mocc).css('display','');s3=jQuery('#wppa-ss-photoiptc-'+mocc).val();if(s3){if(s3.length>2){s3=s3.replace('#','H');}
if(s3!=''){jQuery('#wppa-ss-iptcopts-'+mocc).css('display','');if(wppaLastIptc!=s3){wppaAjaxGetSsIptcList(mocc,s3,'wppa-ss-iptcopts-'+mocc);wppaLastIptc=s3;}
else{data=jQuery('#wppa-ss-iptcopts-'+mocc).val();if(data!=null&&data!=''){jQuery('#wppa-ss-button-'+mocc).css('display','');}}}}
break;case'e':jQuery('#wppa-ss-photoexif-'+mocc).css('display','');s3=jQuery('#wppa-ss-photoexif-'+mocc).val();if(s3){if(s3.length>2){s3=s3.replace('#','H');}
if(s3!=''){jQuery('#wppa-ss-exifopts-'+mocc).css('display','');if(wppaLastExif!=s3){wppaAjaxGetSsExifList(mocc,s3,'wppa-ss-exifopts-'+mocc);wppaLastExif=s3;}
else{data=jQuery('#wppa-ss-exifopts-'+mocc).val();if(data!=null&&data!=''){jQuery('#wppa-ss-button-'+mocc).css('display','');}}}}
break;}
break;}
if(go){var url=jQuery('#wppa-ss-pageurl-'+mocc).val();if(url.indexOf('?')==-1){url+='?';}
else{url+='&';}
url+='occur=1&wppa-supersearch='+s1+','+s2+','+s3+','+data;document.location.href=url;}}
function wppaAjaxGetSsIptcList(mocc,s3,selid){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=getssiptclist'+'&tag='+s3+'&moccur='+mocc,async:true,type:'GET',timeout:10000,beforeSend:function(xhr){jQuery('#wppa-ss-spinner-'+mocc).css('display','');},success:function(result,status,xhr){jQuery('#'+selid).html(result);jQuery('#wppa-ss-iptcopts-'+mocc).css('display','');wppaSuperSearchSelect(mocc);setTimeout('wppaSetIptcExifSize( ".wppa-iptclist-'+mocc+'", "#'+selid+'" )',10);},error:function(xhr,status,error){wppaConsoleLog('wppaAjaxGetSsIptcList failed. Error = '+error+', status = '+status,'force');},complete:function(xhr,status,newurl){jQuery('#wppa-ss-spinner-'+mocc).css('display','none');}});}
function wppaAjaxGetSsExifList(mocc,s3,selid){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=getssexiflist'+'&tag='+s3+'&moccur='+mocc,async:true,type:'GET',timeout:10000,beforeSend:function(xhr){jQuery('#wppa-ss-spinner-'+mocc).css('display','');},success:function(result,status,xhr){jQuery('#'+selid).html(result);jQuery('#wppa-ss-exifopts-'+mocc).css('display','');wppaSuperSearchSelect(mocc);setTimeout('wppaSetIptcExifSize( ".wppa-exiflist-'+mocc+'", "#'+selid+'" )',10);},error:function(xhr,status,error){wppaConsoleLog('wppaAjaxGetSsExifList failed. Error = '+error+', status = '+status,'force');},complete:function(xhr,status,newurl){jQuery('#wppa-ss-spinner-'+mocc).css('display','none');}});}
function wppaSetIptcExifSize(clas,selid){var t=jQuery(clas);var n=t.length;if(n>6)n=6;if(n<2)n=2;jQuery(selid).attr('size',n);}
function wppaUpdateSearchRoot(text,root){var items=jQuery(".wppa-search-root");var i=0;while(i<items.length){jQuery(items[i]).html(text);i++;}
items=jQuery(".wppa-rootbox");i=0;while(i<items.length){if(root){jQuery(items[i]).removeAttr('checked');jQuery(items[i]).removeAttr('disabled');}
else{jQuery(items[i]).attr('checked','checked');jQuery(items[i]).attr('disabled','disabled');}
i++;}
items=jQuery(".wppa-search-root-id");i=0;while(i<items.length){jQuery(items[i]).attr('value',root);i++;}}
function wppaSubboxChange(elm){if(jQuery(elm).attr('checked')=='checked'){var items=jQuery(".wppa-rootbox");var i=0;while(i<items.length){jQuery(items[i]).attr('checked','checked');i++;}}}
function wppaClearSubsearch(){var items=jQuery(".wppa-display-searchstring");var i=0;while(i<items.length){jQuery(items[i]).html('');i++;}
items=jQuery(".wppa-search-sub-box");i=0;while(i<items.length){jQuery(items[i]).attr('disabled','disabled');i++;}}
function wppaEnableSubsearch(){var items=jQuery(".wppa-search-sub-box");var i=0;while(i<items.length){jQuery(items[i]).removeAttr('disabled');i++;}}
wppaConsoleLog('wppa.js version '+wppaJsVersion+' loaded.','force');