import { inviteList } from "@/lib/homePageData";
export const CarouselSection = () => (
  <section className="servicios">
    <p className="antetitulo fadeup  ">ÁREAS DE PRÁCTICA</p>
    <h1 className="fadeup azul  ">
    Especialistas en Herencias <br />{" "}
      <span className="celeste fadeup  ">puedes confiar</span>
    </h1>
    <div className="full-width lista-servicios">
      {inviteList.map((item, index) => (
        <div key={index} className="servicio fadeup">
          <a href={item.link}>
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
          </a>
        </div>
      ))}
    </div>
  </section>
)

export default CarouselSection;