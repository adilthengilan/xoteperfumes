// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
  
  // CTA button scroll to collection
  document.querySelector(".cta-button").addEventListener("click", () => {
    document.querySelector("#collection").scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
  
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const navLinks = document.querySelector(".nav-links")
  
  mobileMenuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })
  
  // Product details data
  const productDetails = {
    1: {
      name: "Midnight Elegance",
      type: "Eau de Parfum • 100ml",
      price: "$299",
      description:
        "A sophisticated blend that captures the essence of midnight mystery. Perfect for evening occasions and special moments.",
      longDescription:
        "Midnight Elegance is our signature fragrance, carefully crafted to embody the allure of the night. This sophisticated scent opens with bright bergamot and spicy black pepper, creating an immediate sense of intrigue. The heart reveals a romantic bouquet of rose and jasmine, while the base notes of sandalwood and vanilla provide a warm, sensual finish that lingers beautifully on the skin.",
      notes: {
        top: "Bergamot, Black Pepper, Lemon Zest",
        heart: "Rose, Jasmine, Lily of the Valley",
        base: "Sandalwood, Vanilla, White Musk",
      },
      occasions: "Evening wear, Special occasions, Date nights",
      longevity: "8-10 hours",
      sillage: "Moderate to Strong",
      season: "Fall, Winter, Spring evenings",
    },
    2: {
      name: "Golden Mystique",
      type: "Eau de Toilette • 75ml",
      price: "$249",
      description: "An enchanting fragrance that embodies luxury and elegance with golden undertones.",
      longDescription:
        "Golden Mystique is a limited edition fragrance that captures the essence of luxury in every drop. This enchanting scent begins with a sparkling blend of citrus and pink pepper, creating an immediate sense of sophistication. The heart features warm vanilla and amber, while the base notes of musk and white woods provide a clean, elegant finish.",
      notes: {
        top: "Citrus, Pink Pepper, Mandarin",
        heart: "Vanilla, Amber, Orange Blossom",
        base: "Musk, White Woods, Cedarwood",
      },
      occasions: "Daytime wear, Business meetings, Casual elegance",
      longevity: "6-8 hours",
      sillage: "Moderate",
      season: "Spring, Summer, Early Fall",
    },
    3: {
      name: "Royal Essence",
      type: "Parfum • 50ml",
      price: "$399",
      description: "The pinnacle of luxury fragrance, crafted with rare ingredients for the most discerning taste.",
      longDescription:
        "Royal Essence represents the absolute pinnacle of our fragrance artistry. This precious parfum is crafted with the rarest and most exquisite ingredients sourced from around the world. The composition opens with precious saffron and Bulgarian rose, leading to a heart of pure oud and jasmine sambac. The base features aged cedar and rare ambergris, creating a truly regal and unforgettable scent experience.",
      notes: {
        top: "Saffron, Bulgarian Rose, Cardamom",
        heart: "Oud, Jasmine Sambac, Iris",
        base: "Cedar, Ambergris, Sandalwood",
      },
      occasions: "Luxury events, Special celebrations, Signature scent",
      longevity: "12+ hours",
      sillage: "Strong",
      season: "All seasons, particularly Fall and Winter",
    },
    4: {
      name: "Diamond Noir",
      type: "Eau de Parfum • 100ml",
      price: "$349",
      description: "A bold and mysterious fragrance that commands attention with its dark elegance.",
      longDescription:
        "Diamond Noir is our newest creation, designed for those who dare to be different. This bold and mysterious fragrance opens with an electrifying blend of black pepper and grapefruit, creating an immediate sense of power and confidence. The heart reveals sophisticated iris and lavender, while the base notes of vetiver and patchouli provide a dark, magnetic finish that leaves a lasting impression.",
      notes: {
        top: "Black Pepper, Grapefruit, Bergamot",
        heart: "Iris, Lavender, Geranium",
        base: "Vetiver, Patchouli, Dark Woods",
      },
      occasions: "Business power meetings, Evening events, Confident wear",
      longevity: "10-12 hours",
      sillage: "Strong",
      season: "Fall, Winter, Cool Spring days",
    },
  }
  
  // Modal functionality
  const modal = document.getElementById("productModal")
  const modalContent = document.getElementById("modalContent")
  const closeBtn = document.querySelector(".close")
  
  document.querySelectorAll(".view-details").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-product")
      const product = productDetails[productId]
  
      modalContent.innerHTML = `
        <div class="modal-product">
          <div class="modal-header">
            <h2>${product.name}</h2>
            <p class="modal-type">${product.type}</p>
            <div class="modal-price">${product.price}</div>
          </div>
          
          <div class="modal-body">
            <div class="modal-description">
              <h3>About This Fragrance</h3>
              <p>${product.longDescription}</p>
            </div>
            
            <div class="modal-notes">
              <h3>Fragrance Profile</h3>
              <div class="notes-detail">
                <div class="note-category">
                  <h4>Top Notes</h4>
                  <p>${product.notes.top}</p>
                </div>
                <div class="note-category">
                  <h4>Heart Notes</h4>
                  <p>${product.notes.heart}</p>
                </div>
                <div class="note-category">
                  <h4>Base Notes</h4>
                  <p>${product.notes.base}</p>
                </div>
              </div>
            </div>
            
            <div class="modal-details">
              <div class="detail-grid">
                <div class="detail-item">
                  <h4>Best For</h4>
                  <p>${product.occasions}</p>
                </div>
                <div class="detail-item">
                  <h4>Longevity</h4>
                  <p>${product.longevity}</p>
                </div>
                <div class="detail-item">
                  <h4>Sillage</h4>
                  <p>${product.sillage}</p>
                </div>
                <div class="detail-item">
                  <h4>Best Season</h4>
                  <p>${product.season}</p>
                </div>
              </div>
            </div>
            
            <div class="modal-actions">
              <button class="add-to-cart modal-add-cart" data-product="${product.name}">
                <i class="fas fa-shopping-bag"></i>
                Add to Collection - ${product.price}
              </button>
            </div>
          </div>
        </div>
      `
  
      modal.style.display = "block"
      document.body.style.overflow = "hidden"
    })
  })
  
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  })
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })
  
  // Add to cart functionality with animation
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart") || e.target.closest(".add-to-cart")) {
      const button = e.target.classList.contains("add-to-cart") ? e.target : e.target.closest(".add-to-cart")
      const productName = button.getAttribute("data-product")
  
      // Create ripple effect
      const ripple = document.createElement("span")
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
  
      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")
  
      button.appendChild(ripple)
  
      // Change button text temporarily
      const originalText = button.innerHTML
      button.innerHTML = '<i class="fas fa-check"></i> Added to Collection!'
      button.style.background = "#4CAF50"
      button.style.color = "#ffffff"
  
      // Show success message
      showNotification(`${productName} added to your collection!`)
  
      setTimeout(() => {
        button.innerHTML = originalText
        button.style.background = ""
        button.style.color = ""
        ripple.remove()
      }, 2000)
    }
  })
  
  // Notification system
  function showNotification(message) {
    const notification = document.createElement("div")
    notification.className = "notification"
    notification.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>${message}</span>
    `
  
    // Add notification styles
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: linear-gradient(45deg, #4CAF50, #45a049);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      z-index: 3000;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      animation: slideInRight 0.3s ease;
      font-weight: 600;
    `
  
    document.body.appendChild(notification)
  
    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }
  
  // Contact form submission
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault()
  
    const formData = new FormData(this)
    const submitButton = this.querySelector(".submit-button")
    const originalText = submitButton.innerHTML
  
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    submitButton.disabled = true
  
    // Simulate form submission
    setTimeout(() => {
      submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
      submitButton.style.background = "#4CAF50"
  
      showNotification("Thank you! Your message has been sent successfully.")
  
      // Reset form
      this.reset()
  
      setTimeout(() => {
        submitButton.innerHTML = originalText
        submitButton.style.background = ""
        submitButton.disabled = false
      }, 2000)
    }, 1500)
  })
  
  // Newsletter form submission
  document.querySelector(".newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault()
  
    const email = this.querySelector("input[type='email']").value
    const button = this.querySelector("button")
    const originalText = button.innerHTML
  
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'
    button.disabled = true
  
    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-check"></i>'
      showNotification("Successfully subscribed to our newsletter!")
      this.reset()
  
      setTimeout(() => {
        button.innerHTML = originalText
        button.disabled = false
      }, 2000)
    }, 1000)
  })
  
  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallax = document.querySelector(".hero-visual")
    const speed = scrolled * 0.3
  
    if (parallax) {
      parallax.style.transform = `translateY(${speed}px)`
    }
  })
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)
  
  // Observe elements for scroll animations
  document.querySelectorAll(".perfume-card, .testimonial-card, .feature, .contact-item").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(50px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(element)
  })
  
  // Dynamic particle generation
  function createParticle() {
    const particle = document.createElement("div")
    particle.classList.add("particle")
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 6 + "s"
    particle.style.animationDuration = Math.random() * 3 + 3 + "s"
  
    document.querySelector(".animated-bg").appendChild(particle)
  
    setTimeout(() => {
      particle.remove()
    }, 6000)
  }
  
  // Create new particles periodically
  setInterval(createParticle, 4000)
  
  // Header background opacity on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    const scrolled = window.pageYOffset
    const opacity = Math.min(scrolled / 100, 0.95)
  
    header.style.background = `rgba(0, 0, 0, ${opacity})`
  })
  
  // Perfume card hover effects
  document.querySelectorAll(".perfume-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 25px 50px rgba(255, 215, 0, 0.4)"
    })
  
    card.addEventListener("mouseleave", function () {
      this.style.boxShadow = ""
    })
  })
  
  // Add CSS animations for notifications
  const notificationStyles = document.createElement("style")
  notificationStyles.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
    
    .modal-product {
      color: #ffffff;
    }
    
    .modal-header {
      text-align: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(255, 215, 0, 0.3);
    }
    
    .modal-header h2 {
      font-family: "Playfair Display", serif;
      font-size: 2rem;
      color: #ffd700;
      margin-bottom: 0.5rem;
    }
    
    .modal-type {
      color: #cccccc;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .modal-price {
      font-size: 1.8rem;
      font-weight: 700;
      color: #ffd700;
    }
    
    .modal-body h3 {
      color: #ffd700;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    .modal-description {
      margin-bottom: 2rem;
    }
    
    .modal-description p {
      color: #cccccc;
      line-height: 1.6;
    }
    
    .notes-detail {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .note-category {
      background: rgba(0, 0, 0, 0.3);
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid rgba(255, 215, 0, 0.2);
    }
    
    .note-category h4 {
      color: #ffd700;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .note-category p {
      color: #cccccc;
      font-size: 0.9rem;
    }
    
    .detail-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .detail-item {
      text-align: center;
      padding: 1rem;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 8px;
      border: 1px solid rgba(255, 215, 0, 0.2);
    }
    
    .detail-item h4 {
      color: #ffd700;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      text-transform: uppercase;
    }
    
    .detail-item p {
      color: #cccccc;
      font-size: 0.8rem;
    }
    
    .modal-actions {
      text-align: center;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 215, 0, 0.3);
    }
    
    .modal-add-cart {
      background: linear-gradient(45deg, #ffd700, #ffed4e);
      color: #000000;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .modal-add-cart:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
    }
  `
  document.head.appendChild(notificationStyles)
  
  // Initialize the website
  document.addEventListener("DOMContentLoaded", () => {
    // Add loading animation
    document.body.style.opacity = "0"
    document.body.style.transition = "opacity 0.5s ease"
  
    setTimeout(() => {
      document.body.style.opacity = "1"
    }, 100)
  
    // Initialize scroll-triggered animations
    const animatedElements = document.querySelectorAll(".section-title, .hero-title")
    animatedElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    })
  
    // Trigger animations on scroll
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }
        })
      },
      { threshold: 0.3 },
    )
  
    animatedElements.forEach((element) => {
      titleObserver.observe(element)
    })
  })
  
  // Add CSS for ripple effect
  const style = document.createElement("style")
  style.textContent = `
      .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 215, 0, 0.6);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          pointer-events: none;
      }
      
      @keyframes ripple-animation {
          to {
              transform: scale(4);
              opacity: 0;
          }
      }
      
      .add-to-cart {
          position: relative;
          overflow: hidden;
      }
  `
  document.head.appendChild(style)
  