import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuSubItems extends Schema.Component {
  collectionName: 'components_menu_menu_sub_items';
  info: {
    displayName: 'menu_sub_items';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    path: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
  };
}

export interface MenuNavigation extends Schema.Component {
  collectionName: 'components_menu_navigations';
  info: {
    displayName: 'navigation';
    description: '';
  };
  attributes: {
    is_button: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String & Attribute.Required;
    path: Attribute.String & Attribute.Required;
    sub_items: Attribute.Component<'menu.menu-sub-items', true>;
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

export interface UiAccordion extends Schema.Component {
  collectionName: 'components_ui_accordions';
  info: {
    displayName: 'accordion';
    icon: '';
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
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    path: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-sub-items': MenuMenuSubItems;
      'menu.navigation': MenuNavigation;
      'ui-child.accordion-items': UiChildAccordionItems;
      'ui.accordion': UiAccordion;
      'ui.button': UiButton;
    }
  }
}
