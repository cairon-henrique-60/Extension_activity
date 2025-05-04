import React from "react";

import { Button, Form, Input, Row, Col, Checkbox } from "antd";
import { UserOutlined } from "@ant-design/icons";

import PageMode from "../../Tools/PageMode";

import { Container, FormContainer } from "./styles/styles";

import { useHoomeHooks } from "./hooks/home.hooks";

import ResulOnIMC from "./Components/ResultOnIMC";

const Home: React.FC = () => {
  const {
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
  } = useHoomeHooks();

  return (
    <Container>
      <FormContainer>
        <Row
          align="middle"
          style={{
            height: "100vh",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col span={20}>
            <h1>Calculadora IMC</h1>
            <Form
              name="basic"
              form={form}
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 12 }}
              labelAlign="left"
              onFinish={calculeImmc}
              onFieldsChange={handleFormChange}
            >
              <Form.Item
                label="Peso"
                name="weight"
                rules={[{ required: true, message: "Somente números!" }]}
              >
                <Input
                  type="number"
                  placeholder="Digite seu peso"
                  prefix={<UserOutlined style={{ color: "#6a5acd" }} />}
                />
              </Form.Item>

              <Form.Item
                label="Altura"
                name="height"
                rules={[{ required: true, message: "Somente números!" }]}
              >
                <Input
                  type="number"
                  placeholder="Digite sua altura"
                  prefix={<UserOutlined style={{ color: "#6a5acd" }} />}
                />
              </Form.Item>

              <Form.Item name="isFemale" rules={[{ required: true }]}>
                <Checkbox.Group>
                  <Checkbox
                    value="female"
                    indeterminate={
                      (isFemale === false && isMale === false) ||
                      (isMale === true && isFemale === false)
                    }
                    onChange={() => handleCheckboxChange("female")}
                  >
                    Mulher
                  </Checkbox>
                  <Checkbox
                    value="male"
                    indeterminate={
                      (isFemale === false && isMale === false) ||
                      (isMale === false && isFemale === true)
                    }
                    onChange={() => handleCheckboxChange("male")}
                  >
                    Homem
                  </Checkbox>
                  <Checkbox
                    value="elderly"
                    checked={isElderly}
                    indeterminate={!isElderly}
                    onChange={() => handleCheckboxChange("elderly")}
                  >
                    Idoso
                  </Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item wrapperCol={{ span: 12 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                  disabled={submitDisabled}
                >
                  Calcular
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </FormContainer>
      <PageMode
        handleClose={() => handleOpenModal(false)}
        title="IMC"
        open={isOpenModal}
      >
        <ResulOnIMC
          result={resultCalcImc}
          isElderly={isElderly}
          isFemale={isFemale}
          imc={imc}
        />
      </PageMode>
    </Container>
  );
};
export default Home;
