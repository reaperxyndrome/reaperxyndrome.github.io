import { motion } from "framer-motion"

export default function Navbar() {
    return (

        <motion.nav className="flex justify-between items-center p-3 px-7 mb-10 h-20
         text-white rounded-lg shadow-xl shadow-slate-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1>Logo</h1>
            <section className="flex justify-between gap-10">
                <h2 className="cursor-pointer">About</h2>
                <a href="#portfolio"><h2 className="cursor-pointer">Portfolio</h2></a>
            </section>
        </motion.nav>
    )
}