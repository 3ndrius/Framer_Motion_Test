import React from "react";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import Wrap from "../shared/Wrap";
import { motion } from "framer-motion"

export default function First() {
  return (
     <motion.div  initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}>
      <p>
        "It was easier to know it than to explain why I know it. If you were
        asked to prove that two and two made four, you might find some
        difficulty, and yet you are quite sure of the fact."
      </p>
      <Wrap>Sherlock Holmes</Wrap>
    
      <Link to="/second">
        <Button title="Next" />
      </Link>
    </motion.div>
  );
}
