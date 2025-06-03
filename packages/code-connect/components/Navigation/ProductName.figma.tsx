import figma from '@figma/code-connect';
import { Title } from '@patternfly/react-core';

/**
 * PatternFly Title component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/title
 */

figma.connect(
  Title,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7229&m=dev',
  {
    props: {
      productName: figma.string('Product name')
    },
    example: (props) => <Title headingLevel="h1">{props.productName}</Title>
  }
);
