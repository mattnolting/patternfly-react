import figma from "@figma/code-connect"
import { Card } from "@patternfly/react-core"

/**
 * PatternFly Basic Card component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Card
 */

figma.connect(
  SingleSelectCard,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=27155-32360&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      footerComponentSlots: figma.boolean("Footer Component Slots"),
      expandableBody: figma.boolean("Expandable body"),
      trailingTitleIcon: figma.boolean("Trailing Title Icon"),
      cardDescription: figma.string("✏️ Card description"),
      cardFooter: figma.string("✏️ Card footer"),
      cardBody: figma.string("✏️ Card body"),
      cardBody: figma.boolean("Card body"),
      cardHeader: figma.boolean("Card header"),
      cardTitle: figma.string("✏️ Card title"),
      cardDescription: figma.boolean("Card description"),
      bodyComponentSlots: figma.boolean("Body Component Slots"),
      leadingTitleIcon: figma.boolean("Leading Title Icon"),
      bodyText: figma.boolean("Body text"),
      headerImage: figma.boolean("Header image"),
      cardFooter: figma.boolean("Card footer"),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
        Selected: "selected",
        Disabled: "disabled",
      }),
      style: figma.enum("Style", {
        Default: "default",
        Secondary: "secondary",
      }),
      size: figma.enum("Size", {
        Compact: "compact",
        Default: "default",
        Large: "large",
      }),
      isExpandable: figma.boolean("Is expandable"),
    },
    example: (props) => <SingleSelectCard />,
  },
)
