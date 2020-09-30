import { LitElement, html} from 'lit-element';
import { pbMixin } from '@teipublisher/pb-components/src/pb-mixin';

export class PbIframe extends pbMixin(LitElement) {
    static get properties() {
        return {
            url: {
                type: String
            },
            width : {
                type: String
            },
            height : {
                type: String
            },
            label : {
                type: String
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.label = "はじめてのラベル"
        this.url = 'https://teipublisher.com/index.html';
        this.width = '100%';
        this.height = '600';
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-geolocation', (ev) => {
            if (ev.detail.label) {
                this.label = ev.detail.label;
            }
        });
    }

    render() {
        return html`
            ${this.label}
            <iframe width="${this.width}" height="${this.height}" allowfullscreen="true" frameborder="0" src="${this.url}"/>
        `;
    }
}
customElements.define('pb-iframe', PbIframe);