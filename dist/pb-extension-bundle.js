import{p as t,L as e,_ as i,h as r}from"./pb-mixin-ad783a5d.js";class s extends(t(e)){static get properties(){return i({url:{type:String},width:{type:String},height:{type:String}},super.properties)}constructor(){super(),this.url="https://teipublisher.com/index.html",this.width="100%",this.height="600"}render(){return r`
            <iframe width="${this.width}" height="${this.height}" allowfullscreen="true" frameborder="0" src="${this.url}"/>
        `}}customElements.define("pb-iframe",s);class h extends(t(e)){static get properties(){return i({url:{type:String},width:{type:String},height:{type:String},label:{type:String}},super.properties)}constructor(){super(),this.label="はじめてのラベル",this.url="https://teipublisher.com/index.html",this.width="100%",this.height="600"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-geolocation",t=>{t.detail.label&&(this.label=t.detail.label)})}render(){return r`
            ${this.label}
            <iframe width="${this.width}" height="${this.height}" allowfullscreen="true" frameborder="0" src="${this.url}"/>
        `}}customElements.define("pb-iframe",h);
