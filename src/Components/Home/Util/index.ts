export const printResultIMC = (
  percetage: number,
  isFemale: boolean,
  isElderly: boolean
): string => {
  switch (true) {
    case percetage <= 18.5 && !isFemale && !isElderly:
      return "Abaixo do peso ideal";
    case percetage > 18.5 && percetage <= 24.9 && !isFemale && !isElderly:
      return "Peso normal";
    case percetage > 24.9 && percetage <= 29.9 && !isFemale && !isElderly:
      return "Sobrepeso";
    case percetage > 29.0 && percetage <= 34.9 && !isFemale && !isElderly:
      return "Obesidade";
    case percetage > 34.9 && percetage <= 39.9 && !isFemale && !isElderly:
      return "Obesidade severa";
    case percetage > 39.9 && !isFemale && !isElderly:
      return "Obesidade mórbida";
    case percetage <= 22.0 && !isFemale && isElderly:
      return "Abaixo do peso ideal";
    case percetage > 22.0 && percetage <= 27.0 && !isFemale && isElderly:
      return "Peso normal";
    case percetage > 27.0 && percetage <= 30.0 && !isFemale && isElderly:
      return "Sobrepeso";
    case percetage > 30.0 && percetage <= 35.0 && !isFemale && isElderly:
      return "Obesidade";
    case percetage > 35.0 && percetage <= 40.0 && !isFemale && isElderly:
      return "Obesidade severa";
    case percetage > 40 && !isFemale && isElderly:
      return "Obesidade mórbida";
    case percetage <= 18.5 && isFemale && !isElderly:
      return "Abaixo do peso ideal";
    case percetage > 18.5 && percetage <= 24.9 && isFemale && !isElderly:
      return "Peso normal";
    case percetage > 24.9 && percetage <= 29.9 && isFemale && !isElderly:
      return "Sobrepeso";
    case percetage > 29.0 && percetage <= 34.9 && isFemale && !isElderly:
      return "Obesidade";
    case percetage > 34.9 && percetage <= 39.9 && isFemale && !isElderly:
      return "Obesidade severa";
    case percetage > 39.9 && isFemale && !isElderly:
      return "Obesidade mórbida";
    case percetage <= 22.0 && isFemale && isElderly:
      return "Abaixo do peso ideal";
    case percetage > 22.0 && percetage <= 27.0 && isFemale && isElderly:
      return "Peso normal";
    case percetage > 27.0 && percetage <= 30.0 && isFemale && isElderly:
      return "Sobrepeso";
    case percetage > 30.0 && percetage <= 35.0 && isFemale && isElderly:
      return "Obesidade";
    case percetage > 35.0 && percetage <= 40.0 && isFemale && isElderly:
      return "Obesidade severa";
    case percetage > 40 && isFemale && !isElderly:
      return "Obesidade mórbida";
    default:
      return "Outro caso";
  }
};
