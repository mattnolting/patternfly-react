import figma from '@figma/code-connect';
import { SimpleListItems } from '@patternfly/react-core';

figma.connect(
  SimpleListItems,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4410-20664&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      text: figma.string('Text'),
      state: figma.enum('State', {
        Default: 'default',
        'Hover - Light': 'hover---light',
        'Hover - Dark': 'hover---dark',
        'Selected - Light': 'selected---light',
        'Selected - Dark': 'selected---dark',
        Disabled: 'disabled'
      }),
      type: figma.enum('Type', {
        Default: 'default',
        Link: 'link'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for SimpleListItems can be found at https://www.patternfly.org/components/list
      <SimpleListItems>{props.children}</SimpleListItems>
    )
  }
);
