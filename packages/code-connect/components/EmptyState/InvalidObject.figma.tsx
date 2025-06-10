import figma from '@figma/code-connect';
import { EmptyState, EmptyStateBody } from '@patternfly/react-core';

figma.connect(
  EmptyState,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=25224-6210&m=dev',
  {
    props: {
      title: figma.string('Title text'),
      body: figma.string('Description')
    },
    example: (props) => (
      // Documentation for EmptyState can be found at https://www.patternfly.org/components/empty-state
      <EmptyState>
        <EmptyStateHeader titleText={props.title} headingLevel="h4" />
        <EmptyStateBody>{props.body}</EmptyStateBody>
      </EmptyState>
    )
  }
);
