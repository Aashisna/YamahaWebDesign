import React from "react";
import S2 from './slide2.jpg';
import S4 from './slide4.jpg';
import S3 from './slide3.jpg';
export default function Banner() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide py-1 container-fluid banner" data-bs-ride="true">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="/carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="/carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="/carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src= {S4} className="App-logo d-block w-100 img-fluid" alt="slide1" />
                    </div>
                    <div className="carousel-item">
                        <img src={S2} className="d-block w-100 img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={S3} className="d-block w-100 img-fluid" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container py-3">
                <div className="row py-5" >
                <h1 className="text-center text-danger py-3">OUR SPECIALITIES</h1>
                    <div className="col-lg-6">
                        <div className="sbox">
                        <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/157596884_103440925149591_4574368321395737059_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=wC1XDZNPp1YAX-90K9s&tn=tg-yJ3-r30uRADIU&_nc_ht=scontent.fktm8-1.fna&oh=00_AT-3vX2Xjt00exYAStrYlz9U_94VgqfQWu5htzDG1zpoAg&oe=63025101" className="d-block w-100 img-fluid" alt="..." />
                        <h4><a href="/scooter">Scooter</a></h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="sbox">
                        <img src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/183807555_132891688871181_533564564657364630_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0V52Cakb6dMAX81WAG3&_nc_ht=scontent.fktm8-1.fna&oh=00_AT_vEEtwJhccKM4cPlV4XA6XDw5CliaIcTqqvtQAzGHPZw&oe=63031AB7" className="d-block w-100 img-fluid" alt="..." />
                        <h4><a href="/bike">Bike</a></h4>
                        </div>
                    </div>
                </div>
            </div>     
            <div className="container ">
                <h1 className="text-center text-danger py-3">Featured Products</h1>
                <div className="row py-5 ">
                    <div className="col-lg-3 text-center">
                        <img src="https://www.yamaha.com.np/wp-content/uploads/2022/05/orange-491x350.png" className="d-block w-100 img-fluid box22" alt="..." />
                        <h3>FZ-X</h3>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src="https://www.yamaha.com.np/wp-content/uploads/2022/05/R15M-491x328.png" className="d-block w-100 img-fluid box22" alt="..." />
                        <h3>R15-M</h3>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src="https://www.yamaha.com.np/wp-content/uploads/2021/10/Matte-red-491x328.png" className="d-block w-100 img-fluid box22" alt="..." />
                        <h3>MT-15BS6</h3>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src="https://www.yamaha.com.np/wp-content/uploads/2021/09/MT15-ice-fluo-vermillion-491x289.png" className="d-block w-100 img-fluid box22" alt="..." />
                        <h3>XTZ 150 FI</h3>
                    </div>
                </div>
            </div>
        </>
    )

}