import { createContext, useContext, useState } from "react";
import * as AuthSession from 'expo-auth-session';
import {
    REDIRECT_URI,
    SCOPE,
    REPONSE_TYPE,
    CLIENT_ID,
    CDN_IMAGE
} from "../configs";
import { api } from "../services/api";

type User = {
    id: string;
    username: string;
    fristName: string;
    email: string;
    avatar: string;
    token: string;
}

type AuthContextData = {
    user: User;
    singIn: () => Promise<void>
    loading: boolean;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        acess_token: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function singIn() {
        try {
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${REPONSE_TYPE}&scope=${SCOPE}`

            const { type, params } = await AuthSession.startAsync({ authUrl}) as AuthorizationResponse

            if ( type === "success") {
                api.defaults.headers.authorization = `Bearer ${params.acess_token}`;

                const userInfo = await api.get('/users/@me')

                const fristName = userInfo.data.username.split(' ')[0]

                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}${userInfo.data.avatar}.png`

                setUser({
                    ...userInfo.data,
                    fristName,
                    token: params.acess_token
                });

                setLoading(false);
            }

        } catch (error) {
            throw new Error('Error on singIn');
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            singIn,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
}