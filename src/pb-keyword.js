import { LitElement, html, css } from 'lit-element';
import { pbMixin } from '@teipublisher/pb-components/src/pb-mixin';
import { translate } from "@teipublisher/pb-components/src/pb-i18n";
import '@polymer/paper-icon-button';
import '@polymer/iron-icons';


/**
 * Represents a geo location. Extends `pb-highlight`, but sends an additional `pb-keyword` event
 * on mouseover.
 *
 * @slot - default unnamed slot for content
 * @fires pb-keyword - Sends geocoordinates
 * @cssprop --pb-highlight-color - Background color to highlight an element
 */
export class PbKeyword extends pbMixin(LitElement) {
    static get properties() {
        return {
            ...super.properties,
            url: {
                type: String
            },
            /**
             * Optional label for the place, e.g. to display a marker
             */
            label: {
                type: String
            }
        };
    }

    connectedCallback() {
        super.connectedCallback();

        this.addEventListener('click', () =>
            this.emitTo('pb-keyword', {
                url: this.url,
                label: this.label
            })
        );
    }

    render() {
        return html`<span id="content"><slot></slot></span>`;
    }

    static get styles() {
        return css`
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
        `;
    }

    /**
     * Fired on mouseover
     *
     * @event pb-keyword
     * @param {String} label an optional label for the place
     * @param {String} url an optional label for the place
     */
}
customElements.define('pb-keyword', PbKeyword);