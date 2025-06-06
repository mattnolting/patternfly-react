import figma from '@figma/code-connect';
import { FileProgressItems } from '@patternfly/react-core';

figma.connect(
  FileProgressItems,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8949-96108&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      state: figma.enum('State', {
        Uploading: 'uploading',
        Success: 'success',
        Error: 'error'
      })
    },
    example: (props) => (
      // Documentation for FileProgressItems can be found at https://www.patternfly.org/components/file-upload
      <FileProgressItems />
    )
  }
);
