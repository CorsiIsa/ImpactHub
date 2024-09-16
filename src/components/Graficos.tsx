import { Image, View, StyleSheet, Text } from "react-native";

export default function Graficos(){
    return(
        <View>
            <Text style={styles.TextoInfo} >Indice E</Text>
            <View style={styles.PrincipalContainer}>
                <View style={styles.containerE}></View>
                <Text style={styles.TextoInfo}>80%</Text>
            </View>
            <Text style={styles.TextoInfo} >Indice S</Text>
            <View style={styles.PrincipalContainer}>
                <View style={styles.containerS}></View>
                <Text style={styles.TextoInfo}>60%</Text>
            </View>
            <Text style={styles.TextoInfo} >Indice G</Text>
            <View style={styles.PrincipalContainer}>
                <View style={styles.containerG}></View>
                <Text style={styles.TextoInfo}>40%</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    TextoInfo : {
        color: '#DAFFFB',
        fontSize: 18,
        marginTop: 40,
        marginLeft: 20
    },
    PrincipalContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-start'
    },
    containerG: {
      width: 150,
      height:30,
      backgroundColor: '#64CCC5',
      marginTop:40,
      marginLeft: 20
    },
    containerS: {
        width: 210,
        height:30,
        backgroundColor: '#64CCC5',
        marginTop:40,
        marginLeft: 20
    },
    containerE: {
        width: 280,
        height:30,
        backgroundColor: '#64CCC5',
        marginTop:40,
        marginLeft: 20
    }
  })