import { p as pbMixin, L as LitElement, _ as _objectSpread2, h as html, c as css } from './pb-mixin-ad783a5d.js';

/**
 * A component to show iframe.
 * 
 * @fires pb-keyword - When received, focuses the url of the keyword passed in with the event
 */

class PbIframe extends pbMixin(LitElement) {
  static get properties() {
    return _objectSpread2({
      /**
       * Url to load on iframe
       */
      url: {
        type: String
      },

      /**
       * Width of iframe
       */
      width: {
        type: String
      },

      /**
       * Height of iframe
       */
      height: {
        type: String
      }
    }, super.properties);
  }

  constructor() {
    super();
    this.url = '';
    this.width = '100%';
    this.height = '600';
  }

  connectedCallback() {
    super.connectedCallback();
    this.subscribeTo('pb-keyword', ev => {
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

/**
 * Represents a keyword. Sends an additional `pb-keyword` event
 * on click.
 *
 * @slot - default unnamed slot for content
 * @fires pb-keyword - Sends keywords
 * @cssprop --pb-highlight-color - Background color to highlight an element
 */

class PbKeyword extends pbMixin(LitElement) {
  static get properties() {
    return _objectSpread2(_objectSpread2({}, super.properties), {}, {
      url: {
        type: String
      },

      /**
       * Optional label for the keyword
       */
      label: {
        type: String
      }
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', () => this.emitTo('pb-keyword', {
      url: this.url,
      label: this.label
    }));
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
//# sourceMappingURL=pb-extension-bundle.js.map
