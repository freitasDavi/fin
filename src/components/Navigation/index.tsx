import { NavigationActionButton, NavigationActions, NavigationContainer, NavigationHeader, NavigationLinks } from "./styles";
import { User, SignOut } from "phosphor-react";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import Link from "next/link";

export function Navigation() {
    return (
        <NavigationContainer>
            <NavigationHeader>
                <div>
                    <Link href="/" >
                        <Image style={{ cursor: 'pointer' }} src={logoImg} width={100} height={100} />
                    </Link>
                </div>
                <NavigationLinks>
                    <Link href="/almoxarifado">Almoxarifado</Link>
                    <Link href="/clientes">Clientes</Link>
                    <Link href="/orcamentos">Orçamentos</Link>
                </NavigationLinks>
            </NavigationHeader>
            <NavigationActions>
                <NavigationActionButton><User size={24} /> Davi</NavigationActionButton>

                <NavigationActionButton><SignOut size={24} /> Sair</NavigationActionButton>
            </NavigationActions>
        </NavigationContainer>
    )
}