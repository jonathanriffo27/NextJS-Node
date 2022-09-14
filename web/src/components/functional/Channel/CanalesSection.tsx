import Row from "../../layout/Row";
import Canal from "../../ui/Canal";

const CanalesSection = () => {
  return (
    <Row height="flex-grow gap-[5px]" borderBottom="yes">
      <Canal text="Corredora de Seguros" />
      <Canal text="Tarjeta de Retail" />
      <Canal text="Pagina Web" />
    </Row>
  );
};

export default CanalesSection;
