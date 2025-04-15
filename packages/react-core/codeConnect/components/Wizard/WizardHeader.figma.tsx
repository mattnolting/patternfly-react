import figma from '@figma/code-connect';
import { WizardHeader } from '@patternfly/react-core';

/**
 * PatternFly WizardHeader integration for Figma Code Connect
 */

figma.connect(
  WizardHeader,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-17329&m=dev',
  {
    props: {
      description: figma.string('Description', 'Description'),
      wizardTitle: figma.string('Wizard Title', 'Wizard title')
    }
  }
);
