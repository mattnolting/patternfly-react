import figma from '@figma/code-connect';
import { Modal, ModalVariant, Wizard } from '@patternfly/react-core';

figma.connect(
  Wizard,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-18627',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Wizard can be found at https://www.patternfly.org/components/wizard
      <Modal isOpen={true} aria-label="Wizard modal" onEscapePress={() => {}} variant={ModalVariant.medium}>
        <Wizard title="Basic wizard modal">{props.children}</Wizard>
      </Modal>
    )
  }
);
