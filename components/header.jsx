export default function Header() {
  return (
    <header className="header container mt-0 mt-lg-4">
      <section className="header-secondary">
        <div className="header-connect d-none d-lg-block">
          <ul>
            <li>
              <a href="tel:+1-877-666-1840" title="Call us">
                <i class="fa-solid fa-phone"></i>
                Toll Free 1-877-666-1840 I office@traidaffairs.com
              </a>
            </li>

            <li>
              <a href="mailto:office@traidaffairs.com" title="Email us"></a>
            </li>
          </ul>
        </div>

        <div className="header-search d-lg-none">
          <ul>
            <li>
              <a href="" title="Menu">
                <i class="fa-solid fa-bars"></i>
              </a>
            </li>

            <li>
              <a href="" title="Search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="header-controls">
          <section className="user-controls">
            <a href="" title="Account">
              <img src="/images/user-avatar.png" alt="User"></img>
              <i className="fa-solid fa-angle-down"></i>
            </a>
          </section>

          <section className="cart-controls">
            <a href="" title="Cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-qty">3</span>
            </a>
          </section>
        </div>

        <div className="header-logo text-center">
          <img src="/images/logo.jpg" alt="Thread Affair - logo" />
        </div>
      </section>

      <section className="header-primary d-none d-lg-block">
        <nav className="nav-primary">
          <ul>
            <li>
              <a href="" title="Costume">
                Costume
              </a>
            </li>

            <li>
              <a href="" title="Costume">
                Costume
              </a>
            </li>

            <li>
              <a href="" title="Costume">
                Costume
              </a>
            </li>

            <li>
              <a href="" title="Costume">
                Costume
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-secondary">
          <ul>
            <li>
              <a href="" title="Office Suit">
                Office Suit
              </a>
            </li>

            <li>
              <a href="" title="Office Suit">
                Office Suit
              </a>
            </li>

            <li>
              <a href="" title="Office Suit">
                Office Suit
              </a>
            </li>

            <li>
              <a href="" title="Office Suit">
                Office Suit
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
