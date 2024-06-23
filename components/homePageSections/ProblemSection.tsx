import { problemSectionData } from '@/lib/homePageData'
import { goMadarm  } from '@/lib/goMadam';

const ProblemSection = () => {
    return (
        <div id="problem-section" className="section-four pt-20 pb-28">
            <h2 className="text-5xl max-[415px]:text-3xl text-center font-medium pt-4 font-cormorantGaramond text-white">
                <span className="italic">Os problemas</span> que resolvemos
            </h2>
            <div className="flex justify-center max-[800px]:flex-col mt-28 max-[800px]:mt-12">
                {
                    problemSectionData.map((item, index) =>

                        <div className={"rounded-md mx-4 p-6 min-[800px]:w-3/12 max-[800px]:mt-4 font-quicksand " + (item.color === 'white' ? 'text-customWhite' : 'text-customBlack')} style={{ backgroundColor: item.bgColor }} key={index}>
                            <div className='min-[415px]:min-h-[30rem]'>
                                <img src={item.image} className=" m-auto w-full" />
                                <p className="text-sm">{item.title}</p>
                                <p className="text-2xl max-[415px]:text-xl">{item.description}</p>
                            </div>
                            <button onClick={()=> goMadarm()} className={"w-full block font-bold font-quicksand hover:bg-customWhite hover:text-customBlack text-center mt-4 p-4 rounded-full items-center justify-center " + (item.bgColor==='#FBDC6A' ? ' bg-customBlack text-customWhite' : ' bg-customYellow text-customBlack')}>
                                COMECE AGORA
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProblemSection;