import { LitElement, html, css } from 'lit-element';
import { pbMixin } from '@teipublisher/pb-components/src/pb-mixin';


/**
 * Represents a keyword. Sends an additional `pb-keyword` event
 * on click.
 *
 * @slot - default unnamed slot for content
 * @fires pb-keyword - Sends keywords
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
             * Optional label for the keyword
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
     * Fired on click
     *
     * @event pb-keyword
     * @param {String} label an optional label for the keyword
     * @param {String} url an optional url for the keyword
     */
}
customElements.define('pb-keyword', PbKeyword);