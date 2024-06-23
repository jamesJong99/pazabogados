import Link from 'next/link'
import { features, madamAddress } from '@/lib/homePageData';
import { goMadarm } from '@/lib/goMadam';

const PricingSection = () => {
  return (
    <div className="section-five min-[800px]:pt-20 pb-28">
      <h2 className="text-5xl max-[500px]:text-3xl text-center font-medium min-[800px]:pt-4 font-cormorantGaramond text-white">
        <span className="italic">Nossos</span> planos
      </h2>
      <div className="md:flex justify-center mt-28">
        {features.map((feature, index) => (
          <div
            className={"max-[800px]:mt-4 border rounded-2xl border-[#4b4b4b] mx-3 " + (feature.type === 'basic' ? 'bg-[#fbdc6a] text-customBlack' : feature.type === 'pro' ? 'bg-[#1b1b1b]' : 'bg-[#282b30]')}
            key={index}
          >
            <div className="border-b border-[#4b4b4b] p-10 max-[800px]:p-4">
              <p className="text-[#a5a5a5]">{feature.period} </p>
              <p className="text-4xl">{feature.price}<span className='text-[#a5a5a5]'>/mo</span></p>
            </div>
            <div className="px-10 pt-4 p-10 max-[800px]:p-2">
              <div className='min-h-44'>
                {feature.details.map((item, index) =>
                  <div className="flex justify-start my-4" key={index}>
                    <div className="flex items-center rounded-full bg-[#1b1b1b] w-[24px]">
                      <img src="/images/icon-check.svg" alt="icon-check" className='m-auto' />
                    </div>
                    <div className="ml-3">
                      {item}
                    </div>
                  </div>
                )}
              </div>
              <Link href={feature.link}>
                <button className={"w-full block font-bold font-quicksand hover:bg-customWhite hover:text-customBlack text-center mt-4 p-4 rounded-full items-center justify-center " + (feature.type === 'basic' ? ' bg-customBlack text-customWhite' : ' bg-customYellow text-customBlack')}>
                  COMECE AGORA
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
