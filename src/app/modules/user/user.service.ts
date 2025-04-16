import { UserRole } from "../../../../generated/prisma"
import prisma from "../../../shared/prisma"


const createCustomer = async (payload: any) => {
   const userData = {
    email: payload.email,
  
    role: UserRole.USER
   }

   const result = await prisma.user.create({
    data: userData  
})

return result
}

export const userService = {
    createCustomer
}