export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 py-16 md:py-20">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Wordmark */}
          <div>
            <span className="font-serif text-2xl tracking-wordmark text-cream block mb-4">
              BORNE
            </span>
            <p className="text-sm text-cream/50 leading-relaxed max-w-xs">
              Australia&rsquo;s first luxury postpartum wellness hotel.
              Redefining the first days of motherhood.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-overline uppercase tracking-overline text-cream/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@bornewell.com"
                  className="hover:text-cream transition-colors"
                >
                  hello@bornewell.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bornewell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  @bornewell
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-overline uppercase tracking-overline text-cream/40 mb-4">
              Location
            </h4>
            <address className="not-italic text-sm space-y-1">
              <p>InterContinental Sydney</p>
              <p>33 Cross Street</p>
              <p>Double Bay NSW 2028</p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/30">
          <p>&copy; {new Date().getFullYear()} Borne Wellness Pty Ltd. All rights reserved.</p>
          <p>ABN pending</p>
        </div>
      </div>
    </footer>
  );
}
