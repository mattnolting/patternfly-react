import figma from '@figma/code-connect';
import { Popover, ProgressStep } from '@patternfly/react-core';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons';

// Documentation for ProgressStep can be found at https://www.patternfly.org/components/progress-stepper

figma.connect(
  ProgressStep,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7644-38618&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // boolean
      popoverRender: figma.boolean('Popover Underline ', {
        true: () => (
          <Popover
            aria-label="Step help"
            headerContent={<div>Step popover</div>}
            bodyContent={<div>Additional info or help text content.</div>}
            triggerAction="click"
            position="right"
          />
        ),
        false: undefined
      }),

      // enum
      icon: figma.enum('State', { 'Loading/Misc. state': <InProgressIcon /> }),
      variant: figma.enum('State', {
        'In progress status': 'default',
        'Pending status': 'pending',
        'Failure status': 'danger',
        'Completed status': 'success',
        'Warning status': 'warning'
      }),

      // content
      description: figma.textContent('Description'),
      title: figma.textContent('Title')
    },
    example: (props) => (
      <ProgressStep
        popoverRender={props.popoverRender}
        /* icon={props.icon} */
        description={props.description}
        variant={props.variant}
      >
        {props.title}
      </ProgressStep>
    )
  }
);
