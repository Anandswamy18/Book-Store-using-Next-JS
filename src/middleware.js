
import { NextResponse } from "next/server";

export default function middleware(req){
    console.log(req)
    let verify=req.cookies.get('token'); 
    console.log(verify)
    let url=req.url
    console.log("url"+url)


    if(!verify && (url.includes('http://localhost:3000/Dashoard') ))
    {

        return NextResponse.redirect("http://localhost:3000/Authpage")
    }
    if(verify && (url === "http://localhost:3000/Authpage"  ))
    {
        return NextResponse.redirect("http://localhost:3000/Dashord")
    }
}   