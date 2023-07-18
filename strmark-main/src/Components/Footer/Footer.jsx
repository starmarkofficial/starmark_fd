import {fb,	insta, linkedin, twitter, yt} from '../images/footer/Footer'


export default function Footer({logo}){

	function f(){
		alert("button click");
	}

	return (
		<>
			<div className="footer-container my-0 py-12 pt-10 mx-4 sm:mx-auto flex flex-col  justify-center">
				<img src={logo} className='mx-auto'/>
				<div className="footer-content my-12">
					<ul className="content-list flex flex-wrap justify-center gap-2 md:gap-20 sm:gap-4 mx-auto">
						<li onClick={f}>Jobs</li>
						<li onClick={f}>Employer</li>
						<li onClick={f}>Consultant</li>
						<li onClick={f}>About Us</li>
					</ul>
				</div>
				<div className="footer-socials flex flex-wrap justify-center gap-2 md:gap-20 sm:gap-4 mx-auto">
					<img onClick={f} src={insta}/>
					<img onClick={f} src={fb}/>
					<img onClick={f} src={linkedin}/>
					<img onClick={f} src={twitter}/>
					<img onClick={f} src={yt}/>
				</div>
				<div className='end-content mx-auto mt-10 justify-center flex flex-col md:flex-row md:gap-20'>
					<div className='copyright'>Copyright@2023</div>
					<div onClick={f} className='infos'>Terms & Conditions</div>
					<div onClick={f} className='infos'>Privacy</div>
				</div>
			</div>
		</>
	)
}