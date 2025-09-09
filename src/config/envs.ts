import "dotenv/config"

import {get} from "env-var"


const envs = {
    port: get('PORT').required().asPortNumber(),
    public_path: get('PUBLIC_PATH').default( 'public').asString(),
    user: get('USER').default('Desconocido').asString(),

}

export {
    envs
}