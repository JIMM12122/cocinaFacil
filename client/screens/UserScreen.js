import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';

const UserScreen = ({ route }) => {
  const { user } = route.params;
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [address, setAddress] = useState(user.address || '');

  return (
    <ScrollView>
      <View>
        <Text>Nombre del cliente:</Text>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Ingrese el nombre"
        />
      </View>

      <View>
        <Text>Correo electrónico:</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Ingrese el correo electrónico"
        />
      </View>

      <View>
        <Text>Teléfono:</Text>
        <TextInput
          value={phone}
          onChangeText={(text) => setPhone(text)}
          placeholder="Ingrese el teléfono"
        />
      </View>

      <View>
        <Text>Dirección:</Text>
        <TextInput
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholder="Ingrese la dirección"
        />
      </View>

      <Button title="Actualizar información" onPress={() => {}} />
    </ScrollView>
  );
};

export default UserScreen;
