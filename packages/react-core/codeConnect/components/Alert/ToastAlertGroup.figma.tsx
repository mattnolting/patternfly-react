import figma from '@figma/code-connect';
import { AlertGroup } from '@patternfly/react-core';

/**
 * PatternFly Toast Alert Group integration for Figma Code Connect
 */

figma.connect(
  AlertGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2821&m=dev',
  {
    props: {
      property1: figma.enum('Property 1', {
        Default: 'default'
      }),
      overflow: figma.boolean('Overflow'),
      overflowFooter: figma.boolean('Overflow footer')
    }
  }
);
