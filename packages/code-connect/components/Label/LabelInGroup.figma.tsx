import figma from '@figma/code-connect';
import { LabelGroup } from '@patternfly/react-core';

// TODO: FIGMA: Reconfigure how numlabels is set. Currently, the text string "more" is not customizable
// NOTE: "Label overflow" doesn't appear to be necessary
// Documentation for LabelGroup can be found at https://www.patternfly.org/components/label-group

figma.connect(
  LabelGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-1075',
  {
    props: {
      // string
      categoryName: figma.string('Label group name'),

      // boolean
      isCollapsed: figma.boolean('Has collapsed labels'),
      numLabels: figma.boolean('Has collapsed labels', {
        true: 6,
        false: undefined
      }),

      children: figma.children('Label')
    },
    example: (props) => (
      <LabelGroup categoryName="Group label" isClosable numLabels={props.numLabels} onClick={() => {}}>
        {props.children}
      </LabelGroup>
    )
  }
);
