// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {AlertComponent} from 'design-system-angular';

const stories = storiesOf('Components/Alert', module)
  .addDecorator(
    moduleMetadata({
      declarations: [AlertComponent],
    })
  );

stories.add('Default', () => {
  return {
    template: `
        <jazz-alert heading='Alerts' title="Alert Title" (onClose)="onClose($event)">
                <p>This is the alert content</p>
        </jazz-alert>
     `,
    props: {
      onClose: action('onClose')
    }
  };
});
