import { storiesOf } from "@storybook/react";

import { createElement } from "react";
import { Provider } from "overmind-react";

import { createOvermindMock } from "overmind";
import { config } from "../overmind/config";
import HomePage from './HomePage';


const mockEmpty = createOvermindMock(config);

config.state.core.posts = [
  {id:1,title:'Foo',body:'bar baz'},
  {id:2,title:'Bar',body:'bar bam'},
]
const mockWithData = createOvermindMock(config);

storiesOf("pages/Home", module)
  .add("Loading", () => [
    <Provider value={mockEmpty}>
      <HomePage />
    </Provider>
  ])
  .add("With data", () => [
    <Provider value={mockWithData}>
      <HomePage />
    </Provider>
  ]);