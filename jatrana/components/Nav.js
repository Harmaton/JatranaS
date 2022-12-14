import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'

export const Nav = () => {
  return (
    <nav className={navStyle.nav}>
        <ul>
            <li>
                <Link href='/'> Home</Link>
            </li>
            <li>
                <Link href='/products'> Products</Link>
            </li>
            <li>
                <Link href='/cart'> Cart</Link>
            </li>
            <li>
                <Link href='/about'> About</Link>
            </li>
        </ul>

    </nav>
  )
}
