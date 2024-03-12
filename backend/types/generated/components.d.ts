import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuItems extends Schema.Component {
  collectionName: 'components_menu_menu_items';
  info: {
    displayName: 'items';
    description: '';
  };
  attributes: {
    path: Attribute.String;
    label: Attribute.String;
    sub_items: Attribute.Component<'menu.menu-sub-items', true>;
  };
}

export interface MenuMenuSubItems extends Schema.Component {
  collectionName: 'components_menu_menu_sub_items';
  info: {
    displayName: 'sub-items';
    description: '';
  };
  attributes: {
    path: Attribute.String;
    label: Attribute.String;
  };
}

export interface MenuNavigation extends Schema.Component {
  collectionName: 'components_menu_navigations';
  info: {
    displayName: 'navigation';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'menu.menu-items', true>;
  };
}

export interface UiChildAccordionItems extends Schema.Component {
  collectionName: 'components_ui_accordion_items';
  info: {
    displayName: 'accordion_items';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface UiChildFlipGridComponents extends Schema.Component {
  collectionName: 'components_ui_child_flip_grid_components';
  info: {
    displayName: 'flip_grid_components';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    layout: Attribute.Enumeration<
      [
        'two-column-equal-size',
        'two-column-sidebar-left',
        'two-column-sidebar-right',
        'three-column-equal-size',
        'four-column-equal-size'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'two-column-equal-size'>;
  };
}

export interface UiAccordion extends Schema.Component {
  collectionName: 'components_ui_accordions';
  info: {
    displayName: 'accordion';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'ui-child.accordion-items', true>;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
    description: '';
    icon: 'cursor';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    path: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<
      ['default', 'secondary', 'destructive', 'outline', 'link']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'default'>;
  };
}

export interface UiContainer extends Schema.Component {
  collectionName: 'components_ui_containers';
  info: {
    displayName: 'container';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface UiFlipGrid extends Schema.Component {
  collectionName: 'components_ui_flip_grids';
  info: {
    displayName: 'Flip Grid';
    icon: 'grid';
    description: '';
  };
  attributes: {
    image_start: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    items: Attribute.Component<'ui-child.flip-grid-components', true>;
  };
}

export interface UiImage extends Schema.Component {
  collectionName: 'components_ui_images';
  info: {
    displayName: 'image';
    icon: 'picture';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    alt: Attribute.String;
    title: Attribute.String;
    link: Attribute.String;
    width: Attribute.Decimal & Attribute.DefaultTo<100>;
    height: Attribute.Decimal & Attribute.DefaultTo<100>;
  };
}

export interface UiRichText extends Schema.Component {
  collectionName: 'components_ui_rich_texts';
  info: {
    displayName: 'rich_text';
    icon: 'code';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
  };
}

export interface UiTitle extends Schema.Component {
  collectionName: 'components_ui_titles';
  info: {
    displayName: 'title';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    content: Attribute.String;
    type: Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-items': MenuMenuItems;
      'menu.menu-sub-items': MenuMenuSubItems;
      'menu.navigation': MenuNavigation;
      'ui-child.accordion-items': UiChildAccordionItems;
      'ui-child.flip-grid-components': UiChildFlipGridComponents;
      'ui.accordion': UiAccordion;
      'ui.button': UiButton;
      'ui.container': UiContainer;
      'ui.flip-grid': UiFlipGrid;
      'ui.image': UiImage;
      'ui.rich-text': UiRichText;
      'ui.title': UiTitle;
    }
  }
}
