import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

/**
 * PatternFly Alert integration for Figma Code Connect
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2587&m=dev',
  {
    props: {
      // Direct mapping of Type to variant
      variant: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'
      }),

      // Title text
      title: figma.string('✏️ Title', 'Alert title'),

      // Content based on Description toggle
      description: figma.enum('Description', {
        true: 'Alert description goes here',
        false: ''
      }),

      // Map expandable toggle to isExpandable prop
      isExpandable: figma.boolean('Expandable'),

      // ActionClose configuration
      actionClose: figma.enum('Actions', {
        true: '{}',
        false: 'undefined'
      })
    },
    example: (props) => (
      <Alert
        variant={props.variant}
        title={props.title}
        isExpandable={props.isExpandable}
        actionClose={props.actionClose}
      >
        {props.description}
      </Alert>
    )
  }
);
