import {moduleMetadata, storiesOf} from '@storybook/angular';
import {FormFieldComponent} from '../../projects/design-system-angular/src/lib/forms/form-field.component';
import {FormFieldErrorComponent} from '../../projects/design-system-angular/src/lib/forms/form-field-error.component';
import {FormInputDirective} from '../../projects/design-system-angular/src/lib/forms/form-input.directive';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

const stories = storiesOf('Components/Forms', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        FormFieldComponent,
        FormFieldErrorComponent,
        FormInputDirective
      ],
      providers: [FormBuilder]
    })
  );

stories.add('Text', () => {
  const group = new FormGroup({
    username : new FormControl(null, {
      validators: Validators.required,
      updateOn: 'blur'
    })
  });

  return {
    template:  `
      <form [formGroup]="formGroup" novalidate>
        <form-field label="Name" for="username" [messageConfig]="{'maxlength': '\\'Name\\' cannot exceed 10 characters.'}" required="required">
          <input type="text" maxlength="10" formInput id="username" class="jazz-input"
            [class.jazz-input--error]="formGroup.get('username').invalid && (formGroup.get('username').dirty || formGroup.get('username').touched)"
            formControlName="username" required />
        </form-field>
      </form>`,
    props: {
      formGroup: group
    }
  };
});

stories.add('Text Area', () => {
  const group = new FormGroup({
    description : new FormControl(null, {
      validators: Validators.required,
      updateOn: 'blur'
    })
  });

  return {
    template:  `
      <form [formGroup]="formGroup" novalidate>
        <form-field label="Describe This" for="description" required="required">
          <textarea formInput id="description" class="jazz-input"
            [class.jazz-input--error]="formGroup.get('description').invalid && (formGroup.get('description').dirty || formGroup.get('description').touched)"
            formControlName="description" required>
          </textarea>
        </form-field>
      </form>`,
    props: {
      formGroup: group
    }
  };
});

stories.add('Dropdown', () => {
  const group = new FormGroup({
    purpose : new FormControl(null, {
      validators: Validators.required,
      updateOn: 'blur'
    })
  });

  return {
    template:  `
      <form [formGroup]="formGroup" novalidate>
        <form-field label="Purpose" for="name">
          <select formInput class="jazz-input" id="purpose" formControlName="purpose" required
                [class.jazz-input--error]="formGroup.get('purpose').invalid && (formGroup.get('purpose').dirty || formGroup.get('purpose').touched)">
                <option value=""> </option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option disabled>Option 3</option>
                <option>Option 4</option>
          </select>
        </form-field>
     </form>`,
    props: {
      formGroup: group
    }
  };
});


stories.add('Checkbox', () => {
  const group = new FormGroup({
    apple : new FormControl({checked: true}),
    orange : new FormControl(),
    strawberry : new FormControl(),
    watermelon : new FormControl({checked: true})
  });

  return {
    template:  `
      <form [formGroup]="formGroup" novalidate>
        <form-field>
          <div class="jazz-checkbox">
              <input class="jazz-checkbox__input" type="checkbox" id="apple" type="checkbox" formControlName="apple"  />
              <label class="jazz-checkbox__label" for="apple">Apple</label>
          </div>
          <div class="jazz-checkbox">
              <input class="jazz-checkbox__input" type="checkbox" id="orange" type="checkbox" formControlName="orange" />
              <label class="jazz-checkbox__label" for="orange">Orange</label>
          </div>
          <div class="jazz-checkbox">
              <input class="jazz-checkbox__input" type="checkbox" id="strawberry" type="checkbox" formControlName="strawberry" disabled />
              <label class="jazz-checkbox__label" for="strawberry">Strawberry</label>
          </div>
          <div class="jazz-checkbox">
              <input class="jazz-checkbox__input" type="checkbox" id="watermelon" type="checkbox" formControlName="watermelon" disabled />
              <label class="jazz-checkbox__label" for="watermelon">Watermelon</label>
          </div>
        </form-field>
     </form>`,
    props: {
      formGroup: group
    }
  };
});
