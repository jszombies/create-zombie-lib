import { configure } from '@storybook/react';

function loadStories() {
  require('../../src/Example.story.jsx');
}

configure(loadStories, module);
