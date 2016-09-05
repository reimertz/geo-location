const fetch = require('isomorphic-fetch')
const micro = require('micro')

const srv = micro(async function (req, res) {
  const url = `http://ip-api.com/json/${req.headers['x-real-ip']}`

  try {
    const response = await fetch(url)
    const json = await response.json()

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify(json))
  }

  catch (error) {
    res.end(error)
  }

})

srv.listen(4000)

setInterval(() => {
  fetch('https://geo-location.api.reimertz.co')
}, (60 * 1000 * 5) )
