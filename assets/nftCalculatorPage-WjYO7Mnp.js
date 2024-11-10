import{s as i,G as k,a as R,c as T,r as u,j as t}from"./index-IT1gKaF9.js";import{C as g}from"./counter-6r21ZzCJ.js";import{m as B}from"./motion-_fLkK2fy.js";const P=i.div`
  background: linear-gradient(
      180deg,
      rgba(9, 17, 11, 0.95) 10%,
      rgba(5, 86, 48, 0.8) 50%,
      rgba(5, 86, 48, 1) 100%
    ),
    url("/images/backgrounds/bg1.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 125px 0 25px 0;
  }
`,A=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  padding: 24px 24px;
  z-index: 6;
`,E=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
  height: auto;
  border: 10px solid;
  border-image: url("/images/nav/navButton.svg") 12 fill;
  padding: 20px;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;i.div`
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
`;i.input`
  width: 100%;
  height: 100%;
  background: transparent;
  padding-left: 10px;
  border: none;

  :focus {
    outline: none;
  }
`;const D=i.h1`
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
`,G=i.p`
  font-size: 14px;
  color: #3e2a2e;
  text-align: center;

  @media screen and (max-width: 1300px) {
    font-size: 13px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;i.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 25px;
  gap: 25px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;i.button`
  padding: 4px 8%;
  width: 100%;
  color: #fcefde;
  font-weight: bold;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  background: transparent;
  border: 10px solid;
  border-image: url("/images/coinStake/brownButton.svg") 12 fill;
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
    box-shadow: -10px 10px 0px -4px rgba(0, 0, 0, 0.6);
  }
`;const $=i.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`,f=i.p`
  font-size: 18px;
  color: #3e2a2e;
  font-weight: ${({bold:n})=>n?"bold":"none"};
  padding: 5px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1300px) {
    font-size: 17px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`,N=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  margin-top: 25px;
  gap: 20px;

  @media screen and (max-width: 550px) {
    justify-content: space-evenly;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,Y=i.div`
  display: flex;
  flex-direction: column;
`,H=i.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`,j=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 5px;
  background: #81451e;
  color: #fcefde;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  width: 25px;
  height: 25px;

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
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
`,I=i.p`
  font-size: 18px;
  color: #3e2a2e;
  font-weight: ${({bold:n})=>n?"bold":"none"};
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
`,O=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #81451e;
  border-radius: 5px;
  aspect-ratio: 1/1;
  padding: 5px;
  width: 35px;
  height: 35px;
  font-weight: bold;
  color: #3e2a2e;
`;function q(n){return k({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 11h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z"}}]})(n)}function F(n){return k({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 10h-4v-4c0-1.104-.896-2-2-2s-2 .896-2 2l.071 4h-4.071c-1.104 0-2 .896-2 2s.896 2 2 2l4.071-.071-.071 4.071c0 1.104.896 2 2 2s2-.896 2-2v-4.071l4 .071c1.104 0 2-.896 2-2s-.896-2-2-2z"}}]})(n)}const J=()=>{const{t:n}=R();T();const b=60*60*24,y=60*60*24*7,z=60*60*24*30,v=60*60*24*365,x={diamond:.006341958396752917,gold:.004280821917808219,silver:.002378234398782344,bronze:.0009512937595129377},[a,r]=u.useState({diamond:0,gold:0,silver:0,bronze:0}),[c,C]=u.useState({day:0,week:0,month:0,year:0}),[l,W]=u.useState({day:0,week:0,month:0,year:0}),p=o=>{const e=b*x[o]*a[o],s=y*x[o]*a[o],d=z*x[o]*a[o],S=v*x[o]*a[o];return{day:e,week:s,month:d,year:S}},M=()=>{const o=a.diamond>0?p("diamond"):{day:0,week:0,month:0,year:0},e=a.gold>0?p("gold"):{day:0,week:0,month:0,year:0},s=a.silver>0?p("silver"):{day:0,week:0,month:0,year:0},d=a.bronze>0?p("bronze"):{day:0,week:0,month:0,year:0};W(c),C({day:o.day+e.day+s.day+d.day,week:o.week+e.week+s.week+d.week,month:o.month+e.month+s.month+d.month,year:o.year+e.year+s.year+d.year})},m=o=>{switch(o){case"diamond":return r(e=>({...e,diamond:e.diamond+=1}));case"gold":return r(e=>({...e,gold:e.gold+=1}));case"silver":return r(e=>({...e,silver:e.silver+=1}));case"bronze":return r(e=>({...e,bronze:e.bronze+=1}))}},h=o=>{switch(o){case"diamond":return a.diamond>0?r(e=>({...e,diamond:e.diamond-=1})):void 0;case"gold":return a.gold>0?r(e=>({...e,gold:e.gold-=1})):void 0;case"silver":return a.silver>0?r(e=>({...e,silver:e.silver-=1})):void 0;case"bronze":return a.bronze>0?r(e=>({...e,bronze:e.bronze-=1})):void 0}};return u.useEffect(()=>{M()},[a]),t.jsx(P,{children:t.jsx(A,{children:t.jsxs(E,{children:[t.jsx(D,{children:n("calculator.header")}),t.jsx(G,{children:n("calculator.descNft")}),t.jsxs(N,{children:[t.jsx(w,{type:"diamond",amount:Math.ceil(a.diamond),increment:m,decrement:h}),t.jsx(w,{type:"gold",amount:Math.ceil(a.gold),increment:m,decrement:h}),t.jsx(w,{type:"silver",amount:Math.ceil(a.silver),increment:m,decrement:h}),t.jsx(w,{type:"bronze",amount:Math.ceil(a.bronze),increment:m,decrement:h})]}),t.jsxs($,{children:[t.jsxs(f,{children:[n("calculator.dayReward")," ",t.jsx(g,{style:{fontWeight:"bold",color:"#387636"},from:l.day,to:c.day,fixed:2})]}),t.jsxs(f,{children:[n("calculator.weekReward")," ",t.jsx(g,{style:{fontWeight:"bold",color:"#387636"},from:l.week,to:c.week,fixed:2})]}),t.jsxs(f,{children:[n("calculator.monthReward")," ",t.jsx(g,{style:{fontWeight:"bold",color:"#387636"},from:l.month,to:c.month,fixed:2})]}),t.jsxs(f,{children:[n("calculator.yearReward")," ",t.jsx(g,{style:{fontWeight:"bold",color:"#387636"},from:l.year,to:c.year,fixed:2})]})]})]})})})},w=({type:n,amount:b,increment:y,decrement:z})=>{const{t:v}=R();return t.jsxs(Y,{children:[t.jsx(I,{bold:!0,children:v(`types.${n}`)}),t.jsxs(H,{children:[t.jsx(j,{onClick:()=>z(n),children:t.jsx(q,{})}),t.jsx(O,{children:b}),t.jsx(j,{onClick:()=>y(n),children:t.jsx(F,{})})]})]})},U=()=>t.jsx(B.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:t.jsx(J,{})});export{U as default};
