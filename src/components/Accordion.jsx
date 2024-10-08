import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const styles = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="mb-6 overflow-hidden transition-all duration-300 bg-gray-900 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onToggle(id)}
        className={`flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none transition-all duration-300 ${
          isOpen ? 'bg-gray-800 text-white' : 'text-gray-300'
        }`}
      >
        <span className="pr-4 text-lg font-light tracking-wider uppercase">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaStar className={`text-xl ${isOpen ? 'text-white' : 'text-purple-500'}`} />
        </motion.span>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-4 text-gray-300 bg-purple-800">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

AccordionItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      id: 0,
      title: "What skin issues do you address?",
      content: "We specialize in treating various skin concerns such as dull skin, acne scars, ageing skin, and skin brightening and lightening. Our treatments are customized to target the root cause of your concerns, ensuring long-lasting results."
    },
    {
      id: 1,
      title: "What treatments do you offer for skin rejuvenation?",
      content: "We use advanced techniques like Thermage Treatment, Chemical Peel Treatment, Q-Switch Laser Treatment, and HydraFacial. These treatments help rejuvenate the skin, promote collagen production, and address specific skin issues."
    },
    {
      id: 2,
      title: "Are your treatments safe for sensitive skin?",
      content: "Yes, our treatments are designed using organic, plant-based ingredients and are tailored to be gentle on all skin types, including sensitive skin."
    },
    {
      id: 3,
      title: "What hair concerns do you treat?",
      content: "We address hair loss, hair thinning, and overall scalp health for both men and women. Our goal is to work on the root cause of hair fall and thinning."
    },
    {
      id: 4,
      title: "What treatments do you offer for hair loss?",
      content: "We provide treatments like PRP GF Therapy, Laser Hair Treatment, and customized scalp care to promote hair regrowth and reduce hair fall."
    },
    {
      id: 5,
      title: "What advanced technologies do you use in your treatments?",
      content: "In addition to our organic treatments, we utilize modern technology such as laser machines, Thermage, and HydraFacial equipment to provide comprehensive care for both skin and hair."
    },
    {
      id: 6,
      title: "How do I book a consultation or treatment?",
      content: "You can easily book a consultation through our website or by contacting us directly. We will guide you through the best options based on your individual needs."
    }
  ];

  return (
    <section className="one">
      <style>{styles}</style>
      <div className="absolute inset-0 opacity-5 bg-[url('/textures/organic-pattern-dark.png')]"></div>
      <div className="container relative z-10 max-w-6xl px-4 mx-auto">
        <motion.h2 
          className="mb-16 text-4xl font-light text-center text-white uppercase tracking-[0.2em] md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Frequently Asked <span className="font-normal text-gray-400">Questions</span> */}
        </motion.h2>
        <div className="relative">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute w-40 h-40 bg-gray-600 rounded-full -bottom-8 left-20 mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative grid gap-6 md:grid-cols-2"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  isOpen={openIndex === item.id}
                  onToggle={handleToggle}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-gray-700/30 to-transparent"></div>
    </section>
  );
};

export default Accordion;