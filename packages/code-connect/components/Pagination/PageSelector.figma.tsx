import figma from '@figma/code-connect';
import { Pagination } from '@patternfly/react-core';

figma.connect(
  Pagination,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4917-3142&m=dev',
  {
    props: {
      total: figma.string('Total #')
    },
    example: (props) => (
      // Documentation for Pagination can be found at https://www.patternfly.org/components/pagination
      <Pagination page={10} perPage={10} itemCount={27} variant={props.type} isDisabled={props.state === 'Disabled'} />
    )
  }
);
