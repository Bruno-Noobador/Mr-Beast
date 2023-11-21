import { Outlet } from "react-router-dom"

export function Layout() {
    return(
        <>
            <header>
                <h1>The start of racism(header)</h1>
            </header>
            <Outlet/>
            <br/>
            <footer>
                <span>The end of racism(footer)</span>
            </footer>
        </>
    )
}