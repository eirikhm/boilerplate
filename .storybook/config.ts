import { configure } from '@storybook/react';

const req = require.context('../src/', true, /.stories.tsx$/);
import "rbx/index.css";


function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);