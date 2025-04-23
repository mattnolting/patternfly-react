import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

/**
 * PatternFly Alert component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Alert
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2587&m=dev',
  {
    props: {
      // booleans
      actionLinks: figma.boolean('Actions'),
      alertDescription: figma.boolean('Description', {
        true: figma.string('✏️ Description')
      }),
      isExpandable: figma.boolean('Expandable'),

      // strings
      title: figma.string('✏️ Title'),

      // variants
      variant: figma.enum('Type', {
        Custom: 'custom',
        Danger: 'danger',
        Info: 'info',
        Success: 'success',
        Warning: 'warning'
      }),

      // children
      children: figma.children('*')
    },
    example: (props) => (
      <Alert
        title={props.title}
        variant={props.variant}
        actionLinks={props.actionLinks}
        isExpandable={props.isExpandable}
      />
    )
  }
);
