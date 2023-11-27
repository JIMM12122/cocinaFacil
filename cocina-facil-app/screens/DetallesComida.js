import React from "react";
import { Text, StyleSheet, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const DetallesDeLaComida = ({ navigation }) => {
  const recetas = [
    {
      id: 1,
      nombre: 'Pizza peperoni',
      imagen: require('../assets/images/pizza.png'),
      ingredientes: [
        '200g de pasta (espaguetis, fettuccine, etc.)',
        '150g de panceta o bacon',
        '3 huevos',
        '1 taza de queso parmesano rallado',
        'Sal y pimienta al gusto',
      ],
      pasos: [
        'Cocina la pasta al dente según las instrucciones del paquete.',
        'En una sartén grande, cocina la panceta o bacon hasta que esté crujiente. Luego, retira el exceso de grasa.',
        'En un tazón aparte, bate los huevos y mezcla con el queso parmesano rallado. Agrega sal y pimienta al gusto.',
        'Escurre la pasta y agrégala a la sartén con la panceta. Mezcla bien.',
        'Retira la sartén del fuego y agrega la mezcla de huevos y queso, revolviendo rápidamente para que la salsa se adhiera a la pasta sin cuajarse demasiado.',
        'Sirve caliente, espolvorea más queso parmesano y pimienta negra si lo deseas. ¡Disfruta de tu pasta carbonara!',
      ],
    },
    
  ];

  return (
    <ScrollView style={styles.container}>

      <SafeAreaView style={{ flex: 0, paddingBottom: 3 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 2 }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ backgroundColor: '#48BB78', padding: 10, borderTopRightRadius: 20, borderBottomLeftRadius: 20, marginLeft: 4 }}
              >
                <ArrowLeftIcon size={20} color='black' />
              </TouchableOpacity>
            </View>
        <View style={styles.header}>
        </View>
      </SafeAreaView>

      <View style={styles.content}>
        {recetas.map((receta) => (
          <View key={receta.id}>
            <Text style={styles.title}>{receta.nombre}</Text>
          <View style={{ justifyContent : 'center', alignItems : 'center'}}>
            <Image
                 source={require('../assets/images/pizza.png')}
                style={{ width: 200, height: 200, justifyContent : 'center', alignItems : 'center'}}
              />
          </View>

            <Text style={styles.subtitle}>Ingredientes:</Text>
            {receta.ingredientes.map((ingrediente, index) => (
              <Text key={index} style={styles.ingrediente}>{ingrediente}</Text>
            ))}

            <Text style={styles.subtitle}>Pasos:</Text>
            {receta.pasos.map((paso, index) => (
              <Text key={index} style={styles.paso}>{`${index + 1}. ${paso}`}</Text>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
  },
  backButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  recetaImagen: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  ingrediente: {
    fontSize: 16,
    marginBottom: 5,
  },
  paso: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DetallesDeLaComida;
