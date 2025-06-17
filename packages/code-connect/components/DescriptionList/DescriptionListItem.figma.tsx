import figma from '@figma/code-connect';
import { DescriptionListGroup, DescriptionListDescription } from '@patternfly/react-core';

figma.connect(
  DescriptionListGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1121-3571&m=dev',
  {
    props: {
      // string
      content: figma.string('✏️ Content'),

      // enum
      isHorizontal: figma.enum('Type', {
        'Horizontal fluid': true,
        'Horizontal fixed': true
      }),

      children: figma.children('*')
    },

    example: (props) => (
      <DescriptionListGroup isHorizontal={props.isHorizontal}>
        {props.children}
        <DescriptionListDescription>{props.content}</DescriptionListDescription>
      </DescriptionListGroup>
    )
  }
);
