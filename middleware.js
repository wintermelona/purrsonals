import { withAuth } from "next-auth/middleware"
import { redirect } from "next/dist/server/api-utils"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req, res) {

    // console.log("cookie ", req.cookies.get('session'))
    // redirect(401, "/")
    // alert("Please log in first")
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if(token?.role === "ADMIN") {
          return true
        } 

        if(token?.role === "USER") {
          return false
        }
      },
    },
  }
)

export const config = { matcher: ["/admin/:path*",] }