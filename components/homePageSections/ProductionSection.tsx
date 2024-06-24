import Link from "next/link";
export const ProductionSection = () => (
  <section className="contacto fondo-azul" id="contacto" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
    <h3 className="fh1 fadeup in-view" data-aos="fade-up">
      ¿Necesitas abogados <span className="celeste">confiables?</span>
    </h3>
    <p className="fadelay in-view" data-aos="fade-up">Envíanos un mensaje:</p>
    <form method="post" name="myForm" id="myForm">
      <input data-aos="zoom-out-right" name="name" id="name" placeholder="Nombre" required />
      <input data-aos="zoom-out-left"
        name="email"
        id="email"
        type="email"
        placeholder="Correo electrónico"
        required
      />
      <input data-aos="zoom-out-right"
        name="tel"
        id="tel"
        type="tel"
        placeholder="Teléfono de contacto"
        minLength={8}
      />
      <textarea data-aos="zoom-out-left"
        rows={5}
        name="message"
        id="message"
        placeholder="Mensaje"
        required
        defaultValue={""}
      />
      <input data-aos="zoom-out-up"
        id="submit"
        name="submit"
        type="submit"
        defaultValue="Enviar Mensaje"
        className="boton"
      />
    </form>
    <div className="grid" data-aos="zoom-out-left">
      <p>
        Teléfono y Whatsapp <br />
        <span className="celeste">
          <a href="tel:+562 2594 7431">+562 2594 7431</a>
        </span>{" "}
      </p>
      <p>
        Email <br />{" "}
        <span className="celeste">
          <Link href="contacto@pazabogados.cl" target="_blank">
            contacto@pazabogados.cl
          </Link>
        </span>{" "}
      </p>
    </div>
  </section>
)


export default ProductionSection;
