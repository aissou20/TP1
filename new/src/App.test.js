import { render, screen } from '@testing-library/react';
import App from './App';

// describe('<App />', () => {
  
//   it('should have heading with Hello World content', () => {
//     const { container } = render(<App />);
//     const heading1 = container.querySelector('h1');
//     expect(heading1).toHaveTextContent("Hello World");
//   })
  
//   it('should have paragraph with Bulma content', () => {
//     const { container } = render(<App />);
//     const paragraph = container.querySelector('p');
//     expect(paragraph).toHaveTextContent('Bulma')
//   })
// });

describe('<App />', () => {
  let container;
  beforeEach(()=>{
    container= render(<App/>).container
  })
  it ('should have the Hello World title', ()=>{
    expect(container.querySelector("h1")).toHaveTextContent('Hello World')
  })

  it ('should have the Bulma', ()=>{
    expect(container.querySelector("p")).toHaveTextContent('Bulma')
  })

  


});