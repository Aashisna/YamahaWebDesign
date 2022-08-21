import React from "react";


export default function Footer() {
    return (
        <>
            <div className="bg-dark">
                <div className="container">
                    <div id="outerContainer" className="container d-flex justify-content-between">
                        <div id="container">
                            <div class="item">
                            </div>
                            <div class="circle one"></div>
                            <div class="circle two"></div>
                            <div class="circle three"></div>
                            <div class="circle four"></div>
                        </div>
                    </div>
                    <div className="container d-flex justify-content-between row foot">
                        <div className="col-lg-4 ">
                            <nav className="navbar navbar-expand-lg p-2 nav">
                                <div className="container d-flex justify-content-between">
                                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link active  text-danger" aria-current="page" href="/">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-danger" href="/about">AboutUs</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link  text-danger" href="/contact">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                            <div class="col-lg-8 text-lg-start mx">
                                <ul class="mb-0 ">
                                    <li class="mx-2 a"><a href="https://www.facebook.com/"><i class="bi bi-facebook f"></i></a></li>
                                    <li class="mx-2 a"><a href="https://gmail.google.com/inbox/"><i class="bi bi-google g"></i></a></li>
                                    <li class="mx-2 a"><a href="https://twitter.com/i/flow/login"><i class="bi bi-twitter t"></i></a></li>
                                    <li class="mx-2 a"><a href="https://www.linkedin.com/"><i class="bi bi-linkedin l"></i></a></li>
                                    <li class="mx-2 a"><a href="https://www.instagram.com/accounts/login/"><i class="bi bi-instagram i"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 frame ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d454051.88097367267!2d84.9899655!3d27.2417364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb5eab542fc071%3A0x10438cc9ad1133f7!2sNijgadh%20Municipality%20Ward%20No.%207%20Office!5e0!3m2!1sen!2snp!4v1658587699418!5m2!1sen!2snp"
                                title="Location"
                                width="{600}"
                                height="{450}"
                                allowfullscreen=""
                                loading="{lazy}"
                                referrerpolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}