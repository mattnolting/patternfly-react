import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=176-2806', {
  props: {
    children: figma.children('*')
  },
  example: (props) => (
    // Documentation for InputGroup can be found at https://www.patternfly.org/components/input-group
    <>{props.children}</>
  )
});
