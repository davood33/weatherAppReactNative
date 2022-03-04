import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
const UnitsPicker = ({ unitSystem, setUnitSystem }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={unitSystem}
        onValueChange={(item) => {
          setUnitSystem(item);
        }}
      >
        <Picker.Item style={styles.item} label="C°" value="metric" />
        <Picker.Item style={styles.item} label="F°" value="imperial" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "white",
    width: 100,
    borderRadius: 15,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 2,
    marginBottom: 50,
    position: "absolute",
    top: 100,
    left: 30,
  },
  item: {
    fontSize: 20,
  },
});

export default UnitsPicker;
