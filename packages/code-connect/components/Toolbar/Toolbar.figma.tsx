// import figma from '@figma/code-connect';
// import { Button, MenuToggleElement, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';

// // Documentation for Toolbar can be found at https://www.patternfly.org/components/toolbar

// const filterGroup = (
//   <ToolbarGroup variant="filter-group">
//     <ToolbarItem>
//       <Select
//         toggle={((toggleRef: React.Ref<MenuToggleElement>)) => (
//           <MenuToggle
//             ref={toggleRef}
//             onClick={() => {}}
//             isExpanded={false}
//             style={
//               {
//                 width: '88px'
//               } as React.CSSProperties
//             }
//           >
//             Status
//           </MenuToggle>
//         )}
//         onSelect={() => {}}
//         onOpenChange={(isOpen) => {}}
//         selected={undefined}
//         isOpen={false}
//       >
//         <SelectList>
//           {firstOptions.map((option, index) => (
//             <SelectOption key={index} value={option}>
//               {option}
//             </SelectOption>
//           ))}
//         </SelectList>
//       </Select>
//     </ToolbarItem>
//     <ToolbarItem>
//       <Select
//         toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
//           <MenuToggle
//             ref={toggleRef}
//             onClick={() => onToggle('second')}
//             isExpanded={secondIsExpanded}
//             style={
//               {
//                 width: '120px'
//               } as React.CSSProperties
//             }
//           >
//             {secondSelected || 'Second'}
//           </MenuToggle>
//         )}
//         onSelect={onSecondSelect}
//         selected={secondSelected}
//         onOpenChange={(isOpen) => setSecondIsExpanded(isOpen)}
//         isOpen={secondIsExpanded}
//       >
//         <SelectList>
//           {secondOptions.map((option, index) => (
//             <SelectOption key={index} value={option}>
//               {option}
//             </SelectOption>
//           ))}
//         </SelectList>
//       </Select>
//     </ToolbarItem>
//     <ToolbarItem>
//       <Select
//         toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
//           <MenuToggle
//             ref={toggleRef}
//             onClick={() => onToggle('third')}
//             isExpanded={thirdIsExpanded}
//             style={
//               {
//                 width: '96px'
//               } as React.CSSProperties
//             }
//           >
//             {thirdSelected || 'Third'}
//           </MenuToggle>
//         )}
//         onSelect={onThirdSelect}
//         selected={thirdSelected}
//         onOpenChange={(isOpen) => setThirdIsExpanded(isOpen)}
//         isOpen={thirdIsExpanded}
//       >
//         <SelectList>
//           {thirdOptions.map((option, index) => (
//             <SelectOption key={index} value={option}>
//               {option}
//             </SelectOption>
//           ))}
//         </SelectList>
//       </Select>
//     </ToolbarItem>
//   </ToolbarGroup>
// );

// const bulkSelector = (
//   <ToolbarItem>
//     <Button>test</Button>
//   </ToolbarItem>
// );

// figma.connect(
//   Toolbar,
//   'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8062-17157',
//   {
//     props: {
//       // boolean
//       bulkSelector: figma.boolean('Bulk Selector', {
//         true: bulkSelector,
//         false: undefined
//       }),
//       buttonGroup: figma.boolean('Button group'),
//       filterChips: figma.boolean('Filter chips'),

//       filterGroup: figma.boolean('Filter group', {
//         true: filterGroup,
//         false: undefined
//       }),

//       iconButtonGroup: figma.boolean('Icon button group'),
//       linkButtons: figma.boolean('Link buttons'),
//       overflowMenu: figma.boolean('Overflow menu'),
//       pagination: figma.boolean('Pagination', {
//         true: figma.children('Pagination'),
//         false: undefined
//       }),
//       searchFilter: figma.boolean('Search filter'),
//       hasNoBackground: figma.boolean('Transparent Background', {
//         true: 'no-background',
//         false: undefined
//       }),

//       children: figma.children('*')
//     },
//     example: (props) => (
//       <Toolbar id="toolbar-example" colorVariant={props.hasNoBackground}>
//         {props.bulkSelector}
//         {props.filterGroup}
//         {props.pagination}
//         {/* <ToolbarGroup>{props.children}</ToolbarGroup> */}
//       </Toolbar>
//     )
//   }
// );
