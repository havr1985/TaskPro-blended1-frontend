import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Loader } from "../shared/Loader/loader"

export const Layout = () => {
    return (
        <div>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}