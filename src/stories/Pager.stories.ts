import {Meta, moduleMetadata, Story} from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import {PagerComponent} from '../app/components/pager/pager.component';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Example/Pager',
  component: PagerComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
} as Meta;

const pageSet1 = {
  totalPages: 10,
  number: 1
}

const pageSet2 = {
  totalPages: 20,
  number: 7
}

const Template: Story<PagerComponent> = (args: PagerComponent) => ({
  component: PagerComponent,
  props: args
});

export const Default = Template.bind({});
Default.args = {
  dataPage: pageSet1,
  pagerChange: action('pagerChange')
};

export const DoubleTruncated = Template.bind({});
DoubleTruncated.args = {
  dataPage: pageSet2,
  pagerChange: action('pagerChange')
};

