const Layout = () => {
    return (
        <>
            <header>
                Receptek a nagyitól
            </header>
            <nav bg="dark" data-bs-theme="dark">
                <section>
                    <ul className="me-auto">
                        <li><a href="main">Főoldal</a></li>
                        <li><a href="receptek">Összes</a></li>
                        <li><a href="UjReceptek">Vigyél fel saját receptet!</a></li>
                    </ul>
                </section>
            </nav>

            <section>
                Ide jön majd egy receptek táblázat..
            </section>
        </>
    )
}

export default Layout;