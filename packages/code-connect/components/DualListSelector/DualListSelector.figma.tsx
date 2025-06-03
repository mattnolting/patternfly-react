import { DualListSelector } from "./DualListSelector"
import figma from '@figma/code-connect'

/**
 * PatternFly DualListSelectorListItem integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/dual-list-selector
 */
figma.connect(
  DualListSelector,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=29667-231683&t=IzSunfrnw18ti37Y-11",
  {
    props: {},
    example: (props) => <DualListSelector />,
  },
)
