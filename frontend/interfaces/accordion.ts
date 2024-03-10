import ComponentsInterface from "@/interfaces/components";

export interface AccordionItems extends ComponentsInterface {
  title: string;
  content: string;
}

export default interface AccordionInterface extends ComponentsInterface  {
  items: AccordionItems[];
}