import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 bg-[#0a0a0a] flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            OCTOPUS ADMIN
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link 
            href="/admin/offres" 
            className="flex items-center gap-3 px-4 py-3 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-xl"
          >
            <i className="fa-solid fa-briefcase"></i>
            Gestion des Offres
          </Link>
          <Link 
            href="/" 
            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 rounded-xl transition-all"
          >
            <i className="fa-solid fa-eye"></i>
            Voir le Site
          </Link>
        </nav>
        <div className="p-6 border-t border-gray-800">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Système Opérationnel
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 border-b border-gray-800 flex items-center justify-between px-8 bg-[#0a0a0a]/50 backdrop-blur-md sticky top-0 z-20">
          <h1 className="text-xl font-semibold">Tableau de Bord</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Admin Mode</span>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
