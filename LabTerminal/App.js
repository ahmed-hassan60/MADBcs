import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useState, useEffect } from 'react';

import MyTinput from './MyTinput';
import { Platform } from 'react-native-web';

export default function App() {
  const [name, setName] = useState("Kamran");
  const [nameCopy, SetNameCopy] = useState("");
  const [reload, setReload] = useState(false);
  useEffect(() => {
    console.log("App Reloaded", name);
    if(reload){
      SetNameCopy(name);
    }
  });

  return (
    <View style={styles.container}>
      <Text>
        My Name : {nameCopy}
      </Text>
      <MyTinput name={name} setName={setName} />
      <Text>Reload Button:</Text>
      <Button title="Toggle the value of Reload" onPress={() => setReload(!reload)}></Button>

      
    </View>);}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 30,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
      },
    });
