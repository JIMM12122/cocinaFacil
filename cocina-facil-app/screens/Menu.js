import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Menu = () => {
  return (
    <View style={styles.menu}>
      <Image
        style={styles.restutrntProfile1}
        contentFit="cover"
        source={require("../assets/restutrnt-profile-1.png")}
      />
      <View style={[styles.homeScreendd1, styles.groupItemShadowBox]} />
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.misOrdenesParent, styles.groupItemPosition]}>
          <Text style={[styles.misOrdenes, styles.salirFlexBox]}>
            Mis Ordenes
          </Text>
          <Image
            style={[styles.iconlybulkdocument, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulkdocument.png")}
          />
        </View>
        <View style={styles.miPerfilParent}>
          <Text style={[styles.misOrdenes, styles.salirFlexBox]}>
            Mi perfil
          </Text>
          <Image
            style={[styles.iconlybulkprofile, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulkprofile.png")}
          />
        </View>
        <View style={[styles.direccionesDeEntregaParent, styles.parentLayout]}>
          <Text style={[styles.misOrdenes, styles.salirFlexBox]}>
            Direcciones de entrega
          </Text>
          <Image
            style={[styles.iconlybulklocation, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulklocation.png")}
          />
        </View>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/group-18129.png")}
        />
        <View style={styles.contactanosParent}>
          <Text style={[styles.misOrdenes, styles.salirFlexBox]}>
            Contactanos
          </Text>
          <Image
            style={[styles.iconlybulkmessage, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulkmessage.png")}
          />
        </View>
        <View style={styles.configuracinParent}>
          <Text style={[styles.misOrdenes, styles.salirFlexBox]}>
            Configuración
          </Text>
          <Image
            style={[styles.iconlybulksetting, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulksetting.png")}
          />
        </View>
        <View style={styles.ayudaFaqsParent}>
          <Text
            style={[styles.ayudaFaqs, styles.salirFlexBox]}
          >{`Ayuda & FAQs`}</Text>
          <View
            style={[styles.iconlybulkhelps, styles.iconlybulkhelpsPosition1]}
          >
            <View
              style={[styles.iconlybulkhelpsChild, styles.vectorIconPosition]}
            />
            <View
              style={[
                styles.iconlybulkhelpsItem,
                styles.iconlybulkhelpsPosition,
              ]}
            />
            <View
              style={[
                styles.iconlybulkhelpsInner,
                styles.iconlybulkhelpsPosition,
              ]}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.salir, styles.salirFlexBox]}>{`SALIR `}</Text>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/group-18072.png")}
        />
      </View>
      <View style={[styles.homeScreen2, styles.homeLayout]} />
      <Text style={[styles.juanIsaiMorales, styles.salirFlexBox]}>
        Juan Isai Morales
      </Text>
      <Text style={[styles.isaiejegmailcom, styles.mtodosDePagoFlexBox]}>
        isaieje@gmail.com
      </Text>
      <Text style={[styles.mtodosDePago, styles.mtodosDePagoFlexBox]}>
        Métodos de pago
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: -25,
      height: 19,
    },
  },
  parentLayout: {
    width: 207,
    position: "absolute",
  },
  groupItemPosition: {
    top: 0,
    left: 0,
  },
  salirFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconlybulkhelpsPosition1: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  vectorIconPosition: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconlybulkhelpsPosition: {
    left: "25%",
    right: "20%",
    top: "10%",
    width: "55%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupItemLayout: {
    height: 43,
    width: 164,
    position: "absolute",
  },
  homeLayout: {
    borderRadius: Border.br_9xl,
    position: "absolute",
  },
  mtodosDePagoFlexBox: {
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  restutrntProfile1: {
    top: 149,
    left: 222,
    borderRadius: 21,
    width: 237,
    height: 514,
    opacity: 0.5,
    position: "absolute",
  },
  homeScreendd1: {
    top: 104,
    left: 256,
    shadowColor: "#f2eaea",
    shadowRadius: 99,
    elevation: 99,
    width: 279,
    height: 604,
    borderRadius: Border.br_9xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    shadowOffset: {
      width: -25,
      height: 19,
    },
  },
  misOrdenes: {
    top: 3,
    left: 37,
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_base,
  },
  iconlybulkdocument: {
    width: "17.83%",
    right: "82.17%",
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    height: "100%",
    maxWidth: "100%",
  },
  misOrdenesParent: {
    width: 129,
    height: 23,
    left: 0,
    position: "absolute",
  },
  iconlybulkprofile: {
    width: "23%",
    right: "77%",
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    height: "100%",
    maxWidth: "100%",
  },
  miPerfilParent: {
    top: 56,
    width: 100,
    height: 23,
    left: 0,
    position: "absolute",
  },
  iconlybulklocation: {
    width: "11.11%",
    right: "88.89%",
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    height: "100%",
    maxWidth: "100%",
  },
  direccionesDeEntregaParent: {
    top: 112,
    height: 23,
    left: 0,
  },
  groupChild: {
    top: 129,
    width: 158,
    height: 100,
    left: 0,
    position: "absolute",
  },
  iconlybulkmessage: {
    width: "17.56%",
    right: "82.44%",
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    height: "100%",
    maxWidth: "100%",
  },
  contactanosParent: {
    top: 224,
    width: 131,
    height: 23,
    left: 0,
    position: "absolute",
  },
  iconlybulksetting: {
    width: "16.43%",
    right: "83.57%",
    left: "0%",
    top: "0%",
    position: "absolute",
    bottom: "0%",
    height: "100%",
    maxWidth: "100%",
  },
  configuracinParent: {
    top: 280,
    width: 140,
    height: 23,
    left: 0,
    position: "absolute",
  },
  ayudaFaqs: {
    top: 1,
    left: 35,
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_base,
  },
  iconlybulkhelpsChild: {
    borderRadius: 7,
    backgroundColor: "#9796a1",
  },
  iconlybulkhelpsItem: {
    height: "70%",
    bottom: "20%",
  },
  iconlybulkhelpsInner: {
    height: "55%",
    bottom: "35%",
  },
  vectorIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconlybulkhelps: {
    height: "95.83%",
    width: "13.5%",
    right: "86.5%",
    bottom: "4.17%",
    left: "0%",
    top: "0%",
  },
  ayudaFaqsParent: {
    top: 336,
    left: 2,
    width: 142,
    height: 20,
    position: "absolute",
  },
  groupParent: {
    top: 231,
    height: 356,
    left: 22,
  },
  maskGroupIcon: {
    top: 2,
    width: 156,
    height: 172,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    borderRadius: 29,
    backgroundColor: "#ff0000",
    shadowColor: "rgba(254, 114, 76, 0.2)",
    shadowRadius: 30,
    elevation: 30,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: -25,
      height: 19,
    },
  },
  salir: {
    top: 15,
    left: 44,
    lineHeight: 16,
    color: Color.colorWhite,
    width: 114,
    height: 16,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_base,
  },
  groupInner: {
    top: 9,
    left: 9,
    width: 26,
    height: 26,
    position: "absolute",
  },
  rectangleParent: {
    top: 737,
    left: 22,
  },
  homeScreen2: {
    top: 118,
    left: 268,
    width: 280,
    height: 608,
    opacity: 0.85,
  },
  juanIsaiMorales: {
    top: 145,
    fontSize: 20,
    width: 179,
    height: 4,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    left: 22,
  },
  isaiejegmailcom: {
    top: 185,
    left: 29,
    fontSize: 14,
    color: "#746f6f",
    alignItems: "flex-end",
    width: 126,
    height: 9,
    fontFamily: FontFamily.interRegular,
  },
  mtodosDePago: {
    top: 399,
    left: 62,
    alignItems: "center",
    width: 154,
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_base,
    height: 23,
  },
  menu: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Menu;
