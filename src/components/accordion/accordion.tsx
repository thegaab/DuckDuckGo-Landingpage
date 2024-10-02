// src/components/accordion/Accordion.tsx
"use client"; // Adicione esta linha no topo do arquivo

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode; // Adicione este tipo para o children
  isFirst?: boolean; // Adicione esta propriedade opcional
}

const Accordion: React.FC<AccordionProps> = ({ title, children, isFirst }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-md shadow-md mb-1">
      <button
        onClick={toggleAccordion}
        className={`flex justify-between items-center w-full p-4 text-left ${
            isOpen ? 'bg-black' : 'bg-zinc-800/60'
          } hover:bg-black focus:outline-none transition-all duration-300 ${isFirst ? 'rounded-t-md' : ''}`}
      >
        <span className="font-semibold">{title}</span>
        <span>{isOpen ? <ChevronDown/> : <ChevronUp/>}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-black">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
