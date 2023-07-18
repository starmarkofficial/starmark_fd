import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {
	LoginSocialGoogle,
	LoginSocialAmazon,
	LoginSocialFacebook,
	LoginSocialGithub,
	LoginSocialInstagram,
	LoginSocialLinkedin,
	LoginSocialMicrosoft,
	LoginSocialPinterest,
	LoginSocialTwitter,
	LoginSocialApple,
	LoginSocialTiktok,
  } from 'reactjs-social-login'

//global hooks
import { useAuth } from '../context/auth';

//axios
import axios from 'axios';
const baseUrl ="http://13.48.192.109"



function Login() {


const navigate = useNavigate();

const [auth, setAuth] = useAuth()

const [email, setemail] = useState("")
const [password, setPassword] = useState("")

const UserRegester = async(e)=>{
    e.preventDefault()

	if(!email || !password ){
		alert("fill form correctly")
	  }
     
	try {
		const res = await axios.post(`${baseUrl}/login`,{email,password})
        if(res.data.success){
				
				setAuth({
					...auth,
					user:res.data.user,
					token: res.data.token
				})
				localStorage.setItem('auth', JSON.stringify(res.data))
            navigate("/")
		}else{
			setemail("")
            setPassword("")
			alert("login failed")
		}
	} catch (error) {
		setemail("")
            setPassword("")
			alert(error)
		
	}
	

        
	
}
  return (
    <div>
     
<div class="h-screen md:flex">
	<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div>
			<h1 class="text-white font-bold text-4xl font-sans">GoFinance</h1>
			<p class="text-white mt-1">The most popular peer to peer lending at SEA</p>
			<button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form class="bg-white" onSubmit={()=>UserRegester()} >
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Wellcome Again</h1>
			<p class="text-sm font-normal text-gray-600 mb-7">Enter your email and password to login</p>
			
			
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input  value={email}
          onChange={(e) => setemail(e.target.value)} class="pl-2 outline-none border-none" type="text" name="email" id="email" placeholder="Email Address" />
      </div>
	  <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd" />
							</svg>
							<input value={password}
          onChange={(e) => setPassword(e.target.value)} class="pl-2 outline-none border-none" type="text" name="password" id="password" placeholder="Password" />
      </div>
	 
	  
							<button onClick={UserRegester} 
							class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
							

							<LoginSocialGoogle
        client_id={"546215725537-rfvubcvfo97fnqdvlmhc17uda31aofhb.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log( data);
		 

		
		const UserLogin = async()=>{
try {
				const res = await axios.post(`${baseUrl}/login`,{email:data?.email,password:data?.email})
				if(res.data.success){
						
						setAuth({
							...auth,
							user:res.data.user,
							token: res.data.token
						})
						localStorage.setItem('auth', JSON.stringify(res.data))
					navigate("/")
				}else{
					setemail("")
					setPassword("")
					alert("login failed")
				}
			} catch (error) {
				setemail("")
					setPassword("")
					alert("user doesn't exists")
		}
	}
	UserLogin()

        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
  <div class="group py-2 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo"/>
                                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">&nbsp;&nbsp;Continue with Google</span>
                            </div>
                        </div>
      </LoginSocialGoogle>


	  <span onClick={()=>alert("still working")} class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
		</form>
	</div>
</div>
    </div>
  )
}

export default Login