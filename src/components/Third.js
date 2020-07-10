import React from 'react'
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import Wrap from '../shared/Wrap'
import { motion } from "framer-motion"

export default function Second() {
  return (
     <motion.div  initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}>
      <p>
      "You see, but you do not observe. The distinction is clear."
      </p>
       <Wrap>Sherlock Holmes</Wrap>
      <Link to="/fourth">
        <Button title="Next" />
      </Link>
    </motion.div>
    )
}
