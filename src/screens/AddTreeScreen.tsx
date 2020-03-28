import React from 'react'

import { StyleSheet, View } from 'react-native'
import { Title, Paragraph } from 'react-native-paper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
})

export function AddTreeScreen() {
  return (
    <View style={styles.container}>
      <Title>AddTreeScreen</Title>
      <Paragraph>do something here</Paragraph>
    </View>
  )
}