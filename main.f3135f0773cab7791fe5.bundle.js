webpackJsonp([0,3],{110:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return r});var o=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(a<3?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){this.state="transaction-list",this.transactionState={}}return t.prototype.getState=function(){return this.state},t.prototype.getTransaction=function(){return this.transaction},t.prototype.getTransactionState=function(t){return this.transactionState[t]||0},t.prototype.setTransactionState=function(t,e){this.transactionState[t]=e},t.prototype.goToTransactionDetail=function(t){this.state="transaction-detail",this.transaction=t},t.prototype.backToTransactionDetail=function(t){if(this.state="transaction-detail",t){this.setTransactionState(this.transaction.id,1);var e=new Image;e.style.display="none",e.id="receipt-"+this.transaction.id,e.src=document.getElementsByTagName("canvas")[0].toDataURL(),document.getElementById("image-storage").appendChild(e)}},t.prototype.goToTransactionList=function(){this.state="transaction-list",this.transaction=null},t.prototype.goToCamera=function(){this.state="camera"},t=o([n.i(i.c)(),a("design:paramtypes",[])],t)}()},412:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return r});var o=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(a<3?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){this.transactions=[{id:"1",amount:{currency:"EUR",precision:2,value:40},bookingDate:"2017-02-26T00:00:00+01:00",description:"OMV Tankstelle - Werner-v.-Siemens-Str. 45, 91052 Erlangen",state:"DE"},{id:"2",amount:{currency:"EUR",precision:2,value:23.55},bookingDate:"2017-02-26T00:00:00+01:00",description:"Pizza-Bar, Hartmannstraße, Erlangen",state:"DE"},{id:"3",amount:{currency:"EUR",precision:2,value:10},bookingDate:"2017-02-26T00:00:00+01:00",description:"Burger King - Dr.-Seeling-Straße 16, 92637 Weiden in der Oberpfalz",state:"DE"},{id:"4",amount:{currency:"EUR",precision:2,value:20},bookingDate:"2017-02-25T00:00:00+01:00",description:"BAVARIA petrol - Heilbronner Str. 14-15, 10711 Berlin",state:"DE"},{id:"5",amount:{currency:"EUR",precision:2,value:133},bookingDate:"2017-02-25T00:00:00+01:00",description:"Park Inn by Radisson Berlin City-West Hotel",state:"DE"},{id:"6",amount:{currency:"EUR",precision:2,value:39.22},bookingDate:"2017-02-22T00:00:00+01:00",description:"OMV Tankstelle - Berg-Sam 22a, 5101 Bergheim bei Salzburg",state:"AT"},{id:"7",amount:{currency:"EUR",precision:2,value:8.99},bookingDate:"2017-02-22T00:00:00+01:00",description:"McDonald's H&M, Südtiroler Pl. 13, 5020 Salzburg",state:"AT"}]}return t.prototype.getTransactions=function(){return this.transactions},t=o([n.i(i.c)(),a("design:paramtypes",[])],t)}()},459:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=459},460:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(617),n(586)),o=n(0),a=n(616),r=n(607);a.a.production&&n.i(o.a)(),n.i(i.a)().bootstrapModule(r.a)},606:function(t,e,n){"use strict";var i=n(0),o=n(412),a=n(110);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(a<3?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.actions=t,this.csasService=e,this.appState="transaction-list"}return t.prototype.getTransactions=function(){return this.csasService.getTransactions()},t=r([n.i(i.j)({selector:"app-root",template:n(774),styles:[n(773)]}),c("design:paramtypes",["function"==typeof(e=void 0!==a.a&&a.a)&&e||Object,"function"==typeof(s=void 0!==o.a&&o.a)&&s||Object])],t);var e,s}()},607:function(t,e,n){"use strict";var i=n(44),o=n(0),a=n(39),r=n(216),c=n(606),s=n(570),p=n(608),d=n(612),l=n(614),f=n(412),u=n(615),h=n(611),m=n(110),g=n(609),b=n(610);n.d(e,"a",function(){return w});var v=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(a<3?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},y=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},w=function(){function t(){}return t=v([n.i(o.b)({declarations:[c.a,b.a,p.a,d.a,l.a,u.a,h.a,g.a],imports:[i.a,a.a,r.a,s.a],providers:[m.a,f.a],bootstrap:[c.a]}),y("design:paramtypes",[])],t)}()},608:function(t,e,n){"use strict";var i=n(0),o=n(110);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(a<3?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.actions=t}return t.prototype.ngOnInit=function(){},t=a([n.i(i.j)({selector:"mb-app-menu",template:'\n    <div [ngSwitch]="actions.getState()">\n    <md-toolbar color="primary" *ngSwitchCase="\'transaction-list\'">\n      <span>Money back</span>\n      <span class="spacer"></span>\n      <md-icon class="icon-with-cursor">search</md-icon>\n    </md-toolbar>\n    <md-toolbar color="primary" *ngSwitchCase="\'transaction-detail\'">\n      <md-icon (click)="actions.goToTransactionList()" class="icon-with-cursor">arrow_back</md-icon>\n      <span class="space-left">Detail transakce</span>\n    </md-toolbar>\n    <md-toolbar *ngSwitchCase="\'camera\'">\n      <md-icon (click)="actions.backToTransactionDetail(false)" class="icon-with-cursor">arrow_back</md-icon>\n      <span class="space-left">Vyfotit účet</span>\n    </md-toolbar>\n  ',styles:[n(769)]}),r("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},609:function(t,e,n){"use strict";var i=n(0),o=n(110);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(a<3?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.actions=t,this.options={audio:!1,video:!0,width:"100%",height:"100%"},this.onSuccess=function(t){},this.onError=function(t){}}return t.prototype.ngOnInit=function(){},t.prototype.capture=function(){var t=document.getElementsByTagName("video")[0],e=document.getElementById("image-holder");t&&(e.width=t.videoWidth,e.height=t.videoHeight,e.getContext("2d").drawImage(t,0,0)),this.actions.backToTransactionDetail(!0)},t=a([n.i(i.j)({selector:"mb-camera",template:'\n    <ng2-webcam [options]="options" [onSuccess]="onSuccess" [onError]="onError"></ng2-webcam>\n    <div class="bottom-menu">\n       <button md-fab (click)="capture()"><md-icon>camera</md-icon></button>\n    </div>\n  ',styles:[n(770)]}),r("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},610:function(t,e,n){"use strict";var i=n(0),o=n(44),a=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(a<3?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.sanitizer=t,this.element=e,this.isFallback=!1,this.isSupportWebRTC=!1,this.browser=navigator}return t.prototype.ngOnInit=function(){var t=this;this.browser.getUserMedia_=this.browser.getUserMedia||this.browser.webkitGetUserMedia||this.browser.mozGetUserMedia||this.browser.msGetUserMedia,void 0===this.browser.mediaDevices&&this.browser.getUserMedia_&&(this.browser.mediaDevices={}),this.browser.mediaDevices&&void 0===this.browser.mediaDevices.getUserMedia&&this.browser.getUserMedia_&&(this.browser.mediaDevices.getUserMedia=function(e){return new Promise(function(n,i){t.browser.getUserMedia_.call(t.browser,e,n,i)})}),this.isSupportWebRTC=!(!this.browser.mediaDevices||!this.browser.mediaDevices.getUserMedia),this.options.fallbackSrc=this.options.fallbackSrc||"node_modules/ng2-webcam/lib/fallback/jscam_canvas_only.swf",this.options.fallbackMode=this.options.fallbackMode||"callback",this.options.fallbackQuality=this.options.fallbackQuality||85,this.options.width=this.options.width||320,this.options.height=this.options.height||240,this.options.cameraType=this.options.cameraType||"front",this.isFallback=!this.isSupportWebRTC&&!!this.options.fallbackSrc},t.prototype.ngAfterViewInit=function(){this.startCapturingVideo()},t.prototype.onWebRTC=function(){var t=this;if(this.browser.mediaDevices.enumerateDevices&&this.options.video){var e=this.options.cameraType;this.browser.mediaDevices.enumerateDevices().then(function(n){n.forEach(function(n){n&&"videoinput"===n.kind&&n.label.toLowerCase().search(e)>-1&&(t.options.video={deviceId:{exact:n.deviceId},facingMode:"environment"})}),t.setWebcam()})}else this.setWebcam()},t.prototype.setWebcam=function(){var t,e,n,i,o=this,a={audio:!1,video:!1},r="";this.options.video&&(a.video=this.options.video,r="video"),this.options.audio===!0&&(a.audio=!0,""!==r&&(r+=", "),r+="audio"),t=this.element.nativeElement.querySelector("#ng2-webcam"),e=this.element.nativeElement.querySelector("video"),e.autoplay=!0,n=parseInt(t.offsetWidth,10),i=parseInt(t.offsetHeight,10),this.options.width<n&&this.options.height<i&&(this.options.width=n,this.options.height=i),e.autoplay=!0,function(){return new Promise(function(t,e){try{o.browser.mediaDevices.getUserMedia(a).then(function(e){return t(e)}).catch(function(n){o.browser.mediaDevices.getUserMedia(a).then(function(e){return t(e)}).catch(function(t){console.error(n),console.error(t),e(new Error("Both configs failed. Neither object nor string works"))})})}catch(t){e(t)}})}().then(function(t){var e=URL.createObjectURL(t);o.videoSrc=o.sanitizer.bypassSecurityTrustResourceUrl(e),o.onSuccess(t)}).catch(function(t){o.onError(t)})},t.prototype.addFallbackParams=function(t){var e=document.createElement("param");e.name="FlashVars",e.value="mode="+this.options.fallbackMode+"&amp;quality="+this.options.fallbackQuality,t.appendChild(e);var n=document.createElement("param");n.name="allowScriptAccess",n.value="always",t.appendChild(n),t.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";var i=document.createElement("param");i.name="movie",i.value=this.options.fallbackSrc,t.appendChild(i),t.data=this.options.fallbackSrc},t.prototype.onFallback=function(){console.error("No Fallback")},t.prototype.startCapturingVideo=function(){return this.isSupportWebRTC?this.onWebRTC():this.isFallback?this.onFallback():void console.error("WebCam not supported")},a([n.i(i.d)(),r("design:type",Object)],t.prototype,"options",void 0),a([n.i(i.d)(),r("design:type",Object)],t.prototype,"onSuccess",void 0),a([n.i(i.d)(),r("design:type",Object)],t.prototype,"onError",void 0),t=a([n.i(i.j)({selector:"ng2-webcam",template:n(775)}),r("design:paramtypes",["function"==typeof(e=void 0!==o.d&&o.d)&&e||Object,"function"==typeof(c=void 0!==i.g&&i.g)&&c||Object])],t);var e,c}();e.a=c},611:function(t,e,n){"use strict";var i=n(0),o=n(110);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(a<3?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.actions=t}return t.prototype.ngOnInit=function(){},t.prototype.ngOnChanges=function(){this.togglePhoto(!0)},t.prototype.ngOnDestroy=function(){this.togglePhoto(!1)},t.prototype.getTransaction=function(){return this.actions.getTransaction()},t.prototype.getImage=function(){return document.getElementById("receipt-"+this.transactionId)},t.prototype.hasReceipt=function(){return!!this.getImage()},t.prototype.togglePhoto=function(t){var e=this.getImage();e&&(e.style.display=t?"block":"none")},t.prototype.send=function(){this.actions.setTransactionState(this.transactionId,2),this.actions.goToTransactionList()},t.prototype.notSent=function(){return 2!==this.actions.getTransactionState(this.transactionId)},a([n.i(i.d)(),r("design:type",String)],t.prototype,"transactionId",void 0),t=a([n.i(i.j)({selector:"mb-request-form",template:'\n    <form>\n      <div class="row">\n        <md-input-container>\n          <input mdInput placeholder="Datum" disabled [value]="getTransaction().bookingDate | dateFormat">\n        </md-input-container>\n      </div>\n      \n      <div class="row">\n        <md-input-container>\n          <input mdInput placeholder="Částka" disabled\n            [value]="getTransaction().amount.value | amountFormat:getTransaction().amount.currency">\n        </md-input-container>\n      </div>\n      \n      <div class="row">\n        <md-input-container>\n          <input mdInput placeholder="Stát" disabled\n            [value]="getTransaction().state">\n        </md-input-container>\n      </div>\n      \n      \n      <div class="row">\n        <md-input-container class="full-width">\n          <textarea type="text" mdInput disabled placeholder="Popis">{{getTransaction().description}}</textarea>\n        </md-input-container>\n      </div>\n      \n      <div class="row margin-bottom-20">\n        <md-input-container class="full-width">\n          <textarea type="text" mdInput placeholder="Poznámka"></textarea>\n        </md-input-container>\n      </div>\n      \n      <div class="row receipt">\n        <label class="margin-bottom-20">Účtenka</label>\n        <div *ngIf="!getImage()" class="receipt-missing" (click)="actions.goToCamera()">\n            <button md-icon-button><md-icon>camera_alt</md-icon></button>\n        </div>\n      </div>\n      \n      <div class="bottom-menu" *ngIf="getImage() && notSent()">\n       <button md-fab (click)="send()"><md-icon>send</md-icon></button>\n    </div>\n    </form>\n  ',styles:[n(771)]}),r("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},612:function(t,e,n){"use strict";var i=n(0),o=n(613);n.n(o);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(a<3?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t.prototype.ngOnInit=function(){},a([n.i(i.d)(),r("design:type","function"==typeof(e=void 0!==o.CSASAccountTransaction&&o.CSASAccountTransaction)&&e||Object)],t.prototype,"transaction",void 0),a([n.i(i.d)(),r("design:type",String)],t.prototype,"status",void 0),t=a([n.i(i.j)({selector:"mb-transaction-box",template:'\n    <div class="left-panel" [ngSwitch]="status">\n      <md-icon *ngSwitchCase="0">credit_card</md-icon>\n      <md-icon *ngSwitchCase="1">receipt</md-icon>\n      <md-icon *ngSwitchCase="2">input</md-icon>\n      <md-icon *ngSwitchCase="3">check_circle</md-icon>\n  </div>\n  <div class="main-panel">\n    {{transaction.description}}\n  </div>\n  <div class="right-panel">\n    <div>{{transaction.bookingDate | dateFormat}}</div>\n    <div>\n      {{transaction.amount.value | amountFormat:transaction.amount.currency}}\n    </div>\n  </div>\n  ',styles:[n(772)]}),r("design:paramtypes",[])],t);var e}()},613:function(t,e){},614:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return r});var o=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(a<3?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t.prototype.transform=function(t,e){if(t){var n=t.toFixed(2).replace(".",","),i="Kč";switch(e){case"EUR":i="€"}return n+" "+i}return""},t=o([n.i(i.v)({name:"amountFormat"}),a("design:paramtypes",[])],t)}()},615:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return r});var o=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(a<3?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t.prototype.transform=function(t,e){var n=t.substr(0,4),i=parseInt(t.substr(5,2));return parseInt(t.substr(8,2))+". "+i+". "+n},t=o([n.i(i.v)({name:"dateFormat"}),a("design:paramtypes",[])],t)}()},616:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},617:function(t,e,n){"use strict";var i=n(631),o=(n.n(i),n(624)),a=(n.n(o),n(620)),r=(n.n(a),n(626)),c=(n.n(r),n(625)),s=(n.n(c),n(623)),p=(n.n(s),n(622)),d=(n.n(p),n(630)),l=(n.n(d),n(619)),f=(n.n(l),n(618)),u=(n.n(f),n(628)),h=(n.n(u),n(621)),m=(n.n(h),n(629)),g=(n.n(m),n(627)),b=(n.n(g),n(632)),v=(n.n(b),n(823));n.n(v)},769:function(t,e){t.exports=":host{display:block}:host .icon-with-cursor{cursor:pointer}:host .space-left{padding-left:10px}:host .spacer{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}\n"},770:function(t,e){t.exports=""},771:function(t,e){t.exports=":host{display:block;margin:20px}:host .receipt label{display:block;color:rgba(0,0,0,0.4)}:host .receipt-missing{background-color:rgba(0,0,0,0.1);width:100%;height:120px;text-align:center;padding-top:80px}\n"},772:function(t,e){t.exports=':host{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:0 1px 1px 0 rgba(0,0,0,0.1);position:relative;height:60px;-webkit-transition:background-color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out;font-family:Roboto,"Helvetica Neue",sans-serif}:host:hover{cursor:pointer;background-color:rgba(0,0,0,0.1)}:host .main-panel,:host .right-panel{width:100%;height:40px;line-height:20px;margin:10px 10px 10px 0;overflow:hidden}:host .main-panel{margin-right:10px;text-align:left}:host .right-panel{-ms-flex-preferred-size:150px;flex-basis:150px;text-align:right;white-space:nowrap}:host .left-panel{margin:18px 10px;height:24px;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-preferred-size:44px;flex-basis:44px;text-align:center}\n'},773:function(t,e){t.exports=""},774:function(t,e){t.exports='<mb-app-menu></mb-app-menu>\n\n<div [ngSwitch]="actions.getState()">\n  <div *ngSwitchCase="\'transaction-list\'">\n    <mb-transaction-box *ngFor="let transaction of getTransactions()"\n                        [transaction]="transaction"\n                        [status]="actions.getTransactionState(transaction.id)"\n                        (click)="actions.goToTransactionDetail(transaction)"\n    >\n\n    </mb-transaction-box>\n  </div>\n  <div *ngSwitchCase="\'transaction-detail\'">\n    <mb-request-form [transactionId]="actions.getTransaction().id"></mb-request-form>\n  </div>\n  <div *ngSwitchCase="\'camera\'">\n    <mb-camera></mb-camera>\n  </div>\n</div>\n\n<canvas id="image-holder"></canvas>\n<div id="image-storage"></div>\n'},775:function(t,e){t.exports='<div id="ng2-webcam">\n  <video id="video" height="100%" width="100%" *ngIf="isSupportWebRTC" [src]="videoSrc">Video stream not available</video>\n</div>\n\n\n'},824:function(t,e,n){t.exports=n(460)}},[824]);