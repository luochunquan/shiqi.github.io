"use strict";(self["webpackChunkcc_web_client"]=self["webpackChunkcc_web_client"]||[]).push([[41],{76777:function(t,i,s){s.r(i),s.d(i,{default:function(){return b}});var e=s(79029),a=function(){var t=this,i=t._self._c;return i(e.A,{ref:"boxIds",staticClass:"regression_container"},[t.isSkeleton?[i("space-ui",{staticStyle:{width:"100%"},attrs:{sign:"regression"}})]:[i("div",{staticClass:"page regression"},[i("div",{staticClass:"regression_title"},[i("div",{staticClass:"lt"},[t._v(t._s(t.$t("UI_Regression_Finisn_Text")))]),i("div",{staticClass:"rt"},[t.isDayShow?[i("div",{staticClass:"rt_day"},[i("div",{staticClass:"text"},[t._v(t._s(t.$t("UI_Regression_Remaining_Text")))]),i("div",{staticClass:"num"},[t._v(t._s(t.activityTime.day))]),i("div",{staticClass:"text"},[t._v(" "+t._s(Number(t.activityTime.day)>1?t.$t("UI_Regression_Days_Text"):t.$t("UI_Regression_Day_Text"))+" ")])])]:[i("div",{staticClass:"rt_hour"},[i("div",{staticClass:"num"},[t._v(t._s(t.activityTime.hh))]),i("div",{staticClass:"text"},[t._v(t._s(t.$t("UI_Regression_Hours_Text")))])]),i("div",{staticClass:"colon"},[t._v(" : ")]),i("div",{staticClass:"rt_min"},[i("div",{staticClass:"num"},[t._v(t._s(t.activityTime.mm))]),i("div",{staticClass:"text"},[t._v(t._s(t.$t("UI_Regression_Min_Text")))])]),i("div",{staticClass:"colon"},[t._v(" : ")]),i("div",{staticClass:"rt_sec"},[i("div",{staticClass:"num"},[t._v(t._s(t.activityTime.ss))]),i("div",{staticClass:"text"},[t._v(t._s(t.$t("UI_Regression_Sec_Text")))])])]],2)]),Object.keys(t.activityB).length>0?[i("div",{staticClass:"regression_task"},[i("div",{staticClass:"task_explain_text"},[t._v(t._s(t.activityB.content||""))]),t.activityBList.length>0?[i("div",{staticClass:"regression_task_list"},t._l(t.activityBList,(function(s,e){return i("div",{key:e,staticClass:"task_item",on:{click:function(i){return t.onActivityReceive({day_index:e+1,action_type:t.activityB.action_type,inside_data:t.activityB.inside_data,back_task_join_id:t.activityB.back_task_join_id,...s})}}},[i("div",{staticClass:"task_item_img"},[i("img",{attrs:{src:t.loadIcon("regression_box"),alt:""}}),1==s.is_finish?[i("img",{staticClass:"task_item_light_img",attrs:{src:t.loadIcon("regression_box_light"),alt:""}})]:t._e(),e==t.activityBList.length-1?[i("div",{staticClass:"task_item_bg_one"}),i("div",{staticClass:"task_item_bg_two"}),i("div",{staticClass:"task_item_bg_three"})]:t._e(),0==s.is_finish?[i("div",{staticClass:"task_item_not"},[i("icon-font",{attrs:{name:"icon-Icon_Lock",size:t.ommonStyle(t.isApp?"regression_item_icon_app_size":"regression_item_icon_pc_size"),dark:t.ommonStyle(t.isApp?"regression_item_icon_app_color":"regression_item_icon_pc_color")}})],1)]:t._e()],2),i("div",{staticClass:"task_item_money"},[i("img",{staticClass:"task_item_money_chip",attrs:{src:t.loadIcon("regression_chip"),alt:""}}),i("span",{staticClass:"task_item_money_text"},[t._v(" "+t._s(t.currencySymbol)+t._s(s.gold||0))])]),2==s.is_finish?[i("div",{staticClass:"task_item_make"}),i("img",{staticClass:"task_item_success",attrs:{src:t.loadIcon("regression_box_success"),alt:""}})]:t._e()],2)})),0)]:t._e()],2)]:t._e(),i("div",{staticClass:"activity_list"},t._l(t.activityList,(function(s){return i("div",{key:s.action_type,staticClass:"activity_item"},[i("div",{staticClass:"activity_item_title"},[t._v(t._s(s.content||""))]),i("div",{staticClass:"activity_item_line"},[i("div",{staticClass:"activity_item_line_lt"},[i("span",{staticClass:"lt_text"},[t._v(t._s(s.cur_val)+"/"+t._s(s.target_val))]),i("div",{staticClass:"lt_speed"},[i("div",{staticClass:"lt_speed_slider",style:`\n\t\t\t\t\t\t\t\t\t\t\twidth: ${100*((s.cur_val||0)/(s.target_val||0)>1?1:(s.cur_val||0)/(s.target_val||0))}%;\n\t\t\t\t\t\t\t\t\t\t`})])]),i("div",{staticClass:"activity_item_line_rt"},[i("div",{directives:[{name:"zoom",rawName:"v-zoom"}],staticClass:"regression_complete_btn",class:{complete:1==s.is_finish,disabled:0==s.is_finish,received:2==s.is_finish},on:{click:function(i){return t.onActivityReceive(s)}}},[i("auto-font",{attrs:{uuid:"regressionBtnId",maxFont:t.ommonStyle(t.isApp?"regression_item_line_rt_btn_app_size":"regression_item_line_rt_btn_pc_size"),level:2,text:0==s.is_finish?t.$t("UI_Regression_Go_Text"):t.$t("UI_Regression_Get_Text")}})],1),2==s.is_finish?i("img",{staticClass:"regression_complete_icon",attrs:{src:t.loadIcon("regression_activity_success"),alt:""}}):t._e()])])])})),0)],2)]],2)},_=[],n=s(95353),c=s(81899),o=s(78749),r=s.n(o),l=s(6239),v=s(64589),d=s(28729),h={regression_item_icon_app_size:"20",regression_item_icon_app_color:"t_white",regression_item_line_rt_btn_app_size:"16",regression_item_icon_pc_size:"24",regression_item_icon_pc_color:"t_white",regression_item_line_rt_btn_pc_size:"22","v-btn-wrap":"RZ02M_3wVsNZ9jVQDpze","v-btn__content":"D2Iu85_Wi_wnowO_Xpx4"},m=s(35703),g={name:"regression",components:{spaceUi:m.A},data(){return{isSkeleton:!0,activityTime:{day:"00",hh:"00",mm:"00",ss:"00"},isRegressionEnd:!1,activityA:{},activityB:{},activityC:{},activityD:{}}},computed:{...(0,n.aH)("base",["user","isApp","languageType","systemConfig"]),...(0,n.aH)("switchState",["currencyShow"]),currencySymbol(){return this.currencyShow?this.systemConfig.currency_symbol:""},isDayShow(){const{day:t=0,hh:i=0,mm:s=0,ss:e=0}=this.activityTime;return Number(t)>=1&&Number(i)>=0&&Number(s)>=0&&Number(e)>=0},activityBList(){const{action_detail:t=[]}=this.activityB;return t},activityList(){let t=[];Object.keys(this.activityA).length>0&&t.push(this.activityA),Object.keys(this.activityC).length>0&&t.push(this.activityC),Object.keys(this.activityD).length>0&&t.push(this.activityD);const i=t.filter((t=>1==t.is_finish)),s=t.filter((t=>0==t.is_finish)),e=t.filter((t=>2==t.is_finish));return[...i,...s,...e]}},created(){this.getList(),r().subscribe(l.W.REGRESSION_CONFIG,this.updateData)},methods:{loadIcon:t=>(0,c.A)(t,!1),ommonStyle:t=>h[t],async getList(){const t={token:this.user?.token,language:this.languageType},i=await(0,d.U4)(t).catch((t=>t));if(this.isSkeleton=!1,!i||0!=i.code)return this.$pop.message().show({content:i&&i.msg});const s=i.data&&Array.isArray(i.data)?i.data:[];s.forEach((t=>{if(t.rest_time&&t.rest_time>=0){const i=t.rest_time||0,s=Math.round(Date.now()/1e3)+i;this.activityTime=this.$u.datetime.getDifferTime(new Date,new Date(1e3*s)),this.countDown(s)}1==t.action_type&&(this.activityA=t),2==t.action_type&&(this.activityB=t),3==t.action_type&&(this.activityC=t),4==t.action_type&&(this.activityD=t)}))},countDown(t=0){const i=Math.round(Date.now()/1e3);this.isRegressionEnd=i>Number(t),this.countDownTimer&&(clearTimeout(this.countDownTimer),this.countDownTimer=null),this.isRegressionEnd||(this.activityTime=this.$u.datetime.getDifferTime(1e3*i,1e3*t)),this.countDownTimer=setTimeout((()=>{this.isRegressionEnd||this.countDown(t)}),1e3)},async onActivityReceive(t={}){const{action_type:i=1,day_index:s=1,is_finish:e=0,back_task_join_id:a=0,inside_data:_={}}=t;if(1!=e)return void(Object.keys(_).length>0&&2!=e&&(0,v.l)({inside_data:_},this));let n={token:this.user?.token,language:this.languageType,back_task_join_id:a};2==i&&(n.day_index=s);const c=await(0,d.ps)(n).catch((t=>t));if(!c||0!=c.code)return this.$pop.message().show({content:c&&c.msg});const o=c.data&&"[object Object]"==Object.prototype.toString.call(c.data)?c.data:{};r().publish(this.$store.state?.dialog?.DUALOG_MANAGER_KEY,{key:"deposit",seat:"first",params:{title:this.$t("UI_Code_Bonus"),value:o.gold||0}}),this.$store.dispatch("base/showRedDotReceivedFun",{version:2,event:"back_task",token:this.user?.token,language:this.languageType}),this.getList()},updateData(){this.getList(),this.$store.dispatch("base/showRedDotReceivedFun",{version:2,event:"back_task",token:this.user?.token,language:this.languageType})}},beforeDestroy(){this.countDownTimer&&(clearTimeout(this.countDownTimer),this.countDownTimer=null),r().unsubscribe(l.W.REGRESSION_CONFIG)}},u=g,p=s(845),y=(0,p.A)(u,a,_,!1,null,"3b1f676a",null),b=y.exports},65236:function(t,i){i.A={game_wrapper_space:"10",game_wrapper_app_space:"8",grid_space:"10",grid_space_app:"6",icon_search_size:"14",search_field_height:"36",group_icon_size:"16",pesquisa_img_width:"128",pesquisa_img_height:"176",xs_pesquisa_img_width:"88",xs_pesquisa_img_height:"121",search_tabs_height:"48",search_tabs_color:"#fff",lobby_box_padded:"16",xs_lobby_box_padded:"16",game_recent_indiv_app:"5",game_recent_indiv_pc:"8",game_recent_spacing_app:"12",game_recent_spacing_pc:"16","v-btn-wrap":"bwaAu2Sv4yUOUEvQDGsn","v-btn__content":"Ob43ReYVJrURfhuav8gB"}}}]);
//# sourceMappingURL=41.cd7286a6.js.map