"use client"

import { useState } from "react"
import { Search, Home, ShoppingCart, User, LayoutGrid } from "lucide-react"

const categories = [
  { id: "for-you", name: "For you" },
  { id: "home", name: "Home Improvement & Lighting" },
  { id: "jewelry", name: "Jewelry & Watches" },
  { id: "electronics", name: "Electronics" },
  { id: "beauty", name: "Beauty & Health" },
  { id: "toys", name: "Toys & Games" },
  { id: "lingerie", name: "Lingerie & Loungewear" },
  { id: "women", name: "Women's Clothing" },
  { id: "automotive", name: "Automotive & Motorcycle" },
  { id: "sports", name: "Sports & Entertainment" },
  { id: "computer", name: "Computer, Office & Education" },
]

const products = [
  { id: 1, name: "iPhone", image: "/iphone-smartphone.jpg" },
  { id: 2, name: "Digital Cameras", image: "/dslr-digital-camera.jpg" },
  { id: 3, name: "Earphones & Headphones", image: "/wireless-earbuds-black.jpg" },
  { id: 4, name: "Phone Cases", image: "/clear-phone-case.jpg" },
  { id: 5, name: "Video Game Consoles", image: "/xbox-gaming-console.jpg" },
  { id: 6, name: "Quartz Watches", image: "/silver-quartz-watch.jpg" },
  { id: 7, name: "Laptops", image: "/modern-laptop.png" },
  { id: 8, name: "Lint Remover", image: "/white-lint-remover-device.jpg" },
  { id: 9, name: "Smart Watches Accessories", image: "/smart-watch-with-band.jpg" },
  { id: 10, name: "Electronic Watches", image: "/digital-sport-watch.jpg" },
  { id: 11, name: "Used Phones", image: "/smartphone-mobile-phone.jpg" },
  { id: 12, name: "Power Banks", image: "/black-power-bank-charger.jpg" },
  { id: 13, name: "Bags", image: "/blue-travel-bag.jpg" },
  { id: 14, name: "Smart Home", image: "/smart-home-device.png" },
  { id: 15, name: "Mobile Phone Chargers", image: "/phone-charger-adapter-black.jpg" },
]

export default function AliExpressCategory() {
  const [activeCategory, setActiveCategory] = useState("for-you")
  const [activeNav, setActiveNav] = useState("category")

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white border border-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h1 className="text-2xl font-bold italic text-red-600">AliExpress</h1>
        <Search className="w-6 h-6 text-gray-600" />
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Categories */}
        <aside className="w-28 bg-gray-50 overflow-y-auto border-r border-gray-100">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`w-full text-left px-3 py-3 text-xs leading-tight transition-colors ${
                activeCategory === category.id
                  ? "bg-white text-red-500 font-medium border-l-2 border-red-500"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </aside>

        {/* Product Grid */}
        <main className="flex-1 overflow-y-auto p-3">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recommended</h2>
          <div className="grid grid-cols-3 gap-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-16 h-16 mb-2 flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-xs text-gray-700 text-center leading-tight">{product.name}</span>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Bottom Navigation */}
      <nav className="flex items-center justify-around py-2 border-t border-gray-200 bg-white">
        <button
          onClick={() => setActiveNav("home")}
          className={`flex flex-col items-center px-4 py-1 ${activeNav === "home" ? "text-red-500" : "text-gray-500"}`}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button
          onClick={() => setActiveNav("category")}
          className={`flex flex-col items-center px-4 py-1 ${
            activeNav === "category" ? "text-red-500" : "text-gray-500"
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="text-xs mt-1">Category</span>
        </button>
        <button
          onClick={() => setActiveNav("cart")}
          className={`flex flex-col items-center px-4 py-1 ${activeNav === "cart" ? "text-red-500" : "text-gray-500"}`}
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="text-xs mt-1">Cart</span>
        </button>
        <button
          onClick={() => setActiveNav("account")}
          className={`flex flex-col items-center px-4 py-1 ${
            activeNav === "account" ? "text-red-500" : "text-gray-500"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-xs mt-1">Account</span>
        </button>
      </nav>
    </div>
  )
}
