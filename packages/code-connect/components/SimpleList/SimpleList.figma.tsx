import figma from '@figma/code-connect';
import { SimpleList } from '@patternfly/react-core';

figma.connect(
  SimpleList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4410-20691&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      type: figma.enum('Type', {
        Default: 'default',
        Grouped: 'grouped'
      })
    },
    example: (props) => (
      // Documentation for SimpleList can be found at https://www.patternfly.org/components/list
      <SimpleList />
    )
  }
);
