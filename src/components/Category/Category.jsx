import React from 'react'

const category = () => {
  return (
    <div>
       <section className="category-section">
            <div className="category-card">
                <h3 className="category-title">Trendy Apparel</h3>
                <figure className="category-icon"><i className="fa fa-tshirt"></i></figure>
                <p className="category-text">Trendy Apparel Selection</p>
            </div>
            <div className="category-card">
                <h3 className="category-title">High Quality</h3>
                <figure className="category-icon"><i className="fa fa-check"></i></figure>
                <p className="category-text">Quality and Comfort Assured</p>
            </div>
            <div className="category-card">
                <h3 className="category-title">Free Delivery</h3>
                <figure className="category-icon"><i className="fa fa-truck"></i></figure>
                <p className="category-text">Personalized Service</p>
            </div>
        </section>
    </div>
  )
}

export default category
