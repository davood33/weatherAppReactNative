import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
const WEATHER_API_KEY = "e351360858f6d3bb28f204f977f68575";
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
export default function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  useEffect(() => {
    load();
  }, []);
  async function load() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Access to location is needed to run this app");
        return;
      }
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const weatherUrl = `${WEATHER_BASE_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;

      const response = await fetch(weatherUrl);
      const result = await response.json();
      if(response.ok){
        setCurrentWeather(result);
      }
      else{
      setErrorMessage(result.message)
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  if (currentWeather) {
    const {main : {temp}} = currentWeather
    return (
      <View style={styles.container}>
        <Text>{temp}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
});
