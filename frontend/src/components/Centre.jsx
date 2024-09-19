import React from 'react';
import { motion } from 'framer-motion';
import home from "../assets/home.jpeg";
import insi from "../assets/insi.jpg";
import oppo from "../assets/oppo.jpeg";
import inno from "../assets/inno.jpeg";

const Centre = () => {
  // Variantes d'animation
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 }, // Décalage pour chaque élément de texte
    }),
  };

  return (
    <div className='bbc-container mx-auto pt-20'>
      <motion.div
        className='text-left text-2xl lg:text-5xl md:text-3xl sm:text-2xl font-bold text-gray-400 mb-10 bg-gray-150 rounded-xl p-5'
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}>
        <h1>
          Dans notre centre d'apprentissage en ligne, nous pensons que la connaissance et la croissance sont les clés pour libérer votre plein potentiel.
        </h1>
      </motion.div>

      <div className='flex flex-col lg:flex-row pt-10 gap-10 mb-10 text-center'>
        {/* Premier Colonne */}
        <motion.div 
          className='flex flex-col items-center text-center' 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <motion.img 
            className='w-full h-60 md:w-full md:h-60 lg:w-full lg:h-60 mb-3 rounded-xl' 
            src={insi} 
            alt="Inspiration" 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1 }} 
          />
          <motion.h1 variants={textVariants} custom={0}>Inspiration</motion.h1>
          <motion.p variants={textVariants} custom={1}>Ouvrir l’avenir de l’apprentissage numérique</motion.p>
        </motion.div>

        {/* Deuxième Colonne */}
        <motion.div 
          className='flex flex-col items-center text-center' 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <motion.img 
            className='w-full h-60 md:w-full md:h-60 lg:w-full lg:h-60 mb-3 rounded-xl' 
            src={oppo} 
            alt="Opportunités" 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1 }} 
          />
          <motion.h1 variants={textVariants} custom={2}>Opportunités</motion.h1>
          <motion.p variants={textVariants} custom={3}>Renforcer votre parcours éducatif</motion.p>
        </motion.div>

        {/* Troisième Colonne */}
        <motion.div 
          className='flex flex-col items-center text-center' 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <motion.img 
            className='w-full h-60 md:w-full md:h-60 lg:w-full lg:h-60 mb-3 rounded-xl' 
            src={inno} 
            alt="Innovation" 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1 }} 
          />
          <motion.h1 variants={textVariants} custom={4}>Innovation</motion.h1>
          <motion.p variants={textVariants} custom={5}>Transformer votre façon d'apprendre</motion.p>
        </motion.div>

        {/* Quatrième Colonne */}
        <motion.div 
          className='flex flex-col items-center text-center' 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <motion.img 
            className='w-full h-60 md:w-full md:h-60 lg:w-full lg:h-60 mb-3 rounded-xl' 
            src={inno} 
            alt="Exploration" 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1 }} 
          />
          <motion.h1 variants={textVariants} custom={6}>Exploration</motion.h1>
          <motion.p variants={textVariants} custom={7}>Découvrez le potentiel illimité de notre e-learning</motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Centre;