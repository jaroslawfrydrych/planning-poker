(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5EX2":function(e,t){e.exports="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},FGo3:function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},GM61:function(e,t,n){"use strict";n.r(t),n.d(t,"GuestModule",(function(){return he}));var o,r=n("2kYt"),c=n("nIj0"),i=n("yDe4"),a=n("PCNd"),s=n("sEIs"),u=n("D57K"),l=n("IdLP"),b=n("YtkY"),p=n("aiQ1"),d=n("l3rL"),g=n("QvUv"),m=n("jJz7");!function(e){class t{}t.type="[GuestActions] Initialize guest room number validation",e.GuestRoomNumberValidationInit=t;class n{}n.type="[GuestActions] Guest name init",e.GuestNameInit=n;class o{}o.type="[GuestActions] Initialize guest game",e.GuestGameInit=o;class r{constructor(e){this.roomNumber=e}}r.type="[GuestActions] Room number validation",e.RoomNumberValidation=r;class c{constructor(e){this.name=e}}c.type="[GuestActions] Join room",e.JoinRoom=c;class i{constructor(e){this.payload=e}}i.type="[GuestActions] Set room info",e.SetRoomInfo=i;class a{constructor(e){this.card=e}}a.type="[GuestActions] Choose card",e.ChooseCard=a;class s{}s.type="[GuestActions] Get game state",e.GetGameState=s;class u{}u.type="[GuestActions] Get room remove",e.GetRoomRemove=u;class l{}l.type="[GuestActions] Get players results",e.GetPlayersResults=l;class b{}b.type="[GuestActions] Remove room",e.RemoveRoom=b;class p{}p.type="[GuestActions] Leave room",e.LeaveRoom=p}(o||(o={}));var O=n("8j5Y"),y=n("kuMc"),h=n("lQSW"),f=n("EM62"),j=n("PKRn"),v=o.JoinRoom,S=o.ChooseCard,R=o.GuestGameInit,C=o.RoomNumberValidation,w=o.GuestRoomNumberValidationInit,P=o.GuestNameInit,N=o.GetGameState,G=o.LeaveRoom,$=o.RemoveRoom,I=o.SetRoomInfo,k=o.GetRoomRemove,_=o.GetPlayersResults;let M=(()=>{let e=class{constructor(e,t,n){this.$gaService=e,this.guestService=t,this.actions$=n}static isRoomNumberValid(e){return e.isRoomNumberValid}static roomNumber(e){return e.roomNumber}static hasRoomNumber(e){return!!e.roomNumber}static card(e){return e.card}static gameState(e){return e.gameState}static availableCards(e){return e.availableCards}static players(e){return Array.from(e.players.values())}guestRoomNumberValidationInit(){this.$gaService.pageView("/guest/room-code")}guestNameInit(){this.$gaService.pageView("/guest/your-name")}guestGameInit(){this.$gaService.pageView("/guest/game"),this.guestService.roomJoined()}roomCode(e,{roomNumber:t}){return this.guestService.validateRoomNumber(t).pipe(Object(b.a)((e=>e.valid)),Object(O.a)((n=>{const o=e.getState();n?(this.$gaService.event("code_enter_valid","guest","Enter code valid"),e.setState(Object.assign(Object.assign({},o),{roomNumber:t,isRoomNumberValid:n}))):(this.$gaService.event("code_enter_invalid","guest","Enter code invalid"),e.setState(Object.assign(Object.assign({},o),{isRoomNumberValid:n})))})))}joinRoom(e,{name:t}){const n=e.getState();this.guestService.joinRoom(t,n.roomNumber),e.setState(Object.assign(Object.assign({},n),{name:t}))}setRoomInfo(e,{payload:t}){const n=e.getState();e.setState(Object.assign(Object.assign({},n),{gameState:t.gameState,availableCards:this.guestService.availableCards}))}getGameState(e){this.guestService.getGameState().pipe(Object(y.a)(this.actions$.pipe(Object(i.j)(G,$)))).subscribe((t=>{const n=e.getState();e.setState(Object.assign(Object.assign({},n),t===d.b.IN_PROGRESS?{gameState:t,card:null}:{gameState:t}))}))}getPlayersResults(e){this.guestService.getResults().pipe(Object(y.a)(this.actions$.pipe(Object(i.j)(G,$)))).subscribe((t=>{const n=new Map;Object.keys(t).forEach((e=>{n.set(e,{id:e,name:t[e].name,card:t[e].card})})),e.patchState({players:n})}))}getRoomRemove(e){this.guestService.roomRemove().pipe(Object(y.a)(this.actions$.pipe(Object(i.j)(G,$)))).subscribe((()=>{e.dispatch(new $)}))}chooseCard(e,{card:t}){this.$gaService.event("user_voted","guest","User voted");const n=e.getState();n.gameState!==d.b.REVIEW&&(this.guestService.chooseCard(t,n.roomNumber),e.patchState({card:t}))}leaveRoom(){this.$gaService.event("user_leave_room","guest","User leved room"),this.guestService.leaveRoom()}resetRoom(e){e.setState({name:null,card:null,gameState:null,isRoomNumberValid:null,roomNumber:null,availableCards:[],players:new Map})}};return e.\u0275fac=function(t){return new(t||e)(f.Tb(j.a),f.Tb(h.a),f.Tb(i.b))},e.\u0275prov=f.Gb({token:e,factory:e.\u0275fac}),Object(u.b)([Object(i.a)(w),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[]),Object(u.c)("design:returntype",void 0)],e.prototype,"guestRoomNumberValidationInit",null),Object(u.b)([Object(i.a)(P),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[]),Object(u.c)("design:returntype",void 0)],e.prototype,"guestNameInit",null),Object(u.b)([Object(i.a)(R),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[]),Object(u.c)("design:returntype",void 0)],e.prototype,"guestGameInit",null),Object(u.b)([Object(i.a)(C),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object,Object]),Object(u.c)("design:returntype",l.a)],e.prototype,"roomCode",null),Object(u.b)([Object(i.a)(v),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object,Object]),Object(u.c)("design:returntype",void 0)],e.prototype,"joinRoom",null),Object(u.b)([Object(i.a)(I),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object,Object]),Object(u.c)("design:returntype",void 0)],e.prototype,"setRoomInfo",null),Object(u.b)([Object(i.a)(N),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object]),Object(u.c)("design:returntype",void 0)],e.prototype,"getGameState",null),Object(u.b)([Object(i.a)(_),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object]),Object(u.c)("design:returntype",void 0)],e.prototype,"getPlayersResults",null),Object(u.b)([Object(i.a)(k),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object]),Object(u.c)("design:returntype",void 0)],e.prototype,"getRoomRemove",null),Object(u.b)([Object(i.a)(S),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object,Object]),Object(u.c)("design:returntype",void 0)],e.prototype,"chooseCard",null),Object(u.b)([Object(i.a)(G),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[]),Object(u.c)("design:returntype",void 0)],e.prototype,"leaveRoom",null),Object(u.b)([Object(i.a)([$,G]),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object]),Object(u.c)("design:returntype",void 0)],e.prototype,"resetRoom",null),Object(u.b)([Object(i.f)(),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object]),Object(u.c)("design:returntype",Boolean)],e,"isRoomNumberValid",null),Object(u.b)([Object(i.f)(),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object]),Object(u.c)("design:returntype",String)],e,"roomNumber",null),Object(u.b)([Object(i.f)(),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object]),Object(u.c)("design:returntype",Boolean)],e,"hasRoomNumber",null),Object(u.b)([Object(i.f)(),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object]),Object(u.c)("design:returntype",Object)],e,"card",null),Object(u.b)([Object(i.f)(),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object]),Object(u.c)("design:returntype",String)],e,"gameState",null),Object(u.b)([Object(i.f)(),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object]),Object(u.c)("design:returntype",Array)],e,"availableCards",null),Object(u.b)([Object(i.f)(),Object(u.c)("design:type",Function),Object(u.c)("design:paramtypes",[Object]),Object(u.c)("design:returntype",Array)],e,"players",null),e=Object(u.b)([Object(i.g)({name:"guest",defaults:{name:null,card:null,gameState:null,isRoomNumberValid:null,roomNumber:null,availableCards:[],players:new Map}})],e),e})();var A=n("CjZh"),E=n("rdFE"),x=n("UJG0"),F=n("guRg"),V=o.ChooseCard,z=o.GuestGameInit,L=o.GetGameState,B=o.RemoveRoom,D=o.LeaveRoom,J=o.GetRoomRemove,U=o.GetPlayersResults;function T(e,t){if(1&e){const e=f.Qb();f.Nb(0),f.Pb(1,"planning-poker-card-container"),f.Pb(2,"button",4),f.Wb("click",(function(){f.ic(e);const n=t.$implicit;return f.Yb().onCardClick(n)})),f.Ob(),f.Pb(3,"planning-poker-card-item"),f.Zb(4,"async"),f.Zb(5,"async"),f.Lb(6,"planning-poker-card-symbol",5),f.Ob(),f.Ob(),f.Mb()}if(2&e){const e=t.$implicit,n=f.Yb();f.Ab(3),f.Cb("card-selected",f.ac(4,5,n.isCardSelected(e)))("card-not-selected",f.ac(5,7,n.isCardNotSelected(e))),f.Ab(3),f.ec("card",e)}}function K(e,t){if(1&e&&(f.Pb(0,"div",6),f.Lb(1,"div",7),f.Pb(2,"div",8),f.Pb(3,"h1"),f.mc(4,"Voting results"),f.Ob(),f.Lb(5,"planning-poker-table",9),f.Ob(),f.Ob()),2&e){const e=f.Yb();f.Ab(5),f.ec("gameState$",e.gameState$)("cardsInRow",7)("players$",e.players$)}}let H=(()=>{let e=class{constructor(e,t,n,o){this.router=e,this.actions$=t,this.store=n,this.environmentService=o}get isInReview$(){return this.gameState$.pipe(Object(b.a)((e=>e===d.b.REVIEW)))}ngOnInit(){this.store.dispatch([new z,new L,new J,new U]),this.cards=this.store.selectSnapshot(M.availableCards),this.actions$.pipe(Object(i.k)(B),Object(g.b)(this)).subscribe((()=>this.navigateToLadingPage()))}ngOnDestroy(){this.store.dispatch(D),this.navigateToLadingPage()}onCardClick(e){this.store.selectSnapshot(M.gameState)!==d.b.REVIEW&&this.store.dispatch(new V(e))}isCardSelected(e){return this.card$.pipe(Object(b.a)((t=>t===e)))}isCardNotSelected(e){return this.card$.pipe(Object(b.a)((t=>!Object(p.isNullOrUndefined)(t)&&t!==e)))}beforeUnloadHandler(){if(this.environmentService.production)return!1}navigateToLadingPage(){this.router.navigateByUrl("/")}};return e.\u0275fac=function(t){return new(t||e)(f.Kb(s.c),f.Kb(i.b),f.Kb(i.h),f.Kb(m.a))},e.\u0275cmp=f.Eb({type:e,selectors:[["planning-poker-game"]],hostBindings:function(e,t){1&e&&f.Wb("beforeunload",(function(){return t.beforeUnloadHandler()}),!1,f.hc)},decls:8,vars:7,consts:[[1,"header"],[1,"cards"],[4,"ngFor","ngForOf"],["class","modal-container",4,"ngIf"],[3,"click"],[3,"card"],[1,"modal-container"],[1,"modal-overlay"],[1,"modal-content"],[3,"gameState$","cardsInRow","players$"]],template:function(e,t){1&e&&(f.Pb(0,"div",0),f.Pb(1,"h1"),f.mc(2),f.Zb(3,"async"),f.Ob(),f.Ob(),f.Pb(4,"div",1),f.lc(5,T,7,9,"ng-container",2),f.Ob(),f.lc(6,K,6,3,"div",3),f.Zb(7,"async")),2&e&&(f.Ab(2),f.oc("Room ",f.ac(3,3,t.roomNumber$),""),f.Ab(3),f.ec("ngForOf",t.cards),f.Ab(1),f.ec("ngIf",f.ac(7,5,t.isInReview$)))},directives:[r.j,r.k,A.a,E.a,x.a,F.a],pipes:[r.b],styles:['[_nghost-%COMP%]{padding:1.6666666667em;display:flex;align-items:flex-start;flex-direction:column;width:100%;height:100%}.header[_ngcontent-%COMP%]{margin:0 1% 1%}.cards[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:row;flex-wrap:wrap}.cards[_ngcontent-%COMP%]   planning-poker-card-container[_ngcontent-%COMP%]{width:12.2857142857%}.cards[_ngcontent-%COMP%]   planning-poker-card-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;cursor:pointer;-webkit-appearance:none;border-style:none;opacity:0}.cards[_ngcontent-%COMP%]   planning-poker-card-container[_ngcontent-%COMP%]   planning-poker-card-item.card-selected[_ngcontent-%COMP%]{transform:scale(1.075)}.cards[_ngcontent-%COMP%]   planning-poker-card-container[_ngcontent-%COMP%]   planning-poker-card-item.card-not-selected[_ngcontent-%COMP%]{opacity:.4}.sidebar[_ngcontent-%COMP%]{width:35%;padding:1.3888888889em}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:1.1111111111em 0;display:block}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;padding:.1111111111em 0;display:block;list-style:none}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"- "}.modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{height:90%;width:90%;background-color:#1b1c2a}.modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:0 1% 1%;align-self:flex-start;font-size:38.4}']}),Object(u.b)([Object(i.e)(M.card),Object(u.c)("design:type",l.a)],e.prototype,"card$",void 0),Object(u.b)([Object(i.e)(M.roomNumber),Object(u.c)("design:type",l.a)],e.prototype,"roomNumber$",void 0),Object(u.b)([Object(i.e)(M.gameState),Object(u.c)("design:type",l.a)],e.prototype,"gameState$",void 0),Object(u.b)([Object(i.e)(M.players),Object(u.c)("design:type",l.a)],e.prototype,"players$",void 0),e=Object(u.b)([Object(g.a)()],e),e})(),W=(()=>{class e{constructor(e,t,n){this.store=e,this.guestService=t,this.router=n}canActivate(){return this.store.select(M.hasRoomNumber).pipe(Object(O.a)((e=>{e||this.router.navigateByUrl("/")})))}}return e.\u0275fac=function(t){return new(t||e)(f.Tb(i.h),f.Tb(h.a),f.Tb(s.c))},e.\u0275prov=f.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Q=o.SetRoomInfo;let Y=(()=>{class e{constructor(e,t){this.guestService=e,this.store=t}resolve(){return this.guestService.getRoomInfo(this.store.selectSnapshot(M.roomNumber)).pipe(Object(O.a)((e=>this.store.dispatch(new Q(e)))))}}return e.\u0275fac=function(t){return new(t||e)(f.Tb(h.a),f.Tb(i.h))},e.\u0275prov=f.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=n("C05f"),q=n("ruxD"),X=n("cJ9h"),ee=n("BwBJ"),te=n("ur7N"),ne=n("rqBn"),oe=n("6EaX"),re=n("hi3J"),ce=o.RoomNumberValidation,ie=o.GuestRoomNumberValidationInit;let ae=(()=>{let e=class{constructor(e,t,n,o){this.router=e,this.store=t,this.$gaService=n,this.activatedRoute=o,this.queryRoomCode=null,this.loadingSubject$=new Z.a(!1),this.successSubject$=new Z.a(!1),this.errorSubject$=new Z.a(!1),this.loading$=this.loadingSubject$.asObservable(),this.success$=this.successSubject$.asObservable(),this.error$=this.errorSubject$.asObservable()}ngOnInit(){this.store.dispatch(new ie),this.handleQueryParams()}onRoomNumberSubmit(e){this.loadingSubject$.getValue()||(this.loadingSubject$.next(!0),this.store.dispatch(new ce(e)).pipe(Object(q.a)((()=>this.loadingSubject$.next(!1))),Object(X.a)((()=>this.store.select(M.isRoomNumberValid))),Object(O.a)((e=>{e?this.successSubject$.next(!0):this.errorSubject$.next(!0)})),Object(ee.a)(1e3),Object(O.a)((()=>this.errorSubject$.next(!1))),Object(g.b)(this)).subscribe((e=>this.handleRoomNumberValidation(e))))}handleRoomNumberValidation(e){e?this.router.navigateByUrl("/guest/your-name"):this.codeComponent.reset()}handleQueryParams(){const e=this.activatedRoute.snapshot.queryParams;e.code&&(this.queryRoomCode=e.code)}};return e.\u0275fac=function(t){return new(t||e)(f.Kb(s.c),f.Kb(i.h),f.Kb(j.a),f.Kb(s.a))},e.\u0275cmp=f.Eb({type:e,selectors:[["planning-poker-room-code"]],viewQuery:function(e,t){var n;1&e&&f.pc(te.a,!0),2&e&&f.fc(n=f.Xb())&&(t.codeComponent=n.first)},decls:6,vars:5,consts:[[3,"codeLength","value","isLoading$","isSuccess$","isError$","codeSubmit"]],template:function(e,t){1&e&&(f.Pb(0,"planning-poker-layout"),f.Pb(1,"planning-poker-header"),f.Pb(2,"h1"),f.mc(3,"Join to exsiting room"),f.Ob(),f.Ob(),f.Pb(4,"planning-poker-content"),f.Pb(5,"planning-poker-code",0),f.Wb("codeSubmit",(function(e){return t.onRoomNumberSubmit(e)})),f.Ob(),f.Ob(),f.Ob()),2&e&&(f.Ab(5),f.ec("codeLength",5)("value",t.queryRoomCode)("isLoading$",t.loading$)("isSuccess$",t.success$)("isError$",t.error$))},directives:[ne.a,oe.a,re.a,te.a],styles:[""],changeDetection:0}),e=Object(u.b)([Object(g.a)()],e),e})(),se=(()=>{class e{constructor(e,t){this.store=e,this.router=t}canActivate(){return this.store.select(M.hasRoomNumber).pipe(Object(b.a)((e=>!e||(this.router.navigateByUrl("/"),!1))))}}return e.\u0275fac=function(t){return new(t||e)(f.Tb(i.h),f.Tb(s.c))},e.\u0275prov=f.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var ue=n("dN4T"),le=n("sRyt"),be=n("d7z7"),pe=n("M0Hd"),de=n("W79N"),ge=o.JoinRoom,me=o.GuestNameInit;const Oe=[{path:"room-code",component:ae,canActivate:[se],data:{animation:"RoomCodeComponent"}},{path:"your-name",component:(()=>{let e=class{constructor(e,t,n){this.formBuilder=e,this.router=t,this.store=n,this.userNameLocalStorageItemKey="user-name"}ngOnInit(){this.store.dispatch(new me);const e=localStorage.getItem(this.userNameLocalStorageItemKey);this.formGroup=this.formBuilder.group({name:this.formBuilder.control(e||null,[c.j.required])})}get nameFormControl(){return this.formGroup.get("name")}submit(){this.formGroup.valid&&(localStorage.setItem(this.userNameLocalStorageItemKey,this.nameFormControl.value),this.store.dispatch(new ge(this.nameFormControl.value)).pipe(Object(g.b)(this)).subscribe((()=>this.router.navigateByUrl("/guest/game"))))}};return e.\u0275fac=function(t){return new(t||e)(f.Kb(c.b),f.Kb(s.c),f.Kb(i.h))},e.\u0275cmp=f.Eb({type:e,selectors:[["planning-poker-your-name"]],decls:11,vars:1,consts:[[3,"formGroup"],["type","text","formControlName","name","planningPokerFocus","","planningPokerInput",""],["planningPokerButton","",3,"click"]],template:function(e,t){1&e&&(f.Pb(0,"planning-poker-layout"),f.Pb(1,"planning-poker-header"),f.Pb(2,"h1"),f.mc(3,"Introduce yourself"),f.Ob(),f.Ob(),f.Pb(4,"planning-poker-content"),f.Pb(5,"planning-poker-form-container"),f.Pb(6,"form",0),f.Lb(7,"input",1),f.Pb(8,"button",2),f.Wb("click",(function(){return t.submit()})),f.Pb(9,"planning-poker-icon"),f.mc(10," arrow_forward "),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Ob()),2&e&&(f.Ab(6),f.ec("formGroup",t.formGroup))},directives:[ne.a,oe.a,re.a,ue.a,c.k,c.h,c.e,c.a,c.g,c.d,le.a,be.a,pe.a,de.a],styles:[""],changeDetection:0}),e=Object(u.b)([Object(g.a)()],e),e})(),canActivate:[(()=>{class e{constructor(e,t){this.store=e,this.router=t}canActivate(){return this.store.select(M.hasRoomNumber).pipe(Object(O.a)((e=>{e||this.router.navigateByUrl("/")})))}}return e.\u0275fac=function(t){return new(t||e)(f.Tb(i.h),f.Tb(s.c))},e.\u0275prov=f.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()],data:{animation:"YourNameComponent"}},{path:"game",component:H,canActivate:[W],resolve:{data:Y},data:{animation:"GameComponent"}},{path:"**",redirectTo:"room-code"}];let ye=(()=>{class e{}return e.\u0275mod=f.Ib({type:e}),e.\u0275inj=f.Hb({factory:function(t){return new(t||e)},imports:[[s.d.forChild(Oe)],s.d]}),e})(),he=(()=>{class e{}return e.\u0275mod=f.Ib({type:e}),e.\u0275inj=f.Hb({factory:function(t){return new(t||e)},imports:[[r.c,ye,a.a,c.i,i.d.forFeature([M])]]}),e})()},aiQ1:function(e,t,n){var o=/%[sdj%]/g;t.format=function(e){if(!O(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,c=r.length,a=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=c)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}})),s=r[n];n<c;s=r[++n])g(s)||!f(s)?a+=" "+s:a+=" "+i(s);return a},t.deprecate=function(e,n){if(y(global.process))return function(){return t.deprecate(e,n).apply(this,arguments)};if(!0===process.noDeprecation)return e;var o=!1;return function(){if(!o){if(process.throwDeprecation)throw new Error(n);process.traceDeprecation?console.trace(n):console.error(n),o=!0}return e.apply(this,arguments)}};var r,c={};function i(e,n){var o={seen:[],stylize:s};return arguments.length>=3&&(o.depth=arguments[2]),arguments.length>=4&&(o.colors=arguments[3]),d(n)?o.showHidden=n:n&&t._extend(o,n),y(o.showHidden)&&(o.showHidden=!1),y(o.depth)&&(o.depth=2),y(o.colors)&&(o.colors=!1),y(o.customInspect)&&(o.customInspect=!0),o.colors&&(o.stylize=a),u(o,e,o.depth)}function a(e,t){var n=i.styles[t];return n?"\x1b["+i.colors[n][0]+"m"+e+"\x1b["+i.colors[n][1]+"m":e}function s(e,t){return e}function u(e,n,o){if(e.customInspect&&n&&S(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var r=n.inspect(o,e);return O(r)||(r=u(e,r,o)),r}var c=function(e,t){if(y(t))return e.stylize("undefined","undefined");if(O(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return m(t)?e.stylize(""+t,"number"):d(t)?e.stylize(""+t,"boolean"):g(t)?e.stylize("null","null"):void 0}(e,n);if(c)return c;var i=Object.keys(n),a=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(n)),v(n)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return l(n);if(0===i.length){if(S(n))return e.stylize("[Function"+(n.name?": "+n.name:"")+"]","special");if(h(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return e.stylize(Date.prototype.toString.call(n),"date");if(v(n))return l(n)}var s,f="",R=!1,C=["{","}"];return p(n)&&(R=!0,C=["[","]"]),S(n)&&(f=" [Function"+(n.name?": "+n.name:"")+"]"),h(n)&&(f=" "+RegExp.prototype.toString.call(n)),j(n)&&(f=" "+Date.prototype.toUTCString.call(n)),v(n)&&(f=" "+l(n)),0!==i.length||R&&0!=n.length?o<0?h(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),s=R?function(e,t,n,o,r){for(var c=[],i=0,a=t.length;i<a;++i)N(t,String(i))?c.push(b(e,t,n,o,String(i),!0)):c.push("");return r.forEach((function(r){r.match(/^\d+$/)||c.push(b(e,t,n,o,r,!0))})),c}(e,n,o,a,i):i.map((function(t){return b(e,n,o,a,t,R)})),e.seen.pop(),function(e,t,n){return e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}(s,f,C)):C[0]+f+C[1]}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function b(e,t,n,o,r,c){var i,a,s;if((s=Object.getOwnPropertyDescriptor(t,r)||{value:t[r]}).get?a=e.stylize(s.set?"[Getter/Setter]":"[Getter]","special"):s.set&&(a=e.stylize("[Setter]","special")),N(o,r)||(i="["+r+"]"),a||(e.seen.indexOf(s.value)<0?(a=g(n)?u(e,s.value,null):u(e,s.value,n-1)).indexOf("\n")>-1&&(a=c?a.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+a.split("\n").map((function(e){return"   "+e})).join("\n")):a=e.stylize("[Circular]","special")),y(i)){if(c&&r.match(/^\d+$/))return a;(i=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(i=i.substr(1,i.length-2),i=e.stylize(i,"name")):(i=i.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),i=e.stylize(i,"string"))}return i+": "+a}function p(e){return Array.isArray(e)}function d(e){return"boolean"==typeof e}function g(e){return null===e}function m(e){return"number"==typeof e}function O(e){return"string"==typeof e}function y(e){return void 0===e}function h(e){return f(e)&&"[object RegExp]"===R(e)}function f(e){return"object"==typeof e&&null!==e}function j(e){return f(e)&&"[object Date]"===R(e)}function v(e){return f(e)&&("[object Error]"===R(e)||e instanceof Error)}function S(e){return"function"==typeof e}function R(e){return Object.prototype.toString.call(e)}function C(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(y(r)&&(r=process.env.NODE_DEBUG||""),e=e.toUpperCase(),!c[e])if(new RegExp("\\b"+e+"\\b","i").test(r)){var n=process.pid;c[e]=function(){var o=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,o)}}else c[e]=function(){};return c[e]},t.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=d,t.isNull=g,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=O,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=y,t.isRegExp=h,t.isObject=f,t.isDate=j,t.isError=v,t.isFunction=S,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n("FGo3");var w=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function P(){var e=new Date,t=[C(e.getHours()),C(e.getMinutes()),C(e.getSeconds())].join(":");return[e.getDate(),w[e.getMonth()],t].join(" ")}function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",P(),t.format.apply(t,arguments))},t.inherits=n("5EX2"),t._extend=function(e,t){if(!t||!f(t))return e;for(var n=Object.keys(t),o=n.length;o--;)e[n[o]]=t[n[o]];return e}}}]);