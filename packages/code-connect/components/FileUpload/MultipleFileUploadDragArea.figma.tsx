import figma from '@figma/code-connect';
import { MultipleFileUpload } from '@patternfly/react-core';

figma.connect(
  MultipleFileUploadDragArea,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8949-96079&m=dev',
  {
    props: {
      state: figma.enum('State', {
        Default: 'default',
        'Drag Over': 'drag-over'
      }),
      isHorizontal: figma.enum('Layout', {
        Horizontal: true
      }),

      children: figma.children('*')
    },
    example: (props) => <MultipleFileUpload children={props.children} isHorizontal={props.isHorizontal} />
  }
);
