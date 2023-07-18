import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function ServicesList({repImage}){
	return(
		<>
			<div className="services-container md:w-full sm:flex-none md:flex sm:flex-col lg:flex-row">
				<div className="services-list md:w-10/12 ml-8 md:ml-10 sm:mx-10">
					<div className='head-text text-bold' >Ultimate Services for your Company.</div>
					<div className="desc">Nunc, porta phasellus nisl ac risus eget lectus neque, mauris. Dictumst mauris, id eget tellus tincidunt sit nisi,  </div>
					<div className="offered-services flex flex-wrap justify-center">
						<div className="service mx-16 sm:mx-7 md:mx-10">
						<a><FontAwesomeIcon icon={faFile} /></a>

							<img src={repImage} />
							<div className="title">Shortlist Resume</div>
							<div className="service-desc">Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.</div>
						</div>
						<div className="service mx-16 sm:mx-7 md:mx-10">
							<img src={repImage} />
							<div className="title">Call For Interview</div>
							<div className="service-desc">Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.</div>
						</div>
						<div className="service mx-16 sm:mx-7 md:mx-10">
							<img src={repImage} />
							<div className="title">Avail alternate candidate</div>
							<div className="service-desc">Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.</div>
						</div>
						<div className="service mx-16 sm:mx-7 md:mx-10">
							<img src={repImage} />
							<div className="title">Takes very less time</div>
							<div className="service-desc">Nisi vivamus nisl nullam justo, sed at odio sit. Et nunc vestibulum.</div>
						</div>
					</div>
				</div>
				<div className="img-container sm:w-full md:w-8/12 mx-auto flex sm:mx-auto justify-center">
					<div className="services-img mx-10"></div>
				</div>
			</div>
		</>
	)
}