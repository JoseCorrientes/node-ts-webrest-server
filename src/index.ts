import {envs } from './config/envs'
import server from "./presentation/serverApp"


(()=>{
    main()
})()

function main (){
    const servidor = new server({
        port: envs.port,
        publicPath:  envs.public_path, 
        user: envs.user
    })
    servidor.start()
}
