import { useState } from "react"
import List from "../../components/List"


export default function Productos() {

    const categorias = [
        'Motherboard',
        'Procesador',
        'Fuente',
    ]

    const [categoria, setCategoria] = useState('Todos los productos')

    return (
        <>
            <div className="d-flex">

                <h1>{categoria}</h1>

                <button
                    onClick={() => setCategoria('Todos los productos')}
                >
                    Todos los productos
                </button>

                {
                    categorias.map((categoria) => {

                        return (
                            <button
                                key={categoria} 
                                onClick={() => setCategoria(categoria)}
                            >
                                {categoria}
                            </button>
                        )
                    })
                }

            </div>

            <hr />

            <List producto={categoria}/>

        </>
    )
}