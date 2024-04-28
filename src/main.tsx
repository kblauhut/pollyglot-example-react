import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { IntlProvider } from "react-intl";

import en from "./locales/en.json";
import de from "./locales/en.json";
import fr from "./locales/en.json";
import es from "./locales/en.json";

import "./index.css";

const messages = { en, de, fr, es } as const;
const userLocale = navigator.language.split("-")[0];
const locale = (
  userLocale in messages ? userLocale : "en"
) as keyof typeof messages;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IntlProvider messages={messages[locale]} locale={locale}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
