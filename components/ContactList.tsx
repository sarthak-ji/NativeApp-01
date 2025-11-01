import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uId: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extraordinary teacher❤️',
            imageUrl: 'https://imgs.search.brave.com/2iQomwJHG9TxXW4t2_Y46h-Vn4gCYWHvIvwJvaXZTnI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uZXdz/Lmh5YnJpcXVlcy5j/b20vaG5uX2ZpbGVz/LzIwMjQvMDIvaW1h/Z2UtMTEzMi5wbmc'
        },
        {
            uId: 2,
            name: 'Sarthak Srivastava',
            status: 'Always excited to learn...',
            imageUrl: 'https://avatars.githubusercontent.com/u/153615727?v=4'
        },
        {
            uId: 3,
            name: 'Sanket Singh',
            status: 'Making your online transaction smooth',
            imageUrl: 'https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg'
        },
        {
            uId: 4,
            name: 'Harsh Sharma',
            status: 'Revolutionizing the domain of Web Dev',
            imageUrl: 'https://imgs.search.brave.com/yBDxzwZv4zDntX0PET3p6kIjAO3eRFR8SU2xLdkCBGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pay5p/bWFnZWtpdC5pby9z/aGVyeWlhbnMvQWJv/dXQlMjBVcy9oYXJz/aEJoYWl5YV9nSWlD/MkRSWEhwLnBuZz91/cGRhdGVkQXQ9MTcx/MDQ5NjMyODk2MA'
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView 
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map((item) => (
            <View key={item.uId} style={styles.userCard}>
                <Image
                source={{
                    uri: item.imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.userStatus}>{item.status}</Text>
                </View>
            </View>
        ))}
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
        paddingVertical: 12
    },

    userCard: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#3c4344ff',
        margin: 1,
        borderRadius: 12
    },

    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 10
    },

    userName: {
        color: 'white',
        fontSize: 16.5,
        fontWeight: '600'
    },

    userStatus: {
        color: '#d3cfcfff',
        fontSize: 14,
    }
})