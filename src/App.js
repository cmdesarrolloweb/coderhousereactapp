import Header from "./components/Header/index"
import ItemListContainer from "./components/ItemListContainer"
import { Products } from './data/Products'
import "./App.scss"

const App = () => {
        
        return(
        <>
                <Header/>
                <ItemListContainer products={Products}/>
        </>  
        )
}

export default App