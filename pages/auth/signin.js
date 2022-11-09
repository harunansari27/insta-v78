import { async } from "@firebase/util"
import {getProviders ,signIn}  from "next-auth/react"
import Header  from "../../components/Header";



export default function signin() {
  return (
    <>
         <Header/>

         <div className=" ">
             <img src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png" alt="Fanfield-image" />
              <div className=" ">
               

              </div>
         </div>
  
    </>
  )
}


export async function getServerSideProps(context){
    const providers = await getProviders();
    return{

        props: {providers}
    }
}
