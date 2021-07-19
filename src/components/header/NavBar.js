import PrimaryMenuDesktop from "./PrimaryMenuDesktop";

const NavBar = () => 
    <>
        <nav class="navbar-sticky sticky-top bg-light">
            <div class="navbar navbar-expand-lg navbar-light navbar-border">
                <div class="container">
                    <a href="index.html" class="navbar-brand d-none d-sm-none d-lg-block flex-shrink-0"><img src="images/logo-super-vida.png" alt="Vida Supermercados" height="100"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span class="material-icons menu">menu</span></button>
                    <a class="navbar-brand d-lg-none flex-shrink-0 me-2" href="index.html"><img src="images/logo-super-vida.png" height="54" alt="Vida Supermercados"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#searchModal"><span class="material-icons menu">search</span></button>
                    {/* Begin::PrimaryMenuDesktop */}
                    <PrimaryMenuDesktop/>
                    {/* End::PrimaryMenuDesktop */}
                </div>
            </div>
        </nav>
    </>

export default NavBar