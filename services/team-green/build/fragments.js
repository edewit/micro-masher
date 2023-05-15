const recos = {
  t_porsche: ['3', '5', '6'],
  t_fendt: ['3', '6', '4'],
  t_eicher: ['1', '8', '7'],
};

function renderRecos(sku = 't_porsche') {
  const reco = recos[sku] || [];
  return `
    <h3>Related Products</h3>
    ${reco.map((id) => `<img src="./green/images/reco_${id}.jpg" alt="Reco ${id}" />`).join('')}
  `;
}

/* eslint-disable no-use-before-define, no-console, class-methods-use-this */

class GreenRecos extends HTMLElement {
  static get observedAttributes() {
    return ['sku'];
  }

  connectedCallback() {
    const sku = this.getAttribute('sku');
    this.log('connected', sku);
    this.render();
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this.log('attributeChanged', attr, newValue);
    this.render();
  }

  render() {
    const sku = this.getAttribute('sku');
    this.innerHTML = renderRecos(sku);
  }

  disconnectedCallback() {
    const sku = this.getAttribute('sku');
    this.log('disconnected', sku);
  }

  log(...args) {
    console.log('🖼️ green-recos', ...args);
  }
}

/* globals window */

window.customElements.define('green-recos', GreenRecos);

const init = (element) => {
  const el = document.createElement('green-recos');
  el.setAttribute('sku', 't_porsche');
  element.append(el);

  window.addEventListener('sku-change', (e) => {
    el.setAttribute('sku', e.detail.sku);
  });
};

export { init };
