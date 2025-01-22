import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

  const [image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    category:"Bamboo Products",
    descriptive:"",
    descriptive2:"",
  })

  const imageHandler = (e)=>{
      setImage(e.target.files[0]);
  }

  const changeHandler = (e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
  }

  const Add_Product = async ()=>{
    console.log(productDetails);

    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);
    // product -> fieldname

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp)=>resp.json()).then((data)=>{responseData=data});

    if(responseData.success){
      product.image=responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("Failed")
      })
    }
  };

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Descriptive</p>
          <input value={productDetails.descriptive} onChange={changeHandler} type="text" name='descriptive' placeholder='Type here' />
        </div>
        {/* <div className="addproduct-itemfield">
          <p>Descriptive2</p>
          <input value={productDetails.descriptive2} onChange={changeHandler} type="text" name='descriptive2' placeholder='Type here' />
        </div> */}
 
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category}  onChange={changeHandler} name='category' className='add-product-selector'>
          <option value='Bamboo Products'>Bamboo Products</option> 
          <option value='Combs'>Combs</option> 
          <option value='Personal Grooming'>Personal Grooming</option> 
          <option value='Hygiene Products'>Hygiene Products</option>
          <option value='Hospitality'>Hospitality</option>
          <option value='Cutlery'>Cutlery</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file"  name='image' id="file-input" hidden/>
      </div>
      <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct
