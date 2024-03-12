import CoreMediaInterface from "@/interfaces/media";
import ComponentsInterface from "@/interfaces/components";

export default interface ImageInterface extends ComponentsInterface{
  image: CoreMediaInterface;
  alt: string | undefined;
  title?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  link?: string | undefined;
  className?: string | undefined;
}