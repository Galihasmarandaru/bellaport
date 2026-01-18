import type { Recommendation } from "@/types/recommendation";
import { useState } from "react";

export function useRecommendationData() {
    const [data, setData] = useState<Recommendation[]>([]);

    const loadRecommendations = (travelling: Recommendation[]) => {
        setData(travelling);
    };

    return {
        data,
        loadRecommendations,
    };
}