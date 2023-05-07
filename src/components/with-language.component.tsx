import { CoreComponent } from "@/shared/types/core-component.type";
import React, { useEffect } from "react";

interface WithLanguageProps extends CoreComponent {}

export default function WithLanguage(props: WithLanguageProps) {
  useEffect(() => {
    try {
      document.documentElement.lang = navigator.language ?? "en";
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return <>{props.children}</>;
}
