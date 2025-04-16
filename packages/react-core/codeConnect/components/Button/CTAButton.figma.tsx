import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly CTA Button component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Button
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-778&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // strings
      text: figma.string('Text'),

      // enums
      type: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
        Inline: 'inline'
      })
    },
    example: (props) => <Button text={props.text} type={props.type} size="lg" />
  }
);
