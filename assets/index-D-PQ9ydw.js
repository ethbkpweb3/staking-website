import {
    G as Oe,
    S as gt,
    r as le,
    j as R,
    s as J,
    a as Cn
} from "./index-IT1gKaF9.js";
import {
    m as We
} from "./motion-_fLkK2fy.js";

function uo(t) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "polyline",
            attr: {
                points: "1 4 1 10 7 10"
            }
        }, {
            tag: "polyline",
            attr: {
                points: "23 20 23 14 17 14"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
            }
        }]
    })(t)
}
var B = function() {
    return B = Object.assign || function(e) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }, B.apply(this, arguments)
};

function yt(t, e, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = e.length, i; r < o; r++)(i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
    return t.concat(i || Array.prototype.slice.call(e))
}
var A = "-ms-",
    mt = "-moz-",
    E = "-webkit-",
    He = "comm",
    Ot = "rule",
    ue = "decl",
    Sn = "@import",
    ze = "@keyframes",
    kn = "@layer",
    _n = Math.abs,
    fe = String.fromCharCode,
    ne = Object.assign;

function En(t, e) {
    return L(t, 0) ^ 45 ? (((e << 2 ^ L(t, 0)) << 2 ^ L(t, 1)) << 2 ^ L(t, 2)) << 2 ^ L(t, 3) : 0
}

function Fe(t) {
    return t.trim()
}

function z(t, e) {
    return (t = e.exec(t)) ? t[0] : t
}

function C(t, e, n) {
    return t.replace(e, n)
}

function It(t, e) {
    return t.indexOf(e)
}

function L(t, e) {
    return t.charCodeAt(e) | 0
}

function st(t, e, n) {
    return t.slice(e, n)
}

function O(t) {
    return t.length
}

function Ge(t) {
    return t.length
}

function vt(t, e) {
    return e.push(t), t
}

function An(t, e) {
    return t.map(e).join("")
}

function be(t, e) {
    return t.filter(function(n) {
        return !z(n, e)
    })
}
var Wt = 1,
    at = 1,
    Ye = 0,
    T = 0,
    P = 0,
    lt = "";

function Ht(t, e, n, r, o, i, a, d) {
    return {
        value: t,
        root: e,
        parent: n,
        type: r,
        props: o,
        children: i,
        line: Wt,
        column: at,
        length: a,
        return: "",
        siblings: d
    }
}

function q(t, e) {
    return ne(Ht("", null, null, "", null, null, 0, t.siblings), t, {
        length: -t.length
    }, e)
}

function ot(t) {
    for (; t.root;) t = q(t.root, {
        children: [t]
    });
    vt(t, t.siblings)
}

function Pn() {
    return P
}

function In() {
    return P = T > 0 ? L(lt, --T) : 0, at--, P === 10 && (at = 1, Wt--), P
}

function j() {
    return P = T < Ye ? L(lt, T++) : 0, at++, P === 10 && (at = 1, Wt++), P
}

function Z() {
    return L(lt, T)
}

function Lt() {
    return T
}

function zt(t, e) {
    return st(lt, t, e)
}

function re(t) {
    switch (t) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function Ln(t) {
    return Wt = at = 1, Ye = O(lt = t), T = 0, []
}

function Rn(t) {
    return lt = "", t
}

function Vt(t) {
    return Fe(zt(T - 1, oe(t === 91 ? t + 2 : t === 40 ? t + 1 : t)))
}

function Bn(t) {
    for (;
        (P = Z()) && P < 33;) j();
    return re(t) > 2 || re(P) > 3 ? "" : " "
}

function Nn(t, e) {
    for (; --e && j() && !(P < 48 || P > 102 || P > 57 && P < 65 || P > 70 && P < 97););
    return zt(t, Lt() + (e < 6 && Z() == 32 && j() == 32))
}

function oe(t) {
    for (; j();) switch (P) {
        case t:
            return T;
        case 34:
        case 39:
            t !== 34 && t !== 39 && oe(P);
            break;
        case 40:
            t === 41 && oe(t);
            break;
        case 92:
            j();
            break
    }
    return T
}

function Tn(t, e) {
    for (; j() && t + P !== 57;)
        if (t + P === 84 && Z() === 47) break;
    return "/*" + zt(e, T - 1) + "*" + fe(t === 47 ? t : j())
}

function Dn(t) {
    for (; !re(Z());) j();
    return zt(t, T)
}

function jn(t) {
    return Rn(Rt("", null, null, null, [""], t = Ln(t), 0, [0], t))
}

function Rt(t, e, n, r, o, i, a, d, s) {
    for (var p = 0, c = 0, l = a, u = 0, f = 0, g = 0, y = 1, m = 1, w = 1, S = 0, k = "", $ = o, _ = i, x = r, b = k; m;) switch (g = S, S = j()) {
        case 40:
            if (g != 108 && L(b, l - 1) == 58) {
                It(b += C(Vt(S), "&", "&\f"), "&\f") != -1 && (w = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            b += Vt(S);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            b += Bn(g);
            break;
        case 92:
            b += Nn(Lt() - 1, 7);
            continue;
        case 47:
            switch (Z()) {
                case 42:
                case 47:
                    vt(Mn(Tn(j(), Lt()), e, n, s), s);
                    break;
                default:
                    b += "/"
            }
            break;
        case 123 * y:
            d[p++] = O(b) * w;
        case 125 * y:
        case 59:
        case 0:
            switch (S) {
                case 0:
                case 125:
                    m = 0;
                case 59 + c:
                    w == -1 && (b = C(b, /\f/g, "")), f > 0 && O(b) - l && vt(f > 32 ? $e(b + ";", r, n, l - 1, s) : $e(C(b, " ", "") + ";", r, n, l - 2, s), s);
                    break;
                case 59:
                    b += ";";
                default:
                    if (vt(x = xe(b, e, n, p, c, o, d, k, $ = [], _ = [], l, i), i), S === 123)
                        if (c === 0) Rt(b, e, x, x, $, i, l, d, _);
                        else switch (u === 99 && L(b, 3) === 110 ? 100 : u) {
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                                Rt(t, x, x, r && vt(xe(t, x, x, 0, 0, o, d, k, o, $ = [], l, _), _), o, _, l, d, r ? $ : _);
                                break;
                            default:
                                Rt(b, x, x, x, [""], _, 0, d, _)
                        }
            }
            p = c = f = 0, y = w = 1, k = b = "", l = a;
            break;
        case 58:
            l = 1 + O(b), f = g;
        default:
            if (y < 1) {
                if (S == 123) --y;
                else if (S == 125 && y++ == 0 && In() == 125) continue
            }
            switch (b += fe(S), S * y) {
                case 38:
                    w = c > 0 ? 1 : (b += "\f", -1);
                    break;
                case 44:
                    d[p++] = (O(b) - 1) * w, w = 1;
                    break;
                case 64:
                    Z() === 45 && (b += Vt(j())), u = Z(), c = l = O(k = b += Dn(Lt())), S++;
                    break;
                case 45:
                    g === 45 && O(b) == 2 && (y = 0)
            }
    }
    return i
}

function xe(t, e, n, r, o, i, a, d, s, p, c, l) {
    for (var u = o - 1, f = o === 0 ? i : [""], g = Ge(f), y = 0, m = 0, w = 0; y < r; ++y)
        for (var S = 0, k = st(t, u + 1, u = _n(m = a[y])), $ = t; S < g; ++S)($ = Fe(m > 0 ? f[S] + " " + k : C(k, /&\f/g, f[S]))) && (s[w++] = $);
    return Ht(t, e, n, o === 0 ? Ot : d, s, p, c, l)
}

function Mn(t, e, n, r) {
    return Ht(t, e, n, He, fe(Pn()), st(t, 2, -2), 0, r)
}

function $e(t, e, n, r, o) {
    return Ht(t, e, n, ue, st(t, 0, r), st(t, r + 1, -1), r, o)
}

function qe(t, e, n) {
    switch (En(t, e)) {
        case 5103:
            return E + "print-" + t + t;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return E + t + t;
        case 4789:
            return mt + t + t;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return E + t + mt + t + A + t + t;
        case 5936:
            switch (L(t, e + 11)) {
                case 114:
                    return E + t + A + C(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                case 108:
                    return E + t + A + C(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                case 45:
                    return E + t + A + C(t, /[svh]\w+-[tblr]{2}/, "lr") + t
            }
        case 6828:
        case 4268:
        case 2903:
            return E + t + A + t + t;
        case 6165:
            return E + t + A + "flex-" + t + t;
        case 5187:
            return E + t + C(t, /(\w+).+(:[^]+)/, E + "box-$1$2" + A + "flex-$1$2") + t;
        case 5443:
            return E + t + A + "flex-item-" + C(t, /flex-|-self/g, "") + (z(t, /flex-|baseline/) ? "" : A + "grid-row-" + C(t, /flex-|-self/g, "")) + t;
        case 4675:
            return E + t + A + "flex-line-pack" + C(t, /align-content|flex-|-self/g, "") + t;
        case 5548:
            return E + t + A + C(t, "shrink", "negative") + t;
        case 5292:
            return E + t + A + C(t, "basis", "preferred-size") + t;
        case 6060:
            return E + "box-" + C(t, "-grow", "") + E + t + A + C(t, "grow", "positive") + t;
        case 4554:
            return E + C(t, /([^-])(transform)/g, "$1" + E + "$2") + t;
        case 6187:
            return C(C(C(t, /(zoom-|grab)/, E + "$1"), /(image-set)/, E + "$1"), t, "") + t;
        case 5495:
        case 3959:
            return C(t, /(image-set\([^]*)/, E + "$1$`$1");
        case 4968:
            return C(C(t, /(.+:)(flex-)?(.*)/, E + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + E + t + t;
        case 4200:
            if (!z(t, /flex-|baseline/)) return A + "grid-column-align" + st(t, e) + t;
            break;
        case 2592:
        case 3360:
            return A + C(t, "template-", "") + t;
        case 4384:
        case 3616:
            return n && n.some(function(r, o) {
                return e = o, z(r.props, /grid-\w+-end/)
            }) ? ~It(t + (n = n[e].value), "span") ? t : A + C(t, "-start", "") + t + A + "grid-row-span:" + (~It(n, "span") ? z(n, /\d+/) : +z(n, /\d+/) - +z(t, /\d+/)) + ";" : A + C(t, "-start", "") + t;
        case 4896:
        case 4128:
            return n && n.some(function(r) {
                return z(r.props, /grid-\w+-start/)
            }) ? t : A + C(C(t, "-end", "-span"), "span ", "") + t;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return C(t, /(.+)-inline(.+)/, E + "$1$2") + t;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (O(t) - 1 - e > 6) switch (L(t, e + 1)) {
                case 109:
                    if (L(t, e + 4) !== 45) break;
                case 102:
                    return C(t, /(.+:)(.+)-([^]+)/, "$1" + E + "$2-$3$1" + mt + (L(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
                case 115:
                    return ~It(t, "stretch") ? qe(C(t, "stretch", "fill-available"), e, n) + t : t
            }
            break;
        case 5152:
        case 5920:
            return C(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, a, d, s, p) {
                return A + o + ":" + i + p + (a ? A + o + "-span:" + (d ? s : +s - +i) + p : "") + t
            });
        case 4949:
            if (L(t, e + 6) === 121) return C(t, ":", ":" + E) + t;
            break;
        case 6444:
            switch (L(t, L(t, 14) === 45 ? 18 : 11)) {
                case 120:
                    return C(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + E + (L(t, 14) === 45 ? "inline-" : "") + "box$3$1" + E + "$2$3$1" + A + "$2box$3") + t;
                case 100:
                    return C(t, ":", ":" + A) + t
            }
            break;
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return C(t, "scroll-", "scroll-snap-") + t
    }
    return t
}

function Tt(t, e) {
    for (var n = "", r = 0; r < t.length; r++) n += e(t[r], r, t, e) || "";
    return n
}

function On(t, e, n, r) {
    switch (t.type) {
        case kn:
            if (t.children.length) break;
        case Sn:
        case ue:
            return t.return = t.return || t.value;
        case He:
            return "";
        case ze:
            return t.return = t.value + "{" + Tt(t.children, r) + "}";
        case Ot:
            if (!O(t.value = t.props.join(","))) return ""
    }
    return O(n = Tt(t.children, r)) ? t.return = t.value + "{" + n + "}" : ""
}

function Wn(t) {
    var e = Ge(t);
    return function(n, r, o, i) {
        for (var a = "", d = 0; d < e; d++) a += t[d](n, r, o, i) || "";
        return a
    }
}

function Hn(t) {
    return function(e) {
        e.root || (e = e.return) && t(e)
    }
}

function zn(t, e, n, r) {
    if (t.length > -1 && !t.return) switch (t.type) {
        case ue:
            t.return = qe(t.value, t.length, n);
            return;
        case ze:
            return Tt([q(t, {
                value: C(t.value, "@", "@" + E)
            })], r);
        case Ot:
            if (t.length) return An(n = t.props, function(o) {
                switch (z(o, r = /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        ot(q(t, {
                            props: [C(o, /:(read-\w+)/, ":" + mt + "$1")]
                        })), ot(q(t, {
                            props: [o]
                        })), ne(t, {
                            props: be(n, r)
                        });
                        break;
                    case "::placeholder":
                        ot(q(t, {
                            props: [C(o, /:(plac\w+)/, ":" + E + "input-$1")]
                        })), ot(q(t, {
                            props: [C(o, /:(plac\w+)/, ":" + mt + "$1")]
                        })), ot(q(t, {
                            props: [C(o, /:(plac\w+)/, A + "input-$1")]
                        })), ot(q(t, {
                            props: [o]
                        })), ne(t, {
                            props: be(n, r)
                        });
                        break
                }
                return ""
            })
    }
}
var Fn = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    },
    N = {},
    ct = typeof process < "u" && N !== void 0 && (N.REACT_APP_SC_ATTR || N.SC_ATTR) || "data-styled",
    Ke = "active",
    Ue = "data-styled-version",
    Ft = "6.1.2",
    he = `/*!sc*/
`,
    ve = typeof window < "u" && "HTMLElement" in window,
    Gn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && N !== void 0 && N.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && N.REACT_APP_SC_DISABLE_SPEEDY !== "" ? N.REACT_APP_SC_DISABLE_SPEEDY !== "false" && N.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && N !== void 0 && N.SC_DISABLE_SPEEDY !== void 0 && N.SC_DISABLE_SPEEDY !== "" && N.SC_DISABLE_SPEEDY !== "false" && N.SC_DISABLE_SPEEDY),
    Gt = Object.freeze([]),
    dt = Object.freeze({});

function Yn(t, e, n) {
    return n === void 0 && (n = dt), t.theme !== n.theme && t.theme || e || n.theme
}
var Ze = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]),
    qn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    Kn = /(^-|-$)/g;

function Ce(t) {
    return t.replace(qn, "-").replace(Kn, "")
}
var Un = /(a)(d)/gi,
    _t = 52,
    Se = function(t) {
        return String.fromCharCode(t + (t > 25 ? 39 : 97))
    };

function ie(t) {
    var e, n = "";
    for (e = Math.abs(t); e > _t; e = e / _t | 0) n = Se(e % _t) + n;
    return (Se(e % _t) + n).replace(Un, "$1-$2")
}
var Xt, Ve = 5381,
    it = function(t, e) {
        for (var n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
        return t
    },
    Xe = function(t) {
        return it(Ve, t)
    };

function Je(t) {
    return ie(Xe(t) >>> 0)
}

function Zn(t) {
    return t.displayName || t.name || "Component"
}

function Jt(t) {
    return typeof t == "string" && !0
}
var Qe = typeof Symbol == "function" && Symbol.for,
    tn = Qe ? Symbol.for("react.memo") : 60115,
    Vn = Qe ? Symbol.for("react.forward_ref") : 60112,
    Xn = {
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
    },
    Jn = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    en = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    Qn = ((Xt = {})[Vn] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }, Xt[tn] = en, Xt);

function ke(t) {
    return ("type" in (e = t) && e.type.$$typeof) === tn ? en : "$$typeof" in t ? Qn[t.$$typeof] : Xn;
    var e
}
var tr = Object.defineProperty,
    er = Object.getOwnPropertyNames,
    _e = Object.getOwnPropertySymbols,
    nr = Object.getOwnPropertyDescriptor,
    rr = Object.getPrototypeOf,
    Ee = Object.prototype;

function nn(t, e, n) {
    if (typeof e != "string") {
        if (Ee) {
            var r = rr(e);
            r && r !== Ee && nn(t, r, n)
        }
        var o = er(e);
        _e && (o = o.concat(_e(e)));
        for (var i = ke(t), a = ke(e), d = 0; d < o.length; ++d) {
            var s = o[d];
            if (!(s in Jn || n && n[s] || a && s in a || i && s in i)) {
                var p = nr(e, s);
                try {
                    tr(t, s, p)
                } catch {}
            }
        }
    }
    return t
}

function pt(t) {
    return typeof t == "function"
}

function me(t) {
    return typeof t == "object" && "styledComponentId" in t
}

function U(t, e) {
    return t && e ? "".concat(t, " ").concat(e) : t || e || ""
}

function se(t, e) {
    if (t.length === 0) return "";
    for (var n = t[0], r = 1; r < t.length; r++) n += e ? e + t[r] : t[r];
    return n
}

function wt(t) {
    return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof)
}

function ae(t, e, n) {
    if (n === void 0 && (n = !1), !n && !wt(t) && !Array.isArray(t)) return e;
    if (Array.isArray(e))
        for (var r = 0; r < e.length; r++) t[r] = ae(t[r], e[r]);
    else if (wt(e))
        for (var r in e) t[r] = ae(t[r], e[r]);
    return t
}

function ge(t, e) {
    Object.defineProperty(t, "toString", {
        value: e
    })
}

function xt(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""))
}
var or = function() {
        function t(e) {
            this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
        }
        return t.prototype.indexOfGroup = function(e) {
            for (var n = 0, r = 0; r < e; r++) n += this.groupSizes[r];
            return n
        }, t.prototype.insertRules = function(e, n) {
            if (e >= this.groupSizes.length) {
                for (var r = this.groupSizes, o = r.length, i = o; e >= i;)
                    if ((i <<= 1) < 0) throw xt(16, "".concat(e));
                this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
                for (var a = o; a < i; a++) this.groupSizes[a] = 0
            }
            for (var d = this.indexOfGroup(e + 1), s = (a = 0, n.length); a < s; a++) this.tag.insertRule(d, n[a]) && (this.groupSizes[e]++, d++)
        }, t.prototype.clearGroup = function(e) {
            if (e < this.length) {
                var n = this.groupSizes[e],
                    r = this.indexOfGroup(e),
                    o = r + n;
                this.groupSizes[e] = 0;
                for (var i = r; i < o; i++) this.tag.deleteRule(r)
            }
        }, t.prototype.getGroup = function(e) {
            var n = "";
            if (e >= this.length || this.groupSizes[e] === 0) return n;
            for (var r = this.groupSizes[e], o = this.indexOfGroup(e), i = o + r, a = o; a < i; a++) n += "".concat(this.tag.getRule(a)).concat(he);
            return n
        }, t
    }(),
    Bt = new Map,
    Dt = new Map,
    Nt = 1,
    Et = function(t) {
        if (Bt.has(t)) return Bt.get(t);
        for (; Dt.has(Nt);) Nt++;
        var e = Nt++;
        return Bt.set(t, e), Dt.set(e, t), e
    },
    ir = function(t, e) {
        Nt = e + 1, Bt.set(t, e), Dt.set(e, t)
    },
    sr = "style[".concat(ct, "][").concat(Ue, '="').concat(Ft, '"]'),
    ar = new RegExp("^".concat(ct, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
    cr = function(t, e, n) {
        for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)(r = o[i]) && t.registerName(e, r)
    },
    dr = function(t, e) {
        for (var n, r = ((n = e.textContent) !== null && n !== void 0 ? n : "").split(he), o = [], i = 0, a = r.length; i < a; i++) {
            var d = r[i].trim();
            if (d) {
                var s = d.match(ar);
                if (s) {
                    var p = 0 | parseInt(s[1], 10),
                        c = s[2];
                    p !== 0 && (ir(c, p), cr(t, c, s[3]), t.getTag().insertRules(p, o)), o.length = 0
                } else o.push(d)
            }
        }
    };

function pr() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
}
var rn = function(t) {
        var e = document.head,
            n = t || e,
            r = document.createElement("style"),
            o = function(d) {
                var s = Array.from(d.querySelectorAll("style[".concat(ct, "]")));
                return s[s.length - 1]
            }(n),
            i = o !== void 0 ? o.nextSibling : null;
        r.setAttribute(ct, Ke), r.setAttribute(Ue, Ft);
        var a = pr();
        return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r
    },
    lr = function() {
        function t(e) {
            this.element = rn(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
                if (n.sheet) return n.sheet;
                for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
                    var a = r[o];
                    if (a.ownerNode === n) return a
                }
                throw xt(17)
            }(this.element), this.length = 0
        }
        return t.prototype.insertRule = function(e, n) {
            try {
                return this.sheet.insertRule(n, e), this.length++, !0
            } catch {
                return !1
            }
        }, t.prototype.deleteRule = function(e) {
            this.sheet.deleteRule(e), this.length--
        }, t.prototype.getRule = function(e) {
            var n = this.sheet.cssRules[e];
            return n && n.cssText ? n.cssText : ""
        }, t
    }(),
    ur = function() {
        function t(e) {
            this.element = rn(e), this.nodes = this.element.childNodes, this.length = 0
        }
        return t.prototype.insertRule = function(e, n) {
            if (e <= this.length && e >= 0) {
                var r = document.createTextNode(n);
                return this.element.insertBefore(r, this.nodes[e] || null), this.length++, !0
            }
            return !1
        }, t.prototype.deleteRule = function(e) {
            this.element.removeChild(this.nodes[e]), this.length--
        }, t.prototype.getRule = function(e) {
            return e < this.length ? this.nodes[e].textContent : ""
        }, t
    }(),
    fr = function() {
        function t(e) {
            this.rules = [], this.length = 0
        }
        return t.prototype.insertRule = function(e, n) {
            return e <= this.length && (this.rules.splice(e, 0, n), this.length++, !0)
        }, t.prototype.deleteRule = function(e) {
            this.rules.splice(e, 1), this.length--
        }, t.prototype.getRule = function(e) {
            return e < this.length ? this.rules[e] : ""
        }, t
    }(),
    Ae = ve,
    hr = {
        isServer: !ve,
        useCSSOMInjection: !Gn
    },
    on = function() {
        function t(e, n, r) {
            e === void 0 && (e = dt), n === void 0 && (n = {});
            var o = this;
            this.options = B(B({}, hr), e), this.gs = n, this.names = new Map(r), this.server = !!e.isServer, !this.server && ve && Ae && (Ae = !1, function(i) {
                for (var a = document.querySelectorAll(sr), d = 0, s = a.length; d < s; d++) {
                    var p = a[d];
                    p && p.getAttribute(ct) !== Ke && (dr(i, p), p.parentNode && p.parentNode.removeChild(p))
                }
            }(this)), ge(this, function() {
                return function(i) {
                    for (var a = i.getTag(), d = a.length, s = "", p = function(l) {
                            var u = function(w) {
                                return Dt.get(w)
                            }(l);
                            if (u === void 0) return "continue";
                            var f = i.names.get(u),
                                g = a.getGroup(l);
                            if (f === void 0 || g.length === 0) return "continue";
                            var y = "".concat(ct, ".g").concat(l, '[id="').concat(u, '"]'),
                                m = "";
                            f !== void 0 && f.forEach(function(w) {
                                w.length > 0 && (m += "".concat(w, ","))
                            }), s += "".concat(g).concat(y, '{content:"').concat(m, '"}').concat(he)
                        }, c = 0; c < d; c++) p(c);
                    return s
                }(o)
            })
        }
        return t.registerId = function(e) {
            return Et(e)
        }, t.prototype.reconstructWithOptions = function(e, n) {
            return n === void 0 && (n = !0), new t(B(B({}, this.options), e), this.gs, n && this.names || void 0)
        }, t.prototype.allocateGSInstance = function(e) {
            return this.gs[e] = (this.gs[e] || 0) + 1
        }, t.prototype.getTag = function() {
            return this.tag || (this.tag = (e = function(n) {
                var r = n.useCSSOMInjection,
                    o = n.target;
                return n.isServer ? new fr(o) : r ? new lr(o) : new ur(o)
            }(this.options), new or(e)));
            var e
        }, t.prototype.hasNameForId = function(e, n) {
            return this.names.has(e) && this.names.get(e).has(n)
        }, t.prototype.registerName = function(e, n) {
            if (Et(e), this.names.has(e)) this.names.get(e).add(n);
            else {
                var r = new Set;
                r.add(n), this.names.set(e, r)
            }
        }, t.prototype.insertRules = function(e, n, r) {
            this.registerName(e, n), this.getTag().insertRules(Et(e), r)
        }, t.prototype.clearNames = function(e) {
            this.names.has(e) && this.names.get(e).clear()
        }, t.prototype.clearRules = function(e) {
            this.getTag().clearGroup(Et(e)), this.clearNames(e)
        }, t.prototype.clearTag = function() {
            this.tag = void 0
        }, t
    }(),
    vr = /&/g,
    mr = /^\s*\/\/.*$/gm;

function sn(t, e) {
    return t.map(function(n) {
        return n.type === "rule" && (n.value = "".concat(e, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(e, " ")), n.props = n.props.map(function(r) {
            return "".concat(e, " ").concat(r)
        })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = sn(n.children, e)), n
    })
}

function gr(t) {
    var e, n, r, o = t === void 0 ? dt : t,
        i = o.options,
        a = i === void 0 ? dt : i,
        d = o.plugins,
        s = d === void 0 ? Gt : d,
        p = function(u, f, g) {
            return g === n || g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(e) : u
        },
        c = s.slice();
    c.push(function(u) {
        u.type === Ot && u.value.includes("&") && (u.props[0] = u.props[0].replace(vr, n).replace(r, p))
    }), a.prefix && c.push(zn), c.push(On);
    var l = function(u, f, g, y) {
        f === void 0 && (f = ""), g === void 0 && (g = ""), y === void 0 && (y = "&"), e = y, n = f, r = new RegExp("\\".concat(n, "\\b"), "g");
        var m = u.replace(mr, ""),
            w = jn(g || f ? "".concat(g, " ").concat(f, " { ").concat(m, " }") : m);
        a.namespace && (w = sn(w, a.namespace));
        var S = [];
        return Tt(w, Wn(c.concat(Hn(function(k) {
            return S.push(k)
        })))), S
    };
    return l.hash = s.length ? s.reduce(function(u, f) {
        return f.name || xt(15), it(u, f.name)
    }, Ve).toString() : "", l
}
var yr = new on,
    ce = gr(),
    an = gt.createContext({
        shouldForwardProp: void 0,
        styleSheet: yr,
        stylis: ce
    });
an.Consumer;
gt.createContext(void 0);

function Pe() {
    return le.useContext(an)
}
var cn = function() {
        function t(e, n) {
            var r = this;
            this.inject = function(o, i) {
                i === void 0 && (i = ce);
                var a = r.name + i.hash;
                o.hasNameForId(r.id, a) || o.insertRules(r.id, a, i(r.rules, a, "@keyframes"))
            }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = n, ge(this, function() {
                throw xt(12, String(r.name))
            })
        }
        return t.prototype.getName = function(e) {
            return e === void 0 && (e = ce), this.name + e.hash
        }, t
    }(),
    wr = function(t) {
        return t >= "A" && t <= "Z"
    };

function Ie(t) {
    for (var e = "", n = 0; n < t.length; n++) {
        var r = t[n];
        if (n === 1 && r === "-" && t[0] === "-") return t;
        wr(r) ? e += "-" + r.toLowerCase() : e += r
    }
    return e.startsWith("ms-") ? "-" + e : e
}
var dn = function(t) {
        return t == null || t === !1 || t === ""
    },
    pn = function(t) {
        var e, n, r = [];
        for (var o in t) {
            var i = t[o];
            t.hasOwnProperty(o) && !dn(i) && (Array.isArray(i) && i.isCss || pt(i) ? r.push("".concat(Ie(o), ":"), i, ";") : wt(i) ? r.push.apply(r, yt(yt(["".concat(o, " {")], pn(i), !1), ["}"], !1)) : r.push("".concat(Ie(o), ": ").concat((e = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || e in Fn || e.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")))
        }
        return r
    };

function V(t, e, n, r) {
    if (dn(t)) return [];
    if (me(t)) return [".".concat(t.styledComponentId)];
    if (pt(t)) {
        if (!pt(i = t) || i.prototype && i.prototype.isReactComponent || !e) return [t];
        var o = t(e);
        return V(o, e, n, r)
    }
    var i;
    return t instanceof cn ? n ? (t.inject(n, r), [t.getName(r)]) : [t] : wt(t) ? pn(t) : Array.isArray(t) ? Array.prototype.concat.apply(Gt, t.map(function(a) {
        return V(a, e, n, r)
    })) : [t.toString()]
}

function br(t) {
    for (var e = 0; e < t.length; e += 1) {
        var n = t[e];
        if (pt(n) && !me(n)) return !1
    }
    return !0
}
var xr = Xe(Ft),
    $r = function() {
        function t(e, n, r) {
            this.rules = e, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && br(e), this.componentId = n, this.baseHash = it(xr, n), this.baseStyle = r, on.registerId(n)
        }
        return t.prototype.generateAndInjectStyles = function(e, n, r) {
            var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, r) : "";
            if (this.isStatic && !r.hash)
                if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = U(o, this.staticRulesId);
                else {
                    var i = se(V(this.rules, e, n, r)),
                        a = ie(it(this.baseHash, i) >>> 0);
                    if (!n.hasNameForId(this.componentId, a)) {
                        var d = r(i, ".".concat(a), void 0, this.componentId);
                        n.insertRules(this.componentId, a, d)
                    }
                    o = U(o, a), this.staticRulesId = a
                }
            else {
                for (var s = it(this.baseHash, r.hash), p = "", c = 0; c < this.rules.length; c++) {
                    var l = this.rules[c];
                    if (typeof l == "string") p += l;
                    else if (l) {
                        var u = se(V(l, e, n, r));
                        s = it(s, u + c), p += u
                    }
                }
                if (p) {
                    var f = ie(s >>> 0);
                    n.hasNameForId(this.componentId, f) || n.insertRules(this.componentId, f, r(p, ".".concat(f), void 0, this.componentId)), o = U(o, f)
                }
            }
            return o
        }, t
    }(),
    ln = gt.createContext(void 0);
ln.Consumer;
var Qt = {};

function Cr(t, e, n) {
    var r = me(t),
        o = t,
        i = !Jt(t),
        a = e.attrs,
        d = a === void 0 ? Gt : a,
        s = e.componentId,
        p = s === void 0 ? function($, _) {
            var x = typeof $ != "string" ? "sc" : Ce($);
            Qt[x] = (Qt[x] || 0) + 1;
            var b = "".concat(x, "-").concat(Je(Ft + x + Qt[x]));
            return _ ? "".concat(_, "-").concat(b) : b
        }(e.displayName, e.parentComponentId) : s,
        c = e.displayName,
        l = c === void 0 ? function($) {
            return Jt($) ? "styled.".concat($) : "Styled(".concat(Zn($), ")")
        }(t) : c,
        u = e.displayName && e.componentId ? "".concat(Ce(e.displayName), "-").concat(e.componentId) : e.componentId || p,
        f = r && o.attrs ? o.attrs.concat(d).filter(Boolean) : d,
        g = e.shouldForwardProp;
    if (r && o.shouldForwardProp) {
        var y = o.shouldForwardProp;
        if (e.shouldForwardProp) {
            var m = e.shouldForwardProp;
            g = function($, _) {
                return y($, _) && m($, _)
            }
        } else g = y
    }
    var w = new $r(n, u, r ? o.componentStyle : void 0);

    function S($, _) {
        return function(x, b, M) {
            var W = x.attrs,
                tt = x.componentStyle,
                H = x.defaultProps,
                et = x.foldedComponentIds,
                nt = x.styledComponentId,
                rt = x.target,
                Yt = gt.useContext(ln),
                qt = Pe(),
                Kt = x.shouldForwardProp || qt.shouldForwardProp,
                F = function(Ct, ft, St) {
                    for (var ht, K = B(B({}, ft), {
                            className: void 0,
                            theme: St
                        }), Zt = 0; Zt < Ct.length; Zt += 1) {
                        var kt = pt(ht = Ct[Zt]) ? ht(K) : ht;
                        for (var Y in kt) K[Y] = Y === "className" ? U(K[Y], kt[Y]) : Y === "style" ? B(B({}, K[Y]), kt[Y]) : kt[Y]
                    }
                    return ft.className && (K.className = U(K.className, ft.className)), K
                }(W, b, Yn(b, Yt, H) || dt),
                $t = F.as || rt,
                ut = {};
            for (var G in F) F[G] === void 0 || G[0] === "$" || G === "as" || G === "theme" || (G === "forwardedAs" ? ut.as = F.forwardedAs : Kt && !Kt(G, $t) || (ut[G] = F[G]));
            var we = function(Ct, ft) {
                    var St = Pe(),
                        ht = Ct.generateAndInjectStyles(ft, St.styleSheet, St.stylis);
                    return ht
                }(tt, F),
                Ut = U(et, nt);
            return we && (Ut += " " + we), F.className && (Ut += " " + F.className), ut[Jt($t) && !Ze.has($t) ? "class" : "className"] = Ut, ut.ref = M, le.createElement($t, ut)
        }(k, $, _)
    }
    S.displayName = l;
    var k = gt.forwardRef(S);
    return k.attrs = f, k.componentStyle = w, k.displayName = l, k.shouldForwardProp = g, k.foldedComponentIds = r ? U(o.foldedComponentIds, o.styledComponentId) : "", k.styledComponentId = u, k.target = r ? o.target : t, Object.defineProperty(k, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function($) {
            this._foldedDefaultProps = r ? function(_) {
                for (var x = [], b = 1; b < arguments.length; b++) x[b - 1] = arguments[b];
                for (var M = 0, W = x; M < W.length; M++) ae(_, W[M], !0);
                return _
            }({}, o.defaultProps, $) : $
        }
    }), ge(k, function() {
        return ".".concat(k.styledComponentId)
    }), i && nn(k, t, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0
    }), k
}

function Le(t, e) {
    for (var n = [t[0]], r = 0, o = e.length; r < o; r += 1) n.push(e[r], t[r + 1]);
    return n
}
var Re = function(t) {
    return Object.assign(t, {
        isCss: !0
    })
};

function un(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (pt(t) || wt(t)) return Re(V(Le(Gt, yt([t], e, !0))));
    var r = t;
    return e.length === 0 && r.length === 1 && typeof r[0] == "string" ? V(r) : Re(V(Le(r, e)))
}

function de(t, e, n) {
    if (n === void 0 && (n = dt), !e) throw xt(1, e);
    var r = function(o) {
        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
        return t(e, n, un.apply(void 0, yt([o], i, !1)))
    };
    return r.attrs = function(o) {
        return de(t, e, B(B({}, n), {
            attrs: Array.prototype.concat(n.attrs, o).filter(Boolean)
        }))
    }, r.withConfig = function(o) {
        return de(t, e, B(B({}, n), o))
    }, r
}
var fn = function(t) {
        return de(Cr, t)
    },
    Q = fn;
Ze.forEach(function(t) {
    Q[t] = fn(t)
});

function ye(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    var r = se(un.apply(void 0, yt([t], e, !1))),
        o = Je(r);
    return new cn(o, r)
}
const Be = "#4fa94d",
    Sr = {
        "aria-busy": !0,
        role: "progressbar"
    },
    kr = Q.div `
  display: ${t=>t.$visible?"flex":"none"};
`,
    D = 242.776657104492,
    _r = 1.6,
    Er = ye `
  12.5% {
    stroke-dasharray: ${D*.14}px, ${D}px;
    stroke-dashoffset: -${D*.11}px;
  }
  43.75% {
    stroke-dasharray: ${D*.35}px, ${D}px;
    stroke-dashoffset: -${D*.35}px;
  }
  100% {
    stroke-dasharray: ${D*.01}px, ${D}px;
    stroke-dashoffset: -${D*.99}px;
  }
`;
Q.path `
  stroke-dasharray: ${D*.01}px, ${D};
  stroke-dashoffset: 0;
  animation: ${Er} ${_r}s linear infinite;
`;
const te = 20,
    Ar = t => ["M" + t + " 0c0-9.94-8.06", t, t, t].join("-"),
    Pr = (t, e, n) => {
        const r = Math.max(t, e),
            o = -n - r / 2 + 1,
            i = n * 2 + r;
        return [o, o, i, i].join(" ")
    },
    Ir = ({
        height: t = 80,
        width: e = 80,
        color: n = Be,
        secondaryColor: r = Be,
        ariaLabel: o = "oval-loading",
        wrapperStyle: i,
        wrapperClass: a,
        visible: d = !0,
        strokeWidth: s = 2,
        strokeWidthSecondary: p
    }) => R.jsx(kr, {
        style: i,
        $visible: d,
        className: a,
        "data-testid": "oval-loading",
        "aria-label": o,
        ...Sr,
        children: R.jsx("svg", {
            width: e,
            height: t,
            viewBox: Pr(Number(s), Number(p || s), te),
            xmlns: "http://www.w3.org/2000/svg",
            stroke: n,
            "data-testid": "oval-svg",
            children: R.jsx("g", {
                fill: "none",
                fillRule: "evenodd",
                children: R.jsxs("g", {
                    transform: "translate(1 1)",
                    strokeWidth: Number(p || s),
                    "data-testid": "oval-secondary-group",
                    children: [R.jsx("circle", {
                        strokeOpacity: ".5",
                        cx: "0",
                        cy: "0",
                        r: te,
                        stroke: r,
                        strokeWidth: s
                    }), R.jsx("path", {
                        d: Ar(te),
                        children: R.jsx("animateTransform", {
                            attributeName: "transform",
                            type: "rotate",
                            from: "0 0 0",
                            to: "360 0 0",
                            dur: "1s",
                            repeatCount: "indefinite"
                        })
                    })]
                })
            })
        })
    }),
    Lr = ye `
 to {
    transform: rotate(360deg);
  }
`;
Q.svg `
  animation: ${Lr} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
Q.polyline `
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;
const Rr = ye `
 to {
    stroke-dashoffset: 136;
  }
`;
Q.polygon `
  stroke-dasharray: 17;
  animation: ${Rr} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
Q.svg `
  transform-origin: 50% 65%;
`;
const Br = J.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`,
    fo = ({
        style: t
    }) => R.jsx(Br, {
        style: t,
        children: R.jsx(Ir, {
            height: 50,
            width: 50,
            color: "#387636",
            wrapperClass: "",
            visible: !0,
            ariaLabel: "oval-loading",
            secondaryColor: "#4fa94d",
            strokeWidth: 2,
            strokeWidthSecondary: 2
        })
    });
let pe = {};

function ee(t = {}) {
    pe = {
        animate: !0,
        allowClose: !0,
        overlayOpacity: .7,
        smoothScroll: !1,
        disableActiveInteraction: !1,
        showProgress: !1,
        stagePadding: 10,
        stageRadius: 5,
        popoverOffset: 10,
        showButtons: ["next", "previous", "close"],
        disableButtons: [],
        overlayColor: "#000",
        ...t
    }
}

function h(t) {
    return t ? pe[t] : pe
}

function At(t, e, n, r) {
    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
}

function hn(t) {
    const e = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
    return t.flatMap(n => {
        const r = n.matches(e),
            o = Array.from(n.querySelectorAll(e));
        return [...r ? [n] : [], ...o]
    }).filter(n => getComputedStyle(n).pointerEvents !== "none" && Dr(n))
}

function vn(t) {
    if (!t || Tr(t)) return;
    const e = h("smoothScroll");
    t.scrollIntoView({
        behavior: !e || Nr(t) ? "auto" : "smooth",
        inline: "center",
        block: "center"
    })
}

function Nr(t) {
    if (!t || !t.parentElement) return;
    const e = t.parentElement;
    return e.scrollHeight > e.clientHeight
}

function Tr(t) {
    const e = t.getBoundingClientRect();
    return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
}

function Dr(t) {
    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
}
let jt = {};

function I(t, e) {
    jt[t] = e
}

function v(t) {
    return t ? jt[t] : jt
}

function Ne() {
    jt = {}
}
let Mt = {};

function Pt(t, e) {
    Mt[t] = e
}

function X(t) {
    var e;
    (e = Mt[t]) == null || e.call(Mt)
}

function jr() {
    Mt = {}
}

function Mr(t, e, n, r) {
    let o = v("__activeStagePosition");
    const i = o || n.getBoundingClientRect(),
        a = r.getBoundingClientRect(),
        d = At(t, i.x, a.x - i.x, e),
        s = At(t, i.y, a.y - i.y, e),
        p = At(t, i.width, a.width - i.width, e),
        c = At(t, i.height, a.height - i.height, e);
    o = {
        x: d,
        y: s,
        width: p,
        height: c
    }, gn(o), I("__activeStagePosition", o)
}

function mn(t) {
    if (!t) return;
    const e = t.getBoundingClientRect(),
        n = {
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height
        };
    I("__activeStagePosition", n), gn(n)
}

function Or() {
    const t = v("__activeStagePosition"),
        e = v("__overlaySvg");
    if (!t) return;
    if (!e) {
        console.warn("No stage svg found.");
        return
    }
    const n = window.innerWidth,
        r = window.innerHeight;
    e.setAttribute("viewBox", `0 0 ${n} ${r}`)
}

function Wr(t) {
    const e = Hr(t);
    document.body.appendChild(e), bn(e, n => {
        n.target.tagName === "path" && X("overlayClick")
    }), I("__overlaySvg", e)
}

function gn(t) {
    const e = v("__overlaySvg");
    if (!e) {
        Wr(t);
        return
    }
    const n = e.firstElementChild;
    if ((n == null ? void 0 : n.tagName) !== "path") throw new Error("no path element found in stage svg");
    n.setAttribute("d", yn(t))
}

function Hr(t) {
    const e = window.innerWidth,
        n = window.innerHeight,
        r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    r.classList.add("driver-overlay", "driver-overlay-animated"), r.setAttribute("viewBox", `0 0 ${e} ${n}`), r.setAttribute("xmlSpace", "preserve"), r.setAttribute("xmlnsXlink", "http://www.w3.org/1999/xlink"), r.setAttribute("version", "1.1"), r.setAttribute("preserveAspectRatio", "xMinYMin slice"), r.style.fillRule = "evenodd", r.style.clipRule = "evenodd", r.style.strokeLinejoin = "round", r.style.strokeMiterlimit = "2", r.style.zIndex = "10000", r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.height = "100%";
    const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return o.setAttribute("d", yn(t)), o.style.fill = h("overlayColor") || "rgb(0,0,0)", o.style.opacity = `${h("overlayOpacity")}`, o.style.pointerEvents = "auto", o.style.cursor = "auto", r.appendChild(o), r
}

function yn(t) {
    const e = window.innerWidth,
        n = window.innerHeight,
        r = h("stagePadding") || 0,
        o = h("stageRadius") || 0,
        i = t.width + r * 2,
        a = t.height + r * 2,
        d = Math.min(o, i / 2, a / 2),
        s = Math.floor(Math.max(d, 0)),
        p = t.x - r + s,
        c = t.y - r,
        l = i - s * 2,
        u = a - s * 2;
    return `M${e},0L0,0L0,${n}L${e},${n}L${e},0Z
    M${p},${c} h${l} a${s},${s} 0 0 1 ${s},${s} v${u} a${s},${s} 0 0 1 -${s},${s} h-${l} a${s},${s} 0 0 1 -${s},-${s} v-${u} a${s},${s} 0 0 1 ${s},-${s} z`
}

function zr() {
    const t = v("__overlaySvg");
    t && t.remove()
}

function Fr() {
    const t = document.getElementById("driver-dummy-element");
    if (t) return t;
    let e = document.createElement("div");
    return e.id = "driver-dummy-element", e.style.width = "0", e.style.height = "0", e.style.pointerEvents = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.top = "50%", e.style.left = "50%", document.body.appendChild(e), e
}

function Te(t) {
    const {
        element: e
    } = t;
    let n = typeof e == "string" ? document.querySelector(e) : e;
    n || (n = Fr()), Yr(n, t)
}

function Gr() {
    const t = v("__activeElement"),
        e = v("__activeStep");
    t && (mn(t), Or(), $n(t, e))
}

function Yr(t, e) {
    const n = Date.now(),
        r = v("__activeStep"),
        o = v("__activeElement") || t,
        i = !o || o === t,
        a = t.id === "driver-dummy-element",
        d = o.id === "driver-dummy-element",
        s = h("animate"),
        p = e.onHighlightStarted || h("onHighlightStarted"),
        c = (e == null ? void 0 : e.onHighlighted) || h("onHighlighted"),
        l = (r == null ? void 0 : r.onDeselected) || h("onDeselected"),
        u = h(),
        f = v();
    !i && l && l(d ? void 0 : o, r, {
        config: u,
        state: f
    }), p && p(a ? void 0 : t, e, {
        config: u,
        state: f
    });
    const g = !i && s;
    let y = !1;
    Vr(), I("previousStep", r), I("previousElement", o), I("activeStep", e), I("activeElement", t);
    const m = () => {
        if (v("__transitionCallback") !== m) return;
        const w = Date.now() - n,
            S = 400 - w <= 400 / 2;
        e.popover && S && !y && g && (De(t, e), y = !0), h("animate") && w < 400 ? Mr(w, 400, o, t) : (mn(t), c && c(a ? void 0 : t, e, {
            config: h(),
            state: v()
        }), I("__transitionCallback", void 0), I("__previousStep", r), I("__previousElement", o), I("__activeStep", e), I("__activeElement", t)), window.requestAnimationFrame(m)
    };
    I("__transitionCallback", m), window.requestAnimationFrame(m), vn(t), !g && e.popover && De(t, e), o.classList.remove("driver-active-element", "driver-no-interaction"), o.removeAttribute("aria-haspopup"), o.removeAttribute("aria-expanded"), o.removeAttribute("aria-controls"), h("disableActiveInteraction") && t.classList.add("driver-no-interaction"), t.classList.add("driver-active-element"), t.setAttribute("aria-haspopup", "dialog"), t.setAttribute("aria-expanded", "true"), t.setAttribute("aria-controls", "driver-popover-content")
}

function qr() {
    var t;
    (t = document.getElementById("driver-dummy-element")) == null || t.remove(), document.querySelectorAll(".driver-active-element").forEach(e => {
        e.classList.remove("driver-active-element", "driver-no-interaction"), e.removeAttribute("aria-haspopup"), e.removeAttribute("aria-expanded"), e.removeAttribute("aria-controls")
    })
}

function bt() {
    const t = v("__resizeTimeout");
    t && window.cancelAnimationFrame(t), I("__resizeTimeout", window.requestAnimationFrame(Gr))
}

function Kr(t) {
    var e;
    if (!v("isInitialized") || !(t.key === "Tab" || t.keyCode === 9)) return;
    const n = v("__activeElement"),
        r = (e = v("popover")) == null ? void 0 : e.wrapper,
        o = hn([...r ? [r] : [], ...n ? [n] : []]),
        i = o[0],
        a = o[o.length - 1];
    if (t.preventDefault(), t.shiftKey) {
        const d = o[o.indexOf(document.activeElement) - 1] || a;
        d == null || d.focus()
    } else {
        const d = o[o.indexOf(document.activeElement) + 1] || i;
        d == null || d.focus()
    }
}

function wn(t) {
    var e;
    ((e = h("allowKeyboardControl")) == null || e) && (t.key === "Escape" ? X("escapePress") : t.key === "ArrowRight" ? X("arrowRightPress") : t.key === "ArrowLeft" && X("arrowLeftPress"))
}

function bn(t, e, n) {
    const r = (o, i) => {
        const a = o.target;
        t.contains(a) && ((!n || n(a)) && (o.preventDefault(), o.stopPropagation(), o.stopImmediatePropagation()), i == null || i(o))
    };
    document.addEventListener("pointerdown", r, !0), document.addEventListener("mousedown", r, !0), document.addEventListener("pointerup", r, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", o => {
        r(o, e)
    }, !0)
}

function Ur() {
    window.addEventListener("keyup", wn, !1), window.addEventListener("keydown", Kr, !1), window.addEventListener("resize", bt), window.addEventListener("scroll", bt)
}

function Zr() {
    window.removeEventListener("keyup", wn), window.removeEventListener("resize", bt), window.removeEventListener("scroll", bt)
}

function Vr() {
    const t = v("popover");
    t && (t.wrapper.style.display = "none")
}

function De(t, e) {
    var n, r;
    let o = v("popover");
    o && document.body.removeChild(o.wrapper), o = Jr(), document.body.appendChild(o.wrapper);
    const {
        title: i,
        description: a,
        showButtons: d,
        disableButtons: s,
        showProgress: p,
        nextBtnText: c = h("nextBtnText") || "Next &rarr;",
        prevBtnText: l = h("prevBtnText") || "&larr; Previous",
        progressText: u = h("progressText") || "{current} of {total}"
    } = e.popover || {};
    o.nextButton.innerHTML = c, o.previousButton.innerHTML = l, o.progress.innerHTML = u, i ? (o.title.innerHTML = i, o.title.style.display = "block") : o.title.style.display = "none", a ? (o.description.innerHTML = a, o.description.style.display = "block") : o.description.style.display = "none";
    const f = d || h("showButtons"),
        g = p || h("showProgress") || !1,
        y = (f == null ? void 0 : f.includes("next")) || (f == null ? void 0 : f.includes("previous")) || g;
    o.closeButton.style.display = f.includes("close") ? "block" : "none", y ? (o.footer.style.display = "flex", o.progress.style.display = g ? "block" : "none", o.nextButton.style.display = f.includes("next") ? "block" : "none", o.previousButton.style.display = f.includes("previous") ? "block" : "none") : o.footer.style.display = "none";
    const m = s || h("disableButtons") || [];
    m != null && m.includes("next") && (o.nextButton.disabled = !0, o.nextButton.classList.add("driver-popover-btn-disabled")), m != null && m.includes("previous") && (o.previousButton.disabled = !0, o.previousButton.classList.add("driver-popover-btn-disabled")), m != null && m.includes("close") && (o.closeButton.disabled = !0, o.closeButton.classList.add("driver-popover-btn-disabled"));
    const w = o.wrapper;
    w.style.display = "block", w.style.left = "", w.style.top = "", w.style.bottom = "", w.style.right = "", w.id = "driver-popover-content", w.setAttribute("role", "dialog"), w.setAttribute("aria-labelledby", "driver-popover-title"), w.setAttribute("aria-describedby", "driver-popover-description");
    const S = o.arrow;
    S.className = "driver-popover-arrow";
    const k = ((n = e.popover) == null ? void 0 : n.popoverClass) || h("popoverClass") || "";
    w.className = `driver-popover ${k}`.trim(), bn(o.wrapper, b => {
        var M, W, tt;
        const H = b.target,
            et = ((M = e.popover) == null ? void 0 : M.onNextClick) || h("onNextClick"),
            nt = ((W = e.popover) == null ? void 0 : W.onPrevClick) || h("onPrevClick"),
            rt = ((tt = e.popover) == null ? void 0 : tt.onCloseClick) || h("onCloseClick");
        if (H.classList.contains("driver-popover-next-btn")) return et ? et(t, e, {
            config: h(),
            state: v()
        }) : X("nextClick");
        if (H.classList.contains("driver-popover-prev-btn")) return nt ? nt(t, e, {
            config: h(),
            state: v()
        }) : X("prevClick");
        if (H.classList.contains("driver-popover-close-btn")) return rt ? rt(t, e, {
            config: h(),
            state: v()
        }) : X("closeClick")
    }, b => !(o != null && o.description.contains(b)) && !(o != null && o.title.contains(b)) && typeof b.className == "string" && b.className.includes("driver-popover")), I("popover", o);
    const $ = ((r = e.popover) == null ? void 0 : r.onPopoverRender) || h("onPopoverRender");
    $ && $(o, {
        config: h(),
        state: v()
    }), $n(t, e), vn(w);
    const _ = t.classList.contains("driver-dummy-element"),
        x = hn([w, ..._ ? [] : [t]]);
    x.length > 0 && x[0].focus()
}

function xn() {
    const t = v("popover");
    if (!(t != null && t.wrapper)) return;
    const e = t.wrapper.getBoundingClientRect(),
        n = h("stagePadding") || 0,
        r = h("popoverOffset") || 0;
    return {
        width: e.width + n + r,
        height: e.height + n + r,
        realWidth: e.width,
        realHeight: e.height
    }
}

function je(t, e) {
    const {
        elementDimensions: n,
        popoverDimensions: r,
        popoverPadding: o,
        popoverArrowDimensions: i
    } = e;
    return t === "start" ? Math.max(Math.min(n.top - o, window.innerHeight - r.realHeight - i.width), i.width) : t === "end" ? Math.max(Math.min(n.top - (r == null ? void 0 : r.realHeight) + n.height + o, window.innerHeight - (r == null ? void 0 : r.realHeight) - i.width), i.width) : t === "center" ? Math.max(Math.min(n.top + n.height / 2 - (r == null ? void 0 : r.realHeight) / 2, window.innerHeight - (r == null ? void 0 : r.realHeight) - i.width), i.width) : 0
}

function Me(t, e) {
    const {
        elementDimensions: n,
        popoverDimensions: r,
        popoverPadding: o,
        popoverArrowDimensions: i
    } = e;
    return t === "start" ? Math.max(Math.min(n.left - o, window.innerWidth - r.realWidth - i.width), i.width) : t === "end" ? Math.max(Math.min(n.left - (r == null ? void 0 : r.realWidth) + n.width + o, window.innerWidth - (r == null ? void 0 : r.realWidth) - i.width), i.width) : t === "center" ? Math.max(Math.min(n.left + n.width / 2 - (r == null ? void 0 : r.realWidth) / 2, window.innerWidth - (r == null ? void 0 : r.realWidth) - i.width), i.width) : 0
}

function $n(t, e) {
    const n = v("popover");
    if (!n) return;
    const {
        align: r = "start",
        side: o = "left"
    } = (e == null ? void 0 : e.popover) || {}, i = r, a = t.id === "driver-dummy-element" ? "over" : o, d = h("stagePadding") || 0, s = xn(), p = n.arrow.getBoundingClientRect(), c = t.getBoundingClientRect(), l = c.top - s.height;
    let u = l >= 0;
    const f = window.innerHeight - (c.bottom + s.height);
    let g = f >= 0;
    const y = c.left - s.width;
    let m = y >= 0;
    const w = window.innerWidth - (c.right + s.width);
    let S = w >= 0;
    const k = !u && !g && !m && !S;
    let $ = a;
    if (a === "top" && u ? S = m = g = !1 : a === "bottom" && g ? S = m = u = !1 : a === "left" && m ? S = u = g = !1 : a === "right" && S && (m = u = g = !1), a === "over") {
        const _ = window.innerWidth / 2 - s.realWidth / 2,
            x = window.innerHeight / 2 - s.realHeight / 2;
        n.wrapper.style.left = `${_}px`, n.wrapper.style.right = "auto", n.wrapper.style.top = `${x}px`, n.wrapper.style.bottom = "auto"
    } else if (k) {
        const _ = window.innerWidth / 2 - (s == null ? void 0 : s.realWidth) / 2,
            x = 10;
        n.wrapper.style.left = `${_}px`, n.wrapper.style.right = "auto", n.wrapper.style.bottom = `${x}px`, n.wrapper.style.top = "auto"
    } else if (m) {
        const _ = Math.min(y, window.innerWidth - (s == null ? void 0 : s.realWidth) - p.width),
            x = je(i, {
                elementDimensions: c,
                popoverDimensions: s,
                popoverPadding: d,
                popoverArrowDimensions: p
            });
        n.wrapper.style.left = `${_}px`, n.wrapper.style.top = `${x}px`, n.wrapper.style.bottom = "auto", n.wrapper.style.right = "auto", $ = "left"
    } else if (S) {
        const _ = Math.min(w, window.innerWidth - (s == null ? void 0 : s.realWidth) - p.width),
            x = je(i, {
                elementDimensions: c,
                popoverDimensions: s,
                popoverPadding: d,
                popoverArrowDimensions: p
            });
        n.wrapper.style.right = `${_}px`, n.wrapper.style.top = `${x}px`, n.wrapper.style.bottom = "auto", n.wrapper.style.left = "auto", $ = "right"
    } else if (u) {
        const _ = Math.min(l, window.innerHeight - s.realHeight - p.width);
        let x = Me(i, {
            elementDimensions: c,
            popoverDimensions: s,
            popoverPadding: d,
            popoverArrowDimensions: p
        });
        n.wrapper.style.top = `${_}px`, n.wrapper.style.left = `${x}px`, n.wrapper.style.bottom = "auto", n.wrapper.style.right = "auto", $ = "top"
    } else if (g) {
        const _ = Math.min(f, window.innerHeight - (s == null ? void 0 : s.realHeight) - p.width);
        let x = Me(i, {
            elementDimensions: c,
            popoverDimensions: s,
            popoverPadding: d,
            popoverArrowDimensions: p
        });
        n.wrapper.style.left = `${x}px`, n.wrapper.style.bottom = `${_}px`, n.wrapper.style.top = "auto", n.wrapper.style.right = "auto", $ = "bottom"
    }
    k ? n.arrow.classList.add("driver-popover-arrow-none") : Xr(i, $, t)
}

function Xr(t, e, n) {
    const r = v("popover");
    if (!r) return;
    const o = n.getBoundingClientRect(),
        i = xn(),
        a = r.arrow,
        d = i.width,
        s = window.innerWidth,
        p = o.width,
        c = o.left,
        l = i.height,
        u = window.innerHeight,
        f = o.top,
        g = o.height;
    a.className = "driver-popover-arrow";
    let y = e,
        m = t;
    e === "top" ? (c + p <= 0 ? (y = "right", m = "end") : c + p - d <= 0 && (y = "top", m = "start"), c >= s ? (y = "left", m = "end") : c + d >= s && (y = "top", m = "end")) : e === "bottom" ? (c + p <= 0 ? (y = "right", m = "start") : c + p - d <= 0 && (y = "bottom", m = "start"), c >= s ? (y = "left", m = "start") : c + d >= s && (y = "bottom", m = "end")) : e === "left" ? (f + g <= 0 ? (y = "bottom", m = "end") : f + g - l <= 0 && (y = "left", m = "start"), f >= u ? (y = "top", m = "end") : f + l >= u && (y = "left", m = "end")) : e === "right" && (f + g <= 0 ? (y = "bottom", m = "start") : f + g - l <= 0 && (y = "right", m = "start"), f >= u ? (y = "top", m = "start") : f + l >= u && (y = "right", m = "end")), y ? (a.classList.add(`driver-popover-arrow-side-${y}`), a.classList.add(`driver-popover-arrow-align-${m}`)) : a.classList.add("driver-popover-arrow-none")
}

function Jr() {
    const t = document.createElement("div");
    t.classList.add("driver-popover");
    const e = document.createElement("div");
    e.classList.add("driver-popover-arrow");
    const n = document.createElement("header");
    n.id = "driver-popover-title", n.classList.add("driver-popover-title"), n.style.display = "none", n.innerText = "Popover Title";
    const r = document.createElement("div");
    r.id = "driver-popover-description", r.classList.add("driver-popover-description"), r.style.display = "none", r.innerText = "Popover description is here";
    const o = document.createElement("button");
    o.type = "button", o.classList.add("driver-popover-close-btn"), o.setAttribute("aria-label", "Close"), o.innerHTML = "&times;";
    const i = document.createElement("footer");
    i.classList.add("driver-popover-footer");
    const a = document.createElement("span");
    a.classList.add("driver-popover-progress-text"), a.innerText = "";
    const d = document.createElement("span");
    d.classList.add("driver-popover-navigation-btns");
    const s = document.createElement("button");
    s.type = "button", s.classList.add("driver-popover-prev-btn"), s.innerHTML = "&larr; Previous";
    const p = document.createElement("button");
    return p.type = "button", p.classList.add("driver-popover-next-btn"), p.innerHTML = "Next &rarr;", d.appendChild(s), d.appendChild(p), i.appendChild(a), i.appendChild(d), t.appendChild(o), t.appendChild(e), t.appendChild(n), t.appendChild(r), t.appendChild(i), {
        wrapper: t,
        arrow: e,
        title: n,
        description: r,
        footer: i,
        previousButton: s,
        nextButton: p,
        closeButton: o,
        footerButtons: d,
        progress: a
    }
}

function Qr() {
    var t;
    const e = v("popover");
    e && ((t = e.wrapper.parentElement) == null || t.removeChild(e.wrapper))
}

function ho(t = {}) {
    ee(t);

    function e() {
        h("allowClose") && p()
    }

    function n() {
        const c = v("activeIndex"),
            l = h("steps") || [];
        if (typeof c > "u") return;
        const u = c + 1;
        l[u] ? s(u) : p()
    }

    function r() {
        const c = v("activeIndex"),
            l = h("steps") || [];
        if (typeof c > "u") return;
        const u = c - 1;
        l[u] ? s(u) : p()
    }

    function o(c) {
        (h("steps") || [])[c] ? s(c): p()
    }

    function i() {
        var c;
        if (v("__transitionCallback")) return;
        const l = v("activeIndex"),
            u = v("__activeStep"),
            f = v("__activeElement");
        if (typeof l > "u" || typeof u > "u" || typeof v("activeIndex") > "u") return;
        const g = ((c = u.popover) == null ? void 0 : c.onPrevClick) || h("onPrevClick");
        if (g) return g(f, u, {
            config: h(),
            state: v()
        });
        r()
    }

    function a() {
        var c;
        if (v("__transitionCallback")) return;
        const l = v("activeIndex"),
            u = v("__activeStep"),
            f = v("__activeElement");
        if (typeof l > "u" || typeof u > "u") return;
        const g = ((c = u.popover) == null ? void 0 : c.onNextClick) || h("onNextClick");
        if (g) return g(f, u, {
            config: h(),
            state: v()
        });
        n()
    }

    function d() {
        v("isInitialized") || (I("isInitialized", !0), document.body.classList.add("driver-active", h("animate") ? "driver-fade" : "driver-simple"), Ur(), Pt("overlayClick", e), Pt("escapePress", e), Pt("arrowLeftPress", i), Pt("arrowRightPress", a))
    }

    function s(c = 0) {
        var l, u, f, g, y, m, w, S;
        const k = h("steps");
        if (!k) {
            console.error("No steps to drive through"), p();
            return
        }
        if (!k[c]) {
            p();
            return
        }
        I("__activeOnDestroyed", document.activeElement), I("activeIndex", c);
        const $ = k[c],
            _ = k[c + 1],
            x = k[c - 1],
            b = ((l = $.popover) == null ? void 0 : l.doneBtnText) || h("doneBtnText") || "Done",
            M = h("allowClose"),
            W = typeof((u = $.popover) == null ? void 0 : u.showProgress) < "u" ? (f = $.popover) == null ? void 0 : f.showProgress : h("showProgress"),
            tt = (((g = $.popover) == null ? void 0 : g.progressText) || h("progressText") || "{{current}} of {{total}}").replace("{{current}}", `${c+1}`).replace("{{total}}", `${k.length}`),
            H = ((y = $.popover) == null ? void 0 : y.showButtons) || h("showButtons"),
            et = ["next", "previous", ...M ? ["close"] : []].filter(qt => !(H != null && H.length) || H.includes(qt)),
            nt = ((m = $.popover) == null ? void 0 : m.onNextClick) || h("onNextClick"),
            rt = ((w = $.popover) == null ? void 0 : w.onPrevClick) || h("onPrevClick"),
            Yt = ((S = $.popover) == null ? void 0 : S.onCloseClick) || h("onCloseClick");
        Te({ ...$,
            popover: {
                showButtons: et,
                nextBtnText: _ ? void 0 : b,
                disableButtons: [...x ? [] : ["previous"]],
                showProgress: W,
                progressText: tt,
                onNextClick: nt || (() => {
                    _ ? s(c + 1) : p()
                }),
                onPrevClick: rt || (() => {
                    s(c - 1)
                }),
                onCloseClick: Yt || (() => {
                    p()
                }),
                ...($ == null ? void 0 : $.popover) || {}
            }
        })
    }

    function p(c = !0) {
        const l = v("__activeElement"),
            u = v("__activeStep"),
            f = v("__activeOnDestroyed"),
            g = h("onDestroyStarted");
        if (c && g) {
            const w = !l || (l == null ? void 0 : l.id) === "driver-dummy-element";
            g(w ? void 0 : l, u, {
                config: h(),
                state: v()
            });
            return
        }
        const y = (u == null ? void 0 : u.onDeselected) || h("onDeselected"),
            m = h("onDestroyed");
        if (document.body.classList.remove("driver-active", "driver-fade", "driver-simple"), Zr(), Qr(), qr(), zr(), jr(), Ne(), l && u) {
            const w = l.id === "driver-dummy-element";
            y && y(w ? void 0 : l, u, {
                config: h(),
                state: v()
            }), m && m(w ? void 0 : l, u, {
                config: h(),
                state: v()
            })
        }
        f && f.focus()
    }
    return {
        isActive: () => v("isInitialized") || !1,
        refresh: bt,
        drive: (c = 0) => {
            d(), s(c)
        },
        setConfig: ee,
        setSteps: c => {
            Ne(), ee({ ...h(),
                steps: c
            })
        },
        getConfig: h,
        getState: v,
        getActiveIndex: () => v("activeIndex"),
        isFirstStep: () => v("activeIndex") === 0,
        isLastStep: () => {
            const c = h("steps") || [],
                l = v("activeIndex");
            return l !== void 0 && l === c.length - 1
        },
        getActiveStep: () => v("activeStep"),
        getActiveElement: () => v("activeElement"),
        getPreviousElement: () => v("previousElement"),
        getPreviousStep: () => v("previousStep"),
        moveNext: n,
        movePrevious: r,
        moveTo: o,
        hasNextStep: () => {
            const c = h("steps") || [],
                l = v("activeIndex");
            return l !== void 0 && c[l + 1]
        },
        hasPreviousStep: () => {
            const c = h("steps") || [],
                l = v("activeIndex");
            return l !== void 0 && c[l - 1]
        },
        highlight: c => {
            d(), Te({ ...c,
                popover: c.popover ? {
                    showButtons: [],
                    showProgress: !1,
                    progressText: "",
                    ...c.popover
                } : void 0
            })
        },
        destroy: () => {
            p(!1)
        }
    }
}

function to(t) {
    return Oe({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "40",
                d: "M196 220h64v172"
            }
        }, {
            tag: "path",
            attr: {
                fill: "none",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "40",
                d: "M187 396h138"
            }
        }, {
            tag: "path",
            attr: {
                d: "M256 160a32 32 0 1132-32 32 32 0 01-32 32z"
            }
        }]
    })(t)
}
const eo = J.div `
  position: absolute;
  top: -40px;
  right: -20px;
  width: 50px;
  height: 50px;
  z-index: 3;
`,
    no = J.button `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: #fcefde;
  color: #81451e;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1300px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

  :disabled {
    opacity: 0.3;
  }

  &:hover:not([disabled]) {
    transform: scale(1.05);
    color: #81451e;
  }
`,
    vo = ({
        onClick: t
    }) => {
        const {
            t: e
        } = Cn();
        return R.jsx(eo, {
            children: R.jsx(no, {
                title: e("stake.information"),
                onClick: t,
                children: R.jsx(to, {
                    size: 25
                })
            })
        })
    },
    ro = {
        hidden: {
            opacity: 0,
            transition: {
                duration: .2
            },
            transitionEnd: {
                display: "none"
            }
        },
        show: {
            display: "flex",
            opacity: 1,
            transition: {
                duration: .2
            }
        }
    },
    oo = {
        hidden: {
            opacity: 0,
            scale: 0,
            transition: {
                duration: .2
            },
            transitionEnd: {
                display: "none"
            }
        },
        show: {
            display: "flex",
            opacity: 1,
            scale: 1,
            transition: {
                delay: .1,
                duration: .2
            }
        }
    },
    io = J(We.div)
`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
`, so = J(We.div)
`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px;
  margin: 3%;
  width: 100%;
  max-width: 600px;
  border: 10px solid;
  border-image: url("/images/popup/popupBorder.svg") 12 fill;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    padding: 50px 35px;
    max-width: 500px;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 25px;
  }

  @media screen and (max-width: 480px) {
    padding: 50px 10px;
  }
`, ao = J.button `
  position: absolute;
  width: 100%;
  max-width: 35px;
  color: #81451e;
  font-weight: bold;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  background: transparent;
  border: 5px solid;
  border-image: url("/images/footer/iconBorder.svg") 12 fill;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  top: 2.5%;
  right: 2.5%;
  font-size: 25px;

  @media screen and (max-width: 1300px) {
    max-width: 35px;
    padding: 4px;
  }

  @media screen and (max-width: 768px) {
    max-width: 30px;
    padding: 2.5px;
  }

  :disabled {
    opacity: 0.3;
  }

  &:hover:not([disabled]) {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    box-shadow: -10px 10px 0px -4px rgba(0, 0, 0, 0.6);
  }
`, co = J.img `
  width: 100%;
  max-width: 50px;
  height: auto;
`, mo = t => {
    const {
        children: e,
        open: n,
        setOpen: r,
        disablePopup: o
    } = t, i = () => {
        r(!1)
    };
    return le.useEffect(() => {
        document.body.style.overflow = n ? "hidden" : "unset"
    }, [n]), R.jsx(io, {
        onClick: () => !o && r(!1),
        initial: "hidden",
        animate: n ? "show" : "hidden",
        variants: ro,
        children: R.jsxs(so, {
            onClick: a => a.stopPropagation(),
            initial: "hidden",
            animate: n ? "show" : "hidden",
            variants: oo,
            children: [!o && R.jsx(ao, {
                onClick: () => i(),
                children: R.jsx(co, {
                    src: "/images/popup/close.svg"
                })
            }), e]
        })
    })
};
export {
    uo as F, fo as S, vo as a, ro as b, mo as i, ho as k, oo as w
};