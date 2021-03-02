// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular';
import {ButtonComponent} from '../app/components/button/button.component';

export default {
  title: 'Example/Button',
  component: ButtonComponent
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true
};
