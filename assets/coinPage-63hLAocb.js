import {
  c as j,
  e as v,
  h as N,
  k as B,
  l as w,
  r as c,
  s as n,
  a as u,
  j as e,
  m as S,
  _ as y,
  n as I,
  o as _,
  t as E,
  v as b,
} from "./index-IT1gKaF9.js";
import { W as x } from "./web3-FmIaR_iU.js";
import { u as W } from "./useCoinStakeInfo-hC8aMJVk.js";
import { m as z } from "./motion-_fLkK2fy.js";
import { L as H } from "./mainStyles-R3YPfcg-.js";
import { C as l } from "./counter-6r21ZzCJ.js";
import "./events-a2vpiPAD.js";
import "./index-tTQKUB83.js";
const T = () => {
    const { setUserInfo: t, userInfo: i } = j(),
      { address: o, isConnected: s } = v(),
      { loading: d, refetch: r } = N({
        contracts: [
          { ...B, functionName: "balanceOf", args: [o] },
          { ...w, functionName: "getStakeInfo", args: [o] },
          { ...w, functionName: "getLockedCoins", args: [o] },
        ],
        enabled: !1,
        onSuccess(a) {
          t((k) => ({
            ...k,
            KIDSBalance: Number(
              x.utils.fromWei(a[0].result.toString(), "ether")
            ),
            tokenStaked: Number(
              x.utils.fromWei(a[1].result[0].toString(), "ether")
            ),
            rewards: Number(
              x.utils.fromWei(a[1].result[1].toString(), "ether")
            ),
            totalRewards: Number(
              x.utils.fromWei(a[1].result[2].toString(), "ether")
            ),
            lockedCoins: a[2].result.reduce((g, f) => {
              if (Number(f.lockedUntilTime) !== 0) {
                const C = [
                  Number(x.utils.fromWei(f.amountDeposited, "ether")),
                  Number(f.lockedUntilTime) * 1e3,
                ];
                g.push(C);
              }
              return g;
            }, []),
            address: o,
            init: !0,
          }));
        },
      });
    return (
      c.useEffect(() => {
        i.address !== o && s && r();
      }, [s]),
      { loading: d, refetch: r }
    );
  },
  R = n.div`
  position: relative;
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    min-height: 600px;
    padding: 125px 0 25px 0;
  }

  @media screen and (max-width: 480px) {
    min-height: 500px;
  }
`,
  F = n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 24px 24px;
  z-index: 6;
`,
  L = n.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`,
  P = n.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    filter: brightness(80%);
  }
`,
  D = n.div`
  display: grid;
  grid-auto-columns: 2fr 1fr;
  align-items: center;
  grid-template-areas: "col2 col1";
  gap: 25px;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col2 col2" "col1 col1";
    gap: 50px;
  }
`,
  $ = n.div`
  padding: 0 15px;
  grid-area: col1;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`,
  U = n.div`
  padding: 0 15px;
  grid-area: col2;
`,
  A = n.h1`
  font-family: "Bebas Neue", cursive;
  font-size: 72px;
  color: #fcefde;

  @media screen and (max-width: 1300px) {
    font-size: 64px;
  }

  @media screen and (max-width: 768px) {
    font-size: 54px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 44px;
    text-align: center;
  }
`;
n.h1`
  font-family: "Bebas Neue", cursive;
  font-size: 64px;
  color: #fcefde;

  @media screen and (max-width: 1300px) {
    font-size: 54px;
  }

  @media screen and (max-width: 768px) {
    font-size: 42px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
    text-align: center;
  }
`;
const O = n.p`
  font-size: 18px;
  color: #e8e8e8;
  font-weight: ${({ bold: t }) => (t ? "bold" : "none")};
  max-width: 80%;

  @media screen and (max-width: 1300px) {
    font-size: 17px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    max-width: 100%;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    text-align: center;
  }
`,
  V = n.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-top: 25px;
  width: 100%;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 340px) {
    flex-direction: column;
    gap: 10px;
  }
`,
  G = n.button`
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
  Y = n.button`
  padding: 4px 25px;
  color: #fcefde;
  font-weight: bold;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  background: transparent;
  border: 10px solid;
  border-image: url("/images/hero/onlyBorder.svg") 12 fill;

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
  q = n(z.img)`
  z-index: 1;
  width: 100%;
  height: auto;
  max-width: 300px;

  @media screen and (max-width: 960px) {
    max-width: 250px;
  }

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }

  @media screen and (max-width: 480px) {
    max-width: 150px;
  }
`,
  J = () => {
    const { t } = u(),
      i = (s) => S.scrollTo(s, { smooth: !0, duration: 500, offset: -120 }),
      o = (s) => {
        const d = window.open(s, "_blank", "noopener,noreferrer");
        d && (d.opener = null);
      };
    return e.jsxs(R, {
      children: [
  

      ],
    });
  },
  K = n.div`
  background: #055630;
`;
n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 24px 24px;
`;
const M = n.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`,
  m = n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;

  @media screen and (min-width: 768px) {
    border-right: ${({ last: t }) => (t ? "0" : "2px solid #FCEFDE")};
  }

  @media screen and (max-width: 768px) {
    border-bottom: ${({ last: t }) => (t ? "0" : "2px solid #FCEFDE")};
  }
`,
  p = n.h1`
  font-family: "Bebas Neue", cursive;
  font-size: 36px;
  color: #fcefde;
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
  h = n.p`
  font-size: 20px;
  color: #e8e8e8;
  font-weight: ${({ bold: t }) => (t ? "bold" : "none")};
  text-align: center;

  @media screen and (max-width: 1300px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    text-align: center;
  }
`,
  Q = () => {
    const { t } = u(),
      { coinStakeInfo: i } = j();
    return e.jsx(K, {
      children: e.jsxs(M, {
        children: [
          e.jsxs(m, {
            children: [
              e.jsx(h, { children: t("stats.stat1-coin") }),
              e.jsx(p, {
                children: e.jsx(l, {
                  from: 0,
                  to: i.totalCoinStaked,
                  style: { fontFamily: "Bebas Neue, cursive" },
                }),
              }),
            ],
          }),
          e.jsxs(m, {
            children: [
              e.jsx(h, { children: t("stats.stat2") }),
              e.jsx(p, {
                children: e.jsx(l, {
                  from: 0,
                  to: i.totalRewardPaid,
                  style: { fontFamily: "Bebas Neue, cursive" },
                }),
              }),
            ],
          }),
          e.jsxs(m, {
            children: [
              e.jsx(h, { children: t("stats.stat3") }),
              e.jsx(p, {
                children: e.jsx(l, {
                  from: 0,
                  to: i.rewardTokenBalance,
                  style: { fontFamily: "Bebas Neue, cursive" },
                }),
              }),
            ],
          }),
          e.jsxs(m, {
            last: !0,
            children: [
              e.jsx(h, { children: t("COUNT") }),
              e.jsx(p, {
                children: e.jsx(l, {
                  from: 0,
                  to: i.totalStakerCount,
                  style: { fontFamily: "Bebas Neue, cursive" },
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  X = c.lazy(() =>
    y(
      () => import("./index-3oI8pJeP.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    )
  ),
  Z = c.lazy(() =>
    y(() => import("./index-RIpuQQFk.js"), __vite__mapDeps([11, 1, 2, 9]))
  ),
  de = () => {
    const { t } = u(),
      { loading: i, refetch: o } = T(),
      { loading: s, refetch: d } = W(),
      { chain: r } = I(),
      { isConnected: a } = v();
    return (
      c.useEffect(() => {
        (r == null ? void 0 : r.id) !== _.chainId &&
          a &&
          setTimeout(() => {
            E(t("stake.messages.switchNetwork"), { icon: "🛜" });
          }, 1e3);
      }, [r, a]),
      e.jsxs(z.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        children: [
          e.jsx(J, {}),
          e.jsx(Q, {}),
          e.jsx(c.Suspense, {
            fallback: e.jsx(b, {}),
            children: e.jsx(X, { stakeRefetch: d, userRefetch: o }),
          }),
          e.jsx(c.Suspense, { fallback: e.jsx(b, {}), children: e.jsx(Z, {}) }),
        ],
      })
    );
  };
export { de as default };
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/index-3oI8pJeP.js",
      "assets/index-IT1gKaF9.js",
      "assets/index-rAlsS7Di.css",
      "assets/web3-FmIaR_iU.js",
      "assets/events-a2vpiPAD.js",
      "assets/index-tTQKUB83.js",
      "assets/index-D-PQ9ydw.js",
      "assets/motion-_fLkK2fy.js",
      "assets/index-ZoVPmJga.css",
      "assets/mainStyles-R3YPfcg-.js",
      "assets/counter-6r21ZzCJ.js",
      "assets/index-RIpuQQFk.js",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
