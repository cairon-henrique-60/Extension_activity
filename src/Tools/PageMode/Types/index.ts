import { ReactNode } from "react";

export interface IPageModeProps {
  open: boolean;
  title: string;
  describe?: string;
  handleClose: () => void;
  children: ReactNode;
}
