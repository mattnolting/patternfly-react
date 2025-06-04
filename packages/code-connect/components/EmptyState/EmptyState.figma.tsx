import figma from '@figma/code-connect';
import { EmptyState, EmptyStateIcon, EmptyStateHeader, EmptyStateBody } from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';

/**
 * PatternFly EmptyState component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/empty-state
 */

figma.connect(
  EmptyState,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2698&m=dev',
  {
    props: {
      title: figma.string('✏️ Title'),
      body: figma.string('✏️ Body'),
      icon: figma.children('*')
    },
    example: (props) => (
      // Documentation for EmptyState can be found at https://www.patternfly.org/components/empty-state
      <EmptyState>
        <EmptyStateIcon icon={CubesIcon} />
        <EmptyStateHeader titleText={props.title} headingLevel="h4" />
        <EmptyStateBody>{props.body}</EmptyStateBody>
      </EmptyState>
    )
  }
);
