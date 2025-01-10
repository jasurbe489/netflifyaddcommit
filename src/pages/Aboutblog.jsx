import React, { useState } from 'react';
import '../components/BlogPage.css';
import { Facebook, Instagram, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
import Modal from '../pages/Modal';
import Productsx from '../pages/Productsx';
import girl1 from '../assets/girlinabout.png'
import girl2 from '../assets/bruce.png'
import girl3 from '../assets/bruce1.png'
import girl4 from '../assets/proc.png'
import girl5 from '../assets/masroup.png'
import girl6 from '../assets/MasGroup.png'
import girl7 from '../assets/Mask.png'
import rec1 from '../assets/Rectangle 126 (4).png'
import rec2 from '../assets/Rectangle 126 (5).png'
import rec3 from '../assets/Rectangle 126 (6).png' 
import rec4 from '../assets/Rectangle 126 (7).png'
import rec5 from '../assets/Rectangle 126 (8).png'  
import rec6 from '../assets/Rectangle 126 (9).png'
import rec7 from '../assets/Rectangle 126 (10).png'

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    category: "Women",
    image: girl1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
  },
  {
    id: 2,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    category: "Women",
    image: girl2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
  },
  {
    id: 3,
    title: "Sit nam congue feugiat nisl, mauris amet nisi. ",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    category: "Women",
    image: girl3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
  },
  {
    id: 4,
    title: "New blog post 4",
    author: "Surf Auxion",
    date: "Aug 10 2020",
    category: "Men",
    image: girl1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
  },
  {
    id: 5,
    title: "New blog post 5",
    author: "Surf Auxion",
    date: "Aug 11 2020",
    category: "Kids",
    image: girl2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
  }
];

const saleProducts = [
  {
    id: 1,
    title: "Elit ornare in enim mauris.",
    date: "Aug 09 2020",
    image: rec1,
  },
  {
    id: 2,
    title: "Viverra pulvinar et enim.",
    date: "Aug 09 2020",
    image: rec2,
  },
  {
    id: 3,
    title: "Mattis varius donec fdsfd",
    date: "Aug 09 2020",
    image: rec3,
  },
  {
    id: 4,
    title: "Mattis varius donec fdsfd",
    date: "Aug 09 2020",
    image: rec4,
  },
  {
    id: 5,
    title: "Mattis varius donec fdsfd",
    date: "Aug 09 2020",
    image: rec5,
  }
];

const offerProducts = [
  {
    id: 1,
    title: "Duis lectus est.",
    price: "$12.00 - $15.00",
    image: girl4,
  },
  {
    id: 2,
    title: "Sed placerat.",
    price: "$12.00 - $15.00",
    image: girl5,
  },
  {
    id: 3,
    title: "Netus proin.",
    price: "$12.00 - $15.00",
    image: girl6,
  },
  {
    id: 4,
    title: "Platea in.",
    price: "$12.00 - $15.00",
    image: girl7,
  }
];

const categories = [
  { name: "Hobbies", count: 14 },
  { name: "Women", count: 21 },
  { name: "Women", count: 16 },
  { name: "Women", count: 8 },
  { name: "Women", count: 12 }
];

const Aboutblog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expandedPosts, setExpandedPosts] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const toggleReadMore = (postId) => {
    setExpandedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Filter both sale products and offer products based on search term
  const filteredSaleProducts = saleProducts.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredOfferProducts = offerProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-container">
      {/* Main Content */}
      <div className="main-content">
        {currentPosts.map(post => (
          <article key={post.id} className="blog-article">
            <img 
              src={post.image} 
              alt={post.title}
              className="article-image"
            />
            <div className="article-meta">
              <div className="author-info">
                <span className="article-author">{post.author}</span>
                <span className="article-date">{post.date}</span>
              </div>
            </div>
            <h2 className="article-title">{post.title}</h2>
            <p className="article-content">
              {expandedPosts[post.id] ? post.fullContent : post.content}
            </p>
            <button
              onClick={() => toggleReadMore(post.id)}
              className="read-more-btn"
            >
              {expandedPosts[post.id] ? 'Read Less' : 'Read More'} →
            </button>
          </article>
        ))}
        <div className="pagination">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            <ChevronLeft />
          </button>
          {[...Array(Math.ceil(blogPosts.length / postsPerPage))].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(blogPosts.length / postsPerPage)}>
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        {/* Search */}
        <div className="search-section">
          <h3 className="section-title">Search</h3>
          <input
            type="text"
            placeholder="Search for posts..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {/* Categories */}
        <div className="categories-section">
          <h3 className="section-title">Categories</h3>
          <div className="categories-list">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className={`category-button ${category.name === selectedCategory ? 'active' : ''}`}
              >
                <span>{category.name}</span>
                <span>({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sale Products */}
        <div className="sale-products-section">
          <h3 className="section-title">Sale Product</h3>
          <div className="sale-products-list">
            {filteredSaleProducts.map(product => (
              <div key={product.id} className="sale-product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="sale-product-image"
                />
                <div className="sale-product-info">
                  <h4 className="sale-product-title">{product.title}</h4>
                  <span className="sale-product-date">{product.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Offer Products */}
        <div className="offer-products-section">
          <h3 className="section-title">Offer Product</h3>
          <div className="offer-products-grid">
            {filteredOfferProducts.map(product => (
              <div 
                key={product.id} 
                className="offer-product-card"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="offer-product-image"
                />
                <div className="offer-product-info">
                  <h4 className="offer-product-title">{product.title}</h4>
                  <span className="offer-product-price">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Follow Section */}
        <div className="follow-section">
          <h3 className="section-title">Follow</h3>
          <div className="social-icons">
            <a href="#" className="social-icon facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-icon instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-icon twitter">
              <Twitter size={20} />
            </a>
          </div>
          <div className="tags">
            <h1 className="section-title" style={{fontSize: '30px', marginTop: '30px'}}>
            Tags
            </h1>

         <div className="footer-links" style={{display: 'flex', flexDirection: 'row', gap: '10px', textDecoration:'underline'}}>
         <h3 className='footer-link'>General</h3>
           <h3 className='footer-link'>Atsanil</h3>
           <h3 className='footer-link'>Insal</h3>
           <h3 className='footer-link'>Bibsaas</h3>
           <h3 className='footer-link'>Nulla.</h3>
         </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedProduct && <Productsx product={selectedProduct} />}
      </Modal>
    </div>
  );
};

export default Aboutblog;
