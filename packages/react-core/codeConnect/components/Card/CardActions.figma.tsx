import figma from "@figma/code-connect"
import { Card } from "@patternfly/react-core"

/**
 * PatternFly Basic Card component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Card
 */

figma.connect(
  Card,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3144-17097&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      headerAction: figma.boolean("Header action"),
      selectable: figma.boolean("Selectable"),
      actionSwap: figma.instance("Action swap"),
      rightExpandableToggle: figma.boolean("Right Expandable Toggle"),
      cardType: figma.enum("Card Type", {
        Basic: "basic",
        "Selectable - Multiselect": "selectable---multiselect",
        "Right expandable": "right-expandable",
        "Selectable - Single select": "selectable---single-select",
        "Clickable + Selectable": "clickable---selectable",
      }),
    },
    example: (props) => <Card />,
  },
)
