import{_ as h,o as r,c as n,d as t,F as u,h as _,t as o}from"./index-4a5991fe.js";const{VITE_URL:a,VITE_PATH:d}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy-2",MODE:"production",DEV:!1,PROD:!0,SSR:!1},p={data(){return{order:{},products:[],final_total:0,qty:0,user:{},buttonLabel:"確認結帳",is_paid:!1,is_change:!0}},components:{},computed:{},methods:{getOrder(){const{id:c}=this.$route.params;console.log("id:",c),this.$http(`${a}/v2/api/${d}/order/${c}`).then(s=>{console.log(s),this.order=s.data.order,this.is_paid=s.data.order.is_paid,this.products=s.data.order.products,this.user=s.data.order.user,console.log("products:",this.products)})},changeStatus(){this.payTheBill(),this.is_change=!this.is_change,this.getOrder()},payTheBill(){const{id:c}=this.$route.params;this.$http.post(`${a}/v2/api/${d}/pay/${c}`).then(s=>{console.log(s)})},backToProduct(){this.$router.push("/products")}},watch(){},mounted(){this.getOrder()}},b={class:"container"},g={class:"row justify-content-center"},m={class:"col-md-6"},y={action:""},f=t("h2",{class:"text-center font-weight-bolder mb-5"},null,-1),x={class:"table table-borderless mb-5"},k=t("thead",{class:"bg-main-light"},[t("tr",null,[t("th",{class:""}," 品名 "),t("th",{class:"text-start"}," 數量 "),t("th",{class:"text-right"}," 總價 ")])],-1),T={class:"font-weight-bolder"},E={class:"text-start"},v={class:"text-right"},w=t("td",{colspan:"2",class:"text-right"}," 總計 ",-1),S={class:"text-right"},V={class:"table mb-5"},B=t("th",{width:"130"}," Email ",-1),O=t("th",null,"姓名",-1),L=t("th",null,"收件人電話",-1),P=t("th",null,"收件人地址",-1),R=t("th",null,"付款狀態",-1),$={key:0,class:"text-danger"},D={key:1,class:"text-primary"};function I(c,s,A,U,e,i){return r(),n("div",b,[t("div",g,[t("div",m,[t("form",y,[f,t("table",x,[k,(r(!0),n(u,null,_(e.products,l=>(r(),n("tbody",{key:l.id},[t("tr",null,[t("td",T,o(l.product.title),1),t("td",E,o(l.qty),1),t("td",v,o(l.product.price),1)])]))),128)),t("tfoot",null,[t("tr",null,[w,t("td",S,o(e.order.total),1)])])]),t("table",V,[t("tbody",null,[t("tr",null,[B,t("td",null,o(e.user.email),1)]),t("tr",null,[O,t("td",null,o(e.user.name),1)]),t("tr",null,[L,t("td",null,o(e.user.tel),1)]),t("tr",null,[P,t("td",null,o(e.user.address),1)]),t("tr",null,[R,e.is_paid===!1?(r(),n("td",$," 未付款 ")):(r(),n("td",D," 已付款 "))])])]),e.is_change?(r(),n("button",{key:0,class:"btn btn-primary mb-5 w-100",onClick:s[0]||(s[0]=(...l)=>i.changeStatus&&i.changeStatus(...l))},"確認結帳")):(r(),n("button",{key:1,class:"btn btn-primary mb-5 w-100",onClick:s[1]||(s[1]=l=>i.backToProduct())},"繼續購物"))])])])])}const C=h(p,[["render",I]]);export{C as default};
