import figma from '@figma/code-connect';
import { Tabs } from '@patternfly/react-core';

/**
 * PatternFly Horizontal Subtabs integration for Figma Code Connect
 */

figma.connect(
  Tabs,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6583&m=dev',
  {
    props: {
      inset: figma.boolean('Inset'),
      variant: figma.enum('Type', {
        Default: 'default',
        Boxed: 'boxed',
        'Boxed Light': 'boxed-light',
        'Horizontal overflow': 'horizontal-overflow',
        'With overflow': 'with-overflow'
      }),
      isSecondary: true,
      component: 'nav',

      children: figma.children('*')
    },
    example: (props) => <Tabs aria-label="Horizontal subtabs example">{props.children}</Tabs>
  }
);
