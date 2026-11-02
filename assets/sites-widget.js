var I2 = Object.create, Tp = Object.defineProperty, $2 = Object.getOwnPropertyDescriptor, q2 = Object.getOwnPropertyNames, V2 = Object.getPrototypeOf, F2 = Object.prototype.hasOwnProperty, Xt = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports), X2 = (e, a, r, l) => {
  if (a && typeof a == "object" || typeof a == "function")
    for (var u = q2(a), c = 0, d = u.length, h; c < d; c++)
      h = u[c], !F2.call(e, h) && h !== r && Tp(e, h, {
        get: ((m) => a[m]).bind(null, h),
        enumerable: !(l = $2(a, h)) || l.enumerable
      });
  return e;
}, fd = (e, a, r) => (r = e != null ? I2(V2(e)) : {}, X2(a || !e || !e.__esModule ? Tp(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));
function Y2(e) {
  return /(?:^|\s)CodexBrowser(?:\/|\s|$)/i.test(e ?? "");
}
function Cp(e) {
  return /iPad|iPhone|iPod/.test(e);
}
function W2(e) {
  return /Android/.test(e);
}
function Q2(e) {
  return Cp(e) && e.includes("CriOS");
}
function K2(e) {
  return Cp(e) || W2(e) || Q2(e);
}
var J2 = [
  "; wv",
  "webview",
  "fbav",
  "fb_iab",
  "fban",
  "instagram",
  "line/",
  "kakaotalk",
  "snapchat",
  "tiktok"
];
function eS(e) {
  const a = e.trim();
  if (!a) return !1;
  const r = /iPhone|iPad|iPod/.test(a), l = /Android/.test(a), u = r && !/Safari/.test(a), c = l && /Version\/\d+\.\d+/.test(a), d = J2.some((h) => a.toLowerCase().includes(h));
  return u || c || d;
}
function tS(e) {
  return Y2(e) || eS(e ?? "");
}
function Ap(e) {
  var a, r, l = "";
  if (typeof e == "string" || typeof e == "number") l += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var u = e.length;
    for (a = 0; a < u; a++) e[a] && (r = Ap(e[a])) && (l && (l += " "), l += r);
  } else for (r in e) e[r] && (l && (l += " "), l += r);
  return l;
}
function De() {
  for (var e, a, r = 0, l = "", u = arguments.length; r < u; r++) (e = arguments[r]) && (a = Ap(e)) && (l && (l += " "), l += a);
  return l;
}
var nS = /* @__PURE__ */ Xt(((e) => {
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), w = Symbol.iterator;
  function A(M) {
    return M === null || typeof M != "object" ? null : (M = w && M[w] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var T = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, C = Object.assign, R = {};
  function N(M, Y, ae) {
    this.props = M, this.context = Y, this.refs = R, this.updater = ae || T;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(M, Y) {
    if (typeof M != "object" && typeof M != "function" && M != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, Y, "setState");
  }, N.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function H() {
  }
  H.prototype = N.prototype;
  function D(M, Y, ae) {
    this.props = M, this.context = Y, this.refs = R, this.updater = ae || T;
  }
  var U = D.prototype = new H();
  U.constructor = D, C(U, N.prototype), U.isPureReactComponent = !0;
  var L = Array.isArray;
  function Q() {
  }
  var ee = {
    H: null,
    A: null,
    T: null,
    S: null
  }, I = Object.prototype.hasOwnProperty;
  function te(M, Y, ae) {
    var le = ae.ref;
    return {
      $$typeof: a,
      type: M,
      key: Y,
      ref: le !== void 0 ? le : null,
      props: ae
    };
  }
  function k(M, Y) {
    return te(M.type, Y, M.props);
  }
  function B(M) {
    return typeof M == "object" && M !== null && M.$$typeof === a;
  }
  function J(M) {
    var Y = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + M.replace(/[=:]/g, function(ae) {
      return Y[ae];
    });
  }
  var ne = /\/+/g;
  function me(M, Y) {
    return typeof M == "object" && M !== null && M.key != null ? J("" + M.key) : Y.toString(36);
  }
  function z(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (typeof M.status == "string" ? M.then(Q, Q) : (M.status = "pending", M.then(function(Y) {
          M.status === "pending" && (M.status = "fulfilled", M.value = Y);
        }, function(Y) {
          M.status === "pending" && (M.status = "rejected", M.reason = Y);
        })), M.status) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function q(M, Y, ae, le, be) {
    var ve = typeof M;
    (ve === "undefined" || ve === "boolean") && (M = null);
    var xe = !1;
    if (M === null) xe = !0;
    else switch (ve) {
      case "bigint":
      case "string":
      case "number":
        xe = !0;
        break;
      case "object":
        switch (M.$$typeof) {
          case a:
          case r:
            xe = !0;
            break;
          case _:
            return xe = M._init, q(xe(M._payload), Y, ae, le, be);
        }
    }
    if (xe) return be = be(M), xe = le === "" ? "." + me(M, 0) : le, L(be) ? (ae = "", xe != null && (ae = xe.replace(ne, "$&/") + "/"), q(be, Y, ae, "", function(dn) {
      return dn;
    })) : be != null && (B(be) && (be = k(be, ae + (be.key == null || M && M.key === be.key ? "" : ("" + be.key).replace(ne, "$&/") + "/") + xe)), Y.push(be)), 1;
    xe = 0;
    var lt = le === "" ? "." : le + ":";
    if (L(M)) for (var He = 0; He < M.length; He++) le = M[He], ve = lt + me(le, He), xe += q(le, Y, ae, ve, be);
    else if (He = A(M), typeof He == "function") for (M = He.call(M), He = 0; !(le = M.next()).done; ) le = le.value, ve = lt + me(le, He++), xe += q(le, Y, ae, ve, be);
    else if (ve === "object") {
      if (typeof M.then == "function") return q(z(M), Y, ae, le, be);
      throw Y = String(M), Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.");
    }
    return xe;
  }
  function V(M, Y, ae) {
    if (M == null) return M;
    var le = [], be = 0;
    return q(M, le, "", "", function(ve) {
      return Y.call(ae, ve, be++);
    }), le;
  }
  function se(M) {
    if (M._status === -1) {
      var Y = M._result;
      Y = Y(), Y.then(function(ae) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = ae);
      }, function(ae) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = ae);
      }), M._status === -1 && (M._status = 0, M._result = Y);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var ge = typeof reportError == "function" ? reportError : function(M) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
        error: M
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", M);
      return;
    }
    console.error(M);
  }, ft = {
    map: V,
    forEach: function(M, Y, ae) {
      V(M, function() {
        Y.apply(this, arguments);
      }, ae);
    },
    count: function(M) {
      var Y = 0;
      return V(M, function() {
        Y++;
      }), Y;
    },
    toArray: function(M) {
      return V(M, function(Y) {
        return Y;
      }) || [];
    },
    only: function(M) {
      if (!B(M)) throw Error("React.Children.only expected to receive a single React element child.");
      return M;
    }
  };
  e.Activity = S, e.Children = ft, e.Component = N, e.Fragment = l, e.Profiler = c, e.PureComponent = D, e.StrictMode = u, e.Suspense = g, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee, e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(M) {
      return ee.H.useMemoCache(M);
    }
  }, e.cache = function(M) {
    return function() {
      return M.apply(null, arguments);
    };
  }, e.cacheSignal = function() {
    return null;
  }, e.cloneElement = function(M, Y, ae) {
    if (M == null) throw Error("The argument must be a React element, but you passed " + M + ".");
    var le = C({}, M.props), be = M.key;
    if (Y != null) for (ve in Y.key !== void 0 && (be = "" + Y.key), Y) !I.call(Y, ve) || ve === "key" || ve === "__self" || ve === "__source" || ve === "ref" && Y.ref === void 0 || (le[ve] = Y[ve]);
    var ve = arguments.length - 2;
    if (ve === 1) le.children = ae;
    else if (1 < ve) {
      for (var xe = Array(ve), lt = 0; lt < ve; lt++) xe[lt] = arguments[lt + 2];
      le.children = xe;
    }
    return te(M.type, be, le);
  }, e.createContext = function(M) {
    return M = {
      $$typeof: h,
      _currentValue: M,
      _currentValue2: M,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, M.Provider = M, M.Consumer = {
      $$typeof: d,
      _context: M
    }, M;
  }, e.createElement = function(M, Y, ae) {
    var le, be = {}, ve = null;
    if (Y != null) for (le in Y.key !== void 0 && (ve = "" + Y.key), Y) I.call(Y, le) && le !== "key" && le !== "__self" && le !== "__source" && (be[le] = Y[le]);
    var xe = arguments.length - 2;
    if (xe === 1) be.children = ae;
    else if (1 < xe) {
      for (var lt = Array(xe), He = 0; He < xe; He++) lt[He] = arguments[He + 2];
      be.children = lt;
    }
    if (M && M.defaultProps) for (le in xe = M.defaultProps, xe) be[le] === void 0 && (be[le] = xe[le]);
    return te(M, ve, be);
  }, e.createRef = function() {
    return { current: null };
  }, e.forwardRef = function(M) {
    return {
      $$typeof: m,
      render: M
    };
  }, e.isValidElement = B, e.lazy = function(M) {
    return {
      $$typeof: _,
      _payload: {
        _status: -1,
        _result: M
      },
      _init: se
    };
  }, e.memo = function(M, Y) {
    return {
      $$typeof: p,
      type: M,
      compare: Y === void 0 ? null : Y
    };
  }, e.startTransition = function(M) {
    var Y = ee.T, ae = {};
    ee.T = ae;
    try {
      var le = M(), be = ee.S;
      be !== null && be(ae, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(Q, ge);
    } catch (ve) {
      ge(ve);
    } finally {
      Y !== null && ae.types !== null && (Y.types = ae.types), ee.T = Y;
    }
  }, e.unstable_useCacheRefresh = function() {
    return ee.H.useCacheRefresh();
  }, e.use = function(M) {
    return ee.H.use(M);
  }, e.useActionState = function(M, Y, ae) {
    return ee.H.useActionState(M, Y, ae);
  }, e.useCallback = function(M, Y) {
    return ee.H.useCallback(M, Y);
  }, e.useContext = function(M) {
    return ee.H.useContext(M);
  }, e.useDebugValue = function() {
  }, e.useDeferredValue = function(M, Y) {
    return ee.H.useDeferredValue(M, Y);
  }, e.useEffect = function(M, Y) {
    return ee.H.useEffect(M, Y);
  }, e.useEffectEvent = function(M) {
    return ee.H.useEffectEvent(M);
  }, e.useId = function() {
    return ee.H.useId();
  }, e.useImperativeHandle = function(M, Y, ae) {
    return ee.H.useImperativeHandle(M, Y, ae);
  }, e.useInsertionEffect = function(M, Y) {
    return ee.H.useInsertionEffect(M, Y);
  }, e.useLayoutEffect = function(M, Y) {
    return ee.H.useLayoutEffect(M, Y);
  }, e.useMemo = function(M, Y) {
    return ee.H.useMemo(M, Y);
  }, e.useOptimistic = function(M, Y) {
    return ee.H.useOptimistic(M, Y);
  }, e.useReducer = function(M, Y, ae) {
    return ee.H.useReducer(M, Y, ae);
  }, e.useRef = function(M) {
    return ee.H.useRef(M);
  }, e.useState = function(M) {
    return ee.H.useState(M);
  }, e.useSyncExternalStore = function(M, Y, ae) {
    return ee.H.useSyncExternalStore(M, Y, ae);
  }, e.useTransition = function() {
    return ee.H.useTransition();
  }, e.version = "19.2.8";
})), dd = /* @__PURE__ */ Xt(((e, a) => {
  a.exports = nS();
})), y = /* @__PURE__ */ fd(dd()), Lf = function(e, a) {
  return Lf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, l) {
    r.__proto__ = l;
  } || function(r, l) {
    for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (r[u] = l[u]);
  }, Lf(e, a);
};
function sn(e, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
  Lf(e, a);
  function r() {
    this.constructor = e;
  }
  e.prototype = a === null ? Object.create(a) : (r.prototype = a.prototype, new r());
}
var ie = function() {
  return ie = Object.assign || function(a) {
    for (var r, l = 1, u = arguments.length; l < u; l++) {
      r = arguments[l];
      for (var c in r) Object.prototype.hasOwnProperty.call(r, c) && (a[c] = r[c]);
    }
    return a;
  }, ie.apply(this, arguments);
};
function ia(e, a) {
  var r = {};
  for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && a.indexOf(l) < 0 && (r[l] = e[l]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, l = Object.getOwnPropertySymbols(e); u < l.length; u++) a.indexOf(l[u]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[u]) && (r[l[u]] = e[l[u]]);
  return r;
}
function yn(e, a, r) {
  if (r || arguments.length === 2)
    for (var l = 0, u = a.length, c; l < u; l++) (c || !(l in a)) && (c || (c = Array.prototype.slice.call(a, 0, l)), c[l] = a[l]);
  return e.concat(c || Array.prototype.slice.call(a));
}
function Rn(e, a) {
  var r = a && a.cache ? a.cache : sS, l = a && a.serializer ? a.serializer : lS;
  return (a && a.strategy ? a.strategy : iS)(e, {
    cache: r,
    serializer: l
  });
}
function aS(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function xp(e, a, r, l) {
  var u = aS(l) ? l : r(l), c = a.get(u);
  return typeof c > "u" && (c = e.call(this, l), a.set(u, c)), c;
}
function Op(e, a, r) {
  var l = Array.prototype.slice.call(arguments, 3), u = r(l), c = a.get(u);
  return typeof c > "u" && (c = e.apply(this, l), a.set(u, c)), c;
}
function hd(e, a, r, l, u) {
  return r.bind(a, e, l, u);
}
function iS(e, a) {
  var r = e.length === 1 ? xp : Op;
  return hd(e, this, r, a.cache.create(), a.serializer);
}
function rS(e, a) {
  return hd(e, this, Op, a.cache.create(), a.serializer);
}
function oS(e, a) {
  return hd(e, this, xp, a.cache.create(), a.serializer);
}
var lS = function() {
  return JSON.stringify(arguments);
}, uS = (function() {
  function e() {
    this.cache = /* @__PURE__ */ Object.create(null);
  }
  return e.prototype.get = function(a) {
    return this.cache[a];
  }, e.prototype.set = function(a, r) {
    this.cache[a] = r;
  }, e;
})(), sS = { create: function() {
  return new uS();
} }, Nn = {
  variadic: rS,
  monadic: oS
}, Ae;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ae || (Ae = {}));
var Ve;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Ve || (Ve = {}));
var cr;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(cr || (cr = {}));
function Y0(e) {
  return e.type === Ve.literal;
}
function cS(e) {
  return e.type === Ve.argument;
}
function Mp(e) {
  return e.type === Ve.number;
}
function Rp(e) {
  return e.type === Ve.date;
}
function Np(e) {
  return e.type === Ve.time;
}
function Dp(e) {
  return e.type === Ve.select;
}
function zp(e) {
  return e.type === Ve.plural;
}
function fS(e) {
  return e.type === Ve.pound;
}
function Hp(e) {
  return e.type === Ve.tag;
}
function Lp(e) {
  return !!(e && typeof e == "object" && e.type === cr.number);
}
function jf(e) {
  return !!(e && typeof e == "object" && e.type === cr.dateTime);
}
var jp = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, dS = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function hS(e) {
  var a = {};
  return e.replace(dS, function(r) {
    var l = r.length;
    switch (r[0]) {
      case "G":
        a.era = l === 4 ? "long" : l === 5 ? "narrow" : "short";
        break;
      case "y":
        a.year = l === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        a.month = [
          "numeric",
          "2-digit",
          "short",
          "long",
          "narrow"
        ][l - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        a.day = ["numeric", "2-digit"][l - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        a.weekday = l === 4 ? "long" : l === 5 ? "narrow" : "short";
        break;
      case "e":
        if (l < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
        a.weekday = [
          "short",
          "long",
          "narrow",
          "short"
        ][l - 4];
        break;
      case "c":
        if (l < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        a.weekday = [
          "short",
          "long",
          "narrow",
          "short"
        ][l - 4];
        break;
      case "a":
        a.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        a.hourCycle = "h12", a.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "H":
        a.hourCycle = "h23", a.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "K":
        a.hourCycle = "h11", a.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "k":
        a.hourCycle = "h24", a.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        a.minute = ["numeric", "2-digit"][l - 1];
        break;
      case "s":
        a.second = ["numeric", "2-digit"][l - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        a.timeZoneName = l < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), a;
}
var mS = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function vS(e) {
  if (e.length === 0) throw new Error("Number skeleton cannot be empty");
  for (var a = e.split(mS).filter(function(p) {
    return p.length > 0;
  }), r = [], l = 0, u = a; l < u.length; l++) {
    var c = u[l].split("/");
    if (c.length === 0) throw new Error("Invalid number skeleton");
    for (var d = c[0], h = c.slice(1), m = 0, g = h; m < g.length; m++) if (g[m].length === 0) throw new Error("Invalid number skeleton");
    r.push({
      stem: d,
      options: h
    });
  }
  return r;
}
function pS(e) {
  return e.replace(/^(.*?)-/, "");
}
var W0 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Bp = /^(@+)?(\+|#+)?[rs]?$/g, gS = /(\*)(0+)|(#+)(0+)|(0+)/g, Up = /^(0+)$/;
function Q0(e) {
  var a = {};
  return e[e.length - 1] === "r" ? a.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (a.roundingPriority = "lessPrecision"), e.replace(Bp, function(r, l, u) {
    return typeof u != "string" ? (a.minimumSignificantDigits = l.length, a.maximumSignificantDigits = l.length) : u === "+" ? a.minimumSignificantDigits = l.length : l[0] === "#" ? a.maximumSignificantDigits = l.length : (a.minimumSignificantDigits = l.length, a.maximumSignificantDigits = l.length + (typeof u == "string" ? u.length : 0)), "";
  }), a;
}
function Pp(e) {
  switch (e) {
    case "sign-auto":
      return { signDisplay: "auto" };
    case "sign-accounting":
    case "()":
      return { currencySign: "accounting" };
    case "sign-always":
    case "+!":
      return { signDisplay: "always" };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return { signDisplay: "exceptZero" };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return { signDisplay: "never" };
  }
}
function yS(e) {
  var a;
  if (e[0] === "E" && e[1] === "E" ? (a = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (a = { notation: "scientific" }, e = e.slice(1)), a) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (a.signDisplay = "always", e = e.slice(2)) : r === "+?" && (a.signDisplay = "exceptZero", e = e.slice(2)), !Up.test(e)) throw new Error("Malformed concise eng/scientific notation");
    a.minimumIntegerDigits = e.length;
  }
  return a;
}
function K0(e) {
  var a = {}, r = Pp(e);
  return r || a;
}
function bS(e) {
  for (var a = {}, r = 0, l = e; r < l.length; r++) {
    var u = l[r];
    switch (u.stem) {
      case "percent":
      case "%":
        a.style = "percent";
        continue;
      case "%x100":
        a.style = "percent", a.scale = 100;
        continue;
      case "currency":
        a.style = "currency", a.currency = u.options[0];
        continue;
      case "group-off":
      case ",_":
        a.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        a.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        a.style = "unit", a.unit = pS(u.options[0]);
        continue;
      case "compact-short":
      case "K":
        a.notation = "compact", a.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        a.notation = "compact", a.compactDisplay = "long";
        continue;
      case "scientific":
        a = ie(ie(ie({}, a), { notation: "scientific" }), u.options.reduce(function(m, g) {
          return ie(ie({}, m), K0(g));
        }, {}));
        continue;
      case "engineering":
        a = ie(ie(ie({}, a), { notation: "engineering" }), u.options.reduce(function(m, g) {
          return ie(ie({}, m), K0(g));
        }, {}));
        continue;
      case "notation-simple":
        a.notation = "standard";
        continue;
      case "unit-width-narrow":
        a.currencyDisplay = "narrowSymbol", a.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        a.currencyDisplay = "code", a.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        a.currencyDisplay = "name", a.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        a.currencyDisplay = "symbol";
        continue;
      case "scale":
        a.scale = parseFloat(u.options[0]);
        continue;
      case "rounding-mode-floor":
        a.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        a.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        a.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        a.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        a.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        a.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        a.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (u.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
        u.options[0].replace(gS, function(m, g, p, _, S, w) {
          if (g) a.minimumIntegerDigits = p.length;
          else {
            if (_ && S) throw new Error("We currently do not support maximum integer digits");
            if (w) throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Up.test(u.stem)) {
      a.minimumIntegerDigits = u.stem.length;
      continue;
    }
    if (W0.test(u.stem)) {
      if (u.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
      u.stem.replace(W0, function(m, g, p, _, S, w) {
        return p === "*" ? a.minimumFractionDigits = g.length : _ && _[0] === "#" ? a.maximumFractionDigits = _.length : S && w ? (a.minimumFractionDigits = S.length, a.maximumFractionDigits = S.length + w.length) : (a.minimumFractionDigits = g.length, a.maximumFractionDigits = g.length), "";
      });
      var c = u.options[0];
      c === "w" ? a = ie(ie({}, a), { trailingZeroDisplay: "stripIfInteger" }) : c && (a = ie(ie({}, a), Q0(c)));
      continue;
    }
    if (Bp.test(u.stem)) {
      a = ie(ie({}, a), Q0(u.stem));
      continue;
    }
    var d = Pp(u.stem);
    d && (a = ie(ie({}, a), d));
    var h = yS(u.stem);
    h && (a = ie(ie({}, a), h));
  }
  return a;
}
var eu = {
  "001": ["H", "h"],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: ["H", "hB"],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: ["H", "hB"],
  AO: ["H", "hB"],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: ["h", "H"],
  AT: ["H", "hB"],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: ["H", "hB"],
  AX: ["H"],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: ["H", "hB"],
  BF: ["H", "hB"],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: ["H", "h"],
  BJ: ["H", "hB"],
  BL: ["H", "hB"],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: ["H"],
  BR: ["H", "hB"],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: ["h", "H"],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: ["H", "h"],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: ["hB", "H"],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: ["H", "hB"],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: ["H", "hB"],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: ["H"],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: ["H", "hB"],
  CW: ["H", "hB"],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: ["H"],
  DE: ["H", "hB"],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: ["h", "H"],
  DK: ["H"],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: ["H", "hB"],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: ["h", "H"],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: ["H"],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: ["H", "h"],
  FR: ["H", "hB"],
  GA: ["H", "hB"],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: ["H", "hB"],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: ["h", "H"],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: ["H", "h"],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: ["H", "hB"],
  GP: ["H", "hB"],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: ["H", "hB"],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: ["H", "hB"],
  HU: ["H", "h"],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: ["H"],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: ["H", "hB"],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: ["h", "H"],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: ["hB", "H"],
  IS: ["H"],
  IT: ["H", "hB"],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: ["H", "hB"],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: ["h", "H"],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: ["H", "hB"],
  MD: ["H", "hB"],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: ["H", "hB"],
  MG: ["H", "h"],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: ["H"],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: ["H", "hB"],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: ["H", "h"],
  MU: ["H", "h"],
  MV: ["H", "h"],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: ["H", "hB"],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: ["H", "hB"],
  NE: ["H"],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: ["H", "hB"],
  NO: ["H", "h"],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: ["h", "H"],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: ["H", "h"],
  PM: ["H", "hB"],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: ["H", "hB"],
  PW: ["h", "H"],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: ["H", "hB"],
  RO: ["H", "hB"],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: ["H"],
  RW: ["H", "h"],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: ["H"],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: ["H", "hB"],
  SJ: ["H"],
  SK: ["H"],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: ["h", "H"],
  SR: ["H", "hB"],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: ["H", "hB"],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: ["H", "hB"],
  TH: ["H", "h"],
  TJ: ["H", "h"],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: ["H", "h"],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: ["h", "H"],
  TR: ["H", "hB"],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: ["H", "h"],
  VU: ["h", "H"],
  WF: ["H", "hB"],
  WS: ["h", "H"],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: ["H", "hB"],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: ["H", "h"],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function _S(e, a) {
  for (var r = "", l = 0; l < e.length; l++) {
    var u = e.charAt(l);
    if (u === "j") {
      for (var c = 0; l + 1 < e.length && e.charAt(l + 1) === u; )
        c++, l++;
      var d = 1 + (c & 1), h = c < 2 ? 1 : 3 + (c >> 1), m = "a", g = SS(a);
      for ((g == "H" || g == "k") && (h = 0); h-- > 0; ) r += m;
      for (; d-- > 0; ) r = g + r;
    } else u === "J" ? r += "H" : r += u;
  }
  return r;
}
function SS(e) {
  var a = e.hourCycle;
  if (a === void 0 && e.hourCycles && e.hourCycles.length && (a = e.hourCycles[0]), a) switch (a) {
    case "h24":
      return "k";
    case "h23":
      return "H";
    case "h12":
      return "h";
    case "h11":
      return "K";
    default:
      throw new Error("Invalid hourCycle");
  }
  var r = e.language, l;
  return r !== "root" && (l = e.maximize().region), (eu[l || ""] || eu[r || ""] || eu["".concat(r, "-001")] || eu["001"])[0];
}
var df, ES = new RegExp("^".concat(jp.source, "*")), wS = new RegExp("".concat(jp.source, "*$"));
function Oe(e, a) {
  return {
    start: e,
    end: a
  };
}
var TS = !!String.prototype.startsWith && "_a".startsWith("a", 1), CS = !!String.fromCodePoint, AS = !!Object.fromEntries, xS = !!String.prototype.codePointAt, OS = !!String.prototype.trimStart, MS = !!String.prototype.trimEnd, RS = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Bf = !0;
try {
  Bf = ((df = Gp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) === null || df === void 0 ? void 0 : df[0]) === "a";
} catch {
  Bf = !1;
}
var J0 = TS ? function(a, r, l) {
  return a.startsWith(r, l);
} : function(a, r, l) {
  return a.slice(l, l + r.length) === r;
}, Uf = CS ? String.fromCodePoint : function() {
  for (var a = [], r = 0; r < arguments.length; r++) a[r] = arguments[r];
  for (var l = "", u = a.length, c = 0, d; u > c; ) {
    if (d = a[c++], d > 1114111) throw RangeError(d + " is not a valid code point");
    l += d < 65536 ? String.fromCharCode(d) : String.fromCharCode(((d -= 65536) >> 10) + 55296, d % 1024 + 56320);
  }
  return l;
}, e1 = AS ? Object.fromEntries : function(a) {
  for (var r = {}, l = 0, u = a; l < u.length; l++) {
    var c = u[l], d = c[0];
    r[d] = c[1];
  }
  return r;
}, Zp = xS ? function(a, r) {
  return a.codePointAt(r);
} : function(a, r) {
  var l = a.length;
  if (!(r < 0 || r >= l)) {
    var u = a.charCodeAt(r), c;
    return u < 55296 || u > 56319 || r + 1 === l || (c = a.charCodeAt(r + 1)) < 56320 || c > 57343 ? u : (u - 55296 << 10) + (c - 56320) + 65536;
  }
}, NS = OS ? function(a) {
  return a.trimStart();
} : function(a) {
  return a.replace(ES, "");
}, DS = MS ? function(a) {
  return a.trimEnd();
} : function(a) {
  return a.replace(wS, "");
};
function Gp(e, a) {
  return new RegExp(e, a);
}
var Pf;
if (Bf) {
  var t1 = Gp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Pf = function(a, r) {
    var l;
    return t1.lastIndex = r, (l = t1.exec(a)[1]) !== null && l !== void 0 ? l : "";
  };
} else Pf = function(a, r) {
  for (var l = []; ; ) {
    var u = Zp(a, r);
    if (u === void 0 || kp(u) || jS(u)) break;
    l.push(u), r += u >= 65536 ? 2 : 1;
  }
  return Uf.apply(void 0, l);
};
var zS = (function() {
  function e(a, r) {
    r === void 0 && (r = {}), this.message = a, this.position = {
      offset: 0,
      line: 1,
      column: 1
    }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons;
  }
  return e.prototype.parse = function() {
    if (this.offset() !== 0) throw Error("parser can only be used once");
    return this.parseMessage(0, "", !1);
  }, e.prototype.parseMessage = function(a, r, l) {
    for (var u = []; !this.isEOF(); ) {
      var c = this.char();
      if (c === 123) {
        var d = this.parseArgument(a, l);
        if (d.err) return d;
        u.push(d.val);
      } else {
        if (c === 125 && a > 0) break;
        if (c === 35 && (r === "plural" || r === "selectordinal")) {
          var h = this.clonePosition();
          this.bump(), u.push({
            type: Ve.pound,
            location: Oe(h, this.clonePosition())
          });
        } else if (c === 60 && !this.ignoreTag && this.peek() === 47) {
          if (l) break;
          return this.error(Ae.UNMATCHED_CLOSING_TAG, Oe(this.clonePosition(), this.clonePosition()));
        } else if (c === 60 && !this.ignoreTag && Zf(this.peek() || 0)) {
          var d = this.parseTag(a, r);
          if (d.err) return d;
          u.push(d.val);
        } else {
          var d = this.parseLiteral(a, r);
          if (d.err) return d;
          u.push(d.val);
        }
      }
    }
    return {
      val: u,
      err: null
    };
  }, e.prototype.parseTag = function(a, r) {
    var l = this.clonePosition();
    this.bump();
    var u = this.parseTagName();
    if (this.bumpSpace(), this.bumpIf("/>")) return {
      val: {
        type: Ve.literal,
        value: "<".concat(u, "/>"),
        location: Oe(l, this.clonePosition())
      },
      err: null
    };
    if (this.bumpIf(">")) {
      var c = this.parseMessage(a + 1, r, !0);
      if (c.err) return c;
      var d = c.val, h = this.clonePosition();
      if (this.bumpIf("</")) {
        if (this.isEOF() || !Zf(this.char())) return this.error(Ae.INVALID_TAG, Oe(h, this.clonePosition()));
        var m = this.clonePosition();
        return u !== this.parseTagName() ? this.error(Ae.UNMATCHED_CLOSING_TAG, Oe(m, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
          val: {
            type: Ve.tag,
            value: u,
            children: d,
            location: Oe(l, this.clonePosition())
          },
          err: null
        } : this.error(Ae.INVALID_TAG, Oe(h, this.clonePosition())));
      } else return this.error(Ae.UNCLOSED_TAG, Oe(l, this.clonePosition()));
    } else return this.error(Ae.INVALID_TAG, Oe(l, this.clonePosition()));
  }, e.prototype.parseTagName = function() {
    var a = this.offset();
    for (this.bump(); !this.isEOF() && LS(this.char()); ) this.bump();
    return this.message.slice(a, this.offset());
  }, e.prototype.parseLiteral = function(a, r) {
    for (var l = this.clonePosition(), u = ""; ; ) {
      var c = this.tryParseQuote(r);
      if (c) {
        u += c;
        continue;
      }
      var d = this.tryParseUnquoted(a, r);
      if (d) {
        u += d;
        continue;
      }
      var h = this.tryParseLeftAngleBracket();
      if (h) {
        u += h;
        continue;
      }
      break;
    }
    var m = Oe(l, this.clonePosition());
    return {
      val: {
        type: Ve.literal,
        value: u,
        location: m
      },
      err: null
    };
  }, e.prototype.tryParseLeftAngleBracket = function() {
    return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !HS(this.peek() || 0)) ? (this.bump(), "<") : null;
  }, e.prototype.tryParseQuote = function(a) {
    if (this.isEOF() || this.char() !== 39) return null;
    switch (this.peek()) {
      case 39:
        return this.bump(), this.bump(), "'";
      case 123:
      case 60:
      case 62:
      case 125:
        break;
      case 35:
        if (a === "plural" || a === "selectordinal") break;
        return null;
      default:
        return null;
    }
    this.bump();
    var r = [this.char()];
    for (this.bump(); !this.isEOF(); ) {
      var l = this.char();
      if (l === 39) if (this.peek() === 39)
        r.push(39), this.bump();
      else {
        this.bump();
        break;
      }
      else r.push(l);
      this.bump();
    }
    return Uf.apply(void 0, r);
  }, e.prototype.tryParseUnquoted = function(a, r) {
    if (this.isEOF()) return null;
    var l = this.char();
    return l === 60 || l === 123 || l === 35 && (r === "plural" || r === "selectordinal") || l === 125 && a > 0 ? null : (this.bump(), Uf(l));
  }, e.prototype.parseArgument = function(a, r) {
    var l = this.clonePosition();
    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE, Oe(l, this.clonePosition()));
    if (this.char() === 125)
      return this.bump(), this.error(Ae.EMPTY_ARGUMENT, Oe(l, this.clonePosition()));
    var u = this.parseIdentifierIfPossible().value;
    if (!u) return this.error(Ae.MALFORMED_ARGUMENT, Oe(l, this.clonePosition()));
    if (this.bumpSpace(), this.isEOF()) return this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE, Oe(l, this.clonePosition()));
    switch (this.char()) {
      case 125:
        return this.bump(), {
          val: {
            type: Ve.argument,
            value: u,
            location: Oe(l, this.clonePosition())
          },
          err: null
        };
      case 44:
        return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE, Oe(l, this.clonePosition())) : this.parseArgumentOptions(a, r, u, l);
      default:
        return this.error(Ae.MALFORMED_ARGUMENT, Oe(l, this.clonePosition()));
    }
  }, e.prototype.parseIdentifierIfPossible = function() {
    var a = this.clonePosition(), r = this.offset(), l = Pf(this.message, r), u = r + l.length;
    return this.bumpTo(u), {
      value: l,
      location: Oe(a, this.clonePosition())
    };
  }, e.prototype.parseArgumentOptions = function(a, r, l, u) {
    var c, d = this.clonePosition(), h = this.parseIdentifierIfPossible().value, m = this.clonePosition();
    switch (h) {
      case "":
        return this.error(Ae.EXPECT_ARGUMENT_TYPE, Oe(d, m));
      case "number":
      case "date":
      case "time":
        this.bumpSpace();
        var g = null;
        if (this.bumpIf(",")) {
          this.bumpSpace();
          var p = this.clonePosition(), _ = this.parseSimpleArgStyleIfPossible();
          if (_.err) return _;
          var S = DS(_.val);
          if (S.length === 0) return this.error(Ae.EXPECT_ARGUMENT_STYLE, Oe(this.clonePosition(), this.clonePosition()));
          g = {
            style: S,
            styleLocation: Oe(p, this.clonePosition())
          };
        }
        var D = this.tryParseArgumentClose(u);
        if (D.err) return D;
        var w = Oe(u, this.clonePosition());
        if (g && J0(g?.style, "::", 0)) {
          var A = NS(g.style.slice(2));
          if (h === "number") {
            var _ = this.parseNumberSkeletonFromString(A, g.styleLocation);
            return _.err ? _ : {
              val: {
                type: Ve.number,
                value: l,
                location: w,
                style: _.val
              },
              err: null
            };
          } else {
            if (A.length === 0) return this.error(Ae.EXPECT_DATE_TIME_SKELETON, w);
            var T = A;
            this.locale && (T = _S(A, this.locale));
            var S = {
              type: cr.dateTime,
              pattern: T,
              location: g.styleLocation,
              parsedOptions: this.shouldParseSkeletons ? hS(T) : {}
            };
            return {
              val: {
                type: h === "date" ? Ve.date : Ve.time,
                value: l,
                location: w,
                style: S
              },
              err: null
            };
          }
        }
        return {
          val: {
            type: h === "number" ? Ve.number : h === "date" ? Ve.date : Ve.time,
            value: l,
            location: w,
            style: (c = g?.style) !== null && c !== void 0 ? c : null
          },
          err: null
        };
      case "plural":
      case "selectordinal":
      case "select":
        var C = this.clonePosition();
        if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ae.EXPECT_SELECT_ARGUMENT_OPTIONS, Oe(C, ie({}, C)));
        this.bumpSpace();
        var R = this.parseIdentifierIfPossible(), N = 0;
        if (h !== "select" && R.value === "offset") {
          if (!this.bumpIf(":")) return this.error(Ae.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Oe(this.clonePosition(), this.clonePosition()));
          this.bumpSpace();
          var _ = this.tryParseDecimalInteger(Ae.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ae.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
          if (_.err) return _;
          this.bumpSpace(), R = this.parseIdentifierIfPossible(), N = _.val;
        }
        var H = this.tryParsePluralOrSelectOptions(a, h, r, R);
        if (H.err) return H;
        var D = this.tryParseArgumentClose(u);
        if (D.err) return D;
        var U = Oe(u, this.clonePosition());
        return h === "select" ? {
          val: {
            type: Ve.select,
            value: l,
            options: e1(H.val),
            location: U
          },
          err: null
        } : {
          val: {
            type: Ve.plural,
            value: l,
            options: e1(H.val),
            offset: N,
            pluralType: h === "plural" ? "cardinal" : "ordinal",
            location: U
          },
          err: null
        };
      default:
        return this.error(Ae.INVALID_ARGUMENT_TYPE, Oe(d, m));
    }
  }, e.prototype.tryParseArgumentClose = function(a) {
    return this.isEOF() || this.char() !== 125 ? this.error(Ae.EXPECT_ARGUMENT_CLOSING_BRACE, Oe(a, this.clonePosition())) : (this.bump(), {
      val: !0,
      err: null
    });
  }, e.prototype.parseSimpleArgStyleIfPossible = function() {
    for (var a = 0, r = this.clonePosition(); !this.isEOF(); ) switch (this.char()) {
      case 39:
        this.bump();
        var l = this.clonePosition();
        if (!this.bumpUntil("'")) return this.error(Ae.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Oe(l, this.clonePosition()));
        this.bump();
        break;
      case 123:
        a += 1, this.bump();
        break;
      case 125:
        if (a > 0) a -= 1;
        else return {
          val: this.message.slice(r.offset, this.offset()),
          err: null
        };
        break;
      default:
        this.bump();
        break;
    }
    return {
      val: this.message.slice(r.offset, this.offset()),
      err: null
    };
  }, e.prototype.parseNumberSkeletonFromString = function(a, r) {
    var l = [];
    try {
      l = vS(a);
    } catch {
      return this.error(Ae.INVALID_NUMBER_SKELETON, r);
    }
    return {
      val: {
        type: cr.number,
        tokens: l,
        location: r,
        parsedOptions: this.shouldParseSkeletons ? bS(l) : {}
      },
      err: null
    };
  }, e.prototype.tryParsePluralOrSelectOptions = function(a, r, l, u) {
    for (var c, d = !1, h = [], m = /* @__PURE__ */ new Set(), g = u.value, p = u.location; ; ) {
      if (g.length === 0) {
        var _ = this.clonePosition();
        if (r !== "select" && this.bumpIf("=")) {
          var S = this.tryParseDecimalInteger(Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ae.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (S.err) return S;
          p = Oe(_, this.clonePosition()), g = this.message.slice(_.offset, this.offset());
        } else break;
      }
      if (m.has(g)) return this.error(r === "select" ? Ae.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ae.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, p);
      g === "other" && (d = !0), this.bumpSpace();
      var w = this.clonePosition();
      if (!this.bumpIf("{")) return this.error(r === "select" ? Ae.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Oe(this.clonePosition(), this.clonePosition()));
      var A = this.parseMessage(a + 1, r, l);
      if (A.err) return A;
      var T = this.tryParseArgumentClose(w);
      if (T.err) return T;
      h.push([g, {
        value: A.val,
        location: Oe(w, this.clonePosition())
      }]), m.add(g), this.bumpSpace(), c = this.parseIdentifierIfPossible(), g = c.value, p = c.location;
    }
    return h.length === 0 ? this.error(r === "select" ? Ae.EXPECT_SELECT_ARGUMENT_SELECTOR : Ae.EXPECT_PLURAL_ARGUMENT_SELECTOR, Oe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !d ? this.error(Ae.MISSING_OTHER_CLAUSE, Oe(this.clonePosition(), this.clonePosition())) : {
      val: h,
      err: null
    };
  }, e.prototype.tryParseDecimalInteger = function(a, r) {
    var l = 1, u = this.clonePosition();
    this.bumpIf("+") || this.bumpIf("-") && (l = -1);
    for (var c = !1, d = 0; !this.isEOF(); ) {
      var h = this.char();
      if (h >= 48 && h <= 57)
        c = !0, d = d * 10 + (h - 48), this.bump();
      else break;
    }
    var m = Oe(u, this.clonePosition());
    return c ? (d *= l, RS(d) ? {
      val: d,
      err: null
    } : this.error(r, m)) : this.error(a, m);
  }, e.prototype.offset = function() {
    return this.position.offset;
  }, e.prototype.isEOF = function() {
    return this.offset() === this.message.length;
  }, e.prototype.clonePosition = function() {
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column
    };
  }, e.prototype.char = function() {
    var a = this.position.offset;
    if (a >= this.message.length) throw Error("out of bound");
    var r = Zp(this.message, a);
    if (r === void 0) throw Error("Offset ".concat(a, " is at invalid UTF-16 code unit boundary"));
    return r;
  }, e.prototype.error = function(a, r) {
    return {
      val: null,
      err: {
        kind: a,
        message: this.message,
        location: r
      }
    };
  }, e.prototype.bump = function() {
    if (!this.isEOF()) {
      var a = this.char();
      a === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += a < 65536 ? 1 : 2);
    }
  }, e.prototype.bumpIf = function(a) {
    if (J0(this.message, a, this.offset())) {
      for (var r = 0; r < a.length; r++) this.bump();
      return !0;
    }
    return !1;
  }, e.prototype.bumpUntil = function(a) {
    var r = this.offset(), l = this.message.indexOf(a, r);
    return l >= 0 ? (this.bumpTo(l), !0) : (this.bumpTo(this.message.length), !1);
  }, e.prototype.bumpTo = function(a) {
    if (this.offset() > a) throw Error("targetOffset ".concat(a, " must be greater than or equal to the current offset ").concat(this.offset()));
    for (a = Math.min(a, this.message.length); ; ) {
      var r = this.offset();
      if (r === a) break;
      if (r > a) throw Error("targetOffset ".concat(a, " is at invalid UTF-16 code unit boundary"));
      if (this.bump(), this.isEOF()) break;
    }
  }, e.prototype.bumpSpace = function() {
    for (; !this.isEOF() && kp(this.char()); ) this.bump();
  }, e.prototype.peek = function() {
    if (this.isEOF()) return null;
    var a = this.char(), r = this.offset(), l = this.message.charCodeAt(r + (a >= 65536 ? 2 : 1));
    return l ?? null;
  }, e;
})();
function Zf(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function HS(e) {
  return Zf(e) || e === 47;
}
function LS(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function kp(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function jS(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Gf(e) {
  e.forEach(function(a) {
    if (delete a.location, Dp(a) || zp(a)) for (var r in a.options)
      delete a.options[r].location, Gf(a.options[r].value);
    else Mp(a) && Lp(a.style) || (Rp(a) || Np(a)) && jf(a.style) ? delete a.style.location : Hp(a) && Gf(a.children);
  });
}
function BS(e, a) {
  a === void 0 && (a = {}), a = ie({
    shouldParseSkeletons: !0,
    requiresOtherClause: !0
  }, a);
  var r = new zS(e, a).parse();
  if (r.err) {
    var l = SyntaxError(Ae[r.err.kind]);
    throw l.location = r.err.location, l.originalMessage = r.err.message, l;
  }
  return a?.captureLocation || Gf(r.val), r.val;
}
var jn;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(jn || (jn = {}));
var ja = (function(e) {
  sn(a, e);
  function a(r, l, u) {
    var c = e.call(this, r) || this;
    return c.code = l, c.originalMessage = u, c;
  }
  return a.prototype.toString = function() {
    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
  }, a;
})(Error), n1 = (function(e) {
  sn(a, e);
  function a(r, l, u, c) {
    return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(l, '". Options are "').concat(Object.keys(u).join('", "'), '"'), jn.INVALID_VALUE, c) || this;
  }
  return a;
})(ja), US = (function(e) {
  sn(a, e);
  function a(r, l, u) {
    return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(l), jn.INVALID_VALUE, u) || this;
  }
  return a;
})(ja), PS = (function(e) {
  sn(a, e);
  function a(r, l) {
    return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(l, '"'), jn.MISSING_VALUE, l) || this;
  }
  return a;
})(ja), wt;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(wt || (wt = {}));
function ZS(e) {
  return e.length < 2 ? e : e.reduce(function(a, r) {
    var l = a[a.length - 1];
    return !l || l.type !== wt.literal || r.type !== wt.literal ? a.push(r) : l.value += r.value, a;
  }, []);
}
function Ip(e) {
  return typeof e == "function";
}
function vu(e, a, r, l, u, c, d) {
  if (e.length === 1 && Y0(e[0])) return [{
    type: wt.literal,
    value: e[0].value
  }];
  for (var h = [], m = 0, g = e; m < g.length; m++) {
    var p = g[m];
    if (Y0(p)) {
      h.push({
        type: wt.literal,
        value: p.value
      });
      continue;
    }
    if (fS(p)) {
      typeof c == "number" && h.push({
        type: wt.literal,
        value: r.getNumberFormat(a).format(c)
      });
      continue;
    }
    var _ = p.value;
    if (!(u && _ in u)) throw new PS(_, d);
    var S = u[_];
    if (cS(p)) {
      (!S || typeof S == "string" || typeof S == "number") && (S = typeof S == "string" || typeof S == "number" ? String(S) : ""), h.push({
        type: typeof S == "string" ? wt.literal : wt.object,
        value: S
      });
      continue;
    }
    if (Rp(p)) {
      var w = typeof p.style == "string" ? l.date[p.style] : jf(p.style) ? p.style.parsedOptions : void 0;
      h.push({
        type: wt.literal,
        value: r.getDateTimeFormat(a, w).format(S)
      });
      continue;
    }
    if (Np(p)) {
      var w = typeof p.style == "string" ? l.time[p.style] : jf(p.style) ? p.style.parsedOptions : l.time.medium;
      h.push({
        type: wt.literal,
        value: r.getDateTimeFormat(a, w).format(S)
      });
      continue;
    }
    if (Mp(p)) {
      var w = typeof p.style == "string" ? l.number[p.style] : Lp(p.style) ? p.style.parsedOptions : void 0;
      w && w.scale && (S = S * (w.scale || 1)), h.push({
        type: wt.literal,
        value: r.getNumberFormat(a, w).format(S)
      });
      continue;
    }
    if (Hp(p)) {
      var A = p.children, T = p.value, C = u[T];
      if (!Ip(C)) throw new US(T, "function", d);
      var R = C(vu(A, a, r, l, u, c).map(function(D) {
        return D.value;
      }));
      Array.isArray(R) || (R = [R]), h.push.apply(h, R.map(function(D) {
        return {
          type: typeof D == "string" ? wt.literal : wt.object,
          value: D
        };
      }));
    }
    if (Dp(p)) {
      var N = p.options[S] || p.options.other;
      if (!N) throw new n1(p.value, S, Object.keys(p.options), d);
      h.push.apply(h, vu(N.value, a, r, l, u));
      continue;
    }
    if (zp(p)) {
      var N = p.options["=".concat(S)];
      if (!N) {
        if (!Intl.PluralRules) throw new ja(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, jn.MISSING_INTL_API, d);
        var H = r.getPluralRules(a, { type: p.pluralType }).select(S - (p.offset || 0));
        N = p.options[H] || p.options.other;
      }
      if (!N) throw new n1(p.value, S, Object.keys(p.options), d);
      h.push.apply(h, vu(N.value, a, r, l, u, S - (p.offset || 0)));
      continue;
    }
  }
  return ZS(h);
}
function GS(e, a) {
  return a ? ie(ie(ie({}, e || {}), a || {}), Object.keys(e).reduce(function(r, l) {
    return r[l] = ie(ie({}, e[l]), a[l] || {}), r;
  }, {})) : e;
}
function kS(e, a) {
  return a ? Object.keys(e).reduce(function(r, l) {
    return r[l] = GS(e[l], a[l]), r;
  }, ie({}, e)) : e;
}
function hf(e) {
  return { create: function() {
    return {
      get: function(a) {
        return e[a];
      },
      set: function(a, r) {
        e[a] = r;
      }
    };
  } };
}
function IS(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Rn(function() {
      for (var a, r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
      return new ((a = Intl.NumberFormat).bind.apply(a, yn([void 0], r, !1)))();
    }, {
      cache: hf(e.number),
      strategy: Nn.variadic
    }),
    getDateTimeFormat: Rn(function() {
      for (var a, r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
      return new ((a = Intl.DateTimeFormat).bind.apply(a, yn([void 0], r, !1)))();
    }, {
      cache: hf(e.dateTime),
      strategy: Nn.variadic
    }),
    getPluralRules: Rn(function() {
      for (var a, r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
      return new ((a = Intl.PluralRules).bind.apply(a, yn([void 0], r, !1)))();
    }, {
      cache: hf(e.pluralRules),
      strategy: Nn.variadic
    })
  };
}
var $p = (function() {
  function e(a, r, l, u) {
    r === void 0 && (r = e.defaultLocale);
    var c = this;
    if (this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    }, this.format = function(m) {
      var g = c.formatToParts(m);
      if (g.length === 1) return g[0].value;
      var p = g.reduce(function(_, S) {
        return !_.length || S.type !== wt.literal || typeof _[_.length - 1] != "string" ? _.push(S.value) : _[_.length - 1] += S.value, _;
      }, []);
      return p.length <= 1 ? p[0] || "" : p;
    }, this.formatToParts = function(m) {
      return vu(c.ast, c.locales, c.formatters, c.formats, m, void 0, c.message);
    }, this.resolvedOptions = function() {
      var m;
      return { locale: ((m = c.resolvedLocale) === null || m === void 0 ? void 0 : m.toString()) || Intl.NumberFormat.supportedLocalesOf(c.locales)[0] };
    }, this.getAst = function() {
      return c.ast;
    }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof a == "string") {
      if (this.message = a, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
      var d = u || {};
      d.formatters;
      var h = ia(d, ["formatters"]);
      this.ast = e.__parse(a, ie(ie({}, h), { locale: this.resolvedLocale }));
    } else this.ast = a;
    if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
    this.formats = kS(e.formats, l), this.formatters = u && u.formatters || IS(this.formatterCache);
  }
  return Object.defineProperty(e, "defaultLocale", {
    get: function() {
      return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
    },
    enumerable: !1,
    configurable: !0
  }), e.memoizedDefaultLocale = null, e.resolveLocale = function(a) {
    if (!(typeof Intl.Locale > "u")) {
      var r = Intl.NumberFormat.supportedLocalesOf(a);
      return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof a == "string" ? a : a[0]);
    }
  }, e.__parse = BS, e.formats = {
    number: {
      integer: { maximumFractionDigits: 0 },
      currency: { style: "currency" },
      percent: { style: "percent" }
    },
    date: {
      short: {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
      },
      medium: {
        month: "short",
        day: "numeric",
        year: "numeric"
      },
      long: {
        month: "long",
        day: "numeric",
        year: "numeric"
      },
      full: {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }
    },
    time: {
      short: {
        hour: "numeric",
        minute: "numeric"
      },
      medium: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      },
      long: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      },
      full: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      }
    }
  }, e;
})(), si;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(si || (si = {}));
var xo = (function(e) {
  sn(a, e);
  function a(r, l, u) {
    var c = this, d = u ? u instanceof Error ? u : new Error(String(u)) : void 0;
    return c = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(l, `
`).concat(d ? `
`.concat(d.message, `
`).concat(d.stack) : "")) || this, c.code = r, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(c, a), c;
  }
  return a;
})(Error), $S = (function(e) {
  sn(a, e);
  function a(r, l) {
    return e.call(this, si.UNSUPPORTED_FORMATTER, r, l) || this;
  }
  return a;
})(xo), qS = (function(e) {
  sn(a, e);
  function a(r, l) {
    return e.call(this, si.INVALID_CONFIG, r, l) || this;
  }
  return a;
})(xo), a1 = (function(e) {
  sn(a, e);
  function a(r, l) {
    return e.call(this, si.MISSING_DATA, r, l) || this;
  }
  return a;
})(xo), cn = (function(e) {
  sn(a, e);
  function a(r, l, u) {
    var c = e.call(this, si.FORMAT_ERROR, "".concat(r, `
Locale: `).concat(l, `
`), u) || this;
    return c.locale = l, c;
  }
  return a;
})(xo), mf = (function(e) {
  sn(a, e);
  function a(r, l, u, c) {
    var d = e.call(this, "".concat(r, `
MessageID: `).concat(u?.id, `
Default Message: `).concat(u?.defaultMessage, `
Description: `).concat(u?.description, `
`), l, c) || this;
    return d.descriptor = u, d.locale = l, d;
  }
  return a;
})(cn), VS = (function(e) {
  sn(a, e);
  function a(r, l) {
    var u = e.call(this, si.MISSING_TRANSLATION, 'Missing message: "'.concat(r.id, '" for locale "').concat(l, '", using ').concat(r.defaultMessage ? "default message (".concat(typeof r.defaultMessage == "string" ? r.defaultMessage : r.defaultMessage.map(function(c) {
      var d;
      return (d = c.value) !== null && d !== void 0 ? d : JSON.stringify(c);
    }).join(), ")") : "id", " as fallback.")) || this;
    return u.descriptor = r, u;
  }
  return a;
})(xo);
function FS(e, a, r) {
  if (r === void 0 && (r = Error), !e) throw new r(a);
}
function yr(e, a, r) {
  return r === void 0 && (r = {}), a.reduce(function(l, u) {
    return u in e ? l[u] = e[u] : u in r && (l[u] = r[u]), l;
  }, {});
}
var XS = function(e) {
}, YS = function(e) {
}, qp = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: XS,
  onWarn: YS
};
function Vp() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {}
  };
}
function li(e) {
  return { create: function() {
    return {
      get: function(a) {
        return e[a];
      },
      set: function(a, r) {
        e[a] = r;
      }
    };
  } };
}
function WS(e) {
  e === void 0 && (e = Vp());
  var a = Intl.RelativeTimeFormat, r = Intl.ListFormat, l = Intl.DisplayNames, u = Rn(function() {
    for (var h, m = [], g = 0; g < arguments.length; g++) m[g] = arguments[g];
    return new ((h = Intl.DateTimeFormat).bind.apply(h, yn([void 0], m, !1)))();
  }, {
    cache: li(e.dateTime),
    strategy: Nn.variadic
  }), c = Rn(function() {
    for (var h, m = [], g = 0; g < arguments.length; g++) m[g] = arguments[g];
    return new ((h = Intl.NumberFormat).bind.apply(h, yn([void 0], m, !1)))();
  }, {
    cache: li(e.number),
    strategy: Nn.variadic
  }), d = Rn(function() {
    for (var h, m = [], g = 0; g < arguments.length; g++) m[g] = arguments[g];
    return new ((h = Intl.PluralRules).bind.apply(h, yn([void 0], m, !1)))();
  }, {
    cache: li(e.pluralRules),
    strategy: Nn.variadic
  });
  return {
    getDateTimeFormat: u,
    getNumberFormat: c,
    getMessageFormat: Rn(function(h, m, g, p) {
      return new $p(h, m, g, ie({ formatters: {
        getNumberFormat: c,
        getDateTimeFormat: u,
        getPluralRules: d
      } }, p || {}));
    }, {
      cache: li(e.message),
      strategy: Nn.variadic
    }),
    getRelativeTimeFormat: Rn(function() {
      for (var h = [], m = 0; m < arguments.length; m++) h[m] = arguments[m];
      return new (a.bind.apply(a, yn([void 0], h, !1)))();
    }, {
      cache: li(e.relativeTime),
      strategy: Nn.variadic
    }),
    getPluralRules: d,
    getListFormat: Rn(function() {
      for (var h = [], m = 0; m < arguments.length; m++) h[m] = arguments[m];
      return new (r.bind.apply(r, yn([void 0], h, !1)))();
    }, {
      cache: li(e.list),
      strategy: Nn.variadic
    }),
    getDisplayNames: Rn(function() {
      for (var h = [], m = 0; m < arguments.length; m++) h[m] = arguments[m];
      return new (l.bind.apply(l, yn([void 0], h, !1)))();
    }, {
      cache: li(e.displayNames),
      strategy: Nn.variadic
    })
  };
}
function md(e, a, r, l) {
  var u = e && e[a], c;
  if (u && (c = u[r]), c) return c;
  l(new $S("No ".concat(a, " format named: ").concat(r)));
}
function tu(e, a) {
  return Object.keys(e).reduce(function(r, l) {
    return r[l] = ie({ timeZone: a }, e[l]), r;
  }, {});
}
function i1(e, a) {
  return Object.keys(ie(ie({}, e), a)).reduce(function(r, l) {
    return r[l] = ie(ie({}, e[l] || {}), a[l] || {}), r;
  }, {});
}
function r1(e, a) {
  if (!a) return e;
  var r = $p.formats;
  return ie(ie(ie({}, r), e), {
    date: i1(tu(r.date, a), tu(e.date || {}, a)),
    time: i1(tu(r.time, a), tu(e.time || {}, a))
  });
}
var kf = function(e, a, r, l, u) {
  var c = e.locale, d = e.formats, h = e.messages, m = e.defaultLocale, g = e.defaultFormats, p = e.fallbackOnEmptyString, _ = e.onError, S = e.timeZone, w = e.defaultRichTextElements;
  r === void 0 && (r = { id: "" });
  var A = r.id, T = r.defaultMessage;
  FS(!!A, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var C = String(A), R = h && Object.prototype.hasOwnProperty.call(h, C) && h[C];
  if (Array.isArray(R) && R.length === 1 && R[0].type === Ve.literal) return R[0].value;
  if (!l && R && typeof R == "string" && !w) return R.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (l = ie(ie({}, w), l || {}), d = r1(d, S), g = r1(g, S), !R) {
    if (p === !1 && R === "") return R;
    if ((!T || c && c.toLowerCase() !== m.toLowerCase()) && _(new VS(r, c)), T) try {
      var N = a.getMessageFormat(T, m, g, u);
      return N.format(l);
    } catch (H) {
      return _(new mf('Error formatting default message for: "'.concat(C, '", rendering default message verbatim'), c, r, H)), typeof T == "string" ? T : C;
    }
    return C;
  }
  try {
    var N = a.getMessageFormat(R, c, d, ie({ formatters: a }, u || {}));
    return N.format(l);
  } catch (H) {
    _(new mf('Error formatting message: "'.concat(C, '", using ').concat(T ? "default message" : "id", " as fallback."), c, r, H));
  }
  if (T) try {
    var N = a.getMessageFormat(T, m, g, u);
    return N.format(l);
  } catch (H) {
    _(new mf('Error formatting the default message for: "'.concat(C, '", rendering message verbatim'), c, r, H));
  }
  return typeof R == "string" ? R : typeof T == "string" ? T : C;
}, QS = [
  "formatMatcher",
  "timeZone",
  "hour12",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "hourCycle",
  "dateStyle",
  "timeStyle",
  "calendar",
  "numberingSystem",
  "fractionalSecondDigits"
];
function Oo(e, a, r, l) {
  var u = e.locale, c = e.formats, d = e.onError, h = e.timeZone;
  l === void 0 && (l = {});
  var m = l.format, g = ie(ie({}, h && { timeZone: h }), m && md(c, a, m, d)), p = yr(l, QS, g);
  return a === "time" && !p.hour && !p.minute && !p.second && !p.timeStyle && !p.dateStyle && (p = ie(ie({}, p), {
    hour: "numeric",
    minute: "numeric"
  })), r(u, p);
}
function KS(e, a) {
  for (var r = [], l = 2; l < arguments.length; l++) r[l - 2] = arguments[l];
  var u = r[0], c = r[1], d = c === void 0 ? {} : c, h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Oo(e, "date", a, d).format(h);
  } catch (m) {
    e.onError(new cn("Error formatting date.", e.locale, m));
  }
  return String(h);
}
function JS(e, a) {
  for (var r = [], l = 2; l < arguments.length; l++) r[l - 2] = arguments[l];
  var u = r[0], c = r[1], d = c === void 0 ? {} : c, h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Oo(e, "time", a, d).format(h);
  } catch (m) {
    e.onError(new cn("Error formatting time.", e.locale, m));
  }
  return String(h);
}
function eE(e, a) {
  for (var r = [], l = 2; l < arguments.length; l++) r[l - 2] = arguments[l];
  var u = r[0], c = r[1], d = r[2], h = d === void 0 ? {} : d, m = typeof u == "string" ? new Date(u || 0) : u, g = typeof c == "string" ? new Date(c || 0) : c;
  try {
    return Oo(e, "dateTimeRange", a, h).formatRange(m, g);
  } catch (p) {
    e.onError(new cn("Error formatting date time range.", e.locale, p));
  }
  return String(m);
}
function tE(e, a) {
  for (var r = [], l = 2; l < arguments.length; l++) r[l - 2] = arguments[l];
  var u = r[0], c = r[1], d = c === void 0 ? {} : c, h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Oo(e, "date", a, d).formatToParts(h);
  } catch (m) {
    e.onError(new cn("Error formatting date.", e.locale, m));
  }
  return [];
}
function nE(e, a) {
  for (var r = [], l = 2; l < arguments.length; l++) r[l - 2] = arguments[l];
  var u = r[0], c = r[1], d = c === void 0 ? {} : c, h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Oo(e, "time", a, d).formatToParts(h);
  } catch (m) {
    e.onError(new cn("Error formatting time.", e.locale, m));
  }
  return [];
}
var aE = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function iE(e, a, r, l) {
  var u = e.locale, c = e.onError;
  Intl.DisplayNames || c(new ja(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, jn.MISSING_INTL_API));
  var d = yr(l, aE);
  try {
    return a(u, d).of(r);
  } catch (h) {
    c(new cn("Error formatting display name.", u, h));
  }
}
var rE = ["type", "style"], o1 = Date.now();
function oE(e) {
  return "".concat(o1, "_").concat(e, "_").concat(o1);
}
function lE(e, a, r, l) {
  l === void 0 && (l = {});
  var u = Fp(e, a, r, l).reduce(function(c, d) {
    var h = d.value;
    return typeof h != "string" ? c.push(h) : typeof c[c.length - 1] == "string" ? c[c.length - 1] += h : c.push(h), c;
  }, []);
  return u.length === 1 ? u[0] : u.length === 0 ? "" : u;
}
function Fp(e, a, r, l) {
  var u = e.locale, c = e.onError;
  l === void 0 && (l = {}), Intl.ListFormat || c(new ja(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, jn.MISSING_INTL_API));
  var d = yr(l, rE);
  try {
    var h = {}, m = r.map(function(g, p) {
      if (typeof g == "object") {
        var _ = oE(p);
        return h[_] = g, _;
      }
      return String(g);
    });
    return a(u, d).formatToParts(m).map(function(g) {
      return g.type === "literal" ? g : ie(ie({}, g), { value: h[g.value] || g.value });
    });
  } catch (g) {
    c(new cn("Error formatting list.", u, g));
  }
  return r;
}
var uE = ["type"];
function sE(e, a, r, l) {
  var u = e.locale, c = e.onError;
  l === void 0 && (l = {}), Intl.PluralRules || c(new ja(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, jn.MISSING_INTL_API));
  var d = yr(l, uE);
  try {
    return a(u, d).select(r);
  } catch (h) {
    c(new cn("Error formatting plural.", u, h));
  }
  return "other";
}
var cE = ["numeric", "style"];
function fE(e, a, r) {
  var l = e.locale, u = e.formats, c = e.onError;
  r === void 0 && (r = {});
  var d = r.format, h = !!d && md(u, "relative", d, c) || {};
  return a(l, yr(r, cE, h));
}
function dE(e, a, r, l, u) {
  u === void 0 && (u = {}), l || (l = "second"), Intl.RelativeTimeFormat || e.onError(new ja(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, jn.MISSING_INTL_API));
  try {
    return fE(e, a, u).format(r, l);
  } catch (c) {
    e.onError(new cn("Error formatting relative time.", e.locale, c));
  }
  return String(r);
}
var hE = [
  "style",
  "currency",
  "unit",
  "unitDisplay",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "currencyDisplay",
  "currencySign",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "numberingSystem",
  "trailingZeroDisplay",
  "roundingPriority",
  "roundingIncrement",
  "roundingMode"
];
function Xp(e, a, r) {
  var l = e.locale, u = e.formats, c = e.onError;
  r === void 0 && (r = {});
  var d = r.format, h = d && md(u, "number", d, c) || {};
  return a(l, yr(r, hE, h));
}
function mE(e, a, r, l) {
  l === void 0 && (l = {});
  try {
    return Xp(e, a, l).format(r);
  } catch (u) {
    e.onError(new cn("Error formatting number.", e.locale, u));
  }
  return String(r);
}
function vE(e, a, r, l) {
  l === void 0 && (l = {});
  try {
    return Xp(e, a, l).formatToParts(r);
  } catch (u) {
    e.onError(new cn("Error formatting number.", e.locale, u));
  }
  return [];
}
function pE(e) {
  return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function gE(e) {
  e.onWarn && e.defaultRichTextElements && pE(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
function yE(e, a) {
  var r = WS(a), l = ie(ie({}, qp), e), u = l.locale, c = l.defaultLocale, d = l.onError;
  return u ? !Intl.NumberFormat.supportedLocalesOf(u).length && d ? d(new a1('Missing locale data for locale: "'.concat(u, '" in Intl.NumberFormat. Using default locale: "').concat(c, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(u).length && d && d(new a1('Missing locale data for locale: "'.concat(u, '" in Intl.DateTimeFormat. Using default locale: "').concat(c, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (d && d(new qS('"locale" was not configured, using "'.concat(c, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), l.locale = l.defaultLocale || "en"), gE(l), ie(ie({}, l), {
    formatters: r,
    formatNumber: mE.bind(null, l, r.getNumberFormat),
    formatNumberToParts: vE.bind(null, l, r.getNumberFormat),
    formatRelativeTime: dE.bind(null, l, r.getRelativeTimeFormat),
    formatDate: KS.bind(null, l, r.getDateTimeFormat),
    formatDateToParts: tE.bind(null, l, r.getDateTimeFormat),
    formatTime: JS.bind(null, l, r.getDateTimeFormat),
    formatDateTimeRange: eE.bind(null, l, r.getDateTimeFormat),
    formatTimeToParts: nE.bind(null, l, r.getDateTimeFormat),
    formatPlural: sE.bind(null, l, r.getPluralRules),
    formatMessage: kf.bind(null, l, r),
    $t: kf.bind(null, l, r),
    formatList: lE.bind(null, l, r.getListFormat),
    formatListToParts: Fp.bind(null, l, r.getListFormat),
    formatDisplayName: iE.bind(null, l, r.getDisplayNames)
  });
}
function bE(e, a, r) {
  if (r === void 0 && (r = Error), !e) throw new r(a);
}
function Yp(e) {
  bE(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var Wp = ie(ie({}, qp), { textComponent: y.Fragment }), _E = { key: 42 }, SE = function(e) {
  return y.isValidElement(e) ? y.createElement(y.Fragment, _E, e) : e;
}, EE = function(e) {
  var a;
  return (a = y.Children.map(e, SE)) !== null && a !== void 0 ? a : [];
};
function wE(e) {
  return function(a) {
    return e(y.Children.toArray(a));
  };
}
function If(e, a) {
  if (e === a) return !0;
  if (!e || !a) return !1;
  var r = Object.keys(e), l = Object.keys(a), u = r.length;
  if (l.length !== u) return !1;
  for (var c = 0; c < u; c++) {
    var d = r[c];
    if (e[d] !== a[d] || !Object.prototype.hasOwnProperty.call(a, d)) return !1;
  }
  return !0;
}
var TE = /* @__PURE__ */ Xt(((e) => {
  var a = typeof Symbol == "function" && Symbol.for, r = a ? /* @__PURE__ */ Symbol.for("react.element") : 60103, l = a ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, u = a ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, c = a ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, d = a ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, h = a ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, m = a ? /* @__PURE__ */ Symbol.for("react.context") : 60110, g = a ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, p = a ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, _ = a ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, S = a ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, w = a ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, A = a ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, T = a ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, C = a ? /* @__PURE__ */ Symbol.for("react.block") : 60121, R = a ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, N = a ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, H = a ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function D(L) {
    if (typeof L == "object" && L !== null) {
      var Q = L.$$typeof;
      switch (Q) {
        case r:
          switch (L = L.type, L) {
            case g:
            case p:
            case u:
            case d:
            case c:
            case S:
              return L;
            default:
              switch (L = L && L.$$typeof, L) {
                case m:
                case _:
                case T:
                case A:
                case h:
                  return L;
                default:
                  return Q;
              }
          }
        case l:
          return Q;
      }
    }
  }
  function U(L) {
    return D(L) === p;
  }
  e.AsyncMode = g, e.ConcurrentMode = p, e.ContextConsumer = m, e.ContextProvider = h, e.Element = r, e.ForwardRef = _, e.Fragment = u, e.Lazy = T, e.Memo = A, e.Portal = l, e.Profiler = d, e.StrictMode = c, e.Suspense = S, e.isAsyncMode = function(L) {
    return U(L) || D(L) === g;
  }, e.isConcurrentMode = U, e.isContextConsumer = function(L) {
    return D(L) === m;
  }, e.isContextProvider = function(L) {
    return D(L) === h;
  }, e.isElement = function(L) {
    return typeof L == "object" && L !== null && L.$$typeof === r;
  }, e.isForwardRef = function(L) {
    return D(L) === _;
  }, e.isFragment = function(L) {
    return D(L) === u;
  }, e.isLazy = function(L) {
    return D(L) === T;
  }, e.isMemo = function(L) {
    return D(L) === A;
  }, e.isPortal = function(L) {
    return D(L) === l;
  }, e.isProfiler = function(L) {
    return D(L) === d;
  }, e.isStrictMode = function(L) {
    return D(L) === c;
  }, e.isSuspense = function(L) {
    return D(L) === S;
  }, e.isValidElementType = function(L) {
    return typeof L == "string" || typeof L == "function" || L === u || L === p || L === d || L === c || L === S || L === w || typeof L == "object" && L !== null && (L.$$typeof === T || L.$$typeof === A || L.$$typeof === h || L.$$typeof === m || L.$$typeof === _ || L.$$typeof === R || L.$$typeof === N || L.$$typeof === H || L.$$typeof === C);
  }, e.typeOf = D;
})), CE = /* @__PURE__ */ Xt(((e, a) => {
  a.exports = TE();
})), AE = /* @__PURE__ */ Xt(((e, a) => {
  var r = CE(), l = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, u = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, c = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, d = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, h = {};
  h[r.ForwardRef] = c, h[r.Memo] = d;
  function m(C) {
    return r.isMemo(C) ? d : h[C.$$typeof] || l;
  }
  var g = Object.defineProperty, p = Object.getOwnPropertyNames, _ = Object.getOwnPropertySymbols, S = Object.getOwnPropertyDescriptor, w = Object.getPrototypeOf, A = Object.prototype;
  function T(C, R, N) {
    if (typeof R != "string") {
      if (A) {
        var H = w(R);
        H && H !== A && T(C, H, N);
      }
      var D = p(R);
      _ && (D = D.concat(_(R)));
      for (var U = m(C), L = m(R), Q = 0; Q < D.length; ++Q) {
        var ee = D[Q];
        if (!u[ee] && !(N && N[ee]) && !(L && L[ee]) && !(U && U[ee])) {
          var I = S(R, ee);
          try {
            g(C, ee, I);
          } catch {
          }
        }
      }
    }
    return C;
  }
  a.exports = T;
})), Px = /* @__PURE__ */ fd(AE()), vd = y.createContext(null), Zx = vd.Consumer, xE = vd.Provider, OE = xE, ME = vd;
function Ie() {
  var e = y.useContext(ME);
  return Yp(e), e;
}
var $f;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})($f || ($f = {}));
var qf;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(qf || (qf = {}));
var Qp = function(e) {
  var a = Ie(), r = e.value, l = e.children, u = ia(e, ["value", "children"]);
  return l(a.formatNumberToParts(r, u));
};
Qp.displayName = "FormattedNumberParts";
Qp.displayName = "FormattedNumberParts";
function Kp(e) {
  var a = function(r) {
    var l = Ie(), u = r.value, c = r.children, d = ia(r, ["value", "children"]), h = typeof u == "string" ? new Date(u || 0) : u;
    return c(e === "formatDate" ? l.formatDateToParts(h, d) : l.formatTimeToParts(h, d));
  };
  return a.displayName = qf[e], a;
}
function Mo(e) {
  var a = function(r) {
    var l = Ie(), u = r.value, c = r.children, d = ia(r, ["value", "children"]), h = l[e](u, d);
    if (typeof c == "function") return c(h);
    var m = l.textComponent || y.Fragment;
    return y.createElement(m, null, h);
  };
  return a.displayName = $f[e], a;
}
function Jp(e) {
  return e && Object.keys(e).reduce(function(a, r) {
    var l = e[r];
    return a[r] = Ip(l) ? wE(l) : l, a;
  }, {});
}
var l1 = function(e, a, r, l) {
  for (var u = [], c = 4; c < arguments.length; c++) u[c - 4] = arguments[c];
  var d = Jp(l), h = kf.apply(void 0, yn([
    e,
    a,
    r,
    d
  ], u, !1));
  return Array.isArray(h) ? EE(h) : h;
}, u1 = function(e, a) {
  var r = e.defaultRichTextElements, l = ia(e, ["defaultRichTextElements"]), u = Jp(r), c = yE(ie(ie(ie({}, Wp), l), { defaultRichTextElements: u }), a), d = {
    locale: c.locale,
    timeZone: c.timeZone,
    fallbackOnEmptyString: c.fallbackOnEmptyString,
    formats: c.formats,
    defaultLocale: c.defaultLocale,
    defaultFormats: c.defaultFormats,
    messages: c.messages,
    onError: c.onError,
    defaultRichTextElements: u
  };
  return ie(ie({}, c), {
    formatMessage: l1.bind(null, d, c.formatters),
    $t: l1.bind(null, d, c.formatters)
  });
};
function RE(e, a) {
  var r = e.values, l = ia(e, ["values"]), u = a.values, c = ia(a, ["values"]);
  return If(u, r) && If(l, c);
}
function eg(e) {
  var a = Ie(), r = a.formatMessage, l = a.textComponent, u = l === void 0 ? y.Fragment : l, c = e.id, d = e.description, h = e.defaultMessage, m = e.values, g = e.children, p = e.tagName, _ = p === void 0 ? u : p, S = e.ignoreTag, w = r({
    id: c,
    description: d,
    defaultMessage: h
  }, m, { ignoreTag: S });
  return typeof g == "function" ? g(Array.isArray(w) ? w : [w]) : _ ? y.createElement(_, null, w) : y.createElement(y.Fragment, null, w);
}
eg.displayName = "FormattedMessage";
var lr = y.memo(eg, RE);
lr.displayName = "MemoizedFormattedMessage";
function vf(e) {
  return {
    locale: e.locale,
    timeZone: e.timeZone,
    fallbackOnEmptyString: e.fallbackOnEmptyString,
    formats: e.formats,
    textComponent: e.textComponent,
    messages: e.messages,
    defaultLocale: e.defaultLocale,
    defaultFormats: e.defaultFormats,
    onError: e.onError,
    onWarn: e.onWarn,
    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
    defaultRichTextElements: e.defaultRichTextElements
  };
}
var NE = (function(e) {
  sn(a, e);
  function a() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.cache = Vp(), r.state = {
      cache: r.cache,
      intl: u1(vf(r.props), r.cache),
      prevConfig: vf(r.props)
    }, r;
  }
  return a.getDerivedStateFromProps = function(r, l) {
    var u = l.prevConfig, c = l.cache, d = vf(r);
    return If(u, d) ? null : {
      intl: u1(d, c),
      prevConfig: d
    };
  }, a.prototype.render = function() {
    return Yp(this.state.intl), y.createElement(OE, { value: this.state.intl }, this.props.children);
  }, a.displayName = "IntlProvider", a.defaultProps = Wp, a;
})(y.PureComponent);
var Gx = Mo("formatDate"), kx = Mo("formatTime"), Ix = Mo("formatNumber"), $x = Mo("formatList"), qx = Mo("formatDisplayName"), Vx = Kp("formatDate"), Fx = Kp("formatTime"), s1 = (e) => {
  let a;
  const r = /* @__PURE__ */ new Set(), l = (g, p) => {
    const _ = typeof g == "function" ? g(a) : g;
    if (!Object.is(_, a)) {
      const S = a;
      a = p ?? (typeof _ != "object" || _ === null) ? _ : Object.assign({}, a, _), r.forEach((w) => w(a, S));
    }
  }, u = () => a, h = {
    setState: l,
    getState: u,
    getInitialState: () => m,
    subscribe: (g) => (r.add(g), () => r.delete(g))
  }, m = a = e(l, u, h);
  return h;
}, pd = ((e) => e ? s1(e) : s1), DE = (e) => e;
function Nu(e, a = DE) {
  const r = y.useSyncExternalStore(e.subscribe, y.useCallback(() => a(e.getState()), [e, a]), y.useCallback(() => a(e.getInitialState()), [e, a]));
  return y.useDebugValue(r), r;
}
var So = "en-US", tg = [
  "am",
  "ar",
  "bg-BG",
  "bn-BD",
  "bs-BA",
  "ca-ES",
  "cs-CZ",
  "da-DK",
  "de-DE",
  "el-GR",
  "es-419",
  "es-ES",
  "et-EE",
  "fa",
  "fi-FI",
  "fr-CA",
  "fr-FR",
  "gu-IN",
  "hi-IN",
  "hr-HR",
  "hu-HU",
  "hy-AM",
  "id-ID",
  "is-IS",
  "it-IT",
  "ja-JP",
  "ka-GE",
  "kk",
  "kn-IN",
  "ko-KR",
  "lt",
  "lv-LV",
  "mk-MK",
  "ml",
  "mn",
  "mr-IN",
  "ms-MY",
  "my-MM",
  "nb-NO",
  "nl-NL",
  "pa",
  "pl-PL",
  "pt-BR",
  "pt-PT",
  "ro-RO",
  "ru-RU",
  "sk-SK",
  "sl-SI",
  "so-SO",
  "sq-AL",
  "sr-RS",
  "sv-SE",
  "sw-TZ",
  "ta-IN",
  "te-IN",
  "th-TH",
  "tl",
  "tr-TR",
  "uk-UA",
  "ur",
  "vi-VN",
  "zh-CN",
  "zh-HK",
  "zh-TW"
], zE = new Map(tg.map((e) => [e.toLowerCase(), e])), _t = new Map([[So.toLowerCase(), So], ...zE]);
for (const e of [So, ...tg]) {
  const a = new Intl.Locale(e).language.toLowerCase();
  _t.set(a, _t.get(a) ?? e);
}
_t.set("es", "es-ES");
_t.set("fr", "fr-FR");
_t.set("bn-in", "bn-BD");
_t.set("en-in", So);
_t.set("ml-in", "ml");
_t.set("pa-guru", "pa");
_t.set("pa-guru-in", "pa");
for (const e of [
  "pt-ao",
  "pt-ch",
  "pt-cv",
  "pt-fr",
  "pt-gq",
  "pt-gw",
  "pt-lu",
  "pt-mo",
  "pt-mz",
  "pt-st",
  "pt-tl"
]) _t.set(e, "pt-PT");
_t.set("ur-in", "ur");
_t.set("zh-hant", "zh-TW");
_t.set("zh-hant-tw", "zh-TW");
_t.set("zh-hant-hk", "zh-HK");
function HE(e) {
  const a = e.trim().replaceAll("_", "-").toLowerCase();
  if (!a || a === "pa-arab" || a.startsWith("pa-arab-")) return;
  if (a.startsWith("es-") && a !== "es-es" && a !== "es-419") return "es-419";
  const r = _t.get(a);
  if (r) return r;
  const l = a.split("-");
  for (let u = l.length - 1; u >= 1; u -= 1) {
    const c = _t.get(l.slice(0, u).join("-"));
    if (c) return c;
  }
}
function Ba(e) {
  const a = e.split("-", 1)[0];
  return a && [
    "ar",
    "fa",
    "ur"
  ].includes(a) ? "rtl" : "ltr";
}
var Ge = {
  editorWidgetMobileMenu: {
    id: "sites.dispatch.widget.editor.mobile_menu",
    defaultMessage: "Site toolbar",
    description: "Accessible label for the draggable mobile Site toolbar and its actions popup."
  },
  editorWidgetMobileClose: {
    id: "sites.dispatch.widget.editor.mobile_close",
    defaultMessage: "Close",
    description: "Mobile Site toolbar action that closes the menu without hiding the toolbar or changing its saved preference."
  },
  editorWidgetHideHint: {
    id: "sites.dispatch.widget.editor.hide_hint",
    defaultMessage: "Hover over this corner to bring back the toolbar.",
    description: "Tooltip at the corner after first hiding the Site editor widget, and on sustained hover over the hidden widget corner. A restore keyboard shortcut is shown beside this text."
  },
  editorWidgetRestoreAction: {
    id: "sites.dispatch.widget.editor.restore_action",
    defaultMessage: "Bring back toolbar",
    description: "Action beside the keyboard shortcut that restores the tucked Site editor widget."
  },
  invitationBannerLabel: {
    id: "sites.dispatch.widget.invitation_banner.label",
    defaultMessage: "Site editing controls",
    description: "Accessible label for the banner inviting someone to edit a ChatGPT Site."
  },
  invitationBannerMessage: {
    id: "sites.dispatch.widget.invitation_banner.message",
    defaultMessage: "You have been invited to edit this site.",
    description: "Message shown to someone who has been invited to edit a ChatGPT Site when the owner's name is unavailable."
  },
  invitationBannerMessageWithOwner: {
    id: "sites.dispatch.widget.invitation_banner.message_with_owner",
    defaultMessage: "<strong>{ownerName}</strong> has invited you to edit this site.",
    description: "Message shown to someone invited to edit a ChatGPT Site. ownerName is the site owner's display name."
  },
  invitationBannerEditAction: {
    id: "sites.dispatch.widget.invitation_banner.edit_action",
    defaultMessage: "Edit in ChatGPT",
    description: "Link that opens ChatGPT so an invited editor can edit a ChatGPT Site."
  },
  editorWidgetDefaultEditPrompt: {
    id: "sites.dispatch.widget.editor.default_edit_prompt",
    defaultMessage: "{site} make these changes…",
    description: "Default editable prompt when the Site widget logo opens ChatGPT. Matches the desktop Site edit prompt. site is the complete Site reference and must remain a placeholder."
  },
  invitationBannerEditPrompt: {
    id: "sites.dispatch.widget.invitation_banner.edit_prompt",
    defaultMessage: "Make the following changes to {site}:",
    description: "Prompt prefilled in ChatGPT when an invited editor opens a Site. site is the complete Site reference and must remain a placeholder."
  },
  invitationBannerDismissAction: {
    id: "sites.dispatch.widget.invitation_banner.dismiss_action",
    defaultMessage: "Dismiss",
    description: "Accessible label for the button that dismisses a ChatGPT Site editing invitation banner."
  },
  editorWidgetLaunchAction: {
    id: "sites.dispatch.widget.editor.launch_action",
    defaultMessage: "Edit site",
    description: "Short button label in the floating editor-only widget on a hosted website. Opens a text composer for describing changes to that website. Site means a hosted website, not a physical location. No placeholders."
  },
  editorWidgetOpenAction: {
    id: "sites.dispatch.widget.editor.open_action",
    defaultMessage: "Edit site in ChatGPT",
    description: "Accessible label and tooltip for the ChatGPT logo link in the floating editor-only Site widget. Opens this website's full-screen editor in ChatGPT in a new tab. Short action label; no placeholders."
  },
  editorWidgetLaunchTooltip: {
    id: "sites.dispatch.widget.editor.launch_tooltip",
    defaultMessage: "Describe your changes to ChatGPT",
    description: "Tooltip on the Edit site button in the floating editor-only Site widget. The button opens a text composer for describing desired changes to this website. Short action phrase; no placeholders."
  },
  editorWidgetComposerLabel: {
    id: "sites.dispatch.widget.editor.composer_label",
    defaultMessage: "Describe your edits",
    description: "Screen-reader label for the plain-text composer in the floating editor-only widget on a hosted website. Asks the editor to describe changes they want ChatGPT to make to this website. No placeholders."
  },
  editorWidgetComposerPlaceholder: {
    id: "sites.dispatch.widget.editor.composer_placeholder",
    defaultMessage: "Describe your edits",
    description: "Short placeholder in the empty plain-text composer in the floating editor-only widget on a hosted website. Asks the editor to describe changes they want ChatGPT to make to this website. No placeholders."
  },
  editorWidgetSendAction: {
    id: "sites.dispatch.widget.editor.send_action",
    defaultMessage: "Send edits",
    description: "Accessible label for the button that sends requested Site edits to ChatGPT."
  },
  editorWidgetHideAction: {
    id: "sites.dispatch.widget.editor.hide_action",
    defaultMessage: "Hide toolbar",
    description: "Accessible label and tooltip for the X button in the floating editor-only widget on a hosted website. Hides this editing widget from the current page without changing the website or its access permissions. Short action label; no placeholders."
  }
}, Xx = Object.freeze({ status: "aborted" });
function W(e, a, r) {
  function l(h, m) {
    var g;
    Object.defineProperty(h, "_zod", {
      value: h._zod ?? {},
      enumerable: !1
    }), (g = h._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), h._zod.traits.add(e), a(h, m);
    for (const p in d.prototype) p in h || Object.defineProperty(h, p, { value: d.prototype[p].bind(h) });
    h._zod.constr = d, h._zod.def = m;
  }
  const u = r?.Parent ?? Object;
  class c extends u {
  }
  Object.defineProperty(c, "name", { value: e });
  function d(h) {
    var m;
    const g = r?.Parent ? new c() : this;
    l(g, h), (m = g._zod).deferred ?? (m.deferred = []);
    for (const p of g._zod.deferred) p();
    return g;
  }
  return Object.defineProperty(d, "init", { value: l }), Object.defineProperty(d, Symbol.hasInstance, { value: (h) => r?.Parent && h instanceof r.Parent ? !0 : h?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
var ur = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, ng = class extends Error {
  constructor(e) {
    super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
  }
}, Vf = {};
function ci(e) {
  return e && Object.assign(Vf, e), Vf;
}
function LE(e) {
  const a = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, l]) => a.indexOf(+r) === -1).map(([r, l]) => l);
}
function Ff(e, a) {
  return typeof a == "bigint" ? a.toString() : a;
}
function gd(e) {
  return { get value() {
    {
      const a = e();
      return Object.defineProperty(this, "value", { value: a }), a;
    }
    throw new Error("cached value already set");
  } };
}
function yd(e) {
  return e == null;
}
function bd(e) {
  const a = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(a, r);
}
function jE(e, a) {
  const r = (e.toString().split(".")[1] || "").length, l = a.toString();
  let u = (l.split(".")[1] || "").length;
  if (u === 0 && /\d?e-\d?/.test(l)) {
    const d = l.match(/\d?e-(\d?)/);
    d?.[1] && (u = Number.parseInt(d[1]));
  }
  const c = r > u ? r : u;
  return Number.parseInt(e.toFixed(c).replace(".", "")) % Number.parseInt(a.toFixed(c).replace(".", "")) / 10 ** c;
}
var c1 = /* @__PURE__ */ Symbol("evaluating");
function ke(e, a, r) {
  let l;
  Object.defineProperty(e, a, {
    get() {
      if (l !== c1)
        return l === void 0 && (l = c1, l = r()), l;
    },
    set(u) {
      Object.defineProperty(e, a, { value: u });
    },
    configurable: !0
  });
}
function pi(e, a, r) {
  Object.defineProperty(e, a, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function gi(...e) {
  const a = {};
  for (const r of e) Object.assign(a, Object.getOwnPropertyDescriptors(r));
  return Object.defineProperties({}, a);
}
function f1(e) {
  return JSON.stringify(e);
}
var ag = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function bu(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
var BE = gd(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
});
function Eo(e) {
  if (bu(e) === !1) return !1;
  const a = e.constructor;
  if (a === void 0) return !0;
  const r = a.prototype;
  return !(bu(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function ig(e) {
  return Eo(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
var UE = /* @__PURE__ */ new Set([
  "string",
  "number",
  "symbol"
]);
function fr(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ua(e, a, r) {
  const l = new e._zod.constr(a ?? e._zod.def);
  return (!a || r?.parent) && (l._zod.parent = e), l;
}
function de(e) {
  const a = e;
  if (!a) return {};
  if (typeof a == "string") return { error: () => a };
  if (a?.message !== void 0) {
    if (a?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    a.error = a.message;
  }
  return delete a.message, typeof a.error == "string" ? {
    ...a,
    error: () => a.error
  } : a;
}
function PE(e) {
  return Object.keys(e).filter((a) => e[a]._zod.optin === "optional" && e[a]._zod.optout === "optional");
}
var ZE = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function GE(e, a) {
  const r = e._zod.def;
  return Ua(e, gi(e._zod.def, {
    get shape() {
      const l = {};
      for (const u in a) {
        if (!(u in r.shape)) throw new Error(`Unrecognized key: "${u}"`);
        a[u] && (l[u] = r.shape[u]);
      }
      return pi(this, "shape", l), l;
    },
    checks: []
  }));
}
function kE(e, a) {
  const r = e._zod.def;
  return Ua(e, gi(e._zod.def, {
    get shape() {
      const l = { ...e._zod.def.shape };
      for (const u in a) {
        if (!(u in r.shape)) throw new Error(`Unrecognized key: "${u}"`);
        a[u] && delete l[u];
      }
      return pi(this, "shape", l), l;
    },
    checks: []
  }));
}
function IE(e, a) {
  if (!Eo(a)) throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0) throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  return Ua(e, gi(e._zod.def, {
    get shape() {
      const l = {
        ...e._zod.def.shape,
        ...a
      };
      return pi(this, "shape", l), l;
    },
    checks: []
  }));
}
function $E(e, a) {
  if (!Eo(a)) throw new Error("Invalid input to safeExtend: expected a plain object");
  return Ua(e, {
    ...e._zod.def,
    get shape() {
      const r = {
        ...e._zod.def.shape,
        ...a
      };
      return pi(this, "shape", r), r;
    },
    checks: e._zod.def.checks
  });
}
function qE(e, a) {
  return Ua(e, gi(e._zod.def, {
    get shape() {
      const r = {
        ...e._zod.def.shape,
        ...a._zod.def.shape
      };
      return pi(this, "shape", r), r;
    },
    get catchall() {
      return a._zod.def.catchall;
    },
    checks: []
  }));
}
function VE(e, a, r) {
  return Ua(a, gi(a._zod.def, {
    get shape() {
      const l = a._zod.def.shape, u = { ...l };
      if (r) for (const c in r) {
        if (!(c in l)) throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (u[c] = e ? new e({
          type: "optional",
          innerType: l[c]
        }) : l[c]);
      }
      else for (const c in l) u[c] = e ? new e({
        type: "optional",
        innerType: l[c]
      }) : l[c];
      return pi(this, "shape", u), u;
    },
    checks: []
  }));
}
function FE(e, a, r) {
  return Ua(a, gi(a._zod.def, {
    get shape() {
      const l = a._zod.def.shape, u = { ...l };
      if (r) for (const c in r) {
        if (!(c in u)) throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (u[c] = new e({
          type: "nonoptional",
          innerType: l[c]
        }));
      }
      else for (const c in l) u[c] = new e({
        type: "nonoptional",
        innerType: l[c]
      });
      return pi(this, "shape", u), u;
    },
    checks: []
  }));
}
function or(e, a = 0) {
  if (e.aborted === !0) return !0;
  for (let r = a; r < e.issues.length; r++) if (e.issues[r]?.continue !== !0) return !0;
  return !1;
}
function rg(e, a) {
  return a.map((r) => {
    var l;
    return (l = r).path ?? (l.path = []), r.path.unshift(e), r;
  });
}
function nu(e) {
  return typeof e == "string" ? e : e?.message;
}
function fi(e, a, r) {
  const l = {
    ...e,
    path: e.path ?? []
  };
  return e.message || (l.message = nu(e.inst?._zod.def?.error?.(e)) ?? nu(a?.error?.(e)) ?? nu(r.customError?.(e)) ?? nu(r.localeError?.(e)) ?? "Invalid input"), delete l.inst, delete l.continue, a?.reportInput || delete l.input, l;
}
function _d(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function wo(...e) {
  const [a, r, l] = e;
  return typeof a == "string" ? {
    message: a,
    code: "custom",
    input: r,
    inst: l
  } : { ...a };
}
var og = (e, a) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: a,
    enumerable: !1
  }), e.message = JSON.stringify(a, Ff, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, lg = W("$ZodError", og), ug = W("$ZodError", og, { Parent: Error });
function XE(e, a = (r) => r.message) {
  const r = {}, l = [];
  for (const u of e.issues) u.path.length > 0 ? (r[u.path[0]] = r[u.path[0]] || [], r[u.path[0]].push(a(u))) : l.push(a(u));
  return {
    formErrors: l,
    fieldErrors: r
  };
}
function YE(e, a = (r) => r.message) {
  const r = { _errors: [] }, l = (u) => {
    for (const c of u.issues) if (c.code === "invalid_union" && c.errors.length) c.errors.map((d) => l({ issues: d }));
    else if (c.code === "invalid_key") l({ issues: c.issues });
    else if (c.code === "invalid_element") l({ issues: c.issues });
    else if (c.path.length === 0) r._errors.push(a(c));
    else {
      let d = r, h = 0;
      for (; h < c.path.length; ) {
        const m = c.path[h];
        h !== c.path.length - 1 ? d[m] = d[m] || { _errors: [] } : (d[m] = d[m] || { _errors: [] }, d[m]._errors.push(a(c))), d = d[m], h++;
      }
    }
  };
  return l(e), r;
}
var Sd = (e) => (a, r, l, u) => {
  const c = l ? Object.assign(l, { async: !1 }) : { async: !1 }, d = a._zod.run({
    value: r,
    issues: []
  }, c);
  if (d instanceof Promise) throw new ur();
  if (d.issues.length) {
    const h = new (u?.Err ?? e)(d.issues.map((m) => fi(m, c, ci())));
    throw ag(h, u?.callee), h;
  }
  return d.value;
};
var Ed = (e) => async (a, r, l, u) => {
  const c = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let d = a._zod.run({
    value: r,
    issues: []
  }, c);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const h = new (u?.Err ?? e)(d.issues.map((m) => fi(m, c, ci())));
    throw ag(h, u?.callee), h;
  }
  return d.value;
};
var Du = (e) => (a, r, l) => {
  const u = l ? {
    ...l,
    async: !1
  } : { async: !1 }, c = a._zod.run({
    value: r,
    issues: []
  }, u);
  if (c instanceof Promise) throw new ur();
  return c.issues.length ? {
    success: !1,
    error: new (e ?? lg)(c.issues.map((d) => fi(d, u, ci())))
  } : {
    success: !0,
    data: c.value
  };
}, WE = /* @__PURE__ */ Du(ug), zu = (e) => async (a, r, l) => {
  const u = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let c = a._zod.run({
    value: r,
    issues: []
  }, u);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new e(c.issues.map((d) => fi(d, u, ci())))
  } : {
    success: !0,
    data: c.value
  };
}, QE = /* @__PURE__ */ zu(ug), KE = (e) => (a, r, l) => {
  const u = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Sd(e)(a, r, u);
};
var JE = (e) => (a, r, l) => Sd(e)(a, r, l);
var ew = (e) => async (a, r, l) => {
  const u = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Ed(e)(a, r, u);
};
var tw = (e) => async (a, r, l) => Ed(e)(a, r, l);
var nw = (e) => (a, r, l) => {
  const u = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Du(e)(a, r, u);
};
var aw = (e) => (a, r, l) => Du(e)(a, r, l);
var iw = (e) => async (a, r, l) => {
  const u = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return zu(e)(a, r, u);
};
var rw = (e) => async (a, r, l) => zu(e)(a, r, l);
var ow = /^[cC][^\s-]{8,}$/, lw = /^[0-9a-z]+$/, uw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, sw = /^[0-9a-vA-V]{20}$/, cw = /^[A-Za-z0-9]{27}$/, fw = /^[a-zA-Z0-9_-]{21}$/, dw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, hw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, d1 = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, mw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, vw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function pw() {
  return new RegExp(vw, "u");
}
var gw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, yw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, bw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, _w = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Sw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, sg = /^[A-Za-z0-9_-]*$/, Ew = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, ww = /^\+(?:[0-9]){6,14}[0-9]$/, cg = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Tw = /* @__PURE__ */ new RegExp(`^${cg}$`);
function fg(e) {
  const a = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${a}` : e.precision === 0 ? `${a}:[0-5]\\d` : `${a}:[0-5]\\d\\.\\d{${e.precision}}` : `${a}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Cw(e) {
  return new RegExp(`^${fg(e)}$`);
}
function Aw(e) {
  const a = fg({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const l = `${a}(?:${r.join("|")})`;
  return new RegExp(`^${cg}T(?:${l})$`);
}
var xw = (e) => {
  const a = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${a}$`);
}, Ow = /^-?\d+$/, Mw = /^-?\d+(?:\.\d+)?/, Rw = /^(?:true|false)$/i, Nw = /^[^A-Z]*$/, Dw = /^[^a-z]*$/, Lt = /* @__PURE__ */ W("$ZodCheck", (e, a) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = a, (r = e._zod).onattach ?? (r.onattach = []);
}), dg = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, hg = /* @__PURE__ */ W("$ZodCheckLessThan", (e, a) => {
  Lt.init(e, a);
  const r = dg[typeof a.value];
  e._zod.onattach.push((l) => {
    const u = l._zod.bag, c = (a.inclusive ? u.maximum : u.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    a.value < c && (a.inclusive ? u.maximum = a.value : u.exclusiveMaximum = a.value);
  }), e._zod.check = (l) => {
    (a.inclusive ? l.value <= a.value : l.value < a.value) || l.issues.push({
      origin: r,
      code: "too_big",
      maximum: a.value,
      input: l.value,
      inclusive: a.inclusive,
      inst: e,
      continue: !a.abort
    });
  };
}), mg = /* @__PURE__ */ W("$ZodCheckGreaterThan", (e, a) => {
  Lt.init(e, a);
  const r = dg[typeof a.value];
  e._zod.onattach.push((l) => {
    const u = l._zod.bag, c = (a.inclusive ? u.minimum : u.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    a.value > c && (a.inclusive ? u.minimum = a.value : u.exclusiveMinimum = a.value);
  }), e._zod.check = (l) => {
    (a.inclusive ? l.value >= a.value : l.value > a.value) || l.issues.push({
      origin: r,
      code: "too_small",
      minimum: a.value,
      input: l.value,
      inclusive: a.inclusive,
      inst: e,
      continue: !a.abort
    });
  };
}), zw = /* @__PURE__ */ W("$ZodCheckMultipleOf", (e, a) => {
  Lt.init(e, a), e._zod.onattach.push((r) => {
    var l;
    (l = r._zod.bag).multipleOf ?? (l.multipleOf = a.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof a.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % a.value === BigInt(0) : jE(r.value, a.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: a.value,
      input: r.value,
      inst: e,
      continue: !a.abort
    });
  };
}), Hw = /* @__PURE__ */ W("$ZodCheckNumberFormat", (e, a) => {
  Lt.init(e, a), a.format = a.format || "float64";
  const r = a.format?.includes("int"), l = r ? "int" : "number", [u, c] = ZE[a.format];
  e._zod.onattach.push((d) => {
    const h = d._zod.bag;
    h.format = a.format, h.minimum = u, h.maximum = c, r && (h.pattern = Ow);
  }), e._zod.check = (d) => {
    const h = d.value;
    if (r) {
      if (!Number.isInteger(h)) {
        d.issues.push({
          expected: l,
          format: a.format,
          code: "invalid_type",
          continue: !1,
          input: h,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(h)) {
        h > 0 ? d.issues.push({
          input: h,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: l,
          continue: !a.abort
        }) : d.issues.push({
          input: h,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: l,
          continue: !a.abort
        });
        return;
      }
    }
    h < u && d.issues.push({
      origin: "number",
      input: h,
      code: "too_small",
      minimum: u,
      inclusive: !0,
      inst: e,
      continue: !a.abort
    }), h > c && d.issues.push({
      origin: "number",
      input: h,
      code: "too_big",
      maximum: c,
      inst: e
    });
  };
}), Lw = /* @__PURE__ */ W("$ZodCheckMaxLength", (e, a) => {
  var r;
  Lt.init(e, a), (r = e._zod.def).when ?? (r.when = (l) => {
    const u = l.value;
    return !yd(u) && u.length !== void 0;
  }), e._zod.onattach.push((l) => {
    const u = l._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    a.maximum < u && (l._zod.bag.maximum = a.maximum);
  }), e._zod.check = (l) => {
    const u = l.value;
    if (u.length <= a.maximum) return;
    const c = _d(u);
    l.issues.push({
      origin: c,
      code: "too_big",
      maximum: a.maximum,
      inclusive: !0,
      input: u,
      inst: e,
      continue: !a.abort
    });
  };
}), jw = /* @__PURE__ */ W("$ZodCheckMinLength", (e, a) => {
  var r;
  Lt.init(e, a), (r = e._zod.def).when ?? (r.when = (l) => {
    const u = l.value;
    return !yd(u) && u.length !== void 0;
  }), e._zod.onattach.push((l) => {
    const u = l._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    a.minimum > u && (l._zod.bag.minimum = a.minimum);
  }), e._zod.check = (l) => {
    const u = l.value;
    if (u.length >= a.minimum) return;
    const c = _d(u);
    l.issues.push({
      origin: c,
      code: "too_small",
      minimum: a.minimum,
      inclusive: !0,
      input: u,
      inst: e,
      continue: !a.abort
    });
  };
}), Bw = /* @__PURE__ */ W("$ZodCheckLengthEquals", (e, a) => {
  var r;
  Lt.init(e, a), (r = e._zod.def).when ?? (r.when = (l) => {
    const u = l.value;
    return !yd(u) && u.length !== void 0;
  }), e._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.minimum = a.length, u.maximum = a.length, u.length = a.length;
  }), e._zod.check = (l) => {
    const u = l.value, c = u.length;
    if (c === a.length) return;
    const d = _d(u), h = c > a.length;
    l.issues.push({
      origin: d,
      ...h ? {
        code: "too_big",
        maximum: a.length
      } : {
        code: "too_small",
        minimum: a.length
      },
      inclusive: !0,
      exact: !0,
      input: l.value,
      inst: e,
      continue: !a.abort
    });
  };
}), Hu = /* @__PURE__ */ W("$ZodCheckStringFormat", (e, a) => {
  var r, l;
  Lt.init(e, a), e._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.format = a.format, a.pattern && (c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(a.pattern));
  }), a.pattern ? (r = e._zod).check ?? (r.check = (u) => {
    a.pattern.lastIndex = 0, !a.pattern.test(u.value) && u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: a.format,
      input: u.value,
      ...a.pattern ? { pattern: a.pattern.toString() } : {},
      inst: e,
      continue: !a.abort
    });
  }) : (l = e._zod).check ?? (l.check = () => {
  });
}), Uw = /* @__PURE__ */ W("$ZodCheckRegex", (e, a) => {
  Hu.init(e, a), e._zod.check = (r) => {
    a.pattern.lastIndex = 0, !a.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: a.pattern.toString(),
      inst: e,
      continue: !a.abort
    });
  };
}), Pw = /* @__PURE__ */ W("$ZodCheckLowerCase", (e, a) => {
  a.pattern ?? (a.pattern = Nw), Hu.init(e, a);
}), Zw = /* @__PURE__ */ W("$ZodCheckUpperCase", (e, a) => {
  a.pattern ?? (a.pattern = Dw), Hu.init(e, a);
}), Gw = /* @__PURE__ */ W("$ZodCheckIncludes", (e, a) => {
  Lt.init(e, a);
  const r = fr(a.includes), l = new RegExp(typeof a.position == "number" ? `^.{${a.position}}${r}` : r);
  a.pattern = l, e._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(l);
  }), e._zod.check = (u) => {
    u.value.includes(a.includes, a.position) || u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: a.includes,
      input: u.value,
      inst: e,
      continue: !a.abort
    });
  };
}), kw = /* @__PURE__ */ W("$ZodCheckStartsWith", (e, a) => {
  Lt.init(e, a);
  const r = new RegExp(`^${fr(a.prefix)}.*`);
  a.pattern ?? (a.pattern = r), e._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r);
  }), e._zod.check = (l) => {
    l.value.startsWith(a.prefix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: a.prefix,
      input: l.value,
      inst: e,
      continue: !a.abort
    });
  };
}), Iw = /* @__PURE__ */ W("$ZodCheckEndsWith", (e, a) => {
  Lt.init(e, a);
  const r = new RegExp(`.*${fr(a.suffix)}$`);
  a.pattern ?? (a.pattern = r), e._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r);
  }), e._zod.check = (l) => {
    l.value.endsWith(a.suffix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: a.suffix,
      input: l.value,
      inst: e,
      continue: !a.abort
    });
  };
}), $w = /* @__PURE__ */ W("$ZodCheckOverwrite", (e, a) => {
  Lt.init(e, a), e._zod.check = (r) => {
    r.value = a.tx(r.value);
  };
}), qw = class {
  constructor(e = []) {
    this.content = [], this.indent = 0, this && (this.args = e);
  }
  indented(e) {
    this.indent += 1, e(this), this.indent -= 1;
  }
  write(e) {
    if (typeof e == "function") {
      e(this, { execution: "sync" }), e(this, { execution: "async" });
      return;
    }
    const a = e.split(`
`).filter((u) => u), r = Math.min(...a.map((u) => u.length - u.trimStart().length)), l = a.map((u) => u.slice(r)).map((u) => " ".repeat(this.indent * 2) + u);
    for (const u of l) this.content.push(u);
  }
  compile() {
    const e = Function, a = this?.args, r = [...(this?.content ?? [""]).map((l) => `  ${l}`)];
    return new e(...a, r.join(`
`));
  }
}, Vw = {
  major: 4,
  minor: 1,
  patch: 12
}, Ke = /* @__PURE__ */ W("$ZodType", (e, a) => {
  var r;
  e ?? (e = {}), e._zod.def = a, e._zod.bag = e._zod.bag || {}, e._zod.version = Vw;
  const l = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && l.unshift(e);
  for (const u of l) for (const c of u._zod.onattach) c(e);
  if (l.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const u = (d, h, m) => {
      let g = or(d), p;
      for (const _ of h) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(d)) continue;
        } else if (g) continue;
        const S = d.issues.length, w = _._zod.check(d);
        if (w instanceof Promise && m?.async === !1) throw new ur();
        if (p || w instanceof Promise) p = (p ?? Promise.resolve()).then(async () => {
          await w, d.issues.length !== S && (g || (g = or(d, S)));
        });
        else {
          if (d.issues.length === S) continue;
          g || (g = or(d, S));
        }
      }
      return p ? p.then(() => d) : d;
    }, c = (d, h, m) => {
      if (or(d))
        return d.aborted = !0, d;
      const g = u(h, l, m);
      if (g instanceof Promise) {
        if (m.async === !1) throw new ur();
        return g.then((p) => e._zod.parse(p, m));
      }
      return e._zod.parse(g, m);
    };
    e._zod.run = (d, h) => {
      if (h.skipChecks) return e._zod.parse(d, h);
      if (h.direction === "backward") {
        const g = e._zod.parse({
          value: d.value,
          issues: []
        }, {
          ...h,
          skipChecks: !0
        });
        return g instanceof Promise ? g.then((p) => c(p, d, h)) : c(g, d, h);
      }
      const m = e._zod.parse(d, h);
      if (m instanceof Promise) {
        if (h.async === !1) throw new ur();
        return m.then((g) => u(g, l, h));
      }
      return u(m, l, h);
    };
  }
  e["~standard"] = {
    validate: (u) => {
      try {
        const c = WE(e, u);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return QE(e, u).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), wd = /* @__PURE__ */ W("$ZodString", (e, a) => {
  Ke.init(e, a), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? xw(e._zod.bag), e._zod.parse = (r, l) => {
    if (a.coerce) try {
      r.value = String(r.value);
    } catch {
    }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), Xe = /* @__PURE__ */ W("$ZodStringFormat", (e, a) => {
  Hu.init(e, a), wd.init(e, a);
}), Fw = /* @__PURE__ */ W("$ZodGUID", (e, a) => {
  a.pattern ?? (a.pattern = hw), Xe.init(e, a);
}), Xw = /* @__PURE__ */ W("$ZodUUID", (e, a) => {
  if (a.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[a.version];
    if (r === void 0) throw new Error(`Invalid UUID version: "${a.version}"`);
    a.pattern ?? (a.pattern = d1(r));
  } else a.pattern ?? (a.pattern = d1());
  Xe.init(e, a);
}), Yw = /* @__PURE__ */ W("$ZodEmail", (e, a) => {
  a.pattern ?? (a.pattern = mw), Xe.init(e, a);
}), Ww = /* @__PURE__ */ W("$ZodURL", (e, a) => {
  Xe.init(e, a), e._zod.check = (r) => {
    try {
      const l = r.value.trim(), u = new URL(l);
      a.hostname && (a.hostname.lastIndex = 0, a.hostname.test(u.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Ew.source,
        input: r.value,
        inst: e,
        continue: !a.abort
      })), a.protocol && (a.protocol.lastIndex = 0, a.protocol.test(u.protocol.endsWith(":") ? u.protocol.slice(0, -1) : u.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: a.protocol.source,
        input: r.value,
        inst: e,
        continue: !a.abort
      })), a.normalize ? r.value = u.href : r.value = l;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !a.abort
      });
    }
  };
}), Qw = /* @__PURE__ */ W("$ZodEmoji", (e, a) => {
  a.pattern ?? (a.pattern = pw()), Xe.init(e, a);
}), Kw = /* @__PURE__ */ W("$ZodNanoID", (e, a) => {
  a.pattern ?? (a.pattern = fw), Xe.init(e, a);
}), Jw = /* @__PURE__ */ W("$ZodCUID", (e, a) => {
  a.pattern ?? (a.pattern = ow), Xe.init(e, a);
}), e3 = /* @__PURE__ */ W("$ZodCUID2", (e, a) => {
  a.pattern ?? (a.pattern = lw), Xe.init(e, a);
}), t3 = /* @__PURE__ */ W("$ZodULID", (e, a) => {
  a.pattern ?? (a.pattern = uw), Xe.init(e, a);
}), n3 = /* @__PURE__ */ W("$ZodXID", (e, a) => {
  a.pattern ?? (a.pattern = sw), Xe.init(e, a);
}), a3 = /* @__PURE__ */ W("$ZodKSUID", (e, a) => {
  a.pattern ?? (a.pattern = cw), Xe.init(e, a);
}), i3 = /* @__PURE__ */ W("$ZodISODateTime", (e, a) => {
  a.pattern ?? (a.pattern = Aw(a)), Xe.init(e, a);
}), r3 = /* @__PURE__ */ W("$ZodISODate", (e, a) => {
  a.pattern ?? (a.pattern = Tw), Xe.init(e, a);
}), o3 = /* @__PURE__ */ W("$ZodISOTime", (e, a) => {
  a.pattern ?? (a.pattern = Cw(a)), Xe.init(e, a);
}), l3 = /* @__PURE__ */ W("$ZodISODuration", (e, a) => {
  a.pattern ?? (a.pattern = dw), Xe.init(e, a);
}), u3 = /* @__PURE__ */ W("$ZodIPv4", (e, a) => {
  a.pattern ?? (a.pattern = gw), Xe.init(e, a), e._zod.onattach.push((r) => {
    const l = r._zod.bag;
    l.format = "ipv4";
  });
}), s3 = /* @__PURE__ */ W("$ZodIPv6", (e, a) => {
  a.pattern ?? (a.pattern = yw), Xe.init(e, a), e._zod.onattach.push((r) => {
    const l = r._zod.bag;
    l.format = "ipv6";
  }), e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !a.abort
      });
    }
  };
}), c3 = /* @__PURE__ */ W("$ZodCIDRv4", (e, a) => {
  a.pattern ?? (a.pattern = bw), Xe.init(e, a);
}), f3 = /* @__PURE__ */ W("$ZodCIDRv6", (e, a) => {
  a.pattern ?? (a.pattern = _w), Xe.init(e, a), e._zod.check = (r) => {
    const l = r.value.split("/");
    try {
      if (l.length !== 2) throw new Error();
      const [u, c] = l;
      if (!c) throw new Error();
      const d = Number(c);
      if (`${d}` !== c) throw new Error();
      if (d < 0 || d > 128) throw new Error();
      new URL(`http://[${u}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !a.abort
      });
    }
  };
});
function vg(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
var d3 = /* @__PURE__ */ W("$ZodBase64", (e, a) => {
  a.pattern ?? (a.pattern = Sw), Xe.init(e, a), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (r) => {
    vg(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !a.abort
    });
  };
});
function h3(e) {
  if (!sg.test(e)) return !1;
  const a = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/");
  return vg(a.padEnd(Math.ceil(a.length / 4) * 4, "="));
}
var m3 = /* @__PURE__ */ W("$ZodBase64URL", (e, a) => {
  a.pattern ?? (a.pattern = sg), Xe.init(e, a), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (r) => {
    h3(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !a.abort
    });
  };
}), v3 = /* @__PURE__ */ W("$ZodE164", (e, a) => {
  a.pattern ?? (a.pattern = ww), Xe.init(e, a);
});
function p3(e, a = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3) return !1;
    const [l] = r;
    if (!l) return !1;
    const u = JSON.parse(atob(l));
    return !("typ" in u && u?.typ !== "JWT" || !u.alg || a && (!("alg" in u) || u.alg !== a));
  } catch {
    return !1;
  }
}
var g3 = /* @__PURE__ */ W("$ZodJWT", (e, a) => {
  Xe.init(e, a), e._zod.check = (r) => {
    p3(r.value, a.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !a.abort
    });
  };
}), pg = /* @__PURE__ */ W("$ZodNumber", (e, a) => {
  Ke.init(e, a), e._zod.pattern = e._zod.bag.pattern ?? Mw, e._zod.parse = (r, l) => {
    if (a.coerce) try {
      r.value = Number(r.value);
    } catch {
    }
    const u = r.value;
    if (typeof u == "number" && !Number.isNaN(u) && Number.isFinite(u)) return r;
    const c = typeof u == "number" ? Number.isNaN(u) ? "NaN" : Number.isFinite(u) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: u,
      inst: e,
      ...c ? { received: c } : {}
    }), r;
  };
}), y3 = /* @__PURE__ */ W("$ZodNumber", (e, a) => {
  Hw.init(e, a), pg.init(e, a);
}), b3 = /* @__PURE__ */ W("$ZodBoolean", (e, a) => {
  Ke.init(e, a), e._zod.pattern = Rw, e._zod.parse = (r, l) => {
    if (a.coerce) try {
      r.value = !!r.value;
    } catch {
    }
    const u = r.value;
    return typeof u == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: u,
      inst: e
    }), r;
  };
}), _3 = /* @__PURE__ */ W("$ZodUnknown", (e, a) => {
  Ke.init(e, a), e._zod.parse = (r) => r;
}), S3 = /* @__PURE__ */ W("$ZodNever", (e, a) => {
  Ke.init(e, a), e._zod.parse = (r, l) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function h1(e, a, r) {
  e.issues.length && a.issues.push(...rg(r, e.issues)), a.value[r] = e.value;
}
var E3 = /* @__PURE__ */ W("$ZodArray", (e, a) => {
  Ke.init(e, a), e._zod.parse = (r, l) => {
    const u = r.value;
    if (!Array.isArray(u))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: u,
        inst: e
      }), r;
    r.value = Array(u.length);
    const c = [];
    for (let d = 0; d < u.length; d++) {
      const h = u[d], m = a.element._zod.run({
        value: h,
        issues: []
      }, l);
      m instanceof Promise ? c.push(m.then((g) => h1(g, r, d))) : h1(m, r, d);
    }
    return c.length ? Promise.all(c).then(() => r) : r;
  };
});
function _u(e, a, r, l) {
  e.issues.length && a.issues.push(...rg(r, e.issues)), e.value === void 0 ? r in l && (a.value[r] = void 0) : a.value[r] = e.value;
}
function gg(e) {
  const a = Object.keys(e.shape);
  for (const l of a) if (!e.shape?.[l]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${l}": expected a Zod schema`);
  const r = PE(e.shape);
  return {
    ...e,
    keys: a,
    keySet: new Set(a),
    numKeys: a.length,
    optionalKeys: new Set(r)
  };
}
function yg(e, a, r, l, u, c) {
  const d = [], h = u.keySet, m = u.catchall._zod, g = m.def.type;
  for (const p of Object.keys(a)) {
    if (h.has(p)) continue;
    if (g === "never") {
      d.push(p);
      continue;
    }
    const _ = m.run({
      value: a[p],
      issues: []
    }, l);
    _ instanceof Promise ? e.push(_.then((S) => _u(S, r, p, a))) : _u(_, r, p, a);
  }
  return d.length && r.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: a,
    inst: c
  }), e.length ? Promise.all(e).then(() => r) : r;
}
var w3 = /* @__PURE__ */ W("$ZodObject", (e, a) => {
  if (Ke.init(e, a), !Object.getOwnPropertyDescriptor(a, "shape")?.get) {
    const d = a.shape;
    Object.defineProperty(a, "shape", { get: () => {
      const h = { ...d };
      return Object.defineProperty(a, "shape", { value: h }), h;
    } });
  }
  const r = gd(() => gg(a));
  ke(e._zod, "propValues", () => {
    const d = a.shape, h = {};
    for (const m in d) {
      const g = d[m]._zod;
      if (g.values) {
        h[m] ?? (h[m] = /* @__PURE__ */ new Set());
        for (const p of g.values) h[m].add(p);
      }
    }
    return h;
  });
  const l = bu, u = a.catchall;
  let c;
  e._zod.parse = (d, h) => {
    c ?? (c = r.value);
    const m = d.value;
    if (!l(m))
      return d.issues.push({
        expected: "object",
        code: "invalid_type",
        input: m,
        inst: e
      }), d;
    d.value = {};
    const g = [], p = c.shape;
    for (const _ of c.keys) {
      const S = p[_]._zod.run({
        value: m[_],
        issues: []
      }, h);
      S instanceof Promise ? g.push(S.then((w) => _u(w, d, _, m))) : _u(S, d, _, m);
    }
    return u ? yg(g, m, d, h, r.value, e) : g.length ? Promise.all(g).then(() => d) : d;
  };
}), T3 = /* @__PURE__ */ W("$ZodObjectJIT", (e, a) => {
  w3.init(e, a);
  const r = e._zod.parse, l = gd(() => gg(a)), u = (S) => {
    const w = new qw([
      "shape",
      "payload",
      "ctx"
    ]), A = l.value, T = (H) => {
      const D = f1(H);
      return `shape[${D}]._zod.run({ value: input[${D}], issues: [] }, ctx)`;
    };
    w.write("const input = payload.value;");
    const C = /* @__PURE__ */ Object.create(null);
    let R = 0;
    for (const H of A.keys) C[H] = `key_${R++}`;
    w.write("const newResult = {};");
    for (const H of A.keys) {
      const D = C[H], U = f1(H);
      w.write(`const ${D} = ${T(H)};`), w.write(`
        if (${D}.issues.length) {
          payload.issues = payload.issues.concat(${D}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${U}, ...iss.path] : [${U}]
          })));
        }
        
        
        if (${D}.value === undefined) {
          if (${U} in input) {
            newResult[${U}] = undefined;
          }
        } else {
          newResult[${U}] = ${D}.value;
        }
        
      `);
    }
    w.write("payload.value = newResult;"), w.write("return payload;");
    const N = w.compile();
    return (H, D) => N(S, H, D);
  };
  let c;
  const d = bu, h = !Vf.jitless, g = h && BE.value, p = a.catchall;
  let _;
  e._zod.parse = (S, w) => {
    _ ?? (_ = l.value);
    const A = S.value;
    return d(A) ? h && g && w?.async === !1 && w.jitless !== !0 ? (c || (c = u(a.shape)), S = c(S, w), p ? yg([], A, S, w, _, e) : S) : r(S, w) : (S.issues.push({
      expected: "object",
      code: "invalid_type",
      input: A,
      inst: e
    }), S);
  };
});
function m1(e, a, r, l) {
  for (const c of e) if (c.issues.length === 0)
    return a.value = c.value, a;
  const u = e.filter((c) => !or(c));
  return u.length === 1 ? (a.value = u[0].value, u[0]) : (a.issues.push({
    code: "invalid_union",
    input: a.value,
    inst: r,
    errors: e.map((c) => c.issues.map((d) => fi(d, l, ci())))
  }), a);
}
var C3 = /* @__PURE__ */ W("$ZodUnion", (e, a) => {
  Ke.init(e, a), ke(e._zod, "optin", () => a.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), ke(e._zod, "optout", () => a.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), ke(e._zod, "values", () => {
    if (a.options.every((u) => u._zod.values)) return new Set(a.options.flatMap((u) => Array.from(u._zod.values)));
  }), ke(e._zod, "pattern", () => {
    if (a.options.every((u) => u._zod.pattern)) {
      const u = a.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${u.map((c) => bd(c.source)).join("|")})$`);
    }
  });
  const r = a.options.length === 1, l = a.options[0]._zod.run;
  e._zod.parse = (u, c) => {
    if (r) return l(u, c);
    let d = !1;
    const h = [];
    for (const m of a.options) {
      const g = m._zod.run({
        value: u.value,
        issues: []
      }, c);
      if (g instanceof Promise)
        h.push(g), d = !0;
      else {
        if (g.issues.length === 0) return g;
        h.push(g);
      }
    }
    return d ? Promise.all(h).then((m) => m1(m, u, e, c)) : m1(h, u, e, c);
  };
}), A3 = /* @__PURE__ */ W("$ZodIntersection", (e, a) => {
  Ke.init(e, a), e._zod.parse = (r, l) => {
    const u = r.value, c = a.left._zod.run({
      value: u,
      issues: []
    }, l), d = a.right._zod.run({
      value: u,
      issues: []
    }, l);
    return c instanceof Promise || d instanceof Promise ? Promise.all([c, d]).then(([h, m]) => v1(r, h, m)) : v1(r, c, d);
  };
});
function Xf(e, a) {
  if (e === a) return {
    valid: !0,
    data: e
  };
  if (e instanceof Date && a instanceof Date && +e == +a) return {
    valid: !0,
    data: e
  };
  if (Eo(e) && Eo(a)) {
    const r = Object.keys(a), l = Object.keys(e).filter((c) => r.indexOf(c) !== -1), u = {
      ...e,
      ...a
    };
    for (const c of l) {
      const d = Xf(e[c], a[c]);
      if (!d.valid) return {
        valid: !1,
        mergeErrorPath: [c, ...d.mergeErrorPath]
      };
      u[c] = d.data;
    }
    return {
      valid: !0,
      data: u
    };
  }
  if (Array.isArray(e) && Array.isArray(a)) {
    if (e.length !== a.length) return {
      valid: !1,
      mergeErrorPath: []
    };
    const r = [];
    for (let l = 0; l < e.length; l++) {
      const u = e[l], c = a[l], d = Xf(u, c);
      if (!d.valid) return {
        valid: !1,
        mergeErrorPath: [l, ...d.mergeErrorPath]
      };
      r.push(d.data);
    }
    return {
      valid: !0,
      data: r
    };
  }
  return {
    valid: !1,
    mergeErrorPath: []
  };
}
function v1(e, a, r) {
  if (a.issues.length && e.issues.push(...a.issues), r.issues.length && e.issues.push(...r.issues), or(e)) return e;
  const l = Xf(a.value, r.value);
  if (!l.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
  return e.value = l.data, e;
}
var x3 = /* @__PURE__ */ W("$ZodEnum", (e, a) => {
  Ke.init(e, a);
  const r = LE(a.entries), l = new Set(r);
  e._zod.values = l, e._zod.pattern = new RegExp(`^(${r.filter((u) => UE.has(typeof u)).map((u) => typeof u == "string" ? fr(u) : u.toString()).join("|")})$`), e._zod.parse = (u, c) => {
    const d = u.value;
    return l.has(d) || u.issues.push({
      code: "invalid_value",
      values: r,
      input: d,
      inst: e
    }), u;
  };
}), O3 = /* @__PURE__ */ W("$ZodLiteral", (e, a) => {
  if (Ke.init(e, a), a.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
  e._zod.values = new Set(a.values), e._zod.pattern = new RegExp(`^(${a.values.map((r) => typeof r == "string" ? fr(r) : r ? fr(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, l) => {
    const u = r.value;
    return e._zod.values.has(u) || r.issues.push({
      code: "invalid_value",
      values: a.values,
      input: u,
      inst: e
    }), r;
  };
}), M3 = /* @__PURE__ */ W("$ZodTransform", (e, a) => {
  Ke.init(e, a), e._zod.parse = (r, l) => {
    if (l.direction === "backward") throw new ng(e.constructor.name);
    const u = a.transform(r.value, r);
    if (l.async) return (u instanceof Promise ? u : Promise.resolve(u)).then((c) => (r.value = c, r));
    if (u instanceof Promise) throw new ur();
    return r.value = u, r;
  };
});
function p1(e, a) {
  return e.issues.length && a === void 0 ? {
    issues: [],
    value: void 0
  } : e;
}
var R3 = /* @__PURE__ */ W("$ZodOptional", (e, a) => {
  Ke.init(e, a), e._zod.optin = "optional", e._zod.optout = "optional", ke(e._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, void 0]) : void 0), ke(e._zod, "pattern", () => {
    const r = a.innerType._zod.pattern;
    return r ? new RegExp(`^(${bd(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, l) => {
    if (a.innerType._zod.optin === "optional") {
      const u = a.innerType._zod.run(r, l);
      return u instanceof Promise ? u.then((c) => p1(c, r.value)) : p1(u, r.value);
    }
    return r.value === void 0 ? r : a.innerType._zod.run(r, l);
  };
}), N3 = /* @__PURE__ */ W("$ZodNullable", (e, a) => {
  Ke.init(e, a), ke(e._zod, "optin", () => a.innerType._zod.optin), ke(e._zod, "optout", () => a.innerType._zod.optout), ke(e._zod, "pattern", () => {
    const r = a.innerType._zod.pattern;
    return r ? new RegExp(`^(${bd(r.source)}|null)$`) : void 0;
  }), ke(e._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, null]) : void 0), e._zod.parse = (r, l) => r.value === null ? r : a.innerType._zod.run(r, l);
}), D3 = /* @__PURE__ */ W("$ZodDefault", (e, a) => {
  Ke.init(e, a), e._zod.optin = "optional", ke(e._zod, "values", () => a.innerType._zod.values), e._zod.parse = (r, l) => {
    if (l.direction === "backward") return a.innerType._zod.run(r, l);
    if (r.value === void 0)
      return r.value = a.defaultValue, r;
    const u = a.innerType._zod.run(r, l);
    return u instanceof Promise ? u.then((c) => g1(c, a)) : g1(u, a);
  };
});
function g1(e, a) {
  return e.value === void 0 && (e.value = a.defaultValue), e;
}
var z3 = /* @__PURE__ */ W("$ZodPrefault", (e, a) => {
  Ke.init(e, a), e._zod.optin = "optional", ke(e._zod, "values", () => a.innerType._zod.values), e._zod.parse = (r, l) => (l.direction === "backward" || r.value === void 0 && (r.value = a.defaultValue), a.innerType._zod.run(r, l));
}), H3 = /* @__PURE__ */ W("$ZodNonOptional", (e, a) => {
  Ke.init(e, a), ke(e._zod, "values", () => {
    const r = a.innerType._zod.values;
    return r ? new Set([...r].filter((l) => l !== void 0)) : void 0;
  }), e._zod.parse = (r, l) => {
    const u = a.innerType._zod.run(r, l);
    return u instanceof Promise ? u.then((c) => y1(c, e)) : y1(u, e);
  };
});
function y1(e, a) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: a
  }), e;
}
var L3 = /* @__PURE__ */ W("$ZodCatch", (e, a) => {
  Ke.init(e, a), ke(e._zod, "optin", () => a.innerType._zod.optin), ke(e._zod, "optout", () => a.innerType._zod.optout), ke(e._zod, "values", () => a.innerType._zod.values), e._zod.parse = (r, l) => {
    if (l.direction === "backward") return a.innerType._zod.run(r, l);
    const u = a.innerType._zod.run(r, l);
    return u instanceof Promise ? u.then((c) => (r.value = c.value, c.issues.length && (r.value = a.catchValue({
      ...r,
      error: { issues: c.issues.map((d) => fi(d, l, ci())) },
      input: r.value
    }), r.issues = []), r)) : (r.value = u.value, u.issues.length && (r.value = a.catchValue({
      ...r,
      error: { issues: u.issues.map((c) => fi(c, l, ci())) },
      input: r.value
    }), r.issues = []), r);
  };
}), j3 = /* @__PURE__ */ W("$ZodPipe", (e, a) => {
  Ke.init(e, a), ke(e._zod, "values", () => a.in._zod.values), ke(e._zod, "optin", () => a.in._zod.optin), ke(e._zod, "optout", () => a.out._zod.optout), ke(e._zod, "propValues", () => a.in._zod.propValues), e._zod.parse = (r, l) => {
    if (l.direction === "backward") {
      const c = a.out._zod.run(r, l);
      return c instanceof Promise ? c.then((d) => au(d, a.in, l)) : au(c, a.in, l);
    }
    const u = a.in._zod.run(r, l);
    return u instanceof Promise ? u.then((c) => au(c, a.out, l)) : au(u, a.out, l);
  };
});
function au(e, a, r) {
  return e.issues.length ? (e.aborted = !0, e) : a._zod.run({
    value: e.value,
    issues: e.issues
  }, r);
}
var B3 = /* @__PURE__ */ W("$ZodReadonly", (e, a) => {
  Ke.init(e, a), ke(e._zod, "propValues", () => a.innerType._zod.propValues), ke(e._zod, "values", () => a.innerType._zod.values), ke(e._zod, "optin", () => a.innerType._zod.optin), ke(e._zod, "optout", () => a.innerType._zod.optout), e._zod.parse = (r, l) => {
    if (l.direction === "backward") return a.innerType._zod.run(r, l);
    const u = a.innerType._zod.run(r, l);
    return u instanceof Promise ? u.then(b1) : b1(u);
  };
});
function b1(e) {
  return e.value = Object.freeze(e.value), e;
}
var U3 = /* @__PURE__ */ W("$ZodCustom", (e, a) => {
  Lt.init(e, a), Ke.init(e, a), e._zod.parse = (r, l) => r, e._zod.check = (r) => {
    const l = r.value, u = a.fn(l);
    if (u instanceof Promise) return u.then((c) => _1(c, r, l, e));
    _1(u, r, l, e);
  };
});
function _1(e, a, r, l) {
  if (!e) {
    const u = {
      code: "custom",
      input: r,
      inst: l,
      path: [...l._zod.def.path ?? []],
      continue: !l._zod.def.abort
    };
    l._zod.def.params && (u.params = l._zod.def.params), a.issues.push(wo(u));
  }
}
var P3 = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(e, ...a) {
    const r = a[0];
    if (this._map.set(e, r), r && typeof r == "object" && "id" in r) {
      if (this._idmap.has(r.id)) throw new Error(`ID ${r.id} already exists in the registry`);
      this._idmap.set(r.id, e);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(e) {
    const a = this._map.get(e);
    return a && typeof a == "object" && "id" in a && this._idmap.delete(a.id), this._map.delete(e), this;
  }
  get(e) {
    const a = e._zod.parent;
    if (a) {
      const r = { ...this.get(a) ?? {} };
      delete r.id;
      const l = {
        ...r,
        ...this._map.get(e)
      };
      return Object.keys(l).length ? l : void 0;
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
};
function Z3() {
  return new P3();
}
var iu = /* @__PURE__ */ Z3();
function G3(e, a) {
  return new e({
    type: "string",
    ...de(a)
  });
}
function bg(e, a) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function S1(e, a) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function k3(e, a) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function I3(e, a) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...de(a)
  });
}
function $3(e, a) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...de(a)
  });
}
function q3(e, a) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...de(a)
  });
}
function V3(e, a) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function F3(e, a) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function X3(e, a) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function Y3(e, a) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function W3(e, a) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function Q3(e, a) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function K3(e, a) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function J3(e, a) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function e4(e, a) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function t4(e, a) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function n4(e, a) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function a4(e, a) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function i4(e, a) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function r4(e, a) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function o4(e, a) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function l4(e, a) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...de(a)
  });
}
function u4(e, a) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...de(a)
  });
}
function s4(e, a) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...de(a)
  });
}
function c4(e, a) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...de(a)
  });
}
function f4(e, a) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...de(a)
  });
}
function d4(e, a) {
  return new e({
    type: "number",
    checks: [],
    ...de(a)
  });
}
function h4(e, a) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...de(a)
  });
}
function m4(e, a) {
  return new e({
    type: "boolean",
    ...de(a)
  });
}
function v4(e) {
  return new e({ type: "unknown" });
}
function p4(e, a) {
  return new e({
    type: "never",
    ...de(a)
  });
}
function E1(e, a) {
  return new hg({
    check: "less_than",
    ...de(a),
    value: e,
    inclusive: !1
  });
}
function pf(e, a) {
  return new hg({
    check: "less_than",
    ...de(a),
    value: e,
    inclusive: !0
  });
}
function w1(e, a) {
  return new mg({
    check: "greater_than",
    ...de(a),
    value: e,
    inclusive: !1
  });
}
function gf(e, a) {
  return new mg({
    check: "greater_than",
    ...de(a),
    value: e,
    inclusive: !0
  });
}
function T1(e, a) {
  return new zw({
    check: "multiple_of",
    ...de(a),
    value: e
  });
}
function _g(e, a) {
  return new Lw({
    check: "max_length",
    ...de(a),
    maximum: e
  });
}
function Su(e, a) {
  return new jw({
    check: "min_length",
    ...de(a),
    minimum: e
  });
}
function Sg(e, a) {
  return new Bw({
    check: "length_equals",
    ...de(a),
    length: e
  });
}
function g4(e, a) {
  return new Uw({
    check: "string_format",
    format: "regex",
    ...de(a),
    pattern: e
  });
}
function y4(e) {
  return new Pw({
    check: "string_format",
    format: "lowercase",
    ...de(e)
  });
}
function b4(e) {
  return new Zw({
    check: "string_format",
    format: "uppercase",
    ...de(e)
  });
}
function _4(e, a) {
  return new Gw({
    check: "string_format",
    format: "includes",
    ...de(a),
    includes: e
  });
}
function S4(e, a) {
  return new kw({
    check: "string_format",
    format: "starts_with",
    ...de(a),
    prefix: e
  });
}
function E4(e, a) {
  return new Iw({
    check: "string_format",
    format: "ends_with",
    ...de(a),
    suffix: e
  });
}
function Ro(e) {
  return new $w({
    check: "overwrite",
    tx: e
  });
}
function w4(e) {
  return Ro((a) => a.normalize(e));
}
function T4() {
  return Ro((e) => e.trim());
}
function C4() {
  return Ro((e) => e.toLowerCase());
}
function A4() {
  return Ro((e) => e.toUpperCase());
}
function x4(e, a, r) {
  return new e({
    type: "array",
    element: a,
    ...de(r)
  });
}
function O4(e, a, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: a,
    ...de(r)
  });
}
function M4(e) {
  const a = R4((r) => (r.addIssue = (l) => {
    if (typeof l == "string") r.issues.push(wo(l, r.value, a._zod.def));
    else {
      const u = l;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = r.value), u.inst ?? (u.inst = a), u.continue ?? (u.continue = !a._zod.def.abort), r.issues.push(wo(u));
    }
  }, e(r.value, r)));
  return a;
}
function R4(e, a) {
  const r = new Lt({
    check: "custom",
    ...de(a)
  });
  return r._zod.check = e, r;
}
var N4 = /* @__PURE__ */ W("ZodISODateTime", (e, a) => {
  i3.init(e, a), Ye.init(e, a);
});
function D4(e) {
  return u4(N4, e);
}
var z4 = /* @__PURE__ */ W("ZodISODate", (e, a) => {
  r3.init(e, a), Ye.init(e, a);
});
function H4(e) {
  return s4(z4, e);
}
var L4 = /* @__PURE__ */ W("ZodISOTime", (e, a) => {
  o3.init(e, a), Ye.init(e, a);
});
function j4(e) {
  return c4(L4, e);
}
var B4 = /* @__PURE__ */ W("ZodISODuration", (e, a) => {
  l3.init(e, a), Ye.init(e, a);
});
function U4(e) {
  return f4(B4, e);
}
var Eg = (e, a) => {
  lg.init(e, a), e.name = "ZodError", Object.defineProperties(e, {
    format: { value: (r) => YE(e, r) },
    flatten: { value: (r) => XE(e, r) },
    addIssue: { value: (r) => {
      e.issues.push(r), e.message = JSON.stringify(e.issues, Ff, 2);
    } },
    addIssues: { value: (r) => {
      e.issues.push(...r), e.message = JSON.stringify(e.issues, Ff, 2);
    } },
    isEmpty: { get() {
      return e.issues.length === 0;
    } }
  });
}, Yx = W("ZodError", Eg), fn = W("ZodError", Eg, { Parent: Error }), P4 = /* @__PURE__ */ Sd(fn), Z4 = /* @__PURE__ */ Ed(fn), G4 = /* @__PURE__ */ Du(fn), k4 = /* @__PURE__ */ zu(fn), I4 = /* @__PURE__ */ KE(fn), $4 = /* @__PURE__ */ JE(fn), q4 = /* @__PURE__ */ ew(fn), V4 = /* @__PURE__ */ tw(fn), F4 = /* @__PURE__ */ nw(fn), X4 = /* @__PURE__ */ aw(fn), Y4 = /* @__PURE__ */ iw(fn), W4 = /* @__PURE__ */ rw(fn), nt = /* @__PURE__ */ W("ZodType", (e, a) => (Ke.init(e, a), e.def = a, e.type = a.type, Object.defineProperty(e, "_def", { value: a }), e.check = (...r) => e.clone(gi(a, { checks: [...a.checks ?? [], ...r.map((l) => typeof l == "function" ? { _zod: {
  check: l,
  def: { check: "custom" },
  onattach: []
} } : l)] })), e.clone = (r, l) => Ua(e, r, l), e.brand = () => e, e.register = ((r, l) => (r.add(e, l), e)), e.parse = (r, l) => P4(e, r, l, { callee: e.parse }), e.safeParse = (r, l) => G4(e, r, l), e.parseAsync = async (r, l) => Z4(e, r, l, { callee: e.parseAsync }), e.safeParseAsync = async (r, l) => k4(e, r, l), e.spa = e.safeParseAsync, e.encode = (r, l) => I4(e, r, l), e.decode = (r, l) => $4(e, r, l), e.encodeAsync = async (r, l) => q4(e, r, l), e.decodeAsync = async (r, l) => V4(e, r, l), e.safeEncode = (r, l) => F4(e, r, l), e.safeDecode = (r, l) => X4(e, r, l), e.safeEncodeAsync = async (r, l) => Y4(e, r, l), e.safeDecodeAsync = async (r, l) => W4(e, r, l), e.refine = (r, l) => e.check(GT(r, l)), e.superRefine = (r) => e.check(kT(r)), e.overwrite = (r) => e.check(Ro(r)), e.optional = () => O1(e), e.nullable = () => M1(e), e.nullish = () => O1(M1(e)), e.nonoptional = (r) => HT(e, r), e.array = () => Dn(e), e.or = (r) => wT([e, r]), e.and = (r) => CT(e, r), e.transform = (r) => R1(e, OT(r)), e.default = (r) => NT(e, r), e.prefault = (r) => zT(e, r), e.catch = (r) => jT(e, r), e.pipe = (r) => R1(e, r), e.readonly = () => PT(e), e.describe = (r) => {
  const l = e.clone();
  return iu.add(l, { description: r }), l;
}, Object.defineProperty(e, "description", {
  get() {
    return iu.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0) return iu.get(e);
  const l = e.clone();
  return iu.add(l, r[0]), l;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), wg = /* @__PURE__ */ W("_ZodString", (e, a) => {
  wd.init(e, a), nt.init(e, a);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...l) => e.check(g4(...l)), e.includes = (...l) => e.check(_4(...l)), e.startsWith = (...l) => e.check(S4(...l)), e.endsWith = (...l) => e.check(E4(...l)), e.min = (...l) => e.check(Su(...l)), e.max = (...l) => e.check(_g(...l)), e.length = (...l) => e.check(Sg(...l)), e.nonempty = (...l) => e.check(Su(1, ...l)), e.lowercase = (l) => e.check(y4(l)), e.uppercase = (l) => e.check(b4(l)), e.trim = () => e.check(T4()), e.normalize = (...l) => e.check(w4(...l)), e.toLowerCase = () => e.check(C4()), e.toUpperCase = () => e.check(A4());
}), Q4 = /* @__PURE__ */ W("ZodString", (e, a) => {
  wd.init(e, a), wg.init(e, a), e.email = (r) => e.check(bg(Tg, r)), e.url = (r) => e.check(V3(J4, r)), e.jwt = (r) => e.check(l4(mT, r)), e.emoji = (r) => e.check(F3(eT, r)), e.guid = (r) => e.check(S1(C1, r)), e.uuid = (r) => e.check(k3(ru, r)), e.uuidv4 = (r) => e.check(I3(ru, r)), e.uuidv6 = (r) => e.check($3(ru, r)), e.uuidv7 = (r) => e.check(q3(ru, r)), e.nanoid = (r) => e.check(X3(tT, r)), e.guid = (r) => e.check(S1(C1, r)), e.cuid = (r) => e.check(Y3(nT, r)), e.cuid2 = (r) => e.check(W3(aT, r)), e.ulid = (r) => e.check(Q3(iT, r)), e.base64 = (r) => e.check(i4(fT, r)), e.base64url = (r) => e.check(r4(dT, r)), e.xid = (r) => e.check(K3(rT, r)), e.ksuid = (r) => e.check(J3(oT, r)), e.ipv4 = (r) => e.check(e4(lT, r)), e.ipv6 = (r) => e.check(t4(uT, r)), e.cidrv4 = (r) => e.check(n4(sT, r)), e.cidrv6 = (r) => e.check(a4(cT, r)), e.e164 = (r) => e.check(o4(hT, r)), e.datetime = (r) => e.check(D4(r)), e.date = (r) => e.check(H4(r)), e.time = (r) => e.check(j4(r)), e.duration = (r) => e.check(U4(r));
});
function Ct(e) {
  return G3(Q4, e);
}
var Ye = /* @__PURE__ */ W("ZodStringFormat", (e, a) => {
  Xe.init(e, a), wg.init(e, a);
}), Tg = /* @__PURE__ */ W("ZodEmail", (e, a) => {
  Yw.init(e, a), Ye.init(e, a);
});
function K4(e) {
  return bg(Tg, e);
}
var C1 = /* @__PURE__ */ W("ZodGUID", (e, a) => {
  Fw.init(e, a), Ye.init(e, a);
}), ru = /* @__PURE__ */ W("ZodUUID", (e, a) => {
  Xw.init(e, a), Ye.init(e, a);
}), J4 = /* @__PURE__ */ W("ZodURL", (e, a) => {
  Ww.init(e, a), Ye.init(e, a);
}), eT = /* @__PURE__ */ W("ZodEmoji", (e, a) => {
  Qw.init(e, a), Ye.init(e, a);
}), tT = /* @__PURE__ */ W("ZodNanoID", (e, a) => {
  Kw.init(e, a), Ye.init(e, a);
}), nT = /* @__PURE__ */ W("ZodCUID", (e, a) => {
  Jw.init(e, a), Ye.init(e, a);
}), aT = /* @__PURE__ */ W("ZodCUID2", (e, a) => {
  e3.init(e, a), Ye.init(e, a);
}), iT = /* @__PURE__ */ W("ZodULID", (e, a) => {
  t3.init(e, a), Ye.init(e, a);
}), rT = /* @__PURE__ */ W("ZodXID", (e, a) => {
  n3.init(e, a), Ye.init(e, a);
}), oT = /* @__PURE__ */ W("ZodKSUID", (e, a) => {
  a3.init(e, a), Ye.init(e, a);
}), lT = /* @__PURE__ */ W("ZodIPv4", (e, a) => {
  u3.init(e, a), Ye.init(e, a);
}), uT = /* @__PURE__ */ W("ZodIPv6", (e, a) => {
  s3.init(e, a), Ye.init(e, a);
}), sT = /* @__PURE__ */ W("ZodCIDRv4", (e, a) => {
  c3.init(e, a), Ye.init(e, a);
}), cT = /* @__PURE__ */ W("ZodCIDRv6", (e, a) => {
  f3.init(e, a), Ye.init(e, a);
}), fT = /* @__PURE__ */ W("ZodBase64", (e, a) => {
  d3.init(e, a), Ye.init(e, a);
}), dT = /* @__PURE__ */ W("ZodBase64URL", (e, a) => {
  m3.init(e, a), Ye.init(e, a);
}), hT = /* @__PURE__ */ W("ZodE164", (e, a) => {
  v3.init(e, a), Ye.init(e, a);
}), mT = /* @__PURE__ */ W("ZodJWT", (e, a) => {
  g3.init(e, a), Ye.init(e, a);
}), Cg = /* @__PURE__ */ W("ZodNumber", (e, a) => {
  pg.init(e, a), nt.init(e, a), e.gt = (l, u) => e.check(w1(l, u)), e.gte = (l, u) => e.check(gf(l, u)), e.min = (l, u) => e.check(gf(l, u)), e.lt = (l, u) => e.check(E1(l, u)), e.lte = (l, u) => e.check(pf(l, u)), e.max = (l, u) => e.check(pf(l, u)), e.int = (l) => e.check(A1(l)), e.safe = (l) => e.check(A1(l)), e.positive = (l) => e.check(w1(0, l)), e.nonnegative = (l) => e.check(gf(0, l)), e.negative = (l) => e.check(E1(0, l)), e.nonpositive = (l) => e.check(pf(0, l)), e.multipleOf = (l, u) => e.check(T1(l, u)), e.step = (l, u) => e.check(T1(l, u)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function Ag(e) {
  return d4(Cg, e);
}
var vT = /* @__PURE__ */ W("ZodNumberFormat", (e, a) => {
  y3.init(e, a), Cg.init(e, a);
});
function A1(e) {
  return h4(vT, e);
}
var pT = /* @__PURE__ */ W("ZodBoolean", (e, a) => {
  b3.init(e, a), nt.init(e, a);
});
function Na(e) {
  return m4(pT, e);
}
var gT = /* @__PURE__ */ W("ZodUnknown", (e, a) => {
  _3.init(e, a), nt.init(e, a);
});
function x1() {
  return v4(gT);
}
var yT = /* @__PURE__ */ W("ZodNever", (e, a) => {
  S3.init(e, a), nt.init(e, a);
});
function bT(e) {
  return p4(yT, e);
}
var _T = /* @__PURE__ */ W("ZodArray", (e, a) => {
  E3.init(e, a), nt.init(e, a), e.element = a.element, e.min = (r, l) => e.check(Su(r, l)), e.nonempty = (r) => e.check(Su(1, r)), e.max = (r, l) => e.check(_g(r, l)), e.length = (r, l) => e.check(Sg(r, l)), e.unwrap = () => e.element;
});
function Dn(e, a) {
  return x4(_T, e, a);
}
var ST = /* @__PURE__ */ W("ZodObject", (e, a) => {
  T3.init(e, a), nt.init(e, a), ke(e, "shape", () => a.shape), e.keyof = () => Da(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({
    ...e._zod.def,
    catchall: r
  }), e.passthrough = () => e.clone({
    ...e._zod.def,
    catchall: x1()
  }), e.loose = () => e.clone({
    ...e._zod.def,
    catchall: x1()
  }), e.strict = () => e.clone({
    ...e._zod.def,
    catchall: bT()
  }), e.strip = () => e.clone({
    ...e._zod.def,
    catchall: void 0
  }), e.extend = (r) => IE(e, r), e.safeExtend = (r) => $E(e, r), e.merge = (r) => qE(e, r), e.pick = (r) => GE(e, r), e.omit = (r) => kE(e, r), e.partial = (...r) => VE(xg, e, r[0]), e.required = (...r) => FE(Og, e, r[0]);
});
function bn(e, a) {
  return new ST({
    type: "object",
    shape: e ?? {},
    ...de(a)
  });
}
var ET = /* @__PURE__ */ W("ZodUnion", (e, a) => {
  C3.init(e, a), nt.init(e, a), e.options = a.options;
});
function wT(e, a) {
  return new ET({
    type: "union",
    options: e,
    ...de(a)
  });
}
var TT = /* @__PURE__ */ W("ZodIntersection", (e, a) => {
  A3.init(e, a), nt.init(e, a);
});
function CT(e, a) {
  return new TT({
    type: "intersection",
    left: e,
    right: a
  });
}
var Yf = /* @__PURE__ */ W("ZodEnum", (e, a) => {
  x3.init(e, a), nt.init(e, a), e.enum = a.entries, e.options = Object.values(a.entries);
  const r = new Set(Object.keys(a.entries));
  e.extract = (l, u) => {
    const c = {};
    for (const d of l) if (r.has(d)) c[d] = a.entries[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new Yf({
      ...a,
      checks: [],
      ...de(u),
      entries: c
    });
  }, e.exclude = (l, u) => {
    const c = { ...a.entries };
    for (const d of l) if (r.has(d)) delete c[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new Yf({
      ...a,
      checks: [],
      ...de(u),
      entries: c
    });
  };
});
function Da(e, a) {
  return new Yf({
    type: "enum",
    entries: Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e,
    ...de(a)
  });
}
var AT = /* @__PURE__ */ W("ZodLiteral", (e, a) => {
  O3.init(e, a), nt.init(e, a), e.values = new Set(a.values), Object.defineProperty(e, "value", { get() {
    if (a.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return a.values[0];
  } });
});
function Td(e, a) {
  return new AT({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...de(a)
  });
}
var xT = /* @__PURE__ */ W("ZodTransform", (e, a) => {
  M3.init(e, a), nt.init(e, a), e._zod.parse = (r, l) => {
    if (l.direction === "backward") throw new ng(e.constructor.name);
    r.addIssue = (c) => {
      if (typeof c == "string") r.issues.push(wo(c, r.value, a));
      else {
        const d = c;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = r.value), d.inst ?? (d.inst = e), r.issues.push(wo(d));
      }
    };
    const u = a.transform(r.value, r);
    return u instanceof Promise ? u.then((c) => (r.value = c, r)) : (r.value = u, r);
  };
});
function OT(e) {
  return new xT({
    type: "transform",
    transform: e
  });
}
var xg = /* @__PURE__ */ W("ZodOptional", (e, a) => {
  R3.init(e, a), nt.init(e, a), e.unwrap = () => e._zod.def.innerType;
});
function O1(e) {
  return new xg({
    type: "optional",
    innerType: e
  });
}
var MT = /* @__PURE__ */ W("ZodNullable", (e, a) => {
  N3.init(e, a), nt.init(e, a), e.unwrap = () => e._zod.def.innerType;
});
function M1(e) {
  return new MT({
    type: "nullable",
    innerType: e
  });
}
var RT = /* @__PURE__ */ W("ZodDefault", (e, a) => {
  D3.init(e, a), nt.init(e, a), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function NT(e, a) {
  return new RT({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof a == "function" ? a() : ig(a);
    }
  });
}
var DT = /* @__PURE__ */ W("ZodPrefault", (e, a) => {
  z3.init(e, a), nt.init(e, a), e.unwrap = () => e._zod.def.innerType;
});
function zT(e, a) {
  return new DT({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof a == "function" ? a() : ig(a);
    }
  });
}
var Og = /* @__PURE__ */ W("ZodNonOptional", (e, a) => {
  H3.init(e, a), nt.init(e, a), e.unwrap = () => e._zod.def.innerType;
});
function HT(e, a) {
  return new Og({
    type: "nonoptional",
    innerType: e,
    ...de(a)
  });
}
var LT = /* @__PURE__ */ W("ZodCatch", (e, a) => {
  L3.init(e, a), nt.init(e, a), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function jT(e, a) {
  return new LT({
    type: "catch",
    innerType: e,
    catchValue: typeof a == "function" ? a : () => a
  });
}
var BT = /* @__PURE__ */ W("ZodPipe", (e, a) => {
  j3.init(e, a), nt.init(e, a), e.in = a.in, e.out = a.out;
});
function R1(e, a) {
  return new BT({
    type: "pipe",
    in: e,
    out: a
  });
}
var UT = /* @__PURE__ */ W("ZodReadonly", (e, a) => {
  B3.init(e, a), nt.init(e, a), e.unwrap = () => e._zod.def.innerType;
});
function PT(e) {
  return new UT({
    type: "readonly",
    innerType: e
  });
}
var ZT = /* @__PURE__ */ W("ZodCustom", (e, a) => {
  U3.init(e, a), nt.init(e, a);
});
function GT(e, a = {}) {
  return O4(ZT, e, a);
}
function kT(e) {
  return M4(e);
}
var IT = bn({
  hidden: Na(),
  edit_context: bn({
    codex_thread_id: Ct().nullable(),
    chatgpt_conversation_id: Ct().nullable()
  })
}), Cd = "/_sites/dispatch-assets/app-openai.svg", $T = "/_internal/sites_widget/log_event", qT = "/_internal/sites_widget/editor/config";
async function VT() {
  const e = await fetch(qT, {
    credentials: "same-origin",
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(1e4)
  });
  if (!e.ok) throw new Error("Unable to load editor widget configuration");
  return IT.parse(await e.json());
}
function Ad() {
  let e = Promise.resolve();
  return (a) => (e = e.then(async () => {
    if (!(await fetch("/_internal/sites_widget/editor/config", {
      method: "POST",
      credentials: "same-origin",
      redirect: "error",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hidden: a }),
      keepalive: !0,
      signal: AbortSignal.timeout(1e4)
    })).ok) throw new Error("Unable to save editor widget preference");
  }).catch(() => {
    console.warn("Unable to save editor widget preference");
  }), e);
}
function st(e, a) {
  const r = $T;
  fetch(a ? new URL(r, a) : r, {
    method: "POST",
    credentials: a ? "include" : "same-origin",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ interaction_type: e }),
    keepalive: !0
  }).catch(() => {
  });
}
var FT = "_Button_guvzm_1", XT = "_ButtonInner_guvzm_107", Eu = {
  Button: FT,
  ButtonInner: XT
}, YT = /* @__PURE__ */ Xt(((e) => {
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function l(u, c, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      d = {};
      for (var m in c) m !== "key" && (d[m] = c[m]);
    } else d = c;
    return c = d.ref, {
      $$typeof: a,
      type: u,
      key: h,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  e.Fragment = r, e.jsx = l, e.jsxs = l;
})), WT = /* @__PURE__ */ Xt(((e, a) => {
  a.exports = YT();
})), b = WT();
function Mg(e) {
  const a = e.currentTarget.offsetWidth;
  let r = 0.985;
  a <= 80 ? r = 0.96 : a <= 150 ? r = 0.97 : a <= 220 ? r = 0.98 : a > 600 && (r = 0.995), e.currentTarget.style.setProperty("--button-press-scale", String(r));
}
function At({ type: e = "button", color: a = "primary", variant: r = "solid", pill: l = !1, uniform: u = !1, size: c = "md", iconSize: d, children: h, className: m, disabled: g, onClick: p, onPointerEnter: _, ...S }) {
  const w = (0, y.useCallback)((T) => {
    g || p?.(T);
  }, [g, p]), A = (0, y.useCallback)((T) => {
    Mg(T), _?.(T);
  }, [_]);
  return /* @__PURE__ */ (0, b.jsx)("button", {
    ...S,
    type: e,
    className: De(Eu.Button, m),
    "data-color": a,
    "data-variant": r,
    "data-pill": l ? "" : void 0,
    "data-uniform": u ? "" : void 0,
    "data-size": c,
    "data-icon-size": d,
    "data-disabled": g ? "" : void 0,
    disabled: g,
    "aria-disabled": g || void 0,
    onClick: w,
    onPointerEnter: A,
    children: /* @__PURE__ */ (0, b.jsx)("span", {
      className: Eu.ButtonInner,
      children: h
    })
  });
}
function Rg({ color: e = "primary", variant: a = "solid", pill: r = !1, uniform: l = !1, size: u = "md", iconSize: c, children: d, className: h, onPointerEnter: m, ...g }) {
  return /* @__PURE__ */ (0, b.jsx)("a", {
    ...g,
    className: De(Eu.Button, h),
    "data-color": e,
    "data-variant": a,
    "data-pill": r ? "" : void 0,
    "data-uniform": l ? "" : void 0,
    "data-size": u,
    "data-icon-size": c,
    onPointerEnter: (p) => {
      Mg(p), m?.(p);
    },
    children: /* @__PURE__ */ (0, b.jsx)("span", {
      className: Eu.ButtonInner,
      children: d
    })
  });
}
function QT(e, a) {
  const r = (0, y.useRef)(0), l = (0, y.useRef)(null), u = (0, y.useCallback)((c, d = "") => {
    c.style.height = "0px";
    const { scrollHeight: h, offsetHeight: m, offsetWidth: g, clientHeight: p } = c, _ = h + (m - p);
    c.style.height = `${_}px`, r.current < h && c.selectionEnd === d.length && (c.scrollTop = h), r.current = c.scrollHeight, l.current = g;
  }, []);
  (0, y.useLayoutEffect)(() => {
    const c = e.current;
    c !== null && u(c, a);
  }, [
    u,
    e,
    a
  ]), (0, y.useEffect)(() => {
    const c = e.current;
    if (c === null) return;
    const d = new ResizeObserver(() => {
      const h = c.offsetWidth;
      (l.current === null || h !== l.current) && u(c, c.value);
    });
    return d.observe(c), () => d.disconnect();
  }, [u, e]);
}
var KT = typeof navigator < "u", JT = KT ? navigator.userAgent ?? "" : "";
function xd() {
  return K2(JT) || eC();
}
function eC() {
  return typeof navigator < "u" && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function tC() {
  return typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform);
}
var nC = () => {
  const e = (0, y.useRef)(!1), a = (0, y.useRef)(null);
  (0, y.useEffect)(() => () => {
    a.current !== null && clearTimeout(a.current);
  }, []);
  const r = () => {
    a.current !== null && (clearTimeout(a.current), a.current = null);
  }, l = () => {
    r(), a.current = setTimeout(() => {
      e.current = !1, a.current = null;
    }, 0);
  };
  return {
    handleCompositionStart: () => {
      r(), e.current = !0;
    },
    handleCompositionEnd: () => {
      e.current = !0, l();
    },
    isComposing: (h) => {
      const m = "nativeEvent" in h ? h.nativeEvent : h;
      return m.isComposing || e.current || m.keyCode === 229;
    }
  };
};
function aC({ textareaRef: e, value: a, onChange: r, onKeyDown: l, onCompositionStart: u, onCompositionEnd: c, ...d }) {
  QT(e, a);
  const { handleCompositionStart: h, handleCompositionEnd: m, isComposing: g } = nC();
  return /* @__PURE__ */ (0, b.jsx)("textarea", {
    ...d,
    ref: e,
    rows: 1,
    value: a,
    onChange: r,
    onCompositionStart: (p) => {
      h(), u?.(p);
    },
    onCompositionEnd: (p) => {
      m(), c?.(p);
    },
    onKeyDown: (p) => {
      l?.(p), !(p.defaultPrevented || p.key !== "Enter" || p.shiftKey || g(p) || xd()) && (p.preventDefault(), p.repeat || p.currentTarget.form?.requestSubmit());
    }
  });
}
var iC = "_Image_1l1xj_1", rC = { Image: iC }, N1 = /* @__PURE__ */ new Set();
function Od({ src: e, className: a, draggable: r = !1, onLoad: l, onError: u, forceRenderAfterLoadFail: c = !1, ...d }) {
  const [h, m] = (0, y.useState)(() => e && N1.has(e)), [g, p] = (0, y.useState)(!1), _ = h || g && c;
  return !e || !c && g ? null : /* @__PURE__ */ (0, b.jsx)("img", {
    ...d,
    src: e,
    className: De(rC.Image, a),
    onLoad: (S) => {
      m(!0), N1.add(e), l?.(S);
    },
    onError: (S) => {
      p(!0), u?.(S);
    },
    "data-loaded": _ ? "" : void 0,
    draggable: r
  });
}
var oC = /* @__PURE__ */ Xt(((e) => {
  var a = dd();
  function r(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++) p += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var u = {
    d: {
      f: l,
      r: function() {
        throw Error(r(522));
      },
      D: l,
      C: l,
      L: l,
      m: l,
      X: l,
      S: l,
      M: l
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function d(g, p, _) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: g,
      containerInfo: p,
      implementation: _
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, e.createPortal = function(g, p) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(r(299));
    return d(g, p, null, _);
  }, e.flushSync = function(g) {
    var p = h.T, _ = u.p;
    try {
      if (h.T = null, u.p = 2, g) return g();
    } finally {
      h.T = p, u.p = _, u.d.f();
    }
  }, e.preconnect = function(g, p) {
    typeof g == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, u.d.C(g, p));
  }, e.prefetchDNS = function(g) {
    typeof g == "string" && u.d.D(g);
  }, e.preinit = function(g, p) {
    if (typeof g == "string" && p && typeof p.as == "string") {
      var _ = p.as, S = m(_, p.crossOrigin), w = typeof p.integrity == "string" ? p.integrity : void 0, A = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      _ === "style" ? u.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
        crossOrigin: S,
        integrity: w,
        fetchPriority: A
      }) : _ === "script" && u.d.X(g, {
        crossOrigin: S,
        integrity: w,
        fetchPriority: A,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, e.preinitModule = function(g, p) {
    if (typeof g == "string") if (typeof p == "object" && p !== null) {
      if (p.as == null || p.as === "script") {
        var _ = m(p.as, p.crossOrigin);
        u.d.M(g, {
          crossOrigin: _,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0
        });
      }
    } else p ?? u.d.M(g);
  }, e.preload = function(g, p) {
    if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var _ = p.as, S = m(_, p.crossOrigin);
      u.d.L(g, _, {
        crossOrigin: S,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, e.preloadModule = function(g, p) {
    if (typeof g == "string") if (p) {
      var _ = m(p.as, p.crossOrigin);
      u.d.m(g, {
        as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
        crossOrigin: _,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0
      });
    } else u.d.m(g);
  }, e.requestFormReset = function(g) {
    u.d.r(g);
  }, e.unstable_batchedUpdates = function(g, p) {
    return g(p);
  }, e.useFormState = function(g, p, _) {
    return h.H.useFormState(g, p, _);
  }, e.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, e.version = "19.2.8";
})), Ng = /* @__PURE__ */ Xt(((e, a) => {
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (l) {
        console.error(l);
      }
  }
  r(), a.exports = oC();
}));
function D1(e, a) {
  if (typeof e == "function") return e(a);
  e != null && (e.current = a);
}
function Dg(...e) {
  return (a) => {
    let r = !1;
    const l = e.map((u) => {
      const c = D1(u, a);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r) return () => {
      for (let u = 0; u < l.length; u++) {
        const c = l[u];
        typeof c == "function" ? c() : D1(e[u], null);
      }
    };
  };
}
function Yt(...e) {
  return y.useCallback(Dg(...e), e);
}
var No = y.forwardRef((e, a) => {
  const { children: r, ...l } = e, u = y.Children.toArray(r), c = u.find(lC);
  if (c) {
    const d = c.props.children, h = u.map((m) => m === c ? y.Children.count(d) > 1 ? y.Children.only(null) : y.isValidElement(d) ? d.props.children : null : m);
    return /* @__PURE__ */ (0, b.jsx)(Wf, {
      ...l,
      ref: a,
      children: y.isValidElement(d) ? y.cloneElement(d, void 0, h) : null
    });
  }
  return /* @__PURE__ */ (0, b.jsx)(Wf, {
    ...l,
    ref: a,
    children: r
  });
});
No.displayName = "Slot";
var Wf = y.forwardRef((e, a) => {
  const { children: r, ...l } = e;
  if (y.isValidElement(r)) {
    const u = sC(r), c = uC(l, r.props);
    return r.type !== y.Fragment && (c.ref = a ? Dg(a, u) : u), y.cloneElement(r, c);
  }
  return y.Children.count(r) > 1 ? y.Children.only(null) : null;
});
Wf.displayName = "SlotClone";
var zg = ({ children: e }) => /* @__PURE__ */ (0, b.jsx)(b.Fragment, { children: e });
function lC(e) {
  return y.isValidElement(e) && e.type === zg;
}
function uC(e, a) {
  const r = { ...a };
  for (const l in a) {
    const u = e[l], c = a[l];
    /^on[A-Z]/.test(l) ? u && c ? r[l] = (...d) => {
      c(...d), u(...d);
    } : u && (r[l] = u) : l === "style" ? r[l] = {
      ...u,
      ...c
    } : l === "className" && (r[l] = [u, c].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
function sC(e) {
  let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = a && "isReactWarning" in a && a.isReactWarning;
  return r ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = a && "isReactWarning" in a && a.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Hg = No, br = /* @__PURE__ */ fd(Ng(), 1), St = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
].reduce((e, a) => {
  const r = y.forwardRef((l, u) => {
    const { asChild: c, ...d } = l, h = c ? No : a;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, b.jsx)(h, {
      ...d,
      ref: u
    });
  });
  return r.displayName = `Primitive.${a}`, {
    ...e,
    [a]: r
  };
}, {});
function cC(e, a) {
  e && br.flushSync(() => e.dispatchEvent(a));
}
var fC = "VisuallyHidden", Lg = y.forwardRef((e, a) => /* @__PURE__ */ (0, b.jsx)(St.span, {
  ...e,
  ref: a,
  style: {
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}));
Lg.displayName = fC;
var dC = Lg;
function hC(e, a) {
  const r = y.createContext(a), l = (c) => {
    const { children: d, ...h } = c, m = y.useMemo(() => h, Object.values(h));
    return /* @__PURE__ */ (0, b.jsx)(r.Provider, {
      value: m,
      children: d
    });
  };
  l.displayName = e + "Provider";
  function u(c) {
    const d = y.useContext(r);
    if (d) return d;
    if (a !== void 0) return a;
    throw new Error(`\`${c}\` must be used within \`${e}\``);
  }
  return [l, u];
}
function Lu(e, a = []) {
  let r = [];
  function l(c, d) {
    const h = y.createContext(d), m = r.length;
    r = [...r, d];
    const g = (_) => {
      const { scope: S, children: w, ...A } = _, T = S?.[e]?.[m] || h, C = y.useMemo(() => A, Object.values(A));
      return /* @__PURE__ */ (0, b.jsx)(T.Provider, {
        value: C,
        children: w
      });
    };
    g.displayName = c + "Provider";
    function p(_, S) {
      const w = S?.[e]?.[m] || h, A = y.useContext(w);
      if (A) return A;
      if (d !== void 0) return d;
      throw new Error(`\`${_}\` must be used within \`${c}\``);
    }
    return [g, p];
  }
  const u = () => {
    const c = r.map((d) => y.createContext(d));
    return function(h) {
      const m = h?.[e] || c;
      return y.useMemo(() => ({ [`__scope${e}`]: {
        ...h,
        [e]: m
      } }), [h, m]);
    };
  };
  return u.scopeName = e, [l, mC(u, ...a)];
}
function mC(...e) {
  const a = e[0];
  if (e.length === 1) return a;
  const r = () => {
    const l = e.map((u) => ({
      useScope: u(),
      scopeName: u.scopeName
    }));
    return function(c) {
      const d = l.reduce((h, { useScope: m, scopeName: g }) => {
        const p = m(c)[`__scope${g}`];
        return {
          ...h,
          ...p
        };
      }, {});
      return y.useMemo(() => ({ [`__scope${a.scopeName}`]: d }), [d]);
    };
  };
  return r.scopeName = a.scopeName, r;
}
function ct(e, a, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(u) {
    if (e?.(u), r === !1 || !u.defaultPrevented) return a?.(u);
  };
}
function za(e) {
  const a = y.useRef(e);
  return y.useEffect(() => {
    a.current = e;
  }), y.useMemo(() => (...r) => a.current?.(...r), []);
}
function Md({ prop: e, defaultProp: a, onChange: r = () => {
} }) {
  const [l, u] = vC({
    defaultProp: a,
    onChange: r
  }), c = e !== void 0, d = c ? e : l, h = za(r);
  return [d, y.useCallback((m) => {
    if (c) {
      const g = typeof m == "function" ? m(e) : m;
      g !== e && h(g);
    } else u(m);
  }, [
    c,
    e,
    u,
    h
  ])];
}
function vC({ defaultProp: e, onChange: a }) {
  const r = y.useState(e), [l] = r, u = y.useRef(l), c = za(a);
  return y.useEffect(() => {
    u.current !== l && (c(l), u.current = l);
  }, [
    l,
    u,
    c
  ]), r;
}
var di = globalThis?.document ? y.useLayoutEffect : () => {
};
function pC(e, a) {
  return y.useReducer((r, l) => a[r][l] ?? r, e);
}
var Pa = (e) => {
  const { present: a, children: r } = e, l = gC(a), u = typeof r == "function" ? r({ present: l.isPresent }) : y.Children.only(r), c = Yt(l.ref, yC(u));
  return typeof r == "function" || l.isPresent ? y.cloneElement(u, { ref: c }) : null;
};
Pa.displayName = "Presence";
function gC(e) {
  const [a, r] = y.useState(), l = y.useRef({}), u = y.useRef(e), c = y.useRef("none"), [d, h] = pC(e ? "mounted" : "unmounted", {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  });
  return y.useEffect(() => {
    const m = ou(l.current);
    c.current = d === "mounted" ? m : "none";
  }, [d]), di(() => {
    const m = l.current, g = u.current;
    if (g !== e) {
      const p = c.current, _ = ou(m);
      e ? h("MOUNT") : _ === "none" || m?.display === "none" ? h("UNMOUNT") : h(g && p !== _ ? "ANIMATION_OUT" : "UNMOUNT"), u.current = e;
    }
  }, [e, h]), di(() => {
    if (a) {
      let m;
      const g = a.ownerDocument.defaultView ?? window, p = (S) => {
        const w = ou(l.current).includes(S.animationName);
        if (S.target === a && w && (h("ANIMATION_END"), !u.current)) {
          const A = a.style.animationFillMode;
          a.style.animationFillMode = "forwards", m = g.setTimeout(() => {
            a.style.animationFillMode === "forwards" && (a.style.animationFillMode = A);
          });
        }
      }, _ = (S) => {
        S.target === a && (c.current = ou(l.current));
      };
      return a.addEventListener("animationstart", _), a.addEventListener("animationcancel", p), a.addEventListener("animationend", p), () => {
        g.clearTimeout(m), a.removeEventListener("animationstart", _), a.removeEventListener("animationcancel", p), a.removeEventListener("animationend", p);
      };
    } else h("ANIMATION_END");
  }, [a, h]), {
    isPresent: ["mounted", "unmountSuspended"].includes(d),
    ref: y.useCallback((m) => {
      m && (l.current = getComputedStyle(m)), r(m);
    }, [])
  };
}
function ou(e) {
  return e?.animationName || "none";
}
function yC(e) {
  let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = a && "isReactWarning" in a && a.isReactWarning;
  return r ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = a && "isReactWarning" in a && a.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var bC = y.useId || (() => {
}), _C = 0;
function bo(e) {
  const [a, r] = y.useState(bC());
  return di(() => {
    e || r((l) => l ?? String(_C++));
  }, [e]), e || (a ? `radix-${a}` : "");
}
function SC(e, a = globalThis?.document) {
  const r = za(e);
  y.useEffect(() => {
    const l = (u) => {
      u.key === "Escape" && r(u);
    };
    return a.addEventListener("keydown", l, { capture: !0 }), () => a.removeEventListener("keydown", l, { capture: !0 });
  }, [r, a]);
}
var EC = "DismissableLayer", Qf = "dismissableLayer.update", wC = "dismissableLayer.pointerDownOutside", TC = "dismissableLayer.focusOutside", z1, jg = y.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ju = y.forwardRef((e, a) => {
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: c, onInteractOutside: d, onDismiss: h, ...m } = e, g = y.useContext(jg), [p, _] = y.useState(null), S = p?.ownerDocument ?? globalThis?.document, [, w] = y.useState({}), A = Yt(a, (Q) => _(Q)), T = Array.from(g.layers), [C] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), R = T.indexOf(C), N = p ? T.indexOf(p) : -1, H = g.layersWithOutsidePointerEventsDisabled.size > 0, D = N >= R, U = xC((Q) => {
    const ee = Q.target, I = [...g.branches].some((te) => te.contains(ee));
    !D || I || (u?.(Q), d?.(Q), Q.defaultPrevented || h?.());
  }, S), L = OC((Q) => {
    const ee = Q.target;
    [...g.branches].some((I) => I.contains(ee)) || (c?.(Q), d?.(Q), Q.defaultPrevented || h?.());
  }, S);
  return SC((Q) => {
    N === g.layers.size - 1 && (l?.(Q), !Q.defaultPrevented && h && (Q.preventDefault(), h()));
  }, S), y.useEffect(() => {
    if (p)
      return r && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (z1 = S.body.style.pointerEvents, S.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(p)), g.layers.add(p), H1(), () => {
        r && g.layersWithOutsidePointerEventsDisabled.size === 1 && (S.body.style.pointerEvents = z1);
      };
  }, [
    p,
    S,
    r,
    g
  ]), y.useEffect(() => () => {
    p && (g.layers.delete(p), g.layersWithOutsidePointerEventsDisabled.delete(p), H1());
  }, [p, g]), y.useEffect(() => {
    const Q = () => w({});
    return document.addEventListener(Qf, Q), () => document.removeEventListener(Qf, Q);
  }, []), /* @__PURE__ */ (0, b.jsx)(St.div, {
    ...m,
    ref: A,
    style: {
      pointerEvents: H ? D ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ct(e.onFocusCapture, L.onFocusCapture),
    onBlurCapture: ct(e.onBlurCapture, L.onBlurCapture),
    onPointerDownCapture: ct(e.onPointerDownCapture, U.onPointerDownCapture)
  });
});
ju.displayName = EC;
var CC = "DismissableLayerBranch", AC = y.forwardRef((e, a) => {
  const r = y.useContext(jg), l = y.useRef(null), u = Yt(a, l);
  return y.useEffect(() => {
    const c = l.current;
    if (c)
      return r.branches.add(c), () => {
        r.branches.delete(c);
      };
  }, [r.branches]), /* @__PURE__ */ (0, b.jsx)(St.div, {
    ...e,
    ref: u
  });
});
AC.displayName = CC;
function xC(e, a = globalThis?.document) {
  const r = za(e), l = y.useRef(!1), u = y.useRef(() => {
  });
  return y.useEffect(() => {
    const c = (h) => {
      if (h.target && !l.current) {
        let m = function() {
          Bg(wC, r, g, { discrete: !0 });
        };
        const g = { originalEvent: h };
        h.pointerType === "touch" ? (a.removeEventListener("click", u.current), u.current = m, a.addEventListener("click", u.current, { once: !0 })) : m();
      } else a.removeEventListener("click", u.current);
      l.current = !1;
    }, d = window.setTimeout(() => {
      a.addEventListener("pointerdown", c);
    }, 0);
    return () => {
      window.clearTimeout(d), a.removeEventListener("pointerdown", c), a.removeEventListener("click", u.current);
    };
  }, [a, r]), { onPointerDownCapture: () => l.current = !0 };
}
function OC(e, a = globalThis?.document) {
  const r = za(e), l = y.useRef(!1);
  return y.useEffect(() => {
    const u = (c) => {
      c.target && !l.current && Bg(TC, r, { originalEvent: c }, { discrete: !1 });
    };
    return a.addEventListener("focusin", u), () => a.removeEventListener("focusin", u);
  }, [a, r]), {
    onFocusCapture: () => l.current = !0,
    onBlurCapture: () => l.current = !1
  };
}
function H1() {
  const e = new CustomEvent(Qf);
  document.dispatchEvent(e);
}
function Bg(e, a, r, { discrete: l }) {
  const u = r.originalEvent.target, c = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  a && u.addEventListener(e, a, { once: !0 }), l ? cC(u, c) : u.dispatchEvent(c);
}
var yf = "focusScope.autoFocusOnMount", bf = "focusScope.autoFocusOnUnmount", L1 = {
  bubbles: !1,
  cancelable: !0
}, MC = "FocusScope", Rd = y.forwardRef((e, a) => {
  const { loop: r = !1, trapped: l = !1, onMountAutoFocus: u, onUnmountAutoFocus: c, ...d } = e, [h, m] = y.useState(null), g = za(u), p = za(c), _ = y.useRef(null), S = Yt(a, (T) => m(T)), w = y.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  y.useEffect(() => {
    if (l) {
      let T = function(H) {
        if (w.paused || !h) return;
        const D = H.target;
        h.contains(D) ? _.current = D : Ra(_.current, { select: !0 });
      }, C = function(H) {
        if (w.paused || !h) return;
        const D = H.relatedTarget;
        D !== null && (h.contains(D) || Ra(_.current, { select: !0 }));
      }, R = function(H) {
        if (document.activeElement === document.body)
          for (const D of H) D.removedNodes.length > 0 && Ra(h);
      };
      document.addEventListener("focusin", T), document.addEventListener("focusout", C);
      const N = new MutationObserver(R);
      return h && N.observe(h, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", T), document.removeEventListener("focusout", C), N.disconnect();
      };
    }
  }, [
    l,
    h,
    w.paused
  ]), y.useEffect(() => {
    if (h) {
      B1.add(w);
      const T = document.activeElement;
      if (!h.contains(T)) {
        const C = new CustomEvent(yf, L1);
        h.addEventListener(yf, g), h.dispatchEvent(C), C.defaultPrevented || (RC(LC(Ug(h)), { select: !0 }), document.activeElement === T && Ra(h));
      }
      return () => {
        h.removeEventListener(yf, g), setTimeout(() => {
          const C = new CustomEvent(bf, L1);
          h.addEventListener(bf, p), h.dispatchEvent(C), C.defaultPrevented || Ra(T ?? document.body, { select: !0 }), h.removeEventListener(bf, p), B1.remove(w);
        }, 0);
      };
    }
  }, [
    h,
    g,
    p,
    w
  ]);
  const A = y.useCallback((T) => {
    if (!r && !l || w.paused) return;
    const C = T.key === "Tab" && !T.altKey && !T.ctrlKey && !T.metaKey, R = document.activeElement;
    if (C && R) {
      const N = T.currentTarget, [H, D] = NC(N);
      H && D ? !T.shiftKey && R === D ? (T.preventDefault(), r && Ra(H, { select: !0 })) : T.shiftKey && R === H && (T.preventDefault(), r && Ra(D, { select: !0 })) : R === N && T.preventDefault();
    }
  }, [
    r,
    l,
    w.paused
  ]);
  return /* @__PURE__ */ (0, b.jsx)(St.div, {
    tabIndex: -1,
    ...d,
    ref: S,
    onKeyDown: A
  });
});
Rd.displayName = MC;
function RC(e, { select: a = !1 } = {}) {
  const r = document.activeElement;
  for (const l of e)
    if (Ra(l, { select: a }), document.activeElement !== r) return;
}
function NC(e) {
  const a = Ug(e);
  return [j1(a, e), j1(a.reverse(), e)];
}
function Ug(e) {
  const a = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (l) => {
    const u = l.tagName === "INPUT" && l.type === "hidden";
    return l.disabled || l.hidden || u ? NodeFilter.FILTER_SKIP : l.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; r.nextNode(); ) a.push(r.currentNode);
  return a;
}
function j1(e, a) {
  for (const r of e) if (!DC(r, { upTo: a })) return r;
}
function DC(e, { upTo: a }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (a !== void 0 && e === a) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function zC(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ra(e, { select: a = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && zC(e) && a && e.select();
  }
}
var B1 = HC();
function HC() {
  let e = [];
  return {
    add(a) {
      const r = e[0];
      a !== r && r?.pause(), e = U1(e, a), e.unshift(a);
    },
    remove(a) {
      e = U1(e, a), e[0]?.resume();
    }
  };
}
function U1(e, a) {
  const r = [...e], l = r.indexOf(a);
  return l !== -1 && r.splice(l, 1), r;
}
function LC(e) {
  return e.filter((a) => a.tagName !== "A");
}
var jC = "Portal", Bu = y.forwardRef((e, a) => {
  const { container: r, ...l } = e, [u, c] = y.useState(!1);
  di(() => c(!0), []);
  const d = r || u && globalThis?.document?.body;
  return d ? br.createPortal(/* @__PURE__ */ (0, b.jsx)(St.div, {
    ...l,
    ref: a
  }), d) : null;
});
Bu.displayName = jC;
var _f = 0;
function Pg() {
  y.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? P1()), document.body.insertAdjacentElement("beforeend", e[1] ?? P1()), _f++, () => {
      _f === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), _f--;
    };
  }, []);
}
function P1() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var pu = "right-scroll-bar-position", gu = "width-before-scroll-bar", BC = "with-scroll-bars-hidden", UC = "--removed-body-scroll-bar-size";
function Sf(e, a) {
  return typeof e == "function" ? e(a) : e && (e.current = a), e;
}
function PC(e, a) {
  var r = (0, y.useState)(function() {
    return {
      value: e,
      callback: a,
      facade: {
        get current() {
          return r.value;
        },
        set current(l) {
          var u = r.value;
          u !== l && (r.value = l, r.callback(l, u));
        }
      }
    };
  })[0];
  return r.callback = a, r.facade;
}
var ZC = typeof window < "u" ? y.useLayoutEffect : y.useEffect, Z1 = /* @__PURE__ */ new WeakMap();
function GC(e, a) {
  var r = PC(a || null, function(l) {
    return e.forEach(function(u) {
      return Sf(u, l);
    });
  });
  return ZC(function() {
    var l = Z1.get(r);
    if (l) {
      var u = new Set(l), c = new Set(e), d = r.current;
      u.forEach(function(h) {
        c.has(h) || Sf(h, null);
      }), c.forEach(function(h) {
        u.has(h) || Sf(h, d);
      });
    }
    Z1.set(r, e);
  }, [e]), r;
}
function kC(e) {
  return e;
}
function IC(e, a) {
  a === void 0 && (a = kC);
  var r = [], l = !1;
  return {
    read: function() {
      if (l) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(u) {
      var c = a(u, l);
      return r.push(c), function() {
        r = r.filter(function(d) {
          return d !== c;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (l = !0; r.length; ) {
        var c = r;
        r = [], c.forEach(u);
      }
      r = {
        push: function(d) {
          return u(d);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(u) {
      l = !0;
      var c = [];
      if (r.length) {
        var d = r;
        r = [], d.forEach(u), c = r;
      }
      var h = function() {
        var g = c;
        c = [], g.forEach(u);
      }, m = function() {
        return Promise.resolve().then(h);
      };
      m(), r = {
        push: function(g) {
          c.push(g), m();
        },
        filter: function(g) {
          return c = c.filter(g), r;
        }
      };
    }
  };
}
function $C(e) {
  e === void 0 && (e = {});
  var a = IC(null);
  return a.options = ie({
    async: !0,
    ssr: !1
  }, e), a;
}
var Zg = function(e) {
  var a = e.sideCar, r = ia(e, ["sideCar"]);
  if (!a) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var l = a.read();
  if (!l) throw new Error("Sidecar medium not found");
  return y.createElement(l, ie({}, r));
};
Zg.isSideCarExport = !0;
function qC(e, a) {
  return e.useMedium(a), Zg;
}
var Gg = $C(), Ef = function() {
}, Uu = y.forwardRef(function(e, a) {
  var r = y.useRef(null), l = y.useState({
    onScrollCapture: Ef,
    onWheelCapture: Ef,
    onTouchMoveCapture: Ef
  }), u = l[0], c = l[1], d = e.forwardProps, h = e.children, m = e.className, g = e.removeScrollBar, p = e.enabled, _ = e.shards, S = e.sideCar, w = e.noIsolation, A = e.inert, T = e.allowPinchZoom, C = e.as, R = C === void 0 ? "div" : C, N = e.gapMode, H = ia(e, [
    "forwardProps",
    "children",
    "className",
    "removeScrollBar",
    "enabled",
    "shards",
    "sideCar",
    "noIsolation",
    "inert",
    "allowPinchZoom",
    "as",
    "gapMode"
  ]), D = S, U = GC([r, a]), L = ie(ie({}, H), u);
  return y.createElement(y.Fragment, null, p && y.createElement(D, {
    sideCar: Gg,
    removeScrollBar: g,
    shards: _,
    noIsolation: w,
    inert: A,
    setCallbacks: c,
    allowPinchZoom: !!T,
    lockRef: r,
    gapMode: N
  }), d ? y.cloneElement(y.Children.only(h), ie(ie({}, L), { ref: U })) : y.createElement(R, ie({}, L, {
    className: m,
    ref: U
  }), h));
});
Uu.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Uu.classNames = {
  fullWidth: gu,
  zeroRight: pu
};
var G1, VC = function() {
  if (G1) return G1;
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function FC() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var a = VC();
  return a && e.setAttribute("nonce", a), e;
}
function XC(e, a) {
  e.styleSheet ? e.styleSheet.cssText = a : e.appendChild(document.createTextNode(a));
}
function YC(e) {
  (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var WC = function() {
  var e = 0, a = null;
  return {
    add: function(r) {
      e == 0 && (a = FC()) && (XC(a, r), YC(a)), e++;
    },
    remove: function() {
      e--, !e && a && (a.parentNode && a.parentNode.removeChild(a), a = null);
    }
  };
}, QC = function() {
  var e = WC();
  return function(a, r) {
    y.useEffect(function() {
      return e.add(a), function() {
        e.remove();
      };
    }, [a && r]);
  };
}, kg = function() {
  var e = QC(), a = function(r) {
    var l = r.styles, u = r.dynamic;
    return e(l, u), null;
  };
  return a;
}, KC = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, wf = function(e) {
  return parseInt(e || "", 10) || 0;
}, JC = function(e) {
  var a = window.getComputedStyle(document.body), r = a[e === "padding" ? "paddingLeft" : "marginLeft"], l = a[e === "padding" ? "paddingTop" : "marginTop"], u = a[e === "padding" ? "paddingRight" : "marginRight"];
  return [
    wf(r),
    wf(l),
    wf(u)
  ];
}, e6 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u") return KC;
  var a = JC(e), r = document.documentElement.clientWidth, l = window.innerWidth;
  return {
    left: a[0],
    top: a[1],
    right: a[2],
    gap: Math.max(0, l - r + a[2] - a[0])
  };
}, t6 = kg(), _o = "data-scroll-locked", n6 = function(e, a, r, l) {
  var u = e.left, c = e.top, d = e.right, h = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(BC, ` {
   overflow: hidden `).concat(l, `;
   padding-right: `).concat(h, "px ").concat(l, `;
  }
  body[`).concat(_o, `] {
    overflow: hidden `).concat(l, `;
    overscroll-behavior: contain;
    `).concat([
    a && "position: relative ".concat(l, ";"),
    r === "margin" && `
    padding-left: `.concat(u, `px;
    padding-top: `).concat(c, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(l, `;
    `),
    r === "padding" && "padding-right: ".concat(h, "px ").concat(l, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(pu, ` {
    right: `).concat(h, "px ").concat(l, `;
  }
  
  .`).concat(gu, ` {
    margin-right: `).concat(h, "px ").concat(l, `;
  }
  
  .`).concat(pu, " .").concat(pu, ` {
    right: 0 `).concat(l, `;
  }
  
  .`).concat(gu, " .").concat(gu, ` {
    margin-right: 0 `).concat(l, `;
  }
  
  body[`).concat(_o, `] {
    `).concat(UC, ": ").concat(h, `px;
  }
`);
}, k1 = function() {
  var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
  return isFinite(e) ? e : 0;
}, a6 = function() {
  y.useEffect(function() {
    return document.body.setAttribute(_o, (k1() + 1).toString()), function() {
      var e = k1() - 1;
      e <= 0 ? document.body.removeAttribute(_o) : document.body.setAttribute(_o, e.toString());
    };
  }, []);
}, i6 = function(e) {
  var a = e.noRelative, r = e.noImportant, l = e.gapMode, u = l === void 0 ? "margin" : l;
  a6();
  var c = y.useMemo(function() {
    return e6(u);
  }, [u]);
  return y.createElement(t6, { styles: n6(c, !a, u, r ? "" : "!important") });
}, Kf = !1;
if (typeof window < "u") try {
  var lu = Object.defineProperty({}, "passive", { get: function() {
    return Kf = !0, !0;
  } });
  window.addEventListener("test", lu, lu), window.removeEventListener("test", lu, lu);
} catch {
  Kf = !1;
}
var tr = Kf ? { passive: !1 } : !1, r6 = function(e) {
  return e.tagName === "TEXTAREA";
}, Ig = function(e, a) {
  if (!(e instanceof Element)) return !1;
  var r = window.getComputedStyle(e);
  return r[a] !== "hidden" && !(r.overflowY === r.overflowX && !r6(e) && r[a] === "visible");
}, o6 = function(e) {
  return Ig(e, "overflowY");
}, l6 = function(e) {
  return Ig(e, "overflowX");
}, I1 = function(e, a) {
  var r = a.ownerDocument, l = a;
  do {
    if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && (l = l.host), $g(e, l)) {
      var u = qg(e, l);
      if (u[1] > u[2]) return !0;
    }
    l = l.parentNode;
  } while (l && l !== r.body);
  return !1;
}, u6 = function(e) {
  return [
    e.scrollTop,
    e.scrollHeight,
    e.clientHeight
  ];
}, s6 = function(e) {
  return [
    e.scrollLeft,
    e.scrollWidth,
    e.clientWidth
  ];
}, $g = function(e, a) {
  return e === "v" ? o6(a) : l6(a);
}, qg = function(e, a) {
  return e === "v" ? u6(a) : s6(a);
}, c6 = function(e, a) {
  return e === "h" && a === "rtl" ? -1 : 1;
}, f6 = function(e, a, r, l, u) {
  var c = c6(e, window.getComputedStyle(a).direction), d = c * l, h = r.target, m = a.contains(h), g = !1, p = d > 0, _ = 0, S = 0;
  do {
    var w = qg(e, h), A = w[0], T = w[1] - w[2] - c * A;
    (A || T) && $g(e, h) && (_ += T, S += A), h instanceof ShadowRoot ? h = h.host : h = h.parentNode;
  } while (!m && h !== document.body || m && (a.contains(h) || a === h));
  return (p && (u && Math.abs(_) < 1 || !u && d > _) || !p && (u && Math.abs(S) < 1 || !u && -d > S)) && (g = !0), g;
}, uu = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $1 = function(e) {
  return [e.deltaX, e.deltaY];
}, q1 = function(e) {
  return e && "current" in e ? e.current : e;
}, d6 = function(e, a) {
  return e[0] === a[0] && e[1] === a[1];
}, h6 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, m6 = 0, nr = [];
function v6(e) {
  var a = y.useRef([]), r = y.useRef([0, 0]), l = y.useRef(), u = y.useState(m6++)[0], c = y.useState(kg)[0], d = y.useRef(e);
  y.useEffect(function() {
    d.current = e;
  }, [e]), y.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(u));
      var T = yn([e.lockRef.current], (e.shards || []).map(q1), !0).filter(Boolean);
      return T.forEach(function(C) {
        return C.classList.add("allow-interactivity-".concat(u));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(u)), T.forEach(function(C) {
          return C.classList.remove("allow-interactivity-".concat(u));
        });
      };
    }
  }, [
    e.inert,
    e.lockRef.current,
    e.shards
  ]);
  var h = y.useCallback(function(T, C) {
    if ("touches" in T && T.touches.length === 2 || T.type === "wheel" && T.ctrlKey) return !d.current.allowPinchZoom;
    var R = uu(T), N = r.current, H = "deltaX" in T ? T.deltaX : N[0] - R[0], D = "deltaY" in T ? T.deltaY : N[1] - R[1], U, L = T.target, Q = Math.abs(H) > Math.abs(D) ? "h" : "v";
    if ("touches" in T && Q === "h" && L.type === "range") return !1;
    var ee = I1(Q, L);
    if (!ee) return !0;
    if (ee ? U = Q : (U = Q === "v" ? "h" : "v", ee = I1(Q, L)), !ee) return !1;
    if (!l.current && "changedTouches" in T && (H || D) && (l.current = U), !U) return !0;
    var I = l.current || U;
    return f6(I, C, T, I === "h" ? H : D, !0);
  }, []), m = y.useCallback(function(T) {
    var C = T;
    if (!(!nr.length || nr[nr.length - 1] !== c)) {
      var R = "deltaY" in C ? $1(C) : uu(C), N = a.current.filter(function(D) {
        return D.name === C.type && (D.target === C.target || C.target === D.shadowParent) && d6(D.delta, R);
      })[0];
      if (N && N.should) {
        C.cancelable && C.preventDefault();
        return;
      }
      if (!N) {
        var H = (d.current.shards || []).map(q1).filter(Boolean).filter(function(D) {
          return D.contains(C.target);
        });
        (H.length > 0 ? h(C, H[0]) : !d.current.noIsolation) && C.cancelable && C.preventDefault();
      }
    }
  }, []), g = y.useCallback(function(T, C, R, N) {
    var H = {
      name: T,
      delta: C,
      target: R,
      should: N,
      shadowParent: p6(R)
    };
    a.current.push(H), setTimeout(function() {
      a.current = a.current.filter(function(D) {
        return D !== H;
      });
    }, 1);
  }, []), p = y.useCallback(function(T) {
    r.current = uu(T), l.current = void 0;
  }, []), _ = y.useCallback(function(T) {
    g(T.type, $1(T), T.target, h(T, e.lockRef.current));
  }, []), S = y.useCallback(function(T) {
    g(T.type, uu(T), T.target, h(T, e.lockRef.current));
  }, []);
  y.useEffect(function() {
    return nr.push(c), e.setCallbacks({
      onScrollCapture: _,
      onWheelCapture: _,
      onTouchMoveCapture: S
    }), document.addEventListener("wheel", m, tr), document.addEventListener("touchmove", m, tr), document.addEventListener("touchstart", p, tr), function() {
      nr = nr.filter(function(T) {
        return T !== c;
      }), document.removeEventListener("wheel", m, tr), document.removeEventListener("touchmove", m, tr), document.removeEventListener("touchstart", p, tr);
    };
  }, []);
  var w = e.removeScrollBar, A = e.inert;
  return y.createElement(y.Fragment, null, A ? y.createElement(c, { styles: h6(u) }) : null, w ? y.createElement(i6, { gapMode: e.gapMode }) : null);
}
function p6(e) {
  for (var a = null; e !== null; )
    e instanceof ShadowRoot && (a = e.host, e = e.host), e = e.parentNode;
  return a;
}
var g6 = qC(Gg, v6), Nd = y.forwardRef(function(e, a) {
  return y.createElement(Uu, ie({}, e, {
    ref: a,
    sideCar: g6
  }));
});
Nd.classNames = Uu.classNames;
var y6 = function(e) {
  return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, ar = /* @__PURE__ */ new WeakMap(), su = /* @__PURE__ */ new WeakMap(), cu = {}, Tf = 0, Vg = function(e) {
  return e && (e.host || Vg(e.parentNode));
}, b6 = function(e, a) {
  return a.map(function(r) {
    if (e.contains(r)) return r;
    var l = Vg(r);
    return l && e.contains(l) ? l : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, _6 = function(e, a, r, l) {
  var u = b6(a, Array.isArray(e) ? e : [e]);
  cu[r] || (cu[r] = /* @__PURE__ */ new WeakMap());
  var c = cu[r], d = [], h = /* @__PURE__ */ new Set(), m = new Set(u), g = function(_) {
    !_ || h.has(_) || (h.add(_), g(_.parentNode));
  };
  u.forEach(g);
  var p = function(_) {
    !_ || m.has(_) || Array.prototype.forEach.call(_.children, function(S) {
      if (h.has(S)) p(S);
      else try {
        var w = S.getAttribute(l), A = w !== null && w !== "false", T = (ar.get(S) || 0) + 1, C = (c.get(S) || 0) + 1;
        ar.set(S, T), c.set(S, C), d.push(S), T === 1 && A && su.set(S, !0), C === 1 && S.setAttribute(r, "true"), A || S.setAttribute(l, "true");
      } catch (R) {
        console.error("aria-hidden: cannot operate on ", S, R);
      }
    });
  };
  return p(a), h.clear(), Tf++, function() {
    d.forEach(function(_) {
      var S = ar.get(_) - 1, w = c.get(_) - 1;
      ar.set(_, S), c.set(_, w), S || (su.has(_) || _.removeAttribute(l), su.delete(_)), w || _.removeAttribute(r);
    }), Tf--, Tf || (ar = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), su = /* @__PURE__ */ new WeakMap(), cu = {});
  };
}, Fg = function(e, a, r) {
  r === void 0 && (r = "data-aria-hidden");
  var l = Array.from(Array.isArray(e) ? e : [e]), u = a || y6(e);
  return u ? (l.push.apply(l, Array.from(u.querySelectorAll("[aria-live]"))), _6(l, u, r, "aria-hidden")) : function() {
    return null;
  };
}, Dd = "Dialog", [Xg, Wx] = Lu(Dd), [S6, En] = Xg(Dd), Yg = (e) => {
  const { __scopeDialog: a, children: r, open: l, defaultOpen: u, onOpenChange: c, modal: d = !0 } = e, h = y.useRef(null), m = y.useRef(null), [g = !1, p] = Md({
    prop: l,
    defaultProp: u,
    onChange: c
  });
  return /* @__PURE__ */ (0, b.jsx)(S6, {
    scope: a,
    triggerRef: h,
    contentRef: m,
    contentId: bo(),
    titleId: bo(),
    descriptionId: bo(),
    open: g,
    onOpenChange: p,
    onOpenToggle: y.useCallback(() => p((_) => !_), [p]),
    modal: d,
    children: r
  });
};
Yg.displayName = Dd;
var Wg = "DialogTrigger", E6 = y.forwardRef((e, a) => {
  const { __scopeDialog: r, ...l } = e, u = En(Wg, r), c = Yt(a, u.triggerRef);
  return /* @__PURE__ */ (0, b.jsx)(St.button, {
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": u.open,
    "aria-controls": u.contentId,
    "data-state": Ld(u.open),
    ...l,
    ref: c,
    onClick: ct(e.onClick, u.onOpenToggle)
  });
});
E6.displayName = Wg;
var zd = "DialogPortal", [w6, Qg] = Xg(zd, { forceMount: void 0 }), T6 = (e) => {
  const { __scopeDialog: a, forceMount: r, children: l, container: u } = e, c = En(zd, a);
  return /* @__PURE__ */ (0, b.jsx)(w6, {
    scope: a,
    forceMount: r,
    children: y.Children.map(l, (d) => /* @__PURE__ */ (0, b.jsx)(Pa, {
      present: r || c.open,
      children: /* @__PURE__ */ (0, b.jsx)(Bu, {
        asChild: !0,
        container: u,
        children: d
      })
    }))
  });
};
T6.displayName = zd;
var wu = "DialogOverlay", C6 = y.forwardRef((e, a) => {
  const r = Qg(wu, e.__scopeDialog), { forceMount: l = r.forceMount, ...u } = e, c = En(wu, e.__scopeDialog);
  return c.modal ? /* @__PURE__ */ (0, b.jsx)(Pa, {
    present: l || c.open,
    children: /* @__PURE__ */ (0, b.jsx)(A6, {
      ...u,
      ref: a
    })
  }) : null;
});
C6.displayName = wu;
var A6 = y.forwardRef((e, a) => {
  const { __scopeDialog: r, ...l } = e, u = En(wu, r);
  return /* @__PURE__ */ (0, b.jsx)(Nd, {
    as: No,
    allowPinchZoom: !0,
    shards: [u.contentRef],
    children: /* @__PURE__ */ (0, b.jsx)(St.div, {
      "data-state": Ld(u.open),
      ...l,
      ref: a,
      style: {
        pointerEvents: "auto",
        ...l.style
      }
    })
  });
}), hi = "DialogContent", Kg = y.forwardRef((e, a) => {
  const r = Qg(hi, e.__scopeDialog), { forceMount: l = r.forceMount, ...u } = e, c = En(hi, e.__scopeDialog);
  return /* @__PURE__ */ (0, b.jsx)(Pa, {
    present: l || c.open,
    children: c.modal ? /* @__PURE__ */ (0, b.jsx)(x6, {
      ...u,
      ref: a
    }) : /* @__PURE__ */ (0, b.jsx)(O6, {
      ...u,
      ref: a
    })
  });
});
Kg.displayName = hi;
var x6 = y.forwardRef((e, a) => {
  const r = En(hi, e.__scopeDialog), l = y.useRef(null), u = Yt(a, r.contentRef, l);
  return y.useEffect(() => {
    const c = l.current;
    if (c) return Fg(c);
  }, []), /* @__PURE__ */ (0, b.jsx)(Jg, {
    ...e,
    ref: u,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ct(e.onCloseAutoFocus, (c) => {
      c.preventDefault(), r.triggerRef.current?.focus();
    }),
    onPointerDownOutside: ct(e.onPointerDownOutside, (c) => {
      const d = c.detail.originalEvent, h = d.button === 0 && d.ctrlKey === !0;
      (d.button === 2 || h) && c.preventDefault();
    }),
    onFocusOutside: ct(e.onFocusOutside, (c) => c.preventDefault())
  });
}), O6 = y.forwardRef((e, a) => {
  const r = En(hi, e.__scopeDialog), l = y.useRef(!1), u = y.useRef(!1);
  return /* @__PURE__ */ (0, b.jsx)(Jg, {
    ...e,
    ref: a,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (c) => {
      e.onCloseAutoFocus?.(c), c.defaultPrevented || (l.current || r.triggerRef.current?.focus(), c.preventDefault()), l.current = !1, u.current = !1;
    },
    onInteractOutside: (c) => {
      e.onInteractOutside?.(c), c.defaultPrevented || (l.current = !0, c.detail.originalEvent.type === "pointerdown" && (u.current = !0));
      const d = c.target;
      r.triggerRef.current?.contains(d) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && u.current && c.preventDefault();
    }
  });
}), Jg = y.forwardRef((e, a) => {
  const { __scopeDialog: r, trapFocus: l, onOpenAutoFocus: u, onCloseAutoFocus: c, ...d } = e, h = En(hi, r), m = y.useRef(null), g = Yt(a, m);
  return Pg(), /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [/* @__PURE__ */ (0, b.jsx)(Rd, {
    asChild: !0,
    loop: !0,
    trapped: l,
    onMountAutoFocus: u,
    onUnmountAutoFocus: c,
    children: /* @__PURE__ */ (0, b.jsx)(ju, {
      role: "dialog",
      id: h.contentId,
      "aria-describedby": h.descriptionId,
      "aria-labelledby": h.titleId,
      "data-state": Ld(h.open),
      ...d,
      ref: g,
      onDismiss: () => h.onOpenChange(!1)
    })
  }), /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [/* @__PURE__ */ (0, b.jsx)(N6, { titleId: h.titleId }), /* @__PURE__ */ (0, b.jsx)(z6, {
    contentRef: m,
    descriptionId: h.descriptionId
  })] })] });
}), Hd = "DialogTitle", ey = y.forwardRef((e, a) => {
  const { __scopeDialog: r, ...l } = e, u = En(Hd, r);
  return /* @__PURE__ */ (0, b.jsx)(St.h2, {
    id: u.titleId,
    ...l,
    ref: a
  });
});
ey.displayName = Hd;
var ty = "DialogDescription", M6 = y.forwardRef((e, a) => {
  const { __scopeDialog: r, ...l } = e, u = En(ty, r);
  return /* @__PURE__ */ (0, b.jsx)(St.p, {
    id: u.descriptionId,
    ...l,
    ref: a
  });
});
M6.displayName = ty;
var ny = "DialogClose", R6 = y.forwardRef((e, a) => {
  const { __scopeDialog: r, ...l } = e, u = En(ny, r);
  return /* @__PURE__ */ (0, b.jsx)(St.button, {
    type: "button",
    ...l,
    ref: a,
    onClick: ct(e.onClick, () => u.onOpenChange(!1))
  });
});
R6.displayName = ny;
function Ld(e) {
  return e ? "open" : "closed";
}
var ay = "DialogTitleWarning", [Qx, iy] = hC(ay, {
  contentName: hi,
  titleName: Hd,
  docsSlug: "dialog"
}), N6 = ({ titleId: e }) => {
  const a = iy(ay), r = `\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;
  return y.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, D6 = "DialogDescriptionWarning", z6 = ({ contentRef: e, descriptionId: a }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${iy(D6).contentName}}.`;
  return y.useEffect(() => {
    const l = e.current?.getAttribute("aria-describedby");
    a && l && (document.getElementById(a) || console.warn(r));
  }, [
    r,
    e,
    a
  ]), null;
}, H6 = Yg, L6 = Kg, j6 = ey;
function B6(e) {
  const [a, r] = y.useState(void 0);
  return di(() => {
    if (e) {
      r({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const l = new ResizeObserver((u) => {
        if (!Array.isArray(u) || !u.length) return;
        const c = u[0];
        let d, h;
        if ("borderBoxSize" in c) {
          const m = c.borderBoxSize, g = Array.isArray(m) ? m[0] : m;
          d = g.inlineSize, h = g.blockSize;
        } else
          d = e.offsetWidth, h = e.offsetHeight;
        r({
          width: d,
          height: h
        });
      });
      return l.observe(e, { box: "border-box" }), () => l.unobserve(e);
    } else r(void 0);
  }, [e]), a;
}
var U6 = [
  "top",
  "right",
  "bottom",
  "left"
], Ha = Math.min, qt = Math.max, Tu = Math.round, fu = Math.floor, Ln = (e) => ({
  x: e,
  y: e
}), P6 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Z6 = {
  start: "end",
  end: "start"
};
function Jf(e, a, r) {
  return qt(e, Ha(a, r));
}
function ra(e, a) {
  return typeof e == "function" ? e(a) : e;
}
function oa(e) {
  return e.split("-")[0];
}
function _r(e) {
  return e.split("-")[1];
}
function jd(e) {
  return e === "x" ? "y" : "x";
}
function Bd(e) {
  return e === "y" ? "height" : "width";
}
var G6 = /* @__PURE__ */ new Set(["top", "bottom"]);
function zn(e) {
  return G6.has(oa(e)) ? "y" : "x";
}
function Ud(e) {
  return jd(zn(e));
}
function k6(e, a, r) {
  r === void 0 && (r = !1);
  const l = _r(e), u = Ud(e), c = Bd(u);
  let d = u === "x" ? l === (r ? "end" : "start") ? "right" : "left" : l === "start" ? "bottom" : "top";
  return a.reference[c] > a.floating[c] && (d = Cu(d)), [d, Cu(d)];
}
function I6(e) {
  const a = Cu(e);
  return [
    ed(e),
    a,
    ed(a)
  ];
}
function ed(e) {
  return e.replace(/start|end/g, (a) => Z6[a]);
}
var V1 = ["left", "right"], F1 = ["right", "left"], $6 = ["top", "bottom"], q6 = ["bottom", "top"];
function V6(e, a, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? a ? F1 : V1 : a ? V1 : F1;
    case "left":
    case "right":
      return a ? $6 : q6;
    default:
      return [];
  }
}
function F6(e, a, r, l) {
  const u = _r(e);
  let c = V6(oa(e), r === "start", l);
  return u && (c = c.map((d) => d + "-" + u), a && (c = c.concat(c.map(ed)))), c;
}
function Cu(e) {
  return e.replace(/left|right|bottom|top/g, (a) => P6[a]);
}
function X6(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ry(e) {
  return typeof e != "number" ? X6(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Au(e) {
  const { x: a, y: r, width: l, height: u } = e;
  return {
    width: l,
    height: u,
    top: r,
    left: a,
    right: a + l,
    bottom: r + u,
    x: a,
    y: r
  };
}
function X1(e, a, r) {
  let { reference: l, floating: u } = e;
  const c = zn(a), d = Ud(a), h = Bd(d), m = oa(a), g = c === "y", p = l.x + l.width / 2 - u.width / 2, _ = l.y + l.height / 2 - u.height / 2, S = l[h] / 2 - u[h] / 2;
  let w;
  switch (m) {
    case "top":
      w = {
        x: p,
        y: l.y - u.height
      };
      break;
    case "bottom":
      w = {
        x: p,
        y: l.y + l.height
      };
      break;
    case "right":
      w = {
        x: l.x + l.width,
        y: _
      };
      break;
    case "left":
      w = {
        x: l.x - u.width,
        y: _
      };
      break;
    default:
      w = {
        x: l.x,
        y: l.y
      };
  }
  switch (_r(a)) {
    case "start":
      w[d] -= S * (r && g ? -1 : 1);
      break;
    case "end":
      w[d] += S * (r && g ? -1 : 1);
      break;
  }
  return w;
}
var Y6 = async (e, a, r) => {
  const { placement: l = "bottom", strategy: u = "absolute", middleware: c = [], platform: d } = r, h = c.filter(Boolean), m = await (d.isRTL == null ? void 0 : d.isRTL(a));
  let g = await d.getElementRects({
    reference: e,
    floating: a,
    strategy: u
  }), { x: p, y: _ } = X1(g, l, m), S = l, w = {}, A = 0;
  for (let T = 0; T < h.length; T++) {
    const { name: C, fn: R } = h[T], { x: N, y: H, data: D, reset: U } = await R({
      x: p,
      y: _,
      initialPlacement: l,
      placement: S,
      strategy: u,
      middlewareData: w,
      rects: g,
      platform: d,
      elements: {
        reference: e,
        floating: a
      }
    });
    p = N ?? p, _ = H ?? _, w = {
      ...w,
      [C]: {
        ...w[C],
        ...D
      }
    }, U && A <= 50 && (A++, typeof U == "object" && (U.placement && (S = U.placement), U.rects && (g = U.rects === !0 ? await d.getElementRects({
      reference: e,
      floating: a,
      strategy: u
    }) : U.rects), { x: p, y: _ } = X1(g, S, m)), T = -1);
  }
  return {
    x: p,
    y: _,
    placement: S,
    strategy: u,
    middlewareData: w
  };
};
async function To(e, a) {
  var r;
  a === void 0 && (a = {});
  const { x: l, y: u, platform: c, rects: d, elements: h, strategy: m } = e, { boundary: g = "clippingAncestors", rootBoundary: p = "viewport", elementContext: _ = "floating", altBoundary: S = !1, padding: w = 0 } = ra(a, e), A = ry(w), T = h[S ? _ === "floating" ? "reference" : "floating" : _], C = Au(await c.getClippingRect({
    element: (r = await (c.isElement == null ? void 0 : c.isElement(T))) == null || r ? T : T.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(h.floating)),
    boundary: g,
    rootBoundary: p,
    strategy: m
  })), R = _ === "floating" ? {
    x: l,
    y: u,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, N = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(h.floating)), H = await (c.isElement == null ? void 0 : c.isElement(N)) ? await (c.getScale == null ? void 0 : c.getScale(N)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = Au(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: h,
    rect: R,
    offsetParent: N,
    strategy: m
  }) : R);
  return {
    top: (C.top - D.top + A.top) / H.y,
    bottom: (D.bottom - C.bottom + A.bottom) / H.y,
    left: (C.left - D.left + A.left) / H.x,
    right: (D.right - C.right + A.right) / H.x
  };
}
var W6 = (e) => ({
  name: "arrow",
  options: e,
  async fn(a) {
    const { x: r, y: l, placement: u, rects: c, platform: d, elements: h, middlewareData: m } = a, { element: g, padding: p = 0 } = ra(e, a) || {};
    if (g == null) return {};
    const _ = ry(p), S = {
      x: r,
      y: l
    }, w = Ud(u), A = Bd(w), T = await d.getDimensions(g), C = w === "y", R = C ? "top" : "left", N = C ? "bottom" : "right", H = C ? "clientHeight" : "clientWidth", D = c.reference[A] + c.reference[w] - S[w] - c.floating[A], U = S[w] - c.reference[w], L = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(g));
    let Q = L ? L[H] : 0;
    (!Q || !await (d.isElement == null ? void 0 : d.isElement(L))) && (Q = h.floating[H] || c.floating[A]);
    const ee = D / 2 - U / 2, I = Q / 2 - T[A] / 2 - 1, te = Ha(_[R], I), k = Ha(_[N], I), B = te, J = Q - T[A] - k, ne = Q / 2 - T[A] / 2 + ee, me = Jf(B, ne, J), z = !m.arrow && _r(u) != null && ne !== me && c.reference[A] / 2 - (ne < B ? te : k) - T[A] / 2 < 0, q = z ? ne < B ? ne - B : ne - J : 0;
    return {
      [w]: S[w] + q,
      data: {
        [w]: me,
        centerOffset: ne - me - q,
        ...z && { alignmentOffset: q }
      },
      reset: z
    };
  }
}), Q6 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(a) {
      var r, l;
      const { placement: u, middlewareData: c, rects: d, initialPlacement: h, platform: m, elements: g } = a, { mainAxis: p = !0, crossAxis: _ = !0, fallbackPlacements: S, fallbackStrategy: w = "bestFit", fallbackAxisSideDirection: A = "none", flipAlignment: T = !0, ...C } = ra(e, a);
      if ((r = c.arrow) != null && r.alignmentOffset) return {};
      const R = oa(u), N = zn(h), H = oa(h) === h, D = await (m.isRTL == null ? void 0 : m.isRTL(g.floating)), U = S || (H || !T ? [Cu(h)] : I6(h)), L = A !== "none";
      !S && L && U.push(...F6(h, T, A, D));
      const Q = [h, ...U], ee = await To(a, C), I = [];
      let te = ((l = c.flip) == null ? void 0 : l.overflows) || [];
      if (p && I.push(ee[R]), _) {
        const ne = k6(u, d, D);
        I.push(ee[ne[0]], ee[ne[1]]);
      }
      if (te = [...te, {
        placement: u,
        overflows: I
      }], !I.every((ne) => ne <= 0)) {
        var k, B;
        const ne = (((k = c.flip) == null ? void 0 : k.index) || 0) + 1, me = Q[ne];
        if (me && (!(_ === "alignment" && N !== zn(me)) || te.every((q) => zn(q.placement) === N ? q.overflows[0] > 0 : !0)))
          return {
            data: {
              index: ne,
              overflows: te
            },
            reset: { placement: me }
          };
        let z = (B = te.filter((q) => q.overflows[0] <= 0).sort((q, V) => q.overflows[1] - V.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!z) switch (w) {
          case "bestFit": {
            var J;
            const q = (J = te.filter((V) => {
              if (L) {
                const se = zn(V.placement);
                return se === N || se === "y";
              }
              return !0;
            }).map((V) => [V.placement, V.overflows.filter((se) => se > 0).reduce((se, ge) => se + ge, 0)]).sort((V, se) => V[1] - se[1])[0]) == null ? void 0 : J[0];
            q && (z = q);
            break;
          }
          case "initialPlacement":
            z = h;
            break;
        }
        if (u !== z) return { reset: { placement: z } };
      }
      return {};
    }
  };
};
function Y1(e, a) {
  return {
    top: e.top - a.height,
    right: e.right - a.width,
    bottom: e.bottom - a.height,
    left: e.left - a.width
  };
}
function W1(e) {
  return U6.some((a) => e[a] >= 0);
}
var K6 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(a) {
      const { rects: r } = a, { strategy: l = "referenceHidden", ...u } = ra(e, a);
      switch (l) {
        case "referenceHidden": {
          const c = Y1(await To(a, {
            ...u,
            elementContext: "reference"
          }), r.reference);
          return { data: {
            referenceHiddenOffsets: c,
            referenceHidden: W1(c)
          } };
        }
        case "escaped": {
          const c = Y1(await To(a, {
            ...u,
            altBoundary: !0
          }), r.floating);
          return { data: {
            escapedOffsets: c,
            escaped: W1(c)
          } };
        }
        default:
          return {};
      }
    }
  };
}, oy = /* @__PURE__ */ new Set(["left", "top"]);
async function J6(e, a) {
  const { placement: r, platform: l, elements: u } = e, c = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), d = oa(r), h = _r(r), m = zn(r) === "y", g = oy.has(d) ? -1 : 1, p = c && m ? -1 : 1, _ = ra(a, e);
  let { mainAxis: S, crossAxis: w, alignmentAxis: A } = typeof _ == "number" ? {
    mainAxis: _,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: _.mainAxis || 0,
    crossAxis: _.crossAxis || 0,
    alignmentAxis: _.alignmentAxis
  };
  return h && typeof A == "number" && (w = h === "end" ? A * -1 : A), m ? {
    x: w * p,
    y: S * g
  } : {
    x: S * g,
    y: w * p
  };
}
var e9 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(a) {
      var r, l;
      const { x: u, y: c, placement: d, middlewareData: h } = a, m = await J6(a, e);
      return d === ((r = h.offset) == null ? void 0 : r.placement) && (l = h.arrow) != null && l.alignmentOffset ? {} : {
        x: u + m.x,
        y: c + m.y,
        data: {
          ...m,
          placement: d
        }
      };
    }
  };
}, t9 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(a) {
      const { x: r, y: l, placement: u } = a, { mainAxis: c = !0, crossAxis: d = !1, limiter: h = { fn: (C) => {
        let { x: R, y: N } = C;
        return {
          x: R,
          y: N
        };
      } }, ...m } = ra(e, a), g = {
        x: r,
        y: l
      }, p = await To(a, m), _ = zn(oa(u)), S = jd(_);
      let w = g[S], A = g[_];
      if (c) {
        const C = S === "y" ? "top" : "left", R = S === "y" ? "bottom" : "right", N = w + p[C], H = w - p[R];
        w = Jf(N, w, H);
      }
      if (d) {
        const C = _ === "y" ? "top" : "left", R = _ === "y" ? "bottom" : "right", N = A + p[C], H = A - p[R];
        A = Jf(N, A, H);
      }
      const T = h.fn({
        ...a,
        [S]: w,
        [_]: A
      });
      return {
        ...T,
        data: {
          x: T.x - r,
          y: T.y - l,
          enabled: {
            [S]: c,
            [_]: d
          }
        }
      };
    }
  };
}, n9 = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(a) {
      const { x: r, y: l, placement: u, rects: c, middlewareData: d } = a, { offset: h = 0, mainAxis: m = !0, crossAxis: g = !0 } = ra(e, a), p = {
        x: r,
        y: l
      }, _ = zn(u), S = jd(_);
      let w = p[S], A = p[_];
      const T = ra(h, a), C = typeof T == "number" ? {
        mainAxis: T,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...T
      };
      if (m) {
        const H = S === "y" ? "height" : "width", D = c.reference[S] - c.floating[H] + C.mainAxis, U = c.reference[S] + c.reference[H] - C.mainAxis;
        w < D ? w = D : w > U && (w = U);
      }
      if (g) {
        var R, N;
        const H = S === "y" ? "width" : "height", D = oy.has(oa(u)), U = c.reference[_] - c.floating[H] + (D && ((R = d.offset) == null ? void 0 : R[_]) || 0) + (D ? 0 : C.crossAxis), L = c.reference[_] + c.reference[H] + (D ? 0 : ((N = d.offset) == null ? void 0 : N[_]) || 0) - (D ? C.crossAxis : 0);
        A < U ? A = U : A > L && (A = L);
      }
      return {
        [S]: w,
        [_]: A
      };
    }
  };
}, a9 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(a) {
      var r, l;
      const { placement: u, rects: c, platform: d, elements: h } = a, { apply: m = () => {
      }, ...g } = ra(e, a), p = await To(a, g), _ = oa(u), S = _r(u), w = zn(u) === "y", { width: A, height: T } = c.floating;
      let C, R;
      _ === "top" || _ === "bottom" ? (C = _, R = S === (await (d.isRTL == null ? void 0 : d.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (R = _, C = S === "end" ? "top" : "bottom");
      const N = T - p.top - p.bottom, H = A - p.left - p.right, D = Ha(T - p[C], N), U = Ha(A - p[R], H), L = !a.middlewareData.shift;
      let Q = D, ee = U;
      if ((r = a.middlewareData.shift) != null && r.enabled.x && (ee = H), (l = a.middlewareData.shift) != null && l.enabled.y && (Q = N), L && !S) {
        const te = qt(p.left, 0), k = qt(p.right, 0), B = qt(p.top, 0), J = qt(p.bottom, 0);
        w ? ee = A - 2 * (te !== 0 || k !== 0 ? te + k : qt(p.left, p.right)) : Q = T - 2 * (B !== 0 || J !== 0 ? B + J : qt(p.top, p.bottom));
      }
      await m({
        ...a,
        availableWidth: ee,
        availableHeight: Q
      });
      const I = await d.getDimensions(h.floating);
      return A !== I.width || T !== I.height ? { reset: { rects: !0 } } : {};
    }
  };
};
function Pu() {
  return typeof window < "u";
}
function Sr(e) {
  return ly(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ft(e) {
  var a;
  return (e == null || (a = e.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function Un(e) {
  var a;
  return (a = (ly(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : a.documentElement;
}
function ly(e) {
  return Pu() ? e instanceof Node || e instanceof Ft(e).Node : !1;
}
function _n(e) {
  return Pu() ? e instanceof Element || e instanceof Ft(e).Element : !1;
}
function Bn(e) {
  return Pu() ? e instanceof HTMLElement || e instanceof Ft(e).HTMLElement : !1;
}
function Q1(e) {
  return !Pu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ft(e).ShadowRoot;
}
var i9 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Do(e) {
  const { overflow: a, overflowX: r, overflowY: l, display: u } = Sn(e);
  return /auto|scroll|overlay|hidden|clip/.test(a + l + r) && !i9.has(u);
}
var r9 = /* @__PURE__ */ new Set([
  "table",
  "td",
  "th"
]);
function o9(e) {
  return r9.has(Sr(e));
}
var l9 = [":popover-open", ":modal"];
function Zu(e) {
  return l9.some((a) => {
    try {
      return e.matches(a);
    } catch {
      return !1;
    }
  });
}
var u9 = [
  "transform",
  "translate",
  "scale",
  "rotate",
  "perspective"
], s9 = [
  "transform",
  "translate",
  "scale",
  "rotate",
  "perspective",
  "filter"
], c9 = [
  "paint",
  "layout",
  "strict",
  "content"
];
function Pd(e) {
  const a = Zd(), r = _n(e) ? Sn(e) : e;
  return u9.some((l) => r[l] ? r[l] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !a && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !a && (r.filter ? r.filter !== "none" : !1) || s9.some((l) => (r.willChange || "").includes(l)) || c9.some((l) => (r.contain || "").includes(l));
}
function f9(e) {
  let a = La(e);
  for (; Bn(a) && !dr(a); ) {
    if (Pd(a)) return a;
    if (Zu(a)) return null;
    a = La(a);
  }
  return null;
}
function Zd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var d9 = /* @__PURE__ */ new Set([
  "html",
  "body",
  "#document"
]);
function dr(e) {
  return d9.has(Sr(e));
}
function Sn(e) {
  return Ft(e).getComputedStyle(e);
}
function Gu(e) {
  return _n(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function La(e) {
  if (Sr(e) === "html") return e;
  const a = e.assignedSlot || e.parentNode || Q1(e) && e.host || Un(e);
  return Q1(a) ? a.host : a;
}
function uy(e) {
  const a = La(e);
  return dr(a) ? e.ownerDocument ? e.ownerDocument.body : e.body : Bn(a) && Do(a) ? a : uy(a);
}
function Co(e, a, r) {
  var l;
  a === void 0 && (a = []), r === void 0 && (r = !0);
  const u = uy(e), c = u === ((l = e.ownerDocument) == null ? void 0 : l.body), d = Ft(u);
  if (c) {
    const h = td(d);
    return a.concat(d, d.visualViewport || [], Do(u) ? u : [], h && r ? Co(h) : []);
  }
  return a.concat(u, Co(u, [], r));
}
function td(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function sy(e) {
  const a = Sn(e);
  let r = parseFloat(a.width) || 0, l = parseFloat(a.height) || 0;
  const u = Bn(e), c = u ? e.offsetWidth : r, d = u ? e.offsetHeight : l, h = Tu(r) !== c || Tu(l) !== d;
  return h && (r = c, l = d), {
    width: r,
    height: l,
    $: h
  };
}
function Gd(e) {
  return _n(e) ? e : e.contextElement;
}
function sr(e) {
  const a = Gd(e);
  if (!Bn(a)) return Ln(1);
  const r = a.getBoundingClientRect(), { width: l, height: u, $: c } = sy(a);
  let d = (c ? Tu(r.width) : r.width) / l, h = (c ? Tu(r.height) : r.height) / u;
  return (!d || !Number.isFinite(d)) && (d = 1), (!h || !Number.isFinite(h)) && (h = 1), {
    x: d,
    y: h
  };
}
var h9 = /* @__PURE__ */ Ln(0);
function cy(e) {
  const a = Ft(e);
  return !Zd() || !a.visualViewport ? h9 : {
    x: a.visualViewport.offsetLeft,
    y: a.visualViewport.offsetTop
  };
}
function m9(e, a, r) {
  return a === void 0 && (a = !1), !r || a && r !== Ft(e) ? !1 : a;
}
function mi(e, a, r, l) {
  a === void 0 && (a = !1), r === void 0 && (r = !1);
  const u = e.getBoundingClientRect(), c = Gd(e);
  let d = Ln(1);
  a && (l ? _n(l) && (d = sr(l)) : d = sr(e));
  const h = m9(c, r, l) ? cy(c) : Ln(0);
  let m = (u.left + h.x) / d.x, g = (u.top + h.y) / d.y, p = u.width / d.x, _ = u.height / d.y;
  if (c) {
    const S = Ft(c), w = l && _n(l) ? Ft(l) : l;
    let A = S, T = td(A);
    for (; T && l && w !== A; ) {
      const C = sr(T), R = T.getBoundingClientRect(), N = Sn(T), H = R.left + (T.clientLeft + parseFloat(N.paddingLeft)) * C.x, D = R.top + (T.clientTop + parseFloat(N.paddingTop)) * C.y;
      m *= C.x, g *= C.y, p *= C.x, _ *= C.y, m += H, g += D, A = Ft(T), T = td(A);
    }
  }
  return Au({
    width: p,
    height: _,
    x: m,
    y: g
  });
}
function ku(e, a) {
  const r = Gu(e).scrollLeft;
  return a ? a.left + r : mi(Un(e)).left + r;
}
function fy(e, a) {
  const r = e.getBoundingClientRect();
  return {
    x: r.left + a.scrollLeft - ku(e, r),
    y: r.top + a.scrollTop
  };
}
function v9(e) {
  let { elements: a, rect: r, offsetParent: l, strategy: u } = e;
  const c = u === "fixed", d = Un(l), h = a ? Zu(a.floating) : !1;
  if (l === d || h && c) return r;
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  }, g = Ln(1);
  const p = Ln(0), _ = Bn(l);
  if ((_ || !_ && !c) && ((Sr(l) !== "body" || Do(d)) && (m = Gu(l)), Bn(l))) {
    const w = mi(l);
    g = sr(l), p.x = w.x + l.clientLeft, p.y = w.y + l.clientTop;
  }
  const S = d && !_ && !c ? fy(d, m) : Ln(0);
  return {
    width: r.width * g.x,
    height: r.height * g.y,
    x: r.x * g.x - m.scrollLeft * g.x + p.x + S.x,
    y: r.y * g.y - m.scrollTop * g.y + p.y + S.y
  };
}
function p9(e) {
  return Array.from(e.getClientRects());
}
function g9(e) {
  const a = Un(e), r = Gu(e), l = e.ownerDocument.body, u = qt(a.scrollWidth, a.clientWidth, l.scrollWidth, l.clientWidth), c = qt(a.scrollHeight, a.clientHeight, l.scrollHeight, l.clientHeight);
  let d = -r.scrollLeft + ku(e);
  const h = -r.scrollTop;
  return Sn(l).direction === "rtl" && (d += qt(a.clientWidth, l.clientWidth) - u), {
    width: u,
    height: c,
    x: d,
    y: h
  };
}
var K1 = 25;
function y9(e, a) {
  const r = Ft(e), l = Un(e), u = r.visualViewport;
  let c = l.clientWidth, d = l.clientHeight, h = 0, m = 0;
  if (u) {
    c = u.width, d = u.height;
    const p = Zd();
    (!p || p && a === "fixed") && (h = u.offsetLeft, m = u.offsetTop);
  }
  const g = ku(l);
  if (g <= 0) {
    const p = l.ownerDocument, _ = p.body, S = getComputedStyle(_), w = p.compatMode === "CSS1Compat" && parseFloat(S.marginLeft) + parseFloat(S.marginRight) || 0, A = Math.abs(l.clientWidth - _.clientWidth - w);
    A <= K1 && (c -= A);
  } else g <= K1 && (c += g);
  return {
    width: c,
    height: d,
    x: h,
    y: m
  };
}
var b9 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function _9(e, a) {
  const r = mi(e, !0, a === "fixed"), l = r.top + e.clientTop, u = r.left + e.clientLeft, c = Bn(e) ? sr(e) : Ln(1);
  return {
    width: e.clientWidth * c.x,
    height: e.clientHeight * c.y,
    x: u * c.x,
    y: l * c.y
  };
}
function J1(e, a, r) {
  let l;
  if (a === "viewport") l = y9(e, r);
  else if (a === "document") l = g9(Un(e));
  else if (_n(a)) l = _9(a, r);
  else {
    const u = cy(e);
    l = {
      x: a.x - u.x,
      y: a.y - u.y,
      width: a.width,
      height: a.height
    };
  }
  return Au(l);
}
function dy(e, a) {
  const r = La(e);
  return r === a || !_n(r) || dr(r) ? !1 : Sn(r).position === "fixed" || dy(r, a);
}
function S9(e, a) {
  const r = a.get(e);
  if (r) return r;
  let l = Co(e, [], !1).filter((h) => _n(h) && Sr(h) !== "body"), u = null;
  const c = Sn(e).position === "fixed";
  let d = c ? La(e) : e;
  for (; _n(d) && !dr(d); ) {
    const h = Sn(d), m = Pd(d);
    !m && h.position === "fixed" && (u = null), (c ? !m && !u : !m && h.position === "static" && u && b9.has(u.position) || Do(d) && !m && dy(e, d)) ? l = l.filter((g) => g !== d) : u = h, d = La(d);
  }
  return a.set(e, l), l;
}
function E9(e) {
  let { element: a, boundary: r, rootBoundary: l, strategy: u } = e;
  const c = [...r === "clippingAncestors" ? Zu(a) ? [] : S9(a, this._c) : [].concat(r), l], d = c[0], h = c.reduce((m, g) => {
    const p = J1(a, g, u);
    return m.top = qt(p.top, m.top), m.right = Ha(p.right, m.right), m.bottom = Ha(p.bottom, m.bottom), m.left = qt(p.left, m.left), m;
  }, J1(a, d, u));
  return {
    width: h.right - h.left,
    height: h.bottom - h.top,
    x: h.left,
    y: h.top
  };
}
function w9(e) {
  const { width: a, height: r } = sy(e);
  return {
    width: a,
    height: r
  };
}
function T9(e, a, r) {
  const l = Bn(a), u = Un(a), c = r === "fixed", d = mi(e, !0, c, a);
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const m = Ln(0);
  function g() {
    m.x = ku(u);
  }
  if (l || !l && !c)
    if ((Sr(a) !== "body" || Do(u)) && (h = Gu(a)), l) {
      const _ = mi(a, !0, c, a);
      m.x = _.x + a.clientLeft, m.y = _.y + a.clientTop;
    } else u && g();
  c && !l && u && g();
  const p = u && !l && !c ? fy(u, h) : Ln(0);
  return {
    x: d.left + h.scrollLeft - m.x - p.x,
    y: d.top + h.scrollTop - m.y - p.y,
    width: d.width,
    height: d.height
  };
}
function Cf(e) {
  return Sn(e).position === "static";
}
function ep(e, a) {
  if (!Bn(e) || Sn(e).position === "fixed") return null;
  if (a) return a(e);
  let r = e.offsetParent;
  return Un(e) === r && (r = r.ownerDocument.body), r;
}
function hy(e, a) {
  const r = Ft(e);
  if (Zu(e)) return r;
  if (!Bn(e)) {
    let u = La(e);
    for (; u && !dr(u); ) {
      if (_n(u) && !Cf(u)) return u;
      u = La(u);
    }
    return r;
  }
  let l = ep(e, a);
  for (; l && o9(l) && Cf(l); ) l = ep(l, a);
  return l && dr(l) && Cf(l) && !Pd(l) ? r : l || f9(e) || r;
}
var C9 = async function(e) {
  const a = this.getOffsetParent || hy, r = this.getDimensions, l = await r(e.floating);
  return {
    reference: T9(e.reference, await a(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: l.width,
      height: l.height
    }
  };
};
function A9(e) {
  return Sn(e).direction === "rtl";
}
var x9 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: v9,
  getDocumentElement: Un,
  getClippingRect: E9,
  getOffsetParent: hy,
  getElementRects: C9,
  getClientRects: p9,
  getDimensions: w9,
  getScale: sr,
  isElement: _n,
  isRTL: A9
};
function my(e, a) {
  return e.x === a.x && e.y === a.y && e.width === a.width && e.height === a.height;
}
function O9(e, a) {
  let r = null, l;
  const u = Un(e);
  function c() {
    var h;
    clearTimeout(l), (h = r) == null || h.disconnect(), r = null;
  }
  function d(h, m) {
    h === void 0 && (h = !1), m === void 0 && (m = 1), c();
    const g = e.getBoundingClientRect(), { left: p, top: _, width: S, height: w } = g;
    if (h || a(), !S || !w) return;
    const A = fu(_), T = fu(u.clientWidth - (p + S)), C = fu(u.clientHeight - (_ + w)), R = fu(p), N = {
      rootMargin: -A + "px " + -T + "px " + -C + "px " + -R + "px",
      threshold: qt(0, Ha(1, m)) || 1
    };
    let H = !0;
    function D(U) {
      const L = U[0].intersectionRatio;
      if (L !== m) {
        if (!H) return d();
        L ? d(!1, L) : l = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      L === 1 && !my(g, e.getBoundingClientRect()) && d(), H = !1;
    }
    try {
      r = new IntersectionObserver(D, {
        ...N,
        root: u.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(D, N);
    }
    r.observe(e);
  }
  return d(!0), c;
}
function M9(e, a, r, l) {
  l === void 0 && (l = {});
  const { ancestorScroll: u = !0, ancestorResize: c = !0, elementResize: d = typeof ResizeObserver == "function", layoutShift: h = typeof IntersectionObserver == "function", animationFrame: m = !1 } = l, g = Gd(e), p = u || c ? [...g ? Co(g) : [], ...Co(a)] : [];
  p.forEach((R) => {
    u && R.addEventListener("scroll", r, { passive: !0 }), c && R.addEventListener("resize", r);
  });
  const _ = g && h ? O9(g, r) : null;
  let S = -1, w = null;
  d && (w = new ResizeObserver((R) => {
    let [N] = R;
    N && N.target === g && w && (w.unobserve(a), cancelAnimationFrame(S), S = requestAnimationFrame(() => {
      var H;
      (H = w) == null || H.observe(a);
    })), r();
  }), g && !m && w.observe(g), w.observe(a));
  let A, T = m ? mi(e) : null;
  m && C();
  function C() {
    const R = mi(e);
    T && !my(T, R) && r(), T = R, A = requestAnimationFrame(C);
  }
  return r(), () => {
    var R;
    p.forEach((N) => {
      u && N.removeEventListener("scroll", r), c && N.removeEventListener("resize", r);
    }), _?.(), (R = w) == null || R.disconnect(), w = null, m && cancelAnimationFrame(A);
  };
}
var R9 = e9, N9 = t9, D9 = Q6, z9 = a9, H9 = K6, tp = W6, L9 = n9, j9 = (e, a, r) => {
  const l = /* @__PURE__ */ new Map(), u = {
    platform: x9,
    ...r
  }, c = {
    ...u.platform,
    _c: l
  };
  return Y6(e, a, {
    ...u,
    platform: c
  });
}, yu = typeof document < "u" ? y.useLayoutEffect : function() {
};
function xu(e, a) {
  if (e === a) return !0;
  if (typeof e != typeof a) return !1;
  if (typeof e == "function" && e.toString() === a.toString()) return !0;
  let r, l, u;
  if (e && a && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== a.length) return !1;
      for (l = r; l-- !== 0; ) if (!xu(e[l], a[l])) return !1;
      return !0;
    }
    if (u = Object.keys(e), r = u.length, r !== Object.keys(a).length) return !1;
    for (l = r; l-- !== 0; ) if (!{}.hasOwnProperty.call(a, u[l])) return !1;
    for (l = r; l-- !== 0; ) {
      const c = u[l];
      if (!(c === "_owner" && e.$$typeof) && !xu(e[c], a[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && a !== a;
}
function vy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function np(e, a) {
  const r = vy(e);
  return Math.round(a * r) / r;
}
function Af(e) {
  const a = y.useRef(e);
  return yu(() => {
    a.current = e;
  }), a;
}
function B9(e) {
  e === void 0 && (e = {});
  const { placement: a = "bottom", strategy: r = "absolute", middleware: l = [], platform: u, elements: { reference: c, floating: d } = {}, transform: h = !0, whileElementsMounted: m, open: g } = e, [p, _] = y.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: a,
    middlewareData: {},
    isPositioned: !1
  }), [S, w] = y.useState(l);
  xu(S, l) || w(l);
  const [A, T] = y.useState(null), [C, R] = y.useState(null), N = y.useCallback((V) => {
    V !== L.current && (L.current = V, T(V));
  }, []), H = y.useCallback((V) => {
    V !== Q.current && (Q.current = V, R(V));
  }, []), D = c || A, U = d || C, L = y.useRef(null), Q = y.useRef(null), ee = y.useRef(p), I = m != null, te = Af(m), k = Af(u), B = Af(g), J = y.useCallback(() => {
    if (!L.current || !Q.current) return;
    const V = {
      placement: a,
      strategy: r,
      middleware: S
    };
    k.current && (V.platform = k.current), j9(L.current, Q.current, V).then((se) => {
      const ge = {
        ...se,
        isPositioned: B.current !== !1
      };
      ne.current && !xu(ee.current, ge) && (ee.current = ge, br.flushSync(() => {
        _(ge);
      }));
    });
  }, [
    S,
    a,
    r,
    k,
    B
  ]);
  yu(() => {
    g === !1 && ee.current.isPositioned && (ee.current.isPositioned = !1, _((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [g]);
  const ne = y.useRef(!1);
  yu(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), yu(() => {
    if (D && (L.current = D), U && (Q.current = U), D && U) {
      if (te.current) return te.current(D, U, J);
      J();
    }
  }, [
    D,
    U,
    J,
    te,
    I
  ]);
  const me = y.useMemo(() => ({
    reference: L,
    floating: Q,
    setReference: N,
    setFloating: H
  }), [N, H]), z = y.useMemo(() => ({
    reference: D,
    floating: U
  }), [D, U]), q = y.useMemo(() => {
    const V = {
      position: r,
      left: 0,
      top: 0
    };
    if (!z.floating) return V;
    const se = np(z.floating, p.x), ge = np(z.floating, p.y);
    return h ? {
      ...V,
      transform: "translate(" + se + "px, " + ge + "px)",
      ...vy(z.floating) >= 1.5 && { willChange: "transform" }
    } : {
      position: r,
      left: se,
      top: ge
    };
  }, [
    r,
    h,
    z.floating,
    p.x,
    p.y
  ]);
  return y.useMemo(() => ({
    ...p,
    update: J,
    refs: me,
    elements: z,
    floatingStyles: q
  }), [
    p,
    J,
    me,
    z,
    q
  ]);
}
var U9 = (e) => {
  function a(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const { element: l, padding: u } = typeof e == "function" ? e(r) : e;
      return l && a(l) ? l.current != null ? tp({
        element: l.current,
        padding: u
      }).fn(r) : {} : l ? tp({
        element: l,
        padding: u
      }).fn(r) : {};
    }
  };
}, P9 = (e, a) => ({
  ...R9(e),
  options: [e, a]
}), Z9 = (e, a) => ({
  ...N9(e),
  options: [e, a]
}), G9 = (e, a) => ({
  ...L9(e),
  options: [e, a]
}), k9 = (e, a) => ({
  ...D9(e),
  options: [e, a]
}), I9 = (e, a) => ({
  ...z9(e),
  options: [e, a]
}), $9 = (e, a) => ({
  ...H9(e),
  options: [e, a]
}), q9 = (e, a) => ({
  ...U9(e),
  options: [e, a]
}), V9 = "Arrow", py = y.forwardRef((e, a) => {
  const { children: r, width: l = 10, height: u = 5, ...c } = e;
  return /* @__PURE__ */ (0, b.jsx)(St.svg, {
    ...c,
    ref: a,
    width: l,
    height: u,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none",
    children: e.asChild ? r : /* @__PURE__ */ (0, b.jsx)("polygon", { points: "0,0 30,0 15,10" })
  });
});
py.displayName = V9;
var F9 = py, kd = "Popper", [gy, Iu] = Lu(kd), [X9, yy] = gy(kd), by = (e) => {
  const { __scopePopper: a, children: r } = e, [l, u] = y.useState(null);
  return /* @__PURE__ */ (0, b.jsx)(X9, {
    scope: a,
    anchor: l,
    onAnchorChange: u,
    children: r
  });
};
by.displayName = kd;
var _y = "PopperAnchor", Sy = y.forwardRef((e, a) => {
  const { __scopePopper: r, virtualRef: l, ...u } = e, c = yy(_y, r), d = y.useRef(null), h = Yt(a, d);
  return y.useEffect(() => {
    c.onAnchorChange(l?.current || d.current);
  }), l ? null : /* @__PURE__ */ (0, b.jsx)(St.div, {
    ...u,
    ref: h
  });
});
Sy.displayName = _y;
var Id = "PopperContent", [Y9, W9] = gy(Id), Ey = y.forwardRef((e, a) => {
  const { __scopePopper: r, side: l = "bottom", sideOffset: u = 0, align: c = "center", alignOffset: d = 0, arrowPadding: h = 0, avoidCollisions: m = !0, collisionBoundary: g = [], collisionPadding: p = 0, sticky: _ = "partial", hideWhenDetached: S = !1, updatePositionStrategy: w = "optimized", onPlaced: A, ...T } = e, C = yy(Id, r), [R, N] = y.useState(null), H = Yt(a, (ve) => N(ve)), [D, U] = y.useState(null), L = B6(D), Q = L?.width ?? 0, ee = L?.height ?? 0, I = l + (c !== "center" ? "-" + c : ""), te = typeof p == "number" ? p : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...p
  }, k = Array.isArray(g) ? g : [g], B = k.length > 0, J = {
    padding: te,
    boundary: k.filter(K9),
    altBoundary: B
  }, { refs: ne, floatingStyles: me, placement: z, isPositioned: q, middlewareData: V } = B9({
    strategy: "fixed",
    placement: I,
    whileElementsMounted: (...ve) => M9(...ve, { animationFrame: w === "always" }),
    elements: { reference: C.anchor },
    middleware: [
      P9({
        mainAxis: u + ee,
        alignmentAxis: d
      }),
      m && Z9({
        mainAxis: !0,
        crossAxis: !1,
        limiter: _ === "partial" ? G9() : void 0,
        ...J
      }),
      m && k9({ ...J }),
      I9({
        ...J,
        apply: ({ elements: ve, rects: xe, availableWidth: lt, availableHeight: He }) => {
          const { width: dn, height: wn } = xe.reference, Tn = ve.floating.style;
          Tn.setProperty("--radix-popper-available-width", `${lt}px`), Tn.setProperty("--radix-popper-available-height", `${He}px`), Tn.setProperty("--radix-popper-anchor-width", `${dn}px`), Tn.setProperty("--radix-popper-anchor-height", `${wn}px`);
        }
      }),
      D && q9({
        element: D,
        padding: h
      }),
      J9({
        arrowWidth: Q,
        arrowHeight: ee
      }),
      S && $9({
        strategy: "referenceHidden",
        ...J
      })
    ]
  }), [se, ge] = Cy(z), ft = za(A);
  di(() => {
    q && ft?.();
  }, [q, ft]);
  const M = V.arrow?.x, Y = V.arrow?.y, ae = V.arrow?.centerOffset !== 0, [le, be] = y.useState();
  return di(() => {
    R && be(window.getComputedStyle(R).zIndex);
  }, [R]), /* @__PURE__ */ (0, b.jsx)("div", {
    ref: ne.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...me,
      transform: q ? me.transform : "translate(0, -200%)",
      minWidth: "max-content",
      zIndex: le,
      "--radix-popper-transform-origin": [V.transformOrigin?.x, V.transformOrigin?.y].join(" "),
      ...V.hide?.referenceHidden && {
        visibility: "hidden",
        pointerEvents: "none"
      }
    },
    dir: e.dir,
    children: /* @__PURE__ */ (0, b.jsx)(Y9, {
      scope: r,
      placedSide: se,
      onArrowChange: U,
      arrowX: M,
      arrowY: Y,
      shouldHideArrow: ae,
      children: /* @__PURE__ */ (0, b.jsx)(St.div, {
        "data-side": se,
        "data-align": ge,
        ...T,
        ref: H,
        style: {
          ...T.style,
          animation: q ? void 0 : "none"
        }
      })
    })
  });
});
Ey.displayName = Id;
var wy = "PopperArrow", Q9 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ty = y.forwardRef(function(a, r) {
  const { __scopePopper: l, ...u } = a, c = W9(wy, l), d = Q9[c.placedSide];
  return /* @__PURE__ */ (0, b.jsx)("span", {
    ref: c.onArrowChange,
    style: {
      position: "absolute",
      left: c.arrowX,
      top: c.arrowY,
      [d]: 0,
      transformOrigin: {
        top: "",
        right: "0 0",
        bottom: "center 0",
        left: "100% 0"
      }[c.placedSide],
      transform: {
        top: "translateY(100%)",
        right: "translateY(50%) rotate(90deg) translateX(-50%)",
        bottom: "rotate(180deg)",
        left: "translateY(50%) rotate(-90deg) translateX(50%)"
      }[c.placedSide],
      visibility: c.shouldHideArrow ? "hidden" : void 0
    },
    children: /* @__PURE__ */ (0, b.jsx)(F9, {
      ...u,
      ref: r,
      style: {
        ...u.style,
        display: "block"
      }
    })
  });
});
Ty.displayName = wy;
function K9(e) {
  return e !== null;
}
var J9 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(a) {
    const { placement: r, rects: l, middlewareData: u } = a, c = u.arrow?.centerOffset !== 0, d = c ? 0 : e.arrowWidth, h = c ? 0 : e.arrowHeight, [m, g] = Cy(r), p = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[g], _ = (u.arrow?.x ?? 0) + d / 2, S = (u.arrow?.y ?? 0) + h / 2;
    let w = "", A = "";
    return m === "bottom" ? (w = c ? p : `${_}px`, A = `${-h}px`) : m === "top" ? (w = c ? p : `${_}px`, A = `${l.floating.height + h}px`) : m === "right" ? (w = `${-h}px`, A = c ? p : `${S}px`) : m === "left" && (w = `${l.floating.width + h}px`, A = c ? p : `${S}px`), { data: {
      x: w,
      y: A
    } };
  }
});
function Cy(e) {
  const [a, r = "center"] = e.split("-");
  return [a, r];
}
var Ay = by, $d = Sy, xy = Ey, Oy = Ty, qd = "Popover", [My, Kx] = Lu(qd, [Iu]), zo = Iu(), [eA, Za] = My(qd), Ry = (e) => {
  const { __scopePopover: a, children: r, open: l, defaultOpen: u, onOpenChange: c, modal: d = !1 } = e, h = zo(a), m = y.useRef(null), [g, p] = y.useState(!1), [_ = !1, S] = Md({
    prop: l,
    defaultProp: u,
    onChange: c
  });
  return /* @__PURE__ */ (0, b.jsx)(Ay, {
    ...h,
    children: /* @__PURE__ */ (0, b.jsx)(eA, {
      scope: a,
      contentId: bo(),
      triggerRef: m,
      open: _,
      onOpenChange: S,
      onOpenToggle: y.useCallback(() => S((w) => !w), [S]),
      hasCustomAnchor: g,
      onCustomAnchorAdd: y.useCallback(() => p(!0), []),
      onCustomAnchorRemove: y.useCallback(() => p(!1), []),
      modal: d,
      children: r
    })
  });
};
Ry.displayName = qd;
var Ny = "PopoverAnchor", Dy = y.forwardRef((e, a) => {
  const { __scopePopover: r, ...l } = e, u = Za(Ny, r), c = zo(r), { onCustomAnchorAdd: d, onCustomAnchorRemove: h } = u;
  return y.useEffect(() => (d(), () => h()), [d, h]), /* @__PURE__ */ (0, b.jsx)($d, {
    ...c,
    ...l,
    ref: a
  });
});
Dy.displayName = Ny;
var zy = "PopoverTrigger", Hy = y.forwardRef((e, a) => {
  const { __scopePopover: r, ...l } = e, u = Za(zy, r), c = zo(r), d = Yt(a, u.triggerRef), h = /* @__PURE__ */ (0, b.jsx)(St.button, {
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": u.open,
    "aria-controls": u.contentId,
    "data-state": Zy(u.open),
    ...l,
    ref: d,
    onClick: ct(e.onClick, u.onOpenToggle)
  });
  return u.hasCustomAnchor ? h : /* @__PURE__ */ (0, b.jsx)($d, {
    asChild: !0,
    ...c,
    children: h
  });
});
Hy.displayName = zy;
var Vd = "PopoverPortal", [tA, nA] = My(Vd, { forceMount: void 0 }), Ly = (e) => {
  const { __scopePopover: a, forceMount: r, children: l, container: u } = e, c = Za(Vd, a);
  return /* @__PURE__ */ (0, b.jsx)(tA, {
    scope: a,
    forceMount: r,
    children: /* @__PURE__ */ (0, b.jsx)(Pa, {
      present: r || c.open,
      children: /* @__PURE__ */ (0, b.jsx)(Bu, {
        asChild: !0,
        container: u,
        children: l
      })
    })
  });
};
Ly.displayName = Vd;
var hr = "PopoverContent", jy = y.forwardRef((e, a) => {
  const r = nA(hr, e.__scopePopover), { forceMount: l = r.forceMount, ...u } = e, c = Za(hr, e.__scopePopover);
  return /* @__PURE__ */ (0, b.jsx)(Pa, {
    present: l || c.open,
    children: c.modal ? /* @__PURE__ */ (0, b.jsx)(aA, {
      ...u,
      ref: a
    }) : /* @__PURE__ */ (0, b.jsx)(iA, {
      ...u,
      ref: a
    })
  });
});
jy.displayName = hr;
var aA = y.forwardRef((e, a) => {
  const r = Za(hr, e.__scopePopover), l = y.useRef(null), u = Yt(a, l), c = y.useRef(!1);
  return y.useEffect(() => {
    const d = l.current;
    if (d) return Fg(d);
  }, []), /* @__PURE__ */ (0, b.jsx)(Nd, {
    as: No,
    allowPinchZoom: !0,
    children: /* @__PURE__ */ (0, b.jsx)(By, {
      ...e,
      ref: u,
      trapFocus: r.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: ct(e.onCloseAutoFocus, (d) => {
        d.preventDefault(), c.current || r.triggerRef.current?.focus();
      }),
      onPointerDownOutside: ct(e.onPointerDownOutside, (d) => {
        const h = d.detail.originalEvent, m = h.button === 0 && h.ctrlKey === !0;
        c.current = h.button === 2 || m;
      }, { checkForDefaultPrevented: !1 }),
      onFocusOutside: ct(e.onFocusOutside, (d) => d.preventDefault(), { checkForDefaultPrevented: !1 })
    })
  });
}), iA = y.forwardRef((e, a) => {
  const r = Za(hr, e.__scopePopover), l = y.useRef(!1), u = y.useRef(!1);
  return /* @__PURE__ */ (0, b.jsx)(By, {
    ...e,
    ref: a,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (c) => {
      e.onCloseAutoFocus?.(c), c.defaultPrevented || (l.current || r.triggerRef.current?.focus(), c.preventDefault()), l.current = !1, u.current = !1;
    },
    onInteractOutside: (c) => {
      e.onInteractOutside?.(c), c.defaultPrevented || (l.current = !0, c.detail.originalEvent.type === "pointerdown" && (u.current = !0));
      const d = c.target;
      r.triggerRef.current?.contains(d) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && u.current && c.preventDefault();
    }
  });
}), By = y.forwardRef((e, a) => {
  const { __scopePopover: r, trapFocus: l, onOpenAutoFocus: u, onCloseAutoFocus: c, disableOutsidePointerEvents: d, onEscapeKeyDown: h, onPointerDownOutside: m, onFocusOutside: g, onInteractOutside: p, ..._ } = e, S = Za(hr, r), w = zo(r);
  return Pg(), /* @__PURE__ */ (0, b.jsx)(Rd, {
    asChild: !0,
    loop: !0,
    trapped: l,
    onMountAutoFocus: u,
    onUnmountAutoFocus: c,
    children: /* @__PURE__ */ (0, b.jsx)(ju, {
      asChild: !0,
      disableOutsidePointerEvents: d,
      onInteractOutside: p,
      onEscapeKeyDown: h,
      onPointerDownOutside: m,
      onFocusOutside: g,
      onDismiss: () => S.onOpenChange(!1),
      children: /* @__PURE__ */ (0, b.jsx)(xy, {
        "data-state": Zy(S.open),
        role: "dialog",
        id: S.contentId,
        ...w,
        ..._,
        ref: a,
        style: {
          ..._.style,
          "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
          "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
          "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
        }
      })
    })
  });
}), Uy = "PopoverClose", Py = y.forwardRef((e, a) => {
  const { __scopePopover: r, ...l } = e, u = Za(Uy, r);
  return /* @__PURE__ */ (0, b.jsx)(St.button, {
    type: "button",
    ...l,
    ref: a,
    onClick: ct(e.onClick, () => u.onOpenChange(!1))
  });
});
Py.displayName = Uy;
var rA = "PopoverArrow", oA = y.forwardRef((e, a) => {
  const { __scopePopover: r, ...l } = e, u = zo(r);
  return /* @__PURE__ */ (0, b.jsx)(Oy, {
    ...u,
    ...l,
    ref: a
  });
});
oA.displayName = rA;
function Zy(e) {
  return e ? "open" : "closed";
}
var $u = Ry, Fd = Dy, Xd = Hy, qu = Ly, Vu = jy, nd = Py, [Fu, Jx] = Lu("Tooltip", [Iu]), Xu = Iu(), Gy = "TooltipProvider", lA = 700, ad = "tooltip.open", [uA, Yd] = Fu(Gy), ky = (e) => {
  const { __scopeTooltip: a, delayDuration: r = lA, skipDelayDuration: l = 300, disableHoverableContent: u = !1, children: c } = e, [d, h] = y.useState(!0), m = y.useRef(!1), g = y.useRef(0);
  return y.useEffect(() => {
    const p = g.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ (0, b.jsx)(uA, {
    scope: a,
    isOpenDelayed: d,
    delayDuration: r,
    onOpen: y.useCallback(() => {
      window.clearTimeout(g.current), h(!1);
    }, []),
    onClose: y.useCallback(() => {
      window.clearTimeout(g.current), g.current = window.setTimeout(() => h(!0), l);
    }, [l]),
    isPointerInTransitRef: m,
    onPointerInTransitChange: y.useCallback((p) => {
      m.current = p;
    }, []),
    disableHoverableContent: u,
    children: c
  });
};
ky.displayName = Gy;
var Yu = "Tooltip", [sA, Ho] = Fu(Yu), Iy = (e) => {
  const { __scopeTooltip: a, children: r, open: l, defaultOpen: u = !1, onOpenChange: c, disableHoverableContent: d, delayDuration: h } = e, m = Yd(Yu, e.__scopeTooltip), g = Xu(a), [p, _] = y.useState(null), S = bo(), w = y.useRef(0), A = d ?? m.disableHoverableContent, T = h ?? m.delayDuration, C = y.useRef(!1), [R = !1, N] = Md({
    prop: l,
    defaultProp: u,
    onChange: (Q) => {
      Q ? (m.onOpen(), document.dispatchEvent(new CustomEvent(ad))) : m.onClose(), c?.(Q);
    }
  }), H = y.useMemo(() => R ? C.current ? "delayed-open" : "instant-open" : "closed", [R]), D = y.useCallback(() => {
    window.clearTimeout(w.current), w.current = 0, C.current = !1, N(!0);
  }, [N]), U = y.useCallback(() => {
    window.clearTimeout(w.current), w.current = 0, N(!1);
  }, [N]), L = y.useCallback(() => {
    window.clearTimeout(w.current), w.current = window.setTimeout(() => {
      C.current = !0, N(!0), w.current = 0;
    }, T);
  }, [T, N]);
  return y.useEffect(() => () => {
    w.current && (window.clearTimeout(w.current), w.current = 0);
  }, []), /* @__PURE__ */ (0, b.jsx)(Ay, {
    ...g,
    children: /* @__PURE__ */ (0, b.jsx)(sA, {
      scope: a,
      contentId: S,
      open: R,
      stateAttribute: H,
      trigger: p,
      onTriggerChange: _,
      onTriggerEnter: y.useCallback(() => {
        m.isOpenDelayed ? L() : D();
      }, [
        m.isOpenDelayed,
        L,
        D
      ]),
      onTriggerLeave: y.useCallback(() => {
        A ? U() : (window.clearTimeout(w.current), w.current = 0);
      }, [U, A]),
      onOpen: D,
      onClose: U,
      disableHoverableContent: A,
      children: r
    })
  });
};
Iy.displayName = Yu;
var id = "TooltipTrigger", $y = y.forwardRef((e, a) => {
  const { __scopeTooltip: r, ...l } = e, u = Ho(id, r), c = Yd(id, r), d = Xu(r), h = Yt(a, y.useRef(null), u.onTriggerChange), m = y.useRef(!1), g = y.useRef(!1), p = y.useCallback(() => m.current = !1, []);
  return y.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ (0, b.jsx)($d, {
    asChild: !0,
    ...d,
    children: /* @__PURE__ */ (0, b.jsx)(St.button, {
      "aria-describedby": u.open ? u.contentId : void 0,
      "data-state": u.stateAttribute,
      ...l,
      ref: h,
      onPointerMove: ct(e.onPointerMove, (_) => {
        _.pointerType !== "touch" && !g.current && !c.isPointerInTransitRef.current && (u.onTriggerEnter(), g.current = !0);
      }),
      onPointerLeave: ct(e.onPointerLeave, () => {
        u.onTriggerLeave(), g.current = !1;
      }),
      onPointerDown: ct(e.onPointerDown, () => {
        m.current = !0, document.addEventListener("pointerup", p, { once: !0 });
      }),
      onFocus: ct(e.onFocus, () => {
        m.current || u.onOpen();
      }),
      onBlur: ct(e.onBlur, u.onClose),
      onClick: ct(e.onClick, u.onClose)
    })
  });
});
$y.displayName = id;
var Wd = "TooltipPortal", [cA, fA] = Fu(Wd, { forceMount: void 0 }), qy = (e) => {
  const { __scopeTooltip: a, forceMount: r, children: l, container: u } = e, c = Ho(Wd, a);
  return /* @__PURE__ */ (0, b.jsx)(cA, {
    scope: a,
    forceMount: r,
    children: /* @__PURE__ */ (0, b.jsx)(Pa, {
      present: r || c.open,
      children: /* @__PURE__ */ (0, b.jsx)(Bu, {
        asChild: !0,
        container: u,
        children: l
      })
    })
  });
};
qy.displayName = Wd;
var mr = "TooltipContent", Vy = y.forwardRef((e, a) => {
  const r = fA(mr, e.__scopeTooltip), { forceMount: l = r.forceMount, side: u = "top", ...c } = e, d = Ho(mr, e.__scopeTooltip);
  return /* @__PURE__ */ (0, b.jsx)(Pa, {
    present: l || d.open,
    children: d.disableHoverableContent ? /* @__PURE__ */ (0, b.jsx)(Fy, {
      side: u,
      ...c,
      ref: a
    }) : /* @__PURE__ */ (0, b.jsx)(dA, {
      side: u,
      ...c,
      ref: a
    })
  });
}), dA = y.forwardRef((e, a) => {
  const r = Ho(mr, e.__scopeTooltip), l = Yd(mr, e.__scopeTooltip), u = y.useRef(null), c = Yt(a, u), [d, h] = y.useState(null), { trigger: m, onClose: g } = r, p = u.current, { onPointerInTransitChange: _ } = l, S = y.useCallback(() => {
    h(null), _(!1);
  }, [_]), w = y.useCallback((A, T) => {
    const C = A.currentTarget, R = {
      x: A.clientX,
      y: A.clientY
    }, N = gA(R, pA(R, C.getBoundingClientRect())), H = yA(T.getBoundingClientRect());
    h(_A([...N, ...H])), _(!0);
  }, [_]);
  return y.useEffect(() => () => S(), [S]), y.useEffect(() => {
    if (m && p) {
      const A = (C) => w(C, p), T = (C) => w(C, m);
      return m.addEventListener("pointerleave", A), p.addEventListener("pointerleave", T), () => {
        m.removeEventListener("pointerleave", A), p.removeEventListener("pointerleave", T);
      };
    }
  }, [
    m,
    p,
    w,
    S
  ]), y.useEffect(() => {
    if (d) {
      const A = (T) => {
        const C = T.target, R = {
          x: T.clientX,
          y: T.clientY
        }, N = m?.contains(C) || p?.contains(C), H = !bA(R, d);
        N ? S() : H && (S(), g());
      };
      return document.addEventListener("pointermove", A), () => document.removeEventListener("pointermove", A);
    }
  }, [
    m,
    p,
    d,
    g,
    S
  ]), /* @__PURE__ */ (0, b.jsx)(Fy, {
    ...e,
    ref: c
  });
}), [hA, mA] = Fu(Yu, { isInside: !1 }), Fy = y.forwardRef((e, a) => {
  const { __scopeTooltip: r, children: l, "aria-label": u, onEscapeKeyDown: c, onPointerDownOutside: d, ...h } = e, m = Ho(mr, r), g = Xu(r), { onClose: p } = m;
  return y.useEffect(() => (document.addEventListener(ad, p), () => document.removeEventListener(ad, p)), [p]), y.useEffect(() => {
    if (m.trigger) {
      const _ = (S) => {
        S.target?.contains(m.trigger) && p();
      };
      return window.addEventListener("scroll", _, { capture: !0 }), () => window.removeEventListener("scroll", _, { capture: !0 });
    }
  }, [m.trigger, p]), /* @__PURE__ */ (0, b.jsx)(ju, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: c,
    onPointerDownOutside: d,
    onFocusOutside: (_) => _.preventDefault(),
    onDismiss: p,
    children: /* @__PURE__ */ (0, b.jsxs)(xy, {
      "data-state": m.stateAttribute,
      ...g,
      ...h,
      ref: a,
      style: {
        ...h.style,
        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
      },
      children: [/* @__PURE__ */ (0, b.jsx)(zg, { children: l }), /* @__PURE__ */ (0, b.jsx)(hA, {
        scope: r,
        isInside: !0,
        children: /* @__PURE__ */ (0, b.jsx)(dC, {
          id: m.contentId,
          role: "tooltip",
          children: u || l
        })
      })]
    })
  });
});
Vy.displayName = mr;
var Xy = "TooltipArrow", vA = y.forwardRef((e, a) => {
  const { __scopeTooltip: r, ...l } = e, u = Xu(r);
  return mA(Xy, r).isInside ? null : /* @__PURE__ */ (0, b.jsx)(Oy, {
    ...u,
    ...l,
    ref: a
  });
});
vA.displayName = Xy;
function pA(e, a) {
  const r = Math.abs(a.top - e.y), l = Math.abs(a.bottom - e.y), u = Math.abs(a.right - e.x), c = Math.abs(a.left - e.x);
  switch (Math.min(r, l, u, c)) {
    case c:
      return "left";
    case u:
      return "right";
    case r:
      return "top";
    case l:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function gA(e, a, r = 5) {
  const l = [];
  switch (a) {
    case "top":
      l.push({
        x: e.x - r,
        y: e.y + r
      }, {
        x: e.x + r,
        y: e.y + r
      });
      break;
    case "bottom":
      l.push({
        x: e.x - r,
        y: e.y - r
      }, {
        x: e.x + r,
        y: e.y - r
      });
      break;
    case "left":
      l.push({
        x: e.x + r,
        y: e.y - r
      }, {
        x: e.x + r,
        y: e.y + r
      });
      break;
    case "right":
      l.push({
        x: e.x - r,
        y: e.y - r
      }, {
        x: e.x - r,
        y: e.y + r
      });
      break;
  }
  return l;
}
function yA(e) {
  const { top: a, right: r, bottom: l, left: u } = e;
  return [
    {
      x: u,
      y: a
    },
    {
      x: r,
      y: a
    },
    {
      x: r,
      y: l
    },
    {
      x: u,
      y: l
    }
  ];
}
function bA(e, a) {
  const { x: r, y: l } = e;
  let u = !1;
  for (let c = 0, d = a.length - 1; c < a.length; d = c++) {
    const h = a[c].x, m = a[c].y, g = a[d].x, p = a[d].y;
    m > l != p > l && r < (g - h) * (l - m) / (p - m) + h && (u = !u);
  }
  return u;
}
function _A(e) {
  const a = e.slice();
  return a.sort((r, l) => r.x < l.x ? -1 : r.x > l.x ? 1 : r.y < l.y ? -1 : r.y > l.y ? 1 : 0), SA(a);
}
function SA(e) {
  if (e.length <= 1) return e.slice();
  const a = [];
  for (let l = 0; l < e.length; l++) {
    const u = e[l];
    for (; a.length >= 2; ) {
      const c = a[a.length - 1], d = a[a.length - 2];
      if ((c.x - d.x) * (u.y - d.y) >= (c.y - d.y) * (u.x - d.x)) a.pop();
      else break;
    }
    a.push(u);
  }
  a.pop();
  const r = [];
  for (let l = e.length - 1; l >= 0; l--) {
    const u = e[l];
    for (; r.length >= 2; ) {
      const c = r[r.length - 1], d = r[r.length - 2];
      if ((c.x - d.x) * (u.y - d.y) >= (c.y - d.y) * (u.x - d.x)) r.pop();
      else break;
    }
    r.push(u);
  }
  return r.pop(), a.length === 1 && r.length === 1 && a[0].x === r[0].x && a[0].y === r[0].y ? a : a.concat(r);
}
var EA = ky, wA = Iy, Yy = $y, TA = qy, CA = Vy;
function AA(e) {
  const a = (0, y.useRef)(e);
  return a.current = e, a;
}
var vr = [], du = !1, ap = (e) => {
  if (e.key === "Escape") {
    const [a] = vr;
    a && (e.preventDefault(), a.callback.current?.());
  }
}, Wy = () => {
  vr.length > 0 && !du ? (document.body.addEventListener("keydown", ap), du = !0) : vr.length === 0 && du && (document.body.removeEventListener("keydown", ap), du = !1);
}, xA = (e) => {
  vr.unshift(e), Wy();
}, OA = ({ id: e }) => {
  vr = vr.filter((a) => a.id !== e), Wy();
}, MA = (e, a) => {
  const r = (0, y.useId)(), l = AA(a);
  (0, y.useEffect)(() => {
    if (!e) return;
    const u = {
      id: r,
      callback: l
    };
    return xA(u), () => OA(u);
  }, [
    r,
    e,
    l
  ]);
}, RA = (e) => {
  e.preventDefault();
}, Qy = (0, y.createContext)(void 0);
function Ky({ children: e, container: a }) {
  return /* @__PURE__ */ (0, b.jsx)(Qy.Provider, {
    value: a,
    children: e
  });
}
function Lo() {
  return (0, y.useContext)(Qy);
}
var NA = "_Tooltip_arpo7_1", DA = "_TriggerDecorator_arpo7_86", Jy = {
  Tooltip: NA,
  "scale-in": "_scale-in_arpo7_1",
  "scale-out": "_scale-out_arpo7_1",
  TriggerDecorator: DA
}, Hn = (e) => {
  const { ref: a, onDismiss: r, onOpenChange: l, onContentPointerEnter: u, onContentPointerLeave: c, children: d, content: h, forceOpen: m = h === null ? !1 : void 0, maxWidth: g = 300, openDelay: p = 150, interactive: _ = !1, compact: S = !1, preventUnintentionalClickToClose: w, align: A, alignOffset: T = 0, side: C, sideOffset: R = 5, gutterSize: N = "md", contentClassName: H, onPointerDown: D, onClick: U, ...L } = e, [Q, ee] = (0, y.useState)(!1), [I, te] = (0, y.useState)(!1);
  (0, y.useEffect)(() => {
    if (!I) return;
    const ne = window.setTimeout(() => te(!1), 400);
    return () => window.clearTimeout(ne);
  }, [I]);
  const k = m ?? Q, B = (ne) => {
    l?.(ne), typeof m != "boolean" && (ee(ne), w && te(ne));
  }, J = (ne) => {
    w && I && (ne.preventDefault(), ne.stopPropagation());
  };
  return /* @__PURE__ */ (0, b.jsxs)(eb, {
    onDismiss: r,
    open: k,
    delayDuration: p,
    onOpenChange: B,
    disableHoverableContent: !_,
    children: [/* @__PURE__ */ (0, b.jsx)(Yy, {
      asChild: !0,
      children: /* @__PURE__ */ (0, b.jsx)(Hg, {
        ...L,
        ref: a,
        onPointerDown: (ne) => {
          J(ne), D?.(ne);
        },
        onClick: (ne) => {
          J(ne), U?.(ne);
        },
        children: d
      })
    }), /* @__PURE__ */ (0, b.jsx)(tb, {
      maxWidth: g,
      compact: S,
      align: A,
      alignOffset: T,
      side: C,
      sideOffset: R,
      gutterSize: N,
      className: H,
      onPointerEnter: u,
      onPointerLeave: c,
      children: h
    })]
  });
}, eb = ({ onDismiss: e, children: a, open: r, onOpenChange: l, ...u }) => (MA(r, () => {
  l(!1), e?.();
}), /* @__PURE__ */ (0, b.jsx)(EA, { children: /* @__PURE__ */ (0, b.jsx)(wA, {
  open: r,
  onOpenChange: l,
  ...u,
  children: a
}) })), tb = ({ children: e, maxWidth: a = 300, compact: r = !1, clickable: l = void 0, alignOffset: u = 0, sideOffset: c = 5, gutterSize: d = "md", className: h, style: m, ...g }) => {
  const p = Lo();
  return /* @__PURE__ */ (0, b.jsx)(TA, {
    container: p,
    children: /* @__PURE__ */ (0, b.jsx)(CA, {
      ...g,
      className: De(Jy.Tooltip, h),
      "data-compact": r,
      "data-clickable": l,
      "data-gutter-size": d,
      alignOffset: u,
      sideOffset: c,
      collisionPadding: 15,
      hideWhenDetached: !0,
      style: {
        ...m,
        maxWidth: a
      },
      onEscapeKeyDown: RA,
      children: e
    })
  });
}, zA = ({ children: e, asChild: a = !0, ...r }) => /* @__PURE__ */ (0, b.jsx)(Yy, {
  asChild: a,
  ...r,
  children: e
}), HA = (e) => {
  const { children: a, className: r, focusable: l = !0, ref: u, ...c } = e, d = typeof a == "string";
  return /* @__PURE__ */ (0, b.jsx)(Hg, {
    ref: u,
    ...c,
    className: De(Jy.TriggerDecorator, r),
    tabIndex: l ? 0 : void 0,
    children: d ? /* @__PURE__ */ (0, b.jsx)("span", { children: a }) : a
  });
};
Hn.Root = eb;
Hn.Content = tb;
Hn.Trigger = zA;
Hn.TriggerDecorator = HA;
function Ou(e) {
  if (typeof window.requestAnimationFrame != "function" || document.visibilityState === "hidden") {
    const l = window.setTimeout(e);
    return () => window.clearTimeout(l);
  }
  let a = 2, r = window.requestAnimationFrame(function l() {
    a -= 1, a === 0 ? e() : r = window.requestAnimationFrame(l);
  });
  return () => window.cancelAnimationFrame(r);
}
function LA(e) {
  const a = {};
  for (const [r, l] of Object.entries(e))
    l !== void 0 && (a[r.startsWith("--") ? r : `--${r}`] = typeof l == "number" ? `${l}px` : l);
  return a;
}
var xf = (e) => String(e), Mn = (e) => `${e}ms`;
function Of(e) {
  return typeof e == "number" ? `${e}deg` : e;
}
function Mf({ x: e, y: a, scale: r, rotate: l, skewX: u, skewY: c } = {}) {
  const d = [
    e == null ? null : `translateX(${e}px)`,
    a == null ? null : `translateY(${a}px)`,
    r == null ? null : `scale(${r})`,
    l == null ? null : `rotate(${Of(l)})`,
    u == null ? null : `skewX(${Of(u)})`,
    c == null ? null : `skewY(${Of(c)})`
  ].filter(Boolean);
  return d.length ? d.join(" ") : "none";
}
function Rf({ blur: e } = {}) {
  return e == null ? "none" : `blur(${e}px)`;
}
function hu(e) {
  const a = [];
  return y.Children.forEach(e, (r) => {
    r && typeof r == "object" && "key" in r && r.key && a.push(r);
  }), a;
}
var ir = () => {
};
function rr(e) {
  const a = (0, y.useRef)(e);
  return a.current = e, (0, y.useCallback)((r) => a.current(r), []);
}
function jA(e, a, r, l) {
  const u = new Set(e.map((m) => m.key)), c = new Set(a.map((m) => m.component.key)), d = e.filter((m) => !c.has(m.key)).map(r), h = a.map((m) => ({
    ...m,
    component: e.find(({ key: g }) => g === m.component.key) ?? m.component,
    shouldRender: u.has(m.component.key)
  }));
  return l === "append" ? h.concat(d) : d.concat(h);
}
var BA = "_TransitionGroupChild_1d6a5_1", UA = { TransitionGroupChild: BA }, nb = {
  enter: !1,
  enterActive: !1,
  exit: !1,
  exitActive: !1,
  interrupted: !1
}, PA = (e) => ({
  ...nb,
  enter: !e
});
function ZA(e, a) {
  switch (a.type) {
    case "enter-before":
      return {
        enter: !0,
        enterActive: !1,
        exit: !1,
        exitActive: !1,
        interrupted: e.interrupted || e.exit
      };
    case "enter-active":
      return {
        enter: !0,
        enterActive: !0,
        exit: !1,
        exitActive: !1,
        interrupted: !1
      };
    case "exit-before":
      return {
        enter: !1,
        enterActive: !1,
        exit: !0,
        exitActive: !1,
        interrupted: e.interrupted || e.enter
      };
    case "exit-active":
      return {
        enter: !1,
        enterActive: !1,
        exit: !0,
        exitActive: !0,
        interrupted: !1
      };
    case "done":
      return nb;
  }
}
function GA({ as: e, children: a, className: r, style: l, preventMountTransition: u, shouldRender: c, enterDuration: d, exitDuration: h, removeChild: m, onEnter: g, onEnterActive: p, onEnterComplete: _, onExit: S, onExitActive: w, onExitComplete: A }) {
  const [T, C] = (0, y.useReducer)(ZA, PA(u)), R = (0, y.useRef)(!1), N = (0, y.useRef)(null), H = (0, y.useRef)(d), D = (0, y.useRef)(h), U = (0, y.useRef)(null);
  H.current = d, D.current = h;
  const L = (0, y.useCallback)((Q) => {
    const ee = N.current;
    !ee || Q === U.current || (U.current = Q, {
      enter: g,
      "enter-active": p,
      "enter-complete": _,
      exit: S,
      "exit-active": w,
      "exit-complete": A
    }[Q](ee));
  }, [
    g,
    p,
    _,
    S,
    w,
    A
  ]);
  return (0, y.useLayoutEffect)(() => {
    if (!c) {
      let I;
      C({ type: "exit-before" }), L("exit");
      const te = Ou(() => {
        C({ type: "exit-active" }), L("exit-active"), I = window.setTimeout(() => {
          L("exit-complete"), m();
        }, D.current);
      });
      return () => {
        te(), I !== void 0 && window.clearTimeout(I);
      };
    }
    if (u && !R.current) {
      R.current = !0;
      return;
    }
    let Q;
    C({ type: "enter-before" }), L("enter");
    const ee = Ou(() => {
      C({ type: "enter-active" }), L("enter-active"), Q = window.setTimeout(() => {
        C({ type: "done" }), L("enter-complete");
      }, H.current);
    });
    return () => {
      ee(), Q !== void 0 && window.clearTimeout(Q);
    };
  }, [
    u,
    m,
    c,
    L
  ]), (0, y.useEffect)(() => () => {
    R.current = !1;
  }, []), /* @__PURE__ */ (0, b.jsx)(e, {
    ref: N,
    className: De(r, UA.TransitionGroupChild),
    style: l,
    "data-entering": T.enter ? "" : void 0,
    "data-entering-active": T.enterActive ? "" : void 0,
    "data-exiting": T.exit ? "" : void 0,
    "data-exiting-active": T.exitActive ? "" : void 0,
    "data-interrupted": T.interrupted ? "" : void 0,
    children: a
  });
}
function kA(e) {
  const a = e.preventMountTransition ? void 0 : e.enterMountDelay, [r, l] = (0, y.useState)(a === void 0);
  return (0, y.useEffect)(() => {
    if (r) return;
    const u = window.setTimeout(() => l(!0), a);
    return () => window.clearTimeout(u);
  }, [a, r]), r ? /* @__PURE__ */ (0, b.jsx)(GA, { ...e }) : null;
}
function Mu(e) {
  const { as: a = "span", children: r, className: l, style: u, enterDuration: c = 0, exitDuration: d = 0, enterMountDelay: h, preventInitialTransition: m = !0, insertMethod: g = "append", disableAnimations: p } = e, _ = rr(e.onEnter ?? ir), S = rr(e.onEnterActive ?? ir), w = rr(e.onEnterComplete ?? ir), A = rr(e.onExit ?? ir), T = rr(e.onExitActive ?? ir), C = rr(e.onExitComplete ?? ir);
  y.Children.forEach(r, (U) => {
    if (U && typeof U == "object" && !("key" in U && U.key)) throw new Error("Child elements of <TransitionGroup /> must include a key");
  });
  const R = (0, y.useCallback)((U) => ({
    component: U,
    shouldRender: !0,
    preventMountTransition: !1,
    removeChild: () => {
      H((L) => L.filter(({ component: Q }) => Q.key !== U.key));
    },
    onEnter: _,
    onEnterActive: S,
    onEnterComplete: w,
    onExit: A,
    onExitActive: T,
    onExitComplete: C
  }), [
    _,
    S,
    w,
    A,
    T,
    C
  ]), [N, H] = (0, y.useState)(() => hu(r).map((U) => ({
    ...R(U),
    preventMountTransition: m
  })));
  if ((0, y.useLayoutEffect)(() => {
    H((U) => jA(hu(r), U, R, g));
  }, [
    r,
    R,
    g
  ]), p) return hu(r).map((U) => /* @__PURE__ */ (0, b.jsx)(a, {
    className: l,
    style: u,
    children: U
  }, U.key));
  const D = new Map(hu(r).map((U) => [U.key, U]));
  return N.map(({ component: U, ...L }) => {
    const Q = D.get(U.key) ?? U;
    return /* @__PURE__ */ (0, b.jsx)(kA, {
      ...L,
      as: a,
      className: l,
      enterDuration: c,
      exitDuration: d,
      enterMountDelay: h,
      style: u,
      children: Q
    }, Q.key);
  });
}
var IA = "_Layout_4j8qj_1", $A = "_TransitionItem_4j8qj_34", ip = {
  Layout: IA,
  TransitionItem: $A
};
function qA(e) {
  const { as: a = "span", children: r, transitionClassName: l, insertMethod: u, className: c, hideOverflow: d = !1, preventInitialTransition: h = !0, disableAnimations: m, itemAnchor: g = "start", dimension: p = "height", enterFromSize: _, resizeContents: S = !1 } = e, w = (0, y.useRef)(null), A = (0, y.useRef)(null), T = (0, y.useRef)(null), C = (0, y.useRef)(null), { enterTotalDuration: R, exitTotalDuration: N, variables: H } = YA(e), D = (te) => {
    const k = w.current;
    if (!k) return;
    S ? (delete k.dataset.resizeContents, T.current = p === "width" ? te.clientWidth : te.clientHeight, k.dataset.resizeContents = "") : T.current = null;
    const B = C.current !== null && Date.now() - C.current < 50, J = A.current !== null;
    if (A.current = te, k.dataset.direction = B || J ? "move" : "in", B || (k.dataset.interrupted = String(!!k.style[p])), _ !== void 0) {
      const ne = k.style.transition;
      k.style.transition = "none", k.style[p] = `${_}px`, k.offsetWidth, k.style.transition = ne;
    } else k.style[p] = `${k.getBoundingClientRect()[p]}px`;
  }, U = (te) => {
    const k = w.current;
    if (!k || A.current !== te) return;
    const B = T.current ?? (p === "width" ? te.clientWidth : te.clientHeight);
    k.style[p] = `${B}px`;
  }, L = (te) => {
    const k = w.current;
    Ou(() => {
      k && A.current === te && (delete k.dataset.resizeContents, k.style[p] = "");
    });
  }, Q = (te) => {
    const k = w.current, B = !A.current || A.current === te;
    !k || !B || (delete k.dataset.resizeContents, A.current = null, C.current = Date.now(), k.dataset.direction = "out", k.dataset.interrupted = String(!!k.style[p]), k.style[p] = `${k.getBoundingClientRect()[p]}px`);
  }, ee = () => {
    const te = w.current;
    te && !A.current && (te.style[p] = "0");
  }, I = () => {
    Ou(() => {
      const te = w.current;
      te && !A.current && (te.style[p] = "");
    });
  };
  return /* @__PURE__ */ (0, b.jsx)(a, {
    ref: w,
    className: De(ip.Layout, c),
    style: H,
    "data-item-anchor": g,
    "data-clip": d,
    "data-dimension": p,
    children: /* @__PURE__ */ (0, b.jsx)(Mu, {
      as: a,
      className: De(ip.TransitionItem, l),
      insertMethod: u,
      enterDuration: R,
      exitDuration: N,
      preventInitialTransition: h,
      disableAnimations: m,
      onEnter: D,
      onEnterActive: U,
      onEnterComplete: L,
      onExit: Q,
      onExitActive: ee,
      onExitComplete: I,
      children: r
    })
  });
}
var Nf = 300, VA = 300, FA = 100, XA = 200;
function YA({ initial: e, enter: a, exit: r, forceCompositeLayer: l, layoutEnter: u, layoutExit: c, layoutMove: d }) {
  const h = Mf(e), m = Mf(a), g = Mf(r), p = [
    h,
    m,
    g
  ].some((L) => L !== "none"), _ = a?.duration ?? VA, S = r?.duration ?? XA, w = a?.delay ?? FA, A = r?.delay ?? 0, T = u?.duration ?? Nf, C = c?.duration ?? Nf, R = d?.duration ?? Nf, N = u?.delay ?? 0, H = c?.delay ?? 0, D = d?.delay ?? 0, U = LA({
    "tg-will-change": l ? "transform, opacity" : "auto",
    "tg-enter-opacity": xf(a?.opacity ?? 1),
    "tg-enter-transform": m,
    "tg-enter-filter": Rf(a),
    "tg-enter-duration": Mn(_),
    "tg-enter-delay": Mn(w),
    "tg-enter-timing-function": a?.timingFunction ?? (p ? "var(--cubic-enter)" : "ease"),
    "tg-exit-opacity": xf(r?.opacity ?? 0),
    "tg-exit-transform": g,
    "tg-exit-filter": Rf(r),
    "tg-exit-duration": Mn(S),
    "tg-exit-delay": Mn(A),
    "tg-exit-timing-function": r?.timingFunction ?? (p ? "var(--cubic-exit)" : "ease"),
    "tg-initial-opacity": xf(e?.opacity ?? r?.opacity ?? 0),
    "tg-initial-transform": h === "none" ? g : h,
    "tg-initial-filter": Rf(e ?? r),
    "tg-layout-enter-duration": Mn(T),
    "tg-layout-enter-delay": Mn(N),
    "tg-layout-enter-timing-function": u?.timingFunction ?? "var(--cubic-move)",
    "tg-layout-exit-duration": Mn(C),
    "tg-layout-exit-delay": Mn(H),
    "tg-layout-exit-timing-function": c?.timingFunction ?? "var(--cubic-move)",
    "tg-layout-move-duration": Mn(R),
    "tg-layout-move-delay": Mn(D),
    "tg-layout-move-timing-function": d?.timingFunction ?? "var(--cubic-move)"
  });
  return {
    enterTotalDuration: Math.max(w + _, N + T, D + R),
    exitTotalDuration: Math.max(A + S, H + C, D + R),
    variables: U
  };
}
var WA = "_Theme_1ewnz_2", QA = "_Portal_1ewnz_35", KA = "_Tooltip_1ewnz_41", JA = "_SharingTooltip_1ewnz_51", e8 = "_HideHint_1ewnz_58", t8 = "_SharingHint_1ewnz_68", n8 = "_HideHintContent_1ewnz_74", a8 = "_HideHintText_1ewnz_80", i8 = "_Shortcut_1ewnz_85", Tt = {
  Theme: WA,
  Portal: QA,
  Tooltip: KA,
  SharingTooltip: JA,
  HideHint: e8,
  SharingHint: t8,
  HideHintContent: n8,
  HideHintText: a8,
  Shortcut: i8
}, r8 = "_Widget_qytpw_1", o8 = "_LandingShadow_qytpw_46", l8 = "_WidgetEntrance_qytpw_56", u8 = "_WidgetExit_qytpw_69", s8 = "_Shell_qytpw_82", c8 = "_ShellControls_qytpw_114", f8 = "_Launcher_qytpw_124", d8 = "_LauncherRow_qytpw_147", h8 = "_LauncherLabel_qytpw_151", m8 = "_CornerTarget_qytpw_161", v8 = "_Panel_qytpw_191", p8 = "_LogoButton_qytpw_191", g8 = "_ToolbarPanel_qytpw_231", y8 = "_ShellContent_qytpw_236", b8 = "_ShellLayout_qytpw_240", _8 = "_LauncherLogo_qytpw_313", S8 = "_blossomEntrance_qytpw_1", E8 = "_Composer_qytpw_345", w8 = "_Textarea_qytpw_361", T8 = "_ComposerFooter_qytpw_399", C8 = "_ComposerTooltip_qytpw_404", A8 = "_ComposerArrow_qytpw_410", x8 = "_SendButton_qytpw_423", O8 = "_LauncherDismissButton_qytpw_477", M8 = "_SharingClose_qytpw_579", Me = {
  Widget: r8,
  LandingShadow: o8,
  WidgetEntrance: l8,
  WidgetExit: u8,
  Shell: s8,
  ShellControls: c8,
  Launcher: f8,
  LauncherRow: d8,
  LauncherLabel: h8,
  CornerTarget: m8,
  Panel: v8,
  LogoButton: p8,
  ToolbarPanel: g8,
  ShellContent: y8,
  ShellLayout: b8,
  LauncherLogo: _8,
  blossomEntrance: S8,
  Composer: E8,
  Textarea: w8,
  ComposerFooter: T8,
  ComposerTooltip: C8,
  ComposerArrow: A8,
  SendButton: x8,
  LauncherDismissButton: O8,
  SharingClose: M8
}, un = {
  editorWidgetCorner: "oai/sites-toolbar/corner",
  editorWidgetMobileAnchor: "oai/sites-toolbar/mobileAnchor",
  editorWidgetInteracted: "oai/sites-toolbar/interacted",
  editorWidgetHideHintSeen: "oai/sites-toolbar/hideHintSeen"
}, rp = {
  parse: (e) => e === "true",
  serialize: (e) => String(e)
}, op = {
  [un.editorWidgetCorner]: {
    parse: (e) => e === "top-left" || e === "top-right" || e === "bottom-left" || e === "bottom-right" ? e : "bottom-right",
    serialize: (e) => e
  },
  [un.editorWidgetMobileAnchor]: {
    parse: (e) => e === "top-left" || e === "top-right" || e === "bottom-left" || e === "bottom-right" ? e : "bottom-center",
    serialize: (e) => e
  },
  [un.editorWidgetInteracted]: rp,
  [un.editorWidgetHideHintSeen]: rp
};
function R8() {
  try {
    return localStorage;
  } catch {
    return null;
  }
}
function ab(e = R8()) {
  return {
    read: (a) => {
      let r = null;
      try {
        r = e?.getItem(a) ?? null;
      } catch {
      }
      return op[a].parse(r);
    },
    write: (a, r) => {
      try {
        e?.setItem(a, op[a].serialize(r));
      } catch {
      }
    }
  };
}
function ib({ storage: e, reducedMotion: a = !1, initiallyHidden: r = !1 } = {}) {
  const l = ab(e);
  return pd()((u, c) => {
    const d = (h) => {
      u((m) => {
        const g = h(m.state);
        return g === m.state ? m : {
          state: g,
          showHideHint: (g.view === "hiding" || g.view === "hidden") && m.showHideHint,
          showLogoEntrance: g.view === "launcher" && m.showLogoEntrance
        };
      });
    };
    return {
      state: {
        view: r ? "hidden" : "launcher",
        draft: ""
      },
      composerMode: "edit",
      corner: l.read(un.editorWidgetCorner),
      hasInteracted: l.read(un.editorWidgetInteracted),
      hasSeenHideHint: l.read(un.editorWidgetHideHintSeen),
      showHideHint: !1,
      showLogoEntrance: !r && !a,
      actions: {
        setCorner: (h) => {
          c().corner !== h && u({ corner: h }), l.write(un.editorWidgetCorner, h);
        },
        markInteracted: () => {
          c().hasInteracted || (u({ hasInteracted: !0 }), l.write(un.editorWidgetInteracted, !0));
        },
        markHideHintSeen: () => {
          const h = c();
          h.hasSeenHideHint || !h.showHideHint || h.state.view !== "hidden" || (u({ hasSeenHideHint: !0 }), l.write(un.editorWidgetHideHintSeen, !0));
        },
        finishLogoEntrance: () => {
          c().showLogoEntrance && u({ showLogoEntrance: !1 });
        },
        open: (h = "edit") => u((m) => m.state.view === "launcher" ? {
          state: {
            ...m.state,
            view: "composer"
          },
          composerMode: h,
          showHideHint: !1,
          showLogoEntrance: !1
        } : m),
        collapse: () => d((h) => h.view === "composer" ? {
          ...h,
          view: "launcher"
        } : h),
        changeDraft: (h) => d((m) => m.view === "composer" ? {
          ...m,
          draft: h
        } : m),
        hide: () => u((h) => {
          const { state: m } = h;
          return m.view !== "launcher" && m.view !== "composer" ? h : {
            state: {
              ...m,
              view: "hiding"
            },
            showHideHint: !h.hasSeenHideHint,
            showLogoEntrance: !1
          };
        }),
        dismiss: () => d((h) => h.view === "launcher" || h.view === "composer" ? {
          ...h,
          view: "dismissed"
        } : h),
        finishHide: () => d((h) => h.view === "hiding" ? {
          ...h,
          view: "hidden"
        } : h),
        restoreHidden: () => d((h) => h.view === "hiding" || h.view === "hidden" ? {
          view: "launcher",
          draft: h.draft
        } : h),
        beginHandoff: ({ allowEmpty: h = !1 } = {}) => {
          const { state: m } = c();
          return m.view !== "composer" || !h && !m.draft.trim() ? null : (u({ state: {
            view: "handoff",
            request: m.draft
          } }), m.draft);
        },
        finishHandoff: () => d((h) => h.view === "handoff" ? {
          view: "launcher",
          draft: h.request
        } : h)
      }
    };
  });
}
var N8 = 1e3, lp = 3e3, D8 = 480, z8 = 1500, H8 = 2e3, L8 = 150;
function j8(e, a, r, l = !1) {
  const [u, c] = (0, y.useState)(e && a ? "away" : "tucked"), [d, h] = (0, y.useState)(!1), [m, g] = (0, y.useState)(!1), [p, _] = (0, y.useState)(!1), [S, w] = (0, y.useState)(e && a), [A, T] = (0, y.useState)(!1), [C, R] = (0, y.useState)(!1), N = (0, y.useRef)(!0), H = (0, y.useRef)(e && a), D = d || p;
  return (0, y.useEffect)(() => {
    if (!e) {
      T(!1), R(!1);
      return;
    }
    if (C) return;
    if (A) {
      if (d || m) return;
      const L = window.setTimeout(() => T(!1), L8);
      return () => window.clearTimeout(L);
    }
    if (!d) return;
    const U = window.setTimeout(() => T(!0), H8);
    return () => window.clearTimeout(U);
  }, [
    e,
    d,
    m,
    A,
    C
  ]), (0, y.useEffect)(() => {
    if (!e) {
      N.current = !0, H.current = !1, c("tucked"), h(!1), g(!1), _(!1), w(!1);
      return;
    }
    if (D) {
      H.current = !1, N.current = !1, w(!0), c("expanded");
      return;
    }
    if (m || H.current || (c("tucked"), !a)) return;
    if (r) {
      if (N.current = !1, l) {
        const L = window.setTimeout(() => c("away"), lp);
        return () => window.clearTimeout(L);
      }
      c("away");
      return;
    }
    const U = [];
    return N.current ? U.push(window.setTimeout(() => {
      N.current = !1, c("expanded"), U.push(window.setTimeout(() => c("away"), D8));
    }, l ? lp : N8)) : U.push(window.setTimeout(() => c("away"), z8)), () => U.forEach((L) => window.clearTimeout(L));
  }, [
    e,
    a,
    D,
    m,
    r,
    l
  ]), {
    phase: u,
    quiet: S,
    hoverHintVisible: A,
    hintDismissed: C,
    dismissHint: () => {
      R(!0), T(!1), g(!1);
    },
    hintHandlers: {
      onContentPointerEnter: (U) => {
        U.pointerType !== "touch" && g(!0);
      },
      onContentPointerLeave: () => g(!1)
    },
    targetHandlers: {
      onPointerEnter: (U) => {
        U.pointerType !== "touch" && (R(!1), h(!0));
      },
      onPointerLeave: () => h(!1),
      onFocus: () => _(!0),
      onBlur: () => _(!1)
    }
  };
}
var B8 = 5, U8 = 520, P8 = 16, Z8 = 24, G8 = 137, k8 = 36, mu = 32, up = 280, I8 = 20;
function sp(e, a, r, l) {
  return `${a < l / 2 ? "top" : "bottom"}-${e < r / 2 ? "left" : "right"}`;
}
function $8({ corner: e, onCornerChange: a, onInteract: r, preserveChildClickTargets: l = !1 }) {
  const [u, c] = (0, y.useState)(null), [d, h] = (0, y.useState)(null), [m, g] = (0, y.useState)(null), [p, _] = (0, y.useState)(!1), [S, w] = (0, y.useState)({
    width: G8,
    height: k8,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight
  }), A = (0, y.useRef)(null), T = (0, y.useRef)(null), C = (0, y.useRef)(!1), R = S.viewportWidth <= U8 ? P8 : Z8;
  (0, y.useLayoutEffect)(() => {
    function B() {
      const ne = d?.getBoundingClientRect();
      w((me) => {
        const z = {
          width: ne?.width ?? me.width,
          height: ne?.height ?? me.height,
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight
        };
        return z.width === me.width && z.height === me.height && z.viewportWidth === me.viewportWidth && z.viewportHeight === me.viewportHeight ? me : z;
      });
    }
    B();
    const J = new ResizeObserver(() => (0, br.flushSync)(B));
    return d && J.observe(d), window.addEventListener("resize", B), () => {
      J.disconnect(), window.removeEventListener("resize", B);
    };
  }, [d]), (0, y.useLayoutEffect)(() => () => {
    T.current !== null && window.clearTimeout(T.current);
  }, []);
  function N() {
    T.current !== null && window.clearTimeout(T.current), _(!0), T.current = window.setTimeout(() => {
      T.current = null, _(!1);
    }, up + I8);
  }
  function H(B) {
    return {
      x: B.endsWith("left") ? R : Math.max(R, S.viewportWidth - S.width - R),
      y: B.startsWith("top") ? R : Math.max(R, S.viewportHeight - S.height - R)
    };
  }
  function D(B) {
    if (B.pointerType === "touch" || B.button !== 0 || !B.isPrimary || A.current) return;
    const J = u?.getBoundingClientRect();
    J && (C.current = !1, T.current !== null && window.clearTimeout(T.current), T.current = null, _(!1), A.current = {
      pointerId: B.pointerId,
      x: B.clientX,
      y: B.clientY,
      start: {
        x: J.x,
        y: J.y
      },
      moved: !1,
      candidate: e
    }, (l && B.target instanceof Element ? B.target : B.currentTarget).setPointerCapture(B.pointerId));
  }
  function U(B) {
    const J = A.current;
    if (!J || J.pointerId !== B.pointerId) return;
    const ne = B.clientX - J.x, me = B.clientY - J.y;
    if (!J.moved && Math.hypot(ne, me) < B8) return;
    J.moved || (l && B.currentTarget.setPointerCapture(B.pointerId), r()), J.moved = !0;
    const z = {
      x: Math.max(0, Math.min(J.start.x + ne, S.viewportWidth - S.width)),
      y: Math.max(0, Math.min(J.start.y + me, S.viewportHeight - S.height))
    };
    J.candidate = sp(z.x + S.width / 2, z.y + S.height / 2, S.viewportWidth, S.viewportHeight), g(z);
  }
  function L(B) {
    const J = A.current;
    !J || J.pointerId !== B.pointerId || (A.current = null, C.current = J.moved, J.moved && (a(J.candidate), N(), g(null)), B.currentTarget.hasPointerCapture(B.pointerId) && B.currentTarget.releasePointerCapture(B.pointerId));
  }
  function Q(B) {
    !A.current || A.current.pointerId !== B.pointerId || (C.current = A.current.moved, A.current = null, N(), g(null), B.currentTarget.hasPointerCapture(B.pointerId) && B.currentTarget.releasePointerCapture(B.pointerId));
  }
  function ee(B) {
    C.current && B.detail !== 0 && (B.preventDefault(), B.stopPropagation()), C.current = !1;
  }
  function I(B) {
    if (B.altKey || B.ctrlKey || B.metaKey || B.shiftKey || A.current) return;
    let J;
    switch (B.key) {
      case "ArrowLeft":
        J = e.startsWith("top") ? "top-left" : "bottom-left";
        break;
      case "ArrowRight":
        J = e.startsWith("top") ? "top-right" : "bottom-right";
        break;
      case "ArrowUp":
        J = e.endsWith("left") ? "top-left" : "top-right";
        break;
      case "ArrowDown":
        J = e.endsWith("left") ? "bottom-left" : "bottom-right";
        break;
      default:
        return;
    }
    B.preventDefault(), r(), a(J), N();
  }
  const te = m ?? H(e), k = H(m ? sp(m.x + S.width / 2, m.y + S.height / 2, S.viewportWidth, S.viewportHeight) : e);
  return {
    widgetRef: c,
    contentRef: h,
    snapping: p,
    dragging: m !== null,
    style: {
      left: te.x,
      top: te.y,
      "--widget-snap-duration": `${up}ms`,
      "--widget-surface-width": `${S.width}px`,
      "--widget-surface-height": `${S.height}px`,
      "--corner-x-direction": e.endsWith("left") ? -1 : 1,
      "--corner-y-direction": e.startsWith("top") ? -1 : 1,
      "--tuck-x": `${(e.endsWith("left") ? -mu : S.viewportWidth - mu) - te.x}px`,
      "--tuck-y": `${(e.startsWith("top") ? -mu : S.viewportHeight - mu) - te.y}px`
    },
    shadowStyle: {
      left: k.x,
      top: k.y,
      width: S.width,
      height: S.height
    },
    dragHandlers: {
      onPointerDown: D,
      onPointerMove: U,
      onPointerUp: L,
      onPointerCancel: Q,
      onLostPointerCapture(B) {
        (!l || B.target === B.currentTarget) && Q(B);
      },
      onClickCapture: ee,
      onKeyDown: I
    }
  };
}
var rb = "(prefers-reduced-motion: reduce)";
function q8(e) {
  const a = window.matchMedia(rb);
  return a.addEventListener("change", e), () => a.removeEventListener("change", e);
}
function V8() {
  return window.matchMedia(rb).matches;
}
function ob() {
  return (0, y.useSyncExternalStore)(q8, V8);
}
var lb = "(hover: hover) and (pointer: fine)";
function F8(e) {
  const a = window.matchMedia(lb);
  return a.addEventListener("change", e), () => a.removeEventListener("change", e);
}
function X8() {
  return window.matchMedia(lb).matches;
}
function Y8() {
  return (0, y.useSyncExternalStore)(F8, X8);
}
function W8(e) {
  return /* @__PURE__ */ (0, b.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...e,
    children: /* @__PURE__ */ (0, b.jsx)("path", { d: "M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41422L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" })
  });
}
function pr(e) {
  return /* @__PURE__ */ (0, b.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...e,
    children: /* @__PURE__ */ (0, b.jsx)("path", {
      fillRule: "evenodd",
      d: "M5.636 5.636a1 1 0 0 1 1.414 0l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 0-1.414Z",
      clipRule: "evenodd"
    })
  });
}
function Q8({ accountId: e, chatgptOrigin: a, projectId: r }) {
  const l = new URL(r ? `/sites/${encodeURIComponent(r)}/edit` : "/sites", a);
  return r && e && l.searchParams.set("account_id", e), l;
}
function K8({ accountId: e, chatgptOrigin: a, projectId: r }) {
  if (!r) return null;
  const l = new URL(`/sites/${encodeURIComponent(r)}/settings`, a);
  return e && l.searchParams.set("account_id", e), l;
}
function gr(e, a) {
  return a === null ? e : `[${e.replaceAll(`\r
`, " ").replaceAll("\r", " ").replaceAll(`
`, " ").replaceAll("\\", "\\\\").replaceAll("[", "\\[").replaceAll("](", "]\\(").replaceAll("]", "\\]")}](sites-project://${encodeURIComponent(a)})`;
}
function Wu({ accountId: e, chatgptOrigin: a, query: r, editContext: l }) {
  const u = new URL("/", a);
  return e && u.searchParams.set("account_id", e), l?.chatgpt_conversation_id && u.searchParams.set("resume_conversation_id", l.chatgpt_conversation_id), u.searchParams.set("surface", "work"), u.searchParams.set("prompt", r), u.searchParams.set("promptSource", "codex-app"), u.searchParams.set("site_edit_source", "widget"), u;
}
function rd({ accountId: e, browserUrl: a, chatgptOrigin: r, query: l, isDefaultPrompt: u = !1, projectId: c, editContext: d }) {
  if (c) {
    const m = Q8({
      accountId: e,
      chatgptOrigin: r,
      projectId: c
    });
    return d?.chatgpt_conversation_id && m.searchParams.set("conversation_id", d.chatgpt_conversation_id), d?.codex_thread_id && m.searchParams.set("codex_thread_id", d.codex_thread_id), u || m.searchParams.set("prompt", l), m.searchParams.set("browser_url", a), m;
  }
  const h = new URL("/codex/open-app", r);
  return h.searchParams.set("app_brand", "chatgpt"), h.searchParams.set("fallback", "work"), e && h.searchParams.set("account_id", e), d?.codex_thread_id && h.searchParams.set("codex_thread_id", d.codex_thread_id), d?.chatgpt_conversation_id && h.searchParams.set("chatgpt_conversation_id", d.chatgpt_conversation_id), h.searchParams.set("q", l), h.searchParams.set("browserUrl", a), h;
}
function ub(e) {
  const [a, r] = (0, y.useState)(null);
  return (0, y.useLayoutEffect)(() => {
    if (!a) return;
    let l = 0;
    const u = () => {
      cancelAnimationFrame(l), l = requestAnimationFrame(() => {
        const d = e.current?.getBoundingClientRect();
        if (!d) return;
        const h = a.getBoundingClientRect();
        a.style.setProperty("--closed-top", `${d.top - h.top}px`), a.style.setProperty("--closed-left", `${d.left - h.left}px`), a.style.setProperty("--closed-right", `${h.right - d.right}px`), a.style.setProperty("--closed-bottom", `${h.bottom - d.bottom}px`), a.hasAttribute("data-mobile-widget-positioned") || (getComputedStyle(a, "::before").inset, a.dataset.mobileWidgetPositioned = "");
      });
    }, c = new ResizeObserver(u);
    return c.observe(a), e.current && c.observe(e.current), u(), window.addEventListener("resize", u), window.visualViewport?.addEventListener("resize", u), window.visualViewport?.addEventListener("scroll", u), () => {
      cancelAnimationFrame(l), c.disconnect(), window.removeEventListener("resize", u), window.visualViewport?.removeEventListener("resize", u), window.visualViewport?.removeEventListener("scroll", u);
    };
  }, [a, e]), {
    menuRef: r,
    menuMounted: a !== null
  };
}
var J8 = [
  "bottom-center",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right"
], e5 = 1.25;
function sb(e, a) {
  return {
    x: e === "bottom-center" ? (a.left + a.right) / 2 : e.endsWith("left") ? a.left : a.right,
    y: e.startsWith("top") ? a.top : a.bottom
  };
}
function t5(e, a) {
  let r = "bottom-center", l = 1 / 0;
  for (const u of J8) {
    const c = sb(u, a), d = u === "bottom-center" ? e5 : 1, h = Math.hypot(e.x - c.x, e.y - c.y) / d;
    h < l && (r = u, l = h);
  }
  return r;
}
var cp = 52, yo = 16, n5 = 5, fp = 280;
function cb(e, a) {
  const r = (0, y.useRef)(null), [l] = (0, y.useState)(ab), [u, c] = (0, y.useState)(() => l.read(un.editorWidgetMobileAnchor)), [d, h] = (0, y.useState)(null), [m, g] = (0, y.useState)(!1), p = (0, y.useRef)(null), [_, S] = (0, y.useState)({
    left: yo,
    top: yo,
    right: window.innerWidth - yo,
    bottom: window.innerHeight - cp - yo
  }), [w, A] = (0, y.useState)(!1), [T, C] = (0, y.useState)(!1), R = (0, y.useRef)(null), N = (0, y.useRef)(!1), H = (0, y.useRef)(!1);
  (0, y.useLayoutEffect)(() => () => {
    p.current !== null && window.clearTimeout(p.current);
  }, []);
  function D() {
    p.current !== null && window.clearTimeout(p.current), g(!0), p.current = window.setTimeout(() => {
      p.current = null, g(!1);
    }, fp + 20);
  }
  const U = (0, y.useCallback)(() => {
    const I = window.visualViewport, te = r.current ? getComputedStyle(r.current) : null, k = (q) => Math.max(yo, parseFloat(te?.getPropertyValue(`--safe-${q}`) ?? "0") || 0), B = (I?.offsetLeft ?? 0) + k("left"), J = (I?.offsetTop ?? 0) + k("top"), ne = r.current?.offsetWidth ?? 0, me = r.current?.offsetHeight ?? cp, z = {
      left: B,
      top: J,
      right: Math.max(B, (I?.offsetLeft ?? 0) + (I?.width ?? window.innerWidth) - ne - k("right")),
      bottom: Math.max(J, (I?.offsetTop ?? 0) + (I?.height ?? window.innerHeight) - me - k("bottom"))
    };
    S((q) => q.left === z.left && q.top === z.top && q.right === z.right && q.bottom === z.bottom ? q : z);
  }, []);
  (0, y.useLayoutEffect)(U), (0, y.useLayoutEffect)(() => {
    const I = new ResizeObserver(U);
    return r.current && I.observe(r.current), window.addEventListener("resize", U), window.visualViewport?.addEventListener("resize", U), window.visualViewport?.addEventListener("scroll", U), () => {
      I.disconnect(), window.removeEventListener("resize", U), window.visualViewport?.removeEventListener("resize", U), window.visualViewport?.removeEventListener("scroll", U);
    };
  }, [U]);
  function L(I) {
    return {
      x: Math.max(_.left, Math.min(I.x, _.right)),
      y: Math.max(_.top, Math.min(I.y, _.bottom))
    };
  }
  const Q = L(d ?? sb(u, _));
  function ee(I, te = !1) {
    const k = R.current;
    if (!(!k || k.id !== I.pointerId)) {
      if (R.current = null, H.current = !te && !k.moved && I.pointerType === "touch", N.current = te || k.moved || H.current, !te && k.moved) {
        const B = t5(L({
          x: k.start.x + I.clientX - k.pointer.x,
          y: k.start.y + I.clientY - k.pointer.y
        }), _);
        c(B), l.write(un.editorWidgetMobileAnchor, B);
      }
      k.moved && D(), h(null), A(!1), C(!1), I.currentTarget.hasPointerCapture(I.pointerId) && I.currentTarget.releasePointerCapture(I.pointerId);
    }
  }
  return {
    ref: r,
    anchor: u,
    style: {
      left: Q.x,
      top: Q.y,
      "--widget-snap-duration": `${fp}ms`
    },
    dragging: w,
    pressed: T,
    snapping: m,
    dragHandlers: {
      onPointerDown(I) {
        if (!I.isPrimary || I.button !== 0 || R.current) return;
        const te = r.current?.getBoundingClientRect(), k = te ? {
          x: te.x,
          y: te.y
        } : Q;
        p.current !== null && window.clearTimeout(p.current), p.current = null, g(!1), C(!0), h(k), N.current = !1, H.current = !1, R.current = {
          id: I.pointerId,
          pointer: {
            x: I.clientX,
            y: I.clientY
          },
          start: k,
          moved: !1
        }, I.target instanceof Element && I.target.setPointerCapture(I.pointerId);
      },
      onPointerMove(I) {
        const te = R.current;
        if (!te || te.id !== I.pointerId) return;
        const k = I.clientX - te.pointer.x, B = I.clientY - te.pointer.y;
        !te.moved && Math.hypot(k, B) < n5 || (te.moved || (I.currentTarget.setPointerCapture(I.pointerId), e()), te.moved = !0, A(!0), h(L({
          x: te.start.x + k,
          y: te.start.y + B
        })));
      },
      onPointerUp: (I) => ee(I),
      onPointerCancel: (I) => ee(I, !0),
      onLostPointerCapture(I) {
        I.target === I.currentTarget && ee(I, !0);
      },
      onTouchEnd(I) {
        I.cancelable && I.preventDefault(), H.current && (H.current = !1, a(I));
      },
      onClickCapture(I) {
        N.current && I.detail !== 0 && (I.preventDefault(), I.stopPropagation()), N.current = !1;
      }
    }
  };
}
function fb(e) {
  return /* @__PURE__ */ (0, b.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...e,
    children: /* @__PURE__ */ (0, b.jsx)("path", { d: "M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" })
  });
}
function db(e) {
  return /* @__PURE__ */ (0, b.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...e,
    children: [/* @__PURE__ */ (0, b.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.29285 2.29289C2.68337 1.90237 3.31654 1.90237 3.70706 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3165 22.0976 20.6834 22.0976 20.2928 21.7071L17.7784 19.1927C16.2039 20.2404 14.274 21 12 21C8.84578 21 6.36056 19.541 4.55854 17.8792C2.76156 16.222 1.58474 14.312 1.01229 13.2562C0.585014 12.4681 0.585717 11.5305 1.01263 10.7432C1.59034 9.67778 2.79199 7.72646 4.63582 6.05008L2.29285 3.70711C1.90232 3.31658 1.90232 2.68342 2.29285 2.29289ZM6.05186 7.46612C4.40718 8.93862 3.30712 10.7074 2.77079 11.6965C2.66592 11.8899 2.66602 12.1102 2.77049 12.3029C3.28862 13.2585 4.34187 14.9588 5.9144 16.4089C7.48191 17.8545 9.50568 19 12 19C13.6494 19 15.0899 18.5001 16.3303 17.7445L14.396 15.8102C12.6574 16.9057 10.3323 16.6963 8.81797 15.182C7.30363 13.6676 7.09422 11.3425 8.18971 9.60397L6.05186 7.46612ZM9.67217 11.0864L12.9135 14.3278C12.0164 14.6793 10.9571 14.4927 10.2322 13.7678C9.50728 13.0429 9.32061 11.9836 9.67217 11.0864Z"
    }), /* @__PURE__ */ (0, b.jsx)("path", { d: "M10.2233 5.19987C10.7835 5.07151 11.3752 5 12 5C14.4942 5 16.518 6.1455 18.0855 7.59105C19.6581 9.04124 20.7113 10.7415 21.2294 11.6971C21.3334 11.8889 21.3338 12.1105 21.2284 12.3047C20.9449 12.8276 20.496 13.5829 19.8836 14.4005C19.5525 14.8426 19.6425 15.4693 20.0845 15.8004C20.5265 16.1315 21.1533 16.0415 21.4844 15.5995C22.1677 14.6872 22.6678 13.8459 22.9865 13.2582C23.4131 12.4717 23.4154 11.5327 22.9876 10.7438C22.4152 9.68799 21.2384 7.77798 19.4414 6.1208C17.6394 4.45899 15.1541 3 12 3C11.221 3 10.4794 3.08934 9.77657 3.25041C9.23825 3.37379 8.90186 3.9102 9.02523 4.44853C9.1486 4.98686 9.68502 5.32325 10.2233 5.19987Z" })]
  });
}
function Qd(e) {
  return /* @__PURE__ */ (0, b.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...e,
    children: /* @__PURE__ */ (0, b.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.2929 4.29291C15.0641 2.52167 17.9359 2.52167 19.7071 4.2929C21.4784 6.06414 21.4784 8.93588 19.7071 10.7071L18.7073 11.7069L11.6135 18.8007C10.8766 19.5376 9.92793 20.0258 8.89999 20.1971L4.16441 20.9864C3.84585 21.0395 3.52127 20.9355 3.29291 20.7071C3.06454 20.4788 2.96053 20.1542 3.01362 19.8356L3.80288 15.1C3.9742 14.0721 4.46243 13.1234 5.19932 12.3865L13.2929 4.29291ZM13 7.41422L6.61353 13.8007C6.1714 14.2428 5.87846 14.8121 5.77567 15.4288L5.21656 18.7835L8.57119 18.2244C9.18795 18.1216 9.75719 17.8286 10.1993 17.3865L16.5858 11L13 7.41422ZM18 9.5858L14.4142 6.00001L14.7071 5.70712C15.6973 4.71693 17.3027 4.71693 18.2929 5.70712C19.2831 6.69731 19.2831 8.30272 18.2929 9.29291L18 9.5858Z"
    })
  });
}
var a5 = "_Widget_1lfcb_1", i5 = "_Launcher_1lfcb_27", r5 = "_Action_1lfcb_28", o5 = "_EditAction_1lfcb_29", l5 = "_MoreAction_1lfcb_30", u5 = "_Menu_1lfcb_39", s5 = "_Actions_1lfcb_204", Vt = {
  Widget: a5,
  Launcher: i5,
  Action: r5,
  EditAction: o5,
  MoreAction: l5,
  Menu: u5,
  "menu-exit": "_menu-exit_1lfcb_1",
  Actions: s5
};
function c5({ accountId: e, config: a, chatgptOrigin: r, projectId: l, siteTitle: u }) {
  const c = Lo(), [d, h] = (0, y.useState)(!1), [m, g] = (0, y.useState)(a.hidden), [p] = (0, y.useState)(Ad), _ = (0, y.useRef)(!1), S = (0, y.useRef)(!1), w = cb(() => h(!1), (R) => {
    R.target instanceof Element && R.target.closest("button, a")?.click();
  }), { menuRef: A, menuMounted: T } = ub(w.ref);
  if ((0, y.useEffect)(() => {
    m || _.current || (_.current = !0, st("editor_widget_shown"));
  }, [m]), m) return null;
  const C = Wu({
    accountId: e,
    chatgptOrigin: r,
    editContext: a.edit_context,
    query: `${gr(u, l)} `
  }).toString();
  return /* @__PURE__ */ (0, b.jsxs)($u, {
    open: d,
    onOpenChange: h,
    children: [(0, br.createPortal)(/* @__PURE__ */ (0, b.jsx)(f5, {
      position: w,
      open: d,
      menuMounted: T,
      openedByPointer: S,
      editUrl: C
    }), c ?? document.body), /* @__PURE__ */ (0, b.jsx)(qu, {
      container: c,
      children: /* @__PURE__ */ (0, b.jsx)(d5, {
        ref: A,
        anchor: w.anchor,
        open: d,
        openedByPointer: S,
        editUrl: C,
        onEdit: () => h(!1),
        onHide: () => {
          h(!1), g(!0), p(!0), st("editor_widget_hidden");
        }
      })
    })]
  });
}
function f5({ position: e, open: a, menuMounted: r, openedByPointer: l, editUrl: u }) {
  const c = Ie(), d = c.formatMessage(Ge.editorWidgetMobileMenu);
  return /* @__PURE__ */ (0, b.jsx)(Fd, {
    asChild: !0,
    children: /* @__PURE__ */ (0, b.jsx)("div", {
      ref: e.ref,
      className: De(Me.Widget, Vt.Widget),
      style: e.style,
      "data-mobile-widget-dragging": e.dragging ? "" : void 0,
      "data-mobile-widget-pressed": e.pressed ? "" : void 0,
      "data-mobile-widget-snapping": e.snapping ? "" : void 0,
      "data-mobile-widget-menu-open": a ? "" : void 0,
      "data-mobile-widget-menu-mounted": r ? "" : void 0,
      dir: Ba(c.locale),
      lang: c.locale,
      children: /* @__PURE__ */ (0, b.jsxs)("div", {
        className: Vt.Launcher,
        role: "group",
        "aria-label": d,
        inert: a,
        onPointerDownCapture: () => {
          l.current = !0;
        },
        onKeyDown: () => {
          l.current = !1;
        },
        ...e.dragHandlers,
        children: [
          /* @__PURE__ */ (0, b.jsx)(Od, {
            src: Cd,
            alt: "",
            width: 24,
            height: 24
          }),
          /* @__PURE__ */ (0, b.jsx)(hb, {
            className: Vt.EditAction,
            href: u
          }),
          /* @__PURE__ */ (0, b.jsx)(Xd, {
            asChild: !0,
            children: /* @__PURE__ */ (0, b.jsx)("button", {
              type: "button",
              className: Vt.MoreAction,
              "aria-label": d,
              title: d,
              children: /* @__PURE__ */ (0, b.jsx)(fb, {
                "aria-hidden": "true",
                focusable: "false"
              })
            })
          })
        ]
      })
    })
  });
}
function d5({ ref: e, anchor: a, open: r, openedByPointer: l, editUrl: u, onEdit: c, onHide: d }) {
  const h = Ie(), m = Ba(h.locale);
  return /* @__PURE__ */ (0, b.jsx)(Vu, {
    ref: e,
    className: De(Me.Widget, Vt.Menu),
    side: a.startsWith("top") ? "bottom" : "top",
    align: a === "bottom-center" ? "center" : a.endsWith("left") !== (m === "rtl") ? "start" : "end",
    sideOffset: -52,
    collisionPadding: 16,
    updatePositionStrategy: "always",
    inert: !r,
    onOpenAutoFocus: (g) => {
      g.preventDefault(), g.target instanceof HTMLElement && (l.current ? g.target : g.target.querySelector("a, button") ?? g.target).focus({ preventScroll: !0 }), l.current = !1;
    },
    "aria-label": h.formatMessage(Ge.editorWidgetMobileMenu),
    dir: m,
    lang: h.locale,
    children: /* @__PURE__ */ (0, b.jsxs)("div", {
      className: Vt.Actions,
      children: [
        /* @__PURE__ */ (0, b.jsx)(hb, {
          className: Vt.Action,
          href: u,
          onClick: c,
          showIcon: !0
        }),
        /* @__PURE__ */ (0, b.jsxs)("button", {
          type: "button",
          className: Vt.Action,
          onClick: d,
          children: [/* @__PURE__ */ (0, b.jsx)(db, {
            "aria-hidden": "true",
            focusable: "false"
          }), h.formatMessage(Ge.editorWidgetHideAction)]
        }),
        /* @__PURE__ */ (0, b.jsx)(nd, {
          asChild: !0,
          children: /* @__PURE__ */ (0, b.jsxs)("button", {
            type: "button",
            className: Vt.Action,
            children: [/* @__PURE__ */ (0, b.jsx)(pr, {
              "aria-hidden": "true",
              focusable: "false"
            }), h.formatMessage(Ge.editorWidgetMobileClose)]
          })
        })
      ]
    })
  });
}
function hb({ className: e, href: a, onClick: r, showIcon: l = !1 }) {
  const u = Ie();
  return /* @__PURE__ */ (0, b.jsxs)("a", {
    className: e,
    href: a,
    target: "_blank",
    rel: "noopener noreferrer",
    draggable: !1,
    onClick: () => {
      r?.(), st("editor_widget_open_in_chatgpt_clicked");
    },
    children: [l && /* @__PURE__ */ (0, b.jsx)(Qd, {
      "aria-hidden": "true",
      focusable: "false"
    }), u.formatMessage(Ge.editorWidgetLaunchAction)]
  });
}
var oe = {
  openChatGPT: {
    id: "sites.dispatch.widget.toolbar.open_chatgpt",
    defaultMessage: "Open ChatGPT",
    description: "Tooltip and accessible label for opening an empty Edit or Remix composer in ChatGPT."
  },
  remixOpenPrompt: {
    id: "sites.dispatch.widget.toolbar.remix_open_prompt",
    defaultMessage: "Remix {site}",
    description: "Editable prefill when opening ChatGPT from an empty remix composer. site is the complete Site reference."
  },
  privateHint: {
    id: "sites.dispatch.widget.toolbar.private_hint_status",
    defaultMessage: "This site is private.",
    description: "Access statement in a first-use tooltip. A separate sharing action appears below it."
  },
  invitedHint: {
    id: "sites.dispatch.widget.toolbar.invited_hint_status",
    defaultMessage: "Only invited people can view.",
    description: "Access statement for a Site shared with invited people or groups. A separate manage-access action appears below it."
  },
  workspaceHint: {
    id: "sites.dispatch.widget.toolbar.workspace_hint_status",
    defaultMessage: "Everyone in {workspace} can view.",
    description: "Workspace-wide access statement in a tooltip. A separate manage-access action appears below it."
  },
  publicHint: {
    id: "sites.dispatch.widget.toolbar.public_hint_status",
    defaultMessage: "Anyone with the link can view.",
    description: "Public access statement in a tooltip. A separate manage-access action appears below it."
  },
  shareHintAction: {
    id: "sites.dispatch.widget.toolbar.share_hint_action",
    defaultMessage: "Click to share.",
    description: "Second line of a sharing tooltip, below a standalone private-access statement. Describes clicking the toolbar's sharing button."
  },
  manageHintAction: {
    id: "sites.dispatch.widget.toolbar.manage_hint_action",
    defaultMessage: "Click to manage.",
    description: "Second line of a sharing tooltip, below a standalone access statement. Describes clicking the toolbar button to manage Site access."
  },
  remixComposerPlaceholder: {
    id: "sites.dispatch.widget.toolbar.remix_composer_placeholder",
    defaultMessage: "Describe your remix",
    description: "Placeholder and accessible label for the Site remix composer."
  },
  publicDescription: {
    id: "sites.dispatch.widget.toolbar.publicDescription",
    defaultMessage: "Anyone on the internet with the link can view",
    description: "Description for the publicDescription sharing option."
  },
  workspaceDescription: {
    id: "sites.dispatch.widget.toolbar.workspaceDescription",
    defaultMessage: "Workspace members with the link can view",
    description: "Description for the workspaceDescription sharing option."
  },
  privateDescription: {
    id: "sites.dispatch.widget.toolbar.privateDescription",
    defaultMessage: "You and people you’ve added can view",
    description: "Description for the privateDescription sharing option."
  },
  viewerDescription: {
    id: "sites.dispatch.widget.toolbar.viewerDescription",
    defaultMessage: "View and use the site.",
    description: "Description for the viewerDescription sharing option."
  },
  editorDescription: {
    id: "sites.dispatch.widget.toolbar.editorDescription",
    defaultMessage: "Edit the site and publish updates. Access, download, change, or delete its data.",
    description: "Description for the editorDescription sharing option."
  },
  admins: {
    id: "sites.dispatch.widget.toolbar.admins",
    defaultMessage: "Admins only",
    description: "Legacy Site access limited to owners and workspace administrators."
  },
  menu: {
    id: "sites.dispatch.widget.toolbar.menu",
    defaultMessage: "Toolbar menu",
    description: "Open toolbar actions."
  },
  role: {
    id: "sites.dispatch.widget.toolbar.role",
    defaultMessage: "Access for {name}",
    description: "Accessible name for a sharing role selector."
  },
  privateTunnels: {
    id: "sites.dispatch.widget.toolbar.private_tunnels",
    defaultMessage: "This site connects to private resources. Check what it exposes before sharing publicly.",
    description: "Warning when a Site with private connectivity can be made public."
  },
  label: {
    id: "sites.dispatch.widget.toolbar.label",
    defaultMessage: "Site toolbar",
    description: "Accessible name of the Site sharing toolbar."
  },
  private: {
    id: "sites.dispatch.widget.toolbar.private",
    defaultMessage: "Private",
    description: "Toolbar label for a Site shared only with its owner."
  },
  public: {
    id: "sites.dispatch.widget.toolbar.public",
    defaultMessage: "Public",
    description: "Toolbar label for a publicly accessible Site."
  },
  workspace: {
    id: "sites.dispatch.widget.toolbar.workspace",
    defaultMessage: "Workspace",
    description: "Fallback label for workspace-wide Site access."
  },
  people: {
    id: "sites.dispatch.widget.toolbar.people",
    defaultMessage: "{count, plural, one {# person} other {# people}}",
    description: "Number of people explicitly allowed to access a Site, including its owner."
  },
  inviteOnly: {
    id: "sites.dispatch.widget.toolbar.invite_only",
    defaultMessage: "Invite only",
    description: "Site shared with access groups, whose membership can overlap."
  },
  share: {
    id: "sites.dispatch.widget.toolbar.share",
    defaultMessage: "Share",
    description: "Open the Site sharing dialog."
  },
  title: {
    id: "sites.dispatch.widget.toolbar.title",
    defaultMessage: "Share ‘{title}’",
    description: "Site sharing dialog heading."
  },
  edit: {
    id: "sites.dispatch.widget.toolbar.edit",
    defaultMessage: "Edit this site",
    description: "Open this Site in ChatGPT for editing."
  },
  remix: {
    id: "sites.dispatch.widget.toolbar.remix",
    defaultMessage: "Remix",
    description: "Start a new ChatGPT conversation to remix the Site."
  },
  settings: {
    id: "sites.dispatch.widget.toolbar.settings",
    defaultMessage: "Settings",
    description: "Owner-only Site toolbar menu item. Opens this Site's settings page on ChatGPT web in a new tab. Short label beside a gear icon."
  },
  hide: {
    id: "sites.dispatch.widget.toolbar.hide",
    defaultMessage: "Hide toolbar",
    description: "Hide the Site toolbar."
  },
  close: {
    id: "sites.dispatch.widget.toolbar.close",
    defaultMessage: "Close",
    description: "Close the current toolbar menu or sharing dialog."
  },
  search: {
    id: "sites.dispatch.widget.toolbar.search",
    defaultMessage: "Email or name",
    description: "Search for people or groups to share a Site with."
  },
  linkAccess: {
    id: "sites.dispatch.widget.toolbar.link_access",
    defaultMessage: "Link access",
    description: "Heading for who can open the Site link."
  },
  invited: {
    id: "sites.dispatch.widget.toolbar.invited",
    defaultMessage: "Only invited people",
    description: "Restricted Site link access option."
  },
  anyone: {
    id: "sites.dispatch.widget.toolbar.anyone",
    defaultMessage: "Anyone with the link",
    description: "Public Site link access option."
  },
  everyone: {
    id: "sites.dispatch.widget.toolbar.everyone",
    defaultMessage: "Everyone in {workspace}",
    description: "Workspace-wide Site link access option."
  },
  who: {
    id: "sites.dispatch.widget.toolbar.who",
    defaultMessage: "Who has access",
    description: "Heading for people and groups with Site access."
  },
  owner: {
    id: "sites.dispatch.widget.toolbar.owner",
    defaultMessage: "Owner",
    description: "Non-editable Site owner role."
  },
  viewer: {
    id: "sites.dispatch.widget.toolbar.viewer",
    defaultMessage: "Viewer",
    description: "Role that can view a Site."
  },
  editor: {
    id: "sites.dispatch.widget.toolbar.editor",
    defaultMessage: "Editor",
    description: "Role that can edit a Site."
  },
  remove: {
    id: "sites.dispatch.widget.toolbar.remove",
    defaultMessage: "Remove access",
    description: "Remove a person or group from Site sharing."
  },
  copy: {
    id: "sites.dispatch.widget.toolbar.copy",
    defaultMessage: "Copy link",
    description: "Copy the canonical Site URL."
  },
  copied: {
    id: "sites.dispatch.widget.toolbar.copied",
    defaultMessage: "Copied",
    description: "Confirmation that the Site URL was copied."
  },
  error: {
    id: "sites.dispatch.widget.toolbar.error",
    defaultMessage: "Couldn’t update sharing. Please try again.",
    description: "A Site sharing save failed."
  },
  interactionRequired: {
    id: "sites.dispatch.widget.toolbar.interaction_required",
    defaultMessage: "Keep the sharing dialog fully visible, then try again.",
    description: "A sharing change was blocked because the dialog was not visibly receiving a user action."
  },
  searchError: {
    id: "sites.dispatch.widget.toolbar.search_error",
    defaultMessage: "Couldn’t search. Please try again.",
    description: "Site sharing directory search failed."
  },
  noResults: {
    id: "sites.dispatch.widget.toolbar.no_results",
    defaultMessage: "No matching people or groups",
    description: "Empty Site sharing search results."
  },
  invite: {
    id: "sites.dispatch.widget.toolbar.invite",
    defaultMessage: "Invite {email}",
    description: "Invite a new external visitor by email."
  },
  searching: {
    id: "sites.dispatch.widget.toolbar.searching",
    defaultMessage: "Searching…",
    description: "Site sharing search is running."
  },
  saving: {
    id: "sites.dispatch.widget.toolbar.saving",
    defaultMessage: "Saving…",
    description: "Site sharing update is running."
  },
  more: {
    id: "sites.dispatch.widget.toolbar.more",
    defaultMessage: "Type more to narrow your search",
    description: "More sharing search results exist than fit in the list."
  },
  members: {
    id: "sites.dispatch.widget.toolbar.members",
    defaultMessage: "{count, plural, one {# member} other {# members}}",
    description: "Number of members of a Site access group."
  },
  copyError: {
    id: "sites.dispatch.widget.toolbar.copy_error",
    defaultMessage: "Couldn’t copy the link. Please try again.",
    description: "Clipboard copy failed."
  },
  remixPrompt: {
    id: "sites.dispatch.widget.toolbar.remix_prompt",
    defaultMessage: "Remix {site} into a new site.",
    description: "New ChatGPT conversation prompt for remixing an existing Site reference."
  }
};
function Kd(e, a) {
  switch (a) {
    case "owner":
      return e === "owner";
    case "editor":
      return e === "owner" || e === "editor";
    case "viewer":
      return e === "owner" || e === "editor" || e === "viewer";
    default:
      return !1;
  }
}
var mb = (e) => /* @__PURE__ */ (0, b.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, b.jsx)("path", {
    fillRule: "evenodd",
    d: "M12 4a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4Zm-6 6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H6Zm0-2a6 6 0 1 1 12 0 3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm4 6a2 2 0 1 1 3 1.732V17a1 1 0 1 1-2 0v-1.268A2 2 0 0 1 10 14Z",
    clipRule: "evenodd"
  })
}), vb = (e) => /* @__PURE__ */ (0, b.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, b.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9851 4.00291C11.9744 4.00615 11.953 4.01416 11.921 4.03356C11.7908 4.11248 11.5742 4.32444 11.325 4.77696C11.0839 5.21453 10.8521 5.8046 10.6514 6.53263C10.3148 7.75315 10.0844 9.29169 10.019 11H13.981C13.9156 9.29169 13.6852 7.75315 13.3486 6.53263C13.1479 5.8046 12.9161 5.21453 12.675 4.77696C12.4258 4.32444 12.2092 4.11248 12.079 4.03356C12.047 4.01416 12.0256 4.00615 12.0149 4.00291C12.0067 4.00046 12.001 4.00006 11.9996 4C11.9982 4.00006 11.9933 4.00046 11.9851 4.00291ZM8.01766 11C8.08396 9.13314 8.33431 7.41167 8.72334 6.00094C8.87366 5.45584 9.04762 4.94639 9.24523 4.48694C6.48462 5.49946 4.43722 7.9901 4.06189 11H8.01766ZM4.06189 13H8.01766C8.09487 15.1737 8.42177 17.1555 8.93 18.6802C9.02641 18.9694 9.13134 19.2483 9.24522 19.5131C6.48461 18.5005 4.43722 16.0099 4.06189 13ZM10.019 13C10.0955 14.9972 10.3973 16.7574 10.8274 18.0477C11.0794 18.8038 11.3575 19.3436 11.6177 19.6737C11.7455 19.8359 11.8494 19.9225 11.9186 19.9649C11.9515 19.9852 11.9736 19.9935 11.9847 19.9969C11.9948 20 11.9999 20 11.9999 20C11.9999 20 12.0049 20.0001 12.0153 19.9969C12.0264 19.9935 12.0485 19.9852 12.0814 19.9649C12.1506 19.9225 12.2545 19.8359 12.3823 19.6737C12.6425 19.3436 12.9206 18.8038 13.1726 18.0477C13.6027 16.7574 13.9045 14.9972 13.981 13H10.019ZM15.9823 13C15.9051 15.1737 15.5782 17.1555 15.07 18.6802C14.9736 18.9694 14.8687 19.2483 14.7548 19.5131C17.5154 18.5005 19.5628 16.0099 19.9381 13H15.9823ZM19.9381 11C19.5628 7.99009 17.5154 5.49946 14.7548 4.48694C14.9524 4.94639 15.1263 5.45584 15.2767 6.00094C15.6657 7.41167 15.916 9.13314 15.9823 11H19.9381Z"
  })
}), h5 = (e) => /* @__PURE__ */ (0, b.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, b.jsx)("path", {
    fillRule: "evenodd",
    d: "M7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM17 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-8.96 8.247C3.137 17.048 2.5 18.271 2.5 20a1 1 0 1 1-2 0c0-2.271.862-4.049 2.21-5.248C4.042 13.57 5.788 13 7.5 13s3.459.57 4.79 1.752c1.348 1.2 2.21 2.977 2.21 5.248a1 1 0 1 1-2 0c0-1.729-.638-2.952-1.54-3.753C10.042 15.43 8.788 15 7.5 15s-2.541.43-3.46 1.247Zm15.757-.607c-1.009-.638-2.338-.807-3.526-.472a1 1 0 0 1-.542-1.925c1.695-.478 3.616-.255 5.136.706 1.558.984 2.635 2.707 2.635 5.051a1 1 0 1 1-2 0c0-1.665-.732-2.746-1.703-3.36Z",
    clipRule: "evenodd"
  })
}), pb = (e) => /* @__PURE__ */ (0, b.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, b.jsx)("path", {
    d: "M3 6C3 4.34315 4.34315 3 6 3H12C13.6569 3 15 4.34315 15 6V7H18C19.6569 7 21 8.34315 21 10V19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20C1 19.4477 1.44772 19 2 19H3V6ZM5 19H8V17C8 16.4477 8.44772 16 9 16C9.55228 16 10 16.4477 10 17V19H13V6C13 5.44772 12.5523 5 12 5H6C5.44772 5 5 5.44772 5 6V19ZM15 19H19V10C19 9.44772 18.5523 9 18 9H15V19Z",
    fill: "currentColor"
  })
}), m5 = (e) => /* @__PURE__ */ (0, b.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, b.jsx)("path", {
    d: "M11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711C16.3166 9.09763 15.6834 9.09763 15.2929 8.70711L13 6.41421V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V6.41421L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289L11.2929 3.29289ZM4 14C4.55229 14 5 14.4477 5 15V15.2C5 16.0566 5.00078 16.6389 5.03755 17.089C5.07337 17.5274 5.1383 17.7516 5.21799 17.908C5.40973 18.2843 5.7157 18.5903 6.09202 18.782C6.24842 18.8617 6.47262 18.9266 6.91104 18.9624C7.36113 18.9992 7.94342 19 8.8 19H15.2C16.0566 19 16.6389 18.9992 17.089 18.9624C17.5274 18.9266 17.7516 18.8617 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C18.8617 17.7516 18.9266 17.5274 18.9624 17.089C18.9992 16.6389 19 16.0566 19 15.2V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V15.2413C21 16.0463 21 16.7106 20.9558 17.2518C20.9099 17.8139 20.8113 18.3306 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C18.3306 20.8113 17.8139 20.9099 17.2518 20.9558C16.7106 21 16.0463 21 15.2413 21H8.75868C7.95372 21 7.28936 21 6.74817 20.9558C6.18608 20.9099 5.66937 20.8113 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43597 18.816C3.18868 18.3306 3.09012 17.8139 3.04419 17.2518C2.99998 16.7106 2.99999 16.0463 3 15.2413L3 15C3 14.4477 3.44772 14 4 14Z",
    fill: "currentColor"
  })
}), gb = (e) => /* @__PURE__ */ (0, b.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, b.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.0015 18.9289C14.8244 19.6101 13.4577 20 12 20C7.58172 20 4 16.4183 4 12C4 9.23858 6.23858 7 9 7C11.7614 7 14 9.23858 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 8.13401 12.866 5 9 5C8.65998 5 8.32561 5.02424 7.99855 5.0711C9.17557 4.3899 10.5423 4 12 4C16.4183 4 20 7.58172 20 12C20 14.7614 17.7614 17 15 17C12.2386 17 10 14.7614 10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12C8 15.866 11.134 19 15 19C15.34 19 15.6744 18.9758 16.0015 18.9289Z",
    fill: "currentColor"
  })
}), v5 = (e) => /* @__PURE__ */ (0, b.jsxs)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: [/* @__PURE__ */ (0, b.jsx)("path", {
    fillRule: "evenodd",
    d: "M11.568 3.5a1 1 0 0 0-.863.494l-.811 1.381A3.001 3.001 0 0 1 7.33 6.856l-1.596.013a1 1 0 0 0-.858.501l-.439.761a1 1 0 0 0-.004.992l.792 1.4a3 3 0 0 1 0 2.954l-.792 1.4a1 1 0 0 0 .004.992l.439.76a1 1 0 0 0 .858.502l1.596.013a3 3 0 0 1 2.564 1.48l.811 1.382a1 1 0 0 0 .863.494h.87a1 1 0 0 0 .862-.494l.812-1.381a3.001 3.001 0 0 1 2.563-1.481l1.596-.013a1 1 0 0 0 .86-.501l.438-.761a1 1 0 0 0 .004-.992l-.793-1.4a3 3 0 0 1 0-2.954l.793-1.4a1 1 0 0 0-.004-.992l-.439-.76a1 1 0 0 0-.858-.502l-1.597-.013a3 3 0 0 1-2.563-1.48L13.3 3.993a1 1 0 0 0-.862-.494h-.87ZM8.98 2.981A3.001 3.001 0 0 1 11.568 1.5h.87c1.064 0 2.049.564 2.588 1.481l.811 1.382a1 1 0 0 0 .855.494l1.596.013a3 3 0 0 1 2.575 1.502l.44.76a3 3 0 0 1 .011 2.975l-.792 1.4a1 1 0 0 0 0 .985l.792 1.401a3 3 0 0 1-.012 2.974l-.439.761a3.001 3.001 0 0 1-2.575 1.503l-1.597.012a1 1 0 0 0-.854.494l-.811 1.382a3.001 3.001 0 0 1-2.588 1.481h-.87a3.001 3.001 0 0 1-2.588-1.481l-.811-1.382a1 1 0 0 0-.855-.494l-1.596-.012a3.001 3.001 0 0 1-2.576-1.503l-.438-.76a3 3 0 0 1-.013-2.975l.793-1.4a1 1 0 0 0 0-.985l-.793-1.4a3 3 0 0 1 .013-2.975l.438-.761A3.001 3.001 0 0 1 5.718 4.87l1.596-.013a1 1 0 0 0 .855-.494l.81-1.382Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ (0, b.jsx)("path", {
    fillRule: "evenodd",
    d: "M12.003 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM8.502 12a3.5 3.5 0 1 1 7 .001 3.5 3.5 0 0 1-7-.001Z",
    clipRule: "evenodd"
  })]
}), p5 = "_Launcher_1s5qa_1", g5 = "_Logo_1s5qa_32", y5 = "_Divider_1s5qa_38", b5 = "_Ghost_1s5qa_44", _5 = "_Shortcut_1s5qa_65", S5 = "_More_1s5qa_66", E5 = "_Label_1s5qa_77", w5 = "_Menu_1s5qa_84", T5 = "_MenuActions_1s5qa_97", C5 = "_MenuAction_1s5qa_97", tt = {
  Launcher: p5,
  Logo: g5,
  Divider: y5,
  Ghost: b5,
  Shortcut: _5,
  More: S5,
  Label: E5,
  Menu: w5,
  MenuActions: T5,
  MenuAction: C5
};
function A5({ children: e, summary: a, enabled: r, anchor: l, onDismiss: u }) {
  const { formatMessage: c } = Ie();
  function d() {
    switch (a.icon) {
      case "lock":
        return c(oe.privateHint);
      case "globe":
        return c(oe.publicHint);
      case "building":
        return c(oe.workspaceHint, { workspace: a.label });
      default:
        return c(oe.invitedHint);
    }
  }
  return /* @__PURE__ */ (0, b.jsx)(Hn, {
    content: /* @__PURE__ */ (0, b.jsxs)("span", {
      className: Tt.SharingHint,
      dir: "auto",
      children: [
        /* @__PURE__ */ (0, b.jsx)("span", { children: d() }),
        " ",
        /* @__PURE__ */ (0, b.jsx)("span", { children: c(a.icon === "lock" ? oe.shareHintAction : oe.manageHintAction) })
      ]
    }),
    contentClassName: De(Tt.Tooltip, Tt.SharingTooltip),
    forceOpen: r ? void 0 : !1,
    interactive: !0,
    maxWidth: "min(300px, calc(100vw - 30px))",
    side: l.startsWith("top") ? "bottom" : "top",
    sideOffset: 12,
    onDismiss: u,
    children: e
  });
}
var x5 = {
  lock: mb,
  globe: vb,
  people: h5,
  building: pb
};
function O5(e, a) {
  return e === "bottom-center" ? "center" : e.endsWith("left") !== (a === "rtl") ? "start" : "end";
}
function M5({ toolbar: e, onHide: a, onShare: r, onCompose: l }) {
  const { formatMessage: u } = Ie(), c = Kd(e.currentUserRole, "editor");
  return /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [
    /* @__PURE__ */ (0, b.jsxs)(At, {
      variant: "ghost",
      color: "secondary",
      className: De(tt.Ghost, tt.MenuAction),
      onClick: r,
      children: [/* @__PURE__ */ (0, b.jsx)(m5, {
        "aria-hidden": "true",
        focusable: "false"
      }), u(oe.share)]
    }),
    ["edit", "remix"].map((d) => {
      if (d === "edit" && !c) return null;
      const h = /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [d === "edit" ? /* @__PURE__ */ (0, b.jsx)(Qd, {}) : /* @__PURE__ */ (0, b.jsx)(gb, {
        "aria-hidden": "true",
        focusable: "false"
      }), u(oe[d])] });
      return /* @__PURE__ */ (0, b.jsx)(At, {
        variant: "ghost",
        color: "secondary",
        className: De(tt.Ghost, tt.MenuAction),
        onClick: () => l(d),
        children: h
      }, d);
    }),
    e.currentUserRole === "owner" && e.settingsUrl && /* @__PURE__ */ (0, b.jsx)(nd, {
      asChild: !0,
      children: /* @__PURE__ */ (0, b.jsxs)(Rg, {
        variant: "ghost",
        color: "secondary",
        className: De(tt.Ghost, tt.MenuAction),
        href: e.settingsUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [/* @__PURE__ */ (0, b.jsx)(v5, {
          "aria-hidden": "true",
          focusable: "false"
        }), u(oe.settings)]
      })
    }),
    /* @__PURE__ */ (0, b.jsxs)(At, {
      variant: "ghost",
      color: "secondary",
      className: De(tt.Ghost, tt.MenuAction),
      onClick: a,
      children: [/* @__PURE__ */ (0, b.jsx)(db, {}), u(oe.hide)]
    }),
    /* @__PURE__ */ (0, b.jsx)(nd, {
      asChild: !0,
      children: /* @__PURE__ */ (0, b.jsxs)(At, {
        variant: "ghost",
        color: "secondary",
        className: De(tt.Ghost, tt.MenuAction),
        children: [/* @__PURE__ */ (0, b.jsx)(pr, {}), u(oe.close)]
      })
    })
  ] });
}
function yb({ toolbar: e, mobileLayout: a = !1, launcherRef: r, corner: l, dragHandlers: u, onHide: c, onCompose: d, showLogoEntrance: h, finishLogoEntrance: m, showSharingHint: g, onDismissHint: p }) {
  const { formatMessage: _ } = Ie(), S = Ba(Ie().locale), w = Kd(e.currentUserRole, "editor"), A = Lo(), T = (0, y.useRef)(null), C = (0, y.useRef)(null), R = (0, y.useRef)(!1), N = (0, y.useRef)(!1), [H, D] = (0, y.useState)(!1), [U, L] = (0, y.useState)(!1), { menuRef: Q, menuMounted: ee } = ub(T);
  (0, y.useLayoutEffect)(() => {
    !ee && N.current && (N.current = !1, c());
  }, [ee, c]);
  const I = (0, y.useRef)(null), te = (0, y.useCallback)((J) => {
    I.current = J, Q(J);
  }, [Q]), k = () => {
    st("toolbar_share_clicked"), R.current = !0, D(U), L(!1), e.openSharing(C.current);
  };
  function B(J, ne) {
    J === "edit" && !w || (st(J === "edit" ? "toolbar_edit_clicked" : "toolbar_remix_clicked"), R.current = !0, D(U && !a), L(!1), d(J, ne));
  }
  return /* @__PURE__ */ (0, b.jsxs)($u, {
    open: U,
    onOpenChange: (J) => {
      J && !U && st("toolbar_menu_opened"), L(J);
    },
    children: [/* @__PURE__ */ (0, b.jsx)(Fd, {
      asChild: !0,
      children: /* @__PURE__ */ (0, b.jsxs)("div", {
        ref: T,
        className: De(tt.Launcher, a && Vt.Launcher),
        "data-mobile": a ? "" : void 0,
        "data-toolbar-menu-mounted": ee ? "" : void 0,
        "data-menu-open": U || H || N.current ? "" : void 0,
        inert: U,
        role: "toolbar",
        "aria-label": _(oe.label),
        ...u,
        onDragStart: (J) => J.preventDefault(),
        children: [
          /* @__PURE__ */ (0, b.jsx)("span", {
            className: De(Me.LauncherLogo, tt.Logo),
            "data-entering": h ? "" : void 0,
            children: /* @__PURE__ */ (0, b.jsx)(Od, {
              src: Cd,
              alt: "OpenAI",
              width: 18,
              height: 18,
              onAnimationEnd: m
            })
          }),
          /* @__PURE__ */ (0, b.jsx)("span", {
            className: tt.Divider,
            "aria-hidden": "true"
          }),
          /* @__PURE__ */ (0, b.jsx)(R5, {
            toolbar: e,
            showSharingHint: g && !U && !H,
            corner: l,
            onDismissHint: p,
            buttonRef: (J) => {
              C.current = J, r(J);
            },
            ariaKeyshortcuts: u && !a ? "ArrowUp ArrowDown ArrowLeft ArrowRight" : void 0,
            onClick: () => {
              w ? k() : B("remix", T.current?.getBoundingClientRect().width ?? 200);
            }
          }),
          /* @__PURE__ */ (0, b.jsx)("span", {
            className: tt.Divider,
            "aria-hidden": "true"
          }),
          /* @__PURE__ */ (0, b.jsx)(Xd, {
            asChild: !0,
            children: /* @__PURE__ */ (0, b.jsx)(At, {
              variant: "ghost",
              color: "secondary",
              pill: !0,
              uniform: !0,
              className: De(tt.Ghost, tt.More),
              "aria-label": _(oe.menu),
              children: /* @__PURE__ */ (0, b.jsx)(fb, {})
            })
          })
        ]
      })
    }), !H && !N.current && /* @__PURE__ */ (0, b.jsx)(qu, {
      container: A,
      children: /* @__PURE__ */ (0, b.jsx)(Vu, {
        ref: te,
        className: De(Me.Widget, Vt.Menu, tt.Menu),
        "data-mobile": a ? "" : void 0,
        side: l.startsWith("top") ? "bottom" : "top",
        align: O5(l, S),
        sideOffset: -36,
        collisionPadding: 16,
        updatePositionStrategy: "always",
        inert: !U,
        onOpenAutoFocus: (J) => {
          J.preventDefault(), J.target instanceof HTMLElement && (a ? J.target : J.target.querySelector("a, button"))?.focus({ preventScroll: !0 });
        },
        onCloseAutoFocus: (J) => {
          R.current && J.preventDefault(), R.current = !1;
        },
        "aria-label": _(oe.menu),
        children: /* @__PURE__ */ (0, b.jsx)("div", {
          className: De(Vt.Actions, tt.MenuActions),
          children: /* @__PURE__ */ (0, b.jsx)(M5, {
            toolbar: e,
            onHide: () => {
              R.current = !0, N.current = !0, L(!1);
            },
            onShare: k,
            onCompose: (J) => {
              const ne = I.current?.getBoundingClientRect().width;
              ne !== void 0 && B(J, ne);
            }
          })
        })
      })
    })]
  });
}
function R5({ toolbar: e, buttonRef: a, onClick: r, ariaKeyshortcuts: l, showSharingHint: u, corner: c, onDismissHint: d }) {
  const { formatMessage: h } = Ie(), m = Kd(e.currentUserRole, "editor"), g = m ? x5[e.summary.icon] : gb, p = /* @__PURE__ */ (0, b.jsxs)(At, {
    variant: "ghost",
    color: "secondary",
    pill: !0,
    ref: a,
    className: De(tt.Ghost, tt.Shortcut),
    type: "button",
    "data-toolbar-sharing-trigger": "",
    "aria-haspopup": m ? "dialog" : void 0,
    "aria-keyshortcuts": l,
    onClick: r,
    children: [/* @__PURE__ */ (0, b.jsx)(g, {
      "aria-hidden": "true",
      focusable: "false"
    }), /* @__PURE__ */ (0, b.jsx)("span", {
      className: tt.Label,
      children: m ? e.summary.label : h(oe.remix)
    })]
  });
  return m ? /* @__PURE__ */ (0, b.jsx)(A5, {
    summary: e.summary,
    enabled: u,
    anchor: c,
    onDismiss: d,
    children: p
  }) : p;
}
var N5 = "_Widget_lanvw_1", D5 = "_CloseButton_lanvw_7", dp = {
  Widget: N5,
  CloseButton: D5
};
function z5({ toolbar: e, config: a, accountId: r, chatgptOrigin: l, projectId: u, siteTitle: c }) {
  const d = Ie(), h = Lo(), m = ob(), [g] = (0, y.useState)(() => ib({
    reducedMotion: m,
    initiallyHidden: a.hidden
  })), { state: p, showLogoEntrance: _, actions: S } = Nu(g), w = p.view === "hidden" || p.view === "dismissed";
  (0, y.useEffect)(() => {
    (m || e.sharingOpen) && S.finishLogoEntrance();
  }, [
    S,
    m,
    e.sharingOpen
  ]);
  const [A] = (0, y.useState)(Ad), T = (0, y.useRef)(!1), C = cb(() => {
  }, (N) => {
    N.target instanceof Element && N.target.closest("button, a")?.click();
  });
  (0, y.useEffect)(() => {
    w || T.current || (T.current = !0, st("toolbar_shown"));
  }, [w]);
  function R(N) {
    const H = Wu({
      accountId: r,
      chatgptOrigin: l,
      query: d.formatMessage(N === "remix" ? oe.remixOpenPrompt : Ge.invitationBannerEditPrompt, { site: gr(c, u) }),
      editContext: N === "edit" ? a.edit_context : void 0
    });
    window.open(H.toString(), "_blank", "noopener,noreferrer"), st(N === "edit" ? "toolbar_edit_submitted" : "toolbar_remix_submitted");
  }
  return w ? null : (0, br.createPortal)(/* @__PURE__ */ (0, b.jsx)("div", {
    ref: C.ref,
    className: De(Me.Widget, Vt.Widget, dp.Widget),
    style: C.style,
    "data-corner": C.anchor,
    "data-mobile-widget-dragging": C.dragging ? "" : void 0,
    "data-mobile-widget-snapping": C.snapping ? "" : void 0,
    dir: Ba(d.locale),
    lang: d.locale,
    children: /* @__PURE__ */ (0, b.jsx)(Mu, {
      as: "div",
      className: Me.WidgetEntrance,
      disableAnimations: m,
      enterDuration: 180,
      preventInitialTransition: !1,
      children: /* @__PURE__ */ (0, b.jsx)("div", { children: e.sharingOpen ? /* @__PURE__ */ (0, b.jsxs)(At, {
        variant: "ghost",
        color: "secondary",
        pill: !0,
        className: dp.CloseButton,
        "data-toolbar-sharing-close": !0,
        onClick: e.closeSharing,
        children: [/* @__PURE__ */ (0, b.jsx)(pr, { "aria-hidden": "true" }), d.formatMessage(oe.close)]
      }) : /* @__PURE__ */ (0, b.jsx)(yb, {
        mobileLayout: !0,
        toolbar: e,
        launcherRef: () => {
        },
        corner: C.anchor,
        dragHandlers: C.dragHandlers,
        showLogoEntrance: _,
        finishLogoEntrance: S.finishLogoEntrance,
        showSharingHint: !1,
        onDismissHint: () => {
        },
        onCompose: R,
        onHide: () => {
          S.dismiss(), A(!0), st("toolbar_hidden");
        }
      }) }, "mobile-toolbar")
    })
  }), h ?? document.body);
}
var Df = "cubic-bezier(0.2, 1.25, 0.3, 1)", hp = 360, mp = 280, H5 = 1e3, L5 = 180, j5 = 100, B5 = 200, U5 = 80, P5 = 140, Z5 = 120, vp = 0, pp = 160, zf = 290, Jd = 12, gp = Jd + 4, yp = 8, G5 = 280, k5 = 52, I5 = -8, $5 = -12;
function q5(e) {
  return !(e.defaultPrevented || e.repeat || e.isComposing || e.code !== "KeyM" || !e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.getModifierState("AltGraph") || document.designMode === "on" || e.composedPath().some((a) => a instanceof HTMLElement && (a.isContentEditable || a.matches('input, textarea, select, [role="textbox"], [role="searchbox"], [role="combobox"], [role="spinbutton"]'))));
}
function bb(e) {
  return xd() ? e.toolbar ? /* @__PURE__ */ (0, b.jsx)(z5, {
    ...e,
    toolbar: e.toolbar
  }) : /* @__PURE__ */ (0, b.jsx)(c5, { ...e }) : /* @__PURE__ */ (0, b.jsx)(F5, { ...e });
}
function V5({ toolbar: e, opensChatGPT: a, disabled: r, tooltipSide: l }) {
  const u = Ie().formatMessage(a ? oe.openChatGPT : Ge.editorWidgetSendAction), c = /* @__PURE__ */ (0, b.jsx)(At, {
    className: Me.SendButton,
    color: "primary",
    variant: "solid",
    size: "lg",
    iconSize: "lg",
    pill: !0,
    uniform: !0,
    type: "submit",
    "aria-label": u,
    disabled: r,
    children: /* @__PURE__ */ (0, b.jsx)(W8, {
      className: e ? Me.ComposerArrow : void 0,
      "data-open": a ? "" : void 0,
      "aria-hidden": "true",
      focusable: "false"
    })
  });
  return e ? /* @__PURE__ */ (0, b.jsx)(Hn, {
    content: a ? u : null,
    contentClassName: De(Tt.Tooltip, Me.ComposerTooltip),
    side: l,
    sideOffset: Jd + yp,
    align: "end",
    alignOffset: -yp,
    children: c
  }) : c;
}
function F5({ config: e, accountId: a, chatgptOrigin: r, projectId: l, siteTitle: u, toolbar: c }) {
  const d = Ie(), h = (0, y.useRef)(null), m = (0, y.useRef)(null), g = (0, y.useRef)(null), p = (0, y.useRef)(!1), _ = (0, y.useRef)(!1), S = ob(), w = Y8(), [A] = (0, y.useState)(() => ib({
    reducedMotion: S,
    initiallyHidden: e.hidden
  })), [T] = (0, y.useState)(Ad), { state: C, composerMode: R, actions: N, corner: H, hasInteracted: D, showHideHint: U, showLogoEntrance: L } = Nu(A), [Q, ee] = (0, y.useState)(), I = C.view === "composer", te = !!c;
  (0, y.useLayoutEffect)(() => {
    if (!te || I || S) return;
    const ce = m.current?.querySelector(`.${Me.ShellLayout}`), mt = ce?.querySelector(`.${Me.Composer}`);
    if (!ce || !mt) return;
    const hn = mt.getBoundingClientRect().height, mn = getComputedStyle(ce).minHeight;
    ce.style.height = mn;
    const Ju = ce.animate([{ height: `${hn}px` }, { height: mn }], {
      delay: vp,
      duration: pp,
      easing: "ease-in-out",
      fill: "backwards"
    });
    return () => {
      Ju.cancel(), ce.style.height = "";
    };
  }, [
    I,
    te,
    S
  ]);
  const k = I && !c ? j5 : 0, B = I ? hp : mp, J = C.view === "hiding", ne = J || C.view === "hidden", me = C.view !== "handoff" && C.view !== "dismissed" && (w || !ne), z = w && ne, q = !w || D, V = j8(z, C.view === "hidden", S, U), se = z && C.view === "hidden" && !V.hintDismissed && (V.hoverHintVisible || U && !V.quiet && V.phase !== "away"), { widgetRef: ge, contentRef: ft, style: M, dragging: Y, dragHandlers: ae, snapping: le, shadowStyle: be } = $8({
    corner: H,
    onCornerChange: N.setCorner,
    onInteract: N.markInteracted,
    preserveChildClickTargets: !!c
  }), ve = C.view === "handoff" ? "" : C.draft, xe = !!c && !ve.trim(), lt = rd({
    accountId: a,
    projectId: l,
    browserUrl: window.location.href,
    chatgptOrigin: r,
    query: d.formatMessage(Ge.editorWidgetDefaultEditPrompt, { site: gr(u, l) }),
    isDefaultPrompt: !0,
    editContext: e.edit_context
  });
  (0, y.useEffect)(() => {
    se && N.markHideHintSeen();
  }, [se, N]), (0, y.useEffect)(() => {
    !me || ne || _.current || (_.current = !0, st(c ? "toolbar_shown" : "editor_widget_shown"));
  }, [
    me,
    ne,
    c
  ]), (0, y.useEffect)(() => {
    if (C.view !== "handoff") return;
    const ce = window.setTimeout(N.finishHandoff, H5);
    return () => window.clearTimeout(ce);
  }, [C.view, N]);
  const He = (0, y.useCallback)(() => {
    const ce = g.current;
    !p.current || !ce || ce.closest("[inert]") || (p.current = !1, ce.focus({ preventScroll: !0 }));
  }, []), dn = (0, y.useCallback)((ce) => {
    g.current = ce, He();
  }, [He]);
  (0, y.useLayoutEffect)(() => {
    S && (J && N.finishHide(), N.finishLogoEntrance());
  }, [
    J,
    S,
    N
  ]), (0, y.useEffect)(() => {
    C.view === "launcher" && He();
  }, [C.view, He]);
  const wn = (0, y.useCallback)(() => {
    p.current = !0, N.restoreHidden(), T(!1), st(c ? "toolbar_restored" : "editor_widget_restored");
  }, [
    N,
    T,
    c
  ]);
  (0, y.useEffect)(() => {
    if (!z) return;
    function ce(mt) {
      q5(mt) && (mt.preventDefault(), wn());
    }
    return window.addEventListener("keydown", ce), () => window.removeEventListener("keydown", ce);
  }, [z, wn]);
  function Tn(ce) {
    ce.relatedTarget instanceof Node && ce.currentTarget.contains(ce.relatedTarget) || N.collapse();
  }
  function Er(ce) {
    I && ce.key === "Escape" && !ce.defaultPrevented && !ce.nativeEvent.isComposing && ce.nativeEvent.keyCode !== 229 && (ce.preventDefault(), p.current = !0, N.collapse());
  }
  function Cn() {
    T(!0), w ? N.hide() : N.dismiss(), st(c ? "toolbar_hidden" : "editor_widget_hidden");
  }
  function wr(ce) {
    ce.preventDefault();
    const mt = N.beginHandoff({ allowEmpty: !!c });
    if (mt === null) return;
    st(c ? R === "remix" ? "toolbar_remix_submitted" : "toolbar_edit_submitted" : "editor_widget_edit_request_submitted");
    const hn = Tr(mt.trim());
    hn.searchParams.set("site_edit_source", "widget");
    try {
      window.open(hn.toString(), "_blank", "noopener,noreferrer");
    } catch {
    }
  }
  function Tr(ce) {
    const mt = gr(u, l), hn = d.formatMessage(Ge.invitationBannerEditPrompt, { site: mt });
    if (c && !ce) {
      const mn = R === "remix";
      return Wu({
        accountId: a,
        chatgptOrigin: r,
        query: mn ? d.formatMessage(oe.remixOpenPrompt, { site: mt }) : hn,
        editContext: mn ? void 0 : e.edit_context
      });
    }
    if (c && R === "remix") {
      const mn = new URL(c.remixUrl);
      return mn.searchParams.set("prompt", `${mn.searchParams.get("prompt")}

${ce}`), mn;
    }
    return rd({
      accountId: a,
      projectId: l,
      browserUrl: window.location.href,
      chatgptOrigin: r,
      query: `${hn}

${ce}`,
      editContext: e.edit_context
    });
  }
  function Ku() {
    return !I && c ? vp + pp : I ? c ? 0 : B5 : U5;
  }
  function jo() {
    return I ? /* @__PURE__ */ (0, b.jsxs)("form", {
      className: Me.Composer,
      onSubmit: wr,
      children: [/* @__PURE__ */ (0, b.jsx)(aC, {
        textareaRef: h,
        className: Me.Textarea,
        autoFocus: !0,
        "aria-label": d.formatMessage(c && R === "remix" ? oe.remixComposerPlaceholder : Ge.editorWidgetComposerLabel),
        placeholder: d.formatMessage(c && R === "remix" ? oe.remixComposerPlaceholder : Ge.editorWidgetComposerPlaceholder),
        value: ve,
        onKeyDown: (ce) => {
          ce.stopPropagation(), Er(ce);
        },
        onKeyUp: (ce) => ce.stopPropagation(),
        onKeyPress: (ce) => ce.stopPropagation(),
        onChange: (ce) => N.changeDraft(ce.target.value)
      }), /* @__PURE__ */ (0, b.jsx)("div", {
        className: Me.ComposerFooter,
        children: /* @__PURE__ */ (0, b.jsx)(V5, {
          toolbar: te,
          opensChatGPT: xe,
          disabled: !c && !ve.trim(),
          tooltipSide: H.startsWith("top") ? "bottom" : "top"
        })
      })]
    }, "composer") : c?.sharingOpen ? /* @__PURE__ */ (0, b.jsxs)("button", {
      "data-toolbar-sharing-close": !0,
      ref: dn,
      className: De(Me.Launcher, Me.SharingClose),
      onClick: c.closeSharing,
      children: [/* @__PURE__ */ (0, b.jsx)(pr, { "aria-hidden": "true" }), d.formatMessage(oe.close)]
    }, "sharing-close") : c ? /* @__PURE__ */ (0, b.jsx)(yb, {
      toolbar: c,
      launcherRef: dn,
      corner: H,
      showSharingHint: !D && !ne && !Y,
      onDismissHint: N.markInteracted,
      dragHandlers: w ? ae : void 0,
      onHide: Cn,
      onCompose: (ce, mt) => {
        ee(Math.max(mt, 200)), N.open(ce);
      },
      showLogoEntrance: L,
      finishLogoEntrance: N.finishLogoEntrance
    }, "launcher") : /* @__PURE__ */ (0, b.jsxs)("div", {
      className: Me.LauncherRow,
      children: [/* @__PURE__ */ (0, b.jsx)(Hn, {
        contentClassName: Tt.Tooltip,
        maxWidth: zf,
        content: q ? null : d.formatMessage(Ge.editorWidgetOpenAction),
        sideOffset: gp,
        children: /* @__PURE__ */ (0, b.jsx)(Rg, {
          className: Me.LogoButton,
          href: lt.toString(),
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => st("editor_widget_open_in_chatgpt_clicked"),
          variant: "ghost",
          size: "lg",
          pill: !0,
          uniform: !0,
          "aria-label": d.formatMessage(Ge.editorWidgetOpenAction),
          children: /* @__PURE__ */ (0, b.jsx)("span", {
            className: Me.LauncherLogo,
            "data-entering": L ? "" : void 0,
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, b.jsx)(Od, {
              src: Cd,
              alt: "",
              width: 18,
              height: 18,
              onAnimationEnd: N.finishLogoEntrance
            })
          })
        })
      }), /* @__PURE__ */ (0, b.jsx)(Hn, {
        contentClassName: Tt.Tooltip,
        maxWidth: zf,
        content: q || Y ? null : d.formatMessage(Ge.editorWidgetLaunchTooltip),
        sideOffset: Jd,
        children: /* @__PURE__ */ (0, b.jsx)("button", {
          ref: dn,
          className: Me.Launcher,
          type: "button",
          "aria-expanded": "false",
          "aria-keyshortcuts": w ? "ArrowUp ArrowDown ArrowLeft ArrowRight" : void 0,
          ...w ? ae : {},
          "aria-label": d.formatMessage(Ge.editorWidgetLaunchAction),
          onClick: () => {
            N.open(), st("editor_widget_composer_opened");
          },
          children: /* @__PURE__ */ (0, b.jsx)("span", {
            className: Me.LauncherLabel,
            children: /* @__PURE__ */ (0, b.jsx)(lr, { ...Ge.editorWidgetLaunchAction })
          })
        })
      })]
    }, "launcher");
  }
  return /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [Y && !c && /* @__PURE__ */ (0, b.jsx)("div", {
    className: Me.LandingShadow,
    style: be,
    "aria-hidden": "true"
  }), /* @__PURE__ */ (0, b.jsx)(Mu, {
    as: "div",
    className: Me.WidgetExit,
    disableAnimations: S,
    exitDuration: 0,
    onExit: (ce) => {
      ce.inert = !0;
    },
    onEnter: (ce) => {
      ce.inert = !1, He();
    },
    children: me && /* @__PURE__ */ (0, b.jsxs)("div", {
      ref: ge,
      className: Me.Widget,
      style: M,
      "data-dragging": Y ? "" : void 0,
      "data-snapping": le ? "" : void 0,
      "data-corner": H,
      "data-tucked": ne ? "" : void 0,
      "data-peek-phase": ne ? V.phase : void 0,
      "data-quiet-tuck": V.quiet ? "" : void 0,
      dir: Ba(d.locale),
      lang: d.locale,
      onBlur: Tn,
      onClickCapture: N.markInteracted,
      onPointerDownCapture: c ? N.markInteracted : void 0,
      onKeyDownCapture: c ? N.markInteracted : void 0,
      onKeyDown: Er,
      children: [/* @__PURE__ */ (0, b.jsx)(Mu, {
        as: "div",
        className: Me.WidgetEntrance,
        disableAnimations: S,
        enterDuration: L5,
        preventInitialTransition: ne,
        children: /* @__PURE__ */ (0, b.jsx)("div", {
          ref: m,
          className: De(Me.Panel, c && Me.ToolbarPanel),
          "data-expanded": I ? "" : void 0,
          children: /* @__PURE__ */ (0, b.jsx)("div", {
            className: Me.Shell,
            onTransitionEnd: (ce) => {
              ce.target === ce.currentTarget && ce.propertyName === "transform" && !ce.pseudoElement && N.finishHide();
            },
            children: /* @__PURE__ */ (0, b.jsxs)("div", {
              ref: ft,
              className: Me.ShellControls,
              inert: ne,
              children: [/* @__PURE__ */ (0, b.jsx)(qA, {
                as: "div",
                className: Me.ShellLayout,
                disableAnimations: S,
                transitionClassName: Me.ShellContent,
                dimension: "width",
                enterFromSize: I ? Q : void 0,
                resizeContents: !!(c && I),
                itemAnchor: H.endsWith("left") ? "start" : "end",
                hideOverflow: !0,
                initial: { opacity: 0 },
                enter: {
                  opacity: 1,
                  delay: Ku(),
                  duration: P5
                },
                exit: {
                  opacity: 0,
                  duration: Z5
                },
                layoutEnter: {
                  delay: k,
                  duration: hp,
                  timingFunction: Df
                },
                layoutExit: {
                  duration: mp,
                  timingFunction: Df
                },
                layoutMove: {
                  delay: k,
                  duration: B,
                  timingFunction: Df
                },
                children: jo()
              }), !c && /* @__PURE__ */ (0, b.jsx)(Hn, {
                contentClassName: Tt.Tooltip,
                maxWidth: zf,
                content: I || q ? null : d.formatMessage(Ge.editorWidgetHideAction),
                sideOffset: gp,
                children: /* @__PURE__ */ (0, b.jsx)(At, {
                  className: Me.LauncherDismissButton,
                  variant: "ghost",
                  size: "lg",
                  pill: !0,
                  uniform: !0,
                  "aria-hidden": I,
                  tabIndex: I ? -1 : 0,
                  "aria-label": d.formatMessage(Ge.editorWidgetHideAction),
                  onClick: Cn,
                  children: /* @__PURE__ */ (0, b.jsx)(pr, {
                    "aria-hidden": "true",
                    focusable: "false"
                  })
                })
              })]
            })
          })
        }, "panel")
      }), z && /* @__PURE__ */ (0, b.jsx)(Hn, {
        contentClassName: De(Tt.Tooltip, Tt.HideHint),
        forceOpen: se,
        onDismiss: V.dismissHint,
        interactive: !0,
        ...V.hintHandlers,
        side: H.startsWith("top") ? "bottom" : "top",
        align: H.endsWith("left") ? "start" : "end",
        alignOffset: k5,
        sideOffset: H.startsWith("top") ? I5 : $5,
        maxWidth: G5,
        content: /* @__PURE__ */ (0, b.jsxs)("span", {
          className: Tt.HideHintContent,
          children: [/* @__PURE__ */ (0, b.jsx)("span", {
            className: Tt.HideHintText,
            children: /* @__PURE__ */ (0, b.jsx)(lr, { ...Ge.editorWidgetHideHint })
          }), /* @__PURE__ */ (0, b.jsxs)("span", {
            className: Tt.Shortcut,
            children: [/* @__PURE__ */ (0, b.jsx)("kbd", { children: tC() ? "⌥" : "Alt" }), /* @__PURE__ */ (0, b.jsx)("kbd", { children: "M" })]
          })]
        }),
        children: /* @__PURE__ */ (0, b.jsx)("button", {
          className: Me.CornerTarget,
          type: "button",
          "aria-label": d.formatMessage(Ge.editorWidgetRestoreAction),
          "aria-keyshortcuts": "Alt+M",
          ...V.targetHandlers,
          onClick: wn
        })
      })]
    }, "widget")
  })] });
}
var X5 = "_Banner_1iivt_1", Y5 = "_Content_1iivt_34", W5 = "_Message_1iivt_42", Q5 = "_OwnerName_1iivt_50", K5 = "_Actions_1iivt_54", J5 = "_EditLink_1iivt_62", e7 = "_DismissButton_1iivt_63", ui = {
  Banner: X5,
  Content: Y5,
  Message: W5,
  OwnerName: Q5,
  Actions: K5,
  EditLink: J5,
  DismissButton: e7
}, t7 = "/_internal/sites_widget/invitation-banner/dismiss";
function bp(e) {
  const a = e.currentTarget, r = a.offsetWidth;
  let l = 0.985;
  r <= 80 ? l = 0.96 : r <= 150 ? l = 0.97 : r <= 220 ? l = 0.98 : r > 600 && (l = 0.995), a.style.setProperty("--scale", l.toString());
}
function n7({ editContext: e, accountId: a, chatgptOrigin: r, ownerName: l, projectId: u, siteTitle: c, onDismiss: d }) {
  const h = Ie();
  (0, y.useEffect)(() => {
    st("editor_invite_banner_shown");
  }, []);
  const m = rd({
    editContext: e,
    accountId: a,
    projectId: u,
    browserUrl: window.location.href,
    chatgptOrigin: r,
    query: h.formatMessage(Ge.invitationBannerEditPrompt, { site: gr(c, u) }),
    isDefaultPrompt: !0
  });
  function g() {
    st("editor_invite_banner_dismissed"), d(), fetch(t7, {
      method: "POST",
      credentials: "same-origin"
    }).catch(() => {
    });
  }
  function p(_) {
    st("editor_invite_banner_edit_with_chat_clicked");
    const S = new URL(_.currentTarget.href);
    S.searchParams.has("browser_url") && S.searchParams.set("browser_url", window.location.href), _.currentTarget.href = S.toString();
  }
  return /* @__PURE__ */ (0, b.jsx)("aside", {
    className: ui.Banner,
    "aria-label": h.formatMessage(Ge.invitationBannerLabel),
    dir: Ba(h.locale),
    lang: h.locale,
    children: /* @__PURE__ */ (0, b.jsxs)("div", {
      className: ui.Content,
      children: [/* @__PURE__ */ (0, b.jsx)("div", {
        className: ui.Message,
        children: l ? /* @__PURE__ */ (0, b.jsx)(lr, {
          ...Ge.invitationBannerMessageWithOwner,
          values: {
            ownerName: l,
            strong: (_) => /* @__PURE__ */ (0, b.jsx)("strong", {
              className: ui.OwnerName,
              children: _
            })
          }
        }) : /* @__PURE__ */ (0, b.jsx)(lr, { ...Ge.invitationBannerMessage })
      }), /* @__PURE__ */ (0, b.jsxs)("div", {
        className: ui.Actions,
        children: [/* @__PURE__ */ (0, b.jsxs)("a", {
          className: ui.EditLink,
          href: m.toString(),
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: p,
          onPointerEnter: bp,
          children: [/* @__PURE__ */ (0, b.jsx)(Qd, {
            "aria-hidden": "true",
            focusable: "false"
          }), /* @__PURE__ */ (0, b.jsx)(lr, { ...Ge.invitationBannerEditAction })]
        }), /* @__PURE__ */ (0, b.jsx)("button", {
          className: ui.DismissButton,
          type: "button",
          "aria-label": h.formatMessage(Ge.invitationBannerDismissAction),
          onPointerEnter: bp,
          onClick: g,
          children: /* @__PURE__ */ (0, b.jsx)(pr, {
            "aria-hidden": "true",
            focusable: "false"
          })
        })]
      })]
    })
  });
}
var a7 = "codex-browser-sidebar-comments-root";
function od() {
  return document.getElementById(a7) !== null;
}
var i7 = /* @__PURE__ */ Xt(((e) => {
  function a(z, q) {
    var V = z.length;
    z.push(q);
    e: for (; 0 < V; ) {
      var se = V - 1 >>> 1, ge = z[se];
      if (0 < u(ge, q)) z[se] = q, z[V] = ge, V = se;
      else break e;
    }
  }
  function r(z) {
    return z.length === 0 ? null : z[0];
  }
  function l(z) {
    if (z.length === 0) return null;
    var q = z[0], V = z.pop();
    if (V !== q) {
      z[0] = V;
      e: for (var se = 0, ge = z.length, ft = ge >>> 1; se < ft; ) {
        var M = 2 * (se + 1) - 1, Y = z[M], ae = M + 1, le = z[ae];
        if (0 > u(Y, V)) ae < ge && 0 > u(le, Y) ? (z[se] = le, z[ae] = V, se = ae) : (z[se] = Y, z[M] = V, se = M);
        else if (ae < ge && 0 > u(le, V)) z[se] = le, z[ae] = V, se = ae;
        else break e;
      }
    }
    return q;
  }
  function u(z, q) {
    var V = z.sortIndex - q.sortIndex;
    return V !== 0 ? V : z.id - q.id;
  }
  if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var c = performance;
    e.unstable_now = function() {
      return c.now();
    };
  } else {
    var d = Date, h = d.now();
    e.unstable_now = function() {
      return d.now() - h;
    };
  }
  var m = [], g = [], p = 1, _ = null, S = 3, w = !1, A = !1, T = !1, C = !1, R = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
  function D(z) {
    for (var q = r(g); q !== null; ) {
      if (q.callback === null) l(g);
      else if (q.startTime <= z) l(g), q.sortIndex = q.expirationTime, a(m, q);
      else break;
      q = r(g);
    }
  }
  function U(z) {
    if (T = !1, D(z), !A) if (r(m) !== null) A = !0, L || (L = !0, B());
    else {
      var q = r(g);
      q !== null && me(U, q.startTime - z);
    }
  }
  var L = !1, Q = -1, ee = 5, I = -1;
  function te() {
    return C ? !0 : !(e.unstable_now() - I < ee);
  }
  function k() {
    if (C = !1, L) {
      var z = e.unstable_now();
      I = z;
      var q = !0;
      try {
        e: {
          A = !1, T && (T = !1, N(Q), Q = -1), w = !0;
          var V = S;
          try {
            t: {
              for (D(z), _ = r(m); _ !== null && !(_.expirationTime > z && te()); ) {
                var se = _.callback;
                if (typeof se == "function") {
                  _.callback = null, S = _.priorityLevel;
                  var ge = se(_.expirationTime <= z);
                  if (z = e.unstable_now(), typeof ge == "function") {
                    _.callback = ge, D(z), q = !0;
                    break t;
                  }
                  _ === r(m) && l(m), D(z);
                } else l(m);
                _ = r(m);
              }
              if (_ !== null) q = !0;
              else {
                var ft = r(g);
                ft !== null && me(U, ft.startTime - z), q = !1;
              }
            }
            break e;
          } finally {
            _ = null, S = V, w = !1;
          }
          q = void 0;
        }
      } finally {
        q ? B() : L = !1;
      }
    }
  }
  var B;
  if (typeof H == "function") B = function() {
    H(k);
  };
  else if (typeof MessageChannel < "u") {
    var J = new MessageChannel(), ne = J.port2;
    J.port1.onmessage = k, B = function() {
      ne.postMessage(null);
    };
  } else B = function() {
    R(k, 0);
  };
  function me(z, q) {
    Q = R(function() {
      z(e.unstable_now());
    }, q);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
    z.callback = null;
  }, e.unstable_forceFrameRate = function(z) {
    0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < z ? Math.floor(1e3 / z) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return S;
  }, e.unstable_next = function(z) {
    switch (S) {
      case 1:
      case 2:
      case 3:
        var q = 3;
        break;
      default:
        q = S;
    }
    var V = S;
    S = q;
    try {
      return z();
    } finally {
      S = V;
    }
  }, e.unstable_requestPaint = function() {
    C = !0;
  }, e.unstable_runWithPriority = function(z, q) {
    switch (z) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        z = 3;
    }
    var V = S;
    S = z;
    try {
      return q();
    } finally {
      S = V;
    }
  }, e.unstable_scheduleCallback = function(z, q, V) {
    var se = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? se + V : se) : V = se, z) {
      case 1:
        var ge = -1;
        break;
      case 2:
        ge = 250;
        break;
      case 5:
        ge = 1073741823;
        break;
      case 4:
        ge = 1e4;
        break;
      default:
        ge = 5e3;
    }
    return ge = V + ge, z = {
      id: p++,
      callback: q,
      priorityLevel: z,
      startTime: V,
      expirationTime: ge,
      sortIndex: -1
    }, V > se ? (z.sortIndex = V, a(g, z), r(m) === null && z === r(g) && (T ? (N(Q), Q = -1) : T = !0, me(U, V - se))) : (z.sortIndex = ge, a(m, z), A || w || (A = !0, L || (L = !0, B()))), z;
  }, e.unstable_shouldYield = te, e.unstable_wrapCallback = function(z) {
    var q = S;
    return function() {
      var V = S;
      S = q;
      try {
        return z.apply(this, arguments);
      } finally {
        S = V;
      }
    };
  };
})), r7 = /* @__PURE__ */ Xt(((e, a) => {
  a.exports = i7();
})), o7 = /* @__PURE__ */ Xt(((e) => {
  var a = r7(), r = dd(), l = Ng();
  function u(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function d(t) {
    var n = t, i = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do
        n = t, (n.flags & 4098) !== 0 && (i = n.return), t = n.return;
      while (t);
    }
    return n.tag === 3 ? i : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var n = t.memoizedState;
      if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (d(t) !== t) throw Error(u(188));
  }
  function p(t) {
    var n = t.alternate;
    if (!n) {
      if (n = d(t), n === null) throw Error(u(188));
      return n !== t ? null : t;
    }
    for (var i = t, o = n; ; ) {
      var s = i.return;
      if (s === null) break;
      var f = s.alternate;
      if (f === null) {
        if (o = s.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (s.child === f.child) {
        for (f = s.child; f; ) {
          if (f === i) return g(s), t;
          if (f === o) return g(s), n;
          f = f.sibling;
        }
        throw Error(u(188));
      }
      if (i.return !== o.return) i = s, o = f;
      else {
        for (var v = !1, E = s.child; E; ) {
          if (E === i) {
            v = !0, i = s, o = f;
            break;
          }
          if (E === o) {
            v = !0, o = s, i = f;
            break;
          }
          E = E.sibling;
        }
        if (!v) {
          for (E = f.child; E; ) {
            if (E === i) {
              v = !0, i = f, o = s;
              break;
            }
            if (E === o) {
              v = !0, o = f, i = s;
              break;
            }
            E = E.sibling;
          }
          if (!v) throw Error(u(189));
        }
      }
      if (i.alternate !== o) throw Error(u(190));
    }
    if (i.tag !== 3) throw Error(u(188));
    return i.stateNode.current === i ? t : n;
  }
  function _(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (n = _(t), n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  var S = Object.assign, w = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), R = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), H = /* @__PURE__ */ Symbol.for("react.consumer"), D = /* @__PURE__ */ Symbol.for("react.context"), U = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.suspense_list"), ee = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), te = /* @__PURE__ */ Symbol.for("react.activity"), k = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), B = Symbol.iterator;
  function J(t) {
    return t === null || typeof t != "object" ? null : (t = B && t[B] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ne = /* @__PURE__ */ Symbol.for("react.client.reference");
  function me(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === ne ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case C:
        return "Fragment";
      case N:
        return "Profiler";
      case R:
        return "StrictMode";
      case L:
        return "Suspense";
      case Q:
        return "SuspenseList";
      case te:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case T:
        return "Portal";
      case D:
        return t.displayName || "Context";
      case H:
        return (t._context.displayName || "Context") + ".Consumer";
      case U:
        var n = t.render;
        return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case ee:
        return n = t.displayName || null, n !== null ? n : me(t.type) || "Memo";
      case I:
        n = t._payload, t = t._init;
        try {
          return me(t(n));
        } catch {
        }
    }
    return null;
  }
  var z = Array.isArray, q = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ge = [], ft = -1;
  function M(t) {
    return { current: t };
  }
  function Y(t) {
    0 > ft || (t.current = ge[ft], ge[ft] = null, ft--);
  }
  function ae(t, n) {
    ft++, ge[ft] = t.current, t.current = n;
  }
  var le = M(null), be = M(null), ve = M(null), xe = M(null);
  function lt(t, n) {
    switch (ae(ve, n), ae(be, t), ae(le, null), n.nodeType) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? S0(t) : 0;
        break;
      default:
        if (t = n.tagName, n = n.namespaceURI) n = S0(n), t = E0(n, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    Y(le), ae(le, t);
  }
  function He() {
    Y(le), Y(be), Y(ve);
  }
  function dn(t) {
    t.memoizedState !== null && ae(xe, t);
    var n = le.current, i = E0(n, t.type);
    n !== i && (ae(be, t), ae(le, i));
  }
  function wn(t) {
    be.current === t && (Y(le), Y(be)), xe.current === t && (Y(xe), mo._currentValue = se);
  }
  var Tn, Er;
  function Cn(t) {
    if (Tn === void 0) try {
      throw Error();
    } catch (i) {
      var n = i.stack.trim().match(/\n( *(at )?)/);
      Tn = n && n[1] || "", Er = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Tn + t + Er;
  }
  var wr = !1;
  function Tr(t, n) {
    if (!t || wr) return "";
    wr = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = { DetermineComponentFrameRoot: function() {
        try {
          if (n) {
            var K = function() {
              throw Error();
            };
            if (Object.defineProperty(K.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(K, []);
              } catch ($) {
                var G = $;
              }
              Reflect.construct(t, [], K);
            } else {
              try {
                K.call();
              } catch ($) {
                G = $;
              }
              t.call(K.prototype);
            }
          } else {
            try {
              throw Error();
            } catch ($) {
              G = $;
            }
            (K = t()) && typeof K.catch == "function" && K.catch(function() {
            });
          }
        } catch ($) {
          if ($ && G && typeof $.stack == "string") return [$.stack, G.stack];
        }
        return [null, null];
      } };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
      s && s.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var f = o.DetermineComponentFrameRoot(), v = f[0], E = f[1];
      if (v && E) {
        var x = v.split(`
`), Z = E.split(`
`);
        for (s = o = 0; o < x.length && !x[o].includes("DetermineComponentFrameRoot"); ) o++;
        for (; s < Z.length && !Z[s].includes("DetermineComponentFrameRoot"); ) s++;
        if (o === x.length || s === Z.length) for (o = x.length - 1, s = Z.length - 1; 1 <= o && 0 <= s && x[o] !== Z[s]; ) s--;
        for (; 1 <= o && 0 <= s; o--, s--) if (x[o] !== Z[s]) {
          if (o !== 1 || s !== 1) do
            if (o--, s--, 0 > s || x[o] !== Z[s]) {
              var F = `
` + x[o].replace(" at new ", " at ");
              return t.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", t.displayName)), F;
            }
          while (1 <= o && 0 <= s);
          break;
        }
      }
    } finally {
      wr = !1, Error.prepareStackTrace = i;
    }
    return (i = t ? t.displayName || t.name : "") ? Cn(i) : "";
  }
  function Ku(t, n) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Cn(t.type);
      case 16:
        return Cn("Lazy");
      case 13:
        return t.child !== n && n !== null ? Cn("Suspense Fallback") : Cn("Suspense");
      case 19:
        return Cn("SuspenseList");
      case 0:
      case 15:
        return Tr(t.type, !1);
      case 11:
        return Tr(t.type.render, !1);
      case 1:
        return Tr(t.type, !0);
      case 31:
        return Cn("Activity");
      default:
        return "";
    }
  }
  function jo(t) {
    try {
      var n = "", i = null;
      do
        n += Ku(t, i), i = t, t = t.return;
      while (t);
      return n;
    } catch (o) {
      return `
Error generating stack: ` + o.message + `
` + o.stack;
    }
  }
  var ce = Object.prototype.hasOwnProperty, mt = a.unstable_scheduleCallback, hn = a.unstable_cancelCallback, mn = a.unstable_shouldYield, Ju = a.unstable_requestPaint, jt = a.unstable_now, Rb = a.unstable_getCurrentPriorityLevel, eh = a.unstable_ImmediatePriority, th = a.unstable_UserBlockingPriority, Bo = a.unstable_NormalPriority, Nb = a.unstable_LowPriority, nh = a.unstable_IdlePriority, Db = a.log, zb = a.unstable_setDisableYieldValue, Cr = null, Bt = null;
  function la(t) {
    if (typeof Db == "function" && zb(t), Bt && typeof Bt.setStrictMode == "function") try {
      Bt.setStrictMode(Cr, t);
    } catch {
    }
  }
  var Ut = Math.clz32 ? Math.clz32 : jb, Hb = Math.log, Lb = Math.LN2;
  function jb(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Hb(t) / Lb | 0) | 0;
  }
  var Uo = 256, Po = 262144, Zo = 4194304;
  function Ga(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Go(t, n, i) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var s = 0, f = t.suspendedLanes, v = t.pingedLanes;
    t = t.warmLanes;
    var E = o & 134217727;
    return E !== 0 ? (o = E & ~f, o !== 0 ? s = Ga(o) : (v &= E, v !== 0 ? s = Ga(v) : i || (i = E & ~t, i !== 0 && (s = Ga(i))))) : (E = o & ~f, E !== 0 ? s = Ga(E) : v !== 0 ? s = Ga(v) : i || (i = o & ~t, i !== 0 && (s = Ga(i)))), s === 0 ? 0 : n !== 0 && n !== s && (n & f) === 0 && (f = s & -s, i = n & -n, f >= i || f === 32 && (i & 4194048) !== 0) ? n : s;
  }
  function Ar(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function Bb(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ah() {
    var t = Zo;
    return Zo <<= 1, (Zo & 62914560) === 0 && (Zo = 4194304), t;
  }
  function es(t) {
    for (var n = [], i = 0; 31 > i; i++) n.push(t);
    return n;
  }
  function ko(t, n) {
    t.pendingLanes |= n, n !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Ub(t, n, i, o, s, f) {
    var v = t.pendingLanes;
    t.pendingLanes = i, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= i, t.entangledLanes &= i, t.errorRecoveryDisabledLanes &= i, t.shellSuspendCounter = 0;
    var E = t.entanglements, x = t.expirationTimes, Z = t.hiddenUpdates;
    for (i = v & ~i; 0 < i; ) {
      var F = 31 - Ut(i), K = 1 << F;
      E[F] = 0, x[F] = -1;
      var G = Z[F];
      if (G !== null) for (Z[F] = null, F = 0; F < G.length; F++) {
        var $ = G[F];
        $ !== null && ($.lane &= -536870913);
      }
      i &= ~K;
    }
    o !== 0 && ih(t, o, 0), f !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(v & ~n));
  }
  function ih(t, n, i) {
    t.pendingLanes |= n, t.suspendedLanes &= ~n;
    var o = 31 - Ut(n);
    t.entangledLanes |= n, t.entanglements[o] = t.entanglements[o] | 1073741824 | i & 261930;
  }
  function rh(t, n) {
    var i = t.entangledLanes |= n;
    for (t = t.entanglements; i; ) {
      var o = 31 - Ut(i), s = 1 << o;
      s & n | t[o] & n && (t[o] |= n), i &= ~s;
    }
  }
  function oh(t, n) {
    var i = n & -n;
    return i = (i & 42) !== 0 ? 1 : lh(i), (i & (t.suspendedLanes | n)) !== 0 ? 0 : i;
  }
  function lh(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ts(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function uh() {
    var t = V.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : I0(t.type));
  }
  function sh(t, n) {
    var i = V.p;
    try {
      return V.p = t, n();
    } finally {
      V.p = i;
    }
  }
  var ua = Math.random().toString(36).slice(2), vt = "__reactFiber$" + ua, xt = "__reactProps$" + ua, xr = "__reactContainer$" + ua, ns = "__reactEvents$" + ua, Pb = "__reactListeners$" + ua, Zb = "__reactHandles$" + ua, ch = "__reactResources$" + ua, Or = "__reactMarker$" + ua;
  function as(t) {
    delete t[vt], delete t[xt], delete t[ns], delete t[Pb], delete t[Zb];
  }
  function yi(t) {
    var n = t[vt];
    if (n) return n;
    for (var i = t.parentNode; i; ) {
      if (n = i[xr] || i[vt]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null) for (t = M0(t); t !== null; ) {
          if (i = t[vt]) return i;
          t = M0(t);
        }
        return n;
      }
      t = i, i = t.parentNode;
    }
    return null;
  }
  function bi(t) {
    if (t = t[vt] || t[xr]) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return t;
    }
    return null;
  }
  function Mr(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(u(33));
  }
  function _i(t) {
    var n = t[ch];
    return n || (n = t[ch] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), n;
  }
  function dt(t) {
    t[Or] = !0;
  }
  var fh = /* @__PURE__ */ new Set(), dh = {};
  function ka(t, n) {
    Si(t, n), Si(t + "Capture", n);
  }
  function Si(t, n) {
    for (dh[t] = n, t = 0; t < n.length; t++) fh.add(n[t]);
  }
  var Gb = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), hh = {}, mh = {};
  function kb(t) {
    return ce.call(mh, t) ? !0 : ce.call(hh, t) ? !1 : Gb.test(t) ? mh[t] = !0 : (hh[t] = !0, !1);
  }
  function Io(t, n, i) {
    if (kb(n)) if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(n);
          return;
        case "boolean":
          var o = n.toLowerCase().slice(0, 5);
          if (o !== "data-" && o !== "aria-") {
            t.removeAttribute(n);
            return;
          }
      }
      t.setAttribute(n, "" + i);
    }
  }
  function $o(t, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + i);
    }
  }
  function Pn(t, n, i, o) {
    if (o === null) t.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(i);
          return;
      }
      t.setAttributeNS(n, i, "" + o);
    }
  }
  function Wt(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function vh(t) {
    var n = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Ib(t, n, i) {
    var o = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
    if (!t.hasOwnProperty(n) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var s = o.get, f = o.set;
      return Object.defineProperty(t, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(v) {
          i = "" + v, f.call(this, v);
        }
      }), Object.defineProperty(t, n, { enumerable: o.enumerable }), {
        getValue: function() {
          return i;
        },
        setValue: function(v) {
          i = "" + v;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[n];
        }
      };
    }
  }
  function is(t) {
    if (!t._valueTracker) {
      var n = vh(t) ? "checked" : "value";
      t._valueTracker = Ib(t, n, "" + t[n]);
    }
  }
  function ph(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var i = n.getValue(), o = "";
    return t && (o = vh(t) ? t.checked ? "true" : "false" : t.value), t = o, t !== i ? (n.setValue(t), !0) : !1;
  }
  function qo(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var $b = /[\n"\\]/g;
  function Qt(t) {
    return t.replace($b, function(n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function rs(t, n, i, o, s, f, v, E) {
    t.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.type = v : t.removeAttribute("type"), n != null ? v === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + Wt(n)) : t.value !== "" + Wt(n) && (t.value = "" + Wt(n)) : v !== "submit" && v !== "reset" || t.removeAttribute("value"), n != null ? os(t, v, Wt(n)) : i != null ? os(t, v, Wt(i)) : o != null && t.removeAttribute("value"), s == null && f != null && (t.defaultChecked = !!f), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" ? t.name = "" + Wt(E) : t.removeAttribute("name");
  }
  function gh(t, n, i, o, s, f, v, E) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.type = f), n != null || i != null) {
      if (!(f !== "submit" && f !== "reset" || n != null)) {
        is(t);
        return;
      }
      i = i != null ? "" + Wt(i) : "", n = n != null ? "" + Wt(n) : i, E || n === t.value || (t.value = n), t.defaultValue = n;
    }
    o = o ?? s, o = typeof o != "function" && typeof o != "symbol" && !!o, t.checked = E ? t.checked : !!o, t.defaultChecked = !!o, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (t.name = v), is(t);
  }
  function os(t, n, i) {
    n === "number" && qo(t.ownerDocument) === t || t.defaultValue === "" + i || (t.defaultValue = "" + i);
  }
  function Ei(t, n, i, o) {
    if (t = t.options, n) {
      n = {};
      for (var s = 0; s < i.length; s++) n["$" + i[s]] = !0;
      for (i = 0; i < t.length; i++) s = n.hasOwnProperty("$" + t[i].value), t[i].selected !== s && (t[i].selected = s), s && o && (t[i].defaultSelected = !0);
    } else {
      for (i = "" + Wt(i), n = null, s = 0; s < t.length; s++) {
        if (t[s].value === i) {
          t[s].selected = !0, o && (t[s].defaultSelected = !0);
          return;
        }
        n !== null || t[s].disabled || (n = t[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function yh(t, n, i) {
    if (n != null && (n = "" + Wt(n), n !== t.value && (t.value = n), i == null)) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = i != null ? "" + Wt(i) : "";
  }
  function bh(t, n, i, o) {
    if (n == null) {
      if (o != null) {
        if (i != null) throw Error(u(92));
        if (z(o)) {
          if (1 < o.length) throw Error(u(93));
          o = o[0];
        }
        i = o;
      }
      i ??= "", n = i;
    }
    i = Wt(n), t.defaultValue = i, o = t.textContent, o === i && o !== "" && o !== null && (t.value = o), is(t);
  }
  function wi(t, n) {
    if (n) {
      var i = t.firstChild;
      if (i && i === t.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var qb = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function _h(t, n, i) {
    var o = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : o ? t.setProperty(n, i) : typeof i != "number" || i === 0 || qb.has(n) ? n === "float" ? t.cssFloat = i : t[n] = ("" + i).trim() : t[n] = i + "px";
  }
  function Sh(t, n, i) {
    if (n != null && typeof n != "object") throw Error(u(62));
    if (t = t.style, i != null) {
      for (var o in i) !i.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? t.setProperty(o, "") : o === "float" ? t.cssFloat = "" : t[o] = "");
      for (var s in n) o = n[s], n.hasOwnProperty(s) && i[s] !== o && _h(t, s, o);
    } else for (var f in n) n.hasOwnProperty(f) && _h(t, f, n[f]);
  }
  function ls(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vb = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Fb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vo(t) {
    return Fb.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Zn() {
  }
  var us = null;
  function ss(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ti = null, Ci = null;
  function Eh(t) {
    var n = bi(t);
    if (n && (t = n.stateNode)) {
      var i = t[xt] || null;
      e: switch (t = n.stateNode, n.type) {
        case "input":
          if (rs(t, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name), n = i.name, i.type === "radio" && n != null) {
            for (i = t; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll('input[name="' + Qt("" + n) + '"][type="radio"]'), n = 0; n < i.length; n++) {
              var o = i[n];
              if (o !== t && o.form === t.form) {
                var s = o[xt] || null;
                if (!s) throw Error(u(90));
                rs(o, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name);
              }
            }
            for (n = 0; n < i.length; n++) o = i[n], o.form === t.form && ph(o);
          }
          break e;
        case "textarea":
          yh(t, i.value, i.defaultValue);
          break e;
        case "select":
          n = i.value, n != null && Ei(t, !!i.multiple, n, !1);
      }
    }
  }
  var cs = !1;
  function wh(t, n, i) {
    if (cs) return t(n, i);
    cs = !0;
    try {
      return t(n);
    } finally {
      if (cs = !1, (Ti !== null || Ci !== null) && (zl(), Ti && (n = Ti, t = Ci, Ci = Ti = null, Eh(n), t)))
        for (n = 0; n < t.length; n++) Eh(t[n]);
    }
  }
  function Rr(t, n) {
    var i = t.stateNode;
    if (i === null) return null;
    var o = i[xt] || null;
    if (o === null) return null;
    i = o[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (t = t.type, o = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !o;
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (i && typeof i != "function") throw Error(u(231, n, typeof i));
    return i;
  }
  var Gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fs = !1;
  if (Gn) try {
    var Nr = {};
    Object.defineProperty(Nr, "passive", { get: function() {
      fs = !0;
    } }), window.addEventListener("test", Nr, Nr), window.removeEventListener("test", Nr, Nr);
  } catch {
    fs = !1;
  }
  var sa = null, ds = null, Fo = null;
  function Th() {
    if (Fo) return Fo;
    var t, n = ds, i = n.length, o, s = "value" in sa ? sa.value : sa.textContent, f = s.length;
    for (t = 0; t < i && n[t] === s[t]; t++) ;
    var v = i - t;
    for (o = 1; o <= v && n[i - o] === s[f - o]; o++) ;
    return Fo = s.slice(t, 1 < o ? 1 - o : void 0);
  }
  function Xo(t) {
    var n = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Yo() {
    return !0;
  }
  function Ch() {
    return !1;
  }
  function Ot(t) {
    function n(i, o, s, f, v) {
      this._reactName = i, this._targetInst = s, this.type = o, this.nativeEvent = f, this.target = v, this.currentTarget = null;
      for (var E in t) t.hasOwnProperty(E) && (i = t[E], this[E] = i ? i(f) : f[E]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Yo : Ch, this.isPropagationStopped = Ch, this;
    }
    return S(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Yo);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Yo);
      },
      persist: function() {
      },
      isPersistent: Yo
    }), n;
  }
  var Ia = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Wo = Ot(Ia), Dr = S({}, Ia, {
    view: 0,
    detail: 0
  }), Xb = Ot(Dr), hs, ms, zr, Qo = S({}, Dr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ps,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== zr && (zr && t.type === "mousemove" ? (hs = t.screenX - zr.screenX, ms = t.screenY - zr.screenY) : ms = hs = 0, zr = t), hs);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : ms;
    }
  }), Ah = Ot(Qo), Yb = Ot(S({}, Qo, { dataTransfer: 0 })), vs = Ot(S({}, Dr, { relatedTarget: 0 })), Wb = Ot(S({}, Ia, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Qb = Ot(S({}, Ia, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } })), xh = Ot(S({}, Ia, { data: 0 })), Kb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Jb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, e_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function t_(t) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(t) : (t = e_[t]) ? !!n[t] : !1;
  }
  function ps() {
    return t_;
  }
  var n_ = Ot(S({}, Dr, {
    key: function(t) {
      if (t.key) {
        var n = Kb[t.key] || t.key;
        if (n !== "Unidentified") return n;
      }
      return t.type === "keypress" ? (t = Xo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Jb[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ps,
    charCode: function(t) {
      return t.type === "keypress" ? Xo(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Xo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  })), Oh = Ot(S({}, Qo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  })), a_ = Ot(S({}, Dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ps
  })), i_ = Ot(S({}, Ia, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), r_ = Ot(S({}, Qo, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), o_ = Ot(S({}, Ia, {
    newState: 0,
    oldState: 0
  })), l_ = [
    9,
    13,
    27,
    32
  ], gs = Gn && "CompositionEvent" in window, Hr = null;
  Gn && "documentMode" in document && (Hr = document.documentMode);
  var u_ = Gn && "TextEvent" in window && !Hr, Mh = Gn && (!gs || Hr && 8 < Hr && 11 >= Hr), Rh = " ", Nh = !1;
  function Dh(t, n) {
    switch (t) {
      case "keyup":
        return l_.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function zh(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ai = !1;
  function s_(t, n) {
    switch (t) {
      case "compositionend":
        return zh(n);
      case "keypress":
        return n.which !== 32 ? null : (Nh = !0, Rh);
      case "textInput":
        return t = n.data, t === Rh && Nh ? null : t;
      default:
        return null;
    }
  }
  function c_(t, n) {
    if (Ai) return t === "compositionend" || !gs && Dh(t, n) ? (t = Th(), Fo = ds = sa = null, Ai = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Mh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var f_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Hh(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!f_[t.type] : n === "textarea";
  }
  function Lh(t, n, i, o) {
    Ti ? Ci ? Ci.push(o) : Ci = [o] : Ti = o, n = Zl(n, "onChange"), 0 < n.length && (i = new Wo("onChange", "change", null, i, o), t.push({
      event: i,
      listeners: n
    }));
  }
  var Lr = null, jr = null;
  function d_(t) {
    m0(t, 0);
  }
  function Ko(t) {
    if (ph(Mr(t))) return t;
  }
  function jh(t, n) {
    if (t === "change") return n;
  }
  var Bh = !1;
  if (Gn) {
    var ys;
    if (Gn) {
      var bs = "oninput" in document;
      if (!bs) {
        var Uh = document.createElement("div");
        Uh.setAttribute("oninput", "return;"), bs = typeof Uh.oninput == "function";
      }
      ys = bs;
    } else ys = !1;
    Bh = ys && (!document.documentMode || 9 < document.documentMode);
  }
  function Ph() {
    Lr && (Lr.detachEvent("onpropertychange", Zh), jr = Lr = null);
  }
  function Zh(t) {
    if (t.propertyName === "value" && Ko(jr)) {
      var n = [];
      Lh(n, jr, t, ss(t)), wh(d_, n);
    }
  }
  function h_(t, n, i) {
    t === "focusin" ? (Ph(), Lr = n, jr = i, Lr.attachEvent("onpropertychange", Zh)) : t === "focusout" && Ph();
  }
  function m_(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ko(jr);
  }
  function v_(t, n) {
    if (t === "click") return Ko(n);
  }
  function p_(t, n) {
    if (t === "input" || t === "change") return Ko(n);
  }
  function g_(t, n) {
    return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
  }
  var Pt = typeof Object.is == "function" ? Object.is : g_;
  function Br(t, n) {
    if (Pt(t, n)) return !0;
    if (typeof t != "object" || t === null || typeof n != "object" || n === null) return !1;
    var i = Object.keys(t), o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var s = i[o];
      if (!ce.call(n, s) || !Pt(t[s], n[s])) return !1;
    }
    return !0;
  }
  function Gh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function kh(t, n) {
    var i = Gh(t);
    t = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = t + i.textContent.length, t <= n && o >= n) return {
          node: i,
          offset: n - t
        };
        t = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Gh(i);
    }
  }
  function Ih(t, n) {
    return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ih(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function $h(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var n = qo(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) t = n.contentWindow;
      else break;
      n = qo(t.document);
    }
    return n;
  }
  function _s(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
  }
  var y_ = Gn && "documentMode" in document && 11 >= document.documentMode, xi = null, Ss = null, Ur = null, Es = !1;
  function qh(t, n, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Es || xi == null || xi !== qo(o) || (o = xi, "selectionStart" in o && _s(o) ? o = {
      start: o.selectionStart,
      end: o.selectionEnd
    } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Ur && Br(Ur, o) || (Ur = o, o = Zl(Ss, "onSelect"), 0 < o.length && (n = new Wo("onSelect", "select", null, n, i), t.push({
      event: n,
      listeners: o
    }), n.target = xi)));
  }
  function $a(t, n) {
    var i = {};
    return i[t.toLowerCase()] = n.toLowerCase(), i["Webkit" + t] = "webkit" + n, i["Moz" + t] = "moz" + n, i;
  }
  var Oi = {
    animationend: $a("Animation", "AnimationEnd"),
    animationiteration: $a("Animation", "AnimationIteration"),
    animationstart: $a("Animation", "AnimationStart"),
    transitionrun: $a("Transition", "TransitionRun"),
    transitionstart: $a("Transition", "TransitionStart"),
    transitioncancel: $a("Transition", "TransitionCancel"),
    transitionend: $a("Transition", "TransitionEnd")
  }, ws = {}, Vh = {};
  Gn && (Vh = document.createElement("div").style, "AnimationEvent" in window || (delete Oi.animationend.animation, delete Oi.animationiteration.animation, delete Oi.animationstart.animation), "TransitionEvent" in window || delete Oi.transitionend.transition);
  function qa(t) {
    if (ws[t]) return ws[t];
    if (!Oi[t]) return t;
    var n = Oi[t], i;
    for (i in n) if (n.hasOwnProperty(i) && i in Vh) return ws[t] = n[i];
    return t;
  }
  var Fh = qa("animationend"), Xh = qa("animationiteration"), Yh = qa("animationstart"), b_ = qa("transitionrun"), __ = qa("transitionstart"), S_ = qa("transitioncancel"), Wh = qa("transitionend"), Qh = /* @__PURE__ */ new Map(), Ts = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Ts.push("scrollEnd");
  function vn(t, n) {
    Qh.set(t, n), ka(n, [t]);
  }
  var Jo = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Kt = [], Mi = 0, Cs = 0;
  function el() {
    for (var t = Mi, n = Cs = Mi = 0; n < t; ) {
      var i = Kt[n];
      Kt[n++] = null;
      var o = Kt[n];
      Kt[n++] = null;
      var s = Kt[n];
      Kt[n++] = null;
      var f = Kt[n];
      if (Kt[n++] = null, o !== null && s !== null) {
        var v = o.pending;
        v === null ? s.next = s : (s.next = v.next, v.next = s), o.pending = s;
      }
      f !== 0 && Kh(i, s, f);
    }
  }
  function tl(t, n, i, o) {
    Kt[Mi++] = t, Kt[Mi++] = n, Kt[Mi++] = i, Kt[Mi++] = o, Cs |= o, t.lanes |= o, t = t.alternate, t !== null && (t.lanes |= o);
  }
  function As(t, n, i, o) {
    return tl(t, n, i, o), nl(t);
  }
  function Va(t, n) {
    return tl(t, null, null, n), nl(t);
  }
  function Kh(t, n, i) {
    t.lanes |= i;
    var o = t.alternate;
    o !== null && (o.lanes |= i);
    for (var s = !1, f = t.return; f !== null; ) f.childLanes |= i, o = f.alternate, o !== null && (o.childLanes |= i), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & 1 || (s = !0)), t = f, f = f.return;
    return t.tag === 3 ? (f = t.stateNode, s && n !== null && (s = 31 - Ut(i), t = f.hiddenUpdates, o = t[s], o === null ? t[s] = [n] : o.push(n), n.lane = i | 536870912), f) : null;
  }
  function nl(t) {
    if (50 < oo) throw oo = 0, Lc = null, Error(u(185));
    for (var n = t.return; n !== null; ) t = n, n = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ri = {};
  function E_(t, n, i, o) {
    this.tag = t, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Zt(t, n, i, o) {
    return new E_(t, n, i, o);
  }
  function xs(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function kn(t, n) {
    var i = t.alternate;
    return i === null ? (i = Zt(t.tag, n, t.key, t.mode), i.elementType = t.elementType, i.type = t.type, i.stateNode = t.stateNode, i.alternate = t, t.alternate = i) : (i.pendingProps = n, i.type = t.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = t.flags & 65011712, i.childLanes = t.childLanes, i.lanes = t.lanes, i.child = t.child, i.memoizedProps = t.memoizedProps, i.memoizedState = t.memoizedState, i.updateQueue = t.updateQueue, n = t.dependencies, i.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }, i.sibling = t.sibling, i.index = t.index, i.ref = t.ref, i.refCleanup = t.refCleanup, i;
  }
  function Jh(t, n) {
    t.flags &= 65011714;
    var i = t.alternate;
    return i === null ? (t.childLanes = 0, t.lanes = n, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = i.childLanes, t.lanes = i.lanes, t.child = i.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = i.memoizedProps, t.memoizedState = i.memoizedState, t.updateQueue = i.updateQueue, t.type = i.type, n = i.dependencies, t.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), t;
  }
  function al(t, n, i, o, s, f) {
    var v = 0;
    if (o = t, typeof t == "function") xs(t) && (v = 1);
    else if (typeof t == "string") v = O2(t, i, le.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else e: switch (t) {
      case te:
        return t = Zt(31, i, n, s), t.elementType = te, t.lanes = f, t;
      case C:
        return Fa(i.children, s, f, n);
      case R:
        v = 8, s |= 24;
        break;
      case N:
        return t = Zt(12, i, n, s | 2), t.elementType = N, t.lanes = f, t;
      case L:
        return t = Zt(13, i, n, s), t.elementType = L, t.lanes = f, t;
      case Q:
        return t = Zt(19, i, n, s), t.elementType = Q, t.lanes = f, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case D:
            v = 10;
            break e;
          case H:
            v = 9;
            break e;
          case U:
            v = 11;
            break e;
          case ee:
            v = 14;
            break e;
          case I:
            v = 16, o = null;
            break e;
        }
        v = 29, i = Error(u(130, t === null ? "null" : typeof t, "")), o = null;
    }
    return n = Zt(v, i, n, s), n.elementType = t, n.type = o, n.lanes = f, n;
  }
  function Fa(t, n, i, o) {
    return t = Zt(7, t, o, n), t.lanes = i, t;
  }
  function Os(t, n, i) {
    return t = Zt(6, t, null, n), t.lanes = i, t;
  }
  function em(t) {
    var n = Zt(18, null, null, 0);
    return n.stateNode = t, n;
  }
  function Ms(t, n, i) {
    return n = Zt(4, t.children !== null ? t.children : [], t.key, n), n.lanes = i, n.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, n;
  }
  var tm = /* @__PURE__ */ new WeakMap();
  function Jt(t, n) {
    if (typeof t == "object" && t !== null) {
      var i = tm.get(t);
      return i !== void 0 ? i : (n = {
        value: t,
        source: n,
        stack: jo(n)
      }, tm.set(t, n), n);
    }
    return {
      value: t,
      source: n,
      stack: jo(n)
    };
  }
  var Ni = [], Di = 0, il = null, Pr = 0, en = [], tn = 0, ca = null, An = 1, xn = "";
  function In(t, n) {
    Ni[Di++] = Pr, Ni[Di++] = il, il = t, Pr = n;
  }
  function nm(t, n, i) {
    en[tn++] = An, en[tn++] = xn, en[tn++] = ca, ca = t;
    var o = An;
    t = xn;
    var s = 32 - Ut(o) - 1;
    o &= ~(1 << s), i += 1;
    var f = 32 - Ut(n) + s;
    if (30 < f) {
      var v = s - s % 5;
      f = (o & (1 << v) - 1).toString(32), o >>= v, s -= v, An = 1 << 32 - Ut(n) + s | i << s | o, xn = f + t;
    } else An = 1 << f | i << s | o, xn = t;
  }
  function Rs(t) {
    t.return !== null && (In(t, 1), nm(t, 1, 0));
  }
  function Ns(t) {
    for (; t === il; ) il = Ni[--Di], Ni[Di] = null, Pr = Ni[--Di], Ni[Di] = null;
    for (; t === ca; ) ca = en[--tn], en[tn] = null, xn = en[--tn], en[tn] = null, An = en[--tn], en[tn] = null;
  }
  function am(t, n) {
    en[tn++] = An, en[tn++] = xn, en[tn++] = ca, An = n.id, xn = n.overflow, ca = t;
  }
  var pt = null, $e = null, Ce = !1, fa = null, nn = !1, Ds = Error(u(519));
  function da(t) {
    throw Zr(Jt(Error(u(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), t)), Ds;
  }
  function im(t) {
    var n = t.stateNode, i = t.type, o = t.memoizedProps;
    switch (n[vt] = t, n[xt] = o, i) {
      case "dialog":
        Ee("cancel", n), Ee("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ee("load", n);
        break;
      case "video":
      case "audio":
        for (i = 0; i < uo.length; i++) Ee(uo[i], n);
        break;
      case "source":
        Ee("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ee("error", n), Ee("load", n);
        break;
      case "details":
        Ee("toggle", n);
        break;
      case "input":
        Ee("invalid", n), gh(n, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0);
        break;
      case "select":
        Ee("invalid", n);
        break;
      case "textarea":
        Ee("invalid", n), bh(n, o.value, o.defaultValue, o.children);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || o.suppressHydrationWarning === !0 || b0(n.textContent, i) ? (o.popover != null && (Ee("beforetoggle", n), Ee("toggle", n)), o.onScroll != null && Ee("scroll", n), o.onScrollEnd != null && Ee("scrollend", n), o.onClick != null && (n.onclick = Zn), n = !0) : n = !1, n || da(t, !0);
  }
  function rm(t) {
    for (pt = t.return; pt; ) switch (pt.tag) {
      case 5:
      case 31:
      case 13:
        nn = !1;
        return;
      case 27:
      case 3:
        nn = !0;
        return;
      default:
        pt = pt.return;
    }
  }
  function zi(t) {
    if (t !== pt) return !1;
    if (!Ce) return rm(t), Ce = !0, !1;
    var n = t.tag, i;
    if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = t.type, i = !(i !== "form" && i !== "button") || Yc(t.type, t.memoizedProps)), i = !i), i && $e && da(t), rm(t), n === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      $e = O0(t);
    } else if (n === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      $e = O0(t);
    } else n === 27 ? (n = $e, Ta(t.type) ? (t = ef, ef = null, $e = t) : $e = n) : $e = pt ? on(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Xa() {
    $e = pt = null, Ce = !1;
  }
  function zs() {
    var t = fa;
    return t !== null && (Dt === null ? Dt = t : Dt.push.apply(Dt, t), fa = null), t;
  }
  function Zr(t) {
    fa === null ? fa = [t] : fa.push(t);
  }
  var Hs = M(null), Ya = null, $n = null;
  function ha(t, n, i) {
    ae(Hs, n._currentValue), n._currentValue = i;
  }
  function qn(t) {
    t._currentValue = Hs.current, Y(Hs);
  }
  function Ls(t, n, i) {
    for (; t !== null; ) {
      var o = t.alternate;
      if ((t.childLanes & n) !== n ? (t.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), t === i) break;
      t = t.return;
    }
  }
  function js(t, n, i, o) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var f = s.dependencies;
      if (f !== null) {
        var v = s.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var E = f;
          f = s;
          for (var x = 0; x < n.length; x++) if (E.context === n[x]) {
            f.lanes |= i, E = f.alternate, E !== null && (E.lanes |= i), Ls(f.return, i, t), o || (v = null);
            break e;
          }
          f = E.next;
        }
      } else if (s.tag === 18) {
        if (v = s.return, v === null) throw Error(u(341));
        v.lanes |= i, f = v.alternate, f !== null && (f.lanes |= i), Ls(v, i, t), v = null;
      } else v = s.child;
      if (v !== null) v.return = s;
      else for (v = s; v !== null; ) {
        if (v === t) {
          v = null;
          break;
        }
        if (s = v.sibling, s !== null) {
          s.return = v.return, v = s;
          break;
        }
        v = v.return;
      }
      s = v;
    }
  }
  function Hi(t, n, i, o) {
    t = null;
    for (var s = n, f = !1; s !== null; ) {
      if (!f) {
        if ((s.flags & 524288) !== 0) f = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var v = s.alternate;
        if (v === null) throw Error(u(387));
        if (v = v.memoizedProps, v !== null) {
          var E = s.type;
          Pt(s.pendingProps.value, v.value) || (t !== null ? t.push(E) : t = [E]);
        }
      } else if (s === xe.current) {
        if (v = s.alternate, v === null) throw Error(u(387));
        v.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(mo) : t = [mo]);
      }
      s = s.return;
    }
    t !== null && js(n, t, i, o), n.flags |= 262144;
  }
  function rl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Pt(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Wa(t) {
    Ya = t, $n = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function gt(t) {
    return om(Ya, t);
  }
  function ol(t, n) {
    return Ya === null && Wa(t), om(t, n);
  }
  function om(t, n) {
    var i = n._currentValue;
    if (n = {
      context: n,
      memoizedValue: i,
      next: null
    }, $n === null) {
      if (t === null) throw Error(u(308));
      $n = n, t.dependencies = {
        lanes: 0,
        firstContext: n
      }, t.flags |= 524288;
    } else $n = $n.next = n;
    return i;
  }
  var w_ = typeof AbortController < "u" ? AbortController : function() {
    var t = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(i, o) {
        t.push(o);
      }
    };
    this.abort = function() {
      n.aborted = !0, t.forEach(function(i) {
        return i();
      });
    };
  }, T_ = a.unstable_scheduleCallback, C_ = a.unstable_NormalPriority, at = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Bs() {
    return {
      controller: new w_(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Gr(t) {
    t.refCount--, t.refCount === 0 && T_(C_, function() {
      t.controller.abort();
    });
  }
  var kr = null, Us = 0, Li = 0, ji = null;
  function A_(t, n) {
    if (kr === null) {
      var i = kr = [];
      Us = 0, Li = Gc(), ji = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return Us++, n.then(lm, lm), n;
  }
  function lm() {
    if (--Us === 0 && kr !== null) {
      ji !== null && (ji.status = "fulfilled");
      var t = kr;
      kr = null, Li = 0, ji = null;
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function x_(t, n) {
    var i = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        i.push(s);
      }
    };
    return t.then(function() {
      o.status = "fulfilled", o.value = n;
      for (var s = 0; s < i.length; s++) (0, i[s])(n);
    }, function(s) {
      for (o.status = "rejected", o.reason = s, s = 0; s < i.length; s++) (0, i[s])(void 0);
    }), o;
  }
  var um = q.S;
  q.S = function(t, n) {
    kv = jt(), typeof n == "object" && n !== null && typeof n.then == "function" && A_(t, n), um !== null && um(t, n);
  };
  var Qa = M(null);
  function Ps() {
    var t = Qa.current;
    return t !== null ? t : Ze.pooledCache;
  }
  function ll(t, n) {
    n === null ? ae(Qa, Qa.current) : ae(Qa, n.pool);
  }
  function sm() {
    var t = Ps();
    return t === null ? null : {
      parent: at._currentValue,
      pool: t
    };
  }
  var Bi = Error(u(460)), Zs = Error(u(474)), ul = Error(u(542)), sl = { then: function() {
  } };
  function cm(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function fm(t, n, i) {
    switch (i = t[i], i === void 0 ? t.push(n) : i !== n && (n.then(Zn, Zn), n = i), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw t = n.reason, hm(t), t;
      default:
        if (typeof n.status == "string") n.then(Zn, Zn);
        else {
          if (t = Ze, t !== null && 100 < t.shellSuspendCounter) throw Error(u(482));
          t = n, t.status = "pending", t.then(function(o) {
            if (n.status === "pending") {
              var s = n;
              s.status = "fulfilled", s.value = o;
            }
          }, function(o) {
            if (n.status === "pending") {
              var s = n;
              s.status = "rejected", s.reason = o;
            }
          });
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw t = n.reason, hm(t), t;
        }
        throw Ja = n, Bi;
    }
  }
  function Ka(t) {
    try {
      var n = t._init;
      return n(t._payload);
    } catch (i) {
      throw i !== null && typeof i == "object" && typeof i.then == "function" ? (Ja = i, Bi) : i;
    }
  }
  var Ja = null;
  function dm() {
    if (Ja === null) throw Error(u(459));
    var t = Ja;
    return Ja = null, t;
  }
  function hm(t) {
    if (t === Bi || t === ul) throw Error(u(483));
  }
  var Ui = null, Ir = 0;
  function cl(t) {
    var n = Ir;
    return Ir += 1, Ui === null && (Ui = []), fm(Ui, t, n);
  }
  function $r(t, n) {
    n = n.props.ref, t.ref = n !== void 0 ? n : null;
  }
  function fl(t, n) {
    throw n.$$typeof === w ? Error(u(525)) : (t = Object.prototype.toString.call(n), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t)));
  }
  function mm(t) {
    function n(j, O) {
      if (t) {
        var P = j.deletions;
        P === null ? (j.deletions = [O], j.flags |= 16) : P.push(O);
      }
    }
    function i(j, O) {
      if (!t) return null;
      for (; O !== null; ) n(j, O), O = O.sibling;
      return null;
    }
    function o(j) {
      for (var O = /* @__PURE__ */ new Map(); j !== null; ) j.key !== null ? O.set(j.key, j) : O.set(j.index, j), j = j.sibling;
      return O;
    }
    function s(j, O) {
      return j = kn(j, O), j.index = 0, j.sibling = null, j;
    }
    function f(j, O, P) {
      return j.index = P, t ? (P = j.alternate, P !== null ? (P = P.index, P < O ? (j.flags |= 67108866, O) : P) : (j.flags |= 67108866, O)) : (j.flags |= 1048576, O);
    }
    function v(j) {
      return t && j.alternate === null && (j.flags |= 67108866), j;
    }
    function E(j, O, P, X) {
      return O === null || O.tag !== 6 ? (O = Os(P, j.mode, X), O.return = j, O) : (O = s(O, P), O.return = j, O);
    }
    function x(j, O, P, X) {
      var fe = P.type;
      return fe === C ? F(j, O, P.props.children, X, P.key) : O !== null && (O.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === I && Ka(fe) === O.type) ? (O = s(O, P.props), $r(O, P), O.return = j, O) : (O = al(P.type, P.key, P.props, null, j.mode, X), $r(O, P), O.return = j, O);
    }
    function Z(j, O, P, X) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== P.containerInfo || O.stateNode.implementation !== P.implementation ? (O = Ms(P, j.mode, X), O.return = j, O) : (O = s(O, P.children || []), O.return = j, O);
    }
    function F(j, O, P, X, fe) {
      return O === null || O.tag !== 7 ? (O = Fa(P, j.mode, X, fe), O.return = j, O) : (O = s(O, P), O.return = j, O);
    }
    function K(j, O, P) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return O = Os("" + O, j.mode, P), O.return = j, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case A:
            return P = al(O.type, O.key, O.props, null, j.mode, P), $r(P, O), P.return = j, P;
          case T:
            return O = Ms(O, j.mode, P), O.return = j, O;
          case I:
            return O = Ka(O), K(j, O, P);
        }
        if (z(O) || J(O)) return O = Fa(O, j.mode, P, null), O.return = j, O;
        if (typeof O.then == "function") return K(j, cl(O), P);
        if (O.$$typeof === D) return K(j, ol(j, O), P);
        fl(j, O);
      }
      return null;
    }
    function G(j, O, P, X) {
      var fe = O !== null ? O.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint") return fe !== null ? null : E(j, O, "" + P, X);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case A:
            return P.key === fe ? x(j, O, P, X) : null;
          case T:
            return P.key === fe ? Z(j, O, P, X) : null;
          case I:
            return P = Ka(P), G(j, O, P, X);
        }
        if (z(P) || J(P)) return fe !== null ? null : F(j, O, P, X, null);
        if (typeof P.then == "function") return G(j, O, cl(P), X);
        if (P.$$typeof === D) return G(j, O, ol(j, P), X);
        fl(j, P);
      }
      return null;
    }
    function $(j, O, P, X, fe) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint") return j = j.get(P) || null, E(O, j, "" + X, fe);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case A:
            return j = j.get(X.key === null ? P : X.key) || null, x(O, j, X, fe);
          case T:
            return j = j.get(X.key === null ? P : X.key) || null, Z(O, j, X, fe);
          case I:
            return X = Ka(X), $(j, O, P, X, fe);
        }
        if (z(X) || J(X)) return j = j.get(P) || null, F(O, j, X, fe, null);
        if (typeof X.then == "function") return $(j, O, P, cl(X), fe);
        if (X.$$typeof === D) return $(j, O, P, ol(O, X), fe);
        fl(O, X);
      }
      return null;
    }
    function re(j, O, P, X) {
      for (var fe = null, Re = null, ue = O, _e = O = 0, Te = null; ue !== null && _e < P.length; _e++) {
        ue.index > _e ? (Te = ue, ue = null) : Te = ue.sibling;
        var Ne = G(j, ue, P[_e], X);
        if (Ne === null) {
          ue === null && (ue = Te);
          break;
        }
        t && ue && Ne.alternate === null && n(j, ue), O = f(Ne, O, _e), Re === null ? fe = Ne : Re.sibling = Ne, Re = Ne, ue = Te;
      }
      if (_e === P.length) return i(j, ue), Ce && In(j, _e), fe;
      if (ue === null) {
        for (; _e < P.length; _e++) ue = K(j, P[_e], X), ue !== null && (O = f(ue, O, _e), Re === null ? fe = ue : Re.sibling = ue, Re = ue);
        return Ce && In(j, _e), fe;
      }
      for (ue = o(ue); _e < P.length; _e++) Te = $(ue, j, _e, P[_e], X), Te !== null && (t && Te.alternate !== null && ue.delete(Te.key === null ? _e : Te.key), O = f(Te, O, _e), Re === null ? fe = Te : Re.sibling = Te, Re = Te);
      return t && ue.forEach(function(Ma) {
        return n(j, Ma);
      }), Ce && In(j, _e), fe;
    }
    function he(j, O, P, X) {
      if (P == null) throw Error(u(151));
      for (var fe = null, Re = null, ue = O, _e = O = 0, Te = null, Ne = P.next(); ue !== null && !Ne.done; _e++, Ne = P.next()) {
        ue.index > _e ? (Te = ue, ue = null) : Te = ue.sibling;
        var Ma = G(j, ue, Ne.value, X);
        if (Ma === null) {
          ue === null && (ue = Te);
          break;
        }
        t && ue && Ma.alternate === null && n(j, ue), O = f(Ma, O, _e), Re === null ? fe = Ma : Re.sibling = Ma, Re = Ma, ue = Te;
      }
      if (Ne.done) return i(j, ue), Ce && In(j, _e), fe;
      if (ue === null) {
        for (; !Ne.done; _e++, Ne = P.next()) Ne = K(j, Ne.value, X), Ne !== null && (O = f(Ne, O, _e), Re === null ? fe = Ne : Re.sibling = Ne, Re = Ne);
        return Ce && In(j, _e), fe;
      }
      for (ue = o(ue); !Ne.done; _e++, Ne = P.next()) Ne = $(ue, j, _e, Ne.value, X), Ne !== null && (t && Ne.alternate !== null && ue.delete(Ne.key === null ? _e : Ne.key), O = f(Ne, O, _e), Re === null ? fe = Ne : Re.sibling = Ne, Re = Ne);
      return t && ue.forEach(function(k2) {
        return n(j, k2);
      }), Ce && In(j, _e), fe;
    }
    function Pe(j, O, P, X) {
      if (typeof P == "object" && P !== null && P.type === C && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case A:
            e: {
              for (var fe = P.key; O !== null; ) {
                if (O.key === fe) {
                  if (fe = P.type, fe === C) {
                    if (O.tag === 7) {
                      i(j, O.sibling), X = s(O, P.props.children), X.return = j, j = X;
                      break e;
                    }
                  } else if (O.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === I && Ka(fe) === O.type) {
                    i(j, O.sibling), X = s(O, P.props), $r(X, P), X.return = j, j = X;
                    break e;
                  }
                  i(j, O);
                  break;
                } else n(j, O);
                O = O.sibling;
              }
              P.type === C ? (X = Fa(P.props.children, j.mode, X, P.key), X.return = j, j = X) : (X = al(P.type, P.key, P.props, null, j.mode, X), $r(X, P), X.return = j, j = X);
            }
            return v(j);
          case T:
            e: {
              for (fe = P.key; O !== null; ) {
                if (O.key === fe) if (O.tag === 4 && O.stateNode.containerInfo === P.containerInfo && O.stateNode.implementation === P.implementation) {
                  i(j, O.sibling), X = s(O, P.children || []), X.return = j, j = X;
                  break e;
                } else {
                  i(j, O);
                  break;
                }
                else n(j, O);
                O = O.sibling;
              }
              X = Ms(P, j.mode, X), X.return = j, j = X;
            }
            return v(j);
          case I:
            return P = Ka(P), Pe(j, O, P, X);
        }
        if (z(P)) return re(j, O, P, X);
        if (J(P)) {
          if (fe = J(P), typeof fe != "function") throw Error(u(150));
          return P = fe.call(P), he(j, O, P, X);
        }
        if (typeof P.then == "function") return Pe(j, O, cl(P), X);
        if (P.$$typeof === D) return Pe(j, O, ol(j, P), X);
        fl(j, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint" ? (P = "" + P, O !== null && O.tag === 6 ? (i(j, O.sibling), X = s(O, P), X.return = j, j = X) : (i(j, O), X = Os(P, j.mode, X), X.return = j, j = X), v(j)) : i(j, O);
    }
    return function(j, O, P, X) {
      try {
        Ir = 0;
        var fe = Pe(j, O, P, X);
        return Ui = null, fe;
      } catch (ue) {
        if (ue === Bi || ue === ul) throw ue;
        var Re = Zt(29, ue, null, j.mode);
        return Re.lanes = X, Re.return = j, Re;
      }
    };
  }
  var ei = mm(!0), vm = mm(!1), ma = !1;
  function Gs(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function ks(t, n) {
    t = t.updateQueue, n.updateQueue === t && (n.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ti(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function ni(t, n, i) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (ze & 2) !== 0) {
      var s = o.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), o.pending = n, n = nl(t), Kh(t, null, i), n;
    }
    return tl(t, o, n, i), nl(t);
  }
  function qr(t, n, i) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) {
      var o = n.lanes;
      o &= t.pendingLanes, i |= o, n.lanes = i, rh(t, i);
    }
  }
  function Is(t, n) {
    var i = t.updateQueue, o = t.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var s = null, f = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var v = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          f === null ? s = f = v : f = f.next = v, i = i.next;
        } while (i !== null);
        f === null ? s = f = n : f = f.next = n;
      } else s = f = n;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: f,
        shared: o.shared,
        callbacks: o.callbacks
      }, t.updateQueue = i;
      return;
    }
    t = i.lastBaseUpdate, t === null ? i.firstBaseUpdate = n : t.next = n, i.lastBaseUpdate = n;
  }
  var $s = !1;
  function Vr() {
    if ($s) {
      var t = ji;
      if (t !== null) throw t;
    }
  }
  function Fr(t, n, i, o) {
    $s = !1;
    var s = t.updateQueue;
    ma = !1;
    var f = s.firstBaseUpdate, v = s.lastBaseUpdate, E = s.shared.pending;
    if (E !== null) {
      s.shared.pending = null;
      var x = E, Z = x.next;
      x.next = null, v === null ? f = Z : v.next = Z, v = x;
      var F = t.alternate;
      F !== null && (F = F.updateQueue, E = F.lastBaseUpdate, E !== v && (E === null ? F.firstBaseUpdate = Z : E.next = Z, F.lastBaseUpdate = x));
    }
    if (f !== null) {
      var K = s.baseState;
      v = 0, F = Z = x = null, E = f;
      do {
        var G = E.lane & -536870913, $ = G !== E.lane;
        if ($ ? (we & G) === G : (o & G) === G) {
          G !== 0 && G === Li && ($s = !0), F !== null && (F = F.next = {
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: null,
            next: null
          });
          e: {
            var re = t, he = E;
            G = n;
            var Pe = i;
            switch (he.tag) {
              case 1:
                if (re = he.payload, typeof re == "function") {
                  K = re.call(Pe, K, G);
                  break e;
                }
                K = re;
                break e;
              case 3:
                re.flags = re.flags & -65537 | 128;
              case 0:
                if (re = he.payload, G = typeof re == "function" ? re.call(Pe, K, G) : re, G == null) break e;
                K = S({}, K, G);
                break e;
              case 2:
                ma = !0;
            }
          }
          G = E.callback, G !== null && (t.flags |= 64, $ && (t.flags |= 8192), $ = s.callbacks, $ === null ? s.callbacks = [G] : $.push(G));
        } else $ = {
          lane: G,
          tag: E.tag,
          payload: E.payload,
          callback: E.callback,
          next: null
        }, F === null ? (Z = F = $, x = K) : F = F.next = $, v |= G;
        if (E = E.next, E === null) {
          if (E = s.shared.pending, E === null) break;
          $ = E, E = $.next, $.next = null, s.lastBaseUpdate = $, s.shared.pending = null;
        }
      } while (!0);
      F === null && (x = K), s.baseState = x, s.firstBaseUpdate = Z, s.lastBaseUpdate = F, f === null && (s.shared.lanes = 0), ba |= v, t.lanes = v, t.memoizedState = K;
    }
  }
  function pm(t, n) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(n);
  }
  function gm(t, n) {
    var i = t.callbacks;
    if (i !== null) for (t.callbacks = null, t = 0; t < i.length; t++) pm(i[t], n);
  }
  var Pi = M(null), dl = M(0);
  function ym(t, n) {
    t = ea, ae(dl, t), ae(Pi, n), ea = t | n.baseLanes;
  }
  function qs() {
    ae(dl, ea), ae(Pi, Pi.current);
  }
  function Vs() {
    ea = dl.current, Y(Pi), Y(dl);
  }
  var Gt = M(null), an = null;
  function va(t) {
    var n = t.alternate;
    ae(Je, Je.current & 1), ae(Gt, t), an === null && (n === null || Pi.current !== null || n.memoizedState !== null) && (an = t);
  }
  function Fs(t) {
    ae(Je, Je.current), ae(Gt, t), an === null && (an = t);
  }
  function bm(t) {
    t.tag === 22 ? (ae(Je, Je.current), ae(Gt, t), an === null && (an = t)) : pa(t);
  }
  function pa() {
    ae(Je, Je.current), ae(Gt, Gt.current);
  }
  function kt(t) {
    Y(Gt), an === t && (an = null), Y(Je);
  }
  var Je = M(0);
  function hl(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || Kc(i) || Jc(i))) return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Vn = 0, ye = null, Be = null, it = null, ml = !1, Zi = !1, ai = !1, vl = 0, Xr = 0, Gi = null, O_ = 0;
  function We() {
    throw Error(u(321));
  }
  function Xs(t, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < t.length; i++) if (!Pt(t[i], n[i])) return !1;
    return !0;
  }
  function Ys(t, n, i, o, s, f) {
    return Vn = f, ye = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, q.H = t === null || t.memoizedState === null ? nv : cc, ai = !1, f = i(o, s), ai = !1, Zi && (f = Sm(n, i, o, s)), _m(t), f;
  }
  function _m(t) {
    q.H = Qr;
    var n = Be !== null && Be.next !== null;
    if (Vn = 0, it = Be = ye = null, ml = !1, Xr = 0, Gi = null, n) throw Error(u(300));
    t === null || rt || (t = t.dependencies, t !== null && rl(t) && (rt = !0));
  }
  function Sm(t, n, i, o) {
    ye = t;
    var s = 0;
    do {
      if (Zi && (Gi = null), Xr = 0, Zi = !1, 25 <= s) throw Error(u(301));
      if (s += 1, it = Be = null, t.updateQueue != null) {
        var f = t.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      q.H = av, f = n(i, o);
    } while (Zi);
    return f;
  }
  function M_() {
    var t = q.H, n = t.useState()[0];
    return n = typeof n.then == "function" ? Yr(n) : n, t = t.useState()[0], (Be !== null ? Be.memoizedState : null) !== t && (ye.flags |= 1024), n;
  }
  function Ws() {
    var t = vl !== 0;
    return vl = 0, t;
  }
  function Qs(t, n, i) {
    n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~i;
  }
  function Ks(t) {
    if (ml) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), t = t.next;
      }
      ml = !1;
    }
    Vn = 0, it = Be = ye = null, Zi = !1, Xr = vl = 0, Gi = null;
  }
  function Et() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return it === null ? ye.memoizedState = it = t : it = it.next = t, it;
  }
  function et() {
    if (Be === null) {
      var t = ye.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Be.next;
    var n = it === null ? ye.memoizedState : it.next;
    if (n !== null) it = n, Be = t;
    else {
      if (t === null)
        throw ye.alternate === null ? Error(u(467)) : Error(u(310));
      Be = t, t = {
        memoizedState: Be.memoizedState,
        baseState: Be.baseState,
        baseQueue: Be.baseQueue,
        queue: Be.queue,
        next: null
      }, it === null ? ye.memoizedState = it = t : it = it.next = t;
    }
    return it;
  }
  function pl() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Yr(t) {
    var n = Xr;
    return Xr += 1, Gi === null && (Gi = []), t = fm(Gi, t, n), n = ye, (it === null ? n.memoizedState : it.next) === null && (n = n.alternate, q.H = n === null || n.memoizedState === null ? nv : cc), t;
  }
  function gl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Yr(t);
      if (t.$$typeof === D) return gt(t);
    }
    throw Error(u(438, String(t)));
  }
  function Js(t) {
    var n = null, i = ye.updateQueue;
    if (i !== null && (n = i.memoCache), n == null) {
      var o = ye.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n ??= {
      data: [],
      index: 0
    }, i === null && (i = pl(), ye.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0) for (i = n.data[n.index] = Array(t), o = 0; o < t; o++) i[o] = k;
    return n.index++, i;
  }
  function Fn(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function yl(t) {
    return ec(et(), Be, t);
  }
  function ec(t, n, i) {
    var o = t.queue;
    if (o === null) throw Error(u(311));
    o.lastRenderedReducer = i;
    var s = t.baseQueue, f = o.pending;
    if (f !== null) {
      if (s !== null) {
        var v = s.next;
        s.next = f.next, f.next = v;
      }
      n.baseQueue = s = f, o.pending = null;
    }
    if (f = t.baseState, s === null) t.memoizedState = f;
    else {
      n = s.next;
      var E = v = null, x = null, Z = n, F = !1;
      do {
        var K = Z.lane & -536870913;
        if (K !== Z.lane ? (we & K) === K : (Vn & K) === K) {
          var G = Z.revertLane;
          if (G === 0) x !== null && (x = x.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          }), K === Li && (F = !0);
          else if ((Vn & G) === G) {
            Z = Z.next, G === Li && (F = !0);
            continue;
          } else K = {
            lane: 0,
            revertLane: Z.revertLane,
            gesture: null,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          }, x === null ? (E = x = K, v = f) : x = x.next = K, ye.lanes |= G, ba |= G;
          K = Z.action, ai && i(f, K), f = Z.hasEagerState ? Z.eagerState : i(f, K);
        } else G = {
          lane: K,
          revertLane: Z.revertLane,
          gesture: Z.gesture,
          action: Z.action,
          hasEagerState: Z.hasEagerState,
          eagerState: Z.eagerState,
          next: null
        }, x === null ? (E = x = G, v = f) : x = x.next = G, ye.lanes |= K, ba |= K;
        Z = Z.next;
      } while (Z !== null && Z !== n);
      if (x === null ? v = f : x.next = E, !Pt(f, t.memoizedState) && (rt = !0, F && (i = ji, i !== null))) throw i;
      t.memoizedState = f, t.baseState = v, t.baseQueue = x, o.lastRenderedState = f;
    }
    return s === null && (o.lanes = 0), [t.memoizedState, o.dispatch];
  }
  function tc(t) {
    var n = et(), i = n.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = t;
    var o = i.dispatch, s = i.pending, f = n.memoizedState;
    if (s !== null) {
      i.pending = null;
      var v = s = s.next;
      do
        f = t(f, v.action), v = v.next;
      while (v !== s);
      Pt(f, n.memoizedState) || (rt = !0), n.memoizedState = f, n.baseQueue === null && (n.baseState = f), i.lastRenderedState = f;
    }
    return [f, o];
  }
  function Em(t, n, i) {
    var o = ye, s = et(), f = Ce;
    if (f) {
      if (i === void 0) throw Error(u(407));
      i = i();
    } else i = n();
    var v = !Pt((Be || s).memoizedState, i);
    if (v && (s.memoizedState = i, rt = !0), s = s.queue, ic(Cm.bind(null, o, s, t), [t]), s.getSnapshot !== n || v || it !== null && it.memoizedState.tag & 1) {
      if (o.flags |= 2048, ki(9, { destroy: void 0 }, Tm.bind(null, o, s, i, n), null), Ze === null) throw Error(u(349));
      f || (Vn & 127) !== 0 || wm(o, n, i);
    }
    return i;
  }
  function wm(t, n, i) {
    t.flags |= 16384, t = {
      getSnapshot: n,
      value: i
    }, n = ye.updateQueue, n === null ? (n = pl(), ye.updateQueue = n, n.stores = [t]) : (i = n.stores, i === null ? n.stores = [t] : i.push(t));
  }
  function Tm(t, n, i, o) {
    n.value = i, n.getSnapshot = o, Am(n) && xm(t);
  }
  function Cm(t, n, i) {
    return i(function() {
      Am(n) && xm(t);
    });
  }
  function Am(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var i = n();
      return !Pt(t, i);
    } catch {
      return !0;
    }
  }
  function xm(t) {
    var n = Va(t, 2);
    n !== null && zt(n, t, 2);
  }
  function nc(t) {
    var n = Et();
    if (typeof t == "function") {
      var i = t;
      if (t = i(), ai) {
        la(!0);
        try {
          i();
        } finally {
          la(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = t, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fn,
      lastRenderedState: t
    }, n;
  }
  function Om(t, n, i, o) {
    return t.baseState = i, ec(t, Be, typeof o == "function" ? o : Fn);
  }
  function R_(t, n, i, o, s) {
    if (Sl(t)) throw Error(u(485));
    if (t = n.action, t !== null) {
      var f = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(v) {
          f.listeners.push(v);
        }
      };
      q.T !== null ? i(!0) : f.isTransition = !1, o(f), i = n.pending, i === null ? (f.next = n.pending = f, Mm(n, f)) : (f.next = i.next, n.pending = i.next = f);
    }
  }
  function Mm(t, n) {
    var i = n.action, o = n.payload, s = t.state;
    if (n.isTransition) {
      var f = q.T, v = {};
      q.T = v;
      try {
        var E = i(s, o), x = q.S;
        x !== null && x(v, E), Rm(t, n, E);
      } catch (Z) {
        ac(t, n, Z);
      } finally {
        f !== null && v.types !== null && (f.types = v.types), q.T = f;
      }
    } else try {
      f = i(s, o), Rm(t, n, f);
    } catch (Z) {
      ac(t, n, Z);
    }
  }
  function Rm(t, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(function(o) {
      Nm(t, n, o);
    }, function(o) {
      return ac(t, n, o);
    }) : Nm(t, n, i);
  }
  function Nm(t, n, i) {
    n.status = "fulfilled", n.value = i, Dm(n), t.state = i, n = t.pending, n !== null && (i = n.next, i === n ? t.pending = null : (i = i.next, n.next = i, Mm(t, i)));
  }
  function ac(t, n, i) {
    var o = t.pending;
    if (t.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = i, Dm(n), n = n.next;
      while (n !== o);
    }
    t.action = null;
  }
  function Dm(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function zm(t, n) {
    return n;
  }
  function Hm(t, n) {
    if (Ce) {
      var i = Ze.formState;
      if (i !== null) {
        e: {
          var o = ye;
          if (Ce) {
            if ($e) {
              t: {
                for (var s = $e, f = nn; s.nodeType !== 8; ) {
                  if (!f) {
                    s = null;
                    break t;
                  }
                  if (s = on(s.nextSibling), s === null) {
                    s = null;
                    break t;
                  }
                }
                f = s.data, s = f === "F!" || f === "F" ? s : null;
              }
              if (s) {
                $e = on(s.nextSibling), o = s.data === "F!";
                break e;
              }
            }
            da(o);
          }
          o = !1;
        }
        o && (n = i[0]);
      }
    }
    return i = Et(), i.memoizedState = i.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zm,
      lastRenderedState: n
    }, i.queue = o, i = Jm.bind(null, ye, o), o.dispatch = i, o = nc(!1), f = sc.bind(null, ye, !1, o.queue), o = Et(), s = {
      state: n,
      dispatch: null,
      action: t,
      pending: null
    }, o.queue = s, i = R_.bind(null, ye, s, f, i), s.dispatch = i, o.memoizedState = t, [
      n,
      i,
      !1
    ];
  }
  function Lm(t) {
    return jm(et(), Be, t);
  }
  function jm(t, n, i) {
    if (n = ec(t, n, zm)[0], t = yl(Fn)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
      var o = Yr(n);
    } catch (v) {
      throw v === Bi ? ul : v;
    }
    else o = n;
    n = et();
    var s = n.queue, f = s.dispatch;
    return i !== n.memoizedState && (ye.flags |= 2048, ki(9, { destroy: void 0 }, N_.bind(null, s, i), null)), [
      o,
      f,
      t
    ];
  }
  function N_(t, n) {
    t.action = n;
  }
  function Bm(t) {
    var n = et(), i = Be;
    if (i !== null) return jm(n, i, t);
    et(), n = n.memoizedState, i = et();
    var o = i.queue.dispatch;
    return i.memoizedState = t, [
      n,
      o,
      !1
    ];
  }
  function ki(t, n, i, o) {
    return t = {
      tag: t,
      create: i,
      deps: o,
      inst: n,
      next: null
    }, n = ye.updateQueue, n === null && (n = pl(), ye.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = t.next = t : (o = i.next, i.next = t, t.next = o, n.lastEffect = t), t;
  }
  function Um() {
    return et().memoizedState;
  }
  function bl(t, n, i, o) {
    var s = Et();
    ye.flags |= t, s.memoizedState = ki(1 | n, { destroy: void 0 }, i, o === void 0 ? null : o);
  }
  function _l(t, n, i, o) {
    var s = et();
    o = o === void 0 ? null : o;
    var f = s.memoizedState.inst;
    Be !== null && o !== null && Xs(o, Be.memoizedState.deps) ? s.memoizedState = ki(n, f, i, o) : (ye.flags |= t, s.memoizedState = ki(1 | n, f, i, o));
  }
  function Pm(t, n) {
    bl(8390656, 8, t, n);
  }
  function ic(t, n) {
    _l(2048, 8, t, n);
  }
  function D_(t) {
    ye.flags |= 4;
    var n = ye.updateQueue;
    if (n === null) n = pl(), ye.updateQueue = n, n.events = [t];
    else {
      var i = n.events;
      i === null ? n.events = [t] : i.push(t);
    }
  }
  function Zm(t) {
    var n = et().memoizedState;
    return D_({
      ref: n,
      nextImpl: t
    }), function() {
      if ((ze & 2) !== 0) throw Error(u(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Gm(t, n) {
    return _l(4, 2, t, n);
  }
  function km(t, n) {
    return _l(4, 4, t, n);
  }
  function Im(t, n) {
    if (typeof n == "function") {
      t = t();
      var i = n(t);
      return function() {
        typeof i == "function" ? i() : n(null);
      };
    }
    if (n != null) return t = t(), n.current = t, function() {
      n.current = null;
    };
  }
  function $m(t, n, i) {
    i = i != null ? i.concat([t]) : null, _l(4, 4, Im.bind(null, n, t), i);
  }
  function rc() {
  }
  function qm(t, n) {
    var i = et();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && Xs(n, o[1]) ? o[0] : (i.memoizedState = [t, n], t);
  }
  function Vm(t, n) {
    var i = et();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && Xs(n, o[1])) return o[0];
    if (o = t(), ai) {
      la(!0);
      try {
        t();
      } finally {
        la(!1);
      }
    }
    return i.memoizedState = [o, n], o;
  }
  function oc(t, n, i) {
    return i === void 0 || (Vn & 1073741824) !== 0 && (we & 261930) === 0 ? t.memoizedState = n : (t.memoizedState = i, t = $v(), ye.lanes |= t, ba |= t, i);
  }
  function Fm(t, n, i, o) {
    return Pt(i, n) ? i : Pi.current !== null ? (t = oc(t, i, o), Pt(t, n) || (rt = !0), t) : (Vn & 42) === 0 || (Vn & 1073741824) !== 0 && (we & 261930) === 0 ? (rt = !0, t.memoizedState = i) : (t = $v(), ye.lanes |= t, ba |= t, n);
  }
  function Xm(t, n, i, o, s) {
    var f = V.p;
    V.p = f !== 0 && 8 > f ? f : 8;
    var v = q.T, E = {};
    q.T = E, sc(t, !1, n, i);
    try {
      var x = s(), Z = q.S;
      Z !== null && Z(E, x), x !== null && typeof x == "object" && typeof x.then == "function" ? Wr(t, n, x_(x, o), rn(t)) : Wr(t, n, o, rn(t));
    } catch (F) {
      Wr(t, n, {
        then: function() {
        },
        status: "rejected",
        reason: F
      }, rn());
    } finally {
      V.p = f, v !== null && E.types !== null && (v.types = E.types), q.T = v;
    }
  }
  function z_() {
  }
  function lc(t, n, i, o) {
    if (t.tag !== 5) throw Error(u(476));
    var s = Ym(t).queue;
    Xm(t, s, n, se, i === null ? z_ : function() {
      return Wm(t), i(o);
    });
  }
  function Ym(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: se,
      baseState: se,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fn,
        lastRenderedState: se
      },
      next: null
    };
    var i = {};
    return n.next = {
      memoizedState: i,
      baseState: i,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fn,
        lastRenderedState: i
      },
      next: null
    }, t.memoizedState = n, t = t.alternate, t !== null && (t.memoizedState = n), n;
  }
  function Wm(t) {
    var n = Ym(t);
    n.next === null && (n = t.alternate.memoizedState), Wr(t, n.next.queue, {}, rn());
  }
  function uc() {
    return gt(mo);
  }
  function Qm() {
    return et().memoizedState;
  }
  function Km() {
    return et().memoizedState;
  }
  function H_(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = rn();
          t = ti(i);
          var o = ni(n, t, i);
          o !== null && (zt(o, n, i), qr(o, n, i)), n = { cache: Bs() }, t.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function L_(t, n, i) {
    var o = rn();
    i = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Sl(t) ? ev(n, i) : (i = As(t, n, i, o), i !== null && (zt(i, t, o), tv(i, n, o)));
  }
  function Jm(t, n, i) {
    Wr(t, n, i, rn());
  }
  function Wr(t, n, i, o) {
    var s = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Sl(t)) ev(n, s);
    else {
      var f = t.alternate;
      if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer, f !== null)) try {
        var v = n.lastRenderedState, E = f(v, i);
        if (s.hasEagerState = !0, s.eagerState = E, Pt(E, v)) return tl(t, n, s, 0), Ze === null && el(), !1;
      } catch {
      }
      if (i = As(t, n, s, o), i !== null) return zt(i, t, o), tv(i, n, o), !0;
    }
    return !1;
  }
  function sc(t, n, i, o) {
    if (o = {
      lane: 2,
      revertLane: Gc(),
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Sl(t)) {
      if (n) throw Error(u(479));
    } else n = As(t, i, o, 2), n !== null && zt(n, t, 2);
  }
  function Sl(t) {
    var n = t.alternate;
    return t === ye || n !== null && n === ye;
  }
  function ev(t, n) {
    Zi = ml = !0;
    var i = t.pending;
    i === null ? n.next = n : (n.next = i.next, i.next = n), t.pending = n;
  }
  function tv(t, n, i) {
    if ((i & 4194048) !== 0) {
      var o = n.lanes;
      o &= t.pendingLanes, i |= o, n.lanes = i, rh(t, i);
    }
  }
  var Qr = {
    readContext: gt,
    use: gl,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useLayoutEffect: We,
    useInsertionEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useSyncExternalStore: We,
    useId: We,
    useHostTransitionStatus: We,
    useFormState: We,
    useActionState: We,
    useOptimistic: We,
    useMemoCache: We,
    useCacheRefresh: We
  };
  Qr.useEffectEvent = We;
  var nv = {
    readContext: gt,
    use: gl,
    useCallback: function(t, n) {
      return Et().memoizedState = [t, n === void 0 ? null : n], t;
    },
    useContext: gt,
    useEffect: Pm,
    useImperativeHandle: function(t, n, i) {
      i = i != null ? i.concat([t]) : null, bl(4194308, 4, Im.bind(null, n, t), i);
    },
    useLayoutEffect: function(t, n) {
      return bl(4194308, 4, t, n);
    },
    useInsertionEffect: function(t, n) {
      bl(4, 2, t, n);
    },
    useMemo: function(t, n) {
      var i = Et();
      n = n === void 0 ? null : n;
      var o = t();
      if (ai) {
        la(!0);
        try {
          t();
        } finally {
          la(!1);
        }
      }
      return i.memoizedState = [o, n], o;
    },
    useReducer: function(t, n, i) {
      var o = Et();
      if (i !== void 0) {
        var s = i(n);
        if (ai) {
          la(!0);
          try {
            i(n);
          } finally {
            la(!1);
          }
        }
      } else s = n;
      return o.memoizedState = o.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, o.queue = t, t = t.dispatch = L_.bind(null, ye, t), [o.memoizedState, t];
    },
    useRef: function(t) {
      var n = Et();
      return t = { current: t }, n.memoizedState = t;
    },
    useState: function(t) {
      t = nc(t);
      var n = t.queue, i = Jm.bind(null, ye, n);
      return n.dispatch = i, [t.memoizedState, i];
    },
    useDebugValue: rc,
    useDeferredValue: function(t, n) {
      return oc(Et(), t, n);
    },
    useTransition: function() {
      var t = nc(!1);
      return t = Xm.bind(null, ye, t.queue, !0, !1), Et().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, n, i) {
      var o = ye, s = Et();
      if (Ce) {
        if (i === void 0) throw Error(u(407));
        i = i();
      } else {
        if (i = n(), Ze === null) throw Error(u(349));
        (we & 127) !== 0 || wm(o, n, i);
      }
      s.memoizedState = i;
      var f = {
        value: i,
        getSnapshot: n
      };
      return s.queue = f, Pm(Cm.bind(null, o, f, t), [t]), o.flags |= 2048, ki(9, { destroy: void 0 }, Tm.bind(null, o, f, i, n), null), i;
    },
    useId: function() {
      var t = Et(), n = Ze.identifierPrefix;
      if (Ce) {
        var i = xn, o = An;
        i = (o & ~(1 << 32 - Ut(o) - 1)).toString(32) + i, n = "_" + n + "R_" + i, i = vl++, 0 < i && (n += "H" + i.toString(32)), n += "_";
      } else i = O_++, n = "_" + n + "r_" + i.toString(32) + "_";
      return t.memoizedState = n;
    },
    useHostTransitionStatus: uc,
    useFormState: Hm,
    useActionState: Hm,
    useOptimistic: function(t) {
      var n = Et();
      n.memoizedState = n.baseState = t;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = i, n = sc.bind(null, ye, !0, i), i.dispatch = n, [t, n];
    },
    useMemoCache: Js,
    useCacheRefresh: function() {
      return Et().memoizedState = H_.bind(null, ye);
    },
    useEffectEvent: function(t) {
      var n = Et(), i = { impl: t };
      return n.memoizedState = i, function() {
        if ((ze & 2) !== 0) throw Error(u(440));
        return i.impl.apply(void 0, arguments);
      };
    }
  }, cc = {
    readContext: gt,
    use: gl,
    useCallback: qm,
    useContext: gt,
    useEffect: ic,
    useImperativeHandle: $m,
    useInsertionEffect: Gm,
    useLayoutEffect: km,
    useMemo: Vm,
    useReducer: yl,
    useRef: Um,
    useState: function() {
      return yl(Fn);
    },
    useDebugValue: rc,
    useDeferredValue: function(t, n) {
      return Fm(et(), Be.memoizedState, t, n);
    },
    useTransition: function() {
      var t = yl(Fn)[0], n = et().memoizedState;
      return [typeof t == "boolean" ? t : Yr(t), n];
    },
    useSyncExternalStore: Em,
    useId: Qm,
    useHostTransitionStatus: uc,
    useFormState: Lm,
    useActionState: Lm,
    useOptimistic: function(t, n) {
      return Om(et(), Be, t, n);
    },
    useMemoCache: Js,
    useCacheRefresh: Km
  };
  cc.useEffectEvent = Zm;
  var av = {
    readContext: gt,
    use: gl,
    useCallback: qm,
    useContext: gt,
    useEffect: ic,
    useImperativeHandle: $m,
    useInsertionEffect: Gm,
    useLayoutEffect: km,
    useMemo: Vm,
    useReducer: tc,
    useRef: Um,
    useState: function() {
      return tc(Fn);
    },
    useDebugValue: rc,
    useDeferredValue: function(t, n) {
      var i = et();
      return Be === null ? oc(i, t, n) : Fm(i, Be.memoizedState, t, n);
    },
    useTransition: function() {
      var t = tc(Fn)[0], n = et().memoizedState;
      return [typeof t == "boolean" ? t : Yr(t), n];
    },
    useSyncExternalStore: Em,
    useId: Qm,
    useHostTransitionStatus: uc,
    useFormState: Bm,
    useActionState: Bm,
    useOptimistic: function(t, n) {
      var i = et();
      return Be !== null ? Om(i, Be, t, n) : (i.baseState = t, [t, i.queue.dispatch]);
    },
    useMemoCache: Js,
    useCacheRefresh: Km
  };
  av.useEffectEvent = Zm;
  function fc(t, n, i, o) {
    n = t.memoizedState, i = i(o, n), i = i == null ? n : S({}, n, i), t.memoizedState = i, t.lanes === 0 && (t.updateQueue.baseState = i);
  }
  var dc = {
    enqueueSetState: function(t, n, i) {
      t = t._reactInternals;
      var o = rn(), s = ti(o);
      s.payload = n, i != null && (s.callback = i), n = ni(t, s, o), n !== null && (zt(n, t, o), qr(n, t, o));
    },
    enqueueReplaceState: function(t, n, i) {
      t = t._reactInternals;
      var o = rn(), s = ti(o);
      s.tag = 1, s.payload = n, i != null && (s.callback = i), n = ni(t, s, o), n !== null && (zt(n, t, o), qr(n, t, o));
    },
    enqueueForceUpdate: function(t, n) {
      t = t._reactInternals;
      var i = rn(), o = ti(i);
      o.tag = 2, n != null && (o.callback = n), n = ni(t, o, i), n !== null && (zt(n, t, i), qr(n, t, i));
    }
  };
  function iv(t, n, i, o, s, f, v) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(o, f, v) : n.prototype && n.prototype.isPureReactComponent ? !Br(i, o) || !Br(s, f) : !0;
  }
  function rv(t, n, i, o) {
    t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, o), n.state !== t && dc.enqueueReplaceState(n, n.state, null);
  }
  function ii(t, n) {
    var i = n;
    if ("ref" in n) {
      i = {};
      for (var o in n) o !== "ref" && (i[o] = n[o]);
    }
    if (t = t.defaultProps) {
      i === n && (i = S({}, i));
      for (var s in t) i[s] === void 0 && (i[s] = t[s]);
    }
    return i;
  }
  function j_(t) {
    Jo(t);
  }
  function B_(t) {
    console.error(t);
  }
  function U_(t) {
    Jo(t);
  }
  function El(t, n) {
    try {
      var i = t.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function ov(t, n, i) {
    try {
      var o = t.onCaughtError;
      o(i.value, {
        componentStack: i.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function hc(t, n, i) {
    return i = ti(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      El(t, n);
    }, i;
  }
  function lv(t) {
    return t = ti(t), t.tag = 3, t;
  }
  function uv(t, n, i, o) {
    var s = i.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = o.value;
      t.payload = function() {
        return s(f);
      }, t.callback = function() {
        ov(n, i, o);
      };
    }
    var v = i.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (t.callback = function() {
      ov(n, i, o), typeof s != "function" && (_a === null ? _a = /* @__PURE__ */ new Set([this]) : _a.add(this));
      var E = o.stack;
      this.componentDidCatch(o.value, { componentStack: E !== null ? E : "" });
    });
  }
  function P_(t, n, i, o, s) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = i.alternate, n !== null && Hi(n, i, s, !0), i = Gt.current, i !== null) {
        switch (i.tag) {
          case 31:
          case 13:
            return an === null ? Hl() : i.alternate === null && Qe === 0 && (Qe = 3), i.flags &= -257, i.flags |= 65536, i.lanes = s, o === sl ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Uc(t, o, s)), !1;
          case 22:
            return i.flags |= 65536, o === sl ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), Uc(t, o, s)), !1;
        }
        throw Error(u(435, i.tag));
      }
      return Uc(t, o, s), Hl(), !1;
    }
    if (Ce) return n = Gt.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, o !== Ds && (t = Error(u(422), { cause: o }), Zr(Jt(t, i)))) : (o !== Ds && (n = Error(u(423), { cause: o }), Zr(Jt(n, i))), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, o = Jt(o, i), s = hc(t.stateNode, o, s), Is(t, s), Qe !== 4 && (Qe = 2)), !1;
    var f = Error(u(520), { cause: o });
    if (f = Jt(f, i), ro === null ? ro = [f] : ro.push(f), Qe !== 4 && (Qe = 2), n === null) return !0;
    o = Jt(o, i), i = n;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, t = s & -s, i.lanes |= t, t = hc(i.stateNode, o, t), Is(i, t), !1;
        case 1:
          if (n = i.type, f = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (_a === null || !_a.has(f)))) return i.flags |= 65536, s &= -s, i.lanes |= s, s = lv(s), uv(s, t, i, o), Is(i, s), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var mc = Error(u(461)), rt = !1;
  function yt(t, n, i, o) {
    n.child = t === null ? vm(n, null, i, o) : ei(n, t.child, i, o);
  }
  function sv(t, n, i, o, s) {
    i = i.render;
    var f = n.ref;
    if ("ref" in o) {
      var v = {};
      for (var E in o) E !== "ref" && (v[E] = o[E]);
    } else v = o;
    return Wa(n), o = Ys(t, n, i, v, f, s), E = Ws(), t !== null && !rt ? (Qs(t, n, s), Xn(t, n, s)) : (Ce && E && Rs(n), n.flags |= 1, yt(t, n, o, s), n.child);
  }
  function cv(t, n, i, o, s) {
    if (t === null) {
      var f = i.type;
      return typeof f == "function" && !xs(f) && f.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = f, fv(t, n, f, o, s)) : (t = al(i.type, null, o, n, n.mode, s), t.ref = n.ref, t.return = n, n.child = t);
    }
    if (f = t.child, !Ec(t, s)) {
      var v = f.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Br, i(v, o) && t.ref === n.ref) return Xn(t, n, s);
    }
    return n.flags |= 1, t = kn(f, o), t.ref = n.ref, t.return = n, n.child = t;
  }
  function fv(t, n, i, o, s) {
    if (t !== null) {
      var f = t.memoizedProps;
      if (Br(f, o) && t.ref === n.ref) if (rt = !1, n.pendingProps = o = f, Ec(t, s)) (t.flags & 131072) !== 0 && (rt = !0);
      else return n.lanes = t.lanes, Xn(t, n, s);
    }
    return vc(t, n, i, o, s);
  }
  function dv(t, n, i, o) {
    var s = o.children, f = t !== null ? t.memoizedState : null;
    if (t === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | i : i, t !== null) {
          for (o = n.child = t.child, s = 0; o !== null; ) s = s | o.lanes | o.childLanes, o = o.sibling;
          o = s & ~f;
        } else o = 0, n.child = null;
        return hv(t, n, f, i, o);
      }
      if ((i & 536870912) !== 0) n.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && ll(n, f !== null ? f.cachePool : null), f !== null ? ym(n, f) : qs(), bm(n);
      else return o = n.lanes = 536870912, hv(t, n, f !== null ? f.baseLanes | i : i, i, o);
    } else f !== null ? (ll(n, f.cachePool), ym(n, f), pa(n), n.memoizedState = null) : (t !== null && ll(n, null), qs(), pa(n));
    return yt(t, n, s, i), n.child;
  }
  function Kr(t, n) {
    return t !== null && t.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function hv(t, n, i, o, s) {
    var f = Ps();
    return f = f === null ? null : {
      parent: at._currentValue,
      pool: f
    }, n.memoizedState = {
      baseLanes: i,
      cachePool: f
    }, t !== null && ll(n, null), qs(), bm(n), t !== null && Hi(t, n, o, !0), n.childLanes = s, null;
  }
  function wl(t, n) {
    return n = Cl({
      mode: n.mode,
      children: n.children
    }, t.mode), n.ref = t.ref, t.child = n, n.return = t, n;
  }
  function mv(t, n, i) {
    return ei(n, t.child, null, i), t = wl(n, n.pendingProps), t.flags |= 2, kt(n), n.memoizedState = null, t;
  }
  function Z_(t, n, i) {
    var o = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, t === null) {
      if (Ce) {
        if (o.mode === "hidden") return t = wl(n, o), n.lanes = 536870912, Kr(null, t);
        if (Fs(n), (t = $e) ? (t = x0(t, nn), t = t !== null && t.data === "&" ? t : null, t !== null && (n.memoizedState = {
          dehydrated: t,
          treeContext: ca !== null ? {
            id: An,
            overflow: xn
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, i = em(t), i.return = n, n.child = i, pt = n, $e = null)) : t = null, t === null) throw da(n);
        return n.lanes = 536870912, null;
      }
      return wl(n, o);
    }
    var f = t.memoizedState;
    if (f !== null) {
      var v = f.dehydrated;
      if (Fs(n), s) if (n.flags & 256) n.flags &= -257, n = mv(t, n, i);
      else if (n.memoizedState !== null) n.child = t.child, n.flags |= 128, n = null;
      else throw Error(u(558));
      else if (rt || Hi(t, n, i, !1), s = (i & t.childLanes) !== 0, rt || s) {
        if (o = Ze, o !== null && (v = oh(o, i), v !== 0 && v !== f.retryLane)) throw f.retryLane = v, Va(t, v), zt(o, t, v), mc;
        Hl(), n = mv(t, n, i);
      } else t = f.treeContext, $e = on(v.nextSibling), pt = n, Ce = !0, fa = null, nn = !1, t !== null && am(n, t), n = wl(n, o), n.flags |= 4096;
      return n;
    }
    return t = kn(t.child, {
      mode: o.mode,
      children: o.children
    }), t.ref = n.ref, n.child = t, t.return = n, t;
  }
  function Tl(t, n) {
    var i = n.ref;
    if (i === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(u(284));
      (t === null || t.ref !== i) && (n.flags |= 4194816);
    }
  }
  function vc(t, n, i, o, s) {
    return Wa(n), i = Ys(t, n, i, o, void 0, s), o = Ws(), t !== null && !rt ? (Qs(t, n, s), Xn(t, n, s)) : (Ce && o && Rs(n), n.flags |= 1, yt(t, n, i, s), n.child);
  }
  function vv(t, n, i, o, s, f) {
    return Wa(n), n.updateQueue = null, i = Sm(n, o, i, s), _m(t), o = Ws(), t !== null && !rt ? (Qs(t, n, f), Xn(t, n, f)) : (Ce && o && Rs(n), n.flags |= 1, yt(t, n, i, f), n.child);
  }
  function pv(t, n, i, o, s) {
    if (Wa(n), n.stateNode === null) {
      var f = Ri, v = i.contextType;
      typeof v == "object" && v !== null && (f = gt(v)), f = new i(o, f), n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = dc, n.stateNode = f, f._reactInternals = n, f = n.stateNode, f.props = o, f.state = n.memoizedState, f.refs = {}, Gs(n), v = i.contextType, f.context = typeof v == "object" && v !== null ? gt(v) : Ri, f.state = n.memoizedState, v = i.getDerivedStateFromProps, typeof v == "function" && (fc(n, i, v, o), f.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (v = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), v !== f.state && dc.enqueueReplaceState(f, f.state, null), Fr(n, o, f, s), Vr(), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (t === null) {
      f = n.stateNode;
      var E = n.memoizedProps, x = ii(i, E);
      f.props = x;
      var Z = f.context, F = i.contextType;
      v = Ri, typeof F == "object" && F !== null && (v = gt(F));
      var K = i.getDerivedStateFromProps;
      F = typeof K == "function" || typeof f.getSnapshotBeforeUpdate == "function", E = n.pendingProps !== E, F || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (E || Z !== v) && rv(n, f, o, v), ma = !1;
      var G = n.memoizedState;
      f.state = G, Fr(n, o, f, s), Vr(), Z = n.memoizedState, E || G !== Z || ma ? (typeof K == "function" && (fc(n, i, K, o), Z = n.memoizedState), (x = ma || iv(n, i, x, o, G, Z, v)) ? (F || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = Z), f.props = o, f.state = Z, f.context = v, o = x) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      f = n.stateNode, ks(t, n), v = n.memoizedProps, F = ii(i, v), f.props = F, K = n.pendingProps, G = f.context, Z = i.contextType, x = Ri, typeof Z == "object" && Z !== null && (x = gt(Z)), E = i.getDerivedStateFromProps, (Z = typeof E == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== K || G !== x) && rv(n, f, o, x), ma = !1, G = n.memoizedState, f.state = G, Fr(n, o, f, s), Vr();
      var $ = n.memoizedState;
      v !== K || G !== $ || ma || t !== null && t.dependencies !== null && rl(t.dependencies) ? (typeof E == "function" && (fc(n, i, E, o), $ = n.memoizedState), (F = ma || iv(n, i, F, o, G, $, x) || t !== null && t.dependencies !== null && rl(t.dependencies)) ? (Z || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, $, x), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(o, $, x)), typeof f.componentDidUpdate == "function" && (n.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === t.memoizedProps && G === t.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && G === t.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = $), f.props = o, f.state = $, f.context = x, o = F) : (typeof f.componentDidUpdate != "function" || v === t.memoizedProps && G === t.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && G === t.memoizedState || (n.flags |= 1024), o = !1);
    }
    return f = o, Tl(t, n), o = (n.flags & 128) !== 0, f || o ? (f = n.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : f.render(), n.flags |= 1, t !== null && o ? (n.child = ei(n, t.child, null, s), n.child = ei(n, null, i, s)) : yt(t, n, i, s), n.memoizedState = f.state, t = n.child) : t = Xn(t, n, s), t;
  }
  function gv(t, n, i, o) {
    return Xa(), n.flags |= 256, yt(t, n, i, o), n.child;
  }
  var pc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function gc(t) {
    return {
      baseLanes: t,
      cachePool: sm()
    };
  }
  function yc(t, n, i) {
    return t = t !== null ? t.childLanes & ~i : 0, n && (t |= $t), t;
  }
  function yv(t, n, i) {
    var o = n.pendingProps, s = !1, f = (n.flags & 128) !== 0, v;
    if ((v = f) || (v = t !== null && t.memoizedState === null ? !1 : (Je.current & 2) !== 0), v && (s = !0, n.flags &= -129), v = (n.flags & 32) !== 0, n.flags &= -33, t === null) {
      if (Ce) {
        if (s ? va(n) : pa(n), (t = $e) ? (t = x0(t, nn), t = t !== null && t.data !== "&" ? t : null, t !== null && (n.memoizedState = {
          dehydrated: t,
          treeContext: ca !== null ? {
            id: An,
            overflow: xn
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, i = em(t), i.return = n, n.child = i, pt = n, $e = null)) : t = null, t === null) throw da(n);
        return Jc(t) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var E = o.children;
      return o = o.fallback, s ? (pa(n), s = n.mode, E = Cl({
        mode: "hidden",
        children: E
      }, s), o = Fa(o, s, i, null), E.return = n, o.return = n, E.sibling = o, n.child = E, o = n.child, o.memoizedState = gc(i), o.childLanes = yc(t, v, i), n.memoizedState = pc, Kr(null, o)) : (va(n), bc(n, E));
    }
    var x = t.memoizedState;
    if (x !== null && (E = x.dehydrated, E !== null)) {
      if (f) n.flags & 256 ? (va(n), n.flags &= -257, n = _c(t, n, i)) : n.memoizedState !== null ? (pa(n), n.child = t.child, n.flags |= 128, n = null) : (pa(n), E = o.fallback, s = n.mode, o = Cl({
        mode: "visible",
        children: o.children
      }, s), E = Fa(E, s, i, null), E.flags |= 2, o.return = n, E.return = n, o.sibling = E, n.child = o, ei(n, t.child, null, i), o = n.child, o.memoizedState = gc(i), o.childLanes = yc(t, v, i), n.memoizedState = pc, n = Kr(null, o));
      else if (va(n), Jc(E)) {
        if (v = E.nextSibling && E.nextSibling.dataset, v) var Z = v.dgst;
        v = Z, o = Error(u(419)), o.stack = "", o.digest = v, Zr({
          value: o,
          source: null,
          stack: null
        }), n = _c(t, n, i);
      } else if (rt || Hi(t, n, i, !1), v = (i & t.childLanes) !== 0, rt || v) {
        if (v = Ze, v !== null && (o = oh(v, i), o !== 0 && o !== x.retryLane)) throw x.retryLane = o, Va(t, o), zt(v, t, o), mc;
        Kc(E) || Hl(), n = _c(t, n, i);
      } else Kc(E) ? (n.flags |= 192, n.child = t.child, n = null) : (t = x.treeContext, $e = on(E.nextSibling), pt = n, Ce = !0, fa = null, nn = !1, t !== null && am(n, t), n = bc(n, o.children), n.flags |= 4096);
      return n;
    }
    return s ? (pa(n), E = o.fallback, s = n.mode, x = t.child, Z = x.sibling, o = kn(x, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = x.subtreeFlags & 65011712, Z !== null ? E = kn(Z, E) : (E = Fa(E, s, i, null), E.flags |= 2), E.return = n, o.return = n, o.sibling = E, n.child = o, Kr(null, o), o = n.child, E = t.child.memoizedState, E === null ? E = gc(i) : (s = E.cachePool, s !== null ? (x = at._currentValue, s = s.parent !== x ? {
      parent: x,
      pool: x
    } : s) : s = sm(), E = {
      baseLanes: E.baseLanes | i,
      cachePool: s
    }), o.memoizedState = E, o.childLanes = yc(t, v, i), n.memoizedState = pc, Kr(t.child, o)) : (va(n), i = t.child, t = i.sibling, i = kn(i, {
      mode: "visible",
      children: o.children
    }), i.return = n, i.sibling = null, t !== null && (v = n.deletions, v === null ? (n.deletions = [t], n.flags |= 16) : v.push(t)), n.child = i, n.memoizedState = null, i);
  }
  function bc(t, n) {
    return n = Cl({
      mode: "visible",
      children: n
    }, t.mode), n.return = t, t.child = n;
  }
  function Cl(t, n) {
    return t = Zt(22, t, null, n), t.lanes = 0, t;
  }
  function _c(t, n, i) {
    return ei(n, t.child, null, i), t = bc(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t;
  }
  function bv(t, n, i) {
    t.lanes |= n;
    var o = t.alternate;
    o !== null && (o.lanes |= n), Ls(t.return, n, i);
  }
  function Sc(t, n, i, o, s, f) {
    var v = t.memoizedState;
    v === null ? t.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: s,
      treeForkCount: f
    } : (v.isBackwards = n, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = i, v.tailMode = s, v.treeForkCount = f);
  }
  function _v(t, n, i) {
    var o = n.pendingProps, s = o.revealOrder, f = o.tail;
    o = o.children;
    var v = Je.current, E = (v & 2) !== 0;
    if (E ? (v = v & 1 | 2, n.flags |= 128) : v &= 1, ae(Je, v), yt(t, n, o, i), o = Ce ? Pr : 0, !E && t !== null && (t.flags & 128) !== 0) e: for (t = n.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && bv(t, i, n);
      else if (t.tag === 19) bv(t, i, n);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n) break e;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) break e;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    switch (s) {
      case "forwards":
        for (i = n.child, s = null; i !== null; ) t = i.alternate, t !== null && hl(t) === null && (s = i), i = i.sibling;
        i = s, i === null ? (s = n.child, n.child = null) : (s = i.sibling, i.sibling = null), Sc(n, !1, s, i, f, o);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (i = null, s = n.child, n.child = null; s !== null; ) {
          if (t = s.alternate, t !== null && hl(t) === null) {
            n.child = s;
            break;
          }
          t = s.sibling, s.sibling = i, i = s, s = t;
        }
        Sc(n, !0, i, null, f, o);
        break;
      case "together":
        Sc(n, !1, null, null, void 0, o);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Xn(t, n, i) {
    if (t !== null && (n.dependencies = t.dependencies), ba |= n.lanes, (i & n.childLanes) === 0) if (t !== null) {
      if (Hi(t, n, i, !1), (i & n.childLanes) === 0) return null;
    } else return null;
    if (t !== null && n.child !== t.child) throw Error(u(153));
    if (n.child !== null) {
      for (t = n.child, i = kn(t, t.pendingProps), n.child = i, i.return = n; t.sibling !== null; ) t = t.sibling, i = i.sibling = kn(t, t.pendingProps), i.return = n;
      i.sibling = null;
    }
    return n.child;
  }
  function Ec(t, n) {
    return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && rl(t)));
  }
  function G_(t, n, i) {
    switch (n.tag) {
      case 3:
        lt(n, n.stateNode.containerInfo), ha(n, at, t.memoizedState.cache), Xa();
        break;
      case 27:
      case 5:
        dn(n);
        break;
      case 4:
        lt(n, n.stateNode.containerInfo);
        break;
      case 10:
        ha(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return n.flags |= 128, Fs(n), null;
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (va(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? yv(t, n, i) : (va(n), t = Xn(t, n, i), t !== null ? t.sibling : null);
        va(n);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (o = (i & n.childLanes) !== 0, o || (Hi(t, n, i, !1), o = (i & n.childLanes) !== 0), s) {
          if (o) return _v(t, n, i);
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ae(Je, Je.current), o) break;
        return null;
      case 22:
        return n.lanes = 0, dv(t, n, i, n.pendingProps);
      case 24:
        ha(n, at, t.memoizedState.cache);
    }
    return Xn(t, n, i);
  }
  function Sv(t, n, i) {
    if (t !== null) if (t.memoizedProps !== n.pendingProps) rt = !0;
    else {
      if (!Ec(t, i) && (n.flags & 128) === 0) return rt = !1, G_(t, n, i);
      rt = (t.flags & 131072) !== 0;
    }
    else rt = !1, Ce && (n.flags & 1048576) !== 0 && nm(n, Pr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var o = n.pendingProps;
          if (t = Ka(n.elementType), n.type = t, typeof t == "function") xs(t) ? (o = ii(t, o), n.tag = 1, n = pv(null, n, t, o, i)) : (n.tag = 0, n = vc(null, n, t, o, i));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === U) {
                n.tag = 11, n = sv(null, n, t, o, i);
                break e;
              } else if (s === ee) {
                n.tag = 14, n = cv(null, n, t, o, i);
                break e;
              }
            }
            throw n = me(t) || t, Error(u(306, n, ""));
          }
        }
        return n;
      case 0:
        return vc(t, n, n.type, n.pendingProps, i);
      case 1:
        return o = n.type, s = ii(o, n.pendingProps), pv(t, n, o, s, i);
      case 3:
        e: {
          if (lt(n, n.stateNode.containerInfo), t === null) throw Error(u(387));
          o = n.pendingProps;
          var f = n.memoizedState;
          s = f.element, ks(t, n), Fr(n, o, null, i);
          var v = n.memoizedState;
          if (o = v.cache, ha(n, at, o), o !== f.cache && js(n, [at], i, !0), Vr(), o = v.element, f.isDehydrated) if (f = {
            element: o,
            isDehydrated: !1,
            cache: v.cache
          }, n.updateQueue.baseState = f, n.memoizedState = f, n.flags & 256) {
            n = gv(t, n, o, i);
            break e;
          } else if (o !== s) {
            s = Jt(Error(u(424)), n), Zr(s), n = gv(t, n, o, i);
            break e;
          } else
            for (t = n.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, $e = on(t.firstChild), pt = n, Ce = !0, fa = null, nn = !0, i = vm(n, null, o, i), n.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (Xa(), o === s) {
              n = Xn(t, n, i);
              break e;
            }
            yt(t, n, o, i);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Tl(t, n), t === null ? (i = z0(n.type, null, n.pendingProps, null)) ? n.memoizedState = i : Ce || (i = n.type, t = n.pendingProps, o = Gl(ve.current).createElement(i), o[vt] = n, o[xt] = t, bt(o, i, t), dt(o), n.stateNode = o) : n.memoizedState = z0(n.type, t.memoizedProps, n.pendingProps, t.memoizedState), null;
      case 27:
        return dn(n), t === null && Ce && (o = n.stateNode = R0(n.type, n.pendingProps, ve.current), pt = n, nn = !0, s = $e, Ta(n.type) ? (ef = s, $e = on(o.firstChild)) : $e = s), yt(t, n, n.pendingProps.children, i), Tl(t, n), t === null && (n.flags |= 4194304), n.child;
      case 5:
        return t === null && Ce && ((s = o = $e) && (o = v2(o, n.type, n.pendingProps, nn), o !== null ? (n.stateNode = o, pt = n, $e = on(o.firstChild), nn = !1, s = !0) : s = !1), s || da(n)), dn(n), s = n.type, f = n.pendingProps, v = t !== null ? t.memoizedProps : null, o = f.children, Yc(s, f) ? o = null : v !== null && Yc(s, v) && (n.flags |= 32), n.memoizedState !== null && (s = Ys(t, n, M_, null, null, i), mo._currentValue = s), Tl(t, n), yt(t, n, o, i), n.child;
      case 6:
        return t === null && Ce && ((t = i = $e) && (i = p2(i, n.pendingProps, nn), i !== null ? (n.stateNode = i, pt = n, $e = null, t = !0) : t = !1), t || da(n)), null;
      case 13:
        return yv(t, n, i);
      case 4:
        return lt(n, n.stateNode.containerInfo), o = n.pendingProps, t === null ? n.child = ei(n, null, o, i) : yt(t, n, o, i), n.child;
      case 11:
        return sv(t, n, n.type, n.pendingProps, i);
      case 7:
        return yt(t, n, n.pendingProps, i), n.child;
      case 8:
        return yt(t, n, n.pendingProps.children, i), n.child;
      case 12:
        return yt(t, n, n.pendingProps.children, i), n.child;
      case 10:
        return o = n.pendingProps, ha(n, n.type, o.value), yt(t, n, o.children, i), n.child;
      case 9:
        return s = n.type._context, o = n.pendingProps.children, Wa(n), s = gt(s), o = o(s), n.flags |= 1, yt(t, n, o, i), n.child;
      case 14:
        return cv(t, n, n.type, n.pendingProps, i);
      case 15:
        return fv(t, n, n.type, n.pendingProps, i);
      case 19:
        return _v(t, n, i);
      case 31:
        return Z_(t, n, i);
      case 22:
        return dv(t, n, i, n.pendingProps);
      case 24:
        return Wa(n), o = gt(at), t === null ? (s = Ps(), s === null && (s = Ze, f = Bs(), s.pooledCache = f, f.refCount++, f !== null && (s.pooledCacheLanes |= i), s = f), n.memoizedState = {
          parent: o,
          cache: s
        }, Gs(n), ha(n, at, s)) : ((t.lanes & i) !== 0 && (ks(t, n), Fr(n, null, null, i), Vr()), s = t.memoizedState, f = n.memoizedState, s.parent !== o ? (s = {
          parent: o,
          cache: o
        }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), ha(n, at, o)) : (o = f.cache, ha(n, at, o), o !== s.cache && js(n, [at], i, !0))), yt(t, n, n.pendingProps.children, i), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(u(156, n.tag));
  }
  function Yn(t) {
    t.flags |= 4;
  }
  function wc(t, n, i, o, s) {
    if ((n = (t.mode & 32) !== 0) && (n = !1), n) {
      if (t.flags |= 16777216, (s & 335544128) === s) if (t.stateNode.complete) t.flags |= 8192;
      else if (Xv()) t.flags |= 8192;
      else throw Ja = sl, Zs;
    } else t.flags &= -16777217;
  }
  function Ev(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !U0(n)) if (Xv()) t.flags |= 8192;
    else throw Ja = sl, Zs;
  }
  function Al(t, n) {
    n !== null && (t.flags |= 4), t.flags & 16384 && (n = t.tag !== 22 ? ah() : 536870912, t.lanes |= n, Vi |= n);
  }
  function Jr(t, n) {
    if (!Ce) switch (t.tailMode) {
      case "hidden":
        n = t.tail;
        for (var i = null; n !== null; ) n.alternate !== null && (i = n), n = n.sibling;
        i === null ? t.tail = null : i.sibling = null;
        break;
      case "collapsed":
        i = t.tail;
        for (var o = null; i !== null; ) i.alternate !== null && (o = i), i = i.sibling;
        o === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : o.sibling = null;
    }
  }
  function qe(t) {
    var n = t.alternate !== null && t.alternate.child === t.child, i = 0, o = 0;
    if (n) for (var s = t.child; s !== null; ) i |= s.lanes | s.childLanes, o |= s.subtreeFlags & 65011712, o |= s.flags & 65011712, s.return = t, s = s.sibling;
    else for (s = t.child; s !== null; ) i |= s.lanes | s.childLanes, o |= s.subtreeFlags, o |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= o, t.childLanes = i, n;
  }
  function k_(t, n, i) {
    var o = n.pendingProps;
    switch (Ns(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qe(n), null;
      case 1:
        return qe(n), null;
      case 3:
        return i = n.stateNode, o = null, t !== null && (o = t.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), qn(at), He(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (t === null || t.child === null) && (zi(n) ? Yn(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, zs())), qe(n), null;
      case 26:
        var s = n.type, f = n.memoizedState;
        return t === null ? (Yn(n), f !== null ? (qe(n), Ev(n, f)) : (qe(n), wc(n, s, null, o, i))) : f ? f !== t.memoizedState ? (Yn(n), qe(n), Ev(n, f)) : (qe(n), n.flags &= -16777217) : (t = t.memoizedProps, t !== o && Yn(n), qe(n), wc(n, s, t, o, i)), null;
      case 27:
        if (wn(n), i = ve.current, s = n.type, t !== null && n.stateNode != null) t.memoizedProps !== o && Yn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(u(166));
            return qe(n), null;
          }
          t = le.current, zi(n) ? im(n, t) : (t = R0(s, o, i), n.stateNode = t, Yn(n));
        }
        return qe(n), null;
      case 5:
        if (wn(n), s = n.type, t !== null && n.stateNode != null) t.memoizedProps !== o && Yn(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(u(166));
            return qe(n), null;
          }
          if (f = le.current, zi(n)) im(n, f);
          else {
            var v = Gl(ve.current);
            switch (f) {
              case 1:
                f = v.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                f = v.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    f = v.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    f = v.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    f = v.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(f.firstChild);
                    break;
                  case "select":
                    f = typeof o.is == "string" ? v.createElement("select", { is: o.is }) : v.createElement("select"), o.multiple ? f.multiple = !0 : o.size && (f.size = o.size);
                    break;
                  default:
                    f = typeof o.is == "string" ? v.createElement(s, { is: o.is }) : v.createElement(s);
                }
            }
            f[vt] = n, f[xt] = o;
            e: for (v = n.child; v !== null; ) {
              if (v.tag === 5 || v.tag === 6) f.appendChild(v.stateNode);
              else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                v.child.return = v, v = v.child;
                continue;
              }
              if (v === n) break e;
              for (; v.sibling === null; ) {
                if (v.return === null || v.return === n) break e;
                v = v.return;
              }
              v.sibling.return = v.return, v = v.sibling;
            }
            n.stateNode = f;
            e: switch (bt(f, s, o), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
            o && Yn(n);
          }
        }
        return qe(n), wc(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, i), null;
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== o && Yn(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(u(166));
          if (t = ve.current, zi(n)) {
            if (t = n.stateNode, i = n.memoizedProps, o = null, s = pt, s !== null) switch (s.tag) {
              case 27:
              case 5:
                o = s.memoizedProps;
            }
            t[vt] = n, t = !!(t.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || b0(t.nodeValue, i)), t || da(n, !0);
          } else t = Gl(t).createTextNode(o), t[vt] = n, n.stateNode = t;
        }
        return qe(n), null;
      case 31:
        if (i = n.memoizedState, t === null || t.memoizedState !== null) {
          if (o = zi(n), i !== null) {
            if (t === null) {
              if (!o) throw Error(u(318));
              if (t = n.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(557));
              t[vt] = n;
            } else Xa(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            qe(n), t = !1;
          } else i = zs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = i), t = !0;
          if (!t)
            return n.flags & 256 ? (kt(n), n) : (kt(n), null);
          if ((n.flags & 128) !== 0) throw Error(u(558));
        }
        return qe(n), null;
      case 13:
        if (o = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = zi(n), o !== null && o.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(u(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(u(317));
              s[vt] = n;
            } else Xa(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            qe(n), s = !1;
          } else s = zs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (kt(n), n) : (kt(n), null);
        }
        return kt(n), (n.flags & 128) !== 0 ? (n.lanes = i, n) : (i = o !== null, t = t !== null && t.memoizedState !== null, i && (o = n.child, s = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (s = o.alternate.memoizedState.cachePool.pool), f = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (f = o.memoizedState.cachePool.pool), f !== s && (o.flags |= 2048)), i !== t && i && (n.child.flags |= 8192), Al(n, n.updateQueue), qe(n), null);
      case 4:
        return He(), t === null && v0(n.stateNode.containerInfo), qe(n), null;
      case 10:
        return qn(n.type), qe(n), null;
      case 19:
        if (Y(Je), o = n.memoizedState, o === null) return qe(n), null;
        if (s = (n.flags & 128) !== 0, f = o.rendering, f === null) if (s) Jr(o, !1);
        else {
          if (Qe !== 0 || t !== null && (t.flags & 128) !== 0) for (t = n.child; t !== null; ) {
            if (f = hl(t), f !== null) {
              for (n.flags |= 128, Jr(o, !1), t = f.updateQueue, n.updateQueue = t, Al(n, t), n.subtreeFlags = 0, t = i, i = n.child; i !== null; ) Jh(i, t), i = i.sibling;
              return ae(Je, Je.current & 1 | 2), Ce && In(n, o.treeForkCount), n.child;
            }
            t = t.sibling;
          }
          o.tail !== null && jt() > Nl && (n.flags |= 128, s = !0, Jr(o, !1), n.lanes = 4194304);
        }
        else {
          if (!s) if (t = hl(f), t !== null) {
            if (n.flags |= 128, s = !0, t = t.updateQueue, n.updateQueue = t, Al(n, t), Jr(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Ce) return qe(n), null;
          } else 2 * jt() - o.renderingStartTime > Nl && i !== 536870912 && (n.flags |= 128, s = !0, Jr(o, !1), n.lanes = 4194304);
          o.isBackwards ? (f.sibling = n.child, n.child = f) : (t = o.last, t !== null ? t.sibling = f : n.child = f, o.last = f);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = jt(), t.sibling = null, i = Je.current, ae(Je, s ? i & 1 | 2 : i & 1), Ce && In(n, o.treeForkCount), t) : (qe(n), null);
      case 22:
      case 23:
        return kt(n), Vs(), o = n.memoizedState !== null, t !== null ? t.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (qe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : qe(n), i = n.updateQueue, i !== null && Al(n, i.retryQueue), i = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== i && (n.flags |= 2048), t !== null && Y(Qa), null;
      case 24:
        return i = null, t !== null && (i = t.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), qn(at), qe(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, n.tag));
  }
  function I_(t, n) {
    switch (Ns(n), n.tag) {
      case 1:
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 3:
        return qn(at), He(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return wn(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (kt(n), n.alternate === null) throw Error(u(340));
          Xa();
        }
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 13:
        if (kt(n), t = n.memoizedState, t !== null && t.dehydrated !== null) {
          if (n.alternate === null) throw Error(u(340));
          Xa();
        }
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 19:
        return Y(Je), null;
      case 4:
        return He(), null;
      case 10:
        return qn(n.type), null;
      case 22:
      case 23:
        return kt(n), Vs(), t !== null && Y(Qa), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 24:
        return qn(at), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function wv(t, n) {
    switch (Ns(n), n.tag) {
      case 3:
        qn(at), He();
        break;
      case 26:
      case 27:
      case 5:
        wn(n);
        break;
      case 4:
        He();
        break;
      case 31:
        n.memoizedState !== null && kt(n);
        break;
      case 13:
        kt(n);
        break;
      case 19:
        Y(Je);
        break;
      case 10:
        qn(n.type);
        break;
      case 22:
      case 23:
        kt(n), Vs(), t !== null && Y(Qa);
        break;
      case 24:
        qn(at);
    }
  }
  function eo(t, n) {
    try {
      var i = n.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next;
        i = s;
        do {
          if ((i.tag & t) === t) {
            o = void 0;
            var f = i.create, v = i.inst;
            o = f(), v.destroy = o;
          }
          i = i.next;
        } while (i !== s);
      }
    } catch (E) {
      je(n, n.return, E);
    }
  }
  function ga(t, n, i) {
    try {
      var o = n.updateQueue, s = o !== null ? o.lastEffect : null;
      if (s !== null) {
        var f = s.next;
        o = f;
        do {
          if ((o.tag & t) === t) {
            var v = o.inst, E = v.destroy;
            if (E !== void 0) {
              v.destroy = void 0, s = n;
              var x = i, Z = E;
              try {
                Z();
              } catch (F) {
                je(s, x, F);
              }
            }
          }
          o = o.next;
        } while (o !== f);
      }
    } catch (F) {
      je(n, n.return, F);
    }
  }
  function Tv(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var i = t.stateNode;
      try {
        gm(n, i);
      } catch (o) {
        je(t, t.return, o);
      }
    }
  }
  function Cv(t, n, i) {
    i.props = ii(t.type, t.memoizedProps), i.state = t.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      je(t, n, o);
    }
  }
  function to(t, n) {
    try {
      var i = t.ref;
      if (i !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var o = t.stateNode;
            break;
          case 30:
            o = t.stateNode;
            break;
          default:
            o = t.stateNode;
        }
        typeof i == "function" ? t.refCleanup = i(o) : i.current = o;
      }
    } catch (s) {
      je(t, n, s);
    }
  }
  function On(t, n) {
    var i = t.ref, o = t.refCleanup;
    if (i !== null) if (typeof o == "function") try {
      o();
    } catch (s) {
      je(t, n, s);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof i == "function") try {
      i(null);
    } catch (s) {
      je(t, n, s);
    }
    else i.current = null;
  }
  function Av(t) {
    var n = t.type, i = t.memoizedProps, o = t.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? o.src = i.src : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (s) {
      je(t, t.return, s);
    }
  }
  function Tc(t, n, i) {
    try {
      var o = t.stateNode;
      s2(o, t.type, i, n), o[xt] = n;
    } catch (s) {
      je(t, t.return, s);
    }
  }
  function xv(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ta(t.type) || t.tag === 4;
  }
  function Cc(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || xv(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ta(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ac(t, n, i) {
    var o = t.tag;
    if (o === 5 || o === 6) t = t.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(t, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(t), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = Zn));
    else if (o !== 4 && (o === 27 && Ta(t.type) && (i = t.stateNode, n = null), t = t.child, t !== null)) for (Ac(t, n, i), t = t.sibling; t !== null; ) Ac(t, n, i), t = t.sibling;
  }
  function xl(t, n, i) {
    var o = t.tag;
    if (o === 5 || o === 6) t = t.stateNode, n ? i.insertBefore(t, n) : i.appendChild(t);
    else if (o !== 4 && (o === 27 && Ta(t.type) && (i = t.stateNode), t = t.child, t !== null)) for (xl(t, n, i), t = t.sibling; t !== null; ) xl(t, n, i), t = t.sibling;
  }
  function Ov(t) {
    var n = t.stateNode, i = t.memoizedProps;
    try {
      for (var o = t.type, s = n.attributes; s.length; ) n.removeAttributeNode(s[0]);
      bt(n, o, i), n[vt] = t, n[xt] = i;
    } catch (f) {
      je(t, t.return, f);
    }
  }
  var Wn = !1, ot = !1, xc = !1, Mv = typeof WeakSet == "function" ? WeakSet : Set, ht = null;
  function $_(t, n) {
    if (t = t.containerInfo, Fc = Xl, t = $h(t), _s(t)) {
      if ("selectionStart" in t) var i = {
        start: t.selectionStart,
        end: t.selectionEnd
      };
      else e: {
        i = (i = t.ownerDocument) && i.defaultView || window;
        var o = i.getSelection && i.getSelection();
        if (o && o.rangeCount !== 0) {
          i = o.anchorNode;
          var s = o.anchorOffset, f = o.focusNode;
          o = o.focusOffset;
          try {
            i.nodeType, f.nodeType;
          } catch {
            i = null;
            break e;
          }
          var v = 0, E = -1, x = -1, Z = 0, F = 0, K = t, G = null;
          t: for (; ; ) {
            for (var $; K !== i || s !== 0 && K.nodeType !== 3 || (E = v + s), K !== f || o !== 0 && K.nodeType !== 3 || (x = v + o), K.nodeType === 3 && (v += K.nodeValue.length), ($ = K.firstChild) !== null; )
              G = K, K = $;
            for (; ; ) {
              if (K === t) break t;
              if (G === i && ++Z === s && (E = v), G === f && ++F === o && (x = v), ($ = K.nextSibling) !== null) break;
              K = G, G = K.parentNode;
            }
            K = $;
          }
          i = E === -1 || x === -1 ? null : {
            start: E,
            end: x
          };
        } else i = null;
      }
      i = i || {
        start: 0,
        end: 0
      };
    } else i = null;
    for (Xc = {
      focusedElem: t,
      selectionRange: i
    }, Xl = !1, ht = n; ht !== null; ) if (n = ht, t = n.child, (n.subtreeFlags & 1028) !== 0 && t !== null) t.return = n, ht = t;
    else for (; ht !== null; ) {
      switch (n = ht, f = n.alternate, t = n.flags, n.tag) {
        case 0:
          if ((t & 4) !== 0 && (t = n.updateQueue, t = t !== null ? t.events : null, t !== null)) for (i = 0; i < t.length; i++) s = t[i], s.ref.impl = s.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && f !== null) {
            t = void 0, i = n, s = f.memoizedProps, f = f.memoizedState, o = i.stateNode;
            try {
              var re = ii(i.type, s);
              t = o.getSnapshotBeforeUpdate(re, f), o.__reactInternalSnapshotBeforeUpdate = t;
            } catch (he) {
              je(i, i.return, he);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = n.stateNode.containerInfo, i = t.nodeType, i === 9) Qc(t);
            else if (i === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Qc(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((t & 1024) !== 0) throw Error(u(163));
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, ht = t;
        break;
      }
      ht = n.return;
    }
  }
  function Rv(t, n, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Kn(t, i), o & 4 && eo(5, i);
        break;
      case 1:
        if (Kn(t, i), o & 4) if (t = i.stateNode, n === null) try {
          t.componentDidMount();
        } catch (v) {
          je(i, i.return, v);
        }
        else {
          var s = ii(i.type, n.memoizedProps);
          n = n.memoizedState;
          try {
            t.componentDidUpdate(s, n, t.__reactInternalSnapshotBeforeUpdate);
          } catch (v) {
            je(i, i.return, v);
          }
        }
        o & 64 && Tv(i), o & 512 && to(i, i.return);
        break;
      case 3:
        if (Kn(t, i), o & 64 && (t = i.updateQueue, t !== null)) {
          if (n = null, i.child !== null) switch (i.child.tag) {
            case 27:
            case 5:
              n = i.child.stateNode;
              break;
            case 1:
              n = i.child.stateNode;
          }
          try {
            gm(t, n);
          } catch (v) {
            je(i, i.return, v);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Ov(i);
      case 26:
      case 5:
        Kn(t, i), n === null && o & 4 && Av(i), o & 512 && to(i, i.return);
        break;
      case 12:
        Kn(t, i);
        break;
      case 31:
        Kn(t, i), o & 4 && zv(t, i);
        break;
      case 13:
        Kn(t, i), o & 4 && Hv(t, i), o & 64 && (t = i.memoizedState, t !== null && (t = t.dehydrated, t !== null && (i = J_.bind(null, i), g2(t, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || Wn, !o) {
          n = n !== null && n.memoizedState !== null || ot, s = Wn;
          var f = ot;
          Wn = o, (ot = n) && !f ? Jn(t, i, (i.subtreeFlags & 8772) !== 0) : Kn(t, i), Wn = s, ot = f;
        }
        break;
      case 30:
        break;
      default:
        Kn(t, i);
    }
  }
  function Nv(t) {
    var n = t.alternate;
    n !== null && (t.alternate = null, Nv(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && as(n)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Fe = null, Mt = !1;
  function Qn(t, n, i) {
    for (i = i.child; i !== null; ) Dv(t, n, i), i = i.sibling;
  }
  function Dv(t, n, i) {
    if (Bt && typeof Bt.onCommitFiberUnmount == "function") try {
      Bt.onCommitFiberUnmount(Cr, i);
    } catch {
    }
    switch (i.tag) {
      case 26:
        ot || On(i, n), Qn(t, n, i), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        ot || On(i, n);
        var o = Fe, s = Mt;
        Ta(i.type) && (Fe = i.stateNode, Mt = !1), Qn(t, n, i), co(i.stateNode), Fe = o, Mt = s;
        break;
      case 5:
        ot || On(i, n);
      case 6:
        if (o = Fe, s = Mt, Fe = null, Qn(t, n, i), Fe = o, Mt = s, Fe !== null) if (Mt) try {
          (Fe.nodeType === 9 ? Fe.body : Fe.nodeName === "HTML" ? Fe.ownerDocument.body : Fe).removeChild(i.stateNode);
        } catch (f) {
          je(i, n, f);
        }
        else try {
          Fe.removeChild(i.stateNode);
        } catch (f) {
          je(i, n, f);
        }
        break;
      case 18:
        Fe !== null && (Mt ? (t = Fe, C0(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, i.stateNode), er(t)) : C0(Fe, i.stateNode));
        break;
      case 4:
        o = Fe, s = Mt, Fe = i.stateNode.containerInfo, Mt = !0, Qn(t, n, i), Fe = o, Mt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ga(2, i, n), ot || ga(4, i, n), Qn(t, n, i);
        break;
      case 1:
        ot || (On(i, n), o = i.stateNode, typeof o.componentWillUnmount == "function" && Cv(i, n, o)), Qn(t, n, i);
        break;
      case 21:
        Qn(t, n, i);
        break;
      case 22:
        ot = (o = ot) || i.memoizedState !== null, Qn(t, n, i), ot = o;
        break;
      default:
        Qn(t, n, i);
    }
  }
  function zv(t, n) {
    if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        er(t);
      } catch (i) {
        je(n, n.return, i);
      }
    }
  }
  function Hv(t, n) {
    if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      er(t);
    } catch (i) {
      je(n, n.return, i);
    }
  }
  function q_(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new Mv()), n;
      case 22:
        return t = t.stateNode, n = t._retryCache, n === null && (n = t._retryCache = new Mv()), n;
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Ol(t, n) {
    var i = q_(t);
    n.forEach(function(o) {
      if (!i.has(o)) {
        i.add(o);
        var s = e2.bind(null, t, o);
        o.then(s, s);
      }
    });
  }
  function Rt(t, n) {
    var i = n.deletions;
    if (i !== null) for (var o = 0; o < i.length; o++) {
      var s = i[o], f = t, v = n, E = v;
      e: for (; E !== null; ) {
        switch (E.tag) {
          case 27:
            if (Ta(E.type)) {
              Fe = E.stateNode, Mt = !1;
              break e;
            }
            break;
          case 5:
            Fe = E.stateNode, Mt = !1;
            break e;
          case 3:
          case 4:
            Fe = E.stateNode.containerInfo, Mt = !0;
            break e;
        }
        E = E.return;
      }
      if (Fe === null) throw Error(u(160));
      Dv(f, v, s), Fe = null, Mt = !1, f = s.alternate, f !== null && (f.return = null), s.return = null;
    }
    if (n.subtreeFlags & 13886) for (n = n.child; n !== null; ) Lv(n, t), n = n.sibling;
  }
  var pn = null;
  function Lv(t, n) {
    var i = t.alternate, o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Rt(n, t), Nt(t), o & 4 && (ga(3, t, t.return), eo(3, t), ga(5, t, t.return));
        break;
      case 1:
        Rt(n, t), Nt(t), o & 512 && (ot || i === null || On(i, i.return)), o & 64 && Wn && (t = t.updateQueue, t !== null && (o = t.callbacks, o !== null && (i = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var s = pn;
        if (Rt(n, t), Nt(t), o & 512 && (ot || i === null || On(i, i.return)), o & 4) {
          var f = i !== null ? i.memoizedState : null;
          if (o = t.memoizedState, i === null) if (o === null) if (t.stateNode === null) {
            e: {
              o = t.type, i = t.memoizedProps, s = s.ownerDocument || s;
              t: switch (o) {
                case "title":
                  f = s.getElementsByTagName("title")[0], (!f || f[Or] || f[vt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = s.createElement(o), s.head.insertBefore(f, s.querySelector("head > title"))), bt(f, o, i), f[vt] = t, dt(f), o = f;
                  break e;
                case "link":
                  var v = j0("link", "href", s).get(o + (i.href || ""));
                  if (v) {
                    for (var E = 0; E < v.length; E++) if (f = v[E], f.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && f.getAttribute("rel") === (i.rel == null ? null : i.rel) && f.getAttribute("title") === (i.title == null ? null : i.title) && f.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                      v.splice(E, 1);
                      break t;
                    }
                  }
                  f = s.createElement(o), bt(f, o, i), s.head.appendChild(f);
                  break;
                case "meta":
                  if (v = j0("meta", "content", s).get(o + (i.content || ""))) {
                    for (E = 0; E < v.length; E++) if (f = v[E], f.getAttribute("content") === (i.content == null ? null : "" + i.content) && f.getAttribute("name") === (i.name == null ? null : i.name) && f.getAttribute("property") === (i.property == null ? null : i.property) && f.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && f.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                      v.splice(E, 1);
                      break t;
                    }
                  }
                  f = s.createElement(o), bt(f, o, i), s.head.appendChild(f);
                  break;
                default:
                  throw Error(u(468, o));
              }
              f[vt] = t, dt(f), o = f;
            }
            t.stateNode = o;
          } else B0(s, t.type, t.stateNode);
          else t.stateNode = L0(s, o, t.memoizedProps);
          else f !== o ? (f === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : f.count--, o === null ? B0(s, t.type, t.stateNode) : L0(s, o, t.memoizedProps)) : o === null && t.stateNode !== null && Tc(t, t.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        Rt(n, t), Nt(t), o & 512 && (ot || i === null || On(i, i.return)), i !== null && o & 4 && Tc(t, t.memoizedProps, i.memoizedProps);
        break;
      case 5:
        if (Rt(n, t), Nt(t), o & 512 && (ot || i === null || On(i, i.return)), t.flags & 32) {
          s = t.stateNode;
          try {
            wi(s, "");
          } catch (re) {
            je(t, t.return, re);
          }
        }
        o & 4 && t.stateNode != null && (s = t.memoizedProps, Tc(t, s, i !== null ? i.memoizedProps : s)), o & 1024 && (xc = !0);
        break;
      case 6:
        if (Rt(n, t), Nt(t), o & 4) {
          if (t.stateNode === null) throw Error(u(162));
          o = t.memoizedProps, i = t.stateNode;
          try {
            i.nodeValue = o;
          } catch (re) {
            je(t, t.return, re);
          }
        }
        break;
      case 3:
        if ($l = null, s = pn, pn = kl(n.containerInfo), Rt(n, t), pn = s, Nt(t), o & 4 && i !== null && i.memoizedState.isDehydrated) try {
          er(n.containerInfo);
        } catch (re) {
          je(t, t.return, re);
        }
        xc && (xc = !1, jv(t));
        break;
      case 4:
        o = pn, pn = kl(t.stateNode.containerInfo), Rt(n, t), Nt(t), pn = o;
        break;
      case 12:
        Rt(n, t), Nt(t);
        break;
      case 31:
        Rt(n, t), Nt(t), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, Ol(t, o)));
        break;
      case 13:
        Rt(n, t), Nt(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (Rl = jt()), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, Ol(t, o)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var x = i !== null && i.memoizedState !== null, Z = Wn, F = ot;
        if (Wn = Z || s, ot = F || x, Rt(n, t), ot = F, Wn = Z, Nt(t), o & 8192) e: for (n = t.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (i === null || x || Wn || ot || ri(t)), i = null, n = t; ; ) {
          if (n.tag === 5 || n.tag === 26) {
            if (i === null) {
              x = i = n;
              try {
                if (f = x.stateNode, s) v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                else {
                  E = x.stateNode;
                  var K = x.memoizedProps.style, G = K != null && K.hasOwnProperty("display") ? K.display : null;
                  E.style.display = G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                }
              } catch (re) {
                je(x, x.return, re);
              }
            }
          } else if (n.tag === 6) {
            if (i === null) {
              x = n;
              try {
                x.stateNode.nodeValue = s ? "" : x.memoizedProps;
              } catch (re) {
                je(x, x.return, re);
              }
            }
          } else if (n.tag === 18) {
            if (i === null) {
              x = n;
              try {
                var $ = x.stateNode;
                s ? A0($, !0) : A0(x.stateNode, !1);
              } catch (re) {
                je(x, x.return, re);
              }
            }
          } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === t) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) break e;
            i === n && (i = null), n = n.return;
          }
          i === n && (i = null), n.sibling.return = n.return, n = n.sibling;
        }
        o & 4 && (o = t.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, Ol(t, i))));
        break;
      case 19:
        Rt(n, t), Nt(t), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, Ol(t, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Rt(n, t), Nt(t);
    }
  }
  function Nt(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var i, o = t.return; o !== null; ) {
          if (xv(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(u(160));
        switch (i.tag) {
          case 27:
            var s = i.stateNode;
            xl(t, Cc(t), s);
            break;
          case 5:
            var f = i.stateNode;
            i.flags & 32 && (wi(f, ""), i.flags &= -33), xl(t, Cc(t), f);
            break;
          case 3:
          case 4:
            var v = i.stateNode.containerInfo;
            Ac(t, Cc(t), v);
            break;
          default:
            throw Error(u(161));
        }
      } catch (E) {
        je(t, t.return, E);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function jv(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var n = t;
      jv(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), t = t.sibling;
    }
  }
  function Kn(t, n) {
    if (n.subtreeFlags & 8772) for (n = n.child; n !== null; ) Rv(t, n.alternate, n), n = n.sibling;
  }
  function ri(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ga(4, n, n.return), ri(n);
          break;
        case 1:
          On(n, n.return);
          var i = n.stateNode;
          typeof i.componentWillUnmount == "function" && Cv(n, n.return, i), ri(n);
          break;
        case 27:
          co(n.stateNode);
        case 26:
        case 5:
          On(n, n.return), ri(n);
          break;
        case 22:
          n.memoizedState === null && ri(n);
          break;
        case 30:
          ri(n);
          break;
        default:
          ri(n);
      }
      t = t.sibling;
    }
  }
  function Jn(t, n, i) {
    for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate, s = t, f = n, v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Jn(s, f, i), eo(4, f);
          break;
        case 1:
          if (Jn(s, f, i), o = f, s = o.stateNode, typeof s.componentDidMount == "function") try {
            s.componentDidMount();
          } catch (Z) {
            je(o, o.return, Z);
          }
          if (o = f, s = o.updateQueue, s !== null) {
            var E = o.stateNode;
            try {
              var x = s.shared.hiddenCallbacks;
              if (x !== null) for (s.shared.hiddenCallbacks = null, s = 0; s < x.length; s++) pm(x[s], E);
            } catch (Z) {
              je(o, o.return, Z);
            }
          }
          i && v & 64 && Tv(f), to(f, f.return);
          break;
        case 27:
          Ov(f);
        case 26:
        case 5:
          Jn(s, f, i), i && o === null && v & 4 && Av(f), to(f, f.return);
          break;
        case 12:
          Jn(s, f, i);
          break;
        case 31:
          Jn(s, f, i), i && v & 4 && zv(s, f);
          break;
        case 13:
          Jn(s, f, i), i && v & 4 && Hv(s, f);
          break;
        case 22:
          f.memoizedState === null && Jn(s, f, i), to(f, f.return);
          break;
        case 30:
          break;
        default:
          Jn(s, f, i);
      }
      n = n.sibling;
    }
  }
  function Oc(t, n) {
    var i = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), t = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool), t !== i && (t != null && t.refCount++, i != null && Gr(i));
  }
  function Mc(t, n) {
    t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && Gr(t));
  }
  function gn(t, n, i, o) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) Bv(t, n, i, o), n = n.sibling;
  }
  function Bv(t, n, i, o) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        gn(t, n, i, o), s & 2048 && eo(9, n);
        break;
      case 1:
        gn(t, n, i, o);
        break;
      case 3:
        gn(t, n, i, o), s & 2048 && (t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && Gr(t)));
        break;
      case 12:
        if (s & 2048) {
          gn(t, n, i, o), t = n.stateNode;
          try {
            var f = n.memoizedProps, v = f.id, E = f.onPostCommit;
            typeof E == "function" && E(v, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (x) {
            je(n, n.return, x);
          }
        } else gn(t, n, i, o);
        break;
      case 31:
        gn(t, n, i, o);
        break;
      case 13:
        gn(t, n, i, o);
        break;
      case 23:
        break;
      case 22:
        f = n.stateNode, v = n.alternate, n.memoizedState !== null ? f._visibility & 2 ? gn(t, n, i, o) : no(t, n) : f._visibility & 2 ? gn(t, n, i, o) : (f._visibility |= 2, Ii(t, n, i, o, (n.subtreeFlags & 10256) !== 0 || !1)), s & 2048 && Oc(v, n);
        break;
      case 24:
        gn(t, n, i, o), s & 2048 && Mc(n.alternate, n);
        break;
      default:
        gn(t, n, i, o);
    }
  }
  function Ii(t, n, i, o, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var f = t, v = n, E = i, x = o, Z = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Ii(f, v, E, x, s), eo(8, v);
          break;
        case 23:
          break;
        case 22:
          var F = v.stateNode;
          v.memoizedState !== null ? F._visibility & 2 ? Ii(f, v, E, x, s) : no(f, v) : (F._visibility |= 2, Ii(f, v, E, x, s)), s && Z & 2048 && Oc(v.alternate, v);
          break;
        case 24:
          Ii(f, v, E, x, s), s && Z & 2048 && Mc(v.alternate, v);
          break;
        default:
          Ii(f, v, E, x, s);
      }
      n = n.sibling;
    }
  }
  function no(t, n) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) {
      var i = t, o = n, s = o.flags;
      switch (o.tag) {
        case 22:
          no(i, o), s & 2048 && Oc(o.alternate, o);
          break;
        case 24:
          no(i, o), s & 2048 && Mc(o.alternate, o);
          break;
        default:
          no(i, o);
      }
      n = n.sibling;
    }
  }
  var ao = 8192;
  function $i(t, n, i) {
    if (t.subtreeFlags & ao) for (t = t.child; t !== null; ) Uv(t, n, i), t = t.sibling;
  }
  function Uv(t, n, i) {
    switch (t.tag) {
      case 26:
        $i(t, n, i), t.flags & ao && t.memoizedState !== null && M2(i, pn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        $i(t, n, i);
        break;
      case 3:
      case 4:
        var o = pn;
        pn = kl(t.stateNode.containerInfo), $i(t, n, i), pn = o;
        break;
      case 22:
        t.memoizedState === null && (o = t.alternate, o !== null && o.memoizedState !== null ? (o = ao, ao = 16777216, $i(t, n, i), ao = o) : $i(t, n, i));
        break;
      default:
        $i(t, n, i);
    }
  }
  function Pv(t) {
    var n = t.alternate;
    if (n !== null && (t = n.child, t !== null)) {
      n.child = null;
      do
        n = t.sibling, t.sibling = null, t = n;
      while (t !== null);
    }
  }
  function io(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null) for (var i = 0; i < n.length; i++) {
        var o = n[i];
        ht = o, Gv(o, t);
      }
      Pv(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Zv(t), t = t.sibling;
  }
  function Zv(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        io(t), t.flags & 2048 && ga(9, t, t.return);
        break;
      case 3:
        io(t);
        break;
      case 12:
        io(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3, Ml(t)) : io(t);
        break;
      default:
        io(t);
    }
  }
  function Ml(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null) for (var i = 0; i < n.length; i++) {
        var o = n[i];
        ht = o, Gv(o, t);
      }
      Pv(t);
    }
    for (t = t.child; t !== null; ) {
      switch (n = t, n.tag) {
        case 0:
        case 11:
        case 15:
          ga(8, n, n.return), Ml(n);
          break;
        case 22:
          i = n.stateNode, i._visibility & 2 && (i._visibility &= -3, Ml(n));
          break;
        default:
          Ml(n);
      }
      t = t.sibling;
    }
  }
  function Gv(t, n) {
    for (; ht !== null; ) {
      var i = ht;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ga(8, i, n);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Gr(i.memoizedState.cache);
      }
      if (o = i.child, o !== null) o.return = i, ht = o;
      else e: for (i = t; ht !== null; ) {
        o = ht;
        var s = o.sibling, f = o.return;
        if (Nv(o), o === i) {
          ht = null;
          break e;
        }
        if (s !== null) {
          s.return = f, ht = s;
          break e;
        }
        ht = f;
      }
    }
  }
  var V_ = {
    getCacheForType: function(t) {
      var n = gt(at), i = n.data.get(t);
      return i === void 0 && (i = t(), n.data.set(t, i)), i;
    },
    cacheSignal: function() {
      return gt(at).controller.signal;
    }
  }, F_ = typeof WeakMap == "function" ? WeakMap : Map, ze = 0, Ze = null, Se = null, we = 0, Le = 0, It = null, ya = !1, qi = !1, Rc = !1, ea = 0, Qe = 0, ba = 0, oi = 0, Nc = 0, $t = 0, Vi = 0, ro = null, Dt = null, Dc = !1, Rl = 0, kv = 0, Nl = 1 / 0, Dl = null, _a = null, ut = 0, Sa = null, Fi = null, ta = 0, zc = 0, Hc = null, Iv = null, oo = 0, Lc = null;
  function rn() {
    return (ze & 2) !== 0 && we !== 0 ? we & -we : q.T !== null ? Gc() : uh();
  }
  function $v() {
    if ($t === 0) if ((we & 536870912) === 0 || Ce) {
      var t = Po;
      Po <<= 1, (Po & 3932160) === 0 && (Po = 262144), $t = t;
    } else $t = 536870912;
    return t = Gt.current, t !== null && (t.flags |= 32), $t;
  }
  function zt(t, n, i) {
    (t === Ze && (Le === 2 || Le === 9) || t.cancelPendingCommit !== null) && (Xi(t, 0), Ea(t, we, $t, !1)), ko(t, i), ((ze & 2) === 0 || t !== Ze) && (t === Ze && ((ze & 2) === 0 && (oi |= i), Qe === 4 && Ea(t, we, $t, !1)), na(t));
  }
  function qv(t, n, i) {
    if ((ze & 6) !== 0) throw Error(u(327));
    var o = !i && (n & 127) === 0 && (n & t.expiredLanes) === 0 || Ar(t, n), s = o ? W_(t, n) : Bc(t, n, !0), f = o;
    do {
      if (s === 0) {
        qi && !o && Ea(t, n, 0, !1);
        break;
      } else {
        if (i = t.current.alternate, f && !X_(i)) {
          s = Bc(t, n, !1), f = !1;
          continue;
        }
        if (s === 2) {
          if (f = n, t.errorRecoveryDisabledLanes & f) var v = 0;
          else v = t.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            n = v;
            e: {
              var E = t;
              s = ro;
              var x = E.current.memoizedState.isDehydrated;
              if (x && (Xi(E, v).flags |= 256), v = Bc(E, v, !1), v !== 2) {
                if (Rc && !x) {
                  E.errorRecoveryDisabledLanes |= f, oi |= f, s = 4;
                  break e;
                }
                f = Dt, Dt = s, f !== null && (Dt === null ? Dt = f : Dt.push.apply(Dt, f));
              }
              s = v;
            }
            if (f = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Xi(t, 0), Ea(t, n, 0, !0);
          break;
        }
        e: {
          switch (o = t, f = s, f) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Ea(o, n, $t, !ya);
              break e;
            case 2:
              Dt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((n & 62914560) === n && (s = Rl + 300 - jt(), 10 < s)) {
            if (Ea(o, n, $t, !ya), Go(o, 0, !0) !== 0) break e;
            ta = n, o.timeoutHandle = w0(Vv.bind(null, o, i, Dt, Dl, Dc, n, $t, oi, Vi, ya, f, "Throttled", -0, 0), s);
            break e;
          }
          Vv(o, i, Dt, Dl, Dc, n, $t, oi, Vi, ya, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    na(t);
  }
  function Vv(t, n, i, o, s, f, v, E, x, Z, F, K, G, $) {
    if (t.timeoutHandle = -1, K = n.subtreeFlags, K & 8192 || (K & 16785408) === 16785408) {
      K = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Zn
      }, Uv(n, f, K);
      var re = (f & 62914560) === f ? Rl - jt() : (f & 4194048) === f ? kv - jt() : 0;
      if (re = R2(K, re), re !== null) {
        ta = f, t.cancelPendingCommit = re(e0.bind(null, t, n, f, i, o, s, v, E, x, F, K, null, G, $)), Ea(t, f, v, !Z);
        return;
      }
    }
    e0(t, n, f, i, o, s, v, E, x);
  }
  function X_(t) {
    for (var n = t; ; ) {
      var i = n.tag;
      if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null))) for (var o = 0; o < i.length; o++) {
        var s = i[o], f = s.getSnapshot;
        s = s.value;
        try {
          if (!Pt(f(), s)) return !1;
        } catch {
          return !1;
        }
      }
      if (i = n.child, n.subtreeFlags & 16384 && i !== null) i.return = n, n = i;
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Ea(t, n, i, o) {
    n &= ~Nc, n &= ~oi, t.suspendedLanes |= n, t.pingedLanes &= ~n, o && (t.warmLanes |= n), o = t.expirationTimes;
    for (var s = n; 0 < s; ) {
      var f = 31 - Ut(s), v = 1 << f;
      o[f] = -1, s &= ~v;
    }
    i !== 0 && ih(t, i, n);
  }
  function zl() {
    return (ze & 6) === 0 ? (lo(0, !1), !1) : !0;
  }
  function jc() {
    if (Se !== null) {
      if (Le === 0) var t = Se.return;
      else t = Se, $n = Ya = null, Ks(t), Ui = null, Ir = 0, t = Se;
      for (; t !== null; ) wv(t.alternate, t), t = t.return;
      Se = null;
    }
  }
  function Xi(t, n) {
    var i = t.timeoutHandle;
    i !== -1 && (t.timeoutHandle = -1, d2(i)), i = t.cancelPendingCommit, i !== null && (t.cancelPendingCommit = null, i()), ta = 0, jc(), Ze = t, Se = i = kn(t.current, null), we = n, Le = 0, It = null, ya = !1, qi = Ar(t, n), Rc = !1, Vi = $t = Nc = oi = ba = Qe = 0, Dt = ro = null, Dc = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = t.entangledLanes;
    if (o !== 0) for (t = t.entanglements, o &= n; 0 < o; ) {
      var s = 31 - Ut(o), f = 1 << s;
      n |= t[s], o &= ~f;
    }
    return ea = n, el(), i;
  }
  function Fv(t, n) {
    ye = null, q.H = Qr, n === Bi || n === ul ? (n = dm(), Le = 3) : n === Zs ? (n = dm(), Le = 4) : Le = n === mc ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, It = n, Se === null && (Qe = 1, El(t, Jt(n, t.current)));
  }
  function Xv() {
    var t = Gt.current;
    return t === null ? !0 : (we & 4194048) === we ? an === null : (we & 62914560) === we || (we & 536870912) !== 0 ? t === an : !1;
  }
  function Yv() {
    var t = q.H;
    return q.H = Qr, t === null ? Qr : t;
  }
  function Wv() {
    var t = q.A;
    return q.A = V_, t;
  }
  function Hl() {
    Qe = 4, ya || (we & 4194048) !== we && Gt.current !== null || (qi = !0), (ba & 134217727) === 0 && (oi & 134217727) === 0 || Ze === null || Ea(Ze, we, $t, !1);
  }
  function Bc(t, n, i) {
    var o = ze;
    ze |= 2;
    var s = Yv(), f = Wv();
    (Ze !== t || we !== n) && (Dl = null, Xi(t, n)), n = !1;
    var v = Qe;
    e: do
      try {
        if (Le !== 0 && Se !== null) {
          var E = Se, x = It;
          switch (Le) {
            case 8:
              jc(), v = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (n = !0);
              var Z = Le;
              if (Le = 0, It = null, Yi(t, E, x, Z), i && qi) {
                v = 0;
                break e;
              }
              break;
            default:
              Z = Le, Le = 0, It = null, Yi(t, E, x, Z);
          }
        }
        Y_(), v = Qe;
        break;
      } catch (F) {
        Fv(t, F);
      }
    while (!0);
    return n && t.shellSuspendCounter++, $n = Ya = null, ze = o, q.H = s, q.A = f, Se === null && (Ze = null, we = 0, el()), v;
  }
  function Y_() {
    for (; Se !== null; ) Qv(Se);
  }
  function W_(t, n) {
    var i = ze;
    ze |= 2;
    var o = Yv(), s = Wv();
    Ze !== t || we !== n ? (Dl = null, Nl = jt() + 500, Xi(t, n)) : qi = Ar(t, n);
    e: do
      try {
        if (Le !== 0 && Se !== null) {
          n = Se;
          var f = It;
          t: switch (Le) {
            case 1:
              Le = 0, It = null, Yi(t, n, f, 1);
              break;
            case 2:
            case 9:
              if (cm(f)) {
                Le = 0, It = null, Kv(n);
                break;
              }
              n = function() {
                Le !== 2 && Le !== 9 || Ze !== t || (Le = 7), na(t);
              }, f.then(n, n);
              break e;
            case 3:
              Le = 7;
              break e;
            case 4:
              Le = 5;
              break e;
            case 7:
              cm(f) ? (Le = 0, It = null, Kv(n)) : (Le = 0, It = null, Yi(t, n, f, 7));
              break;
            case 5:
              var v = null;
              switch (Se.tag) {
                case 26:
                  v = Se.memoizedState;
                case 5:
                case 27:
                  var E = Se;
                  if (v ? U0(v) : E.stateNode.complete) {
                    Le = 0, It = null;
                    var x = E.sibling;
                    if (x !== null) Se = x;
                    else {
                      var Z = E.return;
                      Z !== null ? (Se = Z, Ll(Z)) : Se = null;
                    }
                    break t;
                  }
              }
              Le = 0, It = null, Yi(t, n, f, 5);
              break;
            case 6:
              Le = 0, It = null, Yi(t, n, f, 6);
              break;
            case 8:
              jc(), Qe = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        Q_();
        break;
      } catch (F) {
        Fv(t, F);
      }
    while (!0);
    return $n = Ya = null, q.H = o, q.A = s, ze = i, Se !== null ? 0 : (Ze = null, we = 0, el(), Qe);
  }
  function Q_() {
    for (; Se !== null && !mn(); ) Qv(Se);
  }
  function Qv(t) {
    var n = Sv(t.alternate, t, ea);
    t.memoizedProps = t.pendingProps, n === null ? Ll(t) : Se = n;
  }
  function Kv(t) {
    var n = t, i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = vv(i, n, n.pendingProps, n.type, void 0, we);
        break;
      case 11:
        n = vv(i, n, n.pendingProps, n.type.render, n.ref, we);
        break;
      case 5:
        Ks(n);
      default:
        wv(i, n), n = Se = Jh(n, ea), n = Sv(i, n, ea);
    }
    t.memoizedProps = t.pendingProps, n === null ? Ll(t) : Se = n;
  }
  function Yi(t, n, i, o) {
    $n = Ya = null, Ks(n), Ui = null, Ir = 0;
    var s = n.return;
    try {
      if (P_(t, s, n, i, we)) {
        Qe = 1, El(t, Jt(i, t.current)), Se = null;
        return;
      }
    } catch (f) {
      if (s !== null) throw Se = s, f;
      Qe = 1, El(t, Jt(i, t.current)), Se = null;
      return;
    }
    n.flags & 32768 ? (Ce || o === 1 ? t = !0 : qi || (we & 536870912) !== 0 ? t = !1 : (ya = t = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Gt.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Jv(n, t)) : Ll(n);
  }
  function Ll(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        Jv(n, ya);
        return;
      }
      t = n.return;
      var i = k_(n.alternate, n, ea);
      if (i !== null) {
        Se = i;
        return;
      }
      if (n = n.sibling, n !== null) {
        Se = n;
        return;
      }
      Se = n = t;
    } while (n !== null);
    Qe === 0 && (Qe = 5);
  }
  function Jv(t, n) {
    do {
      var i = I_(t.alternate, t);
      if (i !== null) {
        i.flags &= 32767, Se = i;
        return;
      }
      if (i = t.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (t = t.sibling, t !== null)) {
        Se = t;
        return;
      }
      Se = t = i;
    } while (t !== null);
    Qe = 6, Se = null;
  }
  function e0(t, n, i, o, s, f, v, E, x) {
    t.cancelPendingCommit = null;
    do
      jl();
    while (ut !== 0);
    if ((ze & 6) !== 0) throw Error(u(327));
    if (n !== null) {
      if (n === t.current) throw Error(u(177));
      if (f = n.lanes | n.childLanes, f |= Cs, Ub(t, i, f, v, E, x), t === Ze && (Se = Ze = null, we = 0), Fi = n, Sa = t, ta = i, zc = f, Hc = s, Iv = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, t2(Bo, function() {
        return r0(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = q.T, q.T = null, s = V.p, V.p = 2, v = ze, ze |= 4;
        try {
          $_(t, n, i);
        } finally {
          ze = v, V.p = s, q.T = o;
        }
      }
      ut = 1, t0(), n0(), a0();
    }
  }
  function t0() {
    if (ut === 1) {
      ut = 0;
      var t = Sa, n = Fi, i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        i = q.T, q.T = null;
        var o = V.p;
        V.p = 2;
        var s = ze;
        ze |= 4;
        try {
          Lv(n, t);
          var f = Xc, v = $h(t.containerInfo), E = f.focusedElem, x = f.selectionRange;
          if (v !== E && E && E.ownerDocument && Ih(E.ownerDocument.documentElement, E)) {
            if (x !== null && _s(E)) {
              var Z = x.start, F = x.end;
              if (F === void 0 && (F = Z), "selectionStart" in E) E.selectionStart = Z, E.selectionEnd = Math.min(F, E.value.length);
              else {
                var K = E.ownerDocument || document, G = K && K.defaultView || window;
                if (G.getSelection) {
                  var $ = G.getSelection(), re = E.textContent.length, he = Math.min(x.start, re), Pe = x.end === void 0 ? he : Math.min(x.end, re);
                  !$.extend && he > Pe && (v = Pe, Pe = he, he = v);
                  var j = kh(E, he), O = kh(E, Pe);
                  if (j && O && ($.rangeCount !== 1 || $.anchorNode !== j.node || $.anchorOffset !== j.offset || $.focusNode !== O.node || $.focusOffset !== O.offset)) {
                    var P = K.createRange();
                    P.setStart(j.node, j.offset), $.removeAllRanges(), he > Pe ? ($.addRange(P), $.extend(O.node, O.offset)) : (P.setEnd(O.node, O.offset), $.addRange(P));
                  }
                }
              }
            }
            for (K = [], $ = E; $ = $.parentNode; ) $.nodeType === 1 && K.push({
              element: $,
              left: $.scrollLeft,
              top: $.scrollTop
            });
            for (typeof E.focus == "function" && E.focus(), E = 0; E < K.length; E++) {
              var X = K[E];
              X.element.scrollLeft = X.left, X.element.scrollTop = X.top;
            }
          }
          Xl = !!Fc, Xc = Fc = null;
        } finally {
          ze = s, V.p = o, q.T = i;
        }
      }
      t.current = n, ut = 2;
    }
  }
  function n0() {
    if (ut === 2) {
      ut = 0;
      var t = Sa, n = Fi, i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        i = q.T, q.T = null;
        var o = V.p;
        V.p = 2;
        var s = ze;
        ze |= 4;
        try {
          Rv(t, n.alternate, n);
        } finally {
          ze = s, V.p = o, q.T = i;
        }
      }
      ut = 3;
    }
  }
  function a0() {
    if (ut === 4 || ut === 3) {
      ut = 0, Ju();
      var t = Sa, n = Fi, i = ta, o = Iv;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ut = 5 : (ut = 0, Fi = Sa = null, i0(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (s === 0 && (_a = null), ts(i), n = n.stateNode, Bt && typeof Bt.onCommitFiberRoot == "function") try {
        Bt.onCommitFiberRoot(Cr, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
      if (o !== null) {
        n = q.T, s = V.p, V.p = 2, q.T = null;
        try {
          for (var f = t.onRecoverableError, v = 0; v < o.length; v++) {
            var E = o[v];
            f(E.value, { componentStack: E.stack });
          }
        } finally {
          q.T = n, V.p = s;
        }
      }
      (ta & 3) !== 0 && jl(), na(t), s = t.pendingLanes, (i & 261930) !== 0 && (s & 42) !== 0 ? t === Lc ? oo++ : (oo = 0, Lc = t) : oo = 0, lo(0, !1);
    }
  }
  function i0(t, n) {
    (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache, n != null && (t.pooledCache = null, Gr(n)));
  }
  function jl() {
    return t0(), n0(), a0(), r0();
  }
  function r0() {
    if (ut !== 5) return !1;
    var t = Sa, n = zc;
    zc = 0;
    var i = ts(ta), o = q.T, s = V.p;
    try {
      V.p = 32 > i ? 32 : i, q.T = null, i = Hc, Hc = null;
      var f = Sa, v = ta;
      if (ut = 0, Fi = Sa = null, ta = 0, (ze & 6) !== 0) throw Error(u(331));
      var E = ze;
      if (ze |= 4, Zv(f.current), Bv(f, f.current, v, i), ze = E, lo(0, !1), Bt && typeof Bt.onPostCommitFiberRoot == "function") try {
        Bt.onPostCommitFiberRoot(Cr, f);
      } catch {
      }
      return !0;
    } finally {
      V.p = s, q.T = o, i0(t, n);
    }
  }
  function o0(t, n, i) {
    n = Jt(i, n), n = hc(t.stateNode, n, 2), t = ni(t, n, 2), t !== null && (ko(t, 2), na(t));
  }
  function je(t, n, i) {
    if (t.tag === 3) o0(t, t, i);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        o0(n, t, i);
        break;
      } else if (n.tag === 1) {
        var o = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (_a === null || !_a.has(o))) {
          t = Jt(i, t), i = lv(2), o = ni(n, i, 2), o !== null && (uv(i, o, n, t), ko(o, 2), na(o));
          break;
        }
      }
      n = n.return;
    }
  }
  function Uc(t, n, i) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new F_();
      var s = /* @__PURE__ */ new Set();
      o.set(n, s);
    } else s = o.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), o.set(n, s));
    s.has(i) || (Rc = !0, s.add(i), t = K_.bind(null, t, n, i), n.then(t, t));
  }
  function K_(t, n, i) {
    var o = t.pingCache;
    o !== null && o.delete(n), t.pingedLanes |= t.suspendedLanes & i, t.warmLanes &= ~i, Ze === t && (we & i) === i && (Qe === 4 || Qe === 3 && (we & 62914560) === we && 300 > jt() - Rl ? (ze & 2) === 0 && Xi(t, 0) : Nc |= i, Vi === we && (Vi = 0)), na(t);
  }
  function l0(t, n) {
    n === 0 && (n = ah()), t = Va(t, n), t !== null && (ko(t, n), na(t));
  }
  function J_(t) {
    var n = t.memoizedState, i = 0;
    n !== null && (i = n.retryLane), l0(t, i);
  }
  function e2(t, n) {
    var i = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var o = t.stateNode, s = t.memoizedState;
        s !== null && (i = s.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    o !== null && o.delete(n), l0(t, i);
  }
  function t2(t, n) {
    return mt(t, n);
  }
  var Bl = null, Wi = null, Pc = !1, Ul = !1, Zc = !1, wa = 0;
  function na(t) {
    t !== Wi && t.next === null && (Wi === null ? Bl = Wi = t : Wi = Wi.next = t), Ul = !0, Pc || (Pc = !0, a2());
  }
  function lo(t, n) {
    if (!Zc && Ul) {
      Zc = !0;
      do
        for (var i = !1, o = Bl; o !== null; ) {
          if (!n) if (t !== 0) {
            var s = o.pendingLanes;
            if (s === 0) var f = 0;
            else {
              var v = o.suspendedLanes, E = o.pingedLanes;
              f = (1 << 31 - Ut(42 | t) + 1) - 1, f &= s & ~(v & ~E), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (i = !0, f0(o, f));
          } else f = we, f = Go(o, o === Ze ? f : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1), (f & 3) === 0 || Ar(o, f) || (i = !0, f0(o, f));
          o = o.next;
        }
      while (i);
      Zc = !1;
    }
  }
  function n2() {
    u0();
  }
  function u0() {
    Ul = Pc = !1;
    var t = 0;
    wa !== 0 && f2() && (t = wa);
    for (var n = jt(), i = null, o = Bl; o !== null; ) {
      var s = o.next, f = s0(o, n);
      f === 0 ? (o.next = null, i === null ? Bl = s : i.next = s, s === null && (Wi = i)) : (i = o, (t !== 0 || (f & 3) !== 0) && (Ul = !0)), o = s;
    }
    ut !== 0 && ut !== 5 || lo(t, !1), wa !== 0 && (wa = 0);
  }
  function s0(t, n) {
    for (var i = t.suspendedLanes, o = t.pingedLanes, s = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
      var v = 31 - Ut(f), E = 1 << v, x = s[v];
      x === -1 ? ((E & i) === 0 || (E & o) !== 0) && (s[v] = Bb(E, n)) : x <= n && (t.expiredLanes |= E), f &= ~E;
    }
    if (n = Ze, i = we, i = Go(t, t === n ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), o = t.callbackNode, i === 0 || t === n && (Le === 2 || Le === 9) || t.cancelPendingCommit !== null) return o !== null && o !== null && hn(o), t.callbackNode = null, t.callbackPriority = 0;
    if ((i & 3) === 0 || Ar(t, i)) {
      if (n = i & -i, n === t.callbackPriority) return n;
      switch (o !== null && hn(o), ts(i)) {
        case 2:
        case 8:
          i = th;
          break;
        case 32:
          i = Bo;
          break;
        case 268435456:
          i = nh;
          break;
        default:
          i = Bo;
      }
      return o = c0.bind(null, t), i = mt(i, o), t.callbackPriority = n, t.callbackNode = i, n;
    }
    return o !== null && o !== null && hn(o), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function c0(t, n) {
    if (ut !== 0 && ut !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var i = t.callbackNode;
    if (jl() && t.callbackNode !== i) return null;
    var o = we;
    return o = Go(t, t === Ze ? o : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), o === 0 ? null : (qv(t, o, n), s0(t, jt()), t.callbackNode != null && t.callbackNode === i ? c0.bind(null, t) : null);
  }
  function f0(t, n) {
    if (jl()) return null;
    qv(t, n, !0);
  }
  function a2() {
    h2(function() {
      (ze & 6) !== 0 ? mt(eh, n2) : u0();
    });
  }
  function Gc() {
    if (wa === 0) {
      var t = Li;
      t === 0 && (t = Uo, Uo <<= 1, (Uo & 261888) === 0 && (Uo = 256)), wa = t;
    }
    return wa;
  }
  function d0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Vo("" + t);
  }
  function h0(t, n) {
    var i = n.ownerDocument.createElement("input");
    return i.name = n.name, i.value = n.value, t.id && i.setAttribute("form", t.id), n.parentNode.insertBefore(i, n), t = new FormData(t), i.parentNode.removeChild(i), t;
  }
  function i2(t, n, i, o, s) {
    if (n === "submit" && i && i.stateNode === s) {
      var f = d0((s[xt] || null).action), v = o.submitter;
      v && (n = (n = v[xt] || null) ? d0(n.formAction) : v.getAttribute("formAction"), n !== null && (f = n, v = null));
      var E = new Wo("action", "action", null, o, s);
      t.push({
        event: E,
        listeners: [{
          instance: null,
          listener: function() {
            if (o.defaultPrevented) {
              if (wa !== 0) {
                var x = v ? h0(s, v) : new FormData(s);
                lc(i, {
                  pending: !0,
                  data: x,
                  method: s.method,
                  action: f
                }, null, x);
              }
            } else typeof f == "function" && (E.preventDefault(), x = v ? h0(s, v) : new FormData(s), lc(i, {
              pending: !0,
              data: x,
              method: s.method,
              action: f
            }, f, x));
          },
          currentTarget: s
        }]
      });
    }
  }
  for (var kc = 0; kc < Ts.length; kc++) {
    var Ic = Ts[kc];
    vn(Ic.toLowerCase(), "on" + (Ic[0].toUpperCase() + Ic.slice(1)));
  }
  vn(Fh, "onAnimationEnd"), vn(Xh, "onAnimationIteration"), vn(Yh, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(b_, "onTransitionRun"), vn(__, "onTransitionStart"), vn(S_, "onTransitionCancel"), vn(Wh, "onTransitionEnd"), Si("onMouseEnter", ["mouseout", "mouseover"]), Si("onMouseLeave", ["mouseout", "mouseover"]), Si("onPointerEnter", ["pointerout", "pointerover"]), Si("onPointerLeave", ["pointerout", "pointerover"]), ka("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ka("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ka("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ka("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ka("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ka("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var uo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), r2 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uo));
  function m0(t, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < t.length; i++) {
      var o = t[i], s = o.event;
      o = o.listeners;
      e: {
        var f = void 0;
        if (n) for (var v = o.length - 1; 0 <= v; v--) {
          var E = o[v], x = E.instance, Z = E.currentTarget;
          if (E = E.listener, x !== f && s.isPropagationStopped()) break e;
          f = E, s.currentTarget = Z;
          try {
            f(s);
          } catch (F) {
            Jo(F);
          }
          s.currentTarget = null, f = x;
        }
        else for (v = 0; v < o.length; v++) {
          if (E = o[v], x = E.instance, Z = E.currentTarget, E = E.listener, x !== f && s.isPropagationStopped()) break e;
          f = E, s.currentTarget = Z;
          try {
            f(s);
          } catch (F) {
            Jo(F);
          }
          s.currentTarget = null, f = x;
        }
      }
    }
  }
  function Ee(t, n) {
    var i = n[ns];
    i === void 0 && (i = n[ns] = /* @__PURE__ */ new Set());
    var o = t + "__bubble";
    i.has(o) || (p0(n, t, 2, !1), i.add(o));
  }
  function $c(t, n, i) {
    var o = 0;
    n && (o |= 4), p0(i, t, o, n);
  }
  var Pl = "_reactListening" + Math.random().toString(36).slice(2);
  function v0(t) {
    if (!t[Pl]) {
      t[Pl] = !0, fh.forEach(function(i) {
        i !== "selectionchange" && (r2.has(i) || $c(i, !1, t), $c(i, !0, t));
      });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[Pl] || (n[Pl] = !0, $c("selectionchange", !1, n));
    }
  }
  function p0(t, n, i, o) {
    switch (I0(n)) {
      case 2:
        var s = L2;
        break;
      case 8:
        s = j2;
        break;
      default:
        s = of;
    }
    i = s.bind(null, n, i, t), s = void 0, !fs || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), o ? s !== void 0 ? t.addEventListener(n, i, {
      capture: !0,
      passive: s
    }) : t.addEventListener(n, i, !0) : s !== void 0 ? t.addEventListener(n, i, { passive: s }) : t.addEventListener(n, i, !1);
  }
  function qc(t, n, i, o, s) {
    var f = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var v = o.tag;
      if (v === 3 || v === 4) {
        var E = o.stateNode.containerInfo;
        if (E === s) break;
        if (v === 4) for (v = o.return; v !== null; ) {
          var x = v.tag;
          if ((x === 3 || x === 4) && v.stateNode.containerInfo === s) return;
          v = v.return;
        }
        for (; E !== null; ) {
          if (v = yi(E), v === null) return;
          if (x = v.tag, x === 5 || x === 6 || x === 26 || x === 27) {
            o = f = v;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    wh(function() {
      var Z = f, F = ss(i), K = [];
      e: {
        var G = Qh.get(t);
        if (G !== void 0) {
          var $ = Wo, re = t;
          switch (t) {
            case "keypress":
              if (Xo(i) === 0) break e;
            case "keydown":
            case "keyup":
              $ = n_;
              break;
            case "focusin":
              re = "focus", $ = vs;
              break;
            case "focusout":
              re = "blur", $ = vs;
              break;
            case "beforeblur":
            case "afterblur":
              $ = vs;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              $ = Ah;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              $ = Yb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              $ = a_;
              break;
            case Fh:
            case Xh:
            case Yh:
              $ = Wb;
              break;
            case Wh:
              $ = i_;
              break;
            case "scroll":
            case "scrollend":
              $ = Xb;
              break;
            case "wheel":
              $ = r_;
              break;
            case "copy":
            case "cut":
            case "paste":
              $ = Qb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              $ = Oh;
              break;
            case "toggle":
            case "beforetoggle":
              $ = o_;
          }
          var he = (n & 4) !== 0, Pe = !he && (t === "scroll" || t === "scrollend"), j = he ? G !== null ? G + "Capture" : null : G;
          he = [];
          for (var O = Z, P; O !== null; ) {
            var X = O;
            if (P = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || P === null || j === null || (X = Rr(O, j), X != null && he.push(so(O, X, P))), Pe) break;
            O = O.return;
          }
          0 < he.length && (G = new $(G, re, null, i, F), K.push({
            event: G,
            listeners: he
          }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (G = t === "mouseover" || t === "pointerover", $ = t === "mouseout" || t === "pointerout", G && i !== us && (re = i.relatedTarget || i.fromElement) && (yi(re) || re[xr])) break e;
          if (($ || G) && (G = F.window === F ? F : (G = F.ownerDocument) ? G.defaultView || G.parentWindow : window, $ ? (re = i.relatedTarget || i.toElement, $ = Z, re = re ? yi(re) : null, re !== null && (Pe = d(re), he = re.tag, re !== Pe || he !== 5 && he !== 27 && he !== 6) && (re = null)) : ($ = null, re = Z), $ !== re)) {
            if (he = Ah, X = "onMouseLeave", j = "onMouseEnter", O = "mouse", (t === "pointerout" || t === "pointerover") && (he = Oh, X = "onPointerLeave", j = "onPointerEnter", O = "pointer"), Pe = $ == null ? G : Mr($), P = re == null ? G : Mr(re), G = new he(X, O + "leave", $, i, F), G.target = Pe, G.relatedTarget = P, X = null, yi(F) === Z && (he = new he(j, O + "enter", re, i, F), he.target = P, he.relatedTarget = Pe, X = he), Pe = X, $ && re) t: {
              for (he = o2, j = $, O = re, P = 0, X = j; X; X = he(X)) P++;
              X = 0;
              for (var fe = O; fe; fe = he(fe)) X++;
              for (; 0 < P - X; ) j = he(j), P--;
              for (; 0 < X - P; ) O = he(O), X--;
              for (; P--; ) {
                if (j === O || O !== null && j === O.alternate) {
                  he = j;
                  break t;
                }
                j = he(j), O = he(O);
              }
              he = null;
            }
            else he = null;
            $ !== null && g0(K, G, $, he, !1), re !== null && Pe !== null && g0(K, Pe, re, he, !0);
          }
        }
        e: {
          if (G = Z ? Mr(Z) : window, $ = G.nodeName && G.nodeName.toLowerCase(), $ === "select" || $ === "input" && G.type === "file") var Re = jh;
          else if (Hh(G)) if (Bh) Re = p_;
          else {
            Re = m_;
            var ue = h_;
          }
          else $ = G.nodeName, !$ || $.toLowerCase() !== "input" || G.type !== "checkbox" && G.type !== "radio" ? Z && ls(Z.elementType) && (Re = jh) : Re = v_;
          if (Re && (Re = Re(t, Z))) {
            Lh(K, Re, i, F);
            break e;
          }
          ue && ue(t, G, Z), t === "focusout" && Z && G.type === "number" && Z.memoizedProps.value != null && os(G, "number", G.value);
        }
        switch (ue = Z ? Mr(Z) : window, t) {
          case "focusin":
            (Hh(ue) || ue.contentEditable === "true") && (xi = ue, Ss = Z, Ur = null);
            break;
          case "focusout":
            Ur = Ss = xi = null;
            break;
          case "mousedown":
            Es = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Es = !1, qh(K, i, F);
            break;
          case "selectionchange":
            if (y_) break;
          case "keydown":
          case "keyup":
            qh(K, i, F);
        }
        var _e;
        if (gs) e: {
          switch (t) {
            case "compositionstart":
              var Te = "onCompositionStart";
              break e;
            case "compositionend":
              Te = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Te = "onCompositionUpdate";
              break e;
          }
          Te = void 0;
        }
        else Ai ? Dh(t, i) && (Te = "onCompositionEnd") : t === "keydown" && i.keyCode === 229 && (Te = "onCompositionStart");
        Te && (Mh && i.locale !== "ko" && (Ai || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && Ai && (_e = Th()) : (sa = F, ds = "value" in sa ? sa.value : sa.textContent, Ai = !0)), ue = Zl(Z, Te), 0 < ue.length && (Te = new xh(Te, t, null, i, F), K.push({
          event: Te,
          listeners: ue
        }), _e ? Te.data = _e : (_e = zh(i), _e !== null && (Te.data = _e)))), (_e = u_ ? s_(t, i) : c_(t, i)) && (Te = Zl(Z, "onBeforeInput"), 0 < Te.length && (ue = new xh("onBeforeInput", "beforeinput", null, i, F), K.push({
          event: ue,
          listeners: Te
        }), ue.data = _e)), i2(K, t, Z, i, F);
      }
      m0(K, n);
    });
  }
  function so(t, n, i) {
    return {
      instance: t,
      listener: n,
      currentTarget: i
    };
  }
  function Zl(t, n) {
    for (var i = n + "Capture", o = []; t !== null; ) {
      var s = t, f = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || f === null || (s = Rr(t, i), s != null && o.unshift(so(t, s, f)), s = Rr(t, n), s != null && o.push(so(t, s, f))), t.tag === 3) return o;
      t = t.return;
    }
    return [];
  }
  function o2(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function g0(t, n, i, o, s) {
    for (var f = n._reactName, v = []; i !== null && i !== o; ) {
      var E = i, x = E.alternate, Z = E.stateNode;
      if (E = E.tag, x !== null && x === o) break;
      E !== 5 && E !== 26 && E !== 27 || Z === null || (x = Z, s ? (Z = Rr(i, f), Z != null && v.unshift(so(i, Z, x))) : s || (Z = Rr(i, f), Z != null && v.push(so(i, Z, x)))), i = i.return;
    }
    v.length !== 0 && t.push({
      event: n,
      listeners: v
    });
  }
  var l2 = /\r\n?/g, u2 = /\u0000|\uFFFD/g;
  function y0(t) {
    return (typeof t == "string" ? t : "" + t).replace(l2, `
`).replace(u2, "");
  }
  function b0(t, n) {
    return n = y0(n), y0(t) === n;
  }
  function Ue(t, n, i, o, s, f) {
    switch (i) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || wi(t, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && wi(t, "" + o);
        break;
      case "className":
        $o(t, "class", o);
        break;
      case "tabIndex":
        $o(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        $o(t, i, o);
        break;
      case "style":
        Sh(t, o, f);
        break;
      case "data":
        if (n !== "object") {
          $o(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || i !== "href")) {
          t.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(i);
          break;
        }
        o = Vo("" + o), t.setAttribute(i, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(i, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof f == "function" && (i === "formAction" ? (n !== "input" && Ue(t, n, "name", s.name, s, null), Ue(t, n, "formEncType", s.formEncType, s, null), Ue(t, n, "formMethod", s.formMethod, s, null), Ue(t, n, "formTarget", s.formTarget, s, null)) : (Ue(t, n, "encType", s.encType, s, null), Ue(t, n, "method", s.method, s, null), Ue(t, n, "target", s.target, s, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(i);
          break;
        }
        o = Vo("" + o), t.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (t.onclick = Zn);
        break;
      case "onScroll":
        o != null && Ee("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Ee("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(u(61));
          if (i = o.__html, i != null) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = i;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        i = Vo("" + o), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i, "" + o) : t.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i, "") : t.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0 ? t.setAttribute(i, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i, o) : t.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? t.setAttribute(i, o) : t.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? t.removeAttribute(i) : t.setAttribute(i, o);
        break;
      case "popover":
        Ee("beforetoggle", t), Ee("toggle", t), Io(t, "popover", o);
        break;
      case "xlinkActuate":
        Pn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        Pn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        Pn(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        Pn(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        Pn(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        Pn(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        Pn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        Pn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        Pn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        Io(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = Vb.get(i) || i, Io(t, i, o));
    }
  }
  function Vc(t, n, i, o, s, f) {
    switch (i) {
      case "style":
        Sh(t, o, f);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(u(61));
          if (i = o.__html, i != null) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string" ? wi(t, o) : (typeof o == "number" || typeof o == "bigint") && wi(t, "" + o);
        break;
      case "onScroll":
        o != null && Ee("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Ee("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = Zn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!dh.hasOwnProperty(i)) e: {
          if (i[0] === "o" && i[1] === "n" && (s = i.endsWith("Capture"), n = i.slice(2, s ? i.length - 7 : void 0), f = t[xt] || null, f = f != null ? f[i] : null, typeof f == "function" && t.removeEventListener(n, f, s), typeof o == "function")) {
            typeof f != "function" && f !== null && (i in t ? t[i] = null : t.hasAttribute(i) && t.removeAttribute(i)), t.addEventListener(n, o, s);
            break e;
          }
          i in t ? t[i] = o : o === !0 ? t.setAttribute(i, "") : Io(t, i, o);
        }
    }
  }
  function bt(t, n, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ee("error", t), Ee("load", t);
        var o = !1, s = !1, f;
        for (f in i) if (i.hasOwnProperty(f)) {
          var v = i[f];
          if (v != null) switch (f) {
            case "src":
              o = !0;
              break;
            case "srcSet":
              s = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(u(137, n));
            default:
              Ue(t, n, f, v, i, null);
          }
        }
        s && Ue(t, n, "srcSet", i.srcSet, i, null), o && Ue(t, n, "src", i.src, i, null);
        return;
      case "input":
        Ee("invalid", t);
        var E = f = v = s = null, x = null, Z = null;
        for (o in i) if (i.hasOwnProperty(o)) {
          var F = i[o];
          if (F != null) switch (o) {
            case "name":
              s = F;
              break;
            case "type":
              v = F;
              break;
            case "checked":
              x = F;
              break;
            case "defaultChecked":
              Z = F;
              break;
            case "value":
              f = F;
              break;
            case "defaultValue":
              E = F;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (F != null) throw Error(u(137, n));
              break;
            default:
              Ue(t, n, o, F, i, null);
          }
        }
        gh(t, f, E, x, Z, v, s, !1);
        return;
      case "select":
        Ee("invalid", t), o = v = f = null;
        for (s in i) if (i.hasOwnProperty(s) && (E = i[s], E != null)) switch (s) {
          case "value":
            f = E;
            break;
          case "defaultValue":
            v = E;
            break;
          case "multiple":
            o = E;
          default:
            Ue(t, n, s, E, i, null);
        }
        n = f, i = v, t.multiple = !!o, n != null ? Ei(t, !!o, n, !1) : i != null && Ei(t, !!o, i, !0);
        return;
      case "textarea":
        Ee("invalid", t), f = s = o = null;
        for (v in i) if (i.hasOwnProperty(v) && (E = i[v], E != null)) switch (v) {
          case "value":
            o = E;
            break;
          case "defaultValue":
            s = E;
            break;
          case "children":
            f = E;
            break;
          case "dangerouslySetInnerHTML":
            if (E != null) throw Error(u(91));
            break;
          default:
            Ue(t, n, v, E, i, null);
        }
        bh(t, o, s, f);
        return;
      case "option":
        for (x in i) i.hasOwnProperty(x) && (o = i[x], o != null) && (x === "selected" ? t.selected = o && typeof o != "function" && typeof o != "symbol" : Ue(t, n, x, o, i, null));
        return;
      case "dialog":
        Ee("beforetoggle", t), Ee("toggle", t), Ee("cancel", t), Ee("close", t);
        break;
      case "iframe":
      case "object":
        Ee("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < uo.length; o++) Ee(uo[o], t);
        break;
      case "image":
        Ee("error", t), Ee("load", t);
        break;
      case "details":
        Ee("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Ee("error", t), Ee("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Z in i) if (i.hasOwnProperty(Z) && (o = i[Z], o != null)) switch (Z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(137, n));
          default:
            Ue(t, n, Z, o, i, null);
        }
        return;
      default:
        if (ls(n)) {
          for (F in i) i.hasOwnProperty(F) && (o = i[F], o !== void 0 && Vc(t, n, F, o, i, void 0));
          return;
        }
    }
    for (E in i) i.hasOwnProperty(E) && (o = i[E], o != null && Ue(t, n, E, o, i, null));
  }
  function s2(t, n, i, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, f = null, v = null, E = null, x = null, Z = null, F = null;
        for ($ in i) {
          var K = i[$];
          if (i.hasOwnProperty($) && K != null) switch ($) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              x = K;
            default:
              o.hasOwnProperty($) || Ue(t, n, $, null, o, K);
          }
        }
        for (var G in o) {
          var $ = o[G];
          if (K = i[G], o.hasOwnProperty(G) && ($ != null || K != null)) switch (G) {
            case "type":
              f = $;
              break;
            case "name":
              s = $;
              break;
            case "checked":
              Z = $;
              break;
            case "defaultChecked":
              F = $;
              break;
            case "value":
              v = $;
              break;
            case "defaultValue":
              E = $;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if ($ != null) throw Error(u(137, n));
              break;
            default:
              $ !== K && Ue(t, n, G, $, o, K);
          }
        }
        rs(t, v, E, x, Z, F, f, s);
        return;
      case "select":
        $ = v = E = G = null;
        for (f in i) if (x = i[f], i.hasOwnProperty(f) && x != null) switch (f) {
          case "value":
            break;
          case "multiple":
            $ = x;
          default:
            o.hasOwnProperty(f) || Ue(t, n, f, null, o, x);
        }
        for (s in o) if (f = o[s], x = i[s], o.hasOwnProperty(s) && (f != null || x != null)) switch (s) {
          case "value":
            G = f;
            break;
          case "defaultValue":
            E = f;
            break;
          case "multiple":
            v = f;
          default:
            f !== x && Ue(t, n, s, f, o, x);
        }
        n = E, i = v, o = $, G != null ? Ei(t, !!i, G, !1) : !!o != !!i && (n != null ? Ei(t, !!i, n, !0) : Ei(t, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        $ = G = null;
        for (E in i) if (s = i[E], i.hasOwnProperty(E) && s != null && !o.hasOwnProperty(E)) switch (E) {
          case "value":
            break;
          case "children":
            break;
          default:
            Ue(t, n, E, null, o, s);
        }
        for (v in o) if (s = o[v], f = i[v], o.hasOwnProperty(v) && (s != null || f != null)) switch (v) {
          case "value":
            G = s;
            break;
          case "defaultValue":
            $ = s;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (s != null) throw Error(u(91));
            break;
          default:
            s !== f && Ue(t, n, v, s, o, f);
        }
        yh(t, G, $);
        return;
      case "option":
        for (var re in i) G = i[re], i.hasOwnProperty(re) && G != null && !o.hasOwnProperty(re) && (re === "selected" ? t.selected = !1 : Ue(t, n, re, null, o, G));
        for (x in o) G = o[x], $ = i[x], o.hasOwnProperty(x) && G !== $ && (G != null || $ != null) && (x === "selected" ? t.selected = G && typeof G != "function" && typeof G != "symbol" : Ue(t, n, x, G, o, $));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var he in i) G = i[he], i.hasOwnProperty(he) && G != null && !o.hasOwnProperty(he) && Ue(t, n, he, null, o, G);
        for (Z in o) if (G = o[Z], $ = i[Z], o.hasOwnProperty(Z) && G !== $ && (G != null || $ != null)) switch (Z) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (G != null) throw Error(u(137, n));
            break;
          default:
            Ue(t, n, Z, G, o, $);
        }
        return;
      default:
        if (ls(n)) {
          for (var Pe in i) G = i[Pe], i.hasOwnProperty(Pe) && G !== void 0 && !o.hasOwnProperty(Pe) && Vc(t, n, Pe, void 0, o, G);
          for (F in o) G = o[F], $ = i[F], !o.hasOwnProperty(F) || G === $ || G === void 0 && $ === void 0 || Vc(t, n, F, G, o, $);
          return;
        }
    }
    for (var j in i) G = i[j], i.hasOwnProperty(j) && G != null && !o.hasOwnProperty(j) && Ue(t, n, j, null, o, G);
    for (K in o) G = o[K], $ = i[K], !o.hasOwnProperty(K) || G === $ || G == null && $ == null || Ue(t, n, K, G, o, $);
  }
  function _0(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function c2() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, n = 0, i = performance.getEntriesByType("resource"), o = 0; o < i.length; o++) {
        var s = i[o], f = s.transferSize, v = s.initiatorType, E = s.duration;
        if (f && E && _0(v)) {
          for (v = 0, E = s.responseEnd, o += 1; o < i.length; o++) {
            var x = i[o], Z = x.startTime;
            if (Z > E) break;
            var F = x.transferSize, K = x.initiatorType;
            F && _0(K) && (x = x.responseEnd, v += F * (x < E ? 1 : (E - Z) / (x - Z)));
          }
          if (--o, n += 8 * (f + v) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return n / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Fc = null, Xc = null;
  function Gl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function S0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function E0(t, n) {
    if (t === 0) switch (n) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function Yc(t, n) {
    return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Wc = null;
  function f2() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Wc ? !1 : (Wc = t, !0) : (Wc = null, !1);
  }
  var w0 = typeof setTimeout == "function" ? setTimeout : void 0, d2 = typeof clearTimeout == "function" ? clearTimeout : void 0, T0 = typeof Promise == "function" ? Promise : void 0, h2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof T0 < "u" ? function(t) {
    return T0.resolve(null).then(t).catch(m2);
  } : w0;
  function m2(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ta(t) {
    return t === "head";
  }
  function C0(t, n) {
    var i = n, o = 0;
    do {
      var s = i.nextSibling;
      if (t.removeChild(i), s && s.nodeType === 8) if (i = s.data, i === "/$" || i === "/&") {
        if (o === 0) {
          t.removeChild(s), er(n);
          return;
        }
        o--;
      } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&") o++;
      else if (i === "html") co(t.ownerDocument.documentElement);
      else if (i === "head") {
        i = t.ownerDocument.head, co(i);
        for (var f = i.firstChild; f; ) {
          var v = f.nextSibling, E = f.nodeName;
          f[Or] || E === "SCRIPT" || E === "STYLE" || E === "LINK" && f.rel.toLowerCase() === "stylesheet" || i.removeChild(f), f = v;
        }
      } else i === "body" && co(t.ownerDocument.body);
      i = s;
    } while (i);
    er(n);
  }
  function A0(t, n) {
    var i = t;
    t = 0;
    do {
      var o = i.nextSibling;
      if (i.nodeType === 1 ? n ? (i._stashedDisplay = i.style.display, i.style.display = "none") : (i.style.display = i._stashedDisplay || "", i.getAttribute("style") === "" && i.removeAttribute("style")) : i.nodeType === 3 && (n ? (i._stashedText = i.nodeValue, i.nodeValue = "") : i.nodeValue = i._stashedText || ""), o && o.nodeType === 8) if (i = o.data, i === "/$") {
        if (t === 0) break;
        t--;
      } else i !== "$" && i !== "$?" && i !== "$~" && i !== "$!" || t++;
      i = o;
    } while (i);
  }
  function Qc(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (n = n.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qc(i), as(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(i);
    }
  }
  function v2(t, n, i, o) {
    for (; t.nodeType === 1; ) {
      var s = i;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (o) {
        if (!t[Or]) switch (n) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (f = t.getAttribute("rel"), f === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (f !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (f = t.getAttribute("src"), (f !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (n === "input" && t.type === "hidden") {
        var f = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === f) return t;
      } else return t;
      if (t = on(t.nextSibling), t === null) break;
    }
    return null;
  }
  function p2(t, n, i) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !i || (t = on(t.nextSibling), t === null)) return null;
    return t;
  }
  function x0(t, n) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = on(t.nextSibling), t === null)) return null;
    return t;
  }
  function Kc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Jc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function g2(t, n) {
    var i = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = n;
    else if (t.data !== "$?" || i.readyState !== "loading") n();
    else {
      var o = function() {
        n(), i.removeEventListener("DOMContentLoaded", o);
      };
      i.addEventListener("DOMContentLoaded", o), t._reactRetry = o;
    }
  }
  function on(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = t.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F") break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return t;
  }
  var ef = null;
  function O0(t) {
    t = t.nextSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === "/$" || i === "/&") {
          if (n === 0) return on(t.nextSibling);
          n--;
        } else i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&" || n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function M0(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
          if (n === 0) return t;
          n--;
        } else i !== "/$" && i !== "/&" || n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function R0(t, n, i) {
    switch (n = Gl(i), t) {
      case "html":
        if (t = n.documentElement, !t) throw Error(u(452));
        return t;
      case "head":
        if (t = n.head, !t) throw Error(u(453));
        return t;
      case "body":
        if (t = n.body, !t) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function co(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    as(t);
  }
  var ln = /* @__PURE__ */ new Map(), N0 = /* @__PURE__ */ new Set();
  function kl(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var aa = V.d;
  V.d = {
    f: y2,
    r: b2,
    D: _2,
    C: S2,
    L: E2,
    m: w2,
    X: C2,
    S: T2,
    M: A2
  };
  function y2() {
    var t = aa.f(), n = zl();
    return t || n;
  }
  function b2(t) {
    var n = bi(t);
    n !== null && n.tag === 5 && n.type === "form" ? Wm(n) : aa.r(t);
  }
  var Qi = typeof document > "u" ? null : document;
  function D0(t, n, i) {
    var o = Qi;
    if (o && typeof n == "string" && n) {
      var s = Qt(n);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof i == "string" && (s += '[crossorigin="' + i + '"]'), N0.has(s) || (N0.add(s), t = {
        rel: t,
        crossOrigin: i,
        href: n
      }, o.querySelector(s) === null && (n = o.createElement("link"), bt(n, "link", t), dt(n), o.head.appendChild(n)));
    }
  }
  function _2(t) {
    aa.D(t), D0("dns-prefetch", t, null);
  }
  function S2(t, n) {
    aa.C(t, n), D0("preconnect", t, n);
  }
  function E2(t, n, i) {
    aa.L(t, n, i);
    var o = Qi;
    if (o && t && n) {
      var s = 'link[rel="preload"][as="' + Qt(n) + '"]';
      n === "image" && i && i.imageSrcSet ? (s += '[imagesrcset="' + Qt(i.imageSrcSet) + '"]', typeof i.imageSizes == "string" && (s += '[imagesizes="' + Qt(i.imageSizes) + '"]')) : s += '[href="' + Qt(t) + '"]';
      var f = s;
      switch (n) {
        case "style":
          f = Ki(t);
          break;
        case "script":
          f = Ji(t);
      }
      ln.has(f) || (t = S({
        rel: "preload",
        href: n === "image" && i && i.imageSrcSet ? void 0 : t,
        as: n
      }, i), ln.set(f, t), o.querySelector(s) !== null || n === "style" && o.querySelector(fo(f)) || n === "script" && o.querySelector(ho(f)) || (n = o.createElement("link"), bt(n, "link", t), dt(n), o.head.appendChild(n)));
    }
  }
  function w2(t, n) {
    aa.m(t, n);
    var i = Qi;
    if (i && t) {
      var o = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Qt(o) + '"][href="' + Qt(t) + '"]', f = s;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Ji(t);
      }
      if (!ln.has(f) && (t = S({
        rel: "modulepreload",
        href: t
      }, n), ln.set(f, t), i.querySelector(s) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(ho(f))) return;
        }
        o = i.createElement("link"), bt(o, "link", t), dt(o), i.head.appendChild(o);
      }
    }
  }
  function T2(t, n, i) {
    aa.S(t, n, i);
    var o = Qi;
    if (o && t) {
      var s = _i(o).hoistableStyles, f = Ki(t);
      n = n || "default";
      var v = s.get(f);
      if (!v) {
        var E = {
          loading: 0,
          preload: null
        };
        if (v = o.querySelector(fo(f))) E.loading = 5;
        else {
          t = S({
            rel: "stylesheet",
            href: t,
            "data-precedence": n
          }, i), (i = ln.get(f)) && tf(t, i);
          var x = v = o.createElement("link");
          dt(x), bt(x, "link", t), x._p = new Promise(function(Z, F) {
            x.onload = Z, x.onerror = F;
          }), x.addEventListener("load", function() {
            E.loading |= 1;
          }), x.addEventListener("error", function() {
            E.loading |= 2;
          }), E.loading |= 4, Il(v, n, o);
        }
        v = {
          type: "stylesheet",
          instance: v,
          count: 1,
          state: E
        }, s.set(f, v);
      }
    }
  }
  function C2(t, n) {
    aa.X(t, n);
    var i = Qi;
    if (i && t) {
      var o = _i(i).hoistableScripts, s = Ji(t), f = o.get(s);
      f || (f = i.querySelector(ho(s)), f || (t = S({
        src: t,
        async: !0
      }, n), (n = ln.get(s)) && nf(t, n), f = i.createElement("script"), dt(f), bt(f, "link", t), i.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, o.set(s, f));
    }
  }
  function A2(t, n) {
    aa.M(t, n);
    var i = Qi;
    if (i && t) {
      var o = _i(i).hoistableScripts, s = Ji(t), f = o.get(s);
      f || (f = i.querySelector(ho(s)), f || (t = S({
        src: t,
        async: !0,
        type: "module"
      }, n), (n = ln.get(s)) && nf(t, n), f = i.createElement("script"), dt(f), bt(f, "link", t), i.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, o.set(s, f));
    }
  }
  function z0(t, n, i, o) {
    var s = (s = ve.current) ? kl(s) : null;
    if (!s) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (n = Ki(i.href), i = _i(s).hoistableStyles, o = i.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          t = Ki(i.href);
          var f = _i(s).hoistableStyles, v = f.get(t);
          if (v || (s = s.ownerDocument || s, v = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, f.set(t, v), (f = s.querySelector(fo(t))) && !f._p && (v.instance = f, v.state.loading = 5), ln.has(t) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, ln.set(t, i), f || x2(s, t, i, v.state))), n && o === null) throw Error(u(528, ""));
          return v;
        }
        if (n && o !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return n = i.async, i = i.src, typeof i == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ji(i), i = _i(s).hoistableScripts, o = i.get(n), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(u(444, t));
    }
  }
  function Ki(t) {
    return 'href="' + Qt(t) + '"';
  }
  function fo(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function H0(t) {
    return S({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function x2(t, n, i, o) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = t.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), bt(n, "link", i), dt(n), t.head.appendChild(n));
  }
  function Ji(t) {
    return '[src="' + Qt(t) + '"]';
  }
  function ho(t) {
    return "script[async]" + t;
  }
  function L0(t, n, i) {
    if (n.count++, n.instance === null) switch (n.type) {
      case "style":
        var o = t.querySelector('style[data-href~="' + Qt(i.href) + '"]');
        if (o) return n.instance = o, dt(o), o;
        var s = S({}, i, {
          "data-href": i.href,
          "data-precedence": i.precedence,
          href: null,
          precedence: null
        });
        return o = (t.ownerDocument || t).createElement("style"), dt(o), bt(o, "style", s), Il(o, i.precedence, t), n.instance = o;
      case "stylesheet":
        s = Ki(i.href);
        var f = t.querySelector(fo(s));
        if (f) return n.state.loading |= 4, n.instance = f, dt(f), f;
        o = H0(i), (s = ln.get(s)) && tf(o, s), f = (t.ownerDocument || t).createElement("link"), dt(f);
        var v = f;
        return v._p = new Promise(function(E, x) {
          v.onload = E, v.onerror = x;
        }), bt(f, "link", o), n.state.loading |= 4, Il(f, i.precedence, t), n.instance = f;
      case "script":
        return f = Ji(i.src), (s = t.querySelector(ho(f))) ? (n.instance = s, dt(s), s) : (o = i, (s = ln.get(f)) && (o = S({}, i), nf(o, s)), t = t.ownerDocument || t, s = t.createElement("script"), dt(s), bt(s, "link", o), t.head.appendChild(s), n.instance = s);
      case "void":
        return null;
      default:
        throw Error(u(443, n.type));
    }
    else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, Il(o, i.precedence, t));
    return n.instance;
  }
  function Il(t, n, i) {
    for (var o = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = o.length ? o[o.length - 1] : null, f = s, v = 0; v < o.length; v++) {
      var E = o[v];
      if (E.dataset.precedence === n) f = E;
      else if (f !== s) break;
    }
    f ? f.parentNode.insertBefore(t, f.nextSibling) : (n = i.nodeType === 9 ? i.head : i, n.insertBefore(t, n.firstChild));
  }
  function tf(t, n) {
    t.crossOrigin ??= n.crossOrigin, t.referrerPolicy ??= n.referrerPolicy, t.title ??= n.title;
  }
  function nf(t, n) {
    t.crossOrigin ??= n.crossOrigin, t.referrerPolicy ??= n.referrerPolicy, t.integrity ??= n.integrity;
  }
  var $l = null;
  function j0(t, n, i) {
    if ($l === null) {
      var o = /* @__PURE__ */ new Map(), s = $l = /* @__PURE__ */ new Map();
      s.set(i, o);
    } else s = $l, o = s.get(i), o || (o = /* @__PURE__ */ new Map(), s.set(i, o));
    if (o.has(t)) return o;
    for (o.set(t, null), i = i.getElementsByTagName(t), s = 0; s < i.length; s++) {
      var f = i[s];
      if (!(f[Or] || f[vt] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = f.getAttribute(n) || "";
        v = t + v;
        var E = o.get(v);
        E ? E.push(f) : o.set(v, [f]);
      }
    }
    return o;
  }
  function B0(t, n, i) {
    t = t.ownerDocument || t, t.head.insertBefore(i, n === "title" ? t.querySelector("head > title") : null);
  }
  function O2(t, n, i) {
    if (i === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
        return n.rel === "stylesheet" ? (t = n.disabled, typeof n.precedence == "string" && t == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return !0;
    }
    return !1;
  }
  function U0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function M2(t, n, i, o) {
    if (i.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== !1) && (i.state.loading & 4) === 0) {
      if (i.instance === null) {
        var s = Ki(o.href), f = n.querySelector(fo(s));
        if (f) {
          n = f._p, n !== null && typeof n == "object" && typeof n.then == "function" && (t.count++, t = ql.bind(t), n.then(t, t)), i.state.loading |= 4, i.instance = f, dt(f);
          return;
        }
        f = n.ownerDocument || n, o = H0(o), (s = ln.get(s)) && tf(o, s), f = f.createElement("link"), dt(f);
        var v = f;
        v._p = new Promise(function(E, x) {
          v.onload = E, v.onerror = x;
        }), bt(f, "link", o), i.instance = f;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(i, n), (n = i.state.preload) && (i.state.loading & 3) === 0 && (t.count++, i = ql.bind(t), n.addEventListener("load", i), n.addEventListener("error", i));
    }
  }
  var af = 0;
  function R2(t, n) {
    return t.stylesheets && t.count === 0 && Fl(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(i) {
      var o = setTimeout(function() {
        if (t.stylesheets && Fl(t, t.stylesheets), t.unsuspend) {
          var f = t.unsuspend;
          t.unsuspend = null, f();
        }
      }, 6e4 + n);
      0 < t.imgBytes && af === 0 && (af = 62500 * c2());
      var s = setTimeout(function() {
        if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Fl(t, t.stylesheets), t.unsuspend)) {
          var f = t.unsuspend;
          t.unsuspend = null, f();
        }
      }, (t.imgBytes > af ? 50 : 800) + n);
      return t.unsuspend = i, function() {
        t.unsuspend = null, clearTimeout(o), clearTimeout(s);
      };
    } : null;
  }
  function ql() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Fl(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Vl = null;
  function Fl(t, n) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Vl = /* @__PURE__ */ new Map(), n.forEach(N2, t), Vl = null, ql.call(t));
  }
  function N2(t, n) {
    if (!(n.state.loading & 4)) {
      var i = Vl.get(t);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), Vl.set(t, i);
        for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < s.length; f++) {
          var v = s[f];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (i.set(v.dataset.precedence, v), o = v);
        }
        o && i.set(null, o);
      }
      s = n.instance, v = s.getAttribute("data-precedence"), f = i.get(v) || o, f === o && i.set(null, s), i.set(v, s), this.count++, o = ql.bind(this), s.addEventListener("load", o), s.addEventListener("error", o), f ? f.parentNode.insertBefore(s, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), n.state.loading |= 4;
    }
  }
  var mo = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: se,
    _currentValue2: se,
    _threadCount: 0
  };
  function D2(t, n, i, o, s, f, v, E, x) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = es(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = es(0), this.hiddenUpdates = es(null), this.identifierPrefix = o, this.onUncaughtError = s, this.onCaughtError = f, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function z2(t, n, i, o, s, f, v, E, x, Z, F, K) {
    return t = new D2(t, n, i, v, x, Z, F, K, E), n = 1, f === !0 && (n |= 24), f = Zt(3, null, null, n), t.current = f, f.stateNode = t, n = Bs(), n.refCount++, t.pooledCache = n, n.refCount++, f.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: n
    }, Gs(f), t;
  }
  function H2(t) {
    return t ? (t = Ri, t) : Ri;
  }
  function P0(t, n, i, o, s, f) {
    s = H2(s), o.context === null ? o.context = s : o.pendingContext = s, o = ti(n), o.payload = { element: i }, f = f === void 0 ? null : f, f !== null && (o.callback = f), i = ni(t, o, n), i !== null && (zt(i, t, n), qr(i, t, n));
  }
  function Z0(t, n) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var i = t.retryLane;
      t.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function rf(t, n) {
    Z0(t, n), (t = t.alternate) && Z0(t, n);
  }
  function G0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = Va(t, 67108864);
      n !== null && zt(n, t, 67108864), rf(t, 67108864);
    }
  }
  function k0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = rn();
      n = lh(n);
      var i = Va(t, n);
      i !== null && zt(i, t, n), rf(t, n);
    }
  }
  var Xl = !0;
  function L2(t, n, i, o) {
    var s = q.T;
    q.T = null;
    var f = V.p;
    try {
      V.p = 2, of(t, n, i, o);
    } finally {
      V.p = f, q.T = s;
    }
  }
  function j2(t, n, i, o) {
    var s = q.T;
    q.T = null;
    var f = V.p;
    try {
      V.p = 8, of(t, n, i, o);
    } finally {
      V.p = f, q.T = s;
    }
  }
  function of(t, n, i, o) {
    if (Xl) {
      var s = lf(o);
      if (s === null) qc(t, n, o, Yl, i), $0(t, o);
      else if (U2(s, t, n, i, o)) o.stopPropagation();
      else if ($0(t, o), n & 4 && -1 < B2.indexOf(t)) {
        for (; s !== null; ) {
          var f = bi(s);
          if (f !== null) switch (f.tag) {
            case 3:
              if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                var v = Ga(f.pendingLanes);
                if (v !== 0) {
                  var E = f;
                  for (E.pendingLanes |= 2, E.entangledLanes |= 2; v; ) {
                    var x = 1 << 31 - Ut(v);
                    E.entanglements[1] |= x, v &= ~x;
                  }
                  na(f), (ze & 6) === 0 && (Nl = jt() + 500, lo(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              E = Va(f, 2), E !== null && zt(E, f, 2), zl(), rf(f, 2);
          }
          if (f = lf(o), f === null && qc(t, n, o, Yl, i), f === s) break;
          s = f;
        }
        s !== null && o.stopPropagation();
      } else qc(t, n, o, null, i);
    }
  }
  function lf(t) {
    return t = ss(t), uf(t);
  }
  var Yl = null;
  function uf(t) {
    if (Yl = null, t = yi(t), t !== null) {
      var n = d(t);
      if (n === null) t = null;
      else {
        var i = n.tag;
        if (i === 13) {
          if (t = h(n), t !== null) return t;
          t = null;
        } else if (i === 31) {
          if (t = m(n), t !== null) return t;
          t = null;
        } else if (i === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return Yl = t, null;
  }
  function I0(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Rb()) {
          case eh:
            return 2;
          case th:
            return 8;
          case Bo:
          case Nb:
            return 32;
          case nh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var sf = !1, Ca = null, Aa = null, xa = null, vo = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new Map(), Oa = [], B2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function $0(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ca = null;
        break;
      case "dragenter":
      case "dragleave":
        Aa = null;
        break;
      case "mouseover":
      case "mouseout":
        xa = null;
        break;
      case "pointerover":
      case "pointerout":
        vo.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        po.delete(n.pointerId);
    }
  }
  function go(t, n, i, o, s, f) {
    return t === null || t.nativeEvent !== f ? (t = {
      blockedOn: n,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: f,
      targetContainers: [s]
    }, n !== null && (n = bi(n), n !== null && G0(n)), t) : (t.eventSystemFlags |= o, n = t.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), t);
  }
  function U2(t, n, i, o, s) {
    switch (n) {
      case "focusin":
        return Ca = go(Ca, t, n, i, o, s), !0;
      case "dragenter":
        return Aa = go(Aa, t, n, i, o, s), !0;
      case "mouseover":
        return xa = go(xa, t, n, i, o, s), !0;
      case "pointerover":
        var f = s.pointerId;
        return vo.set(f, go(vo.get(f) || null, t, n, i, o, s)), !0;
      case "gotpointercapture":
        return f = s.pointerId, po.set(f, go(po.get(f) || null, t, n, i, o, s)), !0;
    }
    return !1;
  }
  function q0(t) {
    var n = yi(t.target);
    if (n !== null) {
      var i = d(n);
      if (i !== null) {
        if (n = i.tag, n === 13) {
          if (n = h(i), n !== null) {
            t.blockedOn = n, sh(t.priority, function() {
              k0(i);
            });
            return;
          }
        } else if (n === 31) {
          if (n = m(i), n !== null) {
            t.blockedOn = n, sh(t.priority, function() {
              k0(i);
            });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Wl(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var i = lf(t.nativeEvent);
      if (i === null) {
        i = t.nativeEvent;
        var o = new i.constructor(i.type, i);
        us = o, i.target.dispatchEvent(o), us = null;
      } else return n = bi(i), n !== null && G0(n), t.blockedOn = i, !1;
      n.shift();
    }
    return !0;
  }
  function V0(t, n, i) {
    Wl(t) && i.delete(n);
  }
  function P2() {
    sf = !1, Ca !== null && Wl(Ca) && (Ca = null), Aa !== null && Wl(Aa) && (Aa = null), xa !== null && Wl(xa) && (xa = null), vo.forEach(V0), po.forEach(V0);
  }
  function Ql(t, n) {
    t.blockedOn === n && (t.blockedOn = null, sf || (sf = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, P2)));
  }
  var Kl = null;
  function F0(t) {
    Kl !== t && (Kl = t, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
      Kl === t && (Kl = null);
      for (var n = 0; n < t.length; n += 3) {
        var i = t[n], o = t[n + 1], s = t[n + 2];
        if (typeof o != "function") {
          if (uf(o || i) === null) continue;
          break;
        }
        var f = bi(i);
        f !== null && (t.splice(n, 3), n -= 3, lc(f, {
          pending: !0,
          data: s,
          method: i.method,
          action: o
        }, o, s));
      }
    }));
  }
  function er(t) {
    function n(x) {
      return Ql(x, t);
    }
    Ca !== null && Ql(Ca, t), Aa !== null && Ql(Aa, t), xa !== null && Ql(xa, t), vo.forEach(n), po.forEach(n);
    for (var i = 0; i < Oa.length; i++) {
      var o = Oa[i];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < Oa.length && (i = Oa[0], i.blockedOn === null); ) q0(i), i.blockedOn === null && Oa.shift();
    if (i = (t.ownerDocument || t).$$reactFormReplay, i != null) for (o = 0; o < i.length; o += 3) {
      var s = i[o], f = i[o + 1], v = s[xt] || null;
      if (typeof f == "function") v || F0(i);
      else if (v) {
        var E = null;
        if (f && f.hasAttribute("formAction")) {
          if (s = f, v = f[xt] || null) E = v.formAction;
          else if (uf(s) !== null) continue;
        } else E = v.action;
        typeof E == "function" ? i[o + 1] = E : (i.splice(o, 3), o -= 3), F0(i);
      }
    }
  }
  function Z2() {
    function t(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(v) {
            return s = v;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), o || setTimeout(i, 20);
    }
    function i() {
      if (!o && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var o = !1, s = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(i, 100), function() {
        o = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function cf(t) {
    this._internalRoot = t;
  }
  ff.prototype.render = cf.prototype.render = function(t) {
    var n = this._internalRoot;
    if (n === null) throw Error(u(409));
    var i = n.current;
    P0(i, rn(), t, n, null, null);
  }, ff.prototype.unmount = cf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var n = t.containerInfo;
      P0(t.current, 2, null, t, null, null), zl(), n[xr] = null;
    }
  };
  function ff(t) {
    this._internalRoot = t;
  }
  ff.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var n = uh();
      t = {
        blockedOn: null,
        target: t,
        priority: n
      };
      for (var i = 0; i < Oa.length && n !== 0 && n < Oa[i].priority; i++) ;
      Oa.splice(i, 0, t), i === 0 && q0(t);
    }
  };
  var X0 = r.version;
  if (X0 !== "19.2.8") throw Error(u(527, X0, "19.2.8"));
  V.findDOMNode = function(t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
    return t = p(n), t = t !== null ? _(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var G2 = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jl.isDisabled && Jl.supportsFiber) try {
      Cr = Jl.inject(G2), Bt = Jl;
    } catch {
    }
  }
  e.createRoot = function(t, n) {
    if (!c(t)) throw Error(u(299));
    var i = !1, o = "", s = j_, f = B_, v = U_;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError)), n = z2(t, 1, !1, null, null, i, o, null, s, f, v, Z2), t[xr] = n.current, v0(t), new cf(n);
  };
})), l7 = /* @__PURE__ */ Xt(((e, a) => {
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (l) {
        console.error(l);
      }
  }
  r(), a.exports = o7();
})), u7 = l7();
async function s7(e) {
  if (e === "en-US") return {};
  try {
    const a = await fetch(`/_sites/dispatch-assets/sites-widget-locales/${encodeURIComponent(e)}.json`);
    if (!a.ok) return {};
    const r = await a.json();
    return r === null || typeof r != "object" || Array.isArray(r) ? {} : Object.fromEntries(Object.entries(r).filter(([l, u]) => l.startsWith("sites.dispatch.widget.") && Array.isArray(u)));
  } catch {
    return {};
  }
}
function c7({ onMount: e }) {
  return (0, y.useLayoutEffect)(e, [e]), null;
}
function _b(e, a, r = {}) {
  if (!r.isolatedDocument && od()) return {
    ready: Promise.resolve(),
    dispose: () => {
    }
  };
  const l = document.createElement("div");
  l.dataset.sitesWidget = e.kind, document.body.append(l);
  let u, c;
  const d = () => {
    c?.disconnect(), u?.unmount(), l.remove();
  };
  return r.isolatedDocument || (c = new MutationObserver(() => {
    od() && d();
  }), c.observe(document.documentElement, { childList: !0 })), {
    ready: (async () => {
      const h = HE(e.locale ?? "") ?? "en-US", m = r.isolatedDocument ? l : l.attachShadow({ mode: "open" }), g = document.createElement("style");
      g.textContent = `
      ${r.isolatedDocument ? "html, body { margin: 0; background: transparent; color-scheme: light dark; }" : ""}
      :host {
        all: initial !important;
        display: block !important;
        inset: 0 !important;
        pointer-events: none !important;
        position: fixed !important;
        z-index: 2147483647 !important;
      }
    `;
      const p = document.createElement("style");
      p.textContent = "._Button_guvzm_1{--button-press-scale:.96;--button-size:32px;--button-icon-size:18px;all:initial;box-sizing:border-box;color:var(--button-text-color);cursor:pointer;font:inherit;height:var(--button-size);-webkit-user-select:none;user-select:none;white-space:nowrap;flex-shrink:0;padding:0 12px;display:inline-block;position:relative}._Button_guvzm_1:before,._Button_guvzm_1:after{border-radius:inherit;content:\"\";pointer-events:none;will-change:transform;transition:background-color .15s,box-shadow .15s,transform .15s;position:absolute;inset:0}._Button_guvzm_1:before{background:var(--button-background-color)}._Button_guvzm_1:focus{outline:0}._Button_guvzm_1:focus-visible:after{outline:2px solid var(--button-ring-color,currentColor);outline-offset:var(--button-ring-offset,2px)}._Button_guvzm_1[data-size=lg]{--button-size:36px}._Button_guvzm_1[data-icon-size=lg]{--button-icon-size:20px}._Button_guvzm_1[data-pill]{border-radius:9999px}._Button_guvzm_1[data-uniform]{width:var(--button-size);padding:0}._Button_guvzm_1[data-variant=solid][data-color=primary]{--button-background-color:#171717;--button-background-color-hover:#303030;--button-background-color-active:#444;--button-text-color:#fff}._Button_guvzm_1[data-variant=solid][data-color=secondary]{--button-background-color:#fff;--button-background-color-hover:#f7f7f7;--button-background-color-active:#ededed;--button-text-color:#171717}._Button_guvzm_1[data-variant=ghost]{--button-background-color:transparent;--button-background-color-hover:#f2f2f2;--button-background-color-active:#e8e8e8}._Button_guvzm_1:not(:disabled):hover:before{background:var(--button-background-color-hover)}._Button_guvzm_1:not(:disabled):active:before{background:var(--button-background-color-active);transform:scale(var(--button-press-scale))}._Button_guvzm_1:not(:disabled):active:after{transform:scale(var(--button-press-scale))}._Button_guvzm_1:disabled{cursor:default;opacity:.32}._Button_guvzm_1 svg:not([data-no-autosize]){height:var(--button-icon-size);width:var(--button-icon-size)}._ButtonInner_guvzm_107{align-items:center;gap:inherit;justify-content:center;width:100%;height:100%;display:flex;position:relative}@media (prefers-reduced-motion:reduce){._Button_guvzm_1:before,._Button_guvzm_1:after{transition:none}}._Image_1l1xj_1{opacity:0;transition:opacity .3s var(--transition-ease-basic,ease);display:block}._Image_1l1xj_1[data-loaded]{opacity:1}@media (prefers-reduced-motion:reduce){._Image_1l1xj_1{transition:none}}._Tooltip_arpo7_1{border-radius:var(--tooltip-border-radius);max-width:300px;animation-name:_scale-in_arpo7_1;animation-duration:.25s;animation-timing-function:var(--cubic-enter);background:var(--tooltip-background-color);box-shadow:var(--tooltip-box-shadow);color:var(--tooltip-text-color);font-size:var(--tooltip-font-size);font-weight:var(--tooltip-font-weight);line-height:var(--tooltip-line-height);transform-origin:var(--radix-tooltip-content-transform-origin);transition:background-color .15s}._Tooltip_arpo7_1[data-state=closed]{animation:_scale-out_arpo7_1 .25s var(--cubic-enter)}._Tooltip_arpo7_1[data-clickable=false]{cursor:default}._Tooltip_arpo7_1[data-clickable=true]{cursor:pointer}@media (hover:hover){._Tooltip_arpo7_1[data-compact=true][data-clickable=true]:hover{background:var(--tooltip-compact-interactive-background-color-hover);color:var(--tooltip-compact-interactive-text-color-hover)}}._Tooltip_arpo7_1[data-gutter-size=sm]{padding:var(--tooltip-padding-sm)}._Tooltip_arpo7_1[data-gutter-size=md]{padding:var(--tooltip-padding-md)}._Tooltip_arpo7_1[data-gutter-size=lg]{padding:var(--tooltip-padding-lg)}._Tooltip_arpo7_1[data-compact=true]{padding:var(--tooltip-compact-padding);background:var(--tooltip-compact-background-color);color:var(--tooltip-compact-text-color);font-size:var(--tooltip-compact-font-size);font-weight:var(--tooltip-compact-font-weight)}@keyframes _scale-in_arpo7_1{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes _scale-out_arpo7_1{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.97)}}._TriggerDecorator_arpo7_86{cursor:pointer;transition:text-decoration .2s var(--cubic-exit);-webkit-text-decoration:underline dotted #0000;text-decoration:underline dotted #0000;display:inline-flex}._TriggerDecorator_arpo7_86:focus{outline:0}._TriggerDecorator_arpo7_86[data-state*=open]{-webkit-text-decoration-color:var(--color-text-tertiary);text-decoration-color:var(--color-text-tertiary);transition-timing-function:var(--cubic-enter)}._TransitionGroupChild_1d6a5_1{display:block}._Layout_4j8qj_1{flex-shrink:0;transition-property:height,width;display:block;position:relative}._Layout_4j8qj_1[data-clip=true]{overflow:hidden}._Layout_4j8qj_1[data-direction=in]{transition-delay:var(--tg-layout-enter-delay);transition-duration:var(--tg-layout-enter-duration);transition-timing-function:var(--tg-layout-enter-timing-function)}._Layout_4j8qj_1[data-direction=out]{transition-delay:var(--tg-layout-exit-delay);transition-duration:var(--tg-layout-exit-duration);transition-timing-function:var(--tg-layout-exit-timing-function)}._Layout_4j8qj_1[data-direction=move]{transition-delay:var(--tg-layout-move-delay);transition-duration:var(--tg-layout-move-duration);transition-timing-function:var(--tg-layout-move-timing-function)}._Layout_4j8qj_1[data-interrupted=true]{transition-delay:0s}._TransitionItem_4j8qj_34{will-change:var(--tg-will-change,auto);flex-shrink:0}._TransitionItem_4j8qj_34[data-entering],._TransitionItem_4j8qj_34[data-exiting]{width:100%;position:absolute;top:0;left:0}._Layout_4j8qj_1[data-dimension=width]>._TransitionItem_4j8qj_34[data-entering],._Layout_4j8qj_1[data-dimension=width]>._TransitionItem_4j8qj_34[data-exiting]{width:auto}._Layout_4j8qj_1[data-resize-contents][data-dimension=width]>._TransitionItem_4j8qj_34[data-entering]{width:100%}._Layout_4j8qj_1[data-item-anchor=end]>._TransitionItem_4j8qj_34[data-entering],._Layout_4j8qj_1[data-item-anchor=end]>._TransitionItem_4j8qj_34[data-exiting]{bottom:0;top:initial}._Layout_4j8qj_1[data-item-anchor=end][data-dimension=width]>._TransitionItem_4j8qj_34[data-entering],._Layout_4j8qj_1[data-item-anchor=end][data-dimension=width]>._TransitionItem_4j8qj_34[data-exiting]{left:initial;right:0}._TransitionItem_4j8qj_34[data-entering]{filter:var(--tg-initial-filter);opacity:var(--tg-initial-opacity);transform:var(--tg-initial-transform)}._TransitionItem_4j8qj_34[data-exiting]{filter:var(--tg-enter-filter);opacity:var(--tg-enter-opacity);transform:var(--tg-enter-transform)}._TransitionItem_4j8qj_34[data-entering-active],._TransitionItem_4j8qj_34[data-entering][data-interrupted]{filter:var(--tg-enter-filter);opacity:var(--tg-enter-opacity);transform:var(--tg-enter-transform);transition:opacity var(--tg-enter-duration) var(--tg-enter-timing-function) var(--tg-enter-delay), transform var(--tg-enter-duration) var(--tg-enter-timing-function) var(--tg-enter-delay), filter var(--tg-enter-duration) var(--tg-enter-timing-function) var(--tg-enter-delay)}._TransitionItem_4j8qj_34[data-exiting-active],._TransitionItem_4j8qj_34[data-exiting][data-interrupted]{filter:var(--tg-exit-filter);opacity:var(--tg-exit-opacity);transform:var(--tg-exit-transform);transition:opacity var(--tg-exit-duration) var(--tg-exit-timing-function) var(--tg-exit-delay), transform var(--tg-exit-duration) var(--tg-exit-timing-function) var(--tg-exit-delay), filter var(--tg-exit-duration) var(--tg-exit-timing-function) var(--tg-exit-delay)}._Theme_1ewnz_2{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--cubic-enter:cubic-bezier(.19, 1, .22, 1);--cubic-exit:cubic-bezier(.8, 0, .4, 1);--tooltip-border-radius:9999px;--tooltip-background-color:#1d1d1d;--tooltip-text-color:#fff;--tooltip-box-shadow:0 4px 12px #0000001f;--tooltip-font-size:14px;--tooltip-font-weight:500;--tooltip-line-height:20px;--tooltip-padding-sm:8px 12px;--tooltip-padding-md:5px 12px;--tooltip-padding-lg:14px 18px;--tooltip-compact-padding:2px 8px;--tooltip-compact-background-color:var(--lightningcss-light,#303030)var(--lightningcss-dark,#afafaf);--tooltip-compact-text-color:var(--lightningcss-light,#fff)var(--lightningcss-dark,#0d0d0d);--tooltip-compact-interactive-background-color-hover:var(--lightningcss-light,#414141)var(--lightningcss-dark,#8f8f8f);--tooltip-compact-interactive-text-color-hover:var(--lightningcss-light,#fff)var(--lightningcss-dark,#0d0d0d);--tooltip-compact-font-size:14px;--tooltip-compact-font-weight:400;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}@media (prefers-color-scheme:dark){._Theme_1ewnz_2{--lightningcss-light: ;--lightningcss-dark:initial}}._Portal_1ewnz_35{pointer-events:none;z-index:2147483647;position:relative}._Tooltip_1ewnz_41{box-sizing:border-box;cursor:default;letter-spacing:0;pointer-events:auto;text-align:center;border:1px solid #ffffff1f}._SharingTooltip_1ewnz_51{--tooltip-border-radius:14px;--tooltip-background-color:var(--tooltip-compact-background-color);--tooltip-text-color:var(--tooltip-compact-text-color);text-wrap:pretty}._HideHint_1ewnz_58{--tooltip-border-radius:14px;--tooltip-padding-md:10px 12px;pointer-events:auto;text-align:left;border:0;width:280px}._SharingHint_1ewnz_68,._SharingHint_1ewnz_68>span{overflow-wrap:anywhere;display:block}._HideHintContent_1ewnz_74{align-items:center;gap:12px;display:flex}._HideHintText_1ewnz_80{flex:1;min-width:0}._Shortcut_1ewnz_85{flex-shrink:0;gap:4px;display:inline-flex}._Shortcut_1ewnz_85 kbd{box-sizing:border-box;font:inherit;background:#ffffff17;border:1px solid #ffffff24;border-radius:5px;justify-content:center;align-items:center;min-width:22px;height:22px;padding:0 4px;font-size:12px;display:inline-flex;box-shadow:0 1px 1px #ffffff1f}@media (prefers-reduced-motion:reduce){._Portal_1ewnz_35 ._Tooltip_1ewnz_41[data-state]{animation:none}}._Widget_qytpw_1,._Widget_qytpw_1 *,._Widget_qytpw_1 :before,._Widget_qytpw_1 :after{box-sizing:border-box}._Widget_qytpw_1{--button-ring-color:#171717;--button-ring-offset:3px;--widget-surface:#ffffffc7;--widget-surface-highlight:#ffffffc7;--widget-text:#171717;--widget-text-secondary:#444;--widget-text-tertiary:var(--lightningcss-light,#8f8f8f)var(--lightningcss-dark,#afafaf);--widget-placeholder:#777;--widget-border:#0d0d0d1f;--widget-border-highlight:#0d0d0d2e;--widget-control-hover:#0d0d0d0f;--widget-control-active:#0d0d0d1a;--widget-shadow:#00000024;all:initial;box-sizing:border-box;color:var(--widget-text);--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;pointer-events:auto;z-index:2147483647;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;position:fixed}@media (prefers-color-scheme:dark){._Widget_qytpw_1{--lightningcss-light: ;--lightningcss-dark:initial}}._Widget_qytpw_1{pointer-events:none;bottom:auto;right:auto}._Widget_qytpw_1[data-snapping]{transition:left var(--widget-snap-duration) cubic-bezier(.2, .8, .2, 1), top var(--widget-snap-duration) cubic-bezier(.2, .8, .2, 1)}._LandingShadow_qytpw_46{box-sizing:border-box;pointer-events:none;z-index:2147483646;background:#64748b29;border-radius:18px;position:fixed;box-shadow:0 4px 20px #00000014}._WidgetEntrance_qytpw_56[data-entering]{opacity:0;transform:translateY(4px)}._WidgetEntrance_qytpw_56[data-entering-active]{opacity:1;transition:opacity .18s cubic-bezier(.19,1,.22,1),transform .18s cubic-bezier(.19,1,.22,1);transform:translateY(0)}._WidgetExit_qytpw_69[data-exiting]{opacity:0}._WidgetExit_qytpw_69{contain:paint;pointer-events:none;z-index:2147483647;position:fixed;inset:0}._Widget_qytpw_1[data-tucked] ._Shell_qytpw_82{width:64px;height:64px;transform:translate(var(--tuck-x), var(--tuck-y));border-radius:32px}._Widget_qytpw_1[data-peek-phase=expanded] ._Shell_qytpw_82{width:88px;height:88px;transform:translate(calc(var(--tuck-x) - 12px), calc(var(--tuck-y) - 12px));--widget-morph-easing:cubic-bezier(.2, 1.4, .4, 1);border-radius:32px}._Widget_qytpw_1[data-quiet-tuck] ._Shell_qytpw_82{--widget-morph-duration:.22s;--widget-morph-easing:ease}._Widget_qytpw_1[data-peek-phase=away] ._Shell_qytpw_82{transform:translate(calc(var(--tuck-x) + var(--corner-x-direction) * 80px), calc(var(--tuck-y) + var(--corner-y-direction) * 80px));--widget-morph-duration:.36s;--widget-morph-easing:cubic-bezier(.55, 0, .85, .4)}._ShellControls_qytpw_114{width:max-content;transition:opacity .12s .14s}._Widget_qytpw_1[data-tucked] ._ShellControls_qytpw_114{opacity:0;transition:opacity .1s}._Launcher_qytpw_124{cursor:pointer;font:inherit;color:var(--widget-text);white-space:nowrap;-webkit-user-select:none;user-select:none;z-index:1;background:0 0;border:0;justify-content:center;align-items:center;gap:12px;min-width:137px;height:36px;padding:0 40px;font-size:13px;font-weight:400;display:inline-flex}._LauncherRow_qytpw_147{position:relative}._LauncherLabel_qytpw_151{line-height:20px;display:inline-block}._Widget_qytpw_1[data-dragging] ._Launcher_qytpw_124{cursor:grabbing}._CornerTarget_qytpw_161{cursor:pointer;pointer-events:auto;touch-action:none;z-index:2147483647;background:0 0;border:0;width:44px;height:44px;padding:0;position:fixed}._CornerTarget_qytpw_161:hover,._CornerTarget_qytpw_161:focus-visible{width:52px;height:52px}._CornerTarget_qytpw_161:focus-visible{outline:2px solid var(--button-ring-color);outline-offset:-3px}._Widget_qytpw_1[data-corner=top-left] ._CornerTarget_qytpw_161{border-radius:0 0 32px;top:0;left:0}._Widget_qytpw_1[data-corner=top-right] ._CornerTarget_qytpw_161{border-radius:0 0 0 32px;top:0;right:0}._Widget_qytpw_1[data-corner=bottom-left] ._CornerTarget_qytpw_161{border-radius:0 32px 0 0;bottom:0;left:0}._Widget_qytpw_1[data-corner=bottom-right] ._CornerTarget_qytpw_161{border-radius:32px 0 0;bottom:0;right:0}._Panel_qytpw_191 ._LogoButton_qytpw_191[data-variant][data-color]{--button-background-color-hover:var(--widget-control-hover);--button-background-color-active:var(--widget-control-active);--button-text-color:var(--widget-text);--button-size:28px;z-index:2;position:absolute;top:4px;left:4px}._LogoButton_qytpw_191:focus-visible:before{background:var(--button-background-color-hover)}._Shell_qytpw_82{--widget-morph-duration:.42s;--widget-morph-easing:cubic-bezier(.4, 0, .2, 1);pointer-events:auto;width:var(--widget-surface-width,137px);height:var(--widget-surface-height,36px);transition:transform var(--widget-morph-duration) var(--widget-morph-easing), width var(--widget-morph-duration) var(--widget-morph-easing), height var(--widget-morph-duration) var(--widget-morph-easing), border-radius var(--widget-morph-duration) var(--widget-morph-easing), opacity .15s ease;border-radius:18px;position:relative;transform:translate(0)}._Panel_qytpw_191[data-expanded] ._Shell_qytpw_82,._WidgetEntrance_qytpw_56[data-entering] ._ToolbarPanel_qytpw_231 ._Shell_qytpw_82{transition:none}._Widget_qytpw_1:not([data-tucked]) ._Shell_qytpw_82:has(._ShellContent_qytpw_236[data-entering],._ShellContent_qytpw_236[data-exiting]){transition-property:transform,border-radius,opacity}._ShellLayout_qytpw_240{border-radius:inherit;width:max-content;min-height:36px;transition-property:width}._ShellContent_qytpw_236{z-index:1;min-height:36px;position:relative}._Widget_qytpw_1[data-corner^=top] ._ShellContent_qytpw_236:is([data-entering],[data-exiting]){top:0;bottom:auto}._Widget_qytpw_1[data-corner^=bottom] ._ShellContent_qytpw_236:is([data-entering],[data-exiting]){top:auto;bottom:0}._ShellContent_qytpw_236[data-exiting],._ShellContent_qytpw_236[data-exiting] *{pointer-events:none}._Shell_qytpw_82:before{-webkit-backdrop-filter:var(--sites-toolbar-backdrop-filter,blur(18px) saturate(1.25));backdrop-filter:var(--sites-toolbar-backdrop-filter,blur(18px) saturate(1.25));background:var(--sites-toolbar-glass,var(--widget-surface));border-radius:inherit;box-shadow:0 0 0 1px var(--widget-border), 0 10px 30px var(--widget-shadow), 0 2px 6px #00000014;content:\"\";pointer-events:none;will-change:transform;transition:background-color .15s,box-shadow .15s,transform .15s;position:absolute;inset:0}._Shell_qytpw_82:hover:before,._Shell_qytpw_82:focus-within:before{background:var(--sites-toolbar-glass,var(--widget-surface-highlight))}._Shell_qytpw_82:after{border-radius:inherit;content:\"\";pointer-events:none;transition:transform .15s;position:absolute;inset:0}._Panel_qytpw_191:not([data-expanded]) ._Shell_qytpw_82:has(._Launcher_qytpw_124:focus-visible):after{outline:2px solid var(--button-ring-color);outline-offset:var(--button-ring-offset)}._Shell_qytpw_82:has(._Launcher_qytpw_124:active):before{transform:scale(.98)}._Shell_qytpw_82:has(._Launcher_qytpw_124:active):after{transform:scale(.98)}._LauncherLogo_qytpw_313{flex:none;width:18px;height:18px;display:block}._LauncherLogo_qytpw_313[data-entering] img[data-loaded]{transform-origin:50%;animation:.7s cubic-bezier(.22,1,.36,1) both _blossomEntrance_qytpw_1}@keyframes _blossomEntrance_qytpw_1{0%{transform:rotate(-60deg)scale(.9)}to{transform:rotate(0)scale(1)}}._Panel_qytpw_191{--widget-panel-width:min(var(--widget-composer-width,360px), calc(100vw - 48px));width:var(--widget-panel-width);flex-direction:column;align-items:flex-start;display:flex;position:relative}._Panel_qytpw_191:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){align-items:flex-end}._Composer_qytpw_345{min-height:36px;width:var(--widget-panel-width);background:0 0;grid-template-columns:minmax(0,1fr) 24px;align-items:end;gap:8px;padding:6px;display:grid;overflow:hidden}._ShellLayout_qytpw_240[data-resize-contents] ._Composer_qytpw_345{width:100%}._Textarea_qytpw_361{all:initial;box-sizing:border-box;color:var(--widget-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;resize:none;align-self:center;width:calc(100% - 12px);height:24px;min-height:24px;max-height:180px;margin-left:12px;padding:3px 0;font-family:inherit;font-size:14px;font-weight:400;line-height:18px;transition:none;display:block;overflow-y:auto}._Textarea_qytpw_361::placeholder{color:var(--widget-placeholder);opacity:1}._Textarea_qytpw_361:placeholder-shown{white-space:pre;overflow-x:hidden}._Textarea_qytpw_361:focus{outline:0}._ComposerFooter_qytpw_399{justify-content:flex-end;display:flex}._ComposerTooltip_qytpw_404{--tooltip-border-radius:12px;--tooltip-background-color:var(--tooltip-compact-background-color);--tooltip-text-color:var(--tooltip-compact-text-color)}._ComposerArrow_qytpw_410{transition:transform .16s ease-out;transform:rotate(0)}._ComposerArrow_qytpw_410[data-open]{transform:rotate(45deg)}@media (prefers-reduced-motion:reduce){._ComposerArrow_qytpw_410{transition:none}}._Panel_qytpw_191 ._SendButton_qytpw_423[data-variant][data-color]{--button-size:24px;--button-icon-size:16px;align-self:end}:where(._Widget_qytpw_1:not([data-tucked])) ._ToolbarPanel_qytpw_231 ._Shell_qytpw_82{border-radius:9999px;height:auto}._ToolbarPanel_qytpw_231 ._ShellLayout_qytpw_240[data-resize-contents]>._ShellContent_qytpw_236[data-entering]{position:relative}._ToolbarPanel_qytpw_231 ._ShellContent_qytpw_236[data-exiting]:has(._Composer_qytpw_345){width:100%}._ToolbarPanel_qytpw_231 ._ShellContent_qytpw_236[data-exiting]:has(._Composer_qytpw_345) ._Composer_qytpw_345{width:100%}._ToolbarPanel_qytpw_231 ._Composer_qytpw_345{grid-template-columns:minmax(0,1fr) 28px;padding:8px}._ToolbarPanel_qytpw_231 ._Textarea_qytpw_361{height:28px;min-height:28px;padding-block:4px;font-size:15px;line-height:20px}._ToolbarPanel_qytpw_231 ._SendButton_qytpw_423[data-variant][data-color]{--button-size:28px;--button-icon-size:18px;--button-background-color:var(--lightningcss-light,#171717)var(--lightningcss-dark,#f3f3f3);--button-background-color-hover:var(--lightningcss-light,#303030)var(--lightningcss-dark,#e5e5e5);--button-background-color-active:var(--lightningcss-light,#444)var(--lightningcss-dark,#d4d4d4);--button-text-color:var(--lightningcss-light,#fff)var(--lightningcss-dark,#171717)}._Launcher_qytpw_124:focus{outline:0}._Panel_qytpw_191 ._LauncherDismissButton_qytpw_477[data-variant][data-color]{--button-background-color-hover:var(--widget-control-hover);--button-background-color-active:var(--widget-control-active);--button-text-color:var(--widget-text-tertiary);--button-size:28px;--button-icon-size:16px;opacity:0;pointer-events:none;z-index:2;transition:opacity 80ms;position:absolute;bottom:4px;right:4px}._LauncherDismissButton_qytpw_477:focus-visible:before{background:var(--button-background-color-hover)}._Panel_qytpw_191:not([data-expanded]) ._LauncherDismissButton_qytpw_477[data-variant][data-color]{opacity:1;pointer-events:auto}._Panel_qytpw_191:not([data-expanded]) ._Shell_qytpw_82:has(._ShellContent_qytpw_236[data-entering]) ._LauncherDismissButton_qytpw_477[data-variant][data-color]{opacity:0;pointer-events:none}@media (prefers-reduced-motion:reduce){._WidgetEntrance_qytpw_56[data-entering]{opacity:1;transition:none;transform:none}._Widget_qytpw_1[data-snapping],._LauncherLogo_qytpw_313[data-entering] img[data-loaded],._Widget_qytpw_1[data-tucked] ._Shell_qytpw_82,._Widget_qytpw_1[data-peek-phase] ._Shell_qytpw_82,._Widget_qytpw_1[data-quiet-tuck] ._Shell_qytpw_82,._ShellControls_qytpw_114,._Widget_qytpw_1[data-tucked] ._ShellControls_qytpw_114,._Composer_qytpw_345,._Launcher_qytpw_124,._Launcher_qytpw_124:before,._Shell_qytpw_82,._ShellLayout_qytpw_240,._Shell_qytpw_82:before,._Shell_qytpw_82:after,._Panel_qytpw_191 ._LauncherDismissButton_qytpw_477[data-variant][data-color],._Textarea_qytpw_361{transition:none;animation:none}}@media (hover:hover){._Shell_qytpw_82:hover{--widget-border:var(--widget-border-highlight)}}@media (prefers-color-scheme:dark){._Widget_qytpw_1{--button-ring-color:#fff;--widget-surface:#282828c2;--widget-surface-highlight:#383838c2;--widget-text:#f5f5f5;--widget-text-secondary:#d0d0d0;--widget-placeholder:#aaa;--widget-border:#ffffff24;--widget-border-highlight:#ffffff38;--widget-control-hover:#ffffff1a;--widget-control-active:#ffffff29;--widget-shadow:#0000004d}._LauncherLogo_qytpw_313{filter:invert()}}@media (max-width:520px){._Textarea_qytpw_361{font-size:16px}._Panel_qytpw_191{--widget-panel-width:calc(100vw - 32px)}}._Shell_qytpw_82:has([data-toolbar-menu-mounted]):before{visibility:hidden}._Shell_qytpw_82:has([data-toolbar-menu-mounted]):after{visibility:hidden}._SharingClose_qytpw_579{gap:12px;min-width:0;padding-block:0;padding-inline:10px 16px}._SharingClose_qytpw_579 svg{width:16px;height:16px}._Shell_qytpw_82:has(._SharingClose_qytpw_579):before{background:var(--sites-toolbar-action-glass)}._Shell_qytpw_82:has(._SharingClose_qytpw_579:active):before{transform:scale(.94)}._Shell_qytpw_82:has(._SharingClose_qytpw_579:active):after{transform:scale(.94)}._Shell_qytpw_82:has([data-menu-open]){pointer-events:none}._Widget_1lfcb_1{--safe-top:env(safe-area-inset-top,0px);--safe-right:env(safe-area-inset-right,0px);--safe-bottom:env(safe-area-inset-bottom,0px);--safe-left:env(safe-area-inset-left,0px);pointer-events:auto;width:max-content;max-width:calc(100vw - 32px);height:52px}._Widget_1lfcb_1[data-mobile-widget-menu-open]{pointer-events:none}._Widget_1lfcb_1[data-mobile-widget-snapping]{transition:left var(--widget-snap-duration) cubic-bezier(.2, .8, .2, 1), top var(--widget-snap-duration) cubic-bezier(.2, .8, .2, 1)}@media (prefers-reduced-motion:reduce){._Widget_1lfcb_1[data-mobile-widget-snapping]{transition:none}}._Launcher_1lfcb_27,._Action_1lfcb_28,._EditAction_1lfcb_29,._MoreAction_1lfcb_30{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}._Launcher_1lfcb_27:before,._Menu_1lfcb_39:before{border:1px solid var(--widget-border);-webkit-backdrop-filter:blur(18px)saturate(1.25);backdrop-filter:blur(18px)saturate(1.25);background:var(--widget-surface);box-shadow:0 4px 20px var(--widget-shadow);color:var(--widget-text)}._Launcher_1lfcb_27{cursor:grab;isolation:isolate;touch-action:none;border-radius:26px;grid-template-columns:44px minmax(0,1fr) 44px;align-items:center;height:52px;padding:4px;transition:opacity .14s .11s;display:grid;position:relative}._Launcher_1lfcb_27:before{z-index:-1;border-radius:inherit;content:\"\";pointer-events:none;transition:transform var(--press-duration,.24s) ease-out;position:absolute;inset:0}:where(._Widget_1lfcb_1[data-mobile-widget-pressed]) ._Launcher_1lfcb_27:before{--press-duration:.1s;transform:scale(.96)}:where(._Widget_1lfcb_1[data-mobile-widget-menu-open]) ._Launcher_1lfcb_27{opacity:0;pointer-events:none;transition-duration:80ms;transition-delay:0s}:where(._Widget_1lfcb_1[data-mobile-widget-menu-mounted]) ._Launcher_1lfcb_27:before{visibility:hidden}._Launcher_1lfcb_27 img{pointer-events:none;justify-self:center}@media (prefers-color-scheme:dark){._Launcher_1lfcb_27 img{filter:invert()}}:where(._Widget_1lfcb_1[data-mobile-widget-dragging]) ._Launcher_1lfcb_27{cursor:grabbing}@media (prefers-reduced-motion:reduce){._Launcher_1lfcb_27,._Launcher_1lfcb_27:before{transition:none}}._EditAction_1lfcb_29,._MoreAction_1lfcb_30{min-width:44px;height:44px;color:inherit;cursor:pointer;font:inherit;background:0 0;border:0;border-radius:22px;justify-content:center;align-items:center;padding:0;font-size:16px;line-height:20px;text-decoration:none;display:flex}._EditAction_1lfcb_29{overflow-wrap:anywhere;text-align:center;min-width:0;padding:0 8px}._MoreAction_1lfcb_30{color:var(--widget-text-tertiary)}._MoreAction_1lfcb_30 svg{width:24px;height:24px}._Menu_1lfcb_39{--surface-easing:cubic-bezier(.2, .8, .2, 1);--surface-duration:.25s;--surface-inset:var(--closed-top) var(--closed-right) var(--closed-bottom) var(--closed-left);--surface-radius:26px;z-index:2147483646;opacity:0;pointer-events:none;border-radius:24px;width:min(200px,100vw - 32px);max-width:calc(100vw - 32px);padding:0;display:block;position:relative}._Menu_1lfcb_39:focus{outline:none}._Menu_1lfcb_39:before{inset:var(--surface-inset);border-radius:var(--surface-radius);content:\"\";pointer-events:none;transition:inset var(--surface-duration) var(--surface-easing), border-radius var(--surface-duration) var(--surface-easing);position:absolute}._Menu_1lfcb_39[data-mobile-widget-positioned]{opacity:1;pointer-events:auto}._Menu_1lfcb_39[data-mobile-widget-positioned][data-state=open]{--surface-duration:.38s;--surface-inset:0px;--surface-radius:24px}._Menu_1lfcb_39[data-state=closed]{animation:_menu-exit_1lfcb_1 var(--surface-duration) both;pointer-events:none}@media (prefers-reduced-motion:reduce){._Menu_1lfcb_39[data-state=closed],._Menu_1lfcb_39:before{transition:none;animation:none}}._Actions_1lfcb_204{clip-path:inset(var(--surface-inset) round var(--surface-radius));opacity:0;transition:clip-path var(--surface-duration) var(--surface-easing), opacity 60ms ease;flex-direction:column;padding:8px;display:flex;position:relative}:where(._Menu_1lfcb_39[data-mobile-widget-positioned][data-state=open]) ._Actions_1lfcb_204{opacity:1;transition:clip-path var(--surface-duration) var(--surface-easing), opacity .18s ease 80ms}@media (prefers-reduced-motion:reduce){._Actions_1lfcb_204{transition:none}}@keyframes _menu-exit_1lfcb_1{0%,to{visibility:visible}}._Action_1lfcb_28{min-height:48px;color:inherit;cursor:pointer;font:inherit;overflow-wrap:anywhere;text-align:start;background:0 0;border:0;border-radius:20px;align-items:center;gap:12px;padding:10px 12px;font-size:16px;text-decoration:none;display:flex}._Action_1lfcb_28 svg{flex:none;width:20px;height:20px}._Action_1lfcb_28:active{background:var(--widget-control-active)}@media (hover:hover){._Action_1lfcb_28:hover{background:var(--widget-control-hover)}}._Action_1lfcb_28:focus-visible,._EditAction_1lfcb_29:focus-visible,._MoreAction_1lfcb_30:focus-visible{outline:2px solid var(--button-ring-color);outline-offset:2px}._Launcher_1s5qa_1,._Launcher_1s5qa_1[data-mobile]{cursor:grab;-webkit-user-select:none;user-select:none;align-items:center;gap:4px;width:max-content;max-width:calc(100vw - 48px);height:36px;padding:4px;transition:opacity .22s 60ms;display:flex}:is(._Launcher_1s5qa_1,._Launcher_1s5qa_1[data-mobile]):active{cursor:grabbing}:is(._Launcher_1s5qa_1,._Launcher_1s5qa_1[data-mobile])[data-menu-open]{opacity:0;pointer-events:none;transition-duration:80ms;transition-delay:0s}@media (prefers-reduced-motion:reduce){._Launcher_1s5qa_1,._Launcher_1s5qa_1[data-mobile]{transition:none}}._Launcher_1s5qa_1 ._Logo_1s5qa_32{place-items:center;width:28px;height:28px;display:grid}._Divider_1s5qa_38{background:var(--widget-border);flex:none;width:1px;height:18px}._Ghost_1s5qa_44[data-variant=ghost]{--button-background-color-hover:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f);--button-background-color-active:var(--lightningcss-light,#0000001a)var(--lightningcss-dark,#ffffff2e);--button-text-color:var(--widget-text)}._Ghost_1s5qa_44[data-variant=ghost]:focus-visible:after{outline:none}._Ghost_1s5qa_44[data-variant=ghost]:focus-visible:not(:disabled):not(:active):before{background:var(--button-background-color-hover)}._Launcher_1s5qa_1 ._Shortcut_1s5qa_65,._Launcher_1s5qa_1 ._More_1s5qa_66{--button-size:28px;--button-icon-size:16px;font-size:13px}._Launcher_1s5qa_1 ._Shortcut_1s5qa_65{flex-shrink:1;gap:6px;min-width:0;padding:0 8px}._Label_1s5qa_77{text-overflow:ellipsis;overflow:hidden}._More_1s5qa_66[data-variant=ghost]{--button-text-color:var(--widget-text-tertiary)}._Menu_1s5qa_84[data-state]{width:max-content;min-width:184px;max-width:none}._Menu_1s5qa_84:before{outline:1px solid var(--widget-border);-webkit-backdrop-filter:var(--sites-toolbar-backdrop-filter);backdrop-filter:var(--sites-toolbar-backdrop-filter);background:var(--sites-toolbar-glass);border:0}._Menu_1s5qa_84 ._MenuActions_1s5qa_97{padding:6px}._MenuAction_1s5qa_97{--button-icon-size:20px;text-align:start;white-space:nowrap;border-radius:9999px;align-items:center;gap:10px;height:auto;min-height:38px;padding:7px 10px;font-size:13px;line-height:20px;text-decoration:none;display:flex}._MenuAction_1s5qa_97>span{justify-content:flex-start}._MenuAction_1s5qa_97 svg{flex-shrink:0}._MenuAction_1s5qa_97:before{transition-property:transform}._Launcher_1s5qa_1[data-mobile]{max-width:calc(100vw - 32px)}._Launcher_1s5qa_1[data-mobile]:not([data-menu-open]){pointer-events:auto}._Launcher_1s5qa_1[data-mobile][data-toolbar-menu-mounted]:before{visibility:hidden}._Menu_1s5qa_84[data-mobile]{max-width:calc(100vw - 32px)}._Menu_1s5qa_84[data-mobile] ._MenuAction_1s5qa_97{white-space:normal}:where([data-mobile-widget-dragging]) ._Launcher_1s5qa_1:before{box-shadow:none}._Widget_lanvw_1{pointer-events:none;height:auto}._CloseButton_lanvw_7[data-variant]{--button-size:36px;--button-icon-size:16px;--button-text-color:var(--widget-text);--button-background-color:var(--widget-surface);--button-background-color-hover:var(--widget-surface);--button-background-color-active:var(--widget-surface);pointer-events:auto;gap:12px;padding-block:0;padding-inline:10px 16px;font-size:13px}._CloseButton_lanvw_7[data-variant]:before{border:1px solid var(--widget-border);-webkit-backdrop-filter:blur(18px)saturate(1.25);backdrop-filter:blur(18px)saturate(1.25);box-shadow:0 4px 20px var(--widget-shadow)}._Banner_1iivt_1,._Banner_1iivt_1 *,._Banner_1iivt_1 :before,._Banner_1iivt_1 :after{box-sizing:border-box}._Banner_1iivt_1{all:initial;box-sizing:border-box;color:#171717;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;pointer-events:auto;z-index:2147483647;background:#fff;border-radius:24px;align-items:center;width:min(640px,100vw - 48px);min-height:68px;padding:12px 14px 12px 20px;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;display:flex;position:fixed;top:24px;left:50%;transform:translate(-50%);box-shadow:0 0 0 1px #0d0d0d1a,0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a}._Content_1iivt_34{flex:1;justify-content:space-between;align-items:center;min-width:0;display:flex}._Message_1iivt_42{overflow-wrap:break-word;flex:1;min-width:0;font-size:14px;line-height:1.5}._OwnerName_1iivt_50{font-weight:600}._Actions_1iivt_54{flex:none;align-items:center;gap:8px;margin-left:16px;display:flex}._EditLink_1iivt_62,._DismissButton_1iivt_63{--scale:.985;font:inherit;isolation:isolate;border:0;justify-content:center;align-items:center;transition:color .15s;display:inline-flex;position:relative}._EditLink_1iivt_62:before,._DismissButton_1iivt_63:before{border-radius:inherit;content:\"\";will-change:transform;z-index:-1;transition:background-color .15s,opacity .15s,transform .15s;position:absolute;inset:0}._EditLink_1iivt_62{color:#fff;white-space:nowrap;background:0 0;border-radius:9999px;flex:none;gap:6px;min-height:36px;padding:0 16px;font-size:13px;font-weight:400;text-decoration:none}._EditLink_1iivt_62 svg{width:18px;height:18px}._EditLink_1iivt_62:before{background:#171717}._EditLink_1iivt_62:hover:before{background:#2f2f2f}._EditLink_1iivt_62:active:before{transform:scale(var(--scale));background:#3a3a3a}._EditLink_1iivt_62:focus-visible,._DismissButton_1iivt_63:focus-visible{outline-offset:2px;outline:2px solid #0d6efd}._DismissButton_1iivt_63{color:#5f5f5f;cursor:pointer;background:0 0;border-radius:9999px;flex:none;width:36px;height:36px;padding:0;font-size:20px}._DismissButton_1iivt_63:before{opacity:0;transform:scale(var(--scale));background:#f2f2f2}._DismissButton_1iivt_63:hover{color:#171717}._DismissButton_1iivt_63:hover:before{opacity:1;transform:scale(1)}._DismissButton_1iivt_63:active:before{opacity:1;transform:scale(var(--scale));background:#e8e8e8}@media (prefers-reduced-motion:reduce){._EditLink_1iivt_62,._EditLink_1iivt_62:before,._DismissButton_1iivt_63,._DismissButton_1iivt_63:before{transition:none}}@media (max-width:520px){._Banner_1iivt_1{width:calc(100vw - 24px);padding:14px 16px 16px 20px;top:12px}._Content_1iivt_34{flex-wrap:wrap;gap:12px}._Message_1iivt_42{flex-basis:calc(100% - 48px)}._Actions_1iivt_54{display:contents}._EditLink_1iivt_62{order:2}._DismissButton_1iivt_63{order:1;align-self:flex-start}}._ModalHost_1xgl6_1{--widget-composer-width:336px;--sites-toolbar-glass:var(--lightningcss-light,#ffffffc7)var(--lightningcss-dark,#21212199);--sites-toolbar-action-glass:var(--lightningcss-light,#ffffffc7)var(--lightningcss-dark,#18181899);--sites-toolbar-backdrop-filter:blur(52px);--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;pointer-events:none;background:0 0;border:0;width:100vw;max-width:none;height:100dvh;max-height:none;margin:0;padding:0;position:fixed;inset:0;overflow:visible}@media (prefers-color-scheme:dark){._ModalHost_1xgl6_1{--lightningcss-light: ;--lightningcss-dark:initial}}._ModalHost_1xgl6_1[data-sharing-open]{pointer-events:auto}._ModalHost_1xgl6_1::backdrop{background:0 0}._ModalHost_1xgl6_1[data-sharing-open] ._FrameHost_1xgl6_28[data-panel-ready]{visibility:visible;pointer-events:auto;transition:none}._FrameHost_1xgl6_28{--sharing-max-height:584px;--sharing-enter-y:16px;--sharing-exit-y:10px;z-index:2147483647;width:min(464px,100vw - 8px);height:min(var(--sharing-max-height), calc(100dvh - 88px));max-height:var(--sharing-max-height);pointer-events:none;visibility:hidden;transition:visibility .18s step-end;position:absolute;bottom:60px;right:12px}._FrameHost_1xgl6_28[data-placement=top]{--sharing-enter-y:-16px;--sharing-exit-y:-10px}._FrameHost_1xgl6_28[data-placement=top]>._Glass_1xgl6_60,._Dialog_1xgl6_61[data-placement=top]{top:12px;bottom:auto}._Frame_1xgl6_28{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;background:0 0;border:0;width:100%;height:100%;display:block;position:relative}@media (prefers-color-scheme:dark){._Frame_1xgl6_28{--lightningcss-light: ;--lightningcss-dark:initial}}._Glass_1xgl6_60{background:var(--lightningcss-light,#ffffffb8)var(--lightningcss-dark,var(--sites-toolbar-glass));max-height:calc(100% - 24px);-webkit-backdrop-filter:var(--sites-toolbar-backdrop-filter);backdrop-filter:var(--sites-toolbar-backdrop-filter);pointer-events:none;border-radius:24px;position:absolute;inset:auto 12px 12px;box-shadow:0 0 0 1px var(--lightningcss-light,#0d0d0d1f)var(--lightningcss-dark,#0000),0 8px 32px #0000001a}._FrameHost_1xgl6_28[data-panel-ready]>._Frame_1xgl6_28,._FrameHost_1xgl6_28[data-panel-ready]>._Glass_1xgl6_60{animation:.18s both _sharing-exit_1xgl6_1}._ModalHost_1xgl6_1[data-sharing-open] ._FrameHost_1xgl6_28[data-panel-ready]>._Frame_1xgl6_28,._ModalHost_1xgl6_1[data-sharing-open] ._FrameHost_1xgl6_28[data-panel-ready]>._Glass_1xgl6_60{animation:.24s cubic-bezier(.2,.8,.2,1) both _sharing-enter_1xgl6_1}._Root_1xgl6_98{--ink:var(--lightningcss-light,#171717)var(--lightningcss-dark,#f3f3f3);--border:var(--lightningcss-light,#dedede)var(--lightningcss-dark,#ffffff40);--surface:var(--lightningcss-light,#fff)var(--lightningcss-dark,#242424);--hover:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f);--active:var(--lightningcss-light,#0000001a)var(--lightningcss-dark,#ffffff2e);--muted:var(--lightningcss-light,#777)var(--lightningcss-dark,#aaa);--error:var(--lightningcss-light,#b42828)var(--lightningcss-dark,#ff9191);color:var(--ink);pointer-events:none;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;font:14px/1.45 ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;position:fixed;inset:0}@media (prefers-color-scheme:dark){._Root_1xgl6_98{--lightningcss-light: ;--lightningcss-dark:initial}}._Root_1xgl6_98 *{box-sizing:border-box}._Dialog_1xgl6_61{pointer-events:auto;background:0 0;border:0;border-radius:24px;outline:none;flex-direction:column;max-height:calc(100% - 24px);padding:0;display:flex;position:absolute;inset:auto 12px 12px;overflow:hidden}._Dialog_1xgl6_61[data-state=closed]{pointer-events:none;animation:.18s both _sharing-retain_1xgl6_1}._Body_1xgl6_143{flex-direction:column;min-height:0;display:flex}._Header_1xgl6_148{flex-direction:column;flex-shrink:0;padding:20px 20px 0;display:flex}._AccessList_1xgl6_154{--fade-top:0px;--fade-bottom:0px;overscroll-behavior:contain;min-height:0;-webkit-mask-image:linear-gradient(to bottom, transparent, black var(--fade-top), black calc(100% - var(--fade-bottom)), transparent);mask-image:linear-gradient(to bottom, transparent, black var(--fade-top), black calc(100% - var(--fade-bottom)), transparent);overflow:auto}._AccessList_1xgl6_154[data-scroll-cutoff]{--fade-top:16px}._AccessList_1xgl6_154[data-scroll-cutoff-below]{--fade-bottom:16px}._AccessListContent_1xgl6_175{padding-inline:20px}._Title_1xgl6_178{overflow-wrap:anywhere;margin:0 0 24px;font-size:18px;font-weight:500;line-height:1.3}._Dialog_1xgl6_61[data-read-only] ._Title_1xgl6_178{margin-bottom:0}._Section_1xgl6_188{margin:20px 0 8px;font-size:14px;font-weight:400}._Results_1xgl6_193{width:var(--radix-popover-trigger-width);max-width:var(--radix-popover-content-available-width);max-height:min(256px, var(--radix-popover-content-available-height));z-index:1;background:var(--lightningcss-light,#fff)var(--lightningcss-dark,#292929);border-radius:14px;outline:none;padding:6px;overflow:auto;box-shadow:0 8px 28px #00000029,0 0 0 1px var(--lightningcss-light,#00000014)var(--lightningcss-dark,#ffffff1f)}._Result_1xgl6_193{text-align:start;white-space:normal;width:100%;height:auto;min-height:52px;color:var(--ink);border-radius:8px;gap:10px;padding:8px}._Result_1xgl6_193[data-variant]{--button-background-color-hover:var(--hover);--button-background-color-active:var(--active)}._Result_1xgl6_193>span{justify-content:flex-start}._Result_1xgl6_193:not(:disabled):hover:before{background:var(--hover)}._Result_1xgl6_193:before{transition-property:transform}._Person_1xgl6_236{align-items:center;gap:12px;padding:8px 0;display:flex}._GroupAvatar_1xgl6_242{--button-icon-size:16px}._GroupAvatar_1xgl6_242>svg{width:16px;height:16px}._Identity_1xgl6_251{overflow-wrap:anywhere;flex-direction:column;flex:1;min-width:0;display:flex}._Secondary_1xgl6_258{color:var(--muted);font-size:13px}._Role_1xgl6_262{max-width:130px;margin-inline-end:-8px}._Role_1xgl6_262[data-variant]{color:var(--muted)}._AccessMode_1xgl6_271{align-self:flex-start;height:44px;margin-inline-start:-8px;padding:0 8px;padding-inline-end:13px}._AccessModeLabel_1xgl6_279{align-items:center;gap:8px;min-height:44px;margin:0;display:flex}._AccessModeIcon_1xgl6_286{flex-shrink:0;justify-content:center;align-items:center;width:28px;height:28px;display:inline-flex}._AccessModeIcon_1xgl6_286>svg{width:20px;height:20px}._ReadOnlyRole_1xgl6_299{color:var(--muted);padding-inline-end:4px}._Footer_1xgl6_303{flex-shrink:0;justify-content:flex-end;padding:20px;display:flex}._Copy_1xgl6_309{color:var(--ink);background:0 0;gap:8px;padding:0 16px;font-size:13px}._Copy_1xgl6_309[data-variant]{--button-background-color-hover:var(--hover);--button-background-color-active:var(--active)}._Copy_1xgl6_309:before{box-shadow:inset 0 0 0 1px var(--border)}._Error_1xgl6_326{color:var(--error);flex-shrink:0;margin:12px 20px;font-size:13px}._Notice_1xgl6_332{color:var(--muted);padding:8px 0;font-size:13px}._SearchHint_1xgl6_337{margin:0;padding:12px}._SearchLoading_1xgl6_341{place-items:center;min-height:calc(1lh + 16px);display:grid}._EmptyResults_1xgl6_347{color:var(--muted);margin:0;padding:12px;font-size:14px;line-height:20px}@media (max-width:480px){._Role_1xgl6_262{max-width:105px}}@keyframes _sharing-retain_1xgl6_1{0%,to{visibility:visible}}@keyframes _sharing-enter_1xgl6_1{0%{opacity:0;transform:translateY(var(--sharing-enter-y))}to{opacity:1;transform:translateY(0)}}@keyframes _sharing-exit_1xgl6_1{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(var(--sharing-exit-y))}}@media (prefers-reduced-motion:reduce){._Dialog_1xgl6_61[data-state],._ModalHost_1xgl6_1 ._FrameHost_1xgl6_28>._Frame_1xgl6_28,._ModalHost_1xgl6_1 ._FrameHost_1xgl6_28>._Glass_1xgl6_60{animation:none}._FrameHost_1xgl6_28{transition:none}}._Avatar_1qach_1{--avatar-radius:50%;--avatar-font-size-scaling:.4;--avatar-overflow-font-size-scaling-one:.4;--avatar-overflow-font-size-scaling-two:.32;--avatar-overflow-font-size-scaling-three:.28;--avatar-image-border-color:var(--lightningcss-light,#00000014)var(--lightningcss-dark,#ffffff1f);--font-weight-semibold:600;width:var(--avatar-size);height:var(--avatar-size);border-radius:var(--avatar-radius);transition:background-color .3s var(--cubic-enter);-webkit-user-select:none;user-select:none;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;display:inline-flex;position:relative;overflow:hidden}._Avatar_1qach_1[type=button]{cursor:pointer}._Avatar_1qach_1[type=button]:focus-visible{outline:2px solid var(--avatar-ring-color);outline-offset:2px}._Avatar_1qach_1{color:var(--lightningcss-light,#5d5d5d)var(--lightningcss-dark,#d1d1d1);background-color:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f)}._AvatarImageContainer_1qach_47{border-radius:inherit}._AvatarImageContainer_1qach_47:after{border:1px solid var(--avatar-image-border-color);border-radius:inherit;content:\"\";pointer-events:none;display:block;position:absolute;inset:0}._AvatarImage_1qach_47{border-radius:inherit;object-fit:cover;opacity:0;pointer-events:none;width:100%;height:100%;transition:all .15s;position:absolute;top:0;left:0}._AvatarImage_1qach_47[data-loaded]{opacity:1}._AvatarInitial_1qach_79{font-size:calc(var(--avatar-size) * var(--avatar-font-size-scaling));font-weight:var(--font-weight-semibold)}._AvatarInitial_1qach_79[data-letter-count=\"2\"]{font-size:calc(var(--avatar-size) * var(--avatar-font-size-scaling) * .75)}._AvatarOverflowCount_1qach_90{font-size:calc(var(--avatar-size) * var(--avatar-overflow-font-size-scaling-three));font-weight:var(--font-weight-semibold)}._AvatarOverflowCount_1qach_90[data-letter-count=\"2\"]{font-size:calc(var(--avatar-size) * var(--avatar-overflow-font-size-scaling-two))}._AvatarOverflowCount_1qach_90[data-letter-count=\"1\"]{font-size:calc(var(--avatar-size) * var(--avatar-overflow-font-size-scaling-one))}._AvatarOverflowCountSymbol_1qach_113{top:calc(-1 * var(--avatar-size) / 24);margin-left:-1px;position:relative}._AvatarIcon_1qach_119{font-size:calc(var(--avatar-size) * .7);flex-grow:0;flex-shrink:0;display:block}._LoadingIndicator_1mmfp_1{width:var(--indicator-size,1em);height:var(--indicator-size,1em);animation:_rotate_1mmfp_1 var(--indicator-rotate-duration,.8s) linear infinite;flex-shrink:0;transition:opacity .15s;display:inline-block;position:relative}._LoadingIndicator_1mmfp_1:before{border:var(--indicator-stroke,2px) solid var(--indicator-color,currentcolor);content:\"\";border-radius:50%;display:block;position:absolute;inset:0;-webkit-mask-image:conic-gradient(#0000,#000);mask-image:conic-gradient(#0000,#000)}._LoadingIndicator_1mmfp_1:after{width:var(--indicator-stroke,2px);height:var(--indicator-stroke,2px);margin-left:calc(var(--indicator-stroke,2px) * -1 / 2);background-color:var(--indicator-color,currentcolor);content:\"\";border-radius:100%;display:block;position:absolute;top:0;left:50%}@keyframes _rotate_1mmfp_1{0%{transform:rotate(0)}to{transform:rotate(1turn)}}._Trigger_1a8mc_3{color:var(--lightningcss-light,#171717)var(--lightningcss-dark,#f3f3f3);border-radius:8px;gap:8px;max-width:100%;font-size:14px}._Trigger_1a8mc_3[data-variant],._Action_1a8mc_11[data-variant]{--button-background-color-active:var(--lightningcss-light,#0000001a)var(--lightningcss-dark,#ffffff2e)}._Trigger_1a8mc_3:before{background:0 0}._Trigger_1a8mc_3[aria-busy=true]{opacity:1;cursor:wait}._Trigger_1a8mc_3:not(:disabled):hover:before,._Trigger_1a8mc_3[data-state=open]:before{background:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f)}._Trigger_1a8mc_3 ._Chevron_1a8mc_28{color:var(--lightningcss-light,#777)var(--lightningcss-dark,#aaa);flex-shrink:0;width:14px;height:14px}._Label_1a8mc_34{text-overflow:ellipsis;overflow:hidden}._Thumbnail_1a8mc_38{background:0 0;border-radius:8px;flex-shrink:0;justify-content:center;align-items:center;width:28px;height:28px;display:inline-flex}._Thumbnail_1a8mc_38 svg{width:20px;height:20px}._MenuList_1a8mc_52{pointer-events:auto;box-sizing:border-box;width:max-content;min-width:220px;max-width:min(360px,100vw - 24px);max-height:var(--radix-popover-content-available-height);color:var(--lightningcss-light,#171717)var(--lightningcss-dark,#f3f3f3);transform-origin:var(--radix-popover-content-transform-origin);-webkit-user-select:none;user-select:none;z-index:1;background:var(--lightningcss-light,#fff)var(--lightningcss-dark,#292929);border-radius:14px;font:14px/20px ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;animation:.18s cubic-bezier(.19,1,.22,1) _enter_1a8mc_1;overflow:auto;box-shadow:0 8px 28px #00000029,0 0 0 1px var(--lightningcss-light,#00000014)var(--lightningcss-dark,#ffffff1f)}._MenuList_1a8mc_52:focus,._OptionsList_1a8mc_78:focus{outline:none}._OptionsList_1a8mc_78{padding:6px}._Option_1a8mc_78{cursor:pointer;overflow-wrap:anywhere;padding:10px;scroll-margin:15px 0;position:relative}._Option_1a8mc_78:before{content:\"\";opacity:0;background:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f);border-radius:8px;display:block;position:absolute;inset:0;transform:scale(.98)}._Option_1a8mc_78[data-highlight]:before{opacity:1;transform:scale(1)}._Option_1a8mc_78[data-highlight]:active:before{transform:scale(.98)}._Option_1a8mc_78[data-disabled]{cursor:not-allowed;opacity:.5}._Option_1a8mc_78[data-disabled]:before{display:none}._Option_1a8mc_78[aria-busy=true]{cursor:wait;opacity:1}._Option_1a8mc_78[aria-busy=true]:before{display:block}._OptionInner_1a8mc_122{align-items:center;gap:10px;display:flex;position:relative}._OptionInner_1a8mc_122>svg{flex-shrink:0;width:20px;height:20px}._OptionText_1a8mc_133{flex-direction:column;flex:1;min-width:0;display:flex}._Description_1a8mc_139{color:var(--lightningcss-light,#6e6e6e)var(--lightningcss-dark,#aaa);font-size:12px;font-weight:400;line-height:18px}._OptionIndicatorSlot_1a8mc_145{flex-shrink:0;width:16px;height:16px;margin-inline-start:auto;display:flex}._OptionIndicatorSlot_1a8mc_145 svg{width:16px;height:16px}._ActionsContainer_1a8mc_156{border-top:1px solid var(--lightningcss-light,#eee)var(--lightningcss-dark,#444);padding:6px}._Action_1a8mc_11{color:var(--lightningcss-light,#b42318)var(--lightningcss-dark,#ff8583);border-radius:8px;width:100%;font-size:14px}._Action_1a8mc_11>span{justify-content:flex-start}._Action_1a8mc_11:before{transition-property:transform}._ActionIndicator_1a8mc_172{color:var(--lightningcss-light,#6e6e6e)var(--lightningcss-dark,#aaa);margin-inline-start:auto}._Action_1a8mc_11:not(:disabled):hover:before{background:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f)}@keyframes _enter_1a8mc_1{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@media (prefers-reduced-motion:reduce){._MenuList_1a8mc_52{animation:none}}._Container_1btyj_2{color:var(--lightningcss-light,#171717)var(--lightningcss-dark,#f3f3f3);cursor:text;width:100%;font-size:inherit;border-radius:12px;align-items:center;font-weight:400;transition:box-shadow .15s;display:flex;box-shadow:inset 0 0 0 1px var(--lightningcss-light,#dedede)var(--lightningcss-dark,#555)}._Container_1btyj_2:not([data-disabled]):hover{box-shadow:inset 0 0 0 1px var(--lightningcss-light,#aaa)var(--lightningcss-dark,#777)}._Container_1btyj_2[data-focused=true]{box-shadow:inset 0 0 0 1px var(--lightningcss-light,#171717)var(--lightningcss-dark,#ddd)}._Container_1btyj_2[data-disabled]{opacity:.5;cursor:default}._Input_1btyj_24{appearance:none;border-radius:inherit;box-sizing:border-box;color:inherit;font:inherit;background:0 0;border:0;outline:none;width:100%;min-width:0;height:40px;padding:0 16px}._Input_1btyj_24::placeholder{color:var(--lightningcss-light,#8f8f8f)var(--lightningcss-dark,#aaa)}._Input_1btyj_24::-webkit-search-cancel-button{appearance:none}\n/*$vite$:1*/";
      const _ = document.createElement("div");
      _.className = Tt.Theme;
      const S = document.createElement("div");
      S.className = De(Tt.Theme, Tt.Portal), S.lang = h, S.dir = Ba(h), m.append(g, p, _, S);
      const w = await s7(h);
      if (l.isConnected) {
        if (!r.isolatedDocument && typeof l.showPopover == "function") {
          l.popover = "manual";
          try {
            l.showPopover(), l.matches(":popover-open") || l.removeAttribute("popover");
          } catch {
            l.removeAttribute("popover");
          }
        }
        await new Promise((A, T) => {
          u = (0, u7.createRoot)(_, { onUncaughtError: T }), u.render(/* @__PURE__ */ (0, b.jsx)(NE, {
            locale: h,
            defaultLocale: So,
            messages: w,
            onError: (C) => {
              if (C.code !== "MISSING_TRANSLATION") throw C;
            },
            children: /* @__PURE__ */ (0, b.jsxs)(Ky, {
              container: S,
              children: [a({
                shadowHost: l,
                onDismiss: d
              }), /* @__PURE__ */ (0, b.jsx)(c7, { onMount: A })]
            })
          }));
        });
      }
    })(),
    dispose: d
  };
}
var f7 = bn({
  type: Td("sites-toolbar-summary"),
  label: Ct().min(1).max(256),
  icon: Da([
    "lock",
    "globe",
    "people",
    "building"
  ])
}).strict(), d7 = bn({
  type: Da(["sites-toolbar-open-sharing", "sites-toolbar-close-sharing"]),
  placement: Da(["top", "bottom"]).optional()
}).strict(), h7 = bn({ type: Td("sites-toolbar-sharing-closed") }).strict(), m7 = bn({
  type: Td("sites-toolbar-sharing-size"),
  height: Ag().finite().positive().max(1e4)
}).strict();
function Sb(e, a, r) {
  return a !== null && e.source === a && e.origin === r;
}
function v7() {
  return pd()((e) => ({
    sharingOpen: !1,
    placement: "bottom",
    summary: null,
    actions: {
      openSharing: (a) => e({
        sharingOpen: !0,
        placement: a
      }),
      closeSharing: () => e({ sharingOpen: !1 }),
      setSummary: (a) => e({ summary: a })
    }
  }));
}
var p7 = "_ModalHost_1xgl6_1", g7 = "_FrameHost_1xgl6_28", y7 = "_Glass_1xgl6_60", b7 = "_Dialog_1xgl6_61", _7 = "_Frame_1xgl6_28", S7 = "_Root_1xgl6_98", E7 = "_Body_1xgl6_143", w7 = "_Header_1xgl6_148", T7 = "_AccessList_1xgl6_154", C7 = "_AccessListContent_1xgl6_175", A7 = "_Title_1xgl6_178", x7 = "_Section_1xgl6_188", O7 = "_Results_1xgl6_193", M7 = "_Result_1xgl6_193", R7 = "_Person_1xgl6_236", N7 = "_GroupAvatar_1xgl6_242", D7 = "_Identity_1xgl6_251", z7 = "_Secondary_1xgl6_258", H7 = "_Role_1xgl6_262", L7 = "_AccessMode_1xgl6_271", j7 = "_AccessModeLabel_1xgl6_279", B7 = "_AccessModeIcon_1xgl6_286", U7 = "_ReadOnlyRole_1xgl6_299", P7 = "_Footer_1xgl6_303", Z7 = "_Copy_1xgl6_309", G7 = "_Notice_1xgl6_332", k7 = "_SearchHint_1xgl6_337", I7 = "_SearchLoading_1xgl6_341", $7 = "_EmptyResults_1xgl6_347", pe = {
  ModalHost: p7,
  FrameHost: g7,
  Glass: y7,
  Dialog: b7,
  Frame: _7,
  "sharing-exit": "_sharing-exit_1xgl6_1",
  "sharing-enter": "_sharing-enter_1xgl6_1",
  Root: S7,
  "sharing-retain": "_sharing-retain_1xgl6_1",
  Body: E7,
  Header: w7,
  AccessList: T7,
  AccessListContent: C7,
  Title: A7,
  Section: x7,
  Results: O7,
  Result: M7,
  Person: R7,
  GroupAvatar: N7,
  Identity: D7,
  Secondary: z7,
  Role: H7,
  AccessMode: L7,
  AccessModeLabel: j7,
  AccessModeIcon: B7,
  ReadOnlyRole: U7,
  Footer: P7,
  Copy: Z7,
  Error: "_Error_1xgl6_326",
  Notice: G7,
  SearchHint: k7,
  SearchLoading: I7,
  EmptyResults: $7
};
function q7({ context: e, config: a, siteTitle: r }) {
  const l = Ie(), u = (0, y.useRef)(null), c = (0, y.useRef)(null), d = (0, y.useRef)(null), [h] = (0, y.useState)(() => v7()), { sharingOpen: m, placement: g, summary: p, actions: _ } = Nu(h), [S, w] = (0, y.useState)(null), [A, T] = (0, y.useState)(null), C = new URL("/", e.toolbarOrigin);
  C.searchParams.set("site_origin", window.location.origin), C.hash = new URLSearchParams({
    account_id: e.accountId ?? "",
    locale: e.locale
  }).toString();
  const R = (0, y.useCallback)(() => {
    u.current?.contentWindow?.postMessage({ type: "sites-toolbar-close-sharing" }, e.toolbarOrigin), _.closeSharing();
  }, [e.toolbarOrigin, _]);
  (0, y.useLayoutEffect)(() => {
    const H = c.current;
    if (H) {
      if (m)
        H.close(), H.showModal(), u.current?.focus();
      else if (H.matches(":modal")) {
        H.close(), H.show();
        const D = requestAnimationFrame(() => {
          (d.current?.isConnected ? d.current : H.querySelector("[data-toolbar-sharing-trigger]"))?.focus({ preventScroll: !0 });
        });
        return () => cancelAnimationFrame(D);
      }
    }
  }, [m]), (0, y.useLayoutEffect)(() => {
    if (!m) return;
    const H = c.current, D = u.current?.parentElement;
    if (!H || !D) return;
    let U = null;
    const L = () => {
      const I = H.querySelector("[data-toolbar-sharing-close]");
      if (!I) return;
      const te = I.closest("[data-corner]") ?? I;
      te !== U && (U && Q.unobserve(U), U = te, Q.observe(U), ee.observe(U, {
        attributes: !0,
        attributeFilter: ["style", "data-corner"]
      }));
      const k = I.getBoundingClientRect(), B = U.dataset.corner, J = V7(B, k, D.offsetWidth);
      D.style.left = `${Math.max(4, Math.min(J, window.innerWidth - D.offsetWidth - 4))}px`, D.style.right = "auto", D.style.top = g === "top" ? `${k.bottom}px` : "auto", D.style.bottom = g === "bottom" ? `${window.innerHeight - k.top}px` : "auto";
      const ne = window.visualViewport, me = ne?.offsetTop ?? 0, z = me + (ne?.height ?? window.innerHeight), q = g === "top" ? z - k.bottom : k.top - me;
      D.style.height = `${Math.max(0, q - 4)}px`;
    }, Q = new ResizeObserver(L);
    Q.observe(D);
    const ee = new MutationObserver(L);
    return ee.observe(H, {
      childList: !0,
      subtree: !0
    }), window.addEventListener("resize", L), window.visualViewport?.addEventListener("resize", L), window.visualViewport?.addEventListener("scroll", L), L(), () => {
      Q.disconnect(), ee.disconnect(), window.removeEventListener("resize", L), window.visualViewport?.removeEventListener("resize", L), window.visualViewport?.removeEventListener("scroll", L);
    };
  }, [m, g]), (0, y.useEffect)(() => {
    const H = (D) => {
      if (!Sb(D, u.current?.contentWindow ?? null, e.toolbarOrigin)) return;
      const U = f7.safeParse(D.data);
      if (U.success) _.setSummary(U.data);
      else if (h7.safeParse(D.data).success) R();
      else {
        const L = m7.safeParse(D.data);
        L.success && T(L.data.height);
      }
    };
    return window.addEventListener("message", H), () => window.removeEventListener("message", H);
  }, [
    e.toolbarOrigin,
    R,
    _
  ]);
  const N = (H) => {
    d.current = H;
    const D = H?.getBoundingClientRect(), U = D && D.top + D.height / 2 < window.innerHeight / 2 ? "top" : "bottom";
    _.openSharing(U), u.current?.contentWindow?.postMessage({
      type: "sites-toolbar-open-sharing",
      placement: U
    }, e.toolbarOrigin);
  };
  return /* @__PURE__ */ (0, b.jsxs)("dialog", {
    open: !0,
    ref: c,
    className: pe.ModalHost,
    "data-sharing-open": m ? "" : void 0,
    role: m ? "dialog" : "presentation",
    "aria-label": m ? l.formatMessage(oe.share) : void 0,
    onCancel: (H) => {
      H.preventDefault(), R();
    },
    onClick: (H) => {
      H.target === H.currentTarget && m && R();
    },
    children: [
      p && S && /* @__PURE__ */ (0, b.jsx)(Ky, {
        container: S,
        children: /* @__PURE__ */ (0, b.jsx)(bb, {
          accountId: e.accountId,
          chatgptOrigin: e.chatgptOrigin,
          projectId: e.projectId,
          siteTitle: r,
          config: a,
          toolbar: {
            currentUserRole: e.currentUserRole ?? "owner",
            summary: p,
            openSharing: N,
            sharingOpen: m,
            closeSharing: R,
            settingsUrl: K8(e)?.toString(),
            remixUrl: Wu({
              accountId: e.accountId,
              chatgptOrigin: e.chatgptOrigin,
              query: l.formatMessage(oe.remixPrompt, { site: gr(r, e.projectId) })
            }).toString()
          }
        })
      }),
      /* @__PURE__ */ (0, b.jsx)("div", { ref: w }),
      /* @__PURE__ */ (0, b.jsxs)("div", {
        className: pe.FrameHost,
        "data-placement": g,
        "data-panel-ready": A !== null ? "" : void 0,
        inert: !m,
        "aria-hidden": !m,
        children: [A !== null && /* @__PURE__ */ (0, b.jsx)("div", {
          className: pe.Glass,
          "aria-hidden": "true",
          style: { height: A }
        }), /* @__PURE__ */ (0, b.jsx)("iframe", {
          ref: u,
          title: l.formatMessage(oe.share),
          src: C.toString(),
          className: pe.Frame,
          allow: "clipboard-write",
          referrerPolicy: "no-referrer",
          sandbox: "allow-scripts allow-same-origin"
        })]
      })
    ]
  });
}
function V7(e, a, r) {
  return e?.endsWith("left") ? a.left - 12 : e?.endsWith("center") ? (a.left + a.right - r) / 2 : a.right + 12 - r;
}
var ld = bn({
  account_user_id: Ct(),
  name: Ct().nullable().optional(),
  email: Ct().nullable().optional(),
  avatar_url: Ct().nullable().optional(),
  role: Da([
    "owner",
    "editor",
    "viewer"
  ]).nullable().optional(),
  is_external: Na().nullable().optional()
}), ud = bn({
  id: Ct(),
  name: Ct(),
  size: Ag(),
  role: Da(["viewer", "editor"]).nullable().optional()
}), _p = bn({
  project_id: Ct(),
  title: Ct(),
  url: Ct().nullable(),
  workspace_name: Ct().nullable().optional(),
  available_access_modes: Dn(Da([
    "custom",
    "workspace_all",
    "public"
  ])).nullable(),
  can_invite_external_visitors: Na(),
  can_manage_editors: Na(),
  can_manage_access: Na().default(!0),
  has_private_tunnels: Na(),
  access_policy: bn({
    access_mode: Da([
      "custom",
      "workspace_all",
      "public",
      "admins_only"
    ]),
    allowed_users: Dn(ld),
    allowed_editors: Dn(ld).default([]),
    allowed_groups: Dn(ud),
    allowed_workspace_group_ids: Dn(Ct()),
    allowed_tenant_group_ids: Dn(Ct())
  }).nullable()
}), F7 = bn({
  users: Dn(ld),
  workspace_groups: Dn(ud),
  tenant_groups: Dn(ud),
  has_more_users: Na(),
  has_more_groups: Na()
});
function X7(e, a) {
  async function r(l, u, c) {
    const d = await fetch(new URL(`/_internal/sites_widget/${l}`, e), {
      method: "POST",
      credentials: "include",
      cache: "no-store",
      redirect: "error",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(u),
      signal: c ? AbortSignal.any([c, AbortSignal.timeout(15e3)]) : AbortSignal.timeout(15e3)
    });
    if (!d.ok)
      throw await d.body?.cancel(), new Error("Toolbar request failed");
    return d;
  }
  return {
    logInteraction(l) {
      st(l, e);
    },
    async load() {
      return await (await r("auth/session", {})).body?.cancel(), _p.parse(await (await r("access", {})).json());
    },
    async save(l) {
      return await a(), _p.parse(await (await r("access/save", l)).json());
    },
    async search(l, u) {
      return F7.parse(await (await r("access/search", {
        query: l,
        limit: 20,
        offset: 0
      }, u)).json());
    }
  };
}
function Qu(e) {
  const a = e.access_policy;
  if (!a) return [];
  const r = new Map(a.allowed_users.map((l) => [l.account_user_id, l]));
  for (const l of a.allowed_editors) r.get(l.account_user_id)?.role !== "owner" && r.set(l.account_user_id, {
    ...l,
    role: "editor"
  });
  return [...r.values()].sort((l, u) => +(u.role === "owner") - +(l.role === "owner"));
}
function Sp(e, a, r) {
  if (e.role === "owner") throw new Error("Cannot change Site ownership");
  if (e.is_external) {
    if (a === "editor") throw new Error("External visitors cannot edit");
    if (r.some((c) => !c.email)) throw new Error("Incomplete sharing recipients");
    return { allowed_user_emails: r.filter((c) => c.email && c.account_user_id !== e.account_user_id).map((c) => c.email) };
  }
  const l = e.account_user_id, u = { viewer_changes: { remove_viewer_account_user_ids: [l] } };
  return a === "viewer" && (u.viewer_changes = { add_viewer_account_user_ids: [l] }), a === "editor" ? u.editor_changes = { add_editor_account_user_ids: [l] } : e.role === "editor" && (u.editor_changes = { remove_editor_account_user_ids: [l] }), u;
}
var Y7 = "_Avatar_1qach_1", W7 = "_AvatarImageContainer_1qach_47", Q7 = "_AvatarImage_1qach_47", K7 = "_AvatarInitial_1qach_79", J7 = "_AvatarOverflowCount_1qach_90", ex = "_AvatarOverflowCountSymbol_1qach_113", tx = "_AvatarIcon_1qach_119", vi = {
  Avatar: Y7,
  AvatarImageContainer: W7,
  AvatarImage: Q7,
  AvatarInitial: K7,
  AvatarOverflowCount: J7,
  AvatarOverflowCountSymbol: ex,
  AvatarIcon: tx
}, Ru = (e) => {
  const a = ax(e.imageUrl);
  return /* @__PURE__ */ (0, b.jsx)(nx, {
    ...e,
    imageUrl: a
  });
}, nx = (e) => {
  const { className: a, size: r, overflowCount: l, name: u, initials: c = "first", color: d = "secondary", variant: h = "soft", imageUrl: m, Icon: g, tooltipComponent: p, ..._ } = e, [S, w] = (0, y.useState)(), A = (0, y.useRef)(m);
  (0, y.useEffect)(() => {
    m !== A.current && ((S === "error" || !m) && w(void 0), A.current = m);
  }, [m, S]);
  const T = !!(_.onPointerDown || _.onClick), C = /* @__PURE__ */ (0, b.jsx)(T ? "button" : "span", {
    className: De(vi.Avatar, a),
    style: { "--avatar-size": `${r ?? 40}px` },
    role: T ? void 0 : "presentation",
    "data-color": d,
    "data-variant": h,
    type: T ? "button" : void 0,
    ..._,
    children: m && S !== "error" ? /* @__PURE__ */ (0, b.jsx)(ix, {
      status: S,
      url: m,
      onError: () => w("error"),
      onLoad: () => w("loaded")
    }) : g ? /* @__PURE__ */ (0, b.jsx)(g, { className: vi.AvatarIcon }) : l ? /* @__PURE__ */ (0, b.jsx)(ox, { count: l }) : /* @__PURE__ */ (0, b.jsx)(rx, {
      name: u,
      initials: c
    })
  });
  return !u || !p ? C : /* @__PURE__ */ (0, b.jsx)(p, {
    content: u,
    children: C
  });
}, ax = (e) => {
  if (e?.startsWith("https://") && !(e.includes("gravatar.com") && e.includes("cdn.auth0.com")))
    return e;
}, ix = ({ url: e, status: a, onLoad: r, onError: l }) => /* @__PURE__ */ (0, b.jsx)("span", {
  className: vi.AvatarImageContainer,
  children: /* @__PURE__ */ (0, b.jsx)("img", {
    src: e,
    referrerPolicy: "no-referrer",
    className: vi.AvatarImage,
    "data-loaded": a === "loaded" ? "" : void 0,
    onLoad: r,
    onError: l,
    alt: "",
    role: "presentation"
  })
}), rx = ({ name: e = "", initials: a }) => {
  const r = (0, y.useMemo)(() => {
    if (a === "firstlast") {
      const l = e.trim().split(/\s+/);
      return ([...l[0].toUpperCase()][0] ?? "") + (l.length > 1 ? [...l[l.length - 1].toUpperCase()][0] : "");
    } else
      return e.charAt(0).toUpperCase();
  }, [e, a]);
  return /* @__PURE__ */ (0, b.jsx)("span", {
    className: vi.AvatarInitial,
    "data-letter-count": a === "firstlast" ? [...r].length : void 0,
    children: r
  });
}, ox = ({ count: e }) => {
  const a = (0, y.useMemo)(() => new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 0
  }).format(e).toLocaleLowerCase(), [e]);
  return /* @__PURE__ */ (0, b.jsxs)("span", {
    className: vi.AvatarOverflowCount,
    "data-letter-count": a.length,
    children: [/* @__PURE__ */ (0, b.jsx)("span", {
      className: vi.AvatarOverflowCountSymbol,
      children: "+"
    }), a]
  });
}, lx = "_LoadingIndicator_1mmfp_1", ux = "_rotate_1mmfp_1", sx = {
  LoadingIndicator: lx,
  rotate: ux
};
function sd({ className: e, size: a }) {
  return /* @__PURE__ */ (0, b.jsx)("span", {
    "aria-hidden": "true",
    className: De(sx.LoadingIndicator, e),
    style: a === void 0 ? void 0 : { "--indicator-size": `${a}px` }
  });
}
var Eb = (e) => /* @__PURE__ */ (0, b.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, b.jsx)("path", {
    fillRule: "evenodd",
    d: "M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263Z",
    clipRule: "evenodd"
  })
}), cx = (e) => /* @__PURE__ */ (0, b.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, b.jsx)("path", {
    fillRule: "evenodd",
    d: "M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z",
    clipRule: "evenodd"
  })
}), fx = "_Trigger_1a8mc_3", dx = "_Action_1a8mc_11", hx = "_Chevron_1a8mc_28", mx = "_Label_1a8mc_34", vx = "_Thumbnail_1a8mc_38", px = "_MenuList_1a8mc_52", gx = "_enter_1a8mc_1", yx = "_OptionsList_1a8mc_78", bx = "_Option_1a8mc_78", _x = "_OptionInner_1a8mc_122", Sx = "_OptionText_1a8mc_133", Ex = "_Description_1a8mc_139", wx = "_OptionIndicatorSlot_1a8mc_145", Tx = "_ActionsContainer_1a8mc_156", Cx = "_ActionIndicator_1a8mc_172", Ht = {
  Trigger: fx,
  Action: dx,
  Chevron: hx,
  Label: mx,
  Thumbnail: vx,
  MenuList: px,
  enter: gx,
  OptionsList: yx,
  Option: bx,
  OptionInner: _x,
  OptionText: Sx,
  Description: Ex,
  OptionIndicatorSlot: wx,
  ActionsContainer: Tx,
  ActionIndicator: Cx
};
function Hf({ value: e, options: a, onChange: r, disabled: l, loading: u = !1, className: c, align: d = "start", pill: h = !0, action: m, ...g }) {
  const [p, _] = (0, y.useState)(!1), [S, w] = (0, y.useState)(null), A = (0, y.useRef)(!1), T = u || S !== null, [C, R] = (0, y.useState)(e), N = (0, y.useRef)(null), H = (0, y.useRef)(null), D = Lo(), U = (0, y.useId)(), L = (0, y.useRef)({
    text: "",
    time: 0
  }), Q = S?.previousValue ?? e, ee = a.find((z) => z.value === Q), I = a.filter((z) => !z.disabled), te = (z) => `${U}-${encodeURIComponent(z)}`, k = (z) => {
    T || A.current || l && z || (z && (R(I.find((q) => q.value === e)?.value ?? I[0]?.value ?? e), L.current = {
      text: "",
      time: 0
    }), _(z));
  }, B = async (z, q) => {
    if (l || T || A.current) return;
    const V = performance.now();
    A.current = !0, w({
      ...z,
      previousValue: e
    });
    try {
      await q();
    } finally {
      const se = 400 - (performance.now() - V);
      se > 0 && await new Promise((ge) => window.setTimeout(ge, se)), A.current = !1, w(null), _(!1);
    }
  }, J = (z) => {
    l || T || A.current || z.disabled || (R(z.value), B({ value: z.value }, () => r(z)));
  }, ne = (z) => {
    z && (R(z.value), H.current?.querySelector(`#${CSS.escape(te(z.value))}`)?.scrollIntoView({ block: "nearest" }));
  };
  function me(z) {
    return S && "value" in S && S.value === z.value ? /* @__PURE__ */ (0, b.jsx)(sd, { size: 16 }) : !S && z.value === e ? /* @__PURE__ */ (0, b.jsx)(Eb, {}) : null;
  }
  return /* @__PURE__ */ (0, b.jsxs)($u, {
    open: p,
    onOpenChange: k,
    children: [/* @__PURE__ */ (0, b.jsx)(Xd, {
      asChild: !0,
      children: /* @__PURE__ */ (0, b.jsxs)(At, {
        pill: h,
        ref: N,
        className: De(Ht.Trigger, c),
        variant: "ghost",
        color: "secondary",
        disabled: l || T,
        "aria-busy": T || void 0,
        ...g,
        "aria-haspopup": "listbox",
        "aria-controls": p ? U : void 0,
        onKeyDown: (z) => {
          (z.key === "ArrowDown" || z.key === "ArrowUp") && (z.preventDefault(), z.stopPropagation(), k(!0));
        },
        children: [
          ee?.icon && /* @__PURE__ */ (0, b.jsx)("span", {
            className: Ht.Thumbnail,
            children: ee.icon
          }),
          /* @__PURE__ */ (0, b.jsx)("span", {
            className: Ht.Label,
            children: ee?.label
          }),
          /* @__PURE__ */ (0, b.jsx)(cx, {
            className: Ht.Chevron,
            "data-no-autosize": !0
          })
        ]
      })
    }), /* @__PURE__ */ (0, b.jsx)(qu, {
      container: N.current?.closest('[role="dialog"]') ?? D,
      children: /* @__PURE__ */ (0, b.jsxs)(Vu, {
        className: Ht.MenuList,
        align: d,
        sideOffset: 5,
        collisionPadding: 12,
        onOpenAutoFocus: (z) => {
          z.preventDefault(), H.current?.focus({ preventScroll: !0 });
        },
        onEscapeKeyDown: (z) => {
          z.stopPropagation(), T && z.preventDefault();
        },
        onInteractOutside: (z) => {
          T && z.preventDefault();
        },
        children: [/* @__PURE__ */ (0, b.jsx)("div", {
          ref: H,
          id: U,
          className: Ht.OptionsList,
          role: "listbox",
          "aria-busy": T || void 0,
          "aria-disabled": l || T,
          tabIndex: 0,
          ...g,
          "aria-activedescendant": a.some((z) => z.value === C) ? te(C) : void 0,
          onKeyDown: (z) => {
            if (l || T) {
              z.preventDefault();
              return;
            }
            const q = I.findIndex((V) => V.value === C);
            switch (z.key) {
              case "ArrowDown":
                z.preventDefault(), ne(I[Math.min(q + 1, I.length - 1)]);
                break;
              case "ArrowUp":
                z.preventDefault(), ne(I[Math.max(q - 1, 0)]);
                break;
              case "Home":
                z.preventDefault(), ne(I[0]);
                break;
              case "End":
                z.preventDefault(), ne(I.at(-1));
                break;
              case "Enter":
              case " ": {
                z.preventDefault();
                const V = I.find((se) => se.value === C);
                V && J(V);
                break;
              }
              default: {
                if (z.key.length !== 1 || z.ctrlKey || z.metaKey || z.altKey) return;
                z.preventDefault();
                const V = Date.now(), se = (V - L.current.time < 500 ? L.current.text : "") + z.key.toLocaleLowerCase();
                L.current = {
                  text: se,
                  time: V
                }, ne(I.find((ge) => ge.label.toLocaleLowerCase().startsWith(se)));
              }
            }
          },
          children: a.map((z) => /* @__PURE__ */ (0, b.jsx)("div", {
            id: te(z.value),
            className: Ht.Option,
            role: "option",
            "aria-selected": z.value === Q,
            "aria-busy": S !== null && "value" in S && S.value === z.value || void 0,
            "aria-disabled": l || T || z.disabled,
            "data-selected": z.value === Q ? "" : void 0,
            "data-highlight": z.value === C ? "" : void 0,
            "data-disabled": l || T || z.disabled ? "" : void 0,
            onPointerMove: () => {
              !l && !T && !z.disabled && R(z.value);
            },
            onClick: () => J(z),
            children: /* @__PURE__ */ (0, b.jsxs)("div", {
              className: Ht.OptionInner,
              children: [
                z.icon,
                /* @__PURE__ */ (0, b.jsxs)("span", {
                  className: Ht.OptionText,
                  children: [/* @__PURE__ */ (0, b.jsx)("span", { children: z.label }), z.description && /* @__PURE__ */ (0, b.jsx)("span", {
                    className: Ht.Description,
                    children: z.description
                  })]
                }),
                /* @__PURE__ */ (0, b.jsx)("span", {
                  className: Ht.OptionIndicatorSlot,
                  children: me(z)
                })
              ]
            })
          }, z.value))
        }), m && /* @__PURE__ */ (0, b.jsx)("div", {
          className: Ht.ActionsContainer,
          children: /* @__PURE__ */ (0, b.jsxs)(At, {
            variant: "ghost",
            color: "secondary",
            className: Ht.Action,
            disabled: l || T,
            onClick: () => {
              B({ action: !0 }, m.onSelect);
            },
            children: [m.label, S && "action" in S && /* @__PURE__ */ (0, b.jsx)(sd, {
              className: Ht.ActionIndicator,
              size: 16
            })]
          })
        })]
      })
    })]
  });
}
var wb = (e) => /* @__PURE__ */ (0, b.jsxs)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  ...e,
  children: [
    /* @__PURE__ */ (0, b.jsx)("path", {
      d: "M8.00002 8.6543C10.0676 8.65454 11.7647 10.2413 11.9405 12.2637C11.9655 12.5524 11.7515 12.8067 11.4629 12.832C11.1741 12.8571 10.9197 12.6433 10.8946 12.3545C10.7655 10.87 9.51819 9.70532 8.00002 9.70508C6.48179 9.70522 5.23552 10.87 5.10647 12.3545C5.08139 12.6432 4.8258 12.8568 4.53713 12.832C4.24852 12.8067 4.03452 12.5524 4.05959 12.2637C4.23531 10.2412 5.93232 8.65443 8.00002 8.6543Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, b.jsx)("path", {
      d: "M3.35744 8.87598C3.64673 8.85709 3.89611 9.07594 3.91506 9.36523C3.93395 9.65452 3.7151 9.9039 3.4258 9.92285C2.27831 9.99807 1.35691 10.9051 1.25783 12.0459C1.23271 12.3345 0.978105 12.5482 0.689475 12.5234C0.400692 12.4983 0.185993 12.2438 0.210959 11.9551C0.354799 10.2988 1.6914 8.98511 3.35744 8.87598Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, b.jsx)("path", {
      d: "M12.6367 8.87598C14.3028 8.9851 15.6394 10.2988 15.7832 11.9551C15.8082 12.2439 15.5935 12.4984 15.3047 12.5234C15.0161 12.5482 14.7615 12.3345 14.7364 12.0459C14.6373 10.9051 13.7159 9.99806 12.5684 9.92285C12.2791 9.90389 12.0602 9.65451 12.0791 9.36523C12.0981 9.07595 12.3475 8.8571 12.6367 8.87598Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, b.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.67092 4.30859C3.69683 4.3089 4.52927 5.14102 4.52932 6.16699C4.52905 7.19278 3.6967 8.02509 2.67092 8.02539C1.64488 8.02539 0.812786 7.19297 0.812522 6.16699C0.812574 5.14083 1.64475 4.30859 2.67092 4.30859ZM2.67092 5.35938C2.22465 5.35938 1.86238 5.72073 1.86233 6.16699C1.86259 6.61307 2.22478 6.97559 2.67092 6.97559C3.1168 6.97528 3.47827 6.61288 3.47854 6.16699C3.47848 5.72092 3.11693 5.35968 2.67092 5.35938Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, b.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.3242 4.30859C14.3504 4.30859 15.1826 5.14083 15.1826 6.16699C15.1824 7.19297 14.3503 8.02539 13.3242 8.02539C12.2983 8.02533 11.4661 7.19293 11.4658 6.16699C11.4659 5.14087 12.2981 4.30866 13.3242 4.30859ZM13.3242 5.35938C12.878 5.35944 12.5167 5.72077 12.5166 6.16699C12.5169 6.61303 12.8782 6.97552 13.3242 6.97559C13.7704 6.97559 14.1326 6.61307 14.1328 6.16699C14.1328 5.72073 13.7705 5.35938 13.3242 5.35938Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, b.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.00002 3.2793C9.26655 3.27955 10.2938 4.30668 10.294 5.57324C10.294 6.83991 9.26663 7.86694 8.00002 7.86719C6.7333 7.86707 5.70608 6.83999 5.70608 5.57324C5.7062 4.3066 6.73338 3.27942 8.00002 3.2793ZM8.00002 4.33008C7.31328 4.3302 6.75698 4.8865 6.75686 5.57324C6.75686 6.26009 7.3132 6.81726 8.00002 6.81738C8.68673 6.81713 9.24416 6.26001 9.24416 5.57324C9.24404 4.88658 8.68665 4.33033 8.00002 4.33008Z",
      fill: "currentColor"
    })
  ]
}), Ax = "_Container_1btyj_2", xx = "_Input_1btyj_24", Ep = {
  Container: Ax,
  Input: xx
};
function Ox({ className: e, id: a, disabled: r, onFocus: l, onBlur: u, ...c }) {
  const d = (0, y.useId)(), [h, m] = (0, y.useState)(!1);
  return /* @__PURE__ */ (0, b.jsx)("div", {
    className: De(Ep.Container, e),
    "data-focused": h,
    "data-disabled": r ? "" : void 0,
    children: /* @__PURE__ */ (0, b.jsx)("input", {
      ...c,
      id: a ?? `search-ui-input-${d}`,
      className: Ep.Input,
      disabled: r,
      onFocus: (g) => {
        m(!0), l?.(g);
      },
      onBlur: (g) => {
        m(!1), u?.(g);
      },
      "data-lpignore": !0,
      "data-1p-ignore": !0
    })
  });
}
function Mx({ access: e, api: a, saving: r, save: l }) {
  const u = Ie().formatMessage, [c, d] = (0, y.useState)(""), [h, m] = (0, y.useState)(null), [g, p] = (0, y.useState)(!1), [_, S] = (0, y.useState)(!1), w = (0, y.useRef)(null), A = (0, y.useRef)(null), T = (0, y.useId)(), C = c.trim(), R = !!C && !_, N = (k) => {
    const B = Array.from(A.current?.querySelectorAll("button:not(:disabled)") ?? []), J = B.findIndex((me) => me === document.activeElement);
    let ne = J + k;
    J < 0 && (ne = k === 1 ? 0 : B.length - 1), ne < 0 || ne >= B.length ? w.current?.focus() : B[ne]?.focus();
  };
  (0, y.useEffect)(() => {
    if (m(null), p(!1), !C) return;
    const k = new AbortController(), B = setTimeout(() => {
      a.search(C, k.signal).then((J) => {
        k.signal.aborted || m(J);
      }).catch(() => {
        k.signal.aborted || p(!0);
      });
    }, 250);
    return () => {
      clearTimeout(B), k.abort();
    };
  }, [a, C]);
  const H = e.access_policy;
  if (!H) return null;
  const D = Qu(e), U = h?.users.filter((k) => !D.some((B) => B.account_user_id === k.account_user_id)) ?? [], L = [...(h?.workspace_groups ?? []).map((k) => ({
    ...k,
    field: "allowed_workspace_group_ids"
  })), ...(h?.tenant_groups ?? []).map((k) => ({
    ...k,
    field: "allowed_tenant_group_ids"
  }))].filter((k) => !H.allowed_groups.some((B) => B.id === k.id)), Q = K4().safeParse(C), ee = h && e.can_invite_external_visitors && Q.success && ![...D, ...h.users].some((k) => k.email?.toLowerCase() === C.toLowerCase()) && H.allowed_users.every((k) => k.email), I = async (k) => {
    await l(k) && d("");
  };
  function te(k) {
    return g ? /* @__PURE__ */ (0, b.jsx)("p", {
      role: "alert",
      className: pe.Error,
      children: u(oe.searchError)
    }) : h ? /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [
      U.map((B) => /* @__PURE__ */ (0, b.jsxs)(At, {
        color: "secondary",
        variant: "ghost",
        className: pe.Result,
        disabled: r,
        onClick: () => {
          I({ viewer_changes: { add_viewer_account_user_ids: [B.account_user_id] } });
        },
        children: [/* @__PURE__ */ (0, b.jsx)(Ru, {
          size: 32,
          imageUrl: B.avatar_url ?? void 0,
          name: B.name || B.email || void 0
        }), /* @__PURE__ */ (0, b.jsxs)("span", {
          className: pe.Identity,
          children: [/* @__PURE__ */ (0, b.jsx)("span", { children: B.name || B.email }), /* @__PURE__ */ (0, b.jsx)("span", {
            className: pe.Secondary,
            children: B.email
          })]
        })]
      }, B.account_user_id)),
      L.map((B) => /* @__PURE__ */ (0, b.jsxs)(At, {
        color: "secondary",
        variant: "ghost",
        className: pe.Result,
        disabled: r,
        onClick: () => {
          I({ [B.field]: [...k[B.field], B.id] });
        },
        children: [/* @__PURE__ */ (0, b.jsx)(Ru, {
          size: 32,
          Icon: wb,
          className: pe.GroupAvatar
        }), /* @__PURE__ */ (0, b.jsxs)("span", {
          className: pe.Identity,
          children: [/* @__PURE__ */ (0, b.jsx)("span", { children: B.name }), /* @__PURE__ */ (0, b.jsx)("span", {
            className: pe.Secondary,
            children: u(oe.members, { count: B.size })
          })]
        })]
      }, `${B.field}:${B.id}`)),
      ee && /* @__PURE__ */ (0, b.jsx)(At, {
        color: "secondary",
        variant: "ghost",
        className: pe.Result,
        disabled: r,
        onClick: () => {
          I({ allowed_user_emails: [...k.allowed_users.flatMap((B) => B.email ? [B.email] : []), C] });
        },
        children: u(oe.invite, { email: C })
      }),
      !ee && U.length === 0 && L.length === 0 && /* @__PURE__ */ (0, b.jsx)("p", {
        className: pe.EmptyResults,
        children: u(oe.noResults)
      }),
      (h.has_more_users || h.has_more_groups) && /* @__PURE__ */ (0, b.jsx)("p", {
        className: `${pe.Notice} ${pe.SearchHint}`,
        children: u(oe.more)
      })
    ] }) : /* @__PURE__ */ (0, b.jsx)("p", {
      role: "status",
      "aria-label": u(oe.searching),
      className: `${pe.Notice} ${pe.SearchLoading}`,
      children: /* @__PURE__ */ (0, b.jsx)(sd, { size: 16 })
    });
  }
  return /* @__PURE__ */ (0, b.jsxs)($u, {
    open: R,
    onOpenChange: (k) => {
      r || S(!k);
    },
    children: [/* @__PURE__ */ (0, b.jsx)(Fd, {
      asChild: !0,
      children: /* @__PURE__ */ (0, b.jsx)("div", { children: /* @__PURE__ */ (0, b.jsx)(Ox, {
        ref: w,
        type: "search",
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "none",
        spellCheck: !1,
        "aria-label": u(oe.search),
        placeholder: u(oe.search),
        maxLength: 200,
        value: c,
        disabled: r,
        onChange: (k) => {
          S(!1), d(k.target.value), m(null), p(!1);
        },
        onFocus: () => S(!1),
        onKeyDown: (k) => {
          R && (k.key === "ArrowDown" || k.key === "ArrowUp") && (k.preventDefault(), N(k.key === "ArrowDown" ? 1 : -1));
        },
        "aria-haspopup": "dialog",
        "aria-expanded": R,
        "aria-controls": R ? T : void 0
      }) })
    }), /* @__PURE__ */ (0, b.jsx)(qu, {
      container: w.current?.closest('[role="dialog"]'),
      children: /* @__PURE__ */ (0, b.jsx)(Vu, {
        ref: A,
        id: T,
        className: pe.Results,
        "aria-label": u(oe.search),
        "aria-busy": r || !h && !g,
        align: "start",
        sideOffset: 6,
        collisionPadding: 12,
        onOpenAutoFocus: (k) => k.preventDefault(),
        onCloseAutoFocus: (k) => k.preventDefault(),
        onEscapeKeyDown: (k) => {
          k.stopPropagation(), r ? k.preventDefault() : w.current?.focus();
        },
        onInteractOutside: (k) => {
          (r || k.target === w.current) && k.preventDefault();
        },
        onKeyDown: (k) => {
          (k.key === "ArrowDown" || k.key === "ArrowUp") && (k.preventDefault(), r || N(k.key === "ArrowDown" ? 1 : -1));
        },
        children: te(H)
      })
    })]
  });
}
var Rx = (e) => /* @__PURE__ */ (0, b.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, b.jsx)("path", {
    d: "M18.2929 5.7071C16.4743 3.88849 13.5257 3.88849 11.7071 5.7071L10.7071 6.7071C10.3166 7.09763 9.68341 7.09763 9.29289 6.7071C8.90236 6.31658 8.90236 5.68341 9.29289 5.29289L10.2929 4.29289C12.8926 1.69322 17.1074 1.69322 19.7071 4.29289C22.3068 6.89255 22.3068 11.1074 19.7071 13.7071L18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071C16.9024 14.3166 16.9024 13.6834 17.2929 13.2929L18.2929 12.2929C20.1115 10.4743 20.1115 7.52572 18.2929 5.7071ZM15.7071 8.29289C16.0976 8.68341 16.0976 9.31658 15.7071 9.7071L9.7071 15.7071C9.31658 16.0976 8.68341 16.0976 8.29289 15.7071C7.90236 15.3166 7.90236 14.6834 8.29289 14.2929L14.2929 8.29289C14.6834 7.90236 15.3166 7.90236 15.7071 8.29289ZM6.7071 9.29289C7.09763 9.68341 7.09763 10.3166 6.7071 10.7071L5.7071 11.7071C3.88849 13.5257 3.88849 16.4743 5.7071 18.2929C7.52572 20.1115 10.4743 20.1115 12.2929 18.2929L13.2929 17.2929C13.6834 16.9024 14.3166 16.9024 14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071L13.7071 19.7071C11.1074 22.3068 6.89255 22.3068 4.29289 19.7071C1.69322 17.1074 1.69322 12.8926 4.29289 10.2929L5.29289 9.29289C5.68341 8.90236 6.31658 8.90236 6.7071 9.29289Z",
    fill: "currentColor"
  })
}), Nx = 400, Dx = 150, wp = 0.99, Ao = class extends Error {
  constructor() {
    super("Sharing requires an interaction with the visible dialog");
  }
};
function zx(e) {
  const a = e.ownerDocument, r = a.defaultView;
  let l = null, u = null, c = 0, d = !1;
  const h = "IntersectionObserverEntry" in r && "isVisible" in r.IntersectionObserverEntry.prototype, m = () => {
    u = null, c++;
  }, g = (w) => {
    for (const A of w) A.isIntersecting && A.intersectionRatio >= wp && A.boundingClientRect.width > 0 && A.boundingClientRect.height > 0 && (!h || A.isVisible === !0) ? u ??= performance.now() : m();
  }, p = new IntersectionObserver(g, {
    threshold: [wp],
    ...h ? {
      trackVisibility: !0,
      delay: 100
    } : {}
  });
  p.observe(e);
  const _ = () => {
    m(), p.takeRecords(), p.unobserve(e), d || p.observe(e);
  };
  a.addEventListener("visibilitychange", _), r.addEventListener("blur", _), r.addEventListener("focus", _);
  const S = (w) => {
    g(p.takeRecords());
    const A = w.getBoundingClientRect();
    return !d && e.isConnected && e.contains(w) && a.visibilityState === "visible" && a.hasFocus() && u !== null && performance.now() - u >= Nx && A.width > 0 && A.height > 0 && A.top >= 0 && A.left >= 0 && A.bottom <= r.innerHeight && A.right <= r.innerWidth;
  };
  return {
    capture(w) {
      l = w;
    },
    async authorize() {
      const w = l;
      l = null;
      const A = w?.type === "click" || w?.type === "keydown" && ["Enter", " "].includes(w.key) && !w.repeat;
      let T = w?.composedPath().find((N) => N instanceof Element)?.closest("button, [role=option], [role=listbox]");
      const C = T?.getAttribute("aria-activedescendant");
      if (C && (T = e.querySelector(`#${CSS.escape(C)}`)), !w?.isTrusted || w.eventPhase === Event.NONE || !A || !r.navigator.userActivation?.isActive || !T || !S(T)) throw new Ao();
      const R = c;
      if (await new Promise((N) => r.setTimeout(N, Dx)), !S(T) || c !== R) throw new Ao();
    },
    dispose() {
      d = !0, l = null, m(), p.disconnect(), a.removeEventListener("visibilitychange", _), r.removeEventListener("blur", _), r.removeEventListener("focus", _);
    }
  };
}
function Hx(e) {
  return pd()((a, r) => ({
    access: null,
    open: !1,
    placement: "bottom",
    mutation: null,
    error: null,
    actions: {
      load: async (l) => {
        try {
          const u = await e.load();
          !l.aborted && u.access_policy && a({ access: u });
        } catch {
        }
      },
      open: (l = "bottom") => {
        r().open || e.logInteraction("toolbar_sharing_opened"), a({
          open: !0,
          placement: l,
          error: null
        });
      },
      close: () => {
        r().open && e.logInteraction("toolbar_sharing_closed"), a({
          open: !1,
          error: null
        });
      },
      setError: (l) => a({ error: l }),
      save: async (l, u = null) => {
        if (r().mutation || r().access?.can_manage_access === !1) return !1;
        a({
          mutation: { control: u },
          error: null
        });
        const c = new Promise((d) => setTimeout(d, 400));
        try {
          const [d] = await Promise.all([e.save(l), c]);
          return a((h) => ({
            mutation: null,
            access: {
              ...d,
              workspace_name: d.workspace_name ?? h.access?.workspace_name
            }
          })), e.logInteraction("toolbar_sharing_update_succeeded"), !0;
        } catch (d) {
          return await c, a({
            mutation: null,
            error: d instanceof Ao ? "interactionRequired" : "error"
          }), e.logInteraction(d instanceof Ao ? "toolbar_sharing_update_blocked" : "toolbar_sharing_update_failed"), !1;
        }
      }
    }
  }));
}
function Lx({ siteOrigin: e }) {
  const a = Ie(), r = a.formatMessage, l = (0, y.useRef)(null), u = (0, y.useMemo)(() => X7(e, async () => {
    if (!l.current) throw new Ao();
    await l.current.authorize();
  }), [e]), { access: c, open: d, placement: h, mutation: m, error: g, actions: p } = Nu((0, y.useMemo)(() => Hx(u), [u])), { save: _ } = p, S = m !== null, w = c?.can_manage_access === !1, A = m?.control, [T, C] = (0, y.useState)(null);
  (0, y.useEffect)(() => {
    if (T === null) return;
    const B = window.setTimeout(() => C(null), 5e3);
    return () => window.clearTimeout(B);
  }, [T]);
  const [R, N] = (0, y.useState)(null);
  (0, y.useEffect)(() => {
    if (!d || !w || !R) return;
    const B = requestAnimationFrame(() => R.focus({ preventScroll: !0 }));
    return () => cancelAnimationFrame(B);
  }, [
    d,
    w,
    R
  ]), (0, y.useLayoutEffect)(() => {
    if (!R) return;
    const B = zx(R);
    return l.current = B, () => {
      l.current = null, B.dispose();
    };
  }, [R]), (0, y.useLayoutEffect)(() => {
    if (!R) return;
    const B = () => {
      window.parent.postMessage({
        type: "sites-toolbar-sharing-size",
        height: R.getBoundingClientRect().height
      }, e);
    }, J = new ResizeObserver(B);
    return J.observe(R), B(), () => J.disconnect();
  }, [R, e]), (0, y.useEffect)(() => {
    const B = (J) => {
      if (!Sb(J, window.parent, e)) return;
      const ne = d7.safeParse(J.data);
      ne.success && (ne.data.type === "sites-toolbar-open-sharing" ? p.open(ne.data.placement) : p.close(), C(null));
    };
    return window.addEventListener("message", B), () => window.removeEventListener("message", B);
  }, [e, p]), (0, y.useEffect)(() => {
    const B = new AbortController();
    return p.load(B.signal), () => B.abort();
  }, [p]);
  const H = c?.access_policy, D = c ? Qu(c) : [], U = c?.workspace_name || r(oe.workspace), L = H?.access_mode, Q = H?.allowed_groups ?? [];
  function ee() {
    return L === "admins_only" ? r(oe.admins) : L === "public" ? r(oe.public) : L === "workspace_all" ? U : Q.length ? r(oe.inviteOnly) : D.length > 1 ? r(oe.people, { count: D.length }) : r(oe.private);
  }
  function I() {
    return L === "public" ? "globe" : L === "workspace_all" ? "building" : Q.length || D.length > 1 ? "people" : "lock";
  }
  const te = ee(), k = I();
  return (0, y.useEffect)(() => {
    H && window.parent.postMessage({
      type: "sites-toolbar-summary",
      label: te.slice(0, 256),
      icon: k
    }, e);
  }, [
    H,
    te,
    k,
    e
  ]), !c || !H ? null : /* @__PURE__ */ (0, b.jsx)("div", {
    className: pe.Root,
    dir: Ba(a.locale),
    children: /* @__PURE__ */ (0, b.jsx)(H6, {
      modal: !1,
      open: d,
      onOpenChange: (B) => {
        B ? p.open(h) : p.close(), B || window.parent.postMessage({ type: "sites-toolbar-sharing-closed" }, e);
      },
      children: /* @__PURE__ */ (0, b.jsxs)(L6, {
        ref: N,
        onClickCapture: (B) => l.current?.capture(B.nativeEvent),
        onKeyDownCapture: (B) => l.current?.capture(B.nativeEvent),
        className: pe.Dialog,
        "data-placement": h,
        "data-read-only": w || void 0,
        "aria-describedby": void 0,
        onOpenAutoFocus: (B) => {
          w && B.preventDefault();
        },
        onCloseAutoFocus: (B) => {
          B.preventDefault();
        },
        children: [
          /* @__PURE__ */ (0, b.jsx)("div", {
            className: pe.Body,
            children: w ? /* @__PURE__ */ (0, b.jsx)(Bx, { access: c }) : /* @__PURE__ */ (0, b.jsx)(jx, {
              access: c,
              api: u,
              saving: S,
              savingControl: A,
              save: _
            })
          }),
          g && /* @__PURE__ */ (0, b.jsx)("p", {
            role: "alert",
            className: pe.Error,
            children: r(oe[g])
          }),
          /* @__PURE__ */ (0, b.jsx)("div", {
            className: pe.Footer,
            children: /* @__PURE__ */ (0, b.jsxs)(At, {
              className: pe.Copy,
              color: "secondary",
              variant: "ghost",
              pill: !0,
              size: "lg",
              onClick: async () => {
                const B = c.url ?? e;
                try {
                  await navigator.clipboard.writeText(B), C(Date.now()), u.logInteraction("toolbar_copy_link_succeeded");
                } catch {
                  p.setError("copyError"), u.logInteraction("toolbar_copy_link_failed");
                }
              },
              children: [T !== null ? /* @__PURE__ */ (0, b.jsx)(Eb, {
                "aria-hidden": "true",
                focusable: "false"
              }) : /* @__PURE__ */ (0, b.jsx)(Rx, {
                "aria-hidden": "true",
                focusable: "false"
              }), r(T !== null ? oe.copied : oe.copy)]
            })
          })
        ]
      })
    })
  });
}
function jx({ access: e, api: a, saving: r, savingControl: l, save: u }) {
  const { formatMessage: c } = Ie(), d = xb(e), h = e.access_policy;
  if (!h) return null;
  const m = e.available_access_modes;
  function g(_, S) {
    if (!h) return;
    const w = h.allowed_tenant_group_ids.includes(_.id) ? "allowed_tenant_group_ids" : "allowed_workspace_group_ids", A = h[w].filter((C) => C !== _.id), T = { [w]: A };
    return S === "viewer" && (T[w] = [...A, _.id]), S === "editor" ? T.editor_changes = { add_editor_group_ids: [_.id] } : _.role === "editor" && (T.editor_changes = { remove_editor_group_ids: [_.id] }), u(T, `group:${_.id}`);
  }
  function p(_) {
    const S = [{
      value: "viewer",
      label: c(oe.viewer),
      description: c(oe.viewerDescription)
    }];
    return _ && S.push({
      value: "editor",
      label: c(oe.editor),
      description: c(oe.editorDescription)
    }), S;
  }
  return /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [/* @__PURE__ */ (0, b.jsxs)(Tb, {
    access: e,
    children: [/* @__PURE__ */ (0, b.jsx)(Mx, {
      access: e,
      api: a,
      saving: r,
      save: u
    }), /* @__PURE__ */ (0, b.jsx)(Ab, {
      access: e,
      children: /* @__PURE__ */ (0, b.jsx)(Hf, {
        className: pe.AccessMode,
        pill: !1,
        loading: l === "access",
        "aria-labelledby": "toolbar-link-access",
        value: h.access_mode,
        disabled: r || !m?.length,
        options: [.../* @__PURE__ */ new Set([...m ?? [], h.access_mode])].map(d),
        onChange: ({ value: _ }) => {
          if (_ !== "admins_only") return u({ access_mode: _ }, "access");
        }
      })
    })]
  }), /* @__PURE__ */ (0, b.jsxs)(Cb, { children: [Qu(e).map((_) => /* @__PURE__ */ (0, b.jsx)(Ob, {
    person: _,
    children: _.role === "owner" ? /* @__PURE__ */ (0, b.jsx)(cd, { role: _.role }) : /* @__PURE__ */ (0, b.jsx)(Hf, {
      className: pe.Role,
      loading: l === `person:${_.account_user_id}`,
      align: "end",
      "aria-label": c(oe.role, { name: _.name || _.email || "" }),
      value: _.role || "viewer",
      disabled: r || _.role === "editor" && !e.can_manage_editors || !!(_.is_external && h.allowed_users.some((S) => !S.email)),
      options: p(e.can_manage_editors && !_.is_external || _.role === "editor"),
      onChange: ({ value: S }) => u(Sp(_, S, h.allowed_users), `person:${_.account_user_id}`),
      action: {
        label: c(oe.remove),
        onSelect: () => u(Sp(_, "remove", h.allowed_users), `person:${_.account_user_id}`)
      }
    })
  }, _.account_user_id)), h.allowed_groups.map((_) => /* @__PURE__ */ (0, b.jsx)(Mb, {
    group: _,
    children: /* @__PURE__ */ (0, b.jsx)(Hf, {
      className: pe.Role,
      loading: l === `group:${_.id}`,
      align: "end",
      value: _.role || "viewer",
      "aria-label": c(oe.role, { name: _.name }),
      disabled: r || _.role === "editor" && !e.can_manage_editors,
      options: p(e.can_manage_editors && !h.allowed_tenant_group_ids.includes(_.id) || _.role === "editor"),
      onChange: ({ value: S }) => g(_, S),
      action: {
        label: c(oe.remove),
        onSelect: () => g(_, "remove")
      }
    })
  }, _.id))] })] });
}
function Bx({ access: e }) {
  const a = xb(e), r = e.access_policy;
  if (!r) return null;
  const l = a(r.access_mode);
  return /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [/* @__PURE__ */ (0, b.jsx)(Tb, {
    access: e,
    children: /* @__PURE__ */ (0, b.jsx)(Ab, {
      access: e,
      children: /* @__PURE__ */ (0, b.jsxs)("p", {
        className: pe.AccessModeLabel,
        children: [/* @__PURE__ */ (0, b.jsx)("span", {
          className: pe.AccessModeIcon,
          children: l.icon
        }), l.label]
      })
    })
  }), /* @__PURE__ */ (0, b.jsxs)(Cb, {
    readOnly: !0,
    children: [Qu(e).map((u) => /* @__PURE__ */ (0, b.jsx)(Ob, {
      person: u,
      children: /* @__PURE__ */ (0, b.jsx)(cd, { role: u.role })
    }, u.account_user_id)), r.allowed_groups.map((u) => /* @__PURE__ */ (0, b.jsx)(Mb, {
      group: u,
      children: /* @__PURE__ */ (0, b.jsx)(cd, { role: u.role })
    }, u.id))]
  })] });
}
function Tb({ access: e, children: a }) {
  const { formatMessage: r } = Ie();
  return /* @__PURE__ */ (0, b.jsxs)("div", {
    className: pe.Header,
    children: [
      /* @__PURE__ */ (0, b.jsx)(Ux, { title: e.title }),
      a,
      /* @__PURE__ */ (0, b.jsx)("h2", {
        className: pe.Section,
        id: "toolbar-who-has-access",
        children: r(oe.who)
      })
    ]
  });
}
function Cb({ children: e, readOnly: a }) {
  const [r, l] = (0, y.useState)(null), [u, c] = (0, y.useState)(!1), [d, h] = (0, y.useState)(!1);
  return (0, y.useLayoutEffect)(() => {
    if (!r) return;
    const m = () => {
      c(r.scrollTop > 1), h(r.scrollHeight - r.clientHeight - r.scrollTop > 1);
    }, g = new ResizeObserver(m);
    return g.observe(r), r.firstElementChild && g.observe(r.firstElementChild), r.addEventListener("scroll", m, { passive: !0 }), m(), () => {
      g.disconnect(), r.removeEventListener("scroll", m);
    };
  }, [r]), /* @__PURE__ */ (0, b.jsx)("div", {
    className: pe.AccessList,
    ref: l,
    role: "region",
    "aria-labelledby": "toolbar-who-has-access",
    tabIndex: a ? 0 : void 0,
    "data-scroll-cutoff": u || void 0,
    "data-scroll-cutoff-below": d || void 0,
    children: /* @__PURE__ */ (0, b.jsx)("div", {
      className: pe.AccessListContent,
      children: e
    })
  });
}
function Ux({ title: e }) {
  const { formatMessage: a } = Ie();
  return /* @__PURE__ */ (0, b.jsx)(j6, {
    className: pe.Title,
    children: a(oe.title, { title: e })
  });
}
function Ab({ access: e, children: a }) {
  const { formatMessage: r } = Ie();
  return /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [
    /* @__PURE__ */ (0, b.jsx)("h2", {
      className: pe.Section,
      id: "toolbar-link-access",
      children: r(oe.linkAccess)
    }),
    a,
    e.has_private_tunnels && e.available_access_modes?.includes("public") && /* @__PURE__ */ (0, b.jsx)("p", {
      className: pe.Notice,
      children: r(oe.privateTunnels)
    })
  ] });
}
function xb(e) {
  const { formatMessage: a } = Ie(), r = e.workspace_name || a(oe.workspace);
  return (l) => {
    const u = {
      value: l,
      disabled: !e.available_access_modes?.some((c) => c === l)
    };
    switch (l) {
      case "public":
        return {
          ...u,
          label: a(oe.anyone),
          icon: /* @__PURE__ */ (0, b.jsx)(vb, {
            "aria-hidden": "true",
            focusable: "false"
          }),
          description: a(oe.publicDescription)
        };
      case "workspace_all":
        return {
          ...u,
          label: a(oe.everyone, { workspace: r }),
          icon: /* @__PURE__ */ (0, b.jsx)(pb, {
            "aria-hidden": "true",
            focusable: "false"
          }),
          description: a(oe.workspaceDescription)
        };
      default:
        return {
          ...u,
          label: a(l === "admins_only" ? oe.admins : oe.invited),
          icon: /* @__PURE__ */ (0, b.jsx)(mb, {
            "aria-hidden": "true",
            focusable: "false"
          }),
          description: a(oe.privateDescription)
        };
    }
  };
}
function Ob({ person: e, children: a }) {
  return /* @__PURE__ */ (0, b.jsxs)("div", {
    className: pe.Person,
    children: [
      /* @__PURE__ */ (0, b.jsx)(Ru, {
        name: e.name || e.email || "?",
        imageUrl: e.avatar_url ?? void 0,
        size: 32
      }),
      /* @__PURE__ */ (0, b.jsxs)("div", {
        className: pe.Identity,
        children: [/* @__PURE__ */ (0, b.jsx)("div", { children: e.name || e.email }), e.name && /* @__PURE__ */ (0, b.jsx)("div", {
          className: pe.Secondary,
          children: e.email
        })]
      }),
      a
    ]
  });
}
function Mb({ group: e, children: a }) {
  const { formatMessage: r } = Ie();
  return /* @__PURE__ */ (0, b.jsxs)("div", {
    className: pe.Person,
    children: [
      /* @__PURE__ */ (0, b.jsx)(Ru, {
        size: 32,
        Icon: wb,
        className: pe.GroupAvatar
      }),
      /* @__PURE__ */ (0, b.jsxs)("div", {
        className: pe.Identity,
        children: [e.name, /* @__PURE__ */ (0, b.jsx)("div", {
          className: pe.Secondary,
          children: r(oe.members, { count: e.size })
        })]
      }),
      a
    ]
  });
}
function cd({ role: e }) {
  const { formatMessage: a } = Ie();
  return /* @__PURE__ */ (0, b.jsx)("span", {
    className: pe.ReadOnlyRole,
    children: a(oe[e ?? "viewer"])
  });
}
function eO() {
  if (window.self === window.top) return;
  const e = new URLSearchParams(location.search).get("site_origin"), a = document.body.dataset.chatgptOrigin;
  if (!e || !["https://chatgpt.com", "https://chatgpt-staging.com"].includes(a ?? "")) return;
  const r = new URLSearchParams(location.hash.slice(1)), l = _b({
    kind: "sites-toolbar",
    toolbarOrigin: location.origin,
    chatgptOrigin: a,
    accountId: r.get("account_id") || null,
    locale: r.get("locale") || navigator.language,
    projectId: null,
    projectTitle: null
  }, () => /* @__PURE__ */ (0, b.jsx)(Lx, { siteOrigin: e }), { isolatedDocument: !0 });
  l.ready.catch(l.dispose);
}
function tO(e) {
  if (e.kind === "preview-annotations") return;
  try {
    if (window.self !== window.top) return;
  } catch {
    return;
  }
  if (tS(navigator.userAgent) || od()) return;
  if (xd()) {
    if (e.mobileEnabled !== !0) return;
    e.kind !== "sites-toolbar" && (e = {
      ...e,
      kind: "editor-composer"
    });
  }
  const a = e.projectTitle?.trim() || document.title.trim() || window.location.hostname;
  VT().then((r) => {
    const l = _b(e, ({ onDismiss: u }) => e.kind === "sites-toolbar" ? /* @__PURE__ */ (0, b.jsx)(q7, {
      context: e,
      config: r,
      siteTitle: a
    }) : e.kind === "editor-composer" ? /* @__PURE__ */ (0, b.jsx)(bb, {
      accountId: e.accountId,
      chatgptOrigin: e.chatgptOrigin,
      projectId: e.projectId,
      siteTitle: a,
      config: r
    }) : /* @__PURE__ */ (0, b.jsx)(n7, {
      accountId: e.accountId,
      chatgptOrigin: e.chatgptOrigin,
      ownerName: e.ownerName,
      projectId: e.projectId,
      siteTitle: a,
      editContext: r.edit_context,
      onDismiss: u
    }));
    l.ready.catch(l.dispose);
  }).catch(() => {
  });
}
export {
  tO as mountSiteWidget,
  eO as mountSitesToolbarFrame
};
