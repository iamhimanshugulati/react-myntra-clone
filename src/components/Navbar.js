import React from "react";

const Navbar = (props) => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="./images/myntra_logo.png"
              alt="Myntra_Logo"
              width="120"
              height="60"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  MEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  WOMEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  KIDS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  HOME & LIVING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  BEAUTY
                </a>
              </li>
            </ul>

            <div className="d-flex flex-row bg-light rounded">
              <div className="p-2 bd-highlight mx-0 mt-2 border-end-0 bg-light pr-2">
                <i className="fas fa-search" aria-hidden="true"></i>
              </div>
              <div className="p-2 bd-highlight searchBar">
                <input
                  className="form-control bg-light me-2 border-0"
                  placeholder="Search for products, brands and more"
                  aria-label="Search"
                  id="navSearch"
                  type="search"
                  onChange={props.onChange}
                />
              </div>
            </div>

            <span className="navbar-text justify-content-center fw-bold text-dark">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item mx-2">
                  <div className="d-flex flex-column bd-highlight mb-3 justify-content-center">
                    <div className="p-2 bd-highlight px-0 py-0 align-self-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>
                    <div className="p-2 bd-highlight px-0 py-0">Profile</div>
                  </div>
                </li>
                <li className="nav-item mx-2">
                  <div className="d-flex flex-column bd-highlight mb-3">
                    <div className="p-2 bd-highlight px-0 py-0 align-self-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                      </svg>
                    </div>
                    <div className="p-2 bd-highlight px-0 py-0">Wishlist</div>
                  </div>
                </li>
                <li className="nav-item mx-2">
                  <div className="d-flex flex-column bd-highlight mb-3">
                    <div className="p-2 bd-highlight px-0 py-0 align-self-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-bag"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                    <div className="p-2 bd-highlight px-0 py-0">Bag</div>
                  </div>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
