import React from "react";
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
        "In solving a problem of this sort, the grand thing is to be able to
        reason backward. That is a very useful accomplishment, and a very easy
        one, but people do not practise it much. In the everyday affairs of life
        it is more useful to reason forward, and so the other comes to be
        neglected."
      </p>
      <Wrap>Sherlock Holmes</Wrap>
      <Link to="/third">
        <Button title="Next" />
      </Link>
    </motion.div>
  );
}
