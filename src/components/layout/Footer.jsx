import React from "react";

function Footer() {
  return (
    <footer className="bg-gray mt-auto w-full h-full py-8 ">
      <div className="container flex items-center justify-between gap-8">
        <p>©{new Date().getFullYear()} CookRecipes - All rights reserved.</p>
        <p>
        Taste your foods here
        </p>
      </div>
    </footer>
  );
}

export default Footer;
