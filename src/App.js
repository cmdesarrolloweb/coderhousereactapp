import Header from "./components/Header/index"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import "./App.scss"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
                                {/* <Route path="/" component={ItemListContainer} exact/>
                                <Route path="/categoria/:category" component={ItemListContainer}/> */}
                                {/* <Route path="/categoria/:category_id" component={ItemDetailContainer}/> */}
                        </Switch>
                </BrowserRouter>

        )
}

export default App