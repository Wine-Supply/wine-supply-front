import { ButtonToScrollUp } from "../../utils/utils";
import { UpOutlined } from "@ant-design/icons";

export default function ScrollToTopButton() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ButtonToScrollUp onClick={scrollUp}>
      <UpOutlined />
    </ButtonToScrollUp>
  );
}
