const DEV = false
var apiURL = DEV ? 'http://localhost:8000/api' : 'https://unitedpatent.id/yuky/public/api'

export default {
  API_URL: apiURL,
  TOKEN: 'token',

  CLASS: { // Fungsi untuk mengelola data kelas

    /**
     * Add entity data in state.
     *
     * @param Object Master data entity in state
     * @param Objet New data
     */
    addEntity: function(entity, data) {

    },

    /**
     * Rebuild entity.
     *
     * @param Object Singgle entity
     */
    rebuildEntity: function(data) {
      const answerKey = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
      const label = ['A', 'B', 'C', 'D', 'E', 'F']

      // rebuild answer
      var answerList = []

      answerKey.forEach((key, i) => {
        if (data[key]) {
          var _answer = {
            correct: false,
            label: label[i],
            value: data[key],
          }
          if (key == data.correct) _answer.correct = true
          answerList.push(_answer)
        }
        delete data[key]
      })
      delete data.correct
      data.answer = answerList

      // Rebuild media
      const mediaTemp = {
        path: null,
        type: null,
        file: null,
      }
      if (data.media) {
        mediaTemp.path = data.media[0]
        mediaTemp.type = data.media[1]
      }

      data.media = mediaTemp

      // console.log(data)
    }

  },
}
