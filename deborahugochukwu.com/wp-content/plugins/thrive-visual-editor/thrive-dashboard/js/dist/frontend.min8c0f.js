/*! Thrive Dashboard - 2020-04-09
* http://www.thrivethemes.com/
* Copyright (c) 2020 Thrive Themes */

var TVE_Dash=TVE_Dash||{};if(!ThriveGlobal||!ThriveGlobal.$j){var __thrive_$oJ=window.$,ThriveGlobal={$j:jQuery.noConflict()};__thrive_$oJ&&(window.$=__thrive_$oJ)}!function(a){TVE_Dash.ajax_sent=!1;var b={},c={};TVE_Dash.add_load_item=function(d,e,f){if("function"!=typeof f&&(f=a.noop),TVE_Dash.ajax_sent){var g={},h={};return g[d]=e,h[d]=f,this.send_ajax(g,h),!0}return e?(b[d]&&console.error&&console.error(d+" ajax action already defined"),b[d]=e,c[d]=f,!0):(console.error&&console.error("missing ajax data"),!1)},TVE_Dash.ajax_load_css=function(b){a.each(b,function(b,c){b+="-css",a("link#"+b).length||a('<link rel="stylesheet" id="'+b+'" type="text/css" href="'+c+'"/>').appendTo("head")})},TVE_Dash.ajax_load_js=function(b){var c=document.body;a.each(b,function(d,e){if(-1!==d.indexOf("_before"))return!0;var f=document.createElement("script");if(b[d+"_before"]){a('<script type="text/javascript">'+b[d+"_before"]+"</script>").after(c.lastChild)}d&&(f.id=d+"-script"),f.src=e,c.appendChild(f)})},TVE_Dash.send_ajax=function(b,c){a.ajax({url:tve_dash_front.ajaxurl,xhrFields:{withCredentials:!0},data:{action:"tve_dash_front_ajax",tve_dash_data:b},dataType:"json",type:"post"}).done(function(b){b&&a.isPlainObject(b)&&(b.__resources&&(b.__resources.css&&TVE_Dash.ajax_load_css(b.__resources.css),b.__resources.js&&TVE_Dash.ajax_load_js(b.__resources.js),delete b.__resources),a.each(b,function(a,b){if("function"!=typeof c[a])return!0;c[a].call(null,b)}))})},a(function(){setTimeout(function(){var d=new a.Event("tve-dash.load");return a(document).trigger(d),!a.isEmptyObject(b)&&(!(!tve_dash_front.force_ajax_send&&tve_dash_front.is_crawler)&&(TVE_Dash.send_ajax(b,c),void(TVE_Dash.ajax_sent=!0)))})})}(ThriveGlobal.$j);