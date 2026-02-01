import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsProvider } from "@/entities/product/model/context/ProductsContext/ProductsProvider";
import { NotificationsProvider } from "@/features/notifications/model/context/NotificationsProvider";
import { CartProvider } from "@/entities/cart/model/context/CartProvider";
import { FavoritesProvider } from "@/entities/favorites/model/context/FavoritesProvider";
import Layout from "./Layout";
import HomePage from "@/pages/HomePage";
import StorePage from "@/pages/StorePage";
import FavoritesPage from "@/pages/FavoritesPage";
import CartPage from "@/pages/CartPage";
import CategoryPage from "@/pages/CategoryPage";
import ProductPage from "@/pages/ProductPage";
import SearchResultPage from "@/pages/SearchResultPage";
import NotFoundPage from "@/pages/NotFoundPage";

import.meta.glob("@/shared/assets/icons/**/*.svg", {
  eager: true,
});

import "./styles";

const BASE_URL = import.meta.env.BASE_URL;

const App = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <NotificationsProvider>
        <ProductsProvider>
          <CartProvider>
            <FavoritesProvider>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/store" element={<StorePage />} />
                  <Route path="/favorites" element={<FavoritesPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/search-result" element={<SearchResultPage />} />
                  <Route path="/store/:id" element={<ProductPage />} />
                  <Route path="/categories/:id" element={<CategoryPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Layout>
            </FavoritesProvider>
          </CartProvider>
        </ProductsProvider>
      </NotificationsProvider>
    </BrowserRouter>
  );
};

export default App;
