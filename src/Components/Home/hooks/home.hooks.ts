import { useState } from "react";
import { Form } from "antd";

import { printResultIMC } from "../Util";

export const useHoomeHooks = () => {
  const [form] = Form.useForm();

  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isElderly, setIsElderly] = useState<boolean>(false);
  const [isFemale, setisFemale] = useState<boolean>(false);
  const [isMale, setIsMale] = useState<boolean>(false);

  const [imc, setImc] = useState<number>(0);

  const calculeImmc = (params: { weight: number; height: number }): void => {
    const { weight, height } = params;
    const result = (weight / Math.pow(height, 2)).toFixed(2);
    setImc(+result);
    handleOpenModal(true);
  };

  const resultCalcImc = printResultIMC(imc, isFemale, isElderly);

  const handleFormChange = (): void => {
    const { weight, height } = form.getFieldsValue();
    if (weight && height && (isFemale || isMale)) {
      setSubmitDisabled(false);
      console.log(imc);
    } else {
      setSubmitDisabled(true);
    }
  };

  const handleOpenModal = (isOpen: boolean): void => setIsOpenModal(isOpen);

  const handleCheckboxChange = (type: string): void => {
    switch (type) {
      case "female":
        setisFemale(!isFemale);
        setIsMale(false);
        break;
      case "male":
        setIsMale(!isMale);
        setisFemale(false);
        break;
      case "elderly":
        setIsElderly(!isElderly);
        break;
      default:
        break;
    }
  };

  return {
    submitDisabled,
    resultCalcImc,
    isOpenModal,
    isElderly,
    isFemale,
    isMale,
    form,
    imc,
    calculeImmc,
    handleOpenModal,
    handleFormChange,
    handleCheckboxChange,
  };
};
