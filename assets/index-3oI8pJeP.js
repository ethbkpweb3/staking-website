import {
  s as r,
  bs as m,
  r as h,
  a as re,
  e as de,
  bt as I,
  l as L,
  bu as R,
  t as u,
  j as n,
  bv as Ce,
  c as et,
  bw as tt,
  n as nt,
  bx as at,
  by as st,
  bz as he,
  k as ge,
  o as H,
  bA as ot,
  m as it,
} from "./index-IT1gKaF9.js";
import { W as N } from "./web3-FmIaR_iU.js";
import {
  i as Pe,
  S as Z,
  k as rt,
  a as dt,
  F as ct,
} from "./index-D-PQ9ydw.js";
import { a as be, b as lt, L as pt } from "./mainStyles-R3YPfcg-.js";
import { C as M } from "./counter-6r21ZzCJ.js";
import "./events-a2vpiPAD.js";
import "./index-tTQKUB83.js";
import "./motion-_fLkK2fy.js";
const xt = r.div`
  background: linear-gradient(
      180deg,
      rgb(1, 1, 2) 10%,
      rgb(1, 1, 2) 50%,
      rgb(1, 1, 2) 90%
    ),

`,
  mt = r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 24px 24px;
`,
  ut = r.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  gap: 25px;

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
`,
  ft = r.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 25px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`,
  ne = r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: 10px solid;
  border-image: url("/images/nav/navButton.svg") 12 fill;
  padding: 20px;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  transition: 0.2s all ease-in-out;
`,
  ht = r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: clamp(300px, 80%, 600px);
  height: 100%;
  border: 10px solid;
  border-image: url("/images/nav/navButton.svg") 12 fill;
  padding: 20px;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  transition: 0.2s all ease-in-out;

  @media screen and (max-width: 768px) {
    max-width: clamp(300px, 100%, 600px);
  }
`,
  gt = r.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 10px solid;
  border-image: url("/images/coinStake/inputBorder.svg") 12 fill;
  margin-top: 25px;

  @media screen and (max-width: 768px) {
    height: 50px;
  }

  @media screen and (max-width: 480px) {
    height: 45px;
  }
`,
  ae = r.div`
  display: flex;
  flex-direction: column;
`,
  U = r.div`
  display: flex;
  flex-direction: column;
`,
  bt = r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border: 10px solid;
  border-image: url("/images/coinStake/inputBorder.svg") 12 fill;

  @media screen and (max-width: 768px) {
    height: 50px;
  }

  @media screen and (max-width: 480px) {
    height: 45px;
  }
`,
  wt = r.input`
  width: 100%;
  height: 100%;
  background: transparent;
  padding-left: 10px;
  border: none;

  :focus {
    outline: none;
  }
`,
  G = r.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 25px;
  gap: 25px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`,
  D = r.button`
  padding: 4px 25px;
  width: 100%;
  color: #fcefde;
  font-weight: bold;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  background: transparent;
  border: 10px solid;
  border-image: url("/images/coinStake/button.png") 12 fill;
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
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    box-shadow: -2px 2px 0px -3px rgba(0, 0, 0, 0.6);
  }
`;
r.button`
  padding: 4px 25px;
  width: 100%;
  color: #81451e;
  font-weight: bold;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  background: transparent;
  border: 10px solid;
  border-image: url("/images/coinStake/brownBorder.svg") 12 fill;

  @media screen and (max-width: 1300px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-inline: auto;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }

  :disabled {
    opacity: 0.3;
  }

  &:hover:not([disabled]) {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    box-shadow: -10px 10px 0px -4px rgba(0, 0, 0, 0.6);
    border-image: url("/images/coinStake/brownBorder.svg") 12 fill;
    color: #81451e;
  }
`;
const V = r.h1`
  font-family: "Bebas Neue", cursive;
  font-size: 36px;
  color: #81451e;
  text-align: center;

  @media screen and (max-width: 1300px) {
    font-size: 32px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`,
  K = r.p`
  font-size: 16px;
  color: #3e2a2e;
  font-weight: ${({ bold: a }) => (a ? "bold" : "none")};
  text-align: center;

  @media screen and (max-width: 1300px) {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`,
  kt = r.p`
  font-size: 16px;
  color: red;
  font-weight: ${({ bold: a }) => (a ? "bold" : "none")};
  text-align: center;

  @media screen and (max-width: 1300px) {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
r.p`
  font-size: 18px;
  color: #3e2a2e;
  font-weight: ${({ bold: a }) => (a ? "bold" : "none")};
  text-align: center;
  padding-left: 10px;

  @media screen and (max-width: 1300px) {
    font-size: 17px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const vt = r.p`
  font-size: 18px;
  color: #3e2a2e;
  font-weight: ${({ bold: a }) => (a ? "bold" : "none")};
  text-align: center;

  @media screen and (max-width: 1300px) {
    font-size: 17px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
r.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  gap: 25px;
`;
const yt = r.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  background: transparent;
  padding: 5px;
  border: 2px solid #81451e;
  border-radius: 5px;

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

  &:active {
    transform: scale(0.95);
    transition: all 0.2s ease-in-out;
  }

  &:hover:not([disabled]) {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    box-shadow: -5px 5px 0px -2px rgba(0, 0, 0, 0.6);
  }
`,
  we = r.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 4;
  background: rgba(3, 51, 29, 0.9);
`,
  ke = r.button`
  padding: 4px 25px;
  color: #81451e;
  font-weight: bold;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  background: transparent;
  border: 10px solid;
  border-image: url("/images/nav/navButton.svg") 12 fill;

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
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    box-shadow: -10px 10px 0px -4px rgba(0, 0, 0, 0.6);
    border-image: url("/images/nav/navButton.svg") 12 fill;
    color: #81451e;
  }
`,
  Tt = r.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`,
  ve = r.p`
  font-size: 18px;
  color: #fcefde;
  font-weight: ${({ bold: a }) => (a ? "bold" : "none")};

  @media screen and (max-width: 1300px) {
    font-size: 17px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`,
  ye = r.p`
  font-size: 16px;
  color: #fcefde;
  font-weight: ${({ bold: a }) => (a ? "bold" : "none")};

  @media screen and (max-width: 1300px) {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`,
  Te = r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #022d1a;
  border-radius: 10px;
  gap: 10px;
  padding: 5px 10px;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,
  St = r.button`
  padding: 5px;
  color: #000;
  font-weight: bold;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  font-size: 12px;
  background: transparent;
  border: 2px solid #81451e;
  border-radius: 5px;

  @media screen and (max-width: 1300px) {
    font-size: 11px;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 4px;
  }

  @media screen and (max-width: 480px) {
    font-size: 9px;
    padding: 3px;
  }

  :disabled {
    opacity: 0.3;
  }

  &:hover:not([disabled]) {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    color: #000;
  }
`,
  jt = r.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`,
  zt = r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #022d1a;
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  font-size: 16px;
  color: #fcefde;
  font-weight: ${({ bold: a }) => (a ? "bold" : "none")};
  text-align: center;

  :disabled {
    opacity: 0.3;
  }

  &:hover:not([disabled]) {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 1300px) {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`,
  Se = r.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`,
  X = r.p`
  font-size: 16px;
  color: #000;
  font-weight: ${({ bold: a }) => (a ? "bold" : "none")};
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 1300px) {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`,
  Ct = r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
  padding: 5px 15px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.15);
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`,
  Pt = r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 150px;
  overflow-y: auto;
  padding: 5px;
`,
  Dt = r.p`
  font-size: 16px;
  color: #387636;
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 1300px) {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`,
  je = r.div`
  width: 100%;
  border-bottom: 2px solid rgba(129, 69, 30, 0.2);
`,
  se = r.p`
  font-size: 18px;
  color: #3e2a2e;
  font-weight: ${({ bold: a }) => (a ? "bold" : "none")};
  text-align: start;
  padding: 5px;

  @media screen and (max-width: 1300px) {
    font-size: 17px;
  }

  @media screen and (max-width: 920px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    text-align: center;
  }
`;
function De(a, o) {
  if (!(a instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function ze(a, o) {
  for (var e = 0; e < o.length; e++) {
    var s = o[e];
    (s.enumerable = s.enumerable || !1),
      (s.configurable = !0),
      "value" in s && (s.writable = !0),
      Object.defineProperty(a, s.key, s);
  }
}
function Ee(a, o, e) {
  return o && ze(a.prototype, o), e && ze(a, e), a;
}
function Be(a, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Super expression must either be null or a function");
  (a.prototype = Object.create(o && o.prototype, {
    constructor: { value: a, writable: !0, configurable: !0 },
  })),
    o && oe(a, o);
}
function q(a) {
  return (
    (q = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    q(a)
  );
}
function oe(a, o) {
  return (
    (oe =
      Object.setPrototypeOf ||
      function (s, t) {
        return (s.__proto__ = t), s;
      }),
    oe(a, o)
  );
}
function Et() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch {
    return !1;
  }
}
function Bt(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function Wt(a, o) {
  return o && (typeof o == "object" || typeof o == "function") ? o : Bt(a);
}
function We(a) {
  var o = Et();
  return function () {
    var s = q(a),
      t;
    if (o) {
      var l = q(this).constructor;
      t = Reflect.construct(s, arguments, l);
    } else t = s.apply(this, arguments);
    return Wt(this, t);
  };
}
function Ot(a) {
  return Mt(a) || _t(a) || It(a) || Lt();
}
function Mt(a) {
  if (Array.isArray(a)) return ie(a);
}
function _t(a) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(a)) return Array.from(a);
}
function It(a, o) {
  if (a) {
    if (typeof a == "string") return ie(a, o);
    var e = Object.prototype.toString.call(a).slice(8, -1);
    if (
      (e === "Object" && a.constructor && (e = a.constructor.name),
      e === "Map" || e === "Set")
    )
      return Array.from(a);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return ie(a, o);
  }
}
function ie(a, o) {
  (o == null || o > a.length) && (o = a.length);
  for (var e = 0, s = new Array(o); e < o; e++) s[e] = a[e];
  return s;
}
function Lt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _(a) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2,
    e = String(a);
  if (o === 0) return e;
  var s = e.match(/(.*?)([0-9]+)(.*)/),
    t = s ? s[1] : "",
    l = s ? s[3] : "",
    d = s ? s[2] : e,
    p =
      d.length >= o
        ? d
        : (
            Ot(Array(o))
              .map(function () {
                return "0";
              })
              .join("") + d
          ).slice(o * -1);
  return "".concat(t).concat(p).concat(l);
}
var Oe = { daysInHours: !1, zeroPadTime: 2 };
function Rt(a) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    e = o.now,
    s = e === void 0 ? Date.now : e,
    t = o.precision,
    l = t === void 0 ? 0 : t,
    d = o.controlled,
    p = o.offsetTime,
    c = p === void 0 ? 0 : p,
    g = o.overtime,
    i;
  typeof a == "string"
    ? (i = new Date(a).getTime())
    : a instanceof Date
    ? (i = a.getTime())
    : (i = a),
    d || (i += c);
  var b = d ? i : i - s(),
    w = Math.min(20, Math.max(0, l)),
    f = Math.round(
      parseFloat(((g ? b : Math.max(0, b)) / 1e3).toFixed(w)) * 1e3
    ),
    k = Math.abs(f) / 1e3;
  return {
    total: f,
    days: Math.floor(k / (3600 * 24)),
    hours: Math.floor((k / 3600) % 24),
    minutes: Math.floor((k / 60) % 60),
    seconds: Math.floor(k % 60),
    milliseconds: Number(((k % 1) * 1e3).toFixed()),
    completed: f <= 0,
  };
}
function Nt(a, o) {
  var e = a.days,
    s = a.hours,
    t = a.minutes,
    l = a.seconds,
    d = Object.assign(Object.assign({}, Oe), o),
    p = d.daysInHours,
    c = d.zeroPadTime,
    g = d.zeroPadDays,
    i = g === void 0 ? c : g,
    b = Math.min(2, c),
    w = p ? _(s + e * 24, c) : _(s, b);
  return {
    days: p ? "" : _(e, i),
    hours: w,
    minutes: _(t, b),
    seconds: _(l, b),
  };
}
var Me = (function (a) {
  Be(e, a);
  var o = We(e);
  function e() {
    var s;
    return (
      De(this, e),
      (s = o.apply(this, arguments)),
      (s.state = { count: s.props.count || 3 }),
      (s.startCountdown = function () {
        s.interval = window.setInterval(function () {
          var t = s.state.count - 1;
          t === 0
            ? (s.stopCountdown(), s.props.onComplete && s.props.onComplete())
            : s.setState(function (l) {
                return { count: l.count - 1 };
              });
        }, 1e3);
      }),
      (s.stopCountdown = function () {
        clearInterval(s.interval);
      }),
      (s.addTime = function (t) {
        s.stopCountdown(),
          s.setState(function (l) {
            return { count: l.count + t };
          }, s.startCountdown);
      }),
      s
    );
  }
  return (
    Ee(e, [
      {
        key: "componentDidMount",
        value: function () {
          this.startCountdown();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          clearInterval(this.interval);
        },
      },
      {
        key: "render",
        value: function () {
          return this.props.children
            ? h.cloneElement(this.props.children, { count: this.state.count })
            : null;
        },
      },
    ]),
    e
  );
})(h.Component);
Me.propTypes = { count: m.number, children: m.element, onComplete: m.func };
var ce = (function (a) {
  Be(e, a);
  var o = We(e);
  function e(s) {
    var t;
    if (
      (De(this, e),
      (t = o.call(this, s)),
      (t.mounted = !1),
      (t.initialTimestamp = t.calcOffsetStartTimestamp()),
      (t.offsetStartTimestamp = t.props.autoStart ? 0 : t.initialTimestamp),
      (t.offsetTime = 0),
      (t.legacyMode = !1),
      (t.legacyCountdownRef = h.createRef()),
      (t.tick = function () {
        var d = t.calcTimeDelta(),
          p = d.completed && !t.props.overtime ? void 0 : t.props.onTick;
        t.setTimeDeltaState(d, void 0, p);
      }),
      (t.start = function () {
        if (!t.isStarted()) {
          var d = t.offsetStartTimestamp;
          (t.offsetStartTimestamp = 0),
            (t.offsetTime += d ? t.calcOffsetStartTimestamp() - d : 0);
          var p = t.calcTimeDelta();
          t.setTimeDeltaState(p, "STARTED", t.props.onStart),
            !t.props.controlled &&
              (!p.completed || t.props.overtime) &&
              (t.clearTimer(),
              (t.interval = window.setInterval(t.tick, t.props.intervalDelay)));
        }
      }),
      (t.pause = function () {
        t.isPaused() ||
          (t.clearTimer(),
          (t.offsetStartTimestamp = t.calcOffsetStartTimestamp()),
          t.setTimeDeltaState(t.state.timeDelta, "PAUSED", t.props.onPause));
      }),
      (t.stop = function () {
        t.isStopped() ||
          (t.clearTimer(),
          (t.offsetStartTimestamp = t.calcOffsetStartTimestamp()),
          (t.offsetTime = t.offsetStartTimestamp - t.initialTimestamp),
          t.setTimeDeltaState(t.calcTimeDelta(), "STOPPED", t.props.onStop));
      }),
      (t.isStarted = function () {
        return t.isStatus("STARTED");
      }),
      (t.isPaused = function () {
        return t.isStatus("PAUSED");
      }),
      (t.isStopped = function () {
        return t.isStatus("STOPPED");
      }),
      (t.isCompleted = function () {
        return t.isStatus("COMPLETED");
      }),
      s.date)
    ) {
      var l = t.calcTimeDelta();
      t.state = { timeDelta: l, status: l.completed ? "COMPLETED" : "STOPPED" };
    } else t.legacyMode = !0;
    return t;
  }
  return (
    Ee(e, [
      {
        key: "componentDidMount",
        value: function () {
          this.legacyMode ||
            ((this.mounted = !0),
            this.props.onMount && this.props.onMount(this.calcTimeDelta()),
            this.props.autoStart && this.start());
        },
      },
      {
        key: "componentDidUpdate",
        value: function (t) {
          this.legacyMode ||
            (this.props.date !== t.date &&
              ((this.initialTimestamp = this.calcOffsetStartTimestamp()),
              (this.offsetStartTimestamp = this.initialTimestamp),
              (this.offsetTime = 0),
              this.setTimeDeltaState(this.calcTimeDelta())));
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.legacyMode || ((this.mounted = !1), this.clearTimer());
        },
      },
      {
        key: "calcTimeDelta",
        value: function () {
          var t = this.props,
            l = t.date,
            d = t.now,
            p = t.precision,
            c = t.controlled,
            g = t.overtime;
          return Rt(l, {
            now: d,
            precision: p,
            controlled: c,
            offsetTime: this.offsetTime,
            overtime: g,
          });
        },
      },
      {
        key: "calcOffsetStartTimestamp",
        value: function () {
          return Date.now();
        },
      },
      {
        key: "addTime",
        value: function (t) {
          this.legacyCountdownRef.current.addTime(t);
        },
      },
      {
        key: "clearTimer",
        value: function () {
          window.clearInterval(this.interval);
        },
      },
      {
        key: "isStatus",
        value: function (t) {
          return this.state.status === t;
        },
      },
      {
        key: "setTimeDeltaState",
        value: function (t, l, d) {
          var p = this;
          if (this.mounted) {
            var c = t.completed && !this.state.timeDelta.completed,
              g = t.completed && l === "STARTED";
            c && !this.props.overtime && this.clearTimer();
            var i = function () {
              d && d(p.state.timeDelta),
                p.props.onComplete && (c || g) && p.props.onComplete(t, g);
            };
            return this.setState(function (b) {
              var w = l || b.status;
              return (
                t.completed && !p.props.overtime
                  ? (w = "COMPLETED")
                  : !l && w === "COMPLETED" && (w = "STOPPED"),
                { timeDelta: t, status: w }
              );
            }, i);
          }
        },
      },
      {
        key: "getApi",
        value: function () {
          return (this.api = this.api || {
            start: this.start,
            pause: this.pause,
            stop: this.stop,
            isStarted: this.isStarted,
            isPaused: this.isPaused,
            isStopped: this.isStopped,
            isCompleted: this.isCompleted,
          });
        },
      },
      {
        key: "getRenderProps",
        value: function () {
          var t = this.props,
            l = t.daysInHours,
            d = t.zeroPadTime,
            p = t.zeroPadDays,
            c = this.state.timeDelta;
          return Object.assign(Object.assign({}, c), {
            api: this.getApi(),
            props: this.props,
            formatted: Nt(c, {
              daysInHours: l,
              zeroPadTime: d,
              zeroPadDays: p,
            }),
          });
        },
      },
      {
        key: "render",
        value: function () {
          if (this.legacyMode) {
            var t = this.props,
              l = t.count,
              d = t.children,
              p = t.onComplete;
            return h.createElement(
              Me,
              { ref: this.legacyCountdownRef, count: l, onComplete: p },
              d
            );
          }
          var c = this.props,
            g = c.className,
            i = c.overtime,
            b = c.children,
            w = c.renderer,
            f = this.getRenderProps();
          if (w) return w(f);
          if (b && this.state.timeDelta.completed && !i)
            return h.cloneElement(b, { countdown: f });
          var k = f.formatted,
            y = k.days,
            x = k.hours,
            T = k.minutes,
            S = k.seconds;
          return h.createElement(
            "span",
            { className: g },
            f.total < 0 ? "-" : "",
            y,
            y ? ":" : "",
            x,
            ":",
            T,
            ":",
            S
          );
        },
      },
    ]),
    e
  );
})(h.Component);
ce.defaultProps = Object.assign(Object.assign({}, Oe), {
  controlled: !1,
  intervalDelay: 1e3,
  precision: 0,
  autoStart: !0,
});
ce.propTypes = {
  date: m.oneOfType([m.instanceOf(Date), m.string, m.number]),
  daysInHours: m.bool,
  zeroPadTime: m.number,
  zeroPadDays: m.number,
  controlled: m.bool,
  intervalDelay: m.number,
  precision: m.number,
  autoStart: m.bool,
  overtime: m.bool,
  className: m.string,
  children: m.element,
  renderer: m.func,
  now: m.func,
  onMount: m.func,
  onStart: m.func,
  onPause: m.func,
  onStop: m.func,
  onTick: m.func,
  onComplete: m.func,
};
const _e = r.h1`
  font-family: "Bebas Neue", cursive;
  font-size: 56px;
  color: #81451e;
  text-align: ${({ center: a }) => (a ? "center" : "none")};
  margin-bottom: 10px;

  @media screen and (max-width: 1300px) {
    font-size: 46px;
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`,
  Ie = r.p`
  font-size: 16px;
  color: #3e2a2e;
  text-align: ${({ center: a }) => (a ? "center" : "none")};
  font-weight: ${({ bold: a }) => (a ? "bold" : "400")};

  @media screen and (max-width: 1300px) {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`,
  $t = ({
    open: a,
    setOpen: o,
    disablePopup: e,
    allowanceData: s,
    stakeRefetch: t,
    userRefetch: l,
    setFeedbackStake: d,
    setStakeAmount: p,
    stakeAmount: c,
    writeApprove: g,
  }) => {
    const { t: i } = re(),
      { address: b } = de(),
      [w, f] = h.useState("");
    function k(E) {
      return E ? E.toLocaleString() : 0;
    }
    const {
        data: y,
        isLoading: x,
        write: T,
      } = I({ ...L, functionName: "stake", value: 0, args: [s], account: b }),
      { isLoading: S } = R({
        hash: y == null ? void 0 : y.hash,
        onSuccess() {
          u.success(i("stake.messages.stakeSuccess")),
            d(i("stake.messages.stakeSuccess")),
            p(0),
            t(),
            l(),
            o(!1);
        },
        onError() {
          u.error(i("stake.messages.stakeError")),
            d(i("stake.messages.stakeError")),
            o(!1);
        },
      });
    return (
      h.useEffect(() => {
        setTimeout(() => {
          f("");
        }, 5e3);
      }, [w]),
      n.jsxs(Pe, {
        open: a,
        setOpen: o,
        disablePopup: e || S || x,
        children: [
          n.jsx(_e, {
            children: i(
              S ? "stake.modal.staking" : "Allowance Token"
            ),
          }),
          n.jsx(Ie, {
            center: !0,
            children: S
              ? i("stake.modal.wait")
              : n.jsxs(Ce, {
                  i18nKey: "stake.modal.foundText",
                  values: {
                    0: k(
                      Number(
                        N.utils.fromWei(
                          (s == null ? void 0 : s.toString()) || "0",
                          "ether"
                        )
                      )
                    ),
                    1: k(Number(c)),
                  },
                  children: [
                    "TOKEN",
                    n.jsx("span", {
                      style: { fontWeight: "bold", color: "#387636" },
                      children: "AMOUNT",
                    }),
                    n.jsx("span", {
                      style: { fontWeight: "bold", color: "#81451E" },
                      children: "ALLOW",
                    }),
                  ],
                }),
          }),
          S
            ? n.jsx(Z, { style: { marginTop: "25px" } })
            : n.jsxs(G, {
                children: [
                  n.jsx(D, {
                    disabled: x,
                    onClick: () => {
                      o(!1),
                        u.success(i("Check Wallet"), {
                          icon: "🪙",
                        }),
                        g == null || g();
                    },
                    children: i("Create New"),
                  }),
                  n.jsx(D, {
                    disabled: x,
                    onClick: () => {
                      f(i("Check Wallet")), T == null || T();
                    },
                    children: i("Stake All Kids"),
                  }),
                ],
              }),
          w && n.jsx(X, { style: { marginTop: "25px" }, children: w }),
        ],
      })
    );
  },
  At = ({
    open: a,
    setOpen: o,
    disablePopup: e,
    stakeAmount: s,
    setStakeAmount: t,
    setFeedbackStake: l,
    stakeRefetch: d,
    userRefetch: p,
  }) => {
    const { t: c } = re(),
      { address: g } = de(),
      [i, b] = h.useState("");
    function w(T) {
      return T ? T.toLocaleString() : 0;
    }
    const {
        data: f,
        isLoading: k,
        write: y,
      } = I({
        ...L,
        functionName: "stake",
        value: 0,
        args: [
          N.utils.toWei((s == null ? void 0 : s.toString()) || "0", "ether"),
        ],
        account: g,
      }),
      { isLoading: x } = R({
        hash: f == null ? void 0 : f.hash,
        onSuccess() {
          u.success(c("stake.messages.stakeSuccess")),
            l(c("stake.messages.stakeSuccess")),
            o(!1),
            t(0),
            d(),
            p();
        },
        onError() {
          o(!1),
            u.error(c("stake.messages.stakeError")),
            l(c("stake.messages.stakeError"));
        },
      });
    return (
      h.useEffect(() => {
        setTimeout(() => {
          b("");
        }, 5e3);
      }, [i]),
      n.jsxs(Pe, {
        open: a,
        setOpen: o,
        disablePopup: e || x || k,
        children: [
          n.jsx(_e, {
            children: c(
              x ? "staking" : "Approve and Stake"
            ),
          }),
          n.jsx(Ie, {
            center: !0,
            children: x
              ? c("stake.modal.wait")
              : n.jsxs(Ce, {
                  i18nKey: "stake.modal.secondTransText",
                  values: { 0: w(Number(s)) },
                  children: [
                    "text",
                    n.jsx("span", {
                      style: { fontWeight: "bold", color: "#387636" },
                      children: "Token Amount",
                    }),
                  ],
                }),
          }),
          x
            ? n.jsx(Z, { style: { marginTop: "25px" } })
            : n.jsx(G, {
                children: n.jsx(D, {
                  disabled: k,
                  onClick: () => {
                    b(c("Check Wallet")), y == null || y();
                  },
                  children: c("Confirm"),
                }),
              }),
          i && n.jsx(X, { style: { marginTop: "25px" }, children: i }),
        ],
      })
    );
  },
  qt = ({ stakeRefetch: a, userRefetch: o }) => {
    const { t: e } = re(),
      { userInfo: s, coinStakeInfo: t, setUserInfo: l } = et(),
      { open: d } = tt(),
      { chain: p } = nt(),
      c = at(),
      { switchNetwork: g } = st(),
      { address: i, isConnected: b } = de(),
      [w, f] = h.useState(""),
      [k, y] = h.useState(""),
      [x, T] = h.useState(),
      [S, E] = h.useState(!0),
      [Le, Re] = h.useState(0),
      [Ne, $e] = h.useState(!1),
      [z, le] = h.useState(0),
      [pe, xe] = h.useState(0),
      [Ae, me] = h.useState(!1),
      [Fe, ue] = h.useState(!1),
      He = (v) => it.scrollTo(v, { smooth: !0, duration: 500, offset: -120 }),
      Ue = (v) => {
        c("/nft"),
          setTimeout(() => {
            He(v);
          }, [500]);
      },
      Ve = rt({
        showProgress: !0,
        progressText: e("driver.numbering"),
        nextBtnText: e("driver.next"),
        prevBtnText: e("driver.prev"),
        doneBtnText: e("driver.done"),
        steps: [
          {
            element: "#wallet-box",
            popover: {
              title: e("stake.informationBox.header1"),
              description: e("stake.informationBox.desc1"),
              side: "bottom",
              align: "start",
            },
          },
          {
            element: "#stake-box",
            popover: {
              title: e("stake.informationBox.header2"),
              description: e("stake.informationBox.desc2"),
              side: "left",
              align: "start",
            },
          },
          {
            element: "#stake-input",
            popover: {
              title: e("stake.informationBox.header3"),
              description: e("stake.informationBox.desc3"),
              side: "top",
              align: "start",
            },
          },
          {
            element: "#stake-button",
            popover: {
              title: e("stake.informationBox.header4"),
              description: e("stake.informationBox.desc4"),
              side: "left",
              align: "start",
            },
          },
          {
            element: "#unstake-button",
            popover: {
              title: e("stake.informationBox.header5"),
              description: e("stake.informationBox.desc5"),
              side: "bottom",
              align: "center",
            },
          },
          {
            element: "#claim-box",
            popover: {
              title: e("stake.informationBox.header6"),
              description: e("stake.informationBox.desc6"),
              side: "top",
              align: "center",
            },
          },
          {
            element: "#claim-input",
            popover: {
              title: e("stake.informationBox.header7"),
              description: e("stake.informationBox.desc7"),
              side: "right",
              align: "start",
            },
          },
          {
            element: "#claim-refresh",
            popover: {
              title: e("stake.informationBox.header8"),
              description: e("stake.informationBox.desc8"),
              side: "right",
              align: "start",
            },
          },
          {
            element: "#claim-button",
            popover: {
              title: e("stake.informationBox.header9"),
              description: e("stake.informationBox.desc9"),
              side: "bottom",
              align: "center",
            },
          },
          {
            popover: {
              title: e("stake.informationBox.finalHeader"),
              description: e("stake.informationBox.finalDesc"),
            },
          },
        ],
      }),
      { refetch: Ke } = he({
        ...L,
        functionName: "getStakeInfo",
        args: [i],
        enabled: !1,
        onSuccess(v) {
          Re(s.rewards),
            l((P) => ({
              ...P,
              rewards: Number(N.utils.fromWei(v[1].toString(), "ether")),
            })),
            u.success(e("stake.messages.refreshed"));
        },
      }),
      Ze = () => {
        Ke(),
          E(!1),
          setTimeout(() => {
            E(!0);
          }, 2e4);
      },
      {
        data: J,
        isLoading: B,
        writeAsync: $,
      } = I({
        ...ge,
        functionName: "approve",
        args: [
          H["coin-stake-address"],
          N.utils.toWei((x == null ? void 0 : x.toString()) || "0", "ether"),
        ],
        account: i,
      }),
      { isLoading: A } = R({
        hash: J == null ? void 0 : J.hash,
        onSuccess() {
          u.success(e("stake.messages.approveSuccess")),
            f(e("stake.messages.approveSuccess")),
            ue(!0);
        },
        onError() {
          u.error(e("stake.messages.approveError")),
            f(e("stake.messages.approveError"));
        },
      }),
      { data: Ge, refetch: Xe } = he({
        ...ge,
        functionName: "allowance",
        args: [i, H["coin-stake-address"]],
        account: i,
        enabled: !1,
      }),
      {
        data: Q,
        isLoading: W,
        write: Y,
      } = I({
        ...L,
        functionName: "withdraw",
        args: [
          N.utils.toWei((x == null ? void 0 : x.toString()) || "0", "ether"),
        ],
        account: i,
      }),
      { isLoading: F } = R({
        hash: Q == null ? void 0 : Q.hash,
        onSuccess() {
          u.success(e("stake.messages.withdrawSuccess")),
            f(e("stake.messages.withdrawSuccess")),
            T(0),
            o();
        },
        onError() {
          u.error(e("stake.messages.withdrawError")),
            f(e("stake.messages.withdrawError"));
        },
      }),
      {
        data: ee,
        isLoading: C,
        write: te,
      } = I({ ...L, functionName: "claimRewards", account: i }),
      { isLoading: j } = R({
        hash: ee == null ? void 0 : ee.hash,
        onSuccess() {
          u.success(e("claimSucess")),
            y(e("claimSucess")),
            a(),
            o();
        },
        onError() {
          u.error(e("stake.messages.claimError")),
            y(e("stake.messages.claimError"));
        },
      }),
      qe = async () => {
        if (!x) return u.error(e("stake.messages.validValue"));
        if (x < t.minStakeAmount)
          return u.error(
            e("stake.messages.minStakeError", { 0: t.minStakeAmount })
          );
        if (x > s.KIDSBalance) return u.error(e("stake.messages.notEnough"));
        (await (await Xe()).data) > 0
          ? me(!0)
          : (u.success(e("Check Wallet"), { icon: "🪙" }),
            await ($ == null ? void 0 : $()));
      },
      Je = () => {
        if (!x) return u.error(e("stake.messages.validValue"));
        if (x < t.minStakeAmount)
          return u.error(
            e("stake.messages.minWithdrawError", { 0: t.minStakeAmount })
          );
        if (s.tokenStaked + z <= 0)
          return u.error(e("No Token To Witdhdraw"));
        if (x > t.tokenStaked + z)
          return u.error(e("stake.messages.insufficientWithdraw"));
        u.success(e("Check Wallet"), { icon: "🪙" }),
          Y == null || Y();
      },
      Qe = () => {
        if (s.rewards <= 0) return u.error(e("noRewards"));
        if (s.rewards > t.rewardTokenBalance)
          return u.error(e("No claim"));
        u.success(e("Check Wallet"), { icon: "🪙" }),
          te == null || te();
      };
    h.useEffect(() => {
      setTimeout(() => {
        y(""), f("");
      }, 5e3);
    }, [k, w]);
    function Ye(v) {
      return v ? v.toLocaleString() : 0;
    }
    return (
      h.useEffect(() => {
        if (!s.lockedCoins && s.lockedCoins[0][0] <= 0) return;
        let v = 0,
          P = 0,
          fe = 0;
        for (let O = 0; O < s.lockedCoins.length; O++)
          Date.now() > s.lockedCoins[O][1]
            ? (v += s.lockedCoins[O][0])
            : ((P += s.lockedCoins[O][0]), fe++);
        $e(fe > 0), xe(P), le(v);
      }, [s.lockedCoins, z]),
      n.jsxs(xt, {
        id: "stake-coin",
        children: [
          n.jsx($t, {
            open: Ae,
            setOpen: me,
            disablePopup: !1,
            allowanceData: Ge,
            stakeRefetch: a,
            userRefetch: o,
            setFeedbackStake: f,
            setStakeAmount: T,
            stakeAmount: x,
            writeApprove: $,
          }),
          n.jsx(At, {
            open: Fe,
            setOpen: ue,
            disablePopup: !1,
            stakeRefetch: a,
            userRefetch: o,
            setFeedbackStake: f,
            setStakeAmount: T,
            stakeAmount: x,
          }),
          n.jsx(be, {}),
          b &&
            (p == null ? void 0 : p.id) !== H.chainId &&
            n.jsx(we, {
              children: n.jsx(ke, {
                onClick: () => (g == null ? void 0 : g(H.chainId)),
                children: e("Switch Network"),
              }),
            }),
          !b &&
            n.jsx(we, {
              children: n.jsx(ke, {
                onClick: () => d(),
                children: e("Connect Wallet"),
              }),
            }),
          n.jsx(lt, { index: "5", src: "/images/coinStake/top.svg" }),
          n.jsx(pt, { index: "5", src: "/images/footer/bottom.svg" }),
          n.jsxs(mt, {
            children: [
              b &&
                n.jsxs(Tt, {
                  children: [
                    n.jsx(dt, { onClick: () => Ve.drive() }),
                    n.jsxs(jt, {
                      children: [
                        n.jsxs(Te, {
                          children: [
                            n.jsx(ve, { children: e("Connected Wallet") }),
                            n.jsx(ye, { bold: !0, children: ot(i) }),
                          ],
                        }),
                        n.jsxs(Te, {
                          children: [
                            n.jsx(ve, { children: e("Owned Kids") }),
                            n.jsx(ye, {
                              bold: !0,
                              children: n.jsx(M, {
                                from: 0,
                                to: s.KIDSBalance,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
              
                  ],
                }),
              n.jsxs(ut, {
                style: { marginTop: "25px" },
                children: [
                  n.jsxs(ne, {
                    id: "wallet-box",
                    children: [
                      n.jsxs(U, {
                        children: [
                          n.jsx(V, { children: e("walletInfo") }),
                          n.jsx(K, { children: e("stake InFO") }),
                        ],
                      }),
                      n.jsxs(ae, {
                        style: { marginTop: "25px" },
                        children: [
                          n.jsxs(se, {
                            children: [
                              e("stake.currentStaked"),
                              " ",
                              n.jsx(M, {
                                style: { color: "#387636", fontWeight: "bold" },
                                from: 0,
                                to: i ? s.tokenStaked + z : 0,
                              }),
                            ],
                          }),
                          n.jsx(je, {}),
                          n.jsxs(se, {
                            children: [
                              e("stake.lockedShow"),
                              " ",
                              n.jsx(M, {
                                style: { color: "#387636", fontWeight: "bold" },
                                from: 0,
                                to: i ? pe : 0,
                              }),
                            ],
                          }),
                          n.jsx(je, {}),
                          n.jsxs(se, {
                            children: [
                              e("stake.lifetimeRewards"),
                              " ",
                              n.jsx(M, {
                                style: { color: "#387636", fontWeight: "bold" },
                                from: 0,
                                to: i ? s.totalRewards : 0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs(ne, {
                    id: "stake-box",
                    children: [
                      n.jsxs(U, {
                        children: [
                          n.jsx(V, { children: e("Withdraw") }),
                          n.jsx(K, { children: e("stakeWithdraw") }),
                          t.paused &&
                            n.jsx(kt, {
                              bold: !0,
                              children: "Staking is currently paused",
                            }),
                        ],
                      }),
                      n.jsxs(ae, {
                        children: [
                          n.jsxs(gt, {
                            id: "stake-input",
                            children: [
                              n.jsx(wt, {
                                disabled: B || W || C || j || A || F,
                                type: "number",
                                min: t.minStakeAmount,
                                step: "1000",
                                placeholder: "CHMPZ",
                                value: x,
                                onChange: (v) => T(v.target.value),
                              }),
                              n.jsx(St, {
                                disabled: B || W || C || j || A || F,
                                onClick: () => T(Math.floor(s.KIDSBalance)),
                                children: "MAX",
                              }),
                            ],
                          }),
                          A || F
                            ? n.jsx(Z, { style: { marginTop: "25px" } })
                            : n.jsxs(G, {
                                children: [
                                  n.jsx(D, {
                                    id: "stake-button",
                                    disabled: t.paused || B || W || C || j,
                                    onClick: () => qe(),
                                    children: e("Stake Now"),
                                  }),
                                  n.jsx(D, {
                                    id: "unstake-button",
                                    disabled: B || W || C || j,
                                    onClick: () => Je(),
                                    children: e("Withdraw token"),
                                  }),
                                ],
                              }),
                          w &&
                            n.jsx(Se, { children: n.jsx(X, { children: w }) }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs(ne, {
                    id: "claim-box",
                    children: [
                      n.jsxs(U, {
                        children: [
                          n.jsx(V, { children: e("Claim Token") }),
                          n.jsx(K, { children: e("Claim Token") }),
                        ],
                      }),
                      n.jsxs(ae, {
                        children: [
                          n.jsxs(bt, {
                            style: { marginTop: "25px" },
                            id: "claim-input",
                            children: [
                              n.jsxs(vt, {
                                children: [
                                  e("Unclaim Token"),
                                  " ",
                                  n.jsx(M, {
                                    style: {
                                      color: "#387636",
                                      fontWeight: "bold",
                                    },
                                    from: i ? Le : 0,
                                    to: i ? s.rewards : 0,
                                    fixed: 2,
                                  }),
                                ],
                              }),
                              n.jsx(yt, {
                                id: "claim-refresh",
                                disabled:
                                  !S || C || j || s.tokenStaked + z <= 0,
                                title: e("stake.refresh"),
                                onClick: () => Ze(),
                                children: n.jsx(ct, {}),
                              }),
                            ],
                          }),
                          j
                            ? n.jsx(Z, { style: { marginTop: "25px" } })
                            : n.jsx(G, {
                                children: n.jsx(D, {
                                  id: "claim-button",
                                  disabled: B || W || C || A || F || j,
                                  onClick: () => Qe(),
                                  children: e("Claim Token"),
                                }),
                              }),
                          k &&
                            n.jsx(Se, { children: n.jsx(X, { children: k }) }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Ne &&
                n.jsx(ft, {
                  style: { marginTop: "25px" },
                  children: n.jsxs(ht, {
                    children: [
                      n.jsxs(U, {
                        children: [
                          n.jsx(V, { children: e("Loking End") }),
                          n.jsx(K, { children: e("You need to wait ") }),
                        ],
                      }),
                      n.jsx(Pt, {
                        style: { marginTop: "20px" },
                        children: s.lockedCoins.map((v, P) => {
                          if (Date.now() <= v[1])
                            return n.jsxs(
                              Ct,
                              {
                                children: [
                                  n.jsx(Dt, { children: `${Ye(v[0])} Kids` }),
                                  n.jsx(ce, {
                                    date: v[1],
                                    intervalDelay: 0,
                                    precision: 3,
                                    onComplete: () => {
                                      le(z + v[0]), xe(pe - v[0]);
                                    },
                                  }),
                                ],
                              },
                              P
                            );
                        }),
                      }),
                    ],
                  }),
                }),
            ],
          }),
          n.jsx(be, {}),
        ],
      })
    );
  };
export { qt as default };
