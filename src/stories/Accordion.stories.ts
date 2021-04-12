import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AccordionComponent} from 'design-system-angular';

const stories = storiesOf('Components/Accordion', module)
  .addDecorator(
    moduleMetadata({
      declarations: [AccordionComponent],
    })
  );

stories.add('Default', () => {
  return {
    template:  `
        <jazz-accordion>
        <h2>
          <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content1">Sed porttitor lectus nibh?</button>
        </h2>
        <div class="jazz-accordion__content" id="content1" hidden>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
          pellentesque nec, egestas non nisi.
        </div>
        <h2>
          <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="true" aria-controls="content2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta?
          </button>
        </h2>
        <div aria-hidden="false" class="jazz-accordion__content" id="content2">
          Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
          et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Cras ultricies ligula sed magna dictum porta.
        </div>
        <h2>
          <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content3">
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.
          </button>
        </h2>
        <div class="jazz-accordion__content" id="content3" hidden>
          Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        </div>
        <h2>
          <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content4">
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.
          </button>
        </h2>
        <div class="jazz-accordion__content" id="content4" hidden>
          Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        </div>
      </jazz-accordion>
`
  };
});
