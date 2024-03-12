import FlipGridInterface, {FlipGridItemInterface} from "@/interfaces/flip_grid";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import CoreImage from "@/components/core/image";

export default function CoreFlipGrid({items, image_start}: FlipGridInterface) {
  const oddClassName = image_start === 'left' ? 'flex-row-reverse' : 'flex-row',
    evenClassName = image_start === 'left' ? 'flex-row' : 'flex-row-reverse';
  return (
    <>
      {items.map((element: FlipGridItemInterface, index: number) => {
        const {image, content } = element;
        const {attributes} = image.data;
        const currentClassName = index % 2 === 0 ? oddClassName : evenClassName;
        return (
          <div
            className={`flex ${currentClassName}`}
            key={`flip-grid-item-${index}`}>
            <div className={'basis-1/2'}>
              <BlocksRenderer content={content as any}/>
            </div>
            <div className={'basis-1/2'}>
              <CoreImage
                image={image}
                alt={attributes.name}
                title={attributes.name}
                id={image.data.id}
                width={attributes.width}
                height={attributes.height}
              />
            </div>
          </div>
        )
      })}
    </>
  );
}