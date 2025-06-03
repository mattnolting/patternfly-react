import figma from '@figma/code-connect';
import { Modal } from '@patternfly/react-core';

/**
 * PatternFly Modal integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/modal
 * @figma https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2940-18403
 */

figma.connect(
  Modal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2940-18403&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      }),
      children: figma.children('*')
    },
    example: (props) => (
      <Modal size={props.size}>
        {props.children}
      </Modal>
    )
  }
);
