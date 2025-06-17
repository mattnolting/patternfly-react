import figma from '@figma/code-connect';
import { FormFieldGroup, FormFieldGroupExpandable, FormFieldGroupHeader } from '@patternfly/react-core';

// TODO: FIGMA: Separate textTitleText and titleDescription into separate props
// TODO: FIGMA: Separate form field group expandable and non-expandable
// TODO: FIGMA: Separate action buttons

figma.connect(
  FormFieldGroupExpandable,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=17114-21473&m=dev',
  {
    props: {
      titleText: {
        // text: figma.string('Title'),
        text: 'Title',
        id: 'field-group-title-id'
      },
      // titleDescription: figma.string('Description'),
      titleDescription: 'Description',
      isExpanded: figma.enum('Type', { 'expandable - open': true }),
      actions: figma.textContent('Action buttons')
    },
    example: (props) => (
      // Documentation for FormGroup can be found at https://www.patternfly.org/components/form-group
      <FormFieldGroupHeader
        titleText={props.titleText}
        titleDescription={props.titleDescription}
        actions={props.actions}
      />
    )
  }
);
