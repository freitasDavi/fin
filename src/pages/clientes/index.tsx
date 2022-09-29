import { PageHeader } from '../../components/PageHeader';
import { DefaultLayout } from '../../layouts/DefaultLayout';
import { NextPageWithLayout } from '../_app';

const Clientes: NextPageWithLayout = () => {
    return (
        <div>
            <PageHeader title='Clientes' />
            Clientes
        </div>
    )
}

Clientes.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}


export default Clientes;