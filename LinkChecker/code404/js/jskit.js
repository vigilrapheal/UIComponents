require = function e(t, r, n) {
    function o(l, i) {
     if (!r[l]) {
      if (!t[l]) {
       var s = "function" == typeof require && require;
       if (!i && s) return s(l, !0);
       if (a) return a(l, !0);
       var u = new Error("Cannot find module '" + l + "'");
       throw u.code = "MODULE_NOT_FOUND", u
      }
      var c = r[l] = {
       exports: {}
      };
      t[l][0].call(c.exports, function(e) {
       var r = t[l][1][e];
       return o(r || e)
      }, c, c.exports, e, t, r, n)
     }
     return r[l].exports
    }
    for (var a = "function" == typeof require && require, l = 0; l < n.length; l++) o(n[l]);
    return o
   }({
    "jskit/general/Ajax": [function(e, t, r) {
     "use strict";
     var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
       return typeof e
      } : function(e) {
       return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = e("jquery");
   
     function a() {
      this._numActiveRequests = 0, this._requestQueue = [], this._customDequeueFunction = null, this._cancelQueueOnError = !0, this._useAutomaticWaitCursor = !1, this._globalErrorHandler = null, void 0 !== a._defaultSettings.useAutomaticWaitCursor && this.useAutomaticWaitCursor(a._defaultSettings.useAutomaticWaitCursor), void 0 !== a._defaultSettings.globalErrorHandler && this.installGlobalErrorHandler(a._defaultSettings.globalErrorHandler)
     }
     o(document).ajaxSend(function(e, t, r) {
      var n, a, l, i;
      i = r.type, /^(GET|HEAD|OPTIONS|TRACE)$/.test(i) || (n = r.url, a = "//" + document.location.host, l = document.location.protocol + a, n != l && n.slice(0, l.length + 1) != l + "/" && n != a && n.slice(0, a.length + 1) != a + "/" && /^(\/\/|http:|https:).*/.test(n)) || t.setRequestHeader("X-CSRFToken", function(e) {
       var t = null;
       if (document.cookie && "" != document.cookie)
        for (var r = document.cookie.split(";"), n = 0; n < r.length; n++) {
         var a = o.trim(r[n]);
         if (a.substring(0, e.length + 1) == e + "=") {
          t = decodeURIComponent(a.substring(e.length + 1));
          break
         }
        }
       return t
      }("csrftoken"))
     }), a._defaultSettings = {}, a.setDefaultSettings = function(e) {
      a._defaultSettings = {
       useAutomaticWaitCursor: e.useAutomaticWaitCursor,
       globalErrorHandler: e.globalErrorHandler
      }
     }, a.prototype.useAutomaticWaitCursor = function(e) {
      this._useAutomaticWaitCursor = !!e
     }, a.prototype.showWaitCursor = function(e) {
      e ? o("*").css({
       cursor: "wait"
      }) : o("*").css({
       cursor: ""
      })
     }, a.prototype.installGlobalErrorHandler = function(e) {
      this._globalErrorHandler = e && !0 !== e ? e : this.defaultGlobalErrorHandler
     }, a.prototype.defaultGlobalErrorHandler = function(e, t, r, n) {
      alert("There was a problem retrieving the information. Please try again or reload the page.")
     }, a.prototype.cancelQueueOnError = function(e) {
      this._cancelQueueOnError = !!e
     }, a.prototype.setCustomDequeueFunction = function(e) {
      this._customDequeueFunction = e
     }, a.prototype.disableHTMLElements = function(e) {
      if (e) {
       var t = o(e);
       t.attr("disabled", "disabled").addClass("disabled");
       for (var r = 0; r < t.length; r++) {
        var n = t.get(r);
        n.disabledOnclick = n.onclick, n.onclick = function(e) {
         return e.preventDefault(), !1
        }
       }
      }
     }, a.prototype.enableHTMLElements = function(e) {
      if (e) {
       var t = o(e);
       t.removeAttr("disabled").removeClass("disabled");
       for (var r = 0; r < t.length; r++) {
        var n = t.get(r);
        n.disabledOnclick ? n.onclick = n.disabledOnclick : n.onclick = null, n.disabledOnclick = void 0
       }
      }
     }, a.prototype._determineEncoderAndContentType = function(e, t, r) {
      return void 0 !== r && null !== r || (r = "object" == (void 0 === t ? "undefined" : n(t)) ? "GET" == e ? "url" : "json" : "text"), "url" == r ? ["url", "application/x-www-form-urlencoded"] : "json" == r || (void 0 === r || null === r) && "object" == (void 0 === t ? "undefined" : n(t)) ? ["json", "application/json"] : ["text", "text/plain"]
     }, a.prototype.encode = function(e, t) {
      if (void 0 !== e && null !== e && "" !== e) {
       if ("string" == typeof e) return e;
       if ("url" == t) {
        var r = "";
        for (var n in e)
         for (var o = e[n] instanceof Array ? e[n] : [e[n]], a = 0; a < o.length; a++) r && (r += "&"), r += encodeURIComponent(n) + "=" + encodeURIComponent(void 0 === o[a] || null === o[a] ? "" : o[a]);
        return r
       }
       if ("json" == t) return JSON.stringify(e)
      }
      return ""
     }, a.prototype.decode = function(e, t) {
      if ("url" == t) {
       var r = decodeURI(e),
        n = r.split("&");
       for (var o in r = {}, n) {
        var a = n[o],
         l = a.indexOf("=");
        l < 0 || (r[a.substring(0, l)] = a.substring(l + 1))
       }
       return r
      }
      return "json" == t ? JSON.parse(e) : e
     }, a.prototype.numActiveRequests = function() {
      return this._numActiveRequests
     }, a.prototype.get = function(e) {
      return e.method = "GET", this.sendRequest(e)
     }, a.prototype.post = function(e) {
      return e.method = "POST", this.sendRequest(e)
     }, a.prototype.queueGet = function(e) {
      e.method = "GET", this.queueRequest(e)
     }, a.prototype.queuePost = function(e) {
      e.method = "POST", this.queueRequest(e)
     }, a.prototype.sendRequest = function(e) {
      var t = this;
      t.disableHTMLElements(e.disable), e.form && (e.data = {}, o.each(o(e.form).serializeArray(), function(t, r) {
       e.data[r.name] = r.value
      }));
      var r = t._determineEncoderAndContentType(e.method, e.data, e.encoder);
      e.encoder = r[0];
      var n = r[1];
      void 0 === e.decoder && (e.decoder = e.encoder);
      var a = {
       type: e.method ? e.method : "GET",
       url: e.url,
       contentType: n,
       data: this.encode(e.data, e.encoder),
       dataType: "text",
       errorFn: function(r, n, l) {
        "abort" !== n && (a.hasBeenRetried ? (e.error && e.error(l, n, r, e), t._globalErrorHandler && t._globalErrorHandler(l, n, r, e)) : (a.hasBeenRetried = !0, a.skipNextComplete = !0, o.ajax(a).fail(a.errorFn).done(a.successFn).always(a.completeFn)))
       },
       successFn: function(r, n, o) {
        r = t.decode(r, e.decoder), e.success && e.success(r, n, o, e)
       },
       completeFn: function(r, n, o) {
        if (a.skipNextComplete) a.skipNextComplete = !1;
        else {
         t.enableHTMLElements(e.disable), t._numActiveRequests--, t._useAutomaticWaitCursor && 0 == t._numActiveRequests && t.showWaitCursor(!1);
         var l = null;
         l = "string" == typeof o ? r : o, e.complete && e.complete(n, l, e), t._dispatchNextQueuedRequestIfIdle()
        }
       }
      };
      return t._numActiveRequests++, t._useAutomaticWaitCursor && t.showWaitCursor(!0), o.ajax(a).fail(a.errorFn).done(a.successFn).always(a.completeFn)
     }, a.prototype.queueRequest = function(e) {
      var t = this,
       r = e.error;
      e.error = function(e, n, o, a) {
       (a.cancelQueueOnError || void 0 === a.cancelQueueOnError && t._cancelQueueOnError) && t.clearAllQueuedRequests(), r && r(e, n, o, a)
      }, t._enqueueNewAjaxRequest(e)
     }, a.prototype.clearAllQueuedRequests = function() {
      this._requestQueue = []
     }, a.prototype._enqueueNewAjaxRequest = function(e) {
      this._requestQueue.push(e), this._dispatchNextQueuedRequestIfIdle()
     }, a.prototype._dispatchNextQueuedRequestIfIdle = function() {
      var e = null;
      0 == this._numActiveRequests && this._requestQueue.length > 0 && (e = this._customDequeueFunction ? this._customDequeueFunction(this._requestQueue) : this._requestQueue.shift(), this.sendRequest(e))
     }, t.exports = a
    }, {
     jquery: void 0
    }],
    "jskit/general/Cookie": [function(e, t, r) {
     "use strict";
     var n = {
      setCookie: function(e, t, r) {
       var n = "";
       if (r) {
        var o = new Date;
        o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3), n = "; expires=" + o.toGMTString()
       }
       document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + n + "; path=/"
      },
      getCookie: function(e, t) {
       for (var r = e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
        for (var a = n[o];
         " " == a.charAt(0);) a = a.substring(1, a.length);
        if (0 == a.indexOf(r)) {
         var l = a.substring(r.length, a.length);
         return (t || void 0 === t) && (l = decodeURIComponent(l)), l
        }
       }
       return null
      },
      clearCookie: function(e) {
       n.setCookie(e, "", -1)
      }
     };
     t.exports = n
    }, {}],
    "jskit/general/Formatter": [function(e, t, r) {
     "use strict";
     var n = e("underscore"),
      o = e("moment"),
      a = {
       longDateTime: function(e) {
        return e ? o.utc(e).format("MMM D, YYYY h:mm:ssa") + " GMT" : ""
       },
       roundDurationSecs: function(e) {
        return e = (e = parseFloat(e)) >= 86400 ? 60 * Math.round(e / 60 / 60) * 60 : e >= 3600 ? 60 * Math.round(e / 60) : Math.round(e), parseInt(e)
       },
       shortDuration: function(e) {
        for (var t = a.roundDurationSecs(e), r = t % 60, o = (t = Math.floor(t / 60)) % 60, l = (t = Math.floor(t / 60)) % 24, i = t = Math.floor(t / 24), s = n.zip([i, l, o, r], ["d", "h", "m", "s"]); s.length > 1 && 0 == s[0][0];) s.shift();
        return (s = (s = s.slice(0, 2)).map(function(e) {
         return e[0].toString() + e[1]
        })).join(" ")
       },
       linebreaks: function(e) {
        return e = e || "", "<p>" + n.escape(e).trim().replace(/\n+/g, "</p><p>") + "</p>"
       },
       linebreaksbr: function(e) {
        return e = e || "", n.escape(e).trim().replace("\n", "<br />")
       },
       pad: function(e, t, r) {
        return r = r || "0", (e += "").length >= t ? e : new Array(t - e.length + 1).join(r) + e
       },
       truncate: function(e, t) {
        return e ? e.length <= t ? e : e.substr(0, t - 2) + "..." : ""
       },
       percentage: function(e, t) {
        return t = t || 2, "100." === (e = e.toFixed(t).toString()).substr(0, 4) && (e = "100"), e + "%"
       },
       pluralize: function(e, t, r) {
        return 1 === e ? t : r
       },
       capitalizeFirstLetter: function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
       }
      };
     t.exports = a
    }, {
     moment: void 0,
     underscore: void 0
    }],
    "jskit/general/MapProjections": [function(e, t, r) {
     "use strict";
     var n = function(e) {
      this.settings = {
       projection: e.projection || "cylindrical",
       northLat: e.northLat || 89.99,
       southLat: e.southLat || -89.99,
       eastLon: e.eastLon || 179.99,
       westLon: e.westLong || -179.99,
       mapWidth: e.mapWidth || 1,
       mapHeight: e.mapHeight || 1
      };
      var t = {
       rNorth: this.deg2rad(this.settings.northLat),
       rSouth: this.deg2rad(this.settings.southLat),
       rEast: this.deg2rad(this.settings.eastLon),
       rWest: this.deg2rad(this.settings.westLon)
      };
      "mercator" === this.settings.projection ? t.projectionFn = this.mercatorY.bind(this) : "miller" === this.settings.projection ? t.projectionFn = this.millerY.bind(this) : t.projectionFn = this.cylindricalY.bind(this), t.xFactor = 1 / (t.rEast - t.rWest), t.yMin = t.projectionFn(t.rSouth), t.yMax = t.projectionFn(t.rNorth), t.yFactor = 1 / (t.yMax - t.yMin), this.calculations = t
     };
     n.prototype.deg2rad = function(e) {
      return e * Math.PI / 180
     }, n.prototype.cylindricalY = function(e) {
      return e
     }, n.prototype.mercatorY = function(e) {
      return Math.log(Math.tan(e / 2 + Math.PI / 4))
     }, n.prototype.millerY = function(e) {
      return this.mercatorY(.8 * e)
     }, n.prototype.projectToRatio = function(e, t) {
      var r = this.calculations,
       n = this.deg2rad(e);
      return {
       x: (this.deg2rad(t) - r.rWest) * r.xFactor,
       y: (r.yMax - r.projectionFn(n)) * r.yFactor
      }
     }, n.prototype.projectToPercent = function(e, t) {
      var r = this.projectToRatio(e, t);
      return r.x = 100 * r.x, r.y = 100 * r.y, r
     }, n.prototype.projectToMap = function(e, t) {
      var r = this.projectToRatio(e, t);
      return r.x = r.x * this.settings.mapWidth, r.y = r.y * this.settings.mapHeight, r
     };
     var o = function(e) {
      this.settings = {
       mapWidth: e.mapWidth || 1,
       mapHeight: e.mapHeight || 1,
       translateX: e.translateX || 0,
       translateY: e.translateY || 0,
       scaleX: e.scaleX || 1,
       scaleY: e.scaleY || 1
      }, this.earthRadius = this.settings.mapWidth / 2.666269758 / 2, this.AA = [.8487, .84751182, .84479598, .840213, .83359314, .8257851, .814752, .80006949, .78216192, .76060494, .73658673, .7086645, .67777182, .64475739, .60987582, .57134484, .52729731, .48562614, .45167814], this.BB = [0, .0838426, .1676852, .2515278, .3353704, .419213, .5030556, .5868982, .67182264, .75336633, .83518048, .91537187, .99339958, 1.06872269, 1.14066505, 1.20841528, 1.27035062, 1.31998003, 1.3523]
     };
     o.prototype.project = function(e, t) {
      var r = function(e) {
        return e < 0 ? -1 : 1
       },
       n = r(t),
       o = r(e);
      t = Math.abs(t), e = Math.abs(e);
      var a, l, i = (a = 5, l = e - 1e-10, Math.floor(l / a) * a),
       s = (i = 0 == e ? 0 : i) / 5,
       u = (i + 5) / 5,
       c = (e - i) / 5,
       f = (this.AA[u] - this.AA[s]) * c + this.AA[s],
       p = (this.BB[u] - this.BB[s]) * c + this.BB[s],
       d = {
        x: f * t * .017453293 * n * this.earthRadius,
        y: p * o * this.earthRadius
       };
      return d.x = d.x * this.settings.scaleX + this.settings.translateX, d.y = d.y * this.settings.scaleY + this.settings.translateY, d
     }, o.prototype.projectToRatio = function(e, t) {
      var r = this.projectToMap(e, t);
      return r.x = r.x / this.settings.mapWidth, r.y = r.y / this.settings.mapHeight, r
     }, o.prototype.projectToPercent = function(e, t) {
      var r = this.projectToRatio(e, t);
      return r.x = 100 * r.x, r.y = 100 * r.y, r
     }, o.prototype.projectToMap = function(e, t) {
      var r = this.project(e, t);
      return r.x = r.x + this.settings.mapWidth / 2, r.y = this.settings.mapHeight / 2 - r.y, r
     };
     var a = {
      AD: {
       lat: 42.546245,
       lon: 1.601554
      },
      AE: {
       lat: 23.424076,
       lon: 53.847818
      },
      AF: {
       lat: 33.93911,
       lon: 67.709953
      },
      AG: {
       lat: 17.060816,
       lon: -61.796428
      },
      AI: {
       lat: 18.220554,
       lon: -63.068615
      },
      AL: {
       lat: 41.153332,
       lon: 20.168331
      },
      AM: {
       lat: 40.069099,
       lon: 45.038189
      },
      AN: {
       lat: 12.226079,
       lon: -69.060087
      },
      AO: {
       lat: -11.202692,
       lon: 17.873887
      },
      AQ: {
       lat: -75.250973,
       lon: -.071389
      },
      AR: {
       lat: -38.416097,
       lon: -63.616672
      },
      AS: {
       lat: -14.270972,
       lon: -170.132217
      },
      AT: {
       lat: 47.516231,
       lon: 14.550072
      },
      AU: {
       lat: -25.274398,
       lon: 133.775136
      },
      AW: {
       lat: 12.52111,
       lon: -69.968338
      },
      AZ: {
       lat: 40.143105,
       lon: 47.576927
      },
      BA: {
       lat: 43.915886,
       lon: 17.679076
      },
      BB: {
       lat: 13.193887,
       lon: -59.543198
      },
      BD: {
       lat: 23.684994,
       lon: 90.356331
      },
      BE: {
       lat: 50.503887,
       lon: 4.469936
      },
      BF: {
       lat: 12.238333,
       lon: -1.561593
      },
      BG: {
       lat: 42.733883,
       lon: 25.48583
      },
      BH: {
       lat: 25.930414,
       lon: 50.637772
      },
      BI: {
       lat: -3.373056,
       lon: 29.918886
      },
      BJ: {
       lat: 9.30769,
       lon: 2.315834
      },
      BM: {
       lat: 32.321384,
       lon: -64.75737
      },
      BN: {
       lat: 4.535277,
       lon: 114.727669
      },
      BO: {
       lat: -16.290154,
       lon: -63.588653
      },
      BR: {
       lat: -14.235004,
       lon: -51.92528
      },
      BS: {
       lat: 25.03428,
       lon: -77.39628
      },
      BT: {
       lat: 27.514162,
       lon: 90.433601
      },
      BV: {
       lat: -54.423199,
       lon: 3.413194
      },
      BW: {
       lat: -22.328474,
       lon: 24.684866
      },
      BY: {
       lat: 53.709807,
       lon: 27.953389
      },
      BZ: {
       lat: 17.189877,
       lon: -88.49765
      },
      CA: {
       lat: 56.130366,
       lon: -106.346771
      },
      CC: {
       lat: -12.164165,
       lon: 96.870956
      },
      CD: {
       lat: -4.038333,
       lon: 21.758664
      },
      CF: {
       lat: 6.611111,
       lon: 20.939444
      },
      CG: {
       lat: -.228021,
       lon: 15.827659
      },
      CH: {
       lat: 46.818188,
       lon: 8.227512
      },
      CI: {
       lat: 7.539989,
       lon: -5.54708
      },
      CK: {
       lat: -21.236736,
       lon: -159.777671
      },
      CL: {
       lat: -35.675147,
       lon: -71.542969
      },
      CM: {
       lat: 7.369722,
       lon: 12.354722
      },
      CN: {
       lat: 35.86166,
       lon: 104.195397
      },
      CO: {
       lat: 4.570868,
       lon: -74.297333
      },
      CR: {
       lat: 9.748917,
       lon: -83.753428
      },
      CU: {
       lat: 21.521757,
       lon: -77.781167
      },
      CV: {
       lat: 16.002082,
       lon: -24.013197
      },
      CX: {
       lat: -10.447525,
       lon: 105.690449
      },
      CY: {
       lat: 35.126413,
       lon: 33.429859
      },
      CZ: {
       lat: 49.817492,
       lon: 15.472962
      },
      DE: {
       lat: 51.165691,
       lon: 10.451526
      },
      DJ: {
       lat: 11.825138,
       lon: 42.590275
      },
      DK: {
       lat: 56.26392,
       lon: 9.501785
      },
      DM: {
       lat: 15.414999,
       lon: -61.370976
      },
      DO: {
       lat: 18.735693,
       lon: -70.162651
      },
      DZ: {
       lat: 28.033886,
       lon: 1.659626
      },
      EC: {
       lat: -1.831239,
       lon: -78.183406
      },
      EE: {
       lat: 58.595272,
       lon: 25.013607
      },
      EG: {
       lat: 26.820553,
       lon: 30.802498
      },
      EH: {
       lat: 24.215527,
       lon: -12.885834
      },
      ER: {
       lat: 15.179384,
       lon: 39.782334
      },
      ES: {
       lat: 40.463667,
       lon: -3.74922
      },
      ET: {
       lat: 9.145,
       lon: 40.489673
      },
      FI: {
       lat: 61.92411,
       lon: 25.748151
      },
      FJ: {
       lat: -16.578193,
       lon: 179.414413
      },
      FK: {
       lat: -51.796253,
       lon: -59.523613
      },
      FM: {
       lat: 7.425554,
       lon: 150.550812
      },
      FO: {
       lat: 61.892635,
       lon: -6.911806
      },
      FR: {
       lat: 46.227638,
       lon: 2.213749
      },
      GA: {
       lat: -.803689,
       lon: 11.609444
      },
      GB: {
       lat: 55.378051,
       lon: -3.435973
      },
      GD: {
       lat: 12.262776,
       lon: -61.604171
      },
      GE: {
       lat: 42.315407,
       lon: 43.356892
      },
      GF: {
       lat: 3.933889,
       lon: -53.125782
      },
      GG: {
       lat: 49.465691,
       lon: -2.585278
      },
      GH: {
       lat: 7.946527,
       lon: -1.023194
      },
      GI: {
       lat: 36.137741,
       lon: -5.345374
      },
      GL: {
       lat: 71.706936,
       lon: -42.604303
      },
      GM: {
       lat: 13.443182,
       lon: -15.310139
      },
      GN: {
       lat: 9.945587,
       lon: -9.696645
      },
      GP: {
       lat: 16.995971,
       lon: -62.067641
      },
      GQ: {
       lat: 1.650801,
       lon: 10.267895
      },
      GR: {
       lat: 39.074208,
       lon: 21.824312
      },
      GS: {
       lat: -54.429579,
       lon: -36.587909
      },
      GT: {
       lat: 15.783471,
       lon: -90.230759
      },
      GU: {
       lat: 13.444304,
       lon: 144.793731
      },
      GW: {
       lat: 11.803749,
       lon: -15.180413
      },
      GY: {
       lat: 4.860416,
       lon: -58.93018
      },
      GZ: {
       lat: 31.354676,
       lon: 34.308825
      },
      HK: {
       lat: 22.396428,
       lon: 114.109497
      },
      HM: {
       lat: -53.08181,
       lon: 73.504158
      },
      HN: {
       lat: 15.199999,
       lon: -86.241905
      },
      HR: {
       lat: 45.1,
       lon: 15.2
      },
      HT: {
       lat: 18.971187,
       lon: -72.285215
      },
      HU: {
       lat: 47.162494,
       lon: 19.503304
      },
      ID: {
       lat: -.789275,
       lon: 113.921327
      },
      IE: {
       lat: 53.41291,
       lon: -8.24389
      },
      IL: {
       lat: 31.046051,
       lon: 34.851612
      },
      IM: {
       lat: 54.236107,
       lon: -4.548056
      },
      IN: {
       lat: 20.593684,
       lon: 78.96288
      },
      IO: {
       lat: -6.343194,
       lon: 71.876519
      },
      IQ: {
       lat: 33.223191,
       lon: 43.679291
      },
      IR: {
       lat: 32.427908,
       lon: 53.688046
      },
      IS: {
       lat: 64.963051,
       lon: -19.020835
      },
      IT: {
       lat: 41.87194,
       lon: 12.56738
      },
      JE: {
       lat: 49.214439,
       lon: -2.13125
      },
      JM: {
       lat: 18.109581,
       lon: -77.297508
      },
      JO: {
       lat: 30.585164,
       lon: 36.238414
      },
      JP: {
       lat: 36.204824,
       lon: 138.252924
      },
      KE: {
       lat: -.023559,
       lon: 37.906193
      },
      KG: {
       lat: 41.20438,
       lon: 74.766098
      },
      KH: {
       lat: 12.565679,
       lon: 104.990963
      },
      KI: {
       lat: -3.370417,
       lon: -168.734039
      },
      KM: {
       lat: -11.875001,
       lon: 43.872219
      },
      KN: {
       lat: 17.357822,
       lon: -62.782998
      },
      KP: {
       lat: 40.339852,
       lon: 127.510093
      },
      KR: {
       lat: 35.907757,
       lon: 127.766922
      },
      KW: {
       lat: 29.31166,
       lon: 47.481766
      },
      KY: {
       lat: 19.513469,
       lon: -80.566956
      },
      KZ: {
       lat: 48.019573,
       lon: 66.923684
      },
      LA: {
       lat: 19.85627,
       lon: 102.495496
      },
      LB: {
       lat: 33.854721,
       lon: 35.862285
      },
      LC: {
       lat: 13.909444,
       lon: -60.978893
      },
      LI: {
       lat: 47.166,
       lon: 9.555373
      },
      LK: {
       lat: 7.873054,
       lon: 80.771797
      },
      LR: {
       lat: 6.428055,
       lon: -9.429499
      },
      LS: {
       lat: -29.609988,
       lon: 28.233608
      },
      LT: {
       lat: 55.169438,
       lon: 23.881275
      },
      LU: {
       lat: 49.815273,
       lon: 6.129583
      },
      LV: {
       lat: 56.879635,
       lon: 24.603189
      },
      LY: {
       lat: 26.3351,
       lon: 17.228331
      },
      MA: {
       lat: 31.791702,
       lon: -7.09262
      },
      MC: {
       lat: 43.750298,
       lon: 7.412841
      },
      MD: {
       lat: 47.411631,
       lon: 28.369885
      },
      ME: {
       lat: 42.708678,
       lon: 19.37439
      },
      MG: {
       lat: -18.766947,
       lon: 46.869107
      },
      MH: {
       lat: 7.131474,
       lon: 171.184478
      },
      MK: {
       lat: 41.608635,
       lon: 21.745275
      },
      ML: {
       lat: 17.570692,
       lon: -3.996166
      },
      MM: {
       lat: 21.913965,
       lon: 95.956223
      },
      MN: {
       lat: 46.862496,
       lon: 103.846656
      },
      MO: {
       lat: 22.198745,
       lon: 113.543873
      },
      MP: {
       lat: 17.33083,
       lon: 145.38469
      },
      MQ: {
       lat: 14.641528,
       lon: -61.024174
      },
      MR: {
       lat: 21.00789,
       lon: -10.940835
      },
      MS: {
       lat: 16.742498,
       lon: -62.187366
      },
      MT: {
       lat: 35.937496,
       lon: 14.375416
      },
      MU: {
       lat: -20.348404,
       lon: 57.552152
      },
      MV: {
       lat: 3.202778,
       lon: 73.22068
      },
      MW: {
       lat: -13.254308,
       lon: 34.301525
      },
      MX: {
       lat: 23.634501,
       lon: -102.552784
      },
      MY: {
       lat: 4.210484,
       lon: 101.975766
      },
      MZ: {
       lat: -18.665695,
       lon: 35.529562
      },
      NA: {
       lat: -22.95764,
       lon: 18.49041
      },
      NC: {
       lat: -20.904305,
       lon: 165.618042
      },
      NE: {
       lat: 17.607789,
       lon: 8.081666
      },
      NF: {
       lat: -29.040835,
       lon: 167.954712
      },
      NG: {
       lat: 9.081999,
       lon: 8.675277
      },
      NI: {
       lat: 12.865416,
       lon: -85.207229
      },
      NL: {
       lat: 52.132633,
       lon: 5.291266
      },
      NO: {
       lat: 60.472024,
       lon: 8.468946
      },
      NP: {
       lat: 28.394857,
       lon: 84.124008
      },
      NR: {
       lat: -.522778,
       lon: 166.931503
      },
      NU: {
       lat: -19.054445,
       lon: -169.867233
      },
      NZ: {
       lat: -40.900557,
       lon: 174.885971
      },
      OM: {
       lat: 21.512583,
       lon: 55.923255
      },
      PA: {
       lat: 8.537981,
       lon: -80.782127
      },
      PE: {
       lat: -9.189967,
       lon: -75.015152
      },
      PF: {
       lat: -17.679742,
       lon: -149.406843
      },
      PG: {
       lat: -6.314993,
       lon: 143.95555
      },
      PH: {
       lat: 12.879721,
       lon: 121.774017
      },
      PK: {
       lat: 30.375321,
       lon: 69.345116
      },
      PL: {
       lat: 51.919438,
       lon: 19.145136
      },
      PM: {
       lat: 46.941936,
       lon: -56.27111
      },
      PN: {
       lat: -24.703615,
       lon: -127.439308
      },
      PR: {
       lat: 18.220833,
       lon: -66.590149
      },
      PS: {
       lat: 31.952162,
       lon: 35.233154
      },
      PT: {
       lat: 39.399872,
       lon: -8.224454
      },
      PW: {
       lat: 7.51498,
       lon: 134.58252
      },
      PY: {
       lat: -23.442503,
       lon: -58.443832
      },
      QA: {
       lat: 25.354826,
       lon: 51.183884
      },
      RE: {
       lat: -21.115141,
       lon: 55.536384
      },
      RO: {
       lat: 45.943161,
       lon: 24.96676
      },
      RS: {
       lat: 44.016521,
       lon: 21.005859
      },
      RU: {
       lat: 61.52401,
       lon: 105.318756
      },
      RW: {
       lat: -1.940278,
       lon: 29.873888
      },
      SA: {
       lat: 23.885942,
       lon: 45.079162
      },
      SB: {
       lat: -9.64571,
       lon: 160.156194
      },
      SC: {
       lat: -4.679574,
       lon: 55.491977
      },
      SD: {
       lat: 12.862807,
       lon: 30.217636
      },
      SE: {
       lat: 60.128161,
       lon: 18.643501
      },
      SG: {
       lat: 1.352083,
       lon: 103.819836
      },
      SH: {
       lat: -24.143474,
       lon: -10.030696
      },
      SI: {
       lat: 46.151241,
       lon: 14.995463
      },
      SJ: {
       lat: 77.553604,
       lon: 23.670272
      },
      SK: {
       lat: 48.669026,
       lon: 19.699024
      },
      SL: {
       lat: 8.460555,
       lon: -11.779889
      },
      SM: {
       lat: 43.94236,
       lon: 12.457777
      },
      SN: {
       lat: 14.497401,
       lon: -14.452362
      },
      SO: {
       lat: 5.152149,
       lon: 46.199616
      },
      SR: {
       lat: 3.919305,
       lon: -56.027783
      },
      ST: {
       lat: .18636,
       lon: 6.613081
      },
      SV: {
       lat: 13.794185,
       lon: -88.89653
      },
      SY: {
       lat: 34.802075,
       lon: 38.996815
      },
      SZ: {
       lat: -26.522503,
       lon: 31.465866
      },
      TC: {
       lat: 21.694025,
       lon: -71.797928
      },
      TD: {
       lat: 15.454166,
       lon: 18.732207
      },
      TF: {
       lat: -49.280366,
       lon: 69.348557
      },
      TG: {
       lat: 8.619543,
       lon: .824782
      },
      TH: {
       lat: 15.870032,
       lon: 100.992541
      },
      TJ: {
       lat: 38.861034,
       lon: 71.276093
      },
      TK: {
       lat: -8.967363,
       lon: -171.855881
      },
      TL: {
       lat: -8.874217,
       lon: 125.727539
      },
      TM: {
       lat: 38.969719,
       lon: 59.556278
      },
      TN: {
       lat: 33.886917,
       lon: 9.537499
      },
      TO: {
       lat: -21.178986,
       lon: -175.198242
      },
      TR: {
       lat: 38.963745,
       lon: 35.243322
      },
      TT: {
       lat: 10.691803,
       lon: -61.222503
      },
      TV: {
       lat: -7.109535,
       lon: 177.64933
      },
      TW: {
       lat: 23.69781,
       lon: 120.960515
      },
      TZ: {
       lat: -6.369028,
       lon: 34.888822
      },
      UA: {
       lat: 48.379433,
       lon: 31.16558
      },
      UG: {
       lat: 1.373333,
       lon: 32.290275
      },
      US: {
       lat: 37.09024,
       lon: -95.712891
      },
      UY: {
       lat: -32.522779,
       lon: -55.765835
      },
      UZ: {
       lat: 41.377491,
       lon: 64.585262
      },
      VA: {
       lat: 41.902916,
       lon: 12.453389
      },
      VC: {
       lat: 12.984305,
       lon: -61.287228
      },
      VE: {
       lat: 6.42375,
       lon: -66.58973
      },
      VG: {
       lat: 18.420695,
       lon: -64.639968
      },
      VI: {
       lat: 18.335765,
       lon: -64.896335
      },
      VN: {
       lat: 14.058324,
       lon: 108.277199
      },
      VU: {
       lat: -15.376706,
       lon: 166.959158
      },
      WF: {
       lat: -13.768752,
       lon: -177.156097
      },
      WS: {
       lat: -13.759029,
       lon: -172.104629
      },
      XK: {
       lat: 42.602636,
       lon: 20.902977
      },
      YE: {
       lat: 15.552727,
       lon: 48.516388
      },
      YT: {
       lat: -12.8275,
       lon: 45.166244
      },
      ZA: {
       lat: -30.559482,
       lon: 22.937506
      },
      ZM: {
       lat: -13.133897,
       lon: 27.849332
      },
      ZW: {
       lat: -19.015438,
       lon: 29.154857
      }
     };
     t.exports = {
      LatitudeTransformProjection: n,
      RobinsonProjection: o,
      getCountryLatLon: function(e) {
       return a[e] || null
      }
     }
    }, {}],
    "jskit/general/URLHistory": [function(e, t, r) {
     "use strict";
     var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
       return typeof e
      } : function(e) {
       return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = e("underscore"),
      a = {
       currentURL: function() {
        return window.location.toString()
       },
       updateQueryString: function(e, t, r, n) {
        e = e || this.currentURL();
        var a = this.parseURL(e),
         l = a.params,
         i = void 0 === n ? a.hash : n;
        r && r.length && (l = o.omit(l, r)), t && (l = o.extend({}, l, t));
        var s = e.split("?")[0].split("#")[0];
        return o.isEmpty(l) || (s = s + "?" + this.objectToQueryString(l)), i && (s = s + "#" + i), s
       },
       replaceQueryString: function(e, t) {
        var r = e.split("#"),
         n = e.split("?")[0].split("#")[0];
        return void 0 !== t && null !== t && "" !== t && (n += "?" + t), r.length > 1 && (n += "#" + r[1]), n
       },
       parseURL: function(e) {
        void 0 === e && (e = this.currentURL());
        var t = document.createElement("a");
        return t.href = e, {
         source: e,
         protocol: t.protocol.replace(":", ""),
         host: t.hostname,
         port: t.port,
         query: t.search,
         params: function() {
          for (var e, r = {}, n = t.search.replace(/^\?/, "").split("&"), o = n.length, a = 0; a < o; a++) n[a] && (e = n[a].split("="), r[decodeURIComponent(e[0])] = void 0 !== e[1] ? decodeURIComponent(e[1]) : null);
          return r
         }(),
         file: (t.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
         hash: t.hash.replace("#", ""),
         path: t.pathname.replace(/^([^\/])/, "/$1"),
         relative: (t.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
         segments: t.pathname.replace(/^\//, "").split("/")
        }
       },
       objectToQueryString: function(e) {
        var t = [];
        for (var r in e) e.hasOwnProperty(r) && (null === e[r] || void 0 === e[r] ? t.push(encodeURIComponent(r)) : t.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r])));
        return t.join("&")
       },
       queryStringToObject: function(e) {
        return void 0 === e && (e = this.currentURL()), this.parseURL(e).params
       },
       addStateChangeListener: function(e) {
        var t = this;
        window.addEventListener && window.addEventListener("popstate", function(r) {
         e(t.currentURL())
        })
       },
       pushState: function(e, t) {
        this._updateBrowserState("pushState", e, t)
       },
       replaceState: function(e, t) {
        this._updateBrowserState("replaceState", e, t)
       },
       _updateBrowserState: function(e, t, r) {
        if (r = r || "", "object" === (void 0 === t ? "undefined" : n(t))) {
         var o = this.objectToQueryString(t);
         t = this.replaceQueryString(this.currentURL(), o)
        }
        var a = this.parseURL();
        t !== a.source && t !== a.relative && window.history && window.history[e] && window.history[e](null, r, t)
       }
      };
     t.exports = a
    }, {
     underscore: void 0
    }],
    "jskit/general/Utils": [function(e, t, r) {
     "use strict";
     var n = {
      copyToClipboard: function(e, t) {
       return t = t || "Copy to clipboard: Ctrl+C, Enter", window.prompt(t, e), !1
      },
      findLastIndex: function(e, t, r) {
       r && (t = t.bind(r));
       for (var n = e.length - 1; n >= 0; n--)
        if (t(e[n], n, e)) return n;
       return -1
      },
      listClassMethodNames: function(e, t) {
       for (var r = [], n = Object.getPrototypeOf(e), o = t ? Object.prototype : Object.getPrototypeOf(n); n !== o;) r = r.concat(Object.getOwnPropertyNames(n)), n = Object.getPrototypeOf(n);
       return r.sort().filter(function(t, r, n) {
        return t != n[r + 1] && "function" == typeof e[t]
       })
      },
      autoBindClass: function(e, t) {
       var r = (t = t || {}).followPrototype || !1,
        o = t.prefixes || null,
        a = n.listClassMethodNames(e, r).filter(function(e) {
         return "constructor" !== e && (!o || o.some(function(t) {
          return 0 === e.indexOf(t)
         }))
        });
       return a.forEach(function(t) {
        e[t] = e[t].bind(e)
       }), a
      }
     };
     t.exports = n
    }, {}],
    "jskit/general/Validators": [function(e, t, r) {
     "use strict";
     var n = {
      EMAIL_RE: /^[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+(?:\.[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i,
      STRIP_NON_PHONE_CHAR_RE: /[\(\)\-\. ]/g,
      DIGITS_ONLY_RE: /^\d+$/,
      isEmpty: function(e) {
       return void 0 === e || null === e || "" === e
      },
      isNotEmpty: function(e) {
       return void 0 !== e || null !== e || "" !== e
      },
      isValidEmail: function(e) {
       return n.EMAIL_RE.test(e)
      },
      isValidInternationalPhone: function(e) {
       var t = e.replace(n.STRIP_NON_PHONE_CHAR_RE, "");
       return t.length > 0 && "+" === t[0] && (t = t.slice(1)), !!n.DIGITS_ONLY_RE.test(t) && !(t.length < 9)
      }
     };
     t.exports = n
    }, {}],
    "jskit/react/Gauge": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     });
     var n = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      o = l(e("react")),
      a = l(e("chart.js"));
   
     function l(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
     var i = function(e) {
      function t() {
       return function(e, t) {
         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t),
        function(e, t) {
         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
         return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return function(e, t) {
       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
       e.prototype = Object.create(t && t.prototype, {
        constructor: {
         value: e,
         enumerable: !1,
         writable: !0,
         configurable: !0
        }
       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, o.default.Component), n(t, [{
       key: "componentDidMount",
       value: function() {
        this.updateGauge()
       }
      }, {
       key: "componentDidUpdate",
       value: function() {
        this.updateGauge()
       }
      }, {
       key: "render",
       value: function() {
        return o.default.createElement("div", {
         className: "position-relative"
        }, o.default.createElement("canvas", {
         id: this.props.id,
         height: this.props.height,
         style: {
          width: "100%",
          height: this.props.height + "px"
         }
        }), this.props.label ? this.renderLabel() : null)
       }
      }, {
       key: "renderLabel",
       value: function() {
        var e = o.default.createElement("span", null, " "),
         t = void 0 === this.props.value || null === this.props.value ? e : this.props.value;
        return o.default.createElement("div", {
         className: "position-absolute-fullsize d-flex justify-content-center align-items-center text-center"
        }, o.default.createElement("div", null, o.default.createElement("p", {
         className: "font-12 font-weight-medium mb-0"
        }, this.props.label), o.default.createElement("p", {
         className: "font-20 text-" + this.props.color + " mb-0"
        }, t)))
       }
      }, {
       key: "updateGauge",
       value: function() {
        var e = {
         muted: "#8e9497",
         success: "#00ce7a",
         warning: "#f5a623",
         danger: "#ce0600"
        };
        new a.default(document.getElementById(this.props.id), {
         type: "doughnut",
         data: {
          datasets: [{
           data: [100 * (1 - this.props.percentage), 100 * this.props.percentage],
           backgroundColor: ["#f5f5f5", e[this.props.color]],
           hoverBackgroundColor: ["#f5f5f5", e[this.props.color]],
           borderColor: "rgba(0,0,0,0)",
           borderWidth: 0
          }]
         },
         options: {
          cutoutPercentage: 80,
          animation: {
           animateRotate: !!this.props.value
          },
          legend: {
           display: !1
          },
          tooltips: {
           enabled: !1
          }
         }
        })
       }
      }]), t
     }();
     r.default = i, i.defaultProps = {
      id: null,
      height: 144,
      label: null,
      value: null,
      percentage: 50,
      color: "muted"
     }
    }, {
     "chart.js": void 0,
     react: void 0
    }],
    "jskit/react/Modal": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     });
     var n = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      o = u(e("react")),
      a = u(e("jquery")),
      l = u(e("underscore")),
      i = u(e("jskit/react/ReactUtils")),
      s = e("jskit/react/forms/FormHelpers");
   
     function u(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
   
     function c(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
       value: r,
       enumerable: !0,
       configurable: !0,
       writable: !0
      }) : e[t] = r, e
     }
     var f = [{
       key: "closeButton",
       label: "Close",
       color: "primary"
      }, {
       key: "saveButton",
       label: "Save",
       color: "primary"
      }, {
       key: "cancelButton",
       label: "Cancel",
       color: "outline-primary"
      }],
      p = function(e) {
       function t(e) {
        ! function(e, t) {
         if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var r = function(e, t) {
         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
         return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return r.modalId = (0, s.uniqueHtmlId)("modal"), r.modalTitleId = r.modalId + "-title", r
       }
       return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
         constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
         }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
       }(t, o.default.Component), n(t, [{
        key: "showModal",
        value: function() {
         this.props.onShowComplete && (0, a.default)(this.refs.modal).one("shown.bs.modal", this.props.onShowComplete), (0, a.default)(this.refs.modal).modal("show")
        }
       }, {
        key: "hideModal",
        value: function() {
         (0, a.default)(this.refs.modal).modal("hide")
        }
       }, {
        key: "render",
        value: function() {
         var e, t = this.props.largeModal,
          r = this.props.smallModal,
          n = i.default.cssClass("modal-dialog", (c(e = {}, "modal-lg", t), c(e, "modal-sm", r), e)),
          a = i.default.cssClass("modal-header", c({}, "p-lg-4", t)),
          l = i.default.cssClass("modal-body", c({}, "px-lg-5 py-lg-4", t)),
          s = i.default.cssClass("modal-footer", c({}, "px-lg-5 py-lg-4", t));
         return o.default.createElement("div", {
          ref: "modal",
          id: this.modalId,
          className: "modal fade",
          "data-backdrop": "static",
          tabIndex: "-1",
          role: "dialog",
          "aria-labelledby": this.modalTitleId,
          "aria-hidden": "true"
         }, o.default.createElement("div", {
          className: n,
          role: "document"
         }, o.default.createElement("div", {
          className: "modal-content"
         }, o.default.createElement("div", {
          className: a
         }, o.default.createElement("h3", {
          id: this.modalTitleId,
          className: "light modal-title"
         }, this.props.title), o.default.createElement("button", {
          type: "button",
          className: "close",
          "data-dismiss": "modal",
          "aria-label": "Close"
         }, o.default.createElement("span", {
          "aria-hidden": "true"
         }, "×")), this.props.headerExtra), o.default.createElement("div", {
          className: l
         }, this.props.children), o.default.createElement("div", {
          className: s
         }, this.props.buttons || this.renderStandardButtons()))))
        }
       }, {
        key: "renderStandardButtons",
        value: function() {
         var e = this;
         return f.map(function(t, r) {
          var n = e.props[t.key];
          if (!n) return null;
          return o.default.createElement("button", {
           key: r,
           onClick: function(t) {
            l.default.isFunction(n) && n(t), t.isDefaultPrevented() || e.hideModal()
           },
           type: "button",
           className: "btn btn-" + t.color
          }, t.label)
         }).filter(function(e) {
          return !!e
         })
        }
       }]), t
      }();
     r.default = p, p.defaultProps = {
      smallModal: !1,
      largeModal: !1,
      title: "",
      headerExtra: null,
      buttons: null,
      closeButton: null,
      saveButton: null,
      cancelButton: null,
      onShowComplete: null
     }
    }, {
     jquery: void 0,
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     react: void 0,
     underscore: void 0
    }],
    "jskit/react/Paginator": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     });
     var n = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      o = u(e("react")),
      a = u(e("underscore")),
      l = u(e("jskit/general/URLHistory")),
      i = u(e("jskit/general/Cookie")),
      s = u(e("jskit/general/Utils"));
   
     function u(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
     var c = function(e) {
      function t(e) {
       ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
       }(this, t);
       var r = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
       }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return s.default.autoBindClass(r, "handle"), r.state = {
        page: 0,
        pageSize: r.readPageSizeCookie() || 10
       }, r
      }
      return function(e, t) {
       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
       e.prototype = Object.create(t && t.prototype, {
        constructor: {
         value: e,
         enumerable: !1,
         writable: !0,
         configurable: !0
        }
       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, o.default.Component), n(t, [{
       key: "getCurrentPage",
       value: function() {
        return this.state.page
       }
      }, {
       key: "getQueryOffsetLimit",
       value: function() {
        return {
         offset: this.state.page * this.state.pageSize,
         limit: this.state.pageSize
        }
       }
      }, {
       key: "reset",
       value: function(e) {
        this.state.page = !e || parseInt(e) != e || e < 0 ? 0 : e, this.forceUpdate()
       }
      }, {
       key: "numPages",
       value: function() {
        return Math.ceil(this.props.totalRecords / this.state.pageSize)
       }
      }, {
       key: "currentPage",
       value: function() {
        var e = this.numPages();
        return 0 !== this.state.page && this.state.page > e - 1 && a.default.defer(this.handlePageClick, Math.max(0, e - 1)), this.state.page
       }
      }, {
       key: "getCurrentUrl",
       value: function() {
        return l.default.currentURL().split(/[?#]/)[0]
       }
      }, {
       key: "decodePageSizeCookie",
       value: function() {
        var e = i.default.getCookie("uptime_paginator");
        if (!e) return null;
        try {
         e = JSON.parse(e)
        } catch (e) {
         return null
        }
        return e
       }
      }, {
       key: "readPageSizeCookie",
       value: function() {
        var e = this.decodePageSizeCookie();
        return e && e[this.getCurrentUrl()] || null
       }
      }, {
       key: "writePageSizeCookie",
       value: function(e) {
        var t = this.getCurrentUrl(),
         r = this.decodePageSizeCookie() || {};
        r[t] = e, i.default.setCookie("uptime_paginator", JSON.stringify(r), 90)
       }
      }, {
       key: "handlePageClick",
       value: function(e, t) {
        t && t.preventDefault();
        var r = this.currentPage();
        r = "prev" === e ? Math.max(r - 1, 0) : "next" === e ? Math.min(r + 1, this.numPages() - 1) : Math.min(Math.max(e, 0), this.numPages() - 1), this.setState({
         page: r
        }, function() {
         this.props.onPageChange(r)
        })
       }
      }, {
       key: "handlePerPageChange",
       value: function(e) {
        var t = parseInt(e.target.value);
        t && (this.writePageSizeCookie(t), this.setState({
         page: 0,
         pageSize: t
        }, function() {
         this.props.onPageChange(0)
        }))
       }
      }, {
       key: "render",
       value: function() {
        if ("string" == typeof this.state.pageSize) throw new Error("Paginator: Must assign the pageSize prop a numeric value (eg. <Paginator pageSize={10}/>)");
        if (this.props.totalRecords <= 0) return null;
        var e = this.currentPage(),
         t = this.numPages(),
         r = e * this.state.pageSize + 1,
         n = Math.min(r + this.state.pageSize - 1, this.props.totalRecords);
        return o.default.createElement("div", {
         className: "row clearfix"
        }, o.default.createElement("div", {
         className: "col-lg-5 mb-3"
        }, o.default.createElement("div", {
         className: "form-inline justify-content-center justify-content-lg-start"
        }, o.default.createElement("select", {
         className: "form-control mr-3 mb-2 mb-sm-0",
         value: this.state.pageSize,
         onChange: this.handlePerPageChange
        }, o.default.createElement("option", {
         value: "10"
        }, "10 Per Page"), o.default.createElement("option", {
         value: "25"
        }, "25 Per Page"), o.default.createElement("option", {
         value: "50"
        }, "50 Per Page"), o.default.createElement("option", {
         value: "100"
        }, "100 Per Page"), o.default.createElement("option", {
         value: "250"
        }, "250 Per Page")), o.default.createElement("small", null, "Showing ", r, " to ", n, " of ", this.props.totalRecords, " entries"))), o.default.createElement("div", {
         className: "col-lg-7 mb-3"
        }, this.renderPageNavButtons(e, t)))
       }
      }, {
       key: "renderPageNavButtons",
       value: function(e, t) {
        return t > 1 ? o.default.createElement("nav", {
         "aria-label": "Page number"
        }, o.default.createElement("ul", {
         className: "pagination justify-content-center justify-content-lg-end"
        }, o.default.createElement("li", {
         className: "page-item " + (0 === e ? "disabled" : "")
        }, o.default.createElement("a", {
         key: "prev",
         onClick: this.handlePageClick.bind(null, "prev"),
         className: "page-link text-nowrap"
        }, o.default.createElement("i", {
         className: "fas fa-angle-double-left"
        }), " Prev")), this.renderPageNumberButtons(e, t), o.default.createElement("li", {
         className: "page-item " + (e === t - 1 ? "disabled" : "")
        }, o.default.createElement("a", {
         key: "next",
         onClick: this.handlePageClick.bind(null, "next"),
         className: "page-link text-nowrap"
        }, "Next ", o.default.createElement("i", {
         className: "fas fa-angle-double-right"
        }))))) : null
       }
      }, {
       key: "renderPageNumberButtons",
       value: function(e, t) {
        var r = Math.min(10, t),
         n = Math.max(0, e - 4),
         l = Math.min(t, e + 6);
        return l - n < r && (0 == n ? l = n + r : n = l - r), a.default.map(a.default.range(n, l), function(t) {
         return o.default.createElement("li", {
          key: t,
          className: (r = t, "page-item " + (e == r ? "active" : ""))
         }, o.default.createElement("a", {
          onClick: this.handlePageClick.bind(null, t),
          className: "page-link"
         }, t + 1));
         var r
        }.bind(this))
       }
      }]), t
     }();
     r.default = c, c.defaultProps = {
      totalRecords: 0,
      onPageChange: function(e) {}
     }
    }, {
     "jskit/general/Cookie": "jskit/general/Cookie",
     "jskit/general/URLHistory": "jskit/general/URLHistory",
     "jskit/general/Utils": "jskit/general/Utils",
     react: void 0,
     underscore: void 0
    }],
    "jskit/react/ReactUtils": [function(e, t, r) {
     "use strict";
     var n = e("react"),
      o = e("react-dom"),
      a = e("underscore"),
      l = e("jquery"),
      i = {
       renderComponent: function(t, r, a, i) {
        i = i || "default", l(document).ready(function() {
         var l = e(r)[i],
          s = n.createElement(l, a);
         o.render(s, document.getElementById(t))
        })
       },
       escapeHTML: function(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&quot;").replace(/'/g, "&#039;")
       },
       cssClass: function() {
        var e = [];
        return a.each(arguments, function(t) {
         a.isObject(t) ? a.each(t, function(t, r) {
          t && e.push(r.toString().trim())
         }) : t && e.push(t.toString().trim())
        }), e.join(" ")
       },
       createSelectOptionList: function(e, t) {
        a.isArray(e) || (e = a.pairs(e));
        var r = a.map(e, function(e) {
         return n.createElement("option", {
          key: e[0],
          value: e[0]
         }, e[1])
        });
        return void 0 !== t && r.unshift(n.createElement("option", {
         key: "",
         value: ""
        }, t)), r
       }
      };
     t.exports = i
    }, {
     jquery: void 0,
     react: void 0,
     "react-dom": void 0,
     underscore: void 0
    }],
    "jskit/react/SectionNav": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     }), r.SectionNavContent = r.SectionNav = void 0;
     var n = function() {
       return function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
         var r = [],
          n = !0,
          o = !1,
          a = void 0;
         try {
          for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
         } catch (e) {
          o = !0, a = e
         } finally {
          try {
           !n && i.return && i.return()
          } finally {
           if (o) throw a
          }
         }
         return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
       }
      }(),
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = c(e("underscore")),
      l = c(e("jquery")),
      i = c(e("react")),
      s = c(e("jskit/react/ReactUtils")),
      u = c(e("jskit/general/Utils"));
   
     function c(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
   
     function f(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }
   
     function p(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
     }
   
     function d(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
       constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
       }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
     }(r.SectionNav = function(e) {
      function t(e) {
       f(this, t);
       var r = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return u.default.autoBindClass(r, "handle"), r
      }
      return d(t, i.default.PureComponent), o(t, [{
       key: "componentDidUpdate",
       value: function(e, t) {
        if (a.default.isEmpty(e.errors) && !a.default.isEmpty(this.props.errors)) {
         var r = (0, l.default)(this.refs.sections).find("[data-section]:has(.is-invalid), [data-section]:has(.alert)").data("section");
         r && this.handleSectionClick(r)
        }
       }
      }, {
       key: "handleSectionClick",
       value: function(e, t) {
        t && t.preventDefault(), this.props.onSectionNav(e)
       }
      }, {
       key: "render",
       value: function() {
        return i.default.createElement(i.default.Fragment, null, i.default.createElement("div", {
         className: "row"
        }, i.default.createElement("div", {
         className: this.props.gridClass
        }, i.default.createElement("nav", {
         className: this.props.navClass,
         role: "tablist"
        }, this.renderSectionLinks()))), i.default.createElement("div", {
         ref: "sections",
         className: "tab-content"
        }, this.props.children))
       }
      }, {
       key: "renderSectionLinks",
       value: function() {
        var e = this;
        return this.props.sectionIds.map(function(t) {
         var r = n(t, 2),
          o = r[0],
          a = r[1],
          l = o === e.props.currentSectionId,
          u = s.default.cssClass("nav-item nav-link", {
           active: l
          });
         return i.default.createElement("a", {
          href: "#",
          key: o,
          className: u,
          id: "section-nav-" + o,
          role: "tab",
          "aria-selected": l,
          "aria-controls": "section-content-" + o,
          onClick: e.handleSectionClick.bind(null, o)
         }, a)
        })
       }
      }]), t
     }()).defaultProps = {
      sectionIds: [],
      currentSectionId: "",
      errors: "",
      gridClass: "col-lg-12",
      navClass: "nav nav-tabs nav-tabs-plain mb-4",
      onSectionNav: null
     }, (r.SectionNavContent = function(e) {
      function t() {
       return f(this, t), p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return d(t, i.default.PureComponent), o(t, [{
       key: "render",
       value: function() {
        var e, t, r, n = this,
         o = this.props.sectionId === this.props.currentSectionId,
         a = s.default.cssClass("tab-pane fade", (r = o, (t = "active") in (e = {}) ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
         }) : e[t] = r, e));
        return o && setTimeout(function() {
         return (0, l.default)(n.refs.section).addClass("show")
        }, 0), i.default.createElement("div", {
         ref: "section",
         "data-section": this.props.sectionId,
         className: a,
         id: "section-content-" + this.props.sectionId,
         role: "tabpanel",
         "aria-hidden": !o,
         "aria-labelledby": "section-nav-" + this.props.sectionId
        }, this.props.children)
       }
      }]), t
     }()).defaultProps = {
      sectionId: null,
      currentSectionId: null
     }
    }, {
     jquery: void 0,
     "jskit/general/Utils": "jskit/general/Utils",
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     react: void 0,
     underscore: void 0
    }],
    "jskit/react/forms/CheckBox": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     });
     var n = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
       }
       return e
      },
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = s(e("react")),
      l = e("jskit/react/forms/FormHelpers"),
      i = s(e("jskit/react/ReactUtils"));
   
     function s(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
     var u = function(e) {
      function t(e) {
       ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
       }(this, t);
       var r = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
       }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = (0, l.uniqueHtmlId)(e.fieldName), r
      }
      return function(e, t) {
       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
       e.prototype = Object.create(t && t.prototype, {
        constructor: {
         value: e,
         enumerable: !1,
         writable: !0,
         configurable: !0
        }
       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, a.default.Component), o(t, [{
       key: "render",
       value: function() {
        var e, t, r, o = (0, l.unpackFormLinkOrProps)(this.props);
        return a.default.createElement("div", {
         className: i.default.cssClass("custom-control custom-checkbox", this.props.divCSSClass)
        }, a.default.createElement("input", {
         type: "checkbox",
         id: this.htmlId,
         name: o.fieldName,
         className: i.default.cssClass("custom-control-input", (e = {}, t = "is-invalid", r = o.errors, t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
         }) : e[t] = r, e)),
         disabled: this.props.disabled,
         checked: o.value,
         onChange: o.onChange
        }), a.default.createElement(l.Label, n({
         baseCSSClass: "custom-control-label",
         fieldId: this.htmlId
        }, this.props)), a.default.createElement(l.FieldErrors, {
         errors: o.errors
        }), a.default.createElement(l.FieldHelpText, this.props))
       }
      }]), t
     }();
     r.default = u, u.defaultProps = {
      fieldName: null,
      labelText: null,
      titleText: null,
      helpText: null,
      isRequired: !1,
      disabled: !1,
      divCSSClass: null,
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null
     }
    }, {
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     react: void 0
    }],
    "jskit/react/forms/CheckGroup": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     });
     var n = function() {
       return function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
         var r = [],
          n = !0,
          o = !1,
          a = void 0;
         try {
          for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
         } catch (e) {
          o = !0, a = e
         } finally {
          try {
           !n && i.return && i.return()
          } finally {
           if (o) throw a
          }
         }
         return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
       }
      }(),
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = u(e("underscore")),
      l = u(e("react")),
      i = e("jskit/react/forms/FormHelpers"),
      s = u(e("jskit/react/ReactUtils"));
   
     function u(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
     var c = function(e) {
      function t(e) {
       ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
       }(this, t);
       var r = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
       }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = (0, i.uniqueHtmlId)(e.fieldName), r.handleChange = r.handleChange.bind(r), r
      }
      return function(e, t) {
       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
       e.prototype = Object.create(t && t.prototype, {
        constructor: {
         value: e,
         enumerable: !1,
         writable: !0,
         configurable: !0
        }
       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, l.default.Component), o(t, [{
       key: "handleChange",
       value: function(e) {
        var t = (0, i.unpackFormLinkOrProps)(this.props),
         r = e.target.value,
         n = e.target.checked,
         o = t.value || [];
        o = a.default.difference(o, [r.toString(), parseInt(r)]), n && (o = a.default.union(o, [r])), t.onChange(new i.CustomEvent({
         type: "change",
         target: this,
         value: o
        }))
       }
      }, {
       key: "render",
       value: function() {
        var e = (0, i.unpackFormLinkOrProps)(this.props);
        return l.default.createElement("div", {
         className: "form-group"
        }, this.renderOptions(e), l.default.createElement(i.FieldErrors, {
         errors: e.errors
        }), l.default.createElement(i.FieldHelpText, this.props))
       }
      }, {
       key: "renderOptions",
       value: function(e) {
        var t = this;
        return this.props.choices.map(function(r, o) {
         var a = n(r, 2),
          u = a[0],
          c = a[1],
          f = t.htmlId + "-" + o,
          p = e.value || [];
         return l.default.createElement("div", {
          key: o,
          className: s.default.cssClass("custom-control custom-checkbox", t.props.divCSSClass)
         }, l.default.createElement("input", {
          type: "checkbox",
          id: f,
          name: e.fieldName,
          className: s.default.cssClass("custom-control-input", function(e, t, r) {
           return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
           }) : e[t] = r, e
          }({}, "is-invalid", e.errors)),
          disabled: t.props.disabled,
          value: u,
          checked: void 0 !== p.find(function(e) {
           return e.toString() === u.toString()
          }),
          onChange: t.handleChange
         }), l.default.createElement(i.Label, {
          baseCSSClass: "custom-control-label",
          fieldId: f,
          isRequired: t.props.isRequired,
          labelText: c
         }))
        })
       }
      }]), t
     }();
     r.default = c, c.defaultProps = {
      fieldName: null,
      helpText: null,
      isRequired: !1,
      disabled: !1,
      choices: [],
      divCSSClass: null,
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null
     }
    }, {
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     react: void 0,
     underscore: void 0
    }],
    "jskit/react/forms/DateTimeInput": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     }), r.DateTimeWidget = void 0;
     var n = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
       }
       return e
      },
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = f(e("jquery")),
      l = f(e("moment")),
      i = f(e("react")),
      s = f(e("jskit/general/Utils")),
      u = e("jskit/react/forms/FormHelpers"),
      c = f(e("jskit/react/ReactUtils"));
   
     function f(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
   
     function p(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }
   
     function d(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
     }
   
     function h(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
       constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
       }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
     }
     var m = r.DateTimeWidget = function(e) {
      function t(e) {
       p(this, t);
       var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = e.htmlId || (0, u.uniqueHtmlId)(e.fieldName), s.default.autoBindClass(r, "handle"), r
      }
      return h(t, i.default.Component), o(t, [{
       key: "componentDidMount",
       value: function() {
        (0, a.default)(this.refs.picker).datetimepicker({
         debug: !1,
         icons: {
          time: "far fa-clock",
          date: "far fa-calendar-alt",
          up: "fas fa-arrow-up",
          down: "fas fa-arrow-down",
          previous: "fas fa-chevron-left",
          next: "fas fa-chevron-right",
          today: "far fa-calendar-check",
          clear: "far fa-trash-alt",
          close: "fas fa-times"
         },
         buttons: {
          showToday: !1,
          showClear: !1,
          showClose: !1
         },
         focusOnShow: !0,
         format: this.props.dateFormat
        }), (0, a.default)(this.refs.picker).on("change.datetimepicker", this.handleChange), this.componentDidUpdate()
       }
      }, {
       key: "componentDidUpdate",
       value: function() {
        var e = (0, u.unpackFormLinkOrProps)(this.props),
         t = e.value ? l.default.utc(e.value) : null;
        try {
         (0, a.default)(this.refs.picker).datetimepicker("date", t)
        } catch (e) {}
       }
      }, {
       key: "componentWillUnmount",
       value: function() {
        (0, a.default)(this.refs.picker).off("change.datetimepicker"), (0, a.default)(this.refs.picker).datetimepicker("destroy")
       }
      }, {
       key: "handleOpenDatePicker",
       value: function(e) {
        e.preventDefault(), (0, a.default)(this.refs.picker).datetimepicker("show")
       }
      }, {
       key: "handleChange",
       value: function(e) {
        var t = e.date ? (0, l.default)(e.date).utcOffset(0, !0).toISOString() : null,
         r = (0, u.unpackFormLinkOrProps)(this.props),
         n = new u.CustomEvent({
          type: "change",
          target: this,
          value: t
         });
        r.onChange(n)
       }
      }, {
       key: "render",
       value: function() {
        var e, t, r, n = (0, u.unpackFormLinkOrProps)(this.props),
         o = this.htmlId + "-picker",
         a = "#" + o;
        return i.default.createElement("div", {
         ref: "picker",
         id: o,
         className: "input-group date",
         "data-target-input": "nearest"
        }, i.default.createElement("input", {
         ref: "textInput",
         type: "text",
         id: this.htmlId,
         name: n.fieldName,
         className: c.default.cssClass("form-control datetimepicker-input", (e = {}, t = "is-invalid", r = n.errors, t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
         }) : e[t] = r, e)),
         disabled: this.props.disabled,
         onFocus: this.handleOpenDatePicker,
         "data-target": a
        }), i.default.createElement("div", {
         className: "input-group-append"
        }, i.default.createElement("div", {
         className: "input-group-text",
         "data-target": a,
         "data-toggle": "datetimepicker"
        }, i.default.createElement("i", {
         className: "far fa-calendar-alt"
        }))))
       }
      }]), t
     }();
     m.defaultProps = {
      fieldName: "",
      disabled: !1,
      dateFormat: "D MMM YYYY h:mm a",
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null
     };
     var v = function(e) {
      function t(e) {
       p(this, t);
       var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = (0, u.uniqueHtmlId)(e.fieldName), r
      }
      return h(t, i.default.Component), o(t, [{
       key: "render",
       value: function() {
        var e = (0, u.unpackFormLinkOrProps)(this.props);
        return i.default.createElement("div", {
         className: "form-group"
        }, i.default.createElement(u.Label, n({
         fieldId: this.htmlId
        }, this.props)), i.default.createElement(m, n({
         ref: "widget",
         htmlId: this.htmlId
        }, this.props)), i.default.createElement(u.FieldErrors, {
         errors: e.errors
        }), i.default.createElement(u.FieldHelpText, this.props))
       }
      }]), t
     }();
     r.default = v, v.defaultProps = {
      labelText: null,
      titleText: null,
      helpText: null,
      isRequired: !1
     }
    }, {
     jquery: void 0,
     "jskit/general/Utils": "jskit/general/Utils",
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     moment: void 0,
     react: void 0
    }],
    "jskit/react/forms/DurationInput": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     }), r.DurationInputWidget = void 0;
     var n = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
       }
       return e
      },
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = u(e("react")),
      l = u(e("jskit/general/Utils")),
      i = e("jskit/react/forms/FormHelpers"),
      s = u(e("jskit/react/ReactUtils"));
   
     function u(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
   
     function c(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
       value: r,
       enumerable: !0,
       configurable: !0,
       writable: !0
      }) : e[t] = r, e
     }
   
     function f(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }
   
     function p(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
     }
   
     function d(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
       constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
       }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
     }
     var h = r.DurationInputWidget = function(e) {
      function t(e) {
       f(this, t);
       var r = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = e.htmlId || (0, i.uniqueHtmlId)(e.fieldName), l.default.autoBindClass(r, "handle"), r.state = {
        isEditingMins: !1
       }, r
      }
      return d(t, a.default.Component), o(t, [{
       key: "_clamp",
       value: function(e, t, r) {
        return e = parseInt(e) || 0, Math.min(Math.max(e, t), r)
       }
      }, {
       key: "_splitMinsToText",
       value: function(e) {
        if (!e && !this.state.isEditingMins) return {
         hours: "",
         mins: ""
        };
        var t = (e = Math.floor(e)) % 60;
        return {
         hours: Math.floor(e / 60).toString(),
         mins: this.state.isEditingMins ? t.toString() : t.toString().padStart(2, "0")
        }
       }
      }, {
       key: "_joinHoursMins",
       value: function(e, t) {
        return 60 * (parseInt(e) || 0) + (parseInt(t) || 0)
       }
      }, {
       key: "handleBlur",
       value: function(e) {
        this.setState({
         isEditingMins: !1
        })
       }
      }, {
       key: "handleChange",
       value: function(e) {
        e.target === this.refs.mins && this.setState({
         isEditingMins: !0
        });
        var t = this.refs.hours.value,
         r = this.refs.mins.value;
        "" === t && "" === r || (t = this._clamp(t, 0, 99), r = this._clamp(r, 0, 59));
        var n = (0, i.unpackFormLinkOrProps)(this.props),
         o = this._joinHoursMins(t, r),
         a = new i.CustomEvent({
          type: "change",
          target: this,
          value: o
         });
        n.onChange(a)
       }
      }, {
       key: "render",
       value: function() {
        var e = (0, i.unpackFormLinkOrProps)(this.props),
         t = this._splitMinsToText(e.value);
        return a.default.createElement("div", {
         className: "d-flex justify-content-between align-items-top"
        }, a.default.createElement("div", null, a.default.createElement("input", {
         ref: "hours",
         type: "text",
         id: this.htmlId + "-hours",
         name: e.fieldName + "-hours",
         className: s.default.cssClass("form-control text-right", c({}, "is-invalid", e.errors)),
         placeholder: "hh",
         disabled: this.props.disabled,
         maxLength: "2",
         value: t.hours,
         onChange: this.handleChange,
         onBlur: this.handleBlur
        }), a.default.createElement("small", {
         className: "form-text text-right text-muted mr-3"
        }, "hours")), a.default.createElement("span", {
         className: "mt-2"
        }, " : "), a.default.createElement("div", null, a.default.createElement("input", {
         ref: "mins",
         type: "text",
         id: this.htmlId + "-mins",
         name: e.fieldName + "-mins",
         className: s.default.cssClass("form-control text-right", c({}, "is-invalid", e.errors)),
         placeholder: "mm",
         disabled: this.props.disabled,
         maxLength: "2",
         value: t.mins,
         onChange: this.handleChange,
         onBlur: this.handleBlur
        }), a.default.createElement("small", {
         className: "form-text text-right text-muted mr-3"
        }, "mins")))
       }
      }]), t
     }();
     h.defaultProps = {
      fieldName: "",
      disabled: !1,
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null
     };
     var m = function(e) {
      function t(e) {
       f(this, t);
       var r = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = (0, i.uniqueHtmlId)(e.fieldName), r
      }
      return d(t, a.default.Component), o(t, [{
       key: "render",
       value: function() {
        var e = (0, i.unpackFormLinkOrProps)(this.props);
        return a.default.createElement("div", {
         className: "form-group"
        }, a.default.createElement(i.Label, n({
         fieldId: this.htmlId + "-hours"
        }, this.props)), a.default.createElement(h, n({
         ref: "widget",
         htmlId: this.htmlId
        }, this.props)), a.default.createElement(i.FieldErrors, {
         errors: e.errors
        }), a.default.createElement(i.FieldHelpText, this.props))
       }
      }]), t
     }();
     r.default = m, m.defaultProps = {
      labelText: null,
      titleText: null,
      helpText: null,
      isRequired: !1
     }
    }, {
     "jskit/general/Utils": "jskit/general/Utils",
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     react: void 0
    }],
    "jskit/react/forms/FormHelpers": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     }), r.HelpIcon = r.CustomEvent = void 0;
     var n = function() {
      function e(e, t) {
       for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
       }
      }
      return function(t, r, n) {
       return r && e(t.prototype, r), n && e(t, n), t
      }
     }();
     r.uniqueHtmlId = function(e) {
      return (e = e || "react-id") + "--" + ++c + "--"
     }, r.prepareFormLink = function(e, t, r) {
      var n = function(r) {
        return e.state[t][r]
       },
       o = function(r, n, o) {
        o || (o = n, n = null);
        var a = "checkbox" === o.target.type ? o.target.checked : o.target.value,
         l = e.state[t],
         i = Object.assign({}, l, u({}, r, a));
        e.setState(u({}, t, i)), n && n(o, a)
       },
       a = function(e) {
        return r ? r[e] : null
       };
      return {
       get: n,
       set: o,
       errors: a,
       forField: function(e) {
        return {
         get: n.bind(null, e),
         set: o.bind(null, e),
         errors: a.bind(null, e)
        }
       }
      }
     }, r.unpackFormLinkOrProps = function(e) {
      var t = e.fieldName,
       r = e.formLink ? e.formLink.forField(t) : null,
       n = r ? r.get() : e.value;
      void 0 !== n && null !== n || (n = "");
      return {
       fieldName: t,
       formLink: r,
       value: n,
       onChange: r ? r.set.bind(null, e.onChange) : e.onChange,
       errors: r && r.errors() || e.formErrors && e.formErrors[t] || null
      }
     }, r.FormErrors = function(e) {
      if (!e.errors || 0 === e.errors.length) return null;
      var t = e.errors.map(function(e) {
       return -1 !== e.indexOf("</a>") || -1 !== e.indexOf("</strong>") || -1 !== e.indexOf("</em>") ? a.default.createElement("li", {
        key: e,
        dangerouslySetInnerHTML: {
         __html: e
        }
       }) : a.default.createElement("li", {
        key: e
       }, e)
      });
      return a.default.createElement("div", {
       className: "alert alert-block alert-danger"
      }, a.default.createElement("ul", {
       className: "list-unstyled list-spacer-1 mb-0"
      }, t))
     }, r.FieldErrors = function(e) {
      if (!e.errors) return null;
      var t = e.errors.join ? e.errors.join(" ") : e.errors;
      return a.default.createElement("span", {
       className: "invalid-feedback d-block"
      }, a.default.createElement("strong", null, t))
     }, r.FieldHelpText = function(e) {
      if (!e.helpText) return null;
      return a.default.createElement("small", {
       className: "form-text text-muted"
      }, e.helpText)
     }, r.Label = function(e) {
      var t = e.baseCSSClass || "form-control-label";
      if (!e.labelText && -1 === t.indexOf("custom-control")) return null;
      return a.default.createElement("label", {
       htmlFor: e.fieldId,
       className: l.default.cssClass(t, {
        requiredField: e.isRequired
       })
      }, e.labelText, a.default.createElement(f, {
       titleText: e.titleText
      }))
     };
     var o = i(e("jquery")),
      a = i(e("react")),
      l = i(e("jskit/react/ReactUtils"));
   
     function i(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
   
     function s(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }
   
     function u(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
       value: r,
       enumerable: !0,
       configurable: !0,
       writable: !0
      }) : e[t] = r, e
     }
     var c = 0;
     r.CustomEvent = function e(t) {
      var r = t.type,
       n = void 0 === r ? "custom" : r,
       o = t.target,
       a = void 0 === o ? null : o,
       l = t.value,
       i = void 0 === l ? void 0 : l;
      s(this, e), this.bubbles = !1, this.cancelable = !1, this.currentTarget = a, this.defaultPrevented = !0, this.eventPhase = 0, this.nativeEvent = null, this.preventDefault = function() {
       return null
      }, this.isDefaultPrevented = function() {
       return !0
      }, this.stopPropagation = function() {
       return null
      }, this.isPropagationStopped = function() {
       return !0
      }, this.target = a, this.timeStamp = Date.now(), this.type = n, void 0 !== i && (this.target.value = i)
     };
     var f = r.HelpIcon = function(e) {
      function t() {
       return s(this, t),
        function(e, t) {
         if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
         return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return function(e, t) {
       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
       e.prototype = Object.create(t && t.prototype, {
        constructor: {
         value: e,
         enumerable: !1,
         writable: !0,
         configurable: !0
        }
       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, a.default.PureComponent), n(t, [{
       key: "componentDidMount",
       value: function() {
        (0, o.default)(this.refs.tooltip).tooltip()
       }
      }, {
       key: "componentWillUnmount",
       value: function() {
        (0, o.default)(this.refs.tooltip).tooltip("dispose")
       }
      }, {
       key: "render",
       value: function() {
        return this.props.titleText ? a.default.createElement("i", {
         ref: "tooltip",
         title: this.props.titleText,
         className: "fas fa-info-circle ml-2"
        }) : null
       }
      }]), t
     }()
    }, {
     jquery: void 0,
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     react: void 0
    }],
    "jskit/react/forms/IntlTelInput": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     }), r.IntlTelInputWidget = void 0;
     var n = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
       }
       return e
      },
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = u(e("jquery")),
      l = u(e("react")),
      i = e("jskit/react/forms/FormHelpers"),
      s = u(e("jskit/react/ReactUtils"));
   
     function u(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
   
     function c(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }
   
     function f(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
     }
   
     function p(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
       constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
       }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
     }
     var d = r.IntlTelInputWidget = function(e) {
      function t(e) {
       c(this, t);
       var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = e.htmlId || (0, i.uniqueHtmlId)(e.fieldName), r.handleChange = r.handleChange.bind(r), r
      }
      return p(t, l.default.Component), o(t, [{
       key: "componentDidMount",
       value: function() {
        (0, a.default)(this.refs.input).intlTelInput({
         utilsScript: "/static/dddd/js/intl-tel-input/utils.js",
         geoIpLookup: function(e) {
          a.default.get("//geoip.nekudo.com/api/", function() {}, "jsonp").always(function(t) {
           var r = t && t.country && t.country.code && t.country.code.toLowerCase();
           e(r || "us")
          })
         },
         initialCountry: this.props.countryCodes ? "us" : "auto",
         nationalMode: !0,
         numberType: "MOBILE",
         preferredCountries: this.props.countryCodes ? [] : ["us", "gb"],
         onlyCountries: this.props.countryCodes || void 0,
         excludeCountries: []
        }), (0, a.default)(this.refs.input).on("countrychange", this.handleChange)
       }
      }, {
       key: "componentWillReceiveProps",
       value: function(e) {
        var t = (0, i.unpackFormLinkOrProps)(this.props),
         r = (0, i.unpackFormLinkOrProps)(e);
        t.value !== r.value && r.value !== this._getPhoneNumber() && this._setPhoneNumber(r.value)
       }
      }, {
       key: "componentWillUnmount",
       value: function() {
        (0, a.default)(this.refs.input).off("countrychange"), (0, a.default)(this.refs.input).intlTelInput("destroy")
       }
      }, {
       key: "focus",
       value: function() {
        this.refs.input.focus()
       }
      }, {
       key: "handleChange",
       value: function(e) {
        var t = (0, i.unpackFormLinkOrProps)(this.props),
         r = this._getPhoneNumber(),
         n = new i.CustomEvent({
          type: "change",
          target: this,
          value: r
         });
        t.onChange(n)
       }
      }, {
       key: "_getPhoneNumber",
       value: function() {
        var e = null;
        return window.intlTelInputUtils && (e = (0, a.default)(this.refs.input).intlTelInput("getNumber", window.intlTelInputUtils.numberFormat.INTERNATIONAL)), e || (0, a.default)(this.refs.input).val()
       }
      }, {
       key: "_setPhoneNumber",
       value: function(e) {
        (0, a.default)(this.refs.input).intlTelInput("setNumber", e)
       }
      }, {
       key: "render",
       value: function() {
        var e, t, r, n = (0, i.unpackFormLinkOrProps)(this.props);
        return l.default.createElement("input", {
         ref: "input",
         type: "tel",
         id: this.htmlId,
         name: this.props.fieldName,
         className: s.default.cssClass("form-control", (e = {}, t = "is-invalid", r = n.errors, t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
         }) : e[t] = r, e)),
         disabled: this.props.disabled,
         onChange: this.handleChange,
         onKeyPress: this.props.onKeyPress,
         onFocus: this.props.onFocus,
         onBlur: this.props.onBlur
        })
       }
      }]), t
     }();
     d.defaultProps = {
      countryCodes: null,
      fieldName: "",
      disabled: !1,
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null,
      onKeyPress: null,
      onFocus: null,
      onBlur: null
     };
     var h = function(e) {
      function t(e) {
       c(this, t);
       var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = (0, i.uniqueHtmlId)(e.fieldName), r
      }
      return p(t, l.default.Component), o(t, [{
       key: "focus",
       value: function() {
        this.refs.widget.focus()
       }
      }, {
       key: "render",
       value: function() {
        var e = (0, i.unpackFormLinkOrProps)(this.props);
        return l.default.createElement("div", {
         className: "form-group"
        }, l.default.createElement(i.Label, n({
         fieldId: this.htmlId
        }, this.props)), l.default.createElement(d, n({
         ref: "widget",
         htmlId: this.htmlId
        }, this.props)), l.default.createElement(i.FieldErrors, {
         errors: e.errors
        }), l.default.createElement(i.FieldHelpText, this.props))
       }
      }]), t
     }();
     r.default = h, h.defaultProps = {
      labelText: null,
      titleText: null,
      helpText: null,
      isRequired: !1
     }
    }, {
     jquery: void 0,
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     react: void 0
    }],
    "jskit/react/forms/ListInput": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     });
     var n = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
       }
       return e
      },
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = c(e("react")),
      l = c(e("jskit/general/Utils")),
      i = c(e("jskit/react/ReactUtils")),
      s = e("jskit/react/forms/FormHelpers"),
      u = e("jskit/react/forms/IntlTelInput");
   
     function c(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
   
     function f(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
       value: r,
       enumerable: !0,
       configurable: !0,
       writable: !0
      }) : e[t] = r, e
     }
     var p = function(e) {
      function t(e) {
       ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
       }(this, t);
       var r = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
       }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = (0, s.uniqueHtmlId)(e.fieldName), l.default.autoBindClass(r, "handle"), r.state = r._initialState(), r
      }
      return function(e, t) {
       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
       e.prototype = Object.create(t && t.prototype, {
        constructor: {
         value: e,
         enumerable: !1,
         writable: !0,
         configurable: !0
        }
       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, a.default.Component), o(t, [{
       key: "_initialState",
       value: function() {
        return {
         enteredText: "",
         validationError: ""
        }
       }
      }, {
       key: "isTelInput",
       value: function() {
        return "tel" === this.props.inputType
       }
      }, {
       key: "focus",
       value: function() {
        this.refs.textInput.focus()
       }
      }, {
       key: "reset",
       value: function() {
        this.setState(this._initialState())
       }
      }, {
       key: "handleKeyPress",
       value: function(e) {
        13 === e.which && this.state.enteredText && this.handleAddClick(e)
       }
      }, {
       key: "handleChange",
       value: function(e) {
        this.state.validationError && this.setState({
         validationError: ""
        }), this.setState({
         enteredText: e.target.value
        })
       }
      }, {
       key: "handleAddClick",
       value: function(e) {
        e.preventDefault();
        var t = (0, s.unpackFormLinkOrProps)(this.props),
         r = this.state.enteredText;
        if (!this.props.validationFn || this.props.validationFn(r)) {
         var n = (t.value || []).concat([r]);
         this.setState({
          enteredText: ""
         }), this._sendEvent(t, n)
        } else this.setState({
         validationError: this.props.validationError
        })
       }
      }, {
       key: "handleItemDelete",
       value: function(e, t) {
        t.preventDefault();
        var r = (0, s.unpackFormLinkOrProps)(this.props),
         n = (r.value || []).slice();
        n.splice(e, 1), this._sendEvent(r, n)
       }
      }, {
       key: "_sendEvent",
       value: function(e, t) {
        var r = new s.CustomEvent({
         type: "change",
         target: this,
         value: t
        });
        e.onChange(r)
       }
      }, {
       key: "render",
       value: function() {
        var e = (0, s.unpackFormLinkOrProps)(this.props);
        return a.default.createElement("div", {
         className: "form-group"
        }, a.default.createElement(s.Label, n({
         fieldId: this.htmlId
        }, this.props)), a.default.createElement("div", {
         className: "input-group mb-1"
        }, this.renderTextEntryWidget(e), a.default.createElement("div", {
         className: "input-group-append"
        }, a.default.createElement("button", {
         onClick: this.handleAddClick,
         className: "btn btn-outline-secondary"
        }, "Add")), a.default.createElement(s.FieldErrors, {
         errors: this.state.validationError
        })), this.renderList(e), a.default.createElement(s.FieldErrors, {
         errors: e.errors
        }), a.default.createElement(s.FieldHelpText, this.props))
       }
      }, {
       key: "renderTextEntryWidget",
       value: function(e) {
        return this.isTelInput() ? a.default.createElement(u.IntlTelInputWidget, {
         ref: "textInput",
         htmlId: this.htmlId,
         fieldName: this.props.fieldName,
         countryCodes: this.props.countryCodes,
         value: this.state.enteredText,
         formErrors: f({}, this.props.fieldName, e.errors || this.state.validationError),
         onChange: this.handleChange,
         onKeyPress: this.handleKeyPress
        }) : a.default.createElement("input", {
         ref: "textInput",
         type: this.props.inputType,
         id: this.htmlId,
         name: e.fieldName,
         placeholder: this.props.placeholder,
         className: i.default.cssClass("form-control", f({}, "is-invalid", e.errors || this.state.validationError)),
         value: this.state.enteredText,
         onChange: this.handleChange,
         onKeyPress: this.handleKeyPress,
         onFocus: this.props.onFocus,
         onBlur: this.props.onBlur
        })
       }
      }, {
       key: "renderList",
       value: function(e) {
        var t = e.value;
        if (!t || 0 === t.length) return null;
        var r = t.map(function(e, t) {
         return a.default.createElement("li", {
          key: e
         }, a.default.createElement("a", {
          role: "button",
          href: "#",
          onClick: this.handleItemDelete.bind(null, t)
         }, a.default.createElement("i", {
          className: "far fa-fw fa-trash-alt"
         })), " ", e)
        }.bind(this));
        return a.default.createElement("ul", {
         className: "form-control list-input"
        }, r)
       }
      }]), t
     }();
     r.default = p, p.defaultProps = {
      fieldName: null,
      labelText: null,
      titleText: null,
      helpText: null,
      isRequired: !1,
      inputType: "text",
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null,
      onFocus: null,
      onBlur: null
     }
    }, {
     "jskit/general/Utils": "jskit/general/Utils",
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     "jskit/react/forms/IntlTelInput": "jskit/react/forms/IntlTelInput",
     react: void 0
    }],
    "jskit/react/forms/RadioGroup": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     });
     var n = function() {
       return function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
         var r = [],
          n = !0,
          o = !1,
          a = void 0;
         try {
          for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
         } catch (e) {
          o = !0, a = e
         } finally {
          try {
           !n && i.return && i.return()
          } finally {
           if (o) throw a
          }
         }
         return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
       }
      }(),
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = s(e("react")),
      l = e("jskit/react/forms/FormHelpers"),
      i = s(e("jskit/react/ReactUtils"));
   
     function s(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
     var u = function(e) {
      function t(e) {
       ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
       }(this, t);
       var r = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
       }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = (0, l.uniqueHtmlId)(e.fieldName), r
      }
      return function(e, t) {
       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
       e.prototype = Object.create(t && t.prototype, {
        constructor: {
         value: e,
         enumerable: !1,
         writable: !0,
         configurable: !0
        }
       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, a.default.Component), o(t, [{
       key: "render",
       value: function() {
        var e = (0, l.unpackFormLinkOrProps)(this.props);
        return a.default.createElement("div", {
         className: "form-group"
        }, this.renderOptions(e), a.default.createElement(l.FieldErrors, {
         errors: e.errors
        }), a.default.createElement(l.FieldHelpText, this.props))
       }
      }, {
       key: "renderOptions",
       value: function(e) {
        var t = this;
        return this.props.choices.map(function(r, o) {
         var s = n(r, 2),
          u = s[0],
          c = s[1],
          f = t.htmlId + "-" + o,
          p = t.props.disabled || t.props.disabledChoices && t.props.disabledChoices.find(function(e) {
           return u == e
          });
         return a.default.createElement("div", {
          key: o,
          className: i.default.cssClass("custom-control custom-radio", t.props.divCSSClass)
         }, a.default.createElement("input", {
          type: "radio",
          id: f,
          name: e.fieldName,
          className: i.default.cssClass("custom-control-input", function(e, t, r) {
           return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
           }) : e[t] = r, e
          }({}, "is-invalid", e.errors)),
          disabled: p,
          value: u,
          checked: e.value == u,
          onChange: e.onChange
         }), a.default.createElement(l.Label, {
          baseCSSClass: "custom-control-label",
          fieldId: f,
          isRequired: t.props.isRequired,
          labelText: c
         }))
        })
       }
      }]), t
     }();
     r.default = u, u.defaultProps = {
      fieldName: null,
      helpText: null,
      isRequired: !1,
      disabled: !1,
      choices: [],
      divCSSClass: null,
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null
     }
    }, {
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     react: void 0
    }],
    "jskit/react/forms/Select2": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     }), r.Select2Widget = void 0;
     var n = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
       }
       return e
      },
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = s(e("jquery")),
      l = s(e("react")),
      i = e("jskit/react/forms/FormHelpers");
     s(e("jskit/react/ReactUtils"));
   
     function s(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
   
     function u(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }
   
     function c(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
     }
   
     function f(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
       constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
       }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
     }
     var p = r.Select2Widget = function(e) {
      function t(e) {
       u(this, t);
       var r = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = e.htmlId || (0, i.uniqueHtmlId)(e.fieldName), r.handleChange = r.handleChange.bind(r), r
      }
      return f(t, l.default.Component), o(t, [{
       key: "componentDidMount",
       value: function() {
        var e = (0, a.default)(this.refs.selectbox),
         t = e.closest(".modal-content");
        e.select2({
         dropdownParent: t,
         minimumResultsForSearch: this.props.preventSearch ? 999999 : 10
        }), e.on("change", this.handleChange)
       }
      }, {
       key: "componentDidUpdate",
       value: function() {
        (0, a.default)(this.refs.selectbox).trigger("change.select2")
       }
      }, {
       key: "componentWillUnmount",
       value: function() {
        (0, a.default)(this.refs.selectbox).off("change", this.handleChange), (0, a.default)(this.refs.selectbox).select2("destroy")
       }
      }, {
       key: "focus",
       value: function() {
        this.refs.selectBox.focus()
       }
      }, {
       key: "handleChange",
       value: function(e) {
        var t = (0, i.unpackFormLinkOrProps)(this.props),
         r = (0, a.default)(this.refs.selectbox).val(),
         n = new i.CustomEvent({
          type: "change",
          target: this,
          value: r
         });
        t.onChange(n)
       }
      }, {
       key: "render",
       value: function() {
        var e = (0, i.unpackFormLinkOrProps)(this.props),
         t = this.props.choices || [],
         r = [];
        return this.props.allowEmpty && r.push(l.default.createElement("option", {
         key: "",
         value: ""
        }, "------------")), t.forEach(function(e) {
         r.push(l.default.createElement("option", {
          key: e[0],
          value: e[0]
         }, e[1]))
        }), l.default.createElement("select", {
         ref: "selectbox",
         id: this.htmlId,
         name: this.props.fieldName,
         className: "form-control",
         "data-is-invalid": !!e.errors || null,
         "data-placeholder": this.props.placeholder,
         disabled: this.props.disabled,
         multiple: this.props.multiple,
         value: this.props.multiple ? e.value || [] : e.value,
         onChange: this.handleChange,
         onFocus: this.props.onFocus,
         onBlur: this.props.onBlur
        }, r)
       }
      }]), t
     }();
     p.defaultProps = {
      fieldName: "",
      placeholder: null,
      multiple: !1,
      disabled: !1,
      preventSearch: !1,
      choices: [],
      allowEmpty: !1,
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null,
      onFocus: null,
      onBlur: null
     };
     var d = function(e) {
      function t(e) {
       u(this, t);
       var r = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = (0, i.uniqueHtmlId)(e.fieldName), r
      }
      return f(t, l.default.Component), o(t, [{
       key: "focus",
       value: function() {
        this.refs.select2widget.focus()
       }
      }, {
       key: "render",
       value: function() {
        var e = (0, i.unpackFormLinkOrProps)(this.props);
        return l.default.createElement("div", {
         className: "form-group"
        }, l.default.createElement(i.Label, n({
         fieldId: this.htmlId
        }, this.props)), l.default.createElement(p, n({
         ref: "select2widget",
         htmlId: this.htmlId
        }, this.props)), l.default.createElement(i.FieldErrors, {
         errors: e.errors
        }), l.default.createElement(i.FieldHelpText, this.props))
       }
      }]), t
     }();
     r.default = d, d.defaultProps = {
      labelText: null,
      titleText: null,
      helpText: null,
      isRequired: !1
     }
    }, {
     jquery: void 0,
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     react: void 0
    }],
    "jskit/react/forms/SelectBox": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     });
     var n = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
       }
       return e
      },
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = s(e("react")),
      l = e("jskit/react/forms/FormHelpers"),
      i = s(e("jskit/react/ReactUtils"));
   
     function s(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
     var u = function(e) {
      function t(e) {
       ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
       }(this, t);
       var r = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
       }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = (0, l.uniqueHtmlId)(e.fieldName), r
      }
      return function(e, t) {
       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
       e.prototype = Object.create(t && t.prototype, {
        constructor: {
         value: e,
         enumerable: !1,
         writable: !0,
         configurable: !0
        }
       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, a.default.Component), o(t, [{
       key: "focus",
       value: function() {
        this.refs.selectBox.focus()
       }
      }, {
       key: "render",
       value: function() {
        var e, t, r, o = (0, l.unpackFormLinkOrProps)(this.props),
         s = this.props.choices || [],
         u = [];
        return this.props.allowEmpty && u.push(a.default.createElement("option", {
         key: "",
         value: ""
        }, "------------")), s.forEach(function(e) {
         u.push(a.default.createElement("option", {
          key: e[0],
          value: e[0]
         }, e[1]))
        }), a.default.createElement("div", {
         className: this.props.formGroupClass
        }, a.default.createElement(l.Label, n({
         fieldId: this.htmlId
        }, this.props)), a.default.createElement("select", {
         ref: "selectBox",
         id: this.htmlId,
         name: this.props.fieldName,
         className: i.default.cssClass("form-control", (e = {}, t = "is-invalid", r = o.errors, t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
         }) : e[t] = r, e)),
         disabled: this.props.disabled,
         value: o.value,
         onChange: o.onChange,
         onFocus: this.props.onFocus,
         onBlur: this.props.onBlur
        }, u), a.default.createElement(l.FieldErrors, {
         errors: o.errors
        }), a.default.createElement(l.FieldHelpText, this.props))
       }
      }]), t
     }();
     r.default = u, u.defaultProps = {
      fieldName: "",
      labelText: null,
      titleText: null,
      helpText: null,
      isRequired: !1,
      disabled: !1,
      allowEmpty: !1,
      choices: [],
      formGroupClass: "form-group",
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null,
      onFocus: null,
      onBlur: null
     }
    }, {
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     react: void 0
    }],
    "jskit/react/forms/Slider": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     }), r.TimeRangeSliderWidget = r.NumericSliderWidget = r.SliderWidget = void 0;
     var n = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
       }
       return e
      },
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = f(e("underscore")),
      l = f(e("jquery")),
      i = f(e("react")),
      s = f(e("jskit/general/Formatter")),
      u = e("jskit/react/forms/FormHelpers"),
      c = f(e("jskit/react/ReactUtils"));
   
     function f(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
   
     function p(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
     }
   
     function d(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
     }
   
     function h(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
       constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
       }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
     }
     var m = r.SliderWidget = function(e) {
      function t(e) {
       p(this, t);
       var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = e.htmlId || (0, u.uniqueHtmlId)(e.fieldName), r.handleChange = r.handleChange.bind(r), r
      }
      return h(t, i.default.Component), o(t, [{
       key: "componentDidMount",
       value: function() {
        var e = Object.assign({}, t.defaultProps.sliderConfig, this.props.sliderConfig);
        (0, l.default)(this.refs.input).slider(e), (0, l.default)(this.refs.input).on("change", a.default.throttle(this.handleChange, 50)), this.componentDidUpdate()
       }
      }, {
       key: "componentDidUpdate",
       value: function(e, t) {
        if (e) {
         var r = e.sliderConfig,
          n = this.props.sliderConfig;
         r.min === n.min && r.max === n.max && r.step === n.step && r.precision === n.precision || ((0, l.default)(this.refs.input).slider("setAttribute", "min", n.min), (0, l.default)(this.refs.input).slider("setAttribute", "max", n.max), (0, l.default)(this.refs.input).slider("setAttribute", "step", n.step), (0, l.default)(this.refs.input).slider("setAttribute", "precision", n.precision))
        }
        var o = (0, u.unpackFormLinkOrProps)(this.props).value,
         a = this.props.formValueToSliderValue(o);
        (0, l.default)(this.refs.input).slider("setValue", a)
       }
      }, {
       key: "componentWillUnmount",
       value: function() {
        (0, l.default)(this.refs.input).slider("destroy")
       }
      }, {
       key: "handleChange",
       value: function(e) {
        var t = (0, u.unpackFormLinkOrProps)(this.props),
         r = (0, l.default)(this.refs.input).slider("getValue"),
         n = this.props.sliderValueToFormValue(r);
        t.onChange(new u.CustomEvent({
         type: "change",
         target: this,
         value: n
        }))
       }
      }, {
       key: "render",
       value: function() {
        var e, t, r, n = (0, u.unpackFormLinkOrProps)(this.props);
        return i.default.createElement("div", {
         className: "slider-container"
        }, i.default.createElement("input", {
         ref: "input",
         type: "text",
         id: this.htmlId,
         name: this.props.fieldName,
         className: c.default.cssClass("form-control", (e = {}, t = "is-invalid", r = n.errors, t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
         }) : e[t] = r, e))
        }))
       }
      }]), t
     }();
     m.defaultProps = {
      fieldName: "",
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null,
      sliderConfig: {
       min: 0,
       max: 100,
       step: 1,
       precision: 0,
       handle: "round"
      },
      sliderValueToFormValue: function(e) {
       return e
      },
      formValueToSliderValue: function(e) {
       return e
      }
     };
     var v = r.NumericSliderWidget = function(e) {
      function t(e) {
       return p(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
      }
      return h(t, i.default.Component), o(t, [{
       key: "render",
       value: function() {
        var e = {
         min: this.props.min,
         max: this.props.max,
         step: this.props.step,
         precision: this.props.precision,
         tooltip: "hide"
        };
        return i.default.createElement(m, n({
         sliderConfig: e
        }, this.props))
       }
      }]), t
     }();
     v.defaultProps = {
      min: 0,
      max: 100,
      step: 1,
      precision: 0
     };
     var y = r.TimeRangeSliderWidget = function(e) {
       function t(e) {
        p(this, t);
        var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return r.sliderConfig = {
         range: !0,
         min: 0,
         max: 24,
         step: .25,
         precision: 2,
         value: [0, 24],
         tooltip: "always",
         tooltip_split: !0,
         formatter: function(e) {
          return a.default.isArray(e) ? r.formatTime(e[0]) + " to " + r.formatTime(e[1]) : r.formatTime(e)
         }
        }, r.sliderValueToFormValue = function(e) {
         return [r.formatTime(e[0], !0), r.formatTime(e[1], !0)]
        }, r.formValueToSliderValue = function(e) {
         return [r.parseTime(e[0]), r.parseTime(e[1])]
        }, r
       }
       return h(t, i.default.Component), o(t, [{
        key: "formatTime",
        value: function(e, t) {
         var r = parseInt(e),
          n = Math.round(60 * (e - r)),
          o = s.default.pad(r, 2) + ":" + s.default.pad(n, 2);
         return o = t ? o + ":00" : o
        }
       }, {
        key: "parseTime",
        value: function(e) {
         return e = e.split(":"), parseInt(e[0]) + parseInt(e[1]) / 60
        }
       }, {
        key: "render",
        value: function() {
         return i.default.createElement(m, n({
          sliderConfig: this.sliderConfig,
          sliderValueToFormValue: this.sliderValueToFormValue,
          formValueToSliderValue: this.formValueToSliderValue
         }, this.props))
        }
       }]), t
      }(),
      b = function(e) {
       function t(e) {
        p(this, t);
        var r = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return r.htmlId = (0, u.uniqueHtmlId)(e.fieldName), r
       }
       return h(t, i.default.Component), o(t, [{
        key: "render",
        value: function() {
         var e = (0, u.unpackFormLinkOrProps)(this.props),
          t = Object.assign({}, this.props, {
           htmlId: this.htmlId
          });
         return i.default.createElement("div", {
          className: "form-group"
         }, i.default.createElement(u.Label, n({
          fieldId: this.htmlId
         }, this.props)), this.props.widget === y ? i.default.createElement("div", {
          style: {
           marginBottom: "33px"
          }
         }) : null, i.default.createElement(this.props.widget, t), i.default.createElement(u.FieldErrors, {
          errors: e.errors
         }), i.default.createElement(u.FieldHelpText, this.props))
        }
       }]), t
      }();
     r.default = b, b.defaultProps = {
      labelText: null,
      titleText: null,
      helpText: null,
      isRequired: !1,
      widget: v
     }
    }, {
     jquery: void 0,
     "jskit/general/Formatter": "jskit/general/Formatter",
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     react: void 0,
     underscore: void 0
    }],
    "jskit/react/forms/TextArea": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     });
     var n = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
       }
       return e
      },
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = s(e("react")),
      l = e("jskit/react/forms/FormHelpers"),
      i = s(e("jskit/react/ReactUtils"));
   
     function s(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
   
     function u(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
       value: r,
       enumerable: !0,
       configurable: !0,
       writable: !0
      }) : e[t] = r, e
     }
     var c = function(e) {
      function t(e) {
       ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
       }(this, t);
       var r = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
       }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = (0, l.uniqueHtmlId)(e.fieldName), r
      }
      return function(e, t) {
       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
       e.prototype = Object.create(t && t.prototype, {
        constructor: {
         value: e,
         enumerable: !1,
         writable: !0,
         configurable: !0
        }
       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, a.default.Component), o(t, [{
       key: "focus",
       value: function() {
        this.refs.textInput.focus()
       }
      }, {
       key: "render",
       value: function() {
        var e, t = (0, l.unpackFormLinkOrProps)(this.props);
        return a.default.createElement("div", {
         className: "form-group"
        }, a.default.createElement(l.Label, n({
         fieldId: this.htmlId
        }, this.props)), a.default.createElement("textarea", {
         ref: "textInput",
         id: this.htmlId,
         name: t.fieldName,
         className: i.default.cssClass("form-control", (e = {}, u(e, "form-control-sm", this.props.small), u(e, "is-invalid", t.errors), e)),
         disabled: this.props.disabled,
         readOnly: this.props.readOnly,
         maxLength: this.props.maxLength,
         rows: this.props.rows,
         value: t.value,
         onChange: t.onChange,
         onFocus: this.props.onFocus,
         onBlur: this.props.onBlur
        }), this.props.addonLabel ? a.default.createElement("button", {
         className: "btn btn-secondary mt-1",
         onClick: this.props.onAddonClick
        }, this.props.addonLabel) : null, a.default.createElement(l.FieldErrors, {
         errors: t.errors
        }), a.default.createElement(l.FieldHelpText, this.props))
       }
      }]), t
     }();
     r.default = c, c.defaultProps = {
      fieldName: null,
      labelText: null,
      titleText: null,
      helpText: null,
      isRequired: !1,
      disabled: !1,
      readOnly: !1,
      rows: 3,
      small: !1,
      maxLength: null,
      addonLabel: null,
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null,
      onAddonClick: null,
      onFocus: null,
      onBlur: null
     }
    }, {
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     react: void 0
    }],
    "jskit/react/forms/TextInput": [function(e, t, r) {
     "use strict";
     Object.defineProperty(r, "__esModule", {
      value: !0
     });
     var n = Object.assign || function(e) {
       for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
       }
       return e
      },
      o = function() {
       function e(e, t) {
        for (var r = 0; r < t.length; r++) {
         var n = t[r];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
       }
       return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
       }
      }(),
      a = s(e("react")),
      l = e("jskit/react/forms/FormHelpers"),
      i = s(e("jskit/react/ReactUtils"));
   
     function s(e) {
      return e && e.__esModule ? e : {
       default: e
      }
     }
     var u = function(e) {
      function t(e) {
       ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
       }(this, t);
       var r = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
       }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
       return r.htmlId = (0, l.uniqueHtmlId)(e.fieldName), r
      }
      return function(e, t) {
       if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
       e.prototype = Object.create(t && t.prototype, {
        constructor: {
         value: e,
         enumerable: !1,
         writable: !0,
         configurable: !0
        }
       }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, a.default.Component), o(t, [{
       key: "focus",
       value: function() {
        this.refs.textInput.focus()
       }
      }, {
       key: "render",
       value: function() {
        var e = (0, l.unpackFormLinkOrProps)(this.props);
        return a.default.createElement("div", {
         className: "form-group"
        }, a.default.createElement(l.Label, n({
         fieldId: this.htmlId
        }, this.props)), this.props.addonLabel ? this.renderInputGroup(e) : this.renderInput(e), a.default.createElement(l.FieldErrors, {
         errors: e.errors
        }), a.default.createElement(l.FieldHelpText, this.props))
       }
      }, {
       key: "renderInputGroup",
       value: function(e) {
        return a.default.createElement("div", {
         className: "input-group"
        }, this.renderInput(e), a.default.createElement("div", {
         className: "input-group-append"
        }, a.default.createElement("button", {
         className: "btn btn-secondary",
         type: "button",
         onClick: this.props.onAddonClick
        }, this.props.addonLabel)))
       }
      }, {
       key: "renderInput",
       value: function(e) {
        return a.default.createElement("input", {
         ref: "textInput",
         type: this.props.inputType,
         id: this.htmlId,
         name: e.fieldName,
         className: i.default.cssClass("form-control", (t = {}, r = "is-invalid", n = e.errors, r in t ? Object.defineProperty(t, r, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
         }) : t[r] = n, t)),
         disabled: this.props.disabled,
         maxLength: this.props.maxLength,
         value: e.value,
         onChange: e.onChange,
         onFocus: this.props.onFocus,
         onBlur: this.props.onBlur
        });
        var t, r, n
       }
      }]), t
     }();
     r.default = u, u.defaultProps = {
      fieldName: null,
      labelText: null,
      titleText: null,
      helpText: null,
      isRequired: !1,
      disabled: !1,
      inputType: "text",
      maxLength: null,
      addonLabel: null,
      formLink: null,
      value: null,
      formErrors: null,
      onChange: null,
      onAddonClick: null,
      onFocus: null,
      onBlur: null
     }
    }, {
     "jskit/react/ReactUtils": "jskit/react/ReactUtils",
     "jskit/react/forms/FormHelpers": "jskit/react/forms/FormHelpers",
     react: void 0
    }]
   }, {}, []);