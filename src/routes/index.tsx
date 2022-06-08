import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";
import { SingIn } from "../screens/SingIn";
import { AuthRoutes } from "./auth.routes";

export function Routes() {

    const { user } = useAuth();

    return (
        <NavigationContainer>
           { user.id ? <AuthRoutes /> : <SingIn /> }
        </NavigationContainer>
    );
}