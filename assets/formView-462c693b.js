import{_ as x,m as g,b as V,r as u,o as f,c as p,d as s,e as a,w as y,t as n,F as w,h as E,G as m,g as S,v as C}from"./index-4a5991fe.js";import{S as T,c as h}from"./cart-e0fee3b9.js";const{VITE_URL:U,VITE_PATH:k}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy-2",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{},computed:{...g(h,["carts","final_total"])},methods:{...V(h,["getCart","addToCart","deleteItem","updateCartItem","deleteCartsItem"]),createOrder(){const d=`${U}/v2/api/${k}/order`,e=this.form;this.$http.post(d,{data:e}).then(r=>{const _=r.data.orderId;console.log("id:",_),T.fire({position:"top",title:"訂單已送出",showConfirmButton:!1,timer:1500}),this.$refs.form.resetForm(),this.$router.push({path:`form/${_}`}),this.getCart()}).catch(r=>{alert(r.response.data.message)})}},mounted(){}},j={class:"container"},q={class:"row"},B={class:"col-md-8"},D=s("h2",{class:"fs-4 my-5"},"填寫訂購資訊",-1),R={class:"mb-3"},A=s("label",{for:"email",class:"form-label"},"Email",-1),L={class:"mb-3"},O=s("label",{for:"name",class:"form-label"},"收件人姓名",-1),F={class:"mb-3"},N=s("label",{for:"tel",class:"form-label"},"收件人電話",-1),P={class:"mb-3"},H=s("label",{for:"address",class:"form-label"},"收件人地址",-1),M={class:"mb-3"},z=s("label",{for:"message",class:"form-label"},"留言",-1),G=s("div",{class:"text-center mb-4"},[s("button",{type:"submit",class:"btn btn-danger btn-lg"},"送出訂單")],-1),$={class:"col-md-4 mb-5 mt-md-17 mt-sm-5 d-none d-md-block"},J={class:"card bg-light",style:{width:"18rem"}},K=s("div",{class:"card-header text-center text-white bg-success mb-2"}," 訂單摘要 ",-1),Q={class:"d-flex justify-content-between mb-2"},W=s("span",{class:"px-2"},"小計",-1),X={class:"px-2"},Y=s("div",{class:"d-flex justify-content-between mb-2"},[s("span",{class:"px-2"},"運費"),s("span",{class:"px-2"},"$0")],-1),Z={class:"d-flex justify-content-between mb-3"},ss=s("span",{class:"px-2"},"總計",-1),es={class:"px-2"},ts={class:"card mt-6",style:{width:"18rem"}},os=s("div",{class:"card-header text-center text-white bg-success"}," 購物清單 ",-1),ls={class:"card-body bg-light"},as={class:"d-flex justify-content-between"},ds={class:"pb-2"},ns={class:"cart-img w-100"},rs=["src"],is={class:"pb-2"},cs={class:"px-4"},ms=s("br",null,null,-1),_s={class:"px-4"},us=s("br",null,null,-1),fs={class:"px-4"};function ps(d,e,r,_,t,b){const i=u("v-field"),c=u("error-message"),v=u("v-form");return f(),p("div",j,[s("div",q,[s("div",B,[D,a(v,{ref:"form",onSubmit:b.createOrder},{default:y(({errors:o})=>[s("div",R,[A,a(i,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:t.form.user.email,"onUpdate:modelValue":e[0]||(e[0]=l=>t.form.user.email=l)},null,8,["class","modelValue"]),a(c,{name:"email",class:"invalid-feedback"})]),s("div",L,[O,a(i,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:t.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=l=>t.form.user.name=l)},null,8,["class","modelValue"]),a(c,{name:"姓名",class:"invalid-feedback"})]),s("div",F,[N,a(i,{id:"tel",name:"電話",type:"text",class:m(["form-control",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:t.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=l=>t.form.user.tel=l)},null,8,["class","modelValue"]),a(c,{name:"電話",class:"invalid-feedback"})]),s("div",P,[H,a(i,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:t.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=l=>t.form.user.address=l)},null,8,["class","modelValue"]),a(c,{name:"地址",class:"invalid-feedback"})]),s("div",M,[z,S(s("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[4]||(e[4]=l=>t.form.message=l)},null,512),[[C,t.form.message]])]),G]),_:1},8,["onSubmit"])]),s("div",$,[s("div",J,[K,s("div",Q,[W,s("span",X,n(d.final_total),1)]),Y,s("div",Z,[ss,s("span",es,n(d.final_total),1)])]),s("div",ts,[os,s("div",ls,[s("table",null,[s("tbody",null,[(f(!0),p(w,null,E(d.carts,o=>(f(),p("tr",{class:"border-bottom",key:o.id},[s("div",as,[s("td",ds,[s("div",ns,[s("img",{src:o.product.imageUrl,style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,rs)])]),s("td",is,[s("span",cs,n(o.product.title),1),ms,s("small",_s,n(o.qty),1),us,s("span",fs,"NT$"+n(o.total),1)])])]))),128))])])])])])])])}const vs=x(I,[["render",ps]]);export{vs as default};
