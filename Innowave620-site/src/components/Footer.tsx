import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full px-6 py-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
    &copy; {new Date().getFullYear()} InnoWave620. All rights reserved.
  </footer>
);

export default Footer;