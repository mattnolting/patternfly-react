import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Link Button component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Button
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-745&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      iconEnd: figma.boolean('Icon right'),
      iconStart: figma.boolean('Icon left'),
      text: figma.string('Text'),

      type: figma.enum('Type', {
        Default: 'default',
        Danger: 'danger',
        'External link': 'external-link',
        'Button with count': 'button-with-count',
        Progress: 'progress'
      }),
      // state
      isClicked: figma.enum('State', {
        Clicked: true
      }),
      isDisabled: figma.enum('State', {
        Disabled: true
      }),

      size: figma.enum('Size', {
        Default: 'default',
        Small: 'small'
      })
    },
    example: (props) => (
      <Button
        text={props.text}
        isClicked={props.isClicked}
        isDisabled={props.isDisabled}
        type={props.type}
        size={props.size}
      />
    )
  }
);
