import ComponentsInterface from "@/interfaces/components";

export default interface ButtonInterface extends ComponentsInterface {
  label: string;
  path: string;
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
}