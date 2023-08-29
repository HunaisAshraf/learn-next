import { useRouter } from "next/navigation"

export default function Profile({params}){
    return(
        <div className="flex flex-col justify-center text-center min-h-screen">
            <h1>profile</h1>
            <h1>{params.id}</h1>
        </div>
    )
}