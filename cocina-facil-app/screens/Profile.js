import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.profileChild, styles.juanisaPosition]} />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.profileInner, styles.profileInnerLayout]}>
        <View style={[styles.groupWrapper, styles.profileInnerLayout]}>
          <View style={[styles.groupWrapper, styles.profileInnerLayout]}>
            <View style={styles.groupChild} />
            <Text style={[styles.save, styles.saveTypo]}>SAVE</Text>
          </View>
        </View>
      </View>
      <View style={styles.juanisaParent}>
        <Text style={[styles.juanisa, styles.juanisaClr]}>Juanisa</Text>
        <Text style={styles.editarPerfil}>Editar Perfil</Text>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.fullNameParent}>
          <Text style={[styles.fullName, styles.eMailTypo]}>Full name</Text>
          <View style={styles.groupItem} />
        </View>
        <Text style={[styles.eMail, styles.eMailPosition]}>E-mail</Text>
        <View style={[styles.groupInner, styles.groupInnerShadowBox]} />
        <Text style={[styles.phoneNumber, styles.eMailPosition]}>
          Phone Number
        </Text>
        <View style={[styles.rectangleView, styles.groupInnerShadowBox]} />
        <Text style={styles.text}>+506 7040 2496</Text>
      </View>
      <View style={styles.profileItem} />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-129.png")}
      />
      <Image
        style={styles.profileChild1}
        contentFit="cover"
        source={require("../assets/ellipse-130.png")}
      />
      <Image
        style={[styles.profileChild2, styles.eMailPosition]}
        contentFit="cover"
        source={require("../assets/group-18071.png")}
      />
      <Text
        style={[styles.juanIsaiMorales, styles.juanisaClr]}
      >{`Juan Isai Morales 
`}</Text>
      <Text style={styles.isaiejegmailcom}>isaieje@gmail.com</Text>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={styles.profileChild3}
        contentFit="cover"
        source={require("../assets/group-18153.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  juanisaPosition: {
    left: 0,
    top: 0,
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profileInnerLayout: {
    height: 60,
    width: 248,
    position: "absolute",
  },
  saveTypo: {
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  juanisaClr: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  eMailTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.subColor,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  eMailPosition: {
    left: "2.93%",
    position: "absolute",
  },
  groupInnerShadowBox: {
    borderColor: Color.colorWhitesmoke,
    height: "19.29%",
    borderWidth: 1,
    borderStyle: "solid",
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    left: "0%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  profileChild: {
    width: 375,
    position: "absolute",
    height: 812,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupIcon: {
    height: "35.1%",
    width: "100.8%",
    right: "-0.8%",
    bottom: "64.9%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: 29,
    backgroundColor: Color.colorCoral,
    shadowColor: "rgba(254, 114, 76, 0.25)",
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    height: 60,
    width: 248,
    left: 0,
    top: 0,
    position: "absolute",
  },
  save: {
    height: "18.33%",
    width: "39.11%",
    top: "41.67%",
    left: "30.65%",
    fontSize: 15,
    letterSpacing: 1.2,
    color: Color.colorWhite,
    position: "absolute",
  },
  groupWrapper: {
    left: 0,
    top: 0,
  },
  profileInner: {
    top: 719,
    left: 65,
    display: "none",
  },
  juanisa: {
    height: 20,
    width: 140,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    left: 0,
    top: 0,
  },
  editarPerfil: {
    top: 30,
    left: 30,
    fontSize: 14,
    color: Color.subColor,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "center",
    position: "absolute",
  },
  juanisaParent: {
    top: 227,
    left: 118,
    height: 47,
    width: 140,
    position: "absolute",
  },
  fullName: {
    width: "31.27%",
    left: "2.65%",
    textAlign: "left",
    top: "0%",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupItem: {
    height: "69.89%",
    top: "30.11%",
    borderColor: Color.colorCoral,
    borderWidth: 1,
    borderStyle: "solid",
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderRadius: Border.br_3xs,
    bottom: "0%",
    right: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    left: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  fullNameParent: {
    height: "27.6%",
    bottom: "72.4%",
    right: "0.59%",
    width: "99.41%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  eMail: {
    width: "16.42%",
    top: "36.2%",
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.subColor,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  groupInner: {
    top: "44.51%",
    bottom: "36.2%",
    borderColor: Color.colorWhitesmoke,
    height: "19.29%",
    right: "0%",
    width: "100%",
  },
  phoneNumber: {
    width: "34.02%",
    top: "72.4%",
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.subColor,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  rectangleView: {
    top: "80.71%",
    bottom: "0%",
    borderColor: Color.colorWhitesmoke,
    height: "19.29%",
    right: "0.59%",
    width: "99.41%",
  },
  text: {
    top: "87.83%",
    left: "4.69%",
    fontSize: 17,
    color: Color.ffffff,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  groupParent: {
    height: "41.5%",
    width: "90.93%",
    top: "40.39%",
    right: "4.27%",
    bottom: "18.1%",
    left: "4.8%",
    position: "absolute",
  },
  profileItem: {
    top: 111,
    left: 133,
    borderRadius: 54,
    width: 106,
    height: 102,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  ellipseIcon: {
    top: 196,
    left: 207,
    width: 17,
    height: 17,
    position: "absolute",
  },
  profileChild1: {
    top: 199,
    left: 210,
    width: 11,
    height: 11,
    position: "absolute",
  },
  profileChild2: {
    height: "9.61%",
    width: "20.8%",
    top: "3.33%",
    right: "76.27%",
    bottom: "87.07%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  juanIsaiMorales: {
    top: 382,
    left: 32,
    fontFamily: FontFamily.interRegular,
    width: 224,
    height: 30,
    textAlign: "left",
  },
  isaiejegmailcom: {
    top: 483,
    left: 35,
    fontSize: 24,
    width: 256,
    height: 35,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 85,
    left: 103,
    width: 169,
    height: 172,
    position: "absolute",
  },
  profileChild3: {
    top: 178,
    left: 186,
    width: 57,
    height: 57,
    position: "absolute",
  },
  profile: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;
