
import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import TeacherItem from '../../components/TeacherItem'

import PageHeader from '../../components/PageHeader'

import styles from './styles'

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={styles.teacherListContent}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default TeacherList