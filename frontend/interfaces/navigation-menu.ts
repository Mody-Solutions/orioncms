import ComponentsInterface from "@/interfaces/components";

export interface NavigationMenuItemInterface extends ComponentsInterface {
  label: string;
  path: string;
  sub_items?: NavigationMenuItemInterface[];
}

export default interface NavigationMenuInterface extends ComponentsInterface{
  items: NavigationMenuItemInterface[];
}