! function(e) {
    var t = {};
   
    function n(r) {
     if (t[r]) return t[r].exports;
     var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
     };
     return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
     n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
     })
    }, n.r = function(e) {
     "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
     }), Object.defineProperty(e, "__esModule", {
      value: !0
     })
    }, n.t = function(e, t) {
     if (1 & t && (e = n(e)), 8 & t) return e;
     if (4 & t && "object" == typeof e && e && e.__esModule) return e;
     var r = Object.create(null);
     if (n.r(r), Object.defineProperty(r, "default", {
       enumerable: !0,
       value: e
      }), 2 & t && "string" != typeof e)
      for (var i in e) n.d(r, i, function(t) {
       return e[t]
      }.bind(null, i));
     return r
    }, n.n = function(e) {
     var t = e && e.__esModule ? function() {
      return e.default
     } : function() {
      return e
     };
     return n.d(t, "a", t), t
    }, n.o = function(e, t) {
     return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 23)
   }([function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
      return new(n || (n = Promise))(function(i, o) {
       function s(e) {
        try {
         u(r.next(e))
        } catch (e) {
         o(e)
        }
       }
   
       function a(e) {
        try {
         u(r.throw(e))
        } catch (e) {
         o(e)
        }
       }
   
       function u(e) {
        e.done ? i(e.value) : new n(function(t) {
         t(e.value)
        }).then(s, a)
       }
       u((r = r.apply(e, t || [])).next())
      })
     },
     i = this && this.__generator || function(e, t) {
      var n, r, i, o, s = {
       label: 0,
       sent: function() {
        if (1 & i[0]) throw i[1];
        return i[1]
       },
       trys: [],
       ops: []
      };
      return o = {
       next: a(0),
       throw: a(1),
       return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
       return this
      }), o;
   
      function a(o) {
       return function(a) {
        return function(o) {
         if (n) throw new TypeError("Generator is already executing.");
         for (; s;) try {
          if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
          switch (r = 0, i && (o = [0, i.value]), o[0]) {
           case 0:
           case 1:
            i = o;
            break;
           case 4:
            return s.label++, {
             value: o[1],
             done: !1
            };
           case 5:
            s.label++, r = o[1], o = [0];
            continue;
           case 7:
            o = s.ops.pop(), s.trys.pop();
            continue;
           default:
            if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
             s = 0;
             continue
            }
            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
             s.label = o[1];
             break
            }
            if (6 === o[0] && s.label < i[1]) {
             s.label = i[1], i = o;
             break
            }
            if (i && s.label < i[2]) {
             s.label = i[2], s.ops.push(o);
             break
            }
            i[2] && s.ops.pop(), s.trys.pop();
            continue
          }
          o = t.call(e, s)
         } catch (e) {
          o = [6, e], r = 0
         } finally {
          n = i = 0
         }
         if (5 & o[0]) throw o[1];
         return {
          value: o[0] ? o[1] : void 0,
          done: !0
         }
        }([o, a])
       }
      }
     };
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var o = n(5),
     s = n(6),
     a = n(7),
     u = n(4),
     c = !1;
    t.BAD_APP_IDS = ["", "0", "1", "-1", "true", "false", "n/a", "nan", "undefined", "null", "nil", "the_id_that_you_use_in_your_app_for_this_user"], t._native_bind = function(e, t) {
     for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
     return e.bind.apply(e, [t].concat(n))
    }, t._js_bind = function(e, t) {
     for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
     return function() {
      var r = Array.prototype.slice.call(arguments);
      e.call.apply(e, [t].concat(n, r))
     }
    }, t.bind = Function.prototype.bind ? t._native_bind : t._js_bind, t._native_map = function(e, t, n) {
     return e.map(t, n)
    }, t._js_map = function(e, t, n) {
     for (var r = Array(e.length), i = 0; i < e.length; i++) r[i] = t.call(n, e[i], i, e);
     return r
    }, t.map = Array.prototype.map ? t._native_map : t._js_map, t._native_trim = function(e) {
     return e.trim()
    }, t._js_trim = function(e) {
     return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }, t.trim = String.prototype.trim ? t._native_trim : t._js_trim, t._native_filter = function(e, t, n) {
     return e.filter(t, n)
    }, t._js_filter = function(e, t, n) {
     for (var r = Array(e.length), i = 0; i < e.length; i++) r[i] = t.call(n, e[i], i, e);
     return r
    }, t.filter = Array.prototype.filter ? t._native_filter : t._js_filter;
   
    function h() {
     var e = function(e) {
       return e.matches || e.msMatchesSelector || e.webkitMatchesSelector
      },
      t = e(window.Element.prototype),
      n = window.document ? window.document.documentElement : void 0;
     return !n || t && n instanceof window.Element || (t = e(n)), [t, function(e, n) {
      return t.call(e, n)
     }]
    }
    t.isArray = u.windex.arrayIsArray ? function(e) {
     return u.windex.arrayIsArray(e)
    } : function(e) {
     return "[object Array]" == u.windex.objectToString.call(e)
    }, t._native_keys = function(e) {
     return u.windex.objectKeys(e)
    }, t._js_keys = function(e) {
     var t = [];
     for (var n in e) u.windex.objectHasOwnProp(e, n) && t.push(n);
     return t
    }, t.keys = "function" == typeof u.windex.objectKeys ? t._native_keys : t._js_keys, t.setMatchesSelector = function(e) {
     t.matchesSelector = e
    }, t.setUpMatchesSelector = h, S = h(), t._native_matchesSelector = S[0], t.matchesSelector = S[1], t.hasPrefix = function(e, t) {
     return 0 == e.lastIndexOf(t, 0)
    }, t.hasSuffix = function(e, t) {
     return !(t.length > e.length) && e.substring(e.length - t.length) == t
    }, t.forIn = function(e, t) {
     for (var n in e) u.windex.objectHasOwnProp(e, n) && t(e[n], n, e)
    }, t.forInAsync = function(e, t) {
     return r(this, void 0, a.FSPromise, function() {
      var n, r, o, s;
      return i(this, function(i) {
       switch (i.label) {
        case 0:
         for (r in n = [], e) n.push(r);
         o = 0, i.label = 1;
        case 1:
         return o < n.length ? (s = n[o], u.windex.objectHasOwnProp(e, s) ? [4, t(e[s], s, e)] : [3, 3]) : [3, 4];
        case 2:
         i.sent(), i.label = 3;
        case 3:
         return o++, [3, 1];
        case 4:
         return [2]
       }
      })
     })
    }, t.firstKey = function(e) {
     for (var t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) return t
    }, t.firstValue = function(e) {
     for (var t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
    }, t.hasNKeys = function(e, t) {
     var n = 0;
     for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t) return !1;
     return n == t
    }, t.hasMoreThanNKeys = function(e, t) {
     var n = 0;
     for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t) return !0;
     return !1
    };
    t.nextSibling = o.uaIsIE ? function(e) {
     var t = e.nextSibling;
     return t && e.parentNode && t === e.parentNode.firstChild ? null : t
    } : function(e) {
     return e.nextSibling
    };
    t.forEachNextSibling = o.uaIsIE ? function(e, t) {
     if (e) {
      var n = e.parentNode ? e.parentNode.firstChild : null;
      do {
       t(e), e = e.nextSibling
      } while (e && e != n)
     }
    } : function(e, t) {
     for (; e; e = e.nextSibling) t(e)
    };
   
    function d(e) {
     return u.windex.objectValues(e || {})
    }
   
    function l(e) {
     var t = [];
     for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
     return t
    }
   
    function f() {
     return c
    }
   
    function p(e) {
     f() && window.console && console.log(e)
    }
   
    function _(e) {
     var t = "Internal error: unable to determine what JSON error was";
     try {
      t = (t = "" + e).replace(/[^a-zA-Z0-9\.\:\!\, ]/g, "_")
     } catch (e) {}
     return '"' + t + '"'
    }
   
    function g(e) {
     var t = e,
      n = t.indexOf(":");
     return n >= 0 && (t = t.slice(0, n)), t
    }
   
    function v(e) {
     return "localhost" == e || "127.0.0.1" == e
    }
   
    function y(e, t, n, r) {
     void 0 !== n && ("function" == typeof e.addEventListener ? e.addEventListener(t, n, r) : "function" == typeof e.addListener ? e.addListener(n) : p("Target of " + t + " doesn't seem to support listeners"))
    }
   
    function E(e, t, n, r) {
     void 0 !== n && ("function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r) : "function" == typeof e.removeListener ? e.removeListener(n) : p("Target of " + t + " doesn't seem to support listeners"))
    }
    t.previousSibling = o.uaIsIE ? function(e) {
     var t = e.previousSibling;
     return t && e.parentNode && t === e.parentNode.lastChild ? null : t
    } : function(e) {
     return e.previousSibling
    }, t._native_values = d, t._js_values = l, t.values = u.windex.objectValues ? d : l, t.$entry = function(e, t) {
     var n = function() {
      try {
       return e.apply(t || this, arguments)
      } catch (e) {}
     };
     return window.Zone && window.Zone.root && "function" == typeof window.Zone.root.wrap ? window.Zone.root.wrap(n) : n
    }, t.initDebug = function(e) {
     c = s._fs_debug(e)
    }, t.isDebug = f, t.logIfDebug = p, t.stringify = function(e) {
     var t, n = Array.prototype.toJSON,
      r = String.prototype.toJSON;
     n && (Array.prototype.toJSON = void 0), r && (String.prototype.toJSON = void 0);
     try {
      t = u.windex.jsonStringify(e)
     } catch (e) {
      t = _(e)
     } finally {
      n && (Array.prototype.toJSON = n), r && (String.prototype.toJSON = r)
     }
     return t
    }, t.jsonErrorString = _, t.doctypeString = function(e) {
     var t = e.doctype;
     if (!t) return "";
     var n = "<!DOCTYPE ";
     return n += t.name, t.publicId && (n += ' PUBLIC "' + t.publicId + '"'), t.systemId && (n += ' "' + t.systemId + '"'), n + ">"
    }, t.parseJson = function(e) {
     return u.windex.jsonParse(e)
    }, t.domainFromHost = g, t.isLocalhost = v, t.gceHost = function(e) {
     return v(g(e)) ? e : 0 == e.indexOf("www.") ? "rs." + e.slice(4) : 0 == e.indexOf("app.") ? "rs." + e.slice(4) : "rs." + e
    }, t.isIP = function(e) {
     return !!e.match(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/g)
    }, t.isChrome = function() {
     var e = window.chrome,
      t = window.navigator,
      n = t.vendor,
      r = void 0 !== window.opr,
      i = t.userAgent.indexOf("Edge") > -1;
     return !!t.userAgent.match("CriOS") || !(!e || "Google Inc." !== n || r || i)
    }, t.isSafari = function() {
     return /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent)
    }, t.tryGetScreenDims = function(e) {
     var t = 0,
      n = 0;
     return null == e.screen ? [t, n] : (t = parseInt(String(e.screen.width)), n = parseInt(String(e.screen.height)), [t = isNaN(t) ? 0 : t, n = isNaN(n) ? 0 : n])
    }, t._trustEventOverride = "_fs_trust_event";
    var m = function() {
     function e() {
      var e = this;
      this._listeners = [], this._children = [], this._yesCapture = !0, this._noCapture = !1;
      try {
       var t = Object.defineProperty({}, "passive", {
        get: function() {
         e._yesCapture = {
          capture: !0,
          passive: !0
         }, e._noCapture = {
          capture: !1,
          passive: !0
         }
        }
       });
       window.addEventListener("test", function() {}, t)
      } catch (e) {}
     }
     return e.prototype.add = function(e, n, r, i, o) {
      void 0 === o && (o = !1);
      var s = {
       target: e,
       type: n,
       fn: function(e) {
        try {
         if (!o && !1 === e.isTrusted && "message" != n && !e[t._trustEventOverride]) return;
         i(e)
        } catch (e) {
         p("Error in event listener: " + e)
        }
       },
       options: r ? this._yesCapture : this._noCapture,
       index: this._listeners.length
      };
      return this._listeners.push(s), y(e, n, s.fn, s.options), s
     }, e.prototype.remove = function(e) {
      e.target && (E(e.target, e.type, e.fn, e.options), e.target = null, e.fn = void 0)
     }, e.prototype.clear = function() {
      for (var e = 0; e < this._listeners.length; e++) this._listeners[e].target && this.remove(this._listeners[e]);
      this._listeners = []
     }, e.prototype.createChild = function() {
      var t = new e;
      return this._children.push(t), t
     }, e.prototype.refresh = function() {
      for (var e = 0, t = this._listeners; e < t.length; e++) {
       var n = t[e];
       n.target && (E(n.target, n.type, n.fn, n.options), y(n.target, n.type, n.fn, n.options))
      }
      for (var r = 0, i = this._children; r < i.length; r++) {
       i[r].refresh()
      }
     }, e
    }();
    t.DomListeners = m;
    var S, T = function() {
      function e(e, t) {
       this.target = e, this.propertyName = t, this.on = !1, this.attached = !1, this.native = e[t]
      }
      return e.prototype.before = function(e) {
       return this._before = e, this
      }, e.prototype.afterAsync = function(e) {
       return this._afterAsync = e, this
      }, e.prototype.afterSync = function(e) {
       return this._afterSync = e, this
      }, e.prototype.disable = function() {
       this.on = !1, this.target[this.propertyName] == this.shim && (this.target[this.propertyName] = this.native, this.attached = !1)
      }, e.prototype.enable = function() {
       if (this.on = !0, !this.attached) {
        this.shim || (this.shim = this.makeShim());
        try {
         this.target[this.propertyName] = this.shim
        } catch (e) {
         return !1
        }
        this.attached = !0
       }
       return !0
      }, e.prototype.makeShim = function() {
       var e = this;
       return function() {
        var t = {
         that: this,
         args: arguments
        };
        if (e.on) try {
         e._before && e._before.call(this, t)
        } catch (t) {
         p("Error in hook before " + e.propertyName)
        }
        var n = e.native.apply(this, arguments);
        if (e.on) try {
         if (e._afterSync && e._afterSync.call(this, t), e._afterAsync) {
          var r = this;
          u.windex.setWindowTimeout(window, function() {
           try {
            e._afterAsync.call(r, t)
           } catch (t) {
            p("Error in async hook after " + e.propertyName)
           }
          }, 0)
         }
        } catch (t) {
         p("Error in hook after " + e.propertyName)
        }
        return n
       }
      }, e
     }(),
     w = {};
    t.activateHook = function(e, t) {
     if (!e || "function" != typeof e[t]) return null;
     var n;
     w[t] = w[t] || [];
     for (var r = 0; r < w[t].length; r++) w[t][r].obj == e && (n = w[t][r].hook);
     return n || (n = new T(e, t), w[t].push({
      obj: e,
      hook: n
     })), n.enable() ? n : null
    }, t.tagName = function(e) {
     var t = e;
     return t.tagName ? "object" == typeof t.tagName ? "form" : t.tagName.toLowerCase() : null
    }, t.parseIdentityCookie = function(e) {
     var n = "",
      r = "",
      i = "",
      o = "",
      s = "";
     if (e) {
      var a = e.split("`");
      a.length < 3 ? n = e : (i = a[0], o = a[1], n = a[2], a.length >= 5 && (s = decodeURIComponent(a[3]), t.BAD_APP_IDS.indexOf(s) >= 0 && (p('ignoring invalid app key "' + s + '" from cookie.'), s = "")))
     }
     var u = n.indexOf(":");
     return -1 != u && (r = n.slice(u + 1), n = n.slice(0, u)), {
      Host: i,
      OrgId: o,
      UserId: n,
      SessionId: r,
      AppKey: s
     }
    }, t.getCookies = function(e) {
     for (var t = {}, n = e.cookie.split(";"), r = 0; r < n.length; r++) {
      var i = n[r].replace(/^\s+|\s+$/g, "").split("=");
      t[i[0]] || (t[i[0]] = i[1])
     }
     return t
    }, t.elemSheet = function(e) {
     return e ? e.sheet : void 0
    }, t.sheetRules = function(e) {
     return e ? e.cssRules || e.rules : void 0
    }
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    }), t.EVENT_MUT_INSERT = 2, t.EVENT_MUT_REMOVE = 3, t.EVENT_MUT_ATTR = 4, t.EVENT_MUT_ATTR_CURVE = 5, t.EVENT_MUT_TEXT = 6, t.EVENT_MUT_SKIPIDS = 7, t.EVENT_MOUSEMOVE = 8, t.EVENT_MOUSEMOVE_CURVE = 9, t.EVENT_SCROLL_LAYOUT = 10, t.EVENT_SCROLL_LAYOUT_CURVE = 11, t.EVENT_MOUSEDOWN = 12, t.EVENT_MOUSEUP = 13, t.EVENT_KEYDOWN = 14, t.EVENT_KEYUP = 15, t.EVENT_CLICK = 16, t.EVENT_FOCUS = 17, t.EVENT_VALUECHANGE = 18, t.EVENT_RESIZE_LAYOUT = 19, t.EVENT_DOMLOADED = 20, t.EVENT_LOAD = 21, t.EVENT_PLACEHOLDER_SIZE = 22, t.EVENT_UNLOAD = 23, t.EVENT_BLUR = 24, t.EVENT_SET_FRAME_BASE = 25, t.EVENT_TOUCHSTART = 32, t.EVENT_TOUCHEND = 33, t.EVENT_TOUCHCANCEL = 34, t.EVENT_TOUCHMOVE = 35, t.EVENT_TOUCHMOVE_CURVE = 36, t.EVENT_NAVIGATE = 37, t.EVENT_PLAY = 38, t.EVENT_PAUSE = 39, t.EVENT_RESIZE_VISUAL = 40, t.EVENT_RESIZE_VISUAL_CURVE = 41, t.EVENT_LOG = 48, t.EVENT_ERROR = 49, t.EVENT_DBL_CLICK = 50, t.EVENT_FORM_SUBMIT = 51, t.EVENT_WINDOW_FOCUS = 52, t.EVENT_WINDOW_BLUR = 53, t.EVENT_HEARTBEAT = 54, t.EVENT_WATCHED_ELEM = 56, t.PerfEntryTiming = 0, t.PerfEntryNavigation = 1, t.PerfEntryResource = 2, t.PerfEntryPaint = 3, t.PerfEntryMark = 4, t.PerfEntryMeasure = 5, t.PerfEntryMemory = 6, t.EVENT_PERF_ENTRY = 57, t.RecFeaturePerformance = 0, t.RecFeaturePerformanceEntries = 1, t.RecFeaturePerformanceMemory = 2, t.RecFeatureConsole = 3, t.RecFeatureAjax = 4, t.EVENT_REC_FEAT_SUPPORTED = 58, t.EVENT_SELECT = 59, t.RecStylesheetOwnerTypeNode = 0, t.RecStylesheetOwnerTypeRule = 1, t.EVENT_CSSRULE_INSERT = 60, t.EVENT_CSSRULE_DELETE = 61, t.ThrottledStyleSheetHooks = 0, t.ThrottledSetPropertyHooks = 1, t.EVENT_FAIL_THROTTLED = 62, t.EVENT_AJAX_REQUEST = 63, t.EVENT_SCROLL_VISUAL_OFFSET = 64, t.EVENT_SCROLL_VISUAL_OFFSET_CURVE = 65, t.EVENT_MEDIA_QUERY_CHANGE = 66, t.EVENT_SYS_SETMETA = 8192, t.EVENT_SYS_SETVAR = 8193, t.EVENT_SYS_HIGHLIGHT = 8194, t.EVENT_SYS_RESOURCEHASH = 8195, t.EVENT_SYS_SETCONSENT = 8196, t.EVENT_SYS_CUSTOM = 8197, t.EVENT_COOKED_LOAD_MELTED = "load-melted", t.EVENT_COOKED_LOAD = "load", t.EVENT_COOKED_UNLOAD = "unload", t.EVENT_COOKED_NAVIGATE = "navigate", t.EVENT_COOKED_CLICK = "click", t.EVENT_COOKED_TAP = "tap", t.EVENT_COOKED_FOCUS = "focus", t.EVENT_COOKED_CHANGE = "change", t.EVENT_COOKED_MOUSE_THRASH = "thrash", t.EVENT_FORM_ABANDONED = "abandon", t.EVENT_COOKED_ELEM_SEEN = "seen", t.EVENT_COOKED_REQUEST = "request", t.EVENT_COOKED_LONG_CLICK = "long_click", t.EVENT_COOKED_UNHANDLED_CLICK = "unhandled_click", t.EVENT_COOKED_UNHANDLED_LONG_CLICK = "unhandled_long_click", t.EVENT_COOKED_BACKGROUNDED = "backgrounded", t.EVENT_COOKED_CRASHED = "crashed", t.isUserActionEvent = function(e) {
     switch (e) {
      case t.EVENT_MOUSEDOWN:
      case t.EVENT_MOUSEMOVE:
      case t.EVENT_MOUSEMOVE_CURVE:
      case t.EVENT_MOUSEUP:
      case t.EVENT_KEYDOWN:
      case t.EVENT_KEYUP:
      case t.EVENT_TOUCHSTART:
      case t.EVENT_TOUCHEND:
      case t.EVENT_TOUCHMOVE:
      case t.EVENT_TOUCHMOVE_CURVE:
      case t.EVENT_TOUCHCANCEL:
      case t.EVENT_CLICK:
      case t.EVENT_SCROLL_LAYOUT:
      case t.EVENT_SCROLL_LAYOUT_CURVE:
      case t.EVENT_SCROLL_VISUAL_OFFSET:
      case t.EVENT_SCROLL_VISUAL_OFFSET_CURVE:
      case t.EVENT_NAVIGATE:
       return !0
     }
     return !1
    }, t.MAX_LOGS_PER_PAGE = 1024, t.AjaxBodyElide = 0, t.AjaxBodyRecord = 1, t.AjaxBodyWhitelist = 2
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(0),
     i = n(6),
     o = n(15),
     s = 10,
     a = "[anonymous]",
     u = /function\s*([\w\-$]+)?\s*\(/i;
   
    function c(e) {
     return e.stack || e.backtrace || e.stacktrace
    }
   
    function h() {
     var e, t;
     try {
      throw new Error("")
     } catch (n) {
      e = "<generated>\n", t = c(n)
     }
     if (!t) {
      e = "<generated-ie>\n";
      var n = [];
      try {
       for (var i = arguments.callee.caller.caller; i && n.length < s;) {
        var o = u.test(i.toString()) && RegExp.$1 || a;
        n.push(o), i = i.caller
       }
      } catch (e) {
       r.logIfDebug(e)
      }
      t = n.join("\n")
     }
     return e + t
    }
    t.generateStacktrace = h;
    var d = function() {
     function e() {}
     return e.errorLimit = 15, e.sendToBugsnag = function(t, n, s) {
      if (!(e.errorLimit <= 0)) {
       e.errorLimit--, "string" == typeof t && (t = new Error(t));
       var a = r.getCookies(document).fs_uid,
        u = a ? r.parseIdentityCookie(a) : void 0;
       u && u.OrgId != i._fs_org(window) && (u = void 0);
       var d = Date.now(),
        l = new Date(1e3 * o.CompiledTimestamp).toISOString(),
        f = {
         projectRoot: window.location.origin,
         deviceTime: d,
         inIframe: function() {
          try {
           return window.self !== window.top
          } catch (e) {
           return !0
          }
         }(),
         CompiledTimestamp: o.CompiledTimestamp,
         CompiledTime: l,
         orgId: i._fs_org(window),
         "userId:sessionId": u ? u.UserId + ":" + u.SessionId : "NA",
         context: document.location.pathname,
         message: t.message,
         name: "Recording Error",
         releaseStage: "production " + l,
         severity: n,
         language: navigator.language || navigator.userLanguage || "en-GB",
         stacktrace: c(t) || h()
        };
       if (s)
        for (var p in s) f["aux_" + p] = s[p];
       var _ = [];
       for (var p in f) _.push(encodeURIComponent(p) + "=" + encodeURIComponent(f[p]));
       (new Image).src = "https://" + r.gceHost(window._fs_host) + "/rec/except?" + _.join("&")
      }
     }, e
    }();
    t.FsBugSnag = d;
    var l = {};
    t.assert = function(e, t, n) {
     if (void 0 === n && (n = 1), e) return !0;
     if (l[t] = l[t] || 0, l[t]++, l[t] > n) return !1;
     var r = new Error("Assertion failed: " + t);
     return d.sendToBugsnag(r, "error"), e
    }
   }, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
     var e = Object.setPrototypeOf || {
      __proto__: []
     }
     instanceof Array && function(e, t) {
      e.__proto__ = t
     } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
     };
     return function(t, n) {
      function r() {
       this.constructor = t
      }
      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
     }
    }();
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var i = n(0),
     o = n(2),
     s = n(5),
     a = n(4),
     u = function() {
      function e() {
       this._due = 0, this._id = e.nextId++
      }
      return e.checkForBrokenSchedulers = function() {
       if (!s.uaIsIE11 && !e.checkOngoing) {
        e.checkOngoing = !0;
        var t = Date.now();
        i.forIn(e.registry, function(e) {
         e.maybeForceTick(t)
        }), e.checkOngoing = !1
       }
      }, e.stopAll = function() {
       i.forIn(this.registry, function(e) {
        return e.stop()
       })
      }, e.prototype.stop = function() {
       this.cancel(), delete e.registry[this._id]
      }, e.prototype.register = function(t) {
       this._due = Date.now() + 2 * t, e.registry[this._id] = this
      }, e.prototype.unregister = function() {
       delete e.registry[this._id]
      }, e.prototype.maybeForceTick = function(t) {
       var n = this;
       t > this._due && "function" == typeof requestAnimationFrame && requestAnimationFrame(function() {
        var t = e.checkOngoing;
        try {
         e.checkOngoing = !0, n._tick()
        } catch (e) {
         o.FsBugSnag.sendToBugsnag(e, "error")
        } finally {
         e.checkOngoing = t
        }
       })
      }, e.registry = {}, e.nextId = 0, e.checkOngoing = !1, e
     }();
    t.Scheduler = u;
    var c = function(e) {
     function t(t) {
      var n = e.call(this) || this;
      return n._interval = t, n._handle = -1, n
     }
     return r(t, e), t.prototype.start = function(e) {
      var t = this; - 1 == this._handle && (this._tick = function() {
       try {
        e(), t.register(t._interval)
       } catch (e) {
        o.FsBugSnag.sendToBugsnag(e, "error")
       }
      }, this._handle = a.windex.setWindowInterval(window, this._tick, this._interval), this.register(this._interval))
     }, t.prototype.cancel = function() {
      -1 != this._handle && (a.windex.clearWindowInterval(window, this._handle), this._handle = -1, this._tick = function() {})
     }, t
    }(u);
    t.RealTicker = c;
    var h = function(e) {
     function t(t, n, r) {
      void 0 === n && (n = 0);
      for (var i = [], s = 3; s < arguments.length; s++) i[s - 3] = arguments[s];
      var a = e.call(this) || this;
      return a.delay = n, a.timer = -1, a._tick = function() {
       try {
        t.apply(void 0 === r ? window : r, i)
       } catch (e) {
        o.FsBugSnag.sendToBugsnag(e, "error")
       }
       try {
        a.unregister()
       } catch (e) {
        o.FsBugSnag.sendToBugsnag(e, "error")
       }
      }, a
     }
     return r(t, e), t.prototype.start = function(e) {
      return void 0 === e && (e = this.delay), this.delay = e, a.windex.clearWindowTimeout(window, this.timer), this.timer = a.windex.setWindowTimeout(window, this._tick, this.delay), this.register(e), this
     }, t.prototype.cancel = function() {
      a.windex.clearWindowTimeout(window, this.timer), this.timer = -1
     }, t
    }(u);
    t.RealTimeout = h;
    var d = function() {
     function e(e, t, n) {
      this.limit = e, this.breaker = n, this.remaining = 0, this.ticker = new c(t), this.open()
     }
     return e.prototype.guard = function(e) {
      var t = this;
      return function() {
       return 0 == t.remaining ? (t.breaker(), void t.remaining--) : t.remaining < 0 ? void 0 : (t.remaining--, e.apply(this, arguments))
      }
     }, e.prototype.close = function() {
      return this.ticker.stop(), this
     }, e.prototype.open = function() {
      var e = this;
      return this.remaining = this.limit, this.ticker.start(function() {
       e.remaining = e.limit
      }), this
     }, e
    }();
    t.Throttle = d;
    var l = function() {
     function e() {
      this._startTime = this.wallTime()
     }
     return e.prototype.wallTime = function() {
      return Date.now()
     }, e.prototype.now = function() {
      return this.wallTime() - this._startTime
     }, e.prototype.startTime = function() {
      return this._startTime
     }, e.prototype.setStartTime = function(e) {
      this._startTime = e
     }, e
    }();
    t.Timekeeper = l
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(7);
   
    function i(e) {
     return function(t) {
      for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
      return e.apply(t, n)
     }
    }
    t.unbind = i, t.windex = {
     done: !1,
     jsonParse: JSON.parse,
     jsonStringify: JSON.stringify,
     arrayShift: i(Array.prototype.shift),
     arrayIsArray: Array.isArray,
     objectToString: i(Object.prototype.toString),
     objectKeys: Object.keys,
     objectValues: Object.values,
     objectHasOwnProp: i(Object.prototype.hasOwnProperty),
     matchMedia: window.matchMedia ? i(window.matchMedia) : null,
     setWindowTimeout: i(setTimeout),
     setWindowInterval: i(setInterval),
     clearWindowTimeout: i(clearTimeout),
     clearWindowInterval: i(clearInterval)
    }, t.wait = function(e) {
     return new r.FSPromise(function(n) {
      t.windex.setWindowTimeout(window, function() {
       return n()
      }, e)
     })
    }, t.setWindex = function(e) {
     t.windex = e
    }
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = navigator.userAgent;
    t.uaIsIE = r.indexOf("MSIE ") > -1 || r.indexOf("Trident/") > -1, t.uaIsIE11 = t.uaIsIE && r.indexOf("rv:11") > -1, t.uaIsEdge = r.indexOf("Edge/") > -1
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(14);
    t._fs_debug = function(e) {
     return !!e._fs_ext_debug || !!e._fs_debug
    }, t._fs_host = function(e) {
     return e._fs_ext_host || e._fs_host
    }, t._fs_org = function(e) {
     return e._fs_ext_org || e._fs_org
    }, t._fs_csp = function(e) {
     return e._fs_csp
    }, t._fs_cookie_domain = function(e) {
     return e._fs_cookie_domain
    }, t._fs_ready = function(e) {
     return e._fs_ready
    }, t._fs_run_in_iframe = function(e) {
     return !!e._fs_run_in_iframe
    }, t._fs_is_outer_script = function(e) {
     return !!e._fs_is_outer_script
    }, t._fs_replay_flags = function(e) {
     return e._fs_replay_flags
    }, t._fs_transport = function(e) {
     return e._fs_transport
    }, t.set_fs_shutdown = function(e, t) {
     e._fs_shutdown = t
    }, t.FS_q_drain = function(e) {
     var t = e[r.Namespace(e)];
     if (t && "q" in t) {
      var n = t.q;
      return delete t.q, n
     }
     return []
    }, t.FS_q_push = function(e, t) {
     var n = e[r.Namespace(e)];
     "q" in n || (n.q = []), n.q.push(t)
    }
   }, function(e, t, n) {
    "use strict";
   
    function r(e) {
     return "function" == typeof e
    }
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var i = Array.isArray ? Array.isArray : function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
     },
     o = 0,
     s = function(e, t) {
      h[o] = e, h[o + 1] = t, 2 === (o += 2) && c()
     };
    var a = window.MutationObserver || window.WebKitMutationObserver,
     u = "undefined" != typeof Uint8ClampedArray && void 0 != typeof self && void 0 !== self.importScripts && "undefined" != typeof MessageChannel;
    var c, h = new Array(1e3);
   
    function d() {
     for (var e = 0; e < o; e += 2) {
      (0, h[e])(h[e + 1]), h[e] = void 0, h[e + 1] = void 0
     }
     o = 0
    }
   
    function l(e, t) {
     var n = arguments,
      r = this,
      i = new this.constructor(_);
     void 0 === i[p] && P(i);
     var o = r._state;
     return o ? function() {
      var e = n[o - 1];
      s(function() {
       return A(o, i, e, r._result)
      })
     }() : N(r, i, e, t), i
    }
   
    function f(e) {
     if (e && "object" == typeof e && e.constructor === this) return e;
     var t = new this(_);
     return T(t, e), t
    }
    c = a ? function() {
     var e = 0,
      t = new a(d),
      n = document.createTextNode("");
     return t.observe(n, {
       characterData: !0
      }),
      function() {
       var t = e = ++e % 2;
       n.data = t + ""
      }
    }() : u ? function() {
     var e = new MessageChannel;
     return e.port1.onmessage = d,
      function() {
       return e.port2.postMessage(0)
      }
    }() : function() {
     var e = setTimeout;
     return function() {
      return e(d, 1)
     }
    }();
    var p = Math.random().toString(36).substring(16);
   
    function _() {}
    var g = void 0,
     v = 1,
     y = 2,
     E = new C;
   
    function m(e) {
     try {
      return e.then
     } catch (e) {
      return E.error = e, E
     }
    }
   
    function S(e, t, n) {
     t.constructor === e.constructor && n === l && t.constructor.resolve === f ? function(e, t) {
      t._state === v ? b(e, t._result) : t._state === y ? I(e, t._result) : N(t, void 0, function(t) {
       return T(e, t)
      }, function(t) {
       return I(e, t)
      })
     }(e, t) : n === E ? (I(e, E.error), E.error = null) : void 0 === n ? b(e, t) : r(n) ? function(e, t, n) {
      s(function(e) {
       var r = !1,
        i = function(e, t, n, r, i) {
         try {
          e.call(t, n, r)
         } catch (e) {
          return e
         }
        }(n, t, function(n) {
         r || (r = !0, t !== n ? T(e, n) : b(e, n))
        }, function(t) {
         r || (r = !0, I(e, t))
        }, e._label);
       !r && i && (r = !0, I(e, i))
      }, e)
     }(e, t, n) : b(e, t)
    }
   
    function T(e, t) {
     e === t ? I(e, new TypeError("You cannot resolve a promise with itself")) : !
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   4.1.0+f9a5575b
       */
      function(e) {
       return "function" == typeof e || "object" == typeof e && null !== e
      }(t) ? b(e, t) : S(e, t, m(t))
    }
   
    function w(e) {
     e._onerror && e._onerror(e._result), O(e)
    }
   
    function b(e, t) {
     e._state === g && (e._result = t, e._state = v, 0 !== e._subscribers.length && s(O, e))
    }
   
    function I(e, t) {
     e._state === g && (e._state = y, e._result = t, s(w, e))
    }
   
    function N(e, t, n, r) {
     var i = e._subscribers,
      o = i.length;
     e._onerror = null, i[o] = t, i[o + v] = n, i[o + y] = r, 0 === o && e._state && s(O, e)
    }
   
    function O(e) {
     var t = e._subscribers,
      n = e._state;
     if (0 !== t.length) {
      for (var r, i, o = e._result, s = 0; s < t.length; s += 3) r = t[s], i = t[s + n], r ? A(n, r, i, o) : i(o);
      e._subscribers.length = 0
     }
    }
   
    function C() {
     this.error = null
    }
    var R = new C;
   
    function A(e, t, n, i) {
     var o, s, a, u, c = r(n);
     if (c) {
      if ((o = function(e, t) {
        try {
         return e(t)
        } catch (e) {
         return R.error = e, R
        }
       }(n, i)) === R ? (u = !0, s = o.error, o.error = null) : a = !0, t === o) return void I(t, new TypeError("A promises callback cannot return that same promise."))
     } else o = i, a = !0;
     t._state !== g || (c && a ? T(t, o) : u ? I(t, s) : e === v ? b(t, o) : e === y && I(t, o))
    }
    var k = 0;
   
    function P(e) {
     e[p] = k++, e._state = void 0, e._result = void 0, e._subscribers = []
    }
   
    function F(e, t) {
     this._instanceConstructor = e, this.promise = new e(_), this.promise[p] || P(this.promise), i(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? b(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && b(this.promise, this._result))) : I(this.promise, new Error("Array Methods must be provided an Array"))
    }
    F.prototype._enumerate = function() {
     for (var e = this.length, t = this._input, n = 0; this._state === g && n < e; n++) this._eachEntry(t[n], n)
    }, F.prototype._eachEntry = function(e, t) {
     var n = this._instanceConstructor,
      r = n.resolve;
     if (r === f) {
      var i = m(e);
      if (i === l && e._state !== g) this._settledAt(e._state, t, e._result);
      else if ("function" != typeof i) this._remaining--, this._result[t] = e;
      else if (n === x) {
       var o = new n(_);
       S(o, e, i), this._willSettleAt(o, t)
      } else this._willSettleAt(new n(function(t) {
       return t(e)
      }), t)
     } else this._willSettleAt(r(e), t)
    }, F.prototype._settledAt = function(e, t, n) {
     var r = this.promise;
     r._state === g && (this._remaining--, e === y ? I(r, n) : this._result[t] = n), 0 === this._remaining && b(r, this._result)
    }, F.prototype._willSettleAt = function(e, t) {
     var n = this;
     N(e, void 0, function(e) {
      return n._settledAt(v, t, e)
     }, function(e) {
      return n._settledAt(y, t, e)
     })
    };
    var x = function(e) {
     this[p] = k++, this._result = this._state = void 0, this._subscribers = [], _ !== e && ("function" != typeof e && function() {
      throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
     }(), this instanceof x ? function(e, t) {
      try {
       t(function(t) {
        T(e, t)
       }, function(t) {
        I(e, t)
       })
      } catch (t) {
       I(e, t)
      }
     }(this, e) : function() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
     }())
    };
    x.all = function(e) {
     return new F(this, e).promise
    }, x.race = function(e) {
     var t = this;
     return i(e) ? new t(function(n, r) {
      for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
     }) : new t(function(e, t) {
      return t(new TypeError("You must pass an array to race."))
     })
    }, x.resolve = f, x.reject = function(e) {
     var t = new this(_);
     return I(t, e), t
    }, x._setAsap = function(e) {
     s = e
    }, x._asap = s, x.prototype = {
     constructor: x,
     then: l,
     catch: function(e) {
      return this.then(null, e)
     }
    }, t.FSPromise = "function" == typeof window.Promise ? window.Promise : x
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(13),
     i = n(0),
     o = n(5),
     s = n(18),
     a = n(2);
   
    function u(e) {
     return !!e._fswatch
    }
   
    function c(e) {
     var t = h(e);
     return !!t && t != r.WatchKindWatch
    }
   
    function h(e) {
     return e._fswatch
    }
   
    function d(e, t) {
     ("_fswatch" in e || t) && (e._fswatch = t)
    }
   
    function l(e) {
     return e ? t._mirrors[e._fs] : null
    }
   
    function f(e) {
     try {
      return e && e._fs || 0
     } catch (e) {
      return 0
     }
    }
   
    function p(e) {
     if (e.parent) {
      if (i.hasMoreThanNKeys(e.watchedChildSet, 0) || u(e.node))
       for (var n = e.watchedChildSet && i.hasMoreThanNKeys(e.watchedChildSet, 1) || u(e.node) ? e.id : i.firstKey(e.watchedChildSet), r = n ? e.parent : null; r && r.watchedChildSet && r.watchedChildSet[n];) {
        if (delete r.watchedChildSet[n], i.hasNKeys(r.watchedChildSet, 1)) {
         var o = r.id,
          s = i.firstValue(r.watchedChildSet);
         for (r = r.parent; r && r.watchedChildSet && r.watchedChildSet[o];) delete r.watchedChildSet[o], r.watchedChildSet[s.id] = s, r = r.parent;
         break
        }
        r = r.parent
       }
      e.parent.child == e && (e.parent.child = e.next), e.parent.lastChild == e && (e.parent.lastChild = e.prev), e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent = e.prev = e.next = null, delete t._mirrors[e.id], e.node._fs == e.id && (e.node._fs = 0), e.id = 0, e.child && _(e.child)
     }
    }
   
    function _(e) {
     for (var n = [e]; n.length > 0 && n.length < 1e4;) {
      var r = n.pop();
      delete t._mirrors[r.id], r.node._fs == r.id && (r.node._fs = 0), r.id = 0, r.next && n.push(r.next), r.child && n.push(r.child)
     }
     a.assert(n.length < 1e4, "clearIds is fast")
    }
   
    function g(e, t) {
     if ((!o.uaIsEdge || "output" != i.tagName(e)) && e.attributes && e.attributes.length > 0)
      for (var n = 0; n < e.attributes.length; n++) {
       var r = e.attributes[n];
       null != r && t(m(r.name), r.value)
      }
    }
    t.MaxTextSizeBytes = 16e6, t.setMaxTextSizeBytes = function(e) {
     t.MaxTextSizeBytes = e
    }, t.isWatched = u, t.isBlocked = c, t.watchKind = h, t.setWatched = d, t._mirrors = {}, t.setMirrors = function(e) {
     t._mirrors = e
    }, t.mirrorFor = l, t.fsid = f, t.fsidIfNotBlocked = function(e) {
     return c(e) ? 0 : f(e)
    }, t.removeMirror = p, t.clearIds = _;
    var v = function() {
     function e(e) {
      this._watcher = e, this._curId = 1
     }
     return e.prototype.curId = function() {
      return this._curId
     }, e.prototype.tokenizeNode = function(e, t, n, r, i) {
      var o = this._curId;
      try {
       var s = l(e),
        a = l(t),
        u = [];
       return this.tokeNode(s, a, n, u, r, i), u
      } catch (e) {
       return this._curId = o, []
      }
     }, e.prototype.tokeNode = function(e, n, o, c, h, d) {
      var l = this;
      if ("SCRIPT" == o.nodeName || o.nodeType == s.Node_COMMENT_NODE) return null;
      var f = {
       id: this._curId++,
       node: o
      };
      if (t._mirrors[f.id] = f, o._fs = f.id, e && function(e, t, n) {
        p(t), t.parent = e, t.next = n, n && (t.prev = n.prev, n.prev = t), null == t.next ? (t.prev = e.lastChild, e.lastChild = t) : t.next.prev = t, null == t.prev ? e.child = t : t.prev.next = t
       }(e, f, n), o.nodeType == s.Node_DOCUMENT_TYPE_NODE) {
       var _ = o;
       return c.push("<!DOCTYPE", ":name", _.name, ":publicId", _.publicId || "", ":systemId", _.systemId || ""), f
      }
      var v = o.nodeName;
      "http://www.w3.org/2000/svg" == o.namespaceURI && (v = "svg:" + v), c.push("<" + v);
      try {
       var y = this.processWatchedElem(o, c);
       if (y && (function(e, t) {
         if (u(e.node))
          for (var n = e, r = e.parent; r; r = r.parent) {
           if (r.watchedChildSet || (r.watchedChildSet = {}), n.watchedChildSet)
            for (var o in n.watchedChildSet) delete r.watchedChildSet[o];
           if (r.watchedChildSet[n.id] = n, i.hasNKeys(r.watchedChildSet, 2)) n = r;
           else if (i.hasMoreThanNKeys(r.watchedChildSet, 2)) break
          }
        }(f), y != r.WatchKindWatch)) return f;
       if (h) try {
        h(o)
       } catch (e) {
        a.FsBugSnag.sendToBugsnag(e, "error")
       }
       g(o, function(e, t) {
        if (c.push(":" + e), c.push(t), d) try {
         d(o, e, t)
        } catch (e) {
         a.FsBugSnag.sendToBugsnag(e, "error")
        }
       }), o.firstChild && (c.push("["), i.forEachNextSibling(o.firstChild, function(e) {
        l.tokeNode(f, null, e, c, h, d)
       }), c.push("]")), o.nodeType == s.Node_TEXT_NODE && c.push(S(o))
      } catch (e) {
       a.FsBugSnag.sendToBugsnag(e, "error")
      }
      return f
     }, e.prototype.processWatchedElem = function(e, t) {
      if (e.nodeType == s.Node_ELEMENT_NODE) {
       var n = e;
       if (this._watcher) {
        var i = this._watcher.isWatched(n);
        if (d(e, i), i && i != r.WatchKindWatch) {
         var o, a = !1;
         g(e, function(n, r) {
          var i = y(e, n, r);
          "class" == n ? o = !0 : "style" == n && (a = !0), null != i && (t.push(":" + n), t.push(i))
         }), o || (t.push(":class"), t.push("_fs_block_" + i)), a || (t.push(":style"), t.push(this._watcher.mungeWatchedStyle(e, "")))
        }
        return i
       }
      }
      return null
     }, e
    }();
   
    function y(e, t, n) {
     switch (t) {
      case "class":
       n.indexOf("_fs_block_") < 0 && (n += " _fs_block_" + h(e));
       break;
      case "alt":
      case "checked":
      case "data":
      case "src":
      case "title":
      case "value":
       return null
     }
     return n
    }
    t.NodeEncoder = v, t.rewriteBlockedAttribute = y;
    var E = {
     ATTRIBUTENAME: "attributeName",
     ATTRIBUTETYPE: "attributeType",
     BASEFREQUENCY: "baseFrequency",
     BASEPROFILE: "baseProfile",
     CALCMODE: "calcMode",
     CLIPPATHUNITS: "clipPathUnits",
     CONTENTSCRIPTTYPE: "contentScriptType",
     CONTENTSTYLETYPE: "contentStyleType",
     DIFFUSECONSTANT: "diffuseConstant",
     EDGEMODE: "edgeMode",
     EXTERNALRESOURCESREQUIRED: "externalResourcesRequired",
     FILTERRES: "filterRes",
     FILTERUNITS: "filterUnits",
     GLYPHREF: "glyphRef",
     GRADIENTTRANSFORM: "gradientTransform",
     GRADIENTUNITS: "gradientUnits",
     KERNELMATRIX: "kernelMatrix",
     KERNELUNITLENGTH: "kernelUnitLength",
     KEYPOINTS: "keyPoints",
     KEYSPLINES: "keySplines",
     KEYTIMES: "keyTimes",
     LENGTHADJUST: "lengthAdjust",
     LIMITINGCONEANGLE: "limitingConeAngle",
     MARKERHEIGHT: "markerHeight",
     MARKERUNITS: "markerUnits",
     MARKERWIDTH: "markerWidth",
     MASKCONTENTUNITS: "maskContentUnits",
     MASKUNITS: "maskUnits",
     NUMOCTAVES: "numOctaves",
     PATHLENGTH: "pathLength",
     PATTERNCONTENTUNITS: "patternContentUnits",
     PATTERNTRANSFORM: "patternTransform",
     PATTERNUNITS: "patternUnits",
     POINTSATX: "pointsAtX",
     POINTSATY: "pointsAtY",
     POINTSATZ: "pointsAtZ",
     PRESERVEALPHA: "preserveAlpha",
     PRESERVEASPECTRATIO: "preserveAspectRatio",
     PRIMITIVEUNITS: "primitiveUnits",
     REFX: "refX",
     REFY: "refY",
     REPEATCOUNT: "repeatCount",
     REPEATDUR: "repeatDur",
     REQUIREDEXTENSIONS: "requiredExtensions",
     REQUIREDFEATURES: "requiredFeatures",
     SPECULARCONSTANT: "specularConstant",
     SPECULAREXPONENT: "specularExponent",
     SPREADMETHOD: "spreadMethod",
     STARTOFFSET: "startOffset",
     STDDEVIATION: "stdDeviation",
     STITCHTILES: "stitchTiles",
     SURFACESCALE: "surfaceScale",
     SYSTEMLANGUAGE: "systemLanguage",
     TABLEVALUES: "tableValues",
     TARGETX: "targetX",
     TARGETY: "targetY",
     TEXTLENGTH: "textLength",
     VIEWBOX: "viewBox",
     VIEWTARGET: "viewTarget",
     XCHANNELSELECTOR: "xChannelSelector",
     YCHANNELSELECTOR: "yChannelSelector",
     ZOOMANDPAN: "zoomAndPan"
    };
   
    function m(e) {
     return /[a-z]/.test(e) ? e : E[e] || e.toLowerCase()
    }
   
    function S(e) {
     var n = e.textContent;
     if (!n) return "";
     var r = n.length;
     return r > t.MaxTextSizeBytes ? (a.FsBugSnag.sendToBugsnag("Ignoring huge text node with length [" + r + "]", "warning"), "") : n
    }
    t.fixAttrName = m, t.safeTextContent = S
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    }), t.MutationProcessingInterval = 250, t.CurveSamplingInterval = 142, t.UploadInterval = 5e3, t.HeartbeatInitial = 4e3, t.HeartbeatMax = 256e3, t.PageInactivityTimeout = 18e5, t.BackoffMax = 3e5, t.ScrollSampleInterval = t.MutationProcessingInterval / 5, t.InactivityThreshold = 4e3, t.MaxPayloadLength = 16384
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(8),
     i = n(0),
     o = n(14),
     s = n(25),
     a = n(35),
     u = n(37),
     c = n(13),
     h = n(3),
     d = n(2);
   
    function l(e) {
     var t = r.fsid(e) + " ";
     return e.id && (t += "#" + e.id), t += "[src=" + e.src + "]"
    }
    t.FS_REQUEST_FRAME_ID = "RequestFrameId", t.FS_GREET_CHILD_FRAME = "GreetFrame", t.FS_SET_FRAME_ID_CMD = "SetFrameId", t.FS_IFRAME_EVENTS = "EvtBundle", t.FS_SHUTDOWN_FRAME = "ShutdownFrame", t.FS_RESTART_FRAME = "RestartFrame", t.FS_SET_CONSENT = "SetConsent", t.FS_INIT_MOBILE_CMD = "InitFrameMobile", t.defaultInjector = function(e, t, n, r) {
     var s = l(e);
     i.logIfDebug("Injecting into Frame " + s);
     try {
      if (function(e) {
        return e.id == e.name && p.test(e.id)
       }(e)) return void i.logIfDebug("Blacklisted iframe: " + s);
      if (function(e) {
        return function(e) {
         return !!e.src && "about:blank" != e.src && e.src.indexOf("javascript:") < 0
        }(e) && e.src != e.contentWindow.location.href && "loading" == e.contentDocument.readyState
       }(e)) return void i.logIfDebug("Frame not yet loaded: " + s);
      if (e.contentWindow[o.Namespace(e.contentWindow)]) return void i.logIfDebug("FS already defined in Frame contentWindow: " + s + ". Ignoring.");
      var a = e.contentWindow,
       u = e.contentDocument;
      a._fs_org = t, a._fs_host = n, a._fs_debug = i.isDebug(), a._fs_run_in_iframe = !0;
      var c = u.createElement("script");
      c.async = !0, c.src = r + "//" + n + "/s/fs.js", "testdrive" == t && (c.src += "?allowMoo=true"), u.head.appendChild(c)
     } catch (e) {
      i.logIfDebug("iFrame no injecty. Probably not same origin.")
     }
    };
    var f, p = /^fb\d{18}$/;
    ! function(e) {
     e[e.NoInfoYet = 1] = "NoInfoYet", e[e.Enabled = 2] = "Enabled", e[e.Disabled = 3] = "Disabled"
    }(f = t.GetCurrentSessionEnabledState || (t.GetCurrentSessionEnabledState = {}));
    var _ = function() {
     function e(e, t, n, r) {
      var o = this;
      this._ctx = e, this._injector = r, this._iFrames = [], this._pendingChildFrameIdInits = [], this._listeners = new i.DomListeners, this._getCurrentSessionEnabled = f.NoInfoYet, this._resourceUploadingEnabled = !1, this._tickerTasks = [], this._watcher = new c.Watcher, this._transport = n(e, function() {
       o.shutdown()
      }), this._queue = new u.EventQueue(e, this._transport, function(e) {
       for (var t = o._eventWatcher.bundleEvents(e), n = void 0; n = o._tickerTasks.pop();) n();
       return t
      }, t), this._eventWatcher = new s.EventWatcher(e, this._queue, this._watcher, this._listeners, function(e) {
       o.onFrameCreated(e)
      }, function(e) {
       o.beforeFrameRemoved(e)
      }), this._consoleWatcher = new a.ConsoleWatcher(this._queue, e.window, this._listeners), this._protocol = e.options.protocol, this._host = e.options.host, this._orgId = e.options.orgId, this._wnd = e.window
     }
     return e.prototype.start = function(e, t) {
      var n = this;
      this._onFullyStarted = t, this.addDefaultWatches(), "onpagehide" in this._wnd ? this._listeners.add(this._wnd, "pagehide", !1, function(e) {
       n.onUnload("pagehide")
      }) : this._listeners.add(this._wnd, "unload", !1, function(e) {
       n.onUnload("unload")
      }), this._listeners.add(this._wnd, "message", !1, function(e) {
       "string" == typeof e.data && n.postMessageReceived(e.source, v(e.data))
      });
      var r = this._wnd.Document ? this._wnd.Document.prototype : this._wnd.document;
      this._docCloseHook = i.activateHook(r, "close"), this._docCloseHook && this._docCloseHook.afterAsync(function() {
       n._listeners.refresh()
      })
     }, e.prototype.queue = function() {
      return this._queue
     }, e.prototype.eventWatcher = function() {
      return this._eventWatcher
     }, e.prototype.console = function() {
      return this._consoleWatcher
     }, e.prototype.onDomLoad = function() {
      this._eventWatcher.onDomLoad()
     }, e.prototype.onLoad = function() {
      this._eventWatcher.onLoad()
     }, e.prototype.shutdown = function() {
      this._eventWatcher.shutdown(), this._consoleWatcher.disable(), this._listeners.clear(), this._docCloseHook && this._docCloseHook.disable(), this.tellAllFramesTo([t.FS_SHUTDOWN_FRAME])
     }, e.prototype.tellAllFramesTo = function(e) {
      for (var t = 0; t < this._iFrames.length; t++) {
       g(this._iFrames[t].contentWindow, e)
      }
     }, e.prototype.getCurrentSessionURL = function(e) {
      var t = this._getCurrentSessionEnabled;
      if (t == f.NoInfoYet) return null;
      var n = function(e) {
       if (i.isLocalhost(i.domainFromHost(e))) return e;
       if (0 == e.indexOf("www.")) return "app." + e.slice(4);
       return "app." + e
      }(this._host);
      if (t == f.Disabled) return this._protocol + "//" + n + "/opt/upgrade";
      var r = this.getCurrentSession();
      return r ? (e && (r += ":" + this._ctx.time.wallTime()), this._protocol + "//" + n + "/ui/" + this._ctx.options.orgId + "/session/" + encodeURIComponent(r)) : null
     }, e.prototype.getCurrentSession = function() {
      var e = this._getCurrentSessionEnabled;
      return e == f.NoInfoYet || e == f.Disabled ? null : this._userId ? this._userId + ":" + this._sessionId : null
     }, e.prototype.setConsent = function(e) {
      this._watcher.setConsent(e), this.tellAllFramesTo([t.FS_SET_CONSENT, e])
     }, e.prototype.onUnload = function(e) {
      this._queue.addUnload(e), h.Scheduler.stopAll()
     }, e.prototype.handleResponse = function(e) {
      if (this._pageRsp = e, this._userId = e.UserIntId, this._sessionId = e.SessionIntId, this._pageId = e.PageIntId, this._serverPageStart = e.PageStart, this._getCurrentSessionEnabled = e.GetCurrentSessionEnabled ? f.Enabled : f.Disabled, e.ResourceUploadingEnabled && this.enableResourceUploading(), e.AjaxWatcherEnabled && this.enableAjaxWatcher(), e.ConsoleWatcherEnabled && this.enableConsoleWatcher(), e.Blocks)
       for (var t = 0; t < e.Blocks.length; ++t) this._watcher.addRule(e.Blocks[t]);
      if (e.Watches)
       for (t = 0; t < e.Watches.length; ++t) this._watcher.addRule(e.Watches[t]);
      e.AjaxWatcherEnabled && e.AjaxWatches && this._eventWatcher.ajaxWatcher().setWatches(e.AjaxWatches), this._watcher.setConsent(!!e.Consented)
     }, e.prototype.addDefaultWatches = function() {
      for (var e = 0, t = ['object:not([type^="image/"])', 'embed:not([type^="image/"])', "canvas", "noscript", ".fs-block", ".fs-hide"]; e < t.length; e++) {
       var n = t[e];
       this._watcher.addRule({
        Selector: n,
        Kind: c.WatchKindBlocked
       })
      }
     }, e.prototype.fullyStarted = function() {
      this._onFullyStarted()
     }, e.prototype.enableResourceUploading = function() {
      this._resourceUploadingEnabled = !0, this._eventWatcher.initResourceUploading()
     }, e.prototype.enableAjaxWatcher = function() {
      this.eventWatcher().ajaxWatcher().enable()
     }, e.prototype.enableConsoleWatcher = function() {
      this.console().enable()
     }, e.prototype.flushPendingChildFrameInits = function() {
      if (this._pendingChildFrameIdInits.length > 0) {
       for (var e = 0; e < this._pendingChildFrameIdInits.length; e++) this._pendingChildFrameIdInits[e]();
       this._pendingChildFrameIdInits = []
      }
     }, e.prototype.onFrameCreated = function(e) {
      var n = this;
      if (r.fsid(e)) {
       this._iFrames.push(e);
       var s = function(e) {
         var t = e.src,
          n = location.protocol + "//" + location.host;
         return !t || "about:blank" == t || i.hasPrefix(t, "javascript:") || i.hasPrefix(t, n)
        }(e),
        a = !1;
       try {
        a = !!e.contentWindow[o.Namespace(e.contentWindow)]
       } catch (e) {
        a = !0
       }(!s || a) && e.contentWindow && e.contentWindow.postMessage ? (i.logIfDebug("Cross-origin iframe " + l(e)), g(e.contentWindow, [t.FS_GREET_CHILD_FRAME])) : s ? (i.logIfDebug("Attempting to setup Frame " + l(e)), this._injector(e, this._orgId, this._host, this._protocol), e.addEventListener("load", function(t) {
        try {
         n._tickerTasks.push(function() {
          i.logIfDebug("onload for frame " + l(e)), n._injector(e, n._orgId, n._host, n._protocol)
         })
        } catch (t) {
         d.FsBugSnag.sendToBugsnag(t, "error")
        }
       })) : i.logIfDebug("Frame Doesn't need injecting. Probably cross domain " + l(e))
      } else i.logIfDebug("fsid missing or invalid for iFrame " + l(e))
     }, e.prototype.beforeFrameRemoved = function(e) {
      for (var t = 0; t < this._iFrames.length; t++) {
       if (e == this._iFrames[t]) return void this._iFrames.splice(t, 1)
      }
     }, e.prototype.postMessageReceived = function(e, n) {
      switch (n[0]) {
       case t.FS_IFRAME_EVENTS:
        var r = n[1];
        r.length > 0 && this._transport.enqueueEvents(r);
        break;
       case t.FS_REQUEST_FRAME_ID:
        var o = this.iFrameWndToFsId(e);
        e && o ? (i.logIfDebug("Responding to FID request for frame " + o), this.sendFrameIdToInnerFrame(e, o)) : i.logIfDebug("No FrameId found. Hoping to send one later.");
        break;
       case t.FS_SET_CONSENT:
        var s = n[1];
        this.setConsent(s)
      }
     }, e.prototype.sendFrameIdToInnerFrame = function(e, n) {
      var r = this,
       i = function() {
        var i = [];
        0 != r._frameId && (i = r._parentIds ? r._parentIds.concat(r._frameId) : [r._frameId]);
        var o = r._ctx.time.startTime();
        g(e, [t.FS_SET_FRAME_ID_CMD, n, i, o, r._protocol, r._host, r._orgId, r._pageRsp])
       };
      null == this._frameId ? this._pendingChildFrameIdInits.push(i) : i()
     }, e.prototype.iFrameWndToFsId = function(e) {
      for (var t = 0; t < this._iFrames.length; t++)
       if (this._iFrames[t].contentWindow == e) return r.fsid(this._iFrames[t]);
      return i.logIfDebug("Unable to locate frame for window"), NaN
     }, e
    }();
   
    function g(e, t) {
     e && e.postMessage && e.postMessage(i.stringify({
      __fs: t
     }), "*")
    }
   
    function v(e) {
     try {
      var t = i.parseJson(e);
      if ("__fs" in t) return t.__fs
     } catch (e) {}
     return []
    }
    t.AbstractRecorder = _, t.parsePostMessageData = v
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(20),
     i = function() {
      function e() {
       var e = r.theDummyDoc(),
        t = e.getElementById("urlresolver-base");
       t || ((t = e.createElement("base")).id = "urlresolver-base", e.head.appendChild(t));
       var n = e.getElementById("urlresolver-parser");
       n || ((n = e.createElement("a")).id = "urlresolver-parser", e.head.appendChild(n)), this.base = t, this.parser = n
      }
      return e.prototype.parseUrl = function(e, t) {
       this.base.setAttribute("href", e), this.parser.setAttribute("href", t);
       var n = document.createElement("a");
       return n.href = this.parser.href, n
      }, e.prototype.resolveUrl = function(e, t) {
       return this.parseUrl(e, t).href
      }, e.prototype.resolveToDocument = function(e, t) {
       var n = o(e);
       return null == n ? t : this.resolveUrl(n, t)
      }, e
     }();
   
    function o(e) {
     var t = e.document,
      n = e.location.href;
     if ("string" == typeof t.baseURI) n = t.baseURI;
     else {
      var r = t.getElementsByTagName("base")[0];
      r && r.href && (n = r.href)
     }
     return "about:blank" == n && e.parent != e ? o(e.parent) : n
    }
    t.UrlResolver = i, t.baseUri = o
   }, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
     var e = Object.setPrototypeOf || {
      __proto__: []
     }
     instanceof Array && function(e, t) {
      e.__proto__ = t
     } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
     };
     return function(t, n) {
      function r() {
       this.constructor = t
      }
      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
     }
    }();
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var i = n(18),
     o = n(2),
     s = n(9),
     a = n(7),
     u = function() {
      function e() {}
      return e.prototype.postPromise = function(e, t, n, r) {
       var i = this;
       return new a.FSPromise(function(o, s) {
        i.post(e, t, n, r, o, s)
       })
      }, e
     }();
    t.HttpPoster = u;
    var c = function(e) {
     function t() {
      return null !== e && e.apply(this, arguments) || this
     }
     return r(t, e), t.prototype.post = function(e, t, n, r, s, a) {
      var u = "//" + t + n,
       c = !1,
       h = new XMLHttpRequest;
      if ("withCredentials" in h) h.onreadystatechange = function() {
       if (h.readyState == i.XHR_DONE) {
        if (c) return;
        c = !0;
        try {
         200 == h.status ? s(h.responseText) : a && a(h.status)
        } catch (e) {
         o.FsBugSnag.sendToBugsnag(e, "error")
        }
       }
      }, h.open("POST", e + u, !0), "function" != typeof r.append && h.setRequestHeader("Content-Type", "text/plain"), h.send(r);
      else {
       var d = new XDomainRequest;
       d.onload = function() {
        s(d.responseText)
       }, d.onerror = function() {
        a && a("Not Found" == d.responseText ? 404 : 500)
       }, d.onprogress = function() {}, d.open("POST", u), d.send(r)
      }
     }, t.prototype.sendBeacon = function(e, t, n, r) {
      var i = e + "//" + t + n;
      return "function" == typeof navigator.sendBeacon && (navigator.sendBeacon(i, r), !0)
     }, t.prototype.exponentialBackoffMs = function(e, t) {
      return h(e, t)
     }, t
    }(u);
   
    function h(e, t) {
     var n = Math.min(s.BackoffMax, 5e3 * Math.pow(2, e));
     return t ? n + .25 * Math.random() * n : n
    }
    t.XHRPoster = c, t.exponentialBackoffMs = h, t.isErrorFatal = function(e) {
     return e >= 400 || 202 == e
    }
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(0),
     i = n(17),
     o = n(2);
    t.WatchKindBlocked = "blocked", t.WatchKindBlockedConsent = "blocked-consent", t.WatchKindWatch = "watch";
    var s = function() {
     function e() {
      this._consent = !1, this._hasWatched = !1, this._rules = Object.create ? Object.create(null) : {}, this._rules[t.WatchKindBlocked] = [], this._rules[t.WatchKindBlockedConsent] = [], this._rules[t.WatchKindWatch] = []
     }
     return e.prototype.isWatched = function(e) {
      this._hasWatched = !0;
      for (var n = 0, i = this._consent ? [t.WatchKindBlocked, t.WatchKindWatch] : [t.WatchKindBlockedConsent, t.WatchKindBlocked, t.WatchKindWatch]; n < i.length; n++)
       for (var o = i[n], s = 0, a = this._rules[o]; s < a.length; s++) {
        var u = a[s];
        if (r.matchesSelector(e, u)) return o
       }
      return null
     }, e.prototype.addRule = function(e) {
      try {
       return !(!e.Selector.match(i.WATCH_RULE_COMMENT) && "" != r.trim(e.Selector)) || this.mergeRule(e.Kind, e.Selector)
      } catch (t) {
       return o.FsBugSnag.sendToBugsnag("Error adding block rule '" + e.Selector + "': " + t, "error"), !1
      }
     }, e.prototype.getConsent = function() {
      return this._consent
     }, e.prototype.setConsent = function(e) {
      this._consent !== e && (this._consent = e, this._hasWatched && this.onConsentChange && this.onConsentChange())
     }, e.prototype.mergeRule = function(e, n) {
      var i = document.documentElement || document.createElement("div");
      try {
       r.matchesSelector(i, n)
      } catch (e) {
       return o.FsBugSnag.sendToBugsnag("Browser rejected block rule '" + n + "': " + e.toString(), "error"), !1
      }
      if (e != t.WatchKindBlocked && e != t.WatchKindBlockedConsent && e != t.WatchKindWatch && (e = t.WatchKindBlocked), 0 == this._rules[e].length) return this._rules[e].push(n), !0;
      var s = this._rules[e].length - 1,
       a = this._rules[e][s].concat(", ", n);
      try {
       r.matchesSelector(i, a)
      } catch (t) {
       return this._rules[e].push(n), o.FsBugSnag.sendToBugsnag("Browser rejected merged block rule when adding '" + n + "': " + t.toString(), "warning"), !0
      }
      return this._rules[e][s] = a, !0
     }, e.prototype.allConsentSensitiveElements = function(e) {
      if (0 == this._rules[t.WatchKindBlockedConsent].length) return [];
      if (1 == this._rules[t.WatchKindBlockedConsent].length) return e.querySelectorAll(this._rules[t.WatchKindBlockedConsent][0]);
      for (var n = [], r = 0, i = this._rules[t.WatchKindBlockedConsent]; r < i.length; r++)
       for (var o = i[r], s = e.querySelectorAll(o), a = 0; a < s.length; a++) n.push(s[a]);
      return n
     }, e.prototype.mungeWatchedStyle = function(e, t) {
      var n = e.getBoundingClientRect(),
       r = Math.floor(n.width),
       i = Math.floor(n.height),
       o = "";
      return null != t && (o = t.trim()), o.length > 0 && ";" != o.charAt(o.length - 1) && (o += ";"), 0 == r && 0 == i || (o += "width:" + r + "px;height:" + i + "px;"), o
     }, e
    }();
    t.Watcher = s
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r, i = "FS",
     o = "_fs_loaded",
     s = "_fs_namespace";
   
    function a(e) {
     return e[o]
    }
    t.Namespace = function(e) {
     if (!r) {
      var t = a(e);
      r = t || (e[s] ? e[s] : i)
     }
     return r
    }, t.isLoaded = a, t.setLoaded = function(e, t) {
     e[o] = t, t in e || (e[t] = {})
    }
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    }), t.CompiledTimestamp = 1534969259, t.CompiledVersion = "UNSET"
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(4);
   
    function i(e) {
     return {
      pageLeft: e.pageLeft,
      pageTop: e.pageTop,
      width: e.width,
      height: e.height
     }
    }
   
    function o(e) {
     return e && e.body && e.documentElement ? "BackCompat" == e.compatMode ? [e.body.clientWidth, e.body.clientHeight] : [e.documentElement.clientWidth, e.documentElement.clientHeight] : [0, 0]
    }
    t.sameViewportPos = function(e, t) {
     return t && e.pageLeft == t.pageLeft && e.pageTop == t.pageTop
    }, t.sameVisualViewportOffset = function(e, t) {
     return t && e.offsetLeft == t.offsetLeft && e.offsetTop == t.offsetTop
    }, t.sameViewportSize = function(e, t) {
     return t && e.width == t.width && e.height == t.height
    }, t.sameLayoutViewportSize = function(e, t) {
     return t && e.width == t.width && e.height == t.height && e.clientWidth == t.clientWidth && e.clientHeight == t.clientHeight
    }, t.createVisualViewportLike = function(e) {
     var t = i(e);
     return t.offsetLeft = e.offsetLeft, t.offsetTop = e.offsetTop, t
    }, t.createLayoutViewportLike = function(e) {
     var t = i(e);
     return t.clientWidth = e.clientWidth, t.clientHeight = e.clientHeight, t
    }, t.getDocumentClientArea = o;
    var s = function() {
     function e(e, t) {
      this.hasKnownPosition = !1, this.pageLeft = 0, this.pageTop = 0, this.width = 0, this.height = 0, this.clientWidth = 0, this.clientHeight = 0;
      var n = e.document;
      if (n.body) {
       if ("visualViewport" in e) {
        var r = n.documentElement.getBoundingClientRect();
        this.hasKnownPosition = !0, this.pageLeft = 0 == r.left ? 0 : -r.left, this.pageTop = 0 == r.top ? 0 : -r.top
       }
       if (i = o(n), this.clientWidth = i[0], this.clientHeight = i[1], void 0 !== t && this.clientWidth == t.clientWidth && this.clientHeight == t.clientHeight && t.width > 0 && t.height > 0) return this.width = t.width, void(this.height = t.height);
       var i, s;
       s = this.computeLayoutViewportSizeFromMediaQueries(e), this.width = s[0], this.height = s[1]
      }
     }
     return e.prototype.computeLayoutViewportSizeFromMediaQueries = function(e) {
      var t = this.findMediaValue(e, "width", this.clientWidth, this.clientWidth + 128);
      void 0 === t && (t = this.tryToGet(e, "innerWidth")), void 0 === t && (t = this.clientWidth);
      var n = this.findMediaValue(e, "height", this.clientHeight, this.clientHeight + 128);
      return void 0 === n && (n = this.tryToGet(e, "innerHeight")), void 0 === n && (n = this.clientHeight), [t, n]
     }, e.prototype.findMediaValue = function(e, t, n, i) {
      if (r.windex.matchMedia) {
       var o = r.windex.matchMedia(e, "(min-" + t + ": " + n + "px)");
       if (null != o) {
        if (o.matches && r.windex.matchMedia(e, "(max-" + t + ": " + n + "px)").matches) return n;
        for (; n <= i;) {
         var s = Math.floor((n + i) / 2);
         if (r.windex.matchMedia(e, "(min-" + t + ": " + s + "px)").matches) {
          if (r.windex.matchMedia(e, "(max-" + t + ": " + s + "px)").matches) return s;
          n = s + 1
         } else i = s - 1
        }
       }
      }
     }, e.prototype.tryToGet = function(e, t) {
      try {
       return e[t]
      } catch (e) {
       return
      }
     }, e
    }();
   
    function a(e, t) {
     return new s(e, t)
    }
    t.getLayoutViewport = a;
    var u = function() {
     return function(e, t) {
      this.offsetLeft = 0, this.offsetTop = 0, this.pageLeft = 0, this.pageTop = 0, this.width = 0, this.height = 0, this.scale = 0;
      var n = e.document;
      if (n.body) {
       var r = "BackCompat" == n.compatMode;
       "pageXOffset" in e ? (this.pageLeft = e.pageXOffset, this.pageTop = e.pageYOffset) : n.scrollingElement ? (this.pageLeft = n.scrollingElement.scrollLeft, this.pageTop = n.scrollingElement.scrollTop) : r ? (this.pageLeft = n.body.scrollLeft, this.pageTop = n.body.scrollTop) : n.documentElement && (n.documentElement.scrollLeft > 0 || n.documentElement.scrollTop > 0) ? (this.pageLeft = n.documentElement.scrollLeft, this.pageTop = n.documentElement.scrollTop) : (this.pageLeft = n.body.scrollLeft || 0, this.pageTop = n.body.scrollTop || 0), this.offsetLeft = this.pageLeft - t.pageLeft, this.offsetTop = this.pageTop - t.pageTop;
       try {
        var i = e.innerWidth,
         o = e.innerHeight
       } catch (e) {
        return
       }
       if (0 != i && 0 != o) {
        this.scale = t.width / i, this.scale < 1 && (this.scale = 1);
        var s = t.width - t.clientWidth,
         a = t.height - t.clientHeight;
        this.width = i - s / this.scale, this.height = o - a / this.scale
       }
      }
     }
    }();
    t.getVisualViewport = function(e, t) {
     return "visualViewport" in e ? e.visualViewport : (void 0 === t && (t = a(e)), new u(e, t))
    }
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = "(.*?" + /(?:[^\\](?:\\\\)*)/.source + ")";
    t.CSS_URL = new RegExp([
     ['@import\\s+"', '"'],
     ["@import\\s+'", "'"],
     ['url\\(\\s*"', '"\\s*\\)'],
     ["url\\(\\s*'", "'\\s*\\)"],
     ["url\\(\\s*", "\\s*\\)"]
    ].map(function(e) {
     var t = e[0],
      n = e[1];
     return "(" + t + ")" + r + "(" + n + ")"
    }).join("|"), "g"), t.replaceCssUrls = function(e, n) {
     return e.replace(t.CSS_URL, function(e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      var i = t[0] || t[3] || t[6] || t[9] || t[12],
       o = t[1] || t[4] || t[7] || t[10] || t[13],
       s = t[2] || t[5] || t[8] || t[11] || t[14],
       a = t[15];
      return n(i, o, s, a)
     })
    }, t.QUOTES = /\"|'/g, t.HOVER = /\:hover/g, t.FOCUS = /\:focus/g, t.MEDIA_QUERY = /(@media.*?{)/g, t.DOMAIN = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/, t.DOMAIN_PART = /^[a-zA-Z0-9-:]{1,61}$/, t.IPv4_PART = /^[0-9]{1,3}$/, t.IPv6_PART = /^[0-9a-f]{0,4}$/, t.PLAYBACK_URL_PARAMS = /.*\?Base=(.*)&Url=(.*)/, t.EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, t.IMAGE_FILENAME = /\.(jpe?g|png|svg|gif|bmp)$/, t.WATCH_RULE_COMMENT = /^\s*\/\//, t.DATA_URI = /^data:([^;,]*)[;,]/i, t.SKETCHY_CONTENT_TYPES = /(application|script|text\/js|text\/html)/i, t.WHITELISTED_CONTENT_TYPES = /(^application\/octet-stream)|(^font\/)|(^application\/[a-z_.-]*font)/i, t.SKETCHY_URI_SCHEMES = /javascript:|file:/i
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    }), t.Node_ELEMENT_NODE = 1, t.Node_ATTRIBUTE_NODE = 2, t.Node_TEXT_NODE = 3, t.Node_CDATA_SECTION_NODE = 4, t.Node_ENTITY_REFERENCE_NODE = 5, t.Node_ENTITY_NODE = 6, t.Node_PROCESSING_INSTRUCTION_NODE = 7, t.Node_COMMENT_NODE = 8, t.Node_DOCUMENT_NODE = 9, t.Node_DOCUMENT_TYPE_NODE = 10, t.Node_DOCUMENT_FRAGMENT_NODE = 11, t.Node_NOTATION_NODE = 12, t.XHR_UNSENT = 0, t.XHR_OPENED = 1, t.XHR_HEADERS_RECEIVED = 2, t.XHR_LOADING = 3, t.XHR_DONE = 4, t.XHR_STATUS_ABORTED = 0
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    }), t.parseFieldPatterns = function(e) {
     var t = 0,
      n = {
       id: t++,
       edges: {}
      };
     return e.split("\n").forEach(function(e) {
      if ("" != (e = e.trim())) {
       if (0 == e.indexOf("/") || e.lastIndexOf("/") == e.length - 1) throw new Error("Leading and trailing slashes are not supported");
       var r = n,
        i = e.split("/");
       i.forEach(function(e, n) {
        if ("" === (e = e.trim())) throw new Error("Empty elements are not allowed");
        if ("**" != e && "*" != e && -1 != e.indexOf("*")) throw new Error("Embedded wildcards are not supported");
        var o = null;
        "**" == e ? (r.loop = !0, o = r) : e in r.edges && (o = r.edges[e]), o || (o = {
         id: t++,
         edges: {}
        }, r.edges[e] = o), n == i.length - 1 && (o.term = !0), r = o
       })
      }
     }), n
    }
   }, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
     value: !0
    }), t.theDummyDoc = function() {
     return r || ((r = document.implementation.createHTMLDocument("")).head || r.documentElement.appendChild(r.createElement("head")), r.body || r.documentElement.appendChild(r.createElement("body"))), r
    }
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(1),
     i = n(10),
     o = n(6),
     s = n(0),
     a = n(40),
     u = n(3),
     c = n(12),
     h = n(9),
     d = n(2),
     l = function() {
      function e(e, t) {
       void 0 === t && (t = new f), this._wnd = e, this._messagePoster = t
      }
      return e.prototype.enqueueEvents = function(e) {
       this._messagePoster.postMessage(this._wnd.parent, i.FS_IFRAME_EVENTS, e)
      }, e.prototype.startPipeline = function(e, t) {}, e.prototype.stopPipeline = function() {}, e.prototype.flush = function() {}, e.prototype.singSwanSong = function() {}, e
     }();
    t.PostMessageEventTransport = l;
    var f = function() {
     function e() {}
     return e.prototype.postMessage = function(e, t, n) {
      var r;
      try {
       r = o._fs_transport(e)
      } catch (e) {}
      r ? r.send(t, s.stringify(n)) : e.postMessage(p(t, n), "*")
     }, e
    }();
   
    function p(e, t) {
     return s.stringify({
      __fs: [e, t || ""]
     })
    }
    t.PostMessagePoster = f, t.formatPostMessageData = p;
    var _ = function() {
     function e(e, t, n, i, o) {
      void 0 === n && (n = u.RealTicker), void 0 === i && (i = u.RealTimeout), void 0 === o && (o = new c.XHRPoster);
      var d = this;
      this._ctx = e, this._onShutdown = t, this._tickerFactory = n, this._poster = o, this._byteCount = 0, this._backoffRetries = 0, this._backoffTime = 0, this._bundleSeq = 1, this._lastPostTime = 0, this._serverBundleTime = 0, this._largePageSize = 16e6, this._outgoingEventQueue = [], this._bundleQueue = [], this._hibernating = !1, this._heartbeatInterval = 0, this._lastUserEvent = 0, this._finished = !1, this._bundleHost = s.gceHost(e.options.host), this._protocol = e.options.protocol, this._identity = e.recording.identity, this._lastBundleTime = e.time.wallTime(), this._uploadTicker = new this._tickerFactory(h.UploadInterval), this._swanSong = new a.SwanSong(e, this, this._identity, i), this._heartbeatTimeout = new i(function() {
       d._outgoingEventQueue.push({
        Kind: r.EVENT_HEARTBEAT,
        When: d._ctx.time.now(),
        Args: []
       }), d._heartbeatInterval *= 2, d._heartbeatInterval > h.HeartbeatMax && (d._heartbeatInterval = h.HeartbeatMax), d._heartbeatTimeout.start(d._heartbeatInterval)
      }), this._hibernationTimeout = new i(function() {
       d._ctx.time.now() - d._lastUserEvent <= 2 * h.PageInactivityTimeout && (d._outgoingEventQueue.push({
        Kind: r.EVENT_UNLOAD,
        When: d._ctx.time.now(),
        Args: ["hibernation"]
       }), d.singSwanSong()), d.stopPipeline(), d._hibernating = !0
      }, h.PageInactivityTimeout)
     }
     return e.prototype.protocol = function() {
      return this._protocol
     }, e.prototype.enqueueEvents = function(e) {
      if (this._hibernating) {
       if (this._finished) return;
       for (var t = 0, n = e; t < n.length; t++) {
        var i = n[t];
        if (r.isUserActionEvent(i.Kind)) {
         this._ctx.recording.splitPage(), this._finished = !0;
         break
        }
       }
      } else {
       for (var o = 0, s = e; o < s.length; o++) {
        i = s[o];
        if (r.isUserActionEvent(i.Kind)) {
         this._hibernationTimeout.start(), this._heartbeatInterval = h.HeartbeatInitial, this._heartbeatTimeout.start(this._heartbeatInterval), this._lastUserEvent = this._ctx.time.now();
         break
        }
       }
       for (var a = 0, u = e; a < u.length; a++) {
        i = u[a];
        this._outgoingEventQueue.push(i)
       }
      }
     }, e.prototype.startPipeline = function(e, t) {
      var n = this;
      this._pageId = e, this._serverPageStart = t, this.enqueueAndSendBundle(), this._uploadTicker.start(function() {
       n.enqueueAndSendBundle()
      }), this._heartbeatInterval = h.HeartbeatInitial, this._heartbeatTimeout.start(this._heartbeatInterval), this._hibernationTimeout.start()
     }, e.prototype.stopPipeline = function() {
      this._uploadTicker.stop(), this._outgoingEventQueue = [], this._bundleQueue = [], this._hibernationTimeout.stop(), this._heartbeatTimeout.stop()
     }, e.prototype.flush = function() {
      this.maybeSendNextBundle()
     }, e.prototype.singSwanSong = function() {
      if (!this._hibernating && (this._outgoingEventQueue.length > 0 && this.enqueueNextBundle(!0), this._bundleQueue.length > 0 || this._pendingBundle)) {
       var e = this._bundleQueue.concat();
       this._pendingBundle && e.unshift(this._pendingBundle), this._swanSong.sing(this._pageId, e, this._lastBundleTime, this._serverPageStart, this._serverBundleTime)
      }
     }, e.prototype.sendSwanSongBundle = function(e, t, n, r, i, o, s, a, u, c) {
      var h = g(e, t, n, r, i, o, s, a);
      this.post(h, i, u, c)
     }, e.prototype.enqueueAndSendBundle = function() {
      this._pendingBundle ? this._pendingBundleFailed && this._sendPendingBundle() : 0 != this._outgoingEventQueue.length ? this.enqueueNextBundle() : this.maybeSendNextBundle()
     }, e.prototype.enqueueNextBundle = function(e) {
      void 0 === e && (e = !1);
      var t = {
       When: this._outgoingEventQueue[0].When,
       Seq: this._bundleSeq++,
       Evts: this._outgoingEventQueue
      };
      this._outgoingEventQueue = [], this._bundleQueue.push(t), e ? this._poster.sendBeacon(this._protocol, this._bundleHost, this.bundleUrl(t), s.stringify(t)) : this.maybeSendNextBundle()
     }, e.prototype.maybeSendNextBundle = function() {
      this._pageId && this._serverPageStart && !this._pendingBundle && 0 != this._bundleQueue.length && (this._pendingBundle = this._bundleQueue.shift(), this._sendPendingBundle())
     }, e.prototype._sendPendingBundle = function() {
      var e = this,
       t = this._ctx.time.wallTime();
      if (!(t < this._backoffTime)) {
       var n = this._pendingBundle;
       n && (this._pendingBundleFailed = !1, this._lastPostTime = this._lastBundleTime = t, this.sendBundle(n, function(t) {
        s.logIfDebug("Sent bundle " + n.Seq + " with " + n.Evts.length + " events");
        try {
         var r = s.parseJson(t);
         e._serverBundleTime = r.BundleTime
        } catch (n) {
         d.FsBugSnag.sendToBugsnag("Failed to JSON parse /rec/bundle response: " + t + ": " + n, "error"), e._serverBundleTime = null
        }
        e._pendingBundle = null, e._backoffTime = 0, e._backoffRetries = 0, e._ctx.time.wallTime() - e._lastPostTime > h.UploadInterval && e.maybeSendNextBundle()
       }, function(t) {
        s.logIfDebug("Failed to send events."), c.isErrorFatal(t) ? e._onShutdown() : (e._pendingBundleFailed = !0, e._backoffTime = e._lastPostTime + e._poster.exponentialBackoffMs(e._backoffRetries++, !1))
       }))
      }
     }, e.prototype.sendBundle = function(e, t, n) {
      this.post(this.bundleUrl(e), e, t, n)
     }, e.prototype.bundleUrl = function(e) {
      return g(this._identity.orgId(), this._identity.userId(), this._identity.sessionId(), this._pageId, e, this._serverPageStart, this._serverBundleTime)
     }, e.prototype.post = function(e, t, n, r) {
      var i = "";
      null != t && (i = s.stringify(t), this._byteCount += i.length, s.logIfDebug("total bytes written: " + this._byteCount)), this._poster.post(this._protocol, this._bundleHost, e, i, n, r), this._byteCount > this._largePageSize && this._bundleSeq > 16 && (s.logIfDebug("Splitting large page of size: " + this._byteCount.toString()), d.FsBugSnag.sendToBugsnag(new Error("Large page of " + this._byteCount + " bytes was sent to: " + e), "info"), this._ctx.recording.splitPage(), this._byteCount = 0)
     }, e
    }();
   
    function g(e, t, n, r, i, o, s, a) {
     var u = "/rec/bundle?OrgId=" + e + "&UserId=" + t + "&SessionId=" + n + "&PageId=" + r + "&Seq=" + i.Seq;
     return null != o && (u += "&PageStart=" + o), null != s && (u += "&PrevBundleTime=" + s), null != a && (u += "&DeltaT=" + a), u
    }
    t.HttpEventTransport = _, t.bundleUrl = g
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(0),
     i = n(6);
    t.HighlightTypeFsId = "fsidentity", t.HighlightTypeNewUid = "newuid", t.UID_COOKIE = "fs_uid";
    var o = function() {
     function e(e) {
      void 0 === e && (e = document), this._doc = e, this._cookies = {}
     }
     return e.prototype.initFromCookies = function(e, n) {
      this._cookies = r.getCookies(this._doc), this._cookie = r.parseIdentityCookie(this._cookies[t.UID_COOKIE]), this._cookie.Host.replace(/^www\./, "") == e.replace(/^www\./, "") && this._cookie.OrgId == n || (this._cookie = {
       Host: e,
       OrgId: n,
       UserId: "",
       SessionId: "",
       AppKey: ""
      })
     }, e.prototype.initFromParsedCookie = function(e) {
      this._cookie = e
     }, e.prototype.clear = function() {
      var e = this.host(),
       t = this.orgId();
      this._cookie = {
       Host: e,
       OrgId: t,
       UserId: "",
       SessionId: "",
       AppKey: ""
      }, this.write()
     }, e.prototype.host = function() {
      return this._cookie.Host
     }, e.prototype.orgId = function() {
      return this._cookie.OrgId
     }, e.prototype.userId = function() {
      return this._cookie.UserId
     }, e.prototype.sessionId = function() {
      return this._cookie.SessionId
     }, e.prototype.appKey = function() {
      return this._cookie.AppKey
     }, e.prototype.cookieData = function() {
      return this._cookie
     }, e.prototype.cookies = function() {
      return this._cookies
     }, e.prototype.setCookie = function(e, t) {
      var n = e + "=" + t;
      this._domain ? n += "; domain=." + encodeURIComponent(this._domain) : n += "; domain=", n += "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/", this._doc.cookie = n
     }, e.prototype.setIds = function(e, t, n, o) {
      (r.isLocalhost(t) || r.isIP(t)) && (t = "");
      var s = i._fs_cookie_domain(e);
      "string" == typeof s && (t = s), this._domain = t, this._cookie.UserId = n, this._cookie.SessionId = o, this.write()
     }, e.prototype.clearAppId = function() {
      return !!this._cookie.AppKey && (this._cookie.AppKey = "", this.write(), !0)
     }, e.prototype.setAppId = function(e) {
      this._cookie.AppKey = e, this.write()
     }, e.prototype.encode = function() {
      var e = this._cookie.Host + "`" + this._cookie.OrgId + "`" + this._cookie.UserId + ":" + this._cookie.SessionId;
      return this._cookie.AppKey && (e += "`" + encodeURIComponent(this._cookie.AppKey) + "`"), e
     }, e.prototype.write = function() {
      null != this._domain && this.setCookie(t.UID_COOKIE, this.encode())
     }, e
    }();
    t.Identity = o
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(24),
     i = n(2),
     o = n(6);
    try {
     (new r.Conductor).init()
    } catch (e) {
     i.FsBugSnag.sendToBugsnag(e, "error"), o._fs_debug(window) && window.console && console.log && console.log("Failed to initialize FullStory.")
    }
   }, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
      return new(n || (n = Promise))(function(i, o) {
       function s(e) {
        try {
         u(r.next(e))
        } catch (e) {
         o(e)
        }
       }
   
       function a(e) {
        try {
         u(r.throw(e))
        } catch (e) {
         o(e)
        }
       }
   
       function u(e) {
        e.done ? i(e.value) : new n(function(t) {
         t(e.value)
        }).then(s, a)
       }
       u((r = r.apply(e, t || [])).next())
      })
     },
     i = this && this.__generator || function(e, t) {
      var n, r, i, o, s = {
       label: 0,
       sent: function() {
        if (1 & i[0]) throw i[1];
        return i[1]
       },
       trys: [],
       ops: []
      };
      return o = {
       next: a(0),
       throw: a(1),
       return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
       return this
      }), o;
   
      function a(o) {
       return function(a) {
        return function(o) {
         if (n) throw new TypeError("Generator is already executing.");
         for (; s;) try {
          if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
          switch (r = 0, i && (o = [0, i.value]), o[0]) {
           case 0:
           case 1:
            i = o;
            break;
           case 4:
            return s.label++, {
             value: o[1],
             done: !1
            };
           case 5:
            s.label++, r = o[1], o = [0];
            continue;
           case 7:
            o = s.ops.pop(), s.trys.pop();
            continue;
           default:
            if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
             s = 0;
             continue
            }
            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
             s.label = o[1];
             break
            }
            if (6 === o[0] && s.label < i[1]) {
             s.label = i[1], i = o;
             break
            }
            if (i && s.label < i[2]) {
             s.label = i[2], s.ops.push(o);
             break
            }
            i[2] && s.ops.pop(), s.trys.pop();
            continue
          }
          o = t.call(e, s)
         } catch (e) {
          o = [6, e], r = 0
         } finally {
          n = i = 0
         }
         if (5 & o[0]) throw o[1];
         return {
          value: o[0] ? o[1] : void 0,
          done: !0
         }
        }([o, a])
       }
      }
     };
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var o = n(10),
     s = n(39),
     a = n(41),
     u = n(22),
     c = n(42),
     h = n(14),
     d = n(43),
     l = n(0),
     f = n(6),
     p = n(15),
     _ = n(3),
     g = n(16),
     v = n(11),
     y = n(7),
     E = n(4),
     m = function() {
      function e() {}
      return e.prototype.createTopRecorder = function(e) {
       return new s.TopRecorder(e)
      }, e.prototype.createInnerRecorder = function(e) {
       return new a.InnerRecorder(e)
      }, e
     }();
    t.DefaultRecorderMaker = m;
    var S = function() {
     function e(e, t) {
      void 0 === e && (e = window), void 0 === t && (t = new m), this.wnd = e, this.recMaker = t, this.protocol = "https:", this.domDoneLoaded = !1, this.waitingOnStart = !1, this.reidentifyCount = 0
     }
     return e.prototype.init = function() {
      h.isLoaded(this.wnd) || (h.setLoaded(this.wnd, h.Namespace(this.wnd)), d.initWindex(this.wnd), this.initApi(), this.start())
     }, e.prototype.getCurrentSessionURL = function(e) {
      return this.recorder ? this.recorder.getCurrentSessionURL(e) : null
     }, e.prototype.getCurrentSession = function() {
      return this.recorder ? this.recorder.getCurrentSession() : null
     }, e.prototype.enableConsole = function() {
      this.recorder && this.recorder.console().enable()
     }, e.prototype.disableConsole = function() {
      this.recorder && this.recorder.console().disable()
     }, e.prototype.log = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      this.recorder && ("log" !== e && "info" !== e && "warn" !== e && "error" !== e && "debug" !== e && (t.unshift(e), e = "log"), this.recorder.console().addLog(e, t))
     }, e.prototype.shutdown = function() {
      this.recorder && !this.deferredStart ? (this.recorder.shutdown(), this.recorder = null) : l.logIfDebug("Recording already shut down.")
     }, e.prototype.restart = function() {
      if (this.deferredStart) return this.deferredStart(), void(this.deferredStart = null);
      this.recorder ? l.logIfDebug("Recording already started.") : this.recorder = this.createRecorder(!0)
     }, e.prototype.splitPage = function(e) {
      return r(this, void 0, y.FSPromise, function() {
       return i(this, function(t) {
        switch (t.label) {
         case 0:
          return e && null == this.identity ? (l.logIfDebug("Can't re-identify from an iframe"), [2]) : this.waitingOnStart ? (this.splitPending = [e], [2]) : (this.shutdown(), [4, E.wait(0)]);
         case 1:
          return t.sent(), [4, E.wait(0)];
         case 2:
          return t.sent(), e && this.identity && this.identity.clear(), this.restart(), [2]
        }
       })
      })
     }, e.prototype._api = function(e, t) {
      if (this.inFrame()) l.logIfDebug("API calls may only be made from the top-most frame");
      else if (this.recorder) {
       var n = this.vars.api(e, t),
        r = n.events,
        i = n.reidentify,
        o = n.consent;
       if (i) {
        if (this.reidentifyCount < 8) return this.reidentifyCount++, f.FS_q_push(this.wnd, [e, t]), void this.splitPage(!0);
        l.logIfDebug("reidentified too many times; giving up")
       }
       void 0 !== o && this.recorder.setConsent(o);
       for (var s = 0; s < r.length; s++) this.recorder.queue().enqueue(r[s].Kind, r[s].Args)
      } else f.FS_q_push(this.wnd, [e, t])
     }, e.prototype._cookies = function() {
      return this.identity ? this.identity.cookies() : (l.logIfDebug("Error in FS integration: Can't get cookies from inside an iframe"), null)
     }, e.prototype._setCookie = function(e, t) {
      this.identity ? this.identity.setCookie(e, t) : l.logIfDebug("Error in FS integration: Can't set cookies from inside an iframe")
     }, e.prototype.initApi = function() {
      var e = this.wnd[h.Namespace(this.wnd)];
      e.getCurrentSessionURL = l.$entry(this.getCurrentSessionURL, this), e.getCurrentSession = l.$entry(this.getCurrentSession, this), e.enableConsole = l.$entry(this.enableConsole, this), e.disableConsole = l.$entry(this.disableConsole, this), e.log = l.$entry(this.log, this), e.shutdown = l.$entry(this.shutdown, this), e.restart = l.$entry(this.restart, this), e._api = l.$entry(this._api, this), e._cookies = l.$entry(this._cookies, this), e._setCookie = l.$entry(this._setCookie, this)
     }, e.prototype.start = function() {
      var e = this;
      l.initDebug(this.wnd), l.logIfDebug("script version " + p.CompiledVersion + " (compiled at " + p.CompiledTimestamp + ")"), this.host = f._fs_host(this.wnd), this.orgId = f._fs_org(this.wnd), this.host ? this.orgId ? (l.logIfDebug("host: " + this.host), l.logIfDebug("orgid: " + this.orgId), "localhost:8080" == this.host && (this.protocol = "http:"), this.inFrame() || (this.identity = new u.Identity(this.wnd.document), this.vars = new c.Vars(this.identity), this.identity.initFromCookies(this.host, this.orgId)), this.canRecord(this.orgId) ? (this.recorder = this.createRecorder(), this.recorder.eventWatcher().watchEvents(), this.hookLoadEvents(), this.wnd.addEventListener("message", function(t) {
       if ("string" == typeof t.data) switch (o.parsePostMessageData(t.data)[0]) {
        case o.FS_SHUTDOWN_FRAME:
         e.shutdown();
         break;
        case o.FS_RESTART_FRAME:
         e.restart()
       }
      })) : this.hailMary()) : l.logIfDebug("Missing global _fs_org. Recording disabled.") : l.logIfDebug("Missing global _fs_host. Recording disabled.")
     }, e.prototype._context = function() {
      var e = this;
      return {
       window: this.wnd,
       time: new _.Timekeeper,
       options: {
        host: this.host,
        protocol: this.protocol,
        orgId: this.orgId
       },
       recording: {
        inFrame: this.inFrame(),
        vars: this.vars,
        identity: this.identity,
        splitPage: function(t) {
         return e.splitPage(t)
        }
       }
      }
     }, e.prototype.createRecorder = function(e) {
      var t, n = this,
       r = this._context();
      if (this.inFrame()) t = this.recMaker.createInnerRecorder(r);
      else {
       t = this.recMaker.createTopRecorder(r);
       for (var i = this.drainApiQueue(f.FS_q_drain(this.wnd)), s = i.events, a = i.reidentify, u = i.appId, c = i.defer, h = i.consent, d = 0, l = s; d < l.length; d++) {
        var p = l[d];
        t.queue().enqueue(p.Kind, p.Args)
       }
       void 0 !== h && t.setConsent(h)
      }
      this.waitingOnStart = !0;
      var _ = function() {
       t.start(!!a, function() {
        n.waitingOnStart = !1, e && t.tellAllFramesTo([o.FS_RESTART_FRAME]), n.splitPending && (n.splitPage.apply(n, n.splitPending), n.splitPending = null)
       }, u), e && t.eventWatcher().watchEvents()
      };
      return c ? this.deferredStart = _ : _(), t
     }, e.prototype.drainApiQueue = function(e) {
      if (!e) return {
       events: []
      };
      for (var t, n, r, i, o = [], s = 0, a = e; s < a.length; s++) {
       var u = a[s];
       "user" == u[0] && u[1] && u[1].uid && (t = c.transformValidateAppId(u[1].uid)[0]);
       var h = this.vars.api(u[0], u[1]),
        d = h.events,
        l = h.reidentify,
        f = h.recStatus,
        p = h.consent;
       f && (i = "shutdown" === f), l && (o = [], n = !0), void 0 !== p && (r = p), o.push.apply(o, d)
      }
      return {
       events: o,
       reidentify: n,
       consent: r,
       appId: t,
       defer: i
      }
     }, e.prototype.inFrame = function() {
      if ("boolean" == typeof this._inFrame) return this._inFrame;
      var e = f._fs_transport(this.wnd);
      return f._fs_is_outer_script(this.wnd) ? this._inFrame = !1 : this.wnd != top ? this._inFrame = !0 : e ? e.init && e.init(this.orgId) && (this._inFrame = !0) : this._inFrame = !1, this._inFrame
     }, e.prototype.canRecord = function(e) {
      return this.wnd.MutationEvent && this.wnd.postMessage && l._native_matchesSelector ? !! function e(t) {
       if (t == top || f._fs_is_outer_script(t) || f._fs_run_in_iframe(t) || f._fs_transport(t)) return !0;
       try {
        return t.parent.document, e(t.parent)
       } catch (e) {
        return !1
       }
      }(this.wnd) || (l.logIfDebug("Fullstory recording for this page is NOT allowed within an iFrame."), !1) : (l.logIfDebug("missing required browser features"), !1)
     }, e.prototype.hailMary = function() {
      var e = this;
      if (this.identity) {
       var t = f._fs_replay_flags(this.wnd);
       l.logIfDebug("Unable to record playback stream.");
       var n = document.createElement("script");
       this.wnd.__fs_startResponse = function(t) {
        t && e.identity.setIds(e.wnd, t.CookieDomain, t.UserIntId, t.SessionIntId), document.head.removeChild(n)
       };
       var r = g.getDocumentClientArea(this.wnd.document),
        i = r[0],
        o = r[1],
        s = l.tryGetScreenDims(this.wnd),
        a = s[0],
        u = s[1];
       n.src = "//" + l.gceHost(this.host) + "/rec/page?OrgId=" + this.orgId + "&UserId=" + this.identity.userId() + "&Url=" + encodeURIComponent(location.href) + "&Base=" + encodeURIComponent(v.baseUri(this.wnd)) + "&Width=" + i + "&Height=" + o + "&ScreenWidth=" + a + "&ScreenHeight=" + u + "&Referrer=" + encodeURIComponent(document.referrer) + "&Doctype=" + encodeURIComponent(l.doctypeString(document)) + "&CompiledTimestamp=" + p.CompiledTimestamp + "&Fallback=true" + (t ? "&ReplayFlags=" + t : ""), document.head.appendChild(n)
      }
     }, e.prototype.hookLoadEvents = function() {
      var e = this,
       t = function() {
        e.domDoneLoaded || (e.domDoneLoaded = !0, e.recorder && e.recorder.onDomLoad())
       },
       n = !1,
       r = function() {
        n || (n = !0, e.recorder && e.recorder.onLoad())
       };
      switch (document.readyState) {
       case "interactive":
        document.attachEvent || t();
        break;
       case "complete":
        t(), r()
      }
      this.domDoneLoaded || document.addEventListener("DOMContentLoaded", function(e) {
       t()
      }), n || this.wnd.addEventListener("load", function(e) {
       t(), r()
      })
     }, e
    }();
    t.Conductor = S
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(16),
     i = n(26),
     o = n(27),
     s = n(29),
     a = n(30),
     u = n(32),
     c = n(0),
     h = n(33),
     d = n(8),
     l = n(1),
     f = n(5),
     p = n(3),
     _ = n(9),
     g = n(4),
     v = function() {
      function e(e, t, n, r, l, f, p) {
       void 0 === p && (p = new h.ResourceUploader(e, t));
       var _ = this;
       this._queue = t, this._onFrameCreated = l, this._beforeFrameRemoved = f, this._resourceUploader = p, this._curSelection = [], this._scrollTimeouts = {}, this._quirks = !1, this._uploadResources = !1, this._initialized = !1, this._wnd = e.window, this._doc = this._wnd.document, this._loc = this._wnd.location, this._hst = this._wnd.history, this._listeners = r.createChild(), this._quirks = "BackCompat" == this._doc.compatMode, this._currentUrl = this._loc.href, this._inputWatcher = new i.InputWatcher(function(e) {
        _.addChangeElem(e)
       }, function(e) {
        return !!d.fsid(e)
       }), this._ajaxWatcher = new a.AjaxWatcher(e, t), this._perfWatcher = new s.PerfWatcher(e, t), this._styleSheetWatcher = new u.StyleSheetWatcher(e, t), this._mutWatcher = new o.MutationWatcher(e, n, function(e, t, n) {
        _.visitNode(e, t, n)
       }, function(e) {
        var t = e.node;
        if ("iframe" == c.tagName(e.node)) _._beforeFrameRemoved(e.node);
        else if ("function" == typeof t.getElementsByTagName)
         for (var n = t.getElementsByTagName("iframe"), r = 0; r < n.length; r++) {
          var i = n[r];
          _._beforeFrameRemoved(i)
         }
       }, function(e, t, n) {
        if (!d.isBlocked(e) && _._uploadResources)
         for (var r = E(e, t, n), i = r[0], o = r[1], s = 0, a = i; s < a.length; s++) {
          var u = a[s];
          0 == u.lastIndexOf("blob:", 0) && _._resourceUploader.uploadBlob(u, o)
         }
       })
      }
      return Object.defineProperty(e.prototype, "perfWatcher", {
       get: function() {
        return this._perfWatcher
       },
       enumerable: !0,
       configurable: !0
      }), e.prototype.watchEvents = function() {
       var e = this;
       this._mutWatcher.hookMutations(), this._inputWatcher.hookEvents(), this._styleSheetWatcher.start(), this._listeners.add(this._wnd, "mousemove", !0, function(t) {
        e.addMouseMove(t)
       }), this._listeners.add(this._wnd, "mousedown", !0, function(t) {
        e.addMouseDown(t)
       }), this._listeners.add(this._wnd, "mouseup", !0, function(t) {
        e.addMouseUp(t)
       }), this._listeners.add(this._wnd, "keydown", !0, function(t) {
        e.addKeyDown(t)
       }), this._listeners.add(this._wnd, "keyup", !0, function(t) {
        e.addKeyUp(t)
       }), this._listeners.add(this._wnd, "click", !0, function(t) {
        e.addClick(t)
       }), this._listeners.add(this._wnd, "dblclick", !0, function(t) {
        e.addDblClick(t)
       }), this._listeners.add(this._wnd, "focus", !0, function(t) {
        e.addFocus(t)
       }), this._listeners.add(this._wnd, "blur", !0, function(t) {
        e.addBlur(t)
       }), this._listeners.add(this._wnd, "change", !0, function(t) {
        e.addChange(t)
       }, !0), this._listeners.add(this._wnd, "touchstart", !0, function(t) {
        e.addTouchEvent(t, l.EVENT_TOUCHSTART), e.addWindowScrollOrResize()
       }), this._listeners.add(this._wnd, "touchend", !0, function(t) {
        e.addTouchEvent(t, l.EVENT_TOUCHEND), e.addWindowScrollOrResize()
       }), this._listeners.add(this._wnd, "touchmove", !0, function(t) {
        e.addTouchEvent(t, l.EVENT_TOUCHMOVE), e.addWindowScrollOrResize()
       }), this._listeners.add(this._wnd, "touchcancel", !0, function(t) {
        e.addTouchEvent(t, l.EVENT_TOUCHCANCEL)
       }), this._listeners.add(this._wnd, "play", !0, function(t) {
        e.addPlayPauseEvent(t, l.EVENT_PLAY)
       }), this._listeners.add(this._wnd, "pause", !0, function(t) {
        e.addPlayPauseEvent(t, l.EVENT_PAUSE)
       }), this._listeners.add(this._wnd, "scroll", !1, function(t) {
        e.addWindowScrollOrResize()
       }), this._listeners.add(this._wnd, "resize", !1, function(t) {
        e.addWindowScrollOrResize()
       }), this._listeners.add(this._wnd, "submit", !1, function(t) {
        e.addFormSubmit(t)
       }), this._listeners.add(this._wnd, "focus", !1, function(t) {
        e.addWindowFocus(t)
       }), this._listeners.add(this._wnd, "blur", !1, function(t) {
        e.addWindowBlur(t)
       }), this._listeners.add(this._wnd, "popstate", !1, function() {
        e.addNavigate()
       }), this._listeners.add(this._wnd, "selectstart", !0, function(t) {
        e.addSelection()
       }), this._listeners.add(this._doc, "selectionchange", !0, function(t) {
        e.addSelection()
       });
       var t = this._wnd.visualViewport;
       if (t ? (this._listeners.add(t, "scroll", !0, function() {
         return e.addWindowScrollOrResize()
        }), this._listeners.add(t, "resize", !0, function() {
         return e.addWindowScrollOrResize()
        })) : this._listeners.add(this._wnd, "mousewheel", !0, function() {
         e.addWindowScrollOrResize()
        }), this._pushHook = c.activateHook(this._hst, "pushState"), this._pushHook && this._pushHook.afterSync(function() {
         return e.addNavigate()
        }), this._replaceHook = c.activateHook(this._hst, "replaceState"), this._replaceHook && this._replaceHook.afterSync(function() {
         return e.addNavigate()
        }), "function" == typeof this._wnd.document.hasFocus && this._queue.enqueue(this._wnd.document.hasFocus() ? l.EVENT_WINDOW_FOCUS : l.EVENT_WINDOW_BLUR, []), g.windex.matchMedia)
        for (var n = function(t, n, i) {
          var o = g.windex.matchMedia(r._wnd, i);
          if (!o) return "continue";
          var s = function() {
           o.matches && e._queue.enqueue(l.EVENT_MEDIA_QUERY_CHANGE, [t, n])
          };
          r._listeners.add(o, "change", !0, s), s()
         }, r = this, i = 0, o = [
          ["any-pointer", "coarse", "not screen and (any-pointer: fine)"],
          ["any-pointer", "fine", "only screen and (any-pointer: fine)"],
          ["any-hover", "none", "not screen and (any-hover: hover)"],
          ["any-hover", "hover", "only screen and (any-hover: hover)"]
         ]; i < o.length; i++) {
         var s = o[i];
         n(s[0], s[1], s[2])
        }
       this._initialized = !0
      }, e.prototype.initResourceUploading = function() {
       this._resourceUploader.init(), this._uploadResources = !0
      }, e.prototype.onDomLoad = function() {
       this.addDomLoaded(), this.addViewportChange(), this._mutWatcher._checkForMissingInsertions(f.uaIsIE)
      }, e.prototype.onLoad = function() {
       var e = this;
       setTimeout(function() {
        e._perfWatcher.onLoad(), e.addLoad(), e.addViewportChange()
       }, 0)
      }, e.prototype.ajaxWatcher = function() {
       return this._ajaxWatcher
      }, e.prototype.bundleEvents = function(e) {
       return this._inputWatcher.tick(), this._perfWatcher.tick(e), this._ajaxWatcher.tick(e), this.addViewportChange(), this._mutWatcher.processMutations()
      }, e.prototype.shutdown = function() {
       this._initialized && (this._initialized = !1, this._listeners.clear(), this._pushHook && this._pushHook.disable(), this._replaceHook && this._replaceHook.disable(), this._perfWatcher.onLoad(), this._inputWatcher.shutdown(), this._mutWatcher.shutdown(), this._ajaxWatcher.disable(), this._queue.shutdown())
      }, e.prototype.recordingIsDetached = function() {
       return this._mutWatcher.recordingIsDetached()
      }, e.prototype.visitNode = function(e, t, n) {
       var r = this;
       switch (t.nodeName) {
        case "HTML":
         this._docElScrollListener && this._listeners.remove(this._docElScrollListener), this._docElScrollListener = this._listeners.add(t, "scroll", !0, function(e) {
          r.addScroll(e.target)
         });
         break;
        case "BODY":
         this.addViewportChange(), n.push(function() {
          r.addSelection()
         });
         break;
        case "INPUT":
        case "TEXTAREA":
        case "SELECT":
         this._inputWatcher.addInput(t);
         break;
        case "FRAME":
        case "IFRAME":
         this._onFrameCreated(t);
         break;
        case "VIDEO":
        case "AUDIO":
         t.paused || this.addPlayPauseEventById(d.fsid(t), l.EVENT_PLAY);
         break;
        case "STYLE":
         var i = t,
          o = i.sheet;
         if (!o) break;
         try {
          o.rules || o.cssRules
         } catch (e) {
          break
         }
         var s = u.getDynamicRuleTail(i);
         void 0 !== s && n.push(function() {
          r._styleSheetWatcher.snapshot(i, s)
         })
       }
       var a = t;
       "number" != typeof a.scrollLeft || 0 == a.scrollLeft && 0 == a.scrollTop || this.addScroll(a)
      }, e.prototype.addMouseMove = function(e) {
       var t = d.fsid(e.target) ? [e.clientX, e.clientY, d.fsid(e.target)] : [e.clientX, e.clientY];
       this._queue.enqueue(l.EVENT_MOUSEMOVE, t)
      }, e.prototype.addMouseDown = function(e) {
       this._queue.enqueue(l.EVENT_MOUSEDOWN, [e.clientX, e.clientY])
      }, e.prototype.addMouseUp = function(e) {
       this._queue.enqueue(l.EVENT_MOUSEUP, [e.clientX, e.clientY])
      }, e.prototype.addTouchEvent = function(e, t) {
       if (void 0 !== e.changedTouches)
        for (var n = 0; n < e.changedTouches.length; ++n) {
         var r = e.changedTouches[n];
         isNaN(parseInt(r.identifier)) && (r.identifier = 0), this._queue.enqueue(t, [r.identifier, r.clientX, r.clientY])
        }
      }, e.prototype.addPlayPauseEvent = function(e, t) {
       var n = e.target,
        r = d.fsid(n);
       r && this.addPlayPauseEventById(r, t)
      }, e.prototype.addPlayPauseEventById = function(e, t) {
       this._queue.enqueue(t, [e])
      }, e.prototype.addWindowFocus = function(e) {
       this._queue.enqueue(l.EVENT_WINDOW_FOCUS, [])
      }, e.prototype.addWindowBlur = function(e) {
       this._queue.enqueue(l.EVENT_WINDOW_BLUR, [])
      }, e.prototype.maybeAddValueChange = function() {
       var e = this._doc.activeElement;
       e && this._inputWatcher.onChange(e)
      }, e.prototype.addKeyDown = function(e) {
       var t = this._doc.activeElement;
       t && !d.fsidIfNotBlocked(t) || (this.maybeAddValueChange(), this._queue.enqueue(l.EVENT_KEYDOWN, []))
      }, e.prototype.addKeyUp = function(e) {
       var t = this._doc.activeElement;
       t && !d.fsidIfNotBlocked(t) || (this.maybeAddValueChange(), this._queue.enqueue(l.EVENT_KEYUP, []))
      }, e.prototype.addViewportChange = function() {
       var e = d.fsid(this.getWindowScrollingElement());
       if (e) {
        var t = r.getLayoutViewport(this._wnd, this._curLayoutViewport),
         n = r.getVisualViewport(this._wnd, t);
        t.hasKnownPosition ? (r.sameViewportPos(t, this._curLayoutViewport) || this._queue.enqueue(l.EVENT_SCROLL_LAYOUT, [e, t.pageLeft, t.pageTop]), r.sameVisualViewportOffset(n, this._curVisualViewport) || this._queue.enqueue(l.EVENT_SCROLL_VISUAL_OFFSET, [e, n.offsetLeft, n.offsetTop])) : r.sameViewportPos(n, this._curVisualViewport) || this._queue.enqueue(l.EVENT_SCROLL_LAYOUT, [e, n.pageLeft, n.pageTop]), r.sameLayoutViewportSize(t, this._curLayoutViewport) || (t.width == t.clientWidth && t.height == t.clientHeight ? this._queue.enqueue(l.EVENT_RESIZE_LAYOUT, [t.clientWidth, t.clientHeight]) : this._queue.enqueue(l.EVENT_RESIZE_LAYOUT, [t.clientWidth, t.clientHeight, t.width, t.height])), r.sameViewportSize(n, this._curVisualViewport) || this._queue.enqueue(l.EVENT_RESIZE_VISUAL, [n.width, n.height]), this._curLayoutViewport = r.createLayoutViewportLike(t), this._curVisualViewport = r.createVisualViewportLike(n)
       }
      }, e.prototype.doWorkInScrollTimeout = function(e, t) {
       var n = this;
       e in this._scrollTimeouts || (this._scrollTimeouts[e] = t, new p.RealTimeout(function() {
        if (e in n._scrollTimeouts) {
         var t = n._scrollTimeouts[e];
         delete n._scrollTimeouts[e], t()
        }
       }, _.ScrollSampleInterval).start())
      }, e.prototype._fireScrollTimeouts = function() {
       for (var e in this._scrollTimeouts) this._scrollTimeouts[e](), delete this._scrollTimeouts[e];
       this._scrollTimeouts = []
      }, e.prototype.getWindowScrollingElement = function() {
       return this._doc.scrollingElement || this._doc.body || this._doc.documentElement
      }, e.prototype.addWindowScrollOrResize = function() {
       var e = this,
        t = d.fsid(this.getWindowScrollingElement());
       t && this.doWorkInScrollTimeout(t, function() {
        return e.addViewportChange()
       })
      }, e.prototype.addScroll = function(e) {
       var t = this,
        n = d.fsid(e),
        r = e;
       n && "number" == typeof r.scrollLeft && this.doWorkInScrollTimeout(n, function() {
        t._queue.enqueue(l.EVENT_SCROLL_LAYOUT, [n, r.scrollLeft, r.scrollTop])
       })
      }, e.prototype.addDomLoaded = function() {
       this._queue.enqueue(l.EVENT_DOMLOADED, [])
      }, e.prototype.addLoad = function() {
       this._queue.enqueue(l.EVENT_LOAD, [])
      }, e.prototype.addNavigate = function() {
       var e = this._loc.href;
       this._currentUrl != e && (this._currentUrl = e, this._queue.enqueue(l.EVENT_NAVIGATE, [this._loc.href, this._doc.title]))
      }, e.prototype.addClick = function(e) {
       var t = e.target,
        n = d.fsid(t);
       if (n) {
        var r = 0,
         i = 0,
         o = 0,
         s = 0;
        if (t && t.getBoundingClientRect) {
         var a = t.getBoundingClientRect();
         r = a.left, i = a.top, o = a.width, s = a.height
        }
        this._queue.enqueue(l.EVENT_CLICK, [n, e.clientX, e.clientY, r, i, o, s])
       }
      }, e.prototype.addDblClick = function(e) {
       var t = e.target,
        n = d.fsid(t);
       n && this._queue.enqueue(l.EVENT_DBL_CLICK, [n])
      }, e.prototype.addFormSubmit = function(e) {
       var t = e.target,
        n = d.fsid(t);
       n && this._queue.enqueue(l.EVENT_FORM_SUBMIT, [n])
      }, e.prototype.addFocus = function(e) {
       var t = e.target,
        n = d.fsid(t);
       n && this._queue.enqueue(l.EVENT_FOCUS, [n])
      }, e.prototype.addBlur = function(e) {
       var t = e.target,
        n = d.fsid(t);
       n && this._queue.enqueue(l.EVENT_BLUR, [n])
      }, e.prototype.addChange = function(e) {
       this._inputWatcher.onChange(e.target)
      }, e.prototype.addChangeElem = function(e) {
       var t = d.fsidIfNotBlocked(e);
       t && this._queue.enqueue(l.EVENT_VALUECHANGE, [t, i.valueOfInputishElem(e)])
      }, e.prototype.addSelection = function() {
       try {
        var e = this.selectionArgs()
       } catch (e) {
        return
       }
       for (var t = !1, n = 0; n < 4; n++)
        if (this._curSelection[n] !== e[n]) {
         t = !0;
         break
        }
       t && (this._curSelection = e, this._queue.enqueue(l.EVENT_SELECT, e))
      }, e.prototype.selectionArgs = function() {
       if (!this._wnd.getSelection) return [];
       var e = this._wnd.getSelection();
       if (!e) return [];
       if ("None" == e.type) return [];
       if ("Caret" == e.type) {
        var t = d.fsid(e.anchorNode);
        return t ? [t, e.anchorOffset] : []
       }
       if (!e.anchorNode || !e.focusNode) return [];
       var n = y(e.anchorNode, e.anchorOffset),
        r = n[0],
        i = n[1],
        o = y(e.focusNode, e.focusOffset),
        s = o[0],
        a = o[1],
        u = Boolean(r.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING),
        h = u ? [r, s] : [s, r],
        l = h[0],
        f = h[1],
        p = u ? [i, a] : [a, i],
        _ = p[0],
        g = p[1];
       for (d.fsid(l) || (_ = 0); l && !d.fsid(l) && l != f;) l = c.nextSibling(l) || l.parentNode;
       for (d.fsid(f) || (g = 0); f && !d.fsid(f) && f != l;) f = c.previousSibling(f) || f.parentNode;
       if (l == f && _ == g) return [];
       var v = d.fsid(l),
        E = d.fsid(f);
       return l && f && v && E ? [v, _, E, g, u] : []
      }, e
     }();
   
    function y(e, t) {
     if (!e.firstChild) return [e, t];
     e = e.firstChild;
     for (var n = 0; n < t - 1; n++) {
      var r = c.nextSibling(e);
      if (!r) return [e, 0];
      e = r
     }
     return [e, 0]
    }
   
    function E(e, t, n) {
     var r, i = c.tagName(e);
     return ("img" == i || "embed" == i) && "src" == t || ("use" == i || "image" == i) && "href" == t || "object" == i && "data" == t ? [
      [n], !1
     ] : "link" == i && "href" == t && (r = e.getAttribute("rel")) && r.indexOf("stylesheet") > -1 ? [
      [n], !0
     ] : "srcset" != t || "img" != i && "source" != i ? [
      [], !1
     ] : null != n.match(/^\s*$/) ? [
      [], !1
     ] : [c.map(n.split(","), function(e) {
      return c.trim(e).split(/\s+/)[0]
     }), !1]
    }
    t.EventWatcher = v, t.getResourceUrls = E
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(8),
     i = n(3),
     o = n(0),
     s = function() {
      function e(e, t) {
       this._onchange = e, this._checkElem = t, this._fallback = !1, this._elems = {}, this.values = {}, a = this
      }
      return e.prototype.hookEvents = function() {
       (function() {
        var e = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
        if (!e || !e.set) return !1;
        u || (l(HTMLInputElement, "value"), l(HTMLInputElement, "checked"), l(HTMLSelectElement, "value"), l(HTMLTextAreaElement, "value"), u = !0);
        return !0
       })() || (this._fallback = !0)
      }, e.prototype.addInput = function(e) {
       var t = r.fsid(e);
       this._elems[t] = e, this.values[t] = f(e),
        function(e) {
         switch (e.type) {
          case "checkbox":
          case "radio":
           return e.checked != e.hasAttribute("checked");
          default:
           var t = e.value || "";
           return t != function(e) {
            if ("select" != o.tagName(e)) return e.getAttribute("value") || "";
            var t = e,
             n = t.querySelector("option[selected]") || t.querySelector("option");
            if (!n) return "";
            return n.value || ""
           }(e)
         }
        }(e) && this._onchange(e)
      }, e.prototype.onChange = function(e, t) {
       void 0 === t && (t = f(e));
       var n = r.fsid(e);
       (e = this._elems[n]) && t != this.values[n] && (this._onchange(e), this.values[n] = t)
      }, e.prototype.tick = function() {
       for (var e in this._elems)
        if (this._checkElem(this._elems[e])) {
         if (this._fallback) {
          var t = this._elems[e],
           n = f(t);
          n != this.values[e] && (this._onchange(t), this.values[e] = n)
         }
        } else delete this._elems[e], delete this.values[e]
      }, e.prototype.shutdown = function() {
       a = null
      }, e.prototype._usingFallback = function() {
       return this._fallback
      }, e.prototype._trackingElem = function(e) {
       return !!this._elems[e]
      }, e
     }();
    t.InputWatcher = s;
    var a, u = !1;
    var c, h = {};
   
    function d() {
     try {
      if (a)
       for (var e in h) {
        var t = h[e],
         n = t[0],
         r = t[1];
        a.onChange(n, r)
       }
     } finally {
      c = null
     }
    }
   
    function l(e, t) {
     var n = Object.getOwnPropertyDescriptor(e.prototype, t);
     n && Object.defineProperty(e.prototype, t, {
      set: function(e) {
       var t = r.fsid(this);
       return t && a && a.values[t] != e && (h[t] = [this, e], c || (c = new i.RealTimeout(d)).start()), n.set.call(this, e)
      },
      get: function() {
       return n.get && n.get.call(this)
      }
     })
    }
   
    function f(e) {
     switch (e.type) {
      case "checkbox":
      case "radio":
       return "" + e.checked;
      default:
       var t = e.value;
       return t || (t = ""), "" + t
     }
    }
    t.valueOfInputishElem = f
   }, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || Object.assign || function(e) {
     for (var t, n = 1, r = arguments.length; n < r; n++)
      for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
     return e
    };
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var i = n(8),
     o = n(28),
     s = n(0),
     a = n(3),
     u = n(13),
     c = n(5),
     h = n(1),
     d = n(2),
     l = function() {
      function e(e, t, n, r, o) {
       void 0 === n && (n = function() {}), void 0 === r && (r = function() {}), void 0 === o && (o = function() {});
       var s = this;
       this._ctx = e, this._watcher = t, this._nodeVisitor = n, this._beforeRemove = r, this._attrVisitor = o, this._sentDomSnapshot = !1, this._toRefresh = [], this._records = [], this._watchedDims = {}, this._setPropertyWasThrottled = !1, this._wnd = e.window, this._encoder = new i.NodeEncoder(t), d.assert(!this._watcher.onConsentChange, "This is the only consent change listener."), this._watcher.onConsentChange = function() {
        return s.updateConsent()
       }
      }
      return e.prototype.hookMutations = function(e) {
       var t = this;
       void 0 === e && (e = this._wnd.document), this._root = e, this._sentDomSnapshot = !1, this._lz = new o.LZJGWEncoder, c.uaIsIE && this.setUpIEWorkarounds(), this._observer = new MutationObserver(function(e) {
        for (var n = 0, r = e; n < r.length; n++) {
         var i = r[n];
         t._records.push(i)
        }
       })
      }, e.prototype._observerOff = function() {
       this._observer && this._observer.disconnect()
      }, e.prototype.shutdown = function() {
       this._observer && this._observer.disconnect();
       var e = i.mirrorFor(this._root);
       e && i.clearIds(e), this._records = [], c.uaIsIE && this.tearDownIEWorkarounds(), this._watcher.onConsentChange = null
      }, e.prototype.processMutations = function() {
       if (!this._root) return [];
       var e = this._ctx.time.now(),
        t = [];
       if (this.maybeGetInitialSnapshot(e, t), this._setPropertyWasThrottled && (t.push({
         Kind: h.EVENT_FAIL_THROTTLED,
         When: e,
         Args: [h.ThrottledSetPropertyHooks]
        }), this._setPropertyWasThrottled = !1), 0 == this._records.length && 0 == this._toRefresh.length) return t;
       var n = {},
        r = {};
       for (var i in this.processRecords(e, t, r, n), r) {
        var o = i.split(":");
        t.push({
         Kind: h.EVENT_MUT_ATTR,
         When: e,
         Args: [parseInt(o[0]), o[1], r[i]]
        })
       }
       for (var i in n) t.push({
        Kind: h.EVENT_MUT_TEXT,
        When: e,
        Args: [parseInt(i), n[i]]
       });
       return this._records = [], t
      }, e.prototype.recordingIsDetached = function() {
       return this._root && this._root != this._wnd.document
      }, e.prototype.maybeGetInitialSnapshot = function(e, t) {
       this._sentDomSnapshot || (this.genInsert(e, t, null, this._root, null), this.resizeRelatedWatchedElements(e, t, this._root), this._observer.observe(this._root, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
        attributeOldValue: !0,
        characterDataOldValue: !0
       }), this._sentDomSnapshot = !0)
      }, e.prototype.processRecords = function(e, t, n, r) {
       for (var o = this, s = {}, a = {}, c = function(n) {
         if (i.mirrorFor(n)) {
          o.genRemove(e, t, i.mirrorFor(n));
          var r = i.mirrorFor(n.parentNode);
          r && (a[r.id] = r.node)
         }
        }, h = 0; h < this._records.length; ++h) try {
        var l = this._records[h],
         f = i.fsid(l.target);
        if (!f) continue;
        switch (s[f] = l.target, l.type) {
         case "childList":
          if (l.removedNodes.length > 0)
           for (var p = 0; p < l.removedNodes.length; ++p) {
            var _ = i.mirrorFor(l.removedNodes[p]);
            _ && _.id && this.genRemove(e, t, _)
           }
          l.addedNodes.length > 0 && (a[f] = l.target);
          break;
         case "characterData":
          var g = i.safeTextContent(l.target);
          l.oldValue != g && (i.isBlocked(l.target) || (r[f] = g));
          break;
         case "attributes":
          var v = l.target,
           y = this._watcher.isWatched(v);
          if (y && y != u.WatchKindWatch && !i.isBlocked(v)) {
           c(v);
           break
          }
          var E = l.attributeName || "",
           m = i.fixAttrName(E);
          if (v.hasAttribute(E)) {
           var S = l.target.getAttribute(E);
           l.oldValue != S && (S = this.rewriteAttr(l.target, m, S || ""), this._attrVisitor(l.target, m, S || ""), null !== S && (n[f + ":" + m] = S))
          } else n[f + ":" + m] = null
        }
       } catch (e) {}
       for (var T = 0, w = this._toRefresh; T < w.length; T++) {
        var b = w[T];
        try {
         c(b)
        } catch (e) {
         d.FsBugSnag.sendToBugsnag(e, "error")
        }
       }
       for (var I in this._toRefresh = [], a) {
        var N = a[I],
         O = i.mirrorFor(N);
        O && O.id && this.diff(e, t, N, O.child, N.firstChild)
       }
       for (var I in s) {
        N = s[I];
        this.resizeRelatedWatchedElements(e, t, N)
       }
      }, e.prototype._checkForMissingInsertions = function(e) {
       if (!this._sentDomSnapshot || !e) return [];
       return this.walkAddRecords(this._root), []
      }, e.prototype.walkAddRecords = function(e) {
       var t = this;
       i.fsid(e) ? s.forEachNextSibling(e.firstChild, function(e) {
        t.walkAddRecords(e)
       }) : this._records.push({
        addedNodes: [e],
        attributeName: null,
        attributeNamespace: null,
        nextSibling: e.nextSibling,
        oldValue: null,
        previousSibling: e.previousSibling,
        removedNodes: [],
        target: e.parentNode,
        type: "childList"
       })
      }, e.prototype.diff = function(e, t, n, r, o) {
       for (var a = [], u = r, c = o; u && c;) {
        var h = i.mirrorFor(c);
        i.fsid(c) ? h && u.id == h.id ? (u = u.next, c = s.nextSibling(c)) : (a.push({
         remove: u
        }), u = u.next) : (a.push({
         insert: [n, c, u.node]
        }), c = s.nextSibling(c))
       }
       for (; u; u = u.next) a.push({
        remove: u
       });
       s.forEachNextSibling(c, function(e) {
        a.push({
         insert: [n, e, null]
        })
       });
       for (var l = !1, f = 0; f < a.length; f++) {
        var p = a[f];
        p.insert ? this.genInsert(e, t, p.insert[0], p.insert[1], p.insert[2]) : p.remove && (l = !0, this.genRemove(e, t, p.remove))
       }
       d.assert(!l, "All remove events should have been generated earlier, in MutationWatcher.processMutations")
      }, e.prototype.resizeRelatedWatchedElements = function(e, t, n) {
       var r = i.mirrorFor(n);
       if (r)
        for (var o = [r], a = 0; o.length && ++a < 1e3;) {
         var u = o.pop();
         null != (c = i.watchKind(u.node)) ? this.addPlaceholderResize(e, t, u.node, c) : u.watchedChildSet && s.forIn(u.watchedChildSet, function(e) {
          o.push(e)
         })
        } else {
         for (var c, h = n; h && !i.fsid(h);) h = h.parentNode;
         if (h) null != (c = i.watchKind(h)) && this.addPlaceholderResize(e, t, h, c)
        }
      }, e.prototype.addPlaceholderResize = function(e, t, n, r) {
       try {
        var o = n.getBoundingClientRect(),
         s = Math.floor(o.width),
         a = Math.floor(o.height),
         c = i.fsid(n),
         d = this._watchedDims[c];
        if (d && d.w == s && d.h == a) return;
        if (r == u.WatchKindWatch) {
         var l = !!d && 0 != d.w && 0 != d.h,
          f = 0 != s && 0 != a;
         l != f && t.push({
          When: e,
          Kind: h.EVENT_WATCHED_ELEM,
          Args: [c, f]
         })
        } else t.push({
         When: e,
         Kind: h.EVENT_PLACEHOLDER_SIZE,
         Args: [c, s, a]
        });
        this._watchedDims[c] = {
         w: s,
         h: a
        }
       } catch (e) {}
      }, e.prototype.genInsert = function(e, t, n, r, o) {
       var s = this;
       if (n && i.isBlocked(n)) return null;
       var a = i.fsid(n) || -1,
        u = i.fsid(o) || -1,
        c = [],
        d = this._encoder.tokenizeNode(n, o, r, function(t) {
         s._nodeVisitor(e, t, c)
        }, function(e, t, n) {
         s._attrVisitor(e, t, n)
        });
       d.length > 0 && t.push({
        When: e,
        Kind: h.EVENT_MUT_INSERT,
        Args: [a, u, this._lz.encode(d)]
       });
       for (var l = 0, f = c; l < f.length; l++) {
        (0, f[l])()
       }
      }, e.prototype.genRemove = function(e, t, n) {
       var r = n.id;
       if (this._beforeRemove(n), i.removeMirror(n), t.length > 0) {
        var o = t[t.length - 1];
        if (o.Kind == h.EVENT_MUT_REMOVE) return void o.Args.push(r)
       }
       t.push({
        When: e,
        Kind: h.EVENT_MUT_REMOVE,
        Args: [r]
       })
      }, e.prototype.rewriteAttr = function(e, t, n) {
       return i.isBlocked(e) ? i.rewriteBlockedAttribute(e, t, n) : n
      }, e.prototype.setUpIEWorkarounds = function() {
       var t = this;
       if (c.uaIsIE11) {
        var n = Object.getOwnPropertyDescriptor(Node.prototype, "textContent"),
         i = n.set;
        Object.defineProperty(Element.prototype, "textContent", r({}, n, {
         set: function(e) {
          try {
           for (var t = void 0; t = this.firstChild;) this.removeChild(t);
           if (null === e || "" == e) return;
           var n = (this.ownerDocument || document).createTextNode(e);
           this.appendChild(n)
          } catch (e) {
           i && i.apply(this, arguments)
          }
         }
        }))
       }
       this._setPropertyThrottle = new a.Throttle(e.ThrottleMax, e.ThrottleInterval, function() {
        return new a.RealTimeout(function() {
         t._setPropertyWasThrottled = !0, t.tearDownIEWorkarounds()
        }).start()
       });
       var o = this._setPropertyThrottle.guard(function(e) {
        return e.cssText = e.cssText
       });
       this._setPropertyThrottle.open(), this._setPropertyHook = s.activateHook(CSSStyleDeclaration.prototype, "setProperty"), this._setPropertyHook && this._setPropertyHook.afterSync(function() {
        o(this)
       }), this._removePropertyHook = s.activateHook(CSSStyleDeclaration.prototype, "removeProperty"), this._removePropertyHook && this._removePropertyHook.afterSync(function() {
        o(this)
       })
      }, e.prototype.tearDownIEWorkarounds = function() {
       this._setPropertyThrottle && this._setPropertyThrottle.close(), this._setPropertyHook && this._setPropertyHook.disable(), this._removePropertyHook && this._removePropertyHook.disable()
      }, e.prototype.updateConsent = function() {
       for (var e = this._watcher.allConsentSensitiveElements(this._root), t = 0; t < e.length; t++) i.fsid(e[t]) && this._toRefresh.push(e[t])
      }, e.ThrottleMax = 1024, e.ThrottleInterval = 1e4, e
     }();
    t.MutationWatcher = l
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = function() {
     function e() {
      this.dict = {
       idx: -1,
       map: {}
      }, this.nodeCount = 1, this.startIdx = 0
     }
     return e.prototype.encode = function(t) {
      if (0 == t.length) return [];
      var n, r, i = t[0],
       o = Object.prototype.hasOwnProperty.call(this.dict.map, i) ? this.dict.map[i] : null,
       s = [],
       a = 1;
   
      function u() {
       o ? a > 1 ? s.push([o.idx, a]) : s.push(o.idx) : s.push(i)
      }
      for (n = 1; n < t.length; n++)
       if (r = t[n], o && Object.prototype.hasOwnProperty.call(o.map, r)) a++, i = r, o = o.map[r];
       else {
        u();
        var c = this.startIdx + n - a;
        null == o && this.nodeCount < e.MAX_NODES && (o = {
         idx: c,
         map: {}
        }, this.dict.map[i] = o, this.nodeCount++), o && this.nodeCount < e.MAX_NODES && (o.map[r] = {
         idx: c,
         map: {}
        }, this.nodeCount++), a = 1, i = r, o = Object.prototype.hasOwnProperty.call(this.dict.map, r) ? this.dict.map[r] : null
       }
      return u(), this.startIdx += t.length, s
     }, e.MAX_NODES = 1e4, e
    }();
    t.LZJGWEncoder = r;
    var i = function() {
     function e() {
      this._seq = []
     }
     return e.prototype.sequence = function() {
      return this._seq
     }, e.prototype.decode = function(e) {
      for (var t = this._seq.length, n = 0; n < e.length; ++n) {
       var r = e[n];
       switch (typeof r) {
        case "string":
         this._seq.push(r);
         break;
        case "number":
         this._seq.push(this._seq[r]);
         break;
        case "object":
         if (null == r) {
          this._seq.push("");
          break
         }
         for (var i = 0; i < r[1]; i++) this._seq.push(this._seq[r[0] + i])
       }
      }
      return t
     }, e
    }();
    t.LZJGWDecoder = i
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(1),
     i = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"],
     o = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "unloadEventStart", "unloadEventEnd", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "type", "redirectCount", "decodedBodySize", "encodedBodySize", "transferSize"],
     s = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "decodedBodySize", "encodedBodySize", "transferSize"],
     a = ["name", "startTime", "duration"],
     u = ["jsHeapSizeLimit", "totalJSHeapSize", "usedJSHeapSize"],
     c = function() {
      function e(e, t) {
       this._ctx = e, this._queue = t, this._perfSupported = !1, this._timingSupported = !1, this._getEntriesSupported = !1, this._memorySupported = !1, this._lastPerfCount = 0, this._lastUsedJSHeapSize = 0, this._gotLoad = !1, window.performance && (this._perfSupported = !0, window.performance.timing && (this._timingSupported = !0), window.performance.memory && (this._memorySupported = !0), "function" == typeof window.performance.getEntries && (this._getEntriesSupported = !0), e.recording.inFrame || this._queue.enqueue(r.EVENT_REC_FEAT_SUPPORTED, [r.RecFeaturePerformance, this._timingSupported, r.RecFeaturePerformanceEntries, this._getEntriesSupported, r.RecFeaturePerformanceMemory, this._memorySupported]), this.checkMemory())
      }
      return e.prototype.onLoad = function() {
       this._gotLoad || (this._gotLoad = !0, this._timingSupported && (this.recordTiming(performance.timing), this.checkForNewEntries()))
      }, e.prototype.tick = function(e) {
       this.checkMemory(), e && this.checkForNewEntries()
      }, e.prototype.checkMemory = function() {
       if (this._memorySupported && !this._ctx.recording.inFrame) {
        var e = performance.memory,
         t = e.usedJSHeapSize - this._lastUsedJSHeapSize;
        (0 == this._lastUsedJSHeapSize || Math.abs(t / this._lastUsedJSHeapSize) > .2) && (this.addPerfEvent(r.PerfEntryMemory, e, u), this._lastUsedJSHeapSize = e.usedJSHeapSize)
       }
      }, e.prototype.checkForNewEntries = function() {
       if (this._perfSupported && this._getEntriesSupported) {
        var e = performance.getEntries();
        if (e.length > this._lastPerfCount) {
         for (; this._lastPerfCount < e.length; this._lastPerfCount++) {
          var t = e[this._lastPerfCount];
          switch (t.entryType) {
           case "navigation":
            this.recordNavigation(t);
            break;
           case "resource":
            this.recordResource(t);
            break;
           case "paint":
            this.recordPaint(t);
            break;
           case "measure":
            this.recordMeasure(t);
            break;
           case "mark":
            this.recordMark(t)
          }
         }
         this._lastPerfCount = e.length
        }
       }
      }, e.prototype.recordTiming = function(e) {
       this.addPerfEvent(r.PerfEntryTiming, e, i)
      }, e.prototype.recordNavigation = function(e) {
       this.addPerfEvent(r.PerfEntryNavigation, e, o)
      }, e.prototype.recordResource = function(e) {
       this.addPerfEvent(r.PerfEntryResource, e, s)
      }, e.prototype.recordPaint = function(e) {
       this.addPerfEvent(r.PerfEntryPaint, e, a)
      }, e.prototype.recordMark = function(e) {
       this.addPerfEvent(r.PerfEntryMark, e, a)
      }, e.prototype.recordMeasure = function(e) {
       this.addPerfEvent(r.PerfEntryMeasure, e, a)
      }, e.prototype.addPerfEvent = function(e, t, n) {
       for (var i = [e], o = 0, s = n; o < s.length; o++) {
        var a = t[s[o]];
        void 0 === a && (a = -1), i.push(a)
       }
       this._queue.enqueue(r.EVENT_PERF_ENTRY, i)
      }, e
     }();
    t.PerfWatcher = c
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(0),
     i = n(19),
     o = n(11),
     s = n(1),
     a = n(31),
     u = n(9),
     c = n(4),
     h = "\r\n",
     d = ["a-im", "accept", "accept-charset", "accept-encoding", "accept-language", "accept-datetime", "access-control-request-method,", "access-control-request-headers", "cache-control", "connection", "content-length", "content-md5", "content-type", "date", "expect", "forwarded", "from", "host", "if-match", "if-modified-since", "if-none-match", "if-range", "if-unmodified-since", "max-forwards", "origin", "pragma", "range", "referer", "te", "user-agent", "upgrade", "via", "warning"],
     l = ["access-control-allow-origin", "access-control-allow-credentials", "access-control-expose-headers", "access-control-max-age", "access-control-allow-methods", "access-control-allow-headers", "accept-patch", "accept-ranges", "age", "allow", "alt-svc", "cache-control", "connection", "content-disposition", "content-encoding", "content-language", "content-length", "content-location", "content-md5", "content-range", "content-type", "date", "delta-base", "etag", "expires", "im", "last-modified", "link", "location", "permanent", "p3p", "pragma", "proxy-authenticate", "public-key-pins", "retry-after", "permanent", "server", "strict-transport-security", "trailer", "transfer-encoding", "tk", "upgrade", "vary", "via", "warning", "www-authenticate", "x-frame-options"],
     f = function() {
      function e(e, t) {
       var n = this;
       this._ctx = e, this._queue = t, this._enabled = !1, this._reqHeaderWhitelist = {}, this._rspHeaderWhitelist = {}, this._pendingReqs = {}, this._events = [], this._curId = 1, this._resolver = new o.UrlResolver, d.forEach(function(e) {
        return n._reqHeaderWhitelist[e] = !0
       }), l.forEach(function(e) {
        return n._rspHeaderWhitelist[e] = !0
       })
      }
      return e.prototype.isEnabled = function() {
       return this._enabled
      }, e.prototype.enable = function() {
       this._enabled || (this._enabled = !0, this._queue.enqueue(s.EVENT_REC_FEAT_SUPPORTED, [s.RecFeatureAjax, !0]), this.maybeShimXHR(this._ctx.window))
      }, e.prototype.disable = function() {
       this._enabled && (this._enabled = !1, this._xhrOpenHook && (this._xhrOpenHook.disable(), this._xhrOpenHook = null), this._xhrSetHeaderHook && (this._xhrSetHeaderHook.disable(), this._xhrSetHeaderHook = null))
      }, e.prototype.setWatches = function(e) {
       var t = this,
        n = [];
       this._reqWhitelist = [], this._rspWhitelist = [], e.forEach(function(e) {
        n.push(e.URLRegex), t._reqWhitelist.push(b(e.RecordReq, e.ReqWhitelist)), t._rspWhitelist.push(b(e.RecordRsp, e.RspWhitelist))
       }), this._reqBodyRegex = function(e) {
        return new RegExp("(" + e.join(")|(") + ")")
       }(n)
      }, e.prototype.addHeaderWhitelist = function(e, t) {
       var n = this;
       e.forEach(function(e) {
        return n._reqHeaderWhitelist[e] = !0
       }), t.forEach(function(e) {
        return n._rspHeaderWhitelist[e] = !0
       })
      }, e.prototype.tick = function(e) {
       if (e) {
        for (var t = 0; t < this._events.length; t++) this._queue.enqueue(s.EVENT_AJAX_REQUEST, this._events[t]);
        this._events = []
       }
      }, e.prototype.maybeShimXHR = function(e) {
       var t = this,
        n = e.XMLHttpRequest;
       if (n) {
        var i = n.prototype;
        this._xhrOpenHook = r.activateHook(i, "open"), this._xhrOpenHook && this._xhrOpenHook.before(function(e) {
         var n = e.args[0],
          r = e.args[1];
         t.addPendingReq(e.that, n, r), e.that.addEventListener("load", function(n) {
          t.onComplete(e.that)
         }), e.that.addEventListener("error", function(n) {
          t.onComplete(e.that)
         })
        }), this._xhrSendHook = r.activateHook(i, "send"), this._xhrSendHook && this._xhrSendHook.before(function(e) {
         var n = e.args[0];
         t.maybeRecordReqBody(e.that, n)
        }), this._xhrSetHeaderHook = r.activateHook(i, "setRequestHeader"), this._xhrSetHeaderHook && this._xhrSetHeaderHook.before(function(e) {
         var n = e.args[0],
          r = e.args[1];
         t.addHeader(e.that, n, r)
        })
       }
      }, e.prototype.pendingReq = function(e) {
       var t = T(e);
       return t ? this._pendingReqs[t] : (r.logIfDebug("missing xhr req id"), null)
      }, e.prototype.deletePending = function(e) {
       var t = T(e);
       t && delete this._pendingReqs[t]
      }, e.prototype.maybeRecordReqBody = function(e, t) {
       var n, r = this.pendingReq(e);
       if (!r) return null;
       n = this.requestBody(r.url, t), r.reqSize = n[0], r.reqBody = n[1]
      }, e.prototype.addPendingReq = function(e, t, n) {
       this.deletePending(e);
       var r = this._curId++;
       n = this._resolver.resolveToDocument(this._ctx.window, n), this._pendingReqs[r] = {
         id: r,
         xhr: e,
         method: t,
         url: n,
         startTime: Date.now(),
         headers: [],
         reqSize: 0,
         reqBody: void 0
        },
        function(e, t) {
         e._fs = t
        }(e, r)
      }, e.prototype.addHeader = function(e, t, n) {
       var r = this.pendingReq(e);
       r && r.headers.push([t, n])
      }, e.prototype.onComplete = function(e) {
       var t = this,
        n = this.pendingReq(e);
       if (n) {
        this.deletePending(e);
        var r = Date.now() - n.startTime,
         i = N(n.headers, function(e) {
          return e[0] in t._reqHeaderWhitelist
         }),
         o = N(I(e.getAllResponseHeaders()), function(e) {
          return e[0] in t._rspHeaderWhitelist
         }),
         s = this.responseBody(n.url, e),
         a = s[0],
         u = s[1],
         c = [n.method, n.url, r, e.status, i, o, n.startTime, n.reqSize, a];
        c.push(n.reqBody ? n.reqBody : null), c.push(u || null), this._events.push(c)
       }
      }, e.prototype.findWhitelistIndexFor = function(e) {
       if (this._reqBodyRegex) {
        var t = this._reqBodyRegex.exec(e);
        if (t)
         for (var n = 1; n < t.length; n++)
          if (void 0 !== t[n]) return n - 1
       }
       return -1
      }, e.prototype.requestBody = function(e, t) {
       if (null == t) return [0, void 0];
       var n = this.findWhitelistIndexFor(e),
        r = n >= 0 && this._reqWhitelist[n],
        i = typeof t;
       if ("string" == i) return p(t, r);
       if ("object" == i) {
        var o = i.constructor;
        switch (o) {
         case String:
         case Object:
         default:
          return _(t, r);
         case Blob:
          return v(t, r);
         case ArrayBuffer:
          return g(t, r);
         case Document:
         case FormData:
         case URLSearchParams:
         case ReadableStream:
          return [-1, r ? "" + o.name : void 0]
        }
       }
       return [-1, r ? "[unknown]" : void 0]
      }, e.prototype.responseBody = function(e, t) {
       var n = this.findWhitelistIndexFor(e),
        r = n >= 0 && this._rspWhitelist[n];
       if (t.responseType) switch (t.responseType) {
        case "json":
        case "text":
         return y(t.responseText, r);
        case "arraybuffer":
         return m(t.response, r);
        case "blob":
         return S(t.response, r);
        case "document":
         return E(t.responseText, r)
       }
       return y(t.responseText, r)
      }, e
     }();
   
    function p(e, t) {
     return [e.length, w(e, t)]
    }
   
    function _(e, t) {
     var n = void 0;
     !1 !== t && (n = a.whitelistedJson(e, u.MaxPayloadLength, t));
     var r = 0;
     try {
      r = c.windex.jsonStringify(e).length
     } catch (e) {}
     return [r, n]
    }
   
    function g(e, t) {
     var n = e.byteLength,
      r = void 0;
     return t && (r = "[ArrayBuffer]"), [n, r]
    }
   
    function v(e, t) {
     var n = e.size,
      r = void 0;
     return t && (r = "[Blob]"), [n, r]
    }
   
    function y(e, t) {
     return [e.length, w(e, t)]
    }
   
    function E(e, t) {
     return [e.length, t ? "[Document]" : void 0]
    }
   
    function m(e, t) {
     return [e.byteLength, t ? "[ArrayBuffer]" : void 0]
    }
   
    function S(e, t) {
     return [e.size, t ? "[Blob]" : void 0]
    }
   
    function T(e) {
     return e._fs
    }
   
    function w(e, t) {
     if (0 != t) try {
      return a.whitelistedJson(c.windex.jsonParse(e), u.MaxPayloadLength, t)
     } catch (n) {
      return 1 == t ? e.slice(0, u.MaxPayloadLength) : void 0
     }
    }
   
    function b(e, t) {
     switch (e) {
      default:
       case s.AjaxBodyElide:
       return !1;
      case s.AjaxBodyRecord:
        return !0;
      case s.AjaxBodyWhitelist:
        try {
        return i.parseFieldPatterns(t)
       } catch (e) {
        return r.logIfDebug("error parsing field whitelist (" + t + ": " + e), !1
       }
     }
    }
   
    function I(e) {
     var t = [];
     return e.split(h).forEach(function(e) {
      var n = e.indexOf(":"); - 1 != n ? t.push([e.slice(0, n).trim(), e.slice(n + 1, e.length).trim()]) : t.push([e.trim(), null])
     }), t
    }
   
    function N(e, t) {
     var n = "";
     return e.forEach(function(e) {
      e[0] = e[0].toLowerCase();
      var r = t(e);
      n += e[0] + (r ? ": " + e[1] : "") + h
     }), n
    }
    t.AjaxWatcher = f, t._reqBodyString = p, t._reqBodyObject = _, t._reqBodyArrayBuffer = g, t._reqBodyBlob = v, t._rspBodyText = y, t._rspBodyDocument = E, t._rspBodyArrayBuffer = m, t._rspBodyBlob = S, t.parseHeaders = I
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(19),
     i = n(4),
     o = r.parseFieldPatterns("**");
    t.whitelistedJson = function(e, t, n) {
     var r;
     if (0 != n) {
      r = 1 == n ? o : n;
      try {
       var s = 0,
        a = [1],
        u = [],
        c = {};
       return c[r.id] = r, u.push(c), i.windex.jsonStringify(e, function(e, n) {
        var r = n && "object" == typeof n;
        if ("" == e && 1 == a.length) return a[0]--, r && a.push(i.windex.objectKeys(n).length), n;
        var o = {},
         c = u[u.length - 1],
         h = !0,
         d = !1,
         l = function(e) {
          o[e.id] = e, h = !1, e.term && (d = !0)
         };
        for (var f in c) {
         var p = c[f];
         e in p.edges && l(p.edges[e]), "*" in p.edges && l(p.edges["*"]), p.loop && l(p)
        }
        for ((h || !r && !d) && (n = null), s += e.length + 2, (s += r ? 2 : null === n ? 4 : n.toString().length) >= t && (n = void 0), a[a.length - 1]--, n && r && (a.push(i.windex.objectKeys(n).length), u.push(o)); a[a.length - 1] <= 0;) a.pop(), u.pop();
        return n
       })
      } catch (e) {}
      return "[error serializing " + e.constructor.name + "]"
     }
    }
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r, i = n(0),
     o = n(3),
     s = n(1),
     a = n(8),
     u = n(20),
     c = n(2),
     h = function() {
      function e(t, n) {
       var r = this;
       this.ctx = t, this.queue = n, this.hooks = [];
       var i = e;
       this.throttle = new o.Throttle(i.ThrottleMax, i.ThrottleInterval, function() {
        return setTimeout(function() {
         r.queue.enqueue(s.EVENT_FAIL_THROTTLED, [s.ThrottledStyleSheetHooks]), r.stop()
        })
       }), this.addInsert = this.throttle.guard(this.addInsert), this.addDelete = this.throttle.guard(this.addDelete)
      }
      return e.prototype.start = function() {
       var e = this;
       this.throttle.open();
       var t = this.ctx.window;
       if (t.CSSStyleSheet) {
        var n, r = t.CSSStyleSheet.prototype;
        (n = i.activateHook(r, "insertRule")) && (n.afterSync(function(t) {
         e.addInsert(t.that, t.args[0], t.args[1])
        }), this.hooks.push(n)), (n = i.activateHook(r, "deleteRule")) && (n.afterSync(function(t) {
         e.addDelete(t.that, t.args[0])
        }), this.hooks.push(n))
       }
      }, e.prototype.snapshot = function(e, t) {
       void 0 === t && (t = 0);
       var n = a.fsid(e);
       if (n) {
        var o = i.sheetRules(i.elemSheet(e));
        if (o)
         for (var u = t; u < o.length; u++) {
          var c = void 0;
          try {
           c = r(o[u])
          } catch (e) {
           c = "html {}"
          }
          this.queue.enqueue(s.EVENT_CSSRULE_INSERT, [n, c, u])
         }
       }
      }, e.prototype.addInsert = function(e, t, n) {
       var r = a.fsid(e.ownerNode);
       if (r && "string" == typeof t) {
        var i = [r, t];
        "number" == typeof n && i.push(n), this.queue.enqueue(s.EVENT_CSSRULE_INSERT, i)
       }
      }, e.prototype.addDelete = function(e, t) {
       var n = a.fsid(e.ownerNode);
       n && "number" == typeof t && this.queue.enqueue(s.EVENT_CSSRULE_DELETE, [n, t])
      }, e.prototype.stop = function() {
       this.throttle.close();
       for (var e = 0, t = this.hooks; e < t.length; e++) {
        t[e].disable()
       }
       this.hooks = []
      }, e.ThrottleMax = 1e4, e.ThrottleInterval = 1e4, e
     }();
    t.StyleSheetWatcher = h;
    var d = document.createElement("div");
   
    function l(e, t) {
     if (void 0 === t && (t = 0), !c.assert(t <= 20, "No deep recursion for CSS rules")) return "html { /* Depth limit exceeded! */ }";
     var n = function(e) {
      switch (e.type) {
       case CSSRule.PAGE_RULE:
        var t = e.selectorText || "";
        return t && i.hasPrefix(t, "@page") ? t : "@page " + t;
       case CSSRule.KEYFRAME_RULE:
        return e.keyText;
       case CSSRule.STYLE_RULE:
        return e.selectorText;
       case CSSRule.MEDIA_RULE:
        return "@media " + e.media.mediaText;
       case CSSRule.KEYFRAMES_RULE:
        return "@keyframes " + e.name;
       case CSSRule.SUPPORTS_RULE:
        return "@supports " + e.conditionText;
       default:
        return null
      }
     }(e);
     if (null == n) return e.cssText;
     var r = function(e, t) {
      var n = e,
       r = n.style;
      if (r) {
       for (var i = "", o = 0; o < r.length; o++) {
        var s = r[o],
         a = r[s];
        i += s + ": " + a, "important" === r.getPropertyPriority("width") && (i += " !important"), i += "; "
       }
       return i
      }
      var u = n.cssRules;
      if (!u) return null;
      for (var c = "", o = 0; o < u.length; o++) c += l(u[o], t + 1);
      return c
     }(e, t);
     return null == r ? e.cssText : n + " { " + r + "} "
    }
    d.style.width = "initial", r = "" != d.style.cssText ? function(e) {
     return e.cssText
    } : l, t._jsCssText = l, t.getDynamicRuleTail = function(e) {
     var t = e.textContent || "";
     if (!(t.length > 5e5)) {
      var n = i.sheetRules(i.elemSheet(e));
      if (n) {
       if (n.length > 0 && /^\s*$/.test(t)) return 0;
       var r = u.theDummyDoc(),
        o = r.importNode(e, !0);
       r.head.appendChild(o);
       var s = i.sheetRules(i.elemSheet(o));
       if (r.head.removeChild(o), s) return n.length > s.length ? s.length : void 0
      }
     }
    }
   }, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
      return new(n || (n = Promise))(function(i, o) {
       function s(e) {
        try {
         u(r.next(e))
        } catch (e) {
         o(e)
        }
       }
   
       function a(e) {
        try {
         u(r.throw(e))
        } catch (e) {
         o(e)
        }
       }
   
       function u(e) {
        e.done ? i(e.value) : new n(function(t) {
         t(e.value)
        }).then(s, a)
       }
       u((r = r.apply(e, t || [])).next())
      })
     },
     i = this && this.__generator || function(e, t) {
      var n, r, i, o, s = {
       label: 0,
       sent: function() {
        if (1 & i[0]) throw i[1];
        return i[1]
       },
       trys: [],
       ops: []
      };
      return o = {
       next: a(0),
       throw: a(1),
       return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
       return this
      }), o;
   
      function a(o) {
       return function(a) {
        return function(o) {
         if (n) throw new TypeError("Generator is already executing.");
         for (; s;) try {
          if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
          switch (r = 0, i && (o = [0, i.value]), o[0]) {
           case 0:
           case 1:
            i = o;
            break;
           case 4:
            return s.label++, {
             value: o[1],
             done: !1
            };
           case 5:
            s.label++, r = o[1], o = [0];
            continue;
           case 7:
            o = s.ops.pop(), s.trys.pop();
            continue;
           default:
            if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
             s = 0;
             continue
            }
            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
             s.label = o[1];
             break
            }
            if (6 === o[0] && s.label < i[1]) {
             s.label = i[1], i = o;
             break
            }
            if (i && s.label < i[2]) {
             s.label = i[2], s.ops.push(o);
             break
            }
            i[2] && s.ops.pop(), s.trys.pop();
            continue
          }
          o = t.call(e, s)
         } catch (e) {
          o = [6, e], r = 0
         } finally {
          n = i = 0
         }
         if (5 & o[0]) throw o[1];
         return {
          value: o[0] ? o[1] : void 0,
          done: !0
         }
        }([o, a])
       }
      }
     };
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var o = n(12),
     s = n(3),
     a = n(0),
     u = n(2),
     c = n(1),
     h = n(17),
     d = n(7),
     l = n(34),
     f = 6e6,
     p = function() {
      function e(e, t, n, r, i) {
       void 0 === n && (n = new o.XHRPoster), void 0 === r && (r = window.FormData), void 0 === i && (i = s.RealTimeout), this.ctx = e, this.queue = t, this.poster = n, this.FormDataCtr = r, this.Timeout = i, this.started = {}, this.byUrl = {}, this.batchReady = !1, this.existsBatch = [], this.host = a.gceHost(this.ctx.options.host)
      }
      return e.prototype.init = function() {
       this.FormDataCtr && this.main().catch(function(e) {
        u.FsBugSnag.sendToBugsnag(e, "error")
       })
      }, e.prototype.main = function() {
       return r(this, void 0, d.FSPromise, function() {
        var e, t, n, o, s, c, h, l, f, p, _, g = this;
        return i(this, function(v) {
         switch (v.label) {
          case 0:
           return [4, this.getBatch()];
          case 1:
           for (e = v.sent(), t = a.stringify({
             fsnv: a.map(e, function(e) {
              return e.hash
             })
            }), n = {}, o = 0, s = e; o < s.length; o++) c = s[o], n[c.hash] = c;
           h = this.ctx.options.orgId, l = "/rec/newResources?OrgId=" + h, v.label = 2;
          case 2:
           return v.trys.push([2, 4, , 5]), [4, this.poster.postPromise(this.ctx.options.protocol, this.host, l, t)];
          case 3:
           return f = v.sent(), [3, 5];
          case 4:
           return p = v.sent(), a.logIfDebug("/rec/newResources failed with status " + p), [3, 0];
          case 5:
           try {
            _ = JSON.parse(f)
           } catch (e) {
            return u.FsBugSnag.sendToBugsnag("Error parsing /rec/newResources response", "error"), [3, 0]
           }
           return [4, a.forInAsync(_, function(e, t) {
            return r(g, void 0, d.FSPromise, function() {
             var r, o, s, c, d, l, f, p, _, g;
             return i(this, function(i) {
              switch (i.label) {
               case 0:
                if ("fsnv" != t) return [2];
                r = 0, o = e, i.label = 1;
               case 1:
                if (!(r < o.length)) return [3, 6];
                if (s = o[r], null == (c = n[s])) return u.FsBugSnag.sendToBugsnag("Server told us to upload a hash we don't have", "error"), [3, 5];
                if (d = c.url, l = c.children, f = c.contentType, p = c.blob || c.stringData, _ = c.blob || new Blob([c.stringData], {
                  type: f
                 }), null == p) return u.FsBugSnag.sendToBugsnag("Tried to re-upload a resource", "error"), [3, 5];
                (g = new this.FormDataCtr).append("orgId", h), g.append("baseUrl", d), g.append("fsnvHash", s), g.append("childHashes", a.stringify(l)), g.append("contents", _, "blob"), c.blob = c.stringData = null, i.label = 2;
               case 2:
                return i.trys.push([2, 4, , 5]), [4, this.poster.postPromise(this.ctx.options.protocol, this.host, "/rec/uploadResource", g)];
               case 3:
                return i.sent(), [3, 5];
               case 4:
                return i.sent(), a.logIfDebug("Server error uploading resource"), [3, 5];
               case 5:
                return r++, [3, 1];
               case 6:
                return [2]
              }
             })
            })
           })];
          case 6:
           return v.sent(), [3, 0];
          case 7:
           return [2]
         }
        })
       })
      }, e.prototype.getBatch = function() {
       var e, t = this,
        n = new Promise(function(t) {
         return e = t
        }),
        r = function() {
         t.popBatch = null, t.batchReady = !1;
         var n = t.existsBatch;
         t.existsBatch = [], e(n)
        };
       return this.batchReady ? r() : this.popBatch = r, n
      }, e.prototype.uploadBlob = function(e, t) {
       return void 0 === t && (t = !1), r(this, void 0, d.FSPromise, function() {
        var n, r, o, s, u, c, h, d = this;
        return i(this, function(i) {
         switch (i.label) {
          case 0:
           return 0 != e.lastIndexOf("blob:", 0) ? [2] : this.FormDataCtr ? this.started[e] ? [2] : (this.started[e] = !0, [4, this.processResource(e, t)]) : [2];
          case 1:
           if (!(n = i.sent())) return [2];
           for (r = 0 == this.existsBatch.length, o = [n]; o.length > 0;)
            if (s = o.pop()) {
             for (u = 0, c = a.values(s.children); u < c.length; u++) h = c[u], o.push(h);
             this.existsBatch.push(s)
            }
           return r && new this.Timeout(function() {
            d.batchReady = !0, d.popBatch && d.popBatch()
           }, 50).start(), [2]
         }
        })
       })
      }, e.prototype.processResource = function(e, t, n) {
       return void 0 === n && (n = 0), r(this, void 0, d.FSPromise, function() {
        var r;
        return i(this, function(i) {
         switch (i.label) {
          case 0:
           return this.byUrl[e] ? [2, this.byUrl[e]] : n > 3 ? (u.FsBugSnag.sendToBugsnag("Resource uploading exceeded max resource depth 3", "warning"), [2, null]) : [4, t ? this.processCss(e, n) : this.processImage(e)];
          case 1:
           return (r = i.sent()) ? (this.byUrl[r.url] = r, this.queue.enqueue(c.EVENT_SYS_RESOURCEHASH, ["url", e, r.hash]), [2, r]) : [2, null]
         }
        })
       })
      }, e.prototype.processImage = function(e) {
       return r(this, void 0, d.FSPromise, function() {
        var t;
        return i(this, function(n) {
         switch (n.label) {
          case 0:
           return [4, _(e, "blob")];
          case 1:
           return (t = n.sent()) ? [4, l.hash128NonBlocking(this.ctx.time, t.data)] : [2, null];
          case 2:
           return [2, {
            hash: n.sent().hash,
            url: e,
            blob: t.blob,
            contentType: t.contentType,
            children: {}
           }]
         }
        })
       })
      }, e.prototype.processCss = function(e, t) {
       return r(this, void 0, d.FSPromise, function() {
        var n, r, o, s, u, c, d, f, p, v, y, E;
        return i(this, function(i) {
         switch (i.label) {
          case 0:
           return [4, _(e, "text")];
          case 1:
           return (n = i.sent()) ? (r = [], o = n.data.length > 1e6 ? n.data : h.replaceCssUrls(n.data, function(e, t, i, o) {
            if (a.hasPrefix(t, "blob:")) {
             var s = a.trim(n.data.substring(o - 20, o)),
              u = a.hasPrefix(e, "@import") || s.lastIndexOf("@import") == s.length - "@import".length;
             r.push({
              url: t,
              isCss: u
             }), t = ""
            }
            return e + t + i
           }), [4, g(new Blob([o]))]) : [2, null];
          case 2:
           return (s = i.sent()) ? [4, l.hash128NonBlocking(this.ctx.time, s)] : [2, null];
          case 3:
           u = i.sent().hasher, c = {}, d = 0, f = r, i.label = 4;
          case 4:
           return d < f.length ? (p = f[d], v = p.url, y = p.isCss, [4, this.processResource(v, y, t + 1)]) : [3, 7];
          case 5:
           if (!(E = i.sent())) return [3, 6];
           c[v] = E, u.writeAscii(E.hash), i.label = 6;
          case 6:
           return d++, [3, 4];
          case 7:
           return [2, {
            url: e,
            hash: u.sum(),
            stringData: n.data,
            contentType: n.contentType || "text/css",
            children: c
           }]
         }
        })
       })
      }, e
     }();
   
    function _(e, t) {
     var n, r = new Promise(function(e) {
      return n = e
     });
     if (!u.assert(a.hasPrefix(e, "blob:"), 'Blob url must start with "blob:"')) return n(null), r;
     var i = new XMLHttpRequest;
     return "string" != typeof i.responseType ? (n(null), r) : (i.open("GET", e), i.responseType = t, i.onerror = function() {
      n(null)
     }, i.onload = function() {
      if (200 != i.status) return a.logIfDebug("Error loading blob resource " + e), void n(null);
      var t = i.response;
      if ((t.size || t.length) > f) return u.FsBugSnag.sendToBugsnag("Size of blob resource " + e + " exceeds limit of " + f, "warning"), void n(null);
      "string" != typeof t ? g(t).then(function(e) {
       n(e ? {
        data: e,
        blob: t,
        contentType: t.type
       } : null)
      }) : n({
       data: t,
       contentType: i.getResponseHeader("Content-Type")
      })
     }, i.send(), r)
    }
   
    function g(e) {
     var t, n = new Promise(function(e) {
       return t = e
      }),
      r = new FileReader;
     return r.readAsArrayBuffer(e), r.onload = function() {
      t(r.result)
     }, r.onerror = function(e) {
      u.FsBugSnag.sendToBugsnag(e, "error"), t(null)
     }, n
    }
    t.ResourceUploader = p
   }, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
      var e = Object.setPrototypeOf || {
       __proto__: []
      }
      instanceof Array && function(e, t) {
       e.__proto__ = t
      } || function(e, t) {
       for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
      };
      return function(t, n) {
       function r() {
        this.constructor = t
       }
       e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
      }
     }(),
     i = this && this.__awaiter || function(e, t, n, r) {
      return new(n || (n = Promise))(function(i, o) {
       function s(e) {
        try {
         u(r.next(e))
        } catch (e) {
         o(e)
        }
       }
   
       function a(e) {
        try {
         u(r.throw(e))
        } catch (e) {
         o(e)
        }
       }
   
       function u(e) {
        e.done ? i(e.value) : new n(function(t) {
         t(e.value)
        }).then(s, a)
       }
       u((r = r.apply(e, t || [])).next())
      })
     },
     o = this && this.__generator || function(e, t) {
      var n, r, i, o, s = {
       label: 0,
       sent: function() {
        if (1 & i[0]) throw i[1];
        return i[1]
       },
       trys: [],
       ops: []
      };
      return o = {
       next: a(0),
       throw: a(1),
       return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
       return this
      }), o;
   
      function a(o) {
       return function(a) {
        return function(o) {
         if (n) throw new TypeError("Generator is already executing.");
         for (; s;) try {
          if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
          switch (r = 0, i && (o = [0, i.value]), o[0]) {
           case 0:
           case 1:
            i = o;
            break;
           case 4:
            return s.label++, {
             value: o[1],
             done: !1
            };
           case 5:
            s.label++, r = o[1], o = [0];
            continue;
           case 7:
            o = s.ops.pop(), s.trys.pop();
            continue;
           default:
            if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
             s = 0;
             continue
            }
            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
             s.label = o[1];
             break
            }
            if (6 === o[0] && s.label < i[1]) {
             s.label = i[1], i = o;
             break
            }
            if (i && s.label < i[2]) {
             s.label = i[2], s.ops.push(o);
             break
            }
            i[2] && s.ops.pop(), s.trys.pop();
            continue
          }
          o = t.call(e, s)
         } catch (e) {
          o = [6, e], r = 0
         } finally {
          n = i = 0
         }
         if (5 & o[0]) throw o[1];
         return {
          value: o[0] ? o[1] : void 0,
          done: !0
         }
        }([o, a])
       }
      }
     };
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var s = n(4),
     a = n(7),
     u = function() {
      function e(e) {
       if (void 0 === e && (e = 4), this.hashCount = e, this.idx = 0, 1 !== e && 4 !== e) throw new Error("Trying to create FSNV hasher with " + e + " hashes");
       this.hashMask = e - 1, this.reset()
      }
      return e.prototype.reset = function() {
       this.idx = 0, this.hash = [];
       for (var e = 0; e < this.hashCount; ++e) this.hash.push(2166136261)
      }, e.prototype.write = function(e) {
       for (var t = this.hashMask, n = this.idx, r = 0; r < e.length; r++) this.hash[n] = this.hash[n] ^ e[r], this.hash[n] += (this.hash[n] << 1) + (this.hash[n] << 4) + (this.hash[n] << 7) + (this.hash[n] << 8) + (this.hash[n] << 24), n = n + 1 & t;
       this.idx = n
      }, e.prototype.writeAscii = function(e) {
       for (var t = this.hashMask, n = this.idx, r = 0; r < e.length; r++) this.hash[n] = this.hash[n] ^ e.charCodeAt(r), this.hash[n] += (this.hash[n] << 1) + (this.hash[n] << 4) + (this.hash[n] << 7) + (this.hash[n] << 8) + (this.hash[n] << 24), n = n + 1 & t;
       this.idx = n
      }, e.prototype.sum = function() {
       return function(e) {
        return p(String.fromCharCode.apply(null, e.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")))
       }(this.sumAsHex()).replace(/\+/g, "-").replace(/\//g, "_")
      }, e.prototype.sumAsHex = function() {
       for (var e = "", t = 0; t < this.hashCount; ++t) e += ("00000000" + (this.hash[t] >>> 0).toString(16)).slice(-8);
       return e
      }, e
     }();
    t._FSNV = u;
    var c = 1e4,
     h = 25,
     d = 100;
    t.hash128NonBlocking = function(e, t, n) {
     return void 0 === n && (n = new u), i(this, void 0, a.FSPromise, function() {
      var r, i, a, u;
      return o(this, function(o) {
       switch (o.label) {
        case 0:
         r = e.now(), i = t.byteLength, a = 0, o.label = 1;
        case 1:
         return a < i ? e.now() - r > h ? [4, s.wait(d)] : [3, 3] : [3, 5];
        case 2:
         o.sent(), r = e.now(), o.label = 3;
        case 3:
         u = new Uint8Array(t, a, Math.min(i - a, c)), n.write(u), o.label = 4;
        case 4:
         return a += c, [3, 1];
        case 5:
         return [2, {
          hash: n.sum(),
          hasher: n
         }]
       }
      })
     })
    }, t.hashString32Blocking = function(e) {
     var t = new u(1);
     return t.writeAscii(e), t.sumAsHex()
    };
    var l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
     f = function(e) {
      function t() {
       return null !== e && e.apply(this, arguments) || this
      }
      return r(t, e), t
     }(Error),
     p = window.btoa || _;
   
    function _(e) {
     for (var t, n, r = String(e), i = 0, o = l, s = []; r.charAt(0 | i) || (o = "=", i % 1); s.push(o.charAt(63 & t >> 8 - i % 1 * 8))) {
      if ((n = r.charCodeAt(i += .75)) > 255) throw new f("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      t = t << 8 | n
     }
     return s.join("")
    }
    t._jsbtoa = _
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(1),
     i = n(0),
     o = n(36),
     s = n(8),
     a = n(5),
     u = n(4),
     c = function() {
      function e(e, t, n) {
       this._queue = e, this._wnd = t, this._enabled = !1, this._overflow = !1, this._total = 0, this._hooks = [], this._listeners = n.createChild()
      }
      return e.prototype.enable = function() {
       var e = this;
       if (this._listeners.add(this._wnd, "error", !0, function(t) {
         return e.addError(t)
        }), this._listeners.add(this._wnd, "unhandledrejection", !0, function(t) {
         e.addLog("error", ["Uncaught (in promise)", t.reason])
        }, !0), !this._enabled)
        if (this._enabled = !0, this._queue.enqueue(r.EVENT_REC_FEAT_SUPPORTED, [r.RecFeatureConsole, !0]), this._wnd.console)
         for (var t = function(t) {
           var r = i.activateHook(n._wnd.console, t);
           if (!r) return "continue";
           r.before(function(n) {
            var r = n.args;
            return e.addLog(t, r)
           }), n._hooks.push(r)
          }, n = this, o = 0, s = ["log", "info", "warn", "error"]; o < s.length; o++) {
          t(s[o])
         } else this.addLog("log", ["NOTE: Log messages cannot be captured on IE9"])
      }, e.prototype.isEnabled = function() {
       return this._enabled
      }, e.prototype.disable = function() {
       var e;
       if (this._listeners.clear(), this._enabled)
        for (this._enabled = !1; e = this._hooks.pop();) e.disable()
      }, e.prototype.addLog = function(e, t) {
       if (this.checkOverflow()) {
        for (var n = [e], i = 0; i < t.length; ++i) n.push(h(t[i], 1e3));
        this._queue.enqueue(r.EVENT_LOG, n)
       }
      }, e.prototype.addError = function(e) {
       if (this.checkOverflow()) {
        var t = e.message,
         n = e.filename,
         i = e.lineno;
        if (t || n || i) {
         "object" == typeof t && (t = h(t, 1e3)), "object" == typeof n && (n = h(n, 100)), "object" == typeof i && (i = -1);
         var s = [t, n, i];
         s = s.concat(o.stackTraceFromError(e.error)), this._queue.enqueue(r.EVENT_ERROR, s)
        }
       }
      }, e.prototype.checkOverflow = function() {
       return !this._overflow && (this._total == r.MAX_LOGS_PER_PAGE ? (this._queue.enqueue(r.EVENT_LOG, ["warn", e.OVERFLOW_MSG]), this._overflow = !0, !1) : (this._total++, !0))
      }, e.OVERFLOW_MSG = '"[received more than ' + r.MAX_LOGS_PER_PAGE + ' messages; no longer recording console]"', e
     }();
   
    function h(e, t) {
     try {
      var n = {
       tokens: [],
       opath: [],
       cyclic: function(e, t) {
        var n = 0;
        try {
         u.windex.jsonStringify(e, function(e, r) {
          if (n++ > t) throw "break";
          if ("object" == typeof r) return r
         })
        } catch (e) {
         return "break" != e
        }
        return !1
       }(e, t / 4)
      };
      return function e(t, n, r, o) {
       if (n < 1) return 0;
       var c = t && t.constructor == Date ? d(t) : function(e) {
        return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && e.nodeType > 0 && "string" == typeof e.nodeName
       }(t) ? function(e) {
        if (!s.fsidIfNotBlocked(e)) return e.toString();
        if (e.tagName) {
         var t = i.tagName(e),
          n = a.uaIsEdge && "output" == t ? {} : e.attributes;
         return "<" + t + (n && n.type ? ' type="' + n.type.value + '"' : "") + (e.id ? ' id="' + e.id + '"' : "") + (e.className ? ' class="' + e.className + '"' : "") + ">" + (e.firstChild ? "..." : "") + "</" + t + ">"
        }
        var r = "";
        return e.data && e.data.substring && (r = " " + e.data.substring(0, 50) + (e.data.length > 50 ? "..." : "")), e.nodeName + r
       }(t) : void 0 === t ? "undefined" : "object" != typeof t || null == t ? t : t instanceof Error ? t.stack || t.name + ": " + t.message : void 0;
       if (void 0 !== c) return void 0 === (c = u.windex.jsonStringify(c)) ? 0 : ('"' == c[0] && (c = l(c, n, '..."')), c.length <= n ? (o.tokens.push(c), c.length) : 0);
       if (o.cyclic) {
        o.opath.splice(r);
        var h = o.opath.lastIndexOf(t);
        if (h > -1) {
         var f = "<Cycle to ancestor #" + (r - h - 1) + ">";
         return f = '"' + l(f, n - 2) + '"', o.tokens.push(f), f.length
        }
        o.opath.push(t)
       }
       var p = n;
       var _ = function(e) {
        return p >= e.length && (p -= e.length, o.tokens.push(e), !0)
       };
       var g = function(e) {
        var t = o.tokens[o.tokens.length - 1];
        "," == t ? o.tokens[o.tokens.length - 1] = e : _(e)
       };
       if (p < 2) return 0;
       if (i.isArray(t)) {
        _("[");
        for (var v = 0; v < t.length && p > 0; v++) {
         var y = e(t[v], p - 1, r + 1, o);
         if (p -= y, 0 == y && !_("null")) break;
         _(",")
        }
        g("]")
       } else {
        _("{");
        for (var E = i.keys(t), v = 0; v < E.length && p > 0; v++) {
         var m = E[v],
          S = t[m];
         if (!_('"' + m + '":')) break;
         var y = e(S, p - 1, r + 1, o);
         if (0 == y) {
          o.tokens.pop();
          break
         }
         p -= y, _(",")
        }
        g("}")
       }
       return n == 1 / 0 ? 1 : n - p
      }(e, t, 0, n), n.tokens.join("")
     } catch (e) {
      return i.jsonErrorString(e)
     }
    }
    t.ConsoleWatcher = c, t.stringifyLogMessage = h;
    var d = function(e) {
      return isNaN(e) ? "Invalid Date" : e.toUTCString()
     },
     l = function(e, t, n) {
      return void 0 === n && (n = "..."), e.length <= t ? e : e.length <= n.length || t <= n.length ? e.substring(0, t) : e.substring(0, t - n.length) + n
     }
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = /^\s*at .*(\S+\:\d+|native|(<anonymous>))/m,
     i = /^(eval@)?(\[native code\])?$/;
   
    function o(e) {
     if (!e || !e.stack) return [];
     var t = e;
     return t.stack ? t.stack.match(r) ? function(e) {
      return e.split("\n").filter(function(e) {
       return !!e.match(r)
      }).map(function(e) {
       e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
       var t = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/\(native code\)/, "").split(/\s+/).slice(1),
        n = a(t.pop()),
        r = t.join(" "),
        i = ["eval", "<anonymous>"].indexOf(n[0]) > -1 ? "" : n[0];
       return s(r, i, n[1], n[2])
      })
     }(t.stack) : function(e) {
      return e.split("\n").filter(function(e) {
       return !e.match(i)
      }).map(function(e) {
       if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return [e, "", -1, -1];
       var t = e.split("@"),
        n = a(t.pop()),
        r = t.join("@");
       return s(r, n[0], n[1], n[2])
      })
     }(t.stack) : []
    }
   
    function s(e, t, n, r) {
     return [e || "", t || "", parseInt(n || "-1"), parseInt(r || "-1")]
    }
   
    function a(e) {
     if (!e || -1 === e.indexOf(":")) return ["", "", ""];
     var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
     return t ? [t[1] || "", t[2] || "", t[3] || ""] : ["", "", ""]
    }
    t.genStackTrace = function() {
     try {
      throw new Error
     } catch (e) {
      return o(e).slice(1)
     }
    }, t.stackTraceFromError = o
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(38),
     i = n(1),
     o = n(3),
     s = n(9),
     a = function() {
      function e(e, t, n, i) {
       void 0 === n && (n = function() {
        return []
       }), void 0 === i && (i = o.RealTicker), this._ctx = e, this._transport = t, this._gatherExternalEvents = n, this._tickerFactory = i, this._recordingDisabled = !1, this._lastWhen = -1, this._gotUnload = !1, this._eventQueue = [], this._sampleCurvesTicker = new this._tickerFactory(s.CurveSamplingInterval), this._processMutationsTicker = new this._tickerFactory(s.MutationProcessingInterval), this._processor = new r.EventProcessor(e)
      }
      return e.prototype.startPipeline = function(e, t, n, r) {
       var i = this;
       void 0 === n && (n = 0), void 0 === r && (r = []), this._recordingDisabled || this._pipelineStarted || (this._pipelineStarted = !0, this._frameId = n, this._parentIds = r, this.processEvents(), this._processMutationsTicker.start(function() {
        i.processEvents()
       }), this._sampleCurvesTicker.start(function() {
        i.processEvents(!0)
       }), this._transport.startPipeline(e, t))
      }, e.prototype.enqueue = function(e, t) {
       this.enqueueAt(this._ctx.time.now(), e, t), o.Scheduler.checkForBrokenSchedulers()
      }, e.prototype.enqueueAt = function(e, t, n) {
       this._recordingDisabled || (e <= this._lastWhen && (e = this._lastWhen + 1), this._lastWhen = e, this._eventQueue.push({
        When: e,
        Kind: t,
        Args: n
       }))
      }, e.prototype.enqueueFirst = function(e, t) {
       this._eventQueue.length > 0 ? this._eventQueue.unshift({
        When: this._eventQueue[0].When,
        Kind: e,
        Args: t
       }) : this.enqueue(e, t)
      }, e.prototype.addUnload = function(e) {
       this._gotUnload || (this._gotUnload = !0, this.enqueue(i.EVENT_UNLOAD, [e]), this.singSwanSong())
      }, e.prototype.shutdown = function() {
       this._flush(), this.addUnload("shutdown"), this._flush(), this._recordingDisabled = !0, this.stopPipeline()
      }, e.prototype._flush = function() {
       this.processEvents(), this._transport.flush()
      }, e.prototype.prequeue = function(e, t) {
       this._recordingDisabled || this._eventQueue.unshift({
        When: 0,
        Kind: e,
        Args: t
       })
      }, e.prototype.appendToQueue = function(e) {
       this._eventQueue = this._eventQueue.concat(e)
      }, e.prototype.singSwanSong = function() {
       this._recordingDisabled || (this.processEvents(), this._transport.singSwanSong())
      }, e.prototype.rebaseIframe = function(e) {
       for (var t = 0, n = this._eventQueue.length; t < n; t++) {
        var r = this._eventQueue[t],
         i = r.When + this._ctx.time.startTime() - e;
        i < 0 && (i = 0), r.When = i
       }
      }, e.prototype.processEvents = function(e) {
       if (this._pipelineStarted) {
        var t = this._eventQueue;
        this._eventQueue = [];
        var n = this._processor.processQueue(t);
        e || (n = n.concat(this._gatherExternalEvents(0 != n.length))), this.ensureFrameIds(n), 0 != n.length && this._transport.enqueueEvents(n)
       }
      }, e.prototype.ensureFrameIds = function(e) {
       if (this._frameId)
        for (var t = this._parentIds, n = t && t.length > 0, r = 0; r < e.length; ++r) {
         var i = e[r];
         i.FId || (i.FId = this._frameId), n && !i.PIds && (i.PIds = t)
        }
      }, e.prototype.stopPipeline = function() {
       this._pipelineStarted && (this._sampleCurvesTicker.stop(), this._processMutationsTicker.stop(), this._eventQueue = [], this._transport.stopPipeline())
      }, e
     }();
    t.EventQueue = a
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(1),
     i = function() {
      function e(e, t) {
       this._q = e, this._valueIndices = t, this._evts = []
      }
      return e.prototype.add = function(e) {
       0 == this._evts.length && this._q.push(e), this._evts.push(e)
      }, e.prototype.finish = function(e, t) {
       var n = this._evts.length;
       if (n <= 1) return !1;
       for (var r = this._evts[0].When, i = this._evts[n - 1].When, o = 0; o < this._valueIndices.length; ++o) {
        var s = this._valueIndices[o],
         a = this._evts[0].Args[s],
         u = (this._evts[1].When - r) / (i - r),
         c = (this._evts[1].Args[s] - a) / u,
         h = this._evts[n - 1].Args[s],
         d = (u = (i - this._evts[n - 2].When) / (i - r), (h - this._evts[n - 2].Args[s]) / u);
        t.push(a, h, c, d)
       }
       return this._evts[0].Kind = e, this._evts[0].Args = t, !0
      }, e.prototype.evts = function() {
       return this._evts
      }, e
     }(),
     o = function() {
      function e(e) {
       this._ctx = e
      }
      return e.prototype.processQueue = function(e) {
       if (0 == e.length) return e;
       for (var t, n = this._ctx.time.now(), o = [], s = new i(o, [0, 1]), a = {}, u = {}, c = {}, h = 0; h < e.length; ++h) {
        var d = e[h];
        switch (d.Kind) {
         case r.EVENT_MOUSEMOVE:
          s.add(d);
          break;
         case r.EVENT_TOUCHMOVE:
          (l = d.Args[0]) in a || (a[l] = new i(o, [1, 2])), a[l].add(d);
          break;
         case r.EVENT_SCROLL_LAYOUT:
          (l = d.Args[0]) in u || (u[l] = new i(o, [1, 2])), u[l].add(d);
          break;
         case r.EVENT_SCROLL_VISUAL_OFFSET:
          var l;
          (l = d.Args[0]) in c || (c[l] = new i(o, [1, 2])), c[l].add(d);
          break;
         case r.EVENT_RESIZE_VISUAL:
          t || (t = new i(o, [0, 1])), t.add(d);
          break;
         default:
          o.push(d)
        }
       }
       if (s.finish(r.EVENT_MOUSEMOVE_CURVE, [n])) {
        var f = s.evts(),
         p = f[f.length - 1].Args;
        p.length > 2 && p[2] && f[0].Args.push(p[2])
       }
       for (l in u) {
        u[_ = parseInt(l)].finish(r.EVENT_SCROLL_LAYOUT_CURVE, [n, _])
       }
       for (l in c) {
        c[_ = parseInt(l)].finish(r.EVENT_SCROLL_VISUAL_OFFSET_CURVE, [n, _])
       }
       for (l in a) {
        var _;
        a[_ = parseInt(l)].finish(r.EVENT_TOUCHMOVE_CURVE, [n, _])
       }
       return t && t.finish(r.EVENT_RESIZE_VISUAL_CURVE, [n]), o
      }, e
     }();
    t.EventProcessor = o
   }, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
     var e = Object.setPrototypeOf || {
      __proto__: []
     }
     instanceof Array && function(e, t) {
      e.__proto__ = t
     } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
     };
     return function(t, n) {
      function r() {
       this.constructor = t
      }
      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
     }
    }();
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var i = n(21),
     o = n(10),
     s = n(3),
     a = n(12),
     u = n(6),
     c = n(16),
     h = n(0),
     d = n(1),
     l = n(11),
     f = n(15);
   
    function p(e, t) {
     return new i.HttpEventTransport(e, t)
    }
    var _ = function(e) {
     function t(t, n, r, i, c) {
      void 0 === n && (n = s.RealTicker), void 0 === r && (r = new a.XHRPoster), void 0 === i && (i = p), void 0 === c && (c = o.defaultInjector);
      var h = e.call(this, t, n, i, c) || this;
      return h._poster = r, h._domLoaded = !1, h._recordingDisabled = !1, h._integrationScriptFetched = !1, h._doc = h._wnd.document, h._frameId = 0, h._identity = t.recording.identity, h._getCurrentSessionEnabled = o.GetCurrentSessionEnabledState.NoInfoYet, u.set_fs_shutdown(h._wnd, function(e) {
       if (h._eventWatcher.shutdown(), e) {
        var t = h._doc.getElementById(e);
        t && t.setAttribute("_fs_embed_token", h._embedToken)
       }
      }), h
     }
     return r(t, e), t.prototype.onDomLoad = function() {
      var t = this;
      e.prototype.onDomLoad.call(this), this._domLoaded = !0, this.injectIntegrationScript(function() {
       t.fireFsReady()
      })
     }, t.prototype.start = function(t, n, r) {
      var i = this;
      e.prototype.start.call(this, t, n);
      var o = u._fs_replay_flags(this._wnd),
       s = c.getDocumentClientArea(this._doc),
       a = s[0],
       p = s[1],
       _ = h.tryGetScreenDims(this._wnd),
       g = _[0],
       v = _[1],
       y = "";
      t || (y = this._identity.userId());
      var E = {
       OrgId: this._orgId,
       UserId: y,
       Url: location.href,
       Base: l.baseUri(this._wnd),
       Width: a,
       Height: p,
       ScreenWidth: g,
       ScreenHeight: v,
       Referrer: this._doc.referrer,
       Doctype: h.doctypeString(this._doc),
       CompiledTimestamp: f.CompiledTimestamp
      };
      r && (E.AppId = r), o && (E.ReplayFlags = o), this._poster.post(this._protocol, h.gceHost(this._host), "/rec/page", h.stringify(E), function(e) {
       var t;
       try {
        t = h.parseJson(e)
       } catch (e) {
        return void i.disableBecauseRecPageSaidSo()
       }
       i.handleResponse(t), i.handleIdentity(t.CookieDomain, t.UserIntId, t.SessionIntId, t.PageIntId, t.EmbedToken), i.handleIntegrationScript(t.IntegrationScript), i._queue.enqueueFirst(d.EVENT_SET_FRAME_BASE, [l.baseUri(i._wnd), h.doctypeString(i._doc)]), i._queue.startPipeline(t.PageIntId, t.PageStart), i.fullyStarted()
      }, function(e) {
       i.disableBecauseRecPageSaidSo()
      })
     }, t.prototype.handleIntegrationScript = function(e) {
      var t = this;
      this._integrationScriptFetched = !0, this._integrationScript = e, this.injectIntegrationScript(function() {
       t.fireFsReady()
      })
     }, t.prototype.handleIdentity = function(e, t, n, r, i) {
      var o = this._identity;
      o.setIds(this._wnd, e, t, n), this._embedToken = i, h.logIfDebug("/User," + o.userId() + "/Session," + o.sessionId() + "/Page," + r)
     }, t.prototype.injectIntegrationScript = function(e) {
      if (this._domLoaded && this._integrationScriptFetched)
       if (this._integrationScript) {
        var t = this._doc.createElement("script");
        u._fs_csp(this._wnd) ? (t.addEventListener("load", e), t.addEventListener("error", e), t.async = !0, t.src = this._protocol + "//" + this._host + "/rec/integrations?OrgId=" + this._orgId, this._doc.head.appendChild(t)) : (t.text = this._integrationScript, this._doc.head.appendChild(t), e())
       } else e()
     }, t.prototype.disableBecauseRecPageSaidSo = function() {
      this.shutdown(), h.logIfDebug("Disabling FS."), this._recordingDisabled = !0, this.fireFsReady()
     }, t.prototype.fireFsReady = function() {
      var e = u._fs_ready(this._wnd);
      if (e) try {
       this._recordingDisabled ? e(!0) : e()
      } catch (e) {
       h.logIfDebug("exception in _fs_ready(): " + e)
      }
     }, t
    }(o.AbstractRecorder);
    t.TopRecorder = _
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(3),
     i = n(0),
     o = n(2),
     s = n(12),
     a = function() {
      function e(e, t, n, i) {
       void 0 === i && (i = r.RealTimeout), this._ctx = e, this._transport = t, this._identity = n, this._timeoutFactory = i, this._recover()
      }
      return e.prototype.sing = function(t, n, r, o, s) {
       i.logIfDebug("Saving " + n.length + " bundles in swan-song.");
       var a = {
         OrgId: this._identity.orgId(),
         UserId: this._identity.userId(),
         SessionId: this._identity.sessionId(),
         PageId: t,
         Bundles: n,
         PageStartTime: this._ctx.time.startTime(),
         LastBundleTime: r,
         ServerPageStart: o,
         ServerBundleTime: s
        },
        u = i.stringify(a);
       if (!(u.length > 2e6)) try {
        localStorage[e.localStorageKey] = u
       } catch (e) {}
      }, e.prototype._recover = function() {
       try {
        if (e.localStorageKey in localStorage) {
         var t = localStorage[e.localStorageKey];
         delete localStorage[e.localStorageKey];
         var n = i.parseJson(t);
         if (!(n.Bundles && n.UserId && n.SessionId && n.PageId)) return void i.logIfDebug("Malformed swan song found. Ignoring it.");
         n.OrgId || (n.OrgId = this._identity.orgId()), n.Bundles.length > 0 && (i.logIfDebug("Sending " + n.Bundles.length + " bundles as prior page swan song"), this.sendSwanSongBundles(n.OrgId, n.UserId, n.SessionId, n.PageId, n.Bundles, n.ServerPageStart, n.ServerBundleTime, n.LastBundleTime))
        }
       } catch (e) {
        i.logIfDebug("Error recovering swan-song: " + e)
       }
      }, e.prototype.sendSwanSongBundles = function(e, t, n, r, a, u, c, h, d) {
       var l = this;
       void 0 === d && (d = 0);
       var f = null;
       i.isArray(a) && 0 !== a.length && void 0 !== a[0] && (1 == a.length && (f = this._ctx.time.wallTime() - (h || 0)), this._transport.sendSwanSongBundle(e, t, n, r, a[0], u, c, f, function(s) {
        var c;
        i.logIfDebug("Sent " + a[0].Evts.length + " trailing events from last session as Seq " + a[0].Seq), a.shift();
        try {
         c = i.parseJson(s).BundleTime
        } catch (e) {
         o.FsBugSnag.sendToBugsnag("Failed to JSON parse /rec/bundle response: " + s + ": " + e, "error"), c = null
        }
        a.length > 0 ? l.sendSwanSongBundles(e, t, n, r, a, u, c, h) : i.logIfDebug("Done with prior page swan song")
       }, function(o) {
        s.isErrorFatal(o) ? i.logIfDebug("Fatal error while sending events, giving up") : (i.logIfDebug("Failed to send events from last session, will retry while on this page"), l._lastSwanSongRetryTimeout = new l._timeoutFactory(l.sendSwanSongBundles, s.exponentialBackoffMs(d, !0), l, e, t, n, r, a, u, c, h, d + 1).start())
       }))
      }, e.localStorageKey = "singSwanSong", e
     }();
    t.SwanSong = a
   }, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
     var e = Object.setPrototypeOf || {
      __proto__: []
     }
     instanceof Array && function(e, t) {
      e.__proto__ = t
     } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
     };
     return function(t, n) {
      function r() {
       this.constructor = t
      }
      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
     }
    }();
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var i = n(21),
     o = n(10),
     s = n(3),
     a = n(0),
     u = n(1),
     c = n(11);
   
    function h(e, t) {
     return new i.PostMessageEventTransport(e.window)
    }
    t.makeFrameTransport = h;
    var d = function(e) {
     function t(t, n, r, a, u) {
      void 0 === n && (n = s.RealTicker), void 0 === r && (r = new i.PostMessagePoster), void 0 === a && (a = h), void 0 === u && (u = o.defaultInjector);
      var c = e.call(this, t, n, a, u) || this;
      return c._messagePoster = r, c
     }
     return r(t, e), t.prototype.start = function(t, n) {
      var r = this;
      e.prototype.start.call(this, t, n), this.sendRequestForFrameId(), this._listeners.add(this._wnd, "load", !1, function() {
       r._eventWatcher.recordingIsDetached() && (a.logIfDebug("Recording wrong document. Restarting recording in iframe."), r._ctx.recording.splitPage())
      })
     }, t.prototype.postMessageReceived = function(t, n) {
      switch (e.prototype.postMessageReceived.call(this, t, n), n[0]) {
       case o.FS_GREET_CHILD_FRAME:
        this.sendRequestForFrameId();
        break;
       case o.FS_SET_FRAME_ID_CMD:
        try {
         var r = n[1],
          i = n[2],
          s = n[3],
          u = n[4],
          c = n[5],
          h = n[6],
          d = n[7];
         this.setFrameIdFromOutside(r, i, s, u, c, h, d)
        } catch (e) {
         a.logIfDebug("Failed to parse frameId from message: " + a.stringify(n))
        }
        break;
       case o.FS_INIT_MOBILE_CMD:
        try {
         var l = JSON.parse(n[1]),
          f = l.StartTime;
         if (n.length > 2) {
          var p = n[2];
          if (p.hasOwnProperty("ProtocolVersion")) p.ProtocolVersion >= 20180723 && p.hasOwnProperty("OuterStartTime") && (f = p.OuterStartTime)
         }
         this.setFrameIdFromOutside(-1, [], f, "https", l.Host, l.OrgId, l.PageResponse)
        } catch (e) {
         a.logIfDebug("Failed to initialize mobile web recording from message: " + a.stringify(n))
        }
      }
     }, t.prototype.sendRequestForFrameId = function() {
      this._frameId || (0 != this._frameId ? this._wnd.parent ? (a.logIfDebug("Asking for a frame ID from within frame: " + location.href), this._messagePoster.postMessage(this._wnd.parent, o.FS_REQUEST_FRAME_ID, [])) : a.logIfDebug("Orphaned window. Location href = " + location.href) : a.logIfDebug("For some reason the outer window attempted to request a frameId"))
     }, t.prototype.setFrameIdFromOutside = function(e, t, n, r, i, o, s) {
      e ? this._frameId ? this._frameId != e ? (a.logIfDebug("Updating frame id from " + this._frameId + " to " + e), this._ctx.recording.splitPage()) : a.logIfDebug("frame Id is already set to " + this._frameId) : (a.logIfDebug("FrameId received within frame " + location.href + ": " + e), this._protocol = r, this._host = i, this._orgId = o, this._frameId = e, this._parentIds = t, this.handleResponse(s), this._queue.enqueueFirst(u.EVENT_SET_FRAME_BASE, [c.baseUri(this._wnd), a.doctypeString(this._wnd.document)]), this._queue.rebaseIframe(n), this._ctx.time.setStartTime(n), this._queue.startPipeline(this._pageId, s.PageStart, e, t), this.flushPendingChildFrameInits(), this.fullyStarted()) : a.logIfDebug("Outer page gave us a bogus frame Id! Iframe: " + location.href)
     }, t
    }(o.AbstractRecorder);
    t.InnerRecorder = d
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(1),
     i = n(22),
     o = n(0),
     s = n(4),
     a = function() {
      function e(e) {
       this._identity = e
      }
      return e.prototype.identity = function() {
       return this._identity
      }, e.prototype.api = function(e, t) {
       var n = !1,
        s = [];
       switch (e) {
        case d.rec:
         return {
          events: [],
          recStatus: t ? "restart" : "shutdown"
         };
        case d.consent:
         var a = typeof t;
         if ("boolean" != typeof t) {
          o.logIfDebug("Expected consent status of type 'boolean' instead got type: \"" + a + '", value: "' + t + '"');
          break
         }
         return {
          events: [{
           When: 0,
           Kind: r.EVENT_SYS_SETCONSENT,
           Args: [t]
          }],
          consent: t
         };
        case d.account:
         s.push.apply(s, this.rawEventsFromApi("acct", r.EVENT_SYS_SETVAR, c, t));
         break;
        case d.user:
         if ("object" != typeof t) o.logIfDebug("Expected argument of type 'object' instead got type: '" + typeof t + "', value: " + o.stringify(t));
         else if ("uid" in t) {
          var l = t.uid;
          if (!1 === l) this._identity.clearAppId() && (n = !0), delete t.uid;
          else {
           var f = u(l, this._identity),
            p = f[0],
            _ = f[1];
           if (!p) {
            switch (_) {
             case i.HighlightTypeFsId:
              s.push({
               When: 0,
               Kind: r.EVENT_SYS_HIGHLIGHT,
               Args: [i.HighlightTypeFsId, t.uid + ""]
              });
              break;
             case void 0:
              break;
             default:
              o.logIfDebug("unexpected failReason returned from setAppId: " + _)
            }
            return {
             events: s
            }
           }
           t.uid = p, this._identity.setAppId(t.uid), _ == i.HighlightTypeNewUid && (n = !0)
          }
         }
         s.push.apply(s, this.rawEventsFromApi("user", r.EVENT_SYS_SETVAR, h, t));
         break;
        case d.customEvent:
         var g = t.n,
          v = t.p;
         s.push.apply(s, this.rawEventsFromApi(g, r.EVENT_SYS_CUSTOM, {}, v));
         break;
        default:
         o.logIfDebug('invalid operation "' + e + '"; only "rec", "account", and "user" are supported at present')
       }
       return {
        events: s,
        reidentify: n
       }
      }, e.prototype.rawEventsFromApi = function(e, t, n, r) {
       var i = function e(t, n) {
         var r = {
          PayloadToSend: {},
          IsEmpty: !0,
          ValidationErrors: []
         };
         o.forIn(n, function(n, i) {
          var a = function(e, t, n, r) {
           var i = t,
            a = typeof n;
           if ("undefined" === a) return r.push({
            Type: "vartype",
            FieldName: t,
            ValueType: a + " (unsupported)"
           }), null;
           if (s.windex.objectHasOwnProp(e, t)) return {
            name: t,
            type: e[t]
           };
           var u = t.lastIndexOf("_");
           if (-1 == u || ! function(e) {
             return !!l[e]
            }(t.substring(u + 1))) {
            var c = function(e) {
             for (var t in l)
              if (l[t](e)) return t;
             return null
            }(n);
            if (null == c) return o.logIfDebug("Cannot infer type of " + a + " " + n), n ? r.push({
             Type: "vartype",
             FieldName: t
            }) : r.push({
             Type: "vartype",
             FieldName: t,
             ValueType: "null (unsupported)"
            }), null;
            u = t.length, o.logIfDebug('Warning: Inferring user variable "' + t + '" to be of type "' + c + '"'), t = t + "_" + c
           }
           if ("object" === a) {
            if (o.isArray(n)) return r.push({
             Type: "vartype",
             FieldName: i,
             ValueType: "array (unsupported)"
            }), null;
            if (!n) return r.push({
             Type: "vartype",
             FieldName: i,
             ValueType: "null (unsupported)"
            }), null
           }
           var h = [t.substring(0, u), t.substring(u + 1)],
            d = h[0],
            f = h[1],
            p = /^[a-zA-Z][a-zA-Z0-9_]*$/;
           if (!p.test(d)) {
            d = d.replace(/[^a-zA-Z0-9_]/g, "").replace(/^[0-9]+/, ""), /[0-9]/.test(d[0]) && (d = d.substring(1)), r.push({
             Type: "varname",
             FieldName: i
            });
            var _ = d + "_" + f;
            if (o.logIfDebug('Warning: variable "' + i + '" has invalid characters. It should match /' + p.source + '/. Converted name to "' + _ + '".'), "" == d) return null;
            t = _
           }
           if (!s.windex.objectHasOwnProp(l, f)) return o.logIfDebug('Variable "' + i + '" has invalid type "' + f + '"'), r.push({
            Type: "varname",
            FieldName: i
           }), null;
           if (!l[f](n)) return o.logIfDebug("illegal value " + o.stringify(n) + " for type " + f), "number" === a ? a = n % 1 == 0 ? "integer" : "real" : "object" == a && null != n && n.constructor == Date && (a = isNaN(n) ? "invalid date" : "date"), r.push({
            Type: "vartype",
            FieldName: i,
            ValueType: a
           }), null;
           return {
            name: t,
            type: f
           }
          }(t, i, n, r.ValidationErrors);
          if (a) {
           var u = a.name,
            c = a.type;
           if ("obj" != c) "str" == c && (n = n.trim()), "date" == c && (n = function(e) {
            return (e.constructor === Date ? e : new Date(e)).toISOString()
           }(n)), r.PayloadToSend[u] = n, r.IsEmpty && (r.IsEmpty = !1);
           else {
            var h = e(t, n);
            if (r.ValidationErrors = r.ValidationErrors.concat(h.ValidationErrors), !h.IsEmpty) {
             var d = o.hasSuffix(i, "_obj") ? u : u.substring(0, u.length - "_obj".length);
             r.PayloadToSend[d] = h.PayloadToSend, r.IsEmpty = !1
            }
           }
          }
         });
         return r
        }(n, r),
        a = this.eventsForValidationErrors(e, i.ValidationErrors);
       return i.IsEmpty || a.push({
        When: 0,
        Kind: t,
        Args: [e, o.stringify(i.PayloadToSend)]
       }), a
      }, e.prototype.eventsForValidationErrors = function(e, t) {
       for (var n = [], i = 0, o = t; i < o.length; i++) {
        var s = o[i],
         a = [s.Type, e + ":" + s.FieldName];
        s.ValueType && a.push(s.ValueType), n.push({
         When: 0,
         Kind: r.EVENT_SYS_HIGHLIGHT,
         Args: a
        })
       }
       return n
      }, e
     }();
   
    function u(e, t) {
     if ("number" == typeof e && Math.floor(e) == e && (o.logIfDebug("Expected appId of type 'string' instead got value: " + e + " of type: " + typeof e), e = "" + e), "string" != typeof e) return o.logIfDebug("blocking FS.identify API call; uid value (" + e + ") must be a string"), [void 0, i.HighlightTypeFsId];
     var n = e.trim();
     if (o.BAD_APP_IDS.indexOf(n.toLowerCase()) >= 0) return o.logIfDebug("blocking FS.identify API call; uid value (" + e + ") is illegal"), [void 0, i.HighlightTypeFsId];
     var r = void 0;
     return t && t._cookie.AppKey && t._cookie.AppKey != n && (o.logIfDebug("user re-identified; existing uid (" + t._cookie.AppKey + ") does not match provided uid (" + n + ")"), r = i.HighlightTypeNewUid), [n, r]
    }
    t.Vars = a, t.transformValidateAppId = u;
    var c = {
      acctId: "str",
      displayName: "str",
      website: "str"
     },
     h = {
      uid: "str",
      displayName: "str",
      email: "str"
     };
    var d, l = {
     str: function(e) {
      return "string" == typeof e
     },
     bool: function(e) {
      return "boolean" == typeof e
     },
     real: function(e) {
      return "number" == typeof e
     },
     int: function(e) {
      return "number" == typeof e && e - Math.floor(e) == 0
     },
     date: function(e) {
      return !!e && (e.constructor === Date ? !isNaN(e) : ("number" == typeof e || "string" == typeof e) && !isNaN(new Date(e)))
     },
     obj: function(e) {
      return !!e && "object" == typeof e
     }
    };
    ! function(e) {
     e.rec = "rec", e.user = "user", e.account = "account", e.consent = "consent", e.customEvent = "event"
    }(d = t.ApiType || (t.ApiType = {}))
   }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
     value: !0
    });
    var r = n(5),
     i = n(0),
     o = n(2),
     s = n(7),
     a = n(4);
    t.initWindex = function(e) {
     try {
      if (r.uaIsIE || r.uaIsEdge || function(e) {
        var t = [function() {
          throw new Error("")
         }, Function.prototype.toString].map(function(e) {
          try {
           return void e.call(null)
          } catch (e) {
           return e.stack || ""
          }
         }),
         n = t[0],
         r = t[1];
        if (!n || !r) return !1;
        for (var i = "\n".charCodeAt(0), o = Math.min(n.length, r.length), s = 1, a = s; a < o; a++) {
         var u = n.charCodeAt(n.length - a),
          c = r.charCodeAt(r.length - a);
         if (u != c) break;
         c != i && a != o - 1 || (s = a)
        }
        if (r.slice(0, r.length - s + 1).match(/\.js:\d+([:)]|$)/m)) return !1;
        var h = function(e) {
         return "function" == typeof e && Function.prototype.toString.call(e).indexOf("[native code]") < 0
        };
        return !(h(e.JSON.parse) || h(e.JSON.stringify) || h(e.Array) || h(e.Array.prototype.shift) || h(e.Array.isArray) || h(e.Object.prototype.toString) || h(e.Object.keys) || h(e.Object.values) || h(e.Object.prototype.hasOwnProperty) || h(e.setTimeout) || h(e.setInterval) || h(e.clearTimeout) || h(e.clearInterval))
       }(e)) return a.windex.done = !0, s.FSPromise.resolve();
      if (!e.document || a.windex.done) return s.FSPromise.resolve();
      i.logIfDebug("Window object doesn't look clean; creating windex.");
      var t = e.document.createElement("iframe");
      t.id = "FullStory-iframe", t.className = "fs-hide", t.style.display = "none";
      var n = e.document.body || e.document.head || e.document.documentElement || e.document;
      try {
       n.appendChild(t)
      } catch (e) {
       return s.FSPromise.resolve()
      }
      if (t.src = "about:blank", !t.contentWindow) return s.FSPromise.resolve();
      var u, c = function(e, t) {
       return {
        done: t,
        jsonParse: e.JSON.parse,
        jsonStringify: e.JSON.stringify,
        arrayShift: a.unbind(e.Array.prototype.shift),
        arrayIsArray: e.Array.isArray,
        objectToString: a.unbind(e.Object.prototype.toString),
        objectKeys: e.Object.keys,
        objectValues: e.Object.values,
        objectHasOwnProp: a.unbind(e.Object.prototype.hasOwnProperty),
        matchMedia: e.matchMedia ? a.unbind(e.matchMedia) : null,
        setWindowTimeout: a.unbind(e.setTimeout),
        setWindowInterval: a.unbind(e.setInterval),
        clearWindowTimeout: a.unbind(e.clearTimeout),
        clearWindowInterval: a.unbind(e.clearInterval)
       }
      }(t.contentWindow, !0);
      t.parentNode && t.parentNode.removeChild(t);
      var h = new s.FSPromise(function(e) {
       return u = e
      });
      return setTimeout(function() {
       try {
        c.jsonParse("[]").push(0), a.setWindex(c)
       } catch (e) {
        a.windex.done = !0
       }
       u()
      }), h
     } catch (e) {
      return o.FsBugSnag.sendToBugsnag(e, "error"), s.FSPromise.resolve()
     }
    }
   }]);