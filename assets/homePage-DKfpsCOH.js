import { s as t, L as o, a as r, j as e } from "./index-IT1gKaF9.js";
import { m as s } from "./motion-_fLkK2fy.js";
const d = t.div`
  display: flex;
  background: linear-gradient(
      180deg,
      rgba(3, 51, 29, 1) 10%,
      rgba(5, 86, 48, 0.9) 50%,
      rgba(5, 86, 48, 1) 90%
    ),
    url("/images/backgrounds/bg1.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  padding: 50px 24px 50px 24px;
  min-height: 100vh;
`,
  x = t.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`,
  c = t.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 25px;
  }
`,
  p = t.img`
  width: 100%;
  max-width: 500px;
  height: auto;
`;
t.div`
  display: flex;
  flex-direction: column;
`;
const l = t.h1`
  font-family: "Bebas Neue", cursive;
  font-size: 38px;
  color: #fcefde;

  @media screen and (max-width: 1300px) {
    font-size: 34px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
    text-align: center;
  }
`,
  m = t.p`
  font-size: 18px;
  color: #fcefde;
  font-weight: 400;
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
`,
  g = t.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  gap: 25px;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
  }
`,
  n = t(o)`
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(252, 239, 222, 0.3);
  border-radius: 10px;
  background: ${({ bg: i }) => `url(${i})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(60%);
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  max-width: 600px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 300px;

  @media screen and (max-width: 768px) {
    height: 220px;
  }

  @media screen and (max-width: 480px) {
    height: 150px;
  }

  &:hover {
    transform: scale(1.05);
    filter: grayscale(0);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 20px;
  }
`,
  a = t.p`
  font-size: 36px;
  color: #fcefde;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 1300px) {
    font-size: 34px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
t.img`
  object-fit: cover;
  max-width: 300px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  margin-top: 25px;
`;
const h = () => {
    const { t: i } = r();
    return e.jsx(d, {
      children: e.jsxs(x, {
        children: [
          e.jsx(p, { alt: "logo", src: "/images/main/logo.webp" }),
          e.jsx(l, { children: i("selector.welcome") }),
          e.jsxs(c, {
            children: [
              e.jsx(m, { children: i("selector.desc") }),
              e.jsxs(g, {
                children: [
                  e.jsx(n, {
                    to: "/staking",
                    bg: "/images/selector/coin-bg.webp",
                    children: e.jsx(a, { children: i("Stake Token now") }),
                  }),
               
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  u = () =>
    e.jsx(s.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      children: e.jsx(h, {}),
    });
export { u as default };
