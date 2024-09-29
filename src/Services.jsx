import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpa, FaLeaf, FaCut, FaPaintBrush, FaHeart, FaSun, FaSmile, FaLightbulb, FaGem, FaSnowflake, FaStar, FaBars, FaTimes, FaChevronDown, FaChevronUp, FaMask, FaSprayCan,FaSearch } from 'react-icons/fa';

const serviceCategories = [
  {
    id: 'skincare',
    title: 'Skincare Services',
    icon: <FaSpa className="w-6 h-6" />,
    services: [
      {
        title: 'Laser Hair Treatment',
        icon: <FaLightbulb className="w-5 h-5" />,
        description: 'Advanced method to reduce unwanted hair growth using state-of-the-art laser technology.',
        benefits: [
          'Long-lasting hair reduction',
          'Minimal discomfort',
          'Reduced ingrown hairs',
          'Improved skin texture'
        ]
      },
      {
        title: 'Thermage Treatment',
        icon: <FaSun className="w-5 h-5" />,
        description: 'Non-invasive skin tightening treatment using radiofrequency energy to stimulate collagen production.',
        benefits: [
          'Non-invasive skin tightening',
          'Stimulates collagen production',
          'Suitable for face and body',
          'Long-lasting results'
        ]
      },
      {
        title: 'Q-Switch Laser Treatment',
        icon: <FaGem className="w-5 h-5" />,
        description: 'Powerful solution for pigmentation and tattoo removal using advanced laser technology.',
        benefits: [
          'Safe for all skin types',
          'Effective pigmentation and tattoo removal',
          'No downtime'
        ]
      }
    ]
  },
  {
    id: 'skinConcerns',
    title: 'Skin Concerns',
    icon: <FaLeaf className="w-6 h-6" />,
    services: [
      {
        title: 'Ageing Skin',
        icon: <FaSnowflake className="w-5 h-5" />,
        description: 'Rejuvenating treatments to restore youthful elasticity using organic ingredients.',
        benefits: [
          'Boosts collagen production for firmness',
          'Provides deep hydration',
          'Reduces signs of ageing'
        ]
      },
      {
        title: 'Acne Scars',
        icon: <FaHeart className="w-5 h-5" />,
        description: 'Treatments targeting stubborn acne marks using natural ingredients.',
        benefits: [
          'Reduces appearance of scars',
          'Smoothens skin texture',
          'Encourages natural skin healing'
        ]
      },
      {
        title: 'Dull Skin',
        icon: <FaSmile className="w-5 h-5" />,
        description: 'Revitalizing treatments to restore radiance using plant-based ingredients.',
        benefits: [
          'Enhances natural skin radiance',
          'Refreshes and revitalizes tired skin',
          'Deeply hydrates for a supple appearance'
        ]
      }
    ]
  },
  {
    id: 'hairConcerns',
    title: 'Hair Concerns',
    icon: <FaCut className="w-6 h-6" />,
    services: [
      {
        title: 'Hair Loss Concern',
        icon: <FaGem className="w-5 h-5" />,
        description: 'Comprehensive treatments for hair loss, including PRP GF treatments.',
        benefits: [
          'Stimulates natural hair growth',
          'Strengthens existing hair',
          'Minimally invasive with no downtime'
        ]
      },
      {
        title: 'Hair Loss for Women',
        icon: <FaHeart className="w-5 h-5" />,
        description: 'Specialized treatments addressing thinning hair in women.',
        benefits: [
          'Enhances hair density and volume',
          'Improves hair strength',
          'Uses organic ingredients safe for women'
        ]
      }
    ]
  },
  {
    id: 'makeup',
    title: 'Makeup Services',
    icon: <FaPaintBrush className="w-6 h-6" />,
    services: [
      {
        title: 'HD Makeup',
        icon: <FaStar className="w-5 h-5" />,
        description: 'High-definition beauty that looks flawless on camera.',
        benefits: [
          'Provides a smooth finish',
          'Long-lasting throughout the day',
          'Ideal for photoshoots'
        ]
      },
      {
        title: 'Airbrush Makeup',
        icon: <FaSnowflake className="w-5 h-5" />,
        description: 'Luxurious airbrush makeup for a radiant finish.',
        benefits: [
          'Ensures an even look',
          'Feels light on the skin',
          'Long-lasting with minimal touch-ups'
        ]
      }
    ]
  }
];
const ServiceItem = ({ item }) => (
  <div className="p-6 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105">
    <div className="flex items-center mb-4">
      <div className="p-3 mr-4 text-teal-600 bg-teal-100 rounded-full">
        {item.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
    </div>
    <p className="mb-4 text-gray-600">{item.description}</p>
    <div>
      <h4 className="mb-2 text-sm font-semibold text-teal-700 uppercase">Benefits:</h4>
      <ul className="pl-5 text-gray-600 list-disc">
        {item.benefits.map((benefit, index) => (
          <li key={index} className="mb-1 text-sm">{benefit}</li>
        ))}
      </ul>
    </div>
  </div>
);

ServiceItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const ServiceCategory = ({ category }) => (
  <div className="mb-12">
    <h2 className="mb-6 text-3xl font-bold text-teal-800">{category.title}</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {category.services.map((service, index) => (
        <ServiceItem key={index} item={service} />
      ))}
    </div>
  </div>
);

ServiceCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

const DropdownButton = ({ title, items, isOpen, toggleDropdown }) => (
  <div className="mb-2">
    <button
      onClick={toggleDropdown}
      className="flex items-center justify-between w-full px-6 py-3 text-left text-gray-700 transition-colors duration-200 hover:bg-teal-50 focus:outline-none"
    >
      <span>{title}</span>
      {isOpen ? <FaChevronUp className="text-teal-600" /> : <FaChevronDown className="text-teal-600" />}
    </button>
    {isOpen && (
      <ul className="pl-8 mt-2">
        {items.map((item, index) => (
          <li key={index} className="py-2">
            <a href="#" className="flex items-center text-gray-600 transition-colors duration-200 hover:text-teal-600">
              <span className="mr-2 text-teal-500">{item.icon}</span>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

DropdownButton.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    skin: false,
    makeup: false,
    hair: false,
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (category) => {
    setDropdowns((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const filteredCategories = serviceCategories.map(category => ({
    ...category,
    services: category.services.filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.services.length > 0);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || !isMobile) && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-xl md:relative md:translate-x-0 ${
              isMobile ? 'top-16' : ''
            }`}
          >
            <div className="flex items-center justify-between h-20 px-6 bg-teal-700">
              <h1 className="text-2xl font-bold text-white">Organic Pooja</h1>
              {isMobile && (
                <button
                  onClick={toggleSidebar}
                  className="text-white focus:outline-none"
                >
                  <FaTimes size={24} />
                </button>
              )}
            </div>
            <nav className="mt-8">
              {serviceCategories.map((category) => (
                <React.Fragment key={category.id}>
                  <button
                    onClick={() => scrollToCategory(category.id)}
                    className={`flex items-center w-full px-6 py-4 text-left transition-colors duration-200 ${
                      activeCategory === category.id
                        ? 'bg-teal-100 text-teal-700'
                        : 'text-gray-600 hover:bg-teal-50'
                    }`}
                  >
                    <span className="mr-4 text-teal-500">{category.icon}</span>
                    {category.title}
                  </button>
                  {category.id === 'makeup' && (
                    <>
                      <DropdownButton
                        title="Skin"
                        items={[
                          { icon: <FaMask className="w-4 h-4" />, name: 'Facials' },
                          { icon: <FaSprayCan className="w-4 h-4" />, name: 'Peels' },
                          { icon: <FaGem className="w-4 h-4" />, name: 'Microdermabrasion' },
                        ]}
                        isOpen={dropdowns.skin}
                        toggleDropdown={() => toggleDropdown('skin')}
                      />
                      <DropdownButton
                        title="Makeup"
                        items={[
                          { icon: <FaHeart className="w-4 h-4" />, name: 'Bridal' },
                          { icon: <FaStar className="w-4 h-4" />, name: 'Special Occasion' },
                          { icon: <FaLightbulb className="w-4 h-4" />, name: 'Lessons' },
                        ]}
                        isOpen={dropdowns.makeup}
                        toggleDropdown={() => toggleDropdown('makeup')}
                      />
                      <DropdownButton
                        title="Hair"
                        items={[
                          { icon: <FaCut className="w-4 h-4" />, name: 'Styling' },
                          { icon: <FaSprayCan className="w-4 h-4" />, name: 'Treatments' },
                          { icon: <FaLeaf className="w-4 h-4" />, name: 'Extensions' },
                        ]}
                        isOpen={dropdowns.hair}
                        toggleDropdown={() => toggleDropdown('hair')}
                      />
                    </>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white shadow-md">
          {isMobile && (
            <button
              onClick={toggleSidebar}
              className="text-gray-500 focus:outline-none"
            >
              {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          )}
          <h1 className="text-2xl font-semibold text-teal-800">Services Dashboard</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 pl-10 text-sm bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredCategories.map((category) => (
              <div key={category.id} id={category.id}>
                <ServiceCategory category={category} />
              </div>
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Services;