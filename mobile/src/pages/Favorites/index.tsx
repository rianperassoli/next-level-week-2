
import React, { useState } from 'react'
import { View, AsyncStorage } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'

import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'
import { useFocusEffect } from '@react-navigation/native'

function Favorites() {

  const [favorites, setFavorites] = useState([])

  useFocusEffect(() => {
    loadFavorites()
  })

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)

        setFavorites(favoritedTeachers)
      }
    })
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={styles.teacherListContent}
      >
        {favorites.map((teacher: Teacher) =>
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited
          />
        )}
      </ScrollView>
    </View>
  )
}

export default Favorites