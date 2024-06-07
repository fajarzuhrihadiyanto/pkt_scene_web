import FacilitiesArea from "./FacilitiesArea"
import GeneralInformationArea from "./GeneralInformationArea"
import LecturerArea from "./LecturerArea"

const TvArea = ({ nodes, materials }) => {
    return (
        <>
            <GeneralInformationArea nodes={nodes} materials={materials} />
            <FacilitiesArea nodes={nodes} materials={materials} />
            <LecturerArea nodes={nodes} materials={materials} />
        </>
    )
}

export default TvArea