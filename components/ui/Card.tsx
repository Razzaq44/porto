import Image from 'next/image';
import { ReactNode } from "react"

interface Props {
    children: ReactNode,
    src: string,
}

const Card = ({ children, src }: Props) => {
    return (
        <>
            <div className="pb-4">
                <Image
                    className="float-left mr-4 mb-4 md:mb-0 object-cover w-full md:w-1/2 lg:w-1/2 lg:h-64 xl:w-1/2 xl:h-72 2xl:w-1/3 2xl:h-80 rounded-lg h-56 shadow-md border"
                    src={src}
                    alt="image"
                    width={50}
                    height={50}
                    unoptimized
                    priority />
                <div className="clear-right leading-normal space-y-3">
                    <h5 className="text-2xl font-bold tracking-tight">{children}</h5>
                    <p className="font-normal text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic quia aspernatur, aperiam minima mollitia dicta officia enim perspiciatis cupiditate dolor, laudantium laborum quibusdam minus illum harum sit a consequuntur nobis temporibus aut quasi exercitationem. Minus consequuntur deleniti magnam a. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid atque praesentium asperiores deserunt totam illo impedit quam ratione culpa reprehenderit rem in ea aut dolorum, doloribus delectus quas magnam molestiae quia accusamus repellendus quisquam? Blanditiis eaque architecto commodi inventore nam.</p>
                </div>
            </div>
        </>
    )
}

export default Card