import { CheckboxInput } from "./CheckboxInput"
import figma from '@figma/code-connect'


figma.connect(
  CheckboxInput,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-1280&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      state: figma.enum("State", {
        Unchecked: "unchecked",
        Hover: "hover",
        Checked: "checked",
        Mixed: "mixed",
        "Unchecked Disabled": "unchecked-disabled",
        "Checked Disabled": "checked-disabled",
        "Mixed disabled": "mixed-disabled",
      }),
    },
    example: (props) => <CheckboxInput />,
  },
)
