import { getComponentsByProduct } from "../helpers";
import { ComponentCard } from "./ComponentCard";
import { componentes } from "../data/componentes";

export const ComponentList = ({ producto }) => {
    const listaComponentes = getComponentsByProduct(componentes, producto) ?? [];
    
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {listaComponentes.map(componente => (
                <ComponentCard
                    key={componente.id} // Agrega la prop 'key' con el id único del componente
                    id={componente.id}
                    nombre={componente.Nombre}
                    imagen={componente.imagen}
                    gama={componente.Gama}
                    precio={componente.Precio}
                />
            ))}
        </div>
    );
};
