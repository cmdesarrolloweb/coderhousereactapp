import Header from "./components/Header/index"
import ItemListContainer from "./components/ItemListContainer"
import "./App.scss"



const App = () => {
        
        return(
        <>
                <Header/>
                <ItemListContainer greeting="Prop greeting"/>
        </>  
        )

}

export default App