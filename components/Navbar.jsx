import { useLocale } from "@/app/ClientRootLayout";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import {
  FaBrain,
  FaCaretDown,
  FaCode,
  FaDatabase,
  FaMobile,
  FaPalette,
} from "react-icons/fa";

export const Navbar = ({
  isServiceHovered,
  setIsServiceHovered,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isLanguageOpen,
  setIsLanguageOpen,
  currentLanguage,
  setCurrentLanguage,
}) => {
  const { currentLocale, headers } = useLocale();
  const pathname = usePathname(); // Hook untuk mendapatkan path saat ini

  // Fungsi untuk mengecek apakah path sedang aktif
  const isActivePath = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const services = [
    { name: `${headers.nav_services?.[0]}`, id: "web", icon: FaCode },
    { name: `${headers.nav_services?.[1]}`, id: "mobile", icon: FaMobile },
    { name: `${headers.nav_services?.[2]}`, id: "design", icon: FaPalette },
    { name: `${headers.nav_services?.[3]}`, id: "backend", icon: FaDatabase },
  ];

  const languages = [
    { code: "EN", name: "English", country: "US" },
    { code: "ID", name: "Indonesia", country: "ID" },
    { code: "DE", name: "Deutsch", country: "DE" },
    { code: "JP", name: "日本語", country: "JP" },
    { code: "CN", name: "中文", country: "CN" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative z-50 flex items-center justify-between px-4 md:px-8 lg:px-16 py-6 bg-transparent `}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center space-x-3 group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg"
          style={{
            boxShadow:
              "0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.3), 0 0 60px rgba(34, 197, 94, 0.1)",
          }}
          whileHover={{
            rotate: 12,
            boxShadow:
              "0 0 30px rgba(34, 197, 94, 0.7), 0 0 50px rgba(34, 197, 94, 0.4), 0 0 80px rgba(34, 197, 94, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <img src="/img/logo.png" className="text-xl" alt="" />
        </motion.div>
        <div>
          <motion.span
            className="text-white font-bold text-2xl tracking-wider"
            style={{
              textShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
            }}
          >
            Espercode
          </motion.span>
          <motion.div
            className="text-green-400 text-xs font-medium"
            style={{
              textShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
            }}
          >
            {headers.head_title}
          </motion.div>
        </div>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {/* Home */}
        <motion.a
          href="/"
          className={`text-sm font-medium transition-all duration-300 relative group ${
            isActivePath("/")
              ? "text-green-400"
              : "text-white hover:text-green-400"
          }`}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 * 0.1 }}
          style={{
            textShadow: isActivePath("/")
              ? "0 0 8px rgba(34, 197, 94, 0.8)"
              : undefined,
          }}
        >
          {headers.nav_home}
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-green-400"
            initial={{ width: 0 }}
            animate={{ width: isActivePath("/") ? "100%" : 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
            }}
          />
        </motion.a>

        {/* About */}
        <motion.a
          href="/about"
          className={`text-sm font-medium transition-all duration-300 relative group ${
            isActivePath("/about")
              ? "text-green-400"
              : "text-white hover:text-green-400"
          }`}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 0.1 }}
          style={{
            textShadow: isActivePath("/about")
              ? "0 0 8px rgba(34, 197, 94, 0.8)"
              : undefined,
          }}
        >
          {headers.nav_about}
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-green-400"
            initial={{ width: 0 }}
            animate={{ width: isActivePath("/about") ? "100%" : 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
            }}
          />
        </motion.a>

        {/* Services */}
        <div className="relative">
          <motion.button
            onMouseEnter={() => setIsServiceHovered(true)}
            onMouseLeave={() => setIsServiceHovered(false)}
            className={`text-sm font-medium transition-all duration-300 flex items-center space-x-1 group ${
              isActivePath("/services") || isServiceHovered
                ? "text-green-400"
                : "text-white hover:text-green-400"
            }`}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
            }}
            style={{
              textShadow: isActivePath("/services")
                ? "0 0 8px rgba(34, 197, 94, 0.8)"
                : undefined,
            }}
          >
            <span>{headers.nav_service}</span>
            <motion.span
              animate={{ rotate: isServiceHovered ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaCaretDown />
            </motion.span>
          </motion.button>

          {/* Active indicator untuk Services */}
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-green-400"
            initial={{ width: 0 }}
            animate={{ width: isActivePath("/services") ? "100%" : 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
            }}
          />

          {/* Dropdown */}
          <AnimatePresence>
            {isServiceHovered && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-72 bg-slate-800/90 backdrop-blur-md rounded-2xl border border-green-400/20 shadow-2xl"
                style={{
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.2)",
                }}
                onMouseEnter={() => setIsServiceHovered(true)}
                onMouseLeave={() => setIsServiceHovered(false)}
              >
                <div className="p-4">
                  {services.map((service, index) => (
                    <motion.a
                      key={service.name}
                      href={`/services/#${service.id}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 px-4 py-3 text-white text-sm hover:text-green-400 hover:bg-white/5 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-green-400 group"
                      whileHover={{
                        x: 8,
                        textShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
                      }}
                    >
                      <service.icon className="text-green-400 group-hover:scale-110 transition-transform duration-200" />
                      <span>{service.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Portfolio */}
        <motion.a
          href="/portfolio"
          className={`text-sm font-medium transition-all duration-300 relative group ${
            isActivePath("/portfolio")
              ? "text-green-400"
              : "text-white hover:text-green-400"
          }`}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 * 0.1 }}
          style={{
            textShadow: isActivePath("/portfolio")
              ? "0 0 8px rgba(34, 197, 94, 0.8)"
              : undefined,
          }}
        >
          {headers.nav_portofolio}
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-green-400"
            initial={{ width: 0 }}
            animate={{ width: isActivePath("/portfolio") ? "100%" : 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
            }}
          />
        </motion.a>

        {/* Contact */}
        <motion.a
          href="/contact"
          className={`text-sm font-medium transition-all duration-300 relative group ${
            isActivePath("/contact")
              ? "text-green-400"
              : "text-white hover:text-green-400"
          }`}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5 * 0.1 }}
          style={{
            textShadow: isActivePath("/contact")
              ? "0 0 8px rgba(34, 197, 94, 0.8)"
              : undefined,
          }}
        >
          {headers.nav_contact}
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-green-400"
            initial={{ width: 0 }}
            animate={{ width: isActivePath("/contact") ? "100%" : 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
            }}
          />
        </motion.a>
      </nav>

      {/* Language Selector & Mobile Menu */}
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <div className="relative">
          <motion.button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="hidden md:flex bg-slate-800/80 backdrop-blur-sm border border-green-400/30 text-white px-4 py-2 rounded-full items-center space-x-2 font-medium text-sm hover:bg-slate-700/80 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(34, 197, 94, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ReactCountryFlag
              countryCode={
                languages.find(
                  (lang) => lang.code === currentLocale.toUpperCase()
                )?.country
              }
              svg
              style={{ width: "1em", height: "1em" }}
            />
            <span>{currentLocale.toUpperCase()}</span>
            <motion.span
              animate={{ rotate: isLanguageOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaCaretDown />
            </motion.span>
          </motion.button>

          {/* Language Dropdown */}
          <AnimatePresence>
            {isLanguageOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-48 bg-slate-800/90 backdrop-blur-md rounded-xl border border-green-400/20 shadow-2xl"
                style={{
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.2)",
                }}
              >
                <div className="p-2">
                  {languages.map((lang, index) => (
                    <motion.button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-3 py-2 text-white text-sm hover:text-green-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        x: 4,
                        textShadow: "0 0 8px rgba(34, 197, 94, 0.8)",
                      }}
                    >
                      <ReactCountryFlag
                        countryCode={lang.country}
                        svg
                        style={{ width: "1.2em", height: "1.2em" }}
                      />
                      <span>{lang.name}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1 group relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="w-6 h-0.5 bg-white transition-all duration-300"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 4 : 0,
              boxShadow: isMobileMenuOpen
                ? "0 0 8px rgba(34, 197, 94, 0.8)"
                : "0 0 0px rgba(34, 197, 94, 0)",
            }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white transition-all duration-300"
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white transition-all duration-300"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -4 : 0,
              boxShadow: isMobileMenuOpen
                ? "0 0 8px rgba(34, 197, 94, 0.8)"
                : "0 0 0px rgba(34, 197, 94, 0)",
            }}
          />
        </motion.button>
      </div>
    </motion.header>
  );
};
