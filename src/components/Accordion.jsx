import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons for open/close
import { Transition } from '@headlessui/react'; // Import Transition for smooth animations
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => onToggle(id)}
        className={`flex items-center justify-between w-full px-4 py-3 text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors duration-300 ${
          isOpen ? 'bg-gray-200' : 'bg-white'
        }`}
      >
        <span className="text-lg font-medium">{title}</span>
        <span className="text-xl">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="px-4 py-2 text-gray-600 bg-gray-50">
          {content}
        </div>
      </Transition>
    </div>
  );
};

// Define prop types for AccordionItem
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

  return (
    <div className="max-w-full px-4 mx-auto my-8 sm:px-6 lg:px-8">
      <div className="bg-white shadow sm:rounded-lg">
        <h2 className="px-6 py-4 text-2xl font-semibold text-gray-900 border-b border-gray-200">
          FAQ&apos;s
        </h2>
        <AccordionItem
          id={0}
          title="What skin issues do you address?"
          content="We specialize in treating various skin concerns such as dull skin, acne scars, ageing skin, and skin brightening and lightening. Our treatments are customized to target the root cause of your concerns, ensuring long-lasting results."
          isOpen={openIndex === 0}
          onToggle={handleToggle}
        />
        <div className="h-4"></div> {/* Gap between items */}
        <AccordionItem
          id={1}
          title="What treatments do you offer for skin rejuvenation?"
          content="We use advanced techniques like Thermage Treatment, Chemical Peel Treatment, Q-Switch Laser Treatment, and HydraFacial. These treatments help rejuvenate the skin, promote collagen production, and address specific skin issues."
          isOpen={openIndex === 1}
          onToggle={handleToggle}
        />
        <div className="h-4"></div> {/* Gap between items */}
        <AccordionItem
          id={2}
          title="Are your treatments safe for sensitive skin?"
          content="Yes, our treatments are designed using organic, plant-based ingredients and are tailored to be gentle on all skin types, including sensitive skin."
          isOpen={openIndex === 2}
          onToggle={handleToggle}
        />
        <div className="h-4"></div> {/* Gap between items */}
        <AccordionItem
          id={3}
          title="What hair concerns do you treat?"
          content="We address hair loss, hair thinning, and overall scalp health for both men and women. Our goal is to work on the root cause of hair fall and thinning."
          isOpen={openIndex === 3}
          onToggle={handleToggle}
        />
        <div className="h-4"></div> {/* Gap between items */}
        <AccordionItem
          id={4}
          title="What treatments do you offer for hair loss?"
          content="We provide treatments like PRP GF Therapy, Laser Hair Treatment, and customized scalp care to promote hair regrowth and reduce hair fall."
          isOpen={openIndex === 4}
          onToggle={handleToggle}
        />
        <div className="h-4"></div> {/* Gap between items */}
        <AccordionItem
          id={5}
          title="What advanced technologies do you use in your treatments?"
          content="In addition to our organic treatments, we utilize modern technology such as laser machines, Thermage, and HydraFacial equipment to provide comprehensive care for both skin and hair."
          isOpen={openIndex === 5}
          onToggle={handleToggle}
        />
        <div className="h-4"></div> {/* Gap between items */}
        <AccordionItem
          id={6}
          title="How do I book a consultation or treatment?"
          content="You can easily book a consultation through our website or by contacting us directly. We will guide you through the best options based on your individual needs."
          isOpen={openIndex === 6}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
};

export default Accordion;
