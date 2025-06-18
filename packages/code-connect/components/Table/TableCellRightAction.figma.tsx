import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';

// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(
  Td,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2912-36519',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      <Td isActionCell={true} className="pf-v5-u-text-align-right">
        {props.children}
      </Td>
    )
  }
);
