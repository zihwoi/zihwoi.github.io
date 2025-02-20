const TechBadges = ({ technologies }) => (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, i) => (
        <motion.span
          key={i}
          className="bg-secondaryBg text-softBg px-2 py-1 rounded text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.1 }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );