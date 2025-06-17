import figma from '@figma/code-connect';
import { FormGroup } from '@patternfly/react-core';

figma.connect(
  FormGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1577-4455&m=dev',
  {
    props: {
      label: figma.boolean('Label'),
      helperText: figma.boolean('Helper text'),
      layout: figma.enum('Layout', {
        'Default (vertical)': 'default--vertical-',
        Horizontal: 'horizontal'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for CheckboxGroup can be found at https://www.patternfly.org/components/forms/checkbox-group
      <FormGroup>{props.children}</FormGroup>
    )
  }
);
