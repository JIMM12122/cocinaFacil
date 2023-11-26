import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color } from "../GlobalStyles";

const Rating = () => {
  return (
    <View style={styles.rating}>
      <View style={styles.ordenEnviadaParent}>
        <Text style={[styles.ordenEnviada, styles.ordenTypo]}>
          Orden enviada
        </Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-108.png")}
        />
      </View>
      <View style={[styles.ratingChild, styles.ratingChildPosition]} />
      <View style={styles.signs1Parent}>
        <Image
          style={[styles.signs1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/signs-1.png")}
        />
        <Image
          style={[styles.signs1Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/signs-11.png")}
        />
        <Image
          style={[styles.signs1Icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/signs-12.png")}
        />
        <Image
          style={[styles.signs1Icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/signs-13.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Text style={[styles.buena, styles.buenaTypo]}>Buena</Text>
      </View>
      <Text style={[styles.escribirReview, styles.ratingChild1Layout]}>
        Escribir review...
      </Text>
      <View style={styles.ratingItem} />
      <Text style={[styles.evalaEstOrden, styles.ordenTypo]}>
        Evalúa está orden
      </Text>
      <View style={[styles.ratingInner, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={[styles.enviar, styles.enviarFlexBox]}>Enviar</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.ratingChildPosition]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-136.png")}
      />
      <Image
        style={[styles.ratingChild1, styles.ratingChild1Layout]}
        contentFit="cover"
        source={require("../assets/group-18068.png")}
      />
      <Image
        style={[styles.ratingChild2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-18071.png")}
      />
      <Text style={[styles.pizzaNapolitana, styles.enviarFlexBox]}>
        Pizza Napolitana
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ordenTypo: {
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  ratingChildPosition: {
    width: 323,
    left: 26,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buenaTypo: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
  },
  ratingChild1Layout: {
    height: 15,
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    width: 248,
    position: "absolute",
  },
  enviarFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  ordenEnviada: {
    top: "0%",
    left: "8.57%",
    fontSize: 14,
    color: "#53d776",
  },
  groupChild: {
    top: 4,
    width: 5,
    height: 5,
    left: 0,
    position: "absolute",
  },
  ordenEnviadaParent: {
    height: "2.09%",
    width: "28%",
    top: "33.99%",
    right: "37.33%",
    bottom: "63.92%",
    left: "34.67%",
    position: "absolute",
  },
  ratingChild: {
    top: 494,
    borderRadius: 10,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    shadowRadius: 45,
    elevation: 45,
    borderColor: "#eee",
    borderWidth: 1,
    height: 168,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    backgroundColor: Color.colorWhite,
    width: 323,
    left: 26,
  },
  signs1Icon: {
    right: "81.43%",
    left: "-4.31%",
    bottom: "-19.03%",
    top: "43.48%",
    width: "22.88%",
    height: "75.55%",
    maxWidth: "100%",
  },
  signs1Icon1: {
    right: "60.31%",
    left: "16.81%",
    bottom: "-19.03%",
    top: "43.48%",
    width: "22.88%",
    height: "75.55%",
    maxWidth: "100%",
  },
  signs1Icon2: {
    right: "39.21%",
    left: "37.91%",
    bottom: "-19.03%",
    top: "43.48%",
    width: "22.88%",
    height: "75.55%",
    maxWidth: "100%",
  },
  signs1Icon3: {
    right: "18.11%",
    left: "59.01%",
    bottom: "-19.03%",
    top: "43.48%",
    width: "22.88%",
    height: "75.55%",
    maxWidth: "100%",
  },
  groupIcon: {
    height: "46.27%",
    width: "14.26%",
    top: "53.73%",
    right: "0%",
    bottom: "0%",
    left: "85.74%",
  },
  buena: {
    left: 84,
    fontSize: 22,
    color: "#fe724c",
    top: 0,
    position: "absolute",
  },
  signs1Parent: {
    height: "8.25%",
    width: "60.66%",
    top: "47.17%",
    right: "19.61%",
    bottom: "44.58%",
    left: "19.73%",
    position: "absolute",
  },
  escribirReview: {
    top: 518,
    left: 48,
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.2)",
    width: 125,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
  },
  ratingItem: {
    top: 514,
    left: 42,
    borderColor: "#ffc529",
    borderRightWidth: 1,
    width: 1,
    height: 25,
    borderStyle: "solid",
    position: "absolute",
  },
  evalaEstOrden: {
    top: "41.63%",
    left: "28.27%",
    fontSize: 18,
    color: Color.ffffff,
  },
  groupItem: {
    borderRadius: 29,
    backgroundColor: "#4ee476",
    shadowColor: "rgba(254, 114, 76, 0.25)",
    shadowRadius: 30,
    elevation: 30,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    left: 0,
  },
  enviar: {
    height: "18.33%",
    width: "39.11%",
    top: "40%",
    left: "29.84%",
    fontSize: 15,
    letterSpacing: 1.2,
    color: Color.colorWhite,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    textAlign: "center",
  },
  groupWrapper: {
    top: 0,
    left: 0,
  },
  ratingInner: {
    top: 719,
    left: 65,
  },
  maskGroupIcon: {
    top: 27,
    height: 146,
  },
  vectorIcon: {
    top: 199,
    left: 207,
    width: 8,
    height: 6,
    position: "absolute",
  },
  ellipseIcon: {
    top: 184,
    left: 192,
    width: 45,
    height: 45,
    position: "absolute",
  },
  ratingChild1: {
    top: 197,
    left: 208,
    width: 15,
  },
  ratingChild2: {
    height: "9.61%",
    width: "20.8%",
    top: "3.33%",
    right: "74.4%",
    bottom: "87.07%",
    left: "4.8%",
  },
  pizzaNapolitana: {
    top: 235,
    left: 71,
    fontSize: 20,
    fontFamily: FontFamily.interRegular,
    color: "#000",
    width: 230,
    height: 10,
  },
  rating: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Rating;
