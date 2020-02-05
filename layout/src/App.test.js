import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { act } from "react-dom/test-utils";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
/*  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/
});

test('On affiche bien les informations textuels sur la card', () => {
  act( () => {
    render(<App></App>, );
  });

  const name_line = document.querySelector("[data-testid='name']"); // test si la ligne nom est bien présente et n'est pas nulle
  expect(name_line).toBeInTheDocument
  expect(name_line.textContent).not.toMatch("  ")

  const email_line = document.querySelector("[data-testid='mail']"); // test si la ligne email est bien présente et n'est pas nulle
  expect(email_line).toBeInTheDocument
  expect(email_line.textContent).not.toMatch("  ")
})

test("L'image est bien affiché de façon correct", () => {
  act (() => {
    render(<App></App>, );
  })

  const img = document.querySelector("[data-testid='user-img']")
  expect(img).toBeInTheDocument
  expect(img).src.not.toMatch(" ")

})
