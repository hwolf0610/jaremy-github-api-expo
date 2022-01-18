import React, { useState, useCallback, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        Go To Home Screen
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
