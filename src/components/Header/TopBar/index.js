const TopBar = () => 
    <>
        <div className="topbar topbar-dark bg-dark">
            <div className="container">
                <div className="topbar-text text-nowrap d-none d-md-inline-block">
                    <i className="bi bi-truck me-1"></i>
                    <span className="me-1">Envío Gratis! Compra mínima $1000</span>
                </div>
                <div className="topbar-text text-nowrap d-noned-md-inline-block">
                    <i className="bi bi-telephone-forward-fill"></i> ¡Comprá por teléfono! 0000 000000
                </div>
                <div className="ms-lg-3 topbar-text text-nowrap text-center col-md-auto col-12">
                    <span className="d-md-inline-block">Enterate de las novedades por:</span>
                    <a className="ms-1" href="#"><i className="bi bi-facebook"></i></a>
                    <a className="ms-1" href="#"><i className="bi bi-instagram"></i></a>
                </div>
            </div>
        </div>
    </>

export default TopBar