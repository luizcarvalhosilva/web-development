import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <h1>Carv Flix</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    )
}

export default Header;