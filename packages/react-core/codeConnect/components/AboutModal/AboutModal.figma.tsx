import figma from '@figma/code-connect';
import { AboutModal } from '@patternfly/react-core';

// Connect AboutModal component to Figma
figma.connect(
  AboutModal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2879-13973&m=dev',
  {
    props: {
      productName: figma.string('Product name', 'Product name'),
      trademark: 'Copyright © 2024',
      brandImageSrc: 'Brand Image Source',
      brandImageAlt: 'Brand Image Alt Text',
      backgroundImageSrc: '/assets/images/background.png',
      children: figma.children('*')
    },
    example: ({ productName, trademark, brandImageSrc, brandImageAlt, backgroundImageSrc, children }) => (
      <AboutModal
        productName={productName}
        trademark={trademark}
        brandImageSrc={brandImageSrc}
        brandImageAlt={brandImageAlt}
        backgroundImageSrc={backgroundImageSrc}
      >
        {children}
      </AboutModal>
    )
  }
);
