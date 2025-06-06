import figma from '@figma/code-connect';
import { HelperText, HelperTextItem } from '@patternfly/react-core';

/**
 * PatternFly HelperText integration for Figma Code Connect
 */

figma.connect(
  HelperText,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=151-1670&t=lyan2LLnXsDppzjo-11',
  {
    props: {
      helperText: figma.string('✏️ Helper text'),
      icon: figma.boolean('Icon'),
      type: figma.enum('Type', {
        Default: 'default',
        Indeterminate: 'indeterminate',
        Success: 'success',
        Warning: 'warning',
        Error: 'error'
      })
    },
    example: (props) => (
      // Documentation for HelperText can be found at https://www.patternfly.org/components/helper-text
      <HelperText>
        <HelperTextItem icon={props.icon} variant={props.type} content={props.helperText} />
      </HelperText>
    )
  }
);
