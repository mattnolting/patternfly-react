import figma from '@figma/code-connect';
import { TreeViewListItem } from '@patternfly/react-core';

/**
 * PatternFly TreeViewNode integration for Figma Code Connect
 */

figma.connect(
  TreeViewListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-3260&t=6EqrZWbMFiIqrDYy-11',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for TreeViewListItem can be found at https://www.patternfly.org/components/tree-view
      <TreeViewListItem>{props.children}</TreeViewListItem>
    )
  }
);
