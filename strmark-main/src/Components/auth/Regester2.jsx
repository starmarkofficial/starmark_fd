import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios';
const baseUrl ="http://13.48.192.109"
function Regester2() {
	const navigate = useNavigate();
    const [Name, setName] = useState("");
const [email, setemail] = useState("")
const [password, setPassword] = useState("")
const [cpassword, setCpassword] = useState("")
const [phone, setPhone] = useState("")
const [role, setRole] = useState(1)

const UserRegester = async (e)=>{
	if(!email || !Name|| !password || !cpassword || !phone){
		alert("fill form correctly")
	  }
	  e.preventDefault()
	  try {
		const res = await axios.post(`${baseUrl}/regester`,{Name,email,password,cpassword,phone,role})
		if(res.data.success){
			alert("regestration done")
			navigate("/login")
	}else{
		setName("")
		setemail("")
		setPassword("")
		setCpassword("")
        setPhone("")
		alert("failed")
	}
     


	  } catch (error) {
		alert("invalid credentials")
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
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Regester</h1>
			<p class="text-sm font-normal text-gray-600 mb-7">Enter your details</p>
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clipRule="evenodd" />
				</svg>
				<input value={Name}
          onChange={(e) => setName(e.target.value)} class="pl-2 outline-none border-none" type="text" name="name" id="name" placeholder="Full name" />
      </div>
			
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input  value={email}
          onChange={(e) => setemail(e.target.value)} class="pl-2 outline-none border-none" type="text" name="email" id="email" placeholder="Email Address" />
      </div>
      {/* phone number */}
      <div class="flex items-center border-2 py-2 mt-3 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd" />
							</svg>
							<input value={phone}
          onChange={(e) => setPhone(e.target.value)} class="pl-2 outline-none border-none" type="text" name="phone" id="phone" placeholder="phone number" />
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
	  <div class="flex items-center border-2 py-2 mt-3 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd" />
							</svg>
							<input value={cpassword}
          onChange={(e) => setCpassword(e.target.value)} class="pl-2 outline-none border-none" type="text" name="password" id="password" placeholder="Password" />
      </div>
	  
							<button onClick={UserRegester} 
							class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Regester</button>
							<span onClick={()=>navigate("/login")} class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Already have an account?  Login</span>
		</form>
	</div>
</div>
    </div>
  )
}

export default Regester2