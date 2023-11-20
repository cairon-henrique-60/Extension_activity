import React from "react";

import { IResultIMCProps, ResultTipsMap } from "../../Types";
import { ContainerResultIMC } from "../../styles/styles";

const ResulOnIMC: React.FC<IResultIMCProps> = ({
  isElderly,
  isFemale,
  result,
  imc,
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

  return (
    <>
      <ContainerResultIMC>
        <div>
          <p>Sexo: {isFemale ? "Feminino" : "Masculino"}</p>
          <p>Idoso: {isElderly ? "Sim" : "Não"}</p>
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
    </>
  );
};

export default ResulOnIMC;
