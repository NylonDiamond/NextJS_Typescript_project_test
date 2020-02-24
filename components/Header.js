import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
    color: "red",
    float: "left"
  };

const Header = () => (
    <div>
        <Link href="/"><a style={linkStyle}>Home</a>
        </Link>
        <Link href="/pizzaReview"><a style={linkStyle}>Pizza Reviews</a>
        </Link>
        <Link href="/translate"><a style={linkStyle}>Translate</a>
        </Link>
    </div>
)

export default Header;