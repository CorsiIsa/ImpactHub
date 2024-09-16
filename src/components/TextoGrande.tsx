import { View, StyleSheet, Text } from "react-native";

interface PropTextos {
    titulo?: string,
    corpo: string
}

export default function TextosGrandes({titulo, corpo}: PropTextos){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.corpo}>{corpo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#001C30',
    },
    titulo:{
        color: '#DAFFFB',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
        marginTop: 20
    },
    corpo:{
        color: '#DAFFFB',
        textAlign: 'justify',
        fontSize: 20,
        fontWeight: 'medium'
    },
    fotoIntegrantes:{
        width: '100%',
        height: 350,
        marginTop: 20,
    }
})