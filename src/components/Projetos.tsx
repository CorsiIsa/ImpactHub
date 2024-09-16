import { StyleSheet, Text, View, Image} from "react-native";

interface ProjetosProps {
    title : string,
    desc: string,
    urlFoto : string
}
export default function Projetos({title, desc, urlFoto}: ProjetosProps){
    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.textosInfo}>
                <Text style={styles.titulo}>{title}</Text>
            </View>
            <View style={styles.textosInfo}>
                <Text style={styles.descricao}>{desc}</Text>
            </View>
            <View style={styles.postContainer}>
                <Image source={{ uri: urlFoto }} style={styles.userPost} />
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
        marginTop: 50
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
    postContainer: {
        marginStart: 10,
        marginEnd: 10
    },
    textosInfo:{
        padding: 5,
    },
    titulo: {
        marginTop: 7,
        marginLeft: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DAFFFB'
    },
    descricao: {
        marginTop: 7,
        marginLeft: 2,
        fontSize: 15,
        color: '#DAFFFB',
        marginBottom: 10
    },
})