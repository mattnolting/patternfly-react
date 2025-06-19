import figma from '@figma/code-connect';
import { Masthead, MastheadBrand, MastheadContent, MastheadMain } from '@patternfly/react-core';

// TODO: FIGMA: Create masthead main section MastheadMain MastheadContent
// TODO: FIGMA: Create masthead main section MastheadMain MastheadContent
// Documentation for Masthead can be found at https://www.patternfly.org/components/masthead

figma.connect(
  Masthead,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-6642',
  {
    props: {
      mastheadToggle: figma.children('Masthead menu item toggles'),
      mastheadBrand: figma.children('Masthead logo'),
      // mastheadContent: figma.children('Masthead content'),
      mastheadContent: 'Content'
    },
    example: (props) => (
      <Masthead id="<masthead-id>">
        <MastheadMain>
          {props.mastheadToggle}
          <MastheadBrand>{props.mastheadBrand}</MastheadBrand>
        </MastheadMain>
        <MastheadContent>{props.mastheadContent}</MastheadContent>
      </Masthead>
    )
  }
);
