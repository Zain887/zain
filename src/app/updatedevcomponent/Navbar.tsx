export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-black/30 backdrop-blur z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
                <span className="font-semibold">Zain</span>
                <div className="space-x-6 text-sm">
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}
