import { useRouter } from 'next/router';
import { ArrowLeft } from 'phosphor-react';
import { DefaultLayout } from '../../layouts/DefaultLayout';
import { NextPageWithLayout } from '../_app';

const Produto: NextPageWithLayout = () => {

    const router = useRouter();

    const handleReturnToAlmoxarifado = () => {
        router.back();
    }

    return (
        <div>
            <button onClick={handleReturnToAlmoxarifado}> <ArrowLeft /> </button>
            Produto a ser editado no estoque
        </div>
    )
}

Produto.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}


export default Produto;