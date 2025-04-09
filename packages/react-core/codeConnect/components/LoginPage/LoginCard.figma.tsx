import figma from '@figma/code-connect';
import { LoginCard } from '@patternfly/react-core';

/**
 * PatternFly LoginCard integration for Figma Code Connect
 */

figma.connect(
  LoginCard,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-4130&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      languageSelector: figma.boolean("Language selector"),
      instance: figma.instance("Instance"),
      invalid: figma.boolean("Invalid"),
    },
    example: (props) => (
      <LoginCard
        showLanguageSelector={props.languageSelector}
        isValidUsername={!props.invalid}
        formAction="/login"
        loginTitle="Log in to your account"
        usernameLabel="Username"
        passwordLabel="Password"
        rememberMeLabel="Keep me logged in"
        loginButtonLabel="Log in"
      />
    )
  }
);
