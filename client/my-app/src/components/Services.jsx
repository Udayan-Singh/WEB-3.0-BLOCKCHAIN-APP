import etherium from '../Image/etherium.png'
import metamask from '../Image/metamask.jpg'
import cryptograph from '../Image/cryptograph.png'
import ETH_Mining from '../Image/ETH_Mining.png'
import GETH from '../Image/GETH.png'
import wallet from '../Image/wallet.png'

const Services = () => {
    return (<div className="servicesSection">
        <h1>Get more than just Ethereum</h1>
        <div className='services'>
            <div className="servicebox">
                <img src={cryptograph} alt="market icon"></img>
                <h2>See the latest trends</h2>
                <a href="https://www.coingecko.com/" target="_blank" rel="noreferrer">View Prices</a>
            </div>

            <div className="servicebox">
                <img src={metamask} alt="market icon"></img>
                <h2>You will need metamask</h2>
                <a href="https://metamask.io/download/" target="_blank" rel="noreferrer">Get Metamask</a>
            </div>

            <div className="servicebox">
                <img src={etherium} alt="market icon"></img>
                <h2>Learn About Ethereum</h2>
                <a href="https://ethereum.org/en/" target="_blank" rel="noreferrer">See Here</a>
            </div>

            <div className="servicebox">
                <img src={ETH_Mining} alt="market icon"></img>
                <h2>Mine Ethereum</h2>
                <a href="http://localhost:3500/" target="_blank" rel="noreferrer">Start Mining</a>
            </div>

            <div className="servicebox">
                <img src={GETH} alt="market icon"></img>
                <h2>Get Test Ethereum</h2>
                <a href="https://goerlifaucet.com/" target="_blank" rel="noreferrer">Get Goerli Test ETH</a>
            </div>

            <div className="servicebox">
                <img src={wallet} alt="market icon"></img>
                <h2>Check Balance</h2>
                <a href="http://localhost:4000/" target="_blank" rel="noreferrer">Check here</a>
            </div>
        </div>

    </div>)
}

export default Services