import { useState, useEffect } from "react";
import { Form } from "antd";

import { printResultIMC } from "../Util";

export const useHoomeHooks = () => {
  const [form] = Form.useForm();

  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isElderly, setIsElderly] = useState<boolean>(false);
  const [isFemale, setIsFemale] = useState<boolean>(false);
  const [isMale, setIsMale] = useState<boolean>(false);

  const [ageInput, setAgeInput] = useState<number>(0);

  const [imc, setImc] = useState<number>(0);

  const calculeImmc = (params: {
    weight: string;
    height: string;
    age: number;
  }): void => {
    const weight = parseFloat(params.weight.replace(",", "."));
    const height = parseFloat(params.height.replace(",", "."));
    const age = params.age;

    setAgeInput(age);

    const result = (weight / Math.pow(height, 2)).toFixed(2);
    setImc(+result);
    handleOpenModal(true);
  };

  const resultCalcImc = printResultIMC(imc, isFemale, isElderly);

  useEffect(() => {
    const age = form.getFieldValue("age");
    if (age >= 60) {
      setIsElderly(true);
    } else {
      setIsElderly(false);
    }
  }, [form]);

  const handleFormChange = (): void => {
    const { weight, height, age } = form.getFieldsValue();

    const transformWeight = parseFloat(weight?.replace?.(",", ".") || "0");
    const transformHeight = parseFloat(height?.replace?.(",", ".") || "0");

    if (
      transformWeight > 0 &&
      transformHeight > 0 &&
      age > 0 &&
      (isFemale || isMale)
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  const handleOpenModal = (isOpen: boolean): void => setIsOpenModal(isOpen);

  const handleCheckboxChange = (type: string): void => {
    switch (type) {
      case "female":
        setIsFemale(!isFemale);
        setIsMale(false);
        break;
      case "male":
        setIsMale(!isMale);
        setIsFemale(false);
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
    ageInput,
    isMale,
    form,
    imc,
    calculeImmc,
    handleOpenModal,
    handleFormChange,
    handleCheckboxChange,
  };
};
