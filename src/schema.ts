import * as yup from "yup";

export const Schema = yup.object().shape({
  nome: yup.string().label("nome").required("Digite seu nome"),

  cpf: yup
    .string()
    .label("cpf")
    .required("Digite seu cpf")
    .min(6, ({ min }) => `A senha precisa ser maior que ${min} caracteres`)
    .max(30, ({ max }) => `A senha precisa ser menor que ${max} caracteres`),
});
