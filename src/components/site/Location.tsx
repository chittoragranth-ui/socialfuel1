import { motion } from "framer-motion";

export function Location() {
  return (
    <section id="location" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-4"
          >
            <span className="text-[10px] tracking-luxury uppercase text-gold">The Setting</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              A quiet address,<br />perfectly placed.
            </h2>
            <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground">
              Set within Omaxe India Trade Centre, Alpha-II Commercial Belt — a refined
              address with metro, cafés, parks and the city centre minutes away.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-gold">◆</span>
                <span>Omaxe India Trade Centre, Alpha-II Commercial Belt, Block I</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold">◆</span>
                <span>Sector Alpha II, Greater Noida</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold">◆</span>
                <span>Brahmpur Rajraula Urf Nawada, Uttar Pradesh 201310</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold">◆</span>
                <span>Walking distance to Alpha-1 Metro</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="md:col-span-8"
          >
            <div className="relative h-[420px] w-full overflow-hidden border border-border md:h-[500px]">
              <iframe
                title="Omaxe India Trade Centre, Alpha-II Commercial Belt, Block I, Sector Alpha II, Greater Noida, Brahmpur Rajraula Urf Nawada, Uttar Pradesh 201310"
                src="https://www.google.com/maps?q=Omaxe+India+Trade+Centre%2C+Alpha-II+Commercial+Belt%2C+Block+I%2C+Sector+Alpha+II%2C+Greater+Noida%2C+Brahmpur+Rajraula+Urf+Nawada%2C+Uttar+Pradesh+201310&output=embed"
                className="h-full w-full grayscale contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-[oklch(0.14_0.012_60)]/10 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
