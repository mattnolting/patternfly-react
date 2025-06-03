import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Stateful Button component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Button
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5805-20130&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // nested
      showIcon: figma.boolean('Show Icon', { true: figma.children('IconWrapper') }),

      // boolean
      text: figma.boolean('Show text', { true: figma.string('Text ✏️') }),

      // enum
      isExpanded: figma.enum('State', { Expanded: true }),
      type: figma.enum('Type', {
        Read: 'read',
        Unread: 'unread',
        'Unread - Needs attention': 'unread---needs-attention'
      }),
      icon: figma.children('IconWrapper'),
      children: figma.children('*')
    },
    example: (props) => (
      <Button variant="stateful" isExpanded={props.isExpanded} icon={props.icon}>
        {props.children}
      </Button>
    )
  }
);
