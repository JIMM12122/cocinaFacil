import * as React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <View style={styles.signUpChild} />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <View style={[styles.rectangleParent, styles.groupWrapperLayout]}>
            <View style={styles.groupChild} />
            <Text style={[styles.google, styles.googleFlexBox]}>GOOGLE</Text>
            <Image
              style={[styles.superGIcon, styles.iconLayout]}
              contentFit="cover"
              source={""}
            />
          </View>
        </View>
        <Text style={[styles.signUpWith, styles.googleFlexBox]}>
          Sign up with
        </Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={""}
        />
      </View>
      <Text style={[styles.registrarse, styles.googleFlexBox]}>
        Registrarse
      </Text>
      <View style={styles.name}>
        <View style={[styles.nombreParent, styles.nombreParentPosition]}>
          <Text style={styles.nombre}>Nombre completo</Text>
          <View style={styles.groupInner} />
        </View>
        <Text style={[styles.juanIsaiMorales, styles.juanIsaiMoralesTypo]}>
          JUAN ISAI MORALES
        </Text>
      </View>
      <Text style={[styles.text, styles.textTypo]}>$ 1679.30</Text>
      <View style={[styles.signUpInner, styles.signUpInnerLayout]}>
        <View style={[styles.groupContainer, styles.signUpInnerLayout]}>
          <View style={[styles.groupContainer, styles.signUpInnerLayout]}>
            <View style={[styles.rectangleView, styles.signUpInnerLayout]} />
            <Text style={[styles.registarse, styles.registarseTypo]}>
              Registarse
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.yaTienesUnaContainer, styles.registarseTypo]}>
        <Text style={styles.yaTienesUna}>{`Ya tienes una cuenta? `}</Text>
        <Text style={styles.iniciarSesion}>Iniciar sesion</Text>
      </Text>
      <View style={[styles.password, styles.emailLayout]}>
        <Text style={[styles.password1, styles.eMailPosition]}>Password</Text>
        <View style={[styles.passwordChild, styles.childShadowBox]} />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={""}
        />
        <Image
          style={styles.passwordItem}
          contentFit="cover"
          source={""}
        />
      </View>
      <Image
        style={styles.signUpItem}
        contentFit="cover"
        source={""}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={""}
      />
      <Image
        style={styles.signUpChild1}
        contentFit="cover"
        source={""}
      />
      <View style={[styles.email, styles.emailLayout]}>
        <Text style={[styles.eMail, styles.eMailPosition]}>E-mail</Text>
        <View style={[styles.rectangleContainer, styles.passwordChildPosition]}>
          <View style={[styles.groupChild1, styles.childShadowBox]} />
          <Text style={[styles.isaiejegmailcom, styles.textTypo]}>
            isaieje@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 324,
    position: "absolute",
  },
  groupWrapperLayout: {
    height: 57,
    width: 147,
    position: "absolute",
  },
  googleFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nombreParentPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  juanIsaiMoralesTypo: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  textTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  signUpInnerLayout: {
    height: 60,
    width: 248,
    position: "absolute",
  },
  registarseTypo: {
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  emailLayout: {
    width: "86.4%",
    height: "11.45%",
    position: "absolute",
  },
  eMailPosition: {
    left: "0.62%",
    color: Color.subColor,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_base,
    top: "0%",
    textAlign: "left",
    position: "absolute",
  },
  childShadowBox: {
    borderColor: Color.colorWhitesmoke,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.586957931518555,
      height: 18.586957931518555,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  passwordChildPosition: {
    top: "30.11%",
    height: "69.89%",
  },
  signUpChild: {
    left: 1,
    width: 375,
    top: 0,
    position: "absolute",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  groupChild: {
    shadowRadius: 37.17,
    elevation: 37.17,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.586957931518555,
      height: 18.586957931518555,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    borderRadius: Border.br_9xl_5,
    left: 0,
    height: 57,
    width: 147,
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
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
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
    left: 89,
  },
  signUpWith: {
    left: 122,
    color: Color.as,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    top: 0,
  },
  groupItem: {
    top: 5,
    height: 1,
    left: 0,
  },
  groupParent: {
    top: 700,
    left: 19,
    height: 86,
  },
  registrarse: {
    top: 98,
    left: 26,
    fontSize: 36,
    lineHeight: 43,
    width: 212,
    height: 42,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  nombre: {
    width: "45.7%",
    color: Color.subColor,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    textAlign: "left",
    position: "absolute",
  },
  groupInner: {
    height: "72.22%",
    width: "99.39%",
    top: "27.78%",
    left: "0.61%",
    shadowRadius: 30,
    elevation: 30,
    borderColor: Color.colorCoral,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    bottom: "0%",
    right: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.586957931518555,
      height: 18.586957931518555,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  nombreParent: {
    top: "0%",
    height: "100%",
  },
  juanIsaiMorales: {
    top: 41,
    left: 15,
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    width: 194,
    height: 33,
    textAlign: "left",
    position: "absolute",
  },
  name: {
    height: "11.08%",
    width: "86.93%",
    top: "23.28%",
    bottom: "65.64%",
    left: "6.67%",
    right: "6.4%",
    position: "absolute",
  },
  text: {
    height: "2.96%",
    width: "27.69%",
    top: "42.12%",
    left: "10.91%",
    color: Color.colorWhite,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  rectangleView: {
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
  registarse: {
    height: "18.33%",
    width: "39.11%",
    top: "41.67%",
    left: "30.65%",
    fontSize: 15,
    letterSpacing: 1.2,
    color: Color.colorWhite,
  },
  groupContainer: {
    left: 0,
    top: 0,
  },
  signUpInner: {
    top: 541,
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
  yaTienesUna: {
    color: Color.as,
  },
  iniciarSesion: {
    color: Color.colorCoral,
  },
  yaTienesUnaContainer: {
    top: 634,
    left: 41,
    width: 256,
    height: 10,
    fontSize: FontSize.size_sm,
  },
  password1: {
    width: "23.46%",
  },
  passwordChild: {
    top: "30.11%",
    height: "69.89%",
  },
  groupIcon: {
    height: "13.04%",
    width: "5.44%",
    top: "56.99%",
    right: "6.9%",
    bottom: "29.97%",
    left: "87.65%",
  },
  passwordItem: {
    top: 57,
    left: 20,
    width: 91,
    height: 7,
    position: "absolute",
  },
  password: {
    top: "51.11%",
    bottom: "37.44%",
    left: "7.2%",
    right: "6.4%",
  },
  signUpItem: {
    width: 96,
    height: 96,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ellipseIcon: {
    width: 165,
    height: 165,
    left: 0,
    top: 0,
    position: "absolute",
  },
  signUpChild1: {
    left: 298,
    width: 181,
    height: 181,
    top: 0,
    position: "absolute",
  },
  eMail: {
    width: "17.28%",
  },
  groupChild1: {
    top: "0%",
    height: "100%",
  },
  isaiejegmailcom: {
    top: 10,
    left: 23,
    width: 260,
    height: 38,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  rectangleContainer: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  email: {
    top: "37.93%",
    right: "6.13%",
    bottom: "50.62%",
    left: "7.47%",
  },
  signUp: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;
