import { Transactions, Services, Footer, Navbar, Welcome} from "./components/exporter";

const App = ()=>{
    return (
        <div className=''>
            <div className=''>
                <Navbar />
                <Welcome />
            </div>
            
            <Transactions />
            
            <Services />
            <Footer />
        </div>
    )
}

export default App