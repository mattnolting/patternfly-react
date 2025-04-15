import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

/**
 * PatternFly Toast Alert integration for Figma Code Connect
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2670&m=dev',
  {
    props: {
      variant: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'

      }),
      title: figma.string('Title', 'Alert title'),
      description: figma.boolean('Description'),
      descriptionText: figma.string('Description', 'Description'),
      isExpandable: figma.boolean('Expandable'),
      actions: figma.boolean('Actions')
    },
    example: (props) => (
      <Alert
        variant="info"
        title="Alert title"
        isExpandable
        actionLinks={
          <><a href="#">Action</a> <a href="#">Action</a></>
        }
      >
        Description
      </Alert>
    )
  }
);