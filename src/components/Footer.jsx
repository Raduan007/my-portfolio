
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0B1120] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold text-blue-600">Raduan</h2>

            <p className="mt-6 text-gray-700 leading-8">
              Frontend Developer passionate about building modern,
              responsive, and user-friendly web applications using
              React, Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-lg">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>



              <li>
                <Link
                  href="/projects"
                  className="hover:text-blue-600 transition"
                >
                  Projects
                </Link>
              </li>



              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact</h3>

            <div className="flex items-center gap-3 text-lg">


              <a
                href="mailto:raduanhossen007@gmail.com"
                className="hover:text-blue-600 transition"
              >
                raduanhossen007@gmail.com
              </a>

            </div>
            <div>
              <a>
                +8801609247375
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect</h3>

            <div className="flex gap-4">

              <a

                href="https://github.com/Raduan007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-gray-500 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                <Image
                  src="/assets/github.png"
                  alt="GitHub"
                  width={28}
                  height={28}></Image>

              </a>

              <a

                href="https://www.linkedin.com/in/raduanhossen857/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border-2 border-gray-500 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                <Image
                  src="/assets/linkedin.png"
                  alt="GitHub"
                  width={28}
                  height={28}
                />

              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-14 pt-8 text-center text-gray-700">
          © {new Date().getFullYear()} <strong>Raduan</strong>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}