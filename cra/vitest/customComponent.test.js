import { expect, test } from 'vitest';
import { render } from 'react-dom';
import { createElement } from 'react';
import CustomComponent from '../host/src/CustomComponent';
import { JSDOM } from 'jsdom';

test('renders CustomComponent with message', () => {
  // Crée un environnement DOM simulé avec jsdom
  const { window } = new JSDOM('<!doctype html><html><body></body></html>');
  global.document = window.document;

  // Crée un élément div pour simuler le montage du composant
  const container = document.createElement('div');

  // Rend le composant dans le conteneur
  render(createElement(CustomComponent, { message: 'Test Message' }), container);

  // Vérifie si le contenu est correctement rendu
  expect(container.innerHTML).toBe('<div><p>Test Message</p></div>');
});
