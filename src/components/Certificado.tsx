import { Image, StyleSheet, Text, View } from "react-native";

interface CertificadoProps {
    year : string,
    date: string
}

export default function Certificado({ year, date}: CertificadoProps){
    return(
        <View style={styles.containerPrincipal}>
        <View style={styles.userContainer}>
            <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.5qnAUq_RXq46SwahQwVVZAHaHa&pid=Api&P=0&h=180'}} style={styles.userImage} />
            <View style={styles.textosInfo}>
                <Text style={styles.titulo}>Certificado ESG {year}</Text>
                <Text style={styles.info}>Emitido em: {date}</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    containerPrincipal:{
        borderWidth: 2,
        borderColor: '#176B87',
        backgroundColor:'#176B87',
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
    titulo: {
        
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#DAFFFB'
    },
    info: {
        marginLeft: 4,
        fontSize: 14,
        fontWeight: 'medium',
        color: '#DAFFFB'
    },
})