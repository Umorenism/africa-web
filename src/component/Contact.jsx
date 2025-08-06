 
 import { Button } from 'antd';
import {motion} from 'framer-motion'
 const Contact = () => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded h-32"
            ></textarea>
            <Button type="primary" size="large" className="w-full">
              Send Message
            </Button>
          </div>
        </div>
      </motion.div>
    );
export default Contact