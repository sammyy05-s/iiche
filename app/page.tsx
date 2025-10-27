import { Description } from "@/components/root/Description";
import { Hero } from "@/components/root/Hero";
import { HoveringSponsor } from "@/components/root/HoveringSponsor";
import { HypePosts } from "@/components/root/HypePosts";
import { Prizes } from "@/components/root/Prizes";
import { Sponsors } from "@/components/root/Sponsors";
import { Timeline } from "@/components/root/Timeline";

export default function Home() {
	return (
		<>
			<Hero />
			<Description />
			<Prizes />
			<HoveringSponsor />
			<Timeline />
			<Sponsors />
			<HypePosts />
		</>
	);
}
