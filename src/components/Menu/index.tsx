import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); // Não segue o link

        console.log('Clicado', Date.now());

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
        // document.documentElement.setAttribute('data-theme', theme);
    }

    useEffect(() => {
        console.log('Theme mudou', theme, Date.now());
        document.documentElement.setAttribute('data-theme', theme);

        return () => {
            console.log('Olha, este componente será atualizado');
        };
    }, [theme]); // Executa apenas quando o valor de theme muda

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href='#' aria-label='Ir para a Home' title='Ir para a Home'>
                <HouseIcon />
            </a>

            <a className={styles.menuLink} href='#' aria-label='Ver Histórico' title='Ver Histórico'>
                <HistoryIcon />
            </a>

            <a
                className={styles.menuLink}
                href='#'
                aria-label='Ir para as Configurações'
                title='Ir para as Configurações'
            >
                <SettingsIcon />
            </a>

            <a
                className={styles.menuLink}
                href='#'
                aria-label='Mudar Tema'
                title='Mudar Tema'
                onClick={handleThemeChange}
            >
                <SunIcon />
            </a>
        </nav>
    );
}
