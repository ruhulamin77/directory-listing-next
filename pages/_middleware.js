import { NextResponse } from "next/server";

export default function middleware(req) {
  const { token } = req.cookies;
  const url = req.url;
  // const { origin, pathname } = req.nextUrl.clone();
  // const path = pathname.slice("6");
  // console.log("url: " + url);
  // console.log("path: " + path);
  // if (url.includes("/user/login")) {
  //   return NextResponse.redirect("/user/login");
  //   if (!token) {
  //   }
  // }
  // user dashboard
  if (url.includes("/user/dashboard")) {
    //   console.log(token, url, "token");
    if (!token) {
      //   return {
      //     redirect: {
      //       destination: "/user/login",
      //       permanent: false,
      //     },
      //   };
      return NextResponse.redirect("/user/login");
    }
    //   try {
    //   } catch (e) {}
  }
}
