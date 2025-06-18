import figma from '@figma/code-connect';
import { WizardFooterWrapper } from '@patternfly/react-core';

// Documentation for WizardFooterWrapper can be found at https://www.patternfly.org/components/wizard
// Note: this is a custom footer. Omit this component if using default footer.

figma.connect(
  WizardFooterWrapper,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-17431',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <WizardFooterWrapper>{props.children}</WizardFooterWrapper>
  }
);
