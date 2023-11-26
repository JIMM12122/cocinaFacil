import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const MyOrdersUpcoming = () => {
  return (
    <View style={styles.myOrdersUpcoming}>
      <Text style={[styles.misOrdenes, styles.minTypo]}>Mis ordenes</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout2]}>
        <View style={[styles.groupChild, styles.groupChildShadowBox2]} />
        <View style={[styles.groupParent, styles.frameViewLayout]}>
          <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
            <View style={styles.groupChildShadowBox1} />
            <Text style={styles.seguimientoDeOrden}>Seguimiento de orden.</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.frameViewLayout]}>
            <View style={[styles.groupInner, styles.groupChildLayout]} />
            <Text style={[styles.cancelar, styles.minTypo]}>Cancel</Text>
            <View style={[styles.frameView, styles.frameViewLayout]} />
          </View>
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.greekSaladParent}>
            <Text style={[styles.greekSalad, styles.textTypo]}>
              Greek Salad
            </Text>
            <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
          </View>
          <Text style={[styles.articulos, styles.ahoraClr]}>3 articulos</Text>
        </View>
        <Text style={[styles.text1, styles.crcClr]}>#264100</Text>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-17974.png")}
        />
        <View style={[styles.llegadaEstimadaParent, styles.llegadaLayout]}>
          <Text style={[styles.llegadaEstimada, styles.llegadaLayout]}>
            Llegada estimada
          </Text>
          <View style={[styles.groupWrapper, styles.text2Position]}>
            <View style={[styles.minParent, styles.text2Position]}>
              <Text style={[styles.min, styles.minTypo]}>min</Text>
              <Text style={[styles.text2, styles.text2Position]}>25</Text>
            </View>
          </View>
        </View>
        <View style={styles.ahoraParent}>
          <Text style={[styles.ahora, styles.ahoraClr]}>Ahora</Text>
          <Text style={[styles.comidaEnCamino, styles.historialTypo]}>
            Comida en camino
          </Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
        <Text
          style={[styles.pedidosPorLlegar, styles.historialTypo]}
        >{`Pedidos por llegar `}</Text>
        <Text style={[styles.historial, styles.historialTypo]}>Historial</Text>
      </View>
      <View style={styles.ultimasOrdenesWrapper}>
        <Text style={[styles.ultimasOrdenes, styles.calificarPosition]}>
          Ultimas ordenes
        </Text>
      </View>
      <View style={[styles.myOrdersUpcomingChild, styles.childLayout]} />
      <View style={[styles.rectangleParent1, styles.rectangleParentPosition]}>
        <View style={styles.groupChildShadowBox1} />
        <Text style={[styles.reOrder, styles.reOrderTypo]}>Re-Order</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
        <Text style={[styles.rate, styles.rateTypo]}>Rate</Text>
      </View>
      <View style={[styles.pizzaParent, styles.pizzaLayout]}>
        <Text style={[styles.pizza, styles.textTypo]}>pizza</Text>
        <Image
          style={styles.groupChild4}
          contentFit="cover"
          source={require("../assets/group-17801.png")}
        />
      </View>
      <Text style={[styles.jun1150, styles.jun1150Position]}>
        19 Jun, 11:50
      </Text>
      <Text style={[styles.items, styles.ahoraClr]}>2 Items</Text>
      <Text style={[styles.crc3000, styles.crcClr]}>CRC 3000</Text>
      <View style={[styles.orderDeliveredParent, styles.orderLayout]}>
        <Text style={styles.orderDelivered}>Order Delivered</Text>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-109.png")}
        />
      </View>
      <Image
        style={[styles.myOrdersUpcomingItem, styles.groupChild9Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-110.png")}
      />
      <View style={styles.unionShadowBox}>
        <View style={[styles.unionChild, styles.unionLayout]} />
      </View>
      <View style={[styles.maskGroup, styles.image13Layout]}>
        <View style={[styles.image13, styles.image13Layout]} />
      </View>
      <Image
        style={styles.myOrdersUpcomingInner}
        contentFit="cover"
        source={require("../assets/group-18071.png")}
      />
      <Image
        style={styles.image76Icon}
        contentFit="cover"
        source={require("../assets/image-76.png")}
      />
      <View style={[styles.rectangleParent3, styles.childLayout]}>
        <View style={[styles.groupChild5, styles.childLayout]} />
        <View style={styles.unionShadowBox}>
          <View style={[styles.unionItem, styles.unionLayout]} />
        </View>
        <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.reOrdenar, styles.reOrderTypo]}>Re-ordenar</Text>
        </View>
        <View style={[styles.rectangleParent5, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild7, styles.groupChildShadowBox]} />
          <Text style={[styles.calificar, styles.calificarPosition]}>
            Calificar
          </Text>
        </View>
        <View style={[styles.pizzaCarbonoraWrapper, styles.pizzaLayout]}>
          <Text style={[styles.pizza, styles.textTypo]}>Pizza carbonora</Text>
        </View>
        <Text style={[styles.jun1030, styles.jun1030Position]}>
          20 Jun, 10:30
        </Text>
        <Text style={[styles.items1, styles.items1Typo]}>3 Items</Text>
        <Text style={[styles.crc30001, styles.crcClr]}>CRC 3000</Text>
        <View style={[styles.orderDeliveredGroup, styles.jun1030Position]}>
          <Text style={styles.orderDelivered}>Order Delivered</Text>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-1091.png")}
          />
        </View>
        <Image
          style={[styles.groupChild9, styles.groupChild9Layout]}
          contentFit="cover"
          source={require("../assets/ellipse-1101.png")}
        />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
      </View>
      <Image
        style={styles.maskGroupIcon1}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  minTypo: {
    color: Color.ffffff,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  groupChildLayout2: {
    width: 323,
    position: "absolute",
  },
  groupChildShadowBox2: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
  },
  frameViewLayout: {
    height: 100,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 43,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_81xl,
    elevation: 30,
    shadowRadius: 30,
    height: 43,
    width: 135,
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  ahoraClr: {
    color: Color.subColor,
    fontSize: FontSize.size_xs,
  },
  crcClr: {
    color: Color.colorCoral,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  llegadaLayout: {
    width: 106,
    position: "absolute",
  },
  text2Position: {
    height: 29,
    left: 0,
    position: "absolute",
  },
  historialTypo: {
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  viewLayout: {
    height: 55,
    width: 323,
    position: "absolute",
  },
  groupChildShadowBox: {
    left: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    position: "absolute",
  },
  calificarPosition: {
    left: "0%",
    color: Color.ffffff,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  childLayout: {
    height: 168,
    width: 323,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 797,
    height: 43,
    width: 135,
    position: "absolute",
  },
  reOrderTypo: {
    left: "24.44%",
    width: "51.11%",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    height: "27.91%",
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  rateTypo: {
    height: "27.91%",
    top: "34.88%",
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  pizzaLayout: {
    height: 19,
    position: "absolute",
  },
  jun1150Position: {
    left: 126,
    position: "absolute",
  },
  orderLayout: {
    width: 102,
    height: 9,
  },
  groupChild9Layout: {
    height: 4,
    width: 4,
    position: "absolute",
  },
  unionLayout: {
    backgroundColor: Color.colorSilver,
    borderRadius: 11,
    width: 65,
    height: 65,
    position: "absolute",
  },
  image13Layout: {
    height: 57,
    width: 59,
    position: "absolute",
  },
  jun1030Position: {
    left: 100,
    position: "absolute",
  },
  items1Typo: {
    top: 25,
    color: Color.subColor,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  misOrdenes: {
    top: "5.79%",
    left: "36%",
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupChild: {
    height: 238,
    elevation: 36.43,
    shadowRadius: 36.43,
    borderRadius: 18,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    width: 323,
    position: "absolute",
  },
  groupChildShadowBox1: {
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(254, 114, 76, 0.25)",
    borderRadius: Border.br_9xl_5,
    backgroundColor: Color.colorMediumspringgreen,
    height: 43,
    width: 135,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  seguimientoDeOrden: {
    width: "70.37%",
    top: "16.28%",
    left: "14.81%",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    height: "27.91%",
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  rectangleGroup: {
    left: 152,
    width: 135,
    top: 18,
  },
  groupInner: {
    top: 18,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    borderRadius: Border.br_81xl,
    left: 0,
    position: "absolute",
  },
  cancelar: {
    height: "12%",
    width: "37.78%",
    top: "33%",
    left: "31.11%",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  frameView: {
    width: 100,
    left: 18,
    top: 0,
    overflow: "hidden",
  },
  rectangleContainer: {
    width: 135,
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 159,
    width: 287,
    left: 18,
  },
  greekSalad: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  text: {
    top: "51.16%",
    left: "86.52%",
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  greekSaladParent: {
    top: 22,
    width: 89,
    left: 10,
    height: 43,
    position: "absolute",
  },
  articulos: {
    fontFamily: FontFamily.aBeeZeeRegular,
    left: 0,
    top: 0,
    textAlign: "center",
    position: "absolute",
  },
  groupContainer: {
    top: 27,
    left: 88,
    width: 99,
    height: 65,
    position: "absolute",
  },
  text1: {
    left: 234,
    textAlign: "right",
    top: 23,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupIcon: {
    top: -6,
    left: -13,
    height: 115,
    width: 119,
    position: "absolute",
  },
  llegadaEstimada: {
    color: Color.subColor,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 0,
    top: 0,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  min: {
    left: 50,
    width: 26,
    height: 11,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    top: 18,
    position: "absolute",
  },
  text2: {
    fontSize: 39,
    width: 51,
    textAlign: "left",
    top: 0,
    color: Color.ffffff,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  minParent: {
    width: 76,
    height: 29,
    top: 0,
  },
  groupWrapper: {
    width: 76,
    height: 29,
    top: 23,
  },
  llegadaEstimadaParent: {
    top: 89,
    height: 52,
    left: 18,
  },
  ahora: {
    left: 31,
    width: 78,
    textAlign: "right",
    top: 0,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  comidaEnCamino: {
    top: 17,
    lineHeight: 20,
    height: 24,
    width: 109,
    textAlign: "right",
    left: 0,
    color: Color.ffffff,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  ahoraParent: {
    top: 104,
    height: 41,
    width: 109,
    left: 196,
    position: "absolute",
  },
  rectangleParent: {
    top: 189,
    height: 259,
    left: 23,
  },
  rectangleView: {
    borderRadius: 28,
    borderStyle: "solid",
    borderColor: "#f2eaea",
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  groupChild1: {
    top: 4,
    borderRadius: 24,
    shadowRadius: 40,
    elevation: 40,
    width: 160,
    height: 47,
    backgroundColor: Color.colorMediumspringgreen,
    left: 6,
  },
  pedidosPorLlegar: {
    top: 11,
    left: 42,
    color: "#fefefe",
    width: 70,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  historial: {
    top: 21,
    left: 207,
    width: 67,
    color: Color.colorCoral,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "center",
  },
  groupView: {
    left: 26,
    top: 107,
  },
  ultimasOrdenes: {
    top: "0%",
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  ultimasOrdenesWrapper: {
    height: "2.59%",
    width: "36.27%",
    top: "57.14%",
    right: "54.13%",
    bottom: "40.27%",
    left: "9.6%",
    position: "absolute",
  },
  myOrdersUpcomingChild: {
    top: 690,
    left: 26,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    elevation: 36.43,
    shadowRadius: 36.43,
    borderRadius: 18,
    shadowColor: "rgba(211, 209, 216, 0.25)",
    backgroundColor: Color.colorWhite,
  },
  reOrder: {
    top: "34.88%",
  },
  rectangleParent1: {
    left: 196,
  },
  groupChild3: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    borderRadius: Border.br_81xl,
    left: 0,
    position: "absolute",
    top: 0,
  },
  rate: {
    width: "30.37%",
    left: "34.81%",
    top: "34.88%",
    fontSize: FontSize.size_mini,
    color: Color.ffffff,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  rectangleParent2: {
    left: 44,
  },
  pizza: {
    textAlign: "right",
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  groupChild4: {
    top: 6,
    left: 52,
    width: 8,
    height: 8,
    position: "absolute",
  },
  pizzaParent: {
    top: 735,
    left: 136,
    width: 60,
  },
  jun1150: {
    top: 715,
    color: Color.subColor,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
  },
  items: {
    left: 216,
    top: 715,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
    position: "absolute",
  },
  crc3000: {
    top: 711,
    left: 270,
    width: 73,
    height: 17,
    textAlign: "right",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  orderDelivered: {
    left: 13,
    color: Color.colorMediumspringgreen,
    height: 9,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    width: 89,
    top: 0,
    position: "absolute",
  },
  ellipseIcon: {
    top: 1,
    width: 7,
    height: 7,
    left: 0,
    position: "absolute",
  },
  orderDeliveredParent: {
    top: 763,
    height: 9,
    left: 126,
    position: "absolute",
  },
  myOrdersUpcomingItem: {
    top: 718,
    left: 203,
  },
  unionChild: {
    top: 708,
    left: 44,
  },
  unionShadowBox: {
    width: 65,
    elevation: 22.96,
    shadowRadius: 22.96,
    shadowColor: "rgba(211, 209, 216, 0.45)",
    height: 65,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    backgroundColor: Color.colorWhite,
  },
  image13: {
    left: 0,
    top: 0,
  },
  maskGroup: {
    left: 301,
    shadowColor: "rgba(255, 197, 41, 0.3)",
    shadowRadius: 16,
    elevation: 16,
    top: 28,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
  },
  myOrdersUpcomingInner: {
    height: "9.61%",
    width: "20.8%",
    top: "3.33%",
    right: "76.27%",
    bottom: "87.07%",
    left: "2.93%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image76Icon: {
    left: 60,
    width: 36,
    height: 48,
    top: 715,
    position: "absolute",
  },
  groupChild5: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    elevation: 36.43,
    shadowRadius: 36.43,
    borderRadius: 18,
    shadowColor: "rgba(211, 209, 216, 0.25)",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  unionItem: {
    top: 525,
    left: 41,
  },
  reOrdenar: {
    top: "6.98%",
  },
  rectangleParent4: {
    left: 170,
    top: 107,
    width: 135,
  },
  groupChild7: {
    borderRadius: Border.br_81xl,
    elevation: 30,
    shadowRadius: 30,
    height: 43,
    width: 135,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  calificar: {
    width: "66.67%",
    top: "34.88%",
    fontSize: FontSize.size_mini,
    height: "27.91%",
    textAlign: "center",
  },
  rectangleParent5: {
    left: 12,
    width: 141,
    top: 107,
  },
  pizzaCarbonoraWrapper: {
    top: 46,
    left: 98,
    width: 119,
  },
  jun1030: {
    top: 25,
    color: Color.subColor,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  items1: {
    left: 190,
    position: "absolute",
  },
  crc30001: {
    top: 32,
    left: 235,
    textAlign: "right",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  orderDeliveredGroup: {
    top: 73,
    height: 9,
    width: 102,
  },
  groupChild9: {
    left: 177,
    top: 28,
  },
  maskGroupIcon: {
    top: 10,
    left: -3,
    width: 107,
    height: 106,
    position: "absolute",
  },
  rectangleParent3: {
    top: 507,
    left: 23,
  },
  maskGroupIcon1: {
    top: 678,
    width: 132,
    height: 132,
    left: 10,
    position: "absolute",
  },
  myOrdersUpcoming: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default MyOrdersUpcoming;
