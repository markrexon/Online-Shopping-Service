import React, { useState, useEffect } from "react";

import { getCategory, getProducts } from "./helper/coreapicalls";
import Base from "./Base";

import "../styles.css";
import Card from "./Card";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
const [category,setCategory] = useState([]);
  const [searchItem , Setsearch]=useState("");
 const [selectCategory, setSelectCategory] = useState("");

 const setCat =(e)=>{
   e.preventDefault()
      setSelectCategory(e.target.value);
      console.log(selectCategory);

 }
  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setProducts(data);
        }
      });
  };
  const loadCategory =( )=> {
    getCategory()
    .then((dat) => {
      if (dat.error) {
        setError(dat.error);
        console.log(error);
      } else {
        setCategory(dat);
        console.log(category);
      }
    });
  }
 
  useEffect(() => {
    loadAllProducts();
    loadCategory();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to Mechanic store">
      <form onClick={setCat}>
       Category : <select className="form-control rounded">
   {category.map((d,i)=>{

return(
  <option key={i} value={d.id}>{d.name}</option>
)
  
   })}
 </select>
 <input type="submit" className="btn btn-primary btn-lg" ></input>

 </form>

        <br/>
       <div className="search">
       <div className="input-group ps-5">
       <span><p className="lead">Search your Nearby Location -> </p></span>
        
          <div id="navbar-search-autocomplete" className="form-outline">
          <input type="search" className="form-control rounded" placeholder="Search your Location" aria-label="Search" aria-describedby="search-addon" onChange={(e)=>{
        Setsearch(e.target.value)}}/>
      
        <br/>
        
    </div>
    </div>
    </div>
      <div className="row">
        {products.filter((val)=>{
          if (searchItem ==""){
            return val;
          }
          else if(val.location.toLowerCase().includes(searchItem.toLowerCase())){
            return val;
          }
        }).map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4">
                
      
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </Base>
  );
}
