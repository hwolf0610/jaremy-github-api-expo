import React, { useState, useCallback, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate("WelcomeScreen");
        }}
      >
        Go To Welcome Screen
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
