webpackJsonp([1],{APmp:function(t,e){},MIUz:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=(a("hoPU"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}),s=a("VU/8")({name:"app"},i,!1,function(t){a("ofZb")},null,null).exports,o=a("/ocq"),r={data:function(){return{isShowMenu:!0}},methods:{clickNav:function(){var t=this;setTimeout(function(){t.isShowMenu=!1},1e3)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isShowMenu?a("nav",{staticClass:"main_nav"},[a("ul",[a("li",{attrs:{id:"menu_ava"},on:{click:t.clickNav}},[a("img",{attrs:{src:"http://res.cloudinary.com/dux5eshko/image/upload/v1514773331/common/muox9hwdcksr1kpfs1qj.jpg",alt:""}})]),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:"Index.blank"},id:"home"}},[a("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",[t._v("Home")])])],1),t._v(" "),a("li",{on:{click:t.clickNav}},[a("router-link",{attrs:{to:{name:"Index.about"},id:"about"}},[a("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",[t._v("About")])])],1),t._v(" "),a("li",{on:{click:t.clickNav}},[a("router-link",{attrs:{to:{name:"Index.skills"},id:"skills"}},[a("i",{staticClass:"fa fa-graduation-cap",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",[t._v("Skills")])])],1),t._v(" "),a("li",{on:{click:t.clickNav}},[a("router-link",{attrs:{to:{name:"Index.blog"},id:"blog"}},[a("i",{staticClass:"fa fa-bullhorn",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",[t._v("Blog")])])],1),t._v(" "),a("li",{on:{click:t.clickNav}},[a("router-link",{attrs:{to:{name:"Index.pin"},id:"pin"}},[a("i",{staticClass:"fa fa-thumb-tack",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",[t._v("Pin")])])],1),t._v(" "),a("li",{on:{click:t.clickNav}},[a("router-link",{attrs:{to:{name:"Index.upload"},id:"upload"}},[a("i",{staticClass:"fa fa-upload",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",[t._v("Upload")])])],1),t._v(" "),a("li",{on:{click:t.clickNav}},[a("router-link",{attrs:{to:{name:"Index.contact"},id:"contact"}},[a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",[t._v("Contact")])])],1)])]):a("p",{staticClass:"icon_menu"},[a("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"},on:{click:function(e){t.isShowMenu=!0}}})])},staticRenderFns:[]},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right_social"},[a("a",{attrs:{href:t.messenger,target:"_blank"}},[a("i",{staticClass:"fa fa-comments",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{attrs:{href:t.facebook,target:"_blank"}},[a("i",{staticClass:"fa fa-facebook-official",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{attrs:{href:t.instagram,target:"_blank"}},[a("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{attrs:{href:t.github,target:"_blank"}},[a("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{attrs:{href:t.twitter,target:"_blank"}},[a("i",{staticClass:"fa fa-twitter-square",attrs:{"aria-hidden":"true"}})])])},staticRenderFns:[]},h={components:{Navigation:a("VU/8")(r,l,!1,function(t){a("OZ/I")},"data-v-fe0d8e5e",null).exports,Social:a("VU/8")({data:function(){return{messenger:"http://m.me/100002857163708",facebook:"http://fb.com/0.anhsang.0",instagram:"https://www.instagram.com/_te.ng_/",github:"https://github.com/my0sot1s",twitter:"https://twitter.com/my0sot1ss"}}},c,!1,null,null,null).exports},data:function(){return{isModalOpen:!1,modal:null,routerName:this.$router,modal_content:null,mang1:["https://i.imgur.com/CxD4ZNw.jpg","static/img/home_bg.jpg","https://i.imgur.com/Ks44lpb.jpg"],mang2:["https://i.imgur.com/FZZGhEk.jpg","https://i.imgur.com/79QJ0Iz.jpg","https://i.imgur.com/UyZC2mI.jpg","https://i.imgur.com/zL7SYHl.jpg","https://i.imgur.com/mMdeMF6.jpg","https://i.imgur.com/sZSZeHz.jpg"]}},methods:{rand:function(t){return Math.floor(Math.random()*(t-0+1))+0},$:function(t){return document.getElementById(t)},_:function(t){return document.getElementsByClassName(t)},_setAnimate:function(t,e,a,n){this.isModalOpen=!1,"function"==typeof n&&n(),e.style["animation-name"]=a,e.style["-webkit-animation-name"]=a},_updateHeader:function(t,e,a,n){setTimeout(function(){document.title=e+" - Nguyễn Mạnh Tể",document.querySelector('meta[name="description"]').content=e+" - Nguyễn Mạnh Tể",n()},50)}},watch:{$route:function(t){var e=this;"Index.blank"===t.name?this.isModalOpen=!1:this._setAnimate(this.modal,this.modal_content,t.meta.effect,function(){e._updateHeader(e.modal,t.meta.title,"",function(){e.isModalOpen=!0})})}},mounted:function(){this.modal=this.$("myModal"),this.modal_content=this.$("modal_content");var t=window.location.href.split("#");t[1]&&"/"!==t[1]&&(this.isModalOpen=!0),document.body.style="background-image: url("+this.mang1[this.rand(this.mang1.length-1)]+");";var e=this._("right_bar")[0],a=new Date;e.insertAdjacentHTML("beforeend","<h2>"+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()]+"</h2>"),e.insertAdjacentHTML("beforeend","<h2>"+a.getDate()+"</h2>"),e.insertAdjacentHTML("beforeend","<h2>"+["January","February","March","April","May","June","July","August","September","October","November","December"][a.getUTCMonth()]+"</h2>"),e.insertAdjacentHTML("beforeend","<h2>"+a.getFullYear()+"</h2>");var n=this._("right_clock")[0];setInterval(function(){var t,e=a.getHours(),i=a.getMinutes(),s=a.getSeconds();e=e<10?"0"+e:e,i=i<10?"0"+i:i,s=s<10?"0"+s:s,t="<h2>"+e+":"+i+"</h2>",n.innerHTML=t},1e3)}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_page"},[a("navigation"),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"right_bar"}),t._v(" "),a("div",{staticClass:"right_clock"}),t._v(" "),a("social"),t._v(" "),a("div",{staticClass:"bottom_bar"},[t._v("\n    CSS3,JS,HTML5-<24/12/2017>~  - wkr:te-nguyen\n\n\n\n\n\n\n\n\n\n\n\n  ")]),t._v(" "),a("div",{staticClass:"modal",style:t.isModalOpen?{display:"block"}:{display:"none"},attrs:{id:"myModal"}},[a("div",{staticClass:"modal-content",attrs:{id:"modal_content"}},[a("div",{staticClass:"modal-header"},[a("span",{staticClass:"close",on:{click:function(e){t.isModalOpen=!1}}},[t._v("×")])]),t._v(" "),a("div",{staticClass:"modal-body",attrs:{id:"main_body"}},[a("router-view")],1),t._v(" "),a("div",{staticClass:"modal-footer"})])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"main_content"},[e("div",{staticClass:"cv_name"},[e("div",[this._v("Nguyễn Mạnh Tể")])]),this._v(" "),e("h4",[this._v("Developer full stack")]),this._v(" "),e("p",{staticClass:"introduce"},[this._v("\n      Sự tử tế không nằm trong lời nói, mà nằm ở suy nghỉ và hành động"),e("br"),this._v("\n      Suy nghĩ thì bạn không thể thấy \n      "),e("br"),this._v("Nên hãy hành động\n      ")]),this._v(" "),e("ul",{staticClass:"phim_nhan"},[e("li",[e("a",{staticClass:"hire",attrs:{href:"http://fb.com/0.anhsang.0"}},[this._v("Hire me")])]),this._v(" "),e("li",[e("a",{staticClass:"hire",attrs:{href:"https://drive.google.com/open?id=0BxNx6QRuIMWaNFgwS0g1Mk1HVjg",target:"_blank"}},[this._v("DOC CV")])])])])}]},u=a("VU/8")(h,d,!1,null,null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"content_header"},[e("h1",[e("i",{staticClass:"fa fa-podcast",attrs:{"aria-hidden":"true"}}),this._v(" About "),e("i",{staticClass:"fa fa-podcast",attrs:{"aria-hidden":"true"}}),e("span",[e("div",{staticClass:"th_hr"})])])]),this._v(" "),e("div",{staticClass:"introduce_note"},[this._v("\n    Mình tên là N.M Tể mình sinh ra và lớn lên tại Quảng Bình. Mình theo học khoa CNTT đại học Lê Quý Đôn. Chuyên ngành mình\n    chọn là công nghệ phần mềm. Mong muốn của mình là trở thành Full-Stacker. ^-^\n  ")]),this._v(" "),e("div",{staticClass:"content_center"},[e("table",{staticClass:"tb"},[e("tr",[e("td",[this._v("Name:")]),this._v(" "),e("td",[this._v("Nguyễn Mạnh Tể")])]),this._v(" "),e("tr",[e("td",[this._v("Born:")]),this._v(" "),e("td",[this._v("19/05/1995")])]),this._v(" "),e("tr",[e("td",[this._v("Job:")]),this._v(" "),e("td",[this._v("$_$")])]),this._v(" "),e("tr",[e("td",[this._v("Address:")]),this._v(" "),e("td",[this._v("Ngõ 1 Phạm Văn Đồng, Nam Từ Liêm, Hà Nội")])]),this._v(" "),e("tr",[e("td",[this._v("Phone")]),this._v(" "),e("td",[this._v("+(84) 167 314 0510")])]),this._v(" "),e("tr",[e("td",[this._v("Email")]),this._v(" "),e("td",[e("a",{attrs:{href:"mailto:manhte231@gmail.com"}},[this._v("manhte231@gmail.com")])])]),this._v(" "),e("tr",[e("td",[this._v("Đây là ảnh mình:")]),this._v(" "),e("td",[this._v("--------------------------------------\x3e")])])]),this._v(" "),e("div",{staticClass:"img_introduce"},[e("div",{staticClass:"images"},[e("img",{staticClass:"image",attrs:{src:"static/img/b4.JPG"}}),this._v(" "),e("img",{staticClass:"image",attrs:{src:"static/img/b3.png"}}),this._v(" "),e("img",{staticClass:"image",attrs:{src:"static/img/b5.JPG"}}),this._v(" "),e("img",{staticClass:"image",attrs:{src:"static/img/b2.JPG"}}),this._v(" "),e("img",{staticClass:"image",attrs:{src:"static/img/b7.JPG"}}),this._v(" "),e("img",{staticClass:"image",attrs:{src:"static/img/anh3.jpg"}})])])]),this._v(" "),e("div",{staticClass:"cham_ngon"},[this._v("\n    Nếu bạn sống lâu, bạn sẽ mắc phải những sai lầm. Nhưng nếu bạn học được từ những sai lầm đó, bạn sẽ trở nên tốt hơn. Dù bạn\n    đối phó với nghịch cảnh theo cách nào, điều không quan trọng. Điều quan trọng là bạn không bao giờ, không bao giờ, không\n    bao giờ từ bỏ.\n  ")])])}]},v=a("VU/8")({},p,!1,null,null,null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"content_header"},[e("h1",[e("i",{staticClass:"fa fa-ravelry",attrs:{"aria-hidden":"true"}}),this._v(" Skills "),e("i",{staticClass:"fa fa-ravelry",attrs:{"aria-hidden":"true"}}),e("span",[e("div",{staticClass:"th_hr"})])])]),this._v(" "),e("div",{staticClass:"skills_header"},[this._v("\n    PROGRAMMING LANGUAGES THAT I WORK WITH\n  ")]),this._v(" "),e("table",{staticClass:"skills_table"},[e("tr",[e("td",[this._v("\n        Mình có sở thích là thiết kế website. Mình chủ yếu tự học và tham khảo các nguồn trên web để tự trang bị kiến thức cho mình.\n        ♥ Cho nên là còn nhiều thiếu sót ha. Mình thích NodeJs và React-Native nói chung là Js ahihi. Mình đã thực tập\n        và có được chút kinh nghiệm và đây là CV của mình. Còn nhiều thiếu sót mình sẽ update trong blog hihi . Dự định sau\n        khi ra trường sẽ cố gắng chen chân trong ngành. Ngoài ra mình có thể làm các app với React-Native.\n        Có khả năng làm việc với VueJS và golang. Kỹ năng còn khiêm\n        tốn mong mọi người chỉ bảo thêm ạ. ♥ ♥")]),this._v(" "),e("td",[this._v("\n        HTML5\n        "),e("div",{staticClass:"progress"},[e("div",{staticClass:"bar",attrs:{id:"html5"}})]),this._v("\n        CSS3\n        "),e("div",{staticClass:"progress"},[e("div",{staticClass:"bar",attrs:{id:"css3"}})]),this._v("\n        JS/JQ/REACT-JS/Vue\n        "),e("div",{staticClass:"progress"},[e("div",{staticClass:"bar",attrs:{id:"js"}})]),this._v("\n        JS/NODE\n        "),e("div",{staticClass:"progress"},[e("div",{staticClass:"bar",attrs:{id:"node"}})]),this._v("\n        C/C++\n        "),e("div",{staticClass:"progress"},[e("div",{staticClass:"bar",attrs:{id:"c"}})])])])]),this._v(" "),e("div",{staticClass:"skills_header service"},[this._v("\n    SERVICES THAT I PROVIDE\n  ")]),this._v(" "),e("table",{staticClass:"service_table"},[e("tr",[e("td",{staticClass:"service_table_td"},[e("i",{staticClass:"fa fa-pagelines",attrs:{"aria-hidden":"true"}}),this._v(" WEB DESIGN & UI\n      "),e("p",[this._v("Thiết kế mẫu website các loại trên nền html5,css3,js...Thiết kế UI theo designer hoặc tự design")])]),this._v(" "),e("td",{staticClass:"service_table_td"},[e("i",{staticClass:"fa fa-server",attrs:{"aria-hidden":"true"}}),this._v(" SERVER DESIGN\n      "),e("p",[this._v("Tạo và dựng server trên nền nodeJS hoặc C#. Dựng api và kết nối api tới client tương ứng.")])]),this._v(" "),e("td",{staticClass:"service_table_td"},[e("i",{staticClass:"fa fa-database",attrs:{"aria-hidden":"true"}}),this._v(" DB R-SQL/NO-SQL\n      "),e("p",[this._v("Xây dựng CSDL quan hệ MS-SQL or MY-SQL và CSDL không quan hệ NO-SQL MongoDb, Redis...")])]),this._v(" "),e("td",{staticClass:"service_table_td"},[e("i",{staticClass:"fa fa-microchip",attrs:{"aria-hidden":"true"}}),this._v(" APPLICATION DESKTOP\n      "),e("p",[this._v("Xây dựng các ứng dụng C# or Qt C++ hay ứng dụng Electron dễ dàng nhanh chóng")])])])]),this._v(" "),e("div",{staticClass:"count_skill"},[this._v("\n    NUMBERS THAT I'M PROUD OF\n  ")]),this._v(" "),e("table",{staticClass:"count_table"},[e("tr",[e("td",[e("h1",[this._v("10+")]),this._v(" "),e("p",{staticClass:"count_note_text"},[this._v("Project release on my github. And run 4 node API on heroku app, and app for some companys")])]),this._v(" "),e("td",[e("h1",[this._v("3+")]),this._v(" "),e("p",{staticClass:"count_note_text"},[this._v("Small App React-Native done!!")])]),this._v(" "),e("td",[e("h1",[this._v("2+")]),this._v(" "),e("p",{staticClass:"count_note_text"},[this._v("C++ app with machine learning")])])])])])}]},_=a("VU/8")({},m,!1,null,null,null).exports,g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"content_header"},[e("h1",[e("i",{staticClass:"fa fa-envelope-open",attrs:{"aria-hidden":"true"}}),this._v(" Contact "),e("i",{staticClass:"fa fa-envelope-open",attrs:{"aria-hidden":"true"}}),e("span",[e("div",{staticClass:"th_hr"})])])]),this._v(" "),e("div",{staticClass:"contact"},[this._v("\n    Liên Lạc với Tôi??\n\n  ")]),this._v(" "),e("table",{staticClass:"contact_table"},[e("tr",[e("td",[e("i",{staticClass:"fa fa-envelope-o",attrs:{"aria-hidden":"true"}})]),this._v(" "),e("td",[this._v("SEND ME AN EMAIL")]),this._v(" "),e("td",[e("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}})]),this._v(" "),e("td",[this._v("PAY ME A VISIT")]),this._v(" "),e("td",[e("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})]),this._v(" "),e("td",[this._v("MY NUMBER")])]),this._v(" "),e("tr",[e("td"),this._v(" "),e("td",[this._v("manhte231@gmail.com")]),this._v(" "),e("td"),this._v(" "),e("td",[this._v("Ngõ 1-Phạm Văn Đồng- Nam Từ Liêm - Hà Nội")]),this._v(" "),e("td"),this._v(" "),e("td",[this._v("(+84) 167 314 0510")])])]),this._v(" "),e("div",{staticClass:"contact_mail"},[this._v("\n    Gửi Feedback cho tôi!!\n\n  ")]),this._v(" "),e("div",{staticClass:"contact_form"},[e("div",{staticClass:"contact_top"},[e("input",{attrs:{type:"text",id:"input-name",placeholder:"Name"}}),this._v(" "),e("input",{attrs:{type:"email",id:"input-email",placeholder:"Email address"}}),this._v(" "),e("input",{attrs:{type:"text",id:"input-subject",placeholder:"Subject"}})]),this._v(" "),e("div",{staticClass:"contact_bot"},[e("textarea",{attrs:{name:"message",type:"text",id:"input-message",placeholder:"Message",cols:"100",rows:"30"}})]),this._v(" "),e("input",{attrs:{type:"button",value:"Submit",onclick:"sendAnEmail();",id:"input-submit"}})])])}]},f=a("VU/8")({},g,!1,null,null,null).exports,C=a("Gu7T"),b=a.n(C),k=a("mtWM"),y=a.n(k),x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader"},[e("div",{staticClass:"pacman"}),this._v(" "),e("div",{staticClass:"dot"})])}]},S=a("VU/8")({},x,!1,null,null,null).exports,w={data:function(){return{data:[],limit:5,page:0,lock:!1,loader:!0}},components:{Loader:S},methods:{fetcher:function(t){var e=this;"append"!==t&&(this.loader=!0),y.a.get("https://te-nguyen.herokuapp.com/api/Blog/getBlogInfo?limit="+this.limit+"&page="+this.page).then(function(a){var n=a.data;if(n.data.length&&0!==n.data.length){var i;"append"===t?(i=e.data).push.apply(i,b()(n.data)):e.data=n.data}else e.lock=!0}).then(function(){setTimeout(function(){e.loader=!1},500)}),console.log(this.data)}},mounted:function(){var t=this;this.fetcher();var e=document.getElementById("main_body");e.onscroll=function(){var a=e.scrollTop,n=e.scrollHeight-e.clientHeight,i=window.location.href.split("#");2===i.length&&"/blog"===i[1]&&a/n>.75&&!t.lock&&(t.page++,t.fetcher("append"))}}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loader?a("loader",{staticStyle:{display:"block"}}):a("div",[a("div",{staticClass:"content_header"},[a("h1",[a("i",{staticClass:"fa fa-heartbeat",attrs:{"aria-hidden":"true"}}),t._v(" Blog "),a("i",{staticClass:"fa fa-heartbeat",attrs:{"aria-hidden":"true"}}),a("span",[a("div",{staticClass:"th_hr"})])])]),t._v(" "),a("div",{staticClass:"introduce_note"},[t._v("\n    Memory Post - Parallax ScrollView & Auto Scroll Load more ♥\n\n\n\n\n  ")]),t._v(" "),a("div",{staticClass:"blog_container"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"block_main blog_main_bar",style:"background-image: url("+e.link+")"},[a("div",{staticClass:"blog_time"},[t._v("Time: "+t._s(e.dateCreate))]),t._v(" "),a("div",{staticClass:"blog_big_text big_text_title"},[t._v(t._s(e.title))]),t._v(" "),a("router-link",{staticClass:"blog_readMore",attrs:{to:{name:"Index.post",query:{id:e.id}}}},[t._v("\n        Read more\n\n\n\n\n      ")])],1)}))])},staticRenderFns:[]},N=a("VU/8")(w,I,!1,null,null,null).exports,M={data:function(){return{data:[]}},methods:{fetcher:function(t){var e=this;y.a.get("https://te-nguyen.herokuapp.com/api/Blog/getBlogById?id="+t).then(function(t){var a=t.data;e.data=a.data})}},mounted:function(){this.fetcher(this.$route.query.id)}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{staticClass:"introduce_note"},[this._v("\n    "+this._s(this.data.title)+"\n  ")]),this._v(" "),e("div",{staticClass:"blog_container"},[e("div",{staticClass:"block_main"},[e("div",{staticClass:"per_blog",style:"background:url("+this.data.link+");background-size: cover;"},[e("div",{staticClass:"per_gradien"})]),this._v(" "),e("div",{staticClass:"blog_big_text per_title"},[this._v(this._s(this.data.tag))]),this._v(" "),e("div",{staticStyle:{"padding-top":"3px","padding-bottom":"3px"}}),this._v(" "),e("div",{staticClass:"blog_post",domProps:{innerHTML:this._s(this.data.content)}}),this._v(" "),e("div",{staticClass:"end-post"})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content_header"},[e("h1",[this._v("♥ ♥ Blog ♥ ♥"),e("span",[e("div",{staticClass:"th_hr"})])])])}]},E=a("VU/8")(M,T,!1,null,null,null).exports,A={data:function(){return{header:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},data:[],title:"",content:"",loader:!0}},components:{Loader:S},methods:{dragElement:function(t,e,a){function n(t){t=t||window.event,l=t.clientX,c=t.clientY,document.onmouseup=s,document.onmousemove=i}function i(e){e=e||window.event,o=l-e.clientX,r=c-e.clientY,l=e.clientX,c=e.clientY,t.style.top=t.offsetTop-r+"px",t.style.left=t.offsetLeft-o+"px"}function s(){document.onmouseup=null,document.onmousemove=null}var o=e,r=a,l=20,c=220;document.getElementById(t.id+"header")?(t.style.top=t.offsetTop+r+"px",t.style.left=t.offsetLeft+o+"px",document.getElementById(t.id+"header").onmousedown=n):t.onmousedown=n},saveNote:function(){var t=this;this.title&&this.content?y.a.post("https://te-nguyen.herokuapp.com/api/Pin/createNewPin","title="+encodeURIComponent(this.title)+"&content="+encodeURIComponent(this.content),{header:this.header}).then(function(e){var a=e.data;t.data.unshift(a.data)}):alert("Thieu!!")},popupDelete:function(t){var e=this;confirm("Delete??")&&y.a.delete("https://te-nguyen.herokuapp.com/api/Pin/deletePin",{header:this.header,data:"id="+encodeURIComponent(t)}).then(function(){e.data.map(function(a,n){a.id===t&&e.data.slice(n,1)})})}},created:function(){var t=this;y.a.get("https://te-nguyen.herokuapp.com/api/Pin/getPin").then(function(e){var a=e.data;t.data=a.data}).then(function(){t.data.map(function(e,a){var n=Math.floor(a/2);a%2==0?t.dragElement(document.getElementById(e.id),200,375*n-250):t.dragElement(document.getElementById(e.id),600,375*n-250)})})}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"10px","min-height":"2000px"}},[t._m(0),t._v(" "),a("div",{staticClass:"form_pin"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Title.."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{placeholder:"Content...",cols:"60",rows:"10"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),a("button",{on:{click:t.saveNote}},[t._v("Save Note")])]),t._v(" "),t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"myDiv",attrs:{id:e.id}},[a("div",{staticClass:"myDivHeader",attrs:{id:e.id+"header"}},[t._v("\n      "+t._s(e.title)+" - "+t._s(new Date(e.created).toISOString().slice(0,10).replace(/-/g,"-"))+" "),a("span",[t._v(" ✎")]),t._v(" "),a("span",{on:{click:function(a){t.popupDelete(e.id)}}},[t._v(" ✕")])]),t._v(" "),a("p",{domProps:{innerHTML:t._s(e.content)}})])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"create_pen"},[this._v("Pin Note"),e("span",[this._v(" ✎")])])}]},D=a("VU/8")(A,U,!1,function(t){a("APmp")},"data-v-067af76a",null).exports,P=a("BO1k"),j=a.n(P),R=a("//Fk"),B=a.n(R),L=a("c/Tr"),$=a.n(L),H=a("Xxa5"),O=a.n(H),F=a("exGp"),V=a.n(F),J={data:function(){return{isShowDragBox:!1,isUploading:!1,listImage:[],loadding:!1,limit:3,page:1,loader:!0,txtUrl:null,txtSearch:null,lock:!1}},components:{Loader:S},methods:{fetcher:function(){var t=V()(O.a.mark(function t(e){var a,n=this;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"append"!==e?this.loader=!0:this.loadding=!0,t.next=3,y.a.get("https://te-nguyen.herokuapp.com/api/storage/getAll?limit="+this.limit+"&page="+this.page);case 3:(a=t.sent).data.data.length&&0!==a.data.data.length?"append"===e?(a.data.data.map(function(t){var e;(e=n.listImage).push.apply(e,b()(t.media))}),this.loadding=!1):(a.data.data.map(function(t){var e;(e=n.listImage).push.apply(e,b()(t.media))}),this.loader=!1):this.lock=!0;case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),onDrop:function(t){this.isShowDragBox=!0,t.stopPropagation(),t.preventDefault();var e=t.dataTransfer.files;this.checkFile(e)},submitLink:function(){var t=this;this.txtUrl&&/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/.test(this.txtUrl)?y.a.post("https://te-nguyen.herokuapp.com/api/storage/uploadWithUrl","url="+encodeURIComponent(this.txtUrl),{headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){var a,n=e.data;(a=t.listImage).unshift.apply(a,b()(n.data.media)),t.isShowDragBox=!1,t.txtUrl=null}).catch(function(t){console.log(t)}):alert("invalid data!")},checkFile:function(t){var e=this,a=new FormData,n=new FormData,i=0,s=0,o=[];this.isUploading=!0,$()(t).forEach(function(t){/\.(jpe?g|png|gif|bmp)$/i.test(t.name)?(a.append("file",t,t.name),s++):/\.(mp3|mp4|ogg|3gp)$/i.test(t.name)&&(n.append("file",t,t.name),i++)}),s>0&&o.push(y.a.post("https://te-nguyen.herokuapp.com/api/storage/upload",a,{headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}})),i>0&&o.push(y.a.post("https://te-nguyen.herokuapp.com/api/storage/upload-video",n,{headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}})),B.a.all(o).then(function(t){var a=!0,n=!1,i=void 0;try{for(var s,o=j()(t);!(a=(s=o.next()).done);a=!0){var r,l=s.value;(r=e.listImage).unshift.apply(r,b()(l.data.data.media))}}catch(t){n=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}}).then(function(){e.isShowDragBox=!1})}},mounted:function(){var t=this;this.fetcher();var e=document.getElementById("main_body");e.onscroll=function(){var a=e.scrollTop,n=e.scrollHeight-e.clientHeight,i=window.location.href.split("#");2===i.length&&"/upload"===i[1]&&a/n>.75&&!t.lock&&(t.page++,t.fetcher("append"))}}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loader?a("loader",{staticStyle:{display:"block"}}):a("div",[a("h2",{staticStyle:{"margin-left":"40%"}},[t._v("Storage can save 300.000 images and 2 000 videos")]),t._v(" "),a("h5",{staticStyle:{"margin-left":"40%"}},[t._v("anyone allow auload")]),t._v(" "),a("div",{staticClass:"upload_search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txtSearch,expression:"txtSearch"}],attrs:{type:"text",placeholder:"Search",id:"txt_search"},domProps:{value:t.txtSearch},on:{input:function(e){e.target.composing||(t.txtSearch=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"upload_content"},[a("div",{staticClass:"upload_content_item",on:{dragover:function(e){e.preventDefault(),t.isShowDragBox=!0},drop:t.onDrop,dragleave:function(e){t.isShowDragBox=!1}}},[t.isShowDragBox?a("div",{staticClass:"upload_blank2"},[a("p",[t._v("Just Drop here!! `stupid`")]),t._v(" "),a("i",{staticClass:"fa fa-plus-square-o",attrs:{"aria-hidden":"true"}})]):a("div",{staticClass:"upload_blank"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.txtUrl,expression:"txtUrl"}],attrs:{type:"text",id:"upload_with_url",placeholder:"Add URL to upload ..."},domProps:{value:t.txtUrl},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.submitLink(e)},input:function(e){e.target.composing||(t.txtUrl=e.target.value)}}}),t._v(" "),a("i",{staticClass:"fa fa-upload",attrs:{"aria-hidden":"true"}}),t._v(" "),a("p",[t._v("1.Total size < 5mb || `reject` bitch")]),t._v(" "),a("p",[t._v("2. Can upload with link || `reject` idiot")]),t._v(" "),a("p",[t._v("3.Can upload single short video size < 7mb")])])]),t._v(" "),t._l(t.listImage,function(e,n){return a("div",{key:n,staticClass:"upload_content_item"},[/(jpg)|(jpge)|(gif)|(bmp)|(png)/.test(e.format)?a("img",{attrs:{src:e.url,alt:""}}):/(mp4)|(mp3)|(3gp)|(ogg)/.test(e.format)?a("video",{attrs:{width:"320",height:"240",controls:""}},[a("source",{attrs:{src:e.url,type:"video/"+e.format}}),t._v("\n        Your browser does not support the video tag.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      ")]):a("p",[t._v("t chua check cai nay")]),t._v(" "),/(jpg)|(jpge)|(gif)|(bmp)|(png)/.test(e.format)?a("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:e.url,target:"_blank"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v("\n          "+t._s(/.*\/(.*\.jpg)|(.*\.png)|(.*\.jpeg)|(.*\.bmp)$/.exec(e.url)[1]||"undefined"))])]):t._e(),t._v(" "),/(mp4)|(mp3)|(3gp)|(ogg)/.test(e.format)?a("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:e.url,target:"_blank"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(/.*\/(.*\.mp4)|(.*\.mp3)|(.*\.ogg)|(.*\.3gp)$/.exec(e.url)[1]||"undefined"))])]):t._e()])})],2)])},staticRenderFns:[]},G=a("VU/8")(J,q,!1,function(t){a("YlSC")},null,null).exports,Y=a("YpUo"),Q={methods:{initEditor:function(){Object(Y.init)({element:document.getElementById("pell"),onChange:function(t){return console.log(t)},styleWithCSS:!1,actions:["bold","italic","underline","strikethrough","heading1","heading2","paragraph","quote","olist","ulist","code","line","link","image"],classes:{actionbar:"pell-actionbar",button:"pell-button",content:"pell-content"}})}},mounted:function(){this.initEditor()}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("p",{staticClass:"form_tile"},[this._v("Nhập dữ liệu cho blog")]),this._v(" "),e("div",{attrs:{id:"pell"}}),this._v(" "),e("button",{staticClass:"saveBtn",on:{click:function(t){}}},[this._v(" Save ")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content_header"},[e("h1",[this._v(" Input "),e("span",[e("div",{staticClass:"th_hr"})])])])}]};a("VU/8")(Q,W,!1,function(t){a("MIUz")},null,null).exports;n.a.use(o.a);var Z=new o.a({routes:[{path:"/",name:"Index",component:u,children:[{path:"/",name:"Index.blank"},{path:"/about",name:"Index.about",component:v,meta:{effect:"animateright",title:"About | Te Nguyen"}},{path:"/skills",name:"Index.skills",component:_,meta:{effect:"animatetop",title:"Skills | Te Nguyen"}},{path:"/contact",name:"Index.contact",component:f,meta:{effect:"animateleft",title:"Contact | Te Nguyen"}},{path:"/blog",name:"Index.blog",component:N,meta:{effect:"bounceIn",title:"Blog | Te Nguyen"}},{path:"/post/:id",name:"Index.post",component:E,meta:{effect:"bounceIn",title:"Post | Te Nguyen"}},{path:"/pin",name:"Index.pin",component:D,meta:{effect:"bounceIn",title:"Pin | Te Nguyen"}},{path:"/upload",name:"Index.upload",component:G,meta:{effect:"animateleft",title:"Uploaded | Te Nguyen"}}]}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:Z,template:"<App/>",components:{App:s}})},"OZ/I":function(t,e){},YlSC:function(t,e){},hoPU:function(t,e){},ofZb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6dbca46fae8396aae1c8.js.map