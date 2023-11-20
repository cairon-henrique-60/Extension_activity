import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #121212;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50vw;
  background-color: #fff;

  h1 {
    color: #6a5acd;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .ant-row {
    justify-content: center;
    width: 30vw;
  }

  .ant-form-item-row {
    display: block !important;
    width: 50vw;
    color: #6a5acd;
  }

  .ant-input {
    background-color: #fff;
    color: #6a5acd !important;
  }

  .ant-check {
    background-color: #6a5acd;
    color: #6a5acd !important;
  }

  .ant-form-item-required {
    color: #6a5acd !important;
  }

  button.ant-btn-primary {
    background-color: #6a5acd;
    color: #fff;
    border: none;
    transition: 0.3s ease-in-out;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const ContainerResultIMC = styled.div`
  color: #6a5acd;
  font-size: 16px;
  letter-spacing: 5px;
  h1,
  p {
    margin: 10px 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
  }
`;
