import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { url } from '../../assets/assets'

const Add = () => {
  const [image, setImage] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Salad',
    price: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      if (!image) {
        alert('Please select an image')
        return
      }
  
      const data = new FormData()
      data.append('image', image)
      data.append('name', formData.name)
      data.append('description', formData.description)
      data.append('category', formData.category)
      data.append('price', formData.price)
  
      const response = await axios.post(`${url}/food/add`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
  
      if (response.data.success) {
        alert('Food item added successfully!')
        setImage(false)
        setFormData({
          name: '',
          description: '',
          category: 'Salad',
          price: ''
        })
      }
    } catch (error) {
      console.error('Error adding food:', error)
      if (error.code === 'ERR_NETWORK') {
        alert('Network error: Please make sure the backend server is running')
      } else {
        alert(`Error adding food item: ${error.response?.data?.message || error.message}`)
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={handleSubmit}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image" className="cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src={image ? URL.createObjectURL(image) : assets.upload_area} 
              alt="Upload" 
              className="w-32 h-32 object-contain"
            />
          </label>
          <input 
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            hidden 
            required 
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Type Here' 
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea 
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="6" 
            placeholder='Write Content here'
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input 
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="$20"
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>

        <button type='submit' className='add-btn hover:opacity-90 transition-opacity'>
          ADD
        </button>
      </form>
    </div>
  )
}

export default Add