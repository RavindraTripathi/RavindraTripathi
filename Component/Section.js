import { motion } from 'framer-motion';

export default function Section({ id, children }) {
  return (
    <section id={id} className="py-10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    </section>
  );
}
