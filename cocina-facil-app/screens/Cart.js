import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native'
import GeneralButton from '../components/GeneralButton'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pizza', price: 5000, quantity: 1 },
    { id: 2, name: 'Hamburguesa', price: 5000, quantity: 1 },
  ])

  const [taxes, setTaxes] = useState(13)
  const [promoCode, setPromoCode] = useState('')

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )
  }
  const calculateTaxes = () => {
    return (calculateSubtotal() * taxes) / 100
  }
  const calculateTotal = () => {
    const subtotal = calculateSubtotal()
    return subtotal + (subtotal * taxes) / 100
  }

  const applyPromoCode = () => {
    alert('Código promocional aplicado con éxito')
  }

  const handleSubmit = () => {
    alert('Pedido realizado con éxito')
  }

  const removeItem = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item,
      )

      return updatedItems.filter((item) => item.quantity > 0)
    })
  }

  const AddMoreItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      ),
    )
  }

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>CRC {item.price.toFixed(2)}</Text>
      <Text style={styles.itemQuantity}>Cantidad: {item.quantity}</Text>
      <TouchableOpacity
        style={styles.addMoreButton}
        onPress={() => AddMoreItem(item.id)}
      >
        <Text style={styles.addMoreButtonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeItem(item.id)}
      >
        <Text style={styles.removeButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={styles.taxesContainer}>
        <Text style={styles.taxesText}>
          Impuestos: 13 % CRC {calculateTaxes().toFixed(2)}
        </Text>
      </View>

      <View style={styles.promoCodeContainer}>
        <TextInput
          style={styles.promoCodeInput}
          placeholder='Código promocional'
          value={promoCode}
          onChangeText={(text) => setPromoCode(text)}
        />
        <TouchableOpacity style={styles.applyButton} onPress={applyPromoCode}>
          <Text style={styles.applyButtonText}>Aplicar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.subtotalText}>
          Subtotal: CRC {calculateSubtotal().toFixed(2)}
        </Text>
        <Text style={styles.totalText}>
          Total: CRC {calculateTotal().toFixed(2)}
        </Text>
        <View>
          <GeneralButton title={'Realizar pedido'} onPress={handleSubmit} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
    marginLeft: 8,
  },
  addMoreButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
  },
  addMoreButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  taxesContainer: {
    marginTop: 16,
  },
  taxesText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  promoCodeContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
  },
  promoCodeInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  applyButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  totalContainer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 8,
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
})

export default Cart
