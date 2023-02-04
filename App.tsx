import { useMemo, useState, useEffect } from "react";

import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Formik, useFormikContext } from "formik";

import SelectInput from "./src/components/selectInput";
import { Schema } from "./src/schema";
import { deficiencia, estadoCivil } from "./src/data";
import { Input } from "./styles";

interface Iprops {
  nome: string;
  cpf: string;
  deficiencia: string;
  estado_civil: string;
  conjuge_nome: string;
  conjuge_cpf: string;
  conjuge_deficiencia: string;
}

const newForm = {
  nome: "",
  cpf: "",
  deficiencia: "",
  estado_civil: "",
  conjuge_nome: "",
  conjuge_cpf: "",
  conjuge_deficiencia: "",
};

const editForm = {
  nome: "lucas",
  cpf: "08272938393",
  deficiencia: "auditiva",
  estado_civil: "solteiro",
  conjuge_nome: "julia",
  conjuge_cpf: "asdsad",
  conjuge_deficiencia: "asdsa",
};

const type = "new";

const AutoSubmitToken = ({ setDisable }: any) => {
  const { values, setFieldValue }: any = useFormikContext();

  useEffect(() => {
    console.log("user efect acionadoo");
    if (values.estado_civil === "solteiro" || values.estado_civil === "viuvo") {
      console.log("esta solteiroo");
      const clenedFields = [
        "conjuge_nome",
        "conjuge_cpf",
        "conjuge_deficiencia",
      ];
      for (const field of clenedFields) {
        setFieldValue(field, "");
      }

      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [values.estado_civil]);
  return null;
};

export default function App() {
  const data: Iprops = type == "new" ? newForm : editForm;
  const initialValues = useMemo(() => data, []);
  const [disable, setDisable] = useState(true);

  function handleSubmit(values: any) {
    console.log(values);
  }

  return (
    <View style={{ padding: 24 }}>
      <Formik
        validationSchema={Schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          touched,
          values,
        }) => (
          <View>
            <>
              <Text>formulario</Text>
              {errors.nome && touched.nome && <Text>{errors.nome}</Text>}
              <Input
                value={values.nome}
                onBlur={handleBlur("nome")}
                onChangeText={handleChange("nome")}
              />
              {errors.cpf && touched.cpf && <Text>{errors.cpf}</Text>}
              <Input
                value={values.cpf}
                onBlur={handleBlur("cpf")}
                onChangeText={handleChange("cpf")}
              />
              {errors.estado_civil && touched.estado_civil && (
                <Text>{errors.estado_civil}</Text>
              )}
              <SelectInput
                options={estadoCivil}
                placeholder="-"
                onValueChange={handleChange("estado_civil")}
                selectedValue={values.estado_civil}
              />
              {errors.conjuge_nome && touched.conjuge_nome && (
                <Text>{errors.conjuge_nome}</Text>
              )}
              <Input
                value={values.conjuge_nome}
                onBlur={handleBlur("conjuge_nome")}
                onChangeText={handleChange("conjuge_nome")}
                editable={disable}
              />

              {errors.conjuge_cpf && touched.conjuge_cpf && (
                <Text>{errors.conjuge_cpf}</Text>
              )}
              <Input
                value={values.conjuge_cpf}
                onBlur={handleBlur("conjuge_cpf")}
                onChangeText={handleChange("conjuge_cpf")}
                editable={disable}
              />

              {errors.conjuge_deficiencia && touched.conjuge_deficiencia && (
                <Text>{errors.conjuge_deficiencia}</Text>
              )}
              <Input
                value={values.conjuge_deficiencia}
                onBlur={handleBlur("conjuge_deficiencia")}
                onChangeText={handleChange("conjuge_deficiencia")}
                editable={disable}
              />

              <SelectInput
                options={deficiencia}
                placeholder="-"
                onValueChange={handleChange("deficiencia")}
                selectedValue={values.deficiencia}
              />
              <Button
                disabled={!isValid}
                mode="contained"
                title="submit"
                onPress={handleSubmit}
              >
                Enter
              </Button>
              <AutoSubmitToken setDisable={setDisable} />
            </>
          </View>
        )}
      </Formik>
    </View>
  );
}

/* <Button mode="contained" title="submit" onPress={formik.handleSubmit}>
        Enter
      </Button>*/
