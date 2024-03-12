import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import AccordionInterface, {AccordionInterfaceItem} from "@/interfaces/accordion";
import ButtonInterface from "@/interfaces/button";
import RenderInterface from "@/interfaces/render";
import CoreAccordion from "@/components/core/accordion";
import CoreButton from "@/components/core/button";
import CoreNavigationMenu from "@/components/core/navigation-menu";
import NavigationMenuInterface from "@/interfaces/navigation-menu";
import CoreImage from "@/components/core/image";
import CoreRichText from "@/components/core/rich-text";
import CoreTitle from "@/components/core/title";
import CoreFlipGrid from "@/components/core/flip-grid";

export default function Render({components, uuid, locale, className = 'w-full'}: RenderInterface) {
  return (
    <div data-pageref={uuid} data-locale={locale} className={`flex-1`}>
      {components.map((component: any, key: number) => {
        if (component.__component === 'ui.accordion') {
          return (
            <CoreAccordion
              key={`component-${component.id}`}
              items={"items" in component ? component?.items : []}
              id={component?.id}
            />
          )
        }

        if (component.__component === 'ui.button') {
          return (
            <CoreButton
              key={`component-${component.id}`}
              label={'label' in component ? component.label : ''}
              path={'path' in component ? component.path : ''}
              variant={'variant' in component ? component.variant : 'default'}
              id={component.id}
            />
          )
        }

        if (component.__component === 'ui.image') {
          return <CoreImage
            key={`component-${component.id}`}
            image={component.image}
            alt={component.alt}
            link={component.link}
            width={component.width}
            height={component.height}
            title={component.title}
            id={component.id}
          />
        }

        if (component.__component === 'ui.rich-text') {
          return <CoreRichText
            key={`component-${component.id}`}
            content={component.content}
            id={component.id}
          />;
        }

        if (component.__component === 'ui.title') {
          return <CoreTitle
            key={`component-${component.id}`}
            content={component.content}
            type={component.type}
            id={component.id}
          />;
        }

        if (component.__component === 'ui.flip-grid') {
          return <CoreFlipGrid
            key={`component-${component.id}`}
            items={component.items}
            image_start={component.image_start}
            id={component.id}
          />;
        }

        if (component.__component === 'menu.navigation') {
          return <CoreNavigationMenu
            key={`component-${component.id}`}
            items={component.items}
            id={component.id}
          />;
        }

        return (
          <div
            key={`component-${key}`}
            style={
              {
                margin: '0 auto 2rem',
                padding: '1rem',
                maxWidth: 'calc(100vw - 60px)',
                border: '1px rgba(0,0,0,0.2) solid',
                background: 'rgba(0,0,0,0.05)'
              }
            }>
            <div
              style={
                {
                  margin: '0 0 1rem 0',
                  fontWeight: 'bold'
                }
              }>
              Component: {Object.getOwnPropertyNames(component)}
            </div>
            <div
              style={
                {
                  width: '100%',
                  overflowX: 'auto'
                }
              }>
              <pre
                style={
                  {
                    wordBreak: 'break-all'
                  }
                }>
                {JSON.stringify(component, null, 2)}
              </pre>
            </div>
          </div>)
      })}
    </div>
  )
}