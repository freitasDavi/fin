import { useRouter } from "next/router";
import { ArrowLeft } from "phosphor-react";
import { PageHeaderH } from "./styles";

interface PageHeaderProps {
    title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
    const router = useRouter();

    const handleReturnToAlmoxarifado = () => {
        router.back();
    }

    return (
        <PageHeaderH>
            <button onClick={handleReturnToAlmoxarifado}> <ArrowLeft size={24} /> </button>
            <h1>{title}</h1>
        </PageHeaderH>
    )
}