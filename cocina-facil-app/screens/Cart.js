import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Cart = () => {
  return (
    <View style={styles.cart}>
      <Image
        style={[styles.cartChild, styles.childGroupLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-105.png")}
      />
      <Text style={styles.carritoDeCompras}>Carrito de compras</Text>
      <Image
        style={[styles.path3391Icon, styles.childGroupLayout]}
        contentFit="cover"
        source={require("../assets/path-3391.png")}
      />
      <View style={[styles.cartInner, styles.cartInnerLayout]}>
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={[styles.groupWrapper, styles.groupPosition]}>
            <View style={styles.groupChild} />
            <Text style={[styles.pagar, styles.pagarTypo]}>PAGAR</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.total, styles.totalLayout]}>Total</Text>
      <View style={styles.groupParent}>
        <View style={[styles.impuestosParent, styles.parentLayout]}>
          <Text style={[styles.impuestos, styles.impuestosLayout]}>
            impuestos
          </Text>
          <Text style={[styles.text, styles.textTypo]}>102.30</Text>
          <Text style={[styles.crc, styles.crcClr]}>CRC</Text>
        </View>
        <View style={[styles.envioParent, styles.parentLayout]}>
          <Text style={[styles.envio, styles.crcTypo1]}>{`Envio
`}</Text>
          <Text style={[styles.text1, styles.textTypo]}>1000</Text>
          <Text style={[styles.crc, styles.crcClr]}>CRC</Text>
        </View>
        <Text style={[styles.text2, styles.textTypo]}>6102.60</Text>
        <Text style={[styles.crc2, styles.crc2Position]}>CRC</Text>
        <Text style={[styles.items, styles.itemsTypo]}>(2 items)</Text>
        <View style={[styles.subtotalParent, styles.text3Position]}>
          <Text style={[styles.subtotal, styles.crc3Position]}>Subtotal</Text>
          <Text style={[styles.text3, styles.text3Position]}>5000.30</Text>
          <Text style={[styles.crc3, styles.crc3Position]}>CRC</Text>
        </View>
        <View style={[styles.groupItem, styles.groupLayout2]} />
        <View style={[styles.groupInner, styles.groupLayout2]} />
        <View style={[styles.lineView, styles.groupLayout2]} />
      </View>
      <View style={styles.rectangleGroup}>
        <View style={styles.rectangleView} />
        <Text
          style={[styles.codigoPromocional, styles.itemsTypo]}
        >{`Codigo promocional `}</Text>
        <View style={[styles.groupContainer, styles.frameGroupPosition]}>
          <View style={[styles.groupFrame, styles.frameGroupPosition]}>
            <View style={[styles.groupFrame, styles.frameGroupPosition]}>
              <View style={[styles.groupFrame, styles.frameGroupPosition]}>
                <View style={styles.groupChild1} />
                <Text style={[styles.aplicar, styles.pagarTypo]}>Apply</Text>
                <View style={[styles.frameView, styles.frameGroupPosition]} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.maskGroupParent}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={[styles.groupIcon, styles.childGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-17248.png")}
        />
        <View
          style={[styles.redNHotPizzaParent, styles.crc300030WrapperPosition]}
        >
          <Text style={[styles.redNHot, styles.totalTypo]}>
            Red n hot pizza
          </Text>
          <Text style={[styles.spicyChickenBeef, styles.withBakedSalmonTypo]}>
            Spicy chicken, beef
          </Text>
        </View>
        <View
          style={[styles.crc300030Wrapper, styles.crc300030WrapperPosition]}
        >
          <Text style={[styles.crc300030, styles.crcTypo]}>CRC 3000.30</Text>
        </View>
        <View style={[styles.groupParent1, styles.groupParentLayout]}>
          <Image
            style={styles.groupChild2}
            contentFit="cover"
            source={require("../assets/group-17840.png")}
          />
          <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
            <View style={styles.groupChildShadowBox} />
            <Image
              style={styles.groupChild4}
              contentFit="cover"
              source={require("../assets/group-17839.png")}
            />
          </View>
          <Text style={[styles.text4, styles.totalTypo]}>02</Text>
        </View>
      </View>
      <View style={[styles.cartInner1, styles.groupLayout]}>
        <View style={[styles.maskGroupGroup, styles.groupLayout]}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
          <View style={[styles.groupParent2, styles.groupParentPosition]}>
            <Image
              style={[styles.groupChild5, styles.childGroupLayout]}
              contentFit="cover"
              source={require("../assets/group-172481.png")}
            />
            <View style={styles.groupWrapper1}>
              <View style={[styles.groupParent3, styles.groupParentPosition]}>
                <View style={styles.greekSaladParent}>
                  <Text
                    style={[styles.redNHot, styles.totalTypo]}
                  >{`Greek salad `}</Text>
                  <Text
                    style={[styles.withBakedSalmon, styles.withBakedSalmonTypo]}
                  >
                    with baked salmon
                  </Text>
                </View>
                <Text style={[styles.crc385000, styles.crcTypo]}>
                  CRC 3850.00
                </Text>
              </View>
            </View>
            <View style={[styles.groupParent4, styles.groupParentLayout]}>
              <Image
                style={styles.groupChild2}
                contentFit="cover"
                source={require("../assets/group-178401.png")}
              />
              <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
                <View style={styles.groupChildShadowBox} />
                <Image
                  style={styles.groupChild4}
                  contentFit="cover"
                  source={require("../assets/group-178391.png")}
                />
              </View>
              <Text style={[styles.text4, styles.totalTypo]}>02</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cartInnerLayout: {
    height: 57,
    width: 248,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  pagarTypo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  totalLayout: {
    width: 69,
    height: 16,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  parentLayout: {
    height: 21,
    width: 331,
    left: 0,
    position: "absolute",
  },
  impuestosLayout: {
    width: 100,
    left: 0,
  },
  textTypo: {
    width: 68,
    textAlign: "right",
    height: 21,
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  crcClr: {
    color: Color.subColor,
    fontSize: FontSize.size_sm,
    width: 28,
  },
  crcTypo1: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    position: "absolute",
  },
  crc2Position: {
    top: 147,
    height: 14,
  },
  itemsTypo: {
    color: Color.colorSilver,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  text3Position: {
    height: 23,
    top: 0,
    position: "absolute",
  },
  crc3Position: {
    top: 3,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout2: {
    height: 1,
    width: 332,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  frameGroupPosition: {
    height: 100,
    top: 0,
    position: "absolute",
  },
  crc300030WrapperPosition: {
    left: "31.4%",
    position: "absolute",
  },
  totalTypo: {
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  withBakedSalmonTypo: {
    color: Color.colorLightslategray,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  crcTypo: {
    color: Color.colorCoral,
    left: "0%",
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  groupParentLayout: {
    height: 28,
    position: "absolute",
  },
  groupLayout: {
    width: 326,
    height: 83,
    position: "absolute",
  },
  groupParentPosition: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  cartChild: {
    height: "9.61%",
    width: "20.8%",
    top: "3.33%",
    right: "76.27%",
    bottom: "87.07%",
    left: "2.93%",
  },
  carritoDeCompras: {
    top: "5.79%",
    left: "28.53%",
    color: Color.ffffff,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  path3391Icon: {
    height: "1.35%",
    width: "1.87%",
    top: "6.28%",
    right: "86.93%",
    bottom: "92.36%",
    left: "11.2%",
  },
  groupChild: {
    shadowColor: "rgba(254, 114, 76, 0.25)",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    backgroundColor: Color.colorMediumspringgreen,
    borderRadius: Border.br_9xl_5,
    left: 0,
    top: 0,
    height: 57,
    width: 248,
    position: "absolute",
  },
  pagar: {
    top: "38.6%",
    left: "39.52%",
    fontSize: 15,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  groupWrapper: {
    left: 0,
    height: 57,
    width: 248,
    position: "absolute",
  },
  cartInner: {
    top: 724,
    left: 64,
  },
  total: {
    top: 564,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
    left: 22,
  },
  impuestos: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    position: "absolute",
    top: 1,
    height: 16,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  text: {
    left: 232,
    fontSize: FontSize.size_lgi,
    width: 68,
    top: 0,
  },
  crc: {
    height: 14,
    width: 28,
    left: 303,
    color: Color.subColor,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    position: "absolute",
    top: 1,
  },
  impuestosParent: {
    top: 53,
  },
  envio: {
    top: 1,
    fontFamily: FontFamily.aBeeZeeRegular,
    height: 16,
    width: 69,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    left: 0,
  },
  text1: {
    left: 229,
    fontSize: FontSize.size_lgi,
    width: 68,
    top: 0,
  },
  envioParent: {
    top: 102,
  },
  text2: {
    top: 146,
    left: 226,
    fontSize: 17,
  },
  crc2: {
    left: 297,
    width: 28,
    color: Color.subColor,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    position: "absolute",
  },
  items: {
    left: 43,
    width: 56,
    top: 147,
    height: 14,
  },
  subtotal: {
    height: 16,
    width: 69,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    left: 0,
  },
  text3: {
    left: 218,
    width: 82,
    textAlign: "right",
    height: 23,
    fontSize: FontSize.size_lgi,
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  crc3: {
    height: 14,
    width: 28,
    color: Color.subColor,
    fontSize: FontSize.size_sm,
    left: 303,
  },
  subtotalParent: {
    width: 331,
    left: 0,
  },
  groupItem: {
    top: 36,
  },
  groupInner: {
    top: 86,
  },
  lineView: {
    top: 133,
  },
  groupParent: {
    top: 417,
    height: 167,
    width: 331,
    left: 22,
    position: "absolute",
  },
  rectangleView: {
    height: "60%",
    top: "19%",
    bottom: "21%",
    borderRadius: 100,
    borderColor: "#eee",
    borderWidth: 1,
    left: "0%",
    right: "0%",
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  codigoPromocional: {
    top: 44,
    left: 17,
    width: 145,
    height: 16,
  },
  groupChild1: {
    top: 27,
    left: 7,
    width: 97,
    height: 44,
    backgroundColor: Color.colorMediumspringgreen,
    borderRadius: Border.br_9xl_5,
    position: "absolute",
  },
  aplicar: {
    height: "12%",
    width: "43.76%",
    top: "42%",
    left: "30.91%",
    fontSize: FontSize.size_base,
  },
  frameView: {
    width: 100,
    left: 0,
    overflow: "hidden",
  },
  groupFrame: {
    width: 104,
    height: 100,
    left: 0,
  },
  groupContainer: {
    left: 217,
    width: 104,
    height: 100,
  },
  rectangleGroup: {
    height: "12.32%",
    width: "88.27%",
    top: "38.3%",
    right: "5.87%",
    bottom: "49.38%",
    left: "5.87%",
    position: "absolute",
  },
  maskGroupIcon: {
    top: -17,
    left: -22,
    width: 129,
    height: 132,
    position: "absolute",
  },
  groupIcon: {
    height: "20.14%",
    width: "5.11%",
    top: "10.55%",
    right: "0.71%",
    bottom: "69.32%",
    left: "94.18%",
  },
  redNHot: {
    top: "0%",
    left: "0%",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  spicyChickenBeef: {
    top: "60.47%",
    left: "0.77%",
  },
  redNHotPizzaParent: {
    height: "51.63%",
    width: "39.63%",
    top: "7.2%",
    right: "28.96%",
    bottom: "41.16%",
  },
  crc300030: {
    top: "0%",
  },
  crc300030Wrapper: {
    height: "22.81%",
    width: "28.96%",
    top: "70.85%",
    right: "39.63%",
    bottom: "6.34%",
  },
  groupChild2: {
    top: -8,
    left: 46,
    width: 58,
    height: 58,
    position: "absolute",
  },
  groupChildShadowBox: {
    borderColor: Color.colorCoral,
    shadowColor: "#eef0f2",
    borderRadius: Border.br_mid,
    height: 28,
    borderWidth: 1,
    borderStyle: "solid",
    width: 28,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild4: {
    top: 13,
    left: 9,
    width: 10,
    height: 2,
    position: "absolute",
  },
  rectangleParent1: {
    width: 28,
    left: 0,
    top: 0,
  },
  text4: {
    top: 8,
    left: 36,
    width: 20,
    height: 14,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  groupParent1: {
    top: 55,
    left: 239,
    width: 89,
    height: 28,
  },
  maskGroupParent: {
    top: 105,
    width: 328,
    height: 83,
    left: 22,
    position: "absolute",
  },
  groupChild5: {
    height: "21.92%",
    width: "7.73%",
    right: "1.07%",
    bottom: "78.08%",
    left: "91.2%",
    top: "0%",
  },
  withBakedSalmon: {
    top: "58.54%",
    left: "0.79%",
  },
  greekSaladParent: {
    height: "57.75%",
    bottom: "42.25%",
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  crc385000: {
    top: "73.24%",
  },
  groupParent3: {
    height: "100%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  groupWrapper1: {
    height: "92.82%",
    width: "58.06%",
    top: "0.28%",
    right: "41.94%",
    bottom: "6.9%",
    left: "0%",
    position: "absolute",
  },
  groupParent4: {
    top: 48,
    left: 128,
    width: 89,
    height: 28,
  },
  groupParent2: {
    height: "91.85%",
    width: "66.56%",
    top: "8.15%",
    left: "33.44%",
  },
  maskGroupGroup: {
    left: 0,
    top: 0,
  },
  cartInner1: {
    top: 214,
    left: 22,
  },
  cart: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Cart;
