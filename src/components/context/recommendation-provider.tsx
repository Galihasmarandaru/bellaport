import { travelling } from "@/assets/data/travelling";
import type { Recommendation } from "@/types/recommendation";
import { createContext, useContext } from "react";
import { useLocation } from "react-router";

type RecommendationContextType = {
    recommendations: Recommendation[];
};

const RecommendationContext = createContext<RecommendationContextType | null>(null);

export const RecommendationProvider = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const type = params.get("type");

    let recommendations: Recommendation[] = [];
    if (type === "1") recommendations = travelling;


    return (
        <RecommendationContext.Provider value={{ recommendations }}>
            {children}
        </RecommendationContext.Provider>
    );
};

export const useRecommendationContext = () => {
    const ctx = useContext(RecommendationContext);
    if (!ctx) {
        throw new Error("useRecommendationContext must be used inside RecommendationProvider");
    }
    return ctx;
};