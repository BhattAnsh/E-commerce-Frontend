import { useEffect, useState } from "react";
import CatsCard from "./catsCard";
function Cats() {
    const [dresses, setdresses] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [watches, setWatches] = useState([]);
    const [bags, setBags] = useState([]);
    useEffect(() => {
        const gettingDresses = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products/category/womens-dresses');
            const data = await response.json();
            setdresses(data.products);
          } catch (error) {
            console.error('Error fetching dresses:', error);
          }
        };
        gettingDresses();
        const gettingShoes = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products/category/womens-shoes');
            const data = await response.json();
            setShoes(data.products);
          } catch (error) {
            console.error('Error fetching dresses:', error);
          }
        };
        gettingShoes();
        const gettingWatches = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products/category/womens-watches');
            const data = await response.json();
            setWatches(data.products);
          } catch (error) {
            console.error('Error fetching dresses:', error);
          }
        };
        gettingWatches();
        const gettingBags = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products/category/womens-bags');
            const data = await response.json();
            setBags(data.products);
          } catch (error) {
            console.error('Error fetching dresses:', error);
          }
        };
        gettingBags();
      }, []);
  return (
    <>
        <div className="Cats-container flex flex-col">
            <div className="womensDresses bg-pink flex flex-col items-center justify-center gap-5 p-10">
                <center><h1 className=" text-4xl">Dresses</h1></center>
                <CatsCard dresses = {dresses}></CatsCard>
            </div>
            <div className="womensShoes bg-pink flex flex-col items-center justify-center gap-5 p-10">
                <center><h1 className=" text-4xl">Shoes</h1></center>
                <CatsCard dresses = {shoes}></CatsCard>
            </div>
            <div className="womensWatches bg-pink flex flex-col items-center justify-center gap-5 p-10">
                <center><h1 className=" text-4xl">Watches</h1></center>
                <CatsCard dresses = {watches}></CatsCard>
            </div>
            <div className="womensBags bg-pink flex flex-col items-center justify-center gap-5 p-10">
                <center><h1 className=" text-4xl">Bags</h1></center>
                <CatsCard dresses = {bags}></CatsCard>
            </div>
        </div>
    </>
  )
}

export default Cats;