import AccordionInterface from "@/interfaces/accordion";
import ButtonInterface from "@/interfaces/button";
import NavigationMenuInterface from "@/interfaces/navigation-menu";
import RichTextInterface from "@/interfaces/rich-text";
import ImageInterface from "@/interfaces/image";

export default interface ComponentsInterface {
  id: number;
  __component?: string | null;
}

export interface ComponentsArray {
  accordion?: AccordionInterface;
  button?: ButtonInterface;
  navigation_menu?: NavigationMenuInterface;
  rich_text?: RichTextInterface;
  image?: ImageInterface;
}