import {moduleMetadata, storiesOf} from '@storybook/angular';

const stories = storiesOf('Components/Links', module);

stories.add('Simple Link', () => {
  return {
    template:  `
      <a href="javascript:void(0);">Link Text</a>
`
  };
});

stories.add('External Link', () => {
  return {
    template:  `
     <a href="javascript:void(0);" target="_blank" rel="noopener noreferrer">Link Text</a>
`
  };
});

stories.add('Visited', () => {
  return {
    template:  `
      <a href="javascript:void(0);" class="jazz-link-visited">Link Text</a>
`
  };
});

stories.add('Visited Link Override', () => {
  return {
    template:  `
      <div class="jazz-highlight-visited">
        <a href="javascript:void(0);" class="jazz-link-visited">Link Text</a>
    </div>
`
  };
});

stories.add('Focused', () => {
  return {
    template:  `
        <a href="javascript:void(0);" class="jazz-link-focus">Link Text</a>
`
  };
});

stories.add('Active', () => {
  return {
    template:  `
    <a href="javascript:void(0);" class="jazz-link-active">Link Text</a>
`
  };
});

stories.add('Hover', () => {
  return {
    template:  `
    <a href="javascript:void(0);" class="jazz-link-hover">Link Text</a>
`
  };
});
