
//import bcrypt from "bcrypt";
import { response } from "express";

import config from "../../config/crypto";

const hash = (value:any) =>config.hashSaltRounds
  // bcrypt
  //   .hash(value, config.hashSaltRounds)

const compare = async (value:any, hash:any):Promise<boolean> =>
{ 
  try{
    const result = true//await bcrypt.compare(value, hash)

    return result
  }catch(e){
    throw e
  }
  
}
  

export default{
  hash,
  compare,
}