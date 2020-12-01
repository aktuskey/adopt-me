import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
  return React.createElement(
    // this is what is being created
    "div",
    // the empty object holds optional attributes for the child element, like an id
    {},
    // these are the children, make it an array for multiple children
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Amelie",
        animal: "Cat",
        breed: "Domestic Longhair",
      }),
      React.createElement(Pet, {
        name: "Alfie",
        animal: "Cat",
        breed: "Oriental Shorthair",
      }),
      React.createElement(Pet, {
        name: "Angel",
        animal: "Dog",
        breed: "Boston Terrier",
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
