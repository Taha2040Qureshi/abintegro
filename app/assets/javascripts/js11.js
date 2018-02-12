(function(n,t,r,u){function e(t,i){this.element=t;this.options=n.extend({},h,i);this._defaults=h;this._name=s;this.maxSlides=this.options.images.length;this.init()}function c(){var n=r.createElement("p"),i,e={WebkitTransform:"-webkit-transform",MozTransform:"-moz-transform"},f;r.body.insertBefore(n,null);for(f in e)n.style[f]!==u&&(n.style[f]="translate3d(1px,1px,1px)",i=t.getComputedStyle(n).getPropertyValue(e[f]));return r.body.removeChild(n),i!==u&&i.length>0&&i!=="none"}var s="Kenburns",h={images:[],duration:400,fadeSpeed:500,scale:1,ease3d:"cubic-bezier(.81, 0, .26, 1)",mdba:!1,onLoadingComplete:function(){},onSlideComplete:function(){},onListComplete:function(){},getSlideIndex:function(){return o}},f={},o=0;e.prototype.init=function(){var r=this.options.images,u=this,t;this.width=n(this.element).width();this.height=n(this.element).height();this.has3d=c();for(i in r)f["image"+i]={},f["image"+i].loaded=!1,this.attachImage(r[i],"image"+i,i);t=n("<div/>");t.addClass("loader");t.css({position:"absolute","z-index":1e4});n(this.element).prepend(t)};e.prototype.attachImage=function(t,i,r){var e=this,o=n("<div/>"),u;o.attr("class","kb-slide");o.css({opacity:0});u=n("<img />");u.attr("src",t);u.attr("alt",i);o.html(u);this.has3d&&(u.css({"-webkit-transform-origin":"left top"}),u.css({"-moz-transform-origin":"left top"}),u.css({"-webkit-transform":"scale("+e.options.scale+") translate3d(0,0,0)"}),u.css({"-moz-transform":"scale("+e.options.scale+") translate3d(0,0,0)"}));this.doTransition=this.has3d?this.transition3d:this.transition;u.load(function(){f["image"+r].element=this;f["image"+r].loaded=!0;f["image"+r].width=n(this).width();f["image"+r].width=n(this).height();e.insertAt(r,o);e.resume(r)})};e.prototype.resume=function(t){t==0&&(this.startTransition(0),n(this.element).find(".loader").hide());t==this.holdup&&(n("#status").html(""),n(this.element).find(".loader").hide(),this.startTransition(this.holdup));this.checkLoadProgress()==!0&&(n(this.element).find(".stalled").each(function(){n(this).css({opacity:1,"z-index":1});n(this).removeClass("stalled")}),this.options.onLoadingComplete())};e.prototype.checkLoadProgress=function(){var n=!0;for(i=0;i<this.maxSlides;i++)f["image"+i].loaded==!1&&(n=!1);return n};e.prototype.wait=function(){clearInterval(this.interval);n("#status").html("loading");n(this.element).find(".loader").show();var t=f["image"+(o-1)].element;n(t).parent().stop(!0,!0);n(t).parent().addClass("stalled")};e.prototype.startTransition=function(n){var t=this;o=n;t.doTransition();this.interval=setInterval(function(){o<t.maxSlides-1?o++:o=0;t.holdup=o},this.options.duration)};e.prototype.chooseCorner=function(){var t=this.options.scale,i=f["image"+o].element,a=i.height/i.width,u=Math.floor(n(this.element).width()*(1/t)),e=Math.floor(n(this.element).width()*a*(1/t)),s,r;n(i).width(u);n(i).height(e);var h=n(this.element).width(),c=n(this.element).height(),v=Math.floor(Math.random()*4),l={x:0,y:0};return[{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}].splice(v,1),s={x:1,y:1},r={startX:l.x*(h-u*t),startY:l.y*(c-e*t),endX:s.x*(h-u),endY:s.y*(c-e)},this.options.mbda===!0&&(r.endX=0,r.endY=-900),r};e.prototype.transition3d=function(){var r=this,u=this.options.scale,t=f["image"+o].element,i=this.chooseCorner();n(t).css({"-webkit-transition":"none"});n(t).css({"-moz-transition":"none"});n(t).css({"-webkit-transform":"scale("+u+") translate3d("+i.startX+"px,"+i.startY+"px,0)"});n(t).css({"-moz-transform":"scale("+u+") translate3d("+i.startX+"px,"+i.startY+"px,0)"});n(t).parent().css({opacity:0,"z-index":"3"});n(t).parent().animate({opacity:1},r.options.fadeSpeed);n(t).css({"-webkit-transition":"-webkit-transform "+(r.options.duration+r.options.fadeSpeed)+"ms "+r.options.ease3d});n(t).css({"-moz-transition":"-moz-transform "+(r.options.duration+r.options.fadeSpeed)+"ms "+r.options.ease3d});n(t).css({"-webkit-transform":"scale(1) translate3d("+i.endX+"px,"+i.endY+"px,0)"});n(t).css({"-moz-transform":"scale(1) translate3d("+i.endX+"px,"+i.endY+"px,0)"})};e.prototype.transition=function(){var r=this,u=this.options.scale,t=f["image"+o].element,e=n(t).width(),s=n(t).height(),i=this.chooseCorner();n(t).css({left:i.startX,top:i.startY,width:e*u,height:s*u});n(t).animate({left:i.endX,top:i.endY,width:e,height:s},r.options.duration+r.options.fadeSpeed);n(t).parent().css({opacity:0,"z-index":3});n(t).parent().animate({opacity:1},r.options.fadeSpeed)};e.prototype.transitionOut=function(){var t=this,i=f["image"+o].element;n(i).parent().delay(t.options.duration).animate({opacity:0},t.options.fadeSpeed,function(){n(this).css({"z-index":1})})};e.prototype.insertAt=function(t,i){var r=n(this.element).children().size(),u;t<0&&(t=Math.max(0,r+1+t));u=n(this.element).append(i);t<r&&n(this.element).children().eq(t).before(n(this.element).children().last())};n.fn[s]=function(t){return this.each(function(){n.data(this,"plugin_"+s)||n.data(this,"plugin_"+s,new e(this,t))})}})(jQuery,window,document)