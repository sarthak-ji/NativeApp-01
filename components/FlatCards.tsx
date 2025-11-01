import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={ styles.headingText }>Flat Cards</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={{color: "black"}}>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={{color: "black"}}>Olive</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={{color: "black"}}>Cyan</Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },

  container: {
    flex: 1,
    flexDirection: 'row'
  },

  card: {
    width: 100,
    height: 100,
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8
  }, 

  cardOne: {
    backgroundColor: '#EF5354',
    marginHorizontal: 8
  },

  cardTwo: {
    backgroundColor: 'olive',
    marginHorizontal: 8
  },

  cardThree: {
    backgroundColor: 'cyan',
    marginHorizontal: 8
  }
})