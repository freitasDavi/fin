import { DefaultLayout } from '../../layouts/DefaultLayout';
import { NextPageWithLayout } from '../_app';

const Clientes: NextPageWithLayout = () => {
    return (
        <div>
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