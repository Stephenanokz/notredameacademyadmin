import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { PostContextProvider } from "./context/postContext/PostContext";
import { GalleryImageContextProvider } from "./context/galleryImageContext/GalleryImageContext";
import { CarouselImageContextProvider } from "./context/carouselImageContext/CarouselImageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
          <GalleryImageContextProvider>
            <CarouselImageContextProvider>
                    <App />
            </CarouselImageContextProvider>
          </GalleryImageContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);