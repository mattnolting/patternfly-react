import figma from '@figma/code-connect';
import { EmptyState, EmptyStateIcon, EmptyStateHeader, EmptyStateBody } from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

/**
 * PatternFly EmptyState component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/empty-state
 */

figma.connect(
  EmptyState,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7896-37441&m=dev',
  {
    props: {
      // String
      bodyText: figma.string(
        'Body text',
        'No results match the filter criteria. Remove all filters or clear all filters to show results.'
      ),
      headerText: figma.string('Header text', 'No results found'),

      // Boolean
      showIcon: figma.boolean('Show Icon', {
        true: <EmptyStateIcon icon={CubesIcon} />,
        false: undefined
      }),

      // Enum
      size: figma.enum('Size', {
        Basic: 'basic',
        Small: 'small',
        Large: 'large',
        'Extra Large': 'extra-large',
        'Extra small': 'extra-small'
      }),
      variant: figma.enum('Type', {
        Default: 'default',
        Create: 'create',
        'No results': 'no-results',
        Success: 'success',
        Error: 'error',
        Permissions: 'permissions',
        Loading: 'loading'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <EmptyState size={props.size} variant={props.variant}>
        {props.showIcon}
        <EmptyStateHeader>{props.headerText}</EmptyStateHeader>
        <EmptyStateBody>{props.bodyText}</EmptyStateBody>
        {props.children}
      </EmptyState>
    )
  }
);
