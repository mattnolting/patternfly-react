import figma from '@figma/code-connect'
import { Card } from "@patternfly/react-core"

/**
 * PatternFly Basic Card component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Card
 */

figma.connect(
  CardTileBaseComponent,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-19749&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      titleText: figma.string("Title text"),
      subtitle: figma.string("Subtitle"),
      showSubtitle: figma.boolean("Show subtitle"),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
        Clicked: "clicked",
        Disabled: "disabled",
      }),
    },
    example: (props) => <CardTileBaseComponent />,
  },
)
