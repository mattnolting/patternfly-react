import figma from '@figma/code-connect';
import { WizardBasicModal } from '@patternfly/react-core';

/**
 * PatternFly WizardBasicModal integration for Figma Code Connect
 */

figma.connect(
  WizardBasicModal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-18627&m=dev',
  {
    props: {
      type: figma.enum('Type', {
        'With Form': 'with-form',
        'Empty': 'empty'
      }),
      withDrawer: figma.boolean('With drawer'),
      wizardStepTitle: figma.string('Wizard Step Title', 'Step title')
    }
  }
);
