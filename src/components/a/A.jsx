import Link from "next/link";
import style from "@/components/a/a.module.css";

export default function A({ children, link }) {
  return (
    <Link className={style.a} href={link}>
      {children}
    </Link>
  );
}
