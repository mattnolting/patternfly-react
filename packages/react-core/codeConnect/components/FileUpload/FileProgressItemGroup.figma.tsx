import figma from '@figma/code-connect'
import { FileProgressItemGroup } from '@patternfly/react-core'

figma.connect(
  FileProgressItemGroup,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8949-96121&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <FileProgressItemGroup>{props.children}</FileProgressItemGroup>
  }
)
