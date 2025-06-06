import figma from '@figma/code-connect';
import { MultipleFileUpload } from '@patternfly/react-core';

figma.connect(
  MultipleFileUpload,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8949-96128&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      isHorizontal: figma.enum('Layout', {
        Horizontal: true
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for MultipleFileUpload can be found at https://www.patternfly.org/components/file-upload
      <MultipleFileUpload isHorizontal={props.isHorizontal} children={props.children} />
    )
  }
);
