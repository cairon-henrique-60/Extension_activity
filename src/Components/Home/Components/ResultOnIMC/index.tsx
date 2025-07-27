import React from "react";

import { IResultIMCProps, ResultTipsMap } from "../../Types";
import { ContainerResultIMC } from "../../styles/styles";

const ResulOnIMC: React.FC<IResultIMCProps> = ({
  isFemale,
  result,
  imc,
  age,
}) => {
  const tipsMap: ResultTipsMap = {
    "Abaixo do peso ideal": [
      "Priorize refeições nutritivas e calóricas.",
      "Inclua alimentos ricos em proteínas, como carne magra, ovos e legumes.",
    ],
    "Peso normal": [
      "Mantenha uma dieta equilibrada com variedade de nutrientes.",
      "Pratique exercícios regularmente para manter a saúde geral.",
    ],
    Sobrepeso: [
      "Controle as porções de suas refeições.",
      "Aumente a atividade física para queimar calorias extras.",
    ],
    Obesidade: [
      "Reduza a ingestão de calorias, especialmente de alimentos processados.",
      "Inicie um programa de exercícios regular, focando em cardio e treinamento de força.",
    ],
    "Obesidade severa": [
      "Consulte um profissional de saúde para um plano personalizado.",
      "Considere apoio psicológico para lidar com questões emocionais relacionadas ao peso.",
    ],
    "Obesidade mórbida": [
      "Busque orientação médica imediata.",
      "Trabalhe com uma equipe de saúde para desenvolver um plano abrangente que inclua dieta, exercícios e, possivelmente, intervenções médicas.",
    ],
  };

  const dicas = (tipsMap[result as keyof ResultTipsMap] || []) as string[];

  const getFaixaEtaria = (idade: number): string => {
    if (idade < 13) return "Criança";
    if (idade < 18) return "Adolescente";
    if (idade < 60) return "Adulto";
    return "Idoso";
  };

  return (
    <ContainerResultIMC>
      <div>
        <p>Idade: {age} anos</p>
        <p>Faixa etária: {getFaixaEtaria(age)}</p>
        <p>Sexo: {isFemale ? "Feminino" : "Masculino"}</p>
        <p>IMC: {imc}</p>
        <p>Resultado: {result}</p>
      </div>
      <br />
      <div>
        <p>Dicas:</p>
        {dicas.map((dica, index) => (
          <p key={index}>{dica}</p>
        ))}
      </div>
    </ContainerResultIMC>
  );
};

export default ResulOnIMC;
