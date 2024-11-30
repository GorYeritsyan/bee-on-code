import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { BrowserRouter } from "react-router";
import QueryProvider from "@/lib/react-query/QueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
<QueryProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</QueryProvider>
  </Provider>
);
