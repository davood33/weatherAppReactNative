import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native";
import { colors } from "../utils/index";
const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;
const WeatherInfo = ({ currentWeather }) => {
  const {
    main: { temp },
    weather: [detail],
    name,
  } = currentWeather;
  const { main, description, icon } = detail;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <View style={styles.weatherInfo}>
      <Text style={styles.name}>{name}</Text>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfo: {
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  icon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform:'capitalize',
    color:'black',
    fontSize: 17,
    marginTop: 10
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
  textSecondary: {
    fontSize: 25,
    color: SECONDARY_COLOR,
    fontWeight : "500",
    marginTop:10
  },
});

export default WeatherInfo;
