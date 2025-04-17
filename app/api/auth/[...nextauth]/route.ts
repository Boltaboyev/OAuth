import NextAuth from "next-auth"
import {authOptions} from "@/config"

const AuthSite = NextAuth(authOptions)
export {AuthSite as GET, AuthSite as POST}
