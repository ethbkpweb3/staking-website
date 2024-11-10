import{s as r,a as P,c as C,r as x,j as t}from"./index-IT1gKaF9.js";import{u as z}from"./useCoinStakeInfo-hC8aMJVk.js";import{C as l}from"./counter-6r21ZzCJ.js";import{m as M}from"./motion-_fLkK2fy.js";import"./web3-FmIaR_iU.js";import"./events-a2vpiPAD.js";import"./index-tTQKUB83.js";const B=r.div`
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
`,D=r.div`
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
`,S=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
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
`,T=r.div`
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
`,E=r.input`
  width: 100%;
  height: 100%;
  background: transparent;
  padding-left: 10px;
  border: none;

  :focus {
    outline: none;
  }
`,U=r.h1`
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
`,H=r.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 25px;
  gap: 25px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`,I=r.button`
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
`,$=r.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`,d=r.p`
  font-size: 18px;
  color: #3e2a2e;
  font-weight: ${({bold:i})=>i?"bold":"none"};
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
`,G=()=>{const{t:i}=P(),{coinStakeInfo:o}=C(),g=60*60*24,w=60*60*24*7,b=60*60*24*30,f=60*60*24*365,[y,R]=x.useState([]),[n,k]=x.useState(),[a,j]=x.useState({oldResultDay:0,resultDay:0,oldResultWeek:0,resultWeek:0,oldResultMonth:0,resultMonth:0,oldResultYear:0,resultYear:0,oldResultAPY:0,resultAPY:0}),v=()=>{for(let e=0;e<o.ratioAmount.length;e++){const m=(f*o.numerator[e]/o.denominator[e]/o.timeUnit*o.ratioAmount[e]+o.ratioAmount[e]-o.ratioAmount[e])/o.ratioAmount[e]*100;R(h=>[...h,m])}},A=()=>{let e=0;for(let s=o.ratioAmount.length;s>0;s--)if(n>=o.ratioAmount[s-1]){e=s-1;break}return e},c=(e,s)=>s*o.numerator[e]/o.denominator[e]/o.timeUnit*n,Y=()=>{const e=A(),s=c(e,g),p=c(e,w),u=c(e,b),m=c(e,f),h=y[e];j(W=>({...W,oldResultDay:a.resultDay,resultDay:!n||n<=0?0:s,oldResultWeek:a.resultWeek,resultWeek:!n||n<=0?0:p,oldResultMonth:a.resultMonth,resultMonth:!n||n<=0?0:u,oldResultYear:a.resultYear,resultYear:!n||n<=0?0:m,oldResultAPY:a.resultAPY,resultAPY:!n||n<=0?0:h}))};return x.useEffect(()=>{o!=null&&o.init&&v()},[o]),t.jsx(B,{children:t.jsx(D,{children:t.jsxs(S,{children:[t.jsx(U,{children:i("calculator.header")}),t.jsx(T,{children:t.jsx(E,{type:"number",min:"1000",step:"1000",placeholder:"$CHMPZ",value:n,onChange:e=>k(e.target.value)})}),t.jsx(H,{children:t.jsx(I,{onClick:()=>Y(),children:i("calculator.calculate")})}),t.jsxs($,{children:[t.jsxs(d,{children:[i("calculator.apy")," ",t.jsx(l,{style:{fontWeight:"bold",color:"#387636"},from:a.oldResultAPY,to:a.resultAPY,fixed:0}),t.jsx("span",{style:{fontWeight:"bold",color:"#387636"},children:"%"})]}),t.jsxs(d,{children:[i("calculator.dayReward")," ",t.jsx(l,{style:{fontWeight:"bold",color:"#387636"},from:a.oldResultDay,to:a.resultDay,fixed:2})]}),t.jsxs(d,{children:[i("calculator.weekReward")," ",t.jsx(l,{style:{fontWeight:"bold",color:"#387636"},from:a.oldResultWeek,to:a.resultWeek,fixed:2})]}),t.jsxs(d,{children:[i("calculator.monthReward")," ",t.jsx(l,{style:{fontWeight:"bold",color:"#387636"},from:a.oldResultMonth,to:a.resultMonth,fixed:2})]}),t.jsxs(d,{children:[i("calculator.yearReward")," ",t.jsx(l,{style:{fontWeight:"bold",color:"#387636"},from:a.oldResultYear,to:a.resultYear,fixed:2})]})]})]})})})},L=()=>(z(),t.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:t.jsx(G,{})}));export{L as default};
