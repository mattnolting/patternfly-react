import figma from '@figma/code-connect';
import { WizardInPage } from '@patternfly/react-core';

/**
 * PatternFly WizardInPage integration for Figma Code Connect
 */

figma.connect(
  WizardInPage,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-23799&m=dev',
  {
    props: {
      type: figma.enum('Type', {
        'In Page': 'in-page',
        'In Page Empty': 'in-page-empty',
        'With Drawer': 'with-drawer'
      }),
      withDrawer: figma.boolean('With drawer'),
      wizardStepTitle: figma.string('Wizard Step Title', 'Step Title')
    }
  }
);
