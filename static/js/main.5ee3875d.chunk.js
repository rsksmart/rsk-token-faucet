(this["webpackJsonpreact-app-rif-template"]=this["webpackJsonpreact-app-rif-template"]||[]).push([[0],{163:function(e,t){},164:function(e,t){},187:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(1),r=n.n(a),s=n(61),i=n.n(s),o=n(4),d=n.n(o),l=n(84),u=n(25),j=n(104),b=n.n(j),f=n(81),O=n(30),p=n(234),x=n(230),h=n(232),m=n(231),g=n(233),v=n(223),w=function(e){var t=e.address,n=e.small,a=e.center,r=e.color;return Object(c.jsxs)(h.a,{align:a?"center":"left",color:r,children:["Address: ",n?"".concat(t.slice(0,8),"...").concat(t.slice(-6)):t," ",Object(c.jsx)(g.a,{href:"https://explorer.testnet.rsk.co/address/".concat(t),target:"_blank",children:Object(c.jsx)(v.a,{})})]})},k=function(e,t){var n={div:e.div(O.a.from("10").pow(t)),mod:e.mod(O.a.from("10").pow(t))};return n.mod.isZero()?n.div.toString():"".concat(n.div.toString(),".").concat(n.mod.toString().slice(0,4),"...")},S=function(e){var t=e.token,n=e.add,r=e.signer,s=e.faucet,i=new f.b(n.toLowerCase(),["function balanceOf(address) view returns (uint)"],r),o=Object(a.useState)(null),j=Object(u.a)(o,2),b=j[0],O=j[1],g=Object(a.useState)(""),v=Object(u.a)(g,2),S=v[0],y=v[1],C=Object(a.useState)(null),F=Object(u.a)(C,2),B=F[0],L=F[1],I=Object(a.useState)(!0),P=Object(u.a)(I,2),T=P[0],A=P[1];return Object(a.useEffect)((function(){Object(l.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getAddress();case 2:return t=e.sent,e.next=5,i.balanceOf(t);case 5:return n=e.sent,e.next=8,i.balanceOf(s.address);case 8:c=e.sent,O(n),y(t),L(c),B>0&&A(!1);case 13:case"end":return e.stop()}}),e)})))()})),Object(c.jsx)(p.a,{style:{margin:"20px",padding:"20px"},children:Object(c.jsxs)(x.a,{container:!0,children:[Object(c.jsxs)(x.a,{item:!0,xs:3,children:[Object(c.jsxs)(h.a,{children:[Object(c.jsx)("img",{src:"https://raw.githubusercontent.com/rsksmart/rsk-testnet-contract-metadata/master/images/"+t.logo,width:"30px"}),Object(c.jsxs)("span",{style:{marginBottom:"10px"},children:[t.symbol," (",t.name,")"]})]}),Object(c.jsx)(w,{address:n,small:!0,center:!1})]}),Object(c.jsxs)(x.a,{item:!0,xs:6,children:[Object(c.jsxs)(h.a,{align:"center",children:["Your Balance: ",b&&k(b,t.decimals)]}),Object(c.jsxs)(h.a,{align:"center",children:["Faucet Balance: ",B&&k(B,t.decimals)]})]}),Object(c.jsx)(x.a,{item:!0,xs:3,children:Object(c.jsx)(m.a,{size:"small",disabled:T,onClick:function(){return s.dispense(n.toLowerCase(),S)},children:"Get Funds"})})]})})},y=n(133),C=n.n(y),F={31:"https://public-node.testnet.rsk.co"},B=Object.keys(F).map(Number),L=new C.a({rpcUrls:F,supportedChains:B}),I=n(102),P=n(137),T=Object.keys(b.a),A="0x11f2753e9a597473da2f51492f4fefac1c572640";var E=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),i=Object(u.a)(s,2),o=i[0],j=i[1],O=function(){var e=Object(l.a)(d.a.mark((function e(){var t,n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.connect();case 2:t=e.sent,n=t.provider,c=new I.a.providers.Web3Provider(n).getSigner(),a=new f.b(A,["function dispense(address token, address to)"],c),r(c),j(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(P.a,{children:Object(c.jsxs)("div",{style:{padding:"20px"},children:[Object(c.jsx)(h.a,{variant:"h1",align:"center",children:"RSK Token Faucet"}),Object(c.jsx)(h.a,{variant:"h4",color:"white",align:"center",children:"Get testing funds of your favourites tokens"}),Object(c.jsx)(w,{small:!1,address:A,center:!0,color:"white"}),Object(c.jsx)(h.a,{color:"white",align:"center",children:"You can donate tokes to the faucet"}),n&&o&&T.map((function(e){return Object(c.jsx)(S,{token:b.a[e],add:e,signer:n,faucet:o},e)})),Object(c.jsx)(m.a,{onClick:O,children:"Log In"}),n&&n.toString()]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,236)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),G()}},[[187,1,2]]]);
//# sourceMappingURL=main.5ee3875d.chunk.js.map