import figma from '@figma/code-connect'
import { FormFieldGroupHeader } from '@patternfly/react-core';

figma.connect(
  FormFieldGroupHeader,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=17114-21473&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      showAction: figma.boolean("Show action"),
      showDescription: figma.boolean("Show description"),
      type: figma.enum("Type", {
        "expandable - open": "expandable---open",
        "non - expandable": "non---expandable",
        "expandable - closed": "expandable---closed",
      }),
      isFirstItem: figma.boolean("is first item"),

      children: figma.children('*')
    },
    example: (props) => <FormFieldGroupHeader>{props.children}</FormFieldGroupHeader>
  },
)
