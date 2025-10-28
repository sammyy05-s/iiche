export function FAQCard({ question, answer }: { question: string; answer: string }) {
	return (
		<div className="border-b border-gray-200 dark:border-gray-700">
			<h3 className="py-2">
				<button className="flex justify-between w-full text-left">
					<span>{question}</span>
					<span className="text-gray-400">+</span>
				</button>
			</h3>
			<div className="hidden">
				<p className="mt-2 text-gray-600 dark:text-gray-400">{answer}</p>
			</div>
		</div>
	);
}
