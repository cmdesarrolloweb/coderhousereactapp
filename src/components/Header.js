import TopBar from "./header/TopBar"
import NavBar from "./header/NavBar"
import PrimaryMenuMobile from "./header/PrimaryMenuMobile"
import CitysSelectButton from "./header/CitysSelectButton"

const Header = () => 
    <> 
        <header class="header">
            {/* Begin::TopBar */}
            <TopBar/>
            {/* End::TopBar */}
            {/* Begin::NavBar */}
            <NavBar/>
            {/* End::NavBar */}
            {/* Begin::PrimaryMenuMobile */}
            {/*<PrimaryMenuMobile/>*/}
            {/* Eng::PrimaryMenuMobile */}
            {/* Begin::PrimaryMenuMobile */}
            <CitysSelectButton/>
            {/* Eng::PrimaryMenuMobile */}
        </header>
    </>

export default Header