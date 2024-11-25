"use strict";(self.webpackChunkMrToNGx0_github_io=self.webpackChunkMrToNGx0_github_io||[]).push([[806],{2806:(L,h,a)=>{a.r(h),a.d(h,{MainModule:()=>_});var c=a(6814),g=a(67),t=a(5879),d=a(9270),m=a(3307),f=a(5520),u=a(6584);const v=function(e){return[e]},x=function(e,l){return{"text-zinc-700 dark:text-gray-200":e,"text-blue-600 dark:text-blue-400":l}};function b(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"li")(2,"a",20),t._uU(3),t.ALo(4,"translate"),t.qZA()(),t.BQk()),2&e){const n=l.$implicit,o=t.oxw();t.xp6(2),t.Tol(n.class),t.Q6J("routerLink",t.VKq(8,v,n.routerLink))("ngClass",t.WLB(10,x,!o.isActive(n.routerLink),o.isActive(n.routerLink)))("ngClass",n.class?n.class:""),t.xp6(1),t.hij(" ",t.lcZ(4,6,n.label)," ")}}function C(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"button",21),t._UZ(2,"img",22),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("src",n.isSelectLanguage.picture_url,t.LSH)("alt",n.isSelectLanguage.id)}}function y(e,l){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"li")(2,"a",23),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.onSelectLanguage(r))})("keydown.enter",function(){const r=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.onSelectLanguage(r))})("keydown.space",function(){const r=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.onSelectLanguage(r))}),t.TgZ(3,"div",24),t._UZ(4,"img",22),t.TgZ(5,"p"),t._uU(6),t.qZA()()()(),t.BQk()}if(2&e){const n=l.$implicit;t.xp6(4),t.Q6J("src",n.picture_url,t.LSH)("alt",n.id),t.xp6(2),t.hij(" ",n.language_name," ")}}let M=(()=>{class e{constructor(n,o,i,r){this.router=n,this.languageService=o,this.themeService=i,this.translate=r,this.faSun=d.S9Y,this.faMoon=d.sdz,this.languageService.getSelectedLanguage().subscribe(s=>{this.translate.setDefaultLang(s.language_code.toLowerCase())})}ngOnInit(){this.isDarkMode=this.themeService.isDarkMode(),this.languageService.loadLanguages().subscribe(n=>{this.languages=n}),this.languageService.getSelectedLanguage().subscribe(n=>{n&&(this.isSelectLanguage=n)}),this.initListMenu(),setTimeout(()=>{this.checkActiveLinks()},0)}onSelectLanguage(n){this.languageService.setLanguage(n)}toggleDarkMode(){this.themeService.toggleDarkMode()}isActive(n){return this.router.isActive(n,!0)}checkActiveLinks(){this.listMenu.forEach(n=>{n.class=this.router.isActive(n.routerLink,!0)?"text-blue-600 dark:text-blue-400":"text-gray-700 dark:text-gray-200"})}initListMenu(){this.listMenu=[{id:1,label:"nav.home",routerLink:"home",class:""},{id:2,label:"nav.about",routerLink:"about",class:""},{id:3,label:"nav.contact",routerLink:"contact",class:""}]}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(g.F0),t.Y36(m.T),t.Y36(f.f),t.Y36(u.sK))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-navbar"]],decls:21,vars:4,consts:[[1,"bg-white","px-5","border-gray-200","dark:bg-zinc-900","shadow-sm"],[1,"container","flex","items-center","justify-between","mx-auto","p-2","gap-4"],["id","navbar-language",1,"items-center","justify-between","w-full","flex"],[1,"flex","gap-5","sm:gap-8","font-medium","py-4","rounded-lg"],[4,"ngFor","ngForOf"],[1,"switch"],[1,"sun"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24"],["fill","#ffd43b"],["r","5","cy","12","cx","12"],["d","m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"],[1,"moon"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 384 512"],["d","m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"],["type","checkbox",1,"input",3,"checked","change"],[1,"slider"],[1,"flex","items-center"],[4,"ngIf"],["id","language-dropdown-menu",1,"z-50","hidden","my-4","text-base","list-none","bg-white","divide-y","divide-gray-100","rounded-lg","shadow","dark:bg-zinc-700"],["role","none",1,"py-2","font-medium"],[1,"block","rounded","hover:text-blue-300","dark:hover:text-blue-200",3,"routerLink","ngClass"],["type","button","data-dropdown-toggle","language-dropdown-menu",1,"inline-flex","items-center","font-medium","justify-center","w-10","h-8","text-gray-900","dark:text-gray-50","rounded-lg","cursor-pointer","hover:bg-gray-100","dark:hover:bg-gray-700","dark:hover:text-white","focus:ring-4","focus:ring-gray-200","dark:focus:ring-gray-700"],[1,"h-auto","w-8",3,"src","alt"],["role","menuitem","tabindex","0",1,"block","w-40","px-4","py-2","text-sm","text-gray-700","hover:bg-gray-100","dark:text-gray-400","dark:hover:bg-zinc-600","dark:hover:text-white","cursor-pointer",3,"click","keydown.enter","keydown.space"],[1,"flex","justify-start","items-center","gap-3"]],template:function(o,i){1&o&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"div",2)(3,"ul",3),t.YNc(4,b,5,13,"ng-container",4),t.qZA()(),t.TgZ(5,"label",5)(6,"span",6),t.O4$(),t.TgZ(7,"svg",7)(8,"g",8),t._UZ(9,"circle",9)(10,"path",10),t.qZA()()(),t.kcU(),t.TgZ(11,"span",11),t.O4$(),t.TgZ(12,"svg",12),t._UZ(13,"path",13),t.qZA()(),t.kcU(),t.TgZ(14,"input",14),t.NdJ("change",function(){return i.toggleDarkMode()}),t.qZA(),t._UZ(15,"span",15),t.qZA(),t.TgZ(16,"div",16),t.YNc(17,C,3,2,"ng-container",17),t.TgZ(18,"div",18)(19,"ul",19),t.YNc(20,y,7,3,"ng-container",4),t.qZA()()()()()),2&o&&(t.xp6(4),t.Q6J("ngForOf",i.listMenu),t.xp6(10),t.Q6J("checked",i.isDarkMode),t.xp6(3),t.Q6J("ngIf",i.isSelectLanguage),t.xp6(3),t.Q6J("ngForOf",i.languages))},dependencies:[c.mk,c.sg,c.O5,g.rH,u.X$],styles:['.switch[_ngcontent-%COMP%]{font-size:17px;position:relative;display:inline-block;width:63px;height:28px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#73c0fc;transition:.4s;border-radius:30px}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:22px;width:22px;border-radius:20px;left:2px;bottom:3px;z-index:2;background-color:#e8e8e8;transition:.4s}.sun[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;top:2px;left:32px;z-index:1;width:24px;height:24px}.moon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#73c0fc;position:absolute;top:4px;left:4px;z-index:1;width:20px;height:20px}.sun[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_rotate 15s linear infinite}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.moon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_tilt 5s linear infinite}@keyframes _ngcontent-%COMP%_tilt{0%{transform:rotate(0)}25%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}to{transform:rotate(0)}}.input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#183153}.input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #183153}.input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(30px)}']})}return e})();var p=a(5670);const T=function(e){return{"opacity-100 cursor-pointer":e}};let k=(()=>{class e{constructor(){this.showScrollHeight=200,this.hideScrollHeight=200,this.faChevronCircleUp=d._qI}onWindowScroll(){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>this.showScrollHeight?this.showScroll=!0:this.showScroll&&(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)<this.hideScrollHeight&&(this.showScroll=!1)}scrollToTop(){(()=>{const i=document.documentElement.scrollTop||document.body.scrollTop;i>0&&window.scrollTo(0,i-1e3)})()}static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-scroll-to-top"]],hostBindings:function(o,i){1&o&&t.NdJ("scroll",function(){return i.onWindowScroll()},!1,t.Jf7)},decls:1,vars:4,consts:[[1,"fixed","opacity-0","transition-opacity","ease-in-out","z-50","right-8","bottom-8","text-6xl","text-gray-600","dark:text-gray-400",3,"icon","ngClass","click"]],template:function(o,i){1&o&&(t.TgZ(0,"fa-icon",0),t.NdJ("click",function(){return i.scrollToTop()}),t.qZA()),2&o&&t.Q6J("icon",i.faChevronCircleUp)("ngClass",t.VKq(2,T,i.showScroll))},dependencies:[c.mk,p.BN]})}return e})();const w=function(e,l){return{"navbar-visible":e,"navbar-hidden":l}};let S=(()=>{class e{constructor(){this.previousScrollY=0,this.navbarVisible=!0}onScroll(){const n=window.scrollY;this.navbarVisible=n<this.previousScrollY||n<=0,this.previousScrollY=n}static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-main"]],hostBindings:function(o,i){1&o&&t.NdJ("scroll",function(s){return i.onScroll(s)},!1,t.Jf7)},decls:5,vars:4,consts:[[1,"w-screen","h-screen","flex","flex-col"],[3,"ngClass"],[1,"flex-1","bg-gradient-to-t","from-gray-50","via-gray-100","to-gray-50","dark:from-zinc-900","dark:via-zinc-800","dark:to-zinc-700"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-navbar",1),t.TgZ(2,"div",2),t._UZ(3,"router-outlet"),t.qZA()(),t._UZ(4,"app-scroll-to-top")),2&o&&(t.xp6(1),t.Q6J("ngClass",t.WLB(1,w,i.navbarVisible,!i.navbarVisible)))},dependencies:[c.mk,M,k,g.lC],styles:["app-navbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:1000;transition:transform .5s ease,opacity .1s ease}.navbar-visible[_ngcontent-%COMP%]{transform:translateY(0)}.navbar-hidden[_ngcontent-%COMP%]{transform:translateY(-100%)}"]})}return e})(),Z=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[c.ez,p.uH,g.Bz,u.aw]})}return e})(),O=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[c.ez,p.uH]})}return e})(),_=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[c.ez,Z,O,g.Bz.forChild([{path:"",component:S,children:[{path:"home",loadChildren:()=>Promise.all([a.e(592),a.e(771)]).then(a.bind(a,9771)).then(n=>n.HomeModule)},{path:"about",loadChildren:()=>Promise.all([a.e(592),a.e(390)]).then(a.bind(a,3390)).then(n=>n.AboutModule)},{path:"contact",loadChildren:()=>Promise.all([a.e(592),a.e(720)]).then(a.bind(a,6720)).then(n=>n.ContactModule)},{path:"**",redirectTo:"home"}]}])]})}return e})()}}]);