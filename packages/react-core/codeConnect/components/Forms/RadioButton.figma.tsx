import { Radio } from '@patternfly/react-core';
import figma from '@figma/code-connect'

figma.connect(
  Radio,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-2778&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      state: figma.enum("State", {
        Unchecked: "unchecked",
        Checked: "checked",
        Disabled: "disabled",
        "Checked Disabled": "checked-disabled",
      }),

      children: figma.children('*')
    },
    example: (props) => <Radio>{props.children}</Radio>,
  },
)
