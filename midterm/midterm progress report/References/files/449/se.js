window.setStatusPageText=function(e){window.fetchStatusPage(e)},window.fetchStatusPage=function(e){var t=e.code||e.pageId;if(!t)throw"Must pass code or pageId to specify StatusPage.io account.";var n=e.secure===!1?"http":"https",r=(e.urlOverride||n+"://hosted.statuspage.io".replace("hosted",t))+"/index.json",i=new XMLHttpRequest;i.onreadystatechange=function(){if(i.readyState==4&&i.status==200){var t=JSON.parse(i.responseText);(e.renderTo||e.elem)&&o(t),e.successCallback&&e.successCallback(t)}},i.open("GET",r,!0),i.send();var s=function(e){var t='<a href="'+e.page.url+'" target="_blank">Check out our status page for more details.</a>';return e.status.description+". "+t},o=function(t){var n=document.querySelector(e.renderTo||e.elem);n&&(n.innerHTML=s(t))}};