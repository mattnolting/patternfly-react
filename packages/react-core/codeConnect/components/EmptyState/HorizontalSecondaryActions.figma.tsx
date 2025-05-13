import React from "react";
import { EmptyStateActions, Button } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  EmptyStateActions,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2181-3490&m=dev",
  {
    props: {
      showInlineLink: figma.boolean("Show Inline link", {
        true: true,
        false: false
      }),
      showInlineLink2: figma.boolean("Show Inline link 2", {
        true: true,
        false: false
      }),
      showInlineLink3: figma.boolean("Show Inline link 3", {
        true: true,
        false: false
      }),
      showInlineLink4: figma.boolean("Show Inline link 4", {
        true: true,
        false: false
      }),
      showInlineLink5: figma.boolean("Show Inline link 5", {
        true: true,
        false: false
      }),
      showInlineLink6: figma.boolean("Show Inline link 6", {
        true: true,
        false: false
      })
    },
    example: (props) => (
      <EmptyStateActions>
        {props.showInlineLink && <Button variant="primary">Primary Action</Button>}
        {props.showInlineLink2 && <Button variant="secondary">Secondary Action</Button>}
        {props.showInlineLink3 && <Button variant="link">Link Action 1</Button>}
        {props.showInlineLink4 && <Button variant="link">Link Action 2</Button>}
        {props.showInlineLink5 && <Button variant="link">Link Action 3</Button>}
        {props.showInlineLink6 && <Button variant="link">Link Action 4</Button>}
      </EmptyStateActions>
    ),
  },
);