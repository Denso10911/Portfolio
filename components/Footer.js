import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export default function Footer() {
  const router = useRouter();

  return (
    <FooterBlock
      route={router.pathname}
      initial='hidden'
      animate='visible'
      variants={variants}
    >
      <p>Copyright 2022 | Denys Herasymov | Next.js</p>
    </FooterBlock>
  );
}
const mainColor = "rgb(60, 1, 107)";

const FooterBlock = styled(motion.footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 30px;
  color: ${(props) => {
    switch (props.route) {
      case "/projects/DoIt":
        return "#009688;";
      case "/projects/GetWeather":
        return "white";
      default:
        return mainColor;
    }
  }};
`;
