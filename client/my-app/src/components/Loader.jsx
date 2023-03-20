import loading from '../Image/loading.gif'
const Loader = ()=>{
    return (<div className="LoaderStyle">
        <img src={loading} alt="loading gif" className="loadingImage"></img>
    </div>)
}

export default Loader