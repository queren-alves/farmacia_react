function Home() {
	return (
		<>
			<div className="bg-cyan-100 flex justify-center min-h-[70vh]">
				<div className="container grid grid-cols-2 text-slate-800">

					<div className="flex flex-col gap-4 items-center justify-center py-10">
						<h2 className="text-5xl font-semibold">
							Seja Bem Vindo(a)!
						</h2>

						<p className="text-xl text-slate-600">
							Tudo que você precisa para sua saúde.
						</p>

						<div className="flex justify-around gap-4">
							{/* modal */}
						</div>
					</div>

					<div className="flex justify-center">
						<img
							src="https://i.imgur.com/hm6pR9S.png"
							alt="Imagem Página Home"
							className="w-2/3 m-12"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home