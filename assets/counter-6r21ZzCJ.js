import {
    H as X,
    I as Y,
    r as B,
    j as Z
} from "./index-IT1gKaF9.js";
import {
    i as $,
    a as tt,
    b as et,
    S as nt,
    H as at,
    v as V,
    s as st,
    c as rt,
    d as it,
    e as ot,
    f as lt,
    g as ut,
    r as ct,
    h as O,
    j as ft,
    k as mt,
    p as ht,
    l as pt,
    n as U,
    o as dt
} from "./motion-_fLkK2fy.js";

function W(t, e, a) {
    var n;
    if (typeof t == "string") {
        let s = document;
        e && ($(!!e.current), s = e.current), a ? ((n = a[t]) !== null && n !== void 0 || (a[t] = s.querySelectorAll(t)), t = a[t]) : t = s.querySelectorAll(t)
    } else t instanceof Element && (t = [t]);
    return Array.from(t || [])
}

function gt(t, e) {
    let a;
    const n = () => {
        const {
            currentTime: s
        } = e, i = (s === null ? 0 : s.value) / 100;
        a !== i && t(i), a = i
    };
    return X.update(n, !0), () => Y(n)
}
const yt = tt(() => window.ScrollTimeline !== void 0);
class _ {
    constructor(e) {
        this.animations = e.filter(Boolean)
    }
    then(e, a) {
        return Promise.all(this.animations).then(e).catch(a)
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, a) {
        for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = a
    }
    attachTimeline(e) {
        const a = this.animations.map(n => {
            if (yt() && n.attachTimeline) n.attachTimeline(e);
            else return n.pause(), gt(s => {
                n.time = n.duration * s
            }, e)
        });
        return () => {
            a.forEach((n, s) => {
                n && n(), this.animations[s].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get duration() {
        let e = 0;
        for (let a = 0; a < this.animations.length; a++) e = Math.max(e, this.animations[a].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(a => a[e]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    stop() {
        this.runAll("stop")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}

function At(t) {
    return typeof t == "object" && !Array.isArray(t)
}

function St(t) {
    const e = {
            presenceContext: null,
            props: {},
            visualState: {
                renderState: {
                    transform: {},
                    transformOrigin: {},
                    style: {},
                    vars: {},
                    attrs: {}
                },
                latestValues: {}
            }
        },
        a = et(t) ? new nt(e, {
            enableHardwareAcceleration: !1
        }) : new at(e, {
            enableHardwareAcceleration: !0
        });
    a.mount(t), V.set(t, a)
}

function vt(t, e = 100) {
    const a = st({
            keyframes: [0, e],
            ...t
        }),
        n = Math.min(rt(a), it);
    return {
        type: "keyframes",
        ease: s => a.next(n * s).value / e,
        duration: ot(n)
    }
}

function C(t, e, a, n) {
    var s;
    return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? a : (s = n.get(e)) !== null && s !== void 0 ? s : t
}
const Et = (t, e, a) => {
    const n = e - t;
    return ((a - t) % n + n) % n + t
};

function Tt(t, e) {
    return lt(t) ? t[Et(0, t.length, e)] : t
}

function xt(t, e, a) {
    for (let n = 0; n < t.length; n++) {
        const s = t[n];
        s.at > e && s.at < a && (ct(t, s), n--)
    }
}

function Mt(t, e, a, n, s, r) {
    xt(t, s, r);
    for (let i = 0; i < e.length; i++) t.push({
        value: e[i],
        at: ut(s, r, n[i]),
        easing: Tt(a, i)
    })
}

function bt(t, e) {
    return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at
}
const wt = "easeInOut";

function Dt(t, {
    defaultTransition: e = {},
    ...a
} = {}, n) {
    const s = e.duration || .3,
        r = new Map,
        i = new Map,
        l = {},
        u = new Map;
    let x = 0,
        c = 0,
        w = 0;
    for (let v = 0; v < t.length; v++) {
        const h = t[v];
        if (typeof h == "string") {
            u.set(h, c);
            continue
        } else if (!Array.isArray(h)) {
            u.set(h.name, C(c, h.at, x, u));
            continue
        }
        let [S, p, f = {}] = h;
        f.at !== void 0 && (c = C(c, f.at, x, u));
        let m = 0;
        const E = (d, g, A, M = 0, b = 0) => {
            const o = Vt(d),
                {
                    delay: D = 0,
                    times: T = ft(o),
                    type: q = "keyframes",
                    ...J
                } = g;
            let {
                ease: F = e.ease || "easeOut",
                duration: y
            } = g;
            const G = typeof D == "function" ? D(M, b) : D,
                K = o.length;
            if (K <= 2 && q === "spring") {
                let k = 100;
                if (K === 2 && Kt(o)) {
                    const Q = o[1] - o[0];
                    k = Math.abs(Q)
                }
                const L = { ...J
                };
                y !== void 0 && (L.duration = pt(y));
                const N = vt(L, k);
                F = N.ease, y = N.duration
            }
            y ? ? (y = s);
            const j = c + G,
                H = j + y;
            T.length === 1 && T[0] === 0 && (T[1] = 1);
            const I = T.length - o.length;
            I > 0 && mt(T, I), o.length === 1 && o.unshift(null), Mt(A, o, F, T, j, H), m = Math.max(G + y, m), w = Math.max(H, w)
        };
        if (O(S)) {
            const d = P(S, i);
            E(p, f, R("default", d))
        } else {
            const d = W(S, n, l),
                g = d.length;
            for (let A = 0; A < g; A++) {
                p = p, f = f;
                const M = d[A],
                    b = P(M, i);
                for (const o in p) E(p[o], Ft(f, o), R(o, b), A, g)
            }
            x = c, c += m
        }
    }
    return i.forEach((v, h) => {
        for (const S in v) {
            const p = v[S];
            p.sort(bt);
            const f = [],
                m = [],
                E = [];
            for (let g = 0; g < p.length; g++) {
                const {
                    at: A,
                    value: M,
                    easing: b
                } = p[g];
                f.push(M), m.push(ht(0, w, A)), E.push(b || "easeOut")
            }
            m[0] !== 0 && (m.unshift(0), f.unshift(f[0]), E.unshift(wt)), m[m.length - 1] !== 1 && (m.push(1), f.push(null)), r.has(h) || r.set(h, {
                keyframes: {},
                transition: {}
            });
            const d = r.get(h);
            d.keyframes[S] = f, d.transition[S] = { ...e,
                duration: w,
                ease: E,
                times: m,
                ...a
            }
        }
    }), r
}

function P(t, e) {
    return !e.has(t) && e.set(t, {}), e.get(t)
}

function R(t, e) {
    return e[t] || (e[t] = []), e[t]
}

function Vt(t) {
    return Array.isArray(t) ? t : [t]
}

function Ft(t, e) {
    return t[e] ? { ...t,
        ...t[e]
    } : { ...t
    }
}
const Gt = t => typeof t == "number",
    Kt = t => t.every(Gt);

function z(t, e, a, n) {
    const s = W(t, n),
        r = s.length,
        i = [];
    for (let l = 0; l < r; l++) {
        const u = s[l];
        V.has(u) || St(u);
        const x = V.get(u),
            c = { ...a
            };
        typeof c.delay == "function" && (c.delay = c.delay(l, r)), i.push(...dt(x, { ...e,
            transition: c
        }, {}))
    }
    return new _(i)
}
const jt = t => Array.isArray(t) && Array.isArray(t[0]);

function Ht(t, e, a) {
    const n = [];
    return Dt(t, e, a).forEach(({
        keyframes: r,
        transition: i
    }, l) => {
        let u;
        O(l) ? u = U(l, r.default, i.default) : u = z(l, r, i), n.push(u)
    }), new _(n)
}
const It = t => {
        function e(a, n, s) {
            let r;
            return jt(a) ? r = Ht(a, n, t) : At(n) ? r = z(a, n, s, t) : r = U(a, n, s), t && t.animations.push(r), r
        }
        return e
    },
    kt = It();

function Bt({
    from: t,
    to: e,
    style: a,
    fixed: n
}) {
    const s = B.useRef();
    return B.useEffect(() => {
        const r = s.current,
            i = kt(t, e, {
                duration: 1,
                onUpdate(l) {
                    r.textContent = Intl.NumberFormat("en-US").format(l.toFixed(n || 0))
                }
            });
        return () => i.stop()
    }, [t, e]), Z.jsx("span", {
        style: a,
        ref: s
    })
}
export {
    Bt as C
};