import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Background "
      />
      {/* id,title,price,rating,image */}
      <div className="home_row">
        <Product
          id="1214235"
          title="Apple 2021 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation)"
          price={29900}
          rating={5}
          image="https://m.media-amazon.com/images/I/61NGnpjoRDL._SX679_.jpg"
        />
        <Product
          id="1214236"
          title="Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB, 512GB Storage) Without Offer"
          price={91899}
          rating={5}
          image="https://m.media-amazon.com/images/I/71OjU53yorL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1214215"
          title="Fossil Gen 5 Touchscreen Women's Smartwatch with Speaker, Heart Rate, GPS, Music Storage and Smartphone Notifications"
          price={19899}
          rating={4}
          image="https://m.media-amazon.com/images/I/71ILzQ3of6L._UL1500_.jpg"
        />
        <Product
          id="1214237"
          title="
		  iQOO 11 5G (Legend, 8GB RAM, 256 GB Storage) | Snapdragon ® 8 Gen 2 Mobile Platform | 2K E6 AMOLED Display | V2 Chip"
          price={59999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ZeuCAbcSL._SL1200_.jpg"
        />
        <Product
          id="12142358"
          title="Samsung Galaxy S22 Ultra 5G (Phantom Black, 12GB, 512GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={118999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"
        />
		<Product
          id="1214222"
          title="MSI Katana GF66, Intel 12th Gen. i7-12650H, 40CM FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia RTX3060 6GB GDDR6/Black/2.25Kg), 12UE-1002IN"
          price={103990}
          rating={5}
          image="https://m.media-amazon.com/images/I/810RruIqTgL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1214789"
          title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)"
          price={75900}
          rating={4}
          image="https://m.media-amazon.com/images/I/81wxS8abrgL._SL1500_.jpg"
        />

      </div>
    </div>
  );
};

export default Home;
