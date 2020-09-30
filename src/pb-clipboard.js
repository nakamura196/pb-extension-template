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
        this.url = 'https://teipublisher.com/index.html';
        this.width = '100%';
        this.height = '600';
    }

    render() {
        return html`
            <iframe width="${this.width}" height="${this.height}" allowfullscreen="true" frameborder="0" src="${this.url}"/>
        `;
    }
}
customElements.define('pb-iframe', PbIframe);