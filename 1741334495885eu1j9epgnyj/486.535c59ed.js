"use strict";(self["webpackChunkcc_web_client"]=self["webpackChunkcc_web_client"]||[]).push([[486],{22526:function(t,i,e){e.r(i),e.d(i,{default:function(){return h}});var a=e(79029),s=function(){var t=this,i=t._self._c;return i(a.A,{ref:"boxIds",staticClass:"activity_box container",attrs:{app:""}},[i("div",{staticClass:"page activity_list"},[t.skeleton?[i("space-ui",{staticStyle:{width:"100%"},attrs:{sign:"activity_list"}})]:t._l(t.activityList,(function(e,a){return i("div",{key:a,staticClass:"activity_list_item",on:{click:function(i){return t.onDetail(e)}}},[i("div",{staticClass:"activity_item column_flex",staticStyle:{"align-items":"flex-start"}},[e.img_src?i("img",{staticClass:"activity_item_img",attrs:{src:e.img_src,alt:""}}):i("space-ui",{staticStyle:{width:"100%"},attrs:{sign:"activity_img"}}),e.mobile_title?i("div",{staticClass:"column_title"},[t._v(t._s(e.mobile_title))]):t._e()],1)])}))],2)])},c=[],_=e(95353),n=e(40026),r=e(35703),o={name:"activity",components:{spaceUi:r.A},mixins:[n.A],data(){return{skeleton:!1,activityList:[]}},computed:{...(0,_.aH)("base",["user","languageType","isApp"]),...(0,_.aH)("source",["rechargeInfo"])},watch:{rechargeInfo:{handler(t={}){this.skeleton=!0;const i=Object.keys(t).map((i=>({...t[i],img_src:""})));this.activityList=i.filter((t=>1==t.switch)).sort(((t,i)=>i.page_sort>t.page_sort?1:-1)),this.skeleton=!1,this.onLoad()},deep:!0,immediate:!0}},methods:{onLoad(){this.activityList.forEach((async t=>{const i=await this.$u.isImgLoad(t.entrance_img).catch((t=>t));i&&(t.img_src=t.entrance_img)}))},onDetail(t={}){const{act_id:i=0}=t;i&&this.$router.push({name:"activityDetail",query:{act_id:i}})}}},l=o,p=e(845),g=(0,p.A)(l,s,c,!1,null,"e0d0e13a",null),h=g.exports},65236:function(t,i){i.A={game_wrapper_space:"10",game_wrapper_app_space:"8",grid_space:"10",grid_space_app:"6",icon_search_size:"14",search_field_height:"36",group_icon_size:"16",pesquisa_img_width:"128",pesquisa_img_height:"176",xs_pesquisa_img_width:"88",xs_pesquisa_img_height:"121",search_tabs_height:"48",search_tabs_color:"#fff",lobby_box_padded:"16",xs_lobby_box_padded:"16",game_recent_indiv_app:"5",game_recent_indiv_pc:"8",game_recent_spacing_app:"12",game_recent_spacing_pc:"16","v-btn-wrap":"bwaAu2Sv4yUOUEvQDGsn","v-btn__content":"Ob43ReYVJrURfhuav8gB"}}}]);
//# sourceMappingURL=486.535c59ed.js.map