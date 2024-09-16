import { StyleSheet, View, Text, Image } from "react-native"


export default function HeaderSobreNos(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>5 TECH COLLECTIVE</Text>
            <Text style={styles.subtitulo}>IMPACT HUB</Text>
            <Image source={{ uri: "https://media.licdn.com/dms/image/v2/D4D22AQGwmsY-OcHx5w/feedshare-shrink_1280/feedshare-shrink_1280/0/1695944699774?e=1729123200&v=beta&t=O6PyCaCZU6jPqBtjZrv5d6rBsVptEOYsbRTLehyoHvs" }} style={styles.fotoIntegrantes} />
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
        fontSize: 40,
        marginTop: 10
    },
    subtitulo:{
        color: '#DAFFFB',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'medium'
    },
    fotoIntegrantes:{
        width: '100%',
        height: 350,
        marginTop: 20,
    }
})