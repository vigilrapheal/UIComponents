! function(e) {
    "use strict";
    var t = !1;
   
    function r() {
     if (t) return !1;
     try {
      var r = void 0 !== (i = e.performance || e.webkitPerformance || e.msPerformance || e.mozPerformance) && (i.timing || !1);
      if (r && _uptime_rum && _uptime_rum.hasOwnProperty("uuid")) {
       var u = {
         type: "rumdata",
         data: {
          rumdata: {
           timing: r,
           user: {
            href: e.location.href,
            userAgent: e.navigator.userAgent
           }
          },
          uuid: _uptime_rum.uuid
         }
        },
        n = function(e, t) {
         var r = new XMLHttpRequest;
         return void 0 !== r.withCredentials ? r.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (r = new XDomainRequest).open(e, t) : r = null, r
        }("POST", _uptime_rum.url);
       if (!n) return !1;
       n.onload = function() {}, n.send(JSON.stringify(u))
      } else _uptime_rum && !_uptime_rum.hasOwnProperty("uuid") && console.log("You are missing _uptime_rum.uuid property which needs to be global.");
      return t = !0, !0
     } catch (e) {
      return !1
     }
     var i
    }
    _uptime_rum && (_uptime_rum.sendReport = r), _uptime_rum && _uptime_rum.hasOwnProperty("noAutoReport") || (e.addEventListener ? e.addEventListener("load", r, !1) : e.attachEvent ? e.attachEvent("onload", r) : e.onload = r)
   }(window);