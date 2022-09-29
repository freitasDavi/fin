import { Pencil } from 'phosphor-react';
import { PageHeader } from '../../components/PageHeader';
import { DefaultLayout } from '../../layouts/DefaultLayout';
import { AlmoxarifadoActions, AlmoxarifadoContainer, AlmoxarifadoMain, AlmoxarifadoTable } from '../../styles/almoxarifado';
import { NextPageWithLayout } from '../_app';

const Almoxarifado: NextPageWithLayout = () => {
    return (
        <AlmoxarifadoMain>
            <PageHeader title='Almoxarifado' />
            <AlmoxarifadoActions>
                <h3>Ações</h3>
                <button>Novo</button>
            </AlmoxarifadoActions>
            <AlmoxarifadoContainer>
                <AlmoxarifadoTable>
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
                </AlmoxarifadoTable>
            </AlmoxarifadoContainer>
        </AlmoxarifadoMain>
    )
}

Almoxarifado.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}


export default Almoxarifado;