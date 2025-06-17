import figma from '@figma/code-connect';
import { FormGroup } from '@patternfly/react-core';

figma.connect(
  FormGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-788',
  {
    props: {
      label: figma.nestedProps('Input Label', {
        text: figma.string('✏️ Label text')
      }),
      children: figma.children('*'),
      inputLabel: figma.children('Input Label')
    },

    example: (props) => (
      // Documentation for FormGroup can be found at https://www.patternfly.org/components/text-input
      <FormGroup label={props.label.text} type="text" aria-label="Text input example">
        {props.inputLabel}
      </FormGroup>
    )
  }
);
