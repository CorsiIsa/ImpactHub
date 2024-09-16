import { ScrollView, View } from "react-native";
import HeaderPerfil from "../components/HeaderPerfil";
import UserPerfil from "../components/UserPerfil";
import Post from "../components/Post";
import Certificado from "../components/Certificado";

const PropHeaderPerfil = {
    source: 'https://tse3.mm.bing.net/th?id=OIP.eCzicf5fXiX9e1zUIJjo9wHaGv&pid=Api&P=0&h=180',
    username: 'Mercedes-Benz',
}

const Post1Props = {
    sourceImg: 'https://tse3.mm.bing.net/th?id=OIP.eCzicf5fXiX9e1zUIJjo9wHaGv&pid=Api&P=0&h=180',
    username: 'Mercedes-Benz',
    sourcePost: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a472e131451297.61953112e628b.jpg',
}
const Post2Props = {
    sourceImg: 'https://tse3.mm.bing.net/th?id=OIP.eCzicf5fXiX9e1zUIJjo9wHaGv&pid=Api&P=0&h=180',
    username: 'Mercedes-Benz',
    sourcePost: 'https://t.ctcdn.com.br/gmiFhNvf3THkoiveoUYDj2zaBek=/1200x675/smart/i310330.jpeg',
}
const Post3Props = {
    sourceImg: 'https://tse3.mm.bing.net/th?id=OIP.eCzicf5fXiX9e1zUIJjo9wHaGv&pid=Api&P=0&h=180',
    username: 'Mercedes-Benz',
    sourcePost: 'https://tse3.mm.bing.net/th?id=OIP.4-JgCK26gstK2hNRazWGrgHaE7&pid=Api&P=0&h=180',
}

const CertificadoProp={
    year : '2020',
    date: '28/12/2020'
}
export default function Perfil(){
    return(
        <View>
            <ScrollView>
                <HeaderPerfil/>
                <UserPerfil source={PropHeaderPerfil.source} username={PropHeaderPerfil.username}/>
                <Post  sourceImg={Post1Props.sourceImg} username={Post1Props.username} sourcePost={Post1Props.sourcePost}/>
                <Post  sourceImg={Post2Props.sourceImg} username={Post2Props.username} sourcePost={Post2Props.sourcePost}/>
                <Post  sourceImg={Post3Props.sourceImg} username={Post3Props.username} sourcePost={Post3Props.sourcePost}/>
                <Certificado year={CertificadoProp.year} date={CertificadoProp.date}/>
            </ScrollView>
        </View>
    )
        
}