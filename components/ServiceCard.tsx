import { FunctionComponent } from "react"
import { IService } from "../types"

const ServiceCard:FunctionComponent<{ service:IService }> = ({
    service: { Icon, about, title },
}) => {

	const createMarketup = () => {
		return {
			__html:about,
		}
	}

	return (
  		<div className="flex items-center p-2 space-x-4">
			<Icon className="w-20 h-24 text-blue-400" />
			<div>
				<h4 className="text-lg font-bold underline">{title}</h4>
				<p dangerouslySetInnerHTML={createMarketup()} />
			</div>
    	</div>
	)
}

export default ServiceCard