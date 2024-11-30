import { LuLoader2 } from "react-icons/lu";
import {motion} from 'framer-motion'

const Loader = () => {
    return (
        <div className='flex items-center'>
            <motion.div className='h-fit' animate={{rotate: '360deg'}}
                        transition={{duration: 0.6, repeat: Infinity}}>
                <LuLoader2 className='text-4xl text-gray-500'/>
            </motion.div>
        </div>
    )
}
export default Loader
