import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={[styles.loginChild, styles.loginChildPosition]} />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <View style={[styles.rectangleParent, styles.groupWrapperLayout]}>
            <View style={styles.groupChild} />
            <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
            <Image
              style={[styles.superGIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/super-g.png")}
            />
          </View>
        </View>
        <Text style={styles.signInWith}>Sign in with</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-17868.png")}
        />
      </View>
      <View style={[styles.loginInner, styles.innerGroupLayout]}>
        <View style={[styles.groupContainer, styles.innerGroupLayout]}>
          <View style={[styles.groupContainer, styles.innerGroupLayout]}>
            <View style={[styles.groupInner, styles.innerGroupLayout]} />
            <Text style={styles.ingresar}>Ingresar</Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.aunNoTienesContainer, styles.aunNoTienesContainerTypo]}
      >
        <Text style={styles.aunNoTienes}>{`Aun no tienes cuenta? `}</Text>
        <Text style={styles.registarse}>Registarse</Text>
      </Text>
      <Text
        style={[styles.olvidasteLaContrasea, styles.aunNoTienesContainerTypo]}
      >
        Olvidaste la contraseña?
      </Text>
      <Text style={[styles.iniciarSesin, styles.googleTypo]}>
        Iniciar sesión
      </Text>
      <Text style={styles.text}>$ 1679.30</Text>
      <View style={[styles.eMailParent, styles.parentPosition]}>
        <Text style={[styles.eMail, styles.eMailTypo]}>E-mail</Text>
        <View style={styles.groupChild1ShadowBox} />
        <Text style={styles.eMailOTelefono}>e-mail o telefono</Text>
      </View>
      <View style={[styles.contraseaParent, styles.parentPosition]}>
        <Text style={[styles.contrasea, styles.eMailTypo]}>Contraseña</Text>
        <View style={styles.groupChild1ShadowBox} />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Text style={styles.eMailOTelefono}>contraseña</Text>
      </View>
      <Image
        style={[styles.loginItem, styles.loginChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-126.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.loginChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-127.png")}
      />
      <Image
        style={[styles.loginChild1, styles.loginChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-128.png")}
      />
      <Image
        style={[styles.loginChild2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-17955.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginChildPosition: {
    position: "absolute",
    top: 0,
  },
  groupLayout: {
    width: 324,
    position: "absolute",
  },
  groupWrapperLayout: {
    height: 57,
    width: 147,
    position: "absolute",
  },
  googleTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  innerGroupLayout: {
    height: 60,
    width: 248,
    position: "absolute",
  },
  aunNoTienesContainerTypo: {
    height: 10,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  parentPosition: {
    left: "7.2%",
    right: "6.4%",
    width: "86.4%",
    height: "11.45%",
    position: "absolute",
  },
  eMailTypo: {
    color: Color.subColor,
    fontSize: FontSize.size_base,
    left: "0.62%",
    top: "0%",
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    position: "absolute",
  },
  loginChild: {
    width: 375,
    left: 0,
    top: 0,
    height: 812,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowRadius: 37.17,
    elevation: 37.17,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.586957931518555,
      height: 18.586957931518555,
    },
    borderRadius: Border.br_9xl_5,
    height: 57,
    width: 147,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  google: {
    top: 24,
    left: 58,
    fontSize: 13,
    letterSpacing: 0.7,
    width: 84,
    height: 11,
  },
  superGIcon: {
    height: "53.01%",
    width: "20.55%",
    top: "24.56%",
    right: "70.07%",
    bottom: "22.43%",
    left: "9.38%",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 29,
    left: 88,
  },
  signInWith: {
    left: 125,
    color: Color.as,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 5,
    height: 1,
    left: 0,
  },
  groupParent: {
    top: 698,
    height: 86,
    left: 26,
  },
  groupInner: {
    backgroundColor: "#4ee476",
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(122, 129, 190, 0.16)",
    width: 248,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.586957931518555,
      height: 18.586957931518555,
    },
    borderRadius: Border.br_9xl_5,
    left: 0,
    top: 0,
  },
  ingresar: {
    height: "18.33%",
    width: "39.11%",
    top: "41.67%",
    left: "30.65%",
    fontSize: 15,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  groupContainer: {
    left: 0,
    top: 0,
  },
  loginInner: {
    top: 540,
    left: 65,
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(122, 129, 190, 0.16)",
    width: 248,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.586957931518555,
      height: 18.586957931518555,
    },
  },
  aunNoTienes: {
    color: Color.as,
  },
  registarse: {
    color: Color.mainColor,
  },
  aunNoTienesContainer: {
    top: 628,
    left: 78,
    width: 218,
  },
  olvidasteLaContrasea: {
    top: 498,
    width: 200,
    color: Color.mainColor,
    left: 88,
  },
  iniciarSesin: {
    top: 180,
    fontSize: 36,
    lineHeight: 43,
    width: 247,
    height: 40,
    left: 26,
  },
  text: {
    height: "2.96%",
    width: "27.69%",
    top: "36.95%",
    left: "10.91%",
    fontSize: 24,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  eMail: {
    width: "17.28%",
  },
  groupChild1ShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "30.11%",
    height: "69.89%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.586957931518555,
      height: 18.586957931518555,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  eMailOTelefono: {
    width: "63.58%",
    top: "53.76%",
    left: "6.17%",
    fontSize: FontSize.size_mid,
    color: Color.c4C4C4,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    position: "absolute",
  },
  eMailParent: {
    top: "30.91%",
    bottom: "57.64%",
  },
  contrasea: {
    width: "35.8%",
  },
  groupIcon: {
    height: "13.04%",
    width: "5.44%",
    top: "56.99%",
    right: "6.9%",
    bottom: "29.97%",
    left: "87.65%",
  },
  contraseaParent: {
    top: "45.94%",
    bottom: "42.61%",
  },
  loginItem: {
    width: 96,
    height: 96,
    left: 0,
    top: 0,
  },
  ellipseIcon: {
    width: 165,
    height: 165,
    left: 0,
    top: 0,
  },
  loginChild1: {
    left: 298,
    width: 181,
    height: 181,
    top: 0,
  },
  loginChild2: {
    height: "9.61%",
    width: "20.8%",
    top: "3.33%",
    right: "76%",
    bottom: "87.07%",
    left: "3.2%",
  },
  login: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default Login;
