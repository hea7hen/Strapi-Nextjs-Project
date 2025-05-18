import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    theme: Schema.Attribute.Enumeration<['turquoise', 'orange']>;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'info Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'elements.link', false>;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    theme: Schema.Attribute.Enumeration<['turquoise', 'orange']>;
  };
}

export interface ElementsComponentSettings extends Struct.ComponentSchema {
  collectionName: 'components_elements_component_settings';
  info: {
    displayName: 'ComponentSettings';
  };
  attributes: {
    NavbarSettings: Schema.Attribute.Component<
      'elements.navbar-settings',
      false
    >;
  };
}

export interface ElementsFonts extends Struct.ComponentSchema {
  collectionName: 'components_elements_fonts';
  info: {
    displayName: 'Fonts';
  };
  attributes: {
    primary: Schema.Attribute.String;
    secondary: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsNavbarSettings extends Struct.ComponentSchema {
  collectionName: 'components_elements_navbar_settings';
  info: {
    displayName: 'NavbarSettings';
  };
  attributes: {
    ctaVariant: Schema.Attribute.Enumeration<['filled', 'outlined']>;
    logoPosition: Schema.Attribute.Enumeration<['     left', '     center']>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'elements.component-settings': ElementsComponentSettings;
      'elements.fonts': ElementsFonts;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.navbar-settings': ElementsNavbarSettings;
      'layout.header': LayoutHeader;
    }
  }
}
