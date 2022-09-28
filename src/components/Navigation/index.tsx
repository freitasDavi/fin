import { NavigationActionButton, NavigationActions, NavigationContainer } from "./styles";
import { User, SignOut } from "phosphor-react";
import Image from "next/image";
import logoImg from "../../assets/logo.png";

export function Navigation() {
    return (
        <NavigationContainer>
            <div>
                <Image src={logoImg} width={100} height={100} />
            </div>
            <NavigationActions>
                <NavigationActionButton><User size={24} /> Davi</NavigationActionButton>

                <NavigationActionButton><SignOut size={24} /> Sair</NavigationActionButton>
            </NavigationActions>
        </NavigationContainer>
    )
}