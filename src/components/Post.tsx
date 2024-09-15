import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

interface UserHomeProps {
  sourceImg: string,
  username: string,
  sourcePost: string
}

export default function Post({ sourceImg, username, sourcePost}: UserHomeProps) {
  return (
    <View style={styles.containerPrincipal}>
        <View style={styles.userContainer}>
            <Image source={{ uri: sourceImg }} style={styles.userImage} />
            <View style={styles.textosInfo}>
                <Text style={styles.username}>{username}</Text>
            </View>
        </View>
        <View style={styles.postContainer}>
            <Image source={{ uri: sourcePost }} style={styles.userPost} />
        </View>
        <View style={styles.reacoesContainer}>
            <MaterialIcons name="favorite" size={25} color={'#001C30'} />
            <Text style={styles.reacoesPost}>30k</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerPrincipal:{
        borderWidth: 2,
        borderColor: '#176B87',
        margin: 10,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 20
    },
    infoContainer:{
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 20
    },
    userPost:{
        width: '100%',
        height: 200,
    },
    reacoesPost:{
        fontSize: 10,
        marginLeft: 2,
        marginTop: 10,
        marginBottom: 10
    },
    userImage: {
        width: 40,
        height: 40,
        marginTop: 5,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#DAFFFB'
    },
    reacoesContainer:{
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginTop: 5
    },
    userContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        padding: 10
    },
    postContainer: {
        marginStart: 10,
        marginEnd: 10
    },
    textosInfo:{
        padding: 5,
    },
    username: {
        marginTop: 7,
        marginLeft: 2,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#484646'
    },
    userSlug: {
        fontSize: 14,
        fontWeight: 'medium',
        color: '#484646'
    },
})