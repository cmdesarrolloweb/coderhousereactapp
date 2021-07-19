const CitysSelectButton = () =>
    <>
        <div class="d-none d-lg-flex navbar navbar-expand-lg navbar-light navbar-stuck-menu navbar-border d-none mt-n2 pt-0 pt-2 pb-0">
            <div class="container">
                <div class="input-group d-none d-lg-flex me-4">
                    <input class="search form-control rounded-end pe-5" type="search" placeholder="Buscar productos, marcas, etc..." onblur="this.placeholder='Buscar productos, marcas, etc..'" onfocus="this.placeholder=''"/>
                    <i class="bi bi-search position-absolute top-60 end-0 translate-middle-y text-muted fs-base me-3"></i>
                </div>
                <div class="navbar-toolbar d-flex flex-shrink-0 align-items-center">

                    <a class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#cityModal" data-bs-toggle="modal" data-bs-target="#cityModal">
                        <div class="navbar-tool-icon-box"><span class="navbar-tool-icon material-icons">place</span>
                        </div>
                        <div class="navbar-tool-text ms-n3">
                            <small>Localidad</small>
                            <span>San Carlos Centro</span>
                        </div>
                    </a>
                    <div id="mostrarItemsCarrito" class="navbar-tool shop ms-1 ms-lg-3 me-n1 me-lg-0">
                        
                    </div>
                </div>
            </div>
        </div>
    </>

export default CitysSelectButton