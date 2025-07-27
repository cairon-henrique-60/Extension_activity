export interface IResultIMCProps {
  imc: number;
  age: number;
  result: string;
  isFemale: boolean;
}

export type Result =
  | "Abaixo do peso ideal"
  | "Peso normal"
  | "Sobrepeso"
  | "Obesidade"
  | "Obesidade severa"
  | "Obesidade mórbida";

export type ResultTipsMap = Record<Result, string[]>;
