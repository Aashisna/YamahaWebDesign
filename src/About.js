import React from "react";
import md from './MD.jpg';
import ab1 from './about1.jpg';
import ab2 from './about2.png';
export default function About() {
    return (
        <>
            <h1 className="bg-gray text-danger text-center">About Us</h1>
            <div className="row container py-5">
                <div className="col-lg-6">
                    <h2 className="text-primary text-center">FZ SA Version 3.0</h2>
                    <img src={ab1} className="App-logo d-block w-100 img-fluid" alt="slide1" />
                </div>
                <div className="col-lg-6">
                    <h2 className="text-primary text-center ">Our Details</h2>
                    <p className="text-center">Yamaha made its initial foray into India in 1985. Subsequently, it entered into a 50:50 joint-venture with the Escorts Group in 1996. However, in August 2001, Yamaha acquired its remaining stake becoming a 100% subsidiary of Yamaha Motor Co., Ltd, Japan (YMC). In 2008, Mitsui & Co., Ltd. entered into an agreement with YMC to become a joint-investor in the motorcycle manufacturing company “India Yamaha Motor Private Limited (IYM)”.

                        IYM operates from its state-of-the-art manufacturing units at Surajpur in Uttar Pradesh and Faridabad in Haryana and produces motorcycles for both domestic and export markets. With a strong workforce of more than 2,000 employees, IYM is highly customer-driven and has a countrywide network of over 400 dealers.</p>
                </div>
            </div>

            <div className="row py-5 container">
                <div className="col-lg-6">
                    <h2 className="text-primary text-center">MAW</h2>
                    <img src={ab2} className="App-logo d-block w-100 img-fluid" alt="slide1" />
                </div>
                <div className="col-lg-6">
                    <h2 className="text-primary text-center">Our Details</h2>
                    <p className="text-center">MAW was founded 46 years back by its past Chairman Mr. P.R. Agarwal by setting up an Engineering workshop in Biratnagar. It entered into agencies of automobile ancillary products like Goodyear Tyres, Mico Bosch, Mahale, Goetze, Talbros Gaskets etc. It took over the dealership of Ford Tractors in 1972 & Sold 164 Tractors in the 1st year of operation. It took the Dealership of Escorts/Rajdoot Motorcycles (Now YAMAHA) It promoted United Finance Ltd. As financing ARM of MAW. It started Engg. Division in 1998 with products like Greaves Genset, Ingersoll-Rand Compressors, Mettler Tolledo Weigh Solutions and ECEL material handling products. It started construction equipment division with JCB dealership started in last quarter 2002. It started SKODA business in the year 2009.
                    MAW was founded 46 years back by its past Chairman Mr. P.R. Agarwal by setting up an Engineering workshop in Biratnagar. It entered into agencies of automobile ancillary products like Goodyear Tyres, Mico Bosch, Mahale, Goetze, Talbros Gaskets etc. It took over the dealership of Ford Tractors in 1972 & Sold 164 Tractors in the 1st year of operation. It took the Dealership of Escorts/Rajdoot Motorcycles (Now YAMAHA) It promoted United Finance Ltd. As financing ARM of MAW. It started Engg. Division in 1998 with products like Greaves Genset, Ingersoll-Rand Compressors, Mettler Tolledo Weigh Solutions and ECEL material handling products. 
                    </p>
                </div>
                </div>
            <div className="row py-5 container">
                <div className="col-lg-6">
                    <h2 className="text-primary text-center">MD, Sapim Kharel</h2>
                    <img src={md} className="App-logo d-block w-100 img-fluid" alt="slide1" />
                </div>
                <div className="col-lg-6">
                    <h2 className="text-primary text-center">Our Details</h2>
                    <p className="text-center">Born on the 25th of September 1971 at Biratnagar, Nepal; Vishnu Kumar Agarwal is a visionary and authentic leader who is open to ideas, result-oriented, and exceptionally accountable, these are the persona that he carries with himself which is why has successfully been the key person for the rise of MAW group in Nepal.Mr. Agarwal fully transformed MAW in these 25 years from 1 venture to a total of 17 ventures to this date and still growing. As Chairman of MAW organization now with 12+ active institutions. Mr. Agarwal always stands by the MAW core values and ‘people’ as his key success factors.Yamaha Nepal too, under his admirable leadership and guidance, has been able to transform and position itself as a trusted, reliable, and preferred name to Nepalese two-wheeler enthusiasts. The brand today has become a heartbeat to motorcycles and scooters devotees.
                    <br/>This is just one instance for a brand, the other wings under MAW Enterprises are also growing at a fast pace, winning the hearts of many young enthusiasts within various sectors. Mr. Agarwal has been able to install an Organic Growth Model at MAW with starting small – sustaining – Learning More and Scaling up. The visionary growth model has kept the organization growing steadily, humbly, yet strongly.</p>
                    <br/>Being born, brought up, and having worked all his life in Nepal, Mr. Agarwal is a pure Nepali in heart and in pursuit. Today, he is considered an active enabler in the Nepalese economic ecosystem. As a young industrial leader of CNI – YEF at CNI, he founded the CNI – YEF forum which is a vibrant group of Young Entrepreneurs of CNI. His initiation at Nepal Infrastructure Summit, a Summit first of its kind that brought multi-Stakeholders of the Infrastructure system together. </div>
                </div>
            </>
            )
}