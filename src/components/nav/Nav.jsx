import A from "../a/A";
import style from "@/components/nav/nav.module.css";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <A link="/">Home</A>
        </li>
        <li>
          <A link="/components/button">Button</A>
        </li>
        <li>
          <A link="/components/work">Work</A>
        </li>
      </ul>
    </nav>
  );
}
