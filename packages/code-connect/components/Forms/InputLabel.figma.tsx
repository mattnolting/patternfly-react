import figma from '@figma/code-connect';
import { FormGroup, FormGroupLabelHelp, Popover } from '@patternfly/react-core';

figma.connect('https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=151-1566', {
  props: {
    isRequired: figma.boolean('Required'),
    labelText: figma.string('✏️ Label text'),
    labelHelp: figma.boolean('Help Icon', {
      true: (
        <Popover
          triggerRef={}
          headerContent={
            <div>
              The{' '}
              <a href="https://schema.org/name" target="_blank" rel="noreferrer">
                name
              </a>{' '}
              of a{' '}
              <a href="https://schema.org/Person" target="_blank" rel="noreferrer">
                Person
              </a>
            </div>
          }
          bodyContent={
            <div>
              Often composed of{' '}
              <a href="https://schema.org/givenName" target="_blank" rel="noreferrer">
                givenName
              </a>{' '}
              and{' '}
              <a href="https://schema.org/familyName" target="_blank" rel="noreferrer">
                familyName
              </a>
              .
            </div>
          }
        >
          <FormGroupLabelHelp ref="{labelHelpRef}" aria-label="More info for name field" />
        </Popover>
      ),
      false: undefined
    }),

    children: figma.children('*')
  },
  example: (props) => (
    <>
      label={props.labelText} lableHelp={props.labelHelp} required={props.isRequired}
    </>
  )
});
