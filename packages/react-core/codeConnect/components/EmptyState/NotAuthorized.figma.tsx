import { EmptyState } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  EmptyState,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=25224-6219&m=dev',
  {
    props: {
      description: figma.string('Description'),
      titleText: figma.string('Title text')
    },
    example: (props) => <EmptyState description={props.description} titleText={props.titleText} />
  }
);
