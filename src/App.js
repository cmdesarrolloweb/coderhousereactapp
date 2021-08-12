import Header from "./components/Header/index"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Products } from './data/Products'
import "./App.scss"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
        
        return(
                <BrowserRouter>
                        <Header/>

                        <Switch>
                                {/* <Route path="/categoria/:category_id">
                                        <ItemListContainer products={Products}/>
                                </Route>
                                <Route path="/">
                                        <ItemListContainer products={Products}/>
                                </Route> */}
                                <Route path="/" component={ItemListContainer} exact/>
                                <Route path="/categoria/:category" component={ItemListContainer}/>
                                {/* <Route path="/categoria/:category_id" component={ItemDetailContainer}/> */}
                        </Switch>
                </BrowserRouter>

        )
}

export default App