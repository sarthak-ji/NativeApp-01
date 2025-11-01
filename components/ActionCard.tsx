import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 21 - ES12
            </Text>
        </View>
        <Image
            source={{
                uri: 'https://imgs.search.brave.com/HScx8sr72BNj05YzxOwuHKNMYCqcgH7d_nxiuYTo4Rc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/ODEwNjYzNi9waG90/by9yaXZlci1pbmR1/cy1mbG93aW5nLXRo/cm91Z2gtbGVoLXRv/d2FyZHMtc3Rha25h/LWdvbXBhLWxhZGFr/aC1pbmRpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9QWgw/T2ZHd3ZLQjFHR1da/eHBHMXlyUnhpT1pF/ajBZRFB0dFhwTlNh/LV9OST0',
            }}
            style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={5}>
                Just like every year, JavaScript brings in new features. This year JS is bringing 4 new features, which are almost in production rollout. Iwon't be wasting much more time and directly jump to code with easy to understand examples.
            </Text>
      </View>
      <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2021-with-examples-3hfm')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/')}>
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
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
    card: {
        height: 404,
        width: 340,
        backgroundColor: 'white',
        marginVertical: 12,
        marginHorizontal: 16,
        borderRadius: 6
    },
    elevatedCard: {
        backgroundColor: '#fabb84ff',
        elevation: 4,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 6
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    headerText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 200
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 9
    },
    socialLinks: {
        marginHorizontal: 50,
        textDecorationLine: 'underline',
        color: 'blue',
        backgroundColor: '#fbd1aae4',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 100,
        borderColor: 'orange',
        borderStyle: 'solid',
        borderWidth: 1
    }
})