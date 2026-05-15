"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShoppingBag,
  ArrowUpRight,
  Leaf,
} from "lucide-react";

const launchDate = new Date("2026-06-01T00:00:00");

export default function EcotwistComingSoon() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = launchDate.getTime() - new Date().getTime();

    if (total <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(total / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(
        Math.floor((total / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((total / 1000 / 60) % 60)
      ).padStart(2, "0"),
      seconds: String(Math.floor((total / 1000) % 60)).padStart(
        2,
        "0"
      ),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#0f1115] text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
          alt="Nature background"
          className="h-full w-full object-cover opacity-20 grayscale"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0f1115]" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-3xl"
        />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
          >
            <Leaf className="h-5 w-5 text-lime-300" />

            <h1 className="text-2xl font-semibold tracking-wide text-lime-200">
              Ecotwist
            </h1>
          </motion.div>

          <nav className="hidden items-center gap-10 md:flex">
            {["Collections", "Sustainability", "Journal", "About"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-zinc-300 transition hover:text-lime-200"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <button className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
              <Search className="h-5 w-5" />
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 text-center lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-5 text-xs uppercase tracking-[0.4em] text-lime-300"
        >
          Coming Soon
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-5xl font-semibold leading-tight text-transparent md:text-7xl"
        >
          Launching a New Era of Conscious Luxury
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          A curated collection of sustainable gifting and timeless
          craftsmanship is arriving soon.
        </motion.p>

        {/* Timer */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-5 md:grid-cols-4"
        >
          {timerItems.map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime-300/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <motion.div
                key={item.value}
                initial={{ opacity: 0.5, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="text-5xl font-bold text-white">
                  {item.value}
                </div>

                <div className="mt-2 text-sm uppercase tracking-[0.3em] text-zinc-400">
                  {item.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Email */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex w-full max-w-xl flex-col gap-4 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-zinc-500 outline-none backdrop-blur-xl transition focus:border-lime-300"
          />

          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 30px rgba(190,242,100,0.35)",
            }}
            className="rounded-2xl bg-lime-300 px-8 py-4 font-semibold text-black"
          >
            Notify Me
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-5 text-sm text-zinc-500"
        >
          Join 2,400+ people waiting for early access.
        </motion.p>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8"
        >
          {["Instagram", "LinkedIn", "Journal"].map((item) => (
            <a
              key={item}
              href="#"
              className="group flex items-center gap-2 text-zinc-400 transition hover:text-lime-200"
            >
              <span>{item}</span>

              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 px-6 py-10 backdrop-blur-xl lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold text-lime-200">
              Ecotwist
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              © 2026 Ecotwist. Sustainable luxury redefined.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-lime-200">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-lime-200">
              Terms
            </a>

            <a href="#" className="hover:text-lime-200">
              Contact
            </a>

            <a href="#" className="hover:text-lime-200">
              Sustainability
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}