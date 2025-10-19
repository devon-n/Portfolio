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
          <div className="flex items-center p-2 space-x-4 transition-colors duration-500">
			<div className="w-8 h-8 flex items-center justify-center shrink-0">
            	<Icon className="w-full h-full text-primary-light dark:text-primary-dark" />
			</div>
            <div>
                <h6 className="text-lg font-bold underline">{title}</h6>
                <p dangerouslySetInnerHTML={createMarketup()} />
            </div>
        </div>
    )
}

export default ServiceCard