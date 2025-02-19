import type { Destination } from "~/types";
import { useDirectusAuth } from "#build/imports";

export const useDestinations = () => {
  const destinations = ref<Destination[]>([]);
  const { login } = useDirectusAuth();
  const { getItems } = useDirectusItems();

  const fetchDestinations = async () => {
    try {
      await login({ email: "nuxt@bot.com", password: "nuxtbot" });

      destinations.value = await getItems<Destination>({
        collection: "destination",
      });
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };

  onMounted(async () => {
    await fetchDestinations();
  });

  return { destinations, fetchDestinations };
};
