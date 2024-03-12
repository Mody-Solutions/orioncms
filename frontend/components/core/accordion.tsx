import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import AccordionInterface, {AccordionInterfaceItem} from "@/interfaces/accordion";

export default function CoreAccordion({ id, items } : AccordionInterface) {
  return (
    <Accordion type={"single"} key={`component-${id}`} collapsible>
      {items ? items.map((item: AccordionInterfaceItem) => {
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