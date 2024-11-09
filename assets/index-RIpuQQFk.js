import{s as t,L as w,a as h,c as u,j as n,bx as b,bv as j}from"./index-IT1gKaF9.js";import{S as l}from"./mainStyles-R3YPfcg-.js";const z=t.div`
  background: linear-gradient(
      180deg,
      rgba(5, 86, 48, 1) 25%,
      rgba(5, 86, 48, 0.9) 50%,
      rgba(5, 86, 48, 1) 75%
    ),
    url("/images/backgrounds/bg2.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`,k=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 24px 24px;
`,v=t.h1`
  font-family: "Bebas Neue", cursive;
  font-size: 56px;
  color: #fcefde;
  text-align: center;

  @media screen and (max-width: 1300px) {
    font-size: 52px;
  }

  @media screen and (max-width: 768px) {
    font-size: 46px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 36px;
    text-align: center;
  }
`,y=t.p`
  font-size: 20px;
  color: #e8e8e8;
  font-weight: ${({bold:e})=>e?"bold":"none"};
  text-align: ${({center:e})=>e?"center":"start"};

  @media screen and (max-width: 1300px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`,r=t.p`
  font-size: 18px;
  color: #e8e8e8;
  font-weight: ${({bold:e})=>e?"bold":"none"};
  text-align: ${({center:e})=>e?"center":"start"};

  @media screen and (max-width: 1300px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`,p=t.div`
  display: flex;
  flex-direction: column;
`,T=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
`,$=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`,W=t.button`
  padding: 4px 8%;
  color: #81451e;
  font-weight: bold;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  background: transparent;
  border: 10px solid;
  border-image: url("/images/nav/navButton.svg") 12 fill;
  width: fit-content;

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
`,B=t(w)`
  font-size: 18px;
  color: #e8e8e8;
  font-weight: ${({bold:e})=>e?"bold":"none"};
  text-align: ${({center:e})=>e?"center":"start"};

  @media screen and (max-width: 1300px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`,A=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    justify-content: start;
    align-items: start;
  }
`,S=t.table`
  display: flex;
  flex-direction: column;
  border: 10px solid;
  border-image: url("/images/nav/navButton.svg") 12 fill;
  width: clamp(400px, 100%, 1000px);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`,m=t.tr`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: ${({noBorder:e})=>e?"none":"1px solid #707070"};
  overflow-wrap: break-word;
  width: 100%;
`,d=t.th`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  color: #81451e;
  text-align: start;
  padding: 2.5px 10px;
  border-right: ${({noBorder:e})=>e?"none":"1px solid #707070"};

  @media screen and (max-width: 1300px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`,s=t.td`
  flex: 1;
  font-size: 16px;
  padding: 10px;
  word-break: ${({doBreak:e})=>e?"break-all":"normal"};
  border-right: ${({noBorder:e})=>e?"none":"1px solid #707070"};

  @media screen and (max-width: 1300px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 11px;
    padding: 5px;
  }
`;t.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;t.p`
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  word-break: ${({doBreak:e})=>e?"break-all":"normal"};

  @media screen and (max-width: 1300px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 11px;
    padding: 5px;
  }
`;const C=()=>{const{t:e}=h(),{coinStakeInfo:i}=u(),f=60*60*24*365;function x(a){return a?a.toLocaleString():0}const g=a=>(f*i.numerator[a]/i.denominator[a]/i.timeUnit*i.ratioAmount[a]+i.ratioAmount[a]-i.ratioAmount[a])/i.ratioAmount[a]*100;return n.jsx(A,{children:n.jsxs(S,{children:[n.jsx("thead",{children:n.jsxs(m,{children:[n.jsx(d,{children:e("table.coin.header1")}),n.jsx(d,{children:e("table.coin.header2")}),n.jsx(d,{noBorder:!0,children:e("table.coin.header3")})]})}),n.jsx("tbody",{children:i.ratioAmount.map((a,o)=>{const c=g(o);return n.jsxs(m,{noBorder:i.ratioAmount.length<=o+1,children:[n.jsx(s,{children:x(a)}),n.jsx(s,{children:i.ratioAmount[o+1]?x(i.ratioAmount[o+1]-1):"∞"}),n.jsx(s,{noBorder:!0,children:`${c.toFixed(0)}%`})]},o)})})]})})},P=()=>{const{t:e}=h(),i=b();return n.jsxs(z,{id:"howCoin",children:[n.jsx(l,{}),n.jsxs(k,{children:[n.jsx(v,{children:e("howItWorks.coin.header")}),n.jsxs(p,{style:{marginTop:"50px"},children:[n.jsx(y,{center:!0,bold:!0,children:e("howItWorks.coin.smallHeader1")}),n.jsx(r,{center:!0,children:e("howItWorks.coin.text1")})]}),n.jsx(p,{style:{marginTop:"25px"},children:n.jsx(r,{center:!0,children:n.jsxs(j,{i18nKey:"howItWorks.coin.text2",children:["Link",n.jsx(B,{to:"/coin/how",children:"link"})]})})}),n.jsxs($,{children:[n.jsx(C,{}),n.jsxs(T,{children:[n.jsx(r,{center:!0,children:e("howItWorks.coin.calcText")}),n.jsx(W,{onClick:()=>i("/coin/calculator"),children:e("howItWorks.coin.calcButton")})]})]})]}),n.jsx(l,{})]})};export{P as default};
