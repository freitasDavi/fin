

import Link from "next/link";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/Inputs/TextInput";
import { PageHeader } from "../../components/PageHeader";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { Actions, GlobalMain, TableContainer } from "../../styles/default";
import { NextPageWithLayout } from "../_app";

type FormValues = {
    name: string;
    teste: string;
}


const NovoProduto: NextPageWithLayout = () => {
    const methods = useForm<FormValues>();

    const handleSubmitForm = (data: FormValues) => {
        alert(`Nome escrito: ${data.name}`);
    }

    return (
        <GlobalMain>
            <PageHeader title="Novo produto" />
            <Actions>

            </Actions>
            <div>
                <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
                    <TextInput {...methods.register("name")} labelText="Nome" />
                    {/* <TextInput id="nome" {...methods.register("name")} /> */}
                    {/* <TextInput id="teste" name="Teste" /> */}
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </GlobalMain>
    )
}

NovoProduto.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}

export default NovoProduto;