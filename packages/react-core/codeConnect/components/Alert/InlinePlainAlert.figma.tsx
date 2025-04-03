import { Alert } from '@patternfly/react-core/dist/js/components/Alert';
import figma from '@figma/code-connect';

/**
 * InlinePlainAlert component - an inline plain variant of the Alert component
 */
figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2754&m=dev',
  {
    props: {
      // Alert variant
      variant: figma.enum(
        'Type',
        {
          Info: 'info',
          Success: 'success',
          Warning: 'warning',
          Danger: 'danger',
          Custom: 'custom'
        },
        'Info'
      ),

      // Alert title (required)
      title: figma.string('Title', 'Alert title'),

      // Optional description
      description: figma.boolean('Description', {
        true: figma.string('Description Text', 'Alert description goes here'),
        false: null
      })
    },
    example: (props) => (
      <Alert
        variant={props.variant}
        title={props.title}
        isInline={true} // Always true for InlinePlainAlert
        isPlain={true} // Always true for InlinePlainAlert
      >
        {props.description}
      </Alert>
    )
  }
);
