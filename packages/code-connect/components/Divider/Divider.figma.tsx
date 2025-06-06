import { Divider } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  Divider,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2764-6708&m=dev',
  {
    props: {
      /**
       * TODO: This is a good example of how properties in Figma and props in React would benefit from naming consistency
       * React is looking for orientation, figma is defining orientation as 'Direction'
       */
      orientation: figma.enum('Direction', {
        Horizontal: { default: 'horizontal' as const },
        Vertical: { default: 'vertical' as const }
      }),
      /**
       * TODO: Figma allows optional insets, but default to insetMd
       */
      inset: figma.boolean('With insets', {
        true: { default: 'insetMd' as const },
        false: { default: 'insetNone' as const }
      })
    },
    example: (props) => (
      // Documentation for Divider can be found at https://www.patternfly.org/components/divider
      <Divider orientation={props.orientation} inset={props.inset} />
    )
  }
);
