import figma from '@figma/code-connect';
import { Masthead, MastheadBrand, MastheadContent, MastheadMain } from '@patternfly/react-core';

figma.connect(
  Masthead,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-6642&m=dev',
  {
    props: {
      // Map only properties available in Figma
      variant: figma.enum('Variant', {
        Default: 'default',
        Inset: 'inset'
      }),
      display: figma.enum('Display', {
        Expanded: 'expanded',
        Collapsed: 'collapsed'
      })
    },
    example: (props) => (
      <Masthead variant={props.variant} display={props.display}>
        <MastheadMain>
          <MastheadBrand href="#">Brand Logo</MastheadBrand>
        </MastheadMain>
        <MastheadContent>Content here</MastheadContent>
      </Masthead>
    )
  }
);
