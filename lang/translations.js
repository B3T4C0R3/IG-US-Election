import axios from 'axios'
export default async (context, locale) => {
  return await axios
    .get(`https://api.betacore.nl/language/5f88aa1c6e672b7476dacd37`)
    .then(res => {
      var language = res.data.find(language => language.code === locale)
      return language.translations
    })
}
