import {
  faPlus,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

import Row from "../../layout/Row";
import Col from "../../layout/Col";
import Button from "../Button/Button";
import ButtonPage from "../ButtonPage";

const Buttons = ({
  onClick,
  display,
  paddingRight,
  text,
  pageButtons,
}: any) => {
  return (
    <Row display={display}>
      <Col display="flex items-center">
        <span className="font-semibold">{text}</span>
      </Col>
      {pageButtons && (
        <Col gap="gap-[3px]">
          <ButtonPage icon={faAngleLeft} color="#959595" />
          <ButtonPage text="1" />
          <ButtonPage text="2" />
          <ButtonPage text="3" />
          <ButtonPage icon={faAngleRight} color="#959595" />
        </Col>
      )}
      <Col className={paddingRight} display="flex justify-end items-center">
        <Button icon={faPlus} width="40px" onClick={onClick} />
      </Col>
    </Row>
  );
};

export default Buttons;
