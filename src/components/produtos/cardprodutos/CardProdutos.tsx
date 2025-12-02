import { PencilIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto'

interface CardProdutoProps {
	produto: Produto
}

function CardProdutos({ produto }: Readonly<CardProdutoProps>) {
	return (
		<div className="flex flex-col justify-between overflow-hidden bg-gray-50 shadow-lg rounded-lg hover:shadow-indigo-800">
			<div className="flex items-end justify-end pt-2 pr-2">
				<Link to={`/editarproduto/${produto.id}`}>
					<PencilIcon
						size={24}
						className="mr-1 hover:fill-indigo-900"
					/>
				</Link>

				<Link to={`/deletarproduto/${produto.id}`}>
					<TrashIcon
						size={24}
						className="mr-1 hover:fill-red-700"
					/>
				</Link>
			</div>

			<div className="py-4">
				<img
					src={produto.foto}
					className="mx-auto mt-1 h-44 max-w-75"
					alt={produto.nome}
				/>

				<div className="p-4">
					<p className="text-sm text-center uppercase font-bold">
						{produto.nome}
					</p>
					<h3 className="text-xl font-bold text-center uppercase">
						{Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						}).format(produto.preco)}
					</h3>
					<p className="text-sm italic text-center">
						Categoria: {produto.categoria?.nome}
					</p>
				</div>
			</div>
			<div className="flex flex-wrap">
				<button
					className="flex items-center justify-center w-full py-2 text-white bg-indigo-900 hover:bg-indigo-800 cursor-pointer"
					onClick={() => alert('Função em Desenvolvimento!')}
				>
					Comprar
				</button>
			</div>
		</div>
	)
}

export default CardProdutos
