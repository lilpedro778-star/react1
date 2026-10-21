import './cabecalho.scss';

export default function Cabecalho(props) {
    return (
        <header className='cabecalho' style={{ backgroundColor: props.backgroundColor ?? '#ffffffff' }}>
            <h1>{props.titulo ??  'react padrao'}</h1>
        </header>
    );
}
