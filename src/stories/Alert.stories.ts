// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular';
import {AlertComponent} from '../app/components/alert/alert.component';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Components/Alert',
  component: AlertComponent
} as Meta;

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  component: AlertComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  heading: 'Alerts',
  title: 'Alert Title',
  content: 'This is the content of the alert.  It can be a simple paragraph or something more complex.',
  onClose: action('onClose')
};
