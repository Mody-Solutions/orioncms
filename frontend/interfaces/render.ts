import {ComponentsArray} from "@/interfaces/components";

export default interface RenderInterface {
  components: ComponentsArray[];
  uuid: string;
  locale: string;
  direction?: string;
  lines?: number;
  className?: string;
}