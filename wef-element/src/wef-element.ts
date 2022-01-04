import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('wef-element')
export class WefElement extends LitElement {

  render() {
    return html`
      <button @click=${this._raiseClickEvent}>WefElement</button>
    `
  }

  private _raiseClickEvent = () =>{
    const event = new Event("WefElementClicked");
    this.dispatchEvent(event);
    console.log("event dispatched from wef-element");
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'wef-element': WefElement
  }
}
