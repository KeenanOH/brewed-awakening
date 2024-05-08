import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Brewed Awakenings",
    short_name: "Brewed Awakenings",
    description: "Online ordering for Brewed Awakenings",
    start_url: "/",
    display: "fullscreen",
    background_color: "#fff",
    theme_color: "#fff"
  };
}
