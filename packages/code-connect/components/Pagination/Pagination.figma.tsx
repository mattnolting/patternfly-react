import figma from '@figma/code-connect';
import { Pagination } from '@patternfly/react-core';

figma.connect(
  Pagination,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5047-695',
  {
    props: {
      showMenu: figma.boolean('Show menu'),
      isCompact: figma.enum('Type', {
        Compact: true
      }),
      menu: figma.enum('Menu', {
        Open: 'up',
        Closed: 'down'
      })
    },
    example: (props) => (
      // Documentation for Pagination can be found at https://www.patternfly.org/components/pagination
      <Pagination
        itemCount={99}
        perPage={20}
        page={10}
        isCompact={props.isCompact}
        isDisabled={false}
        dropDirection={props.menu}
      />
    )
  }
);
