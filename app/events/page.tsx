import { EventCard } from "@/components/events/EventCard";
import { EventsHero } from "@/components/events/EventsHero";

export default function EventsPage() {
	return (
		<div>
			<EventsHero />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<EventCard />
				<EventCard />
				<EventCard />
			</div>
		</div>
	);
}
