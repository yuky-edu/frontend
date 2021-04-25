import Vue from 'vue'
import Global from '/yglobal'

Global['CLASS'] = {
  /**
   * Add entity data in state.
   *
   * @param Object Master data entity in state
   * @param Objet New data
   */
  addEntity: function(entity, data) {

  },

  /**
   * Remove entity data in state.
   *
   * @param Object Master data entity in state
   * @param Int Id entity
   */
  removeEntity: function(myEntity, id) {
    const key = 'entity_' + $params.code
    const data = myEntity[key]
    const index = this.searchEntity(data, id)
    data.splice(index, 1)
  },

  /**
   * Search entity by id entity.
   *
   * @param Array Entity data
   * @param Int Id entity will be search
   * @return Int Index of array
   */
  searchEntity: function(array, id) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id == id) return i
    }
    return false
  },

  /**
   * Rebuild entity.
   *
   * @param Object Singgle entity
   */
  rebuildEntity: (data) => {
    const answerKey = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
    const label = ['A', 'B', 'C', 'D', 'E', 'F']

    // rebuild answer
    if (data.type == 'q') {
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
    }

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
}

Global['PLAYER'] = {

}

export default Global
