import Header from "./components/Header/index"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import "./App.scss"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cart from './components/Cart'

const App = () => {
        
        return(
                <BrowserRouter>
                        <Header/>

                        <Switch>
                                <Route path={["/", "/categoria/:category"]} component={ItemListContainer} exact />
                                <Route path="/producto/:id" component={ItemDetailContainer} exact />
                                <Route path="/cart" component={Cart} exact />
                        </Switch>
                </BrowserRouter>

        )
}

export default App