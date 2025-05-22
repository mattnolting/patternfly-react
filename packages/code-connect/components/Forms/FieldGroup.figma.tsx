import figma from '@figma/code-connect'
import { FieldGroup } from '@patternfly/react-core';

figma.connect(
  FieldGroup,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=17114-21566&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      nestedNonExpandable: figma.boolean("nested - non expandable"),
      nestedClosed: figma.boolean("nested - closed"),
      nestedOpen: figma.boolean("nested - open"),
      type: figma.enum("Type", {
        "expandable - open": "expandable---open",
        "expandable - closed": "expandable---closed",
        "non - expandable": "non---expandable",
      }),
    },
    example: (props) => <FieldGroup />,
  },
)
