// import figma from '@figma/code-connect';
// import { TextInput, TextInputGroup, Form, FormGroup, FormHelperText } from '@patternfly/react-core';

// figma.connect(
//   TextInput,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-788&m=dev',
//   {
//     props: {
//       TextInput: figma.instance('Input field'),
//       showHelperText: figma.boolean('Show Helper Text'),
//       type: figma.enum('Type', {
//         Default: 'default',
//         Success: 'success',
//         Warning: 'warning',
//         Error: 'error'
//       }),
//       layout: figma.enum('Layout', {
//         'Default (Vertical)': 'default--vertical-',
//         Horizontal: 'horizontal'
//       })
//     },
//     example: (props) =>
//       <TextInputGroup isDisabled,
//     isPlain,
//     validated,
//     innerRef
//         <TextInput type={props.type} text={props.TextInput} />
//       </TextInputGroup>
//   }
// );

// // Form component
// figma.connect(
//   Form,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3-124&m=dev',
//   {
//     props: {
//       isHorizontal: figma.boolean('Is Horizontal', false),
//       children: figma.children('*')
//     },
//     example: ({ isHorizontal, children }) => <Form isHorizontal={isHorizontal}>{children}</Form>
//   }
// );

// // FormGroup component
// figma.connect(
//   FormGroup,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3-126&m=dev',
//   {
//     props: {
//       label: figma.string('Label', 'Form group label'),
//       isRequired: figma.boolean('Is Required', false),
//       validated: figma.select('Validated', ['default', 'success', 'warning', 'error'], 'default'),
//       children: figma.children('*')
//     },
//     example: ({ label, isRequired, validated, children }) => (
//       <FormGroup label={label} isRequired={isRequired} validated={validated}>
//         {children}
//       </FormGroup>
//     )
//   }
// );

// // FormHelperText component
// figma.connect(
//   FormHelperText,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3-128&m=dev',
//   {
//     props: {
//       children: figma.string('Helper Text', 'This is helper text'),
//       isError: figma.boolean('Is Error', false)
//     },
//     example: ({ children, isError }) => (
//       // Documentation for FormHelperText can be found at https://www.patternfly.org/components/form-helper-text
//       <FormHelperText isError={isError}>{children}</FormHelperText>
//     )
//   }
// );
