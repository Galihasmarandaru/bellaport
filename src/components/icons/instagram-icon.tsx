import clsx from "clsx";
import { SiInstagram } from "react-icons/si";

export default function InstagramIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox={clsx("0 0", size, size)}>
            <defs>
                <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#feda75" />
                    <stop offset="25%" stopColor="#fa7e1e" />
                    <stop offset="50%" stopColor="#d62976" />
                    <stop offset="75%" stopColor="#962fbf" />
                    <stop offset="100%" stopColor="#4f5bd5" />
                </linearGradient>
            </defs>

            <SiInstagram
                size={size}
                style={{ fill: "url(#instagramGradient)" }}
            />
        </svg>
    );
}
