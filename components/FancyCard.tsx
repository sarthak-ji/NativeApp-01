import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Image</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2021/10/07/10/43/hawa-mahal-6688170_640.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City,</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, itis on the edge of the CityPalace.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  card: {
    height: 400,
    width: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },

  cardElevated: {
    backgroundColor: 'white',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },

  cardImage: {
    height: 220,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    marginBottom: 10,
  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },

  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6
  },

  cardLabel: {
    color: 'black',
    fontSize: 14,
    marginBottom: 6
  },

  cardDescription: {
    color: 'black',
    marginBottom: 12,
    marginTop: 6
  },

  cardFooter: {
    color: 'black',
  },
});
