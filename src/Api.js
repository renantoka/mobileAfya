import AsyncStorage from "@react-native-community/async-storage";

const BASE_API = 'https://dev-marcilio-afya.herokuapp.com/';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        const json = await req.json();
        return json;
    },
    //post para login
    login: async (registro, senha) => {
        const req = await fetch(`${BASE_API}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ registro, senha })
        });
        const json = await req.json();
        return json;
    },
    /*     "registro": "string",
      "nome": "string",
      "telefone": "string",
      "celular": "string",
      "email": "string",
      "senha": "string",
      "profissao": "string" */
    signUp: async (registro, nome, telefone, celular, email, senha, profissao) => {
        const req = await fetch(`${BASE_API}/specialist`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ registro, nome, telefone, celular, email, senha, profissao })
        });
        const json = await req.json();
        return json;
    },
    getPatients: async (lat = null, lng = null, address = null) => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/patients?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
        const json = await req.json();
        return json;
    }
};