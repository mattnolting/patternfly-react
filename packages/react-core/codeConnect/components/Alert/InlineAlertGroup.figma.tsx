import figma from '@figma/code-connect';
import { AlertGroup } from '@patternfly/react-core';

/**
 * PatternFly InlineAlertGroup integration for Figma Code Connect
 */

figma.connect(
  AlertGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2780&m=dev',
  {
    props: {
      semantic: figma.enum('Semantic Color Tokens', {
        'Auto (Light)': 'auto-light'
      })
    },
    example: (props) => <AlertGroup />
  }
);
