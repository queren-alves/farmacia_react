import { HandbagIcon, MagnifyingGlassIcon, UserIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
	return (
		<div className="w-full bg-indigo-900 text-slate-800 shadow-sm sticky top-0 z-50">
			<div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-8 gap-4">
				
				<Link to="/" className="cursor-pointer">
					<img
						src="https://i.imgur.com/kvYH7pb.png"
						alt="Logo da Farmácia"
						className="w-52 hover:opacity-80 transition"
					/>
				</Link>

				<form
					onSubmit={(e) => {
						e.preventDefault()
						console.log("Busca executada")
					}}
					className="flex items-center w-full sm:w-140 bg-white rounded-full overflow-hidden border border-slate-300 focus-within:ring-2 focus-within:ring-indigo-600 transition-all"
				>
					<input
						type="search"
						placeholder="Pesquisar produto..."
						id="busca"
						name="busca"
						required
						className="flex-1 h-10 px-4 text-slate-700 placeholder-slate-400 focus:outline-none"
					/>
					<button
						type="submit"
						title="Buscar produto"
						className="h-10 w-12 flex items-center justify-center bg-indigo-900 hover:bg-indigo-700 transition-all"
					>
						<MagnifyingGlassIcon size={18} weight="bold" className="text-white" />
					</button>
				</form>

				<div className="flex items-center gap-6 text-sm sm:text-base font-medium">
                    <Link to="/produtos" className="text-white hover:text-red-500 cursor-pointer transition">
					    Produtos
                    </Link>

                    <Link to="/categorias" className="text-white hover:text-red-500 cursor-pointer transition">
					    Categorias
                    </Link>

                    <Link to="/cadastrocategoria" className="text-white hover:text-red-500 cursor-pointer transition">
					    Cadastrar categoria
                    </Link>

                    <Link to="" className="flex items-center">
						<UserIcon
							size={28}
							weight="bold"
							className="text-white hover:text-red-500 cursor-pointer transition"
						/>
					</Link>

					<Link to="">
						<HandbagIcon
							size={28}
							weight="bold"
							className="text-white hover:text-red-500 cursor-pointer transition"
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar