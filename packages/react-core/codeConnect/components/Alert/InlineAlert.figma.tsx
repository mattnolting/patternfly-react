import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

/**
 * PatternFly Alert component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Alert
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2698&m=dev',
  {
    props: {
      // strings
      title: figma.string('✏️ Title', 'Alert title'),
      description: figma.enum('Description', {
        true: 'Alert description goes here',
        false: ''
      }),

      // booleans
      actionsLinks: figma.boolean('Actions'),
      isExpandable: figma.boolean('Expandable'),

      // variants
      variant: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'
      }),

      // children
      actionLinks: figma.boolean('Actions'),
      children: figma.children('*')
    },
    example: (props) => (
      <Alert
        isExpandable={props.isExpandable}
        title={props.title}
        variant={props.variant}
        actionLinks={props.actionLinks}
      />
    )
  }
);
