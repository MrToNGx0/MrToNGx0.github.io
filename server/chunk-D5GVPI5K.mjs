import './polyfills.server.mjs';
import{a as w}from"./chunk-YANCSK4H.mjs";import{$ as C,Aa as h,D as o,I as f,K as d,M as a,N as e,O as g,P as c,Q as s,U as x,Ua as k,Y as n,Z as b,_ as l,aa as S,e as v,j as y,k as E,xa as _,ya as I}from"./chunk-MIZYVDFS.mjs";import"./chunk-NDYDZJSS.mjs";function T(i,r){if(i&1&&(c(0),a(1,"div")(2,"h2",3),n(3," About Me "),e(),a(4,"p",4),n(5),e()(),s()),i&2){let t=x();o(5),S(" My name is ",t.info.firstName," ",t.info.lastName,", but you can call me ",t.info.nickname,". I'm a passionate full-stack software developer based in ",t.info.location,". I love creating dynamic and responsive web applications using modern technologies. ")}}function M(i,r){if(i&1&&(c(0),a(1,"div")(2,"h2",3),n(3," Skills "),e(),a(4,"ul",5)(5,"li")(6,"strong"),n(7,"Frontend:"),e(),n(8),e(),a(9,"li")(10,"strong"),n(11,"Backend:"),e(),n(12),e(),a(13,"li")(14,"strong"),n(15,"Database:"),e(),n(16),e(),a(17,"li")(18,"strong"),n(19,"Version Control:"),e(),n(20),e(),a(21,"li")(22,"strong"),n(23,"Containerization:"),e(),n(24),e()()(),s()),i&2){let t=x();o(8),l(" ",t.info.skills.frontend,""),o(4),l(" ",t.info.skills.backend,""),o(4),l(" ",t.info.skills.database,""),o(4),l(" ",t.info.skills.versionControl," "),o(4),l(" ",t.info.skills.containerization," ")}}function N(i,r){if(i&1&&(c(0),a(1,"ol",7)(2,"li",8),g(3,"div",9),a(4,"time",10),n(5),e(),a(6,"h3",11),n(7),e(),a(8,"h3",11),n(9),e(),a(10,"h3",12),n(11),e(),a(12,"p",13),n(13),e(),a(14,"p",14),n(15),e()()(),s()),i&2){let t=r.$implicit;o(5),b(t.graduationYear),o(2),l(" ",t.institute," "),o(2),l(" ",t.degree," "),o(2),l(" ",t.field," "),o(2),l(" ",t.major," "),o(2),l(" GAP : ",t.gpa," ")}}function j(i,r){if(i&1&&(c(0),a(1,"div")(2,"h2",3),n(3," Education "),e(),f(4,N,16,6,"ng-container",6),e(),s()),i&2){let t=x();o(4),d("ngForOf",t.info.education)}}function O(i,r){if(i&1&&(c(0),a(1,"ol",7)(2,"li",8),g(3,"div",9),a(4,"time",10),n(5),e(),a(6,"h3",11),n(7),e(),a(8,"h3",12),n(9),e(),a(10,"p",14),n(11),e()()(),s()),i&2){let t=r.$implicit;o(5),C("",t.startdate," - ",t.enddate,""),o(2),l(" ",t.company," "),o(2),l(" ",t.position," "),o(2),l(" ",t.responsibilities," ")}}function D(i,r){if(i&1&&(c(0),a(1,"div")(2,"h2",3),n(3," Experience "),e(),f(4,O,12,5,"ng-container",6),e(),s()),i&2){let t=x();o(4),d("ngForOf",t.info.experience)}}var F=(()=>{let r=class r{constructor(){}ngOnInit(){this.info=w.info}};r.\u0275fac=function(p){return new(p||r)},r.\u0275cmp=y({type:r,selectors:[["app-about"]],decls:6,vars:4,consts:[[1,"container","mx-auto","w-full","h-full","flex","justify-center","items-center","py-5"],[1,"flex","flex-col","justify-center","gap-5"],[4,"ngIf"],[1,"text-4xl","font-bold","text-gray-700","dark:text-white","mb-5"],[1,"text-lg","text-gray-600","dark:text-gray-400"],[1,"list-disc","list-inside","text-lg","text-gray-600","dark:text-gray-400"],[4,"ngFor","ngForOf"],[1,"relative","border-s","border-gray-200","dark:border-gray-700"],[1,"mb-10","ms-4"],[1,"absolute","w-3","h-3","bg-gray-200","rounded-full","mt-1.5","-start-1.5","border","border-white","dark:border-gray-900","dark:bg-gray-700"],[1,"mb-1","text-sm","font-normal","leading-none","text-gray-400","dark:text-gray-500"],[1,"text-lg","font-semibold","text-gray-700","dark:text-white"],[1,"text-base","font-semibold","text-gray-700","dark:text-white"],[1,"text-base","font-normal","text-gray-500","dark:text-gray-400"],[1,"mb-4","text-base","font-normal","text-gray-500","dark:text-gray-400"]],template:function(p,m){p&1&&(a(0,"div",0)(1,"div",1),f(2,T,6,4,"ng-container",2)(3,M,25,5,"ng-container",2)(4,j,5,1,"ng-container",2)(5,D,5,1,"ng-container",2),e()()),p&2&&(o(2),d("ngIf",m.info),o(),d("ngIf",m.info==null?null:m.info.skills),o(),d("ngIf",m.info==null?null:m.info.education),o(),d("ngIf",m.info==null?null:m.info.experience))},dependencies:[_,I]});let i=r;return i})();var V=(()=>{let r=class r{};r.\u0275fac=function(p){return new(p||r)},r.\u0275mod=E({type:r}),r.\u0275inj=v({imports:[h,k.forChild([{path:"",component:F}])]});let i=r;return i})();export{V as AboutModule};
