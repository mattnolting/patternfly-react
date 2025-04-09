// import figma from '@figma/code-connect';
// import { Alert, AlertGroup } from '@patternfly/react-core';

// /**
//  * PatternFly AlertGroup component integration for Figma Code Connect
//  *
//  * This file maps Figma properties to the PatternFly AlertGroup component,
//  * allowing designers to generate React code directly from Figma's Dev Mode.
//  * The AlertGroup component is used to group multiple inline alerts together.
//  *
//  * @see https://www.patternfly.org/components/alert/inline-alert-group
//  */

// figma.connect(
//   AlertGroup,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2780&m=dev',
//   {
//     props: {
//       alertCount: figma.enum('Number of Alerts', {
//         One: 'one',
//         Two: 'two',
//         Three: 'three'
//       }),
//       isLiveRegion: figma.boolean('Is Live Region', {
//         true: true,
//         false: false
//       }),
//       hasBorder: figma.boolean('Has Border', {
//         true: true,
//         false: false
//       }),
//       useCustomContent: figma.boolean('Use Custom Content', {
//         true: true,
//         false: false
//       })
//     },
//     example: (props) => {
//       // Determine number of alerts to show
//       const alertCount =
//         props.alertCount === 'one' ? 1 : props.alertCount === 'two' ? 2 : props.alertCount === 'three' ? 3 : 1;

//       // Create array of alerts
//       const alerts = [];
//       for (let i = 0; i < alertCount; i++) {
//         const variants = ['success', 'warning', 'danger'];
//         alerts.push(
//           <Alert key={i} variant={variants[i % variants.length]} title={`Alert ${i + 1} title`} isInline>
//             {props.useCustomContent
//               ? `This is a custom message for alert ${i + 1}`
//               : `Alert ${i + 1} description goes here`}
//           </Alert>
//         );
//       }

//       return (
//         <AlertGroup
//           isLiveRegion={props.isLiveRegion}
//           className={props.hasBorder ? 'pf-v5-u-p-md pf-v5-u-border-all' : undefined}
//         >
//           {alerts}
//         </AlertGroup>
//       );
//     }
//   }
// );
