import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const DetallesDeLaComida = () => {
  return (
    <View style={styles.detallesDeLaComida}>
      <Text style={styles.dorarMejorLa}>
        Dorar mejor la carne. Carne molida magra: carne costarricense usar 85%
        de angus magro. Ajo – use fresco picado. Especias: chile en polvo,
        comino, cebolla en polvo.
      </Text>
      <View style={[styles.groupParent, styles.groupPosition1]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-125.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-131.png")}
        />
        <View style={[styles.chileDulceParent, styles.maskGroupPosition]}>
          <Text
            style={[styles.chileDulce, styles.espinacasTypo]}
          >{`Chile dulce. `}</Text>
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupPosition]}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupPosition1]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-47.png")}
        />
        <View style={[styles.espinacasParent, styles.maskGroupPosition]}>
          <Text style={[styles.espinacas, styles.espinacasTypo]}>
            Espinacas
          </Text>
          <Image
            style={[styles.maskGroupIcon1, styles.maskGroupPosition]}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
        </View>
      </View>
      <Text style={styles.aadirMs}>Añadir más</Text>
      <View style={styles.groupView}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.groupChild2ShadowBox]} />
          <View style={styles.groupChild1} />
          <Image
            style={[styles.path3414Icon, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/path-3414.png")}
          />
        </View>
        <Text style={[styles.aadirAlCarrito, styles.text1Typo]}>
          Añadir al carrito
        </Text>
        <View style={styles.frameView} />
      </View>
      <View style={styles.maskGroupParent}>
        <Image
          style={[styles.maskGroupIcon2, styles.rectangleViewPosition]}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Text style={styles.tacosDeMolida}>Tacos de molida</Text>
        <View style={styles.signs1Parent}>
          <Image
            style={[styles.signs1Icon, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/signs-1.png")}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textTypo]}>4.5</Text>
            <Text style={[styles.text1, styles.text1Typo]}>(30+)</Text>
          </View>
        </View>
        <View style={[styles.crc2700Parent, styles.parentPosition]}>
          <Text style={[styles.crc2700, styles.crc2700Layout]}>CRC 2700</Text>
          <View style={styles.groupParent1}>
            <Image
              style={[styles.groupIcon, styles.text2Position]}
              contentFit="cover"
              source={require("../assets/group-17840.png")}
            />
            <View style={styles.groupPosition}>
              <View style={[styles.groupChild2, styles.groupPosition]} />
              <Image
                style={styles.groupChild3}
                contentFit="cover"
                source={require("../assets/group-17839.png")}
              />
            </View>
            <Text style={[styles.text2, styles.text2Position]}>02</Text>
          </View>
        </View>
        <Image
          style={[styles.groupChild4, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-17481.png")}
        />
        <Image
          style={[styles.groupChild5, styles.crc2700Layout]}
          contentFit="cover"
          source={require("../assets/group-18071.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    left: "4.53%",
    right: "6.33%",
    width: "89.13%",
    height: "4.82%",
    position: "absolute",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  maskGroupPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  espinacasTypo: {
    top: "25.53%",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibreMedium,
    position: "absolute",
  },
  rectangleLayout: {
    height: 60,
    left: 0,
    width: 208,
  },
  groupChild2ShadowBox: {
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  text1Typo: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    position: "absolute",
  },
  rectangleViewPosition: {
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    textAlign: "left",
  },
  crc2700Layout: {
    width: "23.67%",
    position: "absolute",
  },
  text2Position: {
    left: 39,
    position: "absolute",
  },
  groupPosition: {
    width: 31,
    height: 31,
    top: 0,
    left: 0,
    position: "absolute",
  },
  dorarMejorLa: {
    top: 385,
    lineHeight: 24,
    color: "#858992",
    width: 323,
    textAlign: "left",
    fontFamily: FontFamily.abhayaLibreMedium,
    fontSize: FontSize.size_mini,
    left: 22,
    position: "absolute",
  },
  groupChild: {
    height: "58.71%",
    width: "8.38%",
    top: "20.42%",
    right: "-0.22%",
    bottom: "20.87%",
    left: "91.85%",
    position: "absolute",
  },
  groupItem: {
    height: "53.61%",
    width: "6.28%",
    top: "33.19%",
    right: "0.07%",
    bottom: "13.21%",
    left: "93.64%",
    position: "absolute",
  },
  chileDulce: {
    left: "41.88%",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
  },
  maskGroupIcon: {
    width: "33.48%",
    right: "66.52%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  chileDulceParent: {
    width: "35%",
    right: "65%",
    left: "0%",
  },
  groupParent: {
    top: "65.39%",
    bottom: "29.78%",
  },
  espinacas: {
    left: "45.79%",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
  },
  maskGroupIcon1: {
    width: "36.61%",
    right: "63.39%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  espinacasParent: {
    width: "32.01%",
    right: "67.99%",
    left: "0%",
  },
  groupContainer: {
    top: "71.43%",
    bottom: "23.75%",
  },
  aadirMs: {
    top: 503,
    left: 20,
    fontSize: 18,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    textAlign: "left",
    position: "absolute",
  },
  rectangleView: {
    borderRadius: 29,
    backgroundColor: "#4ee476",
    shadowColor: "rgba(254, 114, 76, 0.2)",
    top: 0,
    position: "absolute",
    height: 60,
    left: 0,
    width: 208,
  },
  groupChild1: {
    top: 7,
    left: 7,
    borderRadius: 20,
    width: 50,
    height: 45,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  path3414Icon: {
    height: "32.08%",
    width: "9.58%",
    top: "32.08%",
    right: "79.64%",
    bottom: "35.85%",
    left: "10.78%",
    position: "absolute",
  },
  rectangleParent: {
    top: 117,
    position: "absolute",
  },
  aadirAlCarrito: {
    top: 139,
    left: 59,
    color: Color.colorWhite,
    width: 117,
    height: 21,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  frameView: {
    left: 43,
    height: 117,
    width: 100,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupView: {
    top: 580,
    left: 74,
    height: 177,
    width: 208,
    position: "absolute",
  },
  maskGroupIcon2: {
    left: 3,
    height: 206,
    width: 323,
  },
  tacosDeMolida: {
    top: 228,
    fontSize: 28,
    letterSpacing: -0.6,
    lineHeight: 32,
    width: 319,
    left: 0,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    textAlign: "left",
    position: "absolute",
  },
  signs1Icon: {
    height: "203.43%",
    width: "43.33%",
    top: "-38.14%",
    right: "68.03%",
    bottom: "-65.28%",
    left: "-11.36%",
    position: "absolute",
  },
  text: {
    color: Color.ffffff,
    fontSize: FontSize.size_sm,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text1: {
    left: "43.33%",
    color: Color.subColor,
    fontSize: FontSize.size_sm,
    top: "0%",
  },
  parent: {
    height: "94.44%",
    width: "69.52%",
    top: "5.56%",
    left: "30.48%",
  },
  signs1Parent: {
    height: "5.36%",
    width: "26.19%",
    top: "81.05%",
    right: "73.81%",
    bottom: "13.59%",
    left: "0%",
    position: "absolute",
  },
  crc2700: {
    height: "84.97%",
    top: "6.54%",
    fontSize: 17,
    color: Color.colorCoral,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    textAlign: "left",
    left: "0%",
  },
  groupIcon: {
    top: -22,
    width: 84,
    height: 91,
  },
  groupChild2: {
    borderRadius: 17,
    shadowColor: "#eef0f2",
    borderStyle: "solid",
    borderColor: Color.colorCoral,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  groupChild3: {
    top: 14,
    left: 10,
    width: 11,
    height: 2,
    position: "absolute",
  },
  text2: {
    top: 9,
    fontSize: 16,
    width: 21,
    height: 15,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupParent1: {
    left: 230,
    height: 31,
    width: 100,
    top: 0,
    position: "absolute",
  },
  crc2700Parent: {
    height: "9.12%",
    top: "90.88%",
    left: "0%",
    width: "100%",
    right: "0%",
  },
  groupChild4: {
    height: "17.28%",
    width: "17.6%",
    top: "2.09%",
    right: "1.4%",
    bottom: "80.63%",
    left: "81.01%",
    position: "absolute",
  },
  groupChild5: {
    height: "23.24%",
    right: "77.55%",
    bottom: "76.76%",
    left: "-1.21%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  maskGroupParent: {
    top: 27,
    width: 330,
    height: 336,
    left: 22,
    position: "absolute",
  },
  detallesDeLaComida: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default DetallesDeLaComida;
