function NetflixIconsNav() {
    return (
        <div className="d-none d-lg-flex w-25 justify-content-around align-items-center">
            <i className="bi bi-search text-light"></i>
            <a className="nav-link  text-light" href="#">KIDS</a>
            <i className="bi bi-bell  text-light"></i>

            <div className="dropdown  text-light">
                <a
                    className="btn btn-transparent dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img src="public/kids_icon.png" alt="icona-kids" width="30px" />
                </a>
            </div>
        </div>
    );
}

export default NetflixIconsNav;
