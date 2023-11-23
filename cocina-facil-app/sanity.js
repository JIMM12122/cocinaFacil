import sanityClient from '@sanity/client'
import imageBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: 'tgz0bo9w',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-03-25',
  token:
    'skDg2Gf4yMP9QSj1M9r2zQhzw8bG6Ft7mYuX6y0N0nJjTsa6VUzGiYJOmD7kI2Xao1xfIgQtYRiEFk5RIqX29PNsXJXQuXcgzIXgGt8hBvrS6XuKzzSihN57m3cvmZlY1br7YMZUG8FQppQuRCw92PYhWNNmO8GpSzMQbn12eRTnhmLybISY',
})

const builder = imageBuilder(client)
export const urlFor = (source) => builder.image(source)
export default client
