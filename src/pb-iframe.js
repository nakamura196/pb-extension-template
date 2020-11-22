import { LitElement, html} from 'lit-element';
import { pbMixin } from '@teipublisher/pb-components/src/pb-mixin';

/**
 * A component to show iframe.
 * 
 * @fires pb-keyword - When received, focuses the url of the keyword passed in with the event
 */
export class PbIframe extends pbMixin(LitElement) {
    static get properties() {
        return {
            /**
             * Url to load on iframe
             */
            url: {
                type: String
            },
            /**
             * Width of iframe
             */
            width : {
                type: String
            },
            /**
             * Height of iframe
             */
            height : {
                type: String
            },
            ...super.properties
        };
    }

    constructor() {
        super();
        this.url = '';
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