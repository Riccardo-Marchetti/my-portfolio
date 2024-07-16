import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_Link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[210px]">
          <img
            src={image}
            alt={name}
            className="w-full object-cover h-full rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_Link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full 
              flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-8 h-8 object-cover" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-white font-bold text-[24px] ">{name}</h1>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>I miei lavori</p>
        <h2 className={styles.sectionHeadText}>Progetti</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Benvenuti nella mia sezione dei progetti! Qui troverete una selezione
          dei miei lavori piu significativi. Ogni progetto è stato realizzato
          applicando le competenze da me acquisite. Spero che vi piacciano!
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`projects-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "progetti");
