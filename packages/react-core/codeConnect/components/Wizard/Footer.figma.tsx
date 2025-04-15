import figma from '@figma/code-connect';
import { Footer } from '@patternfly/react-core';

/**
 * PatternFly Footer integration for Figma Code Connect
 */

figma.connect(
  Footer,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-17431&m=dev',
  {
    props: {
      type: figma.enum('Type', {
        'Wizard (Default)': 'wizard-default',
        Default: 'default'
      }),
      withOptionalSteps: figma.boolean('With optional steps')
    }
  }
);
