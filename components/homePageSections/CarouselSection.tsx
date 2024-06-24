import Link from "next/link";
import { inviteList } from "@/lib/homePageData";
export const CarouselSection = () => (
  <section className="servicios">
    <p className="antetitulo in-view" data-aos="fade-up">ÁREAS DE PRÁCTICA</p>
    <h1 className="azul in-view" data-aos="fade-up">
    Especialistas en Herencias <br />{" "}
      <span className="celeste fade-up in-view">puedes confiar</span>
    </h1>
    <div className="full-width lista-servicios">
      {inviteList.map((item, index) => (
        <div key={index} className="servicio in-view" data-aos="fade-up">
          <Link href={{pathname: '/InvitePage',
              // query: {id: index},
              }} >
            <img
              className="m-auto"
              src={item.image}
              alt={item.alt}
              width={172}
              height={172}
            />
            <p className="min-h-[3rem]">{item.title}</p>
            <p className="min-h-[6rem]">
              {item.content}
            </p>
            <p>Más información</p>
          </Link>
        </div>
      ))}
    </div>
  </section>
)

export default CarouselSection;