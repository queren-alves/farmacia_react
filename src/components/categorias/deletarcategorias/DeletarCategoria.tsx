import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import type Categoria from "../../../models/Categoria"
import { deletar, listar } from "../../../services/Service"
import { CheckIcon, XIcon } from "@phosphor-icons/react"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Tema não encontrado!')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)

            alert('Categoria apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar a categoria')
            console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='container w-full max-w-md px-4 pt-4 mx-auto md:pt-6'>
            <h1 className='py-4 text-3xl text-center md:text-4xl'>Deletar Categoria</h1>
            <p className='mb-4 text-base font-semibold text-center md:text-lg'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='flex flex-col justify-between overflow-hidden border rounded-2xl'>
                <header
                    className='px-4 py-2 text-lg font-bold text-white md:px-6 bg-indigo-900 md:text-2xl'>
                    Categoria
                </header>
                <p className='h-full p-4 text-xl bg-white md:p-8 md:text-3xl'>{categoria.nome}</p>
                <div className="flex flex-row">
                    <button
                        className='flex justify-center w-full py-2 text-base bg-red-600 hover:bg-red-700 text-slate-100 md:text-lg cursor-pointer'
                        onClick={retornar}
                    >
                        <XIcon size={25} />
                    </button>
                    <button
                        className='flex items-center justify-center w-full text-base bg-indigo-800 hover:bg-indigo-700  text-slate-100 md:text-lg cursor-pointer'
                        onClick={deletarCategoria}
                    >
                        {isLoading ?
                            <ClipLoader
                            color="#ffffff"
                            size={24}
                          />
                            :
                            <span><CheckIcon size={25}/></span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria