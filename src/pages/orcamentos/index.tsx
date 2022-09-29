import { PageHeader } from '../../components/PageHeader';
import { DefaultLayout } from '../../layouts/DefaultLayout';
import { NextPageWithLayout } from '../_app';

const Orcamentos: NextPageWithLayout = () => {
    return (
        <div>
            <PageHeader title='Orçamentos' />
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