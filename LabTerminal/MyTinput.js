import React from "react";
import { TextInput, Text } from "react-native";

function MyTinput({ name, setName }) {
  return (
    <>
      <Text>Enter New Value: </Text>
      <TextInput
        value={name}
        onChangeText={(value) => {setName(value);}}
        
      />
      
    </>
  );
}

export default MyTinput;