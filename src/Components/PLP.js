import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../State/Action/actions';
import { productList } from '../State/Action/actions';


// const productList = [{
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4tbzxjnLt8FqjKgbysPe1KfXOhrLqGOtAg3i7LIPBQ&s",
//   name: "Rings",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNREVvrqe54nHFbrsUwcS80i-VknJWdV_JA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XBwaZce3CeJjoQv83tXpa88TcZ7W3_VRDg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-4xibhc4roNjIBauuV6zb488h7owPAwFyw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJ4Msew36DT2_yngV2w2HGzhu2PiOFeQhaQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLQfw4M3GgxnXQ_L5rgemKkLbYEROYKJJTw&s",
//   ],
//   Type: "Regular",
//   Color: "Silver",
//   Material: "Platinum",
//   Brand: "XYZ",
//   Price: "$10.00",
//   Stock: "154 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."


// },
// {
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-Dk_mQIcZetfMfAio39xhcWPJz-PSwSGaMr6RmcDCg&s",
//   name: "Leather Wallets",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGlMsByY79wLv5AWXa_RD9Pi2yvjJatK20g&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvWLC5xEQQATjVMf9AiDNkPXmbqEarBrbVQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKm7x0WLsztmRq9pY3tsvbty9hetvT25Mpjw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbPl8gIpGUAt6getDkM-fbDzb1d_zZsQmgw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVE0mQnchx4pStwwozlrMRixMO5dCvi9gng&s"
//   ],
//   Type: "Regular",
//   Color: "Brown",
//   Material: "Leather",
//   Brand: "HBA",
//   Price: "$50.00",
//   Stock: "100 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."

// },
// {
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAitGhtqs0rAoPGG4jd_kc2xR7U1F5SEyx3g&s",
//   name: "Smart Watches",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [

//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iM09NrdBR1c4QoRr4Higf8gmEyIOvieXWQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQite-Jb-6ehZ8_SqHO_wpWIfRx9xjd90G9xA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtPYcG1xHLRKmx4_9wfW2PrEFsA4zmn4fsjQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsOKCrReOqVPrSiGktp-IjzD_IXGIboMlqA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkkHkoIcBeGF1t6DBBgA5CKBNqR4NtI0w1Jw&s"
//   ],
//   Type: "Regular",
//   Color: "Black",
//   Material: "Silver,Plastic",
//   Brand: " T11",
//   Price: "$100.00",
//   Stock: "80 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."

// },
// {
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-33AMR15xZg2EXi-cI_x6EEqcWsXJ1L5QQ&s",
//   name: "T shirts",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [

//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXl4MmTIhxp_ZK8ORrh2nk68VD08mYPuO44A&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6X-Q6mjvACCv_OEkIxt7hrgmLf47aAuBHmw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEtSKkThCPbjZiAS1e1BEUHu3DjHjDDDlAg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0_BuPw5JEYLOl9hHu1T2Nvo-z4j2SxPFxg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgNAvPILFIBF7EBhbFJ-aX5lvdHqW2NP2-g&s"
//   ],
//   Type: "Regular",
//   Color: "Black",
//   Material: " Cotton, Jeans",
//   Brand: " Reebook",
//   Price: "$15.00",
//   Stock: "200 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."

// },
// {
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRp2f8hnRe7BLh-mXSHUNFa0Aq7YUhM_WsOw&s",
//   name: "Trousers",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [

//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HXhuUgD4CmrX0tF0Sq5IvBiFfQ89m3aTVQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEoUasPpX7OzDAGNBqN5outoaZjoCX6fjgGg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJh8Y_XXtOLEOQ3lM78obM0iQP9UnnWu-adA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqoeJr6n2k-1qaMH5wPBsxvrzMWeVKqkAuA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSgqEZCqUARJfDneL7ijoBcK79eA8xXzN2A&s"
//   ],
//   Type: "Regular",
//   Color: "Grey",
//   Material: " Cotton, Jeans",
//   Brand: " Reebook",
//   Price: "$20.00",
//   Stock: "180 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."

// },
// {
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkci0NafuRwIz1aUrpo8hyqX3m3Dcr-iMIA&s",
//   name: "Bags",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [

//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1CihXooF3xhjRja-kjEcVQcIpv-RJ-ZBCA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5Omgkk2uPAwW5_S3TDnwWjMKwuqhYb607A&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY34Qu0Rfdqn_C9JLPU9CxyTyxzCplwW7Mlg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3llPPCmsZCci1NOn22E84Mw-zh0aRiu3a-Q&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxkYUuNcPl9Qy1I-JQZ1ezzu_Iwp7SYXmGg&s"
//   ],
//   Type: "Regular",
//   Color: "Blue",
//   Material: " cotton",
//   Brand: " Reebok",
//   Price: "$30.00",
//   Stock: "120 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."

// },
// {
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgsv4AQWQFYgN4opTE2kOeiDjaNBmSkATsA&s",
//   name: "Caps",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [

//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TnbFq49gbkNuHfgTHeD6jEp-DhChgiyijg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi26YRFJW2ZmSTCEg-EYGZYAFtK3oNxIr1rg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOYEjzPFDOL71AjM_H4HtWuuP-BgM0VGcug&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_Vd601V9C5nK0Mz26qXGfJ6tA3Ez8udg3g&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYRN1j4m5SBEGxW9hZ4lUYvryLxXsjdOmbw&s"
//   ],
//   Type: "Regular",
//   Color: "Black",
//   Material: " Cotton",
//   Brand: "NY",
//   Price: "$25.00",
//   Stock: "250 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."

// },
// {
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFy8HCWpZJq58F7XFhdsM1DgfozBCcYs2Bg&s",
//   name: "Ear Pods",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [

//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUf4cLdBE2kHCE5YwsvmCiCTWGxqTKIU6rg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRullXzvx1pWVXS9j0Mw3yZojBed0Z4chUttg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckt4OViRleVmVkLE2GyLgFhyBu3leqbFY6g&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKC-m5kDFGHyoiWy8j4CiDZrVG31JXQG3Bw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDWvBPxrwwWyrm9vk9tm2cSd6kklzpimkdg&s"
//   ],
//   Type: "Regular",
//   Color: "Black",
//   Material: " Plastic",
//   Brand: " Lenovo",
//   Price: "$120.00",
//   Stock: "130 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."

// },
// {
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xltOEAr_5joPM3LfRtCasj6fT_teO2Smww&s",
//   name: "Bracellets",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2L973a9lTDWOhZFGLJVLleN7w4N6hQMoJxg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78vjDTgqt7q8BOJLp5P8USmeiK2_oOQYryw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu26dhmAW3GG1M1sn3zE-ChU4yDQ5xa39FFw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeDyvpV55_IN4sBj97w12QwgDAFYPKogDpQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2jhpjRMUqQk6RrbCHUx8e-vItZpK4gLyRw&s"
//   ],
//   Type: "Regular",
//   Color: "Silver",
//   Material: " Gold",
//   Brand: " Dazzele",
//   Price: "$40.00",
//   Stock: "190 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."

// },
// {
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsyuGHW2jwpDzcg7xCtJxpF5h4Szqmht29Q&s",
//   name: "Iphones",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [

//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaouL20CDnFQdDpsRIhkPeeRzptpue17WDzw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mOrgdq2iyXBxy9rniyPDxA8Fbgozo17n-Q&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSic8v5_RwEwACMk-1QTzk7BQHk7ZFDwCgRmw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0EVPPVAqpdvwYOvz55zUMhV4D8YuY78SpQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09sr-rzC7nNjTbhd55TF5m0c2Bnq3eg4VCA&s"
//   ],
//   Type: "Mobile",
//   Color: "Black",
//   Material: "platinum",
//   Brand: " Iphone",
//   Price: "$300.00",
//   Stock: "140 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."

// },
// {
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgsgCgdM69s7fNfZVf7KOtCatuo3VlX5dtw&s",
//   name: "Mobile Accessories",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [

//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvBvY3l_iLrmoKT6Al7oH_MNCLIjMxgMlAA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKl5dK3jgUzONSQt8Z6CyP4p0H2TtaBBqX0w&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-S0FJ_TR3XCBeWNdnv1680eXAMXtjsoW_kQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQ6WigC9nIYy2jPm_2EgdMzmnu108HuTdLA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnR7JCdeDy0zg79ync8elpIjxUKCZY9sFl7g&s"
//   ],
//   Type: "Regular",
//   Color: "Brown",
//   Material: " Cotton, Jeans",
//   Brand: " Reebook",
//   Price: "$150.00",
//   Stock: "160 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."

// },
// {
//   Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR5YbL4QDWxVJprFbmtFjuX5HvGrpE8GcfQ&s",
//   name: "Phone Cases",
//   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//   moreimages: [

//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eredR_VnnyT_k6ntH3lMAa7ULaKHdv_cSg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBeR_0NUdH6SllK0cKLf1al7EtDJdkA_SRw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGJgOyB7BtndDsZY_x3o0XxNxTJgpP521oA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMuCGccCzQhhJbIv3J48XQtnonhv0DBAvdAg&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE062XruueQtfwwYXFloLtfieXjp2-8GkQbQ&s"
//   ],
//   Type: "Regular",
//   Color: "Mix",
//   Material: " plastic",
//   Brand: "Every",
//   Price: "$60.00",
//   Stock: "170 pieces",
//   desc: " Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men."

// },
// ]


const PLP = () => {


  const dispatch = useDispatch();

  const products = useSelector(state => state.cartItems.products);
  debugger;
  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch,]);

  return (
    <div>
      <div className="container text-center" style={{ marginTop: "100px" }}>
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 px-4">
          {/* {productList.map((product) => ( */}

          {products && products.length > 0 ? (products.map((product) => (
            <div className="col">


              <div className="card" style={{ width: "18rem" }}>
                <img style={{ height: "250px" }} src={product.image} className="card-img-top" alt="Rings" />
                <div className="card-body">
                  <h5 className="card-title"><strong>{product.name}</strong></h5>
                  <p className="card-text">{product.description}</p>
                  <Link to="/pdp" state={product} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

          ))
          ) : (<p>Loadingproducts....</p>)}

          {/* <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{ height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-Dk_mQIcZetfMfAio39xhcWPJz-PSwSGaMr6RmcDCg&s" className="card-img-top" alt="Wallets" />
              <div className="card-body">
                <h5 className="card-title"><b>Leather Wallets</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/pdp" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{ height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAitGhtqs0rAoPGG4jd_kc2xR7U1F5SEyx3g&s" className="card-img-top" alt="Smart Watch" />
              <div className="card-body">
                <h5 className="card-title"><b>Smart Watches</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/pdp" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{ height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-33AMR15xZg2EXi-cI_x6EEqcWsXJ1L5QQ&s" className="card-img-top" alt="Tee Shirts" />
              <div className="card-body">
                <h5 className="card-title"><b>Tee Shirts</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/pdp" className="btn btn-primary">Read More</a>
              </div>
            </div>

          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{ height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRp2f8hnRe7BLh-mXSHUNFa0Aq7YUhM_WsOw&s" className="card-img-top" alt="Trouser" />
              <div className="card-body">
                <h5 className="card-title"><b>Mens Trouser</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/pdp" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{ height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkci0NafuRwIz1aUrpo8hyqX3m3Dcr-iMIA&s" className="card-img-top" alt="Bags" />
              <div className="card-body">
                <h5 className="card-title"><b>Bags</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/pdp" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{ height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgsv4AQWQFYgN4opTE2kOeiDjaNBmSkATsA&s" className="card-img-top" alt="caps" />
              <div className="card-body">
                <h5 className="card-title"><b>Caps</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/pdp" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{ height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFy8HCWpZJq58F7XFhdsM1DgfozBCcYs2Bg&s" className="card-img-top" alt="Ear Pods" />
              <div className="card-body">
                <h5 className="card-title"><b>Ear Pods</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/pdp" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{ height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xltOEAr_5joPM3LfRtCasj6fT_teO2Smww&s" className="card-img-top" alt="Bracellet" />
              <div className="card-body">
                <h5 className="card-title"><b>Bracellet</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/pdp" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{ height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsyuGHW2jwpDzcg7xCtJxpF5h4Szqmht29Q&s" className="card-img-top" alt="Iphones" />
              <div className="card-body">
                <h5 className="card-title"><b>Iphones</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/pdp" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{ height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgsgCgdM69s7fNfZVf7KOtCatuo3VlX5dtw&s" className="card-img-top" alt="Accessories" />
              <div className="card-body">
                <h5 className="card-title"><b>Mobile Accessories</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/pdp" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img style={{ height: "250px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR5YbL4QDWxVJprFbmtFjuX5HvGrpE8GcfQ&s" className="card-img-top img-thumbnail" alt="Cases" />
              <div className="card-body">
                <h5 className="card-title"><b>Mobile Cases</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/pdp" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div >
  )
}
const mapStateToProps = (state) => ({
  products: state.products
});

// const mapDispatchToProps = (dispatch) => ({
//   setProducts: (products) => dispatch(setProducts(products))
// });

export default connect(mapStateToProps)(PLP);
