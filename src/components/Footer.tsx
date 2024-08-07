import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className="bg-white rounded-lg shadow-xl m-4 dark:bg-black shadow-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span
                    className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024&nbsp;
                    <a href="https://reaperxyndrome.github.io/" className="hover:underline">
                        LJ™&nbsp;
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </motion.footer>
    )
}