import Link from "next/link";
import { Pencil } from "phosphor-react";
import { PageHeader } from "../../components/PageHeader";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { Table } from "../../styles/almoxarifado";
import { Actions, GlobalMain, TableContainer } from "../../styles/default";
import { NextPageWithLayout } from "../_app";


const Produtos: NextPageWithLayout = () => {
    return (
        <GlobalMain>
            <PageHeader title="Produtos" />
            <Actions>
                <Link href="/produtos/novo">
                    <button>Novo Produto</button>
                </Link>
            </Actions>
            <TableContainer>
                <Table>
                    <thead>
                        <tr>
                            <th>Editar</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Valor compra</th>
                            <th>Valor venda</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button><Pencil size={24} /></button></td>
                            <td>Algodão</td>
                            <td>240</td>
                            <td>R$ 12,00</td>
                            <td>R$ 25,00</td>
                        </tr>
                    </tbody>
                </Table>
            </TableContainer>
        </GlobalMain>
    )
}

Produtos.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}

export default Produtos;