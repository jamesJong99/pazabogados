"use client"
import { useRouter, useSearchParams } from "next/navigation";
const Contacts = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    return (
        <section className="preguntas">
    <p className="fh1 fadeup in-view">
      El derecho civil ofrece soluciones a todo tipo de conflictos{" "}
      <span className="celeste">entre particulares.</span>{" "}
    </p>
    <div className="fadelay in-view">
      <h2 className="accordion">¿Qué es el derecho civil?</h2>
      <div className="panel">
        <p>
          Se refiere al conjunto de normas jurídicas que regulan las relaciones
          personales o patrimoniales entre personas. Si existe un contrato de
          por medio se denominará responsabilidad contractual, de lo contrario,
          hablaremos de responsabilidad extracontractual.
        </p>
      </div>
      <h2 className="accordion">¿Qué hace un abogado civil?</h2>
      <div className="panel">
        <p>
          Es aquel especialista que encarga de asesorar y representar a
          individuos o entidades en disputas y procedimientos legales dentro del
          ámbito del derecho civil, incluyendo temas como contratos,
          responsabilidad contractual, extracontractual, y propiedad.
        </p>
      </div>
    </div>
  </section>
    );
}

export default Contacts;