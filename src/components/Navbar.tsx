export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-3 px-7 mb-10 h-20
         text-white rounded-lg shadow-xl shadow-slate-500">
            <h1>Logo</h1>
            <section className="flex justify-between gap-10">
                <h2 className="cursor-pointer">About</h2>
                <h2 className="cursor-pointer">Portfolio</h2>
            </section>
        </nav>
    )
}