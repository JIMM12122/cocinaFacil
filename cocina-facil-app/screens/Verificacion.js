import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const VefificationCode = () => {
  return (
    <View style={[styles.vefificationCode, styles.vefificationLayout]}>
      <View
        style={[styles.vefificationCodeChild, styles.vefificationPosition]}
      />
      <Text
        style={[styles.codigoDeVerificacion, styles.textTypo]}
      >{` Codigo de verificacion `}</Text>
      <Image
        style={[styles.vefificationCodeItem, styles.vefificationPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-126.png")}
      />
      <Image
        style={[styles.vefificationCodeInner, styles.vefificationPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-127.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-128.png")}
      />
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.text, styles.textTypo]}>5</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.text, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <View style={[styles.rectangleView, styles.groupPosition]} />
        <View style={styles.lineView} />
      </View>
      <Text style={styles.noHeRecibidoContainer}>
        <Text
          style={styles.noHeRecibido}
        >{`No he recibido ningun correo! `}</Text>
        <Text style={styles.reenviar}>reenviar</Text>
      </Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-17955.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vefificationLayout: {
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  vefificationPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  rectanglePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "20.31%",
    position: "absolute",
  },
  groupPosition: {
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    borderStyle: "solid",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  vefificationCodeChild: {
    width: 375,
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  codigoDeVerificacion: {
    top: 180,
    left: 26,
    fontSize: 36,
    lineHeight: 43,
    color: "#000",
    width: 296,
    height: 40,
  },
  vefificationCodeItem: {
    width: 96,
    height: 96,
  },
  vefificationCodeInner: {
    width: 165,
    height: 165,
  },
  ellipseIcon: {
    left: 298,
    width: 181,
    height: 181,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderColor: Color.colorWhitesmoke,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderRadius: Border.br_3xs,
    right: "0%",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    left: "0%",
    width: "100%",
  },
  text: {
    top: 22,
    left: 25,
    fontSize: FontSize.size_8xl_2,
    width: 16,
    height: 20,
    color: Color.mainColor,
  },
  rectangleParent: {
    right: "79.69%",
    left: "0%",
  },
  groupItem: {
    borderColor: Color.colorWhitesmoke,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderRadius: Border.br_3xs,
    right: "0%",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    left: "0%",
    width: "100%",
  },
  rectangleGroup: {
    right: "53.13%",
    left: "26.56%",
  },
  groupInner: {
    right: "26.56%",
    left: "53.13%",
    borderRadius: 14,
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowRadius: 30,
    elevation: 30,
    borderColor: Color.mainColor,
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    width: "20.31%",
  },
  rectangleView: {
    left: "79.69%",
    borderColor: Color.colorWhitesmoke,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderRadius: Border.br_3xs,
    right: "0%",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    width: "20.31%",
  },
  lineView: {
    height: "36.15%",
    width: "0.47%",
    top: "31.15%",
    right: "38.2%",
    bottom: "32.69%",
    left: "61.33%",
    borderColor: "#ffc529",
    borderRightWidth: 1.5,
    borderStyle: "solid",
    position: "absolute",
  },
  groupParent: {
    height: "8%",
    width: "85.33%",
    top: "37.07%",
    right: "7.47%",
    bottom: "54.93%",
    left: "7.2%",
    position: "absolute",
  },
  noHeRecibido: {
    color: "#5b5b5e",
  },
  reenviar: {
    color: Color.mainColor,
  },
  noHeRecibidoContainer: {
    top: 398,
    left: 45,
    fontSize: 16,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  groupIcon: {
    height: "9.61%",
    width: "20.8%",
    top: "3.33%",
    right: "76%",
    bottom: "87.07%",
    left: "3.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vefificationCode: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default VefificationCode;
