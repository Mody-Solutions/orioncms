import ComponentsInterface from '@/interfaces/components';
import {RichTextChild} from "@/interfaces/rich-text";
import CoreMediaInterface from "@/interfaces/media";

export interface FlipGridItemInterface {
  id: number;
  content: RichTextChild;
  image: CoreMediaInterface;
}

export default interface FlipGridInterface extends ComponentsInterface{
  image_start: 'left' | 'right';
  items: FlipGridItemInterface[];
}