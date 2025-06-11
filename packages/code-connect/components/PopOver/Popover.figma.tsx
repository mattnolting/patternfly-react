import figma from '@figma/code-connect';
import { Button, Popover } from '@patternfly/react-core';

figma.connect(
  Popover,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5857-2066',
  {
    props: {
      hasFooter: figma.boolean('Has footer'),
      popoverDescription: figma.string('Popover description'),
      popoverHeading: figma.string('Popover Heading'),
      hasSecondaryButton: figma.boolean('Has Secondary button'),
      hasInlineButton: figma.boolean('Has inline button'),
      popoverFooter: figma.string('Popover footer'),
      showHeaderIcon: figma.boolean('Show header icon'),
      status: figma.enum('Status', {
        Default: undefined,
        Success: 'success',
        Info: 'info',
        Warning: 'warning',
        Danger: 'danger'
      }),
      position: figma.enum('Position', {
        'Top-left': 'top-start',
        'Top-middle': 'top',
        'Top-right': 'top-end',
        'Bottom-left': 'bottom-start',
        'Bottom-middle': 'bottom',
        'Bottom-right': 'bottom-end'
      })
    },
    example: (props) => (
      // Documentation for Popover can be found at https://www.patternfly.org/components/popover
      <Popover
        aria-label="Clickable popover"
        headerIcon={props.showHeaderIcon}
        headerContent={props.popoverHeading}
        bodyContent={props.popoverDescription}
        footerContent={props.popoverFooter}
        position={props.position}
        triggerAction="click"
        alertSeverityVariant={props.status}
      >
        <Button>Click me</Button>
      </Popover>
    )
  }
);
