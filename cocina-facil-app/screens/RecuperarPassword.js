import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily } from "../GlobalStyles";

const RessetPassword = () => {
  return (
    <View style={[styles.ressetPassword, styles.ressetLayout]}>
      <View style={[styles.ressetPasswordChild, styles.groupItemPosition]} />
      <Text style={[styles.recuperarContrasea, styles.porFavorIngreseFlexBox]}>
        Recuperar contraseña
      </Text>
      <Image
        style={[styles.ressetPasswordItem, styles.groupItemPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-126.png")}
      />
      <Image
        style={[styles.ressetPasswordInner, styles.groupItemPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-127.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-128.png")}
      />
      <Text style={[styles.porFavorIngrese, styles.porFavorIngreseFlexBox]}>
        Por favor ingrese su dirección de correo electrónico para solicitar un
        restablecimiento de contraseña
      </Text>
      <View style={styles.groupView}>
        <View style={styles.groupChild} />
      </View>
      <View style={[styles.ressetPasswordInner1, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text
              style={[styles.enviarDatosDe, styles.enviarDatosDeTypo]}
            >{`Enviar datos de recuperacion `}</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-17955.png")}
      />
      <Text style={[styles.isaiejegmailcom, styles.porFavorIngreseFlexBox]}>
        isaieje@gmail.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ressetLayout: {
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  groupItemPosition: {
    left: 0,
    top: 0,
  },
  porFavorIngreseFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    width: 248,
    position: "absolute",
  },
  enviarDatosDeTypo: {
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  ressetPasswordChild: {
    width: 375,
    position: "absolute",
    height: 812,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  recuperarContrasea: {
    top: 128,
    left: 24,
    fontSize: 36,
    lineHeight: 43,
    width: 296,
    height: 52,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  ressetPasswordItem: {
    width: 96,
    height: 96,
    position: "absolute",
  },
  ressetPasswordInner: {
    width: 165,
    height: 165,
    position: "absolute",
  },
  ellipseIcon: {
    left: 298,
    width: 181,
    height: 181,
    top: 0,
    position: "absolute",
  },
  porFavorIngrese: {
    top: 219,
    left: 26,
    fontSize: 14,
    lineHeight: 19,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.subColor,
    width: 236,
    height: 44,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowRadius: 30,
    elevation: 30,
    borderStyle: "solid",
    borderColor: "#fe724c",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  groupView: {
    height: "8%",
    width: "86.4%",
    top: "37.07%",
    right: "6.67%",
    bottom: "54.93%",
    left: "6.93%",
    position: "absolute",
  },
  groupItem: {
    borderRadius: 29,
    backgroundColor: "#4ee476",
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(122, 129, 190, 0.16)",
    width: 248,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    left: 0,
    top: 0,
  },
  enviarDatosDe: {
    height: "18.33%",
    width: "64.11%",
    top: "26.67%",
    left: "18.15%",
    fontSize: 15,
    letterSpacing: 1.2,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  groupWrapper: {
    left: 0,
    top: 0,
  },
  ressetPasswordInner1: {
    top: 417,
    left: 65,
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(122, 129, 190, 0.16)",
    width: 248,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
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
  isaiejegmailcom: {
    top: 325,
    left: 53,
    fontSize: 18,
    fontFamily: FontFamily.interRegular,
    display: "flex",
    alignItems: "center",
    width: 267,
    height: 9,
    color: Color.colorBlack,
    textAlign: "left",
  },
  ressetPassword: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default RessetPassword;
