import { FunctionComponent } from "react"
import { IService } from "../types"

const ServiceCard: FunctionComponent<{ service: IService }> = ({
	service: { Icon, about, title },
}) => {

	const createMarketup = () => {
		return {
			__html: about,
		}
	}

	return (
		<div className="flex items-center p-4 space-x-4">
			<div className="w-10 h-10 flex items-center justify-center shrink-0 bg-primary/10 rounded-xl">
				<Icon className="w-6 h-6 text-primary" />
			</div>
			<div>
				<h6 className="text-xl font-black text-primary tracking-tighter uppercase">{title}</h6>
				<p className="text-text-muted text-sm leading-relaxed" dangerouslySetInnerHTML={createMarketup()} />
			</div>
		</div>
	)
}


export default ServiceCard