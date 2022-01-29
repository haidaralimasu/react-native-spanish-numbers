import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Audio } from "expo";

const listBackgroundColors = {
  1: "#FF6263",
  2: "#1B98F5",
  3: "#1FAA59",
  4: "#E8BD0D",
  5: "#8D3DAF",
  6: "#E03B8B",
  7: "#E07C24",
  8: "#5A20CB",
  9: "#35BDD0",
  10: "#6A1B4D",
};

const soundList = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav"),
};

const App = () => {
  const playSound = async (number) => {
    const soundObject = new Audio.Sound();

    try {
      const path = soundList[number];
      await soundObject.loadAsync(path);
      await soundObject
        .playAsync()
        .then((playbackStatus) => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playbackDurationMillis);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gridContainer}>
        <Image style={styles.logo} source={require("./assets/logo.png")} />

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: listBackgroundColors[1] }, styles.item]}
            onPress={() => playSound("one")}
          >
            <Text style={styles.itemText}>One</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: listBackgroundColors[2] }, styles.item]}
            onPress={() => playSound("two")}
          >
            <Text style={styles.itemText}>Two</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: listBackgroundColors[3] }, styles.item]}
            onPress={() => playSound("three")}
          >
            <Text style={styles.itemText}>Three</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: listBackgroundColors[4] }, styles.item]}
            onPress={() => playSound("four")}
          >
            <Text style={styles.itemText}>Four</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: listBackgroundColors[5] }, styles.item]}
            onPress={() => playSound("five")}
          >
            <Text style={styles.itemText}>Five</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: listBackgroundColors[6] }, styles.item]}
            onPress={() => playSound("six")}
          >
            <Text style={styles.itemText}>Six</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: listBackgroundColors[7] }, styles.item]}
            onPress={() => playSound("seven")}
          >
            <Text style={styles.itemText}>Seven</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: listBackgroundColors[8] }, styles.item]}
            onPress={() => playSound("eight")}
          >
            <Text style={styles.itemText}>Eight</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: listBackgroundColors[9] }, styles.item]}
            onPress={() => playSound("nine")}
          >
            <Text style={styles.itemText}>Nine</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: listBackgroundColors[10] }, styles.item]}
            onPress={() => playSound("ten")}
          >
            <Text style={styles.itemText}>Ten</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
  },
  logo: {
    alignSelf: "center",
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: "row",
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  itemText: {
    color: "white",
    fontSize: 20,
  },
});
