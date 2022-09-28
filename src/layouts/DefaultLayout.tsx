import { ReactNode } from "react";
import { Navigation } from "../components/Navigation";
import { DefaultLayoutContainer } from "./DefaultLayoutStyles";

interface DefaultLayoutProps {
    children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <DefaultLayoutContainer>
            <Navigation />
            {children}
        </DefaultLayoutContainer>
    )
}

