(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25d1f95d"],{"057f":function(t,a,s){var e=s("fc6a"),r=s("241c").f,n={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return r(t)}catch(a){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==n.call(t)?o(t):r(e(t))}},"19df":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",[e("nav",{staticClass:"navbar navbar-expand-md",class:[{"navbar--dark":t.scrolled},t.navClass]},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand mr-2",attrs:{to:"/"}},[e("img",{staticClass:"navbar-brand__img",attrs:{src:s("d33b"),alt:""}})]),e("div",{staticClass:"order-md-1 ml-auto"},[t._m(0),e("button",{staticClass:"btn navbar-iconbtn shadow-none",attrs:{"data-toggle":"modal","data-target":"#cartModal"}},[e("span",{staticClass:"fas fa-shopping-cart"}),t.cartCurrentNumber>0?e("span",{staticClass:"badge badge-primary"},[t._v(" "+t._s(t.cartCurrentNumber)+" ")]):t._e()])]),t._m(1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("首頁")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/category"}},[t._v(" 產品 ")])],1),t._m(2)])])],1)]),e("div",{staticClass:"modal fade",attrs:{id:"cartModal",tabindex:"-1",role:"dialog","aria-labelledby":"cartModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",class:{"modal-lg":t.cartCurrentNumber>0},attrs:{role:"document"}},[e("div",{staticClass:"modal-content bg-dark text-white"},[t._m(3),e("div",{staticClass:"modal-body"},[t.cartCurrentNumber>0?e("div",[e("table",{staticClass:"table d-none d-md-table table-dark table-hover\n            text-center"},[t._m(4),e("tbody",t._l(t.carts.carts,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"align-middle"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.deleteCart(a.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" "),a.coupon?e("div",{staticClass:"text-success"},[t._v(" 已套用優惠券 ")]):t._e()]),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"c-inputGroup"},[e("button",{staticClass:"btn c-inputGroup__minusBtn",attrs:{disabled:1===a.qty},on:{click:function(s){a.qty--,t.updateCartQty(a.product_id,a.qty,a.id)}}},[e("i",{staticClass:"fas fa-minus"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.qty,expression:"cart.qty"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.qty},on:{input:function(s){s.target.composing||t.$set(a,"qty",s.target.value)}}}),e("button",{staticClass:"btn c-inputGroup__plusBtn",attrs:{disabled:10===a.qty},on:{click:function(s){a.qty++,t.updateCartQty(a.product_id,a.qty,a.id)}}},[e("i",{staticClass:"fas fa-plus"})])])]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(a.total)))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(a.final_total)))])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.carts.total)))])]),t.carts.final_total!==t.carts.total?e("tr",[e("td",{staticClass:"text-right text-success",attrs:{colspan:"4"}},[t._v("折扣價")]),e("td",{staticClass:"text-right text-success"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])]):t._e()])]),e("table",{staticClass:"table d-table d-md-none table-dark table-hover\n            text-center"},[t._l(t.carts.carts,(function(a,s){return e("tbody",{key:s,staticClass:"border-0"},[e("tr",[e("td",{staticClass:"align-middle",staticStyle:{width:"40px"}},[e("img",{attrs:{src:a.product.imageUrl,alt:"",width:"40"}})]),e("td",{staticClass:"align-middle text-left",attrs:{colspan:"2"}},[e("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(a.product.title)+" ")]),e("br"),a.product.price?e("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t._f("currency")(a.product.price))+" ")]):e("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t._f("currency")(a.product.origin_price))+" ")]),a.coupon?e("span",{staticClass:"text-success",staticStyle:{"font-size":"14px"}},[t._v(" 已套用優惠券 ")]):t._e()]),e("td",{staticClass:"align-middle text-right",staticStyle:{width:"35px"}},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.deleteCart(a.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])])]),e("tr",[e("td",{staticClass:"align-middle border-0 p-md-margin",attrs:{colspan:"2"}},[e("div",{staticClass:"c-inputGroup"},[e("button",{staticClass:"btn c-inputGroup__minusBtn",attrs:{disabled:1===a.qty},on:{click:function(s){a.qty--,t.updateCartQty(a.product_id,a.qty,a.id)}}},[e("i",{staticClass:"fas fa-minus"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.qty,expression:"cart.qty"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.qty},on:{input:function(s){s.target.composing||t.$set(a,"qty",s.target.value)}}}),e("button",{staticClass:"btn c-inputGroup__plusBtn",attrs:{disabled:10===a.qty},on:{click:function(s){a.qty++,t.updateCartQty(a.product_id,a.qty,a.id)}}},[e("i",{staticClass:"fas fa-plus"})])])]),e("td",{staticClass:"align-middle text-right border-0",attrs:{colspan:"2"}},[t._v(" "+t._s(t._f("currency")(a.final_total))+" ")])])])})),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v(t._s(t._f("currency")(t.carts.total)))])]),t.carts.final_total!==t.carts.total?e("tr",[e("td",{staticClass:"text-right text-success",attrs:{colspan:"2"}},[t._v(" 折扣價 ")]),e("td",{staticClass:"text-right text-success",attrs:{colspan:"2"}},[t._v(" "+t._s(t._f("currency")(t.carts.final_total))+" ")])]):t._e()])],2)]):e("div",{staticClass:"d-flex justify-content-center flex-column align-items-center",staticStyle:{"padding-bottom":"62px"}},[e("img",{staticClass:"img-fluid mx-auto d-block",attrs:{width:"190",src:s("f2bb"),alt:""}}),t._m(5),e("router-link",{staticClass:"btn btn-danger",attrs:{to:"/category","data-dismiss":"modal"}},[t._v(" 返回產品 ")])],1)]),t.cartCurrentNumber>0?e("div",{staticClass:"modal-footer border-0"},[e("button",{staticClass:"btn btn-outline-light px-4",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("router-link",{staticClass:"btn btn-danger px-4",attrs:{to:"/checkout","data-dismiss":"modal"}},[t._v("結帳")])],1):t._e()])])]),e("div",{staticClass:"modal fade",attrs:{id:"SigninModal",tabindex:"-1",role:"dialog","aria-labelledby":"SigninModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content bg-dark text-white"},[t._m(6),e("div",{staticClass:"modal-body"},[e("form",{staticClass:"formSignin",on:{submit:function(a){return a.preventDefault(),t.signin(a)}}},[e("img",{staticClass:"mb-4 img-fluid",attrs:{src:s("d33b"),alt:"",height:"64"}}),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("電子郵件")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:""},domProps:{value:t.user.username},on:{input:function(a){a.target.composing||t.$set(t.user,"username",a.target.value)}}}),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("密碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:"",autocomplete:""},domProps:{value:t.user.password},on:{input:function(a){a.target.composing||t.$set(t.user,"password",a.target.value)}}}),t._m(7),e("button",{staticClass:"btn btn-lg btn-danger btn-block",attrs:{type:"submit"}},[t._v("登入")])])])])])])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"btn navbar-iconbtn shadow-none",attrs:{type:"button","data-toggle":"modal","data-target":"#SigninModal"}},[s("span",{staticClass:"fas fa-user-cog"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"https://github.com/Albertnotes/FixedGearShop_v4",target:"_blank"}},[t._v(" 作者 ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header border-0"},[s("h5",{staticClass:"modal-title",attrs:{id:"cartModalLabel"}},[t._v("購物車")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticClass:"thead-light text-nowrap"},[s("th",{staticStyle:{width:"5%"}},[t._v("刪除")]),s("th",[t._v("品名")]),s("th",{staticStyle:{width:"10%"}},[t._v("數量")]),s("th",[t._v("單價")]),s("th",[t._v("總計")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h5",{staticClass:"font-weight-bold"},[t._v(" 購物車目前沒有內容"),s("br")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header border-0"},[s("h5",{staticClass:"modal-title",attrs:{id:"SigninModalLabel"}},[t._v("登入介面")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"checkbox mb-3"},[s("label",[s("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" 記住我 ")])])}],n=s("1157"),i=s.n(n),o={name:"FrontHeader",data:function(){return{user:{username:"",password:""},scrolled:!1}},props:["carts","cartCurrentNumber","navClass"],methods:{signin:function(){var t="".concat("https://vue-course-api.hexschool.io","/admin/signin"),a=this;a.$http.post(t,a.user).then((function(t){t.data.success?(a.$router.push("/dashboard"),i()("#SigninModal").modal("hide")):(a.$bus.$emit("message:push",t.data.message,"danger"),i()("#SigninModal").modal("hide"))}))},deleteCart:function(t){this.$emit("delete-cart",t)},updateCartQty:function(t,a,s){this.$emit("update-cart-qty",t,a,s)},getProduct:function(t){this.$emit("search-product",t)},onScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop;t<0||(this.scrolled=t>1)}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},c=o,l=(s("c115"),s("2877")),u=Object(l["a"])(c,e,r,!1,null,"7a77aafb",null);a["a"]=u.exports},"22e6":function(t,a,s){},"26a3":function(t,a,s){},5530:function(t,a,s){"use strict";s.d(a,"a",(function(){return n}));s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b");function e(t,a,s){return a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}function r(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,e)}return s}function n(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){e(t,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))}))}return t}},"698d":function(t,a,s){"use strict";var e=s("22e6"),r=s.n(e);r.a},"6b34":function(t,a,s){"use strict";s("99af");a["a"]={data:function(){return{carts:[],cartNumber:1,cartCurrentNumber:0}},methods:{getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("fixedgearshop","/cart");t.status.isLoading=!0,t.$http.get(a).then((function(a){a.data.success&&(t.carts=a.data.data,t.cartCurrentNumber=t.carts.carts.length,setTimeout((function(){t.status.isLoading=!1}),500))}))},addToCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("fixedgearshop","/cart"),r={product_id:t,qty:a};s.$http.post(e,{data:r}).then((function(t){t.data.success&&(s.cartNumber=1,s.getCart(),s.$bus.$emit("message:push",t.data.message,"success"))}))},deleteCart:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("fixedgearshop","/cart/").concat(t);a.$http.delete(s).then((function(t){t.data.success&&(a.getCart(),a.$bus.$emit("message:push",t.data.message,"danger"))}))},updateCartQty:function(t,a,s){var e=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("fixedgearshop","/cart"),n={product_id:t,qty:a};e.status.isLoading=!0,e.$http.post(r,{data:n}).then((function(t){t.data.success?(r="".concat(r,"/").concat(s),e.$http.delete(r).then((function(t){t.data.success&&(e.getCart(),e.$bus.$emit("message:push","數量已更新","success"))}))):(e.getCart(),e.$bus.$emit("message:push","數量更新失敗","danger"))}))}}}},"72ca":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.status.isLoading},on:{"update:active":function(a){return t.$set(t.status,"isLoading",a)}}},[[e("div",{staticClass:"lds-ripple"},[e("div"),e("div")])]],2),e("front-header",{attrs:{carts:t.carts,"nav-class":["navbar-dark","bg-black"],cartCurrentNumber:t.cartCurrentNumber},on:{"delete-cart":t.deleteCart,"update-cart-qty":t.updateCartQty}}),e("main",{staticClass:"container"},[t.cartCurrentNumber>0?e("section",{staticClass:"l-section"},[e("h2",{staticClass:"l-section__title"},[t._v("購物車內容")]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10"},[e("table",{staticClass:"table d-none d-md-table table-hover text-center"},[t._m(0),e("tbody",t._l(t.carts.carts,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"align-middle"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.deleteCart(a.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" "),a.coupon?e("div",{staticClass:"text-success"},[t._v(" 已套用優惠券 ")]):t._e()]),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"c-inputGroup"},[e("button",{staticClass:"btn c-inputGroup__minusBtn",attrs:{disabled:1===a.qty},on:{click:function(s){a.qty--,t.updateCartQty(a.product_id,a.qty,a.id)}}},[e("i",{staticClass:"fas fa-minus"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.qty,expression:"cart.qty"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.qty},on:{input:function(s){s.target.composing||t.$set(a,"qty",s.target.value)}}}),e("button",{staticClass:"btn c-inputGroup__plusBtn",attrs:{disabled:10===a.qty},on:{click:function(s){a.qty++,t.updateCartQty(a.product_id,a.qty,a.id)}}},[e("i",{staticClass:"fas fa-plus"})])])]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(a.total)))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(a.final_total)))])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.carts.total)))])]),t.carts.final_total!==t.carts.total?e("tr",[e("td",{staticClass:"text-right text-success",attrs:{colspan:"4"}},[t._v("折扣價")]),e("td",{staticClass:"text-right text-success"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])]):t._e()])]),e("table",{staticClass:"table d-table d-md-none table-hover text-center"},[t._l(t.carts.carts,(function(a,s){return e("tbody",{key:s,staticClass:"border-0"},[e("tr",[e("td",{staticClass:"align-middle",staticStyle:{width:"40px"}},[e("img",{attrs:{src:a.product.imageUrl,alt:"",width:"40"}})]),e("td",{staticClass:"align-middle text-left",attrs:{colspan:"2"}},[e("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(a.product.title)+" ")]),e("br"),a.product.price?e("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t._f("currency")(a.product.price))+" ")]):e("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t._f("currency")(a.product.origin_price))+" ")]),a.coupon?e("span",{staticClass:"text-success",staticStyle:{"font-size":"14px"}},[t._v(" 已套用優惠券 ")]):t._e()]),e("td",{staticClass:"align-middle text-right",staticStyle:{width:"35px"}},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.deleteCart(a.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])])]),e("tr",[e("td",{staticClass:"align-middle border-0 p-md-margin",attrs:{colspan:"2"}},[e("div",{staticClass:"c-inputGroup"},[e("button",{staticClass:"btn c-inputGroup__minusBtn",attrs:{disabled:1===a.qty},on:{click:function(s){a.qty--,t.updateCartQty(a.product_id,a.qty,a.id)}}},[e("i",{staticClass:"fas fa-minus"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.qty,expression:"cart.qty"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:a.qty},on:{input:function(s){s.target.composing||t.$set(a,"qty",s.target.value)}}}),e("button",{staticClass:"btn c-inputGroup__plusBtn",attrs:{disabled:10===a.qty},on:{click:function(s){a.qty++,t.updateCartQty(a.product_id,a.qty,a.id)}}},[e("i",{staticClass:"fas fa-plus"})])])]),e("td",{staticClass:"align-middle text-right border-0",attrs:{colspan:"2"}},[t._v(" "+t._s(t._f("currency")(a.final_total))+" ")])])])})),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v(t._s(t._f("currency")(t.carts.total)))])]),t.carts.final_total!==t.carts.total?e("tr",[e("td",{staticClass:"text-right text-success",attrs:{colspan:"2"}},[t._v(" 折扣價 ")]),e("td",{staticClass:"text-right text-success",attrs:{colspan:"2"}},[t._v(" "+t._s(t._f("currency")(t.carts.final_total))+" ")])]):t._e()])],2),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",staticStyle:{"text-align-last":"center"},attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v(" 套用優惠碼 ")])])])])])]):t._e(),t.cartCurrentNumber>0?e("section",{staticClass:"l-section"},[e("h2",{staticClass:"l-section__title"},[t._v("結帳表單")]),e("div",{staticClass:"row justify-content-center"},[e("ValidationObserver",{staticClass:"col-md-10",scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("form",{on:{submit:function(a){return a.preventDefault(),t.createOrder(a)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"useremail"}},[t._v("Email "),e("span",[t._v("*")])]),e("ValidationProvider",{attrs:{name:"E-mail",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:r,attrs:{type:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"username"}},[t._v("收件人姓名 "),e("span",[t._v("*")])]),e("ValidationProvider",{attrs:{name:"姓名"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:r,attrs:{type:"text",id:"username",placeholder:"輸入姓名",required:""},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("ValidationProvider",{attrs:{name:"電話",rules:{regex:/[0-9]{9}/}},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"usertel"}},[t._v("收件人電話 "),e("span",[t._v("*")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:r,attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話",required:""},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"useraddress"}},[t._v("收件人地址 "),e("span",[t._v("*")])]),e("ValidationProvider",{attrs:{name:"地址"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:r,attrs:{type:"text",id:"useraddress",placeholder:"請輸入地址",required:""},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"comment"}},[t._v("留言")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-outline-danger",class:{"not-allowed":s},attrs:{type:"submit",disabled:s}},[t._v("送出訂單")])])])]}}],null,!1,3112442857)})],1)]):e("section",{staticClass:"l-section"},[e("h2",{staticClass:"l-section__title l-section__title--marginTop"},[t._v("購物車內容")]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"d-flex justify-content-center flex-column align-items-center"},[e("img",{staticClass:"img-fluid mx-auto d-block",attrs:{width:"190",src:s("f2bb"),alt:""}}),t._m(1),e("router-link",{staticClass:"btn btn-danger",attrs:{to:"/category","data-dismiss":"modal"}},[t._v(" 返回產品 ")])],1)])])])])],1)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticClass:"thead-dark text-nowrap"},[s("th",{staticStyle:{width:"5%"}},[t._v("刪除")]),s("th",[t._v("品名")]),s("th",{staticStyle:{width:"10%"}},[t._v("數量")]),s("th",[t._v("單價")]),s("th",[t._v("總計")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h5",{staticClass:"font-weight-bold"},[t._v(" 購物車目前沒有內容"),s("br")])}],n=s("6b34"),i=(s("99af"),s("5530")),o={data:function(){return{coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{addCouponCode:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("fixedgearshop","/coupon"),s={code:t.coupon_code};t.$http.post(a,{data:s}).then((function(a){a.data.success?t.getCart():(t.getCart(),t.$bus.$emit("message:push",a.data.message,"danger"))}))},createOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("fixedgearshop","/order"),s=Object(i["a"])({},t.form);t.$http.post(a,{data:s}).then((function(a){a.data.success&&t.$router.push("/cartorder/".concat(a.data.orderId))}))}}},c=s("19df"),l={name:"FrontCheckout",data:function(){return{status:{isLoading:!1}}},mixins:[n["a"],o],components:{FrontHeader:c["a"]},created:function(){this.getCart()}},u=l,d=(s("698d"),s("2877")),f=Object(d["a"])(u,e,r,!1,null,"0dc88916",null);a["default"]=f.exports},"746f":function(t,a,s){var e=s("428f"),r=s("5135"),n=s("e538"),i=s("9bf2").f;t.exports=function(t){var a=e.Symbol||(e.Symbol={});r(a,t)||i(a,t,{value:n.f(t)})}},8418:function(t,a,s){"use strict";var e=s("c04e"),r=s("9bf2"),n=s("5c6c");t.exports=function(t,a,s){var i=e(a);i in t?r.f(t,i,n(0,s)):t[i]=s}},"99af":function(t,a,s){"use strict";var e=s("23e7"),r=s("d039"),n=s("e8b5"),i=s("861d"),o=s("7b0b"),c=s("50c4"),l=s("8418"),u=s("65f0"),d=s("1dde"),f=s("b622"),p=s("2d00"),m=f("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",g=p>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),_=d("concat"),h=function(t){if(!i(t))return!1;var a=t[m];return void 0!==a?!!a:n(t)},C=!g||!_;e({target:"Array",proto:!0,forced:C},{concat:function(t){var a,s,e,r,n,i=o(this),d=u(i,0),f=0;for(a=-1,e=arguments.length;a<e;a++)if(n=-1===a?i:arguments[a],h(n)){if(r=c(n.length),f+r>v)throw TypeError(b);for(s=0;s<r;s++,f++)s in n&&l(d,f,n[s])}else{if(f>=v)throw TypeError(b);l(d,f++,n)}return d.length=f,d}})},a4d3:function(t,a,s){"use strict";var e=s("23e7"),r=s("da84"),n=s("d066"),i=s("c430"),o=s("83ab"),c=s("4930"),l=s("fdbf"),u=s("d039"),d=s("5135"),f=s("e8b5"),p=s("861d"),m=s("825a"),v=s("7b0b"),b=s("fc6a"),g=s("c04e"),_=s("5c6c"),h=s("7c73"),C=s("df75"),y=s("241c"),x=s("057f"),w=s("7418"),S=s("06cf"),k=s("9bf2"),q=s("d1e7"),$=s("9112"),O=s("6eeb"),P=s("5692"),j=s("f772"),N=s("d012"),E=s("90e3"),G=s("b622"),L=s("e538"),Q=s("746f"),M=s("d44e"),D=s("69f3"),T=s("b727").forEach,z=j("hidden"),B="Symbol",F="prototype",V=G("toPrimitive"),J=D.set,A=D.getterFor(B),H=Object[F],I=r.Symbol,U=n("JSON","stringify"),W=S.f,Y=k.f,K=x.f,R=q.f,X=P("symbols"),Z=P("op-symbols"),tt=P("string-to-symbol-registry"),at=P("symbol-to-string-registry"),st=P("wks"),et=r.QObject,rt=!et||!et[F]||!et[F].findChild,nt=o&&u((function(){return 7!=h(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,a,s){var e=W(H,a);e&&delete H[a],Y(t,a,s),e&&t!==H&&Y(H,a,e)}:Y,it=function(t,a){var s=X[t]=h(I[F]);return J(s,{type:B,tag:t,description:a}),o||(s.description=a),s},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof I},ct=function(t,a,s){t===H&&ct(Z,a,s),m(t);var e=g(a,!0);return m(s),d(X,e)?(s.enumerable?(d(t,z)&&t[z][e]&&(t[z][e]=!1),s=h(s,{enumerable:_(0,!1)})):(d(t,z)||Y(t,z,_(1,{})),t[z][e]=!0),nt(t,e,s)):Y(t,e,s)},lt=function(t,a){m(t);var s=b(a),e=C(s).concat(mt(s));return T(e,(function(a){o&&!dt.call(s,a)||ct(t,a,s[a])})),t},ut=function(t,a){return void 0===a?h(t):lt(h(t),a)},dt=function(t){var a=g(t,!0),s=R.call(this,a);return!(this===H&&d(X,a)&&!d(Z,a))&&(!(s||!d(this,a)||!d(X,a)||d(this,z)&&this[z][a])||s)},ft=function(t,a){var s=b(t),e=g(a,!0);if(s!==H||!d(X,e)||d(Z,e)){var r=W(s,e);return!r||!d(X,e)||d(s,z)&&s[z][e]||(r.enumerable=!0),r}},pt=function(t){var a=K(b(t)),s=[];return T(a,(function(t){d(X,t)||d(N,t)||s.push(t)})),s},mt=function(t){var a=t===H,s=K(a?Z:b(t)),e=[];return T(s,(function(t){!d(X,t)||a&&!d(H,t)||e.push(X[t])})),e};if(c||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,a=E(t),s=function(t){this===H&&s.call(Z,t),d(this,z)&&d(this[z],a)&&(this[z][a]=!1),nt(this,a,_(1,t))};return o&&rt&&nt(H,a,{configurable:!0,set:s}),it(a,t)},O(I[F],"toString",(function(){return A(this).tag})),O(I,"withoutSetter",(function(t){return it(E(t),t)})),q.f=dt,k.f=ct,S.f=ft,y.f=x.f=pt,w.f=mt,L.f=function(t){return it(G(t),t)},o&&(Y(I[F],"description",{configurable:!0,get:function(){return A(this).description}}),i||O(H,"propertyIsEnumerable",dt,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:I}),T(C(st),(function(t){Q(t)})),e({target:B,stat:!0,forced:!c},{for:function(t){var a=String(t);if(d(tt,a))return tt[a];var s=I(a);return tt[a]=s,at[s]=a,s},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(at,t))return at[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),e({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),e({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),e({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(v(t))}}),U){var vt=!c||u((function(){var t=I();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));e({target:"JSON",stat:!0,forced:vt},{stringify:function(t,a,s){var e,r=[t],n=1;while(arguments.length>n)r.push(arguments[n++]);if(e=a,(p(a)||void 0!==t)&&!ot(t))return f(a)||(a=function(t,a){if("function"==typeof e&&(a=e.call(this,t,a)),!ot(a))return a}),r[1]=a,U.apply(null,r)}})}I[F][V]||$(I[F],V,I[F].valueOf),M(I,B),N[z]=!0},c115:function(t,a,s){"use strict";var e=s("26a3"),r=s.n(e);r.a},d33b:function(t,a,s){t.exports=s.p+"img/WheelTalk_Logo.de390916.png"},dbb4:function(t,a,s){var e=s("23e7"),r=s("83ab"),n=s("56ef"),i=s("fc6a"),o=s("06cf"),c=s("8418");e({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var a,s,e=i(t),r=o.f,l=n(e),u={},d=0;while(l.length>d)s=r(e,a=l[d++]),void 0!==s&&c(u,a,s);return u}})},e439:function(t,a,s){var e=s("23e7"),r=s("d039"),n=s("fc6a"),i=s("06cf").f,o=s("83ab"),c=r((function(){i(1)})),l=!o||c;e({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,a){return i(n(t),a)}})},e538:function(t,a,s){var e=s("b622");a.f=e},f2bb:function(t,a,s){t.exports=s.p+"img/first-bike-gif.392c91a7.gif"}}]);
//# sourceMappingURL=chunk-25d1f95d.cc03c4aa.js.map