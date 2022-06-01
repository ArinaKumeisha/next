import Link from "next/link";
import style from './A.module.scss';
export default function ({href, text}) {
  return (
    <Link href={href} >
      <a className={style.link}>{text}</a>
    </Link>
  )
}