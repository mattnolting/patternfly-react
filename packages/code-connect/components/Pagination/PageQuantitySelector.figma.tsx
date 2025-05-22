import figma from '@figma/code-connect';
import { Pagination } from '@patternfly/react-core';

/**
 * PatternFly Page Quantity Selector integration for Figma Code Connect
 */

figma.connect(
  Pagination,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4917-4769&m=dev',
  {
    props: {
      totalQuantity: figma.string('Total quantity', '523'),
      pageQuantity: figma.string('Page quantity', '1 - 20'),
      state: figma.enum('State', {
        Default: 'default',
        Disabled: 'disabled',
        Hover: 'hover',
        Expanded: 'expanded'
      })
    },
    example: (props) => (
      <Pagination
        itemCount={props.totalQuantity}
        perPage={20}
        page={1}
        titles={{
          items: props.pageQuantity,
          page: ''
        }}
        aria-label="Page quantity selector"
        isCompact
      />
    )
  }
);
