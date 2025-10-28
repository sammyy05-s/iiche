import { FAQCard } from "@/components/faq/FAQCard";

export function FAQAccordion() {
	return (
		<div className="w-full">
			<h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
			<div className="border-t border-b divide-y">
				<FAQCard
					question="What is Alchemix IIChE?"
					answer="Alchemix IIChE is a platform for chemical engineering students..."
				/>
				<FAQCard
					question="How can I join Alchemix IIChE?"
					answer="You can join by signing up on our website..."
				/>
				<FAQCard
					question="What events does Alchemix IIChE host?"
					answer="We host a variety of events including workshops, seminars..."
				/>
			</div>
		</div>
	);
}
