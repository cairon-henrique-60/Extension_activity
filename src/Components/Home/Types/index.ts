export interface IResultIMCProps {
  imc: number;
  result: string;
  isFemale: boolean;
  isElderly: boolean;
}

export type Result =
  | "Abaixo do peso ideal"
  | "Peso normal"
  | "Sobrepeso"
  | "Obesidade"
  | "Obesidade severa"
  | "Obesidade mórbida";

export type ResultTipsMap = Record<Result, string[]>;
