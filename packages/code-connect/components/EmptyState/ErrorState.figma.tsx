import figma from '@figma/code-connect';

figma.connect(
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=25224-6205&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for EmptyState can be found at https://www.patternfly.org/components/empty-state
      <>{props.children}</>
    )
  }
);
