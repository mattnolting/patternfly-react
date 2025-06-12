import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-17334', {
  props: {
    stepItem: figma.children('*')
  },
  example: (props) => <>{props.stepItem}</>
});
