import { Image, StyleSheet, Text, View } from "react-native";

interface UserProps {
  source: string,
  username: string,
}

export default function UserPerfil({ source, username}: UserProps) {
  return (
    <View style={styles.userContainer}>
      <Image source={{ uri: source }} style={styles.userImage} />
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.infoPerfil}>Indice atual 95%</Text>
      <Text style={styles.infoPerfil}>5º lugar no ranking</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  userImage: {
    width: 120,
    height: 120,
    marginTop: -60,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001C30'
  },
  infoPerfil: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#484646'
  },
})