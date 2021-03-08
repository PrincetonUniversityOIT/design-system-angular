import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AccordionComponent} from '../app/components/accordion/accordion.component';

const stories = storiesOf('Components/Breadcrumbs', module)
  .addDecorator(
    moduleMetadata({
      declarations: [AccordionComponent],
    })
  );

stories.add('Default', () => {
  return {
    template:  `
       <nav class="jazz-breadcrumb" aria-label="Breadcrumbs">
        <ol class="jazz-breadcrumb__list">
          <li class="jazz-breadcrumb__list-item">
            <a href="#" class="jazz-breadcrumb__link">Home</a>
          </li>
          <li class="jazz-breadcrumb__list-item">
            <a href="#" class="jazz-breadcrumb__link">Another Link</a>
          </li>
          <li class="jazz-breadcrumb__list-item">
            <a href="#" class="jazz-breadcrumb__link">Yet Another Link Level</a>
          </li>
          <li class="jazz-breadcrumb__list-item jazz-current" aria-current="page">And finally here were are the page description</li>
        </ol>
       </nav>`
  };
});
