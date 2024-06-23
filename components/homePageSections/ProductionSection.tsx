export const ProductionSection = () => (
  <section className="contacto fondo-azul" id="contacto">
    <h3 className="fh1 fadeup  ">
      ¿Necesitas abogados <span className="celeste">confiables?</span>
    </h3>
    <p className="fadelay  ">Envíanos un mensaje:</p>
    <form method="post" name="myForm" id="myForm">
      <input name="name" id="name" placeholder="Nombre" required />
      <input
        name="email"
        id="email"
        type="email"
        placeholder="Correo electrónico"
        required
      />
      <input
        name="tel"
        id="tel"
        type="tel"
        placeholder="Teléfono de contacto"
        minLength={8}
      />
      <textarea
        rows={5}
        name="message"
        id="message"
        placeholder="Mensaje"
        required
        defaultValue={""}
      />
      <input
        id="submit"
        name="submit"
        type="submit"
        defaultValue="Enviar Mensaje"
        className="boton"
      />
    </form>
    <div className="grid">
      <p>
        Teléfono y Whatsapp <br />
        <span className="celeste">
          <a href="tel:+562 2594 7431">+562 2594 7431</a>
        </span>{" "}
      </p>
      <p>
        Email <br />{" "}
        <span className="celeste">
          <a href="contacto@pazabogados.cl" target="_blank">
            contacto@cuche.cl
          </a>
        </span>{" "}
      </p>
    </div>
  </section>
)


export default ProductionSection;
