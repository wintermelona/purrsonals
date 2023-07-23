import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import { PrismaClient } from "@prisma/client";
import prisma from '/lib/db';
import bcrypt from 'bcrypt'


export const authOptions = {
    session: {
        strategy: 'jwt'
    },
  // TODO:
  // Authentication providers, using login credentials
  // Can add others later
  // Add user roles, only admin should be able to access admin pages
  // Add protected routes middleware
  providers: [
  CredentialsProvider({
    name: "credentials",
    credentials: {
        email: {label : "Email", type: "email", placeholder: "Enter your email"}, 
        password: {label : "Password", type: "password", placeholder: "Enter your password"}, 
    },
    async authorize(credentials, req) {
        const {email, password} = credentials
        //  Auth logic here
        // console.log("{email, password}", email, password)

            if(!email || !password) {
              throw new Error('Please enter an email and password')
            }

            // check to see if user exists
            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            });

            // if no user was found 
            if (!user || !user?.password) {
                throw new Error('No user found')
            }

            // check to see if password matches
            const passwordMatch = await bcrypt.compare(password, user.password)

            // if password does not match
            if (!passwordMatch) {
                throw new Error('Incorrect password')
            }

            return user;
    }
    }),
  ],
  callbacks: {
    async session({ session, user, token, trigger}) {
        // console.log("token ", token)
        // console.log("session ", session)
        // session.image = token.image
        if (token) {
            session.user.role = token.role
            session.user.bio = token.bio
            session.user.name = token.name
            session.user.image = token.picture 
            // session.user.email = token.email 
        }

      
        return session
    },
    async jwt({ token, session, trigger }) {


        // console.log("{ token, session, trigger }",  token, session, trigger )
        if (trigger === "update"){
            token.name = session?.name
            token.bio = session?.bio
            // token.email = session?.email
            token.picture = session?.image

        }   


        // console.log("token ", token)
        const user = await prisma.user.findUnique({
            where: {
                email: token.email
            }
        });
        if (user) {
            // console.log("Initial load token: ", token)
            token = {...token,  
                role : user.role,
                bio : user.bio,
            }
        }
        
      return token
    },
  },
  pages: {
    signIn: "/",
  },
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
}


export default NextAuth(authOptions)
// export { handler as GET, handler as POST }