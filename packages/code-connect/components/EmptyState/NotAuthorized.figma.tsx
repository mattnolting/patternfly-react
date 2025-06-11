import figma from '@figma/code-connect';
import { EmptyState, EmptyStateBody } from '@patternfly/react-core';

figma.connect(
  EmptyState,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=25224-6219',
  {
    props: {
      // string
      headerText: figma.string('Title text'),
      bodyText: figma.string('Description'),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for EmptyState can be found at https://www.patternfly.org/components/empty-state
      <EmptyState>
        <EmptyStateHeader titleText={props.headerText} headingLevel="h4" />
        <EmptyStateBody>{props.bodyText}</EmptyStateBody>
      </EmptyState>
    )
  }
);
