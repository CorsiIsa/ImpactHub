import { StyleSheet,SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import UserHome from "../components/UserHome";
import Post from "../components/Post";
const userProps = {
    source: 'https://tse3.mm.bing.net/th?id=OIP.eCzicf5fXiX9e1zUIJjo9wHaGv&pid=Api&P=0&h=180',
    username: 'Mercedes-Benz',
    qtdPost: '500 Posts'
}

const Post1Props = {
    sourceImg: 'https://tse3.mm.bing.net/th?id=OIP.eCzicf5fXiX9e1zUIJjo9wHaGv&pid=Api&P=0&h=180',
    username: 'Mercedes-Benz',
    sourcePost: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a472e131451297.61953112e628b.jpg',
}
const Post2Props = {
    sourceImg: 'https://pixeldreams.com/wp-content/uploads/2018/05/Volkswagen-logo.png',
    username: 'Volkswagen',
    sourcePost: 'https://s2.glbimg.com/A8vLFMrjpaWIEeg1nXnHjLkZ35g=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/e/C/VP2AvbRbCge7k8NZgK5Q/man-caminhao-eletrico.jpeg',
}
const Post3Props = {
    sourceImg: 'https://tse3.mm.bing.net/th?id=OIP.jh06l6ofXkEvJRH3mDcOBAHaHa&pid=Api&P=0&h=180',
    username: 'Weidmueller',
    sourcePost: 'https://blog.egestor.com.br/wp-content/uploads/5-dicas-de-acoes-de-responsabilidade-social-para-pequenas-empresas-1160x770.jpeg',
}
export default function Home(){
    return(
        <View>
            <ScrollView>
                <View>
                <Header/>
                <UserHome username={userProps.username} source={userProps.source} qtdPost={userProps.qtdPost}/>
                <Post sourceImg={Post1Props.sourceImg} username={Post1Props.username} sourcePost={Post1Props.sourcePost}/>
                <Post sourceImg={Post2Props.sourceImg} username={Post2Props.username} sourcePost={Post2Props.sourcePost}/>
                <Post sourceImg={Post3Props.sourceImg} username={Post3Props.username} sourcePost={Post3Props.sourcePost}/>
                </View>
            </ScrollView>
        </View>
    )
        
}