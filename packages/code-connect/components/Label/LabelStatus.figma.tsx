import figma from '@figma/code-connect';
import { Label } from '@patternfly/react-core';

/**
 * PatternFly Label Status component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/label
 */

figma.connect(
  Label,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-488&m=dev',
  {
    props: {
      text: figma.string('Text'),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover'
      })
    },
    example: (props) => (
      // Documentation for Label can be found at https://www.patternfly.org/components/label
      <Label
        text={props.text}
        status={props.status}
        variant={props.variant}
        isCompact={props.isCompact}
        state={props.state}
      />
    )
  }
);
