import React, {useState} from "react";
import { View, Text, Picker, StyleSheet, Button } from "react-native";

export default function Records({navigation}) {
  
    const [type, setType] = useState("notes");
    const [year, setYear] = useState(1);
    const [subject, setSubject] = useState();

    const pressHandler = () => {
        const data = {
            type:type,
            year:year,
            subject:subject
        }
        navigation.navigate('Material', data);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Selected {type}</Text>
        <Picker
          style={styles.pickerStyle}
          selectedValue={type}
          onValueChange={(itemValue) =>{
                setType(itemValue);
            }
          }
        >
          <Picker.Item label="Notes" value="notes" />
          <Picker.Item label="Question Papers" value="papers" />
        </Picker>
        <Text style={styles.textStyle}>Selected {year} Year</Text>
        <Picker
          style={styles.pickerStyle}
          selectedValue={year}
          onValueChange={(itemValue) =>{
                setYear(itemValue);
            }
          }
        >
          <Picker.Item label="Ist Year" value="1" />
          <Picker.Item label="IIst Year" value="2" />
          <Picker.Item label="IIIst Year" value="3" />
          <Picker.Item label="IVst Year" value="4" />
        </Picker>
        <Text style={styles.textStyle}>Selected {subject}</Text>
        <Picker
          style={styles.pickerStyle}
          selectedValue={subject}
          onValueChange={(itemValue) =>{
                setSubject(itemValue);
            }
          }
        >
          <Picker.Item label="Please Select" value="" />
          <Picker.Item label="Power Electronics" value="PE" />
        </Picker>
        <Button title="Submit" onPress={pressHandler} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  pickerStyle: {
    width: "80%",
    color: "#344953",
    justifyContent: "center"
  }
});
