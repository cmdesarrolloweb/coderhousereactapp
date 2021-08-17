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
                                <Route path={["/", "/categoria/:category"]} exact>
                                        <ItemListContainer/>
                                </Route>
                                <Route path="/producto/:id" exact>
                                        <ItemDetailContainer/>
                                </Route>
                                <Route path="/cart">
                                        <Cart></Cart>
                                </Route>
                        </Switch>
                </BrowserRouter>

        )
}

export default App