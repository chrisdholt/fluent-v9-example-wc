declare module "@skatejs/val";

declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const slot: (props: SVGProps<SVGElement>) => ReactElement;
  export default slot;
}
