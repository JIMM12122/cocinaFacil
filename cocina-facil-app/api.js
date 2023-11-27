import client from './sanity'
import sanityClient from './sanity'
let sanityQuery = (query, params) => sanityClient.fetch(query, params)

export const getFeaturedResturants = () => {
  return sanityQuery(`
        *[_type == 'featured'] {
            ...,
            resturants[]->{
            ...,
            type->{
                name
            },
            dishes[]->
            }
        }
    `)
}

export const getDishesByCategory = (categoryId) => {
  return sanityQuery(`*[_type == "dish" && category._ref == "${categoryId}"]`, {
    categoryId,
  })
}

export const getCategories = async () => {
  try {
    const response = await sanityQuery(`
      *[_type == 'category']
    `)

    return response
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error // Puedes manejar el error según sea necesario, aquí simplemente lo vuelvo a lanzar
  }
}

export const getFeaturedResturantById = (id) => {
  return sanityQuery(
    `
        *[_type == 'featured' && _id == $id] {
            ...,
            resturants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }
            }
        }[0]
    `,
    { id },
  )
}

export const saveCustomer = async (customer) => {
  const customerData = {
    _type: 'Customer',
    ...customer,
  }

  try {
    const response = await sanityClient.mutate(customerData)

    return response
  } catch (error) {
    console.log('Error saving customer: ', error)
    throw error
  }
}

export const updateCostumer = async (customer) => {
  try {
    const response = await client.patch(customer._id).set(customer).commit()

    return response
  } catch (error) {
    console.log('Error updating customer: ', error)
    throw error
  }
}

export const loginCustomer = async (email, password) => {
  try {
    const customers = await sanityQuery(
      `
      *[_type == 'Customer' && email == $email]{
        _id,
        password,
        name,
        phone,
        address[]->{
          ...
        }
      }
    `,
      { email },
    )

    if (customers.length === 0) {
      throw new Error('Customer not found')
    }

    const customer = customers[0]
    const isPasswordValid = comparePasswords(password, customer.password)

    if (!isPasswordValid) {
      throw new Error('Invalid password')
    }

    return {
      customerId: customer._id,
      email: email,
      name: customer.name,
      phone: customer.phone,
      address: customer.address,
    }
  } catch (error) {
    console.log('Error logging in: ', error)
    throw error
  }
}

const comparePasswords = (inputPassword, hashedPassword) => {
  return inputPassword === hashedPassword
}
