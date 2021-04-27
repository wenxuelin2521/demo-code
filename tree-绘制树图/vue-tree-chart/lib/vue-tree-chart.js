! function (t, n) {
  "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports["vue-tree-chart"] = n() : t["vue-tree-chart"] = n()
}(window, (function () {
  return function (t) {
    var n = {};

    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        enumerable: !0,
        get: r
      })
    }, e.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }, e.t = function (t, n) {
      if (1 & n && (t = e(t)), 8 & n) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (e.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }), 2 & n && "string" != typeof t)
        for (var i in t) e.d(r, i, function (n) {
          return t[n]
        }.bind(null, i));
      return r
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n)
    }, e.p = "", e(e.s = 9)
  }([function (t, n, e) {
    var r = e(5);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    e(3)(r, i);
    r.locals && (t.exports = r.locals)
  }, function (t, n, e) {
    var r = e(8);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    e(3)(r, i);
    r.locals && (t.exports = r.locals)
  }, function (t, n) {
    t.exports = function (t) {
      var n = [];
      return n.toString = function () {
        return this.map((function (n) {
          var e = function (t, n) {
            var e = t[1] || "",
              r = t[3];
            if (!r) return e;
            if (n && "function" == typeof btoa) {
              var i = (u = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(u)))) + " */"),
                o = r.sources.map((function (t) {
                  return "/*# sourceURL=" + r.sourceRoot + t + " */"
                }));
              return [e].concat(o).concat([i]).join("\n")
            }
            var u;
            return [e].join("\n")
          }(n, t);
          return n[2] ? "@media " + n[2] + "{" + e + "}" : e
        })).join("")
      }, n.i = function (t, e) {
        "string" == typeof t && (t = [
          [null, t, ""]
        ]);
        for (var r = {}, i = 0; i < this.length; i++) {
          var o = this[i][0];
          "number" == typeof o && (r[o] = !0)
        }
        for (i = 0; i < t.length; i++) {
          var u = t[i];
          "number" == typeof u[0] && r[u[0]] || (e && !u[2] ? u[2] = e : e && (u[2] = "(" + u[2] + ") and (" + e + ")"), n.push(u))
        }
      }, n
    }
  }, function (t, n, e) {
    var r, i, o = {},
      u = (r = function () {
        return window && document && document.all && !window.atob
      }, function () {
        return void 0 === i && (i = r.apply(this, arguments)), i
      }),
      a = function (t, n) {
        return n ? n.querySelector(t) : document.querySelector(t)
      },
      c = function (t) {
        var n = {};
        return function (t, e) {
          if ("function" == typeof t) return t();
          if (void 0 === n[t]) {
            var r = a.call(this, t, e);
            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
              r = r.contentDocument.head
            } catch (t) {
              r = null
            }
            n[t] = r
          }
          return n[t]
        }
      }(),
      f = null,
      s = 0,
      l = [],
      h = e(6);

    function d(t, n) {
      for (var e = 0; e < t.length; e++) {
        var r = t[e],
          i = o[r.id];
        if (i) {
          i.refs++;
          for (var u = 0; u < i.parts.length; u++) i.parts[u](r.parts[u]);
          for (; u < r.parts.length; u++) i.parts.push(m(r.parts[u], n))
        } else {
          var a = [];
          for (u = 0; u < r.parts.length; u++) a.push(m(r.parts[u], n));
          o[r.id] = {
            id: r.id,
            refs: 1,
            parts: a
          }
        }
      }
    }

    function p(t, n) {
      for (var e = [], r = {}, i = 0; i < t.length; i++) {
        var o = t[i],
          u = n.base ? o[0] + n.base : o[0],
          a = {
            css: o[1],
            media: o[2],
            sourceMap: o[3]
          };
        r[u] ? r[u].parts.push(a) : e.push(r[u] = {
          id: u,
          parts: [a]
        })
      }
      return e
    }

    function v(t, n) {
      var e = c(t.insertInto);
      if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = l[l.length - 1];
      if ("top" === t.insertAt) r ? r.nextSibling ? e.insertBefore(n, r.nextSibling) : e.appendChild(n) : e.insertBefore(n, e.firstChild), l.push(n);
      else if ("bottom" === t.insertAt) e.appendChild(n);
      else {
        if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var i = c(t.insertAt.before, e);
        e.insertBefore(n, i)
      }
    }

    function y(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var n = l.indexOf(t);
      n >= 0 && l.splice(n, 1)
    }

    function g(t) {
      var n = document.createElement("style");
      if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
        var r = function () {
          0;
          return e.nc
        }();
        r && (t.attrs.nonce = r)
      }
      return _(n, t.attrs), v(t, n), n
    }

    function _(t, n) {
      Object.keys(n).forEach((function (e) {
        t.setAttribute(e, n[e])
      }))
    }

    function m(t, n) {
      var e, r, i, o;
      if (n.transform && t.css) {
        if (!(o = "function" == typeof n.transform ? n.transform(t.css) : n.transform.default(t.css))) return function () {};
        t.css = o
      }
      if (n.singleton) {
        var u = s++;
        e = f || (f = g(n)), r = w.bind(null, e, u, !1), i = w.bind(null, e, u, !0)
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = function (t) {
        var n = document.createElement("link");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", _(n, t.attrs), v(t, n), n
      }(n), r = T.bind(null, e, n), i = function () {
        y(e), e.href && URL.revokeObjectURL(e.href)
      }) : (e = g(n), r = M.bind(null, e), i = function () {
        y(e)
      });
      return r(t),
        function (n) {
          if (n) {
            if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
            r(t = n)
          } else i()
        }
    }
    t.exports = function (t, n) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      (n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || "boolean" == typeof n.singleton || (n.singleton = u()), n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
      var e = p(t, n);
      return d(e, n),
        function (t) {
          for (var r = [], i = 0; i < e.length; i++) {
            var u = e[i];
            (a = o[u.id]).refs--, r.push(a)
          }
          t && d(p(t, n), n);
          for (i = 0; i < r.length; i++) {
            var a;
            if (0 === (a = r[i]).refs) {
              for (var c = 0; c < a.parts.length; c++) a.parts[c]();
              delete o[a.id]
            }
          }
        }
    };
    var x, b = (x = [], function (t, n) {
      return x[t] = n, x.filter(Boolean).join("\n")
    });

    function w(t, n, e, r) {
      var i = e ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = b(n, i);
      else {
        var o = document.createTextNode(i),
          u = t.childNodes;
        u[n] && t.removeChild(u[n]), u.length ? t.insertBefore(o, u[n]) : t.appendChild(o)
      }
    }

    function M(t, n) {
      var e = n.css,
        r = n.media;
      if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = e;
      else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(e))
      }
    }

    function T(t, n, e) {
      var r = e.css,
        i = e.sourceMap,
        o = void 0 === n.convertToAbsoluteUrls && i;
      (n.convertToAbsoluteUrls || o) && (r = h(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
      var u = new Blob([r], {
          type: "text/css"
        }),
        a = t.href;
      t.href = URL.createObjectURL(u), a && URL.revokeObjectURL(a)
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(0);
    e.n(r).a
  }, function (t, n, e) {
    (t.exports = e(2)(!1)).push([t.i, ".tree-container .node {\n  fill: grey !important;\n}\n.tree-container .link {\n  stroke-width: 2px !important;\n  fill: transparent !important;\n  stroke: #cecece !important;\n}\n", ""])
  }, function (t, n) {
    t.exports = function (t) {
      var n = "undefined" != typeof window && window.location;
      if (!n) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var e = n.protocol + "//" + n.host,
        r = e + n.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function (t, n) {
        var i, o = n.trim().replace(/^"(.*)"$/, (function (t, n) {
          return n
        })).replace(/^'(.*)'$/, (function (t, n) {
          return n
        }));
        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? t : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? e + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
      }))
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(1);
    e.n(r).a
  }, function (t, n, e) {
    (t.exports = e(2)(!1)).push([t.i, ".tree-node-item-enter[data-v-56c15873],\n.tree-node-item-leave-to[data-v-56c15873] {\n  transition-timing-function: ease-in-out;\n  transition: transform 0.8s;\n  opacity: 0;\n}\n.tree-node-item-enter-active[data-v-56c15873],\n.tree-node-item-leave-active[data-v-56c15873] {\n  transition-timing-function: ease-in-out;\n  transition: all 0.8s;\n}\n.tree-container[data-v-56c15873] {\n  position: relative;\n  overflow: hidden;\n}\n.tree-container .vue-tree[data-v-56c15873] {\n  position: relative;\n}\n.tree-container > svg[data-v-56c15873],\n.tree-container .dom-container[data-v-56c15873] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: visible;\n  transform-origin: 0 50%;\n}\n.tree-container .dom-container[data-v-56c15873] {\n  z-index: 1;\n}\n.node-slot[data-v-56c15873] {\n  cursor: pointer;\n  position: absolute;\n  background-color: transparent;\n  box-sizing: border-box;\n  transform: translate(-50%, -50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: content-box;\n  transition: all 0.8s;\n  transition-timing-function: ease-in-out;\n}\n", ""])
  }, function (t, n, e) {
    "use strict";
    e.r(n);
    var r = {};
    e.r(r), e.d(r, "version", (function () {
      return o
    })), e.d(r, "bisect", (function () {
      return l
    })), e.d(r, "bisectRight", (function () {
      return f
    })), e.d(r, "bisectLeft", (function () {
      return s
    })), e.d(r, "ascending", (function () {
      return u
    })), e.d(r, "bisector", (function () {
      return a
    })), e.d(r, "cross", (function () {
      return p
    })), e.d(r, "descending", (function () {
      return v
    })), e.d(r, "deviation", (function () {
      return _
    })), e.d(r, "extent", (function () {
      return m
    })), e.d(r, "histogram", (function () {
      return L
    })), e.d(r, "thresholdFreedmanDiaconis", (function () {
      return U
    })), e.d(r, "thresholdScott", (function () {
      return D
    })), e.d(r, "thresholdSturges", (function () {
      return z
    })), e.d(r, "max", (function () {
      return O
    })), e.d(r, "mean", (function () {
      return q
    })), e.d(r, "median", (function () {
      return I
    })), e.d(r, "merge", (function () {
      return j
    })), e.d(r, "min", (function () {
      return F
    })), e.d(r, "pairs", (function () {
      return h
    })), e.d(r, "permute", (function () {
      return Y
    })), e.d(r, "quantile", (function () {
      return P
    })), e.d(r, "range", (function () {
      return S
    })), e.d(r, "scan", (function () {
      return B
    })), e.d(r, "shuffle", (function () {
      return H
    })), e.d(r, "sum", (function () {
      return $
    })), e.d(r, "ticks", (function () {
      return C
    })), e.d(r, "tickIncrement", (function () {
      return A
    })), e.d(r, "tickStep", (function () {
      return R
    })), e.d(r, "transpose", (function () {
      return X
    })), e.d(r, "variance", (function () {
      return g
    })), e.d(r, "zip", (function () {
      return W
    })), e.d(r, "axisTop", (function () {
      return rt
    })), e.d(r, "axisRight", (function () {
      return it
    })), e.d(r, "axisBottom", (function () {
      return ot
    })), e.d(r, "axisLeft", (function () {
      return ut
    })), e.d(r, "brush", (function () {
      return Oo
    })), e.d(r, "brushX", (function () {
      return Uo
    })), e.d(r, "brushY", (function () {
      return Do
    })), e.d(r, "brushSelection", (function () {
      return Po
    })), e.d(r, "chord", (function () {
      return Xo
    })), e.d(r, "ribbon", (function () {
      return uu
    })), e.d(r, "nest", (function () {
      return su
    })), e.d(r, "set", (function () {
      return _u
    })), e.d(r, "map", (function () {
      return fu
    })), e.d(r, "keys", (function () {
      return mu
    })), e.d(r, "values", (function () {
      return xu
    })), e.d(r, "entries", (function () {
      return bu
    })), e.d(r, "color", (function () {
      return he
    })), e.d(r, "rgb", (function () {
      return ye
    })), e.d(r, "hsl", (function () {
      return xe
    })), e.d(r, "lab", (function () {
      return ke
    })), e.d(r, "hcl", (function () {
      return Le
    })), e.d(r, "cubehelix", (function () {
      return je
    })), e.d(r, "dispatch", (function () {
      return dt
    })), e.d(r, "drag", (function () {
      return Gn
    })), e.d(r, "dragDisable", (function () {
      return Yn
    })), e.d(r, "dragEnable", (function () {
      return Bn
    })), e.d(r, "dsvFormat", (function () {
      return Su
    })), e.d(r, "csvParse", (function () {
      return Nu
    })), e.d(r, "csvParseRows", (function () {
      return Eu
    })), e.d(r, "csvFormat", (function () {
      return Cu
    })), e.d(r, "csvFormatRows", (function () {
      return Au
    })), e.d(r, "tsvParse", (function () {
      return zu
    })), e.d(r, "tsvParseRows", (function () {
      return Lu
    })), e.d(r, "tsvFormat", (function () {
      return Pu
    })), e.d(r, "tsvFormatRows", (function () {
      return Uu
    })), e.d(r, "easeLinear", (function () {
      return Ri
    })), e.d(r, "easeQuad", (function () {
      return Pi
    })), e.d(r, "easeQuadIn", (function () {
      return zi
    })), e.d(r, "easeQuadOut", (function () {
      return Li
    })), e.d(r, "easeQuadInOut", (function () {
      return Pi
    })), e.d(r, "easeCubic", (function () {
      return Oi
    })), e.d(r, "easeCubicIn", (function () {
      return Ui
    })), e.d(r, "easeCubicOut", (function () {
      return Di
    })), e.d(r, "easeCubicInOut", (function () {
      return Oi
    })), e.d(r, "easePoly", (function () {
      return ji
    })), e.d(r, "easePolyIn", (function () {
      return qi
    })), e.d(r, "easePolyOut", (function () {
      return Ii
    })), e.d(r, "easePolyInOut", (function () {
      return ji
    })), e.d(r, "easeSin", (function () {
      return $i
    })), e.d(r, "easeSinIn", (function () {
      return Bi
    })), e.d(r, "easeSinOut", (function () {
      return Hi
    })), e.d(r, "easeSinInOut", (function () {
      return $i
    })), e.d(r, "easeExp", (function () {
      return Wi
    })), e.d(r, "easeExpIn", (function () {
      return Xi
    })), e.d(r, "easeExpOut", (function () {
      return Vi
    })), e.d(r, "easeExpInOut", (function () {
      return Wi
    })), e.d(r, "easeCircle", (function () {
      return Qi
    })), e.d(r, "easeCircleIn", (function () {
      return Zi
    })), e.d(r, "easeCircleOut", (function () {
      return Gi
    })), e.d(r, "easeCircleInOut", (function () {
      return Qi
    })), e.d(r, "easeBounce", (function () {
      return Ki
    })), e.d(r, "easeBounceIn", (function () {
      return Ji
    })), e.d(r, "easeBounceOut", (function () {
      return Ki
    })), e.d(r, "easeBounceInOut", (function () {
      return to
    })), e.d(r, "easeBack", (function () {
      return ro
    })), e.d(r, "easeBackIn", (function () {
      return no
    })), e.d(r, "easeBackOut", (function () {
      return eo
    })), e.d(r, "easeBackInOut", (function () {
      return ro
    })), e.d(r, "easeElastic", (function () {
      return uo
    })), e.d(r, "easeElasticIn", (function () {
      return oo
    })), e.d(r, "easeElasticOut", (function () {
      return uo
    })), e.d(r, "easeElasticInOut", (function () {
      return ao
    })), e.d(r, "forceCenter", (function () {
      return Du
    })), e.d(r, "forceCollide", (function () {
      return Zu
    })), e.d(r, "forceLink", (function () {
      return Ju
    })), e.d(r, "forceManyBody", (function () {
      return ia
    })), e.d(r, "forceRadial", (function () {
      return oa
    })), e.d(r, "forceSimulation", (function () {
      return ra
    })), e.d(r, "forceX", (function () {
      return ua
    })), e.d(r, "forceY", (function () {
      return aa
    })), e.d(r, "formatDefaultLocale", (function () {
      return ba
    })), e.d(r, "format", (function () {
      return ya
    })), e.d(r, "formatPrefix", (function () {
      return ga
    })), e.d(r, "formatLocale", (function () {
      return xa
    })), e.d(r, "formatSpecifier", (function () {
      return da
    })), e.d(r, "precisionFixed", (function () {
      return wa
    })), e.d(r, "precisionPrefix", (function () {
      return Ma
    })), e.d(r, "precisionRound", (function () {
      return Ta
    })), e.d(r, "geoArea", (function () {
      return vc
    })), e.d(r, "geoBounds", (function () {
      return cf
    })), e.d(r, "geoCentroid", (function () {
      return xf
    })), e.d(r, "geoCircle", (function () {
      return Rf
    })), e.d(r, "geoClipAntimeridian", (function () {
      return Yf
    })), e.d(r, "geoClipCircle", (function () {
      return Bf
    })), e.d(r, "geoClipExtent", (function () {
      return Wf
    })), e.d(r, "geoClipRectangle", (function () {
      return Hf
    })), e.d(r, "geoContains", (function () {
      return hs
    })), e.d(r, "geoDistance", (function () {
      return rs
    })), e.d(r, "geoGraticule", (function () {
      return vs
    })), e.d(r, "geoGraticule10", (function () {
      return ys
    })), e.d(r, "geoInterpolate", (function () {
      return bs
    })), e.d(r, "geoLength", (function () {
      return ts
    })), e.d(r, "geoPath", (function () {
      return ml
    })), e.d(r, "geoAlbers", (function () {
      return Dl
    })), e.d(r, "geoAlbersUsa", (function () {
      return Ol
    })), e.d(r, "geoAzimuthalEqualArea", (function () {
      return Fl
    })), e.d(r, "geoAzimuthalEqualAreaRaw", (function () {
      return jl
    })), e.d(r, "geoAzimuthalEquidistant", (function () {
      return Bl
    })), e.d(r, "geoAzimuthalEquidistantRaw", (function () {
      return Yl
    })), e.d(r, "geoConicConformal", (function () {
      return Zl
    })), e.d(r, "geoConicConformalRaw", (function () {
      return Wl
    })), e.d(r, "geoConicEqualArea", (function () {
      return Ul
    })), e.d(r, "geoConicEqualAreaRaw", (function () {
      return Pl
    })), e.d(r, "geoConicEquidistant", (function () {
      return Kl
    })), e.d(r, "geoConicEquidistantRaw", (function () {
      return Jl
    })), e.d(r, "geoEquirectangular", (function () {
      return Ql
    })), e.d(r, "geoEquirectangularRaw", (function () {
      return Gl
    })), e.d(r, "geoGnomonic", (function () {
      return nh
    })), e.d(r, "geoGnomonicRaw", (function () {
      return th
    })), e.d(r, "geoIdentity", (function () {
      return rh
    })), e.d(r, "geoProjection", (function () {
      return Rl
    })), e.d(r, "geoProjectionMutator", (function () {
      return zl
    })), e.d(r, "geoMercator", (function () {
      return $l
    })), e.d(r, "geoMercatorRaw", (function () {
      return Hl
    })), e.d(r, "geoNaturalEarth1", (function () {
      return oh
    })), e.d(r, "geoNaturalEarth1Raw", (function () {
      return ih
    })), e.d(r, "geoOrthographic", (function () {
      return ah
    })), e.d(r, "geoOrthographicRaw", (function () {
      return uh
    })), e.d(r, "geoStereographic", (function () {
      return fh
    })), e.d(r, "geoStereographicRaw", (function () {
      return ch
    })), e.d(r, "geoTransverseMercator", (function () {
      return lh
    })), e.d(r, "geoTransverseMercatorRaw", (function () {
      return sh
    })), e.d(r, "geoRotation", (function () {
      return Ef
    })), e.d(r, "geoStream", (function () {
      return ac
    })), e.d(r, "geoTransform", (function () {
      return xl
    })), e.d(r, "cluster", (function () {
      return vh
    })), e.d(r, "hierarchy", (function () {
      return gh
    })), e.d(r, "pack", (function () {
      return Yh
    })), e.d(r, "packSiblings", (function () {
      return Dh
    })), e.d(r, "packEnclose", (function () {
      return Mh
    })), e.d(r, "partition", (function () {
      return Wh
    })), e.d(r, "stratify", (function () {
      return Kh
    })), e.d(r, "tree", (function () {
      return ud
    })), e.d(r, "treemap", (function () {
      return ld
    })), e.d(r, "treemapBinary", (function () {
      return hd
    })), e.d(r, "treemapDice", (function () {
      return Vh
    })), e.d(r, "treemapSlice", (function () {
      return ad
    })), e.d(r, "treemapSliceDice", (function () {
      return dd
    })), e.d(r, "treemapSquarify", (function () {
      return sd
    })), e.d(r, "treemapResquarify", (function () {
      return pd
    })), e.d(r, "interpolate", (function () {
      return lr
    })), e.d(r, "interpolateArray", (function () {
      return tr
    })), e.d(r, "interpolateBasis", (function () {
      return Be
    })), e.d(r, "interpolateBasisClosed", (function () {
      return He
    })), e.d(r, "interpolateDate", (function () {
      return nr
    })), e.d(r, "interpolateNumber", (function () {
      return er
    })), e.d(r, "interpolateObject", (function () {
      return rr
    })), e.d(r, "interpolateRound", (function () {
      return hr
    })), e.d(r, "interpolateString", (function () {
      return sr
    })), e.d(r, "interpolateTransformCss", (function () {
      return gr
    })), e.d(r, "interpolateTransformSvg", (function () {
      return _r
    })), e.d(r, "interpolateZoom", (function () {
      return br
    })), e.d(r, "interpolateRgb", (function () {
      return Ge
    })), e.d(r, "interpolateRgbBasis", (function () {
      return Je
    })), e.d(r, "interpolateRgbBasisClosed", (function () {
      return Ke
    })), e.d(r, "interpolateHsl", (function () {
      return Mr
    })), e.d(r, "interpolateHslLong", (function () {
      return Tr
    })), e.d(r, "interpolateLab", (function () {
      return Sr
    })), e.d(r, "interpolateHcl", (function () {
      return Nr
    })), e.d(r, "interpolateHclLong", (function () {
      return Er
    })), e.d(r, "interpolateCubehelix", (function () {
      return zr
    })), e.d(r, "interpolateCubehelixLong", (function () {
      return Lr
    })), e.d(r, "quantize", (function () {
      return Pr
    })), e.d(r, "path", (function () {
      return tu
    })), e.d(r, "polygonArea", (function () {
      return vd
    })), e.d(r, "polygonCentroid", (function () {
      return yd
    })), e.d(r, "polygonHull", (function () {
      return md
    })), e.d(r, "polygonContains", (function () {
      return xd
    })), e.d(r, "polygonLength", (function () {
      return bd
    })), e.d(r, "quadtree", (function () {
      return Bu
    })), e.d(r, "queue", (function () {
      return Cd
    })), e.d(r, "randomUniform", (function () {
      return Rd
    })), e.d(r, "randomNormal", (function () {
      return zd
    })), e.d(r, "randomLogNormal", (function () {
      return Ld
    })), e.d(r, "randomBates", (function () {
      return Ud
    })), e.d(r, "randomIrwinHall", (function () {
      return Pd
    })), e.d(r, "randomExponential", (function () {
      return Dd
    })), e.d(r, "request", (function () {
      return Od
    })), e.d(r, "html", (function () {
      return Id
    })), e.d(r, "json", (function () {
      return jd
    })), e.d(r, "text", (function () {
      return Fd
    })), e.d(r, "xml", (function () {
      return Yd
    })), e.d(r, "csv", (function () {
      return $d
    })), e.d(r, "tsv", (function () {
      return Xd
    })), e.d(r, "scaleBand", (function () {
      return Jd
    })), e.d(r, "scalePoint", (function () {
      return Kd
    })), e.d(r, "scaleIdentity", (function () {
      return sp
    })), e.d(r, "scaleLinear", (function () {
      return fp
    })), e.d(r, "scaleLog", (function () {
      return _p
    })), e.d(r, "scaleOrdinal", (function () {
      return Qd
    })), e.d(r, "scaleImplicit", (function () {
      return Gd
    })), e.d(r, "scalePow", (function () {
      return xp
    })), e.d(r, "scaleSqrt", (function () {
      return bp
    })), e.d(r, "scaleQuantile", (function () {
      return wp
    })), e.d(r, "scaleQuantize", (function () {
      return Mp
    })), e.d(r, "scaleThreshold", (function () {
      return Tp
    })), e.d(r, "scaleTime", (function () {
      return lg
    })), e.d(r, "scaleUtc", (function () {
      return hg
    })), e.d(r, "schemeCategory10", (function () {
      return pg
    })), e.d(r, "schemeCategory20b", (function () {
      return vg
    })), e.d(r, "schemeCategory20c", (function () {
      return yg
    })), e.d(r, "schemeCategory20", (function () {
      return gg
    })), e.d(r, "interpolateCubehelixDefault", (function () {
      return _g
    })), e.d(r, "interpolateRainbow", (function () {
      return wg
    })), e.d(r, "interpolateWarm", (function () {
      return mg
    })), e.d(r, "interpolateCool", (function () {
      return xg
    })), e.d(r, "interpolateViridis", (function () {
      return Tg
    })), e.d(r, "interpolateMagma", (function () {
      return Sg
    })), e.d(r, "interpolateInferno", (function () {
      return kg
    })), e.d(r, "interpolatePlasma", (function () {
      return Ng
    })), e.d(r, "scaleSequential", (function () {
      return Eg
    })), e.d(r, "create", (function () {
      return An
    })), e.d(r, "creator", (function () {
      return mt
    })), e.d(r, "local", (function () {
      return zn
    })), e.d(r, "matcher", (function () {
      return Nt
    })), e.d(r, "mouse", (function () {
      return Dn
    })), e.d(r, "namespace", (function () {
      return yt
    })), e.d(r, "namespaces", (function () {
      return vt
    })), e.d(r, "clientPoint", (function () {
      return Un
    })), e.d(r, "select", (function () {
      return Cn
    })), e.d(r, "selectAll", (function () {
      return On
    })), e.d(r, "selection", (function () {
      return En
    })), e.d(r, "selector", (function () {
      return bt
    })), e.d(r, "selectorAll", (function () {
      return Mt
    })), e.d(r, "style", (function () {
      return Bt
    })), e.d(r, "touch", (function () {
      return qn
    })), e.d(r, "touches", (function () {
      return In
    })), e.d(r, "window", (function () {
      return It
    })), e.d(r, "event", (function () {
      return vn
    })), e.d(r, "customEvent", (function () {
      return bn
    })), e.d(r, "arc", (function () {
      return Zg
    })), e.d(r, "area", (function () {
      return n_
    })), e.d(r, "line", (function () {
      return t_
    })), e.d(r, "pie", (function () {
      return i_
    })), e.d(r, "areaRadial", (function () {
      return s_
    })), e.d(r, "radialArea", (function () {
      return s_
    })), e.d(r, "lineRadial", (function () {
      return f_
    })), e.d(r, "radialLine", (function () {
      return f_
    })), e.d(r, "pointRadial", (function () {
      return l_
    })), e.d(r, "linkHorizontal", (function () {
      return m_
    })), e.d(r, "linkVertical", (function () {
      return x_
    })), e.d(r, "linkRadial", (function () {
      return b_
    })), e.d(r, "symbol", (function () {
      return I_
    })), e.d(r, "symbols", (function () {
      return q_
    })), e.d(r, "symbolCircle", (function () {
      return w_
    })), e.d(r, "symbolCross", (function () {
      return M_
    })), e.d(r, "symbolDiamond", (function () {
      return k_
    })), e.d(r, "symbolSquare", (function () {
      return R_
    })), e.d(r, "symbolStar", (function () {
      return A_
    })), e.d(r, "symbolTriangle", (function () {
      return L_
    })), e.d(r, "symbolWye", (function () {
      return O_
    })), e.d(r, "curveBasisClosed", (function () {
      return $_
    })), e.d(r, "curveBasisOpen", (function () {
      return V_
    })), e.d(r, "curveBasis", (function () {
      return B_
    })), e.d(r, "curveBundle", (function () {
      return Z_
    })), e.d(r, "curveCardinalClosed", (function () {
      return tm
    })), e.d(r, "curveCardinalOpen", (function () {
      return em
    })), e.d(r, "curveCardinal", (function () {
      return J_
    })), e.d(r, "curveCatmullRomClosed", (function () {
      return am
    })), e.d(r, "curveCatmullRomOpen", (function () {
      return fm
    })), e.d(r, "curveCatmullRom", (function () {
      return om
    })), e.d(r, "curveLinearClosed", (function () {
      return lm
    })), e.d(r, "curveLinear", (function () {
      return Qg
    })), e.d(r, "curveMonotoneX", (function () {
      return mm
    })), e.d(r, "curveMonotoneY", (function () {
      return xm
    })), e.d(r, "curveNatural", (function () {
      return Mm
    })), e.d(r, "curveStep", (function () {
      return Sm
    })), e.d(r, "curveStepAfter", (function () {
      return Nm
    })), e.d(r, "curveStepBefore", (function () {
      return km
    })), e.d(r, "stack", (function () {
      return Rm
    })), e.d(r, "stackOffsetExpand", (function () {
      return zm
    })), e.d(r, "stackOffsetDiverging", (function () {
      return Lm
    })), e.d(r, "stackOffsetNone", (function () {
      return Em
    })), e.d(r, "stackOffsetSilhouette", (function () {
      return Pm
    })), e.d(r, "stackOffsetWiggle", (function () {
      return Um
    })), e.d(r, "stackOrderAscending", (function () {
      return Dm
    })), e.d(r, "stackOrderDescending", (function () {
      return qm
    })), e.d(r, "stackOrderInsideOut", (function () {
      return Im
    })), e.d(r, "stackOrderNone", (function () {
      return Cm
    })), e.d(r, "stackOrderReverse", (function () {
      return jm
    })), e.d(r, "timeInterval", (function () {
      return Np
    })), e.d(r, "timeMillisecond", (function () {
      return Cp
    })), e.d(r, "timeMilliseconds", (function () {
      return Ap
    })), e.d(r, "utcMillisecond", (function () {
      return Cp
    })), e.d(r, "utcMilliseconds", (function () {
      return Ap
    })), e.d(r, "timeSecond", (function () {
      return zp
    })), e.d(r, "timeSeconds", (function () {
      return Lp
    })), e.d(r, "utcSecond", (function () {
      return zp
    })), e.d(r, "utcSeconds", (function () {
      return Lp
    })), e.d(r, "timeMinute", (function () {
      return Up
    })), e.d(r, "timeMinutes", (function () {
      return Dp
    })), e.d(r, "timeHour", (function () {
      return qp
    })), e.d(r, "timeHours", (function () {
      return Ip
    })), e.d(r, "timeDay", (function () {
      return Fp
    })), e.d(r, "timeDays", (function () {
      return Yp
    })), e.d(r, "timeWeek", (function () {
      return Hp
    })), e.d(r, "timeWeeks", (function () {
      return Qp
    })), e.d(r, "timeSunday", (function () {
      return Hp
    })), e.d(r, "timeSundays", (function () {
      return Qp
    })), e.d(r, "timeMonday", (function () {
      return $p
    })), e.d(r, "timeMondays", (function () {
      return Jp
    })), e.d(r, "timeTuesday", (function () {
      return Xp
    })), e.d(r, "timeTuesdays", (function () {
      return Kp
    })), e.d(r, "timeWednesday", (function () {
      return Vp
    })), e.d(r, "timeWednesdays", (function () {
      return tv
    })), e.d(r, "timeThursday", (function () {
      return Wp
    })), e.d(r, "timeThursdays", (function () {
      return nv
    })), e.d(r, "timeFriday", (function () {
      return Zp
    })), e.d(r, "timeFridays", (function () {
      return ev
    })), e.d(r, "timeSaturday", (function () {
      return Gp
    })), e.d(r, "timeSaturdays", (function () {
      return rv
    })), e.d(r, "timeMonth", (function () {
      return ov
    })), e.d(r, "timeMonths", (function () {
      return uv
    })), e.d(r, "timeYear", (function () {
      return cv
    })), e.d(r, "timeYears", (function () {
      return fv
    })), e.d(r, "utcMinute", (function () {
      return lv
    })), e.d(r, "utcMinutes", (function () {
      return hv
    })), e.d(r, "utcHour", (function () {
      return pv
    })), e.d(r, "utcHours", (function () {
      return vv
    })), e.d(r, "utcDay", (function () {
      return gv
    })), e.d(r, "utcDays", (function () {
      return _v
    })), e.d(r, "utcWeek", (function () {
      return xv
    })), e.d(r, "utcWeeks", (function () {
      return Nv
    })), e.d(r, "utcSunday", (function () {
      return xv
    })), e.d(r, "utcSundays", (function () {
      return Nv
    })), e.d(r, "utcMonday", (function () {
      return bv
    })), e.d(r, "utcMondays", (function () {
      return Ev
    })), e.d(r, "utcTuesday", (function () {
      return wv
    })), e.d(r, "utcTuesdays", (function () {
      return Cv
    })), e.d(r, "utcWednesday", (function () {
      return Mv
    })), e.d(r, "utcWednesdays", (function () {
      return Av
    })), e.d(r, "utcThursday", (function () {
      return Tv
    })), e.d(r, "utcThursdays", (function () {
      return Rv
    })), e.d(r, "utcFriday", (function () {
      return Sv
    })), e.d(r, "utcFridays", (function () {
      return zv
    })), e.d(r, "utcSaturday", (function () {
      return kv
    })), e.d(r, "utcSaturdays", (function () {
      return Lv
    })), e.d(r, "utcMonth", (function () {
      return Uv
    })), e.d(r, "utcMonths", (function () {
      return Dv
    })), e.d(r, "utcYear", (function () {
      return qv
    })), e.d(r, "utcYears", (function () {
      return Iv
    })), e.d(r, "timeFormatDefaultLocale", (function () {
      return og
    })), e.d(r, "timeFormat", (function () {
      return $v
    })), e.d(r, "timeParse", (function () {
      return Xv
    })), e.d(r, "utcFormat", (function () {
      return Vv
    })), e.d(r, "utcParse", (function () {
      return Wv
    })), e.d(r, "timeFormatLocale", (function () {
      return Bv
    })), e.d(r, "isoFormat", (function () {
      return ug
    })), e.d(r, "isoParse", (function () {
      return ag
    })), e.d(r, "now", (function () {
      return Br
    })), e.d(r, "timer", (function () {
      return Xr
    })), e.d(r, "timerFlush", (function () {
      return Vr
    })), e.d(r, "timeout", (function () {
      return Qr
    })), e.d(r, "interval", (function () {
      return Jr
    })), e.d(r, "transition", (function () {
      return Ei
    })), e.d(r, "active", (function () {
      return lo
    })), e.d(r, "interrupt", (function () {
      return oi
    })), e.d(r, "voronoi", (function () {
      return Sx
    })), e.d(r, "zoom", (function () {
      return Ix
    })), e.d(r, "zoomTransform", (function () {
      return Ax
    })), e.d(r, "zoomIdentity", (function () {
      return Cx
    }));
    var i = function () {
      var t = this,
        n = t.$createElement,
        e = t._self._c || n;
      return e("div", {
        ref: "container",
        staticClass: "tree-container"
      }, [e("svg", {
        ref: "svg",
        staticClass: "svg vue-tree",
        style: t.initialTransformStyle
      }), t._v(" "), e("div", {
        ref: "domContainer",
        staticClass: "dom-container",
        style: t.initialTransformStyle
      }, [e("transition-group", {
        attrs: {
          name: "tree-node-item",
          tag: "div"
        }
      }, t._l(t.nodeDataList, (function (n, r) {
        return e("div", {
          key: n.data._key,
          staticClass: "node-slot",
          style: {
            left: t.formatDimension(t.direction === t.DIRECTION.VERTICAL ? n.x : n.y),
            top: t.formatDimension(t.direction === t.DIRECTION.VERTICAL ? n.y : n.x),
            width: t.formatDimension(t.config.nodeWidth),
            height: t.formatDimension(t.config.nodeHeight)
          },
          on: {
            click: function (n) {
              return t.onClickNode(r)
            }
          }
        }, [t._t("node", [e("span", [t._v(t._s(n.data.value))])], {
          node: n.data,
          collapsed: n.data._collapsed
        })], 2)
      })), 0)], 1)])
    };
    i._withStripped = !0;
    var o = "4.13.0",
      u = function (t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
      },
      a = function (t) {
        var n;
        return 1 === t.length && (n = t, t = function (t, e) {
          return u(n(t), e)
        }), {
          left: function (n, e, r, i) {
            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
              var o = r + i >>> 1;
              t(n[o], e) < 0 ? r = o + 1 : i = o
            }
            return r
          },
          right: function (n, e, r, i) {
            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
              var o = r + i >>> 1;
              t(n[o], e) > 0 ? i = o : r = o + 1
            }
            return r
          }
        }
      };
    var c = a(u),
      f = c.right,
      s = c.left,
      l = f,
      h = function (t, n) {
        null == n && (n = d);
        for (var e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = n(i, i = t[++e]);
        return o
      };

    function d(t, n) {
      return [t, n]
    }
    var p = function (t, n, e) {
        var r, i, o, u, a = t.length,
          c = n.length,
          f = new Array(a * c);
        for (null == e && (e = d), r = o = 0; r < a; ++r)
          for (u = t[r], i = 0; i < c; ++i, ++o) f[o] = e(u, n[i]);
        return f
      },
      v = function (t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
      },
      y = function (t) {
        return null === t ? NaN : +t
      },
      g = function (t, n) {
        var e, r, i = t.length,
          o = 0,
          u = -1,
          a = 0,
          c = 0;
        if (null == n)
          for (; ++u < i;) isNaN(e = y(t[u])) || (c += (r = e - a) * (e - (a += r / ++o)));
        else
          for (; ++u < i;) isNaN(e = y(n(t[u], u, t))) || (c += (r = e - a) * (e - (a += r / ++o)));
        if (o > 1) return c / (o - 1)
      },
      _ = function (t, n) {
        var e = g(t, n);
        return e ? Math.sqrt(e) : e
      },
      m = function (t, n) {
        var e, r, i, o = t.length,
          u = -1;
        if (null == n) {
          for (; ++u < o;)
            if (null != (e = t[u]) && e >= e)
              for (r = i = e; ++u < o;) null != (e = t[u]) && (r > e && (r = e), i < e && (i = e))
        } else
          for (; ++u < o;)
            if (null != (e = n(t[u], u, t)) && e >= e)
              for (r = i = e; ++u < o;) null != (e = n(t[u], u, t)) && (r > e && (r = e), i < e && (i = e));
        return [r, i]
      },
      x = Array.prototype,
      b = x.slice,
      w = x.map,
      M = function (t) {
        return function () {
          return t
        }
      },
      T = function (t) {
        return t
      },
      S = function (t, n, e) {
        t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
        for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
        return o
      },
      k = Math.sqrt(50),
      N = Math.sqrt(10),
      E = Math.sqrt(2),
      C = function (t, n, e) {
        var r, i, o, u, a = -1;
        if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
        if ((r = n < t) && (i = t, t = n, n = i), 0 === (u = A(t, n, e)) || !isFinite(u)) return [];
        if (u > 0)
          for (t = Math.ceil(t / u), n = Math.floor(n / u), o = new Array(i = Math.ceil(n - t + 1)); ++a < i;) o[a] = (t + a) * u;
        else
          for (t = Math.floor(t * u), n = Math.ceil(n * u), o = new Array(i = Math.ceil(t - n + 1)); ++a < i;) o[a] = (t - a) / u;
        return r && o.reverse(), o
      };

    function A(t, n, e) {
      var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        o = r / Math.pow(10, i);
      return i >= 0 ? (o >= k ? 10 : o >= N ? 5 : o >= E ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= k ? 10 : o >= N ? 5 : o >= E ? 2 : 1)
    }

    function R(t, n, e) {
      var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;
      return o >= k ? i *= 10 : o >= N ? i *= 5 : o >= E && (i *= 2), n < t ? -i : i
    }
    var z = function (t) {
        return Math.ceil(Math.log(t.length) / Math.LN2) + 1
      },
      L = function () {
        var t = T,
          n = m,
          e = z;

        function r(r) {
          var i, o, u = r.length,
            a = new Array(u);
          for (i = 0; i < u; ++i) a[i] = t(r[i], i, r);
          var c = n(a),
            f = c[0],
            s = c[1],
            h = e(a, f, s);
          Array.isArray(h) || (h = R(f, s, h), h = S(Math.ceil(f / h) * h, Math.floor(s / h) * h, h));
          for (var d = h.length; h[0] <= f;) h.shift(), --d;
          for (; h[d - 1] > s;) h.pop(), --d;
          var p, v = new Array(d + 1);
          for (i = 0; i <= d; ++i)(p = v[i] = []).x0 = i > 0 ? h[i - 1] : f, p.x1 = i < d ? h[i] : s;
          for (i = 0; i < u; ++i) f <= (o = a[i]) && o <= s && v[l(h, o, 0, d)].push(r[i]);
          return v
        }
        return r.value = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : M(n), r) : t
        }, r.domain = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : M([t[0], t[1]]), r) : n
        }, r.thresholds = function (t) {
          return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? M(b.call(t)) : M(t), r) : e
        }, r
      },
      P = function (t, n, e) {
        if (null == e && (e = y), r = t.length) {
          if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
          if (n >= 1) return +e(t[r - 1], r - 1, t);
          var r, i = (r - 1) * n,
            o = Math.floor(i),
            u = +e(t[o], o, t);
          return u + (+e(t[o + 1], o + 1, t) - u) * (i - o)
        }
      },
      U = function (t, n, e) {
        return t = w.call(t, y).sort(u), Math.ceil((e - n) / (2 * (P(t, .75) - P(t, .25)) * Math.pow(t.length, -1 / 3)))
      },
      D = function (t, n, e) {
        return Math.ceil((e - n) / (3.5 * _(t) * Math.pow(t.length, -1 / 3)))
      },
      O = function (t, n) {
        var e, r, i = t.length,
          o = -1;
        if (null == n) {
          for (; ++o < i;)
            if (null != (e = t[o]) && e >= e)
              for (r = e; ++o < i;) null != (e = t[o]) && e > r && (r = e)
        } else
          for (; ++o < i;)
            if (null != (e = n(t[o], o, t)) && e >= e)
              for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && e > r && (r = e);
        return r
      },
      q = function (t, n) {
        var e, r = t.length,
          i = r,
          o = -1,
          u = 0;
        if (null == n)
          for (; ++o < r;) isNaN(e = y(t[o])) ? --i : u += e;
        else
          for (; ++o < r;) isNaN(e = y(n(t[o], o, t))) ? --i : u += e;
        if (i) return u / i
      },
      I = function (t, n) {
        var e, r = t.length,
          i = -1,
          o = [];
        if (null == n)
          for (; ++i < r;) isNaN(e = y(t[i])) || o.push(e);
        else
          for (; ++i < r;) isNaN(e = y(n(t[i], i, t))) || o.push(e);
        return P(o.sort(u), .5)
      },
      j = function (t) {
        for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;) u += t[o].length;
        for (e = new Array(u); --i >= 0;)
          for (n = (r = t[i]).length; --n >= 0;) e[--u] = r[n];
        return e
      },
      F = function (t, n) {
        var e, r, i = t.length,
          o = -1;
        if (null == n) {
          for (; ++o < i;)
            if (null != (e = t[o]) && e >= e)
              for (r = e; ++o < i;) null != (e = t[o]) && r > e && (r = e)
        } else
          for (; ++o < i;)
            if (null != (e = n(t[o], o, t)) && e >= e)
              for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && r > e && (r = e);
        return r
      },
      Y = function (t, n) {
        for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
        return r
      },
      B = function (t, n) {
        if (e = t.length) {
          var e, r, i = 0,
            o = 0,
            a = t[o];
          for (null == n && (n = u); ++i < e;)(n(r = t[i], a) < 0 || 0 !== n(a, a)) && (a = r, o = i);
          return 0 === n(a, a) ? o : void 0
        }
      },
      H = function (t, n, e) {
        for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
        return t
      },
      $ = function (t, n) {
        var e, r = t.length,
          i = -1,
          o = 0;
        if (null == n)
          for (; ++i < r;)(e = +t[i]) && (o += e);
        else
          for (; ++i < r;)(e = +n(t[i], i, t)) && (o += e);
        return o
      },
      X = function (t) {
        if (!(i = t.length)) return [];
        for (var n = -1, e = F(t, V), r = new Array(e); ++n < e;)
          for (var i, o = -1, u = r[n] = new Array(i); ++o < i;) u[o] = t[o][n];
        return r
      };

    function V(t) {
      return t.length
    }
    var W = function () {
        return X(arguments)
      },
      Z = Array.prototype.slice,
      G = function (t) {
        return t
      };

    function Q(t) {
      return "translate(" + (t + .5) + ",0)"
    }

    function J(t) {
      return "translate(0," + (t + .5) + ")"
    }

    function K(t) {
      return function (n) {
        return +t(n)
      }
    }

    function tt(t) {
      var n = Math.max(0, t.bandwidth() - 1) / 2;
      return t.round() && (n = Math.round(n)),
        function (e) {
          return +t(e) + n
        }
    }

    function nt() {
      return !this.__axis
    }

    function et(t, n) {
      var e = [],
        r = null,
        i = null,
        o = 6,
        u = 6,
        a = 3,
        c = 1 === t || 4 === t ? -1 : 1,
        f = 4 === t || 2 === t ? "x" : "y",
        s = 1 === t || 3 === t ? Q : J;

      function l(l) {
        var h = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
          d = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : G : i,
          p = Math.max(o, 0) + a,
          v = n.range(),
          y = +v[0] + .5,
          g = +v[v.length - 1] + .5,
          _ = (n.bandwidth ? tt : K)(n.copy()),
          m = l.selection ? l.selection() : l,
          x = m.selectAll(".domain").data([null]),
          b = m.selectAll(".tick").data(h, n).order(),
          w = b.exit(),
          M = b.enter().append("g").attr("class", "tick"),
          T = b.select("line"),
          S = b.select("text");
        x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), b = b.merge(M), T = T.merge(M.append("line").attr("stroke", "#000").attr(f + "2", c * o)), S = S.merge(M.append("text").attr("fill", "#000").attr(f, c * p).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")), l !== m && (x = x.transition(l), b = b.transition(l), T = T.transition(l), S = S.transition(l), w = w.transition(l).attr("opacity", 1e-6).attr("transform", (function (t) {
          return isFinite(t = _(t)) ? s(t) : this.getAttribute("transform")
        })), M.attr("opacity", 1e-6).attr("transform", (function (t) {
          var n = this.parentNode.__axis;
          return s(n && isFinite(n = n(t)) ? n : _(t))
        }))), w.remove(), x.attr("d", 4 === t || 2 == t ? "M" + c * u + "," + y + "H0.5V" + g + "H" + c * u : "M" + y + "," + c * u + "V0.5H" + g + "V" + c * u), b.attr("opacity", 1).attr("transform", (function (t) {
          return s(_(t))
        })), T.attr(f + "2", c * o), S.attr(f, c * p).text(d), m.filter(nt).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"), m.each((function () {
          this.__axis = _
        }))
      }
      return l.scale = function (t) {
        return arguments.length ? (n = t, l) : n
      }, l.ticks = function () {
        return e = Z.call(arguments), l
      }, l.tickArguments = function (t) {
        return arguments.length ? (e = null == t ? [] : Z.call(t), l) : e.slice()
      }, l.tickValues = function (t) {
        return arguments.length ? (r = null == t ? null : Z.call(t), l) : r && r.slice()
      }, l.tickFormat = function (t) {
        return arguments.length ? (i = t, l) : i
      }, l.tickSize = function (t) {
        return arguments.length ? (o = u = +t, l) : o
      }, l.tickSizeInner = function (t) {
        return arguments.length ? (o = +t, l) : o
      }, l.tickSizeOuter = function (t) {
        return arguments.length ? (u = +t, l) : u
      }, l.tickPadding = function (t) {
        return arguments.length ? (a = +t, l) : a
      }, l
    }

    function rt(t) {
      return et(1, t)
    }

    function it(t) {
      return et(2, t)
    }

    function ot(t) {
      return et(3, t)
    }

    function ut(t) {
      return et(4, t)
    }
    var at = {
      value: function () {}
    };

    function ct() {
      for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
        if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
        r[t] = []
      }
      return new ft(r)
    }

    function ft(t) {
      this._ = t
    }

    function st(t, n) {
      return t.trim().split(/^|\s+/).map((function (t) {
        var e = "",
          r = t.indexOf(".");
        if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
          type: t,
          name: e
        }
      }))
    }

    function lt(t, n) {
      for (var e, r = 0, i = t.length; r < i; ++r)
        if ((e = t[r]).name === n) return e.value
    }

    function ht(t, n, e) {
      for (var r = 0, i = t.length; r < i; ++r)
        if (t[r].name === n) {
          t[r] = at, t = t.slice(0, r).concat(t.slice(r + 1));
          break
        } return null != e && t.push({
        name: n,
        value: e
      }), t
    }
    ft.prototype = ct.prototype = {
      constructor: ft,
      on: function (t, n) {
        var e, r = this._,
          i = st(t + "", r),
          o = -1,
          u = i.length;
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
          for (; ++o < u;)
            if (e = (t = i[o]).type) r[e] = ht(r[e], t.name, n);
            else if (null == n)
            for (e in r) r[e] = ht(r[e], t.name, null);
          return this
        }
        for (; ++o < u;)
          if ((e = (t = i[o]).type) && (e = lt(r[e], t.name))) return e
      },
      copy: function () {
        var t = {},
          n = this._;
        for (var e in n) t[e] = n[e].slice();
        return new ft(t)
      },
      call: function (t, n) {
        if ((e = arguments.length - 2) > 0)
          for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
      },
      apply: function (t, n, e) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
      }
    };
    var dt = ct,
      pt = "http://www.w3.org/1999/xhtml",
      vt = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: pt,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      yt = function (t) {
        var n = t += "",
          e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), vt.hasOwnProperty(n) ? {
          space: vt[n],
          local: t
        } : t
      };

    function gt(t) {
      return function () {
        var n = this.ownerDocument,
          e = this.namespaceURI;
        return e === pt && n.documentElement.namespaceURI === pt ? n.createElement(t) : n.createElementNS(e, t)
      }
    }

    function _t(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local)
      }
    }
    var mt = function (t) {
      var n = yt(t);
      return (n.local ? _t : gt)(n)
    };

    function xt() {}
    var bt = function (t) {
      return null == t ? xt : function () {
        return this.querySelector(t)
      }
    };

    function wt() {
      return []
    }
    var Mt = function (t) {
        return null == t ? wt : function () {
          return this.querySelectorAll(t)
        }
      },
      Tt = function (t) {
        return function () {
          return this.matches(t)
        }
      };
    if ("undefined" != typeof document) {
      var St = document.documentElement;
      if (!St.matches) {
        var kt = St.webkitMatchesSelector || St.msMatchesSelector || St.mozMatchesSelector || St.oMatchesSelector;
        Tt = function (t) {
          return function () {
            return kt.call(this, t)
          }
        }
      }
    }
    var Nt = Tt,
      Et = function (t) {
        return new Array(t.length)
      };

    function Ct(t, n) {
      this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
    }
    Ct.prototype = {
      constructor: Ct,
      appendChild: function (t) {
        return this._parent.insertBefore(t, this._next)
      },
      insertBefore: function (t, n) {
        return this._parent.insertBefore(t, n)
      },
      querySelector: function (t) {
        return this._parent.querySelector(t)
      },
      querySelectorAll: function (t) {
        return this._parent.querySelectorAll(t)
      }
    };

    function At(t, n, e, r, i, o) {
      for (var u, a = 0, c = n.length, f = o.length; a < f; ++a)(u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new Ct(t, o[a]);
      for (; a < c; ++a)(u = n[a]) && (i[a] = u)
    }

    function Rt(t, n, e, r, i, o, u) {
      var a, c, f, s = {},
        l = n.length,
        h = o.length,
        d = new Array(l);
      for (a = 0; a < l; ++a)(c = n[a]) && (d[a] = f = "$" + u.call(c, c.__data__, a, n), f in s ? i[a] = c : s[f] = c);
      for (a = 0; a < h; ++a)(c = s[f = "$" + u.call(t, o[a], a, o)]) ? (r[a] = c, c.__data__ = o[a], s[f] = null) : e[a] = new Ct(t, o[a]);
      for (a = 0; a < l; ++a)(c = n[a]) && s[d[a]] === c && (i[a] = c)
    }

    function zt(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }

    function Lt(t) {
      return function () {
        this.removeAttribute(t)
      }
    }

    function Pt(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }

    function Ut(t, n) {
      return function () {
        this.setAttribute(t, n)
      }
    }

    function Dt(t, n) {
      return function () {
        this.setAttributeNS(t.space, t.local, n)
      }
    }

    function Ot(t, n) {
      return function () {
        var e = n.apply(this, arguments);
        null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
      }
    }

    function qt(t, n) {
      return function () {
        var e = n.apply(this, arguments);
        null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
      }
    }
    var It = function (t) {
      return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    };

    function jt(t) {
      return function () {
        this.style.removeProperty(t)
      }
    }

    function Ft(t, n, e) {
      return function () {
        this.style.setProperty(t, n, e)
      }
    }

    function Yt(t, n, e) {
      return function () {
        var r = n.apply(this, arguments);
        null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
      }
    }

    function Bt(t, n) {
      return t.style.getPropertyValue(n) || It(t).getComputedStyle(t, null).getPropertyValue(n)
    }

    function Ht(t) {
      return function () {
        delete this[t]
      }
    }

    function $t(t, n) {
      return function () {
        this[t] = n
      }
    }

    function Xt(t, n) {
      return function () {
        var e = n.apply(this, arguments);
        null == e ? delete this[t] : this[t] = e
      }
    }

    function Vt(t) {
      return t.trim().split(/^|\s+/)
    }

    function Wt(t) {
      return t.classList || new Zt(t)
    }

    function Zt(t) {
      this._node = t, this._names = Vt(t.getAttribute("class") || "")
    }

    function Gt(t, n) {
      for (var e = Wt(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
    }

    function Qt(t, n) {
      for (var e = Wt(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
    }

    function Jt(t) {
      return function () {
        Gt(this, t)
      }
    }

    function Kt(t) {
      return function () {
        Qt(this, t)
      }
    }

    function tn(t, n) {
      return function () {
        (n.apply(this, arguments) ? Gt : Qt)(this, t)
      }
    }
    Zt.prototype = {
      add: function (t) {
        this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
      },
      remove: function (t) {
        var n = this._names.indexOf(t);
        n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
      },
      contains: function (t) {
        return this._names.indexOf(t) >= 0
      }
    };

    function nn() {
      this.textContent = ""
    }

    function en(t) {
      return function () {
        this.textContent = t
      }
    }

    function rn(t) {
      return function () {
        var n = t.apply(this, arguments);
        this.textContent = null == n ? "" : n
      }
    }

    function on() {
      this.innerHTML = ""
    }

    function un(t) {
      return function () {
        this.innerHTML = t
      }
    }

    function an(t) {
      return function () {
        var n = t.apply(this, arguments);
        this.innerHTML = null == n ? "" : n
      }
    }

    function cn() {
      this.nextSibling && this.parentNode.appendChild(this)
    }

    function fn() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function sn() {
      return null
    }

    function ln() {
      var t = this.parentNode;
      t && t.removeChild(this)
    }

    function hn() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
    }

    function dn() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
    }
    var pn = {},
      vn = null;
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (pn = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }));

    function yn(t, n, e) {
      return t = gn(t, n, e),
        function (n) {
          var e = n.relatedTarget;
          e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
        }
    }

    function gn(t, n, e) {
      return function (r) {
        var i = vn;
        vn = r;
        try {
          t.call(this, this.__data__, n, e)
        } finally {
          vn = i
        }
      }
    }

    function _n(t) {
      return t.trim().split(/^|\s+/).map((function (t) {
        var n = "",
          e = t.indexOf(".");
        return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
          type: t,
          name: n
        }
      }))
    }

    function mn(t) {
      return function () {
        var n = this.__on;
        if (n) {
          for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
          ++i ? n.length = i : delete this.__on
        }
      }
    }

    function xn(t, n, e) {
      var r = pn.hasOwnProperty(t.type) ? yn : gn;
      return function (i, o, u) {
        var a, c = this.__on,
          f = r(n, o, u);
        if (c)
          for (var s = 0, l = c.length; s < l; ++s)
            if ((a = c[s]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = f, a.capture = e), void(a.value = n);
        this.addEventListener(t.type, f, e), a = {
          type: t.type,
          name: t.name,
          value: n,
          listener: f,
          capture: e
        }, c ? c.push(a) : this.__on = [a]
      }
    }

    function bn(t, n, e, r) {
      var i = vn;
      t.sourceEvent = vn, vn = t;
      try {
        return n.apply(e, r)
      } finally {
        vn = i
      }
    }

    function wn(t, n, e) {
      var r = It(t),
        i = r.CustomEvent;
      "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
    }

    function Mn(t, n) {
      return function () {
        return wn(this, t, n)
      }
    }

    function Tn(t, n) {
      return function () {
        return wn(this, t, n.apply(this, arguments))
      }
    }
    var Sn = [null];

    function kn(t, n) {
      this._groups = t, this._parents = n
    }

    function Nn() {
      return new kn([
        [document.documentElement]
      ], Sn)
    }
    kn.prototype = Nn.prototype = {
      constructor: kn,
      select: function (t) {
        "function" != typeof t && (t = bt(t));
        for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
          for (var o, u, a = n[i], c = a.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(o = a[s]) && (u = t.call(o, o.__data__, s, a)) && ("__data__" in o && (u.__data__ = o.__data__), f[s] = u);
        return new kn(r, this._parents)
      },
      selectAll: function (t) {
        "function" != typeof t && (t = Mt(t));
        for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
          for (var u, a = n[o], c = a.length, f = 0; f < c; ++f)(u = a[f]) && (r.push(t.call(u, u.__data__, f, a)), i.push(u));
        return new kn(r, i)
      },
      filter: function (t) {
        "function" != typeof t && (t = Nt(t));
        for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
          for (var o, u = n[i], a = u.length, c = r[i] = [], f = 0; f < a; ++f)(o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
        return new kn(r, this._parents)
      },
      data: function (t, n) {
        if (!t) return p = new Array(this.size()), s = -1, this.each((function (t) {
          p[++s] = t
        })), p;
        var e, r = n ? Rt : At,
          i = this._parents,
          o = this._groups;
        "function" != typeof t && (e = t, t = function () {
          return e
        });
        for (var u = o.length, a = new Array(u), c = new Array(u), f = new Array(u), s = 0; s < u; ++s) {
          var l = i[s],
            h = o[s],
            d = h.length,
            p = t.call(l, l && l.__data__, s, i),
            v = p.length,
            y = c[s] = new Array(v),
            g = a[s] = new Array(v);
          r(l, h, y, g, f[s] = new Array(d), p, n);
          for (var _, m, x = 0, b = 0; x < v; ++x)
            if (_ = y[x]) {
              for (x >= b && (b = x + 1); !(m = g[b]) && ++b < v;);
              _._next = m || null
            }
        }
        return (a = new kn(a, i))._enter = c, a._exit = f, a
      },
      enter: function () {
        return new kn(this._enter || this._groups.map(Et), this._parents)
      },
      exit: function () {
        return new kn(this._exit || this._groups.map(Et), this._parents)
      },
      merge: function (t) {
        for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
          for (var c, f = n[a], s = e[a], l = f.length, h = u[a] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
        for (; a < r; ++a) u[a] = n[a];
        return new kn(u, this._parents)
      },
      order: function () {
        for (var t = this._groups, n = -1, e = t.length; ++n < e;)
          for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;)(r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
        return this
      },
      sort: function (t) {
        function n(n, e) {
          return n && e ? t(n.__data__, e.__data__) : !n - !e
        }
        t || (t = zt);
        for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
          for (var u, a = e[o], c = a.length, f = i[o] = new Array(c), s = 0; s < c; ++s)(u = a[s]) && (f[s] = u);
          f.sort(n)
        }
        return new kn(i, this._parents).order()
      },
      call: function () {
        var t = arguments[0];
        return arguments[0] = this, t.apply(null, arguments), this
      },
      nodes: function () {
        var t = new Array(this.size()),
          n = -1;
        return this.each((function () {
          t[++n] = this
        })), t
      },
      node: function () {
        for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
          for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
            var u = r[i];
            if (u) return u
          }
        return null
      },
      size: function () {
        var t = 0;
        return this.each((function () {
          ++t
        })), t
      },
      empty: function () {
        return !this.node()
      },
      each: function (t) {
        for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
          for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
        return this
      },
      attr: function (t, n) {
        var e = yt(t);
        if (arguments.length < 2) {
          var r = this.node();
          return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
        }
        return this.each((null == n ? e.local ? Pt : Lt : "function" == typeof n ? e.local ? qt : Ot : e.local ? Dt : Ut)(e, n))
      },
      style: function (t, n, e) {
        return arguments.length > 1 ? this.each((null == n ? jt : "function" == typeof n ? Yt : Ft)(t, n, null == e ? "" : e)) : Bt(this.node(), t)
      },
      property: function (t, n) {
        return arguments.length > 1 ? this.each((null == n ? Ht : "function" == typeof n ? Xt : $t)(t, n)) : this.node()[t]
      },
      classed: function (t, n) {
        var e = Vt(t + "");
        if (arguments.length < 2) {
          for (var r = Wt(this.node()), i = -1, o = e.length; ++i < o;)
            if (!r.contains(e[i])) return !1;
          return !0
        }
        return this.each(("function" == typeof n ? tn : n ? Jt : Kt)(e, n))
      },
      text: function (t) {
        return arguments.length ? this.each(null == t ? nn : ("function" == typeof t ? rn : en)(t)) : this.node().textContent
      },
      html: function (t) {
        return arguments.length ? this.each(null == t ? on : ("function" == typeof t ? an : un)(t)) : this.node().innerHTML
      },
      raise: function () {
        return this.each(cn)
      },
      lower: function () {
        return this.each(fn)
      },
      append: function (t) {
        var n = "function" == typeof t ? t : mt(t);
        return this.select((function () {
          return this.appendChild(n.apply(this, arguments))
        }))
      },
      insert: function (t, n) {
        var e = "function" == typeof t ? t : mt(t),
          r = null == n ? sn : "function" == typeof n ? n : bt(n);
        return this.select((function () {
          return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
        }))
      },
      remove: function () {
        return this.each(ln)
      },
      clone: function (t) {
        return this.select(t ? dn : hn)
      },
      datum: function (t) {
        return arguments.length ? this.property("__data__", t) : this.node().__data__
      },
      on: function (t, n, e) {
        var r, i, o = _n(t + ""),
          u = o.length;
        if (!(arguments.length < 2)) {
          for (a = n ? xn : mn, null == e && (e = !1), r = 0; r < u; ++r) this.each(a(o[r], n, e));
          return this
        }
        var a = this.node().__on;
        if (a)
          for (var c, f = 0, s = a.length; f < s; ++f)
            for (r = 0, c = a[f]; r < u; ++r)
              if ((i = o[r]).type === c.type && i.name === c.name) return c.value
      },
      dispatch: function (t, n) {
        return this.each(("function" == typeof n ? Tn : Mn)(t, n))
      }
    };
    var En = Nn,
      Cn = function (t) {
        return "string" == typeof t ? new kn([
          [document.querySelector(t)]
        ], [document.documentElement]) : new kn([
          [t]
        ], Sn)
      },
      An = function (t) {
        return Cn(mt(t).call(document.documentElement))
      },
      Rn = 0;

    function zn() {
      return new Ln
    }

    function Ln() {
      this._ = "@" + (++Rn).toString(36)
    }
    Ln.prototype = zn.prototype = {
      constructor: Ln,
      get: function (t) {
        for (var n = this._; !(n in t);)
          if (!(t = t.parentNode)) return;
        return t[n]
      },
      set: function (t, n) {
        return t[this._] = n
      },
      remove: function (t) {
        return this._ in t && delete t[this._]
      },
      toString: function () {
        return this._
      }
    };
    var Pn = function () {
        for (var t, n = vn; t = n.sourceEvent;) n = t;
        return n
      },
      Un = function (t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
          var r = e.createSVGPoint();
          return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
        }
        var i = t.getBoundingClientRect();
        return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
      },
      Dn = function (t) {
        var n = Pn();
        return n.changedTouches && (n = n.changedTouches[0]), Un(t, n)
      },
      On = function (t) {
        return "string" == typeof t ? new kn([document.querySelectorAll(t)], [document.documentElement]) : new kn([null == t ? [] : t], Sn)
      },
      qn = function (t, n, e) {
        arguments.length < 3 && (e = n, n = Pn().changedTouches);
        for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
          if ((r = n[i]).identifier === e) return Un(t, r);
        return null
      },
      In = function (t, n) {
        null == n && (n = Pn().touches);
        for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = Un(t, n[e]);
        return i
      };

    function jn() {
      vn.stopImmediatePropagation()
    }
    var Fn = function () {
        vn.preventDefault(), vn.stopImmediatePropagation()
      },
      Yn = function (t) {
        var n = t.document.documentElement,
          e = Cn(t).on("dragstart.drag", Fn, !0);
        "onselectstart" in n ? e.on("selectstart.drag", Fn, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
      };

    function Bn(t, n) {
      var e = t.document.documentElement,
        r = Cn(t).on("dragstart.drag", null);
      n && (r.on("click.drag", Fn, !0), setTimeout((function () {
        r.on("click.drag", null)
      }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
    }
    var Hn = function (t) {
      return function () {
        return t
      }
    };

    function $n(t, n, e, r, i, o, u, a, c, f) {
      this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = f
    }

    function Xn() {
      return !vn.button
    }

    function Vn() {
      return this.parentNode
    }

    function Wn(t) {
      return null == t ? {
        x: vn.x,
        y: vn.y
      } : t
    }

    function Zn() {
      return "ontouchstart" in this
    }
    $n.prototype.on = function () {
      var t = this._.on.apply(this._, arguments);
      return t === this._ ? this : t
    };
    var Gn = function () {
        var t, n, e, r, i = Xn,
          o = Vn,
          u = Wn,
          a = Zn,
          c = {},
          f = dt("start", "drag", "end"),
          s = 0,
          l = 0;

        function h(t) {
          t.on("mousedown.drag", d).filter(a).on("touchstart.drag", y).on("touchmove.drag", g).on("touchend.drag touchcancel.drag", _).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }

        function d() {
          if (!r && i.apply(this, arguments)) {
            var u = m("mouse", o.apply(this, arguments), Dn, this, arguments);
            u && (Cn(vn.view).on("mousemove.drag", p, !0).on("mouseup.drag", v, !0), Yn(vn.view), jn(), e = !1, t = vn.clientX, n = vn.clientY, u("start"))
          }
        }

        function p() {
          if (Fn(), !e) {
            var r = vn.clientX - t,
              i = vn.clientY - n;
            e = r * r + i * i > l
          }
          c.mouse("drag")
        }

        function v() {
          Cn(vn.view).on("mousemove.drag mouseup.drag", null), Bn(vn.view, e), Fn(), c.mouse("end")
        }

        function y() {
          if (i.apply(this, arguments)) {
            var t, n, e = vn.changedTouches,
              r = o.apply(this, arguments),
              u = e.length;
            for (t = 0; t < u; ++t)(n = m(e[t].identifier, r, qn, this, arguments)) && (jn(), n("start"))
          }
        }

        function g() {
          var t, n, e = vn.changedTouches,
            r = e.length;
          for (t = 0; t < r; ++t)(n = c[e[t].identifier]) && (Fn(), n("drag"))
        }

        function _() {
          var t, n, e = vn.changedTouches,
            i = e.length;
          for (r && clearTimeout(r), r = setTimeout((function () {
              r = null
            }), 500), t = 0; t < i; ++t)(n = c[e[t].identifier]) && (jn(), n("end"))
        }

        function m(t, n, e, r, i) {
          var o, a, l, d = e(n, t),
            p = f.copy();
          if (bn(new $n(h, "beforestart", o, t, s, d[0], d[1], 0, 0, p), (function () {
              return null != (vn.subject = o = u.apply(r, i)) && (a = o.x - d[0] || 0, l = o.y - d[1] || 0, !0)
            }))) return function u(f) {
            var v, y = d;
            switch (f) {
              case "start":
                c[t] = u, v = s++;
                break;
              case "end":
                delete c[t], --s;
              case "drag":
                d = e(n, t), v = s
            }
            bn(new $n(h, f, o, t, v, d[0] + a, d[1] + l, d[0] - y[0], d[1] - y[1], p), p.apply, p, [f, r, i])
          }
        }
        return h.filter = function (t) {
          return arguments.length ? (i = "function" == typeof t ? t : Hn(!!t), h) : i
        }, h.container = function (t) {
          return arguments.length ? (o = "function" == typeof t ? t : Hn(t), h) : o
        }, h.subject = function (t) {
          return arguments.length ? (u = "function" == typeof t ? t : Hn(t), h) : u
        }, h.touchable = function (t) {
          return arguments.length ? (a = "function" == typeof t ? t : Hn(!!t), h) : a
        }, h.on = function () {
          var t = f.on.apply(f, arguments);
          return t === f ? h : t
        }, h.clickDistance = function (t) {
          return arguments.length ? (l = (t = +t) * t, h) : Math.sqrt(l)
        }, h
      },
      Qn = function (t, n, e) {
        t.prototype = n.prototype = e, e.constructor = t
      };

    function Jn(t, n) {
      var e = Object.create(t.prototype);
      for (var r in n) e[r] = n[r];
      return e
    }

    function Kn() {}
    var te = "\\s*([+-]?\\d+)\\s*",
      ne = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      ee = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      re = /^#([0-9a-f]{3})$/,
      ie = /^#([0-9a-f]{6})$/,
      oe = new RegExp("^rgb\\(" + [te, te, te] + "\\)$"),
      ue = new RegExp("^rgb\\(" + [ee, ee, ee] + "\\)$"),
      ae = new RegExp("^rgba\\(" + [te, te, te, ne] + "\\)$"),
      ce = new RegExp("^rgba\\(" + [ee, ee, ee, ne] + "\\)$"),
      fe = new RegExp("^hsl\\(" + [ne, ee, ee] + "\\)$"),
      se = new RegExp("^hsla\\(" + [ne, ee, ee, ne] + "\\)$"),
      le = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      };

    function he(t) {
      var n;
      return t = (t + "").trim().toLowerCase(), (n = re.exec(t)) ? new ge((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = ie.exec(t)) ? de(parseInt(n[1], 16)) : (n = oe.exec(t)) ? new ge(n[1], n[2], n[3], 1) : (n = ue.exec(t)) ? new ge(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = ae.exec(t)) ? pe(n[1], n[2], n[3], n[4]) : (n = ce.exec(t)) ? pe(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = fe.exec(t)) ? _e(n[1], n[2] / 100, n[3] / 100, 1) : (n = se.exec(t)) ? _e(n[1], n[2] / 100, n[3] / 100, n[4]) : le.hasOwnProperty(t) ? de(le[t]) : "transparent" === t ? new ge(NaN, NaN, NaN, 0) : null
    }

    function de(t) {
      return new ge(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function pe(t, n, e, r) {
      return r <= 0 && (t = n = e = NaN), new ge(t, n, e, r)
    }

    function ve(t) {
      return t instanceof Kn || (t = he(t)), t ? new ge((t = t.rgb()).r, t.g, t.b, t.opacity) : new ge
    }

    function ye(t, n, e, r) {
      return 1 === arguments.length ? ve(t) : new ge(t, n, e, null == r ? 1 : r)
    }

    function ge(t, n, e, r) {
      this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
    }

    function _e(t, n, e, r) {
      return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new be(t, n, e, r)
    }

    function me(t) {
      if (t instanceof be) return new be(t.h, t.s, t.l, t.opacity);
      if (t instanceof Kn || (t = he(t)), !t) return new be;
      if (t instanceof be) return t;
      var n = (t = t.rgb()).r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        o = Math.max(n, e, r),
        u = NaN,
        a = o - i,
        c = (o + i) / 2;
      return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? o + i : 2 - o - i, u *= 60) : a = c > 0 && c < 1 ? 0 : u, new be(u, a, c, t.opacity)
    }

    function xe(t, n, e, r) {
      return 1 === arguments.length ? me(t) : new be(t, n, e, null == r ? 1 : r)
    }

    function be(t, n, e, r) {
      this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function we(t, n, e) {
      return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }
    Qn(Kn, he, {
      displayable: function () {
        return this.rgb().displayable()
      },
      toString: function () {
        return this.rgb() + ""
      }
    }), Qn(ge, ye, Jn(Kn, {
      brighter: function (t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new ge(this.r * t, this.g * t, this.b * t, this.opacity)
      },
      darker: function (t) {
        return t = null == t ? .7 : Math.pow(.7, t), new ge(this.r * t, this.g * t, this.b * t, this.opacity)
      },
      rgb: function () {
        return this
      },
      displayable: function () {
        return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
      },
      toString: function () {
        var t = this.opacity;
        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
      }
    })), Qn(be, xe, Jn(Kn, {
      brighter: function (t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new be(this.h, this.s, this.l * t, this.opacity)
      },
      darker: function (t) {
        return t = null == t ? .7 : Math.pow(.7, t), new be(this.h, this.s, this.l * t, this.opacity)
      },
      rgb: function () {
        var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;
        return new ge(we(t >= 240 ? t - 240 : t + 120, i, r), we(t, i, r), we(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
      },
      displayable: function () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      }
    }));
    var Me = Math.PI / 180,
      Te = 180 / Math.PI;

    function Se(t) {
      if (t instanceof Ne) return new Ne(t.l, t.a, t.b, t.opacity);
      if (t instanceof Pe) {
        var n = t.h * Me;
        return new Ne(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
      }
      t instanceof ge || (t = ve(t));
      var e = Re(t.r),
        r = Re(t.g),
        i = Re(t.b),
        o = Ee((.4124564 * e + .3575761 * r + .1804375 * i) / .95047),
        u = Ee((.2126729 * e + .7151522 * r + .072175 * i) / 1);
      return new Ne(116 * u - 16, 500 * (o - u), 200 * (u - Ee((.0193339 * e + .119192 * r + .9503041 * i) / 1.08883)), t.opacity)
    }

    function ke(t, n, e, r) {
      return 1 === arguments.length ? Se(t) : new Ne(t, n, e, null == r ? 1 : r)
    }

    function Ne(t, n, e, r) {
      this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
    }

    function Ee(t) {
      return t > 6 / 29 * (6 / 29) * (6 / 29) ? Math.pow(t, 1 / 3) : t / (6 / 29 * 3 * (6 / 29)) + 4 / 29
    }

    function Ce(t) {
      return t > 6 / 29 ? t * t * t : 6 / 29 * 3 * (6 / 29) * (t - 4 / 29)
    }

    function Ae(t) {
      return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function Re(t) {
      return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function ze(t) {
      if (t instanceof Pe) return new Pe(t.h, t.c, t.l, t.opacity);
      t instanceof Ne || (t = Se(t));
      var n = Math.atan2(t.b, t.a) * Te;
      return new Pe(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }

    function Le(t, n, e, r) {
      return 1 === arguments.length ? ze(t) : new Pe(t, n, e, null == r ? 1 : r)
    }

    function Pe(t, n, e, r) {
      this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
    }
    Qn(Ne, ke, Jn(Kn, {
      brighter: function (t) {
        return new Ne(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
      },
      darker: function (t) {
        return new Ne(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
      },
      rgb: function () {
        var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;
        return t = 1 * Ce(t), new ge(Ae(3.2404542 * (n = .95047 * Ce(n)) - 1.5371385 * t - .4985314 * (e = 1.08883 * Ce(e))), Ae(-.969266 * n + 1.8760108 * t + .041556 * e), Ae(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
      }
    })), Qn(Pe, Le, Jn(Kn, {
      brighter: function (t) {
        return new Pe(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
      },
      darker: function (t) {
        return new Pe(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
      },
      rgb: function () {
        return Se(this).rgb()
      }
    }));
    var Ue = -.29227,
      De = -1.7884503806,
      Oe = 3.5172982438,
      qe = -.6557636667999999;

    function Ie(t) {
      if (t instanceof Fe) return new Fe(t.h, t.s, t.l, t.opacity);
      t instanceof ge || (t = ve(t));
      var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (qe * r + De * n - Oe * e) / (qe + De - Oe),
        o = r - i,
        u = (1.97294 * (e - i) - Ue * o) / -.90649,
        a = Math.sqrt(u * u + o * o) / (1.97294 * i * (1 - i)),
        c = a ? Math.atan2(u, o) * Te - 120 : NaN;
      return new Fe(c < 0 ? c + 360 : c, a, i, t.opacity)
    }

    function je(t, n, e, r) {
      return 1 === arguments.length ? Ie(t) : new Fe(t, n, e, null == r ? 1 : r)
    }

    function Fe(t, n, e, r) {
      this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function Ye(t, n, e, r, i) {
      var o = t * t,
        u = o * t;
      return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
    }
    Qn(Fe, je, Jn(Kn, {
      brighter: function (t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Fe(this.h, this.s, this.l * t, this.opacity)
      },
      darker: function (t) {
        return t = null == t ? .7 : Math.pow(.7, t), new Fe(this.h, this.s, this.l * t, this.opacity)
      },
      rgb: function () {
        var t = isNaN(this.h) ? 0 : (this.h + 120) * Me,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);
        return new ge(255 * (n + e * (-.14861 * r + 1.78277 * i)), 255 * (n + e * (Ue * r + -.90649 * i)), 255 * (n + e * (1.97294 * r)), this.opacity)
      }
    }));
    var Be = function (t) {
        var n = t.length - 1;
        return function (e) {
          var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
            i = t[r],
            o = t[r + 1],
            u = r > 0 ? t[r - 1] : 2 * i - o,
            a = r < n - 1 ? t[r + 2] : 2 * o - i;
          return Ye((e - r / n) * n, u, i, o, a)
        }
      },
      He = function (t) {
        var n = t.length;
        return function (e) {
          var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
            i = t[(r + n - 1) % n],
            o = t[r % n],
            u = t[(r + 1) % n],
            a = t[(r + 2) % n];
          return Ye((e - r / n) * n, i, o, u, a)
        }
      },
      $e = function (t) {
        return function () {
          return t
        }
      };

    function Xe(t, n) {
      return function (e) {
        return t + e * n
      }
    }

    function Ve(t, n) {
      var e = n - t;
      return e ? Xe(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : $e(isNaN(t) ? n : t)
    }

    function We(t) {
      return 1 == (t = +t) ? Ze : function (n, e) {
        return e - n ? function (t, n, e) {
          return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
            function (r) {
              return Math.pow(t + r * n, e)
            }
        }(n, e, t) : $e(isNaN(n) ? e : n)
      }
    }

    function Ze(t, n) {
      var e = n - t;
      return e ? Xe(t, e) : $e(isNaN(t) ? n : t)
    }
    var Ge = function t(n) {
      var e = We(n);

      function r(t, n) {
        var r = e((t = ye(t)).r, (n = ye(n)).r),
          i = e(t.g, n.g),
          o = e(t.b, n.b),
          u = Ze(t.opacity, n.opacity);
        return function (n) {
          return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + ""
        }
      }
      return r.gamma = t, r
    }(1);

    function Qe(t) {
      return function (n) {
        var e, r, i = n.length,
          o = new Array(i),
          u = new Array(i),
          a = new Array(i);
        for (e = 0; e < i; ++e) r = ye(n[e]), o[e] = r.r || 0, u[e] = r.g || 0, a[e] = r.b || 0;
        return o = t(o), u = t(u), a = t(a), r.opacity = 1,
          function (t) {
            return r.r = o(t), r.g = u(t), r.b = a(t), r + ""
          }
      }
    }
    var Je = Qe(Be),
      Ke = Qe(He),
      tr = function (t, n) {
        var e, r = n ? n.length : 0,
          i = t ? Math.min(r, t.length) : 0,
          o = new Array(i),
          u = new Array(r);
        for (e = 0; e < i; ++e) o[e] = lr(t[e], n[e]);
        for (; e < r; ++e) u[e] = n[e];
        return function (t) {
          for (e = 0; e < i; ++e) u[e] = o[e](t);
          return u
        }
      },
      nr = function (t, n) {
        var e = new Date;
        return n -= t = +t,
          function (r) {
            return e.setTime(t + n * r), e
          }
      },
      er = function (t, n) {
        return n -= t = +t,
          function (e) {
            return t + n * e
          }
      },
      rr = function (t, n) {
        var e, r = {},
          i = {};
        for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = lr(t[e], n[e]) : i[e] = n[e];
        return function (t) {
          for (e in r) i[e] = r[e](t);
          return i
        }
      },
      ir = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      or = new RegExp(ir.source, "g");
    var ur, ar, cr, fr, sr = function (t, n) {
        var e, r, i, o = ir.lastIndex = or.lastIndex = 0,
          u = -1,
          a = [],
          c = [];
        for (t += "", n += "";
          (e = ir.exec(t)) && (r = or.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({
          i: u,
          x: er(e, r)
        })), o = or.lastIndex;
        return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? function (t) {
          return function (n) {
            return t(n) + ""
          }
        }(c[0].x) : function (t) {
          return function () {
            return t
          }
        }(n) : (n = c.length, function (t) {
          for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
          return a.join("")
        })
      },
      lr = function (t, n) {
        var e, r = typeof n;
        return null == n || "boolean" === r ? $e(n) : ("number" === r ? er : "string" === r ? (e = he(n)) ? (n = e, Ge) : sr : n instanceof he ? Ge : n instanceof Date ? nr : Array.isArray(n) ? tr : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? rr : er)(t, n)
      },
      hr = function (t, n) {
        return n -= t = +t,
          function (e) {
            return Math.round(t + n * e)
          }
      },
      dr = 180 / Math.PI,
      pr = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
      },
      vr = function (t, n, e, r, i, o) {
        var u, a, c;
        return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
          translateX: i,
          translateY: o,
          rotate: Math.atan2(n, t) * dr,
          skewX: Math.atan(c) * dr,
          scaleX: u,
          scaleY: a
        }
      };

    function yr(t, n, e, r) {
      function i(t) {
        return t.length ? t.pop() + " " : ""
      }
      return function (o, u) {
        var a = [],
          c = [];
        return o = t(o), u = t(u),
          function (t, r, i, o, u, a) {
            if (t !== i || r !== o) {
              var c = u.push("translate(", null, n, null, e);
              a.push({
                i: c - 4,
                x: er(t, i)
              }, {
                i: c - 2,
                x: er(r, o)
              })
            } else(i || o) && u.push("translate(" + i + n + o + e)
          }(o.translateX, o.translateY, u.translateX, u.translateY, a, c),
          function (t, n, e, o) {
            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
              i: e.push(i(e) + "rotate(", null, r) - 2,
              x: er(t, n)
            })) : n && e.push(i(e) + "rotate(" + n + r)
          }(o.rotate, u.rotate, a, c),
          function (t, n, e, o) {
            t !== n ? o.push({
              i: e.push(i(e) + "skewX(", null, r) - 2,
              x: er(t, n)
            }) : n && e.push(i(e) + "skewX(" + n + r)
          }(o.skewX, u.skewX, a, c),
          function (t, n, e, r, o, u) {
            if (t !== e || n !== r) {
              var a = o.push(i(o) + "scale(", null, ",", null, ")");
              u.push({
                i: a - 4,
                x: er(t, e)
              }, {
                i: a - 2,
                x: er(n, r)
              })
            } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
          }(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, c), o = u = null,
          function (t) {
            for (var n, e = -1, r = c.length; ++e < r;) a[(n = c[e]).i] = n.x(t);
            return a.join("")
          }
      }
    }
    var gr = yr((function (t) {
        return "none" === t ? pr : (ur || (ur = document.createElement("DIV"), ar = document.documentElement, cr = document.defaultView), ur.style.transform = t, t = cr.getComputedStyle(ar.appendChild(ur), null).getPropertyValue("transform"), ar.removeChild(ur), t = t.slice(7, -1).split(","), vr(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
      }), "px, ", "px)", "deg)"),
      _r = yr((function (t) {
        return null == t ? pr : (fr || (fr = document.createElementNS("http://www.w3.org/2000/svg", "g")), fr.setAttribute("transform", t), (t = fr.transform.baseVal.consolidate()) ? (t = t.matrix, vr(t.a, t.b, t.c, t.d, t.e, t.f)) : pr)
      }), ", ", ")", ")"),
      mr = Math.SQRT2;

    function xr(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2
    }
    var br = function (t, n) {
      var e, r, i = t[0],
        o = t[1],
        u = t[2],
        a = n[0],
        c = n[1],
        f = n[2],
        s = a - i,
        l = c - o,
        h = s * s + l * l;
      if (h < 1e-12) r = Math.log(f / u) / mr, e = function (t) {
        return [i + t * s, o + t * l, u * Math.exp(mr * t * r)]
      };
      else {
        var d = Math.sqrt(h),
          p = (f * f - u * u + 4 * h) / (2 * u * 2 * d),
          v = (f * f - u * u - 4 * h) / (2 * f * 2 * d),
          y = Math.log(Math.sqrt(p * p + 1) - p),
          g = Math.log(Math.sqrt(v * v + 1) - v);
        r = (g - y) / mr, e = function (t) {
          var n, e = t * r,
            a = xr(y),
            c = u / (2 * d) * (a * (n = mr * e + y, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - function (t) {
              return ((t = Math.exp(t)) - 1 / t) / 2
            }(y));
          return [i + c * s, o + c * l, u * a / xr(mr * e + y)]
        }
      }
      return e.duration = 1e3 * r, e
    };

    function wr(t) {
      return function (n, e) {
        var r = t((n = xe(n)).h, (e = xe(e)).h),
          i = Ze(n.s, e.s),
          o = Ze(n.l, e.l),
          u = Ze(n.opacity, e.opacity);
        return function (t) {
          return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = u(t), n + ""
        }
      }
    }
    var Mr = wr(Ve),
      Tr = wr(Ze);

    function Sr(t, n) {
      var e = Ze((t = ke(t)).l, (n = ke(n)).l),
        r = Ze(t.a, n.a),
        i = Ze(t.b, n.b),
        o = Ze(t.opacity, n.opacity);
      return function (n) {
        return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + ""
      }
    }

    function kr(t) {
      return function (n, e) {
        var r = t((n = Le(n)).h, (e = Le(e)).h),
          i = Ze(n.c, e.c),
          o = Ze(n.l, e.l),
          u = Ze(n.opacity, e.opacity);
        return function (t) {
          return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = u(t), n + ""
        }
      }
    }
    var Nr = kr(Ve),
      Er = kr(Ze);

    function Cr(t) {
      return function n(e) {
        function r(n, r) {
          var i = t((n = je(n)).h, (r = je(r)).h),
            o = Ze(n.s, r.s),
            u = Ze(n.l, r.l),
            a = Ze(n.opacity, r.opacity);
          return function (t) {
            return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + ""
          }
        }
        return e = +e, r.gamma = n, r
      }(1)
    }
    var Ar, Rr, zr = Cr(Ve),
      Lr = Cr(Ze),
      Pr = function (t, n) {
        for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
        return e
      },
      Ur = 0,
      Dr = 0,
      Or = 0,
      qr = 0,
      Ir = 0,
      jr = 0,
      Fr = "object" == typeof performance && performance.now ? performance : Date,
      Yr = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
        setTimeout(t, 17)
      };

    function Br() {
      return Ir || (Yr(Hr), Ir = Fr.now() + jr)
    }

    function Hr() {
      Ir = 0
    }

    function $r() {
      this._call = this._time = this._next = null
    }

    function Xr(t, n, e) {
      var r = new $r;
      return r.restart(t, n, e), r
    }

    function Vr() {
      Br(), ++Ur;
      for (var t, n = Ar; n;)(t = Ir - n._time) >= 0 && n._call.call(null, t), n = n._next;
      --Ur
    }

    function Wr() {
      Ir = (qr = Fr.now()) + jr, Ur = Dr = 0;
      try {
        Vr()
      } finally {
        Ur = 0,
          function () {
            var t, n, e = Ar,
              r = 1 / 0;
            for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ar = n);
            Rr = t, Gr(r)
          }(), Ir = 0
      }
    }

    function Zr() {
      var t = Fr.now(),
        n = t - qr;
      n > 1e3 && (jr -= n, qr = t)
    }

    function Gr(t) {
      Ur || (Dr && (Dr = clearTimeout(Dr)), t - Ir > 24 ? (t < 1 / 0 && (Dr = setTimeout(Wr, t - Fr.now() - jr)), Or && (Or = clearInterval(Or))) : (Or || (qr = Fr.now(), Or = setInterval(Zr, 1e3)), Ur = 1, Yr(Wr)))
    }
    $r.prototype = Xr.prototype = {
      constructor: $r,
      restart: function (t, n, e) {
        if ("function" != typeof t) throw new TypeError("callback is not a function");
        e = (null == e ? Br() : +e) + (null == n ? 0 : +n), this._next || Rr === this || (Rr ? Rr._next = this : Ar = this, Rr = this), this._call = t, this._time = e, Gr()
      },
      stop: function () {
        this._call && (this._call = null, this._time = 1 / 0, Gr())
      }
    };
    var Qr = function (t, n, e) {
        var r = new $r;
        return n = null == n ? 0 : +n, r.restart((function (e) {
          r.stop(), t(e + n)
        }), n, e), r
      },
      Jr = function (t, n, e) {
        var r = new $r,
          i = n;
        return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? Br() : +e, r.restart((function o(u) {
          u += i, r.restart(o, i += n, e), t(u)
        }), n, e), r)
      },
      Kr = dt("start", "end", "interrupt"),
      ti = [],
      ni = function (t, n, e, r, i, o) {
        var u = t.__transition;
        if (u) {
          if (e in u) return
        } else t.__transition = {};
        ! function (t, n, e) {
          var r, i = t.__transition;

          function o(c) {
            var f, s, l, h;
            if (1 !== e.state) return a();
            for (f in i)
              if ((h = i[f]).name === e.name) {
                if (3 === h.state) return Qr(o);
                4 === h.state ? (h.state = 6, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[f]) : +f < n && (h.state = 6, h.timer.stop(), delete i[f])
              } if (Qr((function () {
                3 === e.state && (e.state = 4, e.timer.restart(u, e.delay, e.time), u(c))
              })), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
              for (e.state = 3, r = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f)(h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
              r.length = s + 1
            }
          }

          function u(n) {
            for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = 5, 1), o = -1, u = r.length; ++o < u;) r[o].call(null, i);
            5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), a())
          }

          function a() {
            for (var r in e.state = 6, e.timer.stop(), delete i[n], i) return;
            delete t.__transition
          }
          i[n] = e, e.timer = Xr((function (t) {
            e.state = 1, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay)
          }), 0, e.time)
        }(t, e, {
          name: n,
          index: r,
          group: i,
          on: Kr,
          tween: ti,
          time: o.time,
          delay: o.delay,
          duration: o.duration,
          ease: o.ease,
          timer: null,
          state: 0
        })
      };

    function ei(t, n) {
      var e = ii(t, n);
      if (e.state > 0) throw new Error("too late; already scheduled");
      return e
    }

    function ri(t, n) {
      var e = ii(t, n);
      if (e.state > 2) throw new Error("too late; already started");
      return e
    }

    function ii(t, n) {
      var e = t.__transition;
      if (!e || !(e = e[n])) throw new Error("transition not found");
      return e
    }
    var oi = function (t, n) {
      var e, r, i, o = t.__transition,
        u = !0;
      if (o) {
        for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
        u && delete t.__transition
      }
    };

    function ui(t, n) {
      var e, r;
      return function () {
        var i = ri(this, t),
          o = i.tween;
        if (o !== e)
          for (var u = 0, a = (r = e = o).length; u < a; ++u)
            if (r[u].name === n) {
              (r = r.slice()).splice(u, 1);
              break
            } i.tween = r
      }
    }

    function ai(t, n, e) {
      var r, i;
      if ("function" != typeof e) throw new Error;
      return function () {
        var o = ri(this, t),
          u = o.tween;
        if (u !== r) {
          i = (r = u).slice();
          for (var a = {
              name: n,
              value: e
            }, c = 0, f = i.length; c < f; ++c)
            if (i[c].name === n) {
              i[c] = a;
              break
            } c === f && i.push(a)
        }
        o.tween = i
      }
    }

    function ci(t, n, e) {
      var r = t._id;
      return t.each((function () {
          var t = ri(this, r);
          (t.value || (t.value = {}))[n] = e.apply(this, arguments)
        })),
        function (t) {
          return ii(t, r).value[n]
        }
    }
    var fi = function (t, n) {
      var e;
      return ("number" == typeof n ? er : n instanceof he ? Ge : (e = he(n)) ? (n = e, Ge) : sr)(t, n)
    };

    function si(t) {
      return function () {
        this.removeAttribute(t)
      }
    }

    function li(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local)
      }
    }

    function hi(t, n, e) {
      var r, i;
      return function () {
        var o = this.getAttribute(t);
        return o === e ? null : o === r ? i : i = n(r = o, e)
      }
    }

    function di(t, n, e) {
      var r, i;
      return function () {
        var o = this.getAttributeNS(t.space, t.local);
        return o === e ? null : o === r ? i : i = n(r = o, e)
      }
    }

    function pi(t, n, e) {
      var r, i, o;
      return function () {
        var u, a = e(this);
        if (null != a) return (u = this.getAttribute(t)) === a ? null : u === r && a === i ? o : o = n(r = u, i = a);
        this.removeAttribute(t)
      }
    }

    function vi(t, n, e) {
      var r, i, o;
      return function () {
        var u, a = e(this);
        if (null != a) return (u = this.getAttributeNS(t.space, t.local)) === a ? null : u === r && a === i ? o : o = n(r = u, i = a);
        this.removeAttributeNS(t.space, t.local)
      }
    }

    function yi(t, n) {
      function e() {
        var e = this,
          r = n.apply(e, arguments);
        return r && function (n) {
          e.setAttributeNS(t.space, t.local, r(n))
        }
      }
      return e._value = n, e
    }

    function gi(t, n) {
      function e() {
        var e = this,
          r = n.apply(e, arguments);
        return r && function (n) {
          e.setAttribute(t, r(n))
        }
      }
      return e._value = n, e
    }

    function _i(t, n) {
      return function () {
        ei(this, t).delay = +n.apply(this, arguments)
      }
    }

    function mi(t, n) {
      return n = +n,
        function () {
          ei(this, t).delay = n
        }
    }

    function xi(t, n) {
      return function () {
        ri(this, t).duration = +n.apply(this, arguments)
      }
    }

    function bi(t, n) {
      return n = +n,
        function () {
          ri(this, t).duration = n
        }
    }

    function wi(t, n) {
      if ("function" != typeof n) throw new Error;
      return function () {
        ri(this, t).ease = n
      }
    }

    function Mi(t, n, e) {
      var r, i, o = function (t) {
        return (t + "").trim().split(/^|\s+/).every((function (t) {
          var n = t.indexOf(".");
          return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
        }))
      }(n) ? ei : ri;
      return function () {
        var u = o(this, t),
          a = u.on;
        a !== r && (i = (r = a).copy()).on(n, e), u.on = i
      }
    }
    var Ti = En.prototype.constructor;

    function Si(t, n, e) {
      function r() {
        var r = this,
          i = n.apply(r, arguments);
        return i && function (n) {
          r.style.setProperty(t, i(n), e)
        }
      }
      return r._value = n, r
    }
    var ki = 0;

    function Ni(t, n, e, r) {
      this._groups = t, this._parents = n, this._name = e, this._id = r
    }

    function Ei(t) {
      return En().transition(t)
    }

    function Ci() {
      return ++ki
    }
    var Ai = En.prototype;

    function Ri(t) {
      return +t
    }

    function zi(t) {
      return t * t
    }

    function Li(t) {
      return t * (2 - t)
    }

    function Pi(t) {
      return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
    }

    function Ui(t) {
      return t * t * t
    }

    function Di(t) {
      return --t * t * t + 1
    }

    function Oi(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    }
    Ni.prototype = Ei.prototype = {
      constructor: Ni,
      select: function (t) {
        var n = this._name,
          e = this._id;
        "function" != typeof t && (t = bt(t));
        for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
          for (var a, c, f = r[u], s = f.length, l = o[u] = new Array(s), h = 0; h < s; ++h)(a = f[h]) && (c = t.call(a, a.__data__, h, f)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, ni(l[h], n, e, h, l, ii(a, e)));
        return new Ni(o, this._parents, n, e)
      },
      selectAll: function (t) {
        var n = this._name,
          e = this._id;
        "function" != typeof t && (t = Mt(t));
        for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)
          for (var c, f = r[a], s = f.length, l = 0; l < s; ++l)
            if (c = f[l]) {
              for (var h, d = t.call(c, c.__data__, l, f), p = ii(c, e), v = 0, y = d.length; v < y; ++v)(h = d[v]) && ni(h, n, e, v, d, p);
              o.push(d), u.push(c)
            } return new Ni(o, u, n, e)
      },
      filter: function (t) {
        "function" != typeof t && (t = Nt(t));
        for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
          for (var o, u = n[i], a = u.length, c = r[i] = [], f = 0; f < a; ++f)(o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
        return new Ni(r, this._parents, this._name, this._id)
      },
      merge: function (t) {
        if (t._id !== this._id) throw new Error;
        for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
          for (var c, f = n[a], s = e[a], l = f.length, h = u[a] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
        for (; a < r; ++a) u[a] = n[a];
        return new Ni(u, this._parents, this._name, this._id)
      },
      selection: function () {
        return new Ti(this._groups, this._parents)
      },
      transition: function () {
        for (var t = this._name, n = this._id, e = Ci(), r = this._groups, i = r.length, o = 0; o < i; ++o)
          for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
            if (u = a[f]) {
              var s = ii(u, n);
              ni(u, t, e, f, a, {
                time: s.time + s.delay + s.duration,
                delay: 0,
                duration: s.duration,
                ease: s.ease
              })
            } return new Ni(r, this._parents, t, e)
      },
      call: Ai.call,
      nodes: Ai.nodes,
      node: Ai.node,
      size: Ai.size,
      empty: Ai.empty,
      each: Ai.each,
      on: function (t, n) {
        var e = this._id;
        return arguments.length < 2 ? ii(this.node(), e).on.on(t) : this.each(Mi(e, t, n))
      },
      attr: function (t, n) {
        var e = yt(t),
          r = "transform" === e ? _r : fi;
        return this.attrTween(t, "function" == typeof n ? (e.local ? vi : pi)(e, r, ci(this, "attr." + t, n)) : null == n ? (e.local ? li : si)(e) : (e.local ? di : hi)(e, r, n + ""))
      },
      attrTween: function (t, n) {
        var e = "attr." + t;
        if (arguments.length < 2) return (e = this.tween(e)) && e._value;
        if (null == n) return this.tween(e, null);
        if ("function" != typeof n) throw new Error;
        var r = yt(t);
        return this.tween(e, (r.local ? yi : gi)(r, n))
      },
      style: function (t, n, e) {
        var r = "transform" == (t += "") ? gr : fi;
        return null == n ? this.styleTween(t, function (t, n) {
          var e, r, i;
          return function () {
            var o = Bt(this, t),
              u = (this.style.removeProperty(t), Bt(this, t));
            return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u)
          }
        }(t, r)).on("end.style." + t, function (t) {
          return function () {
            this.style.removeProperty(t)
          }
        }(t)) : this.styleTween(t, "function" == typeof n ? function (t, n, e) {
          var r, i, o;
          return function () {
            var u = Bt(this, t),
              a = e(this);
            return null == a && (this.style.removeProperty(t), a = Bt(this, t)), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a)
          }
        }(t, r, ci(this, "style." + t, n)) : function (t, n, e) {
          var r, i;
          return function () {
            var o = Bt(this, t);
            return o === e ? null : o === r ? i : i = n(r = o, e)
          }
        }(t, r, n + ""), e)
      },
      styleTween: function (t, n, e) {
        var r = "style." + (t += "");
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (null == n) return this.tween(r, null);
        if ("function" != typeof n) throw new Error;
        return this.tween(r, Si(t, n, null == e ? "" : e))
      },
      text: function (t) {
        return this.tween("text", "function" == typeof t ? function (t) {
          return function () {
            var n = t(this);
            this.textContent = null == n ? "" : n
          }
        }(ci(this, "text", t)) : function (t) {
          return function () {
            this.textContent = t
          }
        }(null == t ? "" : t + ""))
      },
      remove: function () {
        return this.on("end.remove", (t = this._id, function () {
          var n = this.parentNode;
          for (var e in this.__transition)
            if (+e !== t) return;
          n && n.removeChild(this)
        }));
        var t
      },
      tween: function (t, n) {
        var e = this._id;
        if (t += "", arguments.length < 2) {
          for (var r, i = ii(this.node(), e).tween, o = 0, u = i.length; o < u; ++o)
            if ((r = i[o]).name === t) return r.value;
          return null
        }
        return this.each((null == n ? ui : ai)(e, t, n))
      },
      delay: function (t) {
        var n = this._id;
        return arguments.length ? this.each(("function" == typeof t ? _i : mi)(n, t)) : ii(this.node(), n).delay
      },
      duration: function (t) {
        var n = this._id;
        return arguments.length ? this.each(("function" == typeof t ? xi : bi)(n, t)) : ii(this.node(), n).duration
      },
      ease: function (t) {
        var n = this._id;
        return arguments.length ? this.each(wi(n, t)) : ii(this.node(), n).ease
      }
    };
    var qi = function t(n) {
        function e(t) {
          return Math.pow(t, n)
        }
        return n = +n, e.exponent = t, e
      }(3),
      Ii = function t(n) {
        function e(t) {
          return 1 - Math.pow(1 - t, n)
        }
        return n = +n, e.exponent = t, e
      }(3),
      ji = function t(n) {
        function e(t) {
          return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
        }
        return n = +n, e.exponent = t, e
      }(3),
      Fi = Math.PI,
      Yi = Fi / 2;

    function Bi(t) {
      return 1 - Math.cos(t * Yi)
    }

    function Hi(t) {
      return Math.sin(t * Yi)
    }

    function $i(t) {
      return (1 - Math.cos(Fi * t)) / 2
    }

    function Xi(t) {
      return Math.pow(2, 10 * t - 10)
    }

    function Vi(t) {
      return 1 - Math.pow(2, -10 * t)
    }

    function Wi(t) {
      return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
    }

    function Zi(t) {
      return 1 - Math.sqrt(1 - t * t)
    }

    function Gi(t) {
      return Math.sqrt(1 - --t * t)
    }

    function Qi(t) {
      return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
    }

    function Ji(t) {
      return 1 - Ki(1 - t)
    }

    function Ki(t) {
      return (t = +t) < 4 / 11 ? 7.5625 * t * t : t < 8 / 11 ? 7.5625 * (t -= 6 / 11) * t + 3 / 4 : t < 10 / 11 ? 7.5625 * (t -= 9 / 11) * t + 15 / 16 : 7.5625 * (t -= 21 / 22) * t + 63 / 64
    }

    function to(t) {
      return ((t *= 2) <= 1 ? 1 - Ki(1 - t) : Ki(t - 1) + 1) / 2
    }
    var no = function t(n) {
        function e(t) {
          return t * t * ((n + 1) * t - n)
        }
        return n = +n, e.overshoot = t, e
      }(1.70158),
      eo = function t(n) {
        function e(t) {
          return --t * t * ((n + 1) * t + n) + 1
        }
        return n = +n, e.overshoot = t, e
      }(1.70158),
      ro = function t(n) {
        function e(t) {
          return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
        }
        return n = +n, e.overshoot = t, e
      }(1.70158),
      io = 2 * Math.PI,
      oo = function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= io);

        function i(t) {
          return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e)
        }
        return i.amplitude = function (n) {
          return t(n, e * io)
        }, i.period = function (e) {
          return t(n, e)
        }, i
      }(1, .3),
      uo = function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= io);

        function i(t) {
          return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e)
        }
        return i.amplitude = function (n) {
          return t(n, e * io)
        }, i.period = function (e) {
          return t(n, e)
        }, i
      }(1, .3),
      ao = function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= io);

        function i(t) {
          return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
        }
        return i.amplitude = function (n) {
          return t(n, e * io)
        }, i.period = function (e) {
          return t(n, e)
        }, i
      }(1, .3),
      co = {
        time: null,
        delay: 0,
        duration: 250,
        ease: Oi
      };

    function fo(t, n) {
      for (var e; !(e = t.__transition) || !(e = e[n]);)
        if (!(t = t.parentNode)) return co.time = Br(), co;
      return e
    }
    En.prototype.interrupt = function (t) {
      return this.each((function () {
        oi(this, t)
      }))
    }, En.prototype.transition = function (t) {
      var n, e;
      t instanceof Ni ? (n = t._id, t = t._name) : (n = Ci(), (e = co).time = Br(), t = null == t ? null : t + "");
      for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
        for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)(u = a[f]) && ni(u, t, n, f, a, e || fo(u, n));
      return new Ni(r, this._parents, t, n)
    };
    var so = [null],
      lo = function (t, n) {
        var e, r, i = t.__transition;
        if (i)
          for (r in n = null == n ? null : n + "", i)
            if ((e = i[r]).state > 1 && e.name === n) return new Ni([
              [t]
            ], so, n, +r);
        return null
      },
      ho = function (t) {
        return function () {
          return t
        }
      },
      po = function (t, n, e) {
        this.target = t, this.type = n, this.selection = e
      };

    function vo() {
      vn.stopImmediatePropagation()
    }
    var yo = function () {
        vn.preventDefault(), vn.stopImmediatePropagation()
      },
      go = {
        name: "drag"
      },
      _o = {
        name: "space"
      },
      mo = {
        name: "handle"
      },
      xo = {
        name: "center"
      },
      bo = {
        name: "x",
        handles: ["e", "w"].map(Co),
        input: function (t, n) {
          return t && [
            [t[0], n[0][1]],
            [t[1], n[1][1]]
          ]
        },
        output: function (t) {
          return t && [t[0][0], t[1][0]]
        }
      },
      wo = {
        name: "y",
        handles: ["n", "s"].map(Co),
        input: function (t, n) {
          return t && [
            [n[0][0], t[0]],
            [n[1][0], t[1]]
          ]
        },
        output: function (t) {
          return t && [t[0][1], t[1][1]]
        }
      },
      Mo = {
        name: "xy",
        handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Co),
        input: function (t) {
          return t
        },
        output: function (t) {
          return t
        }
      },
      To = {
        overlay: "crosshair",
        selection: "move",
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
      },
      So = {
        e: "w",
        w: "e",
        nw: "ne",
        ne: "nw",
        se: "sw",
        sw: "se"
      },
      ko = {
        n: "s",
        s: "n",
        nw: "sw",
        ne: "se",
        se: "ne",
        sw: "nw"
      },
      No = {
        overlay: 1,
        selection: 1,
        n: null,
        e: 1,
        s: null,
        w: -1,
        nw: -1,
        ne: 1,
        se: 1,
        sw: -1
      },
      Eo = {
        overlay: 1,
        selection: 1,
        n: -1,
        e: null,
        s: 1,
        w: null,
        nw: -1,
        ne: -1,
        se: 1,
        sw: 1
      };

    function Co(t) {
      return {
        type: t
      }
    }

    function Ao() {
      return !vn.button
    }

    function Ro() {
      var t = this.ownerSVGElement || this;
      return [
        [0, 0],
        [t.width.baseVal.value, t.height.baseVal.value]
      ]
    }

    function zo(t) {
      for (; !t.__brush;)
        if (!(t = t.parentNode)) return;
      return t.__brush
    }

    function Lo(t) {
      return t[0][0] === t[1][0] || t[0][1] === t[1][1]
    }

    function Po(t) {
      var n = t.__brush;
      return n ? n.dim.output(n.selection) : null
    }

    function Uo() {
      return qo(bo)
    }

    function Do() {
      return qo(wo)
    }
    var Oo = function () {
      return qo(Mo)
    };

    function qo(t) {
      var n, e = Ro,
        r = Ao,
        i = dt(u, "start", "brush", "end"),
        o = 6;

      function u(n) {
        var e = n.property("__brush", l).selectAll(".overlay").data([Co("overlay")]);
        e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", To.overlay).merge(e).each((function () {
          var t = zo(this).extent;
          Cn(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
        })), n.selectAll(".selection").data([Co("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", To.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var r = n.selectAll(".handle").data(t.handles, (function (t) {
          return t.type
        }));
        r.exit().remove(), r.enter().append("rect").attr("class", (function (t) {
          return "handle handle--" + t.type
        })).attr("cursor", (function (t) {
          return To[t.type]
        })), n.each(a).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", s)
      }

      function a() {
        var t = Cn(this),
          n = zo(this).selection;
        n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", (function (t) {
          return "e" === t.type[t.type.length - 1] ? n[1][0] - o / 2 : n[0][0] - o / 2
        })).attr("y", (function (t) {
          return "s" === t.type[0] ? n[1][1] - o / 2 : n[0][1] - o / 2
        })).attr("width", (function (t) {
          return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + o : o
        })).attr("height", (function (t) {
          return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + o : o
        }))) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
      }

      function c(t, n) {
        return t.__brush.emitter || new f(t, n)
      }

      function f(t, n) {
        this.that = t, this.args = n, this.state = t.__brush, this.active = 0
      }

      function s() {
        if (vn.touches) {
          if (vn.changedTouches.length < vn.touches.length) return yo()
        } else if (n) return;
        if (r.apply(this, arguments)) {
          var e, i, o, u, f, s, l, h, d, p, v, y, g, _ = this,
            m = vn.target.__data__.type,
            x = "selection" === (vn.metaKey ? m = "overlay" : m) ? go : vn.altKey ? xo : mo,
            b = t === wo ? null : No[m],
            w = t === bo ? null : Eo[m],
            M = zo(_),
            T = M.extent,
            S = M.selection,
            k = T[0][0],
            N = T[0][1],
            E = T[1][0],
            C = T[1][1],
            A = b && w && vn.shiftKey,
            R = Dn(_),
            z = R,
            L = c(_, arguments).beforestart();
          "overlay" === m ? M.selection = S = [
            [e = t === wo ? k : R[0], o = t === bo ? N : R[1]],
            [f = t === wo ? E : e, l = t === bo ? C : o]
          ] : (e = S[0][0], o = S[0][1], f = S[1][0], l = S[1][1]), i = e, u = o, s = f, h = l;
          var P = Cn(_).attr("pointer-events", "none"),
            U = P.selectAll(".overlay").attr("cursor", To[m]);
          if (vn.touches) P.on("touchmove.brush", O, !0).on("touchend.brush touchcancel.brush", I, !0);
          else {
            var D = Cn(vn.view).on("keydown.brush", j, !0).on("keyup.brush", F, !0).on("mousemove.brush", O, !0).on("mouseup.brush", I, !0);
            Yn(vn.view)
          }
          vo(), oi(_), a.call(_), L.start()
        }

        function O() {
          var t = Dn(_);
          !A || y || g || (Math.abs(t[0] - z[0]) > Math.abs(t[1] - z[1]) ? g = !0 : y = !0), z = t, v = !0, yo(), q()
        }

        function q() {
          var t;
          switch (d = z[0] - R[0], p = z[1] - R[1], x) {
            case _o:
            case go:
              b && (d = Math.max(k - e, Math.min(E - f, d)), i = e + d, s = f + d), w && (p = Math.max(N - o, Math.min(C - l, p)), u = o + p, h = l + p);
              break;
            case mo:
              b < 0 ? (d = Math.max(k - e, Math.min(E - e, d)), i = e + d, s = f) : b > 0 && (d = Math.max(k - f, Math.min(E - f, d)), i = e, s = f + d), w < 0 ? (p = Math.max(N - o, Math.min(C - o, p)), u = o + p, h = l) : w > 0 && (p = Math.max(N - l, Math.min(C - l, p)), u = o, h = l + p);
              break;
            case xo:
              b && (i = Math.max(k, Math.min(E, e - d * b)), s = Math.max(k, Math.min(E, f + d * b))), w && (u = Math.max(N, Math.min(C, o - p * w)), h = Math.max(N, Math.min(C, l + p * w)))
          }
          s < i && (b *= -1, t = e, e = f, f = t, t = i, i = s, s = t, m in So && U.attr("cursor", To[m = So[m]])), h < u && (w *= -1, t = o, o = l, l = t, t = u, u = h, h = t, m in ko && U.attr("cursor", To[m = ko[m]])), M.selection && (S = M.selection), y && (i = S[0][0], s = S[1][0]), g && (u = S[0][1], h = S[1][1]), S[0][0] === i && S[0][1] === u && S[1][0] === s && S[1][1] === h || (M.selection = [
            [i, u],
            [s, h]
          ], a.call(_), L.brush())
        }

        function I() {
          if (vo(), vn.touches) {
            if (vn.touches.length) return;
            n && clearTimeout(n), n = setTimeout((function () {
              n = null
            }), 500), P.on("touchmove.brush touchend.brush touchcancel.brush", null)
          } else Bn(vn.view, v), D.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
          P.attr("pointer-events", "all"), U.attr("cursor", To.overlay), M.selection && (S = M.selection), Lo(S) && (M.selection = null, a.call(_)), L.end()
        }

        function j() {
          switch (vn.keyCode) {
            case 16:
              A = b && w;
              break;
            case 18:
              x === mo && (b && (f = s - d * b, e = i + d * b), w && (l = h - p * w, o = u + p * w), x = xo, q());
              break;
            case 32:
              x !== mo && x !== xo || (b < 0 ? f = s - d : b > 0 && (e = i - d), w < 0 ? l = h - p : w > 0 && (o = u - p), x = _o, U.attr("cursor", To.selection), q());
              break;
            default:
              return
          }
          yo()
        }

        function F() {
          switch (vn.keyCode) {
            case 16:
              A && (y = g = A = !1, q());
              break;
            case 18:
              x === xo && (b < 0 ? f = s : b > 0 && (e = i), w < 0 ? l = h : w > 0 && (o = u), x = mo, q());
              break;
            case 32:
              x === _o && (vn.altKey ? (b && (f = s - d * b, e = i + d * b), w && (l = h - p * w, o = u + p * w), x = xo) : (b < 0 ? f = s : b > 0 && (e = i), w < 0 ? l = h : w > 0 && (o = u), x = mo), U.attr("cursor", To[m]), q());
              break;
            default:
              return
          }
          yo()
        }
      }

      function l() {
        var n = this.__brush || {
          selection: null
        };
        return n.extent = e.apply(this, arguments), n.dim = t, n
      }
      return u.move = function (n, e) {
        n.selection ? n.on("start.brush", (function () {
          c(this, arguments).beforestart().start()
        })).on("interrupt.brush end.brush", (function () {
          c(this, arguments).end()
        })).tween("brush", (function () {
          var n = this,
            r = n.__brush,
            i = c(n, arguments),
            o = r.selection,
            u = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
            f = lr(o, u);

          function s(t) {
            r.selection = 1 === t && Lo(u) ? null : f(t), a.call(n), i.brush()
          }
          return o && u ? s : s(1)
        })) : n.each((function () {
          var n = this,
            r = arguments,
            i = n.__brush,
            o = t.input("function" == typeof e ? e.apply(n, r) : e, i.extent),
            u = c(n, r).beforestart();
          oi(n), i.selection = null == o || Lo(o) ? null : o, a.call(n), u.start().brush().end()
        }))
      }, f.prototype = {
        beforestart: function () {
          return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
        },
        start: function () {
          return this.starting && (this.starting = !1, this.emit("start")), this
        },
        brush: function () {
          return this.emit("brush"), this
        },
        end: function () {
          return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
        },
        emit: function (n) {
          bn(new po(u, n, t.output(this.state.selection)), i.apply, i, [n, this.that, this.args])
        }
      }, u.extent = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : ho([
          [+t[0][0], +t[0][1]],
          [+t[1][0], +t[1][1]]
        ]), u) : e
      }, u.filter = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : ho(!!t), u) : r
      }, u.handleSize = function (t) {
        return arguments.length ? (o = +t, u) : o
      }, u.on = function () {
        var t = i.on.apply(i, arguments);
        return t === i ? u : t
      }, u
    }
    var Io = Math.cos,
      jo = Math.sin,
      Fo = Math.PI,
      Yo = Fo / 2,
      Bo = 2 * Fo,
      Ho = Math.max;

    function $o(t) {
      return function (n, e) {
        return t(n.source.value + n.target.value, e.source.value + e.target.value)
      }
    }
    var Xo = function () {
        var t = 0,
          n = null,
          e = null,
          r = null;

        function i(i) {
          var o, u, a, c, f, s, l = i.length,
            h = [],
            d = S(l),
            p = [],
            v = [],
            y = v.groups = new Array(l),
            g = new Array(l * l);
          for (o = 0, f = -1; ++f < l;) {
            for (u = 0, s = -1; ++s < l;) u += i[f][s];
            h.push(u), p.push(S(l)), o += u
          }
          for (n && d.sort((function (t, e) {
              return n(h[t], h[e])
            })), e && p.forEach((function (t, n) {
              t.sort((function (t, r) {
                return e(i[n][t], i[n][r])
              }))
            })), c = (o = Ho(0, Bo - t * l) / o) ? t : Bo / l, u = 0, f = -1; ++f < l;) {
            for (a = u, s = -1; ++s < l;) {
              var _ = d[f],
                m = p[_][s],
                x = i[_][m],
                b = u,
                w = u += x * o;
              g[m * l + _] = {
                index: _,
                subindex: m,
                startAngle: b,
                endAngle: w,
                value: x
              }
            }
            y[_] = {
              index: _,
              startAngle: a,
              endAngle: u,
              value: h[_]
            }, u += c
          }
          for (f = -1; ++f < l;)
            for (s = f - 1; ++s < l;) {
              var M = g[s * l + f],
                T = g[f * l + s];
              (M.value || T.value) && v.push(M.value < T.value ? {
                source: T,
                target: M
              } : {
                source: M,
                target: T
              })
            }
          return r ? v.sort(r) : v
        }
        return i.padAngle = function (n) {
          return arguments.length ? (t = Ho(0, n), i) : t
        }, i.sortGroups = function (t) {
          return arguments.length ? (n = t, i) : n
        }, i.sortSubgroups = function (t) {
          return arguments.length ? (e = t, i) : e
        }, i.sortChords = function (t) {
          return arguments.length ? (null == t ? r = null : (r = $o(t))._ = t, i) : r && r._
        }, i
      },
      Vo = Array.prototype.slice,
      Wo = function (t) {
        return function () {
          return t
        }
      },
      Zo = Math.PI,
      Go = 2 * Zo,
      Qo = Go - 1e-6;

    function Jo() {
      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function Ko() {
      return new Jo
    }
    Jo.prototype = Ko.prototype = {
      constructor: Jo,
      moveTo: function (t, n) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
      },
      closePath: function () {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
      },
      lineTo: function (t, n) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
      },
      quadraticCurveTo: function (t, n, e, r) {
        this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
      },
      bezierCurveTo: function (t, n, e, r, i, o) {
        this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
      },
      arcTo: function (t, n, e, r, i) {
        t = +t, n = +n, e = +e, r = +r, i = +i;
        var o = this._x1,
          u = this._y1,
          a = e - t,
          c = r - n,
          f = o - t,
          s = u - n,
          l = f * f + s * s;
        if (i < 0) throw new Error("negative radius: " + i);
        if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
        else if (l > 1e-6)
          if (Math.abs(s * a - c * f) > 1e-6 && i) {
            var h = e - o,
              d = r - u,
              p = a * a + c * c,
              v = h * h + d * d,
              y = Math.sqrt(p),
              g = Math.sqrt(l),
              _ = i * Math.tan((Zo - Math.acos((p + l - v) / (2 * y * g))) / 2),
              m = _ / g,
              x = _ / y;
            Math.abs(m - 1) > 1e-6 && (this._ += "L" + (t + m * f) + "," + (n + m * s)), this._ += "A" + i + "," + i + ",0,0," + +(s * h > f * d) + "," + (this._x1 = t + x * a) + "," + (this._y1 = n + x * c)
          } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
        else;
      },
      arc: function (t, n, e, r, i, o) {
        t = +t, n = +n;
        var u = (e = +e) * Math.cos(r),
          a = e * Math.sin(r),
          c = t + u,
          f = n + a,
          s = 1 ^ o,
          l = o ? r - i : i - r;
        if (e < 0) throw new Error("negative radius: " + e);
        null === this._x1 ? this._ += "M" + c + "," + f : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) && (this._ += "L" + c + "," + f), e && (l < 0 && (l = l % Go + Go), l > Qo ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - u) + "," + (n - a) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f) : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= Zo) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
      },
      rect: function (t, n, e, r) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
      },
      toString: function () {
        return this._
      }
    };
    var tu = Ko;

    function nu(t) {
      return t.source
    }

    function eu(t) {
      return t.target
    }

    function ru(t) {
      return t.radius
    }

    function iu(t) {
      return t.startAngle
    }

    function ou(t) {
      return t.endAngle
    }
    var uu = function () {
      var t = nu,
        n = eu,
        e = ru,
        r = iu,
        i = ou,
        o = null;

      function u() {
        var u, a = Vo.call(arguments),
          c = t.apply(this, a),
          f = n.apply(this, a),
          s = +e.apply(this, (a[0] = c, a)),
          l = r.apply(this, a) - Yo,
          h = i.apply(this, a) - Yo,
          d = s * Io(l),
          p = s * jo(l),
          v = +e.apply(this, (a[0] = f, a)),
          y = r.apply(this, a) - Yo,
          g = i.apply(this, a) - Yo;
        if (o || (o = u = tu()), o.moveTo(d, p), o.arc(0, 0, s, l, h), l === y && h === g || (o.quadraticCurveTo(0, 0, v * Io(y), v * jo(y)), o.arc(0, 0, v, y, g)), o.quadraticCurveTo(0, 0, d, p), o.closePath(), u) return o = null, u + "" || null
      }
      return u.radius = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : Wo(+t), u) : e
      }, u.startAngle = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : Wo(+t), u) : r
      }, u.endAngle = function (t) {
        return arguments.length ? (i = "function" == typeof t ? t : Wo(+t), u) : i
      }, u.source = function (n) {
        return arguments.length ? (t = n, u) : t
      }, u.target = function (t) {
        return arguments.length ? (n = t, u) : n
      }, u.context = function (t) {
        return arguments.length ? (o = null == t ? null : t, u) : o
      }, u
    };

    function au() {}

    function cu(t, n) {
      var e = new au;
      if (t instanceof au) t.each((function (t, n) {
        e.set(n, t)
      }));
      else if (Array.isArray(t)) {
        var r, i = -1,
          o = t.length;
        if (null == n)
          for (; ++i < o;) e.set(i, t[i]);
        else
          for (; ++i < o;) e.set(n(r = t[i], i, t), r)
      } else if (t)
        for (var u in t) e.set(u, t[u]);
      return e
    }
    au.prototype = cu.prototype = {
      constructor: au,
      has: function (t) {
        return "$" + t in this
      },
      get: function (t) {
        return this["$" + t]
      },
      set: function (t, n) {
        return this["$" + t] = n, this
      },
      remove: function (t) {
        var n = "$" + t;
        return n in this && delete this[n]
      },
      clear: function () {
        for (var t in this) "$" === t[0] && delete this[t]
      },
      keys: function () {
        var t = [];
        for (var n in this) "$" === n[0] && t.push(n.slice(1));
        return t
      },
      values: function () {
        var t = [];
        for (var n in this) "$" === n[0] && t.push(this[n]);
        return t
      },
      entries: function () {
        var t = [];
        for (var n in this) "$" === n[0] && t.push({
          key: n.slice(1),
          value: this[n]
        });
        return t
      },
      size: function () {
        var t = 0;
        for (var n in this) "$" === n[0] && ++t;
        return t
      },
      empty: function () {
        for (var t in this)
          if ("$" === t[0]) return !1;
        return !0
      },
      each: function (t) {
        for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this)
      }
    };
    var fu = cu,
      su = function () {
        var t, n, e, r = [],
          i = [];

        function o(e, i, u, a) {
          if (i >= r.length) return null != t && e.sort(t), null != n ? n(e) : e;
          for (var c, f, s, l = -1, h = e.length, d = r[i++], p = fu(), v = u(); ++l < h;)(s = p.get(c = d(f = e[l]) + "")) ? s.push(f) : p.set(c, [f]);
          return p.each((function (t, n) {
            a(v, n, o(t, i, u, a))
          })), v
        }
        return e = {
          object: function (t) {
            return o(t, 0, lu, hu)
          },
          map: function (t) {
            return o(t, 0, du, pu)
          },
          entries: function (t) {
            return function t(e, o) {
              if (++o > r.length) return e;
              var u, a = i[o - 1];
              return null != n && o >= r.length ? u = e.entries() : (u = [], e.each((function (n, e) {
                u.push({
                  key: e,
                  values: t(n, o)
                })
              }))), null != a ? u.sort((function (t, n) {
                return a(t.key, n.key)
              })) : u
            }(o(t, 0, du, pu), 0)
          },
          key: function (t) {
            return r.push(t), e
          },
          sortKeys: function (t) {
            return i[r.length - 1] = t, e
          },
          sortValues: function (n) {
            return t = n, e
          },
          rollup: function (t) {
            return n = t, e
          }
        }
      };

    function lu() {
      return {}
    }

    function hu(t, n, e) {
      t[n] = e
    }

    function du() {
      return fu()
    }

    function pu(t, n, e) {
      t.set(n, e)
    }

    function vu() {}
    var yu = fu.prototype;

    function gu(t, n) {
      var e = new vu;
      if (t instanceof vu) t.each((function (t) {
        e.add(t)
      }));
      else if (t) {
        var r = -1,
          i = t.length;
        if (null == n)
          for (; ++r < i;) e.add(t[r]);
        else
          for (; ++r < i;) e.add(n(t[r], r, t))
      }
      return e
    }
    vu.prototype = gu.prototype = {
      constructor: vu,
      has: yu.has,
      add: function (t) {
        return this["$" + (t += "")] = t, this
      },
      remove: yu.remove,
      clear: yu.clear,
      values: yu.keys,
      size: yu.size,
      empty: yu.empty,
      each: yu.each
    };
    var _u = gu,
      mu = function (t) {
        var n = [];
        for (var e in t) n.push(e);
        return n
      },
      xu = function (t) {
        var n = [];
        for (var e in t) n.push(t[e]);
        return n
      },
      bu = function (t) {
        var n = [];
        for (var e in t) n.push({
          key: e,
          value: t[e]
        });
        return n
      },
      wu = {},
      Mu = {};

    function Tu(t) {
      return new Function("d", "return {" + t.map((function (t, n) {
        return JSON.stringify(t) + ": d[" + n + "]"
      })).join(",") + "}")
    }
    var Su = function (t) {
        var n = new RegExp('["' + t + "\n\r]"),
          e = t.charCodeAt(0);

        function r(t, n) {
          var r, i = [],
            o = t.length,
            u = 0,
            a = 0,
            c = o <= 0,
            f = !1;

          function s() {
            if (c) return Mu;
            if (f) return f = !1, wu;
            var n, r, i = u;
            if (34 === t.charCodeAt(i)) {
              for (; u++ < o && 34 !== t.charCodeAt(u) || 34 === t.charCodeAt(++u););
              return (n = u) >= o ? c = !0 : 10 === (r = t.charCodeAt(u++)) ? f = !0 : 13 === r && (f = !0, 10 === t.charCodeAt(u) && ++u), t.slice(i + 1, n - 1).replace(/""/g, '"')
            }
            for (; u < o;) {
              if (10 === (r = t.charCodeAt(n = u++))) f = !0;
              else if (13 === r) f = !0, 10 === t.charCodeAt(u) && ++u;
              else if (r !== e) continue;
              return t.slice(i, n)
            }
            return c = !0, t.slice(i, o)
          }
          for (10 === t.charCodeAt(o - 1) && --o, 13 === t.charCodeAt(o - 1) && --o;
            (r = s()) !== Mu;) {
            for (var l = []; r !== wu && r !== Mu;) l.push(r), r = s();
            n && null == (l = n(l, a++)) || i.push(l)
          }
          return i
        }

        function i(n) {
          return n.map(o).join(t)
        }

        function o(t) {
          return null == t ? "" : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
        }
        return {
          parse: function (t, n) {
            var e, i, o = r(t, (function (t, r) {
              if (e) return e(t, r - 1);
              i = t, e = n ? function (t, n) {
                var e = Tu(t);
                return function (r, i) {
                  return n(e(r), i, t)
                }
              }(t, n) : Tu(t)
            }));
            return o.columns = i || [], o
          },
          parseRows: r,
          format: function (n, e) {
            return null == e && (e = function (t) {
              var n = Object.create(null),
                e = [];
              return t.forEach((function (t) {
                for (var r in t) r in n || e.push(n[r] = r)
              })), e
            }(n)), [e.map(o).join(t)].concat(n.map((function (n) {
              return e.map((function (t) {
                return o(n[t])
              })).join(t)
            }))).join("\n")
          },
          formatRows: function (t) {
            return t.map(i).join("\n")
          }
        }
      },
      ku = Su(","),
      Nu = ku.parse,
      Eu = ku.parseRows,
      Cu = ku.format,
      Au = ku.formatRows,
      Ru = Su("\t"),
      zu = Ru.parse,
      Lu = Ru.parseRows,
      Pu = Ru.format,
      Uu = Ru.formatRows,
      Du = function (t, n) {
        var e;

        function r() {
          var r, i, o = e.length,
            u = 0,
            a = 0;
          for (r = 0; r < o; ++r) u += (i = e[r]).x, a += i.y;
          for (u = u / o - t, a = a / o - n, r = 0; r < o; ++r)(i = e[r]).x -= u, i.y -= a
        }
        return null == t && (t = 0), null == n && (n = 0), r.initialize = function (t) {
          e = t
        }, r.x = function (n) {
          return arguments.length ? (t = +n, r) : t
        }, r.y = function (t) {
          return arguments.length ? (n = +t, r) : n
        }, r
      },
      Ou = function (t) {
        return function () {
          return t
        }
      },
      qu = function () {
        return 1e-6 * (Math.random() - .5)
      };

    function Iu(t, n, e, r) {
      if (isNaN(n) || isNaN(e)) return t;
      var i, o, u, a, c, f, s, l, h, d = t._root,
        p = {
          data: r
        },
        v = t._x0,
        y = t._y0,
        g = t._x1,
        _ = t._y1;
      if (!d) return t._root = p, t;
      for (; d.length;)
        if ((f = n >= (o = (v + g) / 2)) ? v = o : g = o, (s = e >= (u = (y + _) / 2)) ? y = u : _ = u, i = d, !(d = d[l = s << 1 | f])) return i[l] = p, t;
      if (a = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === a && e === c) return p.next = d, i ? i[l] = p : t._root = p, t;
      do {
        i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (o = (v + g) / 2)) ? v = o : g = o, (s = e >= (u = (y + _) / 2)) ? y = u : _ = u
      } while ((l = s << 1 | f) == (h = (c >= u) << 1 | a >= o));
      return i[h] = d, i[l] = p, t
    }
    var ju = function (t, n, e, r, i) {
      this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
    };

    function Fu(t) {
      return t[0]
    }

    function Yu(t) {
      return t[1]
    }

    function Bu(t, n, e) {
      var r = new Hu(null == n ? Fu : n, null == e ? Yu : e, NaN, NaN, NaN, NaN);
      return null == t ? r : r.addAll(t)
    }

    function Hu(t, n, e, r, i, o) {
      this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0
    }

    function $u(t) {
      for (var n = {
          data: t.data
        }, e = n; t = t.next;) e = e.next = {
        data: t.data
      };
      return n
    }
    var Xu = Bu.prototype = Hu.prototype;

    function Vu(t) {
      return t.x + t.vx
    }

    function Wu(t) {
      return t.y + t.vy
    }
    Xu.copy = function () {
      var t, n, e = new Hu(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
      if (!r) return e;
      if (!r.length) return e._root = $u(r), e;
      for (t = [{
          source: r,
          target: e._root = new Array(4)
        }]; r = t.pop();)
        for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
          source: n,
          target: r.target[i] = new Array(4)
        }) : r.target[i] = $u(n));
      return e
    }, Xu.add = function (t) {
      var n = +this._x.call(null, t),
        e = +this._y.call(null, t);
      return Iu(this.cover(n, e), n, e, t)
    }, Xu.addAll = function (t) {
      var n, e, r, i, o = t.length,
        u = new Array(o),
        a = new Array(o),
        c = 1 / 0,
        f = 1 / 0,
        s = -1 / 0,
        l = -1 / 0;
      for (e = 0; e < o; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (u[e] = r, a[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
      for (s < c && (c = this._x0, s = this._x1), l < f && (f = this._y0, l = this._y1), this.cover(c, f).cover(s, l), e = 0; e < o; ++e) Iu(this, u[e], a[e], t[e]);
      return this
    }, Xu.cover = function (t, n) {
      if (isNaN(t = +t) || isNaN(n = +n)) return this;
      var e = this._x0,
        r = this._y0,
        i = this._x1,
        o = this._y1;
      if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;
      else {
        if (!(e > t || t > i || r > n || n > o)) return this;
        var u, a, c = i - e,
          f = this._root;
        switch (a = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {
          case 0:
            do {
              (u = new Array(4))[a] = f, f = u
            } while (o = r + (c *= 2), t > (i = e + c) || n > o);
            break;
          case 1:
            do {
              (u = new Array(4))[a] = f, f = u
            } while (o = r + (c *= 2), (e = i - c) > t || n > o);
            break;
          case 2:
            do {
              (u = new Array(4))[a] = f, f = u
            } while (r = o - (c *= 2), t > (i = e + c) || r > n);
            break;
          case 3:
            do {
              (u = new Array(4))[a] = f, f = u
            } while (r = o - (c *= 2), (e = i - c) > t || r > n)
        }
        this._root && this._root.length && (this._root = f)
      }
      return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this
    }, Xu.data = function () {
      var t = [];
      return this.visit((function (n) {
        if (!n.length)
          do {
            t.push(n.data)
          } while (n = n.next)
      })), t
    }, Xu.extent = function (t) {
      return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
        [this._x0, this._y0],
        [this._x1, this._y1]
      ]
    }, Xu.find = function (t, n, e) {
      var r, i, o, u, a, c, f, s = this._x0,
        l = this._y0,
        h = this._x1,
        d = this._y1,
        p = [],
        v = this._root;
      for (v && p.push(new ju(v, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();)
        if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > d || (u = c.x1) < s || (a = c.y1) < l))
          if (v.length) {
            var y = (i + u) / 2,
              g = (o + a) / 2;
            p.push(new ju(v[3], y, g, u, a), new ju(v[2], i, g, y, a), new ju(v[1], y, o, u, g), new ju(v[0], i, o, y, g)), (f = (n >= g) << 1 | t >= y) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c)
          } else {
            var _ = t - +this._x.call(null, v.data),
              m = n - +this._y.call(null, v.data),
              x = _ * _ + m * m;
            if (x < e) {
              var b = Math.sqrt(e = x);
              s = t - b, l = n - b, h = t + b, d = n + b, r = v.data
            }
          } return r
    }, Xu.remove = function (t) {
      if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t))) return this;
      var n, e, r, i, o, u, a, c, f, s, l, h, d = this._root,
        p = this._x0,
        v = this._y0,
        y = this._x1,
        g = this._y1;
      if (!d) return this;
      if (d.length)
        for (;;) {
          if ((f = o >= (a = (p + y) / 2)) ? p = a : y = a, (s = u >= (c = (v + g) / 2)) ? v = c : g = c, n = d, !(d = d[l = s << 1 | f])) return this;
          if (!d.length) break;
          (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
        }
      for (; d.data !== t;)
        if (r = d, !(d = d.next)) return this;
      return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this)
    }, Xu.removeAll = function (t) {
      for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
      return this
    }, Xu.root = function () {
      return this._root
    }, Xu.size = function () {
      var t = 0;
      return this.visit((function (n) {
        if (!n.length)
          do {
            ++t
          } while (n = n.next)
      })), t
    }, Xu.visit = function (t) {
      var n, e, r, i, o, u, a = [],
        c = this._root;
      for (c && a.push(new ju(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();)
        if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && c.length) {
          var f = (r + o) / 2,
            s = (i + u) / 2;
          (e = c[3]) && a.push(new ju(e, f, s, o, u)), (e = c[2]) && a.push(new ju(e, r, s, f, u)), (e = c[1]) && a.push(new ju(e, f, i, o, s)), (e = c[0]) && a.push(new ju(e, r, i, f, s))
        } return this
    }, Xu.visitAfter = function (t) {
      var n, e = [],
        r = [];
      for (this._root && e.push(new ju(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
        var i = n.node;
        if (i.length) {
          var o, u = n.x0,
            a = n.y0,
            c = n.x1,
            f = n.y1,
            s = (u + c) / 2,
            l = (a + f) / 2;
          (o = i[0]) && e.push(new ju(o, u, a, s, l)), (o = i[1]) && e.push(new ju(o, s, a, c, l)), (o = i[2]) && e.push(new ju(o, u, l, s, f)), (o = i[3]) && e.push(new ju(o, s, l, c, f))
        }
        r.push(n)
      }
      for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
      return this
    }, Xu.x = function (t) {
      return arguments.length ? (this._x = t, this) : this._x
    }, Xu.y = function (t) {
      return arguments.length ? (this._y = t, this) : this._y
    };
    var Zu = function (t) {
      var n, e, r = 1,
        i = 1;

      function o() {
        for (var t, o, a, c, f, s, l, h = n.length, d = 0; d < i; ++d)
          for (o = Bu(n, Vu, Wu).visitAfter(u), t = 0; t < h; ++t) a = n[t], s = e[a.index], l = s * s, c = a.x + a.vx, f = a.y + a.vy, o.visit(p);

        function p(t, n, e, i, o) {
          var u = t.data,
            h = t.r,
            d = s + h;
          if (!u) return n > c + d || i < c - d || e > f + d || o < f - d;
          if (u.index > a.index) {
            var p = c - u.x - u.vx,
              v = f - u.y - u.vy,
              y = p * p + v * v;
            y < d * d && (0 === p && (y += (p = qu()) * p), 0 === v && (y += (v = qu()) * v), y = (d - (y = Math.sqrt(y))) / y * r, a.vx += (p *= y) * (d = (h *= h) / (l + h)), a.vy += (v *= y) * d, u.vx -= p * (d = 1 - d), u.vy -= v * d)
          }
        }
      }

      function u(t) {
        if (t.data) return t.r = e[t.data.index];
        for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
      }

      function a() {
        if (n) {
          var r, i, o = n.length;
          for (e = new Array(o), r = 0; r < o; ++r) i = n[r], e[i.index] = +t(i, r, n)
        }
      }
      return "function" != typeof t && (t = Ou(null == t ? 1 : +t)), o.initialize = function (t) {
        n = t, a()
      }, o.iterations = function (t) {
        return arguments.length ? (i = +t, o) : i
      }, o.strength = function (t) {
        return arguments.length ? (r = +t, o) : r
      }, o.radius = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : Ou(+n), a(), o) : t
      }, o
    };

    function Gu(t) {
      return t.index
    }

    function Qu(t, n) {
      var e = t.get(n);
      if (!e) throw new Error("missing: " + n);
      return e
    }
    var Ju = function (t) {
      var n, e, r, i, o, u = Gu,
        a = function (t) {
          return 1 / Math.min(i[t.source.index], i[t.target.index])
        },
        c = Ou(30),
        f = 1;

      function s(r) {
        for (var i = 0, u = t.length; i < f; ++i)
          for (var a, c, s, l, h, d, p, v = 0; v < u; ++v) c = (a = t[v]).source, l = (s = a.target).x + s.vx - c.x - c.vx || qu(), h = s.y + s.vy - c.y - c.vy || qu(), l *= d = ((d = Math.sqrt(l * l + h * h)) - e[v]) / d * r * n[v], h *= d, s.vx -= l * (p = o[v]), s.vy -= h * p, c.vx += l * (p = 1 - p), c.vy += h * p
      }

      function l() {
        if (r) {
          var a, c, f = r.length,
            s = t.length,
            l = fu(r, u);
          for (a = 0, i = new Array(f); a < s; ++a)(c = t[a]).index = a, "object" != typeof c.source && (c.source = Qu(l, c.source)), "object" != typeof c.target && (c.target = Qu(l, c.target)), i[c.source.index] = (i[c.source.index] || 0) + 1, i[c.target.index] = (i[c.target.index] || 0) + 1;
          for (a = 0, o = new Array(s); a < s; ++a) c = t[a], o[a] = i[c.source.index] / (i[c.source.index] + i[c.target.index]);
          n = new Array(s), h(), e = new Array(s), d()
        }
      }

      function h() {
        if (r)
          for (var e = 0, i = t.length; e < i; ++e) n[e] = +a(t[e], e, t)
      }

      function d() {
        if (r)
          for (var n = 0, i = t.length; n < i; ++n) e[n] = +c(t[n], n, t)
      }
      return null == t && (t = []), s.initialize = function (t) {
        r = t, l()
      }, s.links = function (n) {
        return arguments.length ? (t = n, l(), s) : t
      }, s.id = function (t) {
        return arguments.length ? (u = t, s) : u
      }, s.iterations = function (t) {
        return arguments.length ? (f = +t, s) : f
      }, s.strength = function (t) {
        return arguments.length ? (a = "function" == typeof t ? t : Ou(+t), h(), s) : a
      }, s.distance = function (t) {
        return arguments.length ? (c = "function" == typeof t ? t : Ou(+t), d(), s) : c
      }, s
    };

    function Ku(t) {
      return t.x
    }

    function ta(t) {
      return t.y
    }
    var na, ea = Math.PI * (3 - Math.sqrt(5)),
      ra = function (t) {
        var n, e = 1,
          r = .001,
          i = 1 - Math.pow(r, 1 / 300),
          o = 0,
          u = .6,
          a = fu(),
          c = Xr(s),
          f = dt("tick", "end");

        function s() {
          l(), f.call("tick", n), e < r && (c.stop(), f.call("end", n))
        }

        function l() {
          var n, r, c = t.length;
          for (e += (o - e) * i, a.each((function (t) {
              t(e)
            })), n = 0; n < c; ++n) null == (r = t[n]).fx ? r.x += r.vx *= u : (r.x = r.fx, r.vx = 0), null == r.fy ? r.y += r.vy *= u : (r.y = r.fy, r.vy = 0)
        }

        function h() {
          for (var n, e = 0, r = t.length; e < r; ++e) {
            if ((n = t[e]).index = e, isNaN(n.x) || isNaN(n.y)) {
              var i = 10 * Math.sqrt(e),
                o = e * ea;
              n.x = i * Math.cos(o), n.y = i * Math.sin(o)
            }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
          }
        }

        function d(n) {
          return n.initialize && n.initialize(t), n
        }
        return null == t && (t = []), h(), n = {
          tick: l,
          restart: function () {
            return c.restart(s), n
          },
          stop: function () {
            return c.stop(), n
          },
          nodes: function (e) {
            return arguments.length ? (t = e, h(), a.each(d), n) : t
          },
          alpha: function (t) {
            return arguments.length ? (e = +t, n) : e
          },
          alphaMin: function (t) {
            return arguments.length ? (r = +t, n) : r
          },
          alphaDecay: function (t) {
            return arguments.length ? (i = +t, n) : +i
          },
          alphaTarget: function (t) {
            return arguments.length ? (o = +t, n) : o
          },
          velocityDecay: function (t) {
            return arguments.length ? (u = 1 - t, n) : 1 - u
          },
          force: function (t, e) {
            return arguments.length > 1 ? (null == e ? a.remove(t) : a.set(t, d(e)), n) : a.get(t)
          },
          find: function (n, e, r) {
            var i, o, u, a, c, f = 0,
              s = t.length;
            for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f)(u = (i = n - (a = t[f]).x) * i + (o = e - a.y) * o) < r && (c = a, r = u);
            return c
          },
          on: function (t, e) {
            return arguments.length > 1 ? (f.on(t, e), n) : f.on(t)
          }
        }
      },
      ia = function () {
        var t, n, e, r, i = Ou(-30),
          o = 1,
          u = 1 / 0,
          a = .81;

        function c(r) {
          var i, o = t.length,
            u = Bu(t, Ku, ta).visitAfter(s);
          for (e = r, i = 0; i < o; ++i) n = t[i], u.visit(l)
        }

        function f() {
          if (t) {
            var n, e, o = t.length;
            for (r = new Array(o), n = 0; n < o; ++n) e = t[n], r[e.index] = +i(e, n, t)
          }
        }

        function s(t) {
          var n, e, i, o, u, a = 0,
            c = 0;
          if (t.length) {
            for (i = o = u = 0; u < 4; ++u)(n = t[u]) && (e = Math.abs(n.value)) && (a += n.value, c += e, i += e * n.x, o += e * n.y);
            t.x = i / c, t.y = o / c
          } else {
            (n = t).x = n.data.x, n.y = n.data.y;
            do {
              a += r[n.data.index]
            } while (n = n.next)
          }
          t.value = a
        }

        function l(t, i, c, f) {
          if (!t.value) return !0;
          var s = t.x - n.x,
            l = t.y - n.y,
            h = f - i,
            d = s * s + l * l;
          if (h * h / a < d) return d < u && (0 === s && (d += (s = qu()) * s), 0 === l && (d += (l = qu()) * l), d < o && (d = Math.sqrt(o * d)), n.vx += s * t.value * e / d, n.vy += l * t.value * e / d), !0;
          if (!(t.length || d >= u)) {
            (t.data !== n || t.next) && (0 === s && (d += (s = qu()) * s), 0 === l && (d += (l = qu()) * l), d < o && (d = Math.sqrt(o * d)));
            do {
              t.data !== n && (h = r[t.data.index] * e / d, n.vx += s * h, n.vy += l * h)
            } while (t = t.next)
          }
        }
        return c.initialize = function (n) {
          t = n, f()
        }, c.strength = function (t) {
          return arguments.length ? (i = "function" == typeof t ? t : Ou(+t), f(), c) : i
        }, c.distanceMin = function (t) {
          return arguments.length ? (o = t * t, c) : Math.sqrt(o)
        }, c.distanceMax = function (t) {
          return arguments.length ? (u = t * t, c) : Math.sqrt(u)
        }, c.theta = function (t) {
          return arguments.length ? (a = t * t, c) : Math.sqrt(a)
        }, c
      },
      oa = function (t, n, e) {
        var r, i, o, u = Ou(.1);

        function a(t) {
          for (var u = 0, a = r.length; u < a; ++u) {
            var c = r[u],
              f = c.x - n || 1e-6,
              s = c.y - e || 1e-6,
              l = Math.sqrt(f * f + s * s),
              h = (o[u] - l) * i[u] * t / l;
            c.vx += f * h, c.vy += s * h
          }
        }

        function c() {
          if (r) {
            var n, e = r.length;
            for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) o[n] = +t(r[n], n, r), i[n] = isNaN(o[n]) ? 0 : +u(r[n], n, r)
          }
        }
        return "function" != typeof t && (t = Ou(+t)), null == n && (n = 0), null == e && (e = 0), a.initialize = function (t) {
          r = t, c()
        }, a.strength = function (t) {
          return arguments.length ? (u = "function" == typeof t ? t : Ou(+t), c(), a) : u
        }, a.radius = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : Ou(+n), c(), a) : t
        }, a.x = function (t) {
          return arguments.length ? (n = +t, a) : n
        }, a.y = function (t) {
          return arguments.length ? (e = +t, a) : e
        }, a
      },
      ua = function (t) {
        var n, e, r, i = Ou(.1);

        function o(t) {
          for (var i, o = 0, u = n.length; o < u; ++o)(i = n[o]).vx += (r[o] - i.x) * e[o] * t
        }

        function u() {
          if (n) {
            var o, u = n.length;
            for (e = new Array(u), r = new Array(u), o = 0; o < u; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n)
          }
        }
        return "function" != typeof t && (t = Ou(null == t ? 0 : +t)), o.initialize = function (t) {
          n = t, u()
        }, o.strength = function (t) {
          return arguments.length ? (i = "function" == typeof t ? t : Ou(+t), u(), o) : i
        }, o.x = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : Ou(+n), u(), o) : t
        }, o
      },
      aa = function (t) {
        var n, e, r, i = Ou(.1);

        function o(t) {
          for (var i, o = 0, u = n.length; o < u; ++o)(i = n[o]).vy += (r[o] - i.y) * e[o] * t
        }

        function u() {
          if (n) {
            var o, u = n.length;
            for (e = new Array(u), r = new Array(u), o = 0; o < u; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n)
          }
        }
        return "function" != typeof t && (t = Ou(null == t ? 0 : +t)), o.initialize = function (t) {
          n = t, u()
        }, o.strength = function (t) {
          return arguments.length ? (i = "function" == typeof t ? t : Ou(+t), u(), o) : i
        }, o.y = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : Ou(+n), u(), o) : t
        }, o
      },
      ca = function (t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var e, r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
      },
      fa = function (t) {
        return (t = ca(Math.abs(t))) ? t[1] : NaN
      },
      sa = function (t, n) {
        var e = ca(t, n);
        if (!e) return t + "";
        var r = e[0],
          i = e[1];
        return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
      },
      la = {
        "": function (t, n) {
          t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, o = -1; i < r; ++i) switch (t[i]) {
            case ".":
              o = e = i;
              break;
            case "0":
              0 === o && (o = i), e = i;
              break;
            case "e":
              break t;
            default:
              o > 0 && (o = 0)
          }
          return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
        },
        "%": function (t, n) {
          return (100 * t).toFixed(n)
        },
        b: function (t) {
          return Math.round(t).toString(2)
        },
        c: function (t) {
          return t + ""
        },
        d: function (t) {
          return Math.round(t).toString(10)
        },
        e: function (t, n) {
          return t.toExponential(n)
        },
        f: function (t, n) {
          return t.toFixed(n)
        },
        g: function (t, n) {
          return t.toPrecision(n)
        },
        o: function (t) {
          return Math.round(t).toString(8)
        },
        p: function (t, n) {
          return sa(100 * t, n)
        },
        r: sa,
        s: function (t, n) {
          var e = ca(t, n);
          if (!e) return t + "";
          var r = e[0],
            i = e[1],
            o = i - (na = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            u = r.length;
          return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + ca(t, Math.max(0, n + o - 1))[0]
        },
        X: function (t) {
          return Math.round(t).toString(16).toUpperCase()
        },
        x: function (t) {
          return Math.round(t).toString(16)
        }
      },
      ha = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

    function da(t) {
      return new pa(t)
    }

    function pa(t) {
      if (!(n = ha.exec(t))) throw new Error("invalid format: " + t);
      var n, e = n[1] || " ",
        r = n[2] || ">",
        i = n[3] || "-",
        o = n[4] || "",
        u = !!n[5],
        a = n[6] && +n[6],
        c = !!n[7],
        f = n[8] && +n[8].slice(1),
        s = n[9] || "";
      "n" === s ? (c = !0, s = "g") : la[s] || (s = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = o, this.zero = u, this.width = a, this.comma = c, this.precision = f, this.type = s
    }
    da.prototype = pa.prototype, pa.prototype.toString = function () {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
    };
    var va, ya, ga, _a = function (t) {
        return t
      },
      ma = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
      xa = function (t) {
        var n, e, r = t.grouping && t.thousands ? (n = t.grouping, e = t.thousands, function (t, r) {
            for (var i = t.length, o = [], u = 0, a = n[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), o.push(t.substring(i -= a, i + a)), !((c += a + 1) > r));) a = n[u = (u + 1) % n.length];
            return o.reverse().join(e)
          }) : _a,
          i = t.currency,
          o = t.decimal,
          u = t.numerals ? function (t) {
            return function (n) {
              return n.replace(/[0-9]/g, (function (n) {
                return t[+n]
              }))
            }
          }(t.numerals) : _a,
          a = t.percent || "%";

        function c(t) {
          var n = (t = da(t)).fill,
            e = t.align,
            c = t.sign,
            f = t.symbol,
            s = t.zero,
            l = t.width,
            h = t.comma,
            d = t.precision,
            p = t.type,
            v = "$" === f ? i[0] : "#" === f && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "",
            y = "$" === f ? i[1] : /[%p]/.test(p) ? a : "",
            g = la[p],
            _ = !p || /[defgprs%]/.test(p);

          function m(t) {
            var i, a, f, m = v,
              x = y;
            if ("c" === p) x = g(t) + x, t = "";
            else {
              var b = (t = +t) < 0;
              if (t = g(Math.abs(t), d), b && 0 == +t && (b = !1), m = (b ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + m, x = ("s" === p ? ma[8 + na / 3] : "") + x + (b && "(" === c ? ")" : ""), _)
                for (i = -1, a = t.length; ++i < a;)
                  if (48 > (f = t.charCodeAt(i)) || f > 57) {
                    x = (46 === f ? o + t.slice(i + 1) : t.slice(i)) + x, t = t.slice(0, i);
                    break
                  }
            }
            h && !s && (t = r(t, 1 / 0));
            var w = m.length + t.length + x.length,
              M = w < l ? new Array(l - w + 1).join(n) : "";
            switch (h && s && (t = r(M + t, M.length ? l - x.length : 1 / 0), M = ""), e) {
              case "<":
                t = m + t + x + M;
                break;
              case "=":
                t = m + M + t + x;
                break;
              case "^":
                t = M.slice(0, w = M.length >> 1) + m + t + x + M.slice(w);
                break;
              default:
                t = M + m + t + x
            }
            return u(t)
          }
          return d = null == d ? p ? 6 : 12 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), m.toString = function () {
            return t + ""
          }, m
        }
        return {
          format: c,
          formatPrefix: function (t, n) {
            var e = c(((t = da(t)).type = "f", t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(fa(n) / 3))),
              i = Math.pow(10, -r),
              o = ma[8 + r / 3];
            return function (t) {
              return e(i * t) + o
            }
          }
        }
      };

    function ba(t) {
      return va = xa(t), ya = va.format, ga = va.formatPrefix, va
    }
    ba({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    });
    var wa = function (t) {
        return Math.max(0, -fa(Math.abs(t)))
      },
      Ma = function (t, n) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(fa(n) / 3))) - fa(Math.abs(t)))
      },
      Ta = function (t, n) {
        return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, fa(n) - fa(t)) + 1
      },
      Sa = function () {
        return new ka
      };

    function ka() {
      this.reset()
    }
    ka.prototype = {
      constructor: ka,
      reset: function () {
        this.s = this.t = 0
      },
      add: function (t) {
        Ea(Na, t, this.t), Ea(this, Na.s, this.s), this.s ? this.t += Na.t : this.s = Na.t
      },
      valueOf: function () {
        return this.s
      }
    };
    var Na = new ka;

    function Ea(t, n, e) {
      var r = t.s = n + e,
        i = r - n,
        o = r - i;
      t.t = n - o + (e - i)
    }
    var Ca = Math.PI,
      Aa = Ca / 2,
      Ra = Ca / 4,
      za = 2 * Ca,
      La = 180 / Ca,
      Pa = Ca / 180,
      Ua = Math.abs,
      Da = Math.atan,
      Oa = Math.atan2,
      qa = Math.cos,
      Ia = Math.ceil,
      ja = Math.exp,
      Fa = (Math.floor, Math.log),
      Ya = Math.pow,
      Ba = Math.sin,
      Ha = Math.sign || function (t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
      },
      $a = Math.sqrt,
      Xa = Math.tan;

    function Va(t) {
      return t > 1 ? 0 : t < -1 ? Ca : Math.acos(t)
    }

    function Wa(t) {
      return t > 1 ? Aa : t < -1 ? -Aa : Math.asin(t)
    }

    function Za(t) {
      return (t = Ba(t / 2)) * t
    }

    function Ga() {}

    function Qa(t, n) {
      t && Ka.hasOwnProperty(t.type) && Ka[t.type](t, n)
    }
    var Ja = {
        Feature: function (t, n) {
          Qa(t.geometry, n)
        },
        FeatureCollection: function (t, n) {
          for (var e = t.features, r = -1, i = e.length; ++r < i;) Qa(e[r].geometry, n)
        }
      },
      Ka = {
        Sphere: function (t, n) {
          n.sphere()
        },
        Point: function (t, n) {
          t = t.coordinates, n.point(t[0], t[1], t[2])
        },
        MultiPoint: function (t, n) {
          for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
        },
        LineString: function (t, n) {
          tc(t.coordinates, n, 0)
        },
        MultiLineString: function (t, n) {
          for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) tc(e[r], n, 0)
        },
        Polygon: function (t, n) {
          nc(t.coordinates, n)
        },
        MultiPolygon: function (t, n) {
          for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) nc(e[r], n)
        },
        GeometryCollection: function (t, n) {
          for (var e = t.geometries, r = -1, i = e.length; ++r < i;) Qa(e[r], n)
        }
      };

    function tc(t, n, e) {
      var r, i = -1,
        o = t.length - e;
      for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
      n.lineEnd()
    }

    function nc(t, n) {
      var e = -1,
        r = t.length;
      for (n.polygonStart(); ++e < r;) tc(t[e], n, 1);
      n.polygonEnd()
    }
    var ec, rc, ic, oc, uc, ac = function (t, n) {
        t && Ja.hasOwnProperty(t.type) ? Ja[t.type](t, n) : Qa(t, n)
      },
      cc = Sa(),
      fc = Sa(),
      sc = {
        point: Ga,
        lineStart: Ga,
        lineEnd: Ga,
        polygonStart: function () {
          cc.reset(), sc.lineStart = lc, sc.lineEnd = hc
        },
        polygonEnd: function () {
          var t = +cc;
          fc.add(t < 0 ? za + t : t), this.lineStart = this.lineEnd = this.point = Ga
        },
        sphere: function () {
          fc.add(za)
        }
      };

    function lc() {
      sc.point = dc
    }

    function hc() {
      pc(ec, rc)
    }

    function dc(t, n) {
      sc.point = pc, ec = t, rc = n, ic = t *= Pa, oc = qa(n = (n *= Pa) / 2 + Ra), uc = Ba(n)
    }

    function pc(t, n) {
      var e = (t *= Pa) - ic,
        r = e >= 0 ? 1 : -1,
        i = r * e,
        o = qa(n = (n *= Pa) / 2 + Ra),
        u = Ba(n),
        a = uc * u,
        c = oc * o + a * qa(i),
        f = a * r * Ba(i);
      cc.add(Oa(f, c)), ic = t, oc = o, uc = u
    }
    var vc = function (t) {
      return fc.reset(), ac(t, sc), 2 * fc
    };

    function yc(t) {
      return [Oa(t[1], t[0]), Wa(t[2])]
    }

    function gc(t) {
      var n = t[0],
        e = t[1],
        r = qa(e);
      return [r * qa(n), r * Ba(n), Ba(e)]
    }

    function _c(t, n) {
      return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }

    function mc(t, n) {
      return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }

    function xc(t, n) {
      t[0] += n[0], t[1] += n[1], t[2] += n[2]
    }

    function bc(t, n) {
      return [t[0] * n, t[1] * n, t[2] * n]
    }

    function wc(t) {
      var n = $a(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
      t[0] /= n, t[1] /= n, t[2] /= n
    }
    var Mc, Tc, Sc, kc, Nc, Ec, Cc, Ac, Rc, zc, Lc = Sa(),
      Pc = {
        point: Uc,
        lineStart: Oc,
        lineEnd: qc,
        polygonStart: function () {
          Pc.point = Ic, Pc.lineStart = jc, Pc.lineEnd = Fc, Lc.reset(), sc.polygonStart()
        },
        polygonEnd: function () {
          sc.polygonEnd(), Pc.point = Uc, Pc.lineStart = Oc, Pc.lineEnd = qc, cc < 0 ? (Mc = -(Sc = 180), Tc = -(kc = 90)) : Lc > 1e-6 ? kc = 90 : Lc < -1e-6 && (Tc = -90), zc[0] = Mc, zc[1] = Sc
        }
      };

    function Uc(t, n) {
      Rc.push(zc = [Mc = t, Sc = t]), n < Tc && (Tc = n), n > kc && (kc = n)
    }

    function Dc(t, n) {
      var e = gc([t * Pa, n * Pa]);
      if (Ac) {
        var r = mc(Ac, e),
          i = mc([r[1], -r[0], 0], r);
        wc(i), i = yc(i);
        var o, u = t - Nc,
          a = u > 0 ? 1 : -1,
          c = i[0] * La * a,
          f = Ua(u) > 180;
        f ^ (a * Nc < c && c < a * t) ? (o = i[1] * La) > kc && (kc = o) : f ^ (a * Nc < (c = (c + 360) % 360 - 180) && c < a * t) ? (o = -i[1] * La) < Tc && (Tc = o) : (n < Tc && (Tc = n), n > kc && (kc = n)), f ? t < Nc ? Yc(Mc, t) > Yc(Mc, Sc) && (Sc = t) : Yc(t, Sc) > Yc(Mc, Sc) && (Mc = t) : Sc >= Mc ? (t < Mc && (Mc = t), t > Sc && (Sc = t)) : t > Nc ? Yc(Mc, t) > Yc(Mc, Sc) && (Sc = t) : Yc(t, Sc) > Yc(Mc, Sc) && (Mc = t)
      } else Rc.push(zc = [Mc = t, Sc = t]);
      n < Tc && (Tc = n), n > kc && (kc = n), Ac = e, Nc = t
    }

    function Oc() {
      Pc.point = Dc
    }

    function qc() {
      zc[0] = Mc, zc[1] = Sc, Pc.point = Uc, Ac = null
    }

    function Ic(t, n) {
      if (Ac) {
        var e = t - Nc;
        Lc.add(Ua(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
      } else Ec = t, Cc = n;
      sc.point(t, n), Dc(t, n)
    }

    function jc() {
      sc.lineStart()
    }

    function Fc() {
      Ic(Ec, Cc), sc.lineEnd(), Ua(Lc) > 1e-6 && (Mc = -(Sc = 180)), zc[0] = Mc, zc[1] = Sc, Ac = null
    }

    function Yc(t, n) {
      return (n -= t) < 0 ? n + 360 : n
    }

    function Bc(t, n) {
      return t[0] - n[0]
    }

    function Hc(t, n) {
      return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    }
    var $c, Xc, Vc, Wc, Zc, Gc, Qc, Jc, Kc, tf, nf, ef, rf, of , uf, af, cf = function (t) {
        var n, e, r, i, o, u, a;
        if (kc = Sc = -(Mc = Tc = 1 / 0), Rc = [], ac(t, Pc), e = Rc.length) {
          for (Rc.sort(Bc), n = 1, o = [r = Rc[0]]; n < e; ++n) Hc(r, (i = Rc[n])[0]) || Hc(r, i[1]) ? (Yc(r[0], i[1]) > Yc(r[0], r[1]) && (r[1] = i[1]), Yc(i[0], r[1]) > Yc(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
          for (u = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (a = Yc(r[1], i[0])) > u && (u = a, Mc = i[0], Sc = r[1])
        }
        return Rc = zc = null, Mc === 1 / 0 || Tc === 1 / 0 ? [
          [NaN, NaN],
          [NaN, NaN]
        ] : [
          [Mc, Tc],
          [Sc, kc]
        ]
      },
      ff = {
        sphere: Ga,
        point: sf,
        lineStart: hf,
        lineEnd: vf,
        polygonStart: function () {
          ff.lineStart = yf, ff.lineEnd = gf
        },
        polygonEnd: function () {
          ff.lineStart = hf, ff.lineEnd = vf
        }
      };

    function sf(t, n) {
      t *= Pa;
      var e = qa(n *= Pa);
      lf(e * qa(t), e * Ba(t), Ba(n))
    }

    function lf(t, n, e) {
      ++$c, Vc += (t - Vc) / $c, Wc += (n - Wc) / $c, Zc += (e - Zc) / $c
    }

    function hf() {
      ff.point = df
    }

    function df(t, n) {
      t *= Pa;
      var e = qa(n *= Pa); of = e * qa(t), uf = e * Ba(t), af = Ba(n), ff.point = pf, lf( of , uf, af)
    }

    function pf(t, n) {
      t *= Pa;
      var e = qa(n *= Pa),
        r = e * qa(t),
        i = e * Ba(t),
        o = Ba(n),
        u = Oa($a((u = uf * o - af * i) * u + (u = af * r - of * o) * u + (u = of * i - uf * r) * u), of * r + uf * i + af * o);
      Xc += u, Gc += u * ( of +( of = r)), Qc += u * (uf + (uf = i)), Jc += u * (af + (af = o)), lf( of , uf, af)
    }

    function vf() {
      ff.point = sf
    }

    function yf() {
      ff.point = _f
    }

    function gf() {
      mf(ef, rf), ff.point = sf
    }

    function _f(t, n) {
      ef = t, rf = n, t *= Pa, n *= Pa, ff.point = mf;
      var e = qa(n); of = e * qa(t), uf = e * Ba(t), af = Ba(n), lf( of , uf, af)
    }

    function mf(t, n) {
      t *= Pa;
      var e = qa(n *= Pa),
        r = e * qa(t),
        i = e * Ba(t),
        o = Ba(n),
        u = uf * o - af * i,
        a = af * r - of * o,
        c = of * i - uf * r,
        f = $a(u * u + a * a + c * c),
        s = Wa(f),
        l = f && -s / f;
      Kc += l * u, tf += l * a, nf += l * c, Xc += s, Gc += s * ( of +( of = r)), Qc += s * (uf + (uf = i)), Jc += s * (af + (af = o)), lf( of , uf, af)
    }
    var xf = function (t) {
        $c = Xc = Vc = Wc = Zc = Gc = Qc = Jc = Kc = tf = nf = 0, ac(t, ff);
        var n = Kc,
          e = tf,
          r = nf,
          i = n * n + e * e + r * r;
        return i < 1e-12 && (n = Gc, e = Qc, r = Jc, Xc < 1e-6 && (n = Vc, e = Wc, r = Zc), (i = n * n + e * e + r * r) < 1e-12) ? [NaN, NaN] : [Oa(e, n) * La, Wa(r / $a(i)) * La]
      },
      bf = function (t) {
        return function () {
          return t
        }
      },
      wf = function (t, n) {
        function e(e, r) {
          return e = t(e, r), n(e[0], e[1])
        }
        return t.invert && n.invert && (e.invert = function (e, r) {
          return (e = n.invert(e, r)) && t.invert(e[0], e[1])
        }), e
      };

    function Mf(t, n) {
      return [t > Ca ? t - za : t < -Ca ? t + za : t, n]
    }

    function Tf(t, n, e) {
      return (t %= za) ? n || e ? wf(kf(t), Nf(n, e)) : kf(t) : n || e ? Nf(n, e) : Mf
    }

    function Sf(t) {
      return function (n, e) {
        return [(n += t) > Ca ? n - za : n < -Ca ? n + za : n, e]
      }
    }

    function kf(t) {
      var n = Sf(t);
      return n.invert = Sf(-t), n
    }

    function Nf(t, n) {
      var e = qa(t),
        r = Ba(t),
        i = qa(n),
        o = Ba(n);

      function u(t, n) {
        var u = qa(n),
          a = qa(t) * u,
          c = Ba(t) * u,
          f = Ba(n),
          s = f * e + a * r;
        return [Oa(c * i - s * o, a * e - f * r), Wa(s * i + c * o)]
      }
      return u.invert = function (t, n) {
        var u = qa(n),
          a = qa(t) * u,
          c = Ba(t) * u,
          f = Ba(n),
          s = f * i - c * o;
        return [Oa(c * i + f * o, a * e + s * r), Wa(s * e - a * r)]
      }, u
    }
    Mf.invert = Mf;
    var Ef = function (t) {
      function n(n) {
        return (n = t(n[0] * Pa, n[1] * Pa))[0] *= La, n[1] *= La, n
      }
      return t = Tf(t[0] * Pa, t[1] * Pa, t.length > 2 ? t[2] * Pa : 0), n.invert = function (n) {
        return (n = t.invert(n[0] * Pa, n[1] * Pa))[0] *= La, n[1] *= La, n
      }, n
    };

    function Cf(t, n, e, r, i, o) {
      if (e) {
        var u = qa(n),
          a = Ba(n),
          c = r * e;
        null == i ? (i = n + r * za, o = n - c / 2) : (i = Af(u, i), o = Af(u, o), (r > 0 ? i < o : i > o) && (i += r * za));
        for (var f, s = i; r > 0 ? s > o : s < o; s -= c) f = yc([u, -a * qa(s), -a * Ba(s)]), t.point(f[0], f[1])
      }
    }

    function Af(t, n) {
      (n = gc(n))[0] -= t, wc(n);
      var e = Va(-n[1]);
      return ((-n[2] < 0 ? -e : e) + za - 1e-6) % za
    }
    var Rf = function () {
        var t, n, e = bf([0, 0]),
          r = bf(90),
          i = bf(6),
          o = {
            point: function (e, r) {
              t.push(e = n(e, r)), e[0] *= La, e[1] *= La
            }
          };

        function u() {
          var u = e.apply(this, arguments),
            a = r.apply(this, arguments) * Pa,
            c = i.apply(this, arguments) * Pa;
          return t = [], n = Tf(-u[0] * Pa, -u[1] * Pa, 0).invert, Cf(o, a, c, 1), u = {
            type: "Polygon",
            coordinates: [t]
          }, t = n = null, u
        }
        return u.center = function (t) {
          return arguments.length ? (e = "function" == typeof t ? t : bf([+t[0], +t[1]]), u) : e
        }, u.radius = function (t) {
          return arguments.length ? (r = "function" == typeof t ? t : bf(+t), u) : r
        }, u.precision = function (t) {
          return arguments.length ? (i = "function" == typeof t ? t : bf(+t), u) : i
        }, u
      },
      zf = function () {
        var t, n = [];
        return {
          point: function (n, e) {
            t.push([n, e])
          },
          lineStart: function () {
            n.push(t = [])
          },
          lineEnd: Ga,
          rejoin: function () {
            n.length > 1 && n.push(n.pop().concat(n.shift()))
          },
          result: function () {
            var e = n;
            return n = [], t = null, e
          }
        }
      },
      Lf = function (t, n) {
        return Ua(t[0] - n[0]) < 1e-6 && Ua(t[1] - n[1]) < 1e-6
      };

    function Pf(t, n, e, r) {
      this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
    }
    var Uf = function (t, n, e, r, i) {
      var o, u, a = [],
        c = [];
      if (t.forEach((function (t) {
          if (!((n = t.length - 1) <= 0)) {
            var n, e, r = t[0],
              u = t[n];
            if (Lf(r, u)) {
              for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);
              i.lineEnd()
            } else a.push(e = new Pf(r, t, null, !0)), c.push(e.o = new Pf(r, null, e, !1)), a.push(e = new Pf(u, t, null, !1)), c.push(e.o = new Pf(u, null, e, !0))
          }
        })), a.length) {
        for (c.sort(n), Df(a), Df(c), o = 0, u = c.length; o < u; ++o) c[o].e = e = !e;
        for (var f, s, l = a[0];;) {
          for (var h = l, d = !0; h.v;)
            if ((h = h.n) === l) return;
          f = h.z, i.lineStart();
          do {
            if (h.v = h.o.v = !0, h.e) {
              if (d)
                for (o = 0, u = f.length; o < u; ++o) i.point((s = f[o])[0], s[1]);
              else r(h.x, h.n.x, 1, i);
              h = h.n
            } else {
              if (d)
                for (f = h.p.z, o = f.length - 1; o >= 0; --o) i.point((s = f[o])[0], s[1]);
              else r(h.x, h.p.x, -1, i);
              h = h.p
            }
            f = (h = h.o).z, d = !d
          } while (!h.v);
          i.lineEnd()
        }
      }
    };

    function Df(t) {
      if (n = t.length) {
        for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
        i.n = e = t[0], e.p = i
      }
    }
    var Of = Sa(),
      qf = function (t, n) {
        var e = n[0],
          r = n[1],
          i = [Ba(e), -qa(e), 0],
          o = 0,
          u = 0;
        Of.reset();
        for (var a = 0, c = t.length; a < c; ++a)
          if (s = (f = t[a]).length)
            for (var f, s, l = f[s - 1], h = l[0], d = l[1] / 2 + Ra, p = Ba(d), v = qa(d), y = 0; y < s; ++y, h = _, p = x, v = b, l = g) {
              var g = f[y],
                _ = g[0],
                m = g[1] / 2 + Ra,
                x = Ba(m),
                b = qa(m),
                w = _ - h,
                M = w >= 0 ? 1 : -1,
                T = M * w,
                S = T > Ca,
                k = p * x;
              if (Of.add(Oa(k * M * Ba(T), v * b + k * qa(T))), o += S ? w + M * za : w, S ^ h >= e ^ _ >= e) {
                var N = mc(gc(l), gc(g));
                wc(N);
                var E = mc(i, N);
                wc(E);
                var C = (S ^ w >= 0 ? -1 : 1) * Wa(E[2]);
                (r > C || r === C && (N[0] || N[1])) && (u += S ^ w >= 0 ? 1 : -1)
              }
            }
        return (o < -1e-6 || o < 1e-6 && Of < -1e-6) ^ 1 & u
      },
      If = function (t, n, e, r) {
        return function (i) {
          var o, u, a, c = n(i),
            f = zf(),
            s = n(f),
            l = !1,
            h = {
              point: d,
              lineStart: v,
              lineEnd: y,
              polygonStart: function () {
                h.point = g, h.lineStart = _, h.lineEnd = m, u = [], o = []
              },
              polygonEnd: function () {
                h.point = d, h.lineStart = v, h.lineEnd = y, u = j(u);
                var t = qf(o, r);
                u.length ? (l || (i.polygonStart(), l = !0), Uf(u, Ff, t, e, i)) : t && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), u = o = null
              },
              sphere: function () {
                i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
              }
            };

          function d(n, e) {
            t(n, e) && i.point(n, e)
          }

          function p(t, n) {
            c.point(t, n)
          }

          function v() {
            h.point = p, c.lineStart()
          }

          function y() {
            h.point = d, c.lineEnd()
          }

          function g(t, n) {
            a.push([t, n]), s.point(t, n)
          }

          function _() {
            s.lineStart(), a = []
          }

          function m() {
            g(a[0][0], a[0][1]), s.lineEnd();
            var t, n, e, r, c = s.clean(),
              h = f.result(),
              d = h.length;
            if (a.pop(), o.push(a), a = null, d)
              if (1 & c) {
                if ((n = (e = h[0]).length - 1) > 0) {
                  for (l || (i.polygonStart(), l = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
                  i.lineEnd()
                }
              } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), u.push(h.filter(jf))
          }
          return h
        }
      };

    function jf(t) {
      return t.length > 1
    }

    function Ff(t, n) {
      return ((t = t.x)[0] < 0 ? t[1] - Aa - 1e-6 : Aa - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Aa - 1e-6 : Aa - n[1])
    }
    var Yf = If((function () {
      return !0
    }), (function (t) {
      var n, e = NaN,
        r = NaN,
        i = NaN;
      return {
        lineStart: function () {
          t.lineStart(), n = 1
        },
        point: function (o, u) {
          var a = o > 0 ? Ca : -Ca,
            c = Ua(o - e);
          Ua(c - Ca) < 1e-6 ? (t.point(e, r = (r + u) / 2 > 0 ? Aa : -Aa), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), n = 0) : i !== a && c >= Ca && (Ua(e - i) < 1e-6 && (e -= 1e-6 * i), Ua(o - a) < 1e-6 && (o -= 1e-6 * a), r = function (t, n, e, r) {
            var i, o, u = Ba(t - e);
            return Ua(u) > 1e-6 ? Da((Ba(n) * (o = qa(r)) * Ba(e) - Ba(r) * (i = qa(n)) * Ba(t)) / (i * o * u)) : (n + r) / 2
          }(e, r, o, u), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = o, r = u), i = a
        },
        lineEnd: function () {
          t.lineEnd(), e = r = NaN
        },
        clean: function () {
          return 2 - n
        }
      }
    }), (function (t, n, e, r) {
      var i;
      if (null == t) i = e * Aa, r.point(-Ca, i), r.point(0, i), r.point(Ca, i), r.point(Ca, 0), r.point(Ca, -i), r.point(0, -i), r.point(-Ca, -i), r.point(-Ca, 0), r.point(-Ca, i);
      else if (Ua(t[0] - n[0]) > 1e-6) {
        var o = t[0] < n[0] ? Ca : -Ca;
        i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
      } else r.point(n[0], n[1])
    }), [-Ca, -Aa]);
    var Bf = function (t) {
      var n = qa(t),
        e = 6 * Pa,
        r = n > 0,
        i = Ua(n) > 1e-6;

      function o(t, e) {
        return qa(t) * qa(e) > n
      }

      function u(t, e, r) {
        var i = [1, 0, 0],
          o = mc(gc(t), gc(e)),
          u = _c(o, o),
          a = o[0],
          c = u - a * a;
        if (!c) return !r && t;
        var f = n * u / c,
          s = -n * a / c,
          l = mc(i, o),
          h = bc(i, f);
        xc(h, bc(o, s));
        var d = l,
          p = _c(h, d),
          v = _c(d, d),
          y = p * p - v * (_c(h, h) - 1);
        if (!(y < 0)) {
          var g = $a(y),
            _ = bc(d, (-p - g) / v);
          if (xc(_, h), _ = yc(_), !r) return _;
          var m, x = t[0],
            b = e[0],
            w = t[1],
            M = e[1];
          b < x && (m = x, x = b, b = m);
          var T = b - x,
            S = Ua(T - Ca) < 1e-6;
          if (!S && M < w && (m = w, w = M, M = m), S || T < 1e-6 ? S ? w + M > 0 ^ _[1] < (Ua(_[0] - x) < 1e-6 ? w : M) : w <= _[1] && _[1] <= M : T > Ca ^ (x <= _[0] && _[0] <= b)) {
            var k = bc(d, (-p + g) / v);
            return xc(k, h), [_, yc(k)]
          }
        }
      }

      function a(n, e) {
        var i = r ? t : Ca - t,
          o = 0;
        return n < -i ? o |= 1 : n > i && (o |= 2), e < -i ? o |= 4 : e > i && (o |= 8), o
      }
      return If(o, (function (t) {
        var n, e, c, f, s;
        return {
          lineStart: function () {
            f = c = !1, s = 1
          },
          point: function (l, h) {
            var d, p = [l, h],
              v = o(l, h),
              y = r ? v ? 0 : a(l, h) : v ? a(l + (l < 0 ? Ca : -Ca), h) : 0;
            if (!n && (f = c = v) && t.lineStart(), v !== c && (!(d = u(n, p)) || Lf(n, d) || Lf(p, d)) && (p[0] += 1e-6, p[1] += 1e-6, v = o(p[0], p[1])), v !== c) s = 0, v ? (t.lineStart(), d = u(p, n), t.point(d[0], d[1])) : (d = u(n, p), t.point(d[0], d[1]), t.lineEnd()), n = d;
            else if (i && n && r ^ v) {
              var g;
              y & e || !(g = u(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(g[0][0], g[0][1]), t.point(g[1][0], g[1][1]), t.lineEnd()) : (t.point(g[1][0], g[1][1]), t.lineEnd(), t.lineStart(), t.point(g[0][0], g[0][1])))
            }!v || n && Lf(n, p) || t.point(p[0], p[1]), n = p, c = v, e = y
          },
          lineEnd: function () {
            c && t.lineEnd(), n = null
          },
          clean: function () {
            return s | (f && c) << 1
          }
        }
      }), (function (n, r, i, o) {
        Cf(o, t, e, i, n, r)
      }), r ? [0, -t] : [-Ca, t - Ca])
    };

    function Hf(t, n, e, r) {
      function i(i, o) {
        return t <= i && i <= e && n <= o && o <= r
      }

      function o(i, o, a, f) {
        var s = 0,
          l = 0;
        if (null == i || (s = u(i, a)) !== (l = u(o, a)) || c(i, o) < 0 ^ a > 0)
          do {
            f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n)
          } while ((s = (s + a + 4) % 4) !== l);
        else f.point(o[0], o[1])
      }

      function u(r, i) {
        return Ua(r[0] - t) < 1e-6 ? i > 0 ? 0 : 3 : Ua(r[0] - e) < 1e-6 ? i > 0 ? 2 : 1 : Ua(r[1] - n) < 1e-6 ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
      }

      function a(t, n) {
        return c(t.x, n.x)
      }

      function c(t, n) {
        var e = u(t, 1),
          r = u(n, 1);
        return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
      }
      return function (u) {
        var c, f, s, l, h, d, p, v, y, g, _, m = u,
          x = zf(),
          b = {
            point: w,
            lineStart: function () {
              b.point = M, f && f.push(s = []);
              g = !0, y = !1, p = v = NaN
            },
            lineEnd: function () {
              c && (M(l, h), d && y && x.rejoin(), c.push(x.result()));
              b.point = w, y && m.lineEnd()
            },
            polygonStart: function () {
              m = x, c = [], f = [], _ = !0
            },
            polygonEnd: function () {
              var n = function () {
                  for (var n = 0, e = 0, i = f.length; e < i; ++e)
                    for (var o, u, a = f[e], c = 1, s = a.length, l = a[0], h = l[0], d = l[1]; c < s; ++c) o = h, u = d, l = a[c], h = l[0], d = l[1], u <= r ? d > r && (h - o) * (r - u) > (d - u) * (t - o) && ++n : d <= r && (h - o) * (r - u) < (d - u) * (t - o) && --n;
                  return n
                }(),
                e = _ && n,
                i = (c = j(c)).length;
              (e || i) && (u.polygonStart(), e && (u.lineStart(), o(null, null, 1, u), u.lineEnd()), i && Uf(c, a, n, o, u), u.polygonEnd());
              m = u, c = f = s = null
            }
          };

        function w(t, n) {
          i(t, n) && m.point(t, n)
        }

        function M(o, u) {
          var a = i(o, u);
          if (f && s.push([o, u]), g) l = o, h = u, d = a, g = !1, a && (m.lineStart(), m.point(o, u));
          else if (a && y) m.point(o, u);
          else {
            var c = [p = Math.max(-1e9, Math.min(1e9, p)), v = Math.max(-1e9, Math.min(1e9, v))],
              x = [o = Math.max(-1e9, Math.min(1e9, o)), u = Math.max(-1e9, Math.min(1e9, u))];
            ! function (t, n, e, r, i, o) {
              var u, a = t[0],
                c = t[1],
                f = 0,
                s = 1,
                l = n[0] - a,
                h = n[1] - c;
              if (u = e - a, l || !(u > 0)) {
                if (u /= l, l < 0) {
                  if (u < f) return;
                  u < s && (s = u)
                } else if (l > 0) {
                  if (u > s) return;
                  u > f && (f = u)
                }
                if (u = i - a, l || !(u < 0)) {
                  if (u /= l, l < 0) {
                    if (u > s) return;
                    u > f && (f = u)
                  } else if (l > 0) {
                    if (u < f) return;
                    u < s && (s = u)
                  }
                  if (u = r - c, h || !(u > 0)) {
                    if (u /= h, h < 0) {
                      if (u < f) return;
                      u < s && (s = u)
                    } else if (h > 0) {
                      if (u > s) return;
                      u > f && (f = u)
                    }
                    if (u = o - c, h || !(u < 0)) {
                      if (u /= h, h < 0) {
                        if (u > s) return;
                        u > f && (f = u)
                      } else if (h > 0) {
                        if (u < f) return;
                        u < s && (s = u)
                      }
                      return f > 0 && (t[0] = a + f * l, t[1] = c + f * h), s < 1 && (n[0] = a + s * l, n[1] = c + s * h), !0
                    }
                  }
                }
              }
            }(c, x, t, n, e, r) ? a && (m.lineStart(), m.point(o, u), _ = !1): (y || (m.lineStart(), m.point(c[0], c[1])), m.point(x[0], x[1]), a || m.lineEnd(), _ = !1)
          }
          p = o, v = u, y = a
        }
        return b
      }
    }
    var $f, Xf, Vf, Wf = function () {
        var t, n, e, r = 0,
          i = 0,
          o = 960,
          u = 500;
        return e = {
          stream: function (e) {
            return t && n === e ? t : t = Hf(r, i, o, u)(n = e)
          },
          extent: function (a) {
            return arguments.length ? (r = +a[0][0], i = +a[0][1], o = +a[1][0], u = +a[1][1], t = n = null, e) : [
              [r, i],
              [o, u]
            ]
          }
        }
      },
      Zf = Sa(),
      Gf = {
        sphere: Ga,
        point: Ga,
        lineStart: function () {
          Gf.point = Jf, Gf.lineEnd = Qf
        },
        lineEnd: Ga,
        polygonStart: Ga,
        polygonEnd: Ga
      };

    function Qf() {
      Gf.point = Gf.lineEnd = Ga
    }

    function Jf(t, n) {
      $f = t *= Pa, Xf = Ba(n *= Pa), Vf = qa(n), Gf.point = Kf
    }

    function Kf(t, n) {
      t *= Pa;
      var e = Ba(n *= Pa),
        r = qa(n),
        i = Ua(t - $f),
        o = qa(i),
        u = r * Ba(i),
        a = Vf * e - Xf * r * o,
        c = Xf * e + Vf * r * o;
      Zf.add(Oa($a(u * u + a * a), c)), $f = t, Xf = e, Vf = r
    }
    var ts = function (t) {
        return Zf.reset(), ac(t, Gf), +Zf
      },
      ns = [null, null],
      es = {
        type: "LineString",
        coordinates: ns
      },
      rs = function (t, n) {
        return ns[0] = t, ns[1] = n, ts(es)
      },
      is = {
        Feature: function (t, n) {
          return us(t.geometry, n)
        },
        FeatureCollection: function (t, n) {
          for (var e = t.features, r = -1, i = e.length; ++r < i;)
            if (us(e[r].geometry, n)) return !0;
          return !1
        }
      },
      os = {
        Sphere: function () {
          return !0
        },
        Point: function (t, n) {
          return as(t.coordinates, n)
        },
        MultiPoint: function (t, n) {
          for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
            if (as(e[r], n)) return !0;
          return !1
        },
        LineString: function (t, n) {
          return cs(t.coordinates, n)
        },
        MultiLineString: function (t, n) {
          for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
            if (cs(e[r], n)) return !0;
          return !1
        },
        Polygon: function (t, n) {
          return fs(t.coordinates, n)
        },
        MultiPolygon: function (t, n) {
          for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
            if (fs(e[r], n)) return !0;
          return !1
        },
        GeometryCollection: function (t, n) {
          for (var e = t.geometries, r = -1, i = e.length; ++r < i;)
            if (us(e[r], n)) return !0;
          return !1
        }
      };

    function us(t, n) {
      return !(!t || !os.hasOwnProperty(t.type)) && os[t.type](t, n)
    }

    function as(t, n) {
      return 0 === rs(t, n)
    }

    function cs(t, n) {
      var e = rs(t[0], t[1]);
      return rs(t[0], n) + rs(n, t[1]) <= e + 1e-6
    }

    function fs(t, n) {
      return !!qf(t.map(ss), ls(n))
    }

    function ss(t) {
      return (t = t.map(ls)).pop(), t
    }

    function ls(t) {
      return [t[0] * Pa, t[1] * Pa]
    }
    var hs = function (t, n) {
      return (t && is.hasOwnProperty(t.type) ? is[t.type] : us)(t, n)
    };

    function ds(t, n, e) {
      var r = S(t, n - 1e-6, e).concat(n);
      return function (t) {
        return r.map((function (n) {
          return [t, n]
        }))
      }
    }

    function ps(t, n, e) {
      var r = S(t, n - 1e-6, e).concat(n);
      return function (t) {
        return r.map((function (n) {
          return [n, t]
        }))
      }
    }

    function vs() {
      var t, n, e, r, i, o, u, a, c, f, s, l, h = 10,
        d = h,
        p = 90,
        v = 360,
        y = 2.5;

      function g() {
        return {
          type: "MultiLineString",
          coordinates: _()
        }
      }

      function _() {
        return S(Ia(r / p) * p, e, p).map(s).concat(S(Ia(a / v) * v, u, v).map(l)).concat(S(Ia(n / h) * h, t, h).filter((function (t) {
          return Ua(t % p) > 1e-6
        })).map(c)).concat(S(Ia(o / d) * d, i, d).filter((function (t) {
          return Ua(t % v) > 1e-6
        })).map(f))
      }
      return g.lines = function () {
        return _().map((function (t) {
          return {
            type: "LineString",
            coordinates: t
          }
        }))
      }, g.outline = function () {
        return {
          type: "Polygon",
          coordinates: [s(r).concat(l(u).slice(1), s(e).reverse().slice(1), l(a).reverse().slice(1))]
        }
      }, g.extent = function (t) {
        return arguments.length ? g.extentMajor(t).extentMinor(t) : g.extentMinor()
      }, g.extentMajor = function (t) {
        return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], u = +t[1][1], r > e && (t = r, r = e, e = t), a > u && (t = a, a = u, u = t), g.precision(y)) : [
          [r, a],
          [e, u]
        ]
      }, g.extentMinor = function (e) {
        return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], i = +e[1][1], n > t && (e = n, n = t, t = e), o > i && (e = o, o = i, i = e), g.precision(y)) : [
          [n, o],
          [t, i]
        ]
      }, g.step = function (t) {
        return arguments.length ? g.stepMajor(t).stepMinor(t) : g.stepMinor()
      }, g.stepMajor = function (t) {
        return arguments.length ? (p = +t[0], v = +t[1], g) : [p, v]
      }, g.stepMinor = function (t) {
        return arguments.length ? (h = +t[0], d = +t[1], g) : [h, d]
      }, g.precision = function (h) {
        return arguments.length ? (y = +h, c = ds(o, i, 90), f = ps(n, t, y), s = ds(a, u, 90), l = ps(r, e, y), g) : y
      }, g.extentMajor([
        [-180, -89.999999],
        [180, 89.999999]
      ]).extentMinor([
        [-180, -80.000001],
        [180, 80.000001]
      ])
    }

    function ys() {
      return vs()()
    }
    var gs, _s, ms, xs, bs = function (t, n) {
        var e = t[0] * Pa,
          r = t[1] * Pa,
          i = n[0] * Pa,
          o = n[1] * Pa,
          u = qa(r),
          a = Ba(r),
          c = qa(o),
          f = Ba(o),
          s = u * qa(e),
          l = u * Ba(e),
          h = c * qa(i),
          d = c * Ba(i),
          p = 2 * Wa($a(Za(o - r) + u * c * Za(i - e))),
          v = Ba(p),
          y = p ? function (t) {
            var n = Ba(t *= p) / v,
              e = Ba(p - t) / v,
              r = e * s + n * h,
              i = e * l + n * d,
              o = e * a + n * f;
            return [Oa(i, r) * La, Oa(o, $a(r * r + i * i)) * La]
          } : function () {
            return [e * La, r * La]
          };
        return y.distance = p, y
      },
      ws = function (t) {
        return t
      },
      Ms = Sa(),
      Ts = Sa(),
      Ss = {
        point: Ga,
        lineStart: Ga,
        lineEnd: Ga,
        polygonStart: function () {
          Ss.lineStart = ks, Ss.lineEnd = Cs
        },
        polygonEnd: function () {
          Ss.lineStart = Ss.lineEnd = Ss.point = Ga, Ms.add(Ua(Ts)), Ts.reset()
        },
        result: function () {
          var t = Ms / 2;
          return Ms.reset(), t
        }
      };

    function ks() {
      Ss.point = Ns
    }

    function Ns(t, n) {
      Ss.point = Es, gs = ms = t, _s = xs = n
    }

    function Es(t, n) {
      Ts.add(xs * t - ms * n), ms = t, xs = n
    }

    function Cs() {
      Es(gs, _s)
    }
    var As = Ss,
      Rs = 1 / 0,
      zs = Rs,
      Ls = -Rs,
      Ps = Ls;
    var Us, Ds, Os, qs, Is = {
        point: function (t, n) {
          t < Rs && (Rs = t);
          t > Ls && (Ls = t);
          n < zs && (zs = n);
          n > Ps && (Ps = n)
        },
        lineStart: Ga,
        lineEnd: Ga,
        polygonStart: Ga,
        polygonEnd: Ga,
        result: function () {
          var t = [
            [Rs, zs],
            [Ls, Ps]
          ];
          return Ls = Ps = -(zs = Rs = 1 / 0), t
        }
      },
      js = 0,
      Fs = 0,
      Ys = 0,
      Bs = 0,
      Hs = 0,
      $s = 0,
      Xs = 0,
      Vs = 0,
      Ws = 0,
      Zs = {
        point: Gs,
        lineStart: Qs,
        lineEnd: tl,
        polygonStart: function () {
          Zs.lineStart = nl, Zs.lineEnd = el
        },
        polygonEnd: function () {
          Zs.point = Gs, Zs.lineStart = Qs, Zs.lineEnd = tl
        },
        result: function () {
          var t = Ws ? [Xs / Ws, Vs / Ws] : $s ? [Bs / $s, Hs / $s] : Ys ? [js / Ys, Fs / Ys] : [NaN, NaN];
          return js = Fs = Ys = Bs = Hs = $s = Xs = Vs = Ws = 0, t
        }
      };

    function Gs(t, n) {
      js += t, Fs += n, ++Ys
    }

    function Qs() {
      Zs.point = Js
    }

    function Js(t, n) {
      Zs.point = Ks, Gs(Os = t, qs = n)
    }

    function Ks(t, n) {
      var e = t - Os,
        r = n - qs,
        i = $a(e * e + r * r);
      Bs += i * (Os + t) / 2, Hs += i * (qs + n) / 2, $s += i, Gs(Os = t, qs = n)
    }

    function tl() {
      Zs.point = Gs
    }

    function nl() {
      Zs.point = rl
    }

    function el() {
      il(Us, Ds)
    }

    function rl(t, n) {
      Zs.point = il, Gs(Us = Os = t, Ds = qs = n)
    }

    function il(t, n) {
      var e = t - Os,
        r = n - qs,
        i = $a(e * e + r * r);
      Bs += i * (Os + t) / 2, Hs += i * (qs + n) / 2, $s += i, Xs += (i = qs * t - Os * n) * (Os + t), Vs += i * (qs + n), Ws += 3 * i, Gs(Os = t, qs = n)
    }
    var ol = Zs;

    function ul(t) {
      this._context = t
    }
    ul.prototype = {
      _radius: 4.5,
      pointRadius: function (t) {
        return this._radius = t, this
      },
      polygonStart: function () {
        this._line = 0
      },
      polygonEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._point = 0
      },
      lineEnd: function () {
        0 === this._line && this._context.closePath(), this._point = NaN
      },
      point: function (t, n) {
        switch (this._point) {
          case 0:
            this._context.moveTo(t, n), this._point = 1;
            break;
          case 1:
            this._context.lineTo(t, n);
            break;
          default:
            this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, za)
        }
      },
      result: Ga
    };
    var al, cl, fl, sl, ll, hl = Sa(),
      dl = {
        point: Ga,
        lineStart: function () {
          dl.point = pl
        },
        lineEnd: function () {
          al && vl(cl, fl), dl.point = Ga
        },
        polygonStart: function () {
          al = !0
        },
        polygonEnd: function () {
          al = null
        },
        result: function () {
          var t = +hl;
          return hl.reset(), t
        }
      };

    function pl(t, n) {
      dl.point = vl, cl = sl = t, fl = ll = n
    }

    function vl(t, n) {
      sl -= t, ll -= n, hl.add($a(sl * sl + ll * ll)), sl = t, ll = n
    }
    var yl = dl;

    function gl() {
      this._string = []
    }

    function _l(t) {
      return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }
    gl.prototype = {
      _radius: 4.5,
      _circle: _l(4.5),
      pointRadius: function (t) {
        return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
      },
      polygonStart: function () {
        this._line = 0
      },
      polygonEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._point = 0
      },
      lineEnd: function () {
        0 === this._line && this._string.push("Z"), this._point = NaN
      },
      point: function (t, n) {
        switch (this._point) {
          case 0:
            this._string.push("M", t, ",", n), this._point = 1;
            break;
          case 1:
            this._string.push("L", t, ",", n);
            break;
          default:
            null == this._circle && (this._circle = _l(this._radius)), this._string.push("M", t, ",", n, this._circle)
        }
      },
      result: function () {
        if (this._string.length) {
          var t = this._string.join("");
          return this._string = [], t
        }
        return null
      }
    };
    var ml = function (t, n) {
        var e, r, i = 4.5;

        function o(t) {
          return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), ac(t, e(r))), r.result()
        }
        return o.area = function (t) {
          return ac(t, e(As)), As.result()
        }, o.measure = function (t) {
          return ac(t, e(yl)), yl.result()
        }, o.bounds = function (t) {
          return ac(t, e(Is)), Is.result()
        }, o.centroid = function (t) {
          return ac(t, e(ol)), ol.result()
        }, o.projection = function (n) {
          return arguments.length ? (e = null == n ? (t = null, ws) : (t = n).stream, o) : t
        }, o.context = function (t) {
          return arguments.length ? (r = null == t ? (n = null, new gl) : new ul(n = t), "function" != typeof i && r.pointRadius(i), o) : n
        }, o.pointRadius = function (t) {
          return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), o) : i
        }, o.projection(t).context(n)
      },
      xl = function (t) {
        return {
          stream: bl(t)
        }
      };

    function bl(t) {
      return function (n) {
        var e = new wl;
        for (var r in t) e[r] = t[r];
        return e.stream = n, e
      }
    }

    function wl() {}

    function Ml(t, n, e) {
      var r = t.clipExtent && t.clipExtent();
      return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), ac(e, t.stream(Is)), n(Is.result()), null != r && t.clipExtent(r), t
    }

    function Tl(t, n, e) {
      return Ml(t, (function (e) {
        var r = n[1][0] - n[0][0],
          i = n[1][1] - n[0][1],
          o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
          u = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
          a = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
        t.scale(150 * o).translate([u, a])
      }), e)
    }

    function Sl(t, n, e) {
      return Tl(t, [
        [0, 0], n
      ], e)
    }

    function kl(t, n, e) {
      return Ml(t, (function (e) {
        var r = +n,
          i = r / (e[1][0] - e[0][0]),
          o = (r - i * (e[1][0] + e[0][0])) / 2,
          u = -i * e[0][1];
        t.scale(150 * i).translate([o, u])
      }), e)
    }

    function Nl(t, n, e) {
      return Ml(t, (function (e) {
        var r = +n,
          i = r / (e[1][1] - e[0][1]),
          o = -i * e[0][0],
          u = (r - i * (e[1][1] + e[0][1])) / 2;
        t.scale(150 * i).translate([o, u])
      }), e)
    }
    wl.prototype = {
      constructor: wl,
      point: function (t, n) {
        this.stream.point(t, n)
      },
      sphere: function () {
        this.stream.sphere()
      },
      lineStart: function () {
        this.stream.lineStart()
      },
      lineEnd: function () {
        this.stream.lineEnd()
      },
      polygonStart: function () {
        this.stream.polygonStart()
      },
      polygonEnd: function () {
        this.stream.polygonEnd()
      }
    };
    var El = qa(30 * Pa),
      Cl = function (t, n) {
        return +n ? function (t, n) {
          function e(r, i, o, u, a, c, f, s, l, h, d, p, v, y) {
            var g = f - r,
              _ = s - i,
              m = g * g + _ * _;
            if (m > 4 * n && v--) {
              var x = u + h,
                b = a + d,
                w = c + p,
                M = $a(x * x + b * b + w * w),
                T = Wa(w /= M),
                S = Ua(Ua(w) - 1) < 1e-6 || Ua(o - l) < 1e-6 ? (o + l) / 2 : Oa(b, x),
                k = t(S, T),
                N = k[0],
                E = k[1],
                C = N - r,
                A = E - i,
                R = _ * C - g * A;
              (R * R / m > n || Ua((g * C + _ * A) / m - .5) > .3 || u * h + a * d + c * p < El) && (e(r, i, o, u, a, c, N, E, S, x /= M, b /= M, w, v, y), y.point(N, E), e(N, E, S, x, b, w, f, s, l, h, d, p, v, y))
            }
          }
          return function (n) {
            var r, i, o, u, a, c, f, s, l, h, d, p, v = {
              point: y,
              lineStart: g,
              lineEnd: m,
              polygonStart: function () {
                n.polygonStart(), v.lineStart = x
              },
              polygonEnd: function () {
                n.polygonEnd(), v.lineStart = g
              }
            };

            function y(e, r) {
              e = t(e, r), n.point(e[0], e[1])
            }

            function g() {
              s = NaN, v.point = _, n.lineStart()
            }

            function _(r, i) {
              var o = gc([r, i]),
                u = t(r, i);
              e(s, l, f, h, d, p, s = u[0], l = u[1], f = r, h = o[0], d = o[1], p = o[2], 16, n), n.point(s, l)
            }

            function m() {
              v.point = y, n.lineEnd()
            }

            function x() {
              g(), v.point = b, v.lineEnd = w
            }

            function b(t, n) {
              _(r = t, n), i = s, o = l, u = h, a = d, c = p, v.point = _
            }

            function w() {
              e(s, l, f, h, d, p, i, o, r, u, a, c, 16, n), v.lineEnd = m, m()
            }
            return v
          }
        }(t, n) : function (t) {
          return bl({
            point: function (n, e) {
              n = t(n, e), this.stream.point(n[0], n[1])
            }
          })
        }(t)
      };
    var Al = bl({
      point: function (t, n) {
        this.stream.point(t * Pa, n * Pa)
      }
    });

    function Rl(t) {
      return zl((function () {
        return t
      }))()
    }

    function zl(t) {
      var n, e, r, i, o, u, a, c, f, s, l = 150,
        h = 480,
        d = 250,
        p = 0,
        v = 0,
        y = 0,
        g = 0,
        _ = 0,
        m = null,
        x = Yf,
        b = null,
        w = ws,
        M = .5,
        T = Cl(N, M);

      function S(t) {
        return [(t = o(t[0] * Pa, t[1] * Pa))[0] * l + e, r - t[1] * l]
      }

      function k(t) {
        return (t = o.invert((t[0] - e) / l, (r - t[1]) / l)) && [t[0] * La, t[1] * La]
      }

      function N(t, i) {
        return [(t = n(t, i))[0] * l + e, r - t[1] * l]
      }

      function E() {
        o = wf(i = Tf(y, g, _), n);
        var t = n(p, v);
        return e = h - t[0] * l, r = d + t[1] * l, C()
      }

      function C() {
        return f = s = null, S
      }
      return S.stream = function (t) {
          return f && s === t ? f : f = Al(function (t) {
            return bl({
              point: function (n, e) {
                var r = t(n, e);
                return this.stream.point(r[0], r[1])
              }
            })
          }(i)(x(T(w(s = t)))))
        }, S.preclip = function (t) {
          return arguments.length ? (x = t, m = void 0, C()) : x
        }, S.postclip = function (t) {
          return arguments.length ? (w = t, b = u = a = c = null, C()) : w
        }, S.clipAngle = function (t) {
          return arguments.length ? (x = +t ? Bf(m = t * Pa) : (m = null, Yf), C()) : m * La
        }, S.clipExtent = function (t) {
          return arguments.length ? (w = null == t ? (b = u = a = c = null, ws) : Hf(b = +t[0][0], u = +t[0][1], a = +t[1][0], c = +t[1][1]), C()) : null == b ? null : [
            [b, u],
            [a, c]
          ]
        }, S.scale = function (t) {
          return arguments.length ? (l = +t, E()) : l
        }, S.translate = function (t) {
          return arguments.length ? (h = +t[0], d = +t[1], E()) : [h, d]
        }, S.center = function (t) {
          return arguments.length ? (p = t[0] % 360 * Pa, v = t[1] % 360 * Pa, E()) : [p * La, v * La]
        }, S.rotate = function (t) {
          return arguments.length ? (y = t[0] % 360 * Pa, g = t[1] % 360 * Pa, _ = t.length > 2 ? t[2] % 360 * Pa : 0, E()) : [y * La, g * La, _ * La]
        }, S.precision = function (t) {
          return arguments.length ? (T = Cl(N, M = t * t), C()) : $a(M)
        }, S.fitExtent = function (t, n) {
          return Tl(S, t, n)
        }, S.fitSize = function (t, n) {
          return Sl(S, t, n)
        }, S.fitWidth = function (t, n) {
          return kl(S, t, n)
        }, S.fitHeight = function (t, n) {
          return Nl(S, t, n)
        },
        function () {
          return n = t.apply(this, arguments), S.invert = n.invert && k, E()
        }
    }

    function Ll(t) {
      var n = 0,
        e = Ca / 3,
        r = zl(t),
        i = r(n, e);
      return i.parallels = function (t) {
        return arguments.length ? r(n = t[0] * Pa, e = t[1] * Pa) : [n * La, e * La]
      }, i
    }

    function Pl(t, n) {
      var e = Ba(t),
        r = (e + Ba(n)) / 2;
      if (Ua(r) < 1e-6) return function (t) {
        var n = qa(t);

        function e(t, e) {
          return [t * n, Ba(e) / n]
        }
        return e.invert = function (t, e) {
          return [t / n, Wa(e * n)]
        }, e
      }(t);
      var i = 1 + e * (2 * r - e),
        o = $a(i) / r;

      function u(t, n) {
        var e = $a(i - 2 * r * Ba(n)) / r;
        return [e * Ba(t *= r), o - e * qa(t)]
      }
      return u.invert = function (t, n) {
        var e = o - n;
        return [Oa(t, Ua(e)) / r * Ha(e), Wa((i - (t * t + e * e) * r * r) / (2 * r))]
      }, u
    }
    var Ul = function () {
        return Ll(Pl).scale(155.424).center([0, 33.6442])
      },
      Dl = function () {
        return Ul().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
      };
    var Ol = function () {
      var t, n, e, r, i, o, u = Dl(),
        a = Ul().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        c = Ul().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        f = {
          point: function (t, n) {
            o = [t, n]
          }
        };

      function s(t) {
        var n = t[0],
          u = t[1];
        return o = null, e.point(n, u), o || (r.point(n, u), o) || (i.point(n, u), o)
      }

      function l() {
        return t = n = null, s
      }
      return s.invert = function (t) {
        var n = u.scale(),
          e = u.translate(),
          r = (t[0] - e[0]) / n,
          i = (t[1] - e[1]) / n;
        return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? a : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? c : u).invert(t)
      }, s.stream = function (e) {
        return t && n === e ? t : (r = [u.stream(n = e), a.stream(e), c.stream(e)], i = r.length, t = {
          point: function (t, n) {
            for (var e = -1; ++e < i;) r[e].point(t, n)
          },
          sphere: function () {
            for (var t = -1; ++t < i;) r[t].sphere()
          },
          lineStart: function () {
            for (var t = -1; ++t < i;) r[t].lineStart()
          },
          lineEnd: function () {
            for (var t = -1; ++t < i;) r[t].lineEnd()
          },
          polygonStart: function () {
            for (var t = -1; ++t < i;) r[t].polygonStart()
          },
          polygonEnd: function () {
            for (var t = -1; ++t < i;) r[t].polygonEnd()
          }
        });
        var r, i
      }, s.precision = function (t) {
        return arguments.length ? (u.precision(t), a.precision(t), c.precision(t), l()) : u.precision()
      }, s.scale = function (t) {
        return arguments.length ? (u.scale(t), a.scale(.35 * t), c.scale(t), s.translate(u.translate())) : u.scale()
      }, s.translate = function (t) {
        if (!arguments.length) return u.translate();
        var n = u.scale(),
          o = +t[0],
          s = +t[1];
        return e = u.translate(t).clipExtent([
          [o - .455 * n, s - .238 * n],
          [o + .455 * n, s + .238 * n]
        ]).stream(f), r = a.translate([o - .307 * n, s + .201 * n]).clipExtent([
          [o - .425 * n + 1e-6, s + .12 * n + 1e-6],
          [o - .214 * n - 1e-6, s + .234 * n - 1e-6]
        ]).stream(f), i = c.translate([o - .205 * n, s + .212 * n]).clipExtent([
          [o - .214 * n + 1e-6, s + .166 * n + 1e-6],
          [o - .115 * n - 1e-6, s + .234 * n - 1e-6]
        ]).stream(f), l()
      }, s.fitExtent = function (t, n) {
        return Tl(s, t, n)
      }, s.fitSize = function (t, n) {
        return Sl(s, t, n)
      }, s.fitWidth = function (t, n) {
        return kl(s, t, n)
      }, s.fitHeight = function (t, n) {
        return Nl(s, t, n)
      }, s.scale(1070)
    };

    function ql(t) {
      return function (n, e) {
        var r = qa(n),
          i = qa(e),
          o = t(r * i);
        return [o * i * Ba(n), o * Ba(e)]
      }
    }

    function Il(t) {
      return function (n, e) {
        var r = $a(n * n + e * e),
          i = t(r),
          o = Ba(i),
          u = qa(i);
        return [Oa(n * o, r * u), Wa(r && e * o / r)]
      }
    }
    var jl = ql((function (t) {
      return $a(2 / (1 + t))
    }));
    jl.invert = Il((function (t) {
      return 2 * Wa(t / 2)
    }));
    var Fl = function () {
        return Rl(jl).scale(124.75).clipAngle(179.999)
      },
      Yl = ql((function (t) {
        return (t = Va(t)) && t / Ba(t)
      }));
    Yl.invert = Il((function (t) {
      return t
    }));
    var Bl = function () {
      return Rl(Yl).scale(79.4188).clipAngle(179.999)
    };

    function Hl(t, n) {
      return [t, Fa(Xa((Aa + n) / 2))]
    }
    Hl.invert = function (t, n) {
      return [t, 2 * Da(ja(n)) - Aa]
    };
    var $l = function () {
      return Xl(Hl).scale(961 / za)
    };

    function Xl(t) {
      var n, e, r, i = Rl(t),
        o = i.center,
        u = i.scale,
        a = i.translate,
        c = i.clipExtent,
        f = null;

      function s() {
        var o = Ca * u(),
          a = i(Ef(i.rotate()).invert([0, 0]));
        return c(null == f ? [
          [a[0] - o, a[1] - o],
          [a[0] + o, a[1] + o]
        ] : t === Hl ? [
          [Math.max(a[0] - o, f), n],
          [Math.min(a[0] + o, e), r]
        ] : [
          [f, Math.max(a[1] - o, n)],
          [e, Math.min(a[1] + o, r)]
        ])
      }
      return i.scale = function (t) {
        return arguments.length ? (u(t), s()) : u()
      }, i.translate = function (t) {
        return arguments.length ? (a(t), s()) : a()
      }, i.center = function (t) {
        return arguments.length ? (o(t), s()) : o()
      }, i.clipExtent = function (t) {
        return arguments.length ? (null == t ? f = n = e = r = null : (f = +t[0][0], n = +t[0][1], e = +t[1][0], r = +t[1][1]), s()) : null == f ? null : [
          [f, n],
          [e, r]
        ]
      }, s()
    }

    function Vl(t) {
      return Xa((Aa + t) / 2)
    }

    function Wl(t, n) {
      var e = qa(t),
        r = t === n ? Ba(t) : Fa(e / qa(n)) / Fa(Vl(n) / Vl(t)),
        i = e * Ya(Vl(t), r) / r;
      if (!r) return Hl;

      function o(t, n) {
        i > 0 ? n < 1e-6 - Aa && (n = 1e-6 - Aa) : n > Aa - 1e-6 && (n = Aa - 1e-6);
        var e = i / Ya(Vl(n), r);
        return [e * Ba(r * t), i - e * qa(r * t)]
      }
      return o.invert = function (t, n) {
        var e = i - n,
          o = Ha(r) * $a(t * t + e * e);
        return [Oa(t, Ua(e)) / r * Ha(e), 2 * Da(Ya(i / o, 1 / r)) - Aa]
      }, o
    }
    var Zl = function () {
      return Ll(Wl).scale(109.5).parallels([30, 30])
    };

    function Gl(t, n) {
      return [t, n]
    }
    Gl.invert = Gl;
    var Ql = function () {
      return Rl(Gl).scale(152.63)
    };

    function Jl(t, n) {
      var e = qa(t),
        r = t === n ? Ba(t) : (e - qa(n)) / (n - t),
        i = e / r + t;
      if (Ua(r) < 1e-6) return Gl;

      function o(t, n) {
        var e = i - n,
          o = r * t;
        return [e * Ba(o), i - e * qa(o)]
      }
      return o.invert = function (t, n) {
        var e = i - n;
        return [Oa(t, Ua(e)) / r * Ha(e), i - Ha(r) * $a(t * t + e * e)]
      }, o
    }
    var Kl = function () {
      return Ll(Jl).scale(131.154).center([0, 13.9389])
    };

    function th(t, n) {
      var e = qa(n),
        r = qa(t) * e;
      return [e * Ba(t) / r, Ba(n) / r]
    }
    th.invert = Il(Da);
    var nh = function () {
      return Rl(th).scale(144.049).clipAngle(60)
    };

    function eh(t, n, e, r) {
      return 1 === t && 1 === n && 0 === e && 0 === r ? ws : bl({
        point: function (i, o) {
          this.stream.point(i * t + e, o * n + r)
        }
      })
    }
    var rh = function () {
      var t, n, e, r, i, o, u = 1,
        a = 0,
        c = 0,
        f = 1,
        s = 1,
        l = ws,
        h = null,
        d = ws;

      function p() {
        return r = i = null, o
      }
      return o = {
        stream: function (t) {
          return r && i === t ? r : r = l(d(i = t))
        },
        postclip: function (r) {
          return arguments.length ? (d = r, h = t = n = e = null, p()) : d
        },
        clipExtent: function (r) {
          return arguments.length ? (d = null == r ? (h = t = n = e = null, ws) : Hf(h = +r[0][0], t = +r[0][1], n = +r[1][0], e = +r[1][1]), p()) : null == h ? null : [
            [h, t],
            [n, e]
          ]
        },
        scale: function (t) {
          return arguments.length ? (l = eh((u = +t) * f, u * s, a, c), p()) : u
        },
        translate: function (t) {
          return arguments.length ? (l = eh(u * f, u * s, a = +t[0], c = +t[1]), p()) : [a, c]
        },
        reflectX: function (t) {
          return arguments.length ? (l = eh(u * (f = t ? -1 : 1), u * s, a, c), p()) : f < 0
        },
        reflectY: function (t) {
          return arguments.length ? (l = eh(u * f, u * (s = t ? -1 : 1), a, c), p()) : s < 0
        },
        fitExtent: function (t, n) {
          return Tl(o, t, n)
        },
        fitSize: function (t, n) {
          return Sl(o, t, n)
        },
        fitWidth: function (t, n) {
          return kl(o, t, n)
        },
        fitHeight: function (t, n) {
          return Nl(o, t, n)
        }
      }
    };

    function ih(t, n) {
      var e = n * n,
        r = e * e;
      return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
    }
    ih.invert = function (t, n) {
      var e, r = n,
        i = 25;
      do {
        var o = r * r,
          u = o * o;
        r -= e = (r * (1.007226 + o * (.015085 + u * (.028874 * o - .044475 - .005916 * u))) - n) / (1.007226 + o * (.045255 + u * (.259866 * o - .311325 - .005916 * 11 * u)))
      } while (Ua(e) > 1e-6 && --i > 0);
      return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r]
    };
    var oh = function () {
      return Rl(ih).scale(175.295)
    };

    function uh(t, n) {
      return [qa(n) * Ba(t), Ba(n)]
    }
    uh.invert = Il(Wa);
    var ah = function () {
      return Rl(uh).scale(249.5).clipAngle(90.000001)
    };

    function ch(t, n) {
      var e = qa(n),
        r = 1 + qa(t) * e;
      return [e * Ba(t) / r, Ba(n) / r]
    }
    ch.invert = Il((function (t) {
      return 2 * Da(t)
    }));
    var fh = function () {
      return Rl(ch).scale(250).clipAngle(142)
    };

    function sh(t, n) {
      return [Fa(Xa((Aa + n) / 2)), -t]
    }
    sh.invert = function (t, n) {
      return [-n, 2 * Da(ja(t)) - Aa]
    };
    var lh = function () {
      var t = Xl(sh),
        n = t.center,
        e = t.rotate;
      return t.center = function (t) {
        return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]]
      }, t.rotate = function (t) {
        return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90]
      }, e([0, 0, 90]).scale(159.155)
    };

    function hh(t, n) {
      return t.parent === n.parent ? 1 : 2
    }

    function dh(t, n) {
      return t + n.x
    }

    function ph(t, n) {
      return Math.max(t, n.y)
    }
    var vh = function () {
      var t = hh,
        n = 1,
        e = 1,
        r = !1;

      function i(i) {
        var o, u = 0;
        i.eachAfter((function (n) {
          var e = n.children;
          e ? (n.x = function (t) {
            return t.reduce(dh, 0) / t.length
          }(e), n.y = function (t) {
            return 1 + t.reduce(ph, 0)
          }(e)) : (n.x = o ? u += t(n, o) : 0, n.y = 0, o = n)
        }));
        var a = function (t) {
            for (var n; n = t.children;) t = n[0];
            return t
          }(i),
          c = function (t) {
            for (var n; n = t.children;) t = n[n.length - 1];
            return t
          }(i),
          f = a.x - t(a, c) / 2,
          s = c.x + t(c, a) / 2;
        return i.eachAfter(r ? function (t) {
          t.x = (t.x - i.x) * n, t.y = (i.y - t.y) * e
        } : function (t) {
          t.x = (t.x - f) / (s - f) * n, t.y = (1 - (i.y ? t.y / i.y : 1)) * e
        })
      }
      return i.separation = function (n) {
        return arguments.length ? (t = n, i) : t
      }, i.size = function (t) {
        return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e]
      }, i.nodeSize = function (t) {
        return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
      }, i
    };

    function yh(t) {
      var n = 0,
        e = t.children,
        r = e && e.length;
      if (r)
        for (; --r >= 0;) n += e[r].value;
      else n = 1;
      t.value = n
    }

    function gh(t, n) {
      var e, r, i, o, u, a = new bh(t),
        c = +t.value && (a.value = t.value),
        f = [a];
      for (null == n && (n = _h); e = f.pop();)
        if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length))
          for (e.children = new Array(u), o = u - 1; o >= 0; --o) f.push(r = e.children[o] = new bh(i[o])), r.parent = e, r.depth = e.depth + 1;
      return a.eachBefore(xh)
    }

    function _h(t) {
      return t.children
    }

    function mh(t) {
      t.data = t.data.data
    }

    function xh(t) {
      var n = 0;
      do {
        t.height = n
      } while ((t = t.parent) && t.height < ++n)
    }

    function bh(t) {
      this.data = t, this.depth = this.height = 0, this.parent = null
    }
    bh.prototype = gh.prototype = {
      constructor: bh,
      count: function () {
        return this.eachAfter(yh)
      },
      each: function (t) {
        var n, e, r, i, o = this,
          u = [o];
        do {
          for (n = u.reverse(), u = []; o = n.pop();)
            if (t(o), e = o.children)
              for (r = 0, i = e.length; r < i; ++r) u.push(e[r])
        } while (u.length);
        return this
      },
      eachAfter: function (t) {
        for (var n, e, r, i = this, o = [i], u = []; i = o.pop();)
          if (u.push(i), n = i.children)
            for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
        for (; i = u.pop();) t(i);
        return this
      },
      eachBefore: function (t) {
        for (var n, e, r = this, i = [r]; r = i.pop();)
          if (t(r), n = r.children)
            for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
        return this
      },
      sum: function (t) {
        return this.eachAfter((function (n) {
          for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
          n.value = e
        }))
      },
      sort: function (t) {
        return this.eachBefore((function (n) {
          n.children && n.children.sort(t)
        }))
      },
      path: function (t) {
        for (var n = this, e = function (t, n) {
            if (t === n) return t;
            var e = t.ancestors(),
              r = n.ancestors(),
              i = null;
            t = e.pop(), n = r.pop();
            for (; t === n;) i = t, t = e.pop(), n = r.pop();
            return i
          }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
        for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
        return r
      },
      ancestors: function () {
        for (var t = this, n = [t]; t = t.parent;) n.push(t);
        return n
      },
      descendants: function () {
        var t = [];
        return this.each((function (n) {
          t.push(n)
        })), t
      },
      leaves: function () {
        var t = [];
        return this.eachBefore((function (n) {
          n.children || t.push(n)
        })), t
      },
      links: function () {
        var t = this,
          n = [];
        return t.each((function (e) {
          e !== t && n.push({
            source: e.parent,
            target: e
          })
        })), n
      },
      copy: function () {
        return gh(this).eachBefore(mh)
      }
    };
    var wh = Array.prototype.slice;
    var Mh = function (t) {
      for (var n, e, r = 0, i = (t = function (t) {
          for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
          return t
        }(wh.call(t))).length, o = []; r < i;) n = t[r], e && kh(e, n) ? ++r : (e = Eh(o = Th(o, n)), r = 0);
      return e
    };

    function Th(t, n) {
      var e, r;
      if (Nh(n, t)) return [n];
      for (e = 0; e < t.length; ++e)
        if (Sh(n, t[e]) && Nh(Ch(t[e], n), t)) return [t[e], n];
      for (e = 0; e < t.length - 1; ++e)
        for (r = e + 1; r < t.length; ++r)
          if (Sh(Ch(t[e], t[r]), n) && Sh(Ch(t[e], n), t[r]) && Sh(Ch(t[r], n), t[e]) && Nh(Ah(t[e], t[r], n), t)) return [t[e], t[r], n];
      throw new Error
    }

    function Sh(t, n) {
      var e = t.r - n.r,
        r = n.x - t.x,
        i = n.y - t.y;
      return e < 0 || e * e < r * r + i * i
    }

    function kh(t, n) {
      var e = t.r - n.r + 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;
      return e > 0 && e * e > r * r + i * i
    }

    function Nh(t, n) {
      for (var e = 0; e < n.length; ++e)
        if (!kh(t, n[e])) return !1;
      return !0
    }

    function Eh(t) {
      switch (t.length) {
        case 1:
          return {
            x: (n = t[0]).x, y: n.y, r: n.r
          };
        case 2:
          return Ch(t[0], t[1]);
        case 3:
          return Ah(t[0], t[1], t[2])
      }
      var n
    }

    function Ch(t, n) {
      var e = t.x,
        r = t.y,
        i = t.r,
        o = n.x,
        u = n.y,
        a = n.r,
        c = o - e,
        f = u - r,
        s = a - i,
        l = Math.sqrt(c * c + f * f);
      return {
        x: (e + o + c / l * s) / 2,
        y: (r + u + f / l * s) / 2,
        r: (l + i + a) / 2
      }
    }

    function Ah(t, n, e) {
      var r = t.x,
        i = t.y,
        o = t.r,
        u = n.x,
        a = n.y,
        c = n.r,
        f = e.x,
        s = e.y,
        l = e.r,
        h = r - u,
        d = r - f,
        p = i - a,
        v = i - s,
        y = c - o,
        g = l - o,
        _ = r * r + i * i - o * o,
        m = _ - u * u - a * a + c * c,
        x = _ - f * f - s * s + l * l,
        b = d * p - h * v,
        w = (p * x - v * m) / (2 * b) - r,
        M = (v * y - p * g) / b,
        T = (d * m - h * x) / (2 * b) - i,
        S = (h * g - d * y) / b,
        k = M * M + S * S - 1,
        N = 2 * (o + w * M + T * S),
        E = w * w + T * T - o * o,
        C = -(k ? (N + Math.sqrt(N * N - 4 * k * E)) / (2 * k) : E / N);
      return {
        x: r + w + M * C,
        y: i + T + S * C,
        r: C
      }
    }

    function Rh(t, n, e) {
      var r = t.x,
        i = t.y,
        o = n.r + e.r,
        u = t.r + e.r,
        a = n.x - r,
        c = n.y - i,
        f = a * a + c * c;
      if (f) {
        var s = .5 + ((u *= u) - (o *= o)) / (2 * f),
          l = Math.sqrt(Math.max(0, 2 * o * (u + f) - (u -= f) * u - o * o)) / (2 * f);
        e.x = r + s * a + l * c, e.y = i + s * c - l * a
      } else e.x = r + u, e.y = i
    }

    function zh(t, n) {
      var e = n.x - t.x,
        r = n.y - t.y,
        i = t.r + n.r;
      return i * i - 1e-6 > e * e + r * r
    }

    function Lh(t) {
      var n = t._,
        e = t.next._,
        r = n.r + e.r,
        i = (n.x * e.r + e.x * n.r) / r,
        o = (n.y * e.r + e.y * n.r) / r;
      return i * i + o * o
    }

    function Ph(t) {
      this._ = t, this.next = null, this.previous = null
    }

    function Uh(t) {
      if (!(i = t.length)) return 0;
      var n, e, r, i, o, u, a, c, f, s, l;
      if ((n = t[0]).x = 0, n.y = 0, !(i > 1)) return n.r;
      if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
      Rh(e, n, r = t[2]), n = new Ph(n), e = new Ph(e), r = new Ph(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
      t: for (a = 3; a < i; ++a) {
        Rh(n._, e._, r = t[a]), r = new Ph(r), c = e.next, f = n.previous, s = e._.r, l = n._.r;
        do {
          if (s <= l) {
            if (zh(c._, r._)) {
              e = c, n.next = e, e.previous = n, --a;
              continue t
            }
            s += c._.r, c = c.next
          } else {
            if (zh(f._, r._)) {
              (n = f).next = e, e.previous = n, --a;
              continue t
            }
            l += f._.r, f = f.previous
          }
        } while (c !== f.next);
        for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = Lh(n);
          (r = r.next) !== e;)(u = Lh(r)) < o && (n = r, o = u);
        e = n.next
      }
      for (n = [e._], r = e;
        (r = r.next) !== e;) n.push(r._);
      for (r = Mh(n), a = 0; a < i; ++a)(n = t[a]).x -= r.x, n.y -= r.y;
      return r.r
    }
    var Dh = function (t) {
      return Uh(t), t
    };

    function Oh(t) {
      return null == t ? null : qh(t)
    }

    function qh(t) {
      if ("function" != typeof t) throw new Error;
      return t
    }

    function Ih() {
      return 0
    }
    var jh = function (t) {
      return function () {
        return t
      }
    };

    function Fh(t) {
      return Math.sqrt(t.value)
    }
    var Yh = function () {
      var t = null,
        n = 1,
        e = 1,
        r = Ih;

      function i(i) {
        return i.x = n / 2, i.y = e / 2, t ? i.eachBefore(Bh(t)).eachAfter(Hh(r, .5)).eachBefore($h(1)) : i.eachBefore(Bh(Fh)).eachAfter(Hh(Ih, 1)).eachAfter(Hh(r, i.r / Math.min(n, e))).eachBefore($h(Math.min(n, e) / (2 * i.r))), i
      }
      return i.radius = function (n) {
        return arguments.length ? (t = Oh(n), i) : t
      }, i.size = function (t) {
        return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e]
      }, i.padding = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : jh(+t), i) : r
      }, i
    };

    function Bh(t) {
      return function (n) {
        n.children || (n.r = Math.max(0, +t(n) || 0))
      }
    }

    function Hh(t, n) {
      return function (e) {
        if (r = e.children) {
          var r, i, o, u = r.length,
            a = t(e) * n || 0;
          if (a)
            for (i = 0; i < u; ++i) r[i].r += a;
          if (o = Uh(r), a)
            for (i = 0; i < u; ++i) r[i].r -= a;
          e.r = o + a
        }
      }
    }

    function $h(t) {
      return function (n) {
        var e = n.parent;
        n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
      }
    }
    var Xh = function (t) {
        t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
      },
      Vh = function (t, n, e, r, i) {
        for (var o, u = t.children, a = -1, c = u.length, f = t.value && (r - n) / t.value; ++a < c;)(o = u[a]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * f
      },
      Wh = function () {
        var t = 1,
          n = 1,
          e = 0,
          r = !1;

        function i(i) {
          var o = i.height + 1;
          return i.x0 = i.y0 = e, i.x1 = t, i.y1 = n / o, i.eachBefore(function (t, n) {
            return function (r) {
              r.children && Vh(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
              var i = r.x0,
                o = r.y0,
                u = r.x1 - e,
                a = r.y1 - e;
              u < i && (i = u = (i + u) / 2), a < o && (o = a = (o + a) / 2), r.x0 = i, r.y0 = o, r.x1 = u, r.y1 = a
            }
          }(n, o)), r && i.eachBefore(Xh), i
        }
        return i.round = function (t) {
          return arguments.length ? (r = !!t, i) : r
        }, i.size = function (e) {
          return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n]
        }, i.padding = function (t) {
          return arguments.length ? (e = +t, i) : e
        }, i
      },
      Zh = {
        depth: -1
      },
      Gh = {};

    function Qh(t) {
      return t.id
    }

    function Jh(t) {
      return t.parentId
    }
    var Kh = function () {
      var t = Qh,
        n = Jh;

      function e(e) {
        var r, i, o, u, a, c, f, s = e.length,
          l = new Array(s),
          h = {};
        for (i = 0; i < s; ++i) r = e[i], a = l[i] = new bh(r), null != (c = t(r, i, e)) && (c += "") && (h[f = "$" + (a.id = c)] = f in h ? Gh : a);
        for (i = 0; i < s; ++i)
          if (a = l[i], null != (c = n(e[i], i, e)) && (c += "")) {
            if (!(u = h["$" + c])) throw new Error("missing: " + c);
            if (u === Gh) throw new Error("ambiguous: " + c);
            u.children ? u.children.push(a) : u.children = [a], a.parent = u
          } else {
            if (o) throw new Error("multiple roots");
            o = a
          } if (!o) throw new Error("no root");
        if (o.parent = Zh, o.eachBefore((function (t) {
            t.depth = t.parent.depth + 1, --s
          })).eachBefore(xh), o.parent = null, s > 0) throw new Error("cycle");
        return o
      }
      return e.id = function (n) {
        return arguments.length ? (t = qh(n), e) : t
      }, e.parentId = function (t) {
        return arguments.length ? (n = qh(t), e) : n
      }, e
    };

    function td(t, n) {
      return t.parent === n.parent ? 1 : 2
    }

    function nd(t) {
      var n = t.children;
      return n ? n[0] : t.t
    }

    function ed(t) {
      var n = t.children;
      return n ? n[n.length - 1] : t.t
    }

    function rd(t, n, e) {
      var r = e / (n.i - t.i);
      n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
    }

    function id(t, n, e) {
      return t.a.parent === n.parent ? t.a : e
    }

    function od(t, n) {
      this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
    }
    od.prototype = Object.create(bh.prototype);
    var ud = function () {
        var t = td,
          n = 1,
          e = 1,
          r = null;

        function i(i) {
          var c = function (t) {
            for (var n, e, r, i, o, u = new od(t, 0), a = [u]; n = a.pop();)
              if (r = n._.children)
                for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) a.push(e = n.children[i] = new od(r[i], i)), e.parent = n;
            return (u.parent = new od(null, 0)).children = [u], u
          }(i);
          if (c.eachAfter(o), c.parent.m = -c.z, c.eachBefore(u), r) i.eachBefore(a);
          else {
            var f = i,
              s = i,
              l = i;
            i.eachBefore((function (t) {
              t.x < f.x && (f = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t)
            }));
            var h = f === s ? 1 : t(f, s) / 2,
              d = h - f.x,
              p = n / (s.x + h + d),
              v = e / (l.depth || 1);
            i.eachBefore((function (t) {
              t.x = (t.x + d) * p, t.y = t.depth * v
            }))
          }
          return i
        }

        function o(n) {
          var e = n.children,
            r = n.parent.children,
            i = n.i ? r[n.i - 1] : null;
          if (e) {
            ! function (t) {
              for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;)(n = i[o]).z += e, n.m += e, e += n.s + (r += n.c)
            }(n);
            var o = (e[0].z + e[e.length - 1].z) / 2;
            i ? (n.z = i.z + t(n._, i._), n.m = n.z - o) : n.z = o
          } else i && (n.z = i.z + t(n._, i._));
          n.parent.A = function (n, e, r) {
            if (e) {
              for (var i, o = n, u = n, a = e, c = o.parent.children[0], f = o.m, s = u.m, l = a.m, h = c.m; a = ed(a), o = nd(o), a && o;) c = nd(c), (u = ed(u)).a = n, (i = a.z + l - o.z - f + t(a._, o._)) > 0 && (rd(id(a, n, r), n, i), f += i, s += i), l += a.m, f += o.m, h += c.m, s += u.m;
              a && !ed(u) && (u.t = a, u.m += l - s), o && !nd(c) && (c.t = o, c.m += f - h, r = n)
            }
            return r
          }(n, i, n.parent.A || r[0])
        }

        function u(t) {
          t._.x = t.z + t.parent.m, t.m += t.parent.m
        }

        function a(t) {
          t.x *= n, t.y = t.depth * e
        }
        return i.separation = function (n) {
          return arguments.length ? (t = n, i) : t
        }, i.size = function (t) {
          return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e]
        }, i.nodeSize = function (t) {
          return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
        }, i
      },
      ad = function (t, n, e, r, i) {
        for (var o, u = t.children, a = -1, c = u.length, f = t.value && (i - e) / t.value; ++a < c;)(o = u[a]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * f
      },
      cd = (1 + Math.sqrt(5)) / 2;

    function fd(t, n, e, r, i, o) {
      for (var u, a, c, f, s, l, h, d, p, v, y, g = [], _ = n.children, m = 0, x = 0, b = _.length, w = n.value; m < b;) {
        c = i - e, f = o - r;
        do {
          s = _[x++].value
        } while (!s && x < b);
        for (l = h = s, y = s * s * (v = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / y, y / l); x < b; ++x) {
          if (s += a = _[x].value, a < l && (l = a), a > h && (h = a), y = s * s * v, (d = Math.max(h / y, y / l)) > p) {
            s -= a;
            break
          }
          p = d
        }
        g.push(u = {
          value: s,
          dice: c < f,
          children: _.slice(m, x)
        }), u.dice ? Vh(u, e, r, i, w ? r += f * s / w : o) : ad(u, e, r, w ? e += c * s / w : i, o), w -= s, m = x
      }
      return g
    }
    var sd = function t(n) {
        function e(t, e, r, i, o) {
          fd(n, t, e, r, i, o)
        }
        return e.ratio = function (n) {
          return t((n = +n) > 1 ? n : 1)
        }, e
      }(cd),
      ld = function () {
        var t = sd,
          n = !1,
          e = 1,
          r = 1,
          i = [0],
          o = Ih,
          u = Ih,
          a = Ih,
          c = Ih,
          f = Ih;

        function s(t) {
          return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = r, t.eachBefore(l), i = [0], n && t.eachBefore(Xh), t
        }

        function l(n) {
          var e = i[n.depth],
            r = n.x0 + e,
            s = n.y0 + e,
            l = n.x1 - e,
            h = n.y1 - e;
          l < r && (r = l = (r + l) / 2), h < s && (s = h = (s + h) / 2), n.x0 = r, n.y0 = s, n.x1 = l, n.y1 = h, n.children && (e = i[n.depth + 1] = o(n) / 2, r += f(n) - e, s += u(n) - e, (l -= a(n) - e) < r && (r = l = (r + l) / 2), (h -= c(n) - e) < s && (s = h = (s + h) / 2), t(n, r, s, l, h))
        }
        return s.round = function (t) {
          return arguments.length ? (n = !!t, s) : n
        }, s.size = function (t) {
          return arguments.length ? (e = +t[0], r = +t[1], s) : [e, r]
        }, s.tile = function (n) {
          return arguments.length ? (t = qh(n), s) : t
        }, s.padding = function (t) {
          return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner()
        }, s.paddingInner = function (t) {
          return arguments.length ? (o = "function" == typeof t ? t : jh(+t), s) : o
        }, s.paddingOuter = function (t) {
          return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop()
        }, s.paddingTop = function (t) {
          return arguments.length ? (u = "function" == typeof t ? t : jh(+t), s) : u
        }, s.paddingRight = function (t) {
          return arguments.length ? (a = "function" == typeof t ? t : jh(+t), s) : a
        }, s.paddingBottom = function (t) {
          return arguments.length ? (c = "function" == typeof t ? t : jh(+t), s) : c
        }, s.paddingLeft = function (t) {
          return arguments.length ? (f = "function" == typeof t ? t : jh(+t), s) : f
        }, s
      },
      hd = function (t, n, e, r, i) {
        var o, u, a = t.children,
          c = a.length,
          f = new Array(c + 1);
        for (f[0] = u = o = 0; o < c; ++o) f[o + 1] = u += a[o].value;
        ! function t(n, e, r, i, o, u, c) {
          if (n >= e - 1) {
            var s = a[n];
            return s.x0 = i, s.y0 = o, s.x1 = u, void(s.y1 = c)
          }
          var l = f[n],
            h = r / 2 + l,
            d = n + 1,
            p = e - 1;
          for (; d < p;) {
            var v = d + p >>> 1;
            f[v] < h ? d = v + 1 : p = v
          }
          h - f[d - 1] < f[d] - h && n + 1 < d && --d;
          var y = f[d] - l,
            g = r - y;
          if (u - i > c - o) {
            var _ = (i * g + u * y) / r;
            t(n, d, y, i, o, _, c), t(d, e, g, _, o, u, c)
          } else {
            var m = (o * g + c * y) / r;
            t(n, d, y, i, o, u, m), t(d, e, g, i, m, u, c)
          }
        }(0, c, t.value, n, e, r, i)
      },
      dd = function (t, n, e, r, i) {
        (1 & t.depth ? ad : Vh)(t, n, e, r, i)
      },
      pd = function t(n) {
        function e(t, e, r, i, o) {
          if ((u = t._squarify) && u.ratio === n)
            for (var u, a, c, f, s, l = -1, h = u.length, d = t.value; ++l < h;) {
              for (c = (a = u[l]).children, f = a.value = 0, s = c.length; f < s; ++f) a.value += c[f].value;
              a.dice ? Vh(a, e, r, i, r += (o - r) * a.value / d) : ad(a, e, r, e += (i - e) * a.value / d, o), d -= a.value
            } else t._squarify = u = fd(n, t, e, r, i, o), u.ratio = n
        }
        return e.ratio = function (n) {
          return t((n = +n) > 1 ? n : 1)
        }, e
      }(cd),
      vd = function (t) {
        for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
        return o / 2
      },
      yd = function (t) {
        for (var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0; ++r < i;) n = a, a = t[r], c += e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e;
        return [o / (c *= 3), u / c]
      };

    function gd(t, n) {
      return t[0] - n[0] || t[1] - n[1]
    }

    function _d(t) {
      for (var n, e, r, i = t.length, o = [0, 1], u = 2, a = 2; a < i; ++a) {
        for (; u > 1 && (n = t[o[u - 2]], e = t[o[u - 1]], r = t[a], (e[0] - n[0]) * (r[1] - n[1]) - (e[1] - n[1]) * (r[0] - n[0]) <= 0);) --u;
        o[u++] = a
      }
      return o.slice(0, u)
    }
    var md = function (t) {
        if ((e = t.length) < 3) return null;
        var n, e, r = new Array(e),
          i = new Array(e);
        for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
        for (r.sort(gd), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
        var o = _d(r),
          u = _d(i),
          a = u[0] === o[0],
          c = u[u.length - 1] === o[o.length - 1],
          f = [];
        for (n = o.length - 1; n >= 0; --n) f.push(t[r[o[n]][2]]);
        for (n = +a; n < u.length - c; ++n) f.push(t[r[u[n]][2]]);
        return f
      },
      xd = function (t, n) {
        for (var e, r, i = t.length, o = t[i - 1], u = n[0], a = n[1], c = o[0], f = o[1], s = !1, l = 0; l < i; ++l) e = (o = t[l])[0], (r = o[1]) > a != f > a && u < (c - e) * (a - r) / (f - r) + e && (s = !s), c = e, f = r;
        return s
      },
      bd = function (t) {
        for (var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1], c = 0; ++r < i;) n = u, e = a, n -= u = (o = t[r])[0], e -= a = o[1], c += Math.sqrt(n * n + e * e);
        return c
      },
      wd = [].slice,
      Md = {};

    function Td(t) {
      this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0
    }

    function Sd(t) {
      if (!t._start) try {
        ! function (t) {
          for (; t._start = t._waiting && t._active < t._size;) {
            var n = t._ended + t._active,
              e = t._tasks[n],
              r = e.length - 1,
              i = e[r];
            e[r] = kd(t, n), --t._waiting, ++t._active, e = i.apply(null, e), t._tasks[n] && (t._tasks[n] = e || Md)
          }
        }(t)
      } catch (n) {
        if (t._tasks[t._ended + t._active - 1]) Nd(t, n);
        else if (!t._data) throw n
      }
    }

    function kd(t, n) {
      return function (e, r) {
        t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != e ? Nd(t, e) : (t._data[n] = r, t._waiting ? Sd(t) : Ed(t))))
      }
    }

    function Nd(t, n) {
      var e, r = t._tasks.length;
      for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;)
        if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort)) try {
          e.abort()
        } catch (n) {}
      t._active = NaN, Ed(t)
    }

    function Ed(t) {
      if (!t._active && t._call) {
        var n = t._data;
        t._data = void 0, t._call(t._error, n)
      }
    }

    function Cd(t) {
      if (null == t) t = 1 / 0;
      else if (!((t = +t) >= 1)) throw new Error("invalid concurrency");
      return new Td(t)
    }
    Td.prototype = Cd.prototype = {
      constructor: Td,
      defer: function (t) {
        if ("function" != typeof t) throw new Error("invalid callback");
        if (this._call) throw new Error("defer after await");
        if (null != this._error) return this;
        var n = wd.call(arguments, 1);
        return n.push(t), ++this._waiting, this._tasks.push(n), Sd(this), this
      },
      abort: function () {
        return null == this._error && Nd(this, new Error("abort")), this
      },
      await: function (t) {
        if ("function" != typeof t) throw new Error("invalid callback");
        if (this._call) throw new Error("multiple await");
        return this._call = function (n, e) {
          t.apply(null, [n].concat(e))
        }, Ed(this), this
      },
      awaitAll: function (t) {
        if ("function" != typeof t) throw new Error("invalid callback");
        if (this._call) throw new Error("multiple await");
        return this._call = t, Ed(this), this
      }
    };
    var Ad = function () {
        return Math.random()
      },
      Rd = function t(n) {
        function e(t, e) {
          return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
            function () {
              return n() * e + t
            }
        }
        return e.source = t, e
      }(Ad),
      zd = function t(n) {
        function e(t, e) {
          var r, i;
          return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
            function () {
              var o;
              if (null != r) o = r, r = null;
              else
                do {
                  r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o
                } while (!i || i > 1);
              return t + e * o * Math.sqrt(-2 * Math.log(i) / i)
            }
        }
        return e.source = t, e
      }(Ad),
      Ld = function t(n) {
        function e() {
          var t = zd.source(n).apply(this, arguments);
          return function () {
            return Math.exp(t())
          }
        }
        return e.source = t, e
      }(Ad),
      Pd = function t(n) {
        function e(t) {
          return function () {
            for (var e = 0, r = 0; r < t; ++r) e += n();
            return e
          }
        }
        return e.source = t, e
      }(Ad),
      Ud = function t(n) {
        function e(t) {
          var e = Pd.source(n)(t);
          return function () {
            return e() / t
          }
        }
        return e.source = t, e
      }(Ad),
      Dd = function t(n) {
        function e(t) {
          return function () {
            return -Math.log(1 - n()) / t
          }
        }
        return e.source = t, e
      }(Ad),
      Od = function (t, n) {
        var e, r, i, o, u = dt("beforesend", "progress", "load", "error"),
          a = fu(),
          c = new XMLHttpRequest,
          f = null,
          s = null,
          l = 0;

        function h(t) {
          var n, r = c.status;
          if (!r && function (t) {
              var n = t.responseType;
              return n && "text" !== n ? t.response : t.responseText
            }(c) || r >= 200 && r < 300 || 304 === r) {
            if (i) try {
              n = i.call(e, c)
            } catch (t) {
              return void u.call("error", e, t)
            } else n = c;
            u.call("load", e, n)
          } else u.call("error", e, t)
        }
        if ("undefined" != typeof XDomainRequest && !("withCredentials" in c) && /^(http(s)?:)?\/\//.test(t) && (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = c.ontimeout = h : c.onreadystatechange = function (t) {
            c.readyState > 3 && h(t)
          }, c.onprogress = function (t) {
            u.call("progress", e, t)
          }, e = {
            header: function (t, n) {
              return t = (t + "").toLowerCase(), arguments.length < 2 ? a.get(t) : (null == n ? a.remove(t) : a.set(t, n + ""), e)
            },
            mimeType: function (t) {
              return arguments.length ? (r = null == t ? null : t + "", e) : r
            },
            responseType: function (t) {
              return arguments.length ? (o = t, e) : o
            },
            timeout: function (t) {
              return arguments.length ? (l = +t, e) : l
            },
            user: function (t) {
              return arguments.length < 1 ? f : (f = null == t ? null : t + "", e)
            },
            password: function (t) {
              return arguments.length < 1 ? s : (s = null == t ? null : t + "", e)
            },
            response: function (t) {
              return i = t, e
            },
            get: function (t, n) {
              return e.send("GET", t, n)
            },
            post: function (t, n) {
              return e.send("POST", t, n)
            },
            send: function (n, i, h) {
              return c.open(n, t, !0, f, s), null == r || a.has("accept") || a.set("accept", r + ",*/*"), c.setRequestHeader && a.each((function (t, n) {
                c.setRequestHeader(n, t)
              })), null != r && c.overrideMimeType && c.overrideMimeType(r), null != o && (c.responseType = o), l > 0 && (c.timeout = l), null == h && "function" == typeof i && (h = i, i = null), null != h && 1 === h.length && (h = function (t) {
                return function (n, e) {
                  t(null == n ? e : null)
                }
              }(h)), null != h && e.on("error", h).on("load", (function (t) {
                h(null, t)
              })), u.call("beforesend", e, c), c.send(null == i ? null : i), e
            },
            abort: function () {
              return c.abort(), e
            },
            on: function () {
              var t = u.on.apply(u, arguments);
              return t === u ? e : t
            }
          }, null != n) {
          if ("function" != typeof n) throw new Error("invalid callback: " + n);
          return e.get(n)
        }
        return e
      };
    var qd = function (t, n) {
        return function (e, r) {
          var i = Od(e).mimeType(t).response(n);
          if (null != r) {
            if ("function" != typeof r) throw new Error("invalid callback: " + r);
            return i.get(r)
          }
          return i
        }
      },
      Id = qd("text/html", (function (t) {
        return document.createRange().createContextualFragment(t.responseText)
      })),
      jd = qd("application/json", (function (t) {
        return JSON.parse(t.responseText)
      })),
      Fd = qd("text/plain", (function (t) {
        return t.responseText
      })),
      Yd = qd("application/xml", (function (t) {
        var n = t.responseXML;
        if (!n) throw new Error("parse error");
        return n
      })),
      Bd = function (t, n) {
        return function (e, r, i) {
          arguments.length < 3 && (i = r, r = null);
          var o = Od(e).mimeType(t);
          return o.row = function (t) {
            return arguments.length ? o.response(Hd(n, r = t)) : r
          }, o.row(r), i ? o.get(i) : o
        }
      };

    function Hd(t, n) {
      return function (e) {
        return t(e.responseText, n)
      }
    }
    var $d = Bd("text/csv", Nu),
      Xd = Bd("text/tab-separated-values", zu),
      Vd = Array.prototype,
      Wd = Vd.map,
      Zd = Vd.slice,
      Gd = {
        name: "implicit"
      };

    function Qd(t) {
      var n = fu(),
        e = [],
        r = Gd;

      function i(i) {
        var o = i + "",
          u = n.get(o);
        if (!u) {
          if (r !== Gd) return r;
          n.set(o, u = e.push(i))
        }
        return t[(u - 1) % t.length]
      }
      return t = null == t ? [] : Zd.call(t), i.domain = function (t) {
        if (!arguments.length) return e.slice();
        e = [], n = fu();
        for (var r, o, u = -1, a = t.length; ++u < a;) n.has(o = (r = t[u]) + "") || n.set(o, e.push(r));
        return i
      }, i.range = function (n) {
        return arguments.length ? (t = Zd.call(n), i) : t.slice()
      }, i.unknown = function (t) {
        return arguments.length ? (r = t, i) : r
      }, i.copy = function () {
        return Qd().domain(e).range(t).unknown(r)
      }, i
    }

    function Jd() {
      var t, n, e = Qd().unknown(void 0),
        r = e.domain,
        i = e.range,
        o = [0, 1],
        u = !1,
        a = 0,
        c = 0,
        f = .5;

      function s() {
        var e = r().length,
          s = o[1] < o[0],
          l = o[s - 0],
          h = o[1 - s];
        t = (h - l) / Math.max(1, e - a + 2 * c), u && (t = Math.floor(t)), l += (h - l - t * (e - a)) * f, n = t * (1 - a), u && (l = Math.round(l), n = Math.round(n));
        var d = S(e).map((function (n) {
          return l + t * n
        }));
        return i(s ? d.reverse() : d)
      }
      return delete e.unknown, e.domain = function (t) {
        return arguments.length ? (r(t), s()) : r()
      }, e.range = function (t) {
        return arguments.length ? (o = [+t[0], +t[1]], s()) : o.slice()
      }, e.rangeRound = function (t) {
        return o = [+t[0], +t[1]], u = !0, s()
      }, e.bandwidth = function () {
        return n
      }, e.step = function () {
        return t
      }, e.round = function (t) {
        return arguments.length ? (u = !!t, s()) : u
      }, e.padding = function (t) {
        return arguments.length ? (a = c = Math.max(0, Math.min(1, t)), s()) : a
      }, e.paddingInner = function (t) {
        return arguments.length ? (a = Math.max(0, Math.min(1, t)), s()) : a
      }, e.paddingOuter = function (t) {
        return arguments.length ? (c = Math.max(0, Math.min(1, t)), s()) : c
      }, e.align = function (t) {
        return arguments.length ? (f = Math.max(0, Math.min(1, t)), s()) : f
      }, e.copy = function () {
        return Jd().domain(r()).range(o).round(u).paddingInner(a).paddingOuter(c).align(f)
      }, s()
    }

    function Kd() {
      return function t(n) {
        var e = n.copy;
        return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function () {
          return t(e())
        }, n
      }(Jd().paddingInner(1))
    }
    var tp = function (t) {
        return function () {
          return t
        }
      },
      np = function (t) {
        return +t
      },
      ep = [0, 1];

    function rp(t, n) {
      return (n -= t = +t) ? function (e) {
        return (e - t) / n
      } : tp(n)
    }

    function ip(t, n, e, r) {
      var i = t[0],
        o = t[1],
        u = n[0],
        a = n[1];
      return o < i ? (i = e(o, i), u = r(a, u)) : (i = e(i, o), u = r(u, a)),
        function (t) {
          return u(i(t))
        }
    }

    function op(t, n, e, r) {
      var i = Math.min(t.length, n.length) - 1,
        o = new Array(i),
        u = new Array(i),
        a = -1;
      for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < i;) o[a] = e(t[a], t[a + 1]), u[a] = r(n[a], n[a + 1]);
      return function (n) {
        var e = l(t, n, 1, i) - 1;
        return u[e](o[e](n))
      }
    }

    function up(t, n) {
      return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }

    function ap(t, n) {
      var e, r, i, o = ep,
        u = ep,
        a = lr,
        c = !1;

      function f() {
        return e = Math.min(o.length, u.length) > 2 ? op : ip, r = i = null, s
      }

      function s(n) {
        return (r || (r = e(o, u, c ? function (t) {
          return function (n, e) {
            var r = t(n = +n, e = +e);
            return function (t) {
              return t <= n ? 0 : t >= e ? 1 : r(t)
            }
          }
        }(t) : t, a)))(+n)
      }
      return s.invert = function (t) {
        return (i || (i = e(u, o, rp, c ? function (t) {
          return function (n, e) {
            var r = t(n = +n, e = +e);
            return function (t) {
              return t <= 0 ? n : t >= 1 ? e : r(t)
            }
          }
        }(n) : n)))(+t)
      }, s.domain = function (t) {
        return arguments.length ? (o = Wd.call(t, np), f()) : o.slice()
      }, s.range = function (t) {
        return arguments.length ? (u = Zd.call(t), f()) : u.slice()
      }, s.rangeRound = function (t) {
        return u = Zd.call(t), a = hr, f()
      }, s.clamp = function (t) {
        return arguments.length ? (c = !!t, f()) : c
      }, s.interpolate = function (t) {
        return arguments.length ? (a = t, f()) : a
      }, f()
    }

    function cp(t) {
      var n = t.domain;
      return t.ticks = function (t) {
        var e = n();
        return C(e[0], e[e.length - 1], null == t ? 10 : t)
      }, t.tickFormat = function (t, e) {
        return function (t, n, e) {
          var r, i = t[0],
            o = t[t.length - 1],
            u = R(i, o, null == n ? 10 : n);
          switch ((e = da(null == e ? ",f" : e)).type) {
            case "s":
              var a = Math.max(Math.abs(i), Math.abs(o));
              return null != e.precision || isNaN(r = Ma(u, a)) || (e.precision = r), ga(e, a);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
              null != e.precision || isNaN(r = Ta(u, Math.max(Math.abs(i), Math.abs(o)))) || (e.precision = r - ("e" === e.type));
              break;
            case "f":
            case "%":
              null != e.precision || isNaN(r = wa(u)) || (e.precision = r - 2 * ("%" === e.type))
          }
          return ya(e)
        }(n(), t, e)
      }, t.nice = function (e) {
        null == e && (e = 10);
        var r, i = n(),
          o = 0,
          u = i.length - 1,
          a = i[o],
          c = i[u];
        return c < a && (r = a, a = c, c = r, r = o, o = u, u = r), (r = A(a, c, e)) > 0 ? r = A(a = Math.floor(a / r) * r, c = Math.ceil(c / r) * r, e) : r < 0 && (r = A(a = Math.ceil(a * r) / r, c = Math.floor(c * r) / r, e)), r > 0 ? (i[o] = Math.floor(a / r) * r, i[u] = Math.ceil(c / r) * r, n(i)) : r < 0 && (i[o] = Math.ceil(a * r) / r, i[u] = Math.floor(c * r) / r, n(i)), t
      }, t
    }

    function fp() {
      var t = ap(rp, er);
      return t.copy = function () {
        return up(t, fp())
      }, cp(t)
    }

    function sp() {
      var t = [0, 1];

      function n(t) {
        return +t
      }
      return n.invert = n, n.domain = n.range = function (e) {
        return arguments.length ? (t = Wd.call(e, np), n) : t.slice()
      }, n.copy = function () {
        return sp().domain(t)
      }, cp(n)
    }
    var lp = function (t, n) {
      var e, r = 0,
        i = (t = t.slice()).length - 1,
        o = t[r],
        u = t[i];
      return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t
    };

    function hp(t, n) {
      return (n = Math.log(n / t)) ? function (e) {
        return Math.log(e / t) / n
      } : tp(n)
    }

    function dp(t, n) {
      return t < 0 ? function (e) {
        return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
      } : function (e) {
        return Math.pow(n, e) * Math.pow(t, 1 - e)
      }
    }

    function pp(t) {
      return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
    }

    function vp(t) {
      return 10 === t ? pp : t === Math.E ? Math.exp : function (n) {
        return Math.pow(t, n)
      }
    }

    function yp(t) {
      return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
        return Math.log(n) / t
      })
    }

    function gp(t) {
      return function (n) {
        return -t(-n)
      }
    }

    function _p() {
      var t = ap(hp, dp).domain([1, 10]),
        n = t.domain,
        e = 10,
        r = yp(10),
        i = vp(10);

      function o() {
        return r = yp(e), i = vp(e), n()[0] < 0 && (r = gp(r), i = gp(i)), t
      }
      return t.base = function (t) {
        return arguments.length ? (e = +t, o()) : e
      }, t.domain = function (t) {
        return arguments.length ? (n(t), o()) : n()
      }, t.ticks = function (t) {
        var o, u = n(),
          a = u[0],
          c = u[u.length - 1];
        (o = c < a) && (h = a, a = c, c = h);
        var f, s, l, h = r(a),
          d = r(c),
          p = null == t ? 10 : +t,
          v = [];
        if (!(e % 1) && d - h < p) {
          if (h = Math.round(h) - 1, d = Math.round(d) + 1, a > 0) {
            for (; h < d; ++h)
              for (s = 1, f = i(h); s < e; ++s)
                if (!((l = f * s) < a)) {
                  if (l > c) break;
                  v.push(l)
                }
          } else
            for (; h < d; ++h)
              for (s = e - 1, f = i(h); s >= 1; --s)
                if (!((l = f * s) < a)) {
                  if (l > c) break;
                  v.push(l)
                }
        } else v = C(h, d, Math.min(d - h, p)).map(i);
        return o ? v.reverse() : v
      }, t.tickFormat = function (n, o) {
        if (null == o && (o = 10 === e ? ".0e" : ","), "function" != typeof o && (o = ya(o)), n === 1 / 0) return o;
        null == n && (n = 10);
        var u = Math.max(1, e * n / t.ticks().length);
        return function (t) {
          var n = t / i(Math.round(r(t)));
          return n * e < e - .5 && (n *= e), n <= u ? o(t) : ""
        }
      }, t.nice = function () {
        return n(lp(n(), {
          floor: function (t) {
            return i(Math.floor(r(t)))
          },
          ceil: function (t) {
            return i(Math.ceil(r(t)))
          }
        }))
      }, t.copy = function () {
        return up(t, _p().base(e))
      }, t
    }

    function mp(t, n) {
      return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
    }

    function xp() {
      var t = 1,
        n = ap((function (n, e) {
          return (e = mp(e, t) - (n = mp(n, t))) ? function (r) {
            return (mp(r, t) - n) / e
          } : tp(e)
        }), (function (n, e) {
          return e = mp(e, t) - (n = mp(n, t)),
            function (r) {
              return mp(n + e * r, 1 / t)
            }
        })),
        e = n.domain;
      return n.exponent = function (n) {
        return arguments.length ? (t = +n, e(e())) : t
      }, n.copy = function () {
        return up(n, xp().exponent(t))
      }, cp(n)
    }

    function bp() {
      return xp().exponent(.5)
    }

    function wp() {
      var t = [],
        n = [],
        e = [];

      function r() {
        var r = 0,
          o = Math.max(1, n.length);
        for (e = new Array(o - 1); ++r < o;) e[r - 1] = P(t, r / o);
        return i
      }

      function i(t) {
        if (!isNaN(t = +t)) return n[l(e, t)]
      }
      return i.invertExtent = function (r) {
        var i = n.indexOf(r);
        return i < 0 ? [NaN, NaN] : [i > 0 ? e[i - 1] : t[0], i < e.length ? e[i] : t[t.length - 1]]
      }, i.domain = function (n) {
        if (!arguments.length) return t.slice();
        t = [];
        for (var e, i = 0, o = n.length; i < o; ++i) null == (e = n[i]) || isNaN(e = +e) || t.push(e);
        return t.sort(u), r()
      }, i.range = function (t) {
        return arguments.length ? (n = Zd.call(t), r()) : n.slice()
      }, i.quantiles = function () {
        return e.slice()
      }, i.copy = function () {
        return wp().domain(t).range(n)
      }, i
    }

    function Mp() {
      var t = 0,
        n = 1,
        e = 1,
        r = [.5],
        i = [0, 1];

      function o(t) {
        if (t <= t) return i[l(r, t, 0, e)]
      }

      function u() {
        var i = -1;
        for (r = new Array(e); ++i < e;) r[i] = ((i + 1) * n - (i - e) * t) / (e + 1);
        return o
      }
      return o.domain = function (e) {
        return arguments.length ? (t = +e[0], n = +e[1], u()) : [t, n]
      }, o.range = function (t) {
        return arguments.length ? (e = (i = Zd.call(t)).length - 1, u()) : i.slice()
      }, o.invertExtent = function (o) {
        var u = i.indexOf(o);
        return u < 0 ? [NaN, NaN] : u < 1 ? [t, r[0]] : u >= e ? [r[e - 1], n] : [r[u - 1], r[u]]
      }, o.copy = function () {
        return Mp().domain([t, n]).range(i)
      }, cp(o)
    }

    function Tp() {
      var t = [.5],
        n = [0, 1],
        e = 1;

      function r(r) {
        if (r <= r) return n[l(t, r, 0, e)]
      }
      return r.domain = function (i) {
        return arguments.length ? (t = Zd.call(i), e = Math.min(t.length, n.length - 1), r) : t.slice()
      }, r.range = function (i) {
        return arguments.length ? (n = Zd.call(i), e = Math.min(t.length, n.length - 1), r) : n.slice()
      }, r.invertExtent = function (e) {
        var r = n.indexOf(e);
        return [t[r - 1], t[r]]
      }, r.copy = function () {
        return Tp().domain(t).range(n)
      }, r
    }
    var Sp = new Date,
      kp = new Date;

    function Np(t, n, e, r) {
      function i(n) {
        return t(n = new Date(+n)), n
      }
      return i.floor = i, i.ceil = function (e) {
        return t(e = new Date(e - 1)), n(e, 1), t(e), e
      }, i.round = function (t) {
        var n = i(t),
          e = i.ceil(t);
        return t - n < e - t ? n : e
      }, i.offset = function (t, e) {
        return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
      }, i.range = function (e, r, o) {
        var u, a = [];
        if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return a;
        do {
          a.push(u = new Date(+e)), n(e, o), t(e)
        } while (u < e && e < r);
        return a
      }, i.filter = function (e) {
        return Np((function (n) {
          if (n >= n)
            for (; t(n), !e(n);) n.setTime(n - 1)
        }), (function (t, r) {
          if (t >= t)
            if (r < 0)
              for (; ++r <= 0;)
                for (; n(t, -1), !e(t););
            else
              for (; --r >= 0;)
                for (; n(t, 1), !e(t););
        }))
      }, e && (i.count = function (n, r) {
        return Sp.setTime(+n), kp.setTime(+r), t(Sp), t(kp), Math.floor(e(Sp, kp))
      }, i.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
          return r(n) % t == 0
        } : function (n) {
          return i.count(0, n) % t == 0
        }) : i : null
      }), i
    }
    var Ep = Np((function () {}), (function (t, n) {
      t.setTime(+t + n)
    }), (function (t, n) {
      return n - t
    }));
    Ep.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Np((function (n) {
        n.setTime(Math.floor(n / t) * t)
      }), (function (n, e) {
        n.setTime(+n + e * t)
      }), (function (n, e) {
        return (e - n) / t
      })) : Ep : null
    };
    var Cp = Ep,
      Ap = Ep.range,
      Rp = Np((function (t) {
        t.setTime(1e3 * Math.floor(t / 1e3))
      }), (function (t, n) {
        t.setTime(+t + 1e3 * n)
      }), (function (t, n) {
        return (n - t) / 1e3
      }), (function (t) {
        return t.getUTCSeconds()
      })),
      zp = Rp,
      Lp = Rp.range,
      Pp = Np((function (t) {
        t.setTime(6e4 * Math.floor(t / 6e4))
      }), (function (t, n) {
        t.setTime(+t + 6e4 * n)
      }), (function (t, n) {
        return (n - t) / 6e4
      }), (function (t) {
        return t.getMinutes()
      })),
      Up = Pp,
      Dp = Pp.range,
      Op = Np((function (t) {
        var n = 6e4 * t.getTimezoneOffset() % 36e5;
        n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
      }), (function (t, n) {
        t.setTime(+t + 36e5 * n)
      }), (function (t, n) {
        return (n - t) / 36e5
      }), (function (t) {
        return t.getHours()
      })),
      qp = Op,
      Ip = Op.range,
      jp = Np((function (t) {
        t.setHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setDate(t.getDate() + n)
      }), (function (t, n) {
        return (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5
      }), (function (t) {
        return t.getDate() - 1
      })),
      Fp = jp,
      Yp = jp.range;

    function Bp(t) {
      return Np((function (n) {
        n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setDate(t.getDate() + 7 * n)
      }), (function (t, n) {
        return (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5
      }))
    }
    var Hp = Bp(0),
      $p = Bp(1),
      Xp = Bp(2),
      Vp = Bp(3),
      Wp = Bp(4),
      Zp = Bp(5),
      Gp = Bp(6),
      Qp = Hp.range,
      Jp = $p.range,
      Kp = Xp.range,
      tv = Vp.range,
      nv = Wp.range,
      ev = Zp.range,
      rv = Gp.range,
      iv = Np((function (t) {
        t.setDate(1), t.setHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setMonth(t.getMonth() + n)
      }), (function (t, n) {
        return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
      }), (function (t) {
        return t.getMonth()
      })),
      ov = iv,
      uv = iv.range,
      av = Np((function (t) {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setFullYear(t.getFullYear() + n)
      }), (function (t, n) {
        return n.getFullYear() - t.getFullYear()
      }), (function (t) {
        return t.getFullYear()
      }));
    av.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? Np((function (n) {
        n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
      }), (function (n, e) {
        n.setFullYear(n.getFullYear() + e * t)
      })) : null
    };
    var cv = av,
      fv = av.range,
      sv = Np((function (t) {
        t.setUTCSeconds(0, 0)
      }), (function (t, n) {
        t.setTime(+t + 6e4 * n)
      }), (function (t, n) {
        return (n - t) / 6e4
      }), (function (t) {
        return t.getUTCMinutes()
      })),
      lv = sv,
      hv = sv.range,
      dv = Np((function (t) {
        t.setUTCMinutes(0, 0, 0)
      }), (function (t, n) {
        t.setTime(+t + 36e5 * n)
      }), (function (t, n) {
        return (n - t) / 36e5
      }), (function (t) {
        return t.getUTCHours()
      })),
      pv = dv,
      vv = dv.range,
      yv = Np((function (t) {
        t.setUTCHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setUTCDate(t.getUTCDate() + n)
      }), (function (t, n) {
        return (n - t) / 864e5
      }), (function (t) {
        return t.getUTCDate() - 1
      })),
      gv = yv,
      _v = yv.range;

    function mv(t) {
      return Np((function (n) {
        n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setUTCDate(t.getUTCDate() + 7 * n)
      }), (function (t, n) {
        return (n - t) / 6048e5
      }))
    }
    var xv = mv(0),
      bv = mv(1),
      wv = mv(2),
      Mv = mv(3),
      Tv = mv(4),
      Sv = mv(5),
      kv = mv(6),
      Nv = xv.range,
      Ev = bv.range,
      Cv = wv.range,
      Av = Mv.range,
      Rv = Tv.range,
      zv = Sv.range,
      Lv = kv.range,
      Pv = Np((function (t) {
        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setUTCMonth(t.getUTCMonth() + n)
      }), (function (t, n) {
        return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
      }), (function (t) {
        return t.getUTCMonth()
      })),
      Uv = Pv,
      Dv = Pv.range,
      Ov = Np((function (t) {
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
      }), (function (t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n)
      }), (function (t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear()
      }), (function (t) {
        return t.getUTCFullYear()
      }));
    Ov.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? Np((function (n) {
        n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
      }), (function (n, e) {
        n.setUTCFullYear(n.getUTCFullYear() + e * t)
      })) : null
    };
    var qv = Ov,
      Iv = Ov.range;

    function jv(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return n.setFullYear(t.y), n
      }
      return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }

    function Fv(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return n.setUTCFullYear(t.y), n
      }
      return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }

    function Yv(t) {
      return {
        y: t,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }

    function Bv(t) {
      var n = t.dateTime,
        e = t.date,
        r = t.time,
        i = t.periods,
        o = t.days,
        u = t.shortDays,
        a = t.months,
        c = t.shortMonths,
        f = ny(i),
        s = ey(i),
        l = ny(o),
        h = ey(o),
        d = ny(u),
        p = ey(u),
        v = ny(a),
        y = ey(a),
        g = ny(c),
        _ = ey(c),
        m = {
          a: function (t) {
            return u[t.getDay()]
          },
          A: function (t) {
            return o[t.getDay()]
          },
          b: function (t) {
            return c[t.getMonth()]
          },
          B: function (t) {
            return a[t.getMonth()]
          },
          c: null,
          d: wy,
          e: wy,
          f: Ny,
          H: My,
          I: Ty,
          j: Sy,
          L: ky,
          m: Ey,
          M: Cy,
          p: function (t) {
            return i[+(t.getHours() >= 12)]
          },
          Q: rg,
          s: ig,
          S: Ay,
          u: Ry,
          U: zy,
          V: Ly,
          w: Py,
          W: Uy,
          x: null,
          X: null,
          y: Dy,
          Y: Oy,
          Z: qy,
          "%": eg
        },
        x = {
          a: function (t) {
            return u[t.getUTCDay()]
          },
          A: function (t) {
            return o[t.getUTCDay()]
          },
          b: function (t) {
            return c[t.getUTCMonth()]
          },
          B: function (t) {
            return a[t.getUTCMonth()]
          },
          c: null,
          d: Iy,
          e: Iy,
          f: Hy,
          H: jy,
          I: Fy,
          j: Yy,
          L: By,
          m: $y,
          M: Xy,
          p: function (t) {
            return i[+(t.getUTCHours() >= 12)]
          },
          Q: rg,
          s: ig,
          S: Vy,
          u: Wy,
          U: Zy,
          V: Gy,
          w: Qy,
          W: Jy,
          x: null,
          X: null,
          y: Ky,
          Y: tg,
          Z: ng,
          "%": eg
        },
        b = {
          a: function (t, n, e) {
            var r = d.exec(n.slice(e));
            return r ? (t.w = p[r[0].toLowerCase()], e + r[0].length) : -1
          },
          A: function (t, n, e) {
            var r = l.exec(n.slice(e));
            return r ? (t.w = h[r[0].toLowerCase()], e + r[0].length) : -1
          },
          b: function (t, n, e) {
            var r = g.exec(n.slice(e));
            return r ? (t.m = _[r[0].toLowerCase()], e + r[0].length) : -1
          },
          B: function (t, n, e) {
            var r = v.exec(n.slice(e));
            return r ? (t.m = y[r[0].toLowerCase()], e + r[0].length) : -1
          },
          c: function (t, e, r) {
            return T(t, n, e, r)
          },
          d: hy,
          e: hy,
          f: _y,
          H: py,
          I: py,
          j: dy,
          L: gy,
          m: ly,
          M: vy,
          p: function (t, n, e) {
            var r = f.exec(n.slice(e));
            return r ? (t.p = s[r[0].toLowerCase()], e + r[0].length) : -1
          },
          Q: xy,
          s: by,
          S: yy,
          u: iy,
          U: oy,
          V: uy,
          w: ry,
          W: ay,
          x: function (t, n, r) {
            return T(t, e, n, r)
          },
          X: function (t, n, e) {
            return T(t, r, n, e)
          },
          y: fy,
          Y: cy,
          Z: sy,
          "%": my
        };

      function w(t, n) {
        return function (e) {
          var r, i, o, u = [],
            a = -1,
            c = 0,
            f = t.length;
          for (e instanceof Date || (e = new Date(+e)); ++a < f;) 37 === t.charCodeAt(a) && (u.push(t.slice(c, a)), null != (i = Zv[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), c = a + 1);
          return u.push(t.slice(c, a)), u.join("")
        }
      }

      function M(t, n) {
        return function (e) {
          var r, i, o = Yv(1900);
          if (T(o, t, e += "", 0) != e.length) return null;
          if ("Q" in o) return new Date(o.Q);
          if ("p" in o && (o.H = o.H % 12 + 12 * o.p), "V" in o) {
            if (o.V < 1 || o.V > 53) return null;
            "w" in o || (o.w = 1), "Z" in o ? (i = (r = Fv(Yv(o.y))).getUTCDay(), r = i > 4 || 0 === i ? bv.ceil(r) : bv(r), r = gv.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = n(Yv(o.y))).getDay(), r = i > 4 || 0 === i ? $p.ceil(r) : $p(r), r = Fp.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7)
          } else("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? Fv(Yv(o.y)).getUTCDay() : n(Yv(o.y)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7);
          return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, Fv(o)) : n(o)
        }
      }

      function T(t, n, e, r) {
        for (var i, o, u = 0, a = n.length, c = e.length; u < a;) {
          if (r >= c) return -1;
          if (37 === (i = n.charCodeAt(u++))) {
            if (i = n.charAt(u++), !(o = b[i in Zv ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0) return -1
          } else if (i != e.charCodeAt(r++)) return -1
        }
        return r
      }
      return m.x = w(e, m), m.X = w(r, m), m.c = w(n, m), x.x = w(e, x), x.X = w(r, x), x.c = w(n, x), {
        format: function (t) {
          var n = w(t += "", m);
          return n.toString = function () {
            return t
          }, n
        },
        parse: function (t) {
          var n = M(t += "", jv);
          return n.toString = function () {
            return t
          }, n
        },
        utcFormat: function (t) {
          var n = w(t += "", x);
          return n.toString = function () {
            return t
          }, n
        },
        utcParse: function (t) {
          var n = M(t, Fv);
          return n.toString = function () {
            return t
          }, n
        }
      }
    }
    var Hv, $v, Xv, Vv, Wv, Zv = {
        "-": "",
        _: " ",
        0: "0"
      },
      Gv = /^\s*\d+/,
      Qv = /^%/,
      Jv = /[\\^$*+?|[\]().{}]/g;

    function Kv(t, n, e) {
      var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        o = i.length;
      return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
    }

    function ty(t) {
      return t.replace(Jv, "\\$&")
    }

    function ny(t) {
      return new RegExp("^(?:" + t.map(ty).join("|") + ")", "i")
    }

    function ey(t) {
      for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
      return n
    }

    function ry(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 1));
      return r ? (t.w = +r[0], e + r[0].length) : -1
    }

    function iy(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 1));
      return r ? (t.u = +r[0], e + r[0].length) : -1
    }

    function oy(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 2));
      return r ? (t.U = +r[0], e + r[0].length) : -1
    }

    function uy(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 2));
      return r ? (t.V = +r[0], e + r[0].length) : -1
    }

    function ay(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 2));
      return r ? (t.W = +r[0], e + r[0].length) : -1
    }

    function cy(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 4));
      return r ? (t.y = +r[0], e + r[0].length) : -1
    }

    function fy(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 2));
      return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }

    function sy(t, n, e) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
      return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }

    function ly(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 2));
      return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }

    function hy(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 2));
      return r ? (t.d = +r[0], e + r[0].length) : -1
    }

    function dy(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 3));
      return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }

    function py(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 2));
      return r ? (t.H = +r[0], e + r[0].length) : -1
    }

    function vy(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 2));
      return r ? (t.M = +r[0], e + r[0].length) : -1
    }

    function yy(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 2));
      return r ? (t.S = +r[0], e + r[0].length) : -1
    }

    function gy(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 3));
      return r ? (t.L = +r[0], e + r[0].length) : -1
    }

    function _y(t, n, e) {
      var r = Gv.exec(n.slice(e, e + 6));
      return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
    }

    function my(t, n, e) {
      var r = Qv.exec(n.slice(e, e + 1));
      return r ? e + r[0].length : -1
    }

    function xy(t, n, e) {
      var r = Gv.exec(n.slice(e));
      return r ? (t.Q = +r[0], e + r[0].length) : -1
    }

    function by(t, n, e) {
      var r = Gv.exec(n.slice(e));
      return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1
    }

    function wy(t, n) {
      return Kv(t.getDate(), n, 2)
    }

    function My(t, n) {
      return Kv(t.getHours(), n, 2)
    }

    function Ty(t, n) {
      return Kv(t.getHours() % 12 || 12, n, 2)
    }

    function Sy(t, n) {
      return Kv(1 + Fp.count(cv(t), t), n, 3)
    }

    function ky(t, n) {
      return Kv(t.getMilliseconds(), n, 3)
    }

    function Ny(t, n) {
      return ky(t, n) + "000"
    }

    function Ey(t, n) {
      return Kv(t.getMonth() + 1, n, 2)
    }

    function Cy(t, n) {
      return Kv(t.getMinutes(), n, 2)
    }

    function Ay(t, n) {
      return Kv(t.getSeconds(), n, 2)
    }

    function Ry(t) {
      var n = t.getDay();
      return 0 === n ? 7 : n
    }

    function zy(t, n) {
      return Kv(Hp.count(cv(t), t), n, 2)
    }

    function Ly(t, n) {
      var e = t.getDay();
      return t = e >= 4 || 0 === e ? Wp(t) : Wp.ceil(t), Kv(Wp.count(cv(t), t) + (4 === cv(t).getDay()), n, 2)
    }

    function Py(t) {
      return t.getDay()
    }

    function Uy(t, n) {
      return Kv($p.count(cv(t), t), n, 2)
    }

    function Dy(t, n) {
      return Kv(t.getFullYear() % 100, n, 2)
    }

    function Oy(t, n) {
      return Kv(t.getFullYear() % 1e4, n, 4)
    }

    function qy(t) {
      var n = t.getTimezoneOffset();
      return (n > 0 ? "-" : (n *= -1, "+")) + Kv(n / 60 | 0, "0", 2) + Kv(n % 60, "0", 2)
    }

    function Iy(t, n) {
      return Kv(t.getUTCDate(), n, 2)
    }

    function jy(t, n) {
      return Kv(t.getUTCHours(), n, 2)
    }

    function Fy(t, n) {
      return Kv(t.getUTCHours() % 12 || 12, n, 2)
    }

    function Yy(t, n) {
      return Kv(1 + gv.count(qv(t), t), n, 3)
    }

    function By(t, n) {
      return Kv(t.getUTCMilliseconds(), n, 3)
    }

    function Hy(t, n) {
      return By(t, n) + "000"
    }

    function $y(t, n) {
      return Kv(t.getUTCMonth() + 1, n, 2)
    }

    function Xy(t, n) {
      return Kv(t.getUTCMinutes(), n, 2)
    }

    function Vy(t, n) {
      return Kv(t.getUTCSeconds(), n, 2)
    }

    function Wy(t) {
      var n = t.getUTCDay();
      return 0 === n ? 7 : n
    }

    function Zy(t, n) {
      return Kv(xv.count(qv(t), t), n, 2)
    }

    function Gy(t, n) {
      var e = t.getUTCDay();
      return t = e >= 4 || 0 === e ? Tv(t) : Tv.ceil(t), Kv(Tv.count(qv(t), t) + (4 === qv(t).getUTCDay()), n, 2)
    }

    function Qy(t) {
      return t.getUTCDay()
    }

    function Jy(t, n) {
      return Kv(bv.count(qv(t), t), n, 2)
    }

    function Ky(t, n) {
      return Kv(t.getUTCFullYear() % 100, n, 2)
    }

    function tg(t, n) {
      return Kv(t.getUTCFullYear() % 1e4, n, 4)
    }

    function ng() {
      return "+0000"
    }

    function eg() {
      return "%"
    }

    function rg(t) {
      return +t
    }

    function ig(t) {
      return Math.floor(+t / 1e3)
    }

    function og(t) {
      return Hv = Bv(t), $v = Hv.format, Xv = Hv.parse, Vv = Hv.utcFormat, Wv = Hv.utcParse, Hv
    }
    og({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var ug = Date.prototype.toISOString ? function (t) {
      return t.toISOString()
    } : Vv("%Y-%m-%dT%H:%M:%S.%LZ");
    var ag = +new Date("2000-01-01T00:00:00.000Z") ? function (t) {
      var n = new Date(t);
      return isNaN(n) ? null : n
    } : Wv("%Y-%m-%dT%H:%M:%S.%LZ");

    function cg(t) {
      return new Date(t)
    }

    function fg(t) {
      return t instanceof Date ? +t : +new Date(+t)
    }

    function sg(t, n, e, r, i, o, u, c, f) {
      var s = ap(rp, er),
        l = s.invert,
        h = s.domain,
        d = f(".%L"),
        p = f(":%S"),
        v = f("%I:%M"),
        y = f("%I %p"),
        g = f("%a %d"),
        _ = f("%b %d"),
        m = f("%B"),
        x = f("%Y"),
        b = [
          [u, 1, 1e3],
          [u, 5, 5e3],
          [u, 15, 15e3],
          [u, 30, 3e4],
          [o, 1, 6e4],
          [o, 5, 3e5],
          [o, 15, 9e5],
          [o, 30, 18e5],
          [i, 1, 36e5],
          [i, 3, 108e5],
          [i, 6, 216e5],
          [i, 12, 432e5],
          [r, 1, 864e5],
          [r, 2, 1728e5],
          [e, 1, 6048e5],
          [n, 1, 2592e6],
          [n, 3, 7776e6],
          [t, 1, 31536e6]
        ];

      function w(a) {
        return (u(a) < a ? d : o(a) < a ? p : i(a) < a ? v : r(a) < a ? y : n(a) < a ? e(a) < a ? g : _ : t(a) < a ? m : x)(a)
      }

      function M(n, e, r, i) {
        if (null == n && (n = 10), "number" == typeof n) {
          var o = Math.abs(r - e) / n,
            u = a((function (t) {
              return t[2]
            })).right(b, o);
          u === b.length ? (i = R(e / 31536e6, r / 31536e6, n), n = t) : u ? (i = (u = b[o / b[u - 1][2] < b[u][2] / o ? u - 1 : u])[1], n = u[0]) : (i = Math.max(R(e, r, n), 1), n = c)
        }
        return null == i ? n : n.every(i)
      }
      return s.invert = function (t) {
        return new Date(l(t))
      }, s.domain = function (t) {
        return arguments.length ? h(Wd.call(t, fg)) : h().map(cg)
      }, s.ticks = function (t, n) {
        var e, r = h(),
          i = r[0],
          o = r[r.length - 1],
          u = o < i;
        return u && (e = i, i = o, o = e), e = (e = M(t, i, o, n)) ? e.range(i, o + 1) : [], u ? e.reverse() : e
      }, s.tickFormat = function (t, n) {
        return null == n ? w : f(n)
      }, s.nice = function (t, n) {
        var e = h();
        return (t = M(t, e[0], e[e.length - 1], n)) ? h(lp(e, t)) : s
      }, s.copy = function () {
        return up(s, sg(t, n, e, r, i, o, u, c, f))
      }, s
    }
    var lg = function () {
        return sg(cv, ov, Hp, Fp, qp, Up, zp, Cp, $v).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
      },
      hg = function () {
        return sg(qv, Uv, xv, gv, pv, lv, zp, Cp, Vv).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
      },
      dg = function (t) {
        return t.match(/.{6}/g).map((function (t) {
          return "#" + t
        }))
      },
      pg = dg("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
      vg = dg("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
      yg = dg("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
      gg = dg("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
      _g = Lr(je(300, .5, 0), je(-240, .5, 1)),
      mg = Lr(je(-100, .75, .35), je(80, 1.5, .8)),
      xg = Lr(je(260, .75, .35), je(80, 1.5, .8)),
      bg = je(),
      wg = function (t) {
        (t < 0 || t > 1) && (t -= Math.floor(t));
        var n = Math.abs(t - .5);
        return bg.h = 360 * t - 100, bg.s = 1.5 - 1.5 * n, bg.l = .8 - .9 * n, bg + ""
      };

    function Mg(t) {
      var n = t.length;
      return function (e) {
        return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
      }
    }
    var Tg = Mg(dg("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
      Sg = Mg(dg("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
      kg = Mg(dg("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
      Ng = Mg(dg("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

    function Eg(t) {
      var n = 0,
        e = 1,
        r = !1;

      function i(i) {
        var o = (i - n) / (e - n);
        return t(r ? Math.max(0, Math.min(1, o)) : o)
      }
      return i.domain = function (t) {
        return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e]
      }, i.clamp = function (t) {
        return arguments.length ? (r = !!t, i) : r
      }, i.interpolator = function (n) {
        return arguments.length ? (t = n, i) : t
      }, i.copy = function () {
        return Eg(t).domain([n, e]).clamp(r)
      }, cp(i)
    }
    var Cg = function (t) {
        return function () {
          return t
        }
      },
      Ag = Math.abs,
      Rg = Math.atan2,
      zg = Math.cos,
      Lg = Math.max,
      Pg = Math.min,
      Ug = Math.sin,
      Dg = Math.sqrt,
      Og = Math.PI,
      qg = Og / 2,
      Ig = 2 * Og;

    function jg(t) {
      return t > 1 ? 0 : t < -1 ? Og : Math.acos(t)
    }

    function Fg(t) {
      return t >= 1 ? qg : t <= -1 ? -qg : Math.asin(t)
    }

    function Yg(t) {
      return t.innerRadius
    }

    function Bg(t) {
      return t.outerRadius
    }

    function Hg(t) {
      return t.startAngle
    }

    function $g(t) {
      return t.endAngle
    }

    function Xg(t) {
      return t && t.padAngle
    }

    function Vg(t, n, e, r, i, o, u, a) {
      var c = e - t,
        f = r - n,
        s = u - i,
        l = a - o,
        h = (s * (n - o) - l * (t - i)) / (l * c - s * f);
      return [t + h * c, n + h * f]
    }

    function Wg(t, n, e, r, i, o, u) {
      var a = t - e,
        c = n - r,
        f = (u ? o : -o) / Dg(a * a + c * c),
        s = f * c,
        l = -f * a,
        h = t + s,
        d = n + l,
        p = e + s,
        v = r + l,
        y = (h + p) / 2,
        g = (d + v) / 2,
        _ = p - h,
        m = v - d,
        x = _ * _ + m * m,
        b = i - o,
        w = h * v - p * d,
        M = (m < 0 ? -1 : 1) * Dg(Lg(0, b * b * x - w * w)),
        T = (w * m - _ * M) / x,
        S = (-w * _ - m * M) / x,
        k = (w * m + _ * M) / x,
        N = (-w * _ + m * M) / x,
        E = T - y,
        C = S - g,
        A = k - y,
        R = N - g;
      return E * E + C * C > A * A + R * R && (T = k, S = N), {
        cx: T,
        cy: S,
        x01: -s,
        y01: -l,
        x11: T * (i / b - 1),
        y11: S * (i / b - 1)
      }
    }
    var Zg = function () {
      var t = Yg,
        n = Bg,
        e = Cg(0),
        r = null,
        i = Hg,
        o = $g,
        u = Xg,
        a = null;

      function c() {
        var c, f, s = +t.apply(this, arguments),
          l = +n.apply(this, arguments),
          h = i.apply(this, arguments) - qg,
          d = o.apply(this, arguments) - qg,
          p = Ag(d - h),
          v = d > h;
        if (a || (a = c = tu()), l < s && (f = l, l = s, s = f), l > 1e-12)
          if (p > Ig - 1e-12) a.moveTo(l * zg(h), l * Ug(h)), a.arc(0, 0, l, h, d, !v), s > 1e-12 && (a.moveTo(s * zg(d), s * Ug(d)), a.arc(0, 0, s, d, h, v));
          else {
            var y, g, _ = h,
              m = d,
              x = h,
              b = d,
              w = p,
              M = p,
              T = u.apply(this, arguments) / 2,
              S = T > 1e-12 && (r ? +r.apply(this, arguments) : Dg(s * s + l * l)),
              k = Pg(Ag(l - s) / 2, +e.apply(this, arguments)),
              N = k,
              E = k;
            if (S > 1e-12) {
              var C = Fg(S / s * Ug(T)),
                A = Fg(S / l * Ug(T));
              (w -= 2 * C) > 1e-12 ? (x += C *= v ? 1 : -1, b -= C) : (w = 0, x = b = (h + d) / 2), (M -= 2 * A) > 1e-12 ? (_ += A *= v ? 1 : -1, m -= A) : (M = 0, _ = m = (h + d) / 2)
            }
            var R = l * zg(_),
              z = l * Ug(_),
              L = s * zg(b),
              P = s * Ug(b);
            if (k > 1e-12) {
              var U = l * zg(m),
                D = l * Ug(m),
                O = s * zg(x),
                q = s * Ug(x);
              if (p < Og) {
                var I = w > 1e-12 ? Vg(R, z, O, q, U, D, L, P) : [L, P],
                  j = R - I[0],
                  F = z - I[1],
                  Y = U - I[0],
                  B = D - I[1],
                  H = 1 / Ug(jg((j * Y + F * B) / (Dg(j * j + F * F) * Dg(Y * Y + B * B))) / 2),
                  $ = Dg(I[0] * I[0] + I[1] * I[1]);
                N = Pg(k, (s - $) / (H - 1)), E = Pg(k, (l - $) / (H + 1))
              }
            }
            M > 1e-12 ? E > 1e-12 ? (y = Wg(O, q, R, z, l, E, v), g = Wg(U, D, L, P, l, E, v), a.moveTo(y.cx + y.x01, y.cy + y.y01), E < k ? a.arc(y.cx, y.cy, E, Rg(y.y01, y.x01), Rg(g.y01, g.x01), !v) : (a.arc(y.cx, y.cy, E, Rg(y.y01, y.x01), Rg(y.y11, y.x11), !v), a.arc(0, 0, l, Rg(y.cy + y.y11, y.cx + y.x11), Rg(g.cy + g.y11, g.cx + g.x11), !v), a.arc(g.cx, g.cy, E, Rg(g.y11, g.x11), Rg(g.y01, g.x01), !v))) : (a.moveTo(R, z), a.arc(0, 0, l, _, m, !v)) : a.moveTo(R, z), s > 1e-12 && w > 1e-12 ? N > 1e-12 ? (y = Wg(L, P, U, D, s, -N, v), g = Wg(R, z, O, q, s, -N, v), a.lineTo(y.cx + y.x01, y.cy + y.y01), N < k ? a.arc(y.cx, y.cy, N, Rg(y.y01, y.x01), Rg(g.y01, g.x01), !v) : (a.arc(y.cx, y.cy, N, Rg(y.y01, y.x01), Rg(y.y11, y.x11), !v), a.arc(0, 0, s, Rg(y.cy + y.y11, y.cx + y.x11), Rg(g.cy + g.y11, g.cx + g.x11), v), a.arc(g.cx, g.cy, N, Rg(g.y11, g.x11), Rg(g.y01, g.x01), !v))) : a.arc(0, 0, s, b, x, v) : a.lineTo(L, P)
          }
        else a.moveTo(0, 0);
        if (a.closePath(), c) return a = null, c + "" || null
      }
      return c.centroid = function () {
        var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
          r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Og / 2;
        return [zg(r) * e, Ug(r) * e]
      }, c.innerRadius = function (n) {
        return arguments.length ? (t = "function" == typeof n ? n : Cg(+n), c) : t
      }, c.outerRadius = function (t) {
        return arguments.length ? (n = "function" == typeof t ? t : Cg(+t), c) : n
      }, c.cornerRadius = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : Cg(+t), c) : e
      }, c.padRadius = function (t) {
        return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : Cg(+t), c) : r
      }, c.startAngle = function (t) {
        return arguments.length ? (i = "function" == typeof t ? t : Cg(+t), c) : i
      }, c.endAngle = function (t) {
        return arguments.length ? (o = "function" == typeof t ? t : Cg(+t), c) : o
      }, c.padAngle = function (t) {
        return arguments.length ? (u = "function" == typeof t ? t : Cg(+t), c) : u
      }, c.context = function (t) {
        return arguments.length ? (a = null == t ? null : t, c) : a
      }, c
    };

    function Gg(t) {
      this._context = t
    }
    Gg.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._point = 0
      },
      lineEnd: function () {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, n)
        }
      }
    };
    var Qg = function (t) {
      return new Gg(t)
    };

    function Jg(t) {
      return t[0]
    }

    function Kg(t) {
      return t[1]
    }
    var t_ = function () {
        var t = Jg,
          n = Kg,
          e = Cg(!0),
          r = null,
          i = Qg,
          o = null;

        function u(u) {
          var a, c, f, s = u.length,
            l = !1;
          for (null == r && (o = i(f = tu())), a = 0; a <= s; ++a) !(a < s && e(c = u[a], a, u)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()), l && o.point(+t(c, a, u), +n(c, a, u));
          if (f) return o = null, f + "" || null
        }
        return u.x = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : Cg(+n), u) : t
        }, u.y = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : Cg(+t), u) : n
        }, u.defined = function (t) {
          return arguments.length ? (e = "function" == typeof t ? t : Cg(!!t), u) : e
        }, u.curve = function (t) {
          return arguments.length ? (i = t, null != r && (o = i(r)), u) : i
        }, u.context = function (t) {
          return arguments.length ? (null == t ? r = o = null : o = i(r = t), u) : r
        }, u
      },
      n_ = function () {
        var t = Jg,
          n = null,
          e = Cg(0),
          r = Kg,
          i = Cg(!0),
          o = null,
          u = Qg,
          a = null;

        function c(c) {
          var f, s, l, h, d, p = c.length,
            v = !1,
            y = new Array(p),
            g = new Array(p);
          for (null == o && (a = u(d = tu())), f = 0; f <= p; ++f) {
            if (!(f < p && i(h = c[f], f, c)) === v)
              if (v = !v) s = f, a.areaStart(), a.lineStart();
              else {
                for (a.lineEnd(), a.lineStart(), l = f - 1; l >= s; --l) a.point(y[l], g[l]);
                a.lineEnd(), a.areaEnd()
              } v && (y[f] = +t(h, f, c), g[f] = +e(h, f, c), a.point(n ? +n(h, f, c) : y[f], r ? +r(h, f, c) : g[f]))
          }
          if (d) return a = null, d + "" || null
        }

        function f() {
          return t_().defined(i).curve(u).context(o)
        }
        return c.x = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : Cg(+e), n = null, c) : t
        }, c.x0 = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : Cg(+n), c) : t
        }, c.x1 = function (t) {
          return arguments.length ? (n = null == t ? null : "function" == typeof t ? t : Cg(+t), c) : n
        }, c.y = function (t) {
          return arguments.length ? (e = "function" == typeof t ? t : Cg(+t), r = null, c) : e
        }, c.y0 = function (t) {
          return arguments.length ? (e = "function" == typeof t ? t : Cg(+t), c) : e
        }, c.y1 = function (t) {
          return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : Cg(+t), c) : r
        }, c.lineX0 = c.lineY0 = function () {
          return f().x(t).y(e)
        }, c.lineY1 = function () {
          return f().x(t).y(r)
        }, c.lineX1 = function () {
          return f().x(n).y(e)
        }, c.defined = function (t) {
          return arguments.length ? (i = "function" == typeof t ? t : Cg(!!t), c) : i
        }, c.curve = function (t) {
          return arguments.length ? (u = t, null != o && (a = u(o)), c) : u
        }, c.context = function (t) {
          return arguments.length ? (null == t ? o = a = null : a = u(o = t), c) : o
        }, c
      },
      e_ = function (t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
      },
      r_ = function (t) {
        return t
      },
      i_ = function () {
        var t = r_,
          n = e_,
          e = null,
          r = Cg(0),
          i = Cg(Ig),
          o = Cg(0);

        function u(u) {
          var a, c, f, s, l, h = u.length,
            d = 0,
            p = new Array(h),
            v = new Array(h),
            y = +r.apply(this, arguments),
            g = Math.min(Ig, Math.max(-Ig, i.apply(this, arguments) - y)),
            _ = Math.min(Math.abs(g) / h, o.apply(this, arguments)),
            m = _ * (g < 0 ? -1 : 1);
          for (a = 0; a < h; ++a)(l = v[p[a] = a] = +t(u[a], a, u)) > 0 && (d += l);
          for (null != n ? p.sort((function (t, e) {
              return n(v[t], v[e])
            })) : null != e && p.sort((function (t, n) {
              return e(u[t], u[n])
            })), a = 0, f = d ? (g - h * m) / d : 0; a < h; ++a, y = s) c = p[a], s = y + ((l = v[c]) > 0 ? l * f : 0) + m, v[c] = {
            data: u[c],
            index: a,
            value: l,
            startAngle: y,
            endAngle: s,
            padAngle: _
          };
          return v
        }
        return u.value = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : Cg(+n), u) : t
        }, u.sortValues = function (t) {
          return arguments.length ? (n = t, e = null, u) : n
        }, u.sort = function (t) {
          return arguments.length ? (e = t, n = null, u) : e
        }, u.startAngle = function (t) {
          return arguments.length ? (r = "function" == typeof t ? t : Cg(+t), u) : r
        }, u.endAngle = function (t) {
          return arguments.length ? (i = "function" == typeof t ? t : Cg(+t), u) : i
        }, u.padAngle = function (t) {
          return arguments.length ? (o = "function" == typeof t ? t : Cg(+t), u) : o
        }, u
      },
      o_ = a_(Qg);

    function u_(t) {
      this._curve = t
    }

    function a_(t) {
      function n(n) {
        return new u_(t(n))
      }
      return n._curve = t, n
    }

    function c_(t) {
      var n = t.curve;
      return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
        return arguments.length ? n(a_(t)) : n()._curve
      }, t
    }
    u_.prototype = {
      areaStart: function () {
        this._curve.areaStart()
      },
      areaEnd: function () {
        this._curve.areaEnd()
      },
      lineStart: function () {
        this._curve.lineStart()
      },
      lineEnd: function () {
        this._curve.lineEnd()
      },
      point: function (t, n) {
        this._curve.point(n * Math.sin(t), n * -Math.cos(t))
      }
    };
    var f_ = function () {
        return c_(t_().curve(o_))
      },
      s_ = function () {
        var t = n_().curve(o_),
          n = t.curve,
          e = t.lineX0,
          r = t.lineX1,
          i = t.lineY0,
          o = t.lineY1;
        return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
          return c_(e())
        }, delete t.lineX0, t.lineEndAngle = function () {
          return c_(r())
        }, delete t.lineX1, t.lineInnerRadius = function () {
          return c_(i())
        }, delete t.lineY0, t.lineOuterRadius = function () {
          return c_(o())
        }, delete t.lineY1, t.curve = function (t) {
          return arguments.length ? n(a_(t)) : n()._curve
        }, t
      },
      l_ = function (t, n) {
        return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
      },
      h_ = Array.prototype.slice;

    function d_(t) {
      return t.source
    }

    function p_(t) {
      return t.target
    }

    function v_(t) {
      var n = d_,
        e = p_,
        r = Jg,
        i = Kg,
        o = null;

      function u() {
        var u, a = h_.call(arguments),
          c = n.apply(this, a),
          f = e.apply(this, a);
        if (o || (o = u = tu()), t(o, +r.apply(this, (a[0] = c, a)), +i.apply(this, a), +r.apply(this, (a[0] = f, a)), +i.apply(this, a)), u) return o = null, u + "" || null
      }
      return u.source = function (t) {
        return arguments.length ? (n = t, u) : n
      }, u.target = function (t) {
        return arguments.length ? (e = t, u) : e
      }, u.x = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : Cg(+t), u) : r
      }, u.y = function (t) {
        return arguments.length ? (i = "function" == typeof t ? t : Cg(+t), u) : i
      }, u.context = function (t) {
        return arguments.length ? (o = null == t ? null : t, u) : o
      }, u
    }

    function y_(t, n, e, r, i) {
      t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
    }

    function g_(t, n, e, r, i) {
      t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i)
    }

    function __(t, n, e, r, i) {
      var o = l_(n, e),
        u = l_(n, e = (e + i) / 2),
        a = l_(r, e),
        c = l_(r, i);
      t.moveTo(o[0], o[1]), t.bezierCurveTo(u[0], u[1], a[0], a[1], c[0], c[1])
    }

    function m_() {
      return v_(y_)
    }

    function x_() {
      return v_(g_)
    }

    function b_() {
      var t = v_(__);
      return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
    }
    var w_ = {
        draw: function (t, n) {
          var e = Math.sqrt(n / Og);
          t.moveTo(e, 0), t.arc(0, 0, e, 0, Ig)
        }
      },
      M_ = {
        draw: function (t, n) {
          var e = Math.sqrt(n / 5) / 2;
          t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
        }
      },
      T_ = Math.sqrt(1 / 3),
      S_ = 2 * T_,
      k_ = {
        draw: function (t, n) {
          var e = Math.sqrt(n / S_),
            r = e * T_;
          t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
        }
      },
      N_ = Math.sin(Og / 10) / Math.sin(7 * Og / 10),
      E_ = Math.sin(Ig / 10) * N_,
      C_ = -Math.cos(Ig / 10) * N_,
      A_ = {
        draw: function (t, n) {
          var e = Math.sqrt(.8908130915292852 * n),
            r = E_ * e,
            i = C_ * e;
          t.moveTo(0, -e), t.lineTo(r, i);
          for (var o = 1; o < 5; ++o) {
            var u = Ig * o / 5,
              a = Math.cos(u),
              c = Math.sin(u);
            t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i)
          }
          t.closePath()
        }
      },
      R_ = {
        draw: function (t, n) {
          var e = Math.sqrt(n),
            r = -e / 2;
          t.rect(r, r, e, e)
        }
      },
      z_ = Math.sqrt(3),
      L_ = {
        draw: function (t, n) {
          var e = -Math.sqrt(n / (3 * z_));
          t.moveTo(0, 2 * e), t.lineTo(-z_ * e, -e), t.lineTo(z_ * e, -e), t.closePath()
        }
      },
      P_ = Math.sqrt(3) / 2,
      U_ = 1 / Math.sqrt(12),
      D_ = 3 * (U_ / 2 + 1),
      O_ = {
        draw: function (t, n) {
          var e = Math.sqrt(n / D_),
            r = e / 2,
            i = e * U_,
            o = r,
            u = e * U_ + e,
            a = -o,
            c = u;
          t.moveTo(r, i), t.lineTo(o, u), t.lineTo(a, c), t.lineTo(-.5 * r - P_ * i, P_ * r + -.5 * i), t.lineTo(-.5 * o - P_ * u, P_ * o + -.5 * u), t.lineTo(-.5 * a - P_ * c, P_ * a + -.5 * c), t.lineTo(-.5 * r + P_ * i, -.5 * i - P_ * r), t.lineTo(-.5 * o + P_ * u, -.5 * u - P_ * o), t.lineTo(-.5 * a + P_ * c, -.5 * c - P_ * a), t.closePath()
        }
      },
      q_ = [w_, M_, k_, R_, A_, L_, O_],
      I_ = function () {
        var t = Cg(w_),
          n = Cg(64),
          e = null;

        function r() {
          var r;
          if (e || (e = r = tu()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null, r + "" || null
        }
        return r.type = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : Cg(n), r) : t
        }, r.size = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : Cg(+t), r) : n
        }, r.context = function (t) {
          return arguments.length ? (e = null == t ? null : t, r) : e
        }, r
      },
      j_ = function () {};

    function F_(t, n, e) {
      t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
    }

    function Y_(t) {
      this._context = t
    }
    Y_.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
      },
      lineEnd: function () {
        switch (this._point) {
          case 3:
            F_(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            F_(this, t, n)
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
      }
    };
    var B_ = function (t) {
      return new Y_(t)
    };

    function H_(t) {
      this._context = t
    }
    H_.prototype = {
      areaStart: j_,
      areaEnd: j_,
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
        }
      },
      point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._x2 = t, this._y2 = n;
            break;
          case 1:
            this._point = 2, this._x3 = t, this._y3 = n;
            break;
          case 2:
            this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
            break;
          default:
            F_(this, t, n)
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
      }
    };
    var $_ = function (t) {
      return new H_(t)
    };

    function X_(t) {
      this._context = t
    }
    X_.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
      },
      lineEnd: function () {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + t) / 6,
              r = (this._y0 + 4 * this._y1 + n) / 6;
            this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
            break;
          case 3:
            this._point = 4;
          default:
            F_(this, t, n)
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
      }
    };
    var V_ = function (t) {
      return new X_(t)
    };

    function W_(t, n) {
      this._basis = new Y_(t), this._beta = n
    }
    W_.prototype = {
      lineStart: function () {
        this._x = [], this._y = [], this._basis.lineStart()
      },
      lineEnd: function () {
        var t = this._x,
          n = this._y,
          e = t.length - 1;
        if (e > 0)
          for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * u), this._beta * n[c] + (1 - this._beta) * (o + r * a));
        this._x = this._y = null, this._basis.lineEnd()
      },
      point: function (t, n) {
        this._x.push(+t), this._y.push(+n)
      }
    };
    var Z_ = function t(n) {
      function e(t) {
        return 1 === n ? new Y_(t) : new W_(t, n)
      }
      return e.beta = function (n) {
        return t(+n)
      }, e
    }(.85);

    function G_(t, n, e) {
      t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
    }

    function Q_(t, n) {
      this._context = t, this._k = (1 - n) / 6
    }
    Q_.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            G_(this, this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2, this._x1 = t, this._y1 = n;
            break;
          case 2:
            this._point = 3;
          default:
            G_(this, t, n)
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var J_ = function t(n) {
      function e(t) {
        return new Q_(t, n)
      }
      return e.tension = function (n) {
        return t(+n)
      }, e
    }(0);

    function K_(t, n) {
      this._context = t, this._k = (1 - n) / 6
    }
    K_.prototype = {
      areaStart: j_,
      areaEnd: j_,
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
        }
      },
      point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._x3 = t, this._y3 = n;
            break;
          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
            break;
          case 2:
            this._point = 3, this._x5 = t, this._y5 = n;
            break;
          default:
            G_(this, t, n)
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var tm = function t(n) {
      function e(t) {
        return new K_(t, n)
      }
      return e.tension = function (n) {
        return t(+n)
      }, e
    }(0);

    function nm(t, n) {
      this._context = t, this._k = (1 - n) / 6
    }
    nm.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
      },
      lineEnd: function () {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            G_(this, t, n)
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var em = function t(n) {
      function e(t) {
        return new nm(t, n)
      }
      return e.tension = function (n) {
        return t(+n)
      }, e
    }(0);

    function rm(t, n, e) {
      var r = t._x1,
        i = t._y1,
        o = t._x2,
        u = t._y2;
      if (t._l01_a > 1e-12) {
        var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
          c = 3 * t._l01_a * (t._l01_a + t._l12_a);
        r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
      }
      if (t._l23_a > 1e-12) {
        var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
          s = 3 * t._l23_a * (t._l23_a + t._l12_a);
        o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s, u = (u * f + t._y1 * t._l23_2a - e * t._l12_2a) / s
      }
      t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2)
    }

    function im(t, n) {
      this._context = t, this._alpha = n
    }
    im.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function (t, n) {
        if (t = +t, n = +n, this._point) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
        }
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            rm(this, t, n)
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var om = function t(n) {
      function e(t) {
        return n ? new im(t, n) : new Q_(t, 0)
      }
      return e.alpha = function (n) {
        return t(+n)
      }, e
    }(.5);

    function um(t, n) {
      this._context = t, this._alpha = n
    }
    um.prototype = {
      areaStart: j_,
      areaEnd: j_,
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
        }
      },
      point: function (t, n) {
        if (t = +t, n = +n, this._point) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
        }
        switch (this._point) {
          case 0:
            this._point = 1, this._x3 = t, this._y3 = n;
            break;
          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
            break;
          case 2:
            this._point = 3, this._x5 = t, this._y5 = n;
            break;
          default:
            rm(this, t, n)
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var am = function t(n) {
      function e(t) {
        return n ? new um(t, n) : new K_(t, 0)
      }
      return e.alpha = function (n) {
        return t(+n)
      }, e
    }(.5);

    function cm(t, n) {
      this._context = t, this._alpha = n
    }
    cm.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
      },
      lineEnd: function () {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function (t, n) {
        if (t = +t, n = +n, this._point) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            rm(this, t, n)
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
      }
    };
    var fm = function t(n) {
      function e(t) {
        return n ? new cm(t, n) : new nm(t, 0)
      }
      return e.alpha = function (n) {
        return t(+n)
      }, e
    }(.5);

    function sm(t) {
      this._context = t
    }
    sm.prototype = {
      areaStart: j_,
      areaEnd: j_,
      lineStart: function () {
        this._point = 0
      },
      lineEnd: function () {
        this._point && this._context.closePath()
      },
      point: function (t, n) {
        t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
      }
    };
    var lm = function (t) {
      return new sm(t)
    };

    function hm(t) {
      return t < 0 ? -1 : 1
    }

    function dm(t, n, e) {
      var r = t._x1 - t._x0,
        i = n - t._x1,
        o = (t._y1 - t._y0) / (r || i < 0 && -0),
        u = (e - t._y1) / (i || r < 0 && -0),
        a = (o * i + u * r) / (r + i);
      return (hm(o) + hm(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0
    }

    function pm(t, n) {
      var e = t._x1 - t._x0;
      return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }

    function vm(t, n, e) {
      var r = t._x0,
        i = t._y0,
        o = t._x1,
        u = t._y1,
        a = (o - r) / 3;
      t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u)
    }

    function ym(t) {
      this._context = t
    }

    function gm(t) {
      this._context = new _m(t)
    }

    function _m(t) {
      this._context = t
    }

    function mm(t) {
      return new ym(t)
    }

    function xm(t) {
      return new gm(t)
    }

    function bm(t) {
      this._context = t
    }

    function wm(t) {
      var n, e, r = t.length - 1,
        i = new Array(r),
        o = new Array(r),
        u = new Array(r);
      for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
      for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
      for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (u[n] - i[n + 1]) / o[n];
      for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
      return [i, o]
    }
    ym.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            vm(this, this._t0, pm(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function (t, n) {
        var e = NaN;
        if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, vm(this, pm(this, e = dm(this, t, n)), e);
              break;
            default:
              vm(this, this._t0, e = dm(this, t, n))
          }
          this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
        }
      }
    }, (gm.prototype = Object.create(ym.prototype)).point = function (t, n) {
      ym.prototype.point.call(this, n, t)
    }, _m.prototype = {
      moveTo: function (t, n) {
        this._context.moveTo(n, t)
      },
      closePath: function () {
        this._context.closePath()
      },
      lineTo: function (t, n) {
        this._context.lineTo(n, t)
      },
      bezierCurveTo: function (t, n, e, r, i, o) {
        this._context.bezierCurveTo(n, t, r, e, o, i)
      }
    }, bm.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x = [], this._y = []
      },
      lineEnd: function () {
        var t = this._x,
          n = this._y,
          e = t.length;
        if (e)
          if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
          else
            for (var r = wm(t), i = wm(n), o = 0, u = 1; u < e; ++o, ++u) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[u], n[u]);
        (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function (t, n) {
        this._x.push(+t), this._y.push(+n)
      }
    };
    var Mm = function (t) {
      return new bm(t)
    };

    function Tm(t, n) {
      this._context = t, this._t = n
    }
    Tm.prototype = {
      areaStart: function () {
        this._line = 0
      },
      areaEnd: function () {
        this._line = NaN
      },
      lineStart: function () {
        this._x = this._y = NaN, this._point = 0
      },
      lineEnd: function () {
        0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
      },
      point: function (t, n) {
        switch (t = +t, n = +n, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
            else {
              var e = this._x * (1 - this._t) + t * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, n)
            }
        }
        this._x = t, this._y = n
      }
    };
    var Sm = function (t) {
      return new Tm(t, .5)
    };

    function km(t) {
      return new Tm(t, 0)
    }

    function Nm(t) {
      return new Tm(t, 1)
    }
    var Em = function (t, n) {
        if ((i = t.length) > 1)
          for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o)
            for (r = u, u = t[n[o]], e = 0; e < a; ++e) u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
      },
      Cm = function (t) {
        for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
        return e
      };

    function Am(t, n) {
      return t[n]
    }
    var Rm = function () {
        var t = Cg([]),
          n = Cm,
          e = Em,
          r = Am;

        function i(i) {
          var o, u, a = t.apply(this, arguments),
            c = i.length,
            f = a.length,
            s = new Array(f);
          for (o = 0; o < f; ++o) {
            for (var l, h = a[o], d = s[o] = new Array(c), p = 0; p < c; ++p) d[p] = l = [0, +r(i[p], h, p, i)], l.data = i[p];
            d.key = h
          }
          for (o = 0, u = n(s); o < f; ++o) s[u[o]].index = o;
          return e(s, u), s
        }
        return i.keys = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : Cg(h_.call(n)), i) : t
        }, i.value = function (t) {
          return arguments.length ? (r = "function" == typeof t ? t : Cg(+t), i) : r
        }, i.order = function (t) {
          return arguments.length ? (n = null == t ? Cm : "function" == typeof t ? t : Cg(h_.call(t)), i) : n
        }, i.offset = function (t) {
          return arguments.length ? (e = null == t ? Em : t, i) : e
        }, i
      },
      zm = function (t, n) {
        if ((r = t.length) > 0) {
          for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
            for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
            if (i)
              for (e = 0; e < r; ++e) t[e][o][1] /= i
          }
          Em(t, n)
        }
      },
      Lm = function (t, n) {
        if ((a = t.length) > 1)
          for (var e, r, i, o, u, a, c = 0, f = t[n[0]].length; c < f; ++c)
            for (o = u = 0, e = 0; e < a; ++e)(i = (r = t[n[e]][c])[1] - r[0]) >= 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = u, r[0] = u += i) : r[0] = o
      },
      Pm = function (t, n) {
        if ((e = t.length) > 0) {
          for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
            for (var u = 0, a = 0; u < e; ++u) a += t[u][r][1] || 0;
            i[r][1] += i[r][0] = -a / 2
          }
          Em(t, n)
        }
      },
      Um = function (t, n) {
        if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
          for (var e, r, i, o = 0, u = 1; u < r; ++u) {
            for (var a = 0, c = 0, f = 0; a < i; ++a) {
              for (var s = t[n[a]], l = s[u][1] || 0, h = (l - (s[u - 1][1] || 0)) / 2, d = 0; d < a; ++d) {
                var p = t[n[d]];
                h += (p[u][1] || 0) - (p[u - 1][1] || 0)
              }
              c += l, f += h * l
            }
            e[u - 1][1] += e[u - 1][0] = o, c && (o -= f / c)
          }
          e[u - 1][1] += e[u - 1][0] = o, Em(t, n)
        }
      },
      Dm = function (t) {
        var n = t.map(Om);
        return Cm(t).sort((function (t, e) {
          return n[t] - n[e]
        }))
      };

    function Om(t) {
      for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
      return e
    }
    var qm = function (t) {
        return Dm(t).reverse()
      },
      Im = function (t) {
        var n, e, r = t.length,
          i = t.map(Om),
          o = Cm(t).sort((function (t, n) {
            return i[n] - i[t]
          })),
          u = 0,
          a = 0,
          c = [],
          f = [];
        for (n = 0; n < r; ++n) e = o[n], u < a ? (u += i[e], c.push(e)) : (a += i[e], f.push(e));
        return f.reverse().concat(c)
      },
      jm = function (t) {
        return Cm(t).reverse()
      },
      Fm = function (t) {
        return function () {
          return t
        }
      };

    function Ym(t) {
      return t[0]
    }

    function Bm(t) {
      return t[1]
    }

    function Hm() {
      this._ = null
    }

    function $m(t) {
      t.U = t.C = t.L = t.R = t.P = t.N = null
    }

    function Xm(t, n) {
      var e = n,
        r = n.R,
        i = e.U;
      i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
    }

    function Vm(t, n) {
      var e = n,
        r = n.L,
        i = e.U;
      i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
    }

    function Wm(t) {
      for (; t.L;) t = t.L;
      return t
    }
    Hm.prototype = {
      constructor: Hm,
      insert: function (t, n) {
        var e, r, i;
        if (t) {
          if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
            for (t = t.R; t.L;) t = t.L;
            t.L = n
          } else t.R = n;
          e = t
        } else this._ ? (t = Wm(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
        for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (Xm(this, e), e = (t = e).U), e.C = !1, r.C = !0, Vm(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Vm(this, e), e = (t = e).U), e.C = !1, r.C = !0, Xm(this, r)), e = t.U;
        this._.C = !1
      },
      remove: function (t) {
        t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
        var n, e, r, i = t.U,
          o = t.L,
          u = t.R;
        if (e = o ? u ? Wm(u) : o : u, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && u ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== u ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = u, u.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r)
          if (t && t.C) t.C = !1;
          else {
            do {
              if (t === this._) break;
              if (t === i.L) {
                if ((n = i.R).C && (n.C = !1, i.C = !0, Xm(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                  n.R && n.R.C || (n.L.C = !1, n.C = !0, Vm(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, Xm(this, i), t = this._;
                  break
                }
              } else if ((n = i.L).C && (n.C = !1, i.C = !0, Vm(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                n.L && n.L.C || (n.R.C = !1, n.C = !0, Xm(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, Vm(this, i), t = this._;
                break
              }
              n.C = !0, t = i, i = i.U
            } while (!t.C);
            t && (t.C = !1)
          }
      }
    };
    var Zm = Hm;

    function Gm(t, n, e, r) {
      var i = [null, null],
        o = xx.push(i) - 1;
      return i.left = t, i.right = n, e && Jm(i, t, n, e), r && Jm(i, n, t, r), _x[t.index].halfedges.push(o), _x[n.index].halfedges.push(o), i
    }

    function Qm(t, n, e) {
      var r = [n, e];
      return r.left = t, r
    }

    function Jm(t, n, e, r) {
      t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
    }

    function Km(t, n, e, r, i) {
      var o, u = t[0],
        a = t[1],
        c = u[0],
        f = u[1],
        s = 0,
        l = 1,
        h = a[0] - c,
        d = a[1] - f;
      if (o = n - c, h || !(o > 0)) {
        if (o /= h, h < 0) {
          if (o < s) return;
          o < l && (l = o)
        } else if (h > 0) {
          if (o > l) return;
          o > s && (s = o)
        }
        if (o = r - c, h || !(o < 0)) {
          if (o /= h, h < 0) {
            if (o > l) return;
            o > s && (s = o)
          } else if (h > 0) {
            if (o < s) return;
            o < l && (l = o)
          }
          if (o = e - f, d || !(o > 0)) {
            if (o /= d, d < 0) {
              if (o < s) return;
              o < l && (l = o)
            } else if (d > 0) {
              if (o > l) return;
              o > s && (s = o)
            }
            if (o = i - f, d || !(o < 0)) {
              if (o /= d, d < 0) {
                if (o > l) return;
                o > s && (s = o)
              } else if (d > 0) {
                if (o < s) return;
                o < l && (l = o)
              }
              return !(s > 0 || l < 1) || (s > 0 && (t[0] = [c + s * h, f + s * d]), l < 1 && (t[1] = [c + l * h, f + l * d]), !0)
            }
          }
        }
      }
    }

    function tx(t, n, e, r, i) {
      var o = t[1];
      if (o) return !0;
      var u, a, c = t[0],
        f = t.left,
        s = t.right,
        l = f[0],
        h = f[1],
        d = s[0],
        p = s[1],
        v = (l + d) / 2,
        y = (h + p) / 2;
      if (p === h) {
        if (v < n || v >= r) return;
        if (l > d) {
          if (c) {
            if (c[1] >= i) return
          } else c = [v, e];
          o = [v, i]
        } else {
          if (c) {
            if (c[1] < e) return
          } else c = [v, i];
          o = [v, e]
        }
      } else if (a = y - (u = (l - d) / (p - h)) * v, u < -1 || u > 1)
        if (l > d) {
          if (c) {
            if (c[1] >= i) return
          } else c = [(e - a) / u, e];
          o = [(i - a) / u, i]
        } else {
          if (c) {
            if (c[1] < e) return
          } else c = [(i - a) / u, i];
          o = [(e - a) / u, e]
        }
      else if (h < p) {
        if (c) {
          if (c[0] >= r) return
        } else c = [n, u * n + a];
        o = [r, u * r + a]
      } else {
        if (c) {
          if (c[0] < n) return
        } else c = [r, u * r + a];
        o = [n, u * n + a]
      }
      return t[0] = c, t[1] = o, !0
    }

    function nx(t, n) {
      var e = t.site,
        r = n.left,
        i = n.right;
      return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
    }

    function ex(t, n) {
      return n[+(n.left !== t.site)]
    }

    function rx(t, n) {
      return n[+(n.left === t.site)]
    }
    var ix, ox = [];

    function ux() {
      $m(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function ax(t) {
      var n = t.P,
        e = t.N;
      if (n && e) {
        var r = n.site,
          i = t.site,
          o = e.site;
        if (r !== o) {
          var u = i[0],
            a = i[1],
            c = r[0] - u,
            f = r[1] - a,
            s = o[0] - u,
            l = o[1] - a,
            h = 2 * (c * l - f * s);
          if (!(h >= -wx)) {
            var d = c * c + f * f,
              p = s * s + l * l,
              v = (l * d - f * p) / h,
              y = (c * p - s * d) / h,
              g = ox.pop() || new ux;
            g.arc = t, g.site = i, g.x = v + u, g.y = (g.cy = y + a) + Math.sqrt(v * v + y * y), t.circle = g;
            for (var _ = null, m = mx._; m;)
              if (g.y < m.y || g.y === m.y && g.x <= m.x) {
                if (!m.L) {
                  _ = m.P;
                  break
                }
                m = m.L
              } else {
                if (!m.R) {
                  _ = m;
                  break
                }
                m = m.R
              } mx.insert(_, g), _ || (ix = g)
          }
        }
      }
    }

    function cx(t) {
      var n = t.circle;
      n && (n.P || (ix = n.N), mx.remove(n), ox.push(n), $m(n), t.circle = null)
    }
    var fx = [];

    function sx() {
      $m(this), this.edge = this.site = this.circle = null
    }

    function lx(t) {
      var n = fx.pop() || new sx;
      return n.site = t, n
    }

    function hx(t) {
      cx(t), gx.remove(t), fx.push(t), $m(t)
    }

    function dx(t) {
      var n = t.circle,
        e = n.x,
        r = n.cy,
        i = [e, r],
        o = t.P,
        u = t.N,
        a = [t];
      hx(t);
      for (var c = o; c.circle && Math.abs(e - c.circle.x) < bx && Math.abs(r - c.circle.cy) < bx;) o = c.P, a.unshift(c), hx(c), c = o;
      a.unshift(c), cx(c);
      for (var f = u; f.circle && Math.abs(e - f.circle.x) < bx && Math.abs(r - f.circle.cy) < bx;) u = f.N, a.push(f), hx(f), f = u;
      a.push(f), cx(f);
      var s, l = a.length;
      for (s = 1; s < l; ++s) f = a[s], c = a[s - 1], Jm(f.edge, c.site, f.site, i);
      c = a[0], (f = a[l - 1]).edge = Gm(c.site, f.site, null, i), ax(c), ax(f)
    }

    function px(t) {
      for (var n, e, r, i, o = t[0], u = t[1], a = gx._; a;)
        if ((r = vx(a, u) - o) > bx) a = a.L;
        else {
          if (!((i = o - yx(a, u)) > bx)) {
            r > -bx ? (n = a.P, e = a) : i > -bx ? (n = a, e = a.N) : n = e = a;
            break
          }
          if (!a.R) {
            n = a;
            break
          }
          a = a.R
        }!
      function (t) {
        _x[t.index] = {
          site: t,
          halfedges: []
        }
      }(t);
      var c = lx(t);
      if (gx.insert(n, c), n || e) {
        if (n === e) return cx(n), e = lx(n.site), gx.insert(c, e), c.edge = e.edge = Gm(n.site, c.site), ax(n), void ax(e);
        if (e) {
          cx(n), cx(e);
          var f = n.site,
            s = f[0],
            l = f[1],
            h = t[0] - s,
            d = t[1] - l,
            p = e.site,
            v = p[0] - s,
            y = p[1] - l,
            g = 2 * (h * y - d * v),
            _ = h * h + d * d,
            m = v * v + y * y,
            x = [(y * _ - d * m) / g + s, (h * m - v * _) / g + l];
          Jm(e.edge, f, p, x), c.edge = Gm(f, t, null, x), e.edge = Gm(t, p, null, x), ax(n), ax(e)
        } else c.edge = Gm(n.site, c.site)
      }
    }

    function vx(t, n) {
      var e = t.site,
        r = e[0],
        i = e[1],
        o = i - n;
      if (!o) return r;
      var u = t.P;
      if (!u) return -1 / 0;
      var a = (e = u.site)[0],
        c = e[1],
        f = c - n;
      if (!f) return a;
      var s = a - r,
        l = 1 / o - 1 / f,
        h = s / f;
      return l ? (-h + Math.sqrt(h * h - 2 * l * (s * s / (-2 * f) - c + f / 2 + i - o / 2))) / l + r : (r + a) / 2
    }

    function yx(t, n) {
      var e = t.N;
      if (e) return vx(e, n);
      var r = t.site;
      return r[1] === n ? r[0] : 1 / 0
    }
    var gx, _x, mx, xx, bx = 1e-6,
      wx = 1e-12;

    function Mx(t, n) {
      return n[1] - t[1] || n[0] - t[0]
    }

    function Tx(t, n) {
      var e, r, i, o = t.sort(Mx).pop();
      for (xx = [], _x = new Array(t.length), gx = new Zm, mx = new Zm;;)
        if (i = ix, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === e && o[1] === r || (px(o), e = o[0], r = o[1]), o = t.pop();
        else {
          if (!i) break;
          dx(i.arc)
        } if (function () {
          for (var t, n, e, r, i = 0, o = _x.length; i < o; ++i)
            if ((t = _x[i]) && (r = (n = t.halfedges).length)) {
              var u = new Array(r),
                a = new Array(r);
              for (e = 0; e < r; ++e) u[e] = e, a[e] = nx(t, xx[n[e]]);
              for (u.sort((function (t, n) {
                  return a[n] - a[t]
                })), e = 0; e < r; ++e) a[e] = n[u[e]];
              for (e = 0; e < r; ++e) n[e] = a[e]
            }
        }(), n) {
        var u = +n[0][0],
          a = +n[0][1],
          c = +n[1][0],
          f = +n[1][1];
        ! function (t, n, e, r) {
          for (var i, o = xx.length; o--;) tx(i = xx[o], t, n, e, r) && Km(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > bx || Math.abs(i[0][1] - i[1][1]) > bx) || delete xx[o]
        }(u, a, c, f),
        function (t, n, e, r) {
          var i, o, u, a, c, f, s, l, h, d, p, v, y = _x.length,
            g = !0;
          for (i = 0; i < y; ++i)
            if (o = _x[i]) {
              for (u = o.site, a = (c = o.halfedges).length; a--;) xx[c[a]] || c.splice(a, 1);
              for (a = 0, f = c.length; a < f;) p = (d = rx(o, xx[c[a]]))[0], v = d[1], l = (s = ex(o, xx[c[++a % f]]))[0], h = s[1], (Math.abs(p - l) > bx || Math.abs(v - h) > bx) && (c.splice(a, 0, xx.push(Qm(u, d, Math.abs(p - t) < bx && r - v > bx ? [t, Math.abs(l - t) < bx ? h : r] : Math.abs(v - r) < bx && e - p > bx ? [Math.abs(h - r) < bx ? l : e, r] : Math.abs(p - e) < bx && v - n > bx ? [e, Math.abs(l - e) < bx ? h : n] : Math.abs(v - n) < bx && p - t > bx ? [Math.abs(h - n) < bx ? l : t, n] : null)) - 1), ++f);
              f && (g = !1)
            } if (g) {
            var _, m, x, b = 1 / 0;
            for (i = 0, g = null; i < y; ++i)(o = _x[i]) && (x = (_ = (u = o.site)[0] - t) * _ + (m = u[1] - n) * m) < b && (b = x, g = o);
            if (g) {
              var w = [t, n],
                M = [t, r],
                T = [e, r],
                S = [e, n];
              g.halfedges.push(xx.push(Qm(u = g.site, w, M)) - 1, xx.push(Qm(u, M, T)) - 1, xx.push(Qm(u, T, S)) - 1, xx.push(Qm(u, S, w)) - 1)
            }
          }
          for (i = 0; i < y; ++i)(o = _x[i]) && (o.halfedges.length || delete _x[i])
        }(u, a, c, f)
      }
      this.edges = xx, this.cells = _x, gx = mx = xx = _x = null
    }
    Tx.prototype = {
      constructor: Tx,
      polygons: function () {
        var t = this.edges;
        return this.cells.map((function (n) {
          var e = n.halfedges.map((function (e) {
            return ex(n, t[e])
          }));
          return e.data = n.site.data, e
        }))
      },
      triangles: function () {
        var t = [],
          n = this.edges;
        return this.cells.forEach((function (e, r) {
          if (o = (i = e.halfedges).length)
            for (var i, o, u, a, c, f, s = e.site, l = -1, h = n[i[o - 1]], d = h.left === s ? h.right : h.left; ++l < o;) u = d, d = (h = n[i[l]]).left === s ? h.right : h.left, u && d && r < u.index && r < d.index && (c = u, f = d, ((a = s)[0] - f[0]) * (c[1] - a[1]) - (a[0] - c[0]) * (f[1] - a[1]) < 0) && t.push([s.data, u.data, d.data])
        })), t
      },
      links: function () {
        return this.edges.filter((function (t) {
          return t.right
        })).map((function (t) {
          return {
            source: t.left.data,
            target: t.right.data
          }
        }))
      },
      find: function (t, n, e) {
        for (var r, i, o = this, u = o._found || 0, a = o.cells.length; !(i = o.cells[u]);)
          if (++u >= a) return null;
        var c = t - i.site[0],
          f = n - i.site[1],
          s = c * c + f * f;
        do {
          i = o.cells[r = u], u = null, i.halfedges.forEach((function (e) {
            var r = o.edges[e],
              a = r.left;
            if (a !== i.site && a || (a = r.right)) {
              var c = t - a[0],
                f = n - a[1],
                l = c * c + f * f;
              l < s && (s = l, u = a.index)
            }
          }))
        } while (null !== u);
        return o._found = r, null == e || s <= e * e ? i.site : null
      }
    };
    var Sx = function () {
        var t = Ym,
          n = Bm,
          e = null;

        function r(r) {
          return new Tx(r.map((function (e, i) {
            var o = [Math.round(t(e, i, r) / bx) * bx, Math.round(n(e, i, r) / bx) * bx];
            return o.index = i, o.data = e, o
          })), e)
        }
        return r.polygons = function (t) {
          return r(t).polygons()
        }, r.links = function (t) {
          return r(t).links()
        }, r.triangles = function (t) {
          return r(t).triangles()
        }, r.x = function (n) {
          return arguments.length ? (t = "function" == typeof n ? n : Fm(+n), r) : t
        }, r.y = function (t) {
          return arguments.length ? (n = "function" == typeof t ? t : Fm(+t), r) : n
        }, r.extent = function (t) {
          return arguments.length ? (e = null == t ? null : [
            [+t[0][0], +t[0][1]],
            [+t[1][0], +t[1][1]]
          ], r) : e && [
            [e[0][0], e[0][1]],
            [e[1][0], e[1][1]]
          ]
        }, r.size = function (t) {
          return arguments.length ? (e = null == t ? null : [
            [0, 0],
            [+t[0], +t[1]]
          ], r) : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]]
        }, r
      },
      kx = function (t) {
        return function () {
          return t
        }
      };

    function Nx(t, n, e) {
      this.target = t, this.type = n, this.transform = e
    }

    function Ex(t, n, e) {
      this.k = t, this.x = n, this.y = e
    }
    Ex.prototype = {
      constructor: Ex,
      scale: function (t) {
        return 1 === t ? this : new Ex(this.k * t, this.x, this.y)
      },
      translate: function (t, n) {
        return 0 === t & 0 === n ? this : new Ex(this.k, this.x + this.k * t, this.y + this.k * n)
      },
      apply: function (t) {
        return [t[0] * this.k + this.x, t[1] * this.k + this.y]
      },
      applyX: function (t) {
        return t * this.k + this.x
      },
      applyY: function (t) {
        return t * this.k + this.y
      },
      invert: function (t) {
        return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
      },
      invertX: function (t) {
        return (t - this.x) / this.k
      },
      invertY: function (t) {
        return (t - this.y) / this.k
      },
      rescaleX: function (t) {
        return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
      },
      rescaleY: function (t) {
        return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
      },
      toString: function () {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
      }
    };
    var Cx = new Ex(1, 0, 0);

    function Ax(t) {
      return t.__zoom || Cx
    }

    function Rx() {
      vn.stopImmediatePropagation()
    }
    Ax.prototype = Ex.prototype;
    var zx = function () {
      vn.preventDefault(), vn.stopImmediatePropagation()
    };

    function Lx() {
      return !vn.button
    }

    function Px() {
      var t, n, e = this;
      return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [
        [0, 0],
        [t, n]
      ]
    }

    function Ux() {
      return this.__zoom || Cx
    }

    function Dx() {
      return -vn.deltaY * (vn.deltaMode ? 120 : 1) / 500
    }

    function Ox() {
      return "ontouchstart" in this
    }

    function qx(t, n, e) {
      var r = t.invertX(n[0][0]) - e[0][0],
        i = t.invertX(n[1][0]) - e[1][0],
        o = t.invertY(n[0][1]) - e[0][1],
        u = t.invertY(n[1][1]) - e[1][1];
      return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u))
    }
    var Ix = function () {
      var t, n, e = Lx,
        r = Px,
        i = qx,
        o = Dx,
        u = Ox,
        a = [0, 1 / 0],
        c = [
          [-1 / 0, -1 / 0],
          [1 / 0, 1 / 0]
        ],
        f = 250,
        s = br,
        l = [],
        h = dt("start", "zoom", "end"),
        d = 0;

      function p(t) {
        t.property("__zoom", Ux).on("wheel.zoom", b).on("mousedown.zoom", w).on("dblclick.zoom", M).filter(u).on("touchstart.zoom", T).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
      }

      function v(t, n) {
        return (n = Math.max(a[0], Math.min(a[1], n))) === t.k ? t : new Ex(n, t.x, t.y)
      }

      function y(t, n, e) {
        var r = n[0] - e[0] * t.k,
          i = n[1] - e[1] * t.k;
        return r === t.x && i === t.y ? t : new Ex(t.k, r, i)
      }

      function g(t) {
        return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
      }

      function _(t, n, e) {
        t.on("start.zoom", (function () {
          m(this, arguments).start()
        })).on("interrupt.zoom end.zoom", (function () {
          m(this, arguments).end()
        })).tween("zoom", (function () {
          var t = this,
            i = arguments,
            o = m(t, i),
            u = r.apply(t, i),
            a = e || g(u),
            c = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
            f = t.__zoom,
            l = "function" == typeof n ? n.apply(t, i) : n,
            h = s(f.invert(a).concat(c / f.k), l.invert(a).concat(c / l.k));
          return function (t) {
            if (1 === t) t = l;
            else {
              var n = h(t),
                e = c / n[2];
              t = new Ex(e, a[0] - n[0] * e, a[1] - n[1] * e)
            }
            o.zoom(null, t)
          }
        }))
      }

      function m(t, n) {
        for (var e, r = 0, i = l.length; r < i; ++r)
          if ((e = l[r]).that === t) return e;
        return new x(t, n)
      }

      function x(t, n) {
        this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = r.apply(t, n)
      }

      function b() {
        if (e.apply(this, arguments)) {
          var t = m(this, arguments),
            n = this.__zoom,
            r = Math.max(a[0], Math.min(a[1], n.k * Math.pow(2, o.apply(this, arguments)))),
            u = Dn(this);
          if (t.wheel) t.mouse[0][0] === u[0] && t.mouse[0][1] === u[1] || (t.mouse[1] = n.invert(t.mouse[0] = u)), clearTimeout(t.wheel);
          else {
            if (n.k === r) return;
            t.mouse = [u, n.invert(u)], oi(this), t.start()
          }
          zx(), t.wheel = setTimeout(f, 150), t.zoom("mouse", i(y(v(n, r), t.mouse[0], t.mouse[1]), t.extent, c))
        }

        function f() {
          t.wheel = null, t.end()
        }
      }

      function w() {
        if (!n && e.apply(this, arguments)) {
          var t = m(this, arguments),
            r = Cn(vn.view).on("mousemove.zoom", f, !0).on("mouseup.zoom", s, !0),
            o = Dn(this),
            u = vn.clientX,
            a = vn.clientY;
          Yn(vn.view), Rx(), t.mouse = [o, this.__zoom.invert(o)], oi(this), t.start()
        }

        function f() {
          if (zx(), !t.moved) {
            var n = vn.clientX - u,
              e = vn.clientY - a;
            t.moved = n * n + e * e > d
          }
          t.zoom("mouse", i(y(t.that.__zoom, t.mouse[0] = Dn(t.that), t.mouse[1]), t.extent, c))
        }

        function s() {
          r.on("mousemove.zoom mouseup.zoom", null), Bn(vn.view, t.moved), zx(), t.end()
        }
      }

      function M() {
        if (e.apply(this, arguments)) {
          var t = this.__zoom,
            n = Dn(this),
            o = t.invert(n),
            u = t.k * (vn.shiftKey ? .5 : 2),
            a = i(y(v(t, u), n, o), r.apply(this, arguments), c);
          zx(), f > 0 ? Cn(this).transition().duration(f).call(_, a, n) : Cn(this).call(p.transform, a)
        }
      }

      function T() {
        if (e.apply(this, arguments)) {
          var n, r, i, o, u = m(this, arguments),
            a = vn.changedTouches,
            c = a.length;
          for (Rx(), r = 0; r < c; ++r) i = a[r], o = [o = qn(this, a, i.identifier), this.__zoom.invert(o), i.identifier], u.touch0 ? u.touch1 || (u.touch1 = o) : (u.touch0 = o, n = !0);
          if (t && (t = clearTimeout(t), !u.touch1)) return u.end(), void((o = Cn(this).on("dblclick.zoom")) && o.apply(this, arguments));
          n && (t = setTimeout((function () {
            t = null
          }), 500), oi(this), u.start())
        }
      }

      function S() {
        var n, e, r, o, u = m(this, arguments),
          a = vn.changedTouches,
          f = a.length;
        for (zx(), t && (t = clearTimeout(t)), n = 0; n < f; ++n) e = a[n], r = qn(this, a, e.identifier), u.touch0 && u.touch0[2] === e.identifier ? u.touch0[0] = r : u.touch1 && u.touch1[2] === e.identifier && (u.touch1[0] = r);
        if (e = u.that.__zoom, u.touch1) {
          var s = u.touch0[0],
            l = u.touch0[1],
            h = u.touch1[0],
            d = u.touch1[1],
            p = (p = h[0] - s[0]) * p + (p = h[1] - s[1]) * p,
            g = (g = d[0] - l[0]) * g + (g = d[1] - l[1]) * g;
          e = v(e, Math.sqrt(p / g)), r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2], o = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2]
        } else {
          if (!u.touch0) return;
          r = u.touch0[0], o = u.touch0[1]
        }
        u.zoom("touch", i(y(e, r, o), u.extent, c))
      }

      function k() {
        var t, e, r = m(this, arguments),
          i = vn.changedTouches,
          o = i.length;
        for (Rx(), n && clearTimeout(n), n = setTimeout((function () {
            n = null
          }), 500), t = 0; t < o; ++t) e = i[t], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
        r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end()
      }
      return p.transform = function (t, n) {
        var e = t.selection ? t.selection() : t;
        e.property("__zoom", Ux), t !== e ? _(t, n) : e.interrupt().each((function () {
          m(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
        }))
      }, p.scaleBy = function (t, n) {
        p.scaleTo(t, (function () {
          var t = this.__zoom.k,
            e = "function" == typeof n ? n.apply(this, arguments) : n;
          return t * e
        }))
      }, p.scaleTo = function (t, n) {
        p.transform(t, (function () {
          var t = r.apply(this, arguments),
            e = this.__zoom,
            o = g(t),
            u = e.invert(o),
            a = "function" == typeof n ? n.apply(this, arguments) : n;
          return i(y(v(e, a), o, u), t, c)
        }))
      }, p.translateBy = function (t, n, e) {
        p.transform(t, (function () {
          return i(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), r.apply(this, arguments), c)
        }))
      }, p.translateTo = function (t, n, e) {
        p.transform(t, (function () {
          var t = r.apply(this, arguments),
            o = this.__zoom,
            u = g(t);
          return i(Cx.translate(u[0], u[1]).scale(o.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, c)
        }))
      }, x.prototype = {
        start: function () {
          return 1 == ++this.active && (this.index = l.push(this) - 1, this.emit("start")), this
        },
        zoom: function (t, n) {
          return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
        },
        end: function () {
          return 0 == --this.active && (l.splice(this.index, 1), this.index = -1, this.emit("end")), this
        },
        emit: function (t) {
          bn(new Nx(p, t, this.that.__zoom), h.apply, h, [t, this.that, this.args])
        }
      }, p.wheelDelta = function (t) {
        return arguments.length ? (o = "function" == typeof t ? t : kx(+t), p) : o
      }, p.filter = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : kx(!!t), p) : e
      }, p.touchable = function (t) {
        return arguments.length ? (u = "function" == typeof t ? t : kx(!!t), p) : u
      }, p.extent = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : kx([
          [+t[0][0], +t[0][1]],
          [+t[1][0], +t[1][1]]
        ]), p) : r
      }, p.scaleExtent = function (t) {
        return arguments.length ? (a[0] = +t[0], a[1] = +t[1], p) : [a[0], a[1]]
      }, p.translateExtent = function (t) {
        return arguments.length ? (c[0][0] = +t[0][0], c[1][0] = +t[1][0], c[0][1] = +t[0][1], c[1][1] = +t[1][1], p) : [
          [c[0][0], c[0][1]],
          [c[1][0], c[1][1]]
        ]
      }, p.constrain = function (t) {
        return arguments.length ? (i = t, p) : i
      }, p.duration = function (t) {
        return arguments.length ? (f = +t, p) : f
      }, p.interpolate = function (t) {
        return arguments.length ? (s = t, p) : s
      }, p.on = function () {
        var t = h.on.apply(h, arguments);
        return t === h ? p : t
      }, p.clickDistance = function (t) {
        return arguments.length ? (d = (t = +t) * t, p) : Math.sqrt(d)
      }, p
    };
    const jx = /translate\((-?\d+)px, ?(-?\d+)px\)/i,
      Fx = /scale\((\S*)\)/i,
      Yx = "curve",
      Bx = "straight",
      Hx = {
        VERTICAL: "vertical",
        HORIZONTAL: "horizontal"
      };

    function $x() {
      const t = [];
      for (let n = 0; n < 36; n++) t[n] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
      return t[14] = "4", t[19] = "0123456789abcdef".substr(3 & t[19] | 8, 1), t[8] = t[13] = t[18] = t[23] = "-", t.join("")
    }

    function Xx({
      x: t,
      y: n
    }) {
      return {
        x: n,
        y: t
      }
    }
    var Vx = {
      name: "vue-tree",
      props: {
        config: {
          type: Object,
          default: () => ({
            nodeWidth: 100,
            nodeHeight: 100,
            levelHeight: 200
          })
        },
        linkStyle: {
          type: String,
          default: Bx
        },
        direction: {
          type: String,
          default: Hx.VERTICAL
        },
        dataset: {
          type: Object,
          required: !0
        }
      },
      data: () => ({
        d3: r,
        colors: "568FE1",
        nodeDataList: [],
        linkDataList: [],
        initTransformX: 0,
        initTransformY: 0,
        DIRECTION: Hx,
        currentScale: 1
      }),
      computed: {
        initialTransformStyle() {
          return {
            transform: `scale(1) translate(${this.initTransformX}px, ${this.initTransformY}px)`,
            transformOrigin: "center"
          }
        }
      },
      created() {
        this.addUniqueKey(this.dataset)
      },
      mounted() {
        this.init()
      },
      methods: {
        init() {
          this.draw(), this.enableDrag(), this.initTransform()
        },
        zoomIn() {
          let t = 1.2;
          const n = this.$refs.domContainer.style.transform.match(Fx);
          if (n && n.length > 0) {
            t *= parseFloat(n[1])
          }
          this.setScale(t)
        },
        zoomOut() {
          let t = 1 / 1.2;
          const n = this.$refs.domContainer.style.transform.match(Fx);
          if (n && n.length > 0) {
            t = parseFloat(n[1]) / 1.2
          }
          this.setScale(t)
        },
        restoreScale() {
          this.setScale(1)
        },
        setScale(t) {
          if ("number" != typeof t) return;
          let n = this.getTranslate(),
            e = `translate(${n[0]}px, ${n[1]}px)`;
          this.$refs.svg.style.transform = `scale(${t}) ` + e, this.$refs.domContainer.style.transform = `scale(${t}) ` + e, this.currentScale = t
        },
        getTranslate() {
          let t = this.$refs.svg.style.transform.match(jx);
          return null === t ? [null, null] : [parseInt(t[1]), parseInt(t[2])]
        },
        isVertical() {
          return this.direction === Hx.VERTICAL
        },
        addUniqueKey(t) {
          const n = [t];
          for (; 0 !== n.length;) {
            const t = n.pop();
            t._key = $x(), t.children && n.push(...t.children)
          }
          return t
        },
        initTransform() {
          const t = this.$refs.container.offsetWidth,
            n = this.$refs.container.offsetHeight;
          this.isVertical() ? (this.initTransformX = Math.floor(t / 2), this.initTransformY = Math.floor(this.config.nodeHeight)) : (this.initTransformX = Math.floor(this.config.nodeWidth), this.initTransformY = Math.floor(n / 2))
        },
        generateLinkPath(t) {
          const n = this;
          if (this.linkStyle === Yx) {
            const e = this.isVertical() ? x_() : m_();
            return e.x((function (t) {
              return t.x
            })).y((function (t) {
              return t.y
            })).source((function (t) {
              const e = {
                x: t.source.x,
                y: t.source.y
              };
              return n.direction === n.DIRECTION.VERTICAL ? e : Xx(e)
            })).target((function (t) {
              const e = {
                x: t.target.x,
                y: t.target.y
              };
              return n.direction === n.DIRECTION.VERTICAL ? e : Xx(e)
            })), e(t)
          }
          if (this.linkStyle === Bx) {
            const n = tu();
            let e = {
                x: t.source.x,
                y: t.source.y
              },
              r = {
                x: t.target.x,
                y: t.target.y
              };
            this.isVertical() || (e = Xx(e), r = Xx(r));
            const i = r.x - e.x,
              o = r.y - e.y,
              u = this.isVertical() ? {
                x: e.x,
                y: e.y + o / 2
              } : {
                x: e.x + i / 2,
                y: e.y
              },
              a = this.isVertical() ? {
                x: r.x,
                y: e.y + o / 2
              } : {
                x: e.x + i / 2,
                y: r.y
              };
            return n.moveTo(e.x, e.y), n.lineTo(u.x, u.y), n.lineTo(a.x, a.y), n.lineTo(r.x, r.y), n.toString()
          }
        },
        draw() {
          const [t, n] = this.buildTree(this.dataset);
          this.linkDataList = n, this.svg = this.d3.select(this.$refs.svg);
          const e = this,
            r = this.svg.selectAll(".link").data(n, t => `${t.source.data._key}-${t.target.data._key}`);
          r.enter().append("path").style("opacity", 0).transition().duration(800).ease(Oi).style("opacity", 1).attr("class", "link").attr("d", (function (t, n) {
            return e.generateLinkPath(t)
          })), r.transition().duration(800).ease(Oi).attr("d", (function (t) {
            return e.generateLinkPath(t)
          })), r.exit().transition().duration(400).ease(Oi).style("opacity", 0).remove(), this.nodeDataList = t
        },
        buildTree(t) {
          const n = this.d3.tree().nodeSize([this.config.nodeWidth, this.config.levelHeight])(this.d3.hierarchy(t));
          return [n.descendants(), n.links()]
        },
        enableDrag() {
          const t = this.$refs.svg,
            n = this.$refs.container;
          let e = 0,
            r = 0,
            i = !1,
            o = "";
          n.onmousedown = n => {
            o = t.style.transform, e = n.clientX, r = n.clientY, i = !0
          }, n.onmousemove = n => {
            if (!i) return;
            const u = o;
            let a = 0,
              c = 0;
            if (u) {
              const t = u.match(jx);
              if (null !== t && 0 !== t.length) {
                const [n, e] = t.slice(1);
                a = parseInt(n), c = parseInt(e)
              }
            }
            let f = `translate(${Math.floor((n.clientX-e)/this.currentScale)+a}px, ${Math.floor((n.clientY-r)/this.currentScale)+c}px)`;
            u && (f = u.replace(jx, f)), t.style.transform = f, this.$refs.domContainer.style.transform = f
          }, n.onmouseup = t => {
            e = 0, r = 0, i = !1
          }
        },
        onClickNode(t) {
          const n = this.nodeDataList[t];
          n.data.children ? (n.data._children = n.data.children, n.data.children = null, n.data._collapsed = !0) : (n.data.children = n.data._children, n.data._children = null, n.data._collapsed = !1), this.draw()
        },
        formatDimension: t => "number" == typeof t ? t + "px" : -1 !== t.indexOf("px") ? t : t + "px",
        parseDimensionNumber: t => "number" == typeof t ? t : parseInt(t.replace("px", ""))
      },
      watch: {
        dataset() {
          this.draw()
        }
      }
    };
    e(4), e(7);
    var Wx = function (t, n, e, r, i, o, u, a) {
      var c, f = "function" == typeof t ? t.options : t;
      if (n && (f.render = n, f.staticRenderFns = e, f._compiled = !0), r && (f.functional = !0), o && (f._scopeId = "data-v-" + o), u ? (c = function (t) {
          (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(u)
        }, f._ssrRegister = c) : i && (c = a ? function () {
          i.call(this, (f.functional ? this.parent : this).$root.$options.shadowRoot)
        } : i), c)
        if (f.functional) {
          f._injectStyles = c;
          var s = f.render;
          f.render = function (t, n) {
            return c.call(n), s(t, n)
          }
        } else {
          var l = f.beforeCreate;
          f.beforeCreate = l ? [].concat(l, c) : [c]
        } return {
        exports: t,
        options: f
      }
    }(Vx, i, [], !1, null, "56c15873", null);
    Wx.options.__file = "src/vue-tree/VueTree.vue";
    var Zx = Wx.exports;
    n.default = Zx
  }])
}));
