import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RootStackParamsList } from '../types/navigation';

type FormCadastroScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'FormEndereco'>

type Props = {
  navigation: FormCadastroScreenNavigationProp,
}
export default function FormEndereco({ navigation}: Props) {
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [error, setError] = useState('');
    //@ts-ignore
    const handleCepChange = async (text) => {
        setCep(text);

        // Verifica se o CEP tem 8 dígitos
        if (text.length === 8) {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${text}/json/`);

                if (response.data.erro) {
                    throw new Error('CEP não encontrado');
                }

                setLogradouro(response.data.logradouro);
                setBairro(response.data.bairro);
                setCidade(response.data.localidade);
                setEstado(response.data.uf);
                setError('');
            } catch (err) {
                setLogradouro('');
                setBairro('');
                setCidade('');
                setEstado('');
                setError('CEP não encontrado ou inválido');
            }
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>Cadastro</Text>
                <Text style={styles.label}>Nome Empresa:</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.label}>CNPJ:</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.label}>Inscrição Estadual:</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.label}>Razão Social:</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.label}>CEP:</Text>
                <TextInput
                    style={styles.input}
                    value={cep}
                    onChangeText={handleCepChange}
                    keyboardType="numeric"
                    maxLength={8}
                />
                <Text style={styles.label}>Logradouro:</Text>
                <TextInput
                    style={styles.input}
                    value={logradouro}
                />
                <Text style={styles.label}>Bairro:</Text>
                <TextInput
                    style={styles.input}
                    value={bairro}
                />
                <Text style={styles.label}>Cidade:</Text>
                <TextInput
                    style={styles.input}
                    value={cidade}
                />
                <Text style={styles.label}>Estado:</Text>
                <TextInput
                    style={styles.input}
                    value={estado}
                />
                <Button title='Cadastrar' onPress={() => navigation.navigate('Home')} />
                {error ? <Text style={styles.error}>{error}</Text> : null}
            </ScrollView>        
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingHorizontal: 8,
        backgroundColor: '#176B87',
        flex:1,
        width:'100%'
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#DAFFFB',
        paddingHorizontal: 4,
        marginLeft: 8,
    },
    input: {
        height: 60,
        width: 400,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#D9D9D9',
        borderRadius: 8,
        paddingHorizontal: 8,
        justifyContent: 'center',
        marginLeft: 8,
        marginBottom: 20,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
    titulo:{
        color: '#001C30',
        fontSize:50,
        textAlign:'center',
        marginBottom:20,
    }
});