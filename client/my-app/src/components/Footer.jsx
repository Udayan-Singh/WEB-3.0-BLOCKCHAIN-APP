const time = new Date()
let year = time.getFullYear();

const Footer = ()=>{
    return (<div className="footerstyle">
        <p>© {year} ETHERUNNER &nbsp; All Rights Reserved.</p>
    </div>)
}

export default Footer