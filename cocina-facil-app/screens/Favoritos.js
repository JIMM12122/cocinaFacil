import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FavoritesFoodItems = () => {
  return (
    <View style={styles.favoritesFoodItems}>
      <Text style={styles.favoritos}>Favoritos</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.groupItem} />
        <Text style={styles.aritulosDeComida}>Aritulos de comida</Text>
        <Text style={styles.supermercados}>Supermercados</Text>
      </View>
      <Image
        style={[styles.favoritesFoodItemsChild, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-18071.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={styles.groupChildShadowBox1} />
        <Image
          style={[styles.maskGroupIcon, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-17481.png")}
        />
        <View style={styles.chickenHawaiianParent}>
          <Text style={[styles.chickenHawaiian, styles.chickenPosition]}>
            Chicken Hawaiian
          </Text>
          <Text style={[styles.chickenCheeseAnd, styles.chickenPosition]}>
            Chicken, Cheese and pineapple
          </Text>
        </View>
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupChild1, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/group-17482.png")}
          />
          <Text style={[styles.text, styles.textTypo2]}>3000</Text>
        </View>
        <View style={styles.rectangleContainer}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.signs1Wrapper, styles.signs1Position]}>
            <View style={styles.signs1}>
              <View style={styles.signs1}>
                <View style={styles.signs1}>
                  <Text style={[styles.text1, styles.textTypo1]}>4.5</Text>
                  <Text style={[styles.text2, styles.textTypo]}>(25+)</Text>
                  <Image
                    style={[styles.path3389Icon, styles.path3389IconPosition]}
                    contentFit="cover"
                    source={require("../assets/path-3389.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={styles.groupChildShadowBox1} />
        <View style={[styles.maskGroupIcon, styles.groupPosition]}>
          <View style={styles.redPizza}>
            <Image
              style={styles.image82Icon}
              contentFit="cover"
              source={require("../assets/image-82.png")}
            />
            <View style={styles.groupContainer}>
              <Image
                style={[styles.groupChild3, styles.groupChildPosition]}
                contentFit="cover"
                source={require("../assets/group-174821.png")}
              />
              <Text style={[styles.text, styles.textTypo2]}>3000</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-174811.png")}
        />
        <View style={styles.chickenHawaiianParent}>
          <Text style={[styles.chickenHawaiian, styles.chickenPosition]}>
            Red N Hot Pizza
          </Text>
          <Text style={[styles.chickenCheeseAnd, styles.chickenPosition]}>
            Chicken, Chili
          </Text>
        </View>
        <View style={styles.rectangleContainer}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.signs1Container, styles.signs1Position]}>
            <View style={styles.signs1}>
              <View style={styles.signs1}>
                <View style={styles.signs1}>
                  <Text style={[styles.text4, styles.textTypo1]}>4.5</Text>
                  <Text style={[styles.text5, styles.textTypo]}>(25+)</Text>
                  <Image
                    style={[styles.path3389Icon1, styles.path3389IconPosition]}
                    contentFit="cover"
                    source={require("../assets/path-33891.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.groupLayout]}>
        <View style={styles.groupChildShadowBox1} />
        <Image
          style={[styles.maskGroupIcon, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-174812.png")}
        />
        <View style={styles.chickenHawaiianParent}>
          <Text style={[styles.chickenHawaiian, styles.chickenPosition]}>
            Chicken Hawaiian
          </Text>
          <Text style={[styles.chickenCheeseAnd, styles.chickenPosition]}>
            Chicken, Cheese and pineapple
          </Text>
        </View>
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupChild1, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/group-174822.png")}
          />
          <Text style={[styles.text6, styles.textTypo2]}>8400</Text>
        </View>
        <View style={styles.rectangleContainer}>
          <View style={styles.groupChildShadowBox} />
          <View style={[styles.signs1Wrapper, styles.signs1Position]}>
            <View style={styles.signs1}>
              <View style={styles.signs1}>
                <View style={styles.signs1}>
                  <Text style={[styles.text1, styles.textTypo1]}>4.5</Text>
                  <Text style={[styles.text2, styles.textTypo]}>(25+)</Text>
                  <Image
                    style={[styles.path3389Icon, styles.path3389IconPosition]}
                    contentFit="cover"
                    source={require("../assets/path-33892.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
    width: 323,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 248,
    width: 323,
    left: 26,
    position: "absolute",
  },
  chickenPosition: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "-104.42%",
    right: "-34.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo2: {
    fontSize: 25,
    top: "14.29%",
    width: "80.6%",
    height: "85.71%",
    textAlign: "left",
    color: Color.colorCoral,
    fontFamily: FontFamily.aBeeZeeRegular,
    position: "absolute",
  },
  signs1Position: {
    left: "11.86%",
    bottom: "29.17%",
    top: "29.17%",
    height: "41.67%",
    position: "absolute",
  },
  textTypo1: {
    fontSize: 12,
    left: "0%",
    top: "0%",
    height: "100%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_4xs_5,
    top: "10%",
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeRegular,
    position: "absolute",
  },
  path3389IconPosition: {
    bottom: "9.23%",
    height: "80.77%",
    top: "10%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  favoritos: {
    top: "5.79%",
    left: "38.93%",
    color: Color.ffffff,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    fontSize: 18,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 28,
    borderStyle: "solid",
    borderColor: "#f2eaea",
    borderWidth: 1,
    height: 55,
  },
  groupItem: {
    top: 4,
    left: 6,
    borderRadius: 24,
    backgroundColor: "#4ee476",
    shadowRadius: 40,
    elevation: 40,
    width: 160,
    height: 47,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    position: "absolute",
  },
  aritulosDeComida: {
    top: 15,
    left: 50,
    color: Color.colorWhite,
    width: 70,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  supermercados: {
    top: 21,
    left: 193,
    width: 116,
    color: Color.colorCoral,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 107,
    height: 55,
    width: 323,
    left: 26,
    position: "absolute",
  },
  favoritesFoodItemsChild: {
    height: "9.61%",
    width: "20.8%",
    top: "3.33%",
    right: "76.27%",
    bottom: "87.07%",
    left: "2.93%",
  },
  groupChildShadowBox1: {
    elevation: 36.43,
    shadowRadius: 36.43,
    borderRadius: 18,
    height: 248,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    left: 0,
    top: 0,
    width: 323,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  maskGroupIcon: {
    height: 165,
  },
  groupIcon: {
    height: "28.43%",
    width: "21.8%",
    top: "0.98%",
    right: "-1.88%",
    bottom: "70.59%",
    left: "80.08%",
  },
  chickenHawaiian: {
    width: 152,
    height: 18,
    color: Color.colorBlack,
    textAlign: "left",
    top: 0,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    fontSize: 18,
  },
  chickenCheeseAnd: {
    top: 28,
    fontSize: 15,
    color: Color.colorDimgray,
    height: 15,
    width: 210,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  chickenHawaiianParent: {
    top: 192,
    height: 43,
    width: 210,
    left: 13,
    position: "absolute",
  },
  groupChild1: {
    height: "267.07%",
    width: "169.82%",
    top: "-62.65%",
    left: "-34.91%",
  },
  text: {
    left: "10.62%",
  },
  groupParent: {
    height: "13.73%",
    width: "25.19%",
    top: "4.9%",
    right: "70.68%",
    bottom: "81.37%",
    left: "4.14%",
    position: "absolute",
  },
  groupChildShadowBox: {
    elevation: 24.29,
    shadowRadius: 24.29,
    shadowColor: "rgba(254, 114, 76, 0.2)",
    borderRadius: Border.br_117xl,
    height: 29,
    width: 72,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text1: {
    width: "32.61%",
  },
  text2: {
    height: "80%",
    width: "34.78%",
    left: "65.22%",
  },
  path3389Icon: {
    width: "18.38%",
    right: "41.18%",
    left: "40.44%",
  },
  signs1: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  signs1Wrapper: {
    width: "77.97%",
    right: "10.17%",
  },
  rectangleContainer: {
    top: 151,
    height: 29,
    width: 72,
    left: 13,
    position: "absolute",
  },
  rectangleGroup: {
    top: 194,
  },
  image82Icon: {
    top: "14.04%",
    right: "-10.38%",
    bottom: "-14.04%",
    left: "10.38%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  groupChild3: {
    height: "227.95%",
    width: "153.35%",
    top: "-23.53%",
    left: "-18.44%",
  },
  groupContainer: {
    height: "14.85%",
    width: "20%",
    top: "17.53%",
    right: "65.93%",
    bottom: "67.62%",
    left: "14.07%",
    position: "absolute",
  },
  redPizza: {
    top: -32,
    left: -42,
    width: 407,
    height: 229,
    position: "absolute",
  },
  text4: {
    width: "31.72%",
  },
  text5: {
    left: "63.43%",
  },
  path3389Icon1: {
    width: "17.88%",
    right: "42.79%",
    left: "39.34%",
  },
  signs1Container: {
    width: "80.16%",
    right: "7.98%",
  },
  groupView: {
    top: 462,
  },
  text6: {
    left: "10.45%",
  },
  rectangleParent2: {
    top: 730,
  },
  favoritesFoodItems: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default FavoritesFoodItems;
