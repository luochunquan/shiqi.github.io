"use strict";(self["webpackChunkcc_web_client"]=self["webpackChunkcc_web_client"]||[]).push([[723],{7530:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var i=s(79029),a=s(16557),r=s(77068),n=function(){var e=this,t=e._self._c;return t(i.A,{ref:"boxIds",staticClass:"featured_box"},[t("div",{staticClass:"featured_top"},[t("site-map",{attrs:{title:e.name},on:{"click-left":e.doBack}}),t("div",{staticClass:"featured_search"},[t(r.A,{staticClass:"search-field input_radius",attrs:{"background-color":"t_input_light_bg",outlined:"",placeholder:e.$t("General.General_5"),height:e.loadVariables("search_field_height"),"hide-details":"","single-line":"",solo:"",flat:"",dense:""},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}},[t("template",{slot:"prepend-inner"},[t("icon-font",{staticClass:"prepend-icon",attrs:{name:"icon-Icon_Search",size:e.loadVariables("icon_search_size")}})],1)],2)],1)],1),e.isSkeleton?t("space-ui",{attrs:{sign:"grid_list"}}):e.newList.length?[t("game-grid",{attrs:{list:e.newList.slice(0,e.pageSize)},on:{toGame:e.toGame}}),t("footer",{staticClass:"featured_pagination"},[t("div",{staticClass:"progress_w"},[t(a.A,{attrs:{color:"t_process_dark_piece","background-color":"t_process_dark_bg",rounded:"",value:100*parseFloat(e.pageSize/e.newList.length).toFixed(2)}})],1),t("div",{staticClass:"featured_tips"},[e._v(e._s(e.tips))]),e.pageSize<e.newList.length?t("button",{staticClass:"btn--theme",on:{click:e.goNext}},[e._v(" "+e._s(e.$t("General.General_8"))+" ")]):e._e()])]:t("empty")],2)},o=[],c=s(95353),l=s(5854),h=s(61384),d=s(40026),u=s(35703),p=s(61410),g=(s(82503),s(2632)),_=s(65236),m=s(21914);let f=[];var w={name:"GameFeatured",components:{GameGrid:l.A,spaceUi:u.A,Empty:p.A,SiteMap:g.A},mixins:[d.A],data(){return{pageSize:h._e,keywords:"",gameDialog:!1,gameUrl:"",newList:[],isFactory:!1,isSkeleton:!0}},computed:{...(0,c.aH)("base",["user","isApp","systemConfig","languageType","dataVersion"]),...(0,c.aH)("source",["collectGames","recent","gamelist","otherFactory"]),name(){return this.$route.query.type_name},tips(){if(this.pageSize<this.newList.length){const e=this.newList.length<h._e?this.newList.length:this.pageSize,t=this.newList.length;return this.$t("UI_outros_tip",{X:e,Y:t})}return this.$t("UI_outros_noMore")}},watch:{keywords(e){this.search(e)}},async created(){this.isSkeleton=!0;const{render:e,factory_id:t}=this.$route.query;"factory"===e?(this.isFactory=!0,await this.initFactoryGames(t)):this.newList=this.gamelist,setTimeout((()=>{this.isSkeleton=!1}),500)},methods:{...(0,c.L8)("source",["getExperienceAuth"]),loadVariables(e){return _.A[e]},async initFactoryGames(e){m.A.findGameFactory(e).then((e=>{f=e,this.newList=e}))},search(e){this.isSkeleton=!0;const t=this.isFactory?f:this.gamelist;e?this.$u.debounce((()=>{const s=t.filter((t=>t.gameName.toUpperCase().indexOf(e.trim().toUpperCase())>-1));this.newList=s})):this.newList=t,this.pageSize=h._e,setTimeout((()=>{this.isSkeleton=!1}),500)},doBack(){this.$router.go(-1)},goNext(){this.pageSize<this.newList.length&&(this.pageSize+=h._e)},toGame(e={}){this.$store.dispatch("game/enterTheGame",{game:e,vm:this,manufacturer:{factoryIsShow:this.$route.query.factoryIsShow}})}}},y=w,k=s(845),S=(0,k.A)(y,n,o,!1,null,"4ed5d996",null),b=S.exports}}]);
//# sourceMappingURL=723.50b1451f.js.map