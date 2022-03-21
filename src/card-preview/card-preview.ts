import { FASTElement } from "@microsoft/fast-element";
/**
 * @internal
 */
export class CardPreview extends FASTElement {}
export interface CardPreview
  extends React.Component<
    {
      name?: string;
    } & React.HTMLAttributes<CardPreview>
  > {}
