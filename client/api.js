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

export const getCategories = () => {
  return sanityQuery(`
        *[_type == 'category']
    `)
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
    const response = await sanityClient.create(customerData)

    return response
  } catch (error) {
    console.log('Error saving customer: ', error)
    throw error
  }
}

export const loginCustomer = async (email, password) => {
  try {
    const customers = await sanityQuery(
      `
      *[_type == 'Customer' && email == $email]{
        _id,
        password
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

    return { customerId: customer._id, email: email }
  } catch (error) {
    console.log('Error logging in: ', error)
    throw error
  }
}

const comparePasswords = (inputPassword, hashedPassword) => {
  return inputPassword === hashedPassword
}
