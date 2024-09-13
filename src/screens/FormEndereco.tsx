import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export function FormEndereco() {
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
        <View style={styles.container}>
            <Text style={styles.label}>CEP:</Text>
            <TextInput
                style={styles.input}
                value={cep}
                onChangeText={handleCepChange}
                placeholder="Digite o CEP"
                keyboardType="numeric"
                maxLength={8}
            />
            <Text style={styles.label}>Logradouro:</Text>
            <TextInput
                style={styles.input}
                value={logradouro}
                editable={false}
            />
            <Text style={styles.label}>Bairro:</Text>
            <TextInput
                style={styles.input}
                value={bairro}
                editable={false}
            />
            <Text style={styles.label}>Cidade:</Text>
            <TextInput
                style={styles.input}
                value={cidade}
                editable={false}
            />
            <Text style={styles.label}>Estado:</Text>
            <TextInput
                style={styles.input}
                value={estado}
                editable={false}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
});