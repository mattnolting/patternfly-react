import { Alert } from '@patternfly/react-core';
import figma from '@figma/code-connect';

/**
 * PatternFly Alert component integration for Figma Code Connect
 *
 * This file maps Figma properties to the PatternFly Alert component,
 * allowing designers to generate React code directly from Figma's Dev Mode.
 *
 * @see https://www.patternfly.org/components/alert
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2784&m=dev',
  {
    props: {
      text: figma.string('✏️ Text', 'View 3 more notifications')
    },
    example: (props) => <Alert title={props.text} />
  }
);
