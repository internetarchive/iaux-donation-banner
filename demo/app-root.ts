import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/donation-banner';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html` <donation-banner> </donation-banner> `;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}
