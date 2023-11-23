import { motion } from "framer-motion";
import { styles } from "../styles";

const Home = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-secondary' />
          <div className='w-1 sm:h-80 h-40 bg-secondary' />
        </div>

        <div>
          <h1 className={`${styles.homeHeadText}`}>
            ¡Nos casamos!
          </h1>
          <p className={`${styles.homeSubText} mt-2`}>
            Preparase para el viaje más importante <br className='sm:block hidden' />
            de nuestras vidas. ¡Nuestra boda! <br className='sm:block hidden' />
            Y vayan preparando la maleta <br className='sm:block hidden' />
            de ganas de pasarla bien y mucho amor. <br className='sm:block hidden' />
          </p>
        </div>
      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
