import { HorizontalTabs } from '@patternfly/react-core';
import figma from '@figma/code-connect';

/**
 * PatternFly HorizontalTabs integration for Figma Code Connect
 */

figma.connect(
  HorizontalTabs,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6503&m=dev',
  {
    props: {
      // boolean
      inset: figma.boolean('Inset'),

      // enum
      isBox: figma.enum('Type', {
        Boxed: true
      }),
      hasOverflowTab: figma.enum('Type', {
        'With overflow': true
      }),
      variant: figma.enum('Type', {
        Default: 'default',
        'Boxed Light': 'boxed-light',
        'With overflow': 'with-overflow',
        'With horizontal overflow': 'with-horizontal-overflow',
        Dynamic: 'dynamic'
      }),

      children: figma.children('TabHorizontal')
    },
    example: (props) => (
      <HorizontalTabs isBox={props.isBox} hasOverflowTab={props.hasOverflowTab} usePageInsets={props.inset} variant={props.variant}>
        {props.children}
      </HorizontalTabs>
    )
  }
);
