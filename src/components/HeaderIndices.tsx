import { Text, StyleSheet, View } from "react-native";

export default function HeaderIndices(){
    return(
        <View style={styles.header}>
            <Text style={styles.text}>Índices ESG</Text>
            <Text style={styles.ano}>2024</Text>
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
        marginBottom:5,
    },
    ano: {
        fontSize: 20,
        fontWeight: 'medium',
        textAlign:'center',
        color: '#DAFFFB'
    },
  })