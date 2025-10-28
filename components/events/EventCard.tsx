export function EventCard() {
	return (
		<div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow">
			<img
				src="https://via.placeholder.com/400x200"
				alt="Event"
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h2 className="text-xl font-bold">Event Title</h2>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					Event description goes here. This is a brief overview of the event.
				</p>
				<div className="mt-4">
					<a
						href="#"
						className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
					>
						RSVP
					</a>
				</div>
			</div>
		</div>
	);
}
