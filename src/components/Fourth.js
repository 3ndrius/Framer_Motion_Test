import React from "react";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import Wrap from "../shared/Wrap";
import { motion } from "framer-motion"
export default function Fourth() {
  return (
    <motion.div  initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}>
       <p>
        "Eliminate all other factors, and the one which remains, even impossible
        must be the truth."
      </p>
      <Wrap>Sherlock Holmes</Wrap>
      <Link to="/final">
        <Button title="Next" />
      </Link>
    </motion.div>
  );
}
