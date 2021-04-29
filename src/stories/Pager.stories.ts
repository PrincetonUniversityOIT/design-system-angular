import {Meta, moduleMetadata, Story} from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {action} from '@storybook/addon-actions';
import {PagerComponent} from 'design-system-angular';

export default {
  title: 'Components/Pager',
  component: PagerComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<PagerComponent> = (args: PagerComponent) => ({
  component: PagerComponent,
  props: {totalPages: 10, currentPage: 1}
});

export const Default = Template.bind({});
Default.args = {
  dataPage: {totalPages: 10, currentPage: 1},
  pagerChange: action('pagerChange')
};

export const DoubleTruncated = Template.bind({});
DoubleTruncated.args = {
  dataPage: {totalPages: 20, currentPage: 7},
  pagerChange: action('pagerChange')
};

