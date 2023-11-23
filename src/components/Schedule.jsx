import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../styles';
import { schedule } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";


const ScheduleCard = ({ activity }) => {
  return (<VerticalTimelineElement
    contentStyle={{ background: '#F9CACF', color: '#737373' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={activity.hour}
    iconStyle={{ background: 'white'}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={activity.icon} alt={activity.title} className='w-[60%] h-[60%] object-contain' />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[20px] font-bold'>{activity.title}</h3>
    </div>

  </VerticalTimelineElement>
  )
}

const Schedule = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Itinerario</p>
        <h2 className={`${styles.sectionHeadText}`}>Programa</h2>
      </motion.div>

      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {
            schedule.map((activity, index) => (
              <ScheduleCard key={index} activity={activity} />
            ))
          }
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Schedule, "schedule");