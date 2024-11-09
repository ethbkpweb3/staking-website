import {r as S, J as Ce, K as Li, M as we, N as rs, O as Ri, H as A, Q as L, I as _, R as F, S as as, T as ee} from "./index-IT1gKaF9.js";
const ls = S.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
})
  , Xt = S.createContext({})
  , cs = S.createContext({
    strict: !1
})
  , De = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  , Bi = "framerAppearId"
  , us = "data-" + De(Bi);
function ki(t, e, n, s) {
    const {visualElement: i} = S.useContext(Xt)
      , r = S.useContext(cs)
      , o = S.useContext(Ce)
      , a = S.useContext(ls).reducedMotion
      , l = S.useRef();
    s = s || r.renderer,
    !l.current && s && (l.current = s(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a
    }));
    const c = l.current;
    S.useInsertionEffect( () => {
        c && c.update(n, o)
    }
    );
    const u = S.useRef(!!(n[us] && !window.HandoffComplete));
    return Li( () => {
        c && (c.render(),
        u.current && c.animationState && c.animationState.animateChanges())
    }
    ),
    S.useEffect( () => {
        c && (c.updateFeatures(),
        !u.current && c.animationState && c.animationState.animateChanges(),
        u.current && (u.current = !1,
        window.HandoffComplete = !0))
    }
    ),
    c
}
function ft(t) {
    return typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function Fi(t, e, n) {
    return S.useCallback(s => {
        s && t.mount && t.mount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == "function" ? n(s) : ft(n) && (n.current = s))
    }
    , [e])
}
function wt(t) {
    return typeof t == "string" || Array.isArray(t)
}
function Yt(t) {
    return typeof t == "object" && typeof t.start == "function"
}
const Me = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Le = ["initial", ...Me];
function qt(t) {
    return Yt(t.animate) || Le.some(e => wt(t[e]))
}
function hs(t) {
    return !!(qt(t) || t.variants)
}
function Ei(t, e) {
    if (qt(t)) {
        const {initial: n, animate: s} = t;
        return {
            initial: n === !1 || wt(n) ? n : void 0,
            animate: wt(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function ji(t) {
    const {initial: e, animate: n} = Ei(t, S.useContext(Xt));
    return S.useMemo( () => ({
        initial: e,
        animate: n
    }), [nn(e), nn(n)])
}
function nn(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const sn = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Dt = {};
for (const t in sn)
    Dt[t] = {
        isEnabled: e => sn[t].some(n => !!e[n])
    };
function Oi(t) {
    for (const e in t)
        Dt[e] = {
            ...Dt[e],
            ...t[e]
        }
}
const fs = S.createContext({})
  , Ii = Symbol.for("motionComponentSymbol");
function Ui({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: i}) {
    t && Oi(t);
    function r(a, l) {
        let c;
        const u = {
            ...S.useContext(ls),
            ...a,
            layoutId: Ni(a)
        }
          , {isStatic: h} = u
          , f = ji(a)
          , d = s(a, h);
        if (!h && we) {
            f.visualElement = ki(i, d, u, e);
            const m = S.useContext(fs)
              , p = S.useContext(cs).strict;
            f.visualElement && (c = f.visualElement.loadFeatures(u, p, t, m))
        }
        return S.createElement(Xt.Provider, {
            value: f
        }, c && f.visualElement ? S.createElement(c, {
            visualElement: f.visualElement,
            ...u
        }) : null, n(i, a, Fi(d, f.visualElement, l), d, h, f.visualElement))
    }
    const o = S.forwardRef(r);
    return o[Ii] = i,
    o
}
function Ni({layoutId: t}) {
    const e = S.useContext(rs).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function Wi(t) {
    function e(s, i={}) {
        return Ui(t(s, i))
    }
    if (typeof Proxy > "u")
        return e;
    const n = new Map;
    return new Proxy(e,{
        get: (s, i) => (n.has(i) || n.set(i, e(i)),
        n.get(i))
    })
}
const Gi = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Re(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(Gi.indexOf(t) > -1 || /[A-Z]/.test(t))
}
const Nt = {};
function Hi(t) {
    Object.assign(Nt, t)
}
const Lt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ct = new Set(Lt);
function ds(t, {layout: e, layoutId: n}) {
    return ct.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Nt[t] || t === "opacity")
}
const O = t => !!(t && t.getVelocity)
  , $i = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , zi = Lt.length;
function Ki(t, {enableHardwareAcceleration: e=!0, allowTransformNone: n=!0}, s, i) {
    let r = "";
    for (let o = 0; o < zi; o++) {
        const a = Lt[o];
        if (t[a] !== void 0) {
            const l = $i[a] || a;
            r += `${l}(${t[a]}) `
        }
    }
    return e && !t.z && (r += "translateZ(0)"),
    r = r.trim(),
    i ? r = i(t, s ? "" : r) : n && s && (r = "none"),
    r
}
const ms = t => e => typeof e == "string" && e.startsWith(t)
  , ps = ms("--")
  , de = ms("var(--")
  , _i = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , Xi = (t, e) => e && typeof t == "number" ? e.transform(t) : t
  , et = (t, e, n) => Math.min(Math.max(n, t), e)
  , ut = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , Vt = {
    ...ut,
    transform: t => et(0, 1, t)
}
  , Et = {
    ...ut,
    default: 1
}
  , St = t => Math.round(t * 1e5) / 1e5
  , Zt = /(-)?([\d]*\.?[\d])+/g
  , gs = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , Yi = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Rt(t) {
    return typeof t == "string"
}
const Bt = t => ({
    test: e => Rt(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , Z = Bt("deg")
  , W = Bt("%")
  , v = Bt("px")
  , qi = Bt("vh")
  , Zi = Bt("vw")
  , on = {
    ...W,
    parse: t => W.parse(t) / 100,
    transform: t => W.transform(t * 100)
}
  , rn = {
    ...ut,
    transform: Math.round
}
  , ys = {
    borderWidth: v,
    borderTopWidth: v,
    borderRightWidth: v,
    borderBottomWidth: v,
    borderLeftWidth: v,
    borderRadius: v,
    radius: v,
    borderTopLeftRadius: v,
    borderTopRightRadius: v,
    borderBottomRightRadius: v,
    borderBottomLeftRadius: v,
    width: v,
    maxWidth: v,
    height: v,
    maxHeight: v,
    size: v,
    top: v,
    right: v,
    bottom: v,
    left: v,
    padding: v,
    paddingTop: v,
    paddingRight: v,
    paddingBottom: v,
    paddingLeft: v,
    margin: v,
    marginTop: v,
    marginRight: v,
    marginBottom: v,
    marginLeft: v,
    rotate: Z,
    rotateX: Z,
    rotateY: Z,
    rotateZ: Z,
    scale: Et,
    scaleX: Et,
    scaleY: Et,
    scaleZ: Et,
    skew: Z,
    skewX: Z,
    skewY: Z,
    distance: v,
    translateX: v,
    translateY: v,
    translateZ: v,
    x: v,
    y: v,
    z: v,
    perspective: v,
    transformPerspective: v,
    opacity: Vt,
    originX: on,
    originY: on,
    originZ: v,
    zIndex: rn,
    fillOpacity: Vt,
    strokeOpacity: Vt,
    numOctaves: rn
};
function Be(t, e, n, s) {
    const {style: i, vars: r, transform: o, transformOrigin: a} = t;
    let l = !1
      , c = !1
      , u = !0;
    for (const h in e) {
        const f = e[h];
        if (ps(h)) {
            r[h] = f;
            continue
        }
        const d = ys[h]
          , m = Xi(f, d);
        if (ct.has(h)) {
            if (l = !0,
            o[h] = m,
            !u)
                continue;
            f !== (d.default || 0) && (u = !1)
        } else
            h.startsWith("origin") ? (c = !0,
            a[h] = m) : i[h] = m
    }
    if (e.transform || (l || s ? i.transform = Ki(t.transform, n, u, s) : i.transform && (i.transform = "none")),
    c) {
        const {originX: h="50%", originY: f="50%", originZ: d=0} = a;
        i.transformOrigin = `${h} ${f} ${d}`
    }
}
const ke = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function vs(t, e, n) {
    for (const s in e)
        !O(e[s]) && !ds(s, n) && (t[s] = e[s])
}
function Ji({transformTemplate: t}, e, n) {
    return S.useMemo( () => {
        const s = ke();
        return Be(s, e, {
            enableHardwareAcceleration: !n
        }, t),
        Object.assign({}, s.vars, s.style)
    }
    , [e])
}
function Qi(t, e, n) {
    const s = t.style || {}
      , i = {};
    return vs(i, s, t),
    Object.assign(i, Ji(t, e, n)),
    t.transformValues ? t.transformValues(i) : i
}
function to(t, e, n) {
    const s = {}
      , i = Qi(t, e, n);
    return t.drag && t.dragListener !== !1 && (s.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0),
    s.style = i,
    s
}
const eo = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
function Wt(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || eo.has(t)
}
let xs = t => !Wt(t);
function no(t) {
    t && (xs = e => e.startsWith("on") ? !Wt(e) : t(e))
}
try {
    no(require("@emotion/is-prop-valid").default)
} catch {}
function so(t, e, n) {
    const s = {};
    for (const i in t)
        i === "values" && typeof t.values == "object" || (xs(i) || n === !0 && Wt(i) || !e && !Wt(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
    return s
}
function an(t, e, n) {
    return typeof t == "string" ? t : v.transform(e + n * t)
}
function io(t, e, n) {
    const s = an(e, t.x, t.width)
      , i = an(n, t.y, t.height);
    return `${s} ${i}`
}
const oo = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , ro = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function ao(t, e, n=1, s=0, i=!0) {
    t.pathLength = 1;
    const r = i ? oo : ro;
    t[r.offset] = v.transform(-s);
    const o = v.transform(e)
      , a = v.transform(n);
    t[r.array] = `${o} ${a}`
}
function Fe(t, {attrX: e, attrY: n, attrScale: s, originX: i, originY: r, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...c}, u, h, f) {
    if (Be(t, c, u, f),
    h) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: d, style: m, dimensions: p} = t;
    d.transform && (p && (m.transform = d.transform),
    delete d.transform),
    p && (i !== void 0 || r !== void 0 || m.transform) && (m.transformOrigin = io(p, i !== void 0 ? i : .5, r !== void 0 ? r : .5)),
    e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    s !== void 0 && (d.scale = s),
    o !== void 0 && ao(d, o, a, l, !1)
}
const Ps = () => ({
    ...ke(),
    attrs: {}
})
  , Ee = t => typeof t == "string" && t.toLowerCase() === "svg";
function lo(t, e, n, s) {
    const i = S.useMemo( () => {
        const r = Ps();
        return Fe(r, e, {
            enableHardwareAcceleration: !1
        }, Ee(s), t.transformTemplate),
        {
            ...r.attrs,
            style: {
                ...r.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const r = {};
        vs(r, t.style, t),
        i.style = {
            ...r,
            ...i.style
        }
    }
    return i
}
function co(t=!1) {
    return (n, s, i, {latestValues: r}, o) => {
        const l = (Re(n) ? lo : to)(s, r, o, n)
          , u = {
            ...so(s, typeof n == "string", t),
            ...l,
            ref: i
        }
          , {children: h} = s
          , f = S.useMemo( () => O(h) ? h.get() : h, [h]);
        return S.createElement(n, {
            ...u,
            children: f
        })
    }
}
function Ts(t, {style: e, vars: n}, s, i) {
    Object.assign(t.style, e, i && i.getProjectionStyles(s));
    for (const r in n)
        t.style.setProperty(r, n[r])
}
const bs = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Vs(t, e, n, s) {
    Ts(t, e, void 0, s);
    for (const i in e.attrs)
        t.setAttribute(bs.has(i) ? i : De(i), e.attrs[i])
}
function je(t, e) {
    const {style: n} = t
      , s = {};
    for (const i in n)
        (O(n[i]) || e.style && O(e.style[i]) || ds(i, t)) && (s[i] = n[i]);
    return s
}
function Ss(t, e) {
    const n = je(t, e);
    for (const s in t)
        if (O(t[s]) || O(e[s])) {
            const i = Lt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            n[i] = t[s]
        }
    return n
}
function Oe(t, e, n, s={}, i={}) {
    return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)),
    typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)),
    e
}
const Gt = t => Array.isArray(t)
  , uo = t => !!(t && typeof t == "object" && t.mix && t.toValue)
  , ho = t => Gt(t) ? t[t.length - 1] || 0 : t;
function It(t) {
    const e = O(t) ? t.get() : t;
    return uo(e) ? e.toValue() : e
}
function fo({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n}, s, i, r) {
    const o = {
        latestValues: mo(s, i, r, t),
        renderState: e()
    };
    return n && (o.mount = a => n(s, a, o)),
    o
}
const As = t => (e, n) => {
    const s = S.useContext(Xt)
      , i = S.useContext(Ce)
      , r = () => fo(t, e, s, i);
    return n ? r() : Ri(r)
}
;
function mo(t, e, n, s) {
    const i = {}
      , r = s(t, {});
    for (const f in r)
        i[f] = It(r[f]);
    let {initial: o, animate: a} = t;
    const l = qt(t)
      , c = hs(t);
    e && c && !l && t.inherit !== !1 && (o === void 0 && (o = e.initial),
    a === void 0 && (a = e.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || o === !1;
    const h = u ? a : o;
    return h && typeof h != "boolean" && !Yt(h) && (Array.isArray(h) ? h : [h]).forEach(d => {
        const m = Oe(t, d);
        if (!m)
            return;
        const {transitionEnd: p, transition: x, ...T} = m;
        for (const y in T) {
            let g = T[y];
            if (Array.isArray(g)) {
                const P = u ? g.length - 1 : 0;
                g = g[P]
            }
            g !== null && (i[y] = g)
        }
        for (const y in p)
            i[y] = p[y]
    }
    ),
    i
}
const po = {
    useVisualState: As({
        scrapeMotionValuesFromProps: Ss,
        createRenderState: Ps,
        onMount: (t, e, {renderState: n, latestValues: s}) => {
            A.read( () => {
                try {
                    n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            A.render( () => {
                Fe(n, s, {
                    enableHardwareAcceleration: !1
                }, Ee(e.tagName), t.transformTemplate),
                Vs(e, n)
            }
            )
        }
    })
}
  , go = {
    useVisualState: As({
        scrapeMotionValuesFromProps: je,
        createRenderState: ke
    })
};
function yo(t, {forwardMotionProps: e=!1}, n, s) {
    return {
        ...Re(t) ? po : go,
        preloadedFeatures: n,
        useRender: co(e),
        createVisualElement: s,
        Component: t
    }
}
function $(t, e, n, s={
    passive: !0
}) {
    return t.addEventListener(e, n, s),
    () => t.removeEventListener(e, n)
}
const Cs = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function Jt(t, e="page") {
    return {
        point: {
            x: t[e + "X"],
            y: t[e + "Y"]
        }
    }
}
const vo = t => e => Cs(e) && t(e, Jt(e));
function z(t, e, n, s) {
    return $(t, e, vo(n), s)
}
const xo = (t, e) => n => e(t(n))
  , Q = (...t) => t.reduce(xo);
function ws(t) {
    let e = null;
    return () => {
        const n = () => {
            e = null
        }
        ;
        return e === null ? (e = t,
        n) : !1
    }
}
const ln = ws("dragHorizontal")
  , cn = ws("dragVertical");
function Ds(t) {
    let e = !1;
    if (t === "y")
        e = cn();
    else if (t === "x")
        e = ln();
    else {
        const n = ln()
          , s = cn();
        n && s ? e = () => {
            n(),
            s()
        }
        : (n && n(),
        s && s())
    }
    return e
}
function Ms() {
    const t = Ds(!0);
    return t ? (t(),
    !1) : !0
}
class st {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
function un(t, e) {
    const n = "pointer" + (e ? "enter" : "leave")
      , s = "onHover" + (e ? "Start" : "End")
      , i = (r, o) => {
        if (r.type === "touch" || Ms())
            return;
        const a = t.getProps();
        t.animationState && a.whileHover && t.animationState.setActive("whileHover", e),
        a[s] && A.update( () => a[s](r, o))
    }
    ;
    return z(t.current, n, i, {
        passive: !t.getProps()[s]
    })
}
class Po extends st {
    mount() {
        this.unmount = Q(un(this.node, !0), un(this.node, !1))
    }
    unmount() {}
}
class To extends st {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Q($(this.node.current, "focus", () => this.onFocus()), $(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Ls = (t, e) => e ? t === e ? !0 : Ls(t, e.parentElement) : !1;
function ne(t, e) {
    if (!e)
        return;
    const n = new PointerEvent("pointer" + t);
    e(n, Jt(n))
}
class bo extends st {
    constructor() {
        super(...arguments),
        this.removeStartListeners = L,
        this.removeEndListeners = L,
        this.removeAccessibleListeners = L,
        this.startPointerPress = (e, n) => {
            if (this.removeEndListeners(),
            this.isPressing)
                return;
            const s = this.node.getProps()
              , r = z(window, "pointerup", (a, l) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: c, onTapCancel: u} = this.node.getProps();
                A.update( () => {
                    Ls(this.node.current, a.target) ? c && c(a, l) : u && u(a, l)
                }
                )
            }
            , {
                passive: !(s.onTap || s.onPointerUp)
            })
              , o = z(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                passive: !(s.onTapCancel || s.onPointerCancel)
            });
            this.removeEndListeners = Q(r, o),
            this.startPress(e, n)
        }
        ,
        this.startAccessiblePress = () => {
            const e = r => {
                if (r.key !== "Enter" || this.isPressing)
                    return;
                const o = a => {
                    a.key !== "Enter" || !this.checkPressEnd() || ne("up", (l, c) => {
                        const {onTap: u} = this.node.getProps();
                        u && A.update( () => u(l, c))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = $(this.node.current, "keyup", o),
                ne("down", (a, l) => {
                    this.startPress(a, l)
                }
                )
            }
              , n = $(this.node.current, "keydown", e)
              , s = () => {
                this.isPressing && ne("cancel", (r, o) => this.cancelPress(r, o))
            }
              , i = $(this.node.current, "blur", s);
            this.removeAccessibleListeners = Q(n, i)
        }
    }
    startPress(e, n) {
        this.isPressing = !0;
        const {onTapStart: s, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        s && A.update( () => s(e, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !Ms()
    }
    cancelPress(e, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: s} = this.node.getProps();
        s && A.update( () => s(e, n))
    }
    mount() {
        const e = this.node.getProps()
          , n = z(this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(e.onTapStart || e.onPointerStart)
        })
          , s = $(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Q(n, s)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const me = new WeakMap
  , se = new WeakMap
  , Vo = t => {
    const e = me.get(t.target);
    e && e(t)
}
  , So = t => {
    t.forEach(Vo)
}
;
function Ao({root: t, ...e}) {
    const n = t || document;
    se.has(n) || se.set(n, {});
    const s = se.get(n)
      , i = JSON.stringify(e);
    return s[i] || (s[i] = new IntersectionObserver(So,{
        root: t,
        ...e
    })),
    s[i]
}
function Co(t, e, n) {
    const s = Ao(e);
    return me.set(t, n),
    s.observe(t),
    () => {
        me.delete(t),
        s.unobserve(t)
    }
}
const wo = {
    some: 0,
    all: 1
};
class Do extends st {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: n, margin: s, amount: i="some", once: r} = e
          , o = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof i == "number" ? i : wo[i]
        }
          , a = l => {
            const {isIntersecting: c} = l;
            if (this.isInView === c || (this.isInView = c,
            r && !c && this.hasEnteredView))
                return;
            c && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {onViewportEnter: u, onViewportLeave: h} = this.node.getProps()
              , f = c ? u : h;
            f && f(l)
        }
        ;
        return Co(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(Mo(e, n)) && this.startObserver()
    }
    unmount() {}
}
function Mo({viewport: t={}}, {viewport: e={}}={}) {
    return n => t[n] !== e[n]
}
const Lo = {
    inView: {
        Feature: Do
    },
    tap: {
        Feature: bo
    },
    focus: {
        Feature: To
    },
    hover: {
        Feature: Po
    }
};
function Rs(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let s = 0; s < n; s++)
        if (e[s] !== t[s])
            return !1;
    return !0
}
function Ro(t) {
    const e = {};
    return t.values.forEach( (n, s) => e[s] = n.get()),
    e
}
function Bo(t) {
    const e = {};
    return t.values.forEach( (n, s) => e[s] = n.getVelocity()),
    e
}
function Qt(t, e, n) {
    const s = t.getProps();
    return Oe(s, e, n !== void 0 ? n : s.custom, Ro(t), Bo(t))
}
let ko = L
  , Ie = L;
const tt = t => t * 1e3
  , K = t => t / 1e3
  , Fo = {
    current: !1
}
  , Bs = t => Array.isArray(t) && typeof t[0] == "number";
function ks(t) {
    return !!(!t || typeof t == "string" && Fs[t] || Bs(t) || Array.isArray(t) && t.every(ks))
}
const bt = ([t,e,n,s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`
  , Fs = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: bt([0, .65, .55, 1]),
    circOut: bt([.55, 0, 1, .45]),
    backIn: bt([.31, .01, .66, -.59]),
    backOut: bt([.33, 1.53, .69, .99])
};
function Es(t) {
    if (t)
        return Bs(t) ? bt(t) : Array.isArray(t) ? t.map(Es) : Fs[t]
}
function Eo(t, e, n, {delay: s=0, duration: i, repeat: r=0, repeatType: o="loop", ease: a, times: l}={}) {
    const c = {
        [e]: n
    };
    l && (c.offset = l);
    const u = Es(a);
    return Array.isArray(u) && (c.easing = u),
    t.animate(c, {
        delay: s,
        duration: i,
        easing: Array.isArray(u) ? "linear" : u,
        fill: "both",
        iterations: r + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
function jo(t, {repeat: e, repeatType: n="loop"}) {
    const s = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
    return t[s]
}
const js = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , Oo = 1e-7
  , Io = 12;
function Uo(t, e, n, s, i) {
    let r, o, a = 0;
    do
        o = e + (n - e) / 2,
        r = js(o, s, i) - t,
        r > 0 ? n = o : e = o;
    while (Math.abs(r) > Oo && ++a < Io);
    return o
}
function kt(t, e, n, s) {
    if (t === e && n === s)
        return L;
    const i = r => Uo(r, 0, 1, t, n);
    return r => r === 0 || r === 1 ? r : js(i(r), e, s)
}
const No = kt(.42, 0, 1, 1)
  , Wo = kt(0, 0, .58, 1)
  , Os = kt(.42, 0, .58, 1)
  , Go = t => Array.isArray(t) && typeof t[0] != "number"
  , Is = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , Us = t => e => 1 - t(1 - e)
  , Ue = t => 1 - Math.sin(Math.acos(t))
  , Ns = Us(Ue)
  , Ho = Is(Ue)
  , Ws = kt(.33, 1.53, .69, .99)
  , Ne = Us(Ws)
  , $o = Is(Ne)
  , zo = t => (t *= 2) < 1 ? .5 * Ne(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , Ko = {
    linear: L,
    easeIn: No,
    easeInOut: Os,
    easeOut: Wo,
    circIn: Ue,
    circInOut: Ho,
    circOut: Ns,
    backIn: Ne,
    backInOut: $o,
    backOut: Ws,
    anticipate: zo
}
  , hn = t => {
    if (Array.isArray(t)) {
        Ie(t.length === 4);
        const [e,n,s,i] = t;
        return kt(e, n, s, i)
    } else if (typeof t == "string")
        return Ko[t];
    return t
}
  , We = (t, e) => n => !!(Rt(n) && Yi.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))
  , Gs = (t, e, n) => s => {
    if (!Rt(s))
        return s;
    const [i,r,o,a] = s.match(Zt);
    return {
        [t]: parseFloat(i),
        [e]: parseFloat(r),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , _o = t => et(0, 255, t)
  , ie = {
    ...ut,
    transform: t => Math.round(_o(t))
}
  , lt = {
    test: We("rgb", "red"),
    parse: Gs("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: s=1}) => "rgba(" + ie.transform(t) + ", " + ie.transform(e) + ", " + ie.transform(n) + ", " + St(Vt.transform(s)) + ")"
};
function Xo(t) {
    let e = ""
      , n = ""
      , s = ""
      , i = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    n = t.substring(3, 5),
    s = t.substring(5, 7),
    i = t.substring(7, 9)) : (e = t.substring(1, 2),
    n = t.substring(2, 3),
    s = t.substring(3, 4),
    i = t.substring(4, 5),
    e += e,
    n += n,
    s += s,
    i += i),
    {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const pe = {
    test: We("#"),
    parse: Xo,
    transform: lt.transform
}
  , dt = {
    test: We("hsl", "hue"),
    parse: Gs("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: s=1}) => "hsla(" + Math.round(t) + ", " + W.transform(St(e)) + ", " + W.transform(St(n)) + ", " + St(Vt.transform(s)) + ")"
}
  , j = {
    test: t => lt.test(t) || pe.test(t) || dt.test(t),
    parse: t => lt.test(t) ? lt.parse(t) : dt.test(t) ? dt.parse(t) : pe.parse(t),
    transform: t => Rt(t) ? t : t.hasOwnProperty("red") ? lt.transform(t) : dt.transform(t)
}
  , D = (t, e, n) => -n * t + n * e + t;
function oe(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function Yo({hue: t, saturation: e, lightness: n, alpha: s}) {
    t /= 360,
    e /= 100,
    n /= 100;
    let i = 0
      , r = 0
      , o = 0;
    if (!e)
        i = r = o = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e
          , l = 2 * n - a;
        i = oe(l, a, t + 1 / 3),
        r = oe(l, a, t),
        o = oe(l, a, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(r * 255),
        blue: Math.round(o * 255),
        alpha: s
    }
}
const re = (t, e, n) => {
    const s = t * t;
    return Math.sqrt(Math.max(0, n * (e * e - s) + s))
}
  , qo = [pe, lt, dt]
  , Zo = t => qo.find(e => e.test(t));
function fn(t) {
    const e = Zo(t);
    let n = e.parse(t);
    return e === dt && (n = Yo(n)),
    n
}
const Hs = (t, e) => {
    const n = fn(t)
      , s = fn(e)
      , i = {
        ...n
    };
    return r => (i.red = re(n.red, s.red, r),
    i.green = re(n.green, s.green, r),
    i.blue = re(n.blue, s.blue, r),
    i.alpha = D(n.alpha, s.alpha, r),
    lt.transform(i))
}
;
function Jo(t) {
    var e, n;
    return isNaN(t) && Rt(t) && (((e = t.match(Zt)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(gs)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const $s = {
    regex: _i,
    countKey: "Vars",
    token: "${v}",
    parse: L
}
  , zs = {
    regex: gs,
    countKey: "Colors",
    token: "${c}",
    parse: j.parse
}
  , Ks = {
    regex: Zt,
    countKey: "Numbers",
    token: "${n}",
    parse: ut.parse
};
function ae(t, {regex: e, countKey: n, token: s, parse: i}) {
    const r = t.tokenised.match(e);
    r && (t["num" + n] = r.length,
    t.tokenised = t.tokenised.replace(e, s),
    t.values.push(...r.map(i)))
}
function Ht(t) {
    const e = t.toString()
      , n = {
        value: e,
        tokenised: e,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return n.value.includes("var(--") && ae(n, $s),
    ae(n, zs),
    ae(n, Ks),
    n
}
function _s(t) {
    return Ht(t).values
}
function Xs(t) {
    const {values: e, numColors: n, numVars: s, tokenised: i} = Ht(t)
      , r = e.length;
    return o => {
        let a = i;
        for (let l = 0; l < r; l++)
            l < s ? a = a.replace($s.token, o[l]) : l < s + n ? a = a.replace(zs.token, j.transform(o[l])) : a = a.replace(Ks.token, St(o[l]));
        return a
    }
}
const Qo = t => typeof t == "number" ? 0 : t;
function tr(t) {
    const e = _s(t);
    return Xs(t)(e.map(Qo))
}
const nt = {
    test: Jo,
    parse: _s,
    createTransformer: Xs,
    getAnimatableNone: tr
}
  , Ys = (t, e) => n => `${n > 0 ? e : t}`;
function qs(t, e) {
    return typeof t == "number" ? n => D(t, e, n) : j.test(t) ? Hs(t, e) : t.startsWith("var(") ? Ys(t, e) : Js(t, e)
}
const Zs = (t, e) => {
    const n = [...t]
      , s = n.length
      , i = t.map( (r, o) => qs(r, e[o]));
    return r => {
        for (let o = 0; o < s; o++)
            n[o] = i[o](r);
        return n
    }
}
  , er = (t, e) => {
    const n = {
        ...t,
        ...e
    }
      , s = {};
    for (const i in n)
        t[i] !== void 0 && e[i] !== void 0 && (s[i] = qs(t[i], e[i]));
    return i => {
        for (const r in s)
            n[r] = s[r](i);
        return n
    }
}
  , Js = (t, e) => {
    const n = nt.createTransformer(e)
      , s = Ht(t)
      , i = Ht(e);
    return s.numVars === i.numVars && s.numColors === i.numColors && s.numNumbers >= i.numNumbers ? Q(Zs(s.values, i.values), n) : Ys(t, e)
}
  , Mt = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s
}
  , dn = (t, e) => n => D(t, e, n);
function nr(t) {
    return typeof t == "number" ? dn : typeof t == "string" ? j.test(t) ? Hs : Js : Array.isArray(t) ? Zs : typeof t == "object" ? er : dn
}
function sr(t, e, n) {
    const s = []
      , i = n || nr(t[0])
      , r = t.length - 1;
    for (let o = 0; o < r; o++) {
        let a = i(t[o], t[o + 1]);
        if (e) {
            const l = Array.isArray(e) ? e[o] || L : e;
            a = Q(l, a)
        }
        s.push(a)
    }
    return s
}
function Qs(t, e, {clamp: n=!0, ease: s, mixer: i}={}) {
    const r = t.length;
    if (Ie(r === e.length),
    r === 1)
        return () => e[0];
    t[0] > t[r - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const o = sr(e, s, i)
      , a = o.length
      , l = c => {
        let u = 0;
        if (a > 1)
            for (; u < t.length - 2 && !(c < t[u + 1]); u++)
                ;
        const h = Mt(t[u], t[u + 1], c);
        return o[u](h)
    }
    ;
    return n ? c => l(et(t[0], t[r - 1], c)) : l
}
function ir(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
        const i = Mt(0, e, s);
        t.push(D(n, 1, i))
    }
}
function or(t) {
    const e = [0];
    return ir(e, t.length - 1),
    e
}
function rr(t, e) {
    return t.map(n => n * e)
}
function ar(t, e) {
    return t.map( () => e || Os).splice(0, t.length - 1)
}
function $t({duration: t=300, keyframes: e, times: n, ease: s="easeInOut"}) {
    const i = Go(s) ? s.map(hn) : hn(s)
      , r = {
        done: !1,
        value: e[0]
    }
      , o = rr(n && n.length === e.length ? n : or(e), t)
      , a = Qs(o, e, {
        ease: Array.isArray(i) ? i : ar(e, i)
    });
    return {
        calculatedDuration: t,
        next: l => (r.value = a(l),
        r.done = l >= t,
        r)
    }
}
function ti(t, e) {
    return e ? t * (1e3 / e) : 0
}
const lr = 5;
function ei(t, e, n) {
    const s = Math.max(e - lr, 0);
    return ti(n - t(s), e - s)
}
const le = .001
  , cr = .01
  , mn = 10
  , ur = .05
  , hr = 1;
function fr({duration: t=800, bounce: e=.25, velocity: n=0, mass: s=1}) {
    let i, r;
    ko(t <= tt(mn));
    let o = 1 - e;
    o = et(ur, hr, o),
    t = et(cr, mn, K(t)),
    o < 1 ? (i = c => {
        const u = c * o
          , h = u * t
          , f = u - n
          , d = ge(c, o)
          , m = Math.exp(-h);
        return le - f / d * m
    }
    ,
    r = c => {
        const h = c * o * t
          , f = h * n + n
          , d = Math.pow(o, 2) * Math.pow(c, 2) * t
          , m = Math.exp(-h)
          , p = ge(Math.pow(c, 2), o);
        return (-i(c) + le > 0 ? -1 : 1) * ((f - d) * m) / p
    }
    ) : (i = c => {
        const u = Math.exp(-c * t)
          , h = (c - n) * t + 1;
        return -le + u * h
    }
    ,
    r = c => {
        const u = Math.exp(-c * t)
          , h = (n - c) * (t * t);
        return u * h
    }
    );
    const a = 5 / t
      , l = mr(i, r, a);
    if (t = tt(t),
    isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: t
        };
    {
        const c = Math.pow(l, 2) * s;
        return {
            stiffness: c,
            damping: o * 2 * Math.sqrt(s * c),
            duration: t
        }
    }
}
const dr = 12;
function mr(t, e, n) {
    let s = n;
    for (let i = 1; i < dr; i++)
        s = s - t(s) / e(s);
    return s
}
function ge(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const pr = ["duration", "bounce"]
  , gr = ["stiffness", "damping", "mass"];
function pn(t, e) {
    return e.some(n => t[n] !== void 0)
}
function yr(t) {
    let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!pn(t, gr) && pn(t, pr)) {
        const n = fr(t);
        e = {
            ...e,
            ...n,
            velocity: 0,
            mass: 1
        },
        e.isResolvedFromDuration = !0
    }
    return e
}
function ni({keyframes: t, restDelta: e, restSpeed: n, ...s}) {
    const i = t[0]
      , r = t[t.length - 1]
      , o = {
        done: !1,
        value: i
    }
      , {stiffness: a, damping: l, mass: c, velocity: u, duration: h, isResolvedFromDuration: f} = yr(s)
      , d = u ? -K(u) : 0
      , m = l / (2 * Math.sqrt(a * c))
      , p = r - i
      , x = K(Math.sqrt(a / c))
      , T = Math.abs(p) < 5;
    n || (n = T ? .01 : 2),
    e || (e = T ? .005 : .5);
    let y;
    if (m < 1) {
        const g = ge(x, m);
        y = P => {
            const b = Math.exp(-m * x * P);
            return r - b * ((d + m * x * p) / g * Math.sin(g * P) + p * Math.cos(g * P))
        }
    } else if (m === 1)
        y = g => r - Math.exp(-x * g) * (p + (d + x * p) * g);
    else {
        const g = x * Math.sqrt(m * m - 1);
        y = P => {
            const b = Math.exp(-m * x * P)
              , E = Math.min(g * P, 300);
            return r - b * ((d + m * x * p) * Math.sinh(E) + g * p * Math.cosh(E)) / g
        }
    }
    return {
        calculatedDuration: f && h || null,
        next: g => {
            const P = y(g);
            if (f)
                o.done = g >= h;
            else {
                let b = d;
                g !== 0 && (m < 1 ? b = ei(y, g, P) : b = 0);
                const E = Math.abs(b) <= n
                  , C = Math.abs(r - P) <= e;
                o.done = E && C
            }
            return o.value = o.done ? r : P,
            o
        }
    }
}
function gn({keyframes: t, velocity: e=0, power: n=.8, timeConstant: s=325, bounceDamping: i=10, bounceStiffness: r=500, modifyTarget: o, min: a, max: l, restDelta: c=.5, restSpeed: u}) {
    const h = t[0]
      , f = {
        done: !1,
        value: h
    }
      , d = V => a !== void 0 && V < a || l !== void 0 && V > l
      , m = V => a === void 0 ? l : l === void 0 || Math.abs(a - V) < Math.abs(l - V) ? a : l;
    let p = n * e;
    const x = h + p
      , T = o === void 0 ? x : o(x);
    T !== x && (p = T - h);
    const y = V => -p * Math.exp(-V / s)
      , g = V => T + y(V)
      , P = V => {
        const M = y(V)
          , G = g(V);
        f.done = Math.abs(M) <= c,
        f.value = f.done ? T : G
    }
    ;
    let b, E;
    const C = V => {
        d(f.value) && (b = V,
        E = ni({
            keyframes: [f.value, m(f.value)],
            velocity: ei(g, V, f.value),
            damping: i,
            stiffness: r,
            restDelta: c,
            restSpeed: u
        }))
    }
    ;
    return C(0),
    {
        calculatedDuration: null,
        next: V => {
            let M = !1;
            return !E && b === void 0 && (M = !0,
            P(V),
            C(V)),
            b !== void 0 && V > b ? E.next(V - b) : (!M && P(V),
            f)
        }
    }
}
const vr = t => {
    const e = ({timestamp: n}) => t(n);
    return {
        start: () => A.update(e, !0),
        stop: () => _(e),
        now: () => F.isProcessing ? F.timestamp : performance.now()
    }
}
  , yn = 2e4;
function vn(t) {
    let e = 0;
    const n = 50;
    let s = t.next(e);
    for (; !s.done && e < yn; )
        e += n,
        s = t.next(e);
    return e >= yn ? 1 / 0 : e
}
const xr = {
    decay: gn,
    inertia: gn,
    tween: $t,
    keyframes: $t,
    spring: ni
};
function zt({autoplay: t=!0, delay: e=0, driver: n=vr, keyframes: s, type: i="keyframes", repeat: r=0, repeatDelay: o=0, repeatType: a="loop", onPlay: l, onStop: c, onComplete: u, onUpdate: h, ...f}) {
    let d = 1, m = !1, p, x;
    const T = () => {
        x = new Promise(w => {
            p = w
        }
        )
    }
    ;
    T();
    let y;
    const g = xr[i] || $t;
    let P;
    g !== $t && typeof s[0] != "number" && (P = Qs([0, 100], s, {
        clamp: !1
    }),
    s = [0, 100]);
    const b = g({
        ...f,
        keyframes: s
    });
    let E;
    a === "mirror" && (E = g({
        ...f,
        keyframes: [...s].reverse(),
        velocity: -(f.velocity || 0)
    }));
    let C = "idle"
      , V = null
      , M = null
      , G = null;
    b.calculatedDuration === null && r && (b.calculatedDuration = vn(b));
    const {calculatedDuration: H} = b;
    let X = 1 / 0
      , Y = 1 / 0;
    H !== null && (X = H + o,
    Y = X * (r + 1) - o);
    let k = 0;
    const B = w => {
        if (M === null)
            return;
        d > 0 && (M = Math.min(M, w)),
        d < 0 && (M = Math.min(w - Y / d, M)),
        V !== null ? k = V : k = Math.round(w - M) * d;
        const vt = k - e * (d >= 0 ? 1 : -1)
          , qe = d >= 0 ? vt < 0 : vt > Y;
        k = Math.max(vt, 0),
        C === "finished" && V === null && (k = Y);
        let Ze = k
          , Je = b;
        if (r) {
            const te = k / X;
            let Ft = Math.floor(te)
              , it = te % 1;
            !it && te >= 1 && (it = 1),
            it === 1 && Ft--,
            Ft = Math.min(Ft, r + 1);
            const tn = !!(Ft % 2);
            tn && (a === "reverse" ? (it = 1 - it,
            o && (it -= o / X)) : a === "mirror" && (Je = E));
            let en = et(0, 1, it);
            k > Y && (en = a === "reverse" && tn ? 1 : 0),
            Ze = en * X
        }
        const xt = qe ? {
            done: !1,
            value: s[0]
        } : Je.next(Ze);
        P && (xt.value = P(xt.value));
        let {done: Qe} = xt;
        !qe && H !== null && (Qe = d >= 0 ? k >= Y : k <= 0);
        const Mi = V === null && (C === "finished" || C === "running" && Qe);
        return h && h(xt.value),
        Mi && Di(),
        xt
    }
      , q = () => {
        y && y.stop(),
        y = void 0
    }
      , ht = () => {
        C = "idle",
        q(),
        p(),
        T(),
        M = G = null
    }
      , Di = () => {
        C = "finished",
        u && u(),
        q(),
        p()
    }
      , Xe = () => {
        if (m)
            return;
        y || (y = n(B));
        const w = y.now();
        l && l(),
        V !== null ? M = w - V : (!M || C === "finished") && (M = w),
        C === "finished" && T(),
        G = M,
        V = null,
        C = "running",
        y.start()
    }
    ;
    t && Xe();
    const Ye = {
        then(w, vt) {
            return x.then(w, vt)
        },
        get time() {
            return K(k)
        },
        set time(w) {
            w = tt(w),
            k = w,
            V !== null || !y || d === 0 ? V = w : M = y.now() - w / d
        },
        get duration() {
            const w = b.calculatedDuration === null ? vn(b) : b.calculatedDuration;
            return K(w)
        },
        get speed() {
            return d
        },
        set speed(w) {
            w === d || !y || (d = w,
            Ye.time = K(k))
        },
        get state() {
            return C
        },
        play: Xe,
        pause: () => {
            C = "paused",
            V = k
        }
        ,
        stop: () => {
            m = !0,
            C !== "idle" && (C = "idle",
            c && c(),
            ht())
        }
        ,
        cancel: () => {
            G !== null && B(G),
            ht()
        }
        ,
        complete: () => {
            C = "finished"
        }
        ,
        sample: w => (M = 0,
        B(w))
    };
    return Ye
}
function Pr(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const Tr = Pr( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , br = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , jt = 10
  , Vr = 2e4
  , Sr = (t, e) => e.type === "spring" || t === "backgroundColor" || !ks(e.ease);
function Ar(t, e, {onUpdate: n, onComplete: s, ...i}) {
    if (!(Tr() && br.has(e) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
        return !1;
    let o = !1, a, l;
    const c = () => {
        l = new Promise(y => {
            a = y
        }
        )
    }
    ;
    c();
    let {keyframes: u, duration: h=300, ease: f, times: d} = i;
    if (Sr(e, i)) {
        const y = zt({
            ...i,
            repeat: 0,
            delay: 0
        });
        let g = {
            done: !1,
            value: u[0]
        };
        const P = [];
        let b = 0;
        for (; !g.done && b < Vr; )
            g = y.sample(b),
            P.push(g.value),
            b += jt;
        d = void 0,
        u = P,
        h = b - jt,
        f = "linear"
    }
    const m = Eo(t.owner.current, e, u, {
        ...i,
        duration: h,
        ease: f,
        times: d
    })
      , p = () => m.cancel()
      , x = () => {
        A.update(p),
        a(),
        c()
    }
    ;
    return m.onfinish = () => {
        t.set(jo(u, i)),
        s && s(),
        x()
    }
    ,
    {
        then(y, g) {
            return l.then(y, g)
        },
        attachTimeline(y) {
            return m.timeline = y,
            m.onfinish = null,
            L
        },
        get time() {
            return K(m.currentTime || 0)
        },
        set time(y) {
            m.currentTime = tt(y)
        },
        get speed() {
            return m.playbackRate
        },
        set speed(y) {
            m.playbackRate = y
        },
        get duration() {
            return K(h)
        },
        play: () => {
            o || (m.play(),
            _(p))
        }
        ,
        pause: () => m.pause(),
        stop: () => {
            if (o = !0,
            m.playState === "idle")
                return;
            const {currentTime: y} = m;
            if (y) {
                const g = zt({
                    ...i,
                    autoplay: !1
                });
                t.setWithVelocity(g.sample(y - jt).value, g.sample(y).value, jt)
            }
            x()
        }
        ,
        complete: () => m.finish(),
        cancel: x
    }
}
function Cr({keyframes: t, delay: e, onUpdate: n, onComplete: s}) {
    const i = () => (n && n(t[t.length - 1]),
    s && s(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: L,
        pause: L,
        stop: L,
        then: r => (r(),
        Promise.resolve()),
        cancel: L,
        complete: L
    });
    return e ? zt({
        keyframes: [0, 1],
        duration: 0,
        delay: e,
        onComplete: i
    }) : i()
}
const wr = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Dr = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Mr = {
    type: "keyframes",
    duration: .8
}
  , Lr = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Rr = (t, {keyframes: e}) => e.length > 2 ? Mr : ct.has(t) ? t.startsWith("scale") ? Dr(e[1]) : wr : Lr
  , ye = (t, e) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (nt.test(e) || e === "0") && !e.startsWith("url("))
  , Br = new Set(["brightness", "contrast", "saturate", "opacity"]);
function kr(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [s] = n.match(Zt) || [];
    if (!s)
        return t;
    const i = n.replace(s, "");
    let r = Br.has(e) ? 1 : 0;
    return s !== n && (r *= 100),
    e + "(" + r + i + ")"
}
const Fr = /([a-z-]*)\(.*?\)/g
  , ve = {
    ...nt,
    getAnimatableNone: t => {
        const e = t.match(Fr);
        return e ? e.map(kr).join(" ") : t
    }
}
  , Er = {
    ...ys,
    color: j,
    backgroundColor: j,
    outlineColor: j,
    fill: j,
    stroke: j,
    borderColor: j,
    borderTopColor: j,
    borderRightColor: j,
    borderBottomColor: j,
    borderLeftColor: j,
    filter: ve,
    WebkitFilter: ve
}
  , Ge = t => Er[t];
function si(t, e) {
    let n = Ge(t);
    return n !== ve && (n = nt),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const ii = t => /^0[^.\s]+$/.test(t);
function jr(t) {
    if (typeof t == "number")
        return t === 0;
    if (t !== null)
        return t === "none" || t === "0" || ii(t)
}
function Or(t, e, n, s) {
    const i = ye(e, n);
    let r;
    Array.isArray(n) ? r = [...n] : r = [null, n];
    const o = s.from !== void 0 ? s.from : t.get();
    let a;
    const l = [];
    for (let c = 0; c < r.length; c++)
        r[c] === null && (r[c] = c === 0 ? o : r[c - 1]),
        jr(r[c]) && l.push(c),
        typeof r[c] == "string" && r[c] !== "none" && r[c] !== "0" && (a = r[c]);
    if (i && l.length && a)
        for (let c = 0; c < l.length; c++) {
            const u = l[c];
            r[u] = si(e, a)
        }
    return r
}
function Ir({when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: r, repeatType: o, repeatDelay: a, from: l, elapsed: c, ...u}) {
    return !!Object.keys(u).length
}
function He(t, e) {
    return t[e] || t.default || t
}
const $e = (t, e, n, s={}) => i => {
    const r = He(s, t) || {}
      , o = r.delay || s.delay || 0;
    let {elapsed: a=0} = s;
    a = a - tt(o);
    const l = Or(e, t, n, r)
      , c = l[0]
      , u = l[l.length - 1]
      , h = ye(t, c)
      , f = ye(t, u);
    let d = {
        keyframes: l,
        velocity: e.getVelocity(),
        ease: "easeOut",
        ...r,
        delay: -a,
        onUpdate: m => {
            e.set(m),
            r.onUpdate && r.onUpdate(m)
        }
        ,
        onComplete: () => {
            i(),
            r.onComplete && r.onComplete()
        }
    };
    if (Ir(r) || (d = {
        ...d,
        ...Rr(t, d)
    }),
    d.duration && (d.duration = tt(d.duration)),
    d.repeatDelay && (d.repeatDelay = tt(d.repeatDelay)),
    !h || !f || Fo.current || r.type === !1)
        return Cr(d);
    if (!s.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
        const m = Ar(e, t, d);
        if (m)
            return m
    }
    return zt(d)
}
;
function Kt(t) {
    return !!(O(t) && t.add)
}
const oi = t => /^\-?\d*\.?\d+$/.test(t);
function ze(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function Ke(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class _e {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return ze(this.subscriptions, e),
        () => Ke(this.subscriptions, e)
    }
    notify(e, n, s) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](e, n, s);
            else
                for (let r = 0; r < i; r++) {
                    const o = this.subscriptions[r];
                    o && o(e, n, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Ur = t => !isNaN(parseFloat(t));
class Nr {
    constructor(e, n={}) {
        this.version = "10.16.16",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (s, i=!0) => {
            this.prev = this.current,
            this.current = s;
            const {delta: r, timestamp: o} = F;
            this.lastUpdated !== o && (this.timeDelta = r,
            this.lastUpdated = o,
            A.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = () => A.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: s}) => {
            s !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = e,
        this.canTrackVelocity = Ur(this.current),
        this.owner = n.owner
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new _e);
        const s = this.events[e].add(n);
        return e === "change" ? () => {
            s(),
            A.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : s
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e,
        this.stopPassiveEffect = n
    }
    set(e, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, s) {
        this.set(n),
        this.prev = e,
        this.timeDelta = s
    }
    jump(e) {
        this.updateAndNotify(e),
        this.prev = e,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? ti(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(e) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = e(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function gt(t, e) {
    return new Nr(t,e)
}
const ri = t => e => e.test(t)
  , Wr = {
    test: t => t === "auto",
    parse: t => t
}
  , ai = [ut, v, W, Z, Zi, qi, Wr]
  , Pt = t => ai.find(ri(t))
  , Gr = [...ai, j, nt]
  , Hr = t => Gr.find(ri(t));
function $r(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, gt(n))
}
function zr(t, e) {
    const n = Qt(t, e);
    let {transitionEnd: s={}, transition: i={}, ...r} = n ? t.makeTargetAnimatable(n, !1) : {};
    r = {
        ...r,
        ...s
    };
    for (const o in r) {
        const a = ho(r[o]);
        $r(t, o, a)
    }
}
function Kr(t, e, n) {
    var s, i;
    const r = Object.keys(e).filter(a => !t.hasValue(a))
      , o = r.length;
    if (o)
        for (let a = 0; a < o; a++) {
            const l = r[a]
              , c = e[l];
            let u = null;
            Array.isArray(c) && (u = c[0]),
            u === null && (u = (i = (s = n[l]) !== null && s !== void 0 ? s : t.readValue(l)) !== null && i !== void 0 ? i : e[l]),
            u != null && (typeof u == "string" && (oi(u) || ii(u)) ? u = parseFloat(u) : !Hr(u) && nt.test(c) && (u = si(l, c)),
            t.addValue(l, gt(u, {
                owner: t
            })),
            n[l] === void 0 && (n[l] = u),
            u !== null && t.setBaseTarget(l, u))
        }
}
function _r(t, e) {
    return e ? (e[t] || e.default || e).from : void 0
}
function Xr(t, e, n) {
    const s = {};
    for (const i in t) {
        const r = _r(i, e);
        if (r !== void 0)
            s[i] = r;
        else {
            const o = n.getValue(i);
            o && (s[i] = o.get())
        }
    }
    return s
}
function Yr({protectedKeys: t, needsAnimating: e}, n) {
    const s = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1,
    s
}
function qr(t, e) {
    const n = t.get();
    if (Array.isArray(e)) {
        for (let s = 0; s < e.length; s++)
            if (e[s] !== n)
                return !0
    } else
        return n !== e
}
function li(t, e, {delay: n=0, transitionOverride: s, type: i}={}) {
    let {transition: r=t.getDefaultTransition(), transitionEnd: o, ...a} = t.makeTargetAnimatable(e);
    const l = t.getValue("willChange");
    s && (r = s);
    const c = []
      , u = i && t.animationState && t.animationState.getState()[i];
    for (const h in a) {
        const f = t.getValue(h)
          , d = a[h];
        if (!f || d === void 0 || u && Yr(u, h))
            continue;
        const m = {
            delay: n,
            elapsed: 0,
            ...He(r || {}, h)
        };
        if (window.HandoffAppearAnimations) {
            const T = t.getProps()[us];
            if (T) {
                const y = window.HandoffAppearAnimations(T, h, f, A);
                y !== null && (m.elapsed = y,
                m.isHandoff = !0)
            }
        }
        let p = !m.isHandoff && !qr(f, d);
        if (m.type === "spring" && (f.getVelocity() || m.velocity) && (p = !1),
        f.animation && (p = !1),
        p)
            continue;
        f.start($e(h, f, d, t.shouldReduceMotion && ct.has(h) ? {
            type: !1
        } : m));
        const x = f.animation;
        Kt(l) && (l.add(h),
        x.then( () => l.remove(h))),
        c.push(x)
    }
    return o && Promise.all(c).then( () => {
        o && zr(t, o)
    }
    ),
    c
}
function xe(t, e, n={}) {
    const s = Qt(t, e, n.custom);
    let {transition: i=t.getDefaultTransition() || {}} = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const r = s ? () => Promise.all(li(t, s, n)) : () => Promise.resolve()
      , o = t.variantChildren && t.variantChildren.size ? (l=0) => {
        const {delayChildren: c=0, staggerChildren: u, staggerDirection: h} = i;
        return Zr(t, e, c + l, u, h, n)
    }
    : () => Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [l,c] = a === "beforeChildren" ? [r, o] : [o, r];
        return l().then( () => c())
    } else
        return Promise.all([r(), o(n.delay)])
}
function Zr(t, e, n=0, s=0, i=1, r) {
    const o = []
      , a = (t.variantChildren.size - 1) * s
      , l = i === 1 ? (c=0) => c * s : (c=0) => a - c * s;
    return Array.from(t.variantChildren).sort(Jr).forEach( (c, u) => {
        c.notify("AnimationStart", e),
        o.push(xe(c, e, {
            ...r,
            delay: n + l(u)
        }).then( () => c.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(o)
}
function Jr(t, e) {
    return t.sortNodePosition(e)
}
function Qr(t, e, n={}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
        const i = e.map(r => xe(t, r, n));
        s = Promise.all(i)
    } else if (typeof e == "string")
        s = xe(t, e, n);
    else {
        const i = typeof e == "function" ? Qt(t, e, n.custom) : e;
        s = Promise.all(li(t, i, n))
    }
    return s.then( () => t.notify("AnimationComplete", e))
}
const ta = [...Me].reverse()
  , ea = Me.length;
function na(t) {
    return e => Promise.all(e.map( ({animation: n, options: s}) => Qr(t, n, s)))
}
function sa(t) {
    let e = na(t);
    const n = oa();
    let s = !0;
    const i = (l, c) => {
        const u = Qt(t, c);
        if (u) {
            const {transition: h, transitionEnd: f, ...d} = u;
            l = {
                ...l,
                ...d,
                ...f
            }
        }
        return l
    }
    ;
    function r(l) {
        e = l(t)
    }
    function o(l, c) {
        const u = t.getProps()
          , h = t.getVariantContext(!0) || {}
          , f = []
          , d = new Set;
        let m = {}
          , p = 1 / 0;
        for (let T = 0; T < ea; T++) {
            const y = ta[T]
              , g = n[y]
              , P = u[y] !== void 0 ? u[y] : h[y]
              , b = wt(P)
              , E = y === c ? g.isActive : null;
            E === !1 && (p = T);
            let C = P === h[y] && P !== u[y] && b;
            if (C && s && t.manuallyAnimateOnMount && (C = !1),
            g.protectedKeys = {
                ...m
            },
            !g.isActive && E === null || !P && !g.prevProp || Yt(P) || typeof P == "boolean")
                continue;
            const V = ia(g.prevProp, P);
            let M = V || y === c && g.isActive && !C && b || T > p && b;
            const G = Array.isArray(P) ? P : [P];
            let H = G.reduce(i, {});
            E === !1 && (H = {});
            const {prevResolvedValues: X={}} = g
              , Y = {
                ...X,
                ...H
            }
              , k = B => {
                M = !0,
                d.delete(B),
                g.needsAnimating[B] = !0
            }
            ;
            for (const B in Y) {
                const q = H[B]
                  , ht = X[B];
                m.hasOwnProperty(B) || (q !== ht ? Gt(q) && Gt(ht) ? !Rs(q, ht) || V ? k(B) : g.protectedKeys[B] = !0 : q !== void 0 ? k(B) : d.add(B) : q !== void 0 && d.has(B) ? k(B) : g.protectedKeys[B] = !0)
            }
            g.prevProp = P,
            g.prevResolvedValues = H,
            g.isActive && (m = {
                ...m,
                ...H
            }),
            s && t.blockInitialAnimation && (M = !1),
            M && !C && f.push(...G.map(B => ({
                animation: B,
                options: {
                    type: y,
                    ...l
                }
            })))
        }
        if (d.size) {
            const T = {};
            d.forEach(y => {
                const g = t.getBaseTarget(y);
                g !== void 0 && (T[y] = g)
            }
            ),
            f.push({
                animation: T
            })
        }
        let x = !!f.length;
        return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (x = !1),
        s = !1,
        x ? e(f) : Promise.resolve()
    }
    function a(l, c, u) {
        var h;
        if (n[l].isActive === c)
            return Promise.resolve();
        (h = t.variantChildren) === null || h === void 0 || h.forEach(d => {
            var m;
            return (m = d.animationState) === null || m === void 0 ? void 0 : m.setActive(l, c)
        }
        ),
        n[l].isActive = c;
        const f = o(u, l);
        for (const d in n)
            n[d].protectedKeys = {};
        return f
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: r,
        getState: () => n
    }
}
function ia(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !Rs(e, t) : !1
}
function ot(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function oa() {
    return {
        animate: ot(!0),
        whileInView: ot(),
        whileHover: ot(),
        whileTap: ot(),
        whileDrag: ot(),
        whileFocus: ot(),
        exit: ot()
    }
}
class ra extends st {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = sa(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        this.unmount(),
        Yt(e) && (this.unmount = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let aa = 0;
class la extends st {
    constructor() {
        super(...arguments),
        this.id = aa++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: n, custom: s} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        const r = this.node.animationState.setActive("exit", !e, {
            custom: s ?? this.node.getProps().custom
        });
        n && !e && r.then( () => n(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const ca = {
    animation: {
        Feature: ra
    },
    exit: {
        Feature: la
    }
}
  , xn = (t, e) => Math.abs(t - e);
function ua(t, e) {
    const n = xn(t.x, e.x)
      , s = xn(t.y, e.y);
    return Math.sqrt(n ** 2 + s ** 2)
}
class ci {
    constructor(e, n, {transformPagePoint: s, contextWindow: i}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const u = ue(this.lastMoveEventInfo, this.history)
              , h = this.startEvent !== null
              , f = ua(u.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!h && !f)
                return;
            const {point: d} = u
              , {timestamp: m} = F;
            this.history.push({
                ...d,
                timestamp: m
            });
            const {onStart: p, onMove: x} = this.handlers;
            h || (p && p(this.lastMoveEvent, u),
            this.startEvent = this.lastMoveEvent),
            x && x(this.lastMoveEvent, u)
        }
        ,
        this.handlePointerMove = (u, h) => {
            this.lastMoveEvent = u,
            this.lastMoveEventInfo = ce(h, this.transformPagePoint),
            A.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (u, h) => {
            if (this.end(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const {onEnd: f, onSessionEnd: d} = this.handlers
              , m = ue(u.type === "pointercancel" ? this.lastMoveEventInfo : ce(h, this.transformPagePoint), this.history);
            this.startEvent && f && f(u, m),
            d && d(u, m)
        }
        ,
        !Cs(e))
            return;
        this.handlers = n,
        this.transformPagePoint = s,
        this.contextWindow = i || window;
        const r = Jt(e)
          , o = ce(r, this.transformPagePoint)
          , {point: a} = o
          , {timestamp: l} = F;
        this.history = [{
            ...a,
            timestamp: l
        }];
        const {onSessionStart: c} = n;
        c && c(e, ue(o, this.history)),
        this.removeListeners = Q(z(this.contextWindow, "pointermove", this.handlePointerMove), z(this.contextWindow, "pointerup", this.handlePointerUp), z(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        _(this.updatePoint)
    }
}
function ce(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function Pn(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function ue({point: t}, e) {
    return {
        point: t,
        delta: Pn(t, ui(e)),
        offset: Pn(t, ha(e)),
        velocity: fa(e, .1)
    }
}
function ha(t) {
    return t[0]
}
function ui(t) {
    return t[t.length - 1]
}
function fa(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , s = null;
    const i = ui(t);
    for (; n >= 0 && (s = t[n],
    !(i.timestamp - s.timestamp > tt(e))); )
        n--;
    if (!s)
        return {
            x: 0,
            y: 0
        };
    const r = K(i.timestamp - s.timestamp);
    if (r === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - s.x) / r,
        y: (i.y - s.y) / r
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function I(t) {
    return t.max - t.min
}
function Pe(t, e=0, n=.01) {
    return Math.abs(t - e) <= n
}
function Tn(t, e, n, s=.5) {
    t.origin = s,
    t.originPoint = D(e.min, e.max, t.origin),
    t.scale = I(n) / I(e),
    (Pe(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    t.translate = D(n.min, n.max, t.origin) - t.originPoint,
    (Pe(t.translate) || isNaN(t.translate)) && (t.translate = 0)
}
function At(t, e, n, s) {
    Tn(t.x, e.x, n.x, s ? s.originX : void 0),
    Tn(t.y, e.y, n.y, s ? s.originY : void 0)
}
function bn(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + I(e)
}
function da(t, e, n) {
    bn(t.x, e.x, n.x),
    bn(t.y, e.y, n.y)
}
function Vn(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + I(e)
}
function Ct(t, e, n) {
    Vn(t.x, e.x, n.x),
    Vn(t.y, e.y, n.y)
}
function ma(t, {min: e, max: n}, s) {
    return e !== void 0 && t < e ? t = s ? D(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? D(n, t, s.max) : Math.min(t, n)),
    t
}
function Sn(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}
function pa(t, {top: e, left: n, bottom: s, right: i}) {
    return {
        x: Sn(t.x, n, i),
        y: Sn(t.y, e, s)
    }
}
function An(t, e) {
    let n = e.min - t.min
      , s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,s] = [s, n]),
    {
        min: n,
        max: s
    }
}
function ga(t, e) {
    return {
        x: An(t.x, e.x),
        y: An(t.y, e.y)
    }
}
function ya(t, e) {
    let n = .5;
    const s = I(t)
      , i = I(e);
    return i > s ? n = Mt(e.min, e.max - s, t.min) : s > i && (n = Mt(t.min, t.max - i, e.min)),
    et(0, 1, n)
}
function va(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
}
const Te = .35;
function xa(t=Te) {
    return t === !1 ? t = 0 : t === !0 && (t = Te),
    {
        x: Cn(t, "left", "right"),
        y: Cn(t, "top", "bottom")
    }
}
function Cn(t, e, n) {
    return {
        min: wn(t, e),
        max: wn(t, n)
    }
}
function wn(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const Dn = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , mt = () => ({
    x: Dn(),
    y: Dn()
})
  , Mn = () => ({
    min: 0,
    max: 0
})
  , R = () => ({
    x: Mn(),
    y: Mn()
});
function N(t) {
    return [t("x"), t("y")]
}
function hi({top: t, left: e, right: n, bottom: s}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: s
        }
    }
}
function Pa({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function Ta(t, e) {
    if (!e)
        return t;
    const n = e({
        x: t.left,
        y: t.top
    })
      , s = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}
function he(t) {
    return t === void 0 || t === 1
}
function be({scale: t, scaleX: e, scaleY: n}) {
    return !he(t) || !he(e) || !he(n)
}
function rt(t) {
    return be(t) || fi(t) || t.z || t.rotate || t.rotateX || t.rotateY
}
function fi(t) {
    return Ln(t.x) || Ln(t.y)
}
function Ln(t) {
    return t && t !== "0%"
}
function _t(t, e, n) {
    const s = t - n
      , i = e * s;
    return n + i
}
function Rn(t, e, n, s, i) {
    return i !== void 0 && (t = _t(t, i, s)),
    _t(t, n, s) + e
}
function Ve(t, e=0, n=1, s, i) {
    t.min = Rn(t.min, e, n, s, i),
    t.max = Rn(t.max, e, n, s, i)
}
function di(t, {x: e, y: n}) {
    Ve(t.x, e.translate, e.scale, e.originPoint),
    Ve(t.y, n.translate, n.scale, n.originPoint)
}
function ba(t, e, n, s=!1) {
    const i = n.length;
    if (!i)
        return;
    e.x = e.y = 1;
    let r, o;
    for (let a = 0; a < i; a++) {
        r = n[a],
        o = r.projectionDelta;
        const l = r.instance;
        l && l.style && l.style.display === "contents" || (s && r.options.layoutScroll && r.scroll && r !== r.root && pt(t, {
            x: -r.scroll.offset.x,
            y: -r.scroll.offset.y
        }),
        o && (e.x *= o.x.scale,
        e.y *= o.y.scale,
        di(t, o)),
        s && rt(r.latestValues) && pt(t, r.latestValues))
    }
    e.x = Bn(e.x),
    e.y = Bn(e.y)
}
function Bn(t) {
    return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
}
function J(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function kn(t, e, [n,s,i]) {
    const r = e[i] !== void 0 ? e[i] : .5
      , o = D(t.min, t.max, r);
    Ve(t, e[n], e[s], o, e.scale)
}
const Va = ["x", "scaleX", "originX"]
  , Sa = ["y", "scaleY", "originY"];
function pt(t, e) {
    kn(t.x, e, Va),
    kn(t.y, e, Sa)
}
function mi(t, e) {
    return hi(Ta(t.getBoundingClientRect(), e))
}
function Aa(t, e, n) {
    const s = mi(t, n)
      , {scroll: i} = e;
    return i && (J(s.x, i.offset.x),
    J(s.y, i.offset.y)),
    s
}
const pi = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , Ca = new WeakMap;
class wa {
    constructor(e) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = R(),
        this.visualElement = e
    }
    start(e, {snapToCursor: n=!1}={}) {
        const {presenceContext: s} = this.visualElement;
        if (s && s.isPresent === !1)
            return;
        const i = l => {
            this.stopAnimation(),
            n && this.snapToCursor(Jt(l, "page").point)
        }
          , r = (l, c) => {
            const {drag: u, dragPropagation: h, onDragStart: f} = this.getProps();
            if (u && !h && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = Ds(u),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            N(m => {
                let p = this.getAxisMotionValue(m).get() || 0;
                if (W.test(p)) {
                    const {projection: x} = this.visualElement;
                    if (x && x.layout) {
                        const T = x.layout.layoutBox[m];
                        T && (p = I(T) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[m] = p
            }
            ),
            f && A.update( () => f(l, c), !1, !0);
            const {animationState: d} = this.visualElement;
            d && d.setActive("whileDrag", !0)
        }
          , o = (l, c) => {
            const {dragPropagation: u, dragDirectionLock: h, onDirectionLock: f, onDrag: d} = this.getProps();
            if (!u && !this.openGlobalLock)
                return;
            const {offset: m} = c;
            if (h && this.currentDirection === null) {
                this.currentDirection = Da(m),
                this.currentDirection !== null && f && f(this.currentDirection);
                return
            }
            this.updateAxis("x", c.point, m),
            this.updateAxis("y", c.point, m),
            this.visualElement.render(),
            d && d(l, c)
        }
          , a = (l, c) => this.stop(l, c);
        this.panSession = new ci(e,{
            onSessionStart: i,
            onStart: r,
            onMove: o,
            onSessionEnd: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            contextWindow: pi(this.visualElement)
        })
    }
    stop(e, n) {
        const s = this.isDragging;
        if (this.cancel(),
        !s)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: r} = this.getProps();
        r && A.update( () => r(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: n} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: s} = this.getProps();
        !s && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, s) {
        const {drag: i} = this.getProps();
        if (!s || !Ot(e, i, this.currentDirection))
            return;
        const r = this.getAxisMotionValue(e);
        let o = this.originPoint[e] + s[e];
        this.constraints && this.constraints[e] && (o = ma(o, this.constraints[e], this.elastic[e])),
        r.set(o)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: n, dragElastic: s} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , r = this.constraints;
        n && ft(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = pa(i.layoutBox, n) : this.constraints = !1,
        this.elastic = xa(s),
        r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && N(o => {
            this.getAxisMotionValue(o) && (this.constraints[o] = va(i.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
        if (!e || !ft(e))
            return !1;
        const s = e.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const r = Aa(s, i.root, this.visualElement.getTransformPagePoint());
        let o = ga(i.layout.layoutBox, r);
        if (n) {
            const a = n(Pa(o));
            this.hasMutatedConstraints = !!a,
            a && (o = hi(a))
        }
        return o
    }
    startAnimation(e) {
        const {drag: n, dragMomentum: s, dragElastic: i, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , c = N(u => {
            if (!Ot(u, n, this.currentDirection))
                return;
            let h = l && l[u] || {};
            o && (h = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , d = i ? 40 : 1e7
              , m = {
                type: "inertia",
                velocity: s ? e[u] : 0,
                bounceStiffness: f,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...h
            };
            return this.startAxisValueAnimation(u, m)
        }
        );
        return Promise.all(c).then(a)
    }
    startAxisValueAnimation(e, n) {
        const s = this.getAxisMotionValue(e);
        return s.start($e(e, s, 0, n))
    }
    stopAnimation() {
        N(e => this.getAxisMotionValue(e).stop())
    }
    getAxisMotionValue(e) {
        const n = "_drag" + e.toUpperCase()
          , s = this.visualElement.getProps()
          , i = s[n];
        return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        N(n => {
            const {drag: s} = this.getProps();
            if (!Ot(n, s, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , r = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: a} = i.layout.layoutBox[n];
                r.set(e[n] - D(o, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: n} = this.getProps()
          , {projection: s} = this.visualElement;
        if (!ft(n) || !s || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        N(o => {
            const a = this.getAxisMotionValue(o);
            if (a) {
                const l = a.get();
                i[o] = ya({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: r} = this.visualElement.getProps();
        this.visualElement.current.style.transform = r ? r({}, "") : "none",
        s.root && s.root.updateScroll(),
        s.updateLayout(),
        this.resolveConstraints(),
        N(o => {
            if (!Ot(o, e, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: l, max: c} = this.constraints[o];
            a.set(D(l, c, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Ca.set(this.visualElement, this);
        const e = this.visualElement.current
          , n = z(e, "pointerdown", l => {
            const {drag: c, dragListener: u=!0} = this.getProps();
            c && u && this.start(l)
        }
        )
          , s = () => {
            const {dragConstraints: l} = this.getProps();
            ft(l) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , r = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        s();
        const o = $(window, "resize", () => this.scalePositionWithinConstraints())
          , a = i.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: c}) => {
            this.isDragging && c && (N(u => {
                const h = this.getAxisMotionValue(u);
                h && (this.originPoint[u] += l[u].translate,
                h.set(h.get() + l[u].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            n(),
            r(),
            a && a()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: s=!1, dragPropagation: i=!1, dragConstraints: r=!1, dragElastic: o=Te, dragMomentum: a=!0} = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: s,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function Ot(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}
function Da(t, e=10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
    n
}
class Ma extends st {
    constructor(e) {
        super(e),
        this.removeGroupControls = L,
        this.removeListeners = L,
        this.controls = new wa(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || L
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Fn = t => (e, n) => {
    t && A.update( () => t(e, n))
}
;
class La extends st {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = L
    }
    onPointerDown(e) {
        this.session = new ci(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: pi(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: Fn(e),
            onStart: Fn(n),
            onMove: s,
            onEnd: (r, o) => {
                delete this.session,
                i && A.update( () => i(r, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = z(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function Ra() {
    const t = S.useContext(Ce);
    if (t === null)
        return [!0, null];
    const {isPresent: e, onExitComplete: n, register: s} = t
      , i = S.useId();
    return S.useEffect( () => s(i), []),
    !e && n ? [!1, () => n && n(i)] : [!0]
}
const Ut = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function En(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Tt = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (v.test(t))
                t = parseFloat(t);
            else
                return t;
        const n = En(t, e.target.x)
          , s = En(t, e.target.y);
        return `${n}% ${s}%`
    }
}
  , Ba = {
    correct: (t, {treeScale: e, projectionDelta: n}) => {
        const s = t
          , i = nt.parse(t);
        if (i.length > 5)
            return s;
        const r = nt.createTransformer(t)
          , o = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * e.x
          , l = n.y.scale * e.y;
        i[0 + o] /= a,
        i[1 + o] /= l;
        const c = D(a, l, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        r(i)
    }
};
class ka extends as.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i} = this.props
          , {projection: r} = e;
        Hi(Fa),
        r && (n.group && n.group.add(r),
        s && s.register && i && s.register(r),
        r.root.didUpdate(),
        r.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        r.setOptions({
            ...r.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Ut.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: n, visualElement: s, drag: i, isPresent: r} = this.props
          , o = s.projection;
        return o && (o.isPresent = r,
        i || e.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        e.isPresent !== r && (r ? o.promote() : o.relegate() || A.postRender( () => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        queueMicrotask( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: s} = this.props
          , {projection: i} = e;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        s && s.deregister && s.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function gi(t) {
    const [e,n] = Ra()
      , s = S.useContext(rs);
    return as.createElement(ka, {
        ...t,
        layoutGroup: s,
        switchLayoutGroup: S.useContext(fs),
        isPresent: e,
        safeToRemove: n
    })
}
const Fa = {
    borderRadius: {
        ...Tt,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Tt,
    borderTopRightRadius: Tt,
    borderBottomLeftRadius: Tt,
    borderBottomRightRadius: Tt,
    boxShadow: Ba
}
  , yi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Ea = yi.length
  , jn = t => typeof t == "string" ? parseFloat(t) : t
  , On = t => typeof t == "number" || v.test(t);
function ja(t, e, n, s, i, r) {
    i ? (t.opacity = D(0, n.opacity !== void 0 ? n.opacity : 1, Oa(s)),
    t.opacityExit = D(e.opacity !== void 0 ? e.opacity : 1, 0, Ia(s))) : r && (t.opacity = D(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
    for (let o = 0; o < Ea; o++) {
        const a = `border${yi[o]}Radius`;
        let l = In(e, a)
          , c = In(n, a);
        if (l === void 0 && c === void 0)
            continue;
        l || (l = 0),
        c || (c = 0),
        l === 0 || c === 0 || On(l) === On(c) ? (t[a] = Math.max(D(jn(l), jn(c), s), 0),
        (W.test(c) || W.test(l)) && (t[a] += "%")) : t[a] = c
    }
    (e.rotate || n.rotate) && (t.rotate = D(e.rotate || 0, n.rotate || 0, s))
}
function In(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const Oa = vi(0, .5, Ns)
  , Ia = vi(.5, .95, L);
function vi(t, e, n) {
    return s => s < t ? 0 : s > e ? 1 : n(Mt(t, e, s))
}
function Un(t, e) {
    t.min = e.min,
    t.max = e.max
}
function U(t, e) {
    Un(t.x, e.x),
    Un(t.y, e.y)
}
function Nn(t, e, n, s, i) {
    return t -= e,
    t = _t(t, 1 / n, s),
    i !== void 0 && (t = _t(t, 1 / i, s)),
    t
}
function Ua(t, e=0, n=1, s=.5, i, r=t, o=t) {
    if (W.test(e) && (e = parseFloat(e),
    e = D(o.min, o.max, e / 100) - o.min),
    typeof e != "number")
        return;
    let a = D(r.min, r.max, s);
    t === r && (a -= e),
    t.min = Nn(t.min, e, n, a, i),
    t.max = Nn(t.max, e, n, a, i)
}
function Wn(t, e, [n,s,i], r, o) {
    Ua(t, e[n], e[s], e[i], e.scale, r, o)
}
const Na = ["x", "scaleX", "originX"]
  , Wa = ["y", "scaleY", "originY"];
function Gn(t, e, n, s) {
    Wn(t.x, e, Na, n ? n.x : void 0, s ? s.x : void 0),
    Wn(t.y, e, Wa, n ? n.y : void 0, s ? s.y : void 0)
}
function Hn(t) {
    return t.translate === 0 && t.scale === 1
}
function xi(t) {
    return Hn(t.x) && Hn(t.y)
}
function Ga(t, e) {
    return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
}
function Pi(t, e) {
    return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
}
function $n(t) {
    return I(t.x) / I(t.y)
}
class Ha {
    constructor() {
        this.members = []
    }
    add(e) {
        ze(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (Ke(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i => e === i);
        if (n === 0)
            return !1;
        let s;
        for (let i = n; i >= 0; i--) {
            const r = this.members[i];
            if (r.isPresent !== !1) {
                s = r;
                break
            }
        }
        return s ? (this.promote(s),
        !0) : !1
    }
    promote(e, n) {
        const s = this.lead;
        if (e !== s && (this.prevLead = s,
        this.lead = e,
        e.show(),
        s)) {
            s.instance && s.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = s,
            n && (e.resumeFrom.preserveOpacity = !0),
            s.snapshot && (e.snapshot = s.snapshot,
            e.snapshot.latestValues = s.animationValues || s.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: i} = e.options;
            i === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: n, resumingFrom: s} = e;
            n.onExitComplete && n.onExitComplete(),
            s && s.options.onExitComplete && s.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function zn(t, e, n) {
    let s = "";
    const i = t.x.translate / e.x
      , r = t.y.translate / e.y;
    if ((i || r) && (s = `translate3d(${i}px, ${r}px, 0) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {rotate: l, rotateX: c, rotateY: u} = n;
        l && (s += `rotate(${l}deg) `),
        c && (s += `rotateX(${c}deg) `),
        u && (s += `rotateY(${u}deg) `)
    }
    const o = t.x.scale * e.x
      , a = t.y.scale * e.y;
    return (o !== 1 || a !== 1) && (s += `scale(${o}, ${a})`),
    s || "none"
}
const $a = (t, e) => t.depth - e.depth;
class za {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        ze(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        Ke(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort($a),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function Ka(t, e) {
    const n = performance.now()
      , s = ({timestamp: i}) => {
        const r = i - n;
        r >= e && (_(s),
        t(r - e))
    }
    ;
    return A.read(s, !0),
    () => _(s)
}
function _a(t) {
    window.MotionDebug && window.MotionDebug.record(t)
}
function Xa(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
function Ya(t, e, n) {
    const s = O(t) ? t : gt(t);
    return s.start($e("", s, e, n)),
    s.animation
}
const Kn = ["", "X", "Y", "Z"]
  , qa = {
    visibility: "hidden"
}
  , _n = 1e3;
let Za = 0;
const at = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function Ti({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i}) {
    return class {
        constructor(o={}, a=e == null ? void 0 : e()) {
            this.id = Za++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                at.totalNodes = at.resolvedTargetDeltas = at.recalculatedProjection = 0,
                this.nodes.forEach(tl),
                this.nodes.forEach(ol),
                this.nodes.forEach(rl),
                this.nodes.forEach(el),
                _a(at)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new za)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new _e),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, a=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = Xa(o),
            this.instance = o;
            const {layoutId: l, layout: c, visualElement: u} = this.options;
            if (u && !u.current && u.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (c || l) && (this.isLayoutDirty = !0),
            t) {
                let h;
                const f = () => this.root.updateBlockedByResize = !1;
                t(o, () => {
                    this.root.updateBlockedByResize = !0,
                    h && h(),
                    h = Ka(f, 250),
                    Ut.hasAnimatedSinceResize && (Ut.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Yn))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({delta: h, hasLayoutChanged: f, hasRelativeTargetChanged: d, layout: m}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const p = this.options.transition || u.getDefaultTransition() || hl
                  , {onLayoutAnimationStart: x, onLayoutAnimationComplete: T} = u.getProps()
                  , y = !this.targetLayout || !Pi(this.targetLayout, m) || d
                  , g = !f && d;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || f && (y || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(h, g);
                    const P = {
                        ...He(p, "layout"),
                        onPlay: x,
                        onComplete: T
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (P.delay = 0,
                    P.type = !1),
                    this.startAnimation(P)
                } else
                    f || Yn(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = m
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            _(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(al),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                const h = this.path[u];
                h.shouldResetTransform = !0,
                h.updateScroll("snapshot"),
                h.options.layoutRoot && h.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Xn);
                return
            }
            this.isUpdating || this.nodes.forEach(sl),
            this.isUpdating = !1,
            this.nodes.forEach(il),
            this.nodes.forEach(Ja),
            this.nodes.forEach(Qa),
            this.clearAllSnapshots();
            const a = performance.now();
            F.delta = et(0, 1e3 / 60, a - F.timestamp),
            F.timestamp = a,
            F.isProcessing = !0,
            ee.update.process(F),
            ee.preRender.process(F),
            ee.render.process(F),
            F.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            queueMicrotask( () => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(nl),
            this.sharedNodes.forEach(ll)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            A.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            A.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = R(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a && (this.scroll = {
                animationId: this.root.animationId,
                phase: o,
                isRoot: s(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform
              , a = this.projectionDelta && !xi(this.projectionDelta)
              , l = this.getTransformTemplate()
              , c = l ? l(this.latestValues, "") : void 0
              , u = c !== this.prevTransformTemplateValue;
            o && (a || rt(this.latestValues) || u) && (i(this.instance, c),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)),
            fl(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: o} = this.options;
            if (!o)
                return R();
            const a = o.measureViewportBox()
              , {scroll: l} = this.root;
            return l && (J(a.x, l.offset.x),
            J(a.y, l.offset.y)),
            a
        }
        removeElementScroll(o) {
            const a = R();
            U(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l]
                  , {scroll: u, options: h} = c;
                if (c !== this.root && u && h.layoutScroll) {
                    if (u.isRoot) {
                        U(a, o);
                        const {scroll: f} = this.root;
                        f && (J(a.x, -f.offset.x),
                        J(a.y, -f.offset.y))
                    }
                    J(a.x, u.offset.x),
                    J(a.y, u.offset.y)
                }
            }
            return a
        }
        applyTransform(o, a=!1) {
            const l = R();
            U(l, o);
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c];
                !a && u.options.layoutScroll && u.scroll && u !== u.root && pt(l, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }),
                rt(u.latestValues) && pt(l, u.latestValues)
            }
            return rt(this.latestValues) && pt(l, this.latestValues),
            l
        }
        removeTransform(o) {
            const a = R();
            U(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l];
                if (!c.instance || !rt(c.latestValues))
                    continue;
                be(c.latestValues) && c.updateSnapshot();
                const u = R()
                  , h = c.measurePageBox();
                U(u, h),
                Gn(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u)
            }
            return rt(this.latestValues) && Gn(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== F.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== l;
            if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: h, layoutId: f} = this.options;
            if (!(!this.layout || !(h || f))) {
                if (this.resolvedRelativeTargetAt = F.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const d = this.getClosestProjectingParent();
                    d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = R(),
                    this.relativeTargetOrigin = R(),
                    Ct(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox),
                    U(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = R(),
                    this.targetWithTransforms = R()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    da(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : U(this.target, this.layout.layoutBox),
                    di(this.target, this.targetDelta)) : U(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const d = this.getClosestProjectingParent();
                        d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = R(),
                        this.relativeTargetOrigin = R(),
                        Ct(this.relativeTargetOrigin, this.target, d.target),
                        U(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    at.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || be(this.parent.latestValues) || fi(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const a = this.getLead()
              , l = !!this.resumingFrom || this !== a;
            let c = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1),
            l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
            this.resolvedRelativeTargetAt === F.timestamp && (c = !1),
            c)
                return;
            const {layout: u, layoutId: h} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || h))
                return;
            U(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
              , d = this.treeScale.y;
            ba(this.layoutCorrected, this.treeScale, this.path, l),
            a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const {target: m} = a;
            if (!m) {
                this.projectionTransform && (this.projectionDelta = mt(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = mt(),
            this.projectionDeltaWithTransform = mt());
            const p = this.projectionTransform;
            At(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
            this.projectionTransform = zn(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== p || this.treeScale.x !== f || this.treeScale.y !== d) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", m)),
            at.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            o) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(o, a=!1) {
            const l = this.snapshot
              , c = l ? l.latestValues : {}
              , u = {
                ...this.latestValues
            }
              , h = mt();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = R()
              , d = l ? l.source : void 0
              , m = this.layout ? this.layout.source : void 0
              , p = d !== m
              , x = this.getStack()
              , T = !x || x.members.length <= 1
              , y = !!(p && !T && this.options.crossfade === !0 && !this.path.some(ul));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = P => {
                const b = P / 1e3;
                qn(h.x, o.x, b),
                qn(h.y, o.y, b),
                this.setTargetDelta(h),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ct(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                cl(this.relativeTarget, this.relativeTargetOrigin, f, b),
                g && Ga(this.relativeTarget, g) && (this.isProjectionDirty = !1),
                g || (g = R()),
                U(g, this.relativeTarget)),
                p && (this.animationValues = u,
                ja(u, c, this.latestValues, b, y, T)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = b
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (_(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = A.update( () => {
                Ut.hasAnimatedSinceResize = !0,
                this.currentAnimation = Ya(0, _n, {
                    ...o,
                    onUpdate: a => {
                        this.mixTargetDelta(a),
                        o.onUpdate && o.onUpdate(a)
                    }
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(_n),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: l, layout: c, latestValues: u} = o;
            if (!(!a || !l || !c)) {
                if (this !== o && this.layout && c && bi(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || R();
                    const h = I(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min,
                    l.x.max = l.x.min + h;
                    const f = I(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min,
                    l.y.max = l.y.min + f
                }
                U(a, l),
                pt(a, u),
                At(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new Ha),
            this.sharedNodes.get(o).add(a);
            const c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: l}={}) {
            const c = this.getStack();
            c && c.promote(this, l),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: l} = o;
            if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0),
            !a)
                return;
            const c = {};
            for (let u = 0; u < Kn.length; u++) {
                const h = "rotate" + Kn[u];
                l[h] && (c[h] = l[h],
                o.setStaticValue(h, 0))
            }
            o.render();
            for (const u in c)
                o.setStaticValue(u, c[u]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var a, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return qa;
            const c = {
                visibility: ""
            }
              , u = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                c.opacity = "",
                c.pointerEvents = It(o == null ? void 0 : o.pointerEvents) || "",
                c.transform = u ? u(this.latestValues, "") : "none",
                c;
            const h = this.getLead();
            if (!this.projectionDelta || !this.layout || !h.target) {
                const p = {};
                return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                p.pointerEvents = It(o == null ? void 0 : o.pointerEvents) || ""),
                this.hasProjected && !rt(this.latestValues) && (p.transform = u ? u({}, "") : "none",
                this.hasProjected = !1),
                p
            }
            const f = h.animationValues || h.latestValues;
            this.applyTransformsToTarget(),
            c.transform = zn(this.projectionDeltaWithTransform, this.treeScale, f),
            u && (c.transform = u(f, c.transform));
            const {x: d, y: m} = this.projectionDelta;
            c.transformOrigin = `${d.origin * 100}% ${m.origin * 100}% 0`,
            h.animationValues ? c.opacity = h === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = h === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const p in Nt) {
                if (f[p] === void 0)
                    continue;
                const {correct: x, applyTo: T} = Nt[p]
                  , y = c.transform === "none" ? f[p] : x(f[p], h);
                if (T) {
                    const g = T.length;
                    for (let P = 0; P < g; P++)
                        c[T[P]] = y
                } else
                    c[p] = y
            }
            return this.options.layoutId && (c.pointerEvents = h === this ? It(o == null ? void 0 : o.pointerEvents) || "" : "none"),
            c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Xn),
            this.root.sharedNodes.clear()
        }
    }
}
function Ja(t) {
    t.updateLayout()
}
function Qa(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: s, measuredBox: i} = t.layout
          , {animationType: r} = t.options
          , o = n.source !== t.layout.source;
        r === "size" ? N(h => {
            const f = o ? n.measuredBox[h] : n.layoutBox[h]
              , d = I(f);
            f.min = s[h].min,
            f.max = f.min + d
        }
        ) : bi(r, n.layoutBox, s) && N(h => {
            const f = o ? n.measuredBox[h] : n.layoutBox[h]
              , d = I(s[h]);
            f.max = f.min + d,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[h].max = t.relativeTarget[h].min + d)
        }
        );
        const a = mt();
        At(a, s, n.layoutBox);
        const l = mt();
        o ? At(l, t.applyTransform(i, !0), n.measuredBox) : At(l, s, n.layoutBox);
        const c = !xi(a);
        let u = !1;
        if (!t.resumeFrom) {
            const h = t.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
                const {snapshot: f, layout: d} = h;
                if (f && d) {
                    const m = R();
                    Ct(m, n.layoutBox, f.layoutBox);
                    const p = R();
                    Ct(p, s, d.layoutBox),
                    Pi(m, p) || (u = !0),
                    h.options.layoutRoot && (t.relativeTarget = p,
                    t.relativeTargetOrigin = m,
                    t.relativeParent = h)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: u
        })
    } else if (t.isLead()) {
        const {onExitComplete: s} = t.options;
        s && s()
    }
    t.options.transition = void 0
}
function tl(t) {
    at.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function el(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function nl(t) {
    t.clearSnapshot()
}
function Xn(t) {
    t.clearMeasurements()
}
function sl(t) {
    t.isLayoutDirty = !1
}
function il(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function Yn(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function ol(t) {
    t.resolveTargetDelta()
}
function rl(t) {
    t.calcProjection()
}
function al(t) {
    t.resetRotation()
}
function ll(t) {
    t.removeLeadSnapshot()
}
function qn(t, e, n) {
    t.translate = D(e.translate, 0, n),
    t.scale = D(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function Zn(t, e, n, s) {
    t.min = D(e.min, n.min, s),
    t.max = D(e.max, n.max, s)
}
function cl(t, e, n, s) {
    Zn(t.x, e.x, n.x, s),
    Zn(t.y, e.y, n.y, s)
}
function ul(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const hl = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Jn = t => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t)
  , Qn = Jn("applewebkit/") && !Jn("chrome/") ? Math.round : L;
function ts(t) {
    t.min = Qn(t.min),
    t.max = Qn(t.max)
}
function fl(t) {
    ts(t.x),
    ts(t.y)
}
function bi(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !Pe($n(e), $n(n), .2)
}
const dl = Ti({
    attachResizeListener: (t, e) => $(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , fe = {
    current: void 0
}
  , Vi = Ti({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!fe.current) {
            const t = new dl({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            fe.current = t
        }
        return fe.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , ml = {
    pan: {
        Feature: La
    },
    drag: {
        Feature: Ma,
        ProjectionNode: Vi,
        MeasureLayout: gi
    }
}
  , pl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function gl(t) {
    const e = pl.exec(t);
    if (!e)
        return [, ];
    const [,n,s] = e;
    return [n, s]
}
function Se(t, e, n=1) {
    const [s,i] = gl(t);
    if (!s)
        return;
    const r = window.getComputedStyle(e).getPropertyValue(s);
    if (r) {
        const o = r.trim();
        return oi(o) ? parseFloat(o) : o
    } else
        return de(i) ? Se(i, e, n + 1) : i
}
function yl(t, {...e}, n) {
    const s = t.current;
    if (!(s instanceof Element))
        return {
            target: e,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    t.values.forEach(i => {
        const r = i.get();
        if (!de(r))
            return;
        const o = Se(r, s);
        o && i.set(o)
    }
    );
    for (const i in e) {
        const r = e[i];
        if (!de(r))
            continue;
        const o = Se(r, s);
        o && (e[i] = o,
        n || (n = {}),
        n[i] === void 0 && (n[i] = r))
    }
    return {
        target: e,
        transitionEnd: n
    }
}
const vl = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Si = t => vl.has(t)
  , xl = t => Object.keys(t).some(Si)
  , es = t => t === ut || t === v
  , ns = (t, e) => parseFloat(t.split(", ")[e])
  , ss = (t, e) => (n, {transform: s}) => {
    if (s === "none" || !s)
        return 0;
    const i = s.match(/^matrix3d\((.+)\)$/);
    if (i)
        return ns(i[1], e);
    {
        const r = s.match(/^matrix\((.+)\)$/);
        return r ? ns(r[1], t) : 0
    }
}
  , Pl = new Set(["x", "y", "z"])
  , Tl = Lt.filter(t => !Pl.has(t));
function bl(t) {
    const e = [];
    return Tl.forEach(n => {
        const s = t.getValue(n);
        s !== void 0 && (e.push([n, s.get()]),
        s.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    e.length && t.render(),
    e
}
const yt = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: ss(4, 13),
    y: ss(5, 14)
};
yt.translateX = yt.x;
yt.translateY = yt.y;
const Vl = (t, e, n) => {
    const s = e.measureViewportBox()
      , i = e.current
      , r = getComputedStyle(i)
      , {display: o} = r
      , a = {};
    o === "none" && e.setStaticValue("display", t.display || "block"),
    n.forEach(c => {
        a[c] = yt[c](s, r)
    }
    ),
    e.render();
    const l = e.measureViewportBox();
    return n.forEach(c => {
        const u = e.getValue(c);
        u && u.jump(a[c]),
        t[c] = yt[c](l, r)
    }
    ),
    t
}
  , Sl = (t, e, n={}, s={}) => {
    e = {
        ...e
    },
    s = {
        ...s
    };
    const i = Object.keys(e).filter(Si);
    let r = []
      , o = !1;
    const a = [];
    if (i.forEach(l => {
        const c = t.getValue(l);
        if (!t.hasValue(l))
            return;
        let u = n[l]
          , h = Pt(u);
        const f = e[l];
        let d;
        if (Gt(f)) {
            const m = f.length
              , p = f[0] === null ? 1 : 0;
            u = f[p],
            h = Pt(u);
            for (let x = p; x < m && f[x] !== null; x++)
                d ? Ie(Pt(f[x]) === d) : d = Pt(f[x])
        } else
            d = Pt(f);
        if (h !== d)
            if (es(h) && es(d)) {
                const m = c.get();
                typeof m == "string" && c.set(parseFloat(m)),
                typeof f == "string" ? e[l] = parseFloat(f) : Array.isArray(f) && d === v && (e[l] = f.map(parseFloat))
            } else
                h != null && h.transform && (d != null && d.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(d.transform(u)) : e[l] = h.transform(f) : (o || (r = bl(t),
                o = !0),
                a.push(l),
                s[l] = s[l] !== void 0 ? s[l] : e[l],
                c.jump(f))
    }
    ),
    a.length) {
        const l = a.indexOf("height") >= 0 ? window.pageYOffset : null
          , c = Vl(e, t, a);
        return r.length && r.forEach( ([u,h]) => {
            t.getValue(u).set(h)
        }
        ),
        t.render(),
        we && l !== null && window.scrollTo({
            top: l
        }),
        {
            target: c,
            transitionEnd: s
        }
    } else
        return {
            target: e,
            transitionEnd: s
        }
}
;
function Al(t, e, n, s) {
    return xl(e) ? Sl(t, e, n, s) : {
        target: e,
        transitionEnd: s
    }
}
const Cl = (t, e, n, s) => {
    const i = yl(t, e, s);
    return e = i.target,
    s = i.transitionEnd,
    Al(t, e, n, s)
}
  , Ae = {
    current: null
}
  , Ai = {
    current: !1
};
function wl() {
    if (Ai.current = !0,
    !!we)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => Ae.current = t.matches;
            t.addListener(e),
            e()
        } else
            Ae.current = !1
}
function Dl(t, e, n) {
    const {willChange: s} = e;
    for (const i in e) {
        const r = e[i]
          , o = n[i];
        if (O(r))
            t.addValue(i, r),
            Kt(s) && s.add(i);
        else if (O(o))
            t.addValue(i, gt(r, {
                owner: t
            })),
            Kt(s) && s.remove(i);
        else if (o !== r)
            if (t.hasValue(i)) {
                const a = t.getValue(i);
                !a.hasAnimated && a.set(r)
            } else {
                const a = t.getStaticValue(i);
                t.addValue(i, gt(a !== void 0 ? a : r, {
                    owner: t
                }))
            }
    }
    for (const i in n)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const is = new WeakMap
  , Ci = Object.keys(Dt)
  , Ml = Ci.length
  , os = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , Ll = Le.length;
class Rl {
    constructor({parent: e, props: n, presenceContext: s, reducedMotionConfig: i, visualState: r}, o={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = () => A.render(this.render, !1, !0);
        const {latestValues: a, renderState: l} = r;
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = n.initial ? {
            ...a
        } : {},
        this.renderState = l,
        this.parent = e,
        this.props = n,
        this.presenceContext = s,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = o,
        this.isControllingVariants = qt(n),
        this.isVariantNode = hs(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: c, ...u} = this.scrapeMotionValuesFromProps(n, {});
        for (const h in u) {
            const f = u[h];
            a[h] !== void 0 && O(f) && (f.set(a[h], !1),
            Kt(c) && c.add(h))
        }
    }
    scrapeMotionValuesFromProps(e, n) {
        return {}
    }
    mount(e) {
        this.current = e,
        is.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, s) => this.bindToMotionValue(s, n)),
        Ai.current || wl(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ae.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        is.delete(this.current),
        this.projection && this.projection.unmount(),
        _(this.notifyUpdate),
        _(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features)
            this.features[e].unmount();
        this.current = null
    }
    bindToMotionValue(e, n) {
        const s = ct.has(e)
          , i = n.on("change", o => {
            this.latestValues[e] = o,
            this.props.onUpdate && A.update(this.notifyUpdate, !1, !0),
            s && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , r = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(e, () => {
            i(),
            r()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    loadFeatures({children: e, ...n}, s, i, r) {
        let o, a;
        for (let l = 0; l < Ml; l++) {
            const c = Ci[l]
              , {isEnabled: u, Feature: h, ProjectionNode: f, MeasureLayout: d} = Dt[c];
            f && (o = f),
            u(n) && (!this.features[c] && h && (this.features[c] = new h(this)),
            d && (a = d))
        }
        if (!this.projection && o) {
            this.projection = new o(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: l, layout: c, drag: u, dragConstraints: h, layoutScroll: f, layoutRoot: d} = n;
            this.projection.setOptions({
                layoutId: l,
                layout: c,
                alwaysMeasureLayout: !!u || h && ft(h),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof c == "string" ? c : "both",
                initialPromotionConfig: r,
                layoutScroll: f,
                layoutRoot: d
            })
        }
        return a
    }
    updateFeatures() {
        for (const e in this.features) {
            const n = this.features[e];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : R()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    makeTargetAnimatable(e, n=!0) {
        return this.makeTargetAnimatableFromInstance(e, this.props, n)
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let s = 0; s < os.length; s++) {
            const i = os[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const r = e["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r))
        }
        this.prevMotionValues = Dl(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(e=!1) {
        if (e)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const s = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (s.initial = this.props.initial),
            s
        }
        const n = {};
        for (let s = 0; s < Ll; s++) {
            const i = Le[s]
              , r = this.props[i];
            (wt(r) || r === !1) && (n[i] = r)
        }
        return n
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(e),
            () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        n !== this.values.get(e) && (this.removeValue(e),
        this.bindToMotionValue(e, n)),
        this.values.set(e, n),
        this.latestValues[e] = n.get()
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let s = this.values.get(e);
        return s === void 0 && n !== void 0 && (s = gt(n, {
            owner: this
        }),
        this.addValue(e, s)),
        s
    }
    readValue(e) {
        var n;
        return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options)
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {initial: s} = this.props
          , i = typeof s == "string" || typeof s == "object" ? (n = Oe(this.props, s)) === null || n === void 0 ? void 0 : n[e] : void 0;
        if (s && i !== void 0)
            return i;
        const r = this.getBaseTargetFromProps(this.props, e);
        return r !== void 0 && !O(r) ? r : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new _e),
        this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class wi extends Rl {
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {vars: n, style: s}) {
        delete n[e],
        delete s[e]
    }
    makeTargetAnimatableFromInstance({transition: e, transitionEnd: n, ...s}, {transformValues: i}, r) {
        let o = Xr(s, e || {}, this);
        if (i && (n && (n = i(n)),
        s && (s = i(s)),
        o && (o = i(o))),
        r) {
            Kr(this, s, o);
            const a = Cl(this, s, o, n);
            n = a.transitionEnd,
            s = a.target
        }
        return {
            transition: e,
            transitionEnd: n,
            ...s
        }
    }
}
function Bl(t) {
    return window.getComputedStyle(t)
}
class kl extends wi {
    readValueFromInstance(e, n) {
        if (ct.has(n)) {
            const s = Ge(n);
            return s && s.default || 0
        } else {
            const s = Bl(e)
              , i = (ps(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: n}) {
        return mi(e, n)
    }
    build(e, n, s, i) {
        Be(e, n, s, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n) {
        return je(e, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        O(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(e, n, s, i) {
        Ts(e, n, s, i)
    }
}
class Fl extends wi {
    constructor() {
        super(...arguments),
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (ct.has(n)) {
            const s = Ge(n);
            return s && s.default || 0
        }
        return n = bs.has(n) ? n : De(n),
        e.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return R()
    }
    scrapeMotionValuesFromProps(e, n) {
        return Ss(e, n)
    }
    build(e, n, s, i) {
        Fe(e, n, s, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, n, s, i) {
        Vs(e, n, s, i)
    }
    mount(e) {
        this.isSVGTag = Ee(e.tagName),
        super.mount(e)
    }
}
const El = (t, e) => Re(t) ? new Fl(e,{
    enableHardwareAcceleration: !1
}) : new kl(e,{
    enableHardwareAcceleration: !0
})
  , jl = {
    layout: {
        ProjectionNode: Vi,
        MeasureLayout: gi
    }
}
  , Ol = {
    ...ca,
    ...Lo,
    ...ml,
    ...jl
}
  , Nl = Wi( (t, e) => yo(t, e, Ol, El));
export {kl as H, Fl as S, Pr as a, Xa as b, vn as c, yn as d, K as e, Go as f, D as g, O as h, Ie as i, or as j, ir as k, tt as l, Nl as m, Ya as n, li as o, Mt as p, Ke as r, ni as s, is as v};
