import figma from '@figma/code-connect';
import { WizardHeader } from '@patternfly/react-core';

// Documentation for WizardHeader can be found at https://www.patternfly.org/components/wizard

figma.connect(
  WizardHeader,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-17329',
  {
    props: {
      title: figma.string('✏️Wizard Title'),
      description: figma.string('✏️ Description')
    },
    example: (props) => (
      <WizardHeader
        description={props.description}
        descriptionId="<wizard-description-id>"
        closeButtonAriaLabel="Close wizard"
        onClose={() => {}}
        title={props.title}
        titleId="<wizard-title-id>"
      />
    )
  }
);
