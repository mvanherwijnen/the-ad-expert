require('dotenv').config()
const contentful = require('contentful')

module.exports = contentful.createClient({
    space: 'dycfpfjpribp',
    accessToken: 'SRsSPM1SqMKDFmisYllMwwSxl_hzK417H0-zh4vS0ZI'
})
