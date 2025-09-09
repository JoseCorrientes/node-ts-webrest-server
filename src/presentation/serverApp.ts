
import express from "express"
import path from "path"


interface Options {
    port: number,
    publicPath?: string,
    user?: string
}




class Server {
    private app = express()
    private port: number
    private publicPath: string
    private user: string



    constructor ({port, publicPath='public', user= 'Desconocido'}: Options){
        this.port= port
        this.publicPath=publicPath
        this.user=user
    }


    start() {
    
        this.app.use(express.static('public'))

        //archivos estaticos
        this.app.get('/hola', (req, res)=>{
            res.send({mensaje: "llegaste a la ruta hola", codigo: 200})
        })

        this.app.get("/{*splat}", (req, res)=>{
            const indexPath = path.join(__dirname+'../../../public/index.html')
            res.sendFile(indexPath)
            
        })

        this.app.listen(`${this.port}`, ()=>{
            console.log(`Server running on port ${this.port}`)
        })


    }



}

export {
    Server as default
}