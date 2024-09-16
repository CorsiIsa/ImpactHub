import { ScrollView, Text, View } from "react-native";
import HeaderSobreNos from "../components/HeaderSobreNos";
import TextosSobreNos from "../components/TextosSobreNos";
import TextosGrandes from "../components/TextoGrande";

const PropTextos = {
    titulo: "Introdução",
    corpo: ` 
    A adoção de boas práticas de ESG (Environmental, Social, and Governance) é um fator essencial para o sucesso sustentável das empresas modernas. Com a crescente pressão de reguladores, investidores e consumidores por maior transparência e responsabilidade social, as organizações enfrentam desafios significativos para acompanhar as regulamentações e manter um impacto positivo no mercado. Para enfrentar esses desafios, propomos uma plataforma ESG que automatiza a coleta de dados, integra com sistemas de negócios, e oferece um ranking público de conformidade ESG.
    Atualmente, empresas que buscam implementar práticas ESG eficazes enfrentam obstáculos como a coleta de dados fragmentados, a dificuldade de se manter em conformidade com regulamentações variadas e a necessidade de obter certificações que provem o seu compromisso com a sustentabilidade. Além disso, há uma falta de ferramentas que conectem esses dados de sustentabilidade diretamente aos sistemas de negócios operacionais e de relacionamento com clientes, o que dificulta uma gestão unificada.
    `
}
const Prop2Textos = {
    corpo: "  "
}
const Prop3Textos = {
    titulo: "Nossa plataforma ESG busca resolver esses desafios ao:",
    corpo: `
    •	Automatizar o processo de coleta e análise de dados ESG
    •	 Facilitar a conformidade com regulamentos e certificações.
    •	 Oferecer uma visão integrada de dados ESG, operacionais e de relacionamento com clientes.
    •	 Engajar o público e gerar insights valiosos através de um ranking de conformidade ESG e funcionalidades interativas.
  `
}
const Prop4Textos = {
    titulo: "1.	Automação e Insights Inteligentes",
    corpo: `
    A plataforma automatiza a coleta de dados ESG, simplificando processos internos e reduzindo os custos operacionais. Além disso, utiliza análise preditiva para antecipar riscos relacionados às práticas de sustentabilidade, oferecendo às empresas uma vantagem competitiva. O uso de inteligência artificial permite que as empresas identifiquem problemas potenciais antes que eles impactem suas operações, além de gerar insights acionáveis para uma gestão estratégica.
  `
}
const Prop5Textos = {
    titulo: "2.	Conformidade e Certificação",
    corpo: `
    Manter-se em conformidade com as normas ESG é um desafio contínuo para empresas de todos os setores. Nossa plataforma fornece ferramentas que simplificam esse processo, ajudando as empresas a acompanhar atualizações regulatórias e a obter certificações relevantes, como ISO 14001 e SA8000. Isso não só melhora a eficiência interna, mas também aumenta a credibilidade da empresa perante stakeholders e o mercado.
  `
}

const Prop6Textos = {
    titulo: "3.	Integração com Ferramentas de Negócios",
    corpo: `
    Um diferencial significativo da nossa plataforma é a sua capacidade de integrar dados ESG com sistemas de ERP (Enterprise Resource Planning) e CRM (Customer Relationship Management). Essa integração permite que as empresas obtenham uma visão unificada de suas operações, relacionamentos com clientes e práticas de sustentabilidade. Utilizamos APIs para conectar e sincronizar esses sistemas, assegurando que as informações fluam de forma contínua e eficaz, proporcionando uma análise mais holística e precisa do desempenho ESG da empresa.
  `
}

const Prop7Textos = {
    titulo: "4.	Ranking Público e Engajamento",
    corpo: `
    Além de ser uma ferramenta poderosa para as empresas, nossa plataforma oferece uma interface acessível ao público em geral. Um dos principais recursos é o ranking de conformidade ESG, que destaca as empresas líderes em práticas sustentáveis, aumentando sua visibilidade. O público também é engajado através de funcionalidades interativas, como pesquisas de satisfação e elementos de gamificação, que capturam dados importantes sobre a percepção das práticas ESG. Essa abordagem não só promove a transparência, como também incentiva as empresas a melhorar suas práticas, visando uma melhor colocação no ranking.
  `
}
const Prop8Textos = {
    titulo: "Integrantes",
    corpo: `
    BRUNO MATHEWS CICCIO DE OLIVEIRA  
    RM 99097
    ISABELLE CORSI  RM97751
    JOSÉ LUIZ FERREIRA DUARTE  RM99488
    MARINA DE SOUZA CUCCO  RM551569
    THALITA FACHINETE DE ALENCAR  RM99292

  `
}
export default function SobreNos(){
    return(
        <View>
            <ScrollView>
                <HeaderSobreNos/>
                <TextosGrandes titulo={PropTextos.titulo} corpo={PropTextos.corpo}/>
                <TextosSobreNos corpo={Prop2Textos.corpo}/>
                <TextosSobreNos titulo={Prop3Textos.titulo} corpo={Prop3Textos.corpo}/>
                <TextosSobreNos titulo={Prop4Textos.titulo} corpo={Prop4Textos.corpo}/>
                <TextosSobreNos titulo={Prop5Textos.titulo} corpo={Prop5Textos.corpo}/>
                <TextosSobreNos titulo={Prop6Textos.titulo} corpo={Prop6Textos.corpo}/>
                <TextosSobreNos titulo={Prop7Textos.titulo} corpo={Prop7Textos.corpo}/>
                <TextosSobreNos titulo={Prop8Textos.titulo} corpo={Prop8Textos.corpo}/>
            </ScrollView>
        </View>
    )
}