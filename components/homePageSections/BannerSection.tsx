import { TypeAnimation } from 'react-type-animation';
// import { sequenceData } from '@/lib/homePageData';
import { goMadarm  } from '@/lib/goMadam';
import { Logo } from '../Header/logo';

const BannerSection = () => {

  return (
    <header>
      <img
        src="/images/foto-portada-m.webp"
        width={1000}
        height={750}
        alt="Abogados de confianza"
      />
    <section className="hero">
      <p className="titulo">
        ¿Ningún abogado en la familia? ahor atienes{" "}
        <span className="celeste">un equipo.</span>{" "}
      </p>
      <p className="bajada">
        Si no tienes la suerte de contar con un abogado en tu familia, puedes
        contar con nosotros.
      </p>
    </section>
  </header>
  );
}

export default BannerSection