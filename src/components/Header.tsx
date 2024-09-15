import { StyleSheet, Text, View } from "react-native"

export default function Header() {
    return (
      <View style={styles.header}>
            <Text style={styles.text}>Impact Hub</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 100,
      backgroundColor: '#001C30',
      marginTop:30,
    },
    text:{
        marginTop: 15,
        color: '#DAFFFB',
        fontSize:50,
        textAlign:'center',
        marginBottom:10,
    }
  })