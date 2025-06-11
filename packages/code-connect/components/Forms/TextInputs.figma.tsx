// import figma from '@figma/code-connect';
// import { TextInput } from '@patternfly/react-core';

// /**
//  * PatternFly TextInput integration for Figma Code Connect
//  */

// figma.connect(
//   TextInput,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=154-71',
//   {
//     props: {
//       Type: figma.enum('Type', {
//         'Text box': 'text-box'
//       }),
//       State: figma.enum('State', {
//         Default: 'default',
//         Hover: 'hover',
//         Active: 'active',
//         Complete: 'complete',
//         Success: 'success',
//         Warning: 'warning',
//         Error: 'error',
//         Disabled: 'disabled',
//         'Read Only': 'read-only',
//         'ReadOnly - Plain': 'readonly---plain'
//       }),
//       'Input text': figma.string('Input text')
//     }) => {
//       // Map Figma state to PatternFly props
//       const isDisabled = props.State === 'Disabled';
//       const readOnly = props.State === 'Read Only' || props.State === 'ReadOnly - Plain';

//       // Map validation states
//       let validated;
//       if (props.State === 'Success') {
//         validated = 'success';
//       } else if (props.State === 'Warning') {
//         validated = 'warning';
//       } else if (props.State === 'Error') {
//         validated = 'error';
//       }

//       // Create the component with exactly the props we need
//       return (
//         // Documentation for TextInput can be found at https://www.patternfly.org/components/text-input
//         <TextInput
//           value={props['Input text']}
//           type="text"
//           isDisabled={isDisabled}
//           readOnly={readOnly}
//           validated={validated}
//           aria-label="Text input"
//         />
//       );
//     }
//   }
// );
