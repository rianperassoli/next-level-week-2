
import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'

import styles from './styles'

import giveClassesBGImg from '../../assets/images/give-classes-background.png'

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  )
}

export default Favorites