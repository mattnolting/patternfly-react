import figma from '@figma/code-connect';
import { LabelGroup } from '@patternfly/react-core';

/**
 * PatternFly LabelGroup integration for Figma Code Connect
 */

figma.connect(
  LabelGroup,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-1075&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      categoryName: figma.string("Label group name", "Group"),
      hasCollapsedLabels: figma.boolean("Has collapsed labels"),
      type: figma.enum("Type", {
        "Default": "default",
        "Label management": "label-management",
      }),
    },
    example: (props) => (
      <LabelGroup
        categoryName={props.categoryName}
        type={props.type}
        numLabels={3}
        isExpanded={!props.hasCollapsedLabels}
      >
        <Label color="blue">Label 1</Label>
        <Label color="green">Label 2</Label>
        <Label color="purple">Label 3</Label>
      </LabelGroup>
    )
  }
);
