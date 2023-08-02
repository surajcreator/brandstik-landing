import './Header.scss'

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <a class="navbar-brand" href="https:www.brandstik.com/"><img class="logo" src='/brandstik-logo.png' /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="https://www.brandstik.com/products">Categories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.brandstik.com/about-us">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.brandstik.com/contact-us">Contact us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Request a Demo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}

export default Header;
