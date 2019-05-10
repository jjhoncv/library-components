import { storiesOf } from '@storybook/react';
import Field from './Field';
import * as readmeField from './Field.md';
import FieldGroup from './Field-group';
import * as readmeFieldGroup from './Field-group.md';
import FieldError from './Field-error';
import * as readmeFieldError from './Field-error.md';

const storie = storiesOf('2. Components/Field', module);
storie.add('Default', Field(), {
  readme: { content: readmeField}
})
storie.add('Group', FieldGroup(), {
  readme: { content: readmeFieldGroup}
})
storie.add('With Error', FieldError(), {
  readme: { content: readmeFieldError}
})
