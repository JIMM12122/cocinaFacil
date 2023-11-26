import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image
        style={[styles.image119Icon, styles.image119IconPosition]}
        contentFit="cover"
        source={require("../assets/image-119.png")}
      />
      <View style={[styles.splashInner, styles.imagenLayout]}>
        <View
          style={[styles.imagenDeWhatsapp20230918Wrapper, styles.imagenLayout]}
        >
          <Image
            style={[
              styles.imagenDeWhatsapp20230918Wrapper,
              styles.imagenLayout,
            ]}
            contentFit="cover"
            source={require("../assets/imagen-de-whatsapp-20230918-a-las-2135-1.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.imagenDeWhatsapp202309181, styles.imagenLayout]}
        contentFit="cover"
        source={require("../assets/imagen-de-whatsapp-20230918-a-las-2135-11.png")}
      />
      <View style={styles.rectangle} />
      <View style={[styles.barsStatusBarIphoneL, styles.image119IconPosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image style={styles.capIcon} source={require("../assets/cap.svg")} />
          <View style={styles.capacity} />
        </View>
        <Image style={styles.wifiIcon} source={require("../assets/wifi.svg")} />
        <Image
          style={styles.cellularConnectionIcon}
          source={require("../assets/cellular-connection.svg")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.iphoneXFrame}
        source={require("../assets/iphone-x-frame.svg")}
      />
      <Text style={[styles.unProductoDe, styles.timeTypo]}>
        Un producto de AIAPZ©
      </Text>
      <View style={[styles.splashChild, styles.splashChildLayout]} />
      <View style={[styles.splashItem, styles.splashItemLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.splashChildLayout]}
        source={require("../assets/ellipse-129.svg")}
      />
      <View style={[styles.ellipseView, styles.splashItemLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  image119IconPosition: {
    display: "none",
    position: "absolute",
  },
  imagenLayout: {
    height: 51,
    width: 329,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  splashChildLayout: {
    height: 96,
    width: 96,
    position: "absolute",
  },
  splashItemLayout: {
    height: 165,
    width: 165,
    backgroundColor: Color.colorHoneydew,
    position: "absolute",
  },
  image119Icon: {
    top: 13,
    left: 118,
    width: 332,
    height: 332,
  },
  imagenDeWhatsapp20230918Wrapper: {
    left: 0,
    top: 0,
  },
  splashInner: {
    left: 23,
    top: 298,
    width: 329,
  },
  imagenDeWhatsapp202309181: {
    left: 15,
    top: 298,
    width: 329,
  },
  rectangle: {
    marginLeft: -66.5,
    bottom: 16,
    left: "50%",
    borderRadius: 100,
    width: 134,
    height: 5,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  border: {
    borderRadius: 3,
    borderColor: Color.colorGray,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    borderRadius: 1,
    backgroundColor: Color.colorGray,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 39,
    width: 0,
    height: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    letterSpacing: 0,
    fontStyle: "italic",
    fontFamily: FontFamily.aBeeZeeItalic,
    color: Color.colorGray,
    width: 54,
    left: 0,
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
    width: 54,
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    top: -1,
    left: -1,
    height: 44,
    width: 375,
  },
  iphoneXFrame: {
    width: 375,
    height: 812,
  },
  unProductoDe: {
    top: 629,
    left: 77,
    lineHeight: 18,
    fontFamily: FontFamily.interRegular,
    color: "#000",
    width: 227,
    height: 40,
  },
  splashChild: {
    top: 83,
    borderColor: "#3bdc4b",
    borderWidth: 36,
    left: 304,
    borderStyle: "solid",
  },
  splashItem: {
    left: 304,
    top: 0,
  },
  ellipseIcon: {
    top: 742,
    left: 78,
  },
  ellipseView: {
    top: 681,
    left: -6,
  },
  splash: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default Splash;
