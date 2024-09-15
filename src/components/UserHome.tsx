import { Image, StyleSheet, Text, View } from "react-native";

interface UserHomeProps {
  source: string,
  username: string,
  qtdPost: string
}

export default function UserHome({ source, username, qtdPost}: UserHomeProps) {
  return (
    <View style={styles.userContainer}>
      <Image source={{ uri: source }} style={styles.userImage} />
      <View style={styles.textosInfo}>
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.textosPub}>
        <Text style={styles.textpub}>{qtdPost}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  userImage: {
    width: 60,
    height: 60,
    marginTop: 5,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#DAFFFB'
  },
  userContainer: {
    flexDirection: 'row', 
    justifyContent: 'flex-start'
  },
  textosPub: {
    flexDirection: 'row', 
    marginLeft: 110,
    marginTop: 9
  },
  textosInfo:{
    padding: 5
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001C30',
    marginTop: 15,
    marginLeft: 10
  },
  textpub:{ 
    fontSize: 15,
    fontWeight: 'medium',
    color: '#001C30',
    textAlign:'right',
    marginTop: 15,
    marginLeft: 10
  }
})