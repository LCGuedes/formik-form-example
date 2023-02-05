import styled from "styled-components/native";

interface IProps {
  errors: any;
  touched: any;
  values: string;
  handleBlur: (s: any) => void;
  handleChange: (s: string) => void;
  editable?: boolean;
}
export default function FormikInput({
  errors,
  touched,
  values,
  handleBlur,
  handleChange,
  editable,
}: IProps) {
  return (
    <>
      {errors && touched && <TextError>{errors}</TextError>}
      <Input
        value={values}
        onBlur={handleBlur}
        onChangeText={handleChange}
        editable={editable}
      />
    </>
  );
}

const Input = styled.TextInput`
  width: 100%;
  height: 32px;
  border: 1px solid #000000;
  border-radius: 4px;
  margin-bottom: 12px;
  padding-left: 12px;
`;

const TextError = styled.Text``;
