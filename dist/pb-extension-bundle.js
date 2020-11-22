import"./paper-inky-focus-behavior-b4765f0e.js";import{p as e,L as t,_ as r,h as i,c as n}from"./pb-mixin-ad783a5d.js";import"./paper-icon-button-ca3015ec.js";class o extends(e(t)){static get properties(){return r({url:{type:String},width:{type:String},height:{type:String}},super.properties)}constructor(){super(),this.url="https://www.google.com/",this.width="100%",this.height="600"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-keyword",e=>{e.detail.url&&(this.url=e.detail.url)})}render(){return i`
            <iframe width="${this.width}" height="${this.height}" allowfullscreen="true" frameborder="0" src="${this.url}"/>
        `}}customElements.define("pb-iframe",o);class s extends(e(t)){static get properties(){return r(r({},super.properties),{},{url:{type:String},label:{type:String}})}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.emitTo("pb-keyword",{url:this.url,label:this.label}))}render(){return i`<span id="content"><slot></slot></span>`}static get styles(){return n`
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
        `}}customElements.define("pb-keyword",s);
