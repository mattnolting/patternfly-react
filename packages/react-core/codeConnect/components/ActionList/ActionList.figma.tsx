import figma from '@figma/code-connect';
import { ActionList } from '@patternfly/react-core';

/**
 * PatternFly ActionList integration for Figma Code Connect
 */

figma.connect(
  ActionList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6780-15839&m=dev',
  {
    props: {
      content: figma.enum('Type', {
        'Single group': '<Button variant="primary">Primary</Button><Button variant="secondary">Secondary</Button>',
        'Single w Kebab': '<Button variant="primary">Primary</Button><Button variant="secondary">Secondary</Button><Dropdown toggle={<KebabToggle />} />',
        'Action icons only': '<Button variant="plain" aria-label="Close"><TimesIcon /></Button><Button variant="plain" aria-label="Accept"><CheckIcon /></Button>',
        'Wizard (Default)': '<Button variant="primary">Next</Button><Button variant="secondary">Back</Button><Button variant="link">Cancel</Button>',
        'Modal form list': '<Button>Submit form</Button><Button variant="link">Cancel</Button>',
        'Multiple groups': '<ActionList.Group><Button variant="primary">Save</Button><Button variant="secondary">Cancel</Button></ActionList.Group><ActionList.Group><Button variant="link">Delete</Button></ActionList.Group>'
      })
    },
    example: (props) => (
      <ActionList>
        {props.content}
      </ActionList>
    )
  }
);