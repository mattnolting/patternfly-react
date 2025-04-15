import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

/**
 * PatternFly InlinePlainAlert integration for Figma Code Connect
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2754&m=dev',
  {
    props: {
      variant: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'
      }),
      title: figma.string('Title', 'Alert title')
    },
    example: (props) => <Alert variant={props.variant} title={props.title} isInline={true} isPlain={true} />
  }
);
