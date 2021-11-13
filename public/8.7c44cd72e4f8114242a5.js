(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ygAR:function(t,e,o){"use strict";o.r(e),o.d(e,"HostModule",function(){return Pt});var n=o("ofXK"),s=o("AcyG"),c=o("jmwG"),i=o("HYn3"),r=o("T1jq"),a=o("tyNb"),b=o("mrSG"),l=o("2Vo4"),p=o("l5mm"),u=o("HDdC"),h=o("7o/Q"),d=o("D0XW");class g{constructor(t,e){this.dueTime=t,this.scheduler=e}call(t,e){return e.subscribe(new m(t,this.dueTime,this.scheduler))}}class m extends h.a{constructor(t,e,o){super(t),this.dueTime=e,this.scheduler=o,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(O,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:t}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}clearDebounce(){const t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}function O(t){t.debouncedNext()}var j=o("pLZG"),y=o("JX91"),S=o("lJxs"),f=o("5+tZ"),v=o("IzEk"),C=o("w4Ql"),R=o("5qii"),w=o("GMPE"),k=o("fXoL");let P=(()=>{class t{copyText(t){const e=this.createInputElement();e.style.opacity="0",e.style["text-indent"]="-9999px",document.body.appendChild(e),this.setInputValue(e,t),this.selectInput(e),document.execCommand("copy"),this.removeElement(e)}createInputElement(){return document.createElement("input")}selectInput(t){t.select(),t.setSelectionRange(0,99999)}setInputValue(t,e){t.value=e}removeElement(t){t.blur(),t.remove()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=k.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var x=o("Cj2y"),G=o("em8+"),I=o("Ucnj"),$=o("VnIC");let M=(()=>{class t{constructor(t){this.pokerService=t}createRoom(){return this.pokerService.createRoom()}joinRoom(t){this.pokerService.joinRoom(t,C.d.HOST)}getPlayers(){return this.pokerService.getPlayers()}getResults(){return this.pokerService.getResults()}getGameState(){return this.pokerService.getGameState()}toggleGameState(t){return this.pokerService.toggleGameState(t)}closeRoom(t){this.pokerService.closeRoom(t)}playerVoted(){return this.pokerService.playerVoted()}getIsHostOfRoom(t){return this.pokerService.getIsHostOfRoom(t)}}return t.\u0275fac=function(e){return new(e||t)(k.Vb($.a))},t.\u0275prov=k.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var N;!function(t){class e{}e.type="[HostActions] Host board initialization",t.HostBoardInit=e;class o{}o.type="[HostActions] Create room",t.CreateRoom=o;class n{}n.type="[HostActions] Toggle Game State",t.ToggleGameState=n;class s{}s.type="[HostActions] Join room",t.JoinRoom=s;class c{}c.type="[HostActions] Get players",t.GetPlayers=c;class i{}i.type="[HostActions] Get results",t.GetResults=i;class r{}r.type="[HostActions] Get game state",t.GetGameState=r;class a{}a.type="[HostActions] Copy room link",t.CopyRoomLink=a;class b{}b.type="[HostActions] Close room",t.CloseRoom=b;class l{}l.type="[HostActions] Get player status",t.GetPlayerStatus=l}(N||(N={}));var T=o("Wdmj"),H=o("vkgz"),V=o("1G5W"),_=o("X4VB"),E=N.CloseRoom,F=N.CreateRoom,A=N.GetGameState,D=N.GetPlayers,B=N.JoinRoom,L=N.ToggleGameState,U=N.HostBoardInit,Q=N.CopyRoomLink,z=N.GetPlayerStatus,J=N.GetResults;let X=(()=>{let t=class{constructor(t,e,o){this.hostService=t,this.$gaService=e,this.actions$=o}static gameState(t){return t.gameState}static roomNumber(t){return t.roomNumber}static players(t){return Array.from(t.players.values())}hostBoardInit(){this.$gaService.pageView("/host/board")}createRoom(t){return this.hostService.createRoom().pipe(Object(H.a)(e=>{const o=t.getState();t.setState(Object.assign(Object.assign({},o),{roomNumber:e.id,gameState:e.gameState}))}),Object(f.a)(()=>t.dispatch(new B)))}toggleHostState(t){this.$gaService.event("toggle_game_state","host","Toggle game state");const e=t.getState();this.hostService.toggleGameState(e.roomNumber)}joinRoom(t){const e=t.getState();this.hostService.joinRoom(e.roomNumber)}getUsers(t){this.hostService.getPlayers().pipe(Object(V.a)(this.actions$.pipe(Object(s.j)(E)))).subscribe(e=>{const o=new Map;e.forEach(e=>{const n=this.getPlayerData(t,e.id);o.set(e.id,Object.assign(Object.assign({},n),e))}),t.patchState({players:o})})}getResults(t){this.hostService.getResults().pipe(Object(V.a)(this.actions$.pipe(Object(s.j)(E)))).subscribe(e=>{const o=t.getState().players;o&&o.size&&(o.forEach((t,n)=>{const s=e[n]||null;t.card=s&&s.card,o.set(n,t)}),t.patchState({players:o}))})}getGameState(t){this.hostService.getGameState().pipe(Object(V.a)(this.actions$.pipe(Object(s.j)(E)))).subscribe(e=>{e===C.b.IN_PROGRESS&&this.resetPlayersVotes(t),t.patchState({gameState:e})})}getPlayerStatus(t){this.hostService.playerVoted().pipe(Object(V.a)(this.actions$.pipe(Object(s.j)(E)))).subscribe(e=>{const o=t.getState().players,n=o.get(e);n&&(n.status=C.c.VOTED,o.set(e,n)),t.patchState({players:o})})}copyRoomLink(){this.$gaService.event("copy_room_link","host","Copy room link")}closeRoom(t){const e=t.getState();this.$gaService.event("close_room","host","Close room"),this.hostService.closeRoom(e.roomNumber)}resetPlayersVotes(t){const e=t.getState().players;e&&e.size&&(e.forEach((t,o)=>{t.status=C.c.WAITING,t.card=null,e.set(o,t)}),t.patchState({players:e}))}getPlayerData(t,e){const o=t.getState().players;return o&&o.get(e)||null}};return t.\u0275fac=function(e){return new(e||t)(k.Vb(M),k.Vb(T.a),k.Vb(s.b))},t.\u0275prov=k.Ib({token:t,factory:t.\u0275fac}),Object(b.b)([Object(s.a)(U),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[]),Object(b.c)("design:returntype",void 0)],t.prototype,"hostBoardInit",null),Object(b.b)([Object(s.a)(F),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",u.a)],t.prototype,"createRoom",null),Object(b.b)([Object(s.a)(L),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],t.prototype,"toggleHostState",null),Object(b.b)([Object(s.a)(B),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],t.prototype,"joinRoom",null),Object(b.b)([Object(s.a)(D),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],t.prototype,"getUsers",null),Object(b.b)([Object(s.a)(J),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],t.prototype,"getResults",null),Object(b.b)([Object(s.a)(A),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],t.prototype,"getGameState",null),Object(b.b)([Object(s.a)(z),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],t.prototype,"getPlayerStatus",null),Object(b.b)([Object(s.a)(Q),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[]),Object(b.c)("design:returntype",void 0)],t.prototype,"copyRoomLink",null),Object(b.b)([Object(s.a)(E),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],t.prototype,"closeRoom",null),Object(b.b)([Object(s.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",String)],t,"gameState",null),Object(b.b)([Object(s.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",String)],t,"roomNumber",null),Object(b.b)([Object(s.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",Array)],t,"players",null),t=Object(b.b)([Object(s.g)({name:_.a.HOST,defaults:{roomNumber:null,gameState:C.b.IN_PROGRESS,players:new Map}}),Object(b.c)("design:paramtypes",[M,T.a,s.b])],t),t})();var Y=o("XNiG"),W=o("SxV6");let q=(()=>{class t extends class{constructor(t,e){this.store=t,this.router=e}navigateToHomePage(){this.router.navigateByUrl("/")}hasRoomNumber(){return this.store.select(X.roomNumber).pipe(Object(S.a)(t=>!!t))}}{constructor(t,e,o){super(t,e),this.modalService=o,this.discardSubject=new Y.a}canActivate(){return this.hasRoomNumber().pipe(Object(S.a)(t=>t),Object(H.a)(t=>{t||this.navigateToHomePage()}))}canDeactivate(t,e,o,n){return"/?reconnectFailed=true"===n.url||this.modalService.confirm({text:"Are you sure to end this session?",confirmButtonText:"Yes",cancelButtonText:"No"}).pipe(Object(W.a)())}}return t.\u0275fac=function(e){return new(e||t)(k.Vb(s.h),k.Vb(a.c),k.Vb(R.c))},t.\u0275prov=k.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var K=o("VfLo"),Z=o("1eto"),tt=o("qjl1"),et=o("5dTU"),ot=N.CloseRoom,nt=N.GetGameState,st=N.GetPlayers,ct=N.ToggleGameState,it=N.HostBoardInit,rt=N.CopyRoomLink,at=N.GetPlayerStatus,bt=N.GetResults;function lt(t,e){1&t&&(k.Pb(0),k.pc(1,"New voting"),k.Ob())}function pt(t,e){1&t&&(k.Pb(0),k.pc(1,"Finish Voting"),k.Ob())}function ut(t,e){1&t&&(k.Pb(0),k.pc(1,"Get room link"),k.Ob())}function ht(t,e){1&t&&(k.Pb(0),k.pc(1,"Link copied"),k.Ob())}let dt=(()=>{let t=class{constructor(t,e,o,n,s,c,r,a){this.boardGuard=t,this.hostService=e,this.appService=o,this.router=n,this.environmentService=s,this.copyToClipboardService=c,this.store=r,this.modalService=a,this.gameStates=C.b,this.buttonColors=i.a,this.linkCopiedSubject$=new l.a(!1),this.linkCopied$=this.linkCopiedSubject$.asObservable()}ngOnInit(){this.dispatchOnInitActions(),this.store.dispatch(new it),this.currentTime$=this.getCurrentTime$(),this.handleSocketEvents(),this.handleIntervalHostCheck()}ngOnDestroy(){this.dispatchOnDestroyActions()}toggleGameState(){this.store.dispatch(new ct)}closeRoom(){this.router.navigateByUrl("/")}get roomLink(){const t=this.store.selectSnapshot(X.roomNumber);return window.location.origin+"/guest/room-code?code="+t}copyToClipboardRoomLink(){this.store.dispatch(new rt),this.copyToClipboardService.copyText(this.roomLink),this.linkCopiedSubject$.next(!0),this.linkCopied$.pipe(function(t,e=d.a){return o=>o.lift(new g(t,e))}(2e3),Object(j.a)(t=>t),Object(w.d)(this)).subscribe(()=>{this.linkCopiedSubject$.next(!1)})}isPlayerReady(t){return t.status===C.c.VOTED}beforeUnloadHandler(){if(this.environmentService.production)return!1}dispatchOnInitActions(){this.store.dispatch([new st,new bt,new nt,new at])}dispatchOnDestroyActions(){this.store.dispatch(new ot)}getCurrentTime$(){return Object(p.a)(1e3).pipe(Object(y.a)(null),Object(S.a)(()=>new Date))}handleSocketEvents(){this.appService.reconnectFailed$.pipe(Object(w.d)(this)).subscribe(()=>{this.router.navigateByUrl("/?reconnectFailed=true")}),this.appService.connect$.pipe(Object(f.a)(()=>this.roomNumber$),Object(v.a)(1),Object(f.a)(t=>this.getIfIsHostOfRoom(t)),Object(w.d)(this)).subscribe(()=>this.handleConnectionFailed())}getIfIsHostOfRoom(t){return this.hostService.getIsHostOfRoom(t).pipe(Object(j.a)(t=>!t))}handleIntervalHostCheck(){Object(p.a)(3e4).pipe(Object(f.a)(()=>this.connectionStatus$.pipe(Object(v.a)(1))),Object(j.a)(t=>t===w.b.CONNECTED),Object(f.a)(()=>this.roomNumber$.pipe(Object(v.a)(1))),Object(f.a)(t=>this.getIfIsHostOfRoom(t)),Object(w.d)(this)).subscribe(()=>this.handleConnectionFailed())}handleConnectionFailed(){this.router.navigateByUrl("/?reconnectFailed=true"),this.modalService.alert("Connection error!").subscribe()}};return t.\u0275fac=function(e){return new(e||t)(k.Mb(q),k.Mb(M),k.Mb(I.a),k.Mb(a.c),k.Mb(x.a),k.Mb(P),k.Mb(s.h),k.Mb(R.c))},t.\u0275cmp=k.Gb({type:t,selectors:[["planning-poker-board"]],hostBindings:function(t,e){1&t&&k.Yb("beforeunload",function(){return e.beforeUnloadHandler()},!1,k.jc)},decls:23,vars:22,consts:[[3,"players$","gameState$"],[1,"sidebar"],[1,"sidebar-header"],["haxitTextFixedWidth",""],[1,"clock",3,"value"],[1,"sidebar-footer"],["haxit-button","",1,"toggle-game-state",3,"buttonColor","ngSwitch","click"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["haxit-button","",3,"buttonColor","ngSwitch","click"],["haxit-button","",3,"buttonColor","click"]],template:function(t,e){1&t&&(k.Nb(0,"planning-poker-table",0),k.Rb(1,"div",1),k.Rb(2,"header",2),k.Rb(3,"h1"),k.pc(4,"ROOM ID:"),k.Qb(),k.Rb(5,"h2",3),k.pc(6),k.bc(7,"push"),k.Qb(),k.Nb(8,"haxit-text-fixed-width",4),k.bc(9,"date"),k.bc(10,"push"),k.Qb(),k.Rb(11,"footer",5),k.Rb(12,"button",6),k.Yb("click",function(){return e.toggleGameState()}),k.bc(13,"push"),k.oc(14,lt,2,0,"ng-container",7),k.oc(15,pt,2,0,"ng-container",8),k.Qb(),k.Rb(16,"button",9),k.Yb("click",function(){return e.copyToClipboardRoomLink()}),k.bc(17,"push"),k.oc(18,ut,2,0,"ng-container",8),k.oc(19,ht,2,0,"ng-container",7),k.Qb(),k.Rb(20,"button",10),k.Yb("click",function(){return e.closeRoom()}),k.Pb(21),k.pc(22,"Close room"),k.Ob(),k.Qb(),k.Qb(),k.Qb()),2&t&&(k.gc("players$",e.players$)("gameState$",e.gameState$),k.Cb(6),k.qc(k.cc(7,11,e.roomNumber$)),k.Cb(2),k.gc("value",k.dc(9,13,k.cc(10,16,e.currentTime$),"HH:mm")),k.Cb(4),k.gc("buttonColor",e.buttonColors.PRIMARY)("ngSwitch",k.cc(13,18,e.gameState$)),k.Cb(2),k.gc("ngSwitchCase",e.gameStates.REVIEW),k.Cb(2),k.gc("buttonColor",e.buttonColors.SECONDARY)("ngSwitch",k.cc(17,20,e.linkCopied$)),k.Cb(3),k.gc("ngSwitchCase",!0),k.Cb(1),k.gc("buttonColor",e.buttonColors.INACTIVE))},directives:[K.a,Z.a,tt.a,et.a,n.l,n.m,n.n],pipes:[c.b,n.e],styles:["[_nghost-%COMP%]{padding:0 1.1111111111em;width:100%;flex-direction:row;flex-wrap:nowrap}.sidebar[_ngcontent-%COMP%], [_nghost-%COMP%]{height:100%;display:flex;justify-content:flex-start;align-content:stretch;align-items:flex-start}.sidebar[_ngcontent-%COMP%]{order:0;flex:0 0 27%;align-self:auto;flex-direction:column;flex-wrap:nowrap;padding-top:2.5em;padding-left:.8333333333em}.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]{order:0;flex:1 1 auto;align-self:auto;display:flex;flex-direction:column;width:100%}.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8333333333em;letter-spacing:.0833333333em}.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.8888888889em}.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]{margin-top:auto;margin-left:auto;color:#fff;font-size:1.8333333333em;font-weight:700}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]{order:0;flex:0 1 auto;align-self:flex-start;width:100%}.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:1.6666666667em 0;width:100%}"]}),Object(b.b)([Object(s.e)(X.gameState),Object(b.c)("design:type",u.a)],t.prototype,"gameState$",void 0),Object(b.b)([Object(s.e)(X.roomNumber),Object(b.c)("design:type",u.a)],t.prototype,"roomNumber$",void 0),Object(b.b)([Object(s.e)(X.players),Object(b.c)("design:type",u.a)],t.prototype,"players$",void 0),Object(b.b)([Object(s.e)(G.a.connectionStatus),Object(b.c)("design:type",u.a)],t.prototype,"connectionStatus$",void 0),t=Object(b.b)([Object(w.c)(),Object(b.c)("design:paramtypes",[q,M,I.a,a.c,x.a,P,s.h,R.c])],t),t})();var gt=o("LRne"),mt=o("DH7j"),Ot=o("yCtX"),jt=o("l7GE"),yt=o("ZUHj");class St{call(t,e){return e.subscribe(new ft(t))}}class ft extends jt.a{constructor(t){super(t),this.hasFirst=!1,this.observables=[],this.subscriptions=[]}_next(t){this.observables.push(t)}_complete(){const t=this.observables,e=t.length;if(0===e)this.destination.complete();else{for(let o=0;o<e&&!this.hasFirst;o++){let e=t[o],n=Object(yt.a)(this,e,e,o);this.subscriptions&&this.subscriptions.push(n),this.add(n)}this.observables=null}}notifyNext(t,e,o,n,s){if(!this.hasFirst){this.hasFirst=!0;for(let t=0;t<this.subscriptions.length;t++)if(t!==o){let e=this.subscriptions[t];e.unsubscribe(),this.remove(e)}this.subscriptions=null}this.destination.next(e)}}var vt=o("3E0/"),Ct=o("IIXh"),Rt=N.CreateRoom;const wt=[{path:"wait",component:(()=>{let t=class{constructor(t,e,o,n){this.router=t,this.appService=e,this.store=o,this.$gaService=n}ngOnInit(){this.store.selectSnapshot(X.roomNumber)?this.router.navigateByUrl("/"):(this.$gaService.pageView("/host/board"),function(...t){if(1===t.length){if(!Object(mt.a)(t[0]))return t[0];t=t[0]}return Object(Ot.a)(t,void 0).lift(new St)}(this.connectionStatus$.pipe(Object(S.a)(t=>t===w.b.DISCONNECTED?(this.appService.reconnectSocket(),null):t),Object(j.a)(t=>t===w.b.CONNECTED),Object(v.a)(1)),Object(gt.a)(null).pipe(Object(vt.a)(3e4),Object(S.a)(()=>{throw new Error("timeout")}))).pipe(Object(f.a)(()=>this.store.dispatch(new Rt)),Object(vt.a)(1500),Object(w.d)(this)).subscribe(()=>this.router.navigateByUrl("/host/board"),t=>this.handleSocketTimeout(t)))}handleSocketTimeout(t){console.error("Error of socket due to",t),this.router.navigateByUrl("/")}};return t.\u0275fac=function(e){return new(e||t)(k.Mb(a.c),k.Mb(I.a),k.Mb(s.h),k.Mb(T.a))},t.\u0275cmp=k.Gb({type:t,selectors:[["planning-poker-wait"]],decls:4,vars:0,consts:[[1,"loop-loader"]],template:function(t,e){1&t&&(k.Rb(0,"haxit-icon",0),k.pc(1," loop\n"),k.Qb(),k.Rb(2,"p"),k.pc(3,"Creating room..."),k.Qb())},directives:[Ct.a],styles:["@keyframes rotate{0%{transform:rotate(1turn)}50%{transform:rotate(180deg)}to{transform:rotate(0deg)}}[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}p[_ngcontent-%COMP%]{color:#fff;text-transform:uppercase;font-size:1em;font-weight:700}.loop-loader[_ngcontent-%COMP%]     .material-icons{font-size:2.7777777778em;animation-name:rotate;animation-duration:1s;animation-iteration-count:infinite}"]}),Object(b.b)([Object(s.e)(G.a.connectionStatus),Object(b.c)("design:type",u.a)],t.prototype,"connectionStatus$",void 0),t=Object(b.b)([Object(w.c)(),Object(b.c)("design:paramtypes",[a.c,I.a,s.h,T.a])],t),t})(),data:{animation:"WaitComponent"}},{path:"board",component:dt,canActivate:[q],canDeactivate:[q],data:{animation:"BoardComponent"}},{path:"**",redirectTo:"wait"}];let kt=(()=>{class t{}return t.\u0275mod=k.Kb({type:t}),t.\u0275inj=k.Jb({factory:function(e){return new(e||t)},imports:[[a.d.forChild(wt)],a.d]}),t})(),Pt=(()=>{class t{}return t.\u0275mod=k.Kb({type:t}),t.\u0275inj=k.Jb({factory:function(e){return new(e||t)},imports:[[n.c,kt,i.c,r.a,s.d.forFeature([X]),c.c]]}),t})()}}]);