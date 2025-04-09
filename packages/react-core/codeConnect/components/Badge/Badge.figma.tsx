import figma from '@figma/code-connect';
import { Badge } from '@patternfly/react-core';

/**
 * PatternFly Badge component integration for Figma Code Connect
 *
 * This file maps Figma properties to the PatternFly Badge component,
 * allowing designers to generate React code directly from Figma's Dev Mode.
 * The Badge component is used to highlight counts or statuses.
 *
 * @see https://www.patternfly.org/components/badge
 */

figma.connect(
  Badge,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-1132&m=dev',
  {
    props: {
      title: figma.string('Text', '00'),
      type: figma.enum('Type', {
        Unread: undefined,
        Read: false,
        disable: false
      })
    },
    example: (props) => <Badge title={props.title} type={props.type} />
  }
);
