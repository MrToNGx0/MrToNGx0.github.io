"use strict";(self.webpackChunkMrToNGx0_github_io=self.webpackChunkMrToNGx0_github_io||[]).push([[720],{6720:(b,l,n)=>{n.r(l),n.d(l,{ContactModule:()=>T});var a=n(6814),p=n(5861),c=n(9270),s=n(287),t=n(5879),d=n(7246),g=n(1977),h=n(6593),v=n(6584),f=n(5670);function x(o,u){if(1&o&&(t.ynx(0),t.TgZ(1,"a",13)(2,"div",14),t._UZ(3,"img",15),t.qZA()(),t.BQk()),2&o){const e=u.$implicit;t.xp6(1),t.Q6J("href",e.link,t.LSH),t.xp6(2),t.s9C("alt",e.label),t.Q6J("src",e.icon,t.LSH)}}function m(o,u){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5),t._UZ(5,"img",6),t.qZA(),t.TgZ(6,"h5",7),t._uU(7),t.qZA(),t.TgZ(8,"p",8),t._uU(9),t.qZA(),t.TgZ(10,"div",9),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onClickCopy(r.profile.email))}),t._UZ(11,"fa-icon",10),t.TgZ(12,"p"),t._uU(13),t.qZA()(),t.TgZ(14,"div",9),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onClickCopy(r.profile.tel))}),t._UZ(15,"fa-icon",10),t.TgZ(16,"p"),t._uU(17),t.qZA()(),t.TgZ(18,"div",11),t.YNc(19,x,4,3,"ng-container",12),t.qZA()()()(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(5),t.Tol(e.class?e.class:""),t.Q6J("src",e.profile.avatarLink,t.LSH),t.xp6(2),t.AsE(" ",e.profile.firstName," ",e.profile.lastName," "),t.xp6(2),t.hij(" ",e.profile.jobPosition," "),t.xp6(2),t.Q6J("icon",e.faEnvelope),t.xp6(2),t.Oqu(e.profile.email),t.xp6(2),t.Q6J("icon",e.faPhone),t.xp6(2),t.Oqu(e.profile.tel),t.xp6(2),t.Q6J("ngForOf",e.profile.social)}}let C=(()=>{class o{constructor(e,i,r,Z){this.userService=e,this.notificationService=i,this.titleService=r,this.translate=Z,this.class="scale-[1.7]",this.faEnvelope=c.FU$,this.faPhone=c.j1w,this.translate.get("nav.contact").subscribe(w=>{this.titleService.setTitle(`MrToNG | ${w}`)})}ngOnInit(){var e=this;return(0,p.Z)(function*(){e.profile=yield e.userService.getProfile().toPromise()})()}onClickCopy(e){this.notificationService.show(s.E.Success,s.j.CopiedToClipboard),navigator.clipboard.writeText(e)}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(d.K),t.Y36(g.g),t.Y36(h.Dx),t.Y36(v.sK))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-contact"]],decls:2,vars:1,consts:[[1,"w-full","h-full","flex","justify-center","items-center","py-5"],[4,"ngIf"],[1,"flex","flex-col","items-center","gap-5","w-full","h-full"],[1,"w-full","max-w-sm","bg-white","border","border-gray-200","rounded-lg","shadow","dark:bg-gray-800","dark:border-gray-700"],[1,"flex","flex-col","items-center","gap-3","p-8"],[1,"w-full","max-w-[28rem]","h-auto","aspect-square","rounded-full","overflow-hidden","relative"],["alt","Profile Picture",1,"absolute","inset-0","w-full","h-full","object-cover","transition-transform","duration-500","hover:scale-105",3,"src"],[1,"text-xl","font-medium","text-gray-900","dark:text-white","cursor-default"],[1,"text-sm","text-gray-500","dark:text-gray-400","cursor-default"],[1,"flex","gap-2","text-gray-500","cursor-pointer","duration-300","dark:text-gray-400","hover:text-blue-400","dark:hover:text-blue-300",3,"click"],[3,"icon"],[1,"flex","items-center","gap-3"],[4,"ngFor","ngForOf"],["target","_blank",3,"href"],[1,"w-8","h-8","aspect-square","bg-gray-50","dark:bg-gray-600","rounded-full","overflow-hidden","shadow-md","relative","transition-transform","duration-500","hover:opacity-50"],[1,"absolute","inset-0","w-5","h-5","object-cover","top-[50%]","left-[50%]","-translate-x-[50%]","-translate-y-[50%]",3,"src","alt"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0),t.YNc(1,m,20,11,"ng-container",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngIf",r.profile))},dependencies:[a.sg,a.O5,f.BN]})}return o})();var y=n(67);let T=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[a.ez,f.uH,y.Bz.forChild([{path:"",component:C}])]})}return o})()}}]);