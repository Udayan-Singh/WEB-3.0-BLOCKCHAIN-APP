import { Transactions, Services, Footer, Welcome} from "./components/exporter";

const App = ()=>{
    return (
        <div className=''>
            <div className='navjoin'>
                <Welcome />
            </div>
            
            <Transactions />
            
            <Services />
            <Footer />
        </div>
    )
}

export default App