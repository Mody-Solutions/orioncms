import Link from "next/link";
import {Button} from "@/components/ui/button";
import ButtonInterface from "@/interfaces/button";

export default async function CoreButton({ id, path, label, variant = 'default' } : ButtonInterface) {
  return (
    <Button key={`component-${id}`} variant={variant} asChild>
      <Link href={path ? path : ''}>
        {label ? label : ''}
      </Link>
    </Button>
  );
}