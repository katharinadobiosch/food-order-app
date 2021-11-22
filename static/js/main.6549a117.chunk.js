(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",bump:"HeaderCartButton_bump__3atD4"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo",logo:"Header_logo__3Cuqg","main-image":"Header_main-image__2Q3So"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={container:"MealItemForm_container__35Y4p",form:"MealItemForm_form__32qVd",button:"MealItemForm_button__15xIi"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,,,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),i=(n(29),n(4)),r=n(1),s=n.n(r),o=(n.p,n.p,n.p+"static/media/03.d36b0a06.jpg"),l=n(20),m=n(19),u=n(0),d=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(m.a,{icon:l.a})})},j=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),b=n(10),h=n.n(b),O=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(j).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(h.a.button," ").concat(a?h.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),100);return function(){clearTimeout(e)}}}),[s]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("button",{onClick:e.onClick,className:l,children:[Object(u.jsx)("span",{className:h.a.icon,children:Object(u.jsx)(d,{})}),Object(u.jsx)("span",{className:h.a.badge,children:o})]})})},p=n(12),x=n.n(p),_=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{className:x.a.header,children:[Object(u.jsx)("div",{className:x.a.logo,children:"happy cactus"}),Object(u.jsx)("div",{children:Object(u.jsx)(O,{onClick:e.onShowCart})})]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:x.a["main-image"],src:o,alt:"Healthy vegan food"})})]})},f=n(21),g=n.n(f),v=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{className:g.a.summary,children:[Object(u.jsx)("h2",{children:"Enjoy healthy food"}),Object(u.jsx)("p",{children:"Chocolate bar souffl\xe9 gingerbread jelly-o gummi bears jelly."})]})})},C=n(22),N=n.n(C),k=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:N.a.card,children:e.children})})},I=n(13),y=n.n(I),F=n(3),A=n(23),w=n.n(A),M=s.a.forwardRef((function(e,t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:w.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(F.a)({ref:t},e.input))]})})})),S=n(14),E=n.n(S),H=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(u.jsx)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault(),console.log("button was clikcked");var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:Object(u.jsxs)("div",{className:E.a.container,children:[Object(u.jsx)(M,{ref:s,input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{className:E.a.button,children:"+"}),!a&&Object(u.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})})},P=function(e){var t=Object(r.useContext)(j),n="".concat(e.price.toFixed(2),"\u20ac");return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{className:y.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:y.a.description,children:e.description}),Object(u.jsx)("div",{className:y.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(H,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})})},B=n(24),R=n.n(B),D=[{id:"m1",name:"VEagle  Burger",description:"Hafer-Gr\xfcnkernPatty im weichen Weizenbr\xf6tchen getoppt mit EggplantBacon und einer Handvoll knackig-cremigem Coleslaw",price:13.3},{id:"m2",name:"Jackfruit Paprika Gulasch",description:"Ein kr\xe4ftiges Eintopf-Gericht aus Jackfruit, Sauerkraut, Zwiebeln und Paprika, serviert mit einem Klecks Cashew-Schmand, Shcnittlauch und rustikalem Kartoffelstampf",price:14.6},{id:"m3",name:"Eine Sch\xfcssel Herbst",description:"Cremiges Wirsing-Austernpilzragout mit marinierten K\xfcrbisspa\xf6ten, R\xf6stkartoffeln, knackigen Haseln\xfcssen und herbstlichem Preiselbeer-Salat",price:14.3},{id:"m4",name:"Five Bean Chili",description:"Reichlich H\xfclsenfr\xfcchte und eine ausgefeilte W\xfcrzmischung mchen es einzigartig, serviert mit Weizentortilla, spicy Guacamole, Cashew-Schmand und rauchiger Chipotle Sauce",price:13.8}],z=function(){var e=D.map((function(e){return Object(u.jsx)(P,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("section",{className:R.a.meals,children:Object(u.jsx)(k,{children:Object(u.jsx)("ul",{children:e})})})})},T=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsx)(z,{})]})},J=n(15),V=n.n(J),W=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:V.a.backdrop,onClick:e.onClose})})},G=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:V.a.modal,children:Object(u.jsx)("div",{className:V.a.content,children:e.children})})})},K=document.getElementById("overlays"),U=function(e){return Object(u.jsxs)(u.Fragment,{children:[c.a.createPortal(Object(u.jsx)(W,{onClose:e.onClose}),K),c.a.createPortal(Object(u.jsx)(G,{children:e.children}),K)]})},Q=n(5),q=n.n(Q),L=function(e){var t="".concat(e.price.toFixed(2),"\u20ac");return Object(u.jsxs)("li",{className:q.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsxs)("div",{className:q.a.summary,children:[Object(u.jsx)("span",{className:q.a.price,children:t}),Object(u.jsxs)("span",{className:q.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:q.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},X=n(6),Y=n.n(X),Z=function(e){var t=Object(r.useContext)(j),n="".concat(t.totalAmount.toFixed(2),"\u20ac"),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(F.a)(Object(F.a)({},e),{},{amount:1}))},s=Object(u.jsx)("ul",{className:Y.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(L,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(u.jsxs)(U,{onClose:e.onClose,children:[s,Object(u.jsxs)("div",{className:Y.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:Y.a.actions,children:[Object(u.jsx)("button",{className:Y.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(u.jsx)("button",{className:Y.a.button,children:"Order"})]})]})},$=n(18),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(F.a)(Object(F.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object($.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(F.a)(Object(F.a)({},l),{},{amount:l.amount-1});(s=Object($.a)(e.items))[o]=u}return{items:s,totalAmount:m}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(j.Provider,{value:s,children:e.children})})},ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(ne,{children:[n&&Object(u.jsx)(Z,{onClose:function(){a(!1)}}),Object(u.jsx)(_,{onShowCart:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(T,{})})]})};c.a.render(Object(u.jsx)(ae,{}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.6549a117.chunk.js.map