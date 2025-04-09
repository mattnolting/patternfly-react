import { Alert } from '@patternfly/react-core';
import figma from '@figma/code-connect';

/**
 * PatternFly Alert (Toast variant) component integration for Figma Code Connect
 *
 * This file maps Figma properties to the PatternFly Alert component,
 * allowing designers to generate React code directly from Figma's Dev Mode.
 *
 * @see https://www.patternfly.org/components/alert
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2587&m=dev',
  {
    props: {
      type: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'
      }),
      title: figma.string('✏️ Title'),
      description: figma.boolean('Description', {
        true: true,
        false: false
      }),
      descriptionText: figma.string('Description', 'Description'),
      expandable: figma.boolean('Expandable', {
        true: true,
        false: false
      }),
      actions: figma.boolean('Actions', {
        true: true,
        false: false
      })
    },
    example: (props) => (
      <Alert
        variant={props.type}
        title={props.title}
        isExpandable={props.expandable}
        actionLinks={
          props.actions ? (
            <>
              <a href="#">Action</a> <a href="#">Action</a>
            </>
          ) : undefined
        }
      >
        {props.description ? props.descriptionText : null}
      </Alert>
    )
  }
);
