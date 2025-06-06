import figma from '@figma/code-connect';
import { Popover, Button } from '@patternfly/react-core';

/**
 * PatternFly Popover integration for Figma Code Connect
 */

figma.connect(
  Popover,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5857-2066&m=dev',
  {
    props: {
      hasFooter: figma.boolean('Has footer'),
      popoverDescription: figma.string('Popover description', 'I think what happened is you broke something.'),
      popoverHeading: figma.string('Popover Heading', 'Popover titles be like what the dickens!'),
      hasSecondaryButton: figma.boolean('Has Secondary button'),
      hasInlineButton: figma.boolean('Has inline button'),
      popoverFooter: figma.string('Popover footer', 'Some time ago'),
      showHeaderIcon: figma.boolean('Show header icon'),
      status: figma.enum('Status', {
        Default: 'default',
        Success: 'success',
        Info: 'info',
        Warning: 'warning',
        Danger: 'danger'
      }),
      position: figma.enum('Position', {
        'Top-left': 'top-left',
        'Top-middle': 'top',
        'Top-right': 'top-right',
        'Bottom-left': 'bottom-left',
        'Bottom-middle': 'bottom',
        'Bottom-right': 'bottom-right'
      })
    },
    example: (props) => (
      // Documentation for Popover can be found at https://www.patternfly.org/components/popover
      <Popover
        headerIcon={props.showHeaderIcon}
        headerContent={props.popoverHeading}
        bodyContent={props.popoverDescription}
        footerContent={props.popoverFooter}
        position={props.position}
        alertSeverityVariant={props.status}
      >
        <Button>Click me</Button>
      </Popover>
    )
  }
);
