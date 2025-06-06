import figma from '@figma/code-connect';
import { DescriptionListTerm } from '@patternfly/react-core';

figma.connect(
  DescriptionListTerm,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1121-3453&m=dev',
  {
    props: {
      icon: figma.boolean('Icon ⎆'),
      children: figma.string('✏️ Label')
    },
    example: (props) => (
      // Documentation for DescriptionListTerm can be found at https://www.patternfly.org/components/description-list
      <DescriptionListTerm icon={props.icon}>{props.children}</DescriptionListTerm>
    )
  }
);
