import ComponentsInterface from "@/interfaces/components";

export interface RichTextChild {
  type: string;
  text: string;
  level?: number;
  children: {
    type: string;
    text: string;
  }
}

export default interface RichTextInterface extends ComponentsInterface {
  content: RichTextChild[]
}