import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { LoaderApp } from "../shared/Loader/loader"

export const Layout = () => {
    return (
        <div>
            <Suspense fallback={<LoaderApp/>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}