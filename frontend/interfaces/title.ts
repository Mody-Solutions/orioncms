import ComponentsInterface from "@/interfaces/components";

export default interface TitleInterface extends ComponentsInterface{
  content: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}