
import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

import giveClassesBGImg from '../../assets/images/give-classes-background.png'
import PageHeader from '../../components/PageHeader'

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  )
}

export default TeacherList