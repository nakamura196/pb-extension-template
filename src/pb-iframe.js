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
            ...super.properties
        };
    }

    constructor() {
        super();
        this.url = 'https://www.google.com/';
        this.width = '100%';
        this.height = '600';
    }

    connectedCallback() {
        super.connectedCallback();

        this.subscribeTo('pb-keyword', (ev) => {
            if (ev.detail.url) {
                this.url = ev.detail.url;
            }
        });
    }

    render() {
        return html`
            <iframe width="${this.width}" height="${this.height}" allowfullscreen="true" frameborder="0" src="${this.url}"/>
        `;
    }
}
customElements.define('pb-iframe', PbIframe);