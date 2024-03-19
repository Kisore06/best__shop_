import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiHost from '../../utils/api';

const AddProduct = () => {
    const [product, setProduct] = useState({
        productName: '',
        description: '',
        categoryName: '',
        subCategoryName: '',
        genderName: '',
        brandName: '',
    });
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [genders, setGenders] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${apiHost}/categories`);
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        const fetchSubcategories = async () => {
            try {
                const response = await axios.get('http://localhost:3001/subcategories');
                setSubcategories(response.data);
            } catch (error) {
                console.error('Error fetching subCategories:', error);
            }
        };

        const fetchGenders = async () => {
            try {
                const response = await axios.get('http://localhost:3001/genders');
                setGenders(response.data);
            } catch (error) {
                console.error('Error fetching genders:',error);
            }
        };

        const fetchBrands = async () => {
            try {
                const response = await axios.get('http://localhost:3001/brands');
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/product', product);
            console.log(response.data);
            setProduct({
              productName: '',
              description: '',
              categoryName: '',
              subCategoryName: '',
              genderName: '',
              brandName: '',
            });
            window.alert('Product added successfully!');  
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

                <button type="submit">Add Product</button>
            </form>
        </div>
        </div>
    );
};

export default AddProduct;
