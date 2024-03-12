import ComponentsInterface from "@/interfaces/components";

export interface AccordionInterfaceItem extends ComponentsInterface {
  title: string;
  content: string;
}

export default interface AccordionInterface extends ComponentsInterface  {
  items: AccordionInterfaceItem[];
}