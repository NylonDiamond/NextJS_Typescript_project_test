import Link from "next/link";
import Head from 'next/head';

const linkStyle = {
  marginRight: 15,
  color: "red",
  float: "left"
};

const Header = () => (
  <div className="nav-scroller py-1 mb-2">
      <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      </Head>
    <nav className="nav d-flex justify-content-between">
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/pizzaReview">
        <a style={linkStyle}>Pizza Reviews</a>
      </Link>
      <Link href="/translate">
        <a style={linkStyle}>Translate</a>
      </Link>
      <Link href="/map">
        <a style={linkStyle}>Map</a>
      </Link>
    </nav>
    <style jsx>{`
      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }
      .pb-1,
      .py-1 {
        padding-bottom: 0.25rem !important;
      }

      .pt-1,
      .py-1 {
        padding-top: 0.25rem !important;
      }
      .mb-2,
      .my-2 {
        margin-bottom: 0.5rem !important;
      }
      *,
      ::after,
      ::before {
        box-sizing: border-box;
      }
      ,
      .nav-scroller .nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
      .justify-content-between {
        -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
      }
      .d-flex {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
      }
      .nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
      }
      ,
      .text-muted {
        color: #6c757d !important;
      }
      .p-2 {
        padding: 0.5rem !important;
      }
      a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
      }
      *,
      ::after,
      ::before {
        box-sizing: border-box;
      }
      user agent stylesheet a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Header;
