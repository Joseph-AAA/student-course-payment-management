function Footer() {
  return <div className="container flex items-center h-full justify-between gap-4 text-sm text-white">
                <div>
                  @2026 MyCode Academy. All rights reserved.
                </div>
                <div>
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                  |{' '}
                  <a href="/terms" className="hover:underline">
                    Terms of Service
                  </a>
                  |{' '}
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </div>
                <div>
                  Made with ❤️ by MyCode Academy Team
                </div>
         </div>
}
export default Footer;