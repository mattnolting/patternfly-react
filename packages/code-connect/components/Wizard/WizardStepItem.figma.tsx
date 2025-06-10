import figma from '@figma/code-connect';
import { WizardStep } from '@patternfly/react-core';

figma.connect(
  WizardStep,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-17356&m=dev',
  {
    props: {
      // string
      name: figma.string('✏️ Nav item'),

      // boolean
      expandable: figma.boolean('Expandable'),

      // enum
      isDisabled: figma.enum('State', { Disabled: true }),

      // children
      steps: figma.children('Wizard step item'),
      children: figma.children('*')
    },
    // id, name, isDisabled
    // body, isHidden, navItem, footer, status
    example: (props) => (
      // Documentation for WizardStep can be found at https://www.patternfly.org/components/wizard
      <WizardStep isDisabled={props.isDisabled} name={props.name} id="<your-id>" steps={[props.steps]}>
        {props.children}
      </WizardStep>
    )
  }
);
