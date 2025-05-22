import figma from '@figma/code-connect';
import { WizardNavItem } from '@patternfly/react-core';

/**
 * PatternFly WizardNavItem component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/wizard#navigation
 */

figma.connect(
  WizardNavItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-17356&m=dev',
  {
    props: {
      // string
      navItem: figma.string('✏️ Nav item'),

      // enum
      isDisabled: figma.enum('State', {
        Disabled: true
      }),
      isExpandable: figma.enum('Expansion', {
        'Expandable - Open': true,
        'Expandable - closed': true
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <WizardNavItem content={props.navItem} isDisabled={props.isDisabled} isExpandable={props.isExpandable}>
        {props.children}
      </WizardNavItem>
    )
  }
);
