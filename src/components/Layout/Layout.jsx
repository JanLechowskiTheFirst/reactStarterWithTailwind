import { Navbar } from "../Navbar";
export const Layout = ({children}) => {
    return (
        <div className="h-screen flex flex-col justify-between">
            <header className="h-5">Header</header>
            <Navbar/>
            <div className="mb-auto">{children}</div>
            <footer className="h-10">Footer</footer>
        </div>

    );
}