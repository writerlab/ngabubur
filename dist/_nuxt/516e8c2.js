(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{331:function(t,e,r){"use strict";r.r(e);var n=r(81),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{href:"#"}},[t._v("NavBar")]),t._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[t._v("Link")]),t._v(" "),r("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("Disabled")])],1),t._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),t._v(" "),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,r){"use strict";r.r(e);var n=r(31),o=(r(69),{name:"IndexPage",components:{Navbar:r(331).default},data:function(){return{items:[]}},mounted:function(){this.getProducts()},methods:{getProducts:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("Produk").select("\n          id, nama_produk, harga_produk, foto,\n          link_eksternal, kategori(kategori_produk)\n        ");case 2:r=e.sent,data=r.data,n=r.error,data&&(t.items=data),n&&pass;case 7:case"end":return e.stop()}}),e)})))()}}}),l=r(81),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("Navbar"),t._v(" "),r("div",{staticClass:"container"},[r("h1",{staticClass:"mb-5 mt-5"},[t._v("ngabubur")]),t._v(" "),r("div",{staticClass:"row mt-5 mb-5"},t._l(t.items,(function(e){return r("div",{key:e.id,staticClass:"col-md-4"},[r("div",{staticClass:"card mb-4"},[r("div",{staticClass:"card-header p-0"},[r("img",{attrs:{src:e.foto,width:"100%",height:"400px",alt:"",srcset:""}})]),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"badge badge-danger"},[t._v(t._s(e.kategori.kategori_produk))]),t._v(" "),r("div",{staticClass:"heading-5"},[t._v(t._s(e.nama_produk))]),t._v(" "),r("h5",[t._v("Rp"+t._s(e.harga_produk))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("NuxtLink",{staticClass:"btn btn-danger btn-block",attrs:{to:e.link_eksternal}},[t._v(" beli ")])],1)])])})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(331).default})}}]);