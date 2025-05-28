
const Footer = () => {
  return (
    <footer className="bg-black border-t border-cyber-green/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 font-space text-sm mb-4 md:mb-0">
            © 2024 Prashant Khatri. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 font-space text-sm">Built with</span>
            <span className="text-cyber-green font-fira">♥</span>
            <span className="text-gray-400 font-space text-sm">for a secure digital world</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-cyber-green/10">
          <p className="text-center text-gray-500 font-space text-xs">
            Ethical hacking • Responsible disclosure • Making the internet safer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
