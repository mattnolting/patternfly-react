import figma from '@figma/code-connect';
import { ErrorState, EmptyState } from '@patternfly/react-core';

/**
 * PatternFly ErrorState component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/error-state
 */

figma.connect(
  ErrorState,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=25224-6205&m=dev',
  {
    props: {
      // Enum
      variant: figma.enum('Type', {
        Default: 'default',
        Custom: 'custom'
      }),

      // Nested Props
      emptyStateProps: figma.nestedProps('Empty state', {
        size: figma.enum('Size', {
          Basic: 'basic'
        }),
        type: figma.enum('Type', {
          Error: 'error'
        }),
        bodyText: figma.string('Body text', 'This is tester text so this is basically saying nothing important.'),
        headerText: figma.string('Header text', 'This is an Error state')
      })
    },
    example: (props) => (
      <ErrorState variant={props.type}>
        <EmptyState
          variant={props.emptyStateProps.type}
          size={props.emptyStateProps.size}
          title={props.emptyStateProps.headerText}
          description={props.emptyStateProps.bodyText}
        />
      </ErrorState>
    )
  }
);
