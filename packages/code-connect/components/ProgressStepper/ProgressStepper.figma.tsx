import figma from '@figma/code-connect';
import { ProgressStepper } from '@patternfly/react-core';

figma.connect(
  ProgressStepper,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7644-38563&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // enum
      isVertical: figma.enum('Direction', { Vertical: true }),
      isCompact: figma.enum('Size', { Compact: true }),

      children: figma.children('Progress step')
    },
    example: (props) => (
      // Documentation for ProgressStepper can be found at https://www.patternfly.org/components/progress-stepper
      <ProgressStepper isVertical={props.isVertical} isCompact={props.isCompact}>
        {props.children}
      </ProgressStepper>
    )
  }
);
