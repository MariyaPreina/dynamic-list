(function(e){function t(t){for(var c,o,s=t[0],a=t[1],l=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],c=!0,s=1;s<r.length;s++){var a=r[s];0!==i[a]&&(c=!1)}c&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var c={},i={app:0},n=[];function o(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=c,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(r,c,function(t){return e[t]}.bind(null,c));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dynamic-list/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=a;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"06fc":function(e,t,r){},1930:function(e,t,r){},"27b3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var c=r("7a23"),i=(r("b0c0"),r("a4d3"),r("e01a"),{class:"container"}),n={class:"main"},o={class:"form-box"},s=Object(c["f"])("h1",{class:"form-box__title"},"Добавление товара",-1),a={class:"cards"},l={class:"cards__sort"},u={class:"cards__sort-wrapper"},d={key:0,class:"cards__inner"},p={key:1,class:"cards__empty"};function f(e,t,r,f,m,b){var O=Object(c["q"])("add-form"),j=Object(c["q"])("app-select"),h=Object(c["q"])("product-card");return Object(c["l"])(),Object(c["e"])("div",i,[Object(c["f"])("main",n,[Object(c["f"])("div",o,[s,Object(c["h"])(O)]),Object(c["f"])("div",a,[Object(c["f"])("div",l,[Object(c["f"])("div",u,[Object(c["h"])(j,{id:"select",options:m.selectValues,onSelect:b.updateSortValue,selected:b.sortValue.name,default:"По умолчанию"},null,8,["options","onSelect","selected"])])]),b.cards.length>0?(Object(c["l"])(),Object(c["e"])("div",d,[(Object(c["l"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(b.cards,(function(e,t){return Object(c["l"])(),Object(c["c"])(h,{key:t,id:t,name:e.name,img:e.img,description:e.description,price:e.price},null,8,["id","name","img","description","price"])})),128))])):(Object(c["l"])(),Object(c["e"])("p",p,"Список пуст"))])])])}var m={class:"select"},b={key:0,class:"select__options"},O=["onClick"];function j(e,t,r,i,n,o){return Object(c["l"])(),Object(c["e"])("div",m,[Object(c["f"])("p",{class:Object(c["j"])(["select__value",{active:n.areOptionsVisible,"not-selected":!r.selected}]),onClick:t[0]||(t[0]=function(e){return n.areOptionsVisible=!n.areOptionsVisible})},Object(c["r"])(o.isSelected),3),n.areOptionsVisible?(Object(c["l"])(),Object(c["e"])("div",b,[(Object(c["l"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(r.options,(function(e){return Object(c["l"])(),Object(c["e"])("span",{class:"select__option",key:e.value,onClick:function(t){return o.selectOption(e)}},Object(c["r"])(e.name),9,O)})),128))])):Object(c["d"])("",!0)])}var h={props:{options:{type:Array,default:function(){return[]}},default:{type:String,required:!1,default:""},selected:{type:String,default:""}},data:function(){return{areOptionsVisible:!1}},computed:{isSelected:function(){return this.selected?this.selected:this.default}},methods:{hideSelect:function(e){this.$el.contains(e.target)||(this.areOptionsVisible=!1)},selectOption:function(e){this.$emit("select",e),this.areOptionsVisible=!1}},mounted:function(){document.addEventListener("click",this.hideSelect)},beforeUnmount:function(){document.removeEventListener("click",this.hideSelect)}},_=(r("8f8f"),r("6b0d")),g=r.n(_);const v=g()(h,[["render",j],["__scopeId","data-v-0ddcf6d0"]]);var y=v,V=function(e){return Object(c["n"])("data-v-4a61cdd1"),e=e(),Object(c["m"])(),e},C={class:"form__group"},k=V((function(){return Object(c["f"])("label",{for:"name",class:"form__label form__label--required"},"Наименование товара",-1)})),S={key:0,class:"form__error"},w={class:"form__group"},P=V((function(){return Object(c["f"])("label",{for:"description",class:"form__label"},"Описание товара",-1)})),q={class:"form__group"},F=V((function(){return Object(c["f"])("label",{for:"img",class:"form__label form__label--required"},"Ссылка на изображение товара",-1)})),x={key:0,class:"form__error"},I={class:"form__group"},M=V((function(){return Object(c["f"])("label",{for:"price",class:"form__label form__label--required"},"Цена товара",-1)})),H={key:0,class:"form__error"};function E(e,t,r,i,n,o){return Object(c["l"])(),Object(c["e"])("form",{class:"form",onSubmit:t[7]||(t[7]=Object(c["v"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"])),autocomplete:"off"},[Object(c["f"])("div",C,[k,Object(c["u"])(Object(c["f"])("input",{type:"text",id:"name",class:Object(c["j"])(["form__input",{"form__input--error":n.errors.name}]),placeholder:"Введите наименование товара","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.requiredFields.name=e}),onInput:t[1]||(t[1]=function(){return o.checkName&&o.checkName.apply(o,arguments)})},null,34),[[c["s"],n.requiredFields.name,void 0,{trim:!0}]]),n.errors.name?(Object(c["l"])(),Object(c["e"])("span",S,Object(c["r"])(n.errors.name),1)):Object(c["d"])("",!0)]),Object(c["f"])("div",w,[P,Object(c["u"])(Object(c["f"])("textarea",{id:"description",class:"form__input form__input--textarea",placeholder:"Введите описание товара","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.description=e})},null,512),[[c["s"],n.description,void 0,{trim:!0}]])]),Object(c["f"])("div",q,[F,Object(c["u"])(Object(c["f"])("input",{type:"text",id:"img",class:Object(c["j"])(["form__input",{"form__input--error":n.errors.img}]),placeholder:"Введите ссылку","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.requiredFields.img=e}),onInput:t[4]||(t[4]=function(){return o.checkImg&&o.checkImg.apply(o,arguments)})},null,34),[[c["s"],n.requiredFields.img,void 0,{trim:!0}]]),n.errors.img?(Object(c["l"])(),Object(c["e"])("span",x,Object(c["r"])(n.errors.img),1)):Object(c["d"])("",!0)]),Object(c["f"])("div",I,[M,Object(c["u"])(Object(c["f"])("input",{type:"number",id:"price",class:Object(c["j"])(["form__input",{"form__input--error":n.errors.price}]),placeholder:"Введите цену","onUpdate:modelValue":t[5]||(t[5]=function(e){return n.requiredFields.price=e}),onInput:t[6]||(t[6]=function(){return o.checkPrice&&o.checkPrice.apply(o,arguments)})},null,34),[[c["s"],n.requiredFields.price,void 0,{trim:!0}]]),n.errors.price?(Object(c["l"])(),Object(c["e"])("span",H,Object(c["r"])(n.errors.price),1)):Object(c["d"])("",!0)]),Object(c["f"])("button",{type:"submit",class:Object(c["j"])(["form__btn",{disabled:!o.isFormEnable,enabled:o.isFormEnable}])},"Добавить товар",2)],32)}r("07ac"),r("a9e3"),r("159b"),r("b64b");var N={data:function(){return{requiredFields:{name:"",img:"",price:""},description:"",errors:{name:"",img:"",price:""}}},computed:{isFormEnable:function(){return Object.values(this.errors).every((function(e){return!e}))&&Object.values(this.requiredFields).every((function(e){return e}))}},methods:{checkRequiredField:function(e,t){this.errors[t]="",e||(this.errors[t]="Поле является обязательным")},checkName:function(){this.checkRequiredField(this.requiredFields.name,"name")},checkImg:function(){this.checkRequiredField(this.requiredFields.img,"img")},checkPrice:function(){this.checkRequiredField(this.requiredFields.price,"price")},onSubmit:function(){if(this.checkName(),this.checkImg(),this.checkPrice(),this.isFormEnable){var e=this.requiredFields;this.$store.commit("addProduct",{name:e.name,description:this.description,img:e.img,price:Number(e.price)}),Object.keys(e).forEach((function(t){e[t]=""})),this.description=""}}}};r("ce09");const Z=g()(N,[["render",E],["__scopeId","data-v-4a61cdd1"]]);var $=Z,A=(r("5b81"),{class:"wrapper"}),U={class:"card"},R={class:"card__image"},L={class:"card__image-inner"},J={class:"card__content"},T={class:"card__name"},B={key:0,class:"card__description"},z={key:1,class:"card__description"},D={class:"card__price"},G=Object(c["g"])('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-225de896><g clip-path="url(#clip0_4:349)" data-v-225de896><path d="M10.207 5.79688C9.99998 5.79688 9.83224 5.96462 9.83224 6.17158V13.2535C9.83224 13.4604 9.99998 13.6283 10.207 13.6283C10.4139 13.6283 10.5817 13.4604 10.5817 13.2535V6.17158C10.5817 5.96462 10.4139 5.79688 10.207 5.79688Z" fill="white" data-v-225de896></path><path d="M5.78544 5.79688C5.57848 5.79688 5.41074 5.96462 5.41074 6.17158V13.2535C5.41074 13.4604 5.57848 13.6283 5.78544 13.6283C5.99241 13.6283 6.16015 13.4604 6.16015 13.2535V6.17158C6.16015 5.96462 5.99241 5.79688 5.78544 5.79688Z" fill="white" data-v-225de896></path><path d="M2.56294 4.76335V13.9953C2.56294 14.541 2.76303 15.0534 3.11256 15.4211C3.46048 15.7898 3.94467 15.9991 4.4514 16H11.541C12.0478 15.9991 12.532 15.7898 12.8798 15.4211C13.2293 15.0534 13.4294 14.541 13.4294 13.9953V4.76335C14.1242 4.57893 14.5745 3.90768 14.4815 3.19471C14.3884 2.48189 13.7811 1.94867 13.0622 1.94852H11.1437V1.48014C11.1459 1.08626 10.9902 0.708039 10.7113 0.42979C10.4325 0.151688 10.0537 -0.0031709 9.65982 4.92333e-05H6.33255C5.93867 -0.0031709 5.55986 0.151688 5.28103 0.42979C5.00219 0.708039 4.84646 1.08626 4.84865 1.48014V1.94852H2.93019C2.21122 1.94867 1.60393 2.48189 1.51084 3.19471C1.4179 3.90768 1.86813 4.57893 2.56294 4.76335ZM11.541 15.2506H4.4514C3.81075 15.2506 3.31236 14.7002 3.31236 13.9953V4.79629H12.68V13.9953C12.68 14.7002 12.1816 15.2506 11.541 15.2506ZM5.59806 1.48014C5.59558 1.28503 5.67227 1.09724 5.81074 0.959502C5.94906 0.821768 6.13729 0.746095 6.33255 0.749461H9.65982C9.85508 0.746095 10.0433 0.821768 10.1816 0.959502C10.3201 1.09709 10.3968 1.28503 10.3943 1.48014V1.94852H5.59806V1.48014ZM2.93019 2.69793H13.0622C13.4347 2.69793 13.7367 2.99989 13.7367 3.3724C13.7367 3.74491 13.4347 4.04688 13.0622 4.04688H2.93019C2.55768 4.04688 2.25571 3.74491 2.25571 3.3724C2.25571 2.99989 2.55768 2.69793 2.93019 2.69793Z" fill="white" data-v-225de896></path><path d="M7.9962 5.79688C7.78923 5.79688 7.62149 5.96462 7.62149 6.17158V13.2535C7.62149 13.4604 7.78923 13.6283 7.9962 13.6283C8.20317 13.6283 8.37091 13.4604 8.37091 13.2535V6.17158C8.37091 5.96462 8.20317 5.79688 7.9962 5.79688Z" fill="white" data-v-225de896></path></g><defs data-v-225de896><clipPath id="clip0_4:349" data-v-225de896><rect width="16" height="16" fill="white" data-v-225de896></rect></clipPath></defs></svg>',1),K=[G];function Q(e,t,r,i,n,o){return Object(c["l"])(),Object(c["e"])("div",A,[Object(c["f"])("div",U,[Object(c["f"])("div",R,[Object(c["f"])("div",L,[Object(c["f"])("span",{class:"card__image-content",style:Object(c["k"])({"background-image":"url("+r.img+"), url("+n.imgPlaceholder+")"})},null,4)])]),Object(c["f"])("div",J,[Object(c["f"])("h2",T,Object(c["r"])(r.name),1),r.description?(Object(c["l"])(),Object(c["e"])("p",B,Object(c["r"])(r.description),1)):(Object(c["l"])(),Object(c["e"])("p",z,"Нет описания")),Object(c["f"])("p",D,Object(c["r"])(r.price.toLocaleString().replaceAll(","," "))+" руб.",1)]),Object(c["f"])("div",{class:"card__delete-btn",onClick:t[0]||(t[0]=function(){return o.deleteProduct&&o.deleteProduct.apply(o,arguments)})},K)])])}var W={props:{name:String,img:String,description:String,price:Number,id:Number},data:function(){return{imgPlaceholder:r("d905")}},methods:{deleteProduct:function(){this.$store.commit("deleteProduct",this.id)}}};r("74f5");const X=g()(W,[["render",Q],["__scopeId","data-v-225de896"]]);var Y=X,ee={name:"App",components:{AppSelect:y,AddForm:$,ProductCard:Y},data:function(){return{selectValues:[{name:"По цене min",value:"min"},{name:"По цене max",value:"max"},{name:"По наименованию",value:"name"}]}},computed:{cards:function(){return this.$store.getters.products},sortValue:function(){return this.$store.getters.sortSelect}},methods:{updateSortValue:function(e){this.$store.commit("updateSortValue",e)}}};r("9c02");const te=g()(ee,[["render",f]]);var re=te,ce=(r("a434"),r("4e82"),r("5502")),ie=r("bfa9"),ne=new ie["a"]({storage:window.sessionStorage,reducer:function(e){return{sortValue:e.sortValue,products:e.products}}}),oe=Object(ce["a"])({plugins:[ne.plugin],state:function(){return{sortValue:window.sessionStorage.getItem("sortValue")||"",products:window.sessionStorage.getItem("products")||[{name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",img:r("f52d"),price:100},{name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",img:r("f52d"),price:1e3},{name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",img:r("f52d"),price:1e4},{name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",img:r("f52d"),price:1e5},{name:"Наименование товара",description:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",img:r("f52d"),price:1e6}]}},getters:{products:function(e){return e.products},sortSelect:function(e){return e.sortValue}},mutations:{addProduct:function(e,t){e.products.push(t),this.commit("sortProducts")},deleteProduct:function(e,t){e.products.splice(t,1)},updateSortValue:function(e,t){e.sortValue=t,this.commit("sortProducts")},sortProducts:function(e){e.sortValue&&e.products.sort((function(t,r){return"min"===e.sortValue.value?t.price-r.price:"max"===e.sortValue.value?r.price-t.price:t.name.localeCompare(r.name)}))}}});Object(c["b"])(re).use(oe).mount("#app")},"74f5":function(e,t,r){"use strict";r("1930")},"8f8f":function(e,t,r){"use strict";r("06fc")},"9c02":function(e,t,r){"use strict";r("27b3")},c273:function(e,t,r){},ce09:function(e,t,r){"use strict";r("c273")},d905:function(e,t,r){e.exports=r.p+"img/image-placeholder.5dadfc75.png"},f52d:function(e,t,r){e.exports=r.p+"img/image.922e0c1b.png"}});
//# sourceMappingURL=app.bdbc8bbf.js.map