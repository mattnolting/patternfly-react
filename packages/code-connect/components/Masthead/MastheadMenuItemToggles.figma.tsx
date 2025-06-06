import figma from '@figma/code-connect';
import { MastheadMenuItemToggles } from '@patternfly/react-core';

/**
 * PatternFly MastheadMenuItemToggles component integration for Figma Code Connect
 */

figma.connect(
  MastheadMenuItemToggles,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-6713&m=dev',
  {
    props: {
      isDisabled: figma.boolean('Is disabled'),
      isSelected: figma.boolean('Is selected')
    },
    example: (props) => (
      // Documentation for MastheadMenuItemToggles can be found at https://www.patternfly.org/components/masthead
      <MastheadMenuItemToggles isDisabled={props.isDisabled} isSelected={props.isSelected} />
    )
  }
);
