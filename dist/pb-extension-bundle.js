import{t as e}from"./paper-inky-focus-behavior-b4765f0e.js";import{p as t,L as i,_ as r,h as o,c as n}from"./pb-mixin-ad783a5d.js";import"./paper-icon-button-ca3015ec.js";class s extends(t(i)){static get properties(){return r({label:{type:String}},super.properties)}constructor(){super(),this.label="clipboard.label"}render(){return o`
            <h3>${e(this.label)}</h3>
            <div>
                <slot></slot>
                <paper-icon-button icon="icons:content-copy" @click="${this._copy}"
                    title="${e("clipboard.copy")}"></paper-icon-button>
            </div>
        `}_copy(){const e=this.shadowRoot.querySelector("slot"),t=document.createElement("div");e.assignedNodes().forEach(e=>{t.appendChild(document.importNode(e,!0))}),navigator.clipboard.writeText(t.innerText)}static get styles(){return n`
            :host {
                display: block;
            }
            h3 {
                margin: 0;
                font-size: .85em;
                font-weight: normal;
                color: #3a3a3a;
            }
            div {
                display: flex;
                align-items: center;
                padding: 0 16px;
            }
        `}}customElements.define("pb-clipboard",s);class a extends(t(i)){static get properties(){return r({url:{type:String},width:{type:String},height:{type:String}},super.properties)}constructor(){super(),this.url="https://www.google.com/",this.width="100%",this.height="600"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-keyword",e=>{e.detail.url&&(this.url=e.detail.url)})}render(){return o`
            <iframe width="${this.width}" height="${this.height}" allowfullscreen="true" frameborder="0" src="${this.url}"/>
        `}}customElements.define("pb-iframe",a);class l extends(t(i)){static get properties(){return r(r({},super.properties),{},{url:{type:String},label:{type:String}})}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.emitTo("pb-keyword",{url:this.url,label:this.label}))}render(){return o`<span id="content"><slot></slot></span>`}static get styles(){return n`
            :host {
                display: inline;
            }

            @keyframes keyFrameBackgroundColorIn {
                0% {
                    background-color: inherit;
                }
                100% {
                    background-color: var(--pb-highlight-color, #F9E976);
                }
            }

            #content {
                display: inline;
            }

            .highlight-on {
                background-color: var(--pb-highlight-color, #F9E976);
                animation-name: keyFrameBackgroundColorIn;
                animation-duration: 500ms;
                animation-iteration-count: 1;
                animation-timing-function: ease-in;

            }

            .highlight-off {
                background-color: inherit;
            }
        `}}customElements.define("pb-keyword",l);
