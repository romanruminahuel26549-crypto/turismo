import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';
import React from 'react';    

const DEFAULT_ITEMS = [
  {
    title: 'ADRe',
    description: 'Es una Asociación Civil sin fines de lucro, fundada el 26 de julio de 2011, conformada por instituciones públicas y privadas.',
    id: 1,
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYt5fFyvGVxm9VyE8JDPJlEd0i9vdmgIg-bg&s"
  },
  {
    title: 'FCE',
    description: 'una institución que ofrece carreras universitarias y realiza investigaciones que impactan en la comunidad local, como proyectos de economía social y de desarrollo.',
    id: 2,
    icon: "https://aulas.sistemasfce.com.ar/moodle/pluginfile.php?file=%2F1%2Fcore_admin%2Flogocompact%2F300x300%2F1757423408%2FFCE.png"
  },
  {
    title: 'CFP 655',
    description: 'es una institución educativa que ofrece capacitación práctica para el mundo del trabajo, con el objetivo de dotar a las personas de las habilidades, conocimientos y competencias necesarias para insertarse laboralmente.',
    id: 3,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUox8lN0fO1Vu2YJ4DnnLuRG6azoac3Fkjgg&s"
  },
  {
    title: 'Hotelera Gastronomica',
    description: 'Este es un lugar que, además de ser una hostería, se destaca por su gastronomía.',
    id: 4,
    icon: "https://turismo530.com/wp-content/uploads/2023/12/Comarca-los-Alerces-16-12-23-scaled.jpg"
  },
  {
    title: 'EPJA 7714',
    description: 'Es una institución que permite a personas mayores de 18 años completar sus estudios secundarios a través de un plan de tres años con modalidad presencial y semipresencial.',
    id: 5,
    icon:""
  },
  {
    title: 'ISET 815',
    description: 'Ofrece tecnicaturas superiores para formar profesionales en diversas áreas. Sirve como institución educativa para brindar capacitación terciaria en campos.',
    id: 6,
    icon:"https://noticiasdeesquel.com.ar/wp-content/uploads/2024/11/462921640_1078378290650141_1469401164923544527_n.jpg"
  },
  {
    title: 'Municipalidad de Esquel',
    description: 'Entidad administrativa local encargada de gobernar y gestionar los servicios públicos de la ciudad de Esquel.',
    id: 7,
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtaideyG_nDdhebNWMWanH6NCft6gjLfSdwg&s"
  },
  {
    title: 'Municipalidad de Trevelin',
    description: 'Es el órgano de gobierno local de la ciudad de Trevelin, Chubut.',
    id: 8,
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UvNd1pBpqfyxIO4IkBA-VPF_uIAl4M7hzw&s"
  },
  {
    title: 'Parque Nacional Los Alerces',
    description: 'Es un área protegida y patrimonio mundial de la Unesco​ que se encuentra en la provincia del Chubut, Argentina.',
    id: 9,
    icon:"https://upload.wikimedia.org/wikipedia/commons/2/24/Parque_Nacional_Los_Alerces.jpg"
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round ? 'rounded-full border border-white' : 'rounded-[24px] border border-[#222]'
      }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` })
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col ${
                round
                  ? 'items-center justify-center text-center bg-[#ffffff] border-0'
                  : 'items-start justify-between bg-[#fffbfb] border border-[#fff] rounded-[12px]'
              } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY: rotateY,
                ...(round && { borderRadius: '50%' })
              }}
              transition={effectiveTransition}
            >
              <div className={`${round ? 'p-0 m-0' : 'mb-4 p-5'}`}>
             <img className="h-20 w-20" src={item.icon} alt="" />
              </div>
              <div className="p-5">
                <div className="mb-1 font-black text-lg text-black">{item.title}</div>
                <p className="text-sm text-black">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? 'bg-white'
                    : 'bg-[#ffffff]'
                  : round
                    ? 'bg-[#555]'
                    : 'bg-[rgba(51,51,51,0.4)]'
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


