const API_KEY = "sk_a579e3116ebe4769a96d670e0fb1101d";
export const fetchStockReports = async () => {
  try {
    const response = await fetch(
      `https://cloud.iexapis.com/stable/tops?token=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching stock reports:", error);
    throw error;
  }
};
