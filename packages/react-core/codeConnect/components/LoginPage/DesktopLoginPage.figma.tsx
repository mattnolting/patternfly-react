import figma from '@figma/code-connect';
import { LoginPage } from '@patternfly/react-core';

figma.connect(
  LoginPage,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-4180&m=dev',
  {
    props: {
      content: figma.textContent('About content'),
      children: figma.children('*')
    },
    example: (props) => (
      <LoginPage>
        {props.children}
        {props.content}
      </LoginPage>
    )
  }
);
