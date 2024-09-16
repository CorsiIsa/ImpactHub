import { StyleSheet, Text, View } from "react-native"
import UserPerfil from "./UserPerfil"

export default function HeaderPerfil() {
    return (
      <View style={styles.header}>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 100,
      backgroundColor: '#001C30',
    },
    text:{
        marginTop: 15,
        color: '#DAFFFB',
        fontSize:50,
        textAlign:'center',
        marginBottom:10,
    }
  })