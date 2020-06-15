import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialButtonDanger from "../components/MaterialButtonDanger";

function Login(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <MaterialFixedLabelTextbox
        style={styles.materialFixedLabelTextbox}
      ></MaterialFixedLabelTextbox>
      <MaterialFixedLabelTextbox
        style={styles.materialFixedLabelTextbox1}
      ></MaterialFixedLabelTextbox>
      <MaterialButtonDanger
        style={styles.materialButtonDanger}
      ></MaterialButtonDanger>
      <Text style={styles.loremIpsum}>
        Não possui uma conta?{"\n"}Cadastre-se aqui
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 163,
    alignSelf: "center"
  },
  materialFixedLabelTextbox: {
    height: 43,
    width: 289,
    marginTop: 43,
    marginLeft: 43
  },
  materialFixedLabelTextbox1: {
    height: 43,
    width: 289,
    marginTop: 21,
    marginLeft: 43
  },
  materialButtonDanger: {
    height: 36,
    width: 289,
    marginTop: 28,
    marginLeft: 43
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 16,
    marginLeft: 188
  }
});

export default Login;