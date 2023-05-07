"use client";

import SimpleDigitalClock from "@/components/simple-digital-clock.component";
import WithLanguage from "@/components/with-language.component";

export default function Home() {
  return (
    <WithLanguage>
      <main className="h-screen flex items-center justify-center font-sunflower">
        <SimpleDigitalClock />
      </main>
    </WithLanguage>
  );
}
