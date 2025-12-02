import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria"
import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";

interface CardCategoriaProps {
    categoria: Categoria
  }

function CardCategorias({categoria}: Readonly<CardCategoriaProps>) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-900  text-white font-bold text-2xl'>Categoria</header>
            <p className='p-8 text-3xl bg-white h-full'>{categoria.nome}</p>
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-indigo-800 hover:bg-indigo-700 
                        flex items-center justify-center py-2'>
                    <button><PencilSimpleIcon size={25} /></button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}
                    className='text-slate-100 bg-red-600 hover:bg-red-700 w-full 
                        flex items-center justify-center'>
                    <button><TrashIcon size={25}/></button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;