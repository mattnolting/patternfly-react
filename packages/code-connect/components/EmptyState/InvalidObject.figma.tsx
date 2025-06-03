import figma from '@figma/code-connect';
import { EmptyState } from '@patternfly/react-core';

/**
 * PatternFly EmptyState integration for Figma Code Connect
 */

figma.connect(
  EmptyState,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=25224-6210&m=dev',
  {
    props: {
      description: figma.string('Description', 'This object cannot be displayed due to errors.'),
      titleText: figma.string('Title text', 'Invalid Object')
    },
    example: (props) => <EmptyState description={props.description} titleText={props.titleText} />
  }
);
