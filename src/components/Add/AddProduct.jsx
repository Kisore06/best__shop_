import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from "../../utils/api";


const AddProduct = () => {
  const [product, setProduct] = useState({
      productName: '',
      price:'',
      description: '',
      categoryName: '',
      subCategoryName: '',
      genderName: '',
      brandName: '',
      image1: null,
      image2: null,
      image3: null,
      image4: null,
  });
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [brands, setBrands] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [image1, setImage1] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [image2, setImage2] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [image3, setImage3] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [image4, setImage4] = useState(null);


  useEffect(() => {
      const fetchCategories = async () => {
          try {
              const response = await axios.get(`${api}/categories`);
              setCategories(response.data);
          } catch (error) {
              console.error('Error fetching categories:', error);
          }
      };

      const fetchSubcategories = async () => {
          try {
              const response = await axios.get(`${api}/subcategories`);
              setSubcategories(response.data);
          } catch (error) {
              console.error('Error fetching subCategories:', error);
          }
      };

      const fetchGenders = async () => {
          try {
              const response = await axios.get(`${api}/genders`);
              setGenders(response.data);
          } catch (error) {
              console.error('Error fetching genders:',error);
          }
      };

      const fetchBrands = async () => {
          try {
              const response = await axios.get(`${api}/brands`);
              setBrands(response.data);
          } catch (error) {
              console.error('Error fetching brands:',error);
          }
      };

      fetchCategories();
      fetchSubcategories();
      fetchGenders();
      fetchBrands();
  }, []);

  const handleImageChange1 = (e) => {
      setImage1(URL.createObjectURL(e.target.files[0]));
      setProduct(prevProduct => ({ ...prevProduct, image1: e.target.files[0] }));
  };

  const handleImageChange2 = (e) => {
      setImage2(URL.createObjectURL(e.target.files[0]));
      setProduct(prevProduct => ({ ...prevProduct, image2: e.target.files[0] }));
  };

  const handleImageChange3 = (e) => {
      setImage3(URL.createObjectURL(e.target.files[0]));
      setProduct(prevProduct => ({ ...prevProduct, image3: e.target.files[0] }));
  };

  const handleImageChange4 = (e) => {
      setImage4(URL.createObjectURL(e.target.files[0]));
      setProduct(prevProduct => ({ ...prevProduct, image4: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('productName', product.productName);
      formData.append('price', product.price);
      formData.append('description', product.description);
      formData.append('categoryName', product.categoryName);
      formData.append('subCategoryName', product.subCategoryName);
      formData.append('genderName', product.genderName);
      formData.append('brandName', product.brandName);
      if (product.image1) formData.append('image1', product.image1);
      if (product.image2) formData.append('image2', product.image2);
      if (product.image3) formData.append('image3', product.image3);
      if (product.image4) formData.append('image4', product.image4);

      try {
          const response = await axios.post(`${api}/upload`, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          console.log(response.data);
          setProduct({
              productName: '',
              price:'',
              description: '',
              categoryName: '',
              subCategoryName: '',
              genderName: '',
              brandName: '',
              image1: null,
              image2: null,
              image3: null,
              image4: null,
          });

          window.alert('Product added successfully!');
          window.location.reload();

      } catch (error) {
          console.error(error);
          window.alert('An error occurred while adding the Product.');
      }
    };

    return (
    <div style={{ paddingTop: '80px', maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                {/* Product Name */}
                <label>
                    Product Name:
                    <input
                        type="text"
                        value={product.productName}
                        onChange={(e) => setProduct({ ...product, productName: e.target.value })}
                        placeholder="Product Name"
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        required
                    />
                </label>
                {/* Product Price */}
                <label>
                    Product Price:
                    <input
                        type="text"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        placeholder="Product price"
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        required
                    />
                </label>
                {/* Product Description */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <label style={{ marginRight: '10px' }}>
                        Product Description:
                    </label>
                    <textarea
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        placeholder="Product Description"
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', flexGrow: 1 }}
                        required
                    />
                </div>
                {/* Category */}
                <label>
                    Category:
                    <select
                        value={product.categoryName}
                        onChange={(e) => setProduct({ ...product, categoryName: e.target.value })}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.name}>
                                {category.category}
                            </option>
                        ))}
                    </select>
                </label>
                {/* Subcategory */}
                <label>
                    Subcategory:
                    <select
                        value={product.subCategoryName}
                        onChange={(e) => setProduct({ ...product, subCategoryName: e.target.value })}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        required
                    >
                        <option value="">Select a subcategory</option>
                        {subcategories.map((subcategory) => (
                            <option key={subcategory.id} value={subcategory.name}>
                                {subcategory.name}
                            </option>
                        ))}
                    </select>
                </label>
                {/* Gender */}
                <label>
                    Gender:
                    <select
                        value={product.genderName}
                        onChange={(e) => setProduct({ ...product, genderName: e.target.value })}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        required
                    >
                        <option value="">Select a gender</option>
                        {genders.map((gender) => (
                            <option key={gender.g_id} value={gender.gender}>
                                {gender.gender}
                            </option>
                        ))}
                    </select>
                </label>
                {/* Brand */}
                <label>
                    Brand:
                    <select
                        value={product.brandName}
                        onChange={(e) => setProduct({ ...product, brandName: e.target.value })}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        required
                    >
                        <option value="">Select a brand</option>
                        {brands.map((brand) => (
                            <option key={brand.brand_id} value={brand.brand_name}>
                                {brand.brand_name}
                            </option>
                        ))}
                    </select>
                </label>
                {/* Image 1 */}
                <label>
                    Image 1:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange1}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        required 
                    />
                </label>
                {/* Image 2 */}
                <label>
                    Image 2:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange2}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                </label>
                {/* Image 3 */}
                <label>
                    Image 3:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange3}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                </label>
                {/* Image 4 */}
                <label>
                    Image 4:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange4}
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                </label>
                <button type="submit">Add Product</button>
            </form>
        </div>
    </div>
  );
  
};

export default AddProduct;