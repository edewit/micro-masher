/* globals window */
import BlueBasket from './blue-basket/custom-element';
import BlueBuy from './blue-buy/custom-element';

window.blue = { count: 0 };
window.customElements.define('blue-basket', BlueBasket);
window.customElements.define('blue-buy', BlueBuy);

const init = (element) => {
  element.append(document.createElement('blue-basket'));

  const el = document.createElement('blue-buy');
  el.setAttribute('sku', 't_porsche');
  element.append(el);

  window.addEventListener('sku-change', (e) => {
    el.setAttribute('sku', e.detail.sku);
  });
};

export {
  init
};
