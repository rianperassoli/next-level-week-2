
import React, { ReactNode } from 'react'
import { Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import logoImage from '../../assets/images/logo.png'
import backIcon from '../../assets/images/icons/back.png'

import styles from './styles'

interface PageHeaderProps {
  title: string
  headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation()

  function handleNavigateBack() {
    navigate('Landing')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>

        <BorderlessButton onPress={handleNavigateBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImage} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        {headerRight}
      </View>

      {children}
    </View>
  )
}

export default PageHeader