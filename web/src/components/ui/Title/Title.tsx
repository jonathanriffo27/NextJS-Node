import Row from "../../layout/Row";

const Title = ({ title, borderBottom }: any) => {
  return (
    <Row borderBottom={borderBottom}>
      <span className="text-[32px] font-bold">{title}</span>
    </Row>
  );
};

export default Title;
