/* globals window */
import GreenRecos from './green-recos/custom-element';

window.customElements.define('green-recos', GreenRecos);

const init = (element) => {
  const el = document.createElement('green-recos');
  el.setAttribute('sku', 't_porsche');
  element.append(el);

  window.addEventListener('sku-change', (e) => {
    el.setAttribute('sku', e.detail.sku);
  });
};

export {
  init
};
