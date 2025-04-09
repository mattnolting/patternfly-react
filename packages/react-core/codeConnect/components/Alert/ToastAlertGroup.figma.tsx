// import figma from '@figma/code-connect';
// import { AlertGroup } from '@patternfly/react-core';

// /**
//  * PatternFly Toast Alert Group component integration for Figma Code Connect
//  *
//  * This file maps Figma properties to the PatternFly AlertGroup component with toast styling,
//  * allowing designers to generate React code directly from Figma's Dev Mode.
//  * Toast alerts appear at the top of the screen and are typically used for system notifications.
//  *
//  * @see https://www.patternfly.org/components/alert/toast-alert-group
//  */

// figma.connect(
//   AlertGroup,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2821&m=dev',
//   {
//     props: {
//       alertCount: figma.enum('Number of Alerts', {
//         One: 1,
//         Two: 2,
//         Three: 3
//       }),
//       overflowMessage: figma.boolean('Show Overflow', {
//         true: true,
//         false: false
//       })
//     },
//     example: (props) => {
//       // Set up component props
//       const toastProps = {
//         isToast: true // Identifies this as a toast alert group
//       };

//       // We'll just render a placeholder since actual alerts would be added as children
//       return (
//         <AlertGroup {...toastProps}>
//           {/* Toast alerts would be added as children */}
//           <div className="pf-v5-c-alert pf-m-info pf-m-toast">
//             <div className="pf-v5-c-alert__icon">
//               <i className="fas fa-info-circle" aria-hidden="true"></i>
//             </div>
//             <h4 className="pf-v5-c-alert__title">Toast alert example</h4>
//             <div className="pf-v5-c-alert__action">
//               <button className="pf-v5-c-button pf-m-plain" type="button" aria-label="Close alert">
//                 <i className="fas fa-times" aria-hidden="true"></i>
//               </button>
//             </div>
//           </div>

//           {props.overflowMessage && (
//             <div className="pf-v5-c-alert-group__overflow-message">
//               <button className="pf-v5-c-button pf-m-link pf-m-inline" type="button">
//                 {props.alertCount > 1 ? `${props.alertCount - 1} more alerts` : '1 more alert'}
//               </button>
//             </div>
//           )}
//         </AlertGroup>
//       );
//     }
//   }
// );
