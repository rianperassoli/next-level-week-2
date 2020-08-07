
import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

import giveClassesBGImg from '../../assets/images/give-classes-background.png'

function TeacherList() {
  const { goBack } = useNavigation()

  function handleNavigateBack() {
    goBack()
  }

  return (
    <View style={styles.container}>

      <ImageBackground
        resizeMode='contain'
        style={styles.content}
        source={giveClassesBGImg}
      >
        <Text style={styles.title}>
          TeacherList
			  </Text>

        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web
			  </Text>

      </ImageBackground>

      <RectButton
        style={[styles.okButton]}
        onPress={handleNavigateBack}
      >
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  )
}

export default TeacherList