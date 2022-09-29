import { DefaultLayout } from '../../layouts/DefaultLayout';
import { NextPageWithLayout } from '../_app';

const Almoxarifado: NextPageWithLayout = () => {
    return (
        <div>
            Almoxarife
        </div>
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