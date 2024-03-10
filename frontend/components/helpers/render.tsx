import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import AccordionInterface, {AccordionItems} from "@/interfaces/accordion";
import ButtonInterface from "@/interfaces/button";
import RenderInterface from "@/interfaces/render";

export default function Render({components, uuid, locale} : RenderInterface) {
  return (
    <div data-pageref={uuid} data-locale={locale}>
      {components.map((component: AccordionInterface | ButtonInterface, key: number) => {
        if (component.__component === 'ui.accordion') {
          return (
            <Accordion type={"single"} key={`component-${component.id}`} collapsible>
              {"items" in component ? component?.items.map((item: AccordionItems) => {
                return (
                  <AccordionItem value={item.title} key={item.id}>
                    <AccordionTrigger>
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                )
              }) : []}
            </Accordion>
          )
        }

        if(component.__component === 'ui.button') {
          return (
            <Button key={`component-${component.id}`} asChild>
              <Link href={"path" in component ? component.path : ''}>
                {"label" in component ? component.label : ''}
              </Link>
            </Button>
          )
        }
      })}
    </div>
  )
}