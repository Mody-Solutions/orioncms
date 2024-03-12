import RichTextInterface, {RichTextChild} from "@/interfaces/rich-text";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

export default function CoreRichText({content}: RichTextInterface) {
  return (
    <BlocksRenderer content={content as any} />
  )
}
