"use strict";(self["webpackChunkcc_web_client"]=self["webpackChunkcc_web_client"]||[]).push([[543],{5203:function(t,e,i){i.r(e),i.d(e,{default:function(){return st}});var s=i(79029),a=function(){var t=this,e=t._self._c;return e(s.A,{ref:"boxIds",staticClass:"recompensas_container c_box"},[e("div",{staticClass:"page recompensas"},[t.skeletonStatus?e("space-ui",{attrs:{sign:"recompensas"}}):[e("div",{staticClass:"recompensas_card"},[e("swiper",{ref:"swiperRef",attrs:{options:t.swiperOptions}},t._l(t.vipList,(function(i,s){return e("swiper-slide",{key:i.vip_id,style:t.slideStyle},[e("vip-card",{attrs:{item:i,highest:t.vipList.length-1==s,"total-grade":t.vipList.length,"is-active":t.vipIndex===s,index:s,"vip-list":t.vipList,"is-kilobit":t.isKilobit}})],1)})),1)],1),e("div",{staticClass:"swiper_btn"},[e("div",{staticClass:"swiper-button-prev",class:{aniprev:1==t.animStatus}},[e("icon-font",{attrs:{name:"icon-arrow_left",size:t.iconSize.size,dark:t.iconSize.color}})],1),e("div",{staticClass:"swiper-button-next",class:{aninext:2==t.animStatus}},[e("icon-font",{attrs:{name:"icon-arrow_right",size:t.iconSize.size,dark:t.iconSize.color}})],1)]),e("div",{staticClass:"recompensas_box"},[e("swiper",{ref:"swiperCardRef",attrs:{options:t.swiperOptionsInfo}},t._l(t.vipList,(function(i,s){return e("swiper-slide",{key:i.vip_id},[e("vip-award",{attrs:{item:i,"info-desc":t.infoDesc,"info-img":t.infoImg,highest:t.vipList.length-1==s,"vip-list":t.vipList,"is-kilobit":t.isKilobit}})],1)})),1)],1)]],2)])},_=[],r=i(95353),o=i(78749),n=i.n(o),c=i(73398),l=i(40026),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comp vip_card",style:t.vipCardBg},[e("div",{staticClass:"vip_card_inner"},[e("div",{staticClass:"vip_card_title"},[e("span",{staticClass:"vip_card_title_level"},[t._v(" "+t._s(t.$t("UI_VIP_Vip.lv"))+t._s(t.levelText)+" ")]),t.isKeepLevel&&t.item.id<=t.user.vip_id?e("span",{staticClass:"vip_placeholder_lock"},[e("icon-font",{attrs:{name:"icon-icon_VIP_lock",size:12}})],1):t._e()]),e("span",{staticClass:"vip_card_title_level_cross"},[t._v(t._s(t.levelTipText))]),e("vip-process",{attrs:{"keep-level":t.isKeepLevel,"user-vip":t.user.vip_id,item:t.item,"recharge-item":t.getRecharge,"is-kilobit":t.isKilobit}})],1),e("div",{staticClass:"vip_card_medal",class:{highest:t.highest}},[e("img",{attrs:{src:t.medalImg,alt:""}})])])},d=[],h=i(13938),m=i(16557),g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comp vip_process_wrap"},[t.keepLevel&&t.item.id==t.userVip?[e("div",{staticClass:"grading_box_recharge"},[e("div",{staticClass:"grading_box_recharge_left"},[e("div",{staticClass:"keep_block"},[e("div",{staticClass:"keep_evel_text"},[e("span",[t._v(t._s(t.$t("UI_VIP_Keep_Level_Text")))])]),e("div",{directives:[{name:"zoom",rawName:"v-zoom"}],staticClass:"keep_action"},[e("div",{staticClass:"keep_btn btn_radius",on:{click:t.onRechargeWithdrawal}},[e("auto-font",{attrs:{uuid:"vip_btn_recarega","max-font":14,level:2,text:t.$t("UI_VIP_Recarega_Btn")}})],1)])]),e("div",{staticClass:"keep_progress_box"},[e("div",{staticClass:"progress_title"},[e("span",{staticClass:"recharge_text"},[t._v(t._s(t.$t("UI.Charge_0_main_3")))]),e("span",[t._v(" "+t._s(t.$u.formatKilobit(t.item.week_recharge,t.isKilobit))+"/"+t._s(t.$u.formatKilobit(t.item.lv_keep_recharge,t.isKilobit))+" ")])]),e(m.A,{staticClass:"progress_linear",attrs:{value:t.item.week_recharge/t.item.lv_keep_recharge*100,color:t.activeColor[0],"background-color":t.activeColor[1],rounded:""}})],1)]),e("div",{staticClass:"grading_box_recharge_rigth"})])]:t.rechargeItem?[e("div",{staticClass:"progress_box_recharge"},[e("div",{staticClass:"progress_box_recharge_left"},[e("div",{staticClass:"progress_title"},[e("span",{staticClass:"recharge_text"},[t._v(t._s(t.$t("UI_VIP_Vip.deposit")))]),e("span",[t._v(" "+t._s(t.$u.formatKilobit(t.rechargeItem.recharge_gold,t.isKilobit))+"/"+t._s(t.$u.formatKilobit(t.rechargeItem.min_recharge,t.isKilobit))+" ")])]),e(m.A,{staticClass:"progress_linear",attrs:{value:t.rechargeItem.recharge_gold/t.rechargeItem.min_recharge*100,color:t.activeColor[0],"background-color":t.activeColor[1],rounded:""}}),e("div",{staticClass:"progress_box_coding"},[e("div",{staticClass:"progress_title"},[e("span",{staticClass:"recharge_text"},[t._v(t._s(t.$t("UI_VIP_Vip.bet")))]),e("span",[t._v(" "+t._s(t.$u.formatKilobit(t.rechargeItem.vip_bets,t.isKilobit))+"/"+t._s(t.$u.formatKilobit(t.rechargeItem.min_bet,t.isKilobit))+" ")])]),e(m.A,{staticClass:"progress_linear",attrs:{value:t.rechargeItem.vip_bets/t.rechargeItem.min_bet*100,color:t.activeColor[0],"background-color":t.activeColor[1],rounded:""}})],1)],1),e("div",{staticClass:"progress_box_recharge_rigth"})])]:t._e()],2)},u=[],v={recompensas_swiper_btn_size:"33",recompensas_swiper_btn_bg:'""',recompensas_card_app_width:"calc(100% - 32px)",recompensas_card_pc_width:"calc(100% - 48px)",recompensas_vip_card_bg:"linear-gradient(0deg, #1b242d 30%, #36424e 100%)",recompensas_vip_placeholder_lock_icon_size:"12",recompensas_vip_progress_bg:"#0f1923",recompensas_vip_progress_color:"#ffce5c",vip_award_box_text_title_size_app:"16px",vip_award_box_text_title_weight_app:"400",vip_award_box_text_title_sign_size_app:"16px",vip_award_box_text_title_sign_weight_app:"400",vip_award_box_text_title_money_size_app:"18px",vip_award_box_text_title_money_weight_app:"600",vip_award_box_text_title_size_pc:"18px",vip_award_box_text_title_weight_pc:"400",vip_award_box_text_title_sign_size_pc:"18px",vip_award_box_text_title_sign_weight_pc:"400",vip_award_box_text_title_money_size_pc:"24px",vip_award_box_text_title_money_weight_pc:"600",vip_award_box_vip_placeholder_lock_size:"12",vip_award_box_vip_placeholder_lock_color:"t_white",recompensas_gold_box_head_max_size:"16px",recompensas_gold_box_head_weight:"400",recompensas_gold_box_mid_num_size:"16px",recompensas_gold_box_mid_num_bold:"600",recompensas_gold_box_reward_size:"16",recompensas_gold_box_lock_size:"12",vip_award_slide_award_grade_box_bg_pc:"linear-gradient(180deg, #0f1923 0%, #1b242d 100%)",vip_award_slide_award_privilege_icon_left_size:"70",vip_award_slide_award_privilege_icon_rigth_size:"90",vip_award_slide_grade_info_desc_award_grade_icon_left_size:"60",vip_award_slide_grade_info_desc_award_grade_icon_rigth_size:"80","v-btn-wrap":"cW4WK_EyPWoLfeCTvkCL","v-btn__content":"ZGe0FyWPAAIgFQKZzuxQ"},w={name:"VipProcess",props:{keepLevel:Boolean,item:Object,rechargeItem:Object,userVip:Number,isKilobit:{type:Boolean,default:!1}},computed:{...(0,r.aH)("base",["isApp"]),activeColor(){const{recompensas_vip_progress_bg:t,recompensas_vip_progress_color:e}=v;return[e,t]}},filters:{conversion(t={},e=""){if(!e)return"0%";const{recharge_gold:i=0,min_recharge:s=0,vip_bets:a=0,min_bet:_=0}=t;if("deposit"==e){const t=i/s*100;return Math.ceil(t>100?100:t)+"%"}{const t=a/_*100;return Math.ceil(t>100?100:t)+"%"}}},methods:{onRechargeWithdrawal(){this.$store.dispatch("modal/setDepositWithdrawShow")}}},b=w,x=i(845),f=(0,x.A)(b,g,u,!1,null,"b7c09ca4",null),y=f.exports;const I={1:"icon_v1",2:"icon_v2",3:"icon_v3",4:"icon_v4"};var C={name:"VipCard",components:{VipProcess:y},props:{vipList:{type:Array,default(){return[]}},item:{type:Object,default:()=>{}},highest:{type:Boolean,default:!1},totalGrade:{type:[Number,String],default:0},isActive:{type:Boolean,default:!1},index:{type:[Number,String],default:0},isKilobit:{type:Boolean,default:!1}},data(){return{}},computed:{...(0,r.aH)("layout",["containerBox"]),...(0,r.aH)("base",["isApp","user"]),...(0,r.L8)("base",["getVipCurrentLevel"]),levelText(){return this.getVipCurrentLevel(this.item.id)},levelTipText(){const t=this.item.id,e=this.user.vip_id;if(this.highest)return this.$i18n.t("UI_VIP_highest");let i="UI_VIP_Not_Reached";return t<e?i="UI_VIP_Grade_Passed":t==e&&(i="UI_VIP_Current_Livel"),this.$i18n.t(i)},getRecharge(){const{id:t=0}=this.item,e=t+1,i=this.vipList.find((t=>t.id==e))||null;return i},isKeepLevel(){const{is_keep_level:t=0}=this.user;return 1!=t},medalImg(){const t=this.totalGrade-1,e=[parseInt(t/3*1),parseInt(t/3*2),t],{id:i=0}=this.item;let s=1;return s=i<=e[0]?1:i<=e[1]?2:i<=e[2]?3:4,this.getCacheIcon(I[s])},iconSize(){const{recompensas_vip_placeholder_lock_icon_size:t}=v;return t},vipCardBg(){const t=(0,h.kU)("vip_swiper_bg");if(t){const e="string"===typeof t?t:t.value.src,{recompensas_vip_card_bg:i}=v;return{background:this.isApp?`${i}`:`${i}, url(${e}) 100% 100%`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundBlendMode:"lighten"}}}},methods:{getCacheIcon(t){const e=(0,h.kU)(t);return"string"===typeof e?e:e.value.src}}},k=C,$=(0,x.A)(k,p,d,!1,null,"4fbd0127",null),A=$.exports,S=i(79279),V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comp vip_slide_wrap"},[e("div",{staticClass:"vip_award_view"},[e("div",{staticClass:"vip_award_view_left"},[e("vip-award-box",{attrs:{"currency-symbol":t.currencySymbol,item:t.item,"vip-list":t.vipList,"is-kilobit":t.isKilobit}})],1),t.weeklyRitual.length>0?e("div",{staticClass:"weekly_month"},t._l(t.weeklyRitual,(function(i,s){return e("div",{key:s,staticClass:"cash",class:{single:1==t.weeklyRitual.length}},[e("gold-box",{attrs:{"vip-list":t.vipList,item:i,name:i.sign,"keep-item":{keep_recharge:t.item.lv_keep_recharge,recharge:t.item.week_recharge},"is-kilobit":t.isKilobit}})],1)})),0):t._e()]),e(S.A,{staticClass:"award_privilege",attrs:{color:"t_card_bg"}},[t.isApp?t._e():e("icon-font",{staticClass:"award_privilege_icon_left",attrs:{name:"icon-icon_email_chip",size:t.variables.vip_award_slide_award_privilege_icon_left_size}}),t.isApp?t._e():e("icon-font",{staticClass:"award_privilege_icon_rigth",attrs:{name:"icon-icon_email_chip",size:t.variables.vip_award_slide_award_privilege_icon_rigth_size}}),e("div",{staticClass:"crown_icon"},[e("img",{attrs:{src:t.getCacheIcon("vip_crown"),alt:""}})]),e("span",{staticClass:"c_box cor_head"},[t._v(t._s(t.$t("UI_VIP_Vip.privilegio")))]),t.item.withdraw_fee_rate?e("div",{staticClass:"cor_content c_box"},[e("span",{staticClass:"text"},[t._v(t._s(t.$t("UI_VIP_Vip.tomarText"))+" ")]),e("span",[t._v(t._s(t.item.withdraw_fee_rate))])]):t._e(),t.item.withdraw_num?e("div",{staticClass:"cor_content c_box"},[e("span",{staticClass:"text"},[t._v(t._s(t.$t("UI_VIP_Vip.desenhoText"))+" ")]),e("span",[t._v(t._s(t.$u.formatKilobit(t.item.withdraw_num,t.isKilobit)))])]):t._e(),t.item.withdraw_each_limit?e("div",{staticClass:"cor_content c_box"},[e("span",{staticClass:"text"},[t._v(t._s(t.$t("UI_VIP_Vip.quotaText"))+" ")]),e("span",[t._v(t._s(t.$u.formatKilobit(t.item.withdraw_each_limit,t.isKilobit)))])]):t._e(),t.item.withdraw_day_limit?e("div",{staticClass:"cor_content c_box"},[e("span",{staticClass:"text"},[t._v(t._s(t.$t("UI_VIP_Vip.quotasText"))+" ")]),e("span",[t._v(t._s(t.$u.formatKilobit(t.item.withdraw_day_limit,t.isKilobit)))])]):t._e(),t.item.usdt_withdraw_fee_rate?e("div",{staticClass:"cor_content c_box"},[e("span",{staticClass:"text"},[t._v(t._s(t.$t("UI_Vip_USDT_Fee"))+" ")]),e("span",[t._v(t._s(t.item.usdt_withdraw_fee_rate))])]):t._e(),t.item.usdt_withdraw_num?e("div",{staticClass:"cor_content c_box"},[e("span",{staticClass:"text"},[t._v(t._s(t.$t("UI_Vip_USDT_Daily"))+" ")]),e("span",[t._v(t._s(t.$u.formatKilobit(t.item.usdt_withdraw_num,t.isKilobit)))])]):t._e(),t.item.usdt_withdraw_each_limit?e("div",{staticClass:"cor_content c_box"},[e("span",{staticClass:"text"},[t._v(t._s(t.$t("UI_Vip_USDT_Linit "))+" ")]),e("span",[t._v(t._s(t.$u.formatKilobit(t.item.usdt_withdraw_each_limit,t.isKilobit)))])]):t._e(),t.item.usdt_withdraw_day_limit?e("div",{staticClass:"cor_content c_box"},[e("span",{staticClass:"text"},[t._v(t._s(t.$t("UI_Vip_USDT_Limit"))+" ")]),e("span",[t._v(t._s(t.$u.formatKilobit(t.item.usdt_withdraw_day_limit,t.isKilobit)))])]):t._e()],1),e(S.A,{staticClass:"award_grade",attrs:{color:"t_card_bg"}},[e("div",{staticClass:"award_grade_box",style:t.awardGradeBoxFn},[e("span",{staticClass:"grade_head c_box"},[t._v(t._s(t.$t("UI_VIP_Vip.protection")))]),e("div",{staticClass:"grade_content c_box"},[e("span",{staticClass:"text"},[t._v(t._s(t.$t("UI_VIP_Vip.wallet"))+" ")]),e("span",[t._v(t._s(t.currencySymbol)+t._s(t.item.lv_keep_recharge||0)+"/"+t._s(t.$t("UI_VIP_Vip.empresa"))+" ")])]),e("div",{staticClass:"grade_img c_box"},[e("img",{attrs:{src:t.getCacheIcon("vip_money"),alt:""}})]),t.infoImg&&t.isApp?e("div",{staticClass:"grade_info_img c_box"},[e("load-img",{attrs:{height:"100%",width:t.getGoldBox,item:{url:t.infoImg}}})],1):t._e()]),e("div",{staticClass:"info_desc"},[e("div",{staticClass:"info_desc_text",domProps:{innerHTML:t._s(t.infoDesc)}}),t.infoImg&&!t.isApp?e("div",{staticClass:"grade_info_img c_box"},[e("load-img",{attrs:{height:"100%",width:t.getGoldBox,item:{url:t.infoImg}}})],1):t._e(),t.isApp?t._e():e("icon-font",{staticClass:"award_grade_icon_left",attrs:{name:"icon-icon_email_chip",size:t.variables.vip_award_slide_grade_info_desc_award_grade_icon_left_size}}),t.isApp?t._e():e("icon-font",{staticClass:"award_grade_icon_rigth",attrs:{name:"icon-icon_email_chip",size:t.variables.vip_award_slide_grade_info_desc_award_grade_icon_rigth_size}})],1)])],1)},T=[],U=i(4329),L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comp grade_box",on:{click:t.handleBoxClick}},[e("div",{staticClass:"box_img"},[0==t.item.grade?e("img",{staticClass:"unclaimed_img",attrs:{src:t.boxImg}}):t._e(),1==t.item.grade?e("img",{staticClass:"other_img",attrs:{src:t.boxImg}}):t._e(),-1==t.item.grade?e("img",{staticClass:"other_no_img",attrs:{src:t.boxImg}}):t._e()]),e("div",{staticClass:"box_text"},[e("div",{staticClass:"grade_title"},[e("auto-font",{attrs:{"text-align":"left","max-font":t.commonStyle(t.isApp?"vip_award_box_text_title_size_app":"vip_award_box_text_title_size_pc"),"font-weight":t.commonStyle(t.isApp?"vip_award_box_text_title_weight_app":"vip_award_box_text_title_weight_pc"),text:t.gradeTitle.levelText}})],1),e("div",{staticClass:"grade_title_sign"},[e("auto-font",{attrs:{"text-align":"left","max-font":t.commonStyle(t.isApp?"vip_award_box_text_title_sign_size_app":"vip_award_box_text_title_sign_size_pc"),"font-weight":t.commonStyle(t.isApp?"vip_award_box_text_title_sign_weight_app":"vip_award_box_text_title_sign_weight_pc"),text:t.gradeTitle.text?t.gradeTitle.text.toLocaleUpperCase():""}})],1),e("div",{staticClass:"grade_title_money"},[e("auto-font",{attrs:{"text-align":"left","max-font":t.commonStyle(t.isApp?"vip_award_box_text_title_money_size_app":"vip_award_box_text_title_money_size_pc"),"font-weight":t.commonStyle(t.isApp?"vip_award_box_text_title_money_weight_app":"vip_award_box_text_title_money_weight_pc"),text:`${t.currencySymbol} ${t.$u.formatKilobit(t.item.grade_gold,t.isKilobit)}`}})],1)]),0==t.item.grade?e("i",{staticClass:"red_radius vip_desp_dot"}):t._e(),-1==t.item.grade?e("div",{staticClass:"vip_placeholder_lock"},[e("icon-font",{attrs:{name:"icon-icon_VIP_lock",size:t.commonStyle("vip_award_box_vip_placeholder_lock_size"),dark:t.commonStyle("vip_award_box_vip_placeholder_lock_color")}})],1):t._e()])},z=[],P=i(51193);const K={0:"vip_ic_box3",1:"vip_ic_box4","-1":"vip_ic_box2"};var D={name:"VipAwardBox",props:{currencySymbol:String,vipList:{type:Array,default(){return[]}},item:{type:Object,default:()=>({grade:-1})},isKilobit:{type:Boolean,default:!1}},data(){return{}},computed:{...(0,r.aH)("layout",["containerBox"]),...(0,r.aH)("base",["isApp","user"]),...(0,r.L8)("base",["getVipCurrentLevel"]),isKeepLevel(){const{is_keep_level:t=0}=this.user;return 1!=t},boxImg(){const{grade:t}=this.item;return this.getCacheIcon(K[t])},gradeTitle(){return{levelText:this.$t("UI_VIP_Share.grade")+this.getVipCurrentLevel(this.item.id),text:this.$t("UI_VIP_Vip.vipTitles")}}},methods:{commonStyle:t=>v[t],getCacheIcon(t){const e=(0,h.kU)(t);return"string"===typeof e?e:e.value.src},async handleBoxClick(){if(0!=this.item.grade)return;const{id:t=0}=this.item,e={token:this.user.token,id:t,type:1},{code:i,msg:s}=await(0,P.Ld)(e).catch((t=>t));if(0!=i)return this.$pop.message().show({content:s,timeout:5e3});n().publish(c.A.RENEW_STATUS,{id:t,sign:"box"}),n().publish(this.$store.state?.dialog?.DUALOG_MANAGER_KEY,{key:"deposit",seat:"first",params:{title:this.$t("UI_Code_Bonus"),value:this.item.grade_gold}}),this.$store.dispatch("base/showRedDotReceivedFun",{version:2,event:"vip_cash_gift",language:this.$store.state.base.languageType,token:this.$store.state.base.user.token})}}},B=D,R=(0,x.A)(B,L,z,!1,null,"22382ee5",null),E=R.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comp gold_box"},[e("div",{staticClass:"gold_box_head line_1"},[e("auto-font",{attrs:{"max-font":t.commonStyle("recompensas_gold_box_head_max_size"),"font-weight":t.commonStyle("recompensas_gold_box_head_weight"),text:t.getTitle}})],1),e("div",{staticClass:"gold_box_mid",class:{permit:0==t.item.status}},[e("div",{staticClass:"mid_num"},[e("auto-font",{attrs:{"max-font":t.commonStyle("recompensas_gold_box_mid_num_size"),"font-weight":t.commonStyle("recompensas_gold_box_mid_num_bold"),text:`${t.currencySymbol} ${t.$u.formatKilobit(t.item.money,t.isKilobit)||0}`}})],1)]),e("div",{staticClass:"gold_box_bottom"},[t.item.id==t.user.vip_id&&1==t.item.status?e("div",{staticClass:"gold_btn tempo_text btn_radius"},[e("auto-font",{attrs:{"max-font":t.commonStyle("recompensas_gold_btn_text_size"),"font-weight":t.commonStyle("recompensas_gold_btn_text_weight"),text:t.tempoRestante}})],1):[-1==t.item.status?e("div",{staticClass:"gold_btn no_gold_collectable btn_radius"},[e("icon-font",{attrs:{name:"icon-icon_VIP_lock",size:t.commonStyle("recompensas_gold_box_lock_size")}})],1):1==t.item.status?e("div",{staticClass:"gold_btn btn_radius disabled_btn"},[e("auto-font",{attrs:{"max-font":t.commonStyle("recompensas_gold_btn_text_size"),"font-weight":t.commonStyle("recompensas_gold_btn_text_weight"),text:t.stateDesc}})],1):e("div",{staticClass:"gold_btn gold_btn_active btn_radius",on:{click:t.submit}},[e("auto-font",{attrs:{"max-font":t.commonStyle("recompensas_gold_btn_text_size"),"font-weight":t.commonStyle("recompensas_gold_btn_text_weight"),text:t.stateDesc}})],1)]],2),0==t.item.status?e("i",{staticClass:"red_radius vip_desp_dot"}):t._e()])},N=[],O={props:{name:String,vipList:{type:Array,default(){return[]}},item:{type:Object,default:()=>({status:-1,money:-1})},keepItem:{type:Object,default(){return{keep_recharge:0,recharge:0}}},isKilobit:{type:Boolean,default:!1}},computed:{...(0,r.aH)("layout",["containerBox"]),...(0,r.aH)("base",["user","isApp","languageType","systemConfig"]),...(0,r.aH)("switchState",["currencyShow"]),getTitle(){return"day"==this.name?this.$t("UI_VIP_Vip.DailyGift"):"week"==this.name?this.$t("UI_VIP_Vip.WeekGift"):"month"==this.name?this.$t("UI_VIP_Vip.MonthlyGift"):""},stateDesc(){const{status:t=-1}=this.item;return{0:this.$t("UI_VIP_Vip.disponível"),1:this.$t("UI_VIP_Vip.recebido"),"-1":this.$t("UI_VIP_Vip.notAllow")}[t]||""},currencySymbol(){return this.currencyShow?this.systemConfig.currency_symbol:""},isKeepLevel(){const{is_keep_level:t=0}=this.user;return 1!=t},tempoRestante(){let t={};const e=(new Date).getTime();if("day"==this.name)return`01 ${this.$t("UI_VIP_DATE_Day")} ${this.$t("UI_VIP_DATE_later")}`;if("week"==this.name){let i=this.$u.datetime.getTime(-7);i=`${i} 00:00:00`,t=this.$u.datetime.getDifferTime(e,i)}if("month"==this.name){const i=`${this.$u.datetime.newMonth()} 00:00:00`;t=this.$u.datetime.getDifferTime(e,i)}const{day:i=0,hh:s=0,mm:a=0,ss:_=0}=t;return Number(i)?`${i} ${this.$t(Number(i)>0?"UI_VIP_DATE_Days":"UI_VIP_DATE_Day")} ${this.$t("UI_VIP_DATE_later")}`:Number(s)?`${s} ${this.$t("UI_VIP_DATE_hour")} ${this.$t("UI_VIP_DATE_later")}`:Number(a)?`${a} ${this.$t("UI_VIP_DATE_minute")} ${this.$t("UI_VIP_DATE_later")}`:Number(_)?`${_} ${this.$t("UI_VIP_DATE_second")} ${this.$t("UI_VIP_DATE_later")}`:`0 ${this.$t("UI_VIP_DATE_Day")} ${this.$t("UI_VIP_DATE_later")}`}},methods:{commonStyle:t=>v[t],async submit(){const{status:t=-1,id:e=0}=this.item;if(0!=t)return;const i={token:this.user.token,type:"day"==this.name?5:"week"==this.name?2:3,id:this.user.vip_id,language:this.languageType},{code:s,msg:a}=await(0,P.Ld)(i).catch((t=>t));if(0!=s)return this.$pop.message().show({content:a});const _={week:this.$t("UI_Weekly_Bonus"),month:this.$t("UI_Monthly_Bonus")};n().publish(c.A.RENEW_STATUS,{id:e,sign:this.name}),n().publish(this.$store.state?.dialog?.DUALOG_MANAGER_KEY,{key:"deposit",seat:"first",params:{title:_[this.name],value:this.item.money}}),this.$store.dispatch("base/showRedDotReceivedFun",{version:2,event:"vip_cash_gift",language:this.$store.state.base.languageType,token:this.$store.state.base.user.token})}}},H=O,W=(0,x.A)(H,G,N,!1,null,"4d0d5220",null),M=W.exports,j=i(9936),F={name:"VipAward",components:{VipAwardBox:E,GoldBox:M,loadImg:j.A},props:{vipList:{type:Array,default(){return[]}},item:{type:Object,default:()=>{}},infoDesc:{type:String,default:""},infoImg:{type:String,default:""},highest:{type:Boolean,default:!1},isKilobit:{type:Boolean,default:!1}},data(){return{variables:v}},computed:{...(0,r.aH)("layout",["containerBox"]),...(0,r.aH)("base",["isApp","user","languageType","systemConfig"]),...(0,r.aH)("switchState",["currencyShow"]),getGoldBox(){const t=.5*this.containerBox.width;return this.isApp?t>160?160:t:213},currencySymbol(){return this.currencyShow?this.systemConfig.currency_symbol:""},isCurrentLevel(){return this.item.id==this.user.vip_id},weeklyRitual(){const{vip_gift_gold_day_switch:t=0,vip_gift_gold_week_switch:e=0,vip_gift_gold_month_switch:i=0}=this.systemConfig,{day:s=-1,day_gold:a=0,week:_=-1,week_gold:r=0,month:o=-1,month_gold:n=0}=this.item,c=this.isCurrentLevel?0==s?s:1:s,l=this.isCurrentLevel?0==_?_:1:_,p=this.isCurrentLevel?0==o?o:1:o;return[{sign:"day",...this.item,money:a,status:c,hidden:1==t},{sign:"week",...this.item,money:r,status:l,hidden:1==e},{sign:"month",...this.item,money:n,status:p,hidden:1==i}].filter((t=>t.hidden))},awardGradeBoxFn(){const t=(0,h.kU)("vip_award_grade");if(t){const e="string"===typeof t?t:t.value.src,{vip_award_slide_award_grade_box_bg_pc:i}=this.variables;return{background:this.isApp?"none":`${i}, url(${e})  no-repeat fixed`,backgroundSize:"100%",backgroundBlendMode:"lighten"}}}},methods:{getCacheIcon(t){const e=(0,h.kU)(t);return"string"===typeof e?e:e.value.src},async joinAction(){const t={token:this.user.token,language:this.languageType},e=await(0,U.SG)(t).catch((t=>t));if(0!=e.code)return;const i=e.data&&Array.isArray(e.data)?e.data:[],s=i.find((t=>"group_chat_tel"==t.lang_name))||{},{value:a=""}=s,_=a.includes("http://")||a.includes("https://")?a:`http://${a}`;setTimeout((()=>window.open(_,"_blank")))}}},q=F,Y=(0,x.A)(q,V,T,!1,null,"28f33e56",null),J=Y.exports,Q=i(35703),Z=i(24276),X=i(82503),tt={name:"Recompensas",mixins:[l.A],components:{spaceUi:Q.A,Swiper:Z.Swiper,SwiperSlide:Z.SwiperSlide,VipCard:A,VipAward:J},data(){return{vipIndex:0,skeletonStatus:!0,timer:null,swiperOptions:{},swiperOptionsInfo:{},swiperCardHeight:0,animIndex:null,animStatus:null,vipList:[],infoDesc:"",infoImg:"",badgeLt:!1,badgeRt:!1,isKilobit:!1}},computed:{...(0,r.aH)("base",["isApp","user","languageType"]),vipLevel(){return this.user.vip_id-1},slideStyle(){const{recompensas_card_app_width:t,recompensas_card_pc_width:e}=v;return{width:this.isApp?t:e,height:this.swiperCardHeight?`${this.swiperCardHeight}px`:"auto"}},iconSize(){const{recompensas_swiper_btn_size:t,recompensas_swiper_btn_bg:e}=v;return{size:t,color:e}}},watch:{languageType(t){this.getVipList()},vipIndex(t){},isApp(t){}},created(){this.getVipList(),this.initSwiperOption()},mounted(){this.renewList=()=>this.getVipList(),n().subscribe(c.A.RENEW_LIST,this.renewList),this.renewStatus=t=>this.updateBonus(t),n().subscribe(c.A.RENEW_STATUS,this.renewStatus)},methods:{async getVipList(){let t=!0;const e={token:this.user.token,language:this.languageType};this.timer=setTimeout((()=>{t&&this.$pop.loading().show()}),2e3);const i=await(0,P.U$)(e).catch((t=>t));t=!1,this.timer&&clearTimeout(this.timer),this.$pop.loading().hide();const{code:s,data:a}=i;if(0!=s)return;const _=a.list&&Array.isArray(a.list)?a.list:[],r=a.show_vip_list&&Array.isArray(a.show_vip_list)?a.show_vip_list:[],o=r.map((t=>{const e=_.find((e=>e.id==t.id));t.withdraw_fee_rate||delete e.withdraw_fee_rate,t.withdraw_num||delete e.withdraw_num,t.withdraw_each_limit||delete e.withdraw_each_limit,t.withdraw_day_limit||delete e.withdraw_day_limit,t.usdt_withdraw_fee_rate||delete e.usdt_withdraw_fee_rate,t.usdt_withdraw_num||delete e.usdt_withdraw_num,t.usdt_withdraw_each_limit||delete e.usdt_withdraw_each_limit,t.usdt_withdraw_day_limit||delete e.usdt_withdraw_day_limit;const i={...e,...t};return{...i,recharge_gold:a.recharge_gold,vip_bets:a.vip_bets,week_recharge:a.week_recharge}}));this.vipList=o,await this.getGrauInfo(a.vip_faq_name),this.isKilobit=1==a.thousand_mark,this.skeletonStatus=!1},async getGrauInfo(t=""){if(!t)return;const e={token:this.user.token,language:this.languageType,name:t,type:3},{code:i,data:s={}}=await(0,X.Vj)(e).catch((t=>t));if(0!=i)return;const a=s.value||"",_=s.img_url||"";this.infoDesc=a,this.infoImg=_},updateBonus(t={}){const{id:e=0,sign:i="week"}=t;let s=JSON.parse(JSON.stringify(this.vipList));s=s.map((t=>{if(t.id==e){switch(i){case"day":const{vip_id:i=1}=this.user;t.day=i==e?1:-1;break;case"week":t.week=1;break;case"month":t.month=1;break;case"box":t.grade=1;break;default:break}return t}return t})),this.vipList=s},getIsGift(t=0){const e=this.vipList.length-1;let i=t-1;i=i>=0?i:e;const s=this.vipList.slice(0,i+1),a=s.map((t=>0==t.week||0==t.month||0==t.grade));this.badgeLt=a.includes(!0);let _=t+1;_=_>e?0:_;const r=this.vipList.slice(_,e+1),o=r.map((t=>0==t.week||0==t.month||0==t.grade));this.badgeRt=o.includes(!0)},initSwiperOption(){const t=this,e=this.user.vip_id-1;this.swiperOptions={initialSlide:e,slidesPerView:"auto",centeredSlides:!0,loop:!1,autoplay:!1,followFinger:!1,resistanceRatio:.1,spaceBetween:this.isApp?8:16,on:{init:()=>{this.$nextTick((()=>{const{swiperRef:t}=this.$refs;t&&(this.swiperCardHeight=t?.$swiper?.height)}))},slideNextTransitionEnd:()=>{this.vipIndex++},slidePrevTransitionEnd:()=>{this.vipIndex--},slideChangeTransitionStart:function(){if(null==t.animIndex)return t.animIndex=this.activeIndex;t.animIndex<this.activeIndex&&(t.animIndex=this.activeIndex,t.animStatus=2),t.animIndex>this.activeIndex&&(t.animIndex=this.activeIndex,t.animStatus=1),setTimeout((()=>{t.animStatus=null}),150)}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},noSwipingSelector:".keep_btn"},this.swiperOptionsInfo={initialSlide:e,slidesPerView:1,centeredSlides:!0,loop:!1,autoplay:!1,allowTouchMove:!1,on:{init:()=>{this.$nextTick((()=>{const{swiperRef:t,swiperCardRef:e}=this.$refs;t.$swiper.controller.control=e.$swiper}))}}}}},beforeDestroy(){n().unsubscribe(c.A.RENEW_LIST),n().unsubscribe(c.A.RENEW_STATUS)}},et=tt,it=(0,x.A)(et,a,_,!1,null,"6f1a5658",null),st=it.exports},65236:function(t,e){e.A={game_wrapper_space:"10",game_wrapper_app_space:"8",grid_space:"10",grid_space_app:"6",icon_search_size:"14",search_field_height:"36",group_icon_size:"16",pesquisa_img_width:"128",pesquisa_img_height:"176",xs_pesquisa_img_width:"88",xs_pesquisa_img_height:"121",search_tabs_height:"48",search_tabs_color:"#fff",lobby_box_padded:"16",xs_lobby_box_padded:"16",game_recent_indiv_app:"5",game_recent_indiv_pc:"8",game_recent_spacing_app:"12",game_recent_spacing_pc:"16","v-btn-wrap":"bwaAu2Sv4yUOUEvQDGsn","v-btn__content":"Ob43ReYVJrURfhuav8gB"}},51193:function(t,e,i){i.d(e,{DT:function(){return c},Ek:function(){return d},Ld:function(){return o},Lf:function(){return r},U$:function(){return _},Yr:function(){return p},fF:function(){return n},oG:function(){return l},pq:function(){return a}});var s=i(3801);const a=async t=>await s.A.post("/clearn_bet/info",t),_=async t=>await s.A.post("/vip/vipList",t),r=async t=>await s.A.post("/clearn_bet/cleanBetV2",t),o=async t=>await s.A.post("/vip/receiveReward",t),n=async t=>await s.A.post("/clearn_bet/newCleanBetList",t),c=async t=>await s.A.post("/user_agent/directDetailList",t),l=async t=>await s.A.post("/clearn_bet/newPercentList",t),p=async t=>await s.A.post("/Activitie/newGamePromotion",t),d=async t=>await s.A.post("/user/userGameDailyStatistics",t)}}]);