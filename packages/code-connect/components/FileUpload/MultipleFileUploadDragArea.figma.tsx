import figma from '@figma/code-connect';
import { MultipleFileUpload } from '@patternfly/react-core';

/**
 * PatternFly Integration for Figma Code Connect
 * TODO: Add proper documentation
 */

figma.connect(
  MultipleFileUpload,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8949-96079',
  {
    props: {
      titleText: figma.string('Title text'),
      infoText: figma.string('Info text'),
      browseButtonText: figma.string('Button text'),
      isUploadButtonHidden: figma.boolean('Hide upload button')
    },
    example: (props) => (
      // Documentation for MultipleFileUpload can be found at https://www.patternfly.org/components/file-upload
      <MultipleFileUpload
        titleText={props.titleText}
        infoText={props.infoText}
        browseButtonText={props.browseButtonText}
        isUploadButtonHidden={props.isUploadButtonHidden}
      />
    )
  }
);
