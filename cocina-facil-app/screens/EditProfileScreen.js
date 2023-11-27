import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { showMessage } from 'react-native-flash-message';
import * as Yup from 'yup';
import { themeColors } from '../theme';
import GeneralButton from '../components/GeneralButton';

const EditProfileSchema = Yup.object().shape({
  // Define los campos y validaciones para la edición del perfil
  // Por ejemplo, nombre, correo electrónico, etc.
});

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const handleOnSubmit = async (values, { resetForm }) => {
    try {
      // Lógica para actualizar el perfil en el servidor
      // Puedes llamar a una función de API para manejar esto
      console.log('Perfil actualizado:', values);
      resetForm();
      showMessage({
        message: 'Perfil actualizado correctamente',
        type: 'success',
      });
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      showMessage({
        message: 'Error al actualizar el perfil',
        type: 'danger',
      });
    }
  };

  return (
    <Formik
      initialValues={{ /* Inicializa los valores según tu modelo de datos */ }}
      validationSchema={EditProfileSchema}
      onSubmit={handleOnSubmit}
    >
      {({ values, handleSubmit, handleChange, errors, touched, handleBlur }) => (
        <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
          <SafeAreaView style={{ flex: 0, paddingBottom: 3 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 2 }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ backgroundColor: '#48BB78', padding: 10, borderTopRightRadius: 20, borderBottomLeftRadius: 20, marginLeft: 4 }}
              >
                <ArrowLeftIcon size={20} color='black' />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                 source={require('../assets/user.png')}
                style={{ width: 200, height: 200 }}
              />
            </View>
          </SafeAreaView>
          <View style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, flex: 1, backgroundColor: 'white', paddingHorizontal: 8, paddingTop: 8 }}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
              {/* Agrega campos de edición según tus necesidades */}
              <View style={{ marginBottom: 3 }}>
                <Text style={{ color: '#4B5563', marginLeft: 4 }}>Nombre</Text>
                <TextInput
                  style={{ padding: 16, backgroundColor: '#F3F4F6', color: '#4B5563', borderRadius: 20 }}
                  placeholder='Ingresa tu nombre'
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                {errors.name && touched.name ? (
                  <Text style={{ color: 'red', fontSize: 12 }}>{errors.name}</Text>
                ) : null}
              </View>
              <View style={{ marginBottom: 3 }}>
                <Text style={{ color: '#4B5563', marginLeft: 4 }}>Correo electrónico</Text>
                <TextInput
                  style={{ padding: 16, backgroundColor: '#F3F4F6', color: '#4B5563', borderRadius: 20 }}
                  placeholder='Ingresa tu correo electrónico'
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {errors.email && touched.email ? (
                  <Text style={{ color: 'red', fontSize: 12 }}>{errors.email}</Text>
                ) : null}
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text style={{ color: '#4B5563', marginLeft: 4 }}>Telefono</Text>
                <TextInput
                  style={{ padding: 16, backgroundColor: '#F3F4F6', color: '#4B5563', borderRadius: 20 }}
                  placeholder='Ingresa tu telefono'
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                />
                {errors.phone && touched.phone ? (
                  <Text style={{ color: 'red', fontSize: 12 }}>{errors.phone}</Text>
                ) : null}
              </View>


            </View>

            <View style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50, flex: 1, backgroundColor: 'white', paddingHorizontal: 8, paddingTop: 8 }}>
              <View>
                <GeneralButton title={'Guardar cambios'} onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default EditProfileScreen;
