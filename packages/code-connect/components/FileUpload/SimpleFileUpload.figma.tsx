import figma from '@figma/code-connect';
import { FileUpload } from '@patternfly/react-core';

figma.connect(
  SimpleFileUpload,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8949-96043&m=dev',
  {
    props: {
      showHelperText: figma.boolean('Show helper text'),
      showTextPreviewBox: figma.boolean('Show text preview box'),
      // state: figma.enum('State', {
      //   Default: 'default',
      //   'Invalid upload': 'invalid-upload',
      //   'Drag state': 'drag-state',
      //   'In progress upload': 'in-progress-upload',
      //   'Uploaded + Not editable': 'uploaded---not-editable',
      //   'Uploaded + Editable': 'uploaded---editable'
      // })
    },
    example: (props) => <FileUpload children={props.children} />
  }
);
