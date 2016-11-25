// wppa-ajax-front.js
//
// Contains frontend ajax modules
// Dependancies: wppa.js and default wp jQuery library
// 

var wppaJsAjaxVersion='6.4.06';var wppaRenderAdd=false;var wppaWaitForCounter=0;function wppaDoAjaxRender(mocc,ajaxurl,newurl,add,waitfor){if(parseInt(waitfor)>0&&waitfor!=wppaWaitForCounter){setTimeout('wppaDoAjaxRender( '+mocc+', \''+ajaxurl+'\', \''+newurl+'\', \''+add+'\', '+waitfor+' )',100);return;}
wppaRenderAdd=add;if(wppaLang!='')ajaxurl+='&lang='+wppaLang;if(wppaCanAjaxRender){jQuery.ajax({url:ajaxurl,async:true,type:'GET',timeout:60000,beforeSend:function(xhr){if(_wppaSSRuns[mocc])_wppaStop(mocc);jQuery('#wppa-ajax-spin-'+mocc).css('display','');},success:function(result,status,xhr){if(wppaRenderAdd){jQuery(wppaRenderAdd+result).insertBefore('#wppa-container-'+mocc+'-end');}
else{jQuery('#wppa-container-'+mocc).html(result);}
if(wppaCanPushState&&wppaUpdateAddressLine){wppaHis++;try{history.pushState({page:wppaHis,occur:mocc,type:'html',html:result},"",newurl);wppaConsoleLog('Ajax rendering: History stack pushed','force');}
catch(err){try{history.replaceState({page:wppaHis,occur:mocc,type:'html'},"",newurl);wppaConsoleLog('Ajax rendering: History stack updated','force');}
catch(err){wppaConsoleLog('Ajax rendering: History stack update failed','force');}}
if(wppaFirstOccur==0)wppaFirstOccur=mocc;}
wppaUpdateLightboxes();if(typeof(wppaQRUpdate)!='undefined')wppaQRUpdate(newurl);wppaColWidth[mocc]=0;_wppaDoAutocol(mocc);jQuery('#speed0-'+mocc).html(wppaSlower);jQuery('#speed1-'+mocc).html(wppaFaster);jQuery('#wppa-ajax-spin-'+mocc).css('display','none');var scriptPos=result.indexOf('<script');var scriptPosLast=result.lastIndexOf('<script');if(scriptPos==-1){wppaConsoleLog('Ajax render did NOT contain a script tag','force');}
else{wppaConsoleLog('Ajax render did contain a script tag at position '+scriptPos+' last at '+scriptPosLast,'force');}},error:function(xhr,status,error){wppaConsoleLog('wppaDoAjaxRender failed. Error = '+error+', status = '+status,'force');document.location.href=newurl;wppaColWidth[mocc]=0;_wppaDoAutocol(mocc);},complete:function(xhr,status,newurl){wppaWaitForCounter++;jQuery('html, body').animate({scrollTop:jQuery("#wppa-container-"+mocc).offset().top-32},1000);}});}
else{document.location.href=newurl;wppaColWidth[mocc]=0;_wppaDoAutocol(mocc);}}
function wppaAjaxApprovePhoto(photo){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=approve'+'&photo-id='+photo,async:true,type:'GET',timeout:60000,success:function(result,status,xhr){if(result=='OK'){jQuery('.wppa-approve-'+photo).css('display','none');}
else{alert(result);}},error:function(xhr,status,error){wppaConsoleLog('wppaAjaxApprovePhoto failed. Error = '+error+', status = '+status,'force');},});}
function wppaAjaxRemovePhoto(mocc,photo,isslide){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=remove'+'&photo-id='+photo,async:true,type:'GET',timeout:60000,success:function(result,status,xhr){rtxt=result.split('||');if(rtxt[0]=='OK'){if(isslide){jQuery('#wppa-film-'+_wppaCurIdx[mocc]+'-'+mocc).attr('src','');jQuery('#wppa-pre-'+_wppaCurIdx[mocc]+'-'+mocc).attr('src','');jQuery('#wppa-film-'+_wppaCurIdx[mocc]+'-'+mocc).attr('alt','removed');jQuery('#wppa-pre-'+_wppaCurIdx[mocc]+'-'+mocc).attr('alt','removed');wppaNext(mocc);}
else{jQuery('.wppa-approve-'+photo).css('display','none');jQuery('.thumbnail-frame-photo-'+photo).css('display','none');}}
else{alert(result);}},error:function(xhr,status,error){wppaConsoleLog('wppaAjaxRemovePhoto failed. Error = '+error+', status = '+status,'force');}});}
function wppaAjaxApproveComment(comment){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=approve'+'&comment-id='+comment,async:true,type:'GET',timeout:60000,success:function(result,status,xhr){if(result=='OK'){jQuery('.wppa-approve-'+comment).css('display','none');}
else{alert(result);}},error:function(xhr,status,error){wppaConsoleLog('wppaAjaxApproveComment failed. Error = '+error+', status = '+status,'force');}});}
function wppaAjaxRemoveComment(comment){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=remove'+'&comment-id='+comment,async:true,type:'GET',timeout:60000,success:function(result,status,xhr){var rtxt=result.split('||');if(rtxt[0]=='OK'){jQuery('.wppa-approve-'+comment).css('display','none');jQuery('.wppa-comment-'+comment).css('display','none');}
else{alert(result);}},error:function(xhr,status,error){wppaConsoleLog('wppaAjaxRemoveComment failed. Error = '+error+', status = '+status,'force');},});}
function wppaAjaxAddPhotoToZip(mocc,id,reload){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=addtozip'+'&photo-id='+id,async:true,type:'GET',timeout:60000,success:function(result,status,xhr){var rtxt=result.split('||');if(rtxt[0]=='OK'){jQuery('#admin-choice-'+id+'-'+mocc).html(rtxt[1]);}
else{alert(result);}
if(reload){document.location.reload(true);}},error:function(xhr,status,error){wppaConsoleLog('wppaAjaxAddPhotoToZip failed. Error = '+error+', status = '+status,'force');},});}
function wppaAjaxDeleteMyZip(){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=delmyzip',async:true,type:'GET',timeout:60000,success:function(result,status,xhr){document.location.reload(true);},error:function(xhr,status,error){wppaConsoleLog('wppaAjaxDeleteMyZip failed. Error = '+error+', status = '+status,'force');},});}
function wppaEditPhoto(mocc,id){var name='Edit Photo '+id;var desc='';var width=960;var height=512;if(screen.availWidth<width)width=screen.availWidth;var wnd=window.open("","_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width="+width+", height="+height,true);jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=front-edit'+'&photo-id='+id+'&moccur='+mocc,async:true,type:'POST',timeout:60000,beforeSend:function(xhr){wnd.document.write('<! DOCTYPE html>');wnd.document.write('<html>');wnd.document.write('<head>');wnd.document.write('<link rel="stylesheet" id="wppa_style-css"  href="'+wppaWppaUrl+'/wppa-admin-styles.css?ver='+wppaVersion+'" type="text/css" media="all" />'+'<style>body {font-family: sans-serif; font-size: 12px; line-height: 1.4em;}a {color: #21759B;}</style>'+'<script type="text/javascript" src="'+wppaIncludeUrl+'/js/jquery/jquery.js?ver='+wppaVersion+'"></script>'+'<script type="text/javascript" src="'+wppaWppaUrl+'/js/wppa-utils.js?ver='+wppaVersion+'"></script>'+'<script type="text/javascript" src="'+wppaWppaUrl+'/js/wppa-admin-scripts.js?ver='+wppaVersion+'"></script>'+'<title>'+name+'</title>'+'<script type="text/javascript">wppaAjaxUrl="'+wppaAjaxUrl+'";</script>');wnd.document.write('</head>');wnd.document.write('<body>');},success:function(result,status,xhr){wnd.document.write(result);},error:function(xhr,status,error){wnd.document.write(status+' '+error);wppaConsoleLog('wppaEditPhoto failed. Error = '+error+', status = '+status,'force');},complete:function(xhr,status,newurl){wnd.document.write('<script>wppaPhotoStatusChange( '+id+' )</script>');wnd.document.write('</body>');wnd.document.write('</html>');}});}
function wppaPrevTags(tagsSel,tagsEdit,tagsAlbum,tagsPrev){var sel=jQuery('.'+tagsSel);var selArr=[];var editTag='';var album=jQuery('#'+tagsAlbum).val();var i=0;var j=0;var tags='';while(i<sel.length){if(sel[i].selected){selArr[j]=sel[i].value;j++;}
i++;}
editTag=jQuery('#'+tagsEdit).val();if(editTag!=''){selArr[j]=editTag;}
tags=selArr.join();if(editTag!=''||tagsAlbum!=''){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=sanitizetags'+'&tags='+tags+'&album='+album,async:true,type:'GET',timeout:60000,beforeSend:function(xhr){jQuery('#'+tagsPrev).html('Working...');},success:function(result,status,xhr){jQuery('#'+tagsPrev).html(wppaTrim(result,','));},error:function(xhr,status,error){jQuery('#'+tagsPrev).html('<span style="color:red" >'+error+'</span>');wppaConsoleLog('wppaPrevTags failed. Error = '+error+', status = '+status,'force');},});}}
function wppaAjaxDestroyAlbum(album,nonce){if(confirm('Are you sure you want to delete this album?')){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=destroyalbum'+'&album='+album+'&nonce='+nonce,async:true,type:'GET',timeout:60000,success:function(result,status,xhr){alert(result+'\n'+'Page will be reloaded');document.location.reload(true);},error:function(xhr,status,error){wppaConsoleLog('wppaAjaxDestroyAlbum failed. Error = '+error+', status = '+status,'force');},});}
return false;}
function _bumpViewCount(photo){if(!wppaBumpViewCount)return;if(wppaPhotoView[photo])return;jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=bumpviewcount'+'&wppa-photo='+photo+'&wppa-nonce='+jQuery('#wppa-nonce').val(),async:true,type:'GET',timeout:60000,success:function(result,status,xhr){wppaPhotoView[photo]=true;},error:function(xhr,status,error){wppaConsoleLog('_bumpViewCount failed. Error = '+error+', status = '+status,'force');},});}
function wppaVoteThumb(mocc,photo){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=rate'+'&wppa-rating=1'+'&wppa-rating-id='+photo+'&wppa-occur='+mocc+'&wppa-nonce='+jQuery('#wppa-nonce').val(),async:true,type:'GET',timeout:60000,success:function(result,status,xhr){jQuery('#wppa-vote-button-'+mocc+'-'+photo).val(wppaVotedForMe);},error:function(xhr,status,error){wppaConsoleLog('wppaVoteThumb failed. Error = '+error+', status = '+status,'force');},});}
function _wppaRateIt(mocc,value){if(value==0)return;if(_wppaSSRuns[mocc])return;var photo=_wppaId[mocc][_wppaCurIdx[mocc]];var oldval=_wppaMyr[mocc][_wppaCurIdx[mocc]];if(oldval!=0&&wppaRatingOnce)return;if(oldval<0)return;_wppaVoteInProgress=true;jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=rate'+'&wppa-rating='+value+'&wppa-rating-id='+photo+'&wppa-occur='+mocc+'&wppa-index='+_wppaCurIdx[mocc]+'&wppa-nonce='+jQuery('#wppa-nonce').val(),async:true,type:'GET',timeout:60000,beforeSend:function(xhr){jQuery('#wppa-rate-'+mocc+'-'+value).attr('src',wppaImageDirectory+'tick.png');jQuery('#wppa-rate-'+mocc+'-'+value).stop().fadeTo(100,1.0);},success:function(result,status,xhr){var ArrValues=result.split("||");if(ArrValues[0]==0){if(ArrValues[1]==900){alert(ArrValues[2]);_wppaSetRatingDisplay(mocc);}
else{alert('Error Code='+ArrValues[1]+'\n\n'+ArrValues[2]);}}
else{_wppaMyr[ArrValues[0]][ArrValues[2]]=ArrValues[3];_wppaAvg[ArrValues[0]][ArrValues[2]]=ArrValues[4];_wppaDisc[ArrValues[0]][ArrValues[2]]=ArrValues[5];_wppaSetRatingDisplay(mocc);if(wppaCommentRequiredAfterVote){if(ArrValues[6]==0){alert(ArrValues[7]);}}
if(wppaNextOnCallback)_wppaNextOnCallback(mocc);}},error:function(xhr,status,error){wppaConsoleLog('_wppaRateIt failed. Error = '+error+', status = '+status,'force');},});}
function wppaAjaxMakeOrigName(mocc,photo){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=makeorigname'+'&photo-id='+photo+'&from=fsname',async:true,type:'GET',timeout:60000,beforeSend:function(xhr){},success:function(result,status,xhr){var ArrValues=result.split("||");if(ArrValues[1]=='0'){if(wppaArtMonkyLink=='file')window.open(ArrValues[2]);if(wppaArtMonkyLink=='zip')document.location=ArrValues[2];}
else{alert('Error: '+ArrValues[1]+'\n\n'+ArrValues[2]);}},error:function(xhr,status,error){wppaConsoleLog('wppaAjaxMakeOrigName failed. Error = '+error+', status = '+status,'force');},complete:function(xhr,status,newurl){}});}
function wppaAjaxDownloadAlbum(mocc,id){jQuery.ajax({url:wppaAjaxUrl,data:'action=wppa'+'&wppa-action=downloadalbum'+'&album-id='+id,async:true,type:'GET',timeout:60000,beforeSend:function(xhr){jQuery('#dwnspin-'+mocc+'-'+id).css('display','');},success:function(result,status,xhr){var ArrValues=result.split("||");var url=ArrValues[0];var erok=ArrValues[1];var text=ArrValues[2];if(ArrValues.length==3&&text!='')alert('Attention:\n\n'+text);if(erok=='OK'){document.location=url;}
else{alert('The server could not complete the request.\nPlease try again.');}},error:function(xhr,status,error){alert('An error occurred:\n'+error+'\nPlease try again');},complete:function(xhr,status,newurl){jQuery('#dwnspin-'+mocc+'-'+id).css('display','none');}});}
function wppaAjaxComment(mocc,id){if(!_wppaValidateComment(mocc))return;var data='action=wppa'+'&wppa-action=do-comment'+'&photo-id='+id+'&comname='+jQuery("#wppa-comname-"+mocc).val()+'&comment='+wppaEncode(jQuery("#wppa-comment-"+mocc).val())+'&wppa-captcha='+jQuery("#wppa-captcha-"+mocc).val()+'&wppa-nonce='+jQuery("#wppa-nonce-"+mocc).val()+'&moccur='+mocc;if(typeof(jQuery("#wppa-comemail-"+mocc).val())!='undefined'){data+='&comemail='+jQuery("#wppa-comemail-"+mocc).val();}
if(typeof(jQuery("#wppa-comment-edit-"+mocc).val())!='undefined'){data+='&comment-edit='+jQuery("#wppa-comment-edit-"+mocc).val();}
if(typeof(jQuery("#wppa-returnurl-"+mocc).val())!='undefined'){data+='&returnurl='+encodeURIComponent(jQuery("#wppa-returnurl-"+mocc).val());}
jQuery.ajax({url:wppaAjaxUrl,data:data,async:true,type:'POST',timeout:60000,beforeSend:function(xhr){jQuery("#wppa-comment-spin-"+mocc).css('display','inline');},success:function(result,status,xhr){result=result.replace(/\\/g,'');jQuery("#wppa-comments-"+mocc).html(result);_wppaCommentHtml[mocc][_wppaCurIdx[mocc]]=result;wppaOpenComments(mocc);},error:function(xhr,status,error){wppaConsoleLog('wppaAjaxComment failed. Error = '+error+', status = '+status,'force');},complete:function(xhr,status,newurl){jQuery("#wppa-comment-spin-"+mocc).css('display','none');}});}
wppaConsoleLog('wppa-ajax-front.js version '+wppaJsAjaxVersion+' loaded.','force');