require = function t(e, a, o) {
    function n(r, s) {
     if (!a[r]) {
      if (!e[r]) {
       var l = "function" == typeof require && require;
       if (!s && l) return l(r, !0);
       if (i) return i(r, !0);
       var u = new Error("Cannot find module '" + r + "'");
       throw u.code = "MODULE_NOT_FOUND", u
      }
      var c = a[r] = {
       exports: {}
      };
      e[r][0].call(c.exports, function(t) {
       var a = e[r][1][t];
       return n(a || t)
      }, c, c.exports, t, e, a, o)
     }
     return a[r].exports
    }
    for (var i = "function" == typeof require && require, r = 0; r < o.length; r++) n(o[r]);
    return n
   }({
    1: [function(t, e, a) {
     "use strict";
     var o = t("jquery"),
      n = 15e3;
     e.exports = {
      initialize: function() {
       o("#alert-messages div").length > 0 && setTimeout(function() {
        o("#alert-messages .alert:not([data-permanent]):not(.permanent)").alert("close")
       }, n)
      },
      postAlertMessage: function(t, e, a) {
       "error" === (e = e || "info") && (e = "danger");
       var i = o("<div/>").attr("role", "alert").addClass("start-hidden alert alert-" + e + " alert-dismissible fade show text-center mb-4");
       i.append(o('<button><span aria-hidden="true">&times;</span></button>').attr({
        type: "button",
        class: "close",
        "data-dismiss": "alert",
        "aria-label": "Close"
       })), i.append(t), o("#alert-messages-dynamic").append(i), setTimeout(function() {
        i.fadeIn()
       }, 0), a || setTimeout(function() {
        i.alert("close")
       }, n)
      }
     }
    }, {
     jquery: void 0
    }],
    2: [function(t, e, a) {
     "use strict";
     var o, n = {};
     n.setPageAutoRefresh = function(t) {
      o || (o = setInterval(function() {
       "visible" === document.visibilityState && document.location.reload()
      }, 1e3 * t))
     }, n.clearPageAutoRefresh = function() {
      o && (clearInterval(o), o = 0)
     }, e.exports = n
    }, {}],
    3: [function(t, e, a) {
     "use strict";
     var o = t("jquery"),
      n = t("moment");
     e.exports = {
      initialize: function() {
       o("[data-counter]").each(function() {
        for (var t = o(this), e = t.data("class") || "banner-counter-digit", a = parseFloat(t.data("start")) || 0, i = parseFloat(t.data("rate")) || 1, r = (n.utc() - n.utc("20150101")) / 1e3 / 60 / 60, s = Math.round(a + i * r), l = 1; s > 0; l++) {
         var u = o("<span/>").addClass(e).text(parseInt(s % 10));
         l % 3 == 0 && u.addClass("ml-3"), t.prepend(u), s = Math.floor(s / 10)
        }
       })
      }
     }
    }, {
     jquery: void 0,
     moment: void 0
    }],
    4: [function(t, e, a) {
     "use strict";
   
     function o(t, e, a) {
      return e in t ? Object.defineProperty(t, e, {
       value: a,
       enumerable: !0,
       configurable: !0,
       writable: !0
      }) : t[e] = a, t
     }
     var n = t("jquery"),
      i = t("moment"),
      r = t("jskit/general/URLHistory");
     e.exports = {
      initialize: function() {
       n("[data-daterangepicker]").each(function() {
        var t = n(this),
         e = t.closest("form"),
         a = e.find("input[name=start]"),
         s = e.find("input[name=end]"),
         l = e.find("span.caret"),
         u = t.data("daterangepicker-start"),
         c = t.data("daterangepicker-end"),
         d = t.data("daterangepicker-last-24h"),
         f = {
          Today: [i.utc(), i.utc()],
          Yesterday: [i.utc().subtract(1, "days"), i.utc().subtract(1, "days")],
          "Last 7 Days": [i.utc().subtract(6, "days"), i.utc()],
          "Last 30 Days": [i.utc().subtract(29, "days"), i.utc()],
          "This Month": [i.utc().startOf("month"), i.utc().endOf("month")],
          "Last Month": [i.utc().subtract(1, "month").startOf("month"), i.utc().subtract(1, "month").endOf("month")],
          "This Year": [i.utc().startOf("year"), i.utc().endOf("year")],
          "Last Year": [i.utc().subtract(1, "year").startOf("year"), i.utc().subtract(1, "year").endOf("year")]
         },
         p = Object.assign({}, d ? {
          "Last 24 Hours": [null, null]
         } : {}, f);
   
        function m(t, e) {
         a.val(t.isValid() ? t.format("YYYYMMDD") : ""), s.val(e.isValid() ? e.format("YYYYMMDD") : "")
        }
        t.daterangepicker({
         drops: "down",
         opens: "left",
         autoUpdateInput: !0,
         autoApply: !0,
         startDate: u ? new Date(u) : new Date,
         endDate: c ? new Date(c) : new Date,
         alwaysShowCalendars: !0,
         showCustomRangeLabel: !0,
         ranges: p,
         locale: {
          format: "D MMM YYYY",
          separator: " to "
         }
        }, m);
        var g = t.data("daterangepicker");
        m(g.startDate, g.endDate), t.on("apply.daterangepicker", function() {
         e.submit()
        }), l.on("click", function() {
         t.focus()
        }), e.on("submit", function(t) {
         var e;
         t.preventDefault(), window.location = r.updateQueryString(null, (o(e = {}, a.attr("name"), a.val()), o(e, s.attr("name"), s.val()), e))
        })
       })
      }
     }
    }, {
     jquery: void 0,
     "jskit/general/URLHistory": void 0,
     moment: void 0
    }],
    5: [function(t, e, a) {
     "use strict";
     var o = t("jquery"),
      n = t("jskit/general/MapProjections"),
      i = {
       solid: {
        cls: n.RobinsonProjection,
        settings: {
         scaleX: 1.2,
         translateX: -.055,
         scaleY: 2.4,
         translateY: -.085
        }
       },
       dotted: {
        cls: n.RobinsonProjection,
        settings: {
         scaleX: 1.23,
         translateX: -.05,
         scaleY: 2.35,
         translateY: -.09
        }
       }
      };
     e.exports = {
      initialize: function(t) {
       ! function(t) {
        o(t = t || "[data-map-with-pins]").each(function() {
         var t = o(this),
          e = i[t.data("map-with-pins")],
          a = new e.cls(e.settings);
         t.children("span, a").each(function() {
          var t = o(this),
           e = t.data("country"),
           i = parseFloat(t.data("offset-x")) || 0,
           r = parseFloat(t.data("offset-y")) || 0;
          if (e) {
           var s = n.getCountryLatLon(e);
           if (s) {
            var l = a.projectToPercent(s.lat, s.lon);
            t.css({
             left: l.x + i + "%",
             top: l.y + r + "%"
            })
           } else console.log("Invalid country for map: " + e)
          }
         })
        })
       }(t)
      }
     }
    }, {
     jquery: void 0,
     "jskit/general/MapProjections": void 0
    }],
    6: [function(t, e, a) {
     "use strict";
     var o = t("underscore"),
      n = t("jquery"),
      i = {
       messageBox: function(t) {
        (t = o.clone(t)).title = t.title || "", t.message = t.message || "", t.htmlMessage = t.htmlMessage || "", t.confirm = !!t.confirm, t.onConfirm = t.onConfirm || null, t.largeModal = !!t.largeModal;
        var e = n("#uptime-message-box");
        e.find(".modal-title").html(t.title), e.find(".modal-dialog").toggleClass("modal-lg", t.largeModal), t.htmlMessage ? e.find(".modal-body").html(t.htmlMessage) : e.find(".modal-body").text(t.message), e.find(".modal-footer > button[data-type=alert]").toggle(!t.confirm), e.find(".modal-footer > button[data-type=confirm]").toggle(t.confirm);
        var a = e.find(".modal-footer > button[data-event]");
        a.off("click"), t.onConfirm && a.one("click", t.onConfirm), e.addClass("fade"), e.modal("show"), e.removeClass("fade")
       },
       closeMessageBox: function() {
        n("#uptime-message-box").modal("hide")
       },
       alertBox: function(t, e) {
        i.messageBox({
         title: e,
         message: t
        })
       },
       confirmBox: function(t, e, a) {
        !a && o.isFunction(e) && (a = e, e = ""), i.messageBox({
         title: e,
         message: t,
         confirm: !0,
         onConfirm: a
        })
       },
       validationErrorBox: function(t) {
        var e = "";
        n.each(t.fields, function(t, a) {
         e += "<li>" + a + "</li>"
        }), e = '<p class="mb-2">' + t.error + '</p><ul class="list-spaced">' + e + "</ul>", i.messageBox({
         title: "An error occurred",
         htmlMessage: e
        })
       }
      };
     e.exports = i
    }, {
     jquery: void 0,
     underscore: void 0
    }],
    7: [function(t, e, a) {
     "use strict";
     var o = t("jquery"),
      n = t("jskit/general/Ajax");
     e.exports = {
      initAll: function() {
       o(document).ready(function() {
        o('[data-toggle="tooltip"]').tooltip()
       }), n.setDefaultSettings({
        useAutomaticWaitCursor: !0,
        globalErrorHandler: function(e, a, o, n) {
         t("uptime").alertBox("An error occurred - please reload the page and try again.", e)
        }
       }), o("[data-use-select2]").select2({
        minimumResultsForSearch: 10
       }), o("[data-intl-tel]").each(function() {
        var t = o(this),
         e = t.attr("name");
        t.attr("type", "tel"), t.attr("name", null), t.intlTelInput({
         utilsScript: "/static/dddd/js/intl-tel-input/utils.js",
         geoIpLookup: function(t) {
          o.get("//geoip.nekudo.com/api/", function() {}, "jsonp").always(function(e) {
           var a = e && e.country && e.country.code && e.country.code.toLowerCase();
           t(a || "us")
          })
         },
         initialCountry: "auto",
         nationalMode: !0,
         numberType: "MOBILE",
         preferredCountries: ["us"],
         onlyCountries: [],
         excludeCountries: [],
         hiddenInput: e
        })
       }), o("[data-scroll]").on("click", function(t) {
        t.preventDefault();
        var e = o(o(this).data("scroll"));
        o("html, body").animate({
         scrollTop: e.offset().top
        })
       })
      }
     }
    }, {
     jquery: void 0,
     "jskit/general/Ajax": void 0,
     uptime: "uptime"
    }],
    8: [function(t, e, a) {
     "use strict";
     var o = t("jquery");
     e.exports = {
      initUptimeNavigation: function() {
       var t = o(".ut-sidebar"),
        e = t.find("li.has-submenu > a, li.no-submenu > a"),
        a = t.find(".sidebar-content"),
        n = t.find(".nav-toggle");
       e.on("click", function(t) {
        "#" === o(this).attr("href") && t.preventDefault();
        var a = o(this).parent("li").hasClass("open");
        e.parent("li.open").removeClass("open").find("ul").css("display", "block").slideUp(100), a || o(this).parent("li").addClass("open").find("ul").css("display", "none").slideDown(100)
       }), n.on("click", function(t) {
        t.preventDefault(), o(this).hasClass("open") ? (a.slideUp(500), o(this).removeClass("open")) : (o(this).addClass("open"), a.slideDown(500))
       });
       var i = t.find(".subaccounts").data("subaccount"),
        r = t.find("#sidebar-subaccount-selector");
       r.on("change", function(t) {
        o(this.form).submit()
       }), r.find('option[value="' + i + '"]').prop("selected", !0)
      }
     }
    }, {
     jquery: void 0
    }],
    uptime: [function(t, e, a) {
     "use strict";
   
     function o() {
      var e = t("jquery");
      window.$ = e, window.jQuery = e, window.moment = t("moment"), t("select2"), t("bootstrap-slider"), t("bootstrap-daterangepicker"), t("tempusdominus-bootstrap-4"), t("intl-tel-input"), t("floatthead"), t("popper.js"), t("bootstrap"), t("highlight.js/lib/highlight.js").registerLanguage("html", t("highlight.js/lib/languages/xml.js")), e(document).ready(function() {
       t("./global/misc").initAll(), t("./global/alerts").initialize(), t("./global/sidebar").initUptimeNavigation(), t("./global/daterangepicker").initialize(), t("./global/maps").initialize(), t("./global/counters").initialize()
      })
     }
     var n = t("./global/messagebox"),
      i = t("./global/autorefresh"),
      r = t("./global/maps"),
      s = t("./global/alerts");
     e.exports = {
      initialize: function() {
       if (window.Promise) o();
       else {
        var t = document.createElement("script");
        t.src = "https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js", t.onload = o, t.onerror = o, document.head.appendChild(t)
       }
      },
      postAlertMessage: s.postAlertMessage,
      messageBox: n.messageBox,
      closeMessageBox: n.closeMessageBox,
      alertBox: n.alertBox,
      confirmBox: n.confirmBox,
      validationErrorBox: n.validationErrorBox,
      setPageAutoRefresh: i.setPageAutoRefresh,
      clearPageAutoRefresh: i.clearPageAutoRefresh,
      initializeMap: r.initialize
     }
    }, {
     "./global/alerts": 1,
     "./global/autorefresh": 2,
     "./global/counters": 3,
     "./global/daterangepicker": 4,
     "./global/maps": 5,
     "./global/messagebox": 6,
     "./global/misc": 7,
     "./global/sidebar": 8,
     bootstrap: void 0,
     "bootstrap-daterangepicker": void 0,
     "bootstrap-slider": void 0,
     floatthead: void 0,
     "highlight.js/lib/highlight.js": void 0,
     "highlight.js/lib/languages/xml.js": void 0,
     "intl-tel-input": void 0,
     jquery: void 0,
     moment: void 0,
     "popper.js": void 0,
     select2: void 0,
     "tempusdominus-bootstrap-4": void 0
    }]
   }, {}, []);