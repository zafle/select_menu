import { jsx as M, Fragment as Ue, jsxs as ge } from "react/jsx-runtime";
import { createContext as ve, useState as oe, useContext as he, useRef as Fe, useEffect as ie } from "react";
import './main.css';const $e = ve({
  selected: {
    id: "",
    text: "",
    value: "",
    index: ""
  },
  // selected option
  isOpen: !1,
  // dropdown is open
  clearSelected: () => {
  },
  defineSelected: () => {
  },
  toggleIsOpen: () => {
  }
});
function Ne(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ne = { exports: {} }, re = { exports: {} }, E = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function He() {
  if (Ce) return E;
  Ce = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, c = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, d = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, A = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, V = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, z = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
  function k(i) {
    if (typeof i == "object" && i !== null) {
      var j = i.$$typeof;
      switch (j) {
        case n:
          switch (i = i.type, i) {
            case b:
            case y:
            case s:
            case l:
            case d:
            case g:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case p:
                case f:
                case V:
                case $:
                case o:
                  return i;
                default:
                  return j;
              }
          }
        case c:
          return j;
      }
    }
  }
  function I(i) {
    return k(i) === y;
  }
  return E.AsyncMode = b, E.ConcurrentMode = y, E.ContextConsumer = p, E.ContextProvider = o, E.Element = n, E.ForwardRef = f, E.Fragment = s, E.Lazy = V, E.Memo = $, E.Portal = c, E.Profiler = l, E.StrictMode = d, E.Suspense = g, E.isAsyncMode = function(i) {
    return I(i) || k(i) === b;
  }, E.isConcurrentMode = I, E.isContextConsumer = function(i) {
    return k(i) === p;
  }, E.isContextProvider = function(i) {
    return k(i) === o;
  }, E.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === n;
  }, E.isForwardRef = function(i) {
    return k(i) === f;
  }, E.isFragment = function(i) {
    return k(i) === s;
  }, E.isLazy = function(i) {
    return k(i) === V;
  }, E.isMemo = function(i) {
    return k(i) === $;
  }, E.isPortal = function(i) {
    return k(i) === c;
  }, E.isProfiler = function(i) {
    return k(i) === l;
  }, E.isStrictMode = function(i) {
    return k(i) === d;
  }, E.isSuspense = function(i) {
    return k(i) === g;
  }, E.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === s || i === y || i === l || i === d || i === g || i === A || typeof i == "object" && i !== null && (i.$$typeof === V || i.$$typeof === $ || i.$$typeof === o || i.$$typeof === p || i.$$typeof === f || i.$$typeof === z || i.$$typeof === B || i.$$typeof === G || i.$$typeof === P);
  }, E.typeOf = k, E;
}
var _ = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Ke() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, c = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, d = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, b = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, A = e ? Symbol.for("react.suspense_list") : 60120, $ = e ? Symbol.for("react.memo") : 60115, V = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, z = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
    function k(a) {
      return typeof a == "string" || typeof a == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      a === s || a === y || a === l || a === d || a === g || a === A || typeof a == "object" && a !== null && (a.$$typeof === V || a.$$typeof === $ || a.$$typeof === o || a.$$typeof === p || a.$$typeof === f || a.$$typeof === z || a.$$typeof === B || a.$$typeof === G || a.$$typeof === P);
    }
    function I(a) {
      if (typeof a == "object" && a !== null) {
        var L = a.$$typeof;
        switch (L) {
          case n:
            var te = a.type;
            switch (te) {
              case b:
              case y:
              case s:
              case l:
              case d:
              case g:
                return te;
              default:
                var Oe = te && te.$$typeof;
                switch (Oe) {
                  case p:
                  case f:
                  case V:
                  case $:
                  case o:
                    return Oe;
                  default:
                    return L;
                }
            }
          case c:
            return L;
        }
      }
    }
    var i = b, j = y, Y = p, W = o, U = n, H = f, F = s, K = V, Z = $, N = c, X = l, m = d, Q = g, ee = !1;
    function ae(a) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(a) || I(a) === b;
    }
    function r(a) {
      return I(a) === y;
    }
    function u(a) {
      return I(a) === p;
    }
    function T(a) {
      return I(a) === o;
    }
    function O(a) {
      return typeof a == "object" && a !== null && a.$$typeof === n;
    }
    function v(a) {
      return I(a) === f;
    }
    function x(a) {
      return I(a) === s;
    }
    function h(a) {
      return I(a) === V;
    }
    function C(a) {
      return I(a) === $;
    }
    function w(a) {
      return I(a) === c;
    }
    function R(a) {
      return I(a) === l;
    }
    function S(a) {
      return I(a) === d;
    }
    function D(a) {
      return I(a) === g;
    }
    _.AsyncMode = i, _.ConcurrentMode = j, _.ContextConsumer = Y, _.ContextProvider = W, _.Element = U, _.ForwardRef = H, _.Fragment = F, _.Lazy = K, _.Memo = Z, _.Portal = N, _.Profiler = X, _.StrictMode = m, _.Suspense = Q, _.isAsyncMode = ae, _.isConcurrentMode = r, _.isContextConsumer = u, _.isContextProvider = T, _.isElement = O, _.isForwardRef = v, _.isFragment = x, _.isLazy = h, _.isMemo = C, _.isPortal = w, _.isProfiler = R, _.isStrictMode = S, _.isSuspense = D, _.isValidElementType = k, _.typeOf = I;
  }()), _;
}
var xe;
function Ve() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? re.exports = He() : re.exports = Ke()), re.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ce, we;
function Qe() {
  if (we) return ce;
  we = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
  function s(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function d() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var o = {}, p = 0; p < 10; p++)
        o["_" + String.fromCharCode(p)] = p;
      var b = Object.getOwnPropertyNames(o).map(function(f) {
        return o[f];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        y[f] = f;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ce = d() ? Object.assign : function(l, o) {
    for (var p, b = s(l), y, f = 1; f < arguments.length; f++) {
      p = Object(arguments[f]);
      for (var g in p)
        n.call(p, g) && (b[g] = p[g]);
      if (e) {
        y = e(p);
        for (var A = 0; A < y.length; A++)
          c.call(p, y[A]) && (b[y[A]] = p[y[A]]);
      }
    }
    return b;
  }, ce;
}
var ue, Se;
function be() {
  if (Se) return ue;
  Se = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ue = e, ue;
}
var le, Ee;
function ke() {
  return Ee || (Ee = 1, le = Function.call.bind(Object.prototype.hasOwnProperty)), le;
}
var de, _e;
function Je() {
  if (_e) return de;
  _e = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ be(), c = {}, s = /* @__PURE__ */ ke();
    e = function(l) {
      var o = "Warning: " + l;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function d(l, o, p, b, y) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in l)
        if (s(l, f)) {
          var g;
          try {
            if (typeof l[f] != "function") {
              var A = Error(
                (b || "React class") + ": " + p + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            g = l[f](o, f, b, p, null, n);
          } catch (V) {
            g = V;
          }
          if (g && !(g instanceof Error) && e(
            (b || "React class") + ": type specification of " + p + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in c)) {
            c[g.message] = !0;
            var $ = y ? y() : "";
            e(
              "Failed " + p + " type: " + g.message + ($ ?? "")
            );
          }
        }
    }
  }
  return d.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (c = {});
  }, de = d, de;
}
var pe, Ae;
function Ze() {
  if (Ae) return pe;
  Ae = 1;
  var e = Ve(), n = Qe(), c = /* @__PURE__ */ be(), s = /* @__PURE__ */ ke(), d = /* @__PURE__ */ Je(), l = function() {
  };
  process.env.NODE_ENV !== "production" && (l = function(p) {
    var b = "Warning: " + p;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return pe = function(p, b) {
    var y = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function g(r) {
      var u = r && (y && r[y] || r[f]);
      if (typeof u == "function")
        return u;
    }
    var A = "<<anonymous>>", $ = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: G(),
      arrayOf: k,
      element: I(),
      elementType: i(),
      instanceOf: j,
      node: H(),
      objectOf: W,
      oneOf: Y,
      oneOfType: U,
      shape: K,
      exact: Z
    };
    function V(r, u) {
      return r === u ? r !== 0 || 1 / r === 1 / u : r !== r && u !== u;
    }
    function P(r, u) {
      this.message = r, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    P.prototype = Error.prototype;
    function z(r) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, T = 0;
      function O(x, h, C, w, R, S, D) {
        if (w = w || A, S = S || C, D !== c) {
          if (b) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw a.name = "Invariant Violation", a;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var L = w + ":" + C;
            !u[L] && // Avoid spamming the console because they are often not actionable except for lib authors
            T < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + w + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[L] = !0, T++);
          }
        }
        return h[C] == null ? x ? h[C] === null ? new P("The " + R + " `" + S + "` is marked as required " + ("in `" + w + "`, but its value is `null`.")) : new P("The " + R + " `" + S + "` is marked as required in " + ("`" + w + "`, but its value is `undefined`.")) : null : r(h, C, w, R, S);
      }
      var v = O.bind(null, !1);
      return v.isRequired = O.bind(null, !0), v;
    }
    function B(r) {
      function u(T, O, v, x, h, C) {
        var w = T[O], R = m(w);
        if (R !== r) {
          var S = Q(w);
          return new P(
            "Invalid " + x + " `" + h + "` of type " + ("`" + S + "` supplied to `" + v + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return z(u);
    }
    function G() {
      return z(o);
    }
    function k(r) {
      function u(T, O, v, x, h) {
        if (typeof r != "function")
          return new P("Property `" + h + "` of component `" + v + "` has invalid PropType notation inside arrayOf.");
        var C = T[O];
        if (!Array.isArray(C)) {
          var w = m(C);
          return new P("Invalid " + x + " `" + h + "` of type " + ("`" + w + "` supplied to `" + v + "`, expected an array."));
        }
        for (var R = 0; R < C.length; R++) {
          var S = r(C, R, v, x, h + "[" + R + "]", c);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return z(u);
    }
    function I() {
      function r(u, T, O, v, x) {
        var h = u[T];
        if (!p(h)) {
          var C = m(h);
          return new P("Invalid " + v + " `" + x + "` of type " + ("`" + C + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(r);
    }
    function i() {
      function r(u, T, O, v, x) {
        var h = u[T];
        if (!e.isValidElementType(h)) {
          var C = m(h);
          return new P("Invalid " + v + " `" + x + "` of type " + ("`" + C + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(r);
    }
    function j(r) {
      function u(T, O, v, x, h) {
        if (!(T[O] instanceof r)) {
          var C = r.name || A, w = ae(T[O]);
          return new P("Invalid " + x + " `" + h + "` of type " + ("`" + w + "` supplied to `" + v + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return z(u);
    }
    function Y(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), o;
      function u(T, O, v, x, h) {
        for (var C = T[O], w = 0; w < r.length; w++)
          if (V(C, r[w]))
            return null;
        var R = JSON.stringify(r, function(D, a) {
          var L = Q(a);
          return L === "symbol" ? String(a) : a;
        });
        return new P("Invalid " + x + " `" + h + "` of value `" + String(C) + "` " + ("supplied to `" + v + "`, expected one of " + R + "."));
      }
      return z(u);
    }
    function W(r) {
      function u(T, O, v, x, h) {
        if (typeof r != "function")
          return new P("Property `" + h + "` of component `" + v + "` has invalid PropType notation inside objectOf.");
        var C = T[O], w = m(C);
        if (w !== "object")
          return new P("Invalid " + x + " `" + h + "` of type " + ("`" + w + "` supplied to `" + v + "`, expected an object."));
        for (var R in C)
          if (s(C, R)) {
            var S = r(C, R, v, x, h + "." + R, c);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return z(u);
    }
    function U(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var u = 0; u < r.length; u++) {
        var T = r[u];
        if (typeof T != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(T) + " at index " + u + "."
          ), o;
      }
      function O(v, x, h, C, w) {
        for (var R = [], S = 0; S < r.length; S++) {
          var D = r[S], a = D(v, x, h, C, w, c);
          if (a == null)
            return null;
          a.data && s(a.data, "expectedType") && R.push(a.data.expectedType);
        }
        var L = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new P("Invalid " + C + " `" + w + "` supplied to " + ("`" + h + "`" + L + "."));
      }
      return z(O);
    }
    function H() {
      function r(u, T, O, v, x) {
        return N(u[T]) ? null : new P("Invalid " + v + " `" + x + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return z(r);
    }
    function F(r, u, T, O, v) {
      return new P(
        (r || "React class") + ": " + u + " type `" + T + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + v + "`."
      );
    }
    function K(r) {
      function u(T, O, v, x, h) {
        var C = T[O], w = m(C);
        if (w !== "object")
          return new P("Invalid " + x + " `" + h + "` of type `" + w + "` " + ("supplied to `" + v + "`, expected `object`."));
        for (var R in r) {
          var S = r[R];
          if (typeof S != "function")
            return F(v, x, h, R, Q(S));
          var D = S(C, R, v, x, h + "." + R, c);
          if (D)
            return D;
        }
        return null;
      }
      return z(u);
    }
    function Z(r) {
      function u(T, O, v, x, h) {
        var C = T[O], w = m(C);
        if (w !== "object")
          return new P("Invalid " + x + " `" + h + "` of type `" + w + "` " + ("supplied to `" + v + "`, expected `object`."));
        var R = n({}, T[O], r);
        for (var S in R) {
          var D = r[S];
          if (s(r, S) && typeof D != "function")
            return F(v, x, h, S, Q(D));
          if (!D)
            return new P(
              "Invalid " + x + " `" + h + "` key `" + S + "` supplied to `" + v + "`.\nBad object: " + JSON.stringify(T[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var a = D(C, S, v, x, h + "." + S, c);
          if (a)
            return a;
        }
        return null;
      }
      return z(u);
    }
    function N(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(N);
          if (r === null || p(r))
            return !0;
          var u = g(r);
          if (u) {
            var T = u.call(r), O;
            if (u !== r.entries) {
              for (; !(O = T.next()).done; )
                if (!N(O.value))
                  return !1;
            } else
              for (; !(O = T.next()).done; ) {
                var v = O.value;
                if (v && !N(v[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(r, u) {
      return r === "symbol" ? !0 : u ? u["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && u instanceof Symbol : !1;
    }
    function m(r) {
      var u = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : X(u, r) ? "symbol" : u;
    }
    function Q(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var u = m(r);
      if (u === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return u;
    }
    function ee(r) {
      var u = Q(r);
      switch (u) {
        case "array":
        case "object":
          return "an " + u;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + u;
        default:
          return u;
      }
    }
    function ae(r) {
      return !r.constructor || !r.constructor.name ? A : r.constructor.name;
    }
    return $.checkPropTypes = d, $.resetWarningCache = d.resetWarningCache, $.PropTypes = $, $;
  }, pe;
}
var fe, Pe;
function Xe() {
  if (Pe) return fe;
  Pe = 1;
  var e = /* @__PURE__ */ be();
  function n() {
  }
  function c() {
  }
  return c.resetWarningCache = n, fe = function() {
    function s(o, p, b, y, f, g) {
      if (g !== e) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    s.isRequired = s;
    function d() {
      return s;
    }
    var l = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: d,
      element: s,
      elementType: s,
      instanceOf: d,
      node: s,
      objectOf: d,
      oneOf: d,
      oneOfType: d,
      shape: d,
      exact: d,
      checkPropTypes: c,
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, fe;
}
var Ie;
function et() {
  if (Ie) return ne.exports;
  if (Ie = 1, process.env.NODE_ENV !== "production") {
    var e = Ve(), n = !0;
    ne.exports = /* @__PURE__ */ Ze()(e.isElement, n);
  } else
    ne.exports = /* @__PURE__ */ Xe()();
  return ne.exports;
}
var tt = /* @__PURE__ */ et();
const t = /* @__PURE__ */ Ne(tt);
function Me({ children: e }) {
  const n = {
    id: "",
    text: "",
    value: "",
    index: ""
  }, [c, s] = oe(n), [d, l] = oe(!1), o = (y, f, g, A) => {
    s({
      id: y,
      text: f,
      value: g,
      index: A
    });
  }, p = () => {
    s(n);
  }, b = () => {
    l(!d);
  };
  return /* @__PURE__ */ M(
    $e.Provider,
    {
      value: {
        selected: c,
        isOpen: d,
        defineSelected: o,
        clearSelected: p,
        toggleIsOpen: b
      },
      children: e
    }
  );
}
Me.propTypes = {
  children: t.node
};
let nt = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((n, c) => (c &= 63, c < 36 ? n += c.toString(36) : c < 62 ? n += (c - 26).toString(36).toUpperCase() : c > 62 ? n += "-" : n += "_", n), "");
const ze = {
  isSet: !1,
  // INPUT CONFIG
  id: nt(),
  // ID used for hidden input that will receive the selected option value (must be === htmlFor label attribute)
  labelId: "",
  // for SelectInput aria-labelledby
  name: "",
  // name for hidden input that will receive the selected option value
  onChangeValue: null,
  // Callback function triggered when an option is selected
  // OPTIONS DATA CONFIG
  options: [],
  // Options'data array
  values: !1,
  // ######## INTERNAL SETTING ONLY ########
  optGroup: !1,
  // ######## INTERNAL SETTING ONLY ########
  defaultSelectedOption: void 0,
  // 'first' for first || 'option_text' to define one || undefined for none
  lastFocusableOptionIndex: "",
  // ######## INTERNAL SETTING ONLY ########
  textField: "",
  // property for option's text in the options data's array
  valueField: "",
  //  property for option's value in the options data's array
  optGroupLabelField: "",
  // property for optgroup label in the options data's array
  optGroupOptionsField: "",
  // property for optgroup's options array in the options data's array
  // INLINE CSS CONFIG
  // general component
  maxWidth: "250px",
  border: "1px solid #2b2b2b",
  // 'unset' = no border | custom value : e.g. '2px solid blue'
  borderRadius: "4px",
  // 'unset' = no border-radius | custom value : e.g. '10px'
  containerMargin: "0",
  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)",
  // 'unset' = no shadow | custom : e.g. = '4px 4px 10px black'
  boxShadowOnOpen: !1,
  // true = box shadow will display only when dropdown is opened, false = box shadow will always display
  colorOnFocus: "default",
  // 'none' = no color on focus, 'default' = default browser setting, custom color to change default color
  classOnFocus: "",
  // ######## INTERNAL SETTING ONLY ########
  // select input
  inputHeight: "unset",
  inputBackground: "#d5d5d5",
  inputTextColor: "inherit",
  inputBorderRadiusOpened: "",
  // ######## INTERNAL SETTING ONLY ########
  inputVerticalPadding: "8px",
  inputHorizontalPadding: "10px",
  inputFontSize: "16px",
  // dropdown
  dropdownBackground: "white",
  dropdownBorderTop: "0",
  // ######## INTERNAL SETTING ONLY ########
  dropdownBorderBottom: "1px solid #2b2b2b",
  // ######## INTERNAL SETTING ONLY ########
  dropdownBorderRadius: "0 0 4px 4px",
  // ######## INTERNAL SETTING ONLY ########
  dropdownMaxHeight: "unset",
  dropdownVerticalPadding: "8px",
  dropdownPosition: "bottom",
  dropdownBottom: "unset",
  // ######## INTERNAL SETTING ONLY ########
  // options
  optionTextColor: "inherit",
  hoveredOptionBackground: "#484848",
  hoveredOptionTextColor: "white",
  optionVerticalPadding: "4px",
  optionHorizontalPadding: "14px",
  optionFontSize: "14px",
  // optgroup labels
  optGroupLabelTextColor: "inherit",
  optGroupLabelFontSize: "16px",
  optGroupVerticalPadding: "4px",
  optGroupHorizontalPadding: "10px",
  optGroupMarginTop: "2px"
}, Be = ve({
  config: ze,
  defineConfig: () => {
  }
}), rt = (e, n) => e !== "" && n !== "", ot = (e, n) => e !== "" && n !== "", it = (e, n) => e === "unset" ? "unset" : n === "bottom" ? `${e} ${e} 0 0` : `0 0 ${e} ${e}`, st = (e, n) => e === "bottom" ? 0 : n, at = (e, n) => e === "bottom" ? n : 0, ct = (e, n) => n === "unset" ? "unset" : e === "bottom" ? `0 0 ${n} ${n}` : `${n} ${n} 0 0`, ut = (e) => e === "bottom" ? "unset" : "100%", lt = (e) => {
  switch (e) {
    case "none":
      return "hasNoFocusVisibleColor";
    case "default":
      break;
    default:
      return "hasCustomFocusVisibleColor";
  }
}, dt = (e, n) => {
  let c = 0;
  if (n) {
    for (let s of e)
      c += s.options.length;
    return c - 1;
  } else
    return e.length - 1;
};
function De({ children: e }) {
  const [n, c] = oe(ze), s = (d) => {
    c((l) => {
      const o = {
        ...l,
        isSet: !0,
        ...d
      };
      return o.values = rt(o.textField, o.valueField), o.optGroup = ot(
        o.optGroupLabelField,
        o.optGroupOptionsField
      ), o.classOnFocus = lt(o.colorOnFocus), o.inputBorderRadiusOpened = it(
        o.borderRadius,
        o.dropdownPosition
      ), o.dropdownBorderTop = st(
        o.dropdownPosition,
        o.border
      ), o.dropdownBorderBottom = at(
        o.dropdownPosition,
        o.border
      ), o.dropdownBorderRadius = ct(
        o.dropdownPosition,
        o.borderRadius
      ), o.dropdownBottom = ut(o.dropdownPosition), o.lastFocusableOptionIndex = dt(
        o.options,
        o.optGroup
      ), o;
    });
  };
  return /* @__PURE__ */ M(Be.Provider, { value: { config: n, defineConfig: s }, children: e });
}
De.propTypes = {
  children: t.node
};
function J() {
  const { config: e, defineConfig: n } = he(Be);
  return { ...e, defineConfig: n };
}
function se() {
  const { selected: e, isOpen: n, defineSelected: c, clearSelected: s, toggleIsOpen: d } = he($e);
  return {
    selectedId: e.id,
    selectedText: e.text,
    selectedValue: e.value,
    selectedIndex: e.index,
    isOpen: n,
    defineSelected: c,
    clearSelected: s,
    toggleIsOpen: d
  };
}
const pt = "_selectOption_1e7f3_1", ft = "_hasNoFocusVisibleColor_1e7f3_7", yt = "_hasCustomFocusVisibleColor_1e7f3_13", Re = {
  selectOption: pt,
  hasNoFocusVisibleColor: ft,
  hasCustomFocusVisibleColor: yt
};
function je(e, n) {
  const c = document.getElementById(n);
  c.value = e;
  const s = new Event("change", { bubbles: !0 }), d = c._valueTracker;
  d && d.setValue("fake value"), c.dispatchEvent(s);
}
const Ge = ve({
  activeOptionIndex: 0,
  defineActiveOptionIndex: () => {
  }
});
function gt() {
  return he(Ge);
}
function qe({ option: e, index: n }) {
  const { isOpen: c, selectedId: s, defineSelected: d, toggleIsOpen: l } = se(), {
    id: o,
    values: p,
    defaultSelectedOption: b,
    lastFocusableOptionIndex: y,
    textField: f,
    valueField: g,
    optionTextColor: A,
    hoveredOptionBackground: $,
    hoveredOptionTextColor: V,
    optionVerticalPadding: P,
    optionHorizontalPadding: z,
    optionFontSize: B,
    colorOnFocus: G,
    classOnFocus: k
  } = J(), { activeOptionIndex: I, defineActiveOptionIndex: i } = gt(), j = Fe(null);
  ie(() => {
    const F = p ? e[f] : e, K = p ? e[g] : e;
    (b === F || b === "first" && n === 0) && (d(`option_${n}_${o}`, F, K, n), i(n));
  }, []), ie(() => {
    I === n && c && j.current.focus();
  }, [c, I, n]);
  const Y = (F) => {
    je(F.target.dataset.value, o), d(
      F.target.id,
      F.target.innerText,
      F.target.dataset.value,
      n
    ), l();
  }, W = () => {
    i(n), j.current.focus();
  }, U = (F) => {
    (F.key === " " || F.key === "Spacebar" || F.key === "Enter") && (F.stopPropagation(), F.preventDefault(), Y(F)), F.key === "ArrowDown" && (F.preventDefault(), i(
      I === y ? 0 : I + 1
    )), F.key === "ArrowUp" && (F.preventDefault(), i(
      I === 0 ? y : I - 1
    ));
  }, H = {
    color: I === n ? V : A,
    fontSize: B,
    padding: `${P} ${z}`,
    background: I === n ? $ : "unset"
  };
  return /* @__PURE__ */ M(
    "li",
    {
      id: `option_${n}_${o}`,
      className: `select-option ${Re.selectOption} ` + (G !== "default" ? `${Re[k]} ` : ""),
      ref: j,
      "data-value": p ? e[g] : e,
      style: H,
      onClick: (F) => {
        Y(F);
      },
      onMouseEnter: W,
      onKeyDown: U,
      role: "option",
      "aria-selected": s === `option_${n}_${o}`,
      tabIndex: "-1",
      children: p ? e[f] : e
    }
  );
}
qe.propTypes = {
  option: t.oneOfType([
    // without values
    t.string,
    // with values
    t.shape({
      // textField
      [t.string]: t.string,
      // valueField
      [t.string]: t.string
    })
  ]).isRequired,
  index: t.number.isRequired
};
function me({ options: e, startIndex: n }) {
  const { id: c } = J();
  return /* @__PURE__ */ M(Ue, { children: e.map((s, d) => {
    const l = n ? n + d : d;
    return /* @__PURE__ */ M(
      qe,
      {
        option: s,
        index: l
      },
      `${l}-${c}`
    );
  }) });
}
me.propTypes = {
  options: t.arrayOf(
    t.oneOfType([
      // options without values
      t.string,
      // options with values
      t.shape({
        [t.string]: t.string,
        [t.string]: t.string
      })
    ])
  ).isRequired,
  startIndex: t.number
};
const vt = "_optgroupLabel_110sa_1", ht = {
  optgroupLabel: vt
};
function Le({ options: e, startIndex: n }) {
  const {
    optGroupLabelField: c,
    optGroupOptionsField: s,
    optGroupLabelTextColor: d,
    optGroupLabelFontSize: l,
    optGroupVerticalPadding: o,
    optGroupHorizontalPadding: p,
    optGroupMarginTop: b
  } = J(), y = {
    color: d,
    fontSize: l,
    padding: `${o} ${p}`,
    marginTop: b
  };
  return /* @__PURE__ */ M("li", { className: "select-optgroup", children: /* @__PURE__ */ ge("ul", { children: [
    /* @__PURE__ */ M(
      "li",
      {
        className: `select-optgroup-label ${ht.optgroupLabel}`,
        style: y,
        children: e[c]
      }
    ),
    /* @__PURE__ */ M(
      me,
      {
        options: e[s],
        startIndex: n
      }
    )
  ] }) });
}
Le.propTypes = {
  options: t.shape({
    //optGroupLabelField
    [t.string]: t.string,
    //optGroupOptionsField
    [t.string]: t.arrayOf(
      t.oneOfType([
        // without values
        t.string,
        // with values
        t.shape({
          [t.string]: t.string,
          [t.string]: t.string
        })
      ])
    )
  }).isRequired,
  startIndex: t.number.isRequired
};
function bt() {
  const { id: e, options: n, optGroupOptionsField: c } = J(), s = n.reduce((d, l, o) => (d.push(
    o === 0 ? 0 : d[o - 1] + n[o - 1][c].length
  ), d), []);
  return n.map((d, l) => /* @__PURE__ */ M(
    Le,
    {
      options: d,
      startIndex: s[l]
    },
    `${l}-${e}-optgroup`
  ));
}
const mt = "_selectDropdown_1186o_1", Ot = "_close_1186o_19", Ct = "_hasNoFocusVisibleColor_1186o_25", Tt = "_hasCustomFocusVisibleColor_1186o_31", ye = {
  selectDropdown: mt,
  close: Ot,
  hasNoFocusVisibleColor: Ct,
  hasCustomFocusVisibleColor: Tt
};
function Ye({ children: e }) {
  const [n, c] = oe(0), s = (d) => {
    c(d);
  };
  return /* @__PURE__ */ M(
    Ge.Provider,
    {
      value: { activeOptionIndex: n, defineActiveOptionIndex: s },
      children: e
    }
  );
}
Ye.propTypes = {
  children: t.node
};
function xt() {
  const { isOpen: e, selectedId: n } = se(), {
    id: c,
    labelId: s,
    options: d,
    optGroup: l,
    maxWidth: o,
    border: p,
    dropdownBorderTop: b,
    dropdownBorderBottom: y,
    dropdownBackground: f,
    dropdownBorderRadius: g,
    dropdownMaxHeight: A,
    dropdownVerticalPadding: $,
    dropdownBottom: V,
    boxShadow: P,
    boxShadowOnOpen: z,
    colorOnFocus: B,
    classOnFocus: G
  } = J(), k = {
    maxHeight: A,
    maxWidth: o,
    background: f,
    border: p,
    borderTop: b,
    borderBottom: y,
    borderRadius: g,
    padding: `${$} 0`,
    boxShadow: z ? e ? P : "unset" : P,
    bottom: V,
    zIndex: 1
  };
  return /* @__PURE__ */ M(
    "ul",
    {
      id: `dropdown_${c}`,
      className: `select-dropdown ${ye.selectDropdown} ` + (B !== "default" ? `${ye[G]} ` : "") + (e ? "" : ye.close),
      style: k,
      role: "listbox",
      "aria-hidden": !e,
      "aria-activedescendant": n,
      "aria-labelledby": s,
      tabIndex: "-1",
      "data-testid": "dropdown",
      children: /* @__PURE__ */ M(Ye, { children: l ? /* @__PURE__ */ M(bt, {}) : /* @__PURE__ */ M(me, { options: d }) })
    }
  );
}
const wt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACL0lEQVR4nO3aP0hVUQDH8Y8vEWmQEIOIiHCIcHCIEGlqioZoiqZoCIdoaGqIVkfXHB1djIaIhmiIhoZocHJSkIiIkIqQCLFXDdcLJT7fv3vPuV7PF37Le1z4fQ+8c88755BIJBKJRCKROJwMtPh8MGiLcPza78tpPMUm/tQ0mzuO07vlZ9CsQMFQae44gylsV6BU6Gxj6ggeYcLho4HjA/iC0chlYvF1QPZ7aMRuEonfDazFbhGRtQaWYreIyBKMYFX8WTl0VnfcwVlsVKBUqHzDObu4iJ8VKFd2tnFlt3zOdfVfEd5rJZ9zvwIly8pCO/mc+QqULTqvMdTpAAziWQVKF5V1jHUqn3MU7ypQvt9sYrJb+ZwTstGLLdFrmrjWq3zOhOy9GVumlzzoVz7nErYqINRNFouSz7lZAalO8xbDRQ8APKyAXLt8xMky5HMWKiDZKj9wvjz1jCG8iCzaKjdK9P6PESwHEOoms6Ua78EpfCigeBF5ItK23iS+d1m26CzLVq3RuCzeucJnnC5fsT23hZffkm3iVIZZYQfgVhit7lgURn4ulFC3DOGVcuWfq/hBzjGsKEd+xT9b2VXmDD4pVn4D4wEd+uaCbG1ehPy27C/5geOqYtYId0IXL5K7+pOfD1+5eOb0Jv9STS5sNfBYd/KranZxYxhvdCa/5+FlHRjT/ii+aZ/Dyzowjvday8+0frQ+jMomxnWZeMsLjIeBWszyiUQikUgkEomDxl9ASTWUcrdNzwAAAABJRU5ErkJggg==", St = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAVUlEQVQ4jaWTuQ0AIAwDTwybvRkEiYYCxGtMbV+CkwBkINBfNC8BFBEyeRTIVvsCuWpOgucuV0I5p97wE/IAOZqTSlWrf33BCtEao7VI1irbx2SdcwUmBTK9p98a5AAAAABJRU5ErkJggg==", Et = "_selectInput_wh5az_1", _t = "_selectedValue_wh5az_13", At = "_selectedText_wh5az_33", Pt = "_selectControl_wh5az_39", It = "_selectArrow_wh5az_49", Rt = "_open_wh5az_49", Ft = "_clearSelect_wh5az_55", $t = "_hasSelection_wh5az_61", Vt = "_hasNoFocusVisibleColor_wh5az_67", kt = "_hasCustomFocusVisibleColor_wh5az_73", q = {
  selectInput: Et,
  selectedValue: _t,
  selectedText: At,
  selectControl: Pt,
  selectArrow: It,
  open: Rt,
  clearSelect: Ft,
  hasSelection: $t,
  hasNoFocusVisibleColor: Vt,
  hasCustomFocusVisibleColor: kt
};
function Mt() {
  const {
    selectedId: e,
    selectedText: n,
    selectedValue: c,
    isOpen: s,
    toggleIsOpen: d,
    clearSelected: l
  } = se(), {
    id: o,
    labelId: p,
    name: b,
    onChangeValue: y,
    colorOnFocus: f,
    classOnFocus: g,
    border: A,
    inputHeight: $,
    inputBackground: V,
    inputTextColor: P,
    inputBorderRadiusOpened: z,
    borderRadius: B,
    inputVerticalPadding: G,
    inputHorizontalPadding: k,
    inputFontSize: I,
    boxShadow: i,
    boxShadowOnOpen: j,
    dropdownPosition: Y
  } = J(), W = (m) => {
    m.target.dataset.name !== "clear" && d();
  }, U = () => {
    je("", o), l();
  }, H = (m) => {
    y !== null ? y(m.target.value) : m.preventDefault();
  }, F = (m) => {
    W(m);
  }, K = (m) => {
    (m.key === " " || m.key === "Spacebar" || m.key === "Enter") && (m.preventDefault(), W(m));
  }, Z = () => {
    U();
  }, N = (m) => {
    (m.key === " " || m.key === "Spacebar" || m.key === "Enter") && (m.preventDefault(), U());
  }, X = {
    border: A,
    height: $,
    background: V,
    color: P,
    borderRadius: s ? z : B,
    padding: `${G} ${k}`,
    fontSize: I,
    boxShadow: j ? s ? i : "unset" : i,
    zIndex: Y === "top" && s ? "2" : "auto"
  };
  return /* @__PURE__ */ ge(
    "div",
    {
      className: `select-input ${q.selectInput} ` + (f !== "default" ? `${q[g]} ` : ""),
      style: X,
      tabIndex: "0",
      role: "combobox",
      "aria-expanded": s,
      "aria-haspopup": "listbox",
      "aria-controls": `dropdown_${o}`,
      "aria-activedescendant": e,
      "aria-labelledby": p,
      onClick: (m) => {
        F(m);
      },
      onKeyDown: (m) => {
        K(m);
      },
      "data-testid": "select-input",
      children: [
        /* @__PURE__ */ M(
          "input",
          {
            id: o,
            className: q.selectedValue,
            type: "text",
            onChange: (m) => {
              H(m);
            },
            name: b,
            value: c,
            "aria-hidden": "true",
            tabIndex: "-1",
            readOnly: !0,
            "data-testid": "selectedValue-input"
          }
        ),
        /* @__PURE__ */ M("div", { className: q.selectedText, "data-testid": "selectedText-input", children: n }),
        /* @__PURE__ */ M(
          "img",
          {
            className: `${q.clearSelect} ${q.selectControl} ` + (n !== "" ? `${q.hasSelection} ` : "") + (f !== "default" ? `${q[g]} ` : ""),
            src: St,
            alt: "clear selection",
            "data-name": "clear",
            tabIndex: "0",
            "aria-label": "clear selection",
            role: "button",
            onClick: () => {
              Z();
            },
            onKeyDown: (m) => {
              N(m);
            },
            "data-testid": "clearSelected-button"
          }
        ),
        /* @__PURE__ */ M(
          "img",
          {
            className: `${q.selectArrow} ${q.selectControl} ` + (s && q.open),
            src: wt,
            alt: "select menu control"
          }
        )
      ]
    }
  );
}
function zt(e, n) {
  ie(() => {
    function c(s) {
      e.current && !e.current.contains(s.target) && n();
    }
    return document.addEventListener("click", c), () => {
      document.removeEventListener("click", c);
    };
  }, [e, n]);
}
const Bt = "_selectContainer_1f1fy_1", Dt = {
  selectContainer: Bt
};
function We({ props: e }) {
  const { isOpen: n, toggleIsOpen: c } = se(), {
    isSet: s,
    id: d,
    maxWidth: l,
    containerMargin: o,
    colorOnFocus: p,
    classOnFocus: b,
    defineConfig: y
  } = J(), f = Fe(null);
  ie(() => {
    s || y(e);
  }, [e, s, y]);
  const g = () => {
    n && c();
  };
  zt(f, g);
  const A = (V) => {
    V.key === "Escape" && (V.preventDefault(), g());
  }, $ = s && {
    maxWidth: l,
    margin: o,
    "--outline-focus-visible-color": b === "hasCustomFocusVisibleColor" ? p : void 0
  };
  if (s)
    return /* @__PURE__ */ ge(
      "div",
      {
        id: `${d}_select-container`,
        ref: f,
        className: `select-container ${Dt.selectContainer}`,
        style: $,
        onKeyDown: (V) => {
          A(V);
        },
        children: [
          /* @__PURE__ */ M(Mt, {}),
          /* @__PURE__ */ M(xt, {})
        ]
      }
    );
}
We.propTypes = {
  props: t.shape({
    id: t.string,
    name: t.string,
    labelId: t.string,
    options: t.arrayOf(
      t.oneOfType([
        // without values
        t.string,
        // with values
        t.shape({
          // textField
          [t.string]: t.string,
          // valueField
          [t.string]: t.string
        }),
        // optgroups without values
        t.shape({
          // labelField
          [t.string]: t.string,
          // options array
          [t.string]: t.arrayOf(t.string)
        }),
        //optgroup with values
        t.shape({
          // labelField
          [t.string]: t.string,
          // options array
          [t.string]: t.arrayOf(
            t.shape({
              // textField
              [t.string]: t.string,
              // valueField
              [t.string]: t.string
            })
          )
        })
      ])
    ).isRequired,
    onChangeValue: t.func,
    defaultSelectedOption: t.string,
    textField: t.string,
    valueField: t.string,
    optGroupLabelField: t.string,
    optGroupOptionsField: t.string,
    maxWidth: t.string,
    border: t.string,
    borderRadius: t.string,
    containerMargin: t.string,
    boxShadow: t.string,
    boxShadowOnOpen: t.bool,
    colorOnFocus: t.string,
    inputHeight: t.string,
    inputBackground: t.string,
    inputTextColor: t.string,
    inputVerticalPadding: t.string,
    inputHorizontalPadding: t.string,
    inputFontSize: t.string,
    dropdownBackground: t.string,
    dropdownMaxHeight: t.string,
    dropdownVerticalPadding: t.string,
    dropdownPosition: t.string,
    optionTextColor: t.string,
    hoveredOptionBackground: t.string,
    hoveredOptionTextColor: t.string,
    optionVerticalPadding: t.string,
    optionHorizontalPadding: t.string,
    optionFontSize: t.string,
    optGroupLabelTextColor: t.string,
    optGroupLabelFontSize: t.string,
    optGroupVerticalPadding: t.string,
    optGroupHorizontalPadding: t.string,
    optGroupMarginTop: t.string
  })
};
function qt(e) {
  return /* @__PURE__ */ M(Me, { children: /* @__PURE__ */ M(De, { children: /* @__PURE__ */ M(We, { props: e }) }) });
}
export {
  qt as SelectMenu
};
