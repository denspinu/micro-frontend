import { expect, test } from 'vitest';
import { render } from 'react-dom';
import { createElement } from 'react';
import AnotherComponent from '../remote/src/AnotherComponent';
import { JSDOM } from 'jsdom';

test('renders AnotherComponent with content', () => {
  // Crée un environnement DOM simulé avec jsdom
  const { window } = new JSDOM('<!doctype html><html><body></body></html>');
  global.document = window.document;

  // Crée un élément div pour simuler le montage du composant
  const container = document.createElement('div');

  // Rend le composant dans le conteneur
  render(createElement(AnotherComponent, { content: 'Test Content' }), container);

  // Vérifie si le contenu est correctement rendu
  expect(container.innerHTML).toBe('<div><p>Test Content</p></div>');
});
