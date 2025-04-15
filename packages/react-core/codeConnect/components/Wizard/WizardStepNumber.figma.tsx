import figma from '@figma/code-connect';
import { WizardStepNumber } from '@patternfly/react-core';

/**
 * PatternFly WizardStepNumber integration for Figma Code Connect
 */

figma.connect(
  WizardStepNumber,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-17343&m=dev',
  {
    props: {
      number: figma.string('Wizard Step Number', '1'),
      state: figma.enum('State', {
        'Current step': 'current-step',
        InActive: 'inactive',
        Disabled: 'disabled'
      })
    }
  }
);
