import figma from '@figma/code-connect';
import { WizardStepItem } from '@patternfly/react-core';

/**
 * PatternFly WizardStepItem integration for Figma Code Connect
 */

figma.connect(
  WizardStepItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-17356&m=dev',
  {
    props: {
      navItem: figma.string('✏️ Nav item', 'Step title'),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Selected: 'selected',
        Disabled: 'disabled',
        InActive: 'inactive'
      }),
      expansion: figma.enum('Expansion', {
        'No expansion': 'no-expansion',
        'Expandable - Open': 'expandable---open',
        'Expandable - closed': 'expandable---closed'
      }),
      wizardStepNumber: figma.nestedProps('Wizard step number', {
        state: figma.enum('State', {
          InActive: 'inactive',
          Active: 'active',
          Selected: 'selected',
          Current: 'current'
        }),
        number: figma.string('Wizard Step Number', '1')
      })
    }
  }
);
