function blogger_thumbs(e){for(var t=10,i=0;t>i;i++){var r,n=e.feed.entry[i];n.title.$t;if(i==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++){if("replies"==n.link[o].rel&&"text/html"==n.link[o].type){n.link[o].title,n.link[o].href}if("alternate"==n.link[o].rel){r=n.link[o].href;break}}var l;try{l=n.media$image.url}catch(h){s=n.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),l=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"no-image.jpg"}var p=l.split("/"),f=p[p.length-7];"2.bp.blogspot.com"==f||"3.bp.blogspot.com"==f||"4.bp.blogspot.com"==f||"1.bp.blogspot.com"==f?global_blog_thumb[i]="http://"+f+"/"+p[p.length-6]+"/"+p[p.length-5]+"/"+p[p.length-4]+"/"+p[p.length-3]+"/s200/"+p[p.length-1]:global_blog_thumb[i]=l}}jQuery(document).ready(function(e){jQuery("#ticker1").rssfeed("https://queryfeed.net/twitter?q=from%3Adavithace&geocode=&omit-direct=on&attach=on",{snippet:!0})});var global_date=[],global_media=[],global_content=[],global_tweet_id=[],global_blog_thumb=[];!function(e){function t(t,a,s,o,h,d,p,f,u,m,g){var v,b,w,k=e(".stream",h),y=[],x=d.limit;switch(frl="https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json_xml&num="+x+"&callback=?&q=",t){case"custom_twitter":b=a,w=frl+encodeURIComponent(a);break;case"instagram":b="#",w="https://api.instagram.com/v1";var _=a.substr(0,1),j=a.split(_),D=encodeURIComponent(j[1]),T="",M=0;switch(_){case"?":var S=j[1].split("/");T="&lat="+S[0]+"&lng="+S[1]+"&distance="+S[2],w+="/media/search";break;case"#":w+="/tags/"+D+"/media/recent",M=1;break;case"!":w+="/users/"+D+"/media/recent";break;case"@":w+="/locations/"+D+"/media/recent"}""==o.accessToken&&0==M&&(location.hash?o.accessToken=location.hash.split("=")[1]:location.href="https://instagram.com/oauth/authorize/?client_id="+o.clientId+"&redirect_uri="+o.redirectUrl+"&response_type=token"),w+="?access_token="+o.accessToken+"&client_id="+o.clientId+"&count="+x+T}var C="twitter"==t?"json":"jsonp";jQuery.ajax({url:w,data:v,cache:d.cache,dataType:C,success:function(r){var c="";switch(t){case"facebook":_.length>1?r=r.data:200==r.responseStatus?r=r.responseData.feed.entries:c=r.responseDetails;break;case"google":c=r.error?r.error:"",r=r.items;break;case"flickr":r=r.items;break;case"instagram":r=r.data;break;case"twitter":c=r.errors?r.errors:"",j.length>1&&(r=r.statuses);break;case"youtube":if(200==r.responseStatus){if(r=r.responseData.feed.entries,_.length>1){_[0]}}else c=r.responseDetails;break;case"dribbble":r=r.shots;break;case"tumblr":r=r.posts;break;case"delicious":break;case"vimeo":break;default:200==r.responseStatus?r=r.responseData.feed.entries:c=r.responseDetails}if(""==c){var l=-1;e.each(r,function(r,c){if(x>r){var h=c.link,m='<a href="'+b+'">'+a+"</a>",v="",w='<a href="'+h+'">'+c.title+"</a>",k="",_="",j="",D="",T=c.publishedDate,M=(c.title,"");switch(t){case"rss":_=c[o.text];break;case"custom_facebook":_=c[o.text];break;case"custom_twitter":z1=global_content[l+1],z2='<span class="section-share"><a href="https://twitter.com/intent/tweet?in_reply_to='+global_tweet_id[l+1]+'" class="share-reply"></a><a href="https://twitter.com/intent/retweet?tweet_id='+global_tweet_id[l+1]+'" class="share-retweet"></a><a href="https://twitter.com/intent/favorite?tweet_id='+global_tweet_id[l+1]+'" class="share-favorite"></a></span>',_=z1+z2}icon='<a href="'+h+'"><img src="'+s+o.icon+'" alt="" class="icon" /></a>',l+=1,e.each(o.out.split(","),function(a,s){switch(j+="intro"!=s?'<span class="section-'+s+'">':"",s){case"intro":"twitter"==t?zintro='<span class="section-'+s+'"><a href="'+h+'">'+decodeURIComponent(u)+'</a> <span><a href="https://twitter.com/'+un+"/status/"+c.id_str+'">'+i(new Date(T).getTime(),0)+"</a></span></span>":zintro='<span class="section-'+s+'"><a href="'+h+'">'+decodeURIComponent(u)+"</a> <span>"+i(new Date(T).getTime(),0)+"</span></span>";break;case"title":j+=w;break;case"thumb_enc":var r=c.content.indexOf("img")>=0?e("img",c.content).attr("src"):"";k=r?'<a href="'+h+'" ><img height="auto" width="10%" src="'+r+'" /></a>':"","undefined"==typeof global_media[l]?(yz="",k=""):yz='<a href="'+h+'" class="thumb"><img height="auto" width="70%" src="'+global_media[l]+':thumb" alt="" style="border: 1px solid #ccc;"/></a>',yc="<div><i>"+global_date[l]+"</i></div>",j+=k+yz+yc;break;case"text":j+=_;break;case"user":j+=m;break;case"meta":j+=D;break;case"share":j+=M}j+="intro"!=s?"</span>":""});var S="instagram"==t?i(T,1):i(new Date(T).getTime(),1),C=S;switch(d.order){case"random":C=n(6);break;case"none":C=1}var I='<li rel="'+C+'" class="dcsns-li dcsns-'+t+" dcsns-feed-"+g+'">'+v+'<div class="inner">'+j+'<span class="clear"></span></div>'+zintro+icon+"</li>",Q=d.remove;if(-1!==Q.indexOf(h)&&""!=h)x+=1;else if("days"==d.max){if(86400*f>=S&&S>=86400*p)y.push(I);else if(S>86400*f)return!1}else y.push(I)}})}else 1==d.debug&&y.push('<li class="dcsns-li dcsns-error">Error. '+c+"</li>")},complete:function(){var s=e(y.join(""));1==d.wall?k.isotope("insert",s):(k.append(s),r(k,"asc")),"facebook"==t&&_.length<2?c(a,s):"flickr"==t&&j.length>1&&l(j[1],s)}})}function a(e){return e=e.replace(/((https?\:\/\/)|(www\.)|(pic\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,function(e){if(e.length>=30)t=e,e=e.substring(0,30);else var t=e.match("^https?://")?e:"http://"+e;return'<a href="'+t+'">'+e+"</a>"}),e=e.replace(/(^|\s)@(\w+)/g,'$1@<a href="http://www.twitter.com/$2">$2</a>')}function i(e,t){var a=Math.round((+new Date-e)/1e3),i="",r="mins";if(1==t)return a;if(0==t){var n=new Array;n[0]=[31536e3,"year","years"],n[1]=[2592e3,"month","months"],n[2]=[604800,"week","weeks"],n[3]=[86400,"day","days"],n[4]=[3600,"hr","hrs"],n[5]=[60,"min","mins"];var o=0,c=n.length;for(o=0;c>o;o++)if(s=n[o][0],0!=(xj=Math.floor(a/s))){r=1==xj?n[o][1]:n[o][2];break}return i+=1==xj?"1 "+r:xj+" "+r,c>o+1&&(s2=n[o+1][0],0!=(xj2=Math.floor((a-s*xj)/s2))&&(n2=1==xj2?n[o+1][1]:n[o+1][2],i+=1==xj2?" + 1 "+n2:" + "+xj2+" "+n2)),i+=" ago"}}function r(t,a){var s=e("li",t);s.sort(function(t,s){var i=parseInt(e(t).attr("rel"),10),r=parseInt(e(s).attr("rel"),10);return"asc"==a?i>r?1:-1:r>i?1:-1}),e.each(s,function(e,a){t.append(a)}),e(".dcsns-loading").slideUp().remove()}function n(e){for(var t=0,a="";e>t;)a+=Math.floor(10*Math.random()+1)+"",t++;return a}function o(t,a,s){var i,r=e("li:last",t),n=e("li:first",t),c=n.outerHeight(!0);if(e("li",t).not(".inactive").length>2)if("next"==a){if(i=r.clone().hide(),n.before(i),r.remove(),!r.hasClass("inactive"))return e(".inner",i).css({opacity:0}),void i.slideDown(s,"linear",function(){e(".inner",this).animate({opacity:1},s)});o(t,a,s)}else i=n.clone(),n.hasClass("inactive")?(r.after(i),n.remove(),o(t,a,s)):(n.animate({marginTop:-c+"px"},s,"linear",function(){r.after(i),n.remove()}),e(".inner",n).animate({opacity:0},s))}function c(t,a){jQuery.ajax({url:"https://graph.facebook.com/"+t,dataType:"jsonp",success:function(t){e(".icon",a).each(function(){e(this).parent().attr("href",t.link)}),e(".section-user a",a).each(function(){e(this).attr("href",t.link),e(this).text(t.name)})}})}function l(t,a){jQuery.ajax({url:"http://api.flickr.com/services/feeds/groups_pool.gne?id="+t+"&format=json&jsoncallback=?",dataType:"jsonp",success:function(t){e(".icon",a).each(function(){e(this).parent().attr("href",t.link)})}})}e.fn.rssfeed=function(t,a,s){var i={limit:10,offset:1,header:!0,titletag:"h4",date:!0,dateformat:"datetime",content:!0,snippet:!0,media:!0,showerror:!0,errormsg:"",key:null,ssl:!1,linktarget:"_self",linkredirect:"",linkcontent:!1,sort:"",sortasc:!0,historical:!1},a=e.extend(i,a);return this.each(function(i,r){var n=e(r),o="";if(a.ssl&&(o="s"),n.hasClass("rssFeed")||n.addClass("rssFeed"),null==t)return!1;a.offset>0&&(a.offset-=1),a.limit+=a.offset;var c="http"+o+"://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(t);c+="&num="+a.limit,a.historical&&(c+="&scoring=h"),null!=a.key&&(c+="&key="+a.key),c+="&output=json_xml",e.getJSON(c,function(t){if(200==t.responseStatus)h(r,t.responseData,a),e.isFunction(s)&&s.call(this,n);else{if(a.showerror)if(""!=a.errormsg)var i=a.errormsg;else var i=t.responseDetails;e(r).html('<div class="rssError"><p>'+i+"</p></div>")}})})};var h=function(t,s,i){var r=s.feed;if(!r)return!1;var n=[],o=0,c="",l="odd";if(i.media)var h=m(s.xmlString),f=h.getElementsByTagName("item");i.header&&(c+='<div class="rssHeader"><a href="'+r.link+'" title="'+r.description+'">'+r.title+"</a></div>"),c+='<div class="rssBody"><ul>';for(var u=i.offset;u<r.entries.length;u++){o=u-i.offset,n[o]=[];var v,b=r.entries[u],w="",k=b.link;switch(i.sort){case"title":w=b.title;break;case"date":w=b.publishedDate}if(n[o].sort=w,b.publishedDate){var y=new Date(b.publishedDate),v=y.toLocaleDateString()+" "+y.toLocaleTimeString();switch(i.dateformat){case"datetime":break;case"date":v=y.toLocaleDateString();break;case"time":v=y.toLocaleTimeString();break;case"timeline":v=g(y);break;default:v=p(y,i.dateformat)}}if(i.linkredirect&&(k=encodeURIComponent(k)),n[o].html="",global_tweet_id[u]=/[^\/]*$/.exec(i.linkredirect+k)[0],i.date&&v&&(global_date[u]=v),i.content){if(i.snippet&&""!=b.contentSnippet)var x=b.contentSnippet;else var x=b.content;i.linkcontent&&(x='<a href="'+i.linkredirect+k+'" title="View details at '+r.title+'">'+x+"</a>"),n[o].html+="<p>"+x+"</p>",global_content[u]=a(n[o].html)}if(i.media&&f.length>0){var _=f[u].getElementsByTagName("enclosure");if(_.length>0){n[o].html+='<div class="rssMedia"><div>Media files</div><ul>';for(var j=0;j<_.length;j++){var D=_[j].getAttribute("url"),T=_[j].getAttribute("type"),M=_[j].getAttribute("length");n[o].html+='<li><a href="'+D+'" title="Download this media">'+D.split("/").pop()+"</a> ("+T+", "+d(M)+")</li>",global_media[u]=D}n[o].html+="</ul></div>"}}}i.sort&&n.sort(function(e,t){if(i.sortasc)var a=e.sort,s=t.sort;else var a=t.sort,s=e.sort;return"date"==i.sort?new Date(a)-new Date(s):(a=a.toLowerCase(),s=s.toLowerCase(),s>a?-1:a>s?1:0)}),e.each(n,function(e){c+='<li class="rssRow '+l+'">'+n[e].html+"</li>",l="odd"==l?"even":"odd"}),c+="</ul></div>"},d=function(e){var t=["bytes","kb","MB","GB","TB","PB"],a=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,Math.floor(a))).toFixed(2)+" "+t[a]},p=function(e,t){var a=new Date(e);return e=t,e=e.replace("dd",f(a.getDate())),e=e.replace("MMMM",u(a.getMonth())),e=e.replace("MM",f(a.getMonth()+1)),e=e.replace("yyyy",a.getFullYear()),e=e.replace("hh",f(a.getHours())),e=e.replace("mm",f(a.getMinutes())),e=e.replace("ss",f(a.getSeconds()))},f=function(e){return e+="",e.length<2&&(e="0"+e),e},u=function(e){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return t[e]},m=function(e){var t,a=navigator.appName;return"Microsoft Internet Explorer"==a?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t},g=function(e){var t=new Date,a=new Date(e),s=Math.round((t.getTime()-a.getTime())/1e3);if(60>s)return"< 1 min";if(3600>s)var i=Math.round(s/60)-1,r="min";else if(86400>s)var i=Math.round(s/3600)-1,r="hour";else if(604800>s)var i=Math.round(s/86400)-1,r="day";else var i=Math.round(s/604800)-1,r="week";return i>1&&(r+="s"),i+" "+r};SocialStreamObject=function(e,t){this.create(e,t)},e.extend(SocialStreamObject.prototype,{version:"1.5.7",create:function(t,a){this.defaults={feeds:{custom_twitter:{id:"",intro:"Tweeted",out:"intro,title,text",text:"contentSnippet",icon:"twitter.png"}},remove:"",twitterId:"",days:10,limit:50,max:"days",external:!0,speed:600,height:550,wall:!1,order:"date",filter:!0,controls:!0,rotate:{direction:"up",delay:8e3},transition:"0.8s",cache:!0,container:"dcsns",cstream:"stream",content:"dcsns-content",iconPath:"",imagePath:"",debug:!1},this.o={},this.timer_on=0,this.id="dcsns-"+e(t).index(),this.timerId="",this.o=e.extend(!0,this.defaults,a),opt=this.o,$load=e('<div class="dcsns-loading">creating stream ...</div>'),e(t).addClass(this.o.container).append('<div class="'+this.o.content+'"><ul class="'+this.o.cstream+'"></ul></div>');var s=e("."+this.o.content,t),i=e("."+this.o.cstream,t);e("li",i);opt.height>0&&0==opt.wall&&s.css({height:opt.height+"px"}),1==this.o.wall?(e(".dcsns-toolbar").append($load),this.createwall(i)):s.append($load),this.createstream(t,i,0,opt.days),this.addevents(t,i),this.o.rotate.delay>0&&this.rotate(t),$load.remove()},createstream:function(a,s,i,r){e.each(opt.feeds,function(s,n){if(""!=opt.feeds[s].id){var o=[];e.each(opt.feeds[s].intro.split(","),function(t,a){a=e.trim(a),o.push(a)}),e.each(opt.feeds[s].id.split(","),function(n,c){c=e.trim(c),opt.feeds[s].feed&&c.split("#").length<2?"youtube"==s&&c.split("/").length>1?t(s,c,opt.iconPath,opt.feeds[s],a,opt,i,r,"posted","",n):e.each(opt.feeds[s].feed.split(","),function(e,n){t(s,c,opt.iconPath,opt.feeds[s],a,opt,i,r,o[e],n,e)}):(intro=c.split("#").length<2?opt.feeds[s].intro:opt.feeds[s].search,t(s,c,opt.iconPath,opt.feeds[s],a,opt,i,r,intro,"",n))})}})},createwall:function(t){t.isotope({itemSelector:"li.dcsns-li",transitionDuration:opt.transition,getSortData:{postDate:function(t){return parseInt(e(t).attr("rel"),10)}},sortBy:"postDate"})},addevents:function(t,a){var s=this,i=this.o.speed;e(".stream",t);e(".controls",t).delegate("a","click",function(){var r=e(this).attr("class");switch(r){case"prev":s.pauseTimer(),o(a,"prev",i);break;case"next":s.pauseTimer(),o(a,"next",i);break;case"play":s.rotate(t),e(".controls .play").removeClass("play").addClass("pause");break;case"pause":s.pauseTimer()}return!1}),e(".filter",t).delegate("a","click",function(){if(0==opt.wall){var t=e(this).attr("rel");e(this).parent().hasClass("active")?(e(".dcsns-"+t,a).slideUp().addClass("inactive"),e(this).parent().animate({opacity:.3},400)):(e(".dcsns-"+t,a).slideDown().removeClass("inactive"),e(this).parent().animate({opacity:1},400)),e(this).parent().toggleClass("active")}return!1}),this.o.external&&a.delegate("a","click",function(){e(this).parent().hasClass("section-share")||(this.target="_blank")})},rotate:function(t){var a=this,s=e("."+this.o.cstream,t),i=this.o.speed,r=this.o.rotate.delay,n="up"==this.o.rotate.direction?"prev":"next";this.timer_on=1,e(".controls .play").removeClass("play").addClass("pause"),this.timerId=setTimeout(function(){o(s,n,i),a.rotate(t)},r)},pauseTimer:function(){clearTimeout(this.timerId),this.timer_on=0,e(".controls .pause").removeClass("pause").addClass("play")}}),e.fn.dcSocialStream=function(t,a){var s={};return this.each(function(){var i=e(this);s=i.data("socialtabs"),s||(s=new SocialStreamObject(this,t,a),i.data("socialtabs",s))}),s},Date.prototype.setRFC3339=function(e){var t,a,s,i=1,r=e.split("T"),n=r[0].split("-"),o=r[1].split(":"),c=o[o.length-1];return offsetFieldIdentifier=c.charAt(c.length-1),"Z"==offsetFieldIdentifier?(t=0,o[o.length-1]=c.substr(0,c.length-2)):(-1!=c[c.length-1].indexOf("+")?(a="+",i=1):(a="-",i=-1),s=c.split(a),o[o.length-1]==s[0],s=s[1].split(":"),t=60*s[0]+s[1],t=60*t*1e3),this.setTime(Date.UTC(n[0],n[1]-1,n[2],o[0],o[1],o[2])+t*i),this},Date.prototype.setFbAlbum=function(e){var t,a="+",s=1,i=e.split("T"),r=i[0].split("-"),n=i[1].split(":"),o=n[n.length-1];return-1!=o[o.length-1].indexOf("+")&&(a="-",s=-1),offsetTime=o.split(a),t=60*parseInt(offsetTime[1]/100,10)*1e3,this.setTime(Date.UTC(r[0],r[1]-1,r[2],n[0],n[1],offsetTime[0])+t*s),this},Date.prototype.setVimeo=function(e){var t=0,a=1,s=e.split(" "),i=s[0].split("-"),r=s[1].split(":");return this.setTime(Date.UTC(i[0],i[1]-1,i[2],r[0],r[1],r[2])+t*a),this}}(jQuery),jQuery(window).load(function(){jQuery.getScript("//platform.twitter.com/widgets.js",function(){}),jQuery(".section-share a").click(function(){var e=jQuery(this).attr("href");return window.open(e,"sharer","toolbar=0,status=0,width=626,height=436"),!1}),jQuery(".dcsns-facebook .section-text a").each(function(e){var t=jQuery(this).attr("href"),a=decodeURIComponent(t.replace("http://l.facebook.com/l.php?u=","")).split("&");jQuery(this).attr("href",a[0]),t=jQuery(this).attr("href"),a=decodeURIComponent(t.replace("https://www.facebook.com/l.php?u=","")).split("&"),jQuery(this).attr("href",a[0])}),jQuery(".dcsns-facebook .section-text a img").each(function(e){jQuery(this).parent().attr("href").split("http").length<2&&jQuery(this).parent().attr("href","https://facebook.com"+jQuery(this).parent().attr("href"))}),jQuery("#social-stream").dcSocialStream({feeds:{custom_twitter:{id:"https://queryfeed.net/twitter?q=from%3Adavithace&geocode=&omit-direct=on&attach=on",intro:"Tweet",out:"intro,text,thumb_enc",text:"contentSnippet",icon:"twitter.png"}},rotate:{delay:0},twitterId:"davithace",control:!1,filter:!0,wall:!0,center:!0,cache:!0,max:"limit",limit:10,iconPath:"https://davithace.github.io/davidprasetyo/images/dcsns-dark/",imagePath:"https://davithace.github.io/davidprasetyo/images/dcsns-dark/"})});
