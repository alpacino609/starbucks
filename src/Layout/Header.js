function Header() {
  return (
    <>
      <header>
        <div>
          <img src="/images/logo.png"></img>
        </div>

        <div>
          {/* sub headr */}
          <div className="sub-header">
            <ul className="header-ul">
              <li>
                <a href="/sign_in">Sign in</a>
              </li>
              <li>
                <a href="/may">My Starbucks</a>
              </li>
              <li>
                <a href="/custom">Customer Service & Ideas</a>
              </li>
            </ul>
          </div>
          {/* main header */}
          <div className="main-header">
            <ul className="header-ul">
              <li>
                <a href="/coffe">coffee</a>
              </li>
              <li>
                <a href="/menu">menu</a>
              </li>
              <li>
                <a href="/store">store</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
