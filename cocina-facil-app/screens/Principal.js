import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Principal = () => {
  return (
    <View style={styles.principal}>
      <View style={[styles.principalInner, styles.rectangleLayout]}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupChildShadowBox1]} />
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
          <View style={styles.rectangleGroup}>
            <View style={styles.groupShadowBox} />
            <View style={styles.signs1Wrapper}>
              <View style={[styles.signs1, styles.signs1Position1]}>
                <View style={[styles.signs1, styles.signs1Position1]}>
                  <View style={[styles.signs1, styles.signs1Position1]}>
                    <Text style={[styles.text, styles.textClr1]}>4.7</Text>
                    <Text style={[styles.text1, styles.textClr]}>(99+)</Text>
                    <Image
                      style={[styles.path3389Icon, styles.iconGroupLayout]}
                      contentFit="cover"
                      source={require("../assets/path-3389.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.groupInner, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-17481.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.groupChildShadowBox1]} />
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <View style={styles.rectangleGroup}>
          <View style={styles.groupShadowBox} />
          <View style={[styles.signs1Container, styles.signs1Position]}>
            <View style={[styles.signs1, styles.signs1Position1]}>
              <View style={[styles.signs1, styles.signs1Position1]}>
                <View style={[styles.signs1, styles.signs1Position1]}>
                  <Text style={[styles.text2, styles.textClr1]}>4.5</Text>
                  <Text style={[styles.text3, styles.textClr]}>(25+)</Text>
                  <Image
                    style={[styles.path3389Icon1, styles.iconGroupLayout]}
                    contentFit="cover"
                    source={require("../assets/path-33891.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.groupIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-174811.png")}
        />
        <View style={[styles.groupParent, styles.groupLayout1]}>
          <View style={[styles.groupContainer, styles.groupLayout1]}>
            <View
              style={[styles.rectangleParent1, styles.comidaMexicanaPosition]}
            >
              <View style={[styles.groupChild2, styles.groupChildBg]} />
              <Text style={[styles.comidaMexicana, styles.protenaTypo]}>
                comida mexicana
              </Text>
            </View>
            <View
              style={[styles.rectangleParent2, styles.rectangleParentLayout]}
            >
              <View
                style={[styles.groupChild3, styles.rectangleParentLayout]}
              />
              <Text style={[styles.protena, styles.protenaTypo]}>Proteína</Text>
            </View>
            <View style={[styles.rectangleParent3, styles.groupChildLayout4]}>
              <View style={[styles.groupChild4, styles.groupChildLayout4]} />
              <Text style={[styles.comidaRapida, styles.fastFoodTypo]}>
                Comida rapida
              </Text>
            </View>
          </View>
          <View style={[styles.envoGratisParent, styles.groupChild2Position]}>
            <Text
              style={[styles.envoGratis, styles.minsTypo]}
            >{`Envío gratis `}</Text>
            <Text style={[styles.mins, styles.minsTypo]}>10-15 mins</Text>
            <Image
              style={[styles.groupChild5, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/group-17504.png")}
            />
            <Image
              style={[styles.groupChild6, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/group-17503.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.groupParent1}>
        <View style={styles.bowlFusionParent}>
          <Text style={[styles.bowlFusion, styles.bowlFusionTypo]}>{`Bowl fusion
`}</Text>
          <Image
            style={styles.groupChild7}
            contentFit="cover"
            source={require("../assets/group-17801.png")}
          />
        </View>
        <View style={[styles.groupParent2, styles.parentPosition]}>
          <View style={[styles.rectangleParent4, styles.parentPosition]}>
            <View style={[styles.groupChild8, styles.groupChildBg]} />
            <Text style={[styles.cocinaFusion, styles.protenaTypo]}>
              Cocina fusion
            </Text>
          </View>
          <View style={[styles.rectangleParent5, styles.rectangleParentLayout]}>
            <View style={[styles.groupChild3, styles.rectangleParentLayout]} />
            <Text style={[styles.protena, styles.protenaTypo]}>Chicken</Text>
          </View>
          <View style={[styles.rectangleParent6, styles.groupChildLayout4]}>
            <View style={[styles.groupChild10, styles.groupChildLayout4]} />
            <Text style={[styles.fastFood, styles.fastFoodTypo]}>
              Fast Food
            </Text>
          </View>
        </View>
        <View
          style={[styles.freeDeliveryParent, styles.comidamedite1IconPosition]}
        >
          <Text style={[styles.freeDelivery, styles.minsTypo]}>
            Free delivery
          </Text>
          <Text style={[styles.mins1, styles.minsTypo]}>10-15 mins</Text>
          <Image
            style={[styles.groupChild11, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-175041.png")}
          />
          <Image
            style={[styles.groupChild12, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-175031.png")}
          />
        </View>
      </View>
      <View style={styles.tacosDeMolidaWrapper}>
        <Text style={[styles.tacosDeMolida, styles.bowlFusionTypo]}>
          Tacos de molida
        </Text>
      </View>
      <View style={styles.platillosSugeridosWrapper}>
        <Text style={[styles.platillosSugeridos, styles.verTodoPosition]}>
          Platillos sugeridos
        </Text>
      </View>
      <View style={styles.verTodoParent}>
        <Text style={[styles.verTodo, styles.verTodoPosition]}>Ver todo</Text>
        <Image
          style={[styles.path3424Icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/path-3424.png")}
        />
      </View>
      <View style={[styles.groupParent3, styles.searchPosition]}>
        <View style={styles.groupParent4}>
          <View style={[styles.rectangleParent7, styles.groupParentPosition]}>
            <View style={[styles.groupChild13, styles.groupParentPosition]} />
            <Image
              style={[styles.maskGroupIcon2, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/mask-group2.png")}
            />
            <View style={styles.salmonSaladParent}>
              <Text style={[styles.salmonSalad, styles.enviarAPosition]}>
                Salmon Salad
              </Text>
              <Text style={[styles.bakedSalmonFish, styles.textClr]}>
                Baked salmon fish
              </Text>
            </View>
            <Image
              style={[styles.groupChild14, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/group-174812.png")}
            />
            <View style={styles.rectangleParent8}>
              <View style={styles.groupChildShadowBox} />
              <View style={[styles.signs1Frame, styles.signs1Position]}>
                <View style={[styles.signs1, styles.signs1Position1]}>
                  <View style={[styles.signs1, styles.signs1Position1]}>
                    <View style={[styles.signs1, styles.signs1Position1]}>
                      <Text style={styles.text4}>4.5</Text>
                      <Text style={[styles.text5, styles.text5Position]}>
                        (25+)
                      </Text>
                      <Image
                        style={[styles.path3389Icon2, styles.text5Position]}
                        contentFit="cover"
                        source={require("../assets/path-33892.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.groupParent5, styles.groupPosition]}>
              <Image
                style={[styles.groupChild16, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group-17482.png")}
              />
              <Text style={styles.text6}>
                <Text style={styles.text7}>$</Text>
                <Text style={[styles.text8, styles.textTypo2]}>5.50</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.rectangleParent9, styles.groupParentPosition]}>
            <View style={[styles.groupChild13, styles.groupParentPosition]} />
            <Image
              style={[styles.maskGroupIcon2, styles.groupParentPosition]}
              contentFit="cover"
              source={require("../assets/mask-group3.png")}
            />
            <View style={styles.salmonSaladParent}>
              <Text style={[styles.salmonSalad, styles.enviarAPosition]}>
                Salmon Salad
              </Text>
              <Text style={[styles.bakedSalmonFish, styles.textClr]}>
                Baked salmon fish
              </Text>
            </View>
            <View style={styles.rectangleParent8}>
              <View style={styles.groupChildShadowBox} />
              <View style={[styles.signs1Frame, styles.signs1Position]}>
                <View style={[styles.signs1, styles.signs1Position1]}>
                  <View style={[styles.signs1, styles.signs1Position1]}>
                    <View style={[styles.signs1, styles.signs1Position1]}>
                      <Text style={styles.text4}>4.5</Text>
                      <Text style={[styles.text5, styles.text5Position]}>
                        (25+)
                      </Text>
                      <Image
                        style={[styles.path3389Icon2, styles.text5Position]}
                        contentFit="cover"
                        source={require("../assets/path-33893.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.groupParent5, styles.groupPosition]}>
              <Image
                style={[styles.groupChild16, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group-174821.png")}
              />
              <Text style={styles.text6}>
                <Text style={styles.text7}>$</Text>
                <Text style={[styles.text8, styles.textTypo2]}>8.25</Text>
              </Text>
            </View>
            <Image
              style={[styles.groupChild20, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/group-17920.png")}
            />
          </View>
        </View>
        <View style={styles.groupWrapper}>
          <View style={[styles.signs1, styles.signs1Position1]}>
            <Text style={[styles.loMsPopular, styles.loMsPopularTypo]}>
              Lo más popular
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.queTeGustara, styles.loMsPopularTypo]}
      >{`Que te gustaría comer 
hoy?`}</Text>
      <View style={[styles.search, styles.searchPosition]}>
        <View style={styles.groupChild21Position}>
          <View style={[styles.groupChild21, styles.groupChild21Position]} />
          <View style={styles.vectorParent}>
            <Image
              style={[styles.lineIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/line-7.png")}
            />
            <Image
              style={[styles.ellipseIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.buscaLomQue, styles.enviarAPosition]}>
              Busca lom que te gusta !!
            </Text>
          </View>
        </View>
        <Image
          style={styles.searchChild}
          contentFit="cover"
          source={require("../assets/group-18097.png")}
        />
      </View>
      <View style={styles.groupParent7}>
        <Image
          style={[styles.groupChild22, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-17484.png")}
        />
        <View style={styles.escuelaAguasBuenasParent}>
          <Text
            style={[styles.escuelaAguasBuenas, styles.bowlFusionTypo]}
          >{`Escuela Aguas Buenas `}</Text>
          <View style={styles.groupFrame}>
            <View style={[styles.signs1, styles.signs1Position1]}>
              <Text style={[styles.enviarA, styles.enviarAPosition]}>
                Enviar a
              </Text>
              <Image
                style={[styles.path857Icon, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/path-857.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={styles.maskGroupIcon4}
          contentFit="cover"
          source={require("../assets/mask-group4.png")}
        />
      </View>
      <View style={styles.groupParent8}>
        <View style={[styles.rectangleWrapper, styles.groupChildLayout2]}>
          <View style={[styles.groupChild23, styles.groupChildLayout2]} />
        </View>
        <View style={[styles.rectangleParent12, styles.groupChildLayout2]}>
          <View style={[styles.groupChild24, styles.groupChildLayout2]} />
          <View style={[styles.maskGroup, styles.maskGroupLayout]} />
        </View>
        <View style={[styles.rectangleParent13, styles.groupChildLayout2]}>
          <View style={[styles.groupChild25, styles.groupChildLayout2]} />
          <Text style={[styles.mexicana, styles.asianTypo]}>Mexicana</Text>
          <Image
            style={[styles.maskGroup, styles.maskGroupLayout]}
            contentFit="cover"
            source={require("../assets/mask-group5.png")}
          />
        </View>
        <View style={[styles.vectorGroup, styles.groupChildLayout2]}>
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-4139.png")}
          />
          <Text style={[styles.protena1, styles.ketoTypo]}>{`PROTEÍNA
`}</Text>
          <Text style={[styles.fusin, styles.ketoTypo]}>FUSIÓN</Text>
          <Image
            style={[styles.comidamedite1Icon, styles.comidamedite1IconPosition]}
            contentFit="cover"
            source={require("../assets/comidamedite-1.png")}
          />
        </View>
        <View style={[styles.rectangleParent14, styles.groupChildLayout2]}>
          <View style={[styles.groupChild26, styles.groupChildLayout2]} />
          <Text style={[styles.asian, styles.asianTypo]}>Asian</Text>
          <Image
            style={[styles.maskGroupIcon6, styles.maskGroupLayout]}
            contentFit="cover"
            source={require("../assets/mask-group6.png")}
          />
          <Text style={[styles.keto, styles.ketoTypo]}>KETO</Text>
        </View>
      </View>
      <Image
        style={styles.oip1Icon}
        contentFit="cover"
        source={require("../assets/oip-1.png")}
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/2843659-1.png")}
      />
      <View style={[styles.vectorContainer, styles.signs1Position1]}>
        <Image
          style={[styles.groupChild27, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-83.png")}
        />
        <Image
          style={[styles.groupChild28, styles.groupChildLayout1]}
          contentFit="cover"
          source={require("../assets/group-17440.png")}
        />
        <Image
          style={[styles.groupChild29, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-17444.png")}
        />
        <Image
          style={[styles.groupChild30, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-17443.png")}
        />
        <View style={[styles.path23Parent, styles.groupLayout]}>
          <Image
            style={[styles.path23Icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/path-23.png")}
          />
          <Text style={[styles.text14, styles.textTypo]}>6</Text>
        </View>
        <Image
          style={[styles.groupChild31, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-17445.png")}
        />
        <View style={[styles.groupGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupIcon1, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <Text style={[styles.text15, styles.textTypo]}>4</Text>
        </View>
        <Image
          style={[styles.groupChild32, styles.groupChildLayout1]}
          contentFit="cover"
          source={require("../assets/group-18073.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 229,
    width: 266,
    position: "absolute",
  },
  groupChildShadowBox1: {
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    backgroundColor: Color.colorWhite,
  },
  signs1Position1: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textClr1: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  textClr: {
    color: Color.subColor,
    textAlign: "left",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  signs1Position: {
    left: "11.86%",
    position: "absolute",
  },
  groupLayout1: {
    width: 212,
    position: "absolute",
  },
  comidaMexicanaPosition: {
    width: 78,
    top: 1,
    left: 0,
  },
  groupChildBg: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_8xs,
  },
  protenaTypo: {
    color: Color.colorLightslategray_100,
    letterSpacing: -0.2,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.aBeeZeeRegular,
    position: "absolute",
  },
  rectangleParentLayout: {
    width: 60,
    height: 22,
    position: "absolute",
  },
  groupChildLayout4: {
    width: 70,
    position: "absolute",
  },
  fastFoodTypo: {
    width: 57,
    left: 8,
    textAlign: "center",
    color: Color.colorLightslategray_100,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.aBeeZeeRegular,
    position: "absolute",
  },
  groupChild2Position: {
    left: 12,
    top: 0,
    position: "absolute",
  },
  minsTypo: {
    color: Color.colorSlategray,
    fontFamily: FontFamily.abhayaLibreMedium,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  groupChildPosition: {
    top: "7.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bowlFusionTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  parentPosition: {
    height: 34,
    left: 0,
    position: "absolute",
  },
  comidamedite1IconPosition: {
    top: 20,
    position: "absolute",
  },
  verTodoPosition: {
    textAlign: "right",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  searchPosition: {
    width: 325,
    left: 25,
    position: "absolute",
  },
  groupParentPosition: {
    width: 154,
    top: 0,
    position: "absolute",
  },
  enviarAPosition: {
    fontSize: FontSize.size_sm,
    top: "0%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "82.24%",
    top: "4.67%",
    height: "13.08%",
    position: "absolute",
  },
  text5Position: {
    top: "10%",
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  loMsPopularTypo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
  },
  groupChild21Position: {
    width: 256,
    height: 51,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 98,
    position: "absolute",
  },
  maskGroupLayout: {
    height: 59,
    width: 59,
    position: "absolute",
  },
  asianTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_2xs,
    height: 12,
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  ketoTypo: {
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorDimgray,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout1: {
    bottom: "28.38%",
    width: "6.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    bottom: "31.08%",
    width: "7.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    width: "3.88%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(211, 209, 216, 0.25)",
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 229,
    width: 266,
    position: "absolute",
  },
  maskGroupIcon: {
    height: 136,
    left: 0,
    top: 0,
    width: 266,
    position: "absolute",
  },
  groupShadowBox: {
    elevation: 23.39,
    shadowRadius: 23.39,
    shadowColor: "rgba(254, 114, 76, 0.2)",
    borderRadius: Border.br_81xl,
    height: 28,
    width: 69,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    height: "99%",
    width: "32%",
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    fontSize: 12,
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text1: {
    height: "84.65%",
    width: "41.96%",
    top: "15.35%",
    left: "58.04%",
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: 8,
    color: Color.subColor,
    position: "absolute",
  },
  path3389Icon: {
    height: "79.96%",
    width: "18.04%",
    top: "1.43%",
    right: "47.74%",
    bottom: "18.61%",
    left: "34.22%",
    position: "absolute",
  },
  signs1: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  signs1Wrapper: {
    height: "42.09%",
    width: "79.44%",
    top: "32.73%",
    right: "7.25%",
    left: "13.31%",
    bottom: "25.18%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 10,
    left: 11,
    height: 28,
    width: 69,
    position: "absolute",
  },
  groupInner: {
    height: "12.23%",
    width: "10.53%",
    top: "190.39%",
    right: "-111.65%",
    bottom: "-102.62%",
    left: "201.13%",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  principalInner: {
    top: 426,
    left: 307,
  },
  rectangleView: {
    shadowColor: "rgba(211, 209, 216, 0.25)",
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 229,
    width: 266,
    position: "absolute",
  },
  text2: {
    height: "97.46%",
    width: "32.43%",
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    fontSize: 12,
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text3: {
    top: "16.67%",
    left: "63.02%",
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: 8,
    color: Color.subColor,
    position: "absolute",
  },
  path3389Icon1: {
    height: "78.72%",
    width: "18.28%",
    right: "41.49%",
    bottom: "21.28%",
    left: "40.23%",
    top: "0%",
    position: "absolute",
  },
  signs1Container: {
    height: "42.75%",
    width: "78.38%",
    top: "32.06%",
    right: "9.75%",
    bottom: "25.18%",
  },
  groupIcon: {
    height: "25.33%",
    width: "21.8%",
    top: "0.87%",
    right: "-1.88%",
    bottom: "73.8%",
    left: "80.08%",
    position: "absolute",
  },
  groupChild2: {
    width: 54,
    left: 12,
    top: 0,
    position: "absolute",
    height: 22,
  },
  comidaMexicana: {
    height: 16,
    textAlign: "center",
    width: 78,
    top: 1,
    left: 0,
  },
  rectangleParent1: {
    height: 22,
    position: "absolute",
  },
  groupChild3: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  protena: {
    left: 6,
    width: 47,
    top: 6,
    textAlign: "center",
  },
  rectangleParent2: {
    left: 74,
    top: 1,
  },
  groupChild4: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_8xs,
    height: 22,
    top: 1,
    left: 0,
  },
  comidaRapida: {
    top: 0,
  },
  rectangleParent3: {
    left: 142,
    height: 28,
    top: 0,
  },
  groupContainer: {
    top: 23,
    height: 28,
    left: 0,
  },
  envoGratis: {
    left: 20,
    fontSize: FontSize.size_xs,
  },
  mins: {
    left: 121,
    fontSize: FontSize.size_xs,
  },
  groupChild5: {
    height: "81.62%",
    width: "7.92%",
    right: "92.08%",
    bottom: "11.23%",
    left: "0%",
  },
  groupChild6: {
    height: "86.34%",
    width: "6.14%",
    right: "32.94%",
    bottom: "6.52%",
    left: "60.92%",
  },
  envoGratisParent: {
    width: 174,
    height: 14,
  },
  groupParent: {
    top: 169,
    height: 51,
    left: 1,
  },
  rectangleContainer: {
    top: 430,
    left: 27,
  },
  bowlFusion: {
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
    top: 0,
  },
  groupChild7: {
    top: 576,
    left: 402,
    width: 10,
    height: 10,
    position: "absolute",
  },
  bowlFusionParent: {
    width: 97,
    height: 36,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild8: {
    width: 54,
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  cocinaFusion: {
    left: 4,
    width: 44,
    top: 6,
    textAlign: "center",
  },
  rectangleParent4: {
    width: 54,
    top: 0,
  },
  rectangleParent5: {
    left: 62,
    top: 0,
  },
  groupChild10: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_8xs,
    height: 22,
    left: 0,
    top: 0,
  },
  fastFood: {
    top: 6,
  },
  rectangleParent6: {
    left: 130,
    height: 22,
    top: 0,
  },
  groupParent2: {
    top: 45,
    width: 200,
  },
  freeDelivery: {
    left: 18,
    fontSize: FontSize.size_xs,
  },
  mins1: {
    left: 118,
    fontSize: FontSize.size_smi,
  },
  groupChild11: {
    height: "76.18%",
    width: "7.87%",
    top: "13.33%",
    right: "92.13%",
    bottom: "10.48%",
    left: "0%",
    position: "absolute",
  },
  groupChild12: {
    height: "80.59%",
    width: "6.1%",
    top: "3980%",
    right: "-146.67%",
    bottom: "-3960.59%",
    left: "240.57%",
    position: "absolute",
  },
  freeDeliveryParent: {
    width: 175,
    height: 15,
    left: 0,
  },
  groupParent1: {
    top: 575,
    left: 315,
    height: 79,
    width: 200,
    position: "absolute",
  },
  tacosDeMolida: {
    textAlign: "left",
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
  },
  tacosDeMolidaWrapper: {
    height: "2.22%",
    width: "30.4%",
    top: "70.57%",
    right: "61.33%",
    bottom: "27.22%",
    left: "8.27%",
    position: "absolute",
  },
  platillosSugeridos: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_lg,
  },
  platillosSugeridosWrapper: {
    height: "2.59%",
    width: "40.8%",
    top: "48.4%",
    right: "45.6%",
    bottom: "49.01%",
    left: "13.6%",
    position: "absolute",
  },
  verTodo: {
    color: "#f56844",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  path3424Icon: {
    height: "51.6%",
    width: "8.04%",
    top: "16.46%",
    right: "-1.73%",
    bottom: "31.93%",
    left: "93.69%",
    position: "absolute",
  },
  verTodoParent: {
    height: "1.85%",
    width: "16.36%",
    top: "48.77%",
    right: "6.31%",
    bottom: "49.38%",
    left: "77.33%",
    position: "absolute",
  },
  groupChild13: {
    height: 216,
    borderRadius: Border.br_mini,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 154,
  },
  maskGroupIcon2: {
    height: 147,
    left: 0,
  },
  salmonSalad: {
    height: "40%",
    width: "89.11%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    left: "0%",
  },
  bakedSalmonFish: {
    height: "34.29%",
    width: "99.01%",
    top: "65.71%",
    left: "0.99%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    position: "absolute",
  },
  salmonSaladParent: {
    height: "16.36%",
    width: "66.01%",
    top: "76.17%",
    right: "27.45%",
    bottom: "7.48%",
    left: "6.54%",
    position: "absolute",
  },
  groupChild14: {
    width: "18.3%",
    right: "6.54%",
    left: "75.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    borderRadius: Border.br_93xl,
    height: 24,
    width: 60,
    shadowColor: "rgba(254, 114, 76, 0.2)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text4: {
    width: "32.61%",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  text5: {
    height: "80%",
    width: "34.78%",
    left: "65.22%",
    fontSize: FontSize.size_6xs,
    color: Color.subColor,
    textAlign: "left",
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  path3389Icon2: {
    height: "80.77%",
    width: "18.38%",
    right: "41.18%",
    bottom: "9.23%",
    left: "40.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  signs1Frame: {
    height: "41.67%",
    width: "77.97%",
    top: "29.17%",
    right: "10.17%",
    bottom: "29.17%",
  },
  rectangleParent8: {
    top: 134,
    left: 10,
    height: 24,
    width: 60,
    position: "absolute",
  },
  groupChild16: {
    height: "265.52%",
    width: "179.91%",
    top: "-62.07%",
    right: "-39.95%",
    bottom: "-103.45%",
    left: "-39.95%",
    position: "absolute",
  },
  text7: {
    fontSize: FontSize.size_3xs_8,
    color: Color.colorCoral,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  text8: {
    fontSize: 20,
    color: Color.colorGray_100,
  },
  text6: {
    height: "84.38%",
    width: "77.59%",
    top: "14.29%",
    left: "12.07%",
    textAlign: "left",
    position: "absolute",
  },
  groupParent5: {
    width: "37.91%",
    right: "55.56%",
    left: "6.54%",
  },
  rectangleParent7: {
    height: 216,
    left: 0,
  },
  groupChild20: {
    height: "26.97%",
    width: "37.73%",
    top: "0.97%",
    right: "-3.18%",
    bottom: "72.06%",
    left: "65.45%",
    position: "absolute",
  },
  rectangleParent9: {
    left: 170,
    height: 216,
  },
  groupParent4: {
    top: 33,
    width: 324,
    height: 216,
    left: 1,
    position: "absolute",
  },
  loMsPopular: {
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupWrapper: {
    height: "8.43%",
    width: "40.62%",
    right: "59.38%",
    bottom: "91.57%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupParent3: {
    top: 679,
    height: 249,
  },
  queTeGustara: {
    top: "12.93%",
    left: "6.67%",
    fontSize: 30,
    textAlign: "left",
    position: "absolute",
  },
  groupChild21: {
    borderRadius: 10,
    backgroundColor: "#fcfcfd",
    borderStyle: "solid",
    borderColor: "#efefef",
    borderWidth: 1,
  },
  lineIcon: {
    height: "30%",
    width: "2.8%",
    top: "55.29%",
    right: "92.56%",
    bottom: "14.71%",
    left: "4.64%",
    position: "absolute",
  },
  ellipseIcon: {
    height: "82.35%",
    width: "7.18%",
    top: "-5.88%",
    right: "93.33%",
    bottom: "23.53%",
    left: "-0.51%",
    position: "absolute",
  },
  buscaLomQue: {
    left: "13.33%",
    color: "#9aa0b4",
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "left",
  },
  vectorParent: {
    height: "33.33%",
    width: "76.17%",
    top: "37.25%",
    right: "16.8%",
    bottom: "29.41%",
    left: "7.03%",
    position: "absolute",
  },
  searchChild: {
    top: -15,
    left: 244,
    width: 106,
    height: 111,
    position: "absolute",
  },
  search: {
    top: 184,
    height: 51,
  },
  groupChild22: {
    height: "190.24%",
    width: "24.22%",
    top: "-17.07%",
    right: "80.43%",
    bottom: "-73.17%",
    left: "-4.66%",
    position: "absolute",
  },
  escuelaAguasBuenas: {
    top: "53.85%",
    lineHeight: 18,
    color: Color.colorCoral,
    textAlign: "center",
    left: "0%",
  },
  enviarA: {
    lineHeight: 17,
    color: "#8c9099",
    textAlign: "center",
    fontFamily: FontFamily.aBeeZeeItalic,
    fontStyle: "italic",
    left: "0%",
  },
  path857Icon: {
    height: "30.77%",
    width: "11.53%",
    top: "31.55%",
    right: "-0.93%",
    bottom: "37.68%",
    left: "89.4%",
    position: "absolute",
  },
  groupFrame: {
    height: "43.59%",
    width: "44.57%",
    right: "26.86%",
    bottom: "56.41%",
    left: "28.57%",
    top: "0%",
    position: "absolute",
  },
  escuelaAguasBuenasParent: {
    height: "95.12%",
    width: "47.83%",
    right: "25.78%",
    bottom: "4.88%",
    left: "26.4%",
    top: "0%",
    position: "absolute",
  },
  maskGroupIcon4: {
    top: -11,
    left: 265,
    width: 73,
    height: 73,
    position: "absolute",
  },
  groupParent7: {
    height: "5.05%",
    width: "85.87%",
    top: "3.94%",
    right: "7.2%",
    bottom: "91.01%",
    left: "6.93%",
    position: "absolute",
  },
  groupChild23: {
    shadowColor: "rgba(254, 114, 76, 0.25)",
    width: 59,
    height: 98,
    top: 0,
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  rectangleWrapper: {
    width: 59,
    height: 98,
    top: 0,
    left: 0,
  },
  groupChild24: {
    width: 59,
    height: 98,
    top: 0,
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(211, 209, 216, 0.25)",
    left: 0,
  },
  maskGroup: {
    left: 0,
    top: 0,
  },
  rectangleParent12: {
    left: 82,
    width: 59,
    height: 98,
    top: 0,
  },
  groupChild25: {
    width: 59,
    height: 98,
    top: 0,
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(211, 209, 216, 0.25)",
    left: 0,
  },
  mexicana: {
    width: 65,
    height: 12,
    top: 66,
    left: 1,
  },
  rectangleParent13: {
    left: 234,
    width: 66,
    top: 0,
  },
  rectangleIcon: {
    top: -10,
    left: 54,
    width: 119,
    height: 158,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  protena1: {
    width: 55,
    top: 66,
    height: 14,
    left: 0,
  },
  fusin: {
    top: 69,
    left: 92,
  },
  comidamedite1Icon: {
    left: 87,
    height: 43,
    width: 54,
  },
  vectorGroup: {
    left: 78,
    width: 143,
    top: 0,
  },
  groupChild26: {
    left: 351,
    borderRadius: 26,
    width: 59,
    height: 98,
    top: 0,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(211, 209, 216, 0.25)",
  },
  asian: {
    top: 61,
    left: 363,
    width: 32,
    height: 12,
  },
  maskGroupIcon6: {
    top: 270,
    left: 394,
  },
  keto: {
    top: 59,
    width: 46,
    height: 12,
    left: 0,
  },
  rectangleParent14: {
    top: 8,
    left: 5,
    width: 410,
  },
  groupParent8: {
    top: 262,
    left: 38,
    width: 415,
    height: 106,
    position: "absolute",
  },
  oip1Icon: {
    top: 282,
    left: 48,
    width: 36,
    height: 37,
    position: "absolute",
  },
  icon: {
    top: 279,
    left: 126,
    width: 48,
    height: 41,
    position: "absolute",
  },
  groupChild27: {
    height: "132.43%",
    top: "-32.43%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChild28: {
    right: "66.93%",
    left: "26.13%",
    top: "33.78%",
    height: "37.84%",
  },
  groupChild29: {
    height: "36.49%",
    top: "32.43%",
    right: "86.4%",
    left: "6.13%",
  },
  groupChild30: {
    top: "31.08%",
    right: "6.13%",
    left: "86.4%",
    height: "37.84%",
  },
  path23Icon: {
    height: "97.63%",
    bottom: "2.37%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  text14: {
    top: "19.28%",
    left: "31.18%",
  },
  path23Parent: {
    height: "20.09%",
    top: "16.22%",
    right: "4.53%",
    bottom: "63.7%",
    left: "91.59%",
  },
  groupChild31: {
    height: "32.61%",
    width: "5.87%",
    right: "48.53%",
    bottom: "33.61%",
    left: "45.6%",
    top: "33.78%",
    position: "absolute",
  },
  groupIcon1: {
    height: "182.61%",
    width: "182.43%",
    top: "-13.77%",
    right: "-41.22%",
    bottom: "-68.84%",
    left: "-41.22%",
    position: "absolute",
  },
  text15: {
    top: "15.43%",
    left: "28.72%",
  },
  groupGroup: {
    height: "19.63%",
    top: "20.27%",
    right: "45.72%",
    bottom: "60.1%",
    left: "50.4%",
  },
  groupChild32: {
    height: "35.14%",
    top: "36.49%",
    right: "26.13%",
    left: "66.93%",
  },
  vectorContainer: {
    height: "9.11%",
    top: "90.89%",
    left: "0%",
  },
  principal: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Principal;
