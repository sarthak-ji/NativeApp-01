import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={ styles.headingText }>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color: "black"}}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color: "black"}}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color: "black"}}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color: "black"}}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color: "black"}}>more..</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color: "black"}}>🤞</Text>
        </View>
      </ScrollView>
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
    padding: 8
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

  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
        height: 1,
        width: 1
    },
    shadowColor: 'black'
  }
})