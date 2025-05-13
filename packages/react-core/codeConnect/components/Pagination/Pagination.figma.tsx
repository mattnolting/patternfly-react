import figma from '@figma/code-connect';
import { Pagination } from '@patternfly/react-core';

/**
 * PatternFly Pagination integration for Figma Code Connect
 */

figma.connect(
  Pagination,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5047-695&m=dev',
  {
    props: {
      showMenu: figma.boolean('Show menu'),
      isCompact: figma.enum('Type', {
        Compact: 'compact'
      }),
      menu: figma.enum('Menu', {
        Open: 'up',
        Closed: 'down'
      })
    },
    example: (props) => (
      <Pagination
        itemCount={99}
        perPage={20}
        page={10}
        isCompact={props.isCompact}
        toggleTemplate={props.showMenu}
        isDisabled={false}
        dropDirection={props.menu}
      />
    )
  }
);
