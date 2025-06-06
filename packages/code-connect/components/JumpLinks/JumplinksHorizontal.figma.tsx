import figma from '@figma/code-connect';
import { JumpLinks, JumpLinksLabel } from '@patternfly/react-core';

/**
 * PatternFly JumpLinks horizontal component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/jump-links#horizontal-with-label
 */

figma.connect(
  JumpLinks,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8644-150823&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // boolean
      showLabel: figma.boolean('Show label'),

      // string
      labelText: figma.string('Label Text'),

      // enum
      type: figma.enum('Type', {
        'With Label': 'with-label'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for JumpLinks can be found at https://www.patternfly.org/components/jump-links
      <JumpLinks isHorizontal>
        <JumpLinksLabel>{props.labelText}</JumpLinksLabel>
        {props.children}
      </JumpLinks>
    )
  }
);
