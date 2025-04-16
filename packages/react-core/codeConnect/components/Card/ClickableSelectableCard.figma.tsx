import figma from "@figma/code-connect"
import { Card } from "@patternfly/react-core"

/**
 * PatternFly Basic Card component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Card
 */

figma.connect(
  ClickableSelectableCard,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3144-18715&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      expandableBody: figma.boolean("Expandable body"),
      trailingTitleIcon: figma.boolean("Trailing Title Icon"),
      bodyText: figma.string("✏️ Body text"),
      cardTitle: figma.string("✏️ Card title"),
      cardBody: figma.boolean("Card body"),
      cardDescription: figma.string("✏️ Card description"),
      cardDescription: figma.boolean("Card description"),
      cardFooter: figma.string("✏️ Card footer"),
      bodyComponentSlots: figma.boolean("Body Component Slots"),
      leadingTitleIcon: figma.boolean("Leading Title Icon"),
      headerImage: figma.boolean("Header image"),
      footerComponentSlots: figma.boolean("Footer Component Slots"),
      bodyText: figma.boolean("Body text"),
      cardFooter: figma.boolean("Card footer"),
      state: figma.enum("State", {
        Default: "default",
        Clicked: "clicked",
        "Clicked AND Selected": "clicked-and-selected",
        Disabled: "disabled",
        Selected: "selected",
        "Title Hover": "title-hover",
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
    example: (props) => <ClickableSelectableCard />,
  },
)
