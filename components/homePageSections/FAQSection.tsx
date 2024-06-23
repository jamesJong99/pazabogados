import { others } from "@/lib/homePageData";
import Link from 'next/link';
export const FAQSection = () => (
    <footer>
        <div className="logofooter" data-aos="fade-right">
            <a href="/">
                <img
                    alt="Logo"
                    height={100}
                    id="isofooter"
                    src="/images/logos/logo.png"
                    width={100}
                />
                <img
                    src="/images/logos/logo.png"
                    alt="Logo Cuche López"
                    className="h-[72px] w-auto logo"
                    id="logofooter"
                    width={100}
                    height={100}
                />
            </a>
        </div>
        {
            others.map((item, index) => (
                <div key={index} data-aos="fade-up">
                    <p>{item.title}</p>
                    {item.content.map((cont, ind) => (
                        <Link key={ind} href={cont.link}>{cont.name}</Link>
                    ))}
                </div>
            ))
        }
    </footer>
)


export default FAQSection;