import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="text-muted-foreground container mx-auto mt-12 px-4 py-8 text-center">
      <p>&copy; 2023 WitPro. All rights reserved.</p>
      <div className="mt-4">
        <Button variant="link" className="hover:text-primary transition-colors">
          Privacy Policy
        </Button>
        <Button variant="link" className="hover:text-primary transition-colors">
          Terms of Service
        </Button>
        <Button variant="link" className="hover:text-primary transition-colors">
          Contact Us
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
