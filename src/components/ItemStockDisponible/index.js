const ItemStockDisponible = ({stock,  precio}) => {
    let unit;
    if (stock === 1) unit = "unidad"
    else unit = "unidades"

    return (
        <div className="prod_precio--stock">
            <div className="prod_precio"><span>$</span>{precio}.</div>
            { (stock > 0) ?
            <div className="prod_stock">Stock disponible: {stock} {unit}.</div>
            :
            <div className="prod_stock">SIN STOCK DISPONIBLE.</div>
            }
        </div>

    )

}

export default ItemStockDisponible