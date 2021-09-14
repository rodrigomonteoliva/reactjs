const LayoutPagina = ({title = "Lista de Productos", children}) => {

    return (

        <section className="pagina-section">

            <div className="pagina-cabecera">
            <h2>{title}</h2>
            </div>

            <div className="contenido">
            {children}
            </div>
            
        </section>
    )
}

export default LayoutPagina
