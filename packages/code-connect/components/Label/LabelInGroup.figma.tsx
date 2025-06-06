import figma from '@figma/code-connect';
import { Label, LabelGroup } from '@patternfly/react-core';

/**
 * PatternFly LabelGroup component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/label-group
 */

figma.connect(
  LabelGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-1075&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // string
      categoryName: figma.string('Label group name'),

      // boolean
      hasCollapsedLabels: figma.boolean('Has collapsed labels'),

      // enum
      type: figma.enum('Type', {
        Default: 'default',
        'Label management': 'label-management'
      }),

      children: figma.children('*')
    },
    // Documentation for LabelGroup can be found at https://www.patternfly.org/components/label-group
    example: (props) => (
      <LabelGroup categoryName={props.categoryName} isExpanded={!props.hasCollapsedLabels} numLabels={3}>
        <Label color="blue">Label 1</Label>
        <Label color="green">Label 2</Label>
        <Label color="purple">Label 3</Label>
        {props.children}
      </LabelGroup>
    )
  }
);
