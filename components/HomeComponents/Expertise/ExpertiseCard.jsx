import CardLayout from "../../Common/CardLayout"

const ExpertiseCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="h-full space-y-2 p-8 card_stylings transition">
                <div className="text-right text-[10px] text-Snow">{data.duration}</div>
                <div className=" text-Snow">{data.title}</div>
                <div className="text-xs text-Snow">{data.company}</div>

                <div className="text-sm text-LightGray font-normal">
                    {data.desc}
                </div>
            </div>
        </CardLayout>
    )
}

export default ExpertiseCard