import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <>
            <Heading attr={123} attr2='String'>Olá Mundo!</Heading>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, ex officia quia saepe voluptatum et. 
                Beatae odio necessitatibus qui, aspernatur, quod corporis recusandae porro odit fugiat incidunt accusantium laudantium dicta.
            </p>
        </>
    );
};