import { View, StyleSheet, ScrollView } from "react-native";
import Certificado from "../components/Certificado";
import Graficos from "../components/Graficos";
import HeaderIndices from "../components/HeaderIndices";
import Projetos from "../components/Projetos";

const ProjetosProps = {
    title : 'Ambition 2039',
    desc: 'É o plano estratégico da Mercedes-Benz para alcançar a neutralidade de carbono em toda a sua cadeia de valor até 2039. Lançado em 2019, o projeto tem como objetivo transformar a empresa em um líder sustentável no setor automotivo, com foco em três áreas principais: descarbonização, eletrificação da frota e uso de energias renováveis.',
    urlFoto : 'https://tse1.mm.bing.net/th?id=OIP.on27wVNJWBTcxO5Fzu28jQHaFj&pid=Api&P=0&h=180'
}

export default function Insight(){
    return(
        <View style={styles.container}>
            <ScrollView>
                <HeaderIndices/>
                <Graficos/>
                <Projetos title={ProjetosProps.title} desc={ProjetosProps.desc} urlFoto={ProjetosProps.urlFoto}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#001C30'
    }
  })