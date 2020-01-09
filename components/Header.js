import styled from 'styled-components';
import Link from 'next/link';

const HeaderStyled = styled.header`
  position: fixed;
  background-color: #050505;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    margin: 0;
    padding: 20px;
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 500px;
  min-width: 340px;
`;

const NavUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  color: #75757c;

  li {
    padding: 10px 5px;
  }

  a {
    color: #75757c;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
  }

  a:hover {
    color: white;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Link href="/">
          <a>
            <Logo src="/bookcaselogo.png" alt="bookcase logo" />
          </a>
        </Link>
        <nav>
          <NavUl>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a>See Your Books</a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a>Add Book</a>
              </Link>
            </li>
          </NavUl>
        </nav>
      </HeaderStyled>
    </>
  );
}
