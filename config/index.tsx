import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin"
import ZoomProvider from "next-auth/providers/zoom"
import CredentialsProvider from "next-auth/providers/credentials"

const MailRuProvider = {
    id: "mailru",
    name: "Mail.ru",
    type: "oauth",
    version: "2.0",
    scope: "userinfo",
    params: {grant_type: "authorization_code"},
    accessTokenUrl: "https://oauth.mail.ru/token",
    requestTokenUrl: "https://oauth.mail.ru/token",
    authorizationUrl: "https://oauth.mail.ru/login?response_type=code",
    profileUrl: "https://oauth.mail.ru/userinfo",
    clientId: process.env.MAILRU_CLIENT_ID,
    clientSecret: process.env.MAILRU_CLIENT_SECRET,
    async profile(profile: any) {
        return {
            id: profile.id,
            name: profile.name,
            email: profile.email,
            image: profile.picture,
        }
    },
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                const staticCredentials = {
                    email: "otabek@mail.ru",
                    password: "111",
                }

                if (
                    credentials?.email === staticCredentials.email &&
                    credentials?.password === staticCredentials.password
                ) {
                    return {
                        id: "1",
                        name: "Static User",
                        email: staticCredentials.email,
                    }
                }

                return null
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID as string,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
        }),
        ZoomProvider({
            clientId: process.env.ZOOM_CLIENT_ID as string,
            clientSecret: process.env.ZOOM_CLIENT_SECRET as string,
        }),
        MailRuProvider,
    ],
}
