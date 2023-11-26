import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddNewAddress = () => {
  return (
    <View style={styles.addNewAddress}>
      <View style={[styles.addNewAddressChild, styles.groupChildPosition]} />
      <View style={[styles.fullNameParent, styles.parentPosition]}>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Full name</Text>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
      </View>
      <View style={[styles.cantonParent, styles.parentPosition]}>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Canton</Text>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.selecionarCanton, styles.selecionarCantonTypo]}>
          Selecionar canton
        </Text>
      </View>
      <View style={[styles.distritoParent, styles.parentPosition]}>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Distrito</Text>
        <View style={[styles.groupInner, styles.groupChildLayout]} />
        <Text style={[styles.selecionarCanton, styles.selecionarCantonTypo]}>
          Seleccionar distrito
        </Text>
      </View>
      <View style={[styles.direccionExactaParent, styles.parentPosition]}>
        <Text style={[styles.direccionExacta, styles.fullNameTypo]}>
          Direccion exacta.
        </Text>
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <Text style={[styles.direccionExacta1, styles.selecionarCantonTypo]}>
          Direccion exacta
        </Text>
      </View>
      <View style={[styles.addNewAddressInner, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
            <Text style={[styles.guardar, styles.guardarTypo]}>Guardar</Text>
          </View>
        </View>
      </View>
      <View style={styles.mobileNumberParent}>
        <Text style={[styles.mobileNumber, styles.fullNameTypo]}>
          Mobile number
        </Text>
        <View style={styles.rectangleWrapper}>
          <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
        </View>
      </View>
      <Text style={[styles.aadirNuevaDireccin, styles.guardarTypo]}>
        Añadir nueva dirección
      </Text>
      <Image
        style={[styles.addNewAddressItem, styles.addLayout]}
        contentFit="cover"
        source={require("../assets/group-17961.png")}
      />
      <Image
        style={[styles.groupIcon, styles.addLayout]}
        contentFit="cover"
        source={require("../assets/group-17962.png")}
      />
      <Image
        style={[styles.addNewAddressChild1, styles.addLayout]}
        contentFit="cover"
        source={require("../assets/group-18071.png")}
      />
      <Text
        style={[styles.juanIsaiMorales, styles.textTypo]}
      >{`Juan Isai morales `}</Text>
      <Text style={[styles.text, styles.textTypo]}>7040 2496</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  parentPosition: {
    left: "6.93%",
    right: "6.67%",
    width: "86.4%",
    height: "11.45%",
    position: "absolute",
  },
  fullNameTypo: {
    textAlign: "left",
    color: Color.subColor,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_base,
    left: "0.62%",
    top: "0%",
    position: "absolute",
  },
  groupChildLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  selecionarCantonTypo: {
    fontSize: FontSize.size_mid,
    left: "6.17%",
    width: "46.91%",
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeRegular,
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    width: 248,
  },
  groupChildShadowBox: {
    elevation: 30,
    shadowRadius: 30,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    position: "absolute",
  },
  guardarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  addLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeRegular,
    position: "absolute",
  },
  addNewAddressChild: {
    width: 375,
    position: "absolute",
    height: 812,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  fullName: {
    width: "32.72%",
  },
  groupChild: {
    borderColor: Color.colorWhitesmoke,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: "30.11%",
    height: "69.89%",
    position: "absolute",
  },
  fullNameParent: {
    top: "13.42%",
    bottom: "75.12%",
  },
  groupItem: {
    borderColor: Color.colorWhitesmoke,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: "30.11%",
    height: "69.89%",
    position: "absolute",
  },
  selecionarCanton: {
    top: "55.91%",
    color: Color.ffffff,
  },
  cantonParent: {
    top: "42.24%",
    bottom: "46.31%",
  },
  groupInner: {
    borderColor: Color.colorWhitesmoke,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: "30.11%",
    height: "69.89%",
    position: "absolute",
  },
  distritoParent: {
    top: "56.65%",
    bottom: "31.9%",
  },
  direccionExacta: {
    width: "73.76%",
  },
  rectangleView: {
    borderColor: Color.colorWhitesmoke,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: "30.11%",
    height: "69.89%",
    position: "absolute",
  },
  direccionExacta1: {
    top: "53.76%",
    color: Color.c4C4C4,
  },
  direccionExactaParent: {
    top: "71.06%",
    bottom: "17.49%",
  },
  groupChild1: {
    borderRadius: 29,
    backgroundColor: "#4ee476",
    shadowColor: "rgba(254, 114, 76, 0.25)",
    height: 60,
    width: 248,
    left: 0,
    top: 0,
  },
  guardar: {
    height: "18.33%",
    width: "39.11%",
    top: "41.67%",
    left: "30.65%",
    fontSize: 15,
    letterSpacing: 1.2,
    color: Color.colorWhite,
  },
  groupWrapper: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  addNewAddressInner: {
    top: 709,
    left: 56,
    position: "absolute",
  },
  mobileNumber: {
    width: "39.2%",
  },
  groupChild2: {
    height: "100%",
    shadowColor: "rgba(211, 209, 216, 0.25)",
    borderColor: "#fe724c",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.colorWhite,
    elevation: 30,
    shadowRadius: 30,
    top: "0%",
  },
  rectangleWrapper: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "30.11%",
    height: "69.89%",
    position: "absolute",
    width: "100%",
  },
  mobileNumberParent: {
    top: "27.83%",
    right: "6.4%",
    bottom: "60.71%",
    left: "7.2%",
    width: "86.4%",
    height: "11.45%",
    position: "absolute",
  },
  aadirNuevaDireccin: {
    top: "5.79%",
    left: "23.47%",
    fontSize: 18,
    color: Color.ffffff,
  },
  addNewAddressItem: {
    top: "50.29%",
    bottom: "48.28%",
    left: "84.53%",
    right: "13.6%",
    width: "1.87%",
    height: "1.44%",
    maxWidth: "100%",
  },
  groupIcon: {
    top: "65.27%",
    bottom: "33.29%",
    left: "84.53%",
    right: "13.6%",
    width: "1.87%",
    height: "1.44%",
    maxWidth: "100%",
  },
  addNewAddressChild1: {
    height: "9.61%",
    width: "20.8%",
    top: "3.33%",
    right: "76.27%",
    bottom: "87.07%",
    left: "2.93%",
  },
  juanIsaiMorales: {
    top: 145,
    left: 44,
    width: 223,
    height: 35,
  },
  text: {
    top: 271,
    left: 47,
    width: 164,
    height: 16,
  },
  addNewAddress: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default AddNewAddress;
