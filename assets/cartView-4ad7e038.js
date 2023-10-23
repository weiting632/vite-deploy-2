import{_ as p,a as h,m as b,b as m,r as u,o as d,c as l,d as t,f,F as c,h as i,t as n,e as g,w,g as v,E as y,k as C}from"./index-4a5991fe.js";import{c as r}from"./cart-e0fee3b9.js";const k={components:{RouterLink:h},computed:{...b(r,["carts","final_total"])},methods:{...m(r,["getCart","addToCart","deleteItem","updateCartItem","changeCartItem","deleteCartsItem"])},mounted(){this.getCart()}},x={class:""},I={class:"container"},$={class:"row"},V={class:"d-flex justify-content-between my-4"},L=t("h3",{class:"mt-3 mb-4"},"購物車",-1),N={class:"col-md-8"},S={class:"table"},j={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},B=["src"],R={class:"mb-0 fw-bold ms-3 d-inline-block"},T={class:"border-0 align-middle",style:{"max-width":"160px"}},U={class:"input-group pe-5"},q=t("div",{class:"input-group-prepend"},null,-1),D=["onUpdate:modelValue","disabled","onChange"],E=["value"],F=t("div",{class:"input-group-append"},null,-1),M={class:"border-0 align-middle"},A={class:"mb-0 ms-auto"},z={class:"border-0 align-middle"},G=["onClick","disabled"],H=t("i",{class:"bi bi-x-lg"},null,-1),J=[H],K={class:"col-md-4"},O={class:"border p-4 mb-4 bg-light"},P=t("h4",{class:"fw-bold mb-4"},"訂單摘要",-1),Q={class:"table text-muted border-bottom"},W=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計",-1),X={class:"text-end border-0 px-0 pt-4"},Y=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"運費"),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"NT$0")],-1),Z={class:"d-flex justify-content-between mt-4"},tt=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),st={class:"mb-0 h4 fw-bold"};function et(s,a,ot,nt,dt,lt){const _=u("RouterLink");return d(),l("div",x,[t("div",I,[t("div",$,[t("div",V,[L,t("button",{onClick:a[0]||(a[0]=f(()=>s.deleteCartsItem(),["prevent"])),class:"mt-3 mb-4 bg-success text-white"},"清除購物車")]),t("div",N,[t("table",S,[t("tbody",null,[(d(!0),l(c,null,i(s.carts,e=>(d(),l("tr",{key:e.id,class:"border-bottom border-top"},[t("th",j,[t("img",{src:e.product.imageUrl,style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,B),t("p",R,n(e.product.title),1)]),t("td",T,[t("div",U,[q,v(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":o=>e.qty=o,disabled:e.id===s.loadingItem,onChange:o=>s.changeCartItem(e)},[(d(),l(c,null,i(20,o=>t("option",{value:o,key:o+"12345678"},n(o),9,E)),64))],40,D),[[y,e.qty]]),F])]),t("td",M,[t("p",A,n(s.carts.final_total),1)]),t("td",z,[t("button",{type:"button",class:"btn btn-outline-success btn-sm",onClick:o=>s.deleteItem(e),disabled:e.id===s.loadingItem},J,8,G)])]))),128))])])]),t("div",K,[t("div",O,[P,t("table",Q,[t("tbody",null,[t("tr",null,[W,t("td",X,n(s.final_total),1)]),Y])]),t("div",Z,[tt,t("p",st,n(s.final_total),1)]),g(_,{class:"btn btn-outline-success btn-lg w-100 my-4",to:"/form"},{default:w(()=>[C("下一頁")]),_:1})])])])])])}const it=p(k,[["render",et]]);export{it as default};
