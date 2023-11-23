import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { AppaCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Confirmation = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let age = getAge(form.age);

    if (age >= 18) {
      setLoading(false);
      alert("Gracias por confirmar tu asistencia.");

      setForm({
        name: "",
        age: "",
        email: "",
      });
    } else {
      setLoading(false);
      alert("Lo siento solo puedes confirmar si eres mayor de edad.");
    }

  };

  function getAge(data) {
    var today = new Date();
    var birthdate = new Date(data);
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }

    return age;
  }


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-secondary p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText} text-black`}>CONFIRMAR TU ASISTENCIA</p>
        <h3 className={`${styles.sectionHeadText} text-white`}>Confirmación</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-1 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nombre</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Escribe tu nombre"
              className='bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Edad</span>
            <input
              type='date'
              name='age'
              value={form.age}
              onChange={handleChange}
              min='1950-01-01'
              max='2023-12-31'
              className='bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Correo</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="ejemplo@gmail.com"
              className='bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
        
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Confirmando..." : "Confirmar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <AppaCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Confirmation, "confirmation");
