/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * https://www.opensource.org/licenses/mit-license.php
 * https://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(e,t,n){if("undefined"==typeof t){var r=null;if(document.cookie&&""!=document.cookie)for(var i=document.cookie.split(";"),o=0;o<i.length;o++){var a=jQuery.trim(i[o]);if(a.substring(0,e.length+1)==e+"="){r=decodeURIComponent(a.substring(e.length+1));break}}return r}n=n||{},null===t&&(t="",n.expires=-1);var s="";if(n.expires&&("number"==typeof n.expires||n.expires.toUTCString)){var l;"number"==typeof n.expires?(l=new Date,l.setTime(l.getTime()+24*n.expires*60*60*1e3)):l=n.expires,s="; expires="+l.toUTCString()}var u=n.path?"; path="+n.path:"",c=n.domain?"; domain="+n.domain:"",d=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),s,u,c,d].join("")};
