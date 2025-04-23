import figma from '@figma/code-connect';
import { Alert, AlertActionLink } from '@patternfly/react-core';

/**
 * PatternFly Alert component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Alert
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2698&m=dev',
  {
    props: {
      // booleans
      actionsLinks: figma.boolean('Actions'),
      description: figma.boolean('Description', {
        true: figma.string('✏️ Description')
      }),
      isExpandable: figma.boolean('Expandable'),

      // strings
      title: figma.string('✏️ Title', 'Alert title'),

      // enums
      variant: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'
      }),

      // children
      children: figma.children('*')
    },
    example: (props) => (
      <Alert
        isExpandable={props.isExpandable}
        title={props.title}
        variant={props.variant}
        isInline
      >
        <p>{props.description}</p>
        {props.children}
      </Alert>
    )
  }
);