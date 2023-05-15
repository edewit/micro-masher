/* globals document, window */
/* eslint-disable no-use-before-define */
import renderPage from './page/render';

let $app;

function handleClickOption(e) {
  e.preventDefault();
  const sku = e.currentTarget.getAttribute('data-sku');
  const event = new CustomEvent('sku-change', { detail: { sku }, bubbles: true });
  e.currentTarget.dispatchEvent(event);
  rerender(sku);
}

function addListeners() {
  const $btns = $app.querySelectorAll('#options a');
  Array.prototype.forEach.call($btns, ($btn) => (
    $btn.addEventListener('click', handleClickOption)
  ));
}

function removeListeners() {
  const $btns = $app.querySelectorAll('#options a');
  Array.prototype.forEach.call($btns, ($btn) => (
    $btn.removeEventListener('click', handleClickOption)
  ));
}

function rerender(sku) {
  removeListeners();
  $app.innerHTML = renderPage(sku);
  addListeners();
}

const init = (element) => {
  $app = element;
  rerender();
};

export {
  init
};
