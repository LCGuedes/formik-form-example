import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";

const Container = styled.View`
  width: 200px;
`;

export default function SelectInput({
  options,
  placeholder,
  onValueChange,
  selectedValue,
}: any) {
  return (
    <Container>
      <Picker
        enabled={true}
        mode="dropdown"
        placeholder={placeholder}
        onValueChange={onValueChange}
        selectedValue={selectedValue}
      >
        {options.map((item: any) => (
          <Picker.Item
            label={item.name.toString()}
            value={item.name.toString()}
            key={item.id.toString()}
          />
        ))}
      </Picker>
    </Container>
  );
}
