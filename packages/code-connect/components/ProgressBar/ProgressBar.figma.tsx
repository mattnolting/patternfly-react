import figma from '@figma/code-connect';
import { Progress } from '@patternfly/react-core';

figma.connect(
  Progress,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7644-38395',
  {
    props: {
      title: figma.string('Title', 'Title'),
      showMainPercentage: figma.boolean('Show main percentage'),
      showOutsidePercentage: figma.boolean('Show outside percentage'),
      showInsidePercentage: figma.enum('Show inside percentage', {
        true: 'inside',
        false: 'outside'
      }),
      helperText: figma.enum('Show helper text', {
        true: 'Helper text',
        false: ''
      }),
      size: figma.enum('Size', {
        Default: 'default',
        Small: 'sm',
        Large: 'lg'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Success: 'success',
        Warning: 'warning',
        Error: 'danger'
      })
    },
    example: (props) => (
      // Documentation for Progress can be found at https://www.patternfly.org/components/progress
      <Progress
        value={50}
        title={props.title}
        size={props.size}
        variant={props.state}
        measureLocation={props.showInsidePercentage}
        helperText={props.helperText}
      />
    )
  }
);
