export interface IResultIMCProps {
  imc: number;
  result: string;
  isFemale: boolean;
  isElderly: boolean;
}

export type Result =
  | "Abaixo do Peso Ideal"
  | "Peso Normal"
  | "Sobrepeso"
  | "Obesidade"
  | "Obesidade Severa"
  | "Obesidade Mórbida";

export type ResultTipsMap = Record<Result, string[]>;
