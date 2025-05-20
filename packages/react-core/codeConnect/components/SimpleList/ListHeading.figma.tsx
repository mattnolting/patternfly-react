import figma from '@figma/code-connect';
import { ListHeading } from '@patternfly/react-core';

figma.connect(
  ListHeading,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4410-20689&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      text: figma.string('Text')
    },
    example: (props) => <ListHeading />
  }
);
