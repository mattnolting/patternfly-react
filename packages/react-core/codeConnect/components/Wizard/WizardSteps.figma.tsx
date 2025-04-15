import figma from '@figma/code-connect';
import { WizardSteps } from '@patternfly/react-core';

/**
 * PatternFly WizardSteps integration for Figma Code Connect
 */

figma.connect(
  WizardSteps,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=17034-13708&m=dev',
  {
    props: {
      semantic: figma.enum('Semantic Color Tokens', {
        'Auto (Light)': 'auto-light'
      })
    }
  }
);
