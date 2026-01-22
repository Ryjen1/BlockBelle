module.exports=[31138,a=>{"use strict";a.i(754350);var b=a.i(708049),c=a.i(857705);a.i(209459);var d=a.i(912252),e=a.i(815112);a.i(190819);var f=a.i(903185),g=a.i(310447),h=a.i(149230),i=a.i(451339),j=a.i(238135),k=a.i(610271),l=a.i(872954),m=a.i(600989),n=a.i(981198);let o={isUnsupportedChainView:()=>"UnsupportedChain"===m.RouterController.state.view||"SwitchNetwork"===m.RouterController.state.view&&m.RouterController.state.history.includes("UnsupportedChain"),async safeClose(){this.isUnsupportedChainView()||await n.SIWXUtil.isSIWXCloseDisabled()?l.ModalController.shake():l.ModalController.close()}};var p=a.i(886920),q=a.i(718811),r=a.i(947569);a.i(206302);var s=a.i(674082),t=a.i(712920),u=a.i(294231),v=b,w=a.i(649445);let x=w.css`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`,y=class extends v.LitElement{render(){return c.html`<slot></slot>`}};y.styles=[u.resetStyles,x],y=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,t.customElement)("wui-card")],y),a.i(910644);var z=b,A=a.i(302596),B=b;a.i(228930),a.i(360808),a.i(473506);let C=w.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var D=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let E=class extends B.LitElement{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,c.html`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){A.AlertController.close()}};E.styles=[u.resetStyles,C],D([(0,d.property)()],E.prototype,"message",void 0),D([(0,d.property)()],E.prototype,"backgroundColor",void 0),D([(0,d.property)()],E.prototype,"iconColor",void 0),D([(0,d.property)()],E.prototype,"icon",void 0),E=D([(0,t.customElement)("wui-alertbar")],E);let F=w.css`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var G=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let H={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}},I=class extends z.LitElement{constructor(){super(),this.unsubscribe=[],this.open=A.AlertController.state.open,this.onOpen(!0),this.unsubscribe.push(A.AlertController.subscribeKey("open",a=>{this.open=a,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let{message:a,variant:b}=A.AlertController.state,d=H[b];return c.html`
      <wui-alertbar
        message=${a}
        backgroundColor=${d?.backgroundColor}
        iconColor=${d?.iconColor}
        icon=${d?.icon}
      ></wui-alertbar>
    `}onOpen(a){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):a||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};I.styles=F,G([(0,e.state)()],I.prototype,"open",void 0),I=G([(0,t.customElement)("w3m-alertbar")],I);var J=b,K=a.i(897562),L=a.i(775970),M=a.i(531436),N=a.i(409423),O=b;let P=w.css`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Q=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let R=class extends O.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let a="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",b="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${a});
    --local-padding: var(${b});
`,c.html`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};R.styles=[u.resetStyles,u.elementStyles,u.colorStyles,P],Q([(0,d.property)()],R.prototype,"size",void 0),Q([(0,d.property)({type:Boolean})],R.prototype,"disabled",void 0),Q([(0,d.property)()],R.prototype,"icon",void 0),Q([(0,d.property)()],R.prototype,"iconColor",void 0),R=Q([(0,t.customElement)("wui-icon-link")],R);var S=b;a.i(154934),a.i(162869);let T=w.css`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var U=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let V=class extends S.LitElement{constructor(){super(...arguments),this.imageSrc=""}render(){return c.html`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?c.html`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:c.html`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};V.styles=[u.resetStyles,u.elementStyles,u.colorStyles,T],U([(0,d.property)()],V.prototype,"imageSrc",void 0),V=U([(0,t.customElement)("wui-select")],V),a.i(666836),a.i(96561);var W=a.i(766588);let X=w.css`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var Y=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let Z=["SmartSessionList"];function $(){let a=m.RouterController.state.data?.connector?.name,b=m.RouterController.state.data?.wallet?.name,c=m.RouterController.state.data?.network?.name,d=b??a,e=j.ConnectorController.getConnectors(),f=1===e.length&&e[0]?.id==="w3m-email";return{Connect:`Connect ${f?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:d??"Connect Wallet",ConnectingWalletConnect:d??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:d?`Get ${d}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:c??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:K.AccountController.state.socialProvider?K.AccountController.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let _=class extends J.LitElement{constructor(){super(),this.unsubscribe=[],this.heading=$()[m.RouterController.state.view],this.network=i.ChainController.state.activeCaipNetwork,this.networkImage=M.AssetUtil.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=m.RouterController.state.view,this.viewDirection="",this.headerText=$()[m.RouterController.state.view],this.unsubscribe.push(L.AssetController.subscribeNetworkImages(()=>{this.networkImage=M.AssetUtil.getNetworkImage(this.network)}),m.RouterController.subscribeKey("view",a=>{setTimeout(()=>{this.view=a,this.headerText=$()[a]},W.ConstantsUtil.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),i.ChainController.subscribeKey("activeCaipNetwork",a=>{this.network=a,this.networkImage=M.AssetUtil.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(a=>a())}render(){return c.html`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){N.EventsController.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),m.RouterController.push("WhatIsAWallet")}async onClose(){await o.safeClose()}rightHeaderTemplate(){let a=p.OptionsController?.state?.features?.smartSessions;return"Account"===m.RouterController.state.view&&a?c.html`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>m.RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return c.html`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){let a=Z.includes(this.view);return c.html`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${a?c.html`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:a}=m.RouterController.state,b="Connect"===a,d=p.OptionsController.state.enableEmbedded,e=p.OptionsController.state.enableNetworkSwitch;return"Account"===a&&e?c.html`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,f.ifDefined)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,f.ifDefined)(this.networkImage)}
      ></wui-select>`:this.showBack&&!("ApproveTransaction"===a||"ConnectingSiwe"===a||b&&d)?c.html`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:c.html`<wui-icon-link
      data-hidden=${!b}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(N.EventsController.sendEvent({type:"track",event:"CLICK_NETWORKS"}),m.RouterController.push("Networks"))}isAllowedNetworkSwitch(){let a=i.ChainController.getAllRequestedCaipNetworks(),b=!!a&&a.length>1,c=a?.find(({id:a})=>a===this.network?.id);return b||!c}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){let{history:a}=m.RouterController.state,b=W.ConstantsUtil.VIEW_DIRECTION.Next;a.length<this.prevHistoryLength&&(b=W.ConstantsUtil.VIEW_DIRECTION.Prev),this.prevHistoryLength=a.length,this.viewDirection=b}async onHistoryChange(){let{history:a}=m.RouterController.state,b=this.shadowRoot?.querySelector("#dynamic");a.length>1&&!this.showBack&&b?(await b.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,b.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):a.length<=1&&this.showBack&&b&&(await b.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,b.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){m.RouterController.goBack()}};_.styles=X,Y([(0,e.state)()],_.prototype,"heading",void 0),Y([(0,e.state)()],_.prototype,"network",void 0),Y([(0,e.state)()],_.prototype,"networkImage",void 0),Y([(0,e.state)()],_.prototype,"showBack",void 0),Y([(0,e.state)()],_.prototype,"prevHistoryLength",void 0),Y([(0,e.state)()],_.prototype,"view",void 0),Y([(0,e.state)()],_.prototype,"viewDirection",void 0),Y([(0,e.state)()],_.prototype,"headerText",void 0),_=Y([(0,t.customElement)("w3m-header")],_);var aa=b,ab=b;a.i(218075);let ac=w.css`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var ad=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ae=class extends ab.LitElement{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return c.html`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?c.html`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:"default"===this.iconType?c.html`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:c.html`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};ae.styles=[u.resetStyles,ac],ad([(0,d.property)()],ae.prototype,"backgroundColor",void 0),ad([(0,d.property)()],ae.prototype,"iconColor",void 0),ad([(0,d.property)()],ae.prototype,"icon",void 0),ad([(0,d.property)()],ae.prototype,"message",void 0),ad([(0,d.property)()],ae.prototype,"loading",void 0),ad([(0,d.property)()],ae.prototype,"iconType",void 0),ae=ad([(0,t.customElement)("wui-snackbar")],ae);let af=w.css`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ag=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ah={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},ai=class extends aa.LitElement{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=q.SnackController.state.open,this.unsubscribe.push(q.SnackController.subscribeKey("open",a=>{this.open=a,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(a=>a())}render(){let{message:a,variant:b,svg:d}=q.SnackController.state,e=ah[b],{icon:f,iconColor:g}=d??e??{};return c.html`
      <wui-snackbar
        message=${a}
        backgroundColor=${e?.backgroundColor}
        iconColor=${g}
        icon=${f}
        .loading=${"loading"===b}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),q.SnackController.state.autoClose&&(this.timeout=setTimeout(()=>q.SnackController.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ai.styles=af,ag([(0,e.state)()],ai.prototype,"open",void 0),ai=ag([(0,t.customElement)("w3m-snackbar")],ai);var aj=b,ak=a.i(708355),al=a.i(690203),am=a.i(868807);let an=(0,ak.proxy)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),ao=(0,am.withErrorBoundary)({state:an,subscribe:a=>(0,ak.subscribe)(an,()=>a(an)),subscribeKey:(a,b)=>(0,al.subscribeKey)(an,a,b),showTooltip({message:a,triggerRect:b,variant:c}){an.open=!0,an.message=a,an.triggerRect=b,an.variant=c},hide(){an.open=!1,an.message="",an.triggerRect={width:0,height:0,top:0,left:0}}});a.i(180818);let ap=w.css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var aq=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ar=class extends aj.LitElement{constructor(){super(),this.unsubscribe=[],this.open=ao.state.open,this.message=ao.state.message,this.triggerRect=ao.state.triggerRect,this.variant=ao.state.variant,this.unsubscribe.push(ao.subscribe(a=>{this.open=a.open,this.message=a.message,this.triggerRect=a.triggerRect,this.variant=a.variant}))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){this.dataset.variant=this.variant;let a=this.triggerRect.top,b=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${a}px;
    --w3m-tooltip-left: ${b}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,c.html`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};ar.styles=[ap],aq([(0,e.state)()],ar.prototype,"open",void 0),aq([(0,e.state)()],ar.prototype,"message",void 0),aq([(0,e.state)()],ar.prototype,"triggerRect",void 0),aq([(0,e.state)()],ar.prototype,"variant",void 0),ar=aq([(0,t.customElement)("w3m-tooltip"),(0,t.customElement)("w3m-tooltip")],ar);var as=b;let at=w.css`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var au=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let av=class extends as.LitElement{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=m.RouterController.state.view,this.viewDirection="",this.unsubscribe.push(m.RouterController.subscribeKey("view",a=>this.onViewChange(a)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([a])=>{let b=`${a?.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",b),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=b,this.style.animation="unset"},W.ConstantsUtil.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(a=>a())}render(){return c.html`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return c.html`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return c.html`<w3m-account-view></w3m-account-view>`;case"AllWallets":return c.html`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return c.html`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return c.html`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return c.html`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return c.html`<w3m-connect-view></w3m-connect-view>`;case"Create":return c.html`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return c.html`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return c.html`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return c.html`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return c.html`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return c.html`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return c.html`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return c.html`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return c.html`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return c.html`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return c.html`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return c.html`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return c.html`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return c.html`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return c.html`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return c.html`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return c.html`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return c.html`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return c.html`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return c.html`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return c.html`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return c.html`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return c.html`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return c.html`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return c.html`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return c.html`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return c.html`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return c.html`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return c.html`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return c.html`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return c.html`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return c.html`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return c.html`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return c.html`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return c.html`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return c.html`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return c.html`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return c.html`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return c.html`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return c.html`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return c.html`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return c.html`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return c.html`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return c.html`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return c.html`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return c.html`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return c.html`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return c.html`<w3m-pay-loading-view></w3m-pay-loading-view>`}}onViewChange(a){ao.hide();let b=W.ConstantsUtil.VIEW_DIRECTION.Next,{history:c}=m.RouterController.state;c.length<this.prevHistoryLength&&(b=W.ConstantsUtil.VIEW_DIRECTION.Prev),this.prevHistoryLength=c.length,this.viewDirection=b,setTimeout(()=>{this.view=a},W.ConstantsUtil.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};av.styles=at,au([(0,e.state)()],av.prototype,"view",void 0),au([(0,e.state)()],av.prototype,"viewDirection",void 0),av=au([(0,t.customElement)("w3m-router")],av);let aw=w.css`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var ax=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ay="scroll-lock";class az extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=p.OptionsController.state.enableEmbedded,this.open=l.ModalController.state.open,this.caipAddress=i.ChainController.state.activeCaipAddress,this.caipNetwork=i.ChainController.state.activeCaipNetwork,this.shake=l.ModalController.state.shake,this.filterByNamespace=j.ConnectorController.state.filterByNamespace,this.initializeTheming(),h.ApiController.prefetchAnalyticsConfig(),this.unsubscribe.push(l.ModalController.subscribeKey("open",a=>a?this.onOpen():this.onClose()),l.ModalController.subscribeKey("shake",a=>this.shake=a),i.ChainController.subscribeKey("activeCaipNetwork",a=>this.onNewNetwork(a)),i.ChainController.subscribeKey("activeCaipAddress",a=>this.onNewAddress(a)),p.OptionsController.subscribeKey("enableEmbedded",a=>this.enableEmbedded=a),j.ConnectorController.subscribeKey("filterByNamespace",a=>{this.filterByNamespace===a||i.ChainController.getAccountData(a)?.caipAddress||(h.ApiController.fetchRecommendedWallets(),this.filterByNamespace=a)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){l.ModalController.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),this.onRemoveKeyboardListener()}render(){return(this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded)?c.html`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?c.html`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return c.html` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,f.ifDefined)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(a){a.target===a.currentTarget&&await this.handleClose()}async handleClose(){await o.safeClose()}initializeTheming(){let{themeVariables:a,themeMode:b}=r.ThemeController.state,c=s.UiHelperUtil.getColorTheme(b);(0,u.initializeTheming)(a,c)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),q.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let a=document.createElement("style");a.dataset.w3m=ay,a.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(a)}onScrollUnlock(){let a=document.head.querySelector(`style[data-w3m="${ay}"]`);a&&a.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let a=this.shadowRoot?.querySelector("wui-card");a?.focus(),window.addEventListener("keydown",b=>{if("Escape"===b.key)this.handleClose();else if("Tab"===b.key){let{tagName:c}=b.target;!c||c.includes("W3M-")||c.includes("WUI-")||a?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(a){let b=i.ChainController.state.isSwitchingNamespace,c=k.CoreHelperUtil.getPlainAddress(a);c||b?b&&c&&m.RouterController.goBack():l.ModalController.close(),await n.SIWXUtil.initializeIfEnabled(),this.caipAddress=a,i.ChainController.setIsSwitchingNamespace(!1)}onNewNetwork(a){let b=this.caipNetwork,c=b?.caipNetworkId?.toString(),d=b?.chainNamespace,e=a?.caipNetworkId?.toString(),f=a?.chainNamespace,h=c!==e,j=b?.name===g.ConstantsUtil.UNSUPPORTED_NETWORK_NAME,k="ConnectingExternal"===m.RouterController.state.view,n=!i.ChainController.getAccountData(a?.chainNamespace)?.caipAddress,o="UnsupportedChain"===m.RouterController.state.view,p=l.ModalController.state.open,q=!1;p&&!k&&(n?h&&(q=!0):o?q=!0:h&&d===f&&!j&&(q=!0)),q&&"SIWXSignMessage"!==m.RouterController.state.view&&m.RouterController.goBack(),this.caipNetwork=a}prefetch(){this.hasPrefetched||(h.ApiController.prefetch(),h.ApiController.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}az.styles=aw,ax([(0,d.property)({type:Boolean})],az.prototype,"enableEmbedded",void 0),ax([(0,e.state)()],az.prototype,"open",void 0),ax([(0,e.state)()],az.prototype,"caipAddress",void 0),ax([(0,e.state)()],az.prototype,"caipNetwork",void 0),ax([(0,e.state)()],az.prototype,"shake",void 0),ax([(0,e.state)()],az.prototype,"filterByNamespace",void 0);let aA=class extends az{};aA=ax([(0,t.customElement)("w3m-modal")],aA);let aB=class extends az{};aB=ax([(0,t.customElement)("appkit-modal")],aB),a.s(["AppKitModal",()=>aB,"W3mModal",()=>aA,"W3mModalBase",()=>az],359954),a.s([],763378),a.i(763378),a.i(359954),a.s(["AppKitModal",()=>aB,"W3mModal",()=>aA,"W3mModalBase",()=>az],31138)}];

//# sourceMappingURL=ee741_%40reown_appkit-scaffold-ui_dist_esm_exports_w3m-modal_282fc8dd.js.map