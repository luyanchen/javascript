var Omega = function(e, t) {
    var n = e.Omega;
    if (!n || !n.trackEvent) {
        var r,
        o,
        a,
        i,
        c = "OmegaSDK://",
        u = "didi",
        l = /iP(?:ad|hone|od)/i,
        s = [],
        d = "OMGH5PageView",
        f = "OMGH5Timing",
        g = "OMGH5Click",
        p = "OMGH5Touch",
        h = "omgh5sid",
        v = "fingerprint",
        m = "//omgup.xiaojukeji.com/api/webstat/x.gif",
        b = "//omega.xiaojukeji.com/api/report_fail",
        y = {},
        k = {},
        x = navigator.cookieEnabled ? 1: 0,
        C = function(e) {
            for (var n = t.cookie ? t.cookie.split("; ") : [], r = 0, o = n.length; o > r; r++) {
                var a = n[r].split("=");
                if (a[0] === e) return a[1]
            }
        },
        E = function(e, n, r) {
            t.cookie = e + "=" + n + (r ? "; expires=" + r: "") + "; path=/"
        },
        w = function() {
            var n = function() {
                try {
                    return !! e.sessionStorage
                } catch(t) {
                    return ! 0
                }
            },
            r = function() {
                try {
                    return !! e.localStorage
                } catch(t) {
                    return ! 0
                }
            },
            o = function() {
                var t = function() {
                    return "Microsoft Internet Explorer" === navigator.appName ? !0: "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0: !1
                },
                n = function() {
                    for (var e = [], t = 0, n = navigator.plugins.length; n > t; t++) {
                        for (var r = navigator.plugins[t], o = [], a = 0, i = r.length; i > a; a++) o.push(r[a].type + "~" + r[a].suffixes);
                        e.push(r.name + "::" + r.description + "::" + o.join(","))
                    }
                    return e.join(";")
                },
                r = function() {
                    if (e.ActiveXObject) {
                        for (var t = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"], n = [], r = 0, o = t.length; o > r; r++) {
                            var a = null;
                            try {
                                new ActiveXObject(name),
                                a = name
                            } catch(i) {}
                            n.push(a)
                        }
                        return n.join(";")
                    }
                    return ""
                };
                return t() ? r() : n()
            },
            a = function() {
                var e = t.createElement("canvas");
                return ! (!e.getContext || !e.getContext("2d"))
            },
            i = function() {
                var e = t.createElement("canvas"),
                n = e.getContext("2d"),
                r = "//www.xiaojukeji.com/";
                return n.textBaseline = "top",
                n.font = '14px "Arial"',
                n.textBaseline = "alphabetic",
                n.fillStyle = "#f60",
                n.fillRect(125, 1, 62, 20),
                n.fillStyle = "#069",
                n.fillText(r, 2, 15),
                n.fillStyle = "rgba(102, 204, 0, 0.7)",
                n.fillText(r, 4, 17),
                e.toDataURL()
            },
            c = function(e, t) {
                for (var n, r, o = 3 & e.length, a = e.length - o, i = t, c = 3432918353, u = 461845907, l = 0; a > l;) r = 255 & e.charCodeAt(l) | (255 & e.charCodeAt(++l)) << 8 | (255 & e.charCodeAt(++l)) << 16 | (255 & e.charCodeAt(++l)) << 24,
                ++l,
                r = (65535 & r) * c + (((r >>> 16) * c & 65535) << 16) & 4294967295,
                r = r << 15 | r >>> 17,
                r = (65535 & r) * u + (((r >>> 16) * u & 65535) << 16) & 4294967295,
                i ^= r,
                i = i << 13 | i >>> 19,
                n = 5 * (65535 & i) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295,
                i = (65535 & n) + 27492 + (((n >>> 16) + 58964 & 65535) << 16);
                switch (r = 0, o) {
                case 3:
                    r ^= (255 & e.charCodeAt(l + 2)) << 16;
                case 2:
                    r ^= (255 & e.charCodeAt(l + 1)) << 8;
                case 1:
                    r ^= 255 & e.charCodeAt(l),
                    r = (65535 & r) * c + (((r >>> 16) * c & 65535) << 16) & 4294967295,
                    r = r << 15 | r >>> 17,
                    r = (65535 & r) * u + (((r >>> 16) * u & 65535) << 16) & 4294967295,
                    i ^= r
                }
                return i ^= e.length,
                i ^= i >>> 16,
                i = 2246822507 * (65535 & i) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295,
                i ^= i >>> 13,
                i = 3266489909 * (65535 & i) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295,
                i ^= i >>> 16,
                i >>> 0
            },
            u = C(v);
            if (u) return u;
            var l = [];
            l.push(navigator.userAgent),
            l.push(navigator.language),
            l.push(screen.colorDepth),
            l.push(screen.height + "x" + screen.width),
            l.push((new Date).getTimezoneOffset()),
            l.push(n()),
            l.push(r()),
            l.push( !! e.indexedDB),
            l.push(typeof t.addBehavior),
            l.push(typeof e.openDatabase),
            l.push(navigator.cpuClass),
            l.push(navigator.platform),
            l.push(navigator.doNotTrack),
            l.push(o()),
            a() && l.push(i()),
            u = c(l.join("###"), 31) + "";
            var s = new Date;
            return s.setFullYear(s.getFullYear() + 10),
            E(v, u, s.toGMTString()),
            u
        },
        T = function() {
            return (Math.random() + "").substr(2, 12) + "-" + (new Date).getTime()
        },
        O = function(e) {
            a = e
        },
        S = T(),
        A = function() {
            var e = C(h);
            return e || E(h, e = S),
            e
        } (),
        R = function() {
            var e = navigator.userAgent;
            return /didigsui.*_(.+)_\d+$/gi.test(e) || /ddudriver.*_(.+)$/gi.test(e) || /didi\.passenger\/([\d.]+)/.test(e) ? RegExp.$1: void 0
        } (),
        j = function() {
            return new RegExp("[?&]" + h + "=([^&$]+)").test(location.search) ? RegExp.$1: void 0
        } (),
        P = function() {
            var e = {
                autoClick: !1,
                autoTouch: !1,
                autoError: !0,
                debugMode: !0,
                autoSendPageView: !0
            };
            if (n && n.constructor === Object) {
                for (var t in n) if (n.hasOwnProperty(t)) {
                    if ("productName" === t) {
                        a = n[t];
                        continue
                    }
                    e[t] = n[t]
                }
                n = null
            }
            return e
        } (),
        _ = function() {
            return "undefined" != typeof OmegaSDK
        } (),
        I = function() {
            if (!_) {
                var t = navigator.userAgent || navigator.vendor || e.opera;
                return t.indexOf(u) >= 0 && l.test(t)
            }
        } (),
        N = function() {
            return ! _ && !I
        } (),
        M = function(e) {
            return s.push(e),
            function() {
                for (var t = 0, n = s.length; n > t; t++) if (s[t] === e) return s.splice(t, 1)
            }
        },
        D = function(e) {
            return Object.prototype.toString.call(e).match(/\[object\s+(\w+)\]/)[1]
        },
        H = function(e, t) {
            return D(e) === t
        },
        L = function() {
            return e.addEventListener ? 
            function(e, t, n) {
                e.addEventListener(t, n, !1)
            }: e.attachEvent ? 
            function(e, t, n) {
                e.attachEvent("on" + t, n)
            }: void 0
        } (),
        U = function(e, n) {
            var r = n["class"];
            if (r) {
                var o = e,
                a = [];
                if (r.constructor === Array) for (var i = 0, c = r.length; c > i; i++) a.push(" " + r[i] + " ");
                else a.push(" " + r + " ");
                for (var c = a.length; o && o !== t.body && o !== t.documentElement;) {
                    for (var u = " " + o.className + " ", i = 0; c > i; i++) if (u.indexOf(a[i]) > -1) return o;
                    o = o.parentNode
                }
            }
            var l = n.attr;
            if (l) for (var o = e; o && o !== t.body && o !== t.documentElement;) if (o.hasAttribute(l)) {
                var s = o.getAttribute(l);
                if (!s) return o;
                try {
                    var d = JSON.parse(s);
                    return d.target = o,
                    d
                } catch(f) {
                    return o
                }
            } else o = o.parentNode
        },
        B = function(e) {
            o && (S = T()),
            W(d, e)
        },
        F = function() {
            var e = performance.timing,
            t = {
                t_fb: e.responseStart - e.navigationStart,
                t_rq: e.responseEnd - e.requestStart,
                t_tcp: e.connectEnd - e.connectStart,
                t_dns: e.domainLookupEnd - e.domainLookupStart,
                t_pgrd: e.loadEventEnd - e.navigationStart,
                t_dmrd: e.domContentLoadedEventEnd - e.navigationStart,
                t_psdm: e.domComplete - e.domInteractive
            };
            for (var n in k) t[n] = k[n];
            return t
        },
        G = function(n, r, c, u) {
            var l = (new Date).getTime(),
            s = "?e=" + n + "&c=" + x + "&_t=" + l + "&fp=" + w();
            if (S && (s += "&p=" + S), x && (s += "&s=" + A), r && (s += "&l=" + encodeURIComponent(r)), a && (s += "&pn=" + encodeURIComponent(a)), n !== d || o || (o = !0), i) {
                var f = t.getElementById("omega-debug-logs");
                if (!f) {
                    f = t.createElement("div"),
                    f.setAttribute("id", "omega-debug-logs");
                    var g = t.createElement("div");
                    g.setAttribute("id", "omega-debug-logs-close"),
                    g.style.cssText = "position:absolute;right:0;top:0;height:20px;width:20px;text-align:center;line-height:20px;border-radius:4px;background:#888;cursor:pointer;color:#fff;opacity:0.7;",
                    g.innerHTML = "&times;",
                    f.appendChild(g),
                    t.documentElement.appendChild(f),
                    g.onclick = function(e) {
                        f.style.display = "none"
                    },
                    f.onclick = function(t) {
                        t ? t.stopPropagation() : e.event.cancelBubble = !0
                    },
                    f.addEventListener("touchmove", 
                    function(e) {
                        if (e) {
                            var t = e.touches && e.touches[0] || e.changedTouched && e.changedTouched[0],
                            n = t.pageY - this.clientHeight / 2;
                            this.style.top = n + "px"
                        }
                    }),
                    f.style.cssText = "position:fixed;bottom:0;left:5px;right:5px;border:1px solid #ddd;border-radius:4px;font-size:12px;padding:10px;background:#fff;line-height:16px;max-height:72px;overflow:auto;z-index:99999;word-break:break-all"
                }
                s += "&attrs=" + JSON.stringify(c);
                var p = t.createElement("div");
                return p.innerHTML = s.substr(1).replace(/\&/g, ","),
                f.appendChild(p),
                f.style.display = "block",
                void(t.getElementById("omega-debug-logs-close").style.top = (f.scrollTop = f.scrollHeight) - f.clientHeight + "px")
            }
            var h = e["_t_ig" + l] = new Image;
            h.onload = function() {
                try {
                    h.onload = h.onerror = h.onabort = null,
                    delete e["_t_ig" + l]
                } finally {
                    u && u(n, r, c)
                }
            },
            h.onerror = h.onabort = function() {
                var t = +(h.getAttribute("count") || 0);
                if (h.setAttribute("count", ++t), 4 > t) h.src = h.src += "&_rt=" + t;
                else try {
                    h.onload = h.onerror = h.onabort = null,
                    h = e["_t_ig" + l] = new Image,
                    h.onload = h.onerror = h.onabort = function() {
                        h.onload = h.onerror = h.onabort = null,
                        delete e["_t_ig" + l]
                    },
                    h.src = b + s
                } catch(n) {}
            },
            s += "&attrs=" + encodeURIComponent(JSON.stringify(c)),
            h.src = m + s
        },
        V = function(e) {
            for (var t = e.parentNode.children, n = 0, r = t.length; r > n; n++) if (t[n] === e) return n
        },
        X = function(e) {
            var t = [],
            n = e;
            try {
                for (;
                "BODY" !== n.nodeName;) t.unshift(V(n)),
                n = n.parentNode
            } catch(n) {
                t.unshift("err")
            }
            return t.length ? "0-" + t.join("-") : "0"
        },
        J = function(n, r, o, a) {
            var i = {};
            r = r || e.event;
            var c = r.target || r.srcElement;
            if (o && H(o, "Object")) {
                var u = U(c, o);
                if (u) {
                    if (H(u, "Object")) {
                        if (n = u.e || n, u.attrs && H(u.attrs, "Object")) for (var l in u.attrs) i[l] = u.attrs[l];
                        c = u.target
                    }
                } else if (!a) return
            } else if (!a) return;
            if (c.id && (i.id = c.id), c.className && (i["class"] = c.className), c.href && (i.href = encodeURIComponent(c.href)), c.getBoundingClientRect) {
                var s = c.getBoundingClientRect();
                i.ex = Math.round(s.left),
                i.ey = Math.round(s.top),
                s.width && (i.ew = Math.round(s.width)),
                s.height && (i.eh = Math.round(s.height))
            } ! i.eh && c.offsetHeight && (i.eh = c.offsetHeight),
            !i.ew && c.offsetWidth && (i.ew = c.offsetWidth);
            var d = t.documentElement.scrollLeft || t.body && t.body.scrollLeft || 0,
            f = t.documentElement.scrollTop || t.body && t.body.scrollTop || 0,
            g = r.pageX || r.clientX + d,
            p = r.pageY || r.clientY + f;
            i.x = g,
            i.y = p,
            i.lv = X(c),
            W(n, c.tagName, i, c)
        },
        Y = function(e) {
            for (var t = arguments.length, n = {
                eventId: e
            },
            r = 1; t > r; r++) {
                var o = arguments[r],
                a = D(o);
                switch (a) {
                case "String":
                    n.eventLabel = o;
                    break;
                case "Object":
                    n.attrs = o;
                    break;
                case "Function":
                    n.callback = o;
                    break;
                case "Undefined":
                case "Null":
                    break;
                default:
                    n.target = o
                }
            }
            return n
        },
        W = function() {
            var n = Y.apply(null, arguments),
            o = n.eventId,
            i = n.eventLabel || "",
            u = n.attrs || {},
            l = n.target,
            s = n.callback;
            u.v = u.v || location.href,
            u.r = u.r || t.referrer || "";
            for (var d in P) u.hasOwnProperty(d) || (u[d] = P[d]);
            if (u = z(o, u, l), u.v = encodeURIComponent(u.v), u.r = encodeURIComponent(u.r), j && (u.rs = j), u.h = e.screen.height, u.w = e.screen.width, R && (u.av = R), N) G(o, i, u, s);
            else {
                a && (u.pn = a);
                var f = JSON.stringify(u);
                _ ? OmegaSDK.trackEvent(o, i, f) : I && (r.src = c + "trackEvent?e=" + o + "&l=" + i + "&attrs=" + encodeURIComponent(f)),
                s && s(o, i, u)
            }
        },
        $ = function(e, n, o) {
            var i = {
                v: n || location.href,
                line: o || 0,
                r: t.referrer
            };
            if (R && (i.av = R), N) G("OMGH5JsError", encodeURIComponent(e), i);
            else {
                a && (i.pn = a);
                var u = JSON.stringify(i);
                _ ? OmegaSDK.trackError(e, u) : I && (r.src = c + "trackError?msg=" + encodeURIComponent(e) + "&attrs=" + encodeURIComponent(u))
            }
        },
        K = function() {
            if (!y.jserror) {
                y.jserror = 1;
                var t = e.onerror;
                e.onerror = function(n, r, o) {
                    $(n, r, o),
                    "function" == typeof t && t.apply(e, arguments)
                }
            }
        },
        z = function(e, t, n) {
            t = t || {};
            for (var r = 0, o = s.length; o > r; r++) {
                var a = s[r].call(n, e, t, n);
                if (a && H(a, "Object")) for (var i in a) a.hasOwnProperty(i) && (t[i] = a[i])
            }
            return t
        },
        q = function(e, n, r, o) {
            y[e] || (y[e] = 1, L(t, e, 
            function(e) {
                J(n, e, r, o)
            }))
        },
        Q = function(t) {
            e.performance && performance.timing && H(t, "String") && (k["t_" + t] = parseInt(performance.now()))
        },
        Z = function(e) {
            q("click", g, e, 1)
        },
        ee = function(e) {
            q("touchstart", p, e, 1)
        },
        te = function(e) {
            q("click", g, e)
        },
        ne = function(e) {
            q("click", p, e)
        },
        re = function(e) {
            i = e !== !1
        },
        oe = function() {
            var t = function() {
                var t = {};
                e.performance && performance.timing && (t = F()),
                W(f, t)
            };
            o ? t() : setTimeout(t, 30)
        };
        I && (r = t.createElement("iframe"), r.style.display = "none", r.name = "omegaIframe", t.documentElement.appendChild(r)),
        P.autoClick && Z(),
        P.autoTouch && ee(),
        P.autoError && K(),
        P.debugMode && re();
        var ae = P.autoSendPageView;
        return delete P.autoClick,
        delete P.autoTouch,
        delete P.autoError,
        delete P.debugMode,
        delete P.autoSendPageView,
        ae && setTimeout(B, 10),
        {
            trackEvent: W,
            trackError: $,
            addTrackHandler: M,
            enableClickAutoTracker: Z,
            enableTouchAutoTracker: ee,
            enableClickFilterTracker: te,
            enableTouchFilterTracker: ne,
            trackPerformance: oe,
            enableDebugMode: re,
            setProduct: O,
            sendPageView: B,
            markTimePoint: Q,
            sid: function() {
                return A
            }
        }
    }
} (window, document);
//# sourceMappingURL=output/omega/0.1.2/omega.min.js.map
