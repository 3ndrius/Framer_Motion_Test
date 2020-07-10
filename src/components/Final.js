import React from "react";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
export default function Final() {
  return (
     <motion.div  initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}>
      <p>THE END (FRAMER_MOTION_LIB)</p>
      <a href="https://www.framer.com/motion/">Animation Lib</a>
      <br />

      <Button title="Like" />
      <Link to="/">
        <Button title="Return" />
      </Link>
    </motion.div>
  );
}
