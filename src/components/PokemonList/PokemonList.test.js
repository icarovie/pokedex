import { render, screen, fireEvent } from '@testing-library/react';
import PokemonList from './PokemonList';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom'

const setup = () => render(
  <PokemonList/>
)

describe('PokemonList', () => {
  test('Should contain the header title', () => {
      setup()
      const title = screen.getByText('Pokédex')

      expect(title).toBeInTheDocument()
  })

  test('Should containt the search bar', () => {
    setup()
    const element = screen.getByTestId('search-bar')

    expect(element).toBeInTheDocument()
  })

  test('Should filter the elements using the search bar', () => {
    setup()
    
    const element = screen.getByTestId('search-bar')

    fireEvent.change(element, { target: { value: 'joao'}})

    expect(element.value).toBe('joao')
  })
});