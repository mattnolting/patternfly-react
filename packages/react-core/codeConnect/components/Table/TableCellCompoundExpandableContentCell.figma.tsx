import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';

/**
 * PatternFly Td with compound expand functionality integration for Figma Code Connect
 */

figma.connect(
  Td,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2912-36168&m=dev",
  {
    props: {
      type: figma.enum("Type", {
        "Icon + Text": "icon-text",
        Link: "link",
        Text: "text",
        "Inline edit": "inline-edit",
        "Icon only": "icon-only",
        Label: "label",
        Skeleton: "skeleton"
      }),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
        Selected: "selected"
      }),
      labelType: figma.instance("Label type"),
      // Pre-configured compoundExpand property
      compoundExpand: figma.enum("State", {
        Default: {
          isExpanded: false,
          onToggle: () => {}
        },
        Selected: {
          isExpanded: true,
          onToggle: () => {}
        }
      })
    },
    example: (props) => <Td
      dataLabel="Compound expandable cell"
      compoundExpand={props.compoundExpand}
      type={props.type}
    >
      Content
    </Td>
  }
);
