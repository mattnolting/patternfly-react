import figma from '@figma/code-connect';
import { Pagination } from '@patternfly/react-core';

/**
 * PatternFly Page Quantity Selector integration for Figma Code Connect
 */

figma.connect(
  Pagination,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4917-4769',
  {
    props: {
      totalQuantity: figma.string('Total quantity')
    },
    example: (props) => (
      // Documentation for Pagination can be found at https://www.patternfly.org/components/pagination
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
