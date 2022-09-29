import { DefaultLayout } from '../../layouts/DefaultLayout';
import { NextPageWithLayout } from '../_app';

const Orcamentos: NextPageWithLayout = () => {
    return (
        <div>
            Orçamentos
        </div>
    )
}

Orcamentos.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}


export default Orcamentos;