import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Inline Link Button component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Button
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1291-2153&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // strings
      text: figma.string('Text'),

      // variants
      type: figma.enum('Type', {
        Default: 'default',
        'Inline link external': 'inline-link-external'
      }),

      // state
      isDisabled: figma.enum('State', {
        Disabled: true
      })
    },
    example: (props) => (
      <Button isInline variant="link" isDisabled={props.isDisabled}>
        {props.text}
      </Button>
    )
  }
);
