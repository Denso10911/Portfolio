import { useRouter } from "next/router";
import Link from "next/link";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    textShadow: router.asPath === href ? "0 0 3px rgb(44, 1, 79)" : "",
  };

  return (
    <Link href={href}>
      <a style={style}>{children}</a>
    </Link>
  );
}

export default ActiveLink;
