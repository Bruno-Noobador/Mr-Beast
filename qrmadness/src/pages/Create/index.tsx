import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
// import { dbconnect } from '../../Database.js'
// import sqlite3 from 'sqlite3';
// import { open } from 'sqlite';

function Check() {
    const [ queryParameters ] = useSearchParams()
    const name = queryParameters.get("name")
    const check = queryParameters.get("check");
    alert(`${name} and ${check}`)
    
    // if(name != null && check != null){
    //     const  values = [name, parseInt(check)]
    //     return values
    // }

    // const nav = useNavigate()
        useEffect(() => {
                // nav('/')
                window.opener = null;
                window.open("", "_self");
                window.close()
            })

    return(
        <>
        </>
    )
}

// const glovar = Check()
// export {glovar}
export default Check
