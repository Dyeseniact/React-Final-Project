import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { information } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

//hoc es un componente de orden superior 
const InformationCard = ({ index, title, description,  icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("rigth", "spring", 0.5 * index, 0.75)}
        className='w-full p-[1px] rounded-[2px] shadow-card'
      >
        <div
          options={
            {
              max: 45,
              scale: 1,
              speed: 450
            }
          }
          className='bg-white rounded-[2px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-tertiary text-[16px] font-bold text-center'>{title}</h3>
          <p className='text-tertiary'>{description}</p>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>INFORMACIÓN</p>
        <h3 className={`${styles.sectionHeadText}`}>Cuando & Donde</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-tertiary text-[17px] leading-[30px]'
      >
        Hace 5 años la vida decidió que coincidiéramos en la vida,
        hoy nosotros decididos casarnos y comenzar un nuevo viaje juntos como esposo.
        Y tenemos que celebrarlo con las mejores personas que han formado y estado en
        nuestra vida, así que si, oficialmente, estás invitado a nuestra boda y a
        conmemorar uno de los días más importantes de nuestra vida.
        No faltes que se va a poner buena la fiesta y no olvides confirmar tu asistencia.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {
          information.map((info, index) => (
            <InformationCard key={info.title} index={index} {...info} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");