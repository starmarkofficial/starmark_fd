import {mw,mw1, pht, pht1, pwc, pwc1, pw, pw1, tra, tra1} from '../images/Company_logo/index.jsx'

export default function CmpyList(){
	return (
	<>
		<div className='cmpy-logo p-4  mx-auto w-full'>
			<div className='head-text text-3xl font-bold mx-auto flex justify-center my-5' >Companies We Work With</div>
			<div className='logos flex flex-wrap justify-center md:gap-20 md:mx-12 sm:mx-4'>
				<img src={mw} alt='img1'/>
				<img src={mw1} alt='img1'/>
				<img src={pht} alt='img1'/>
				<img src={pht1} alt='img1'/>
				<img src={pwc} alt='img1'/>
				<img src={pwc1} alt='img1'/>
				<img src={pw} alt='img1'/>
				<img src={pw1} alt='img1'/>
				<img src={tra} alt='img1'/>
				<img src={tra1} alt='img1'/>
			</div>
		</div>
	</>

	)
}