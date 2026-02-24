import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <>
            <Heading>
                Olá Mundo!
                <button>
                    <TimerIcon />
                </button>
            </Heading>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, ex officia quia saepe voluptatum et. 
                Beatae odio necessitatibus qui, aspernatur, quod corporis recusandae porro odit fugiat incidunt accusantium laudantium dicta.
            </p>
        </>
    );
};