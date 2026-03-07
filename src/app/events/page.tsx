// export default function EventsPage() { return (<div className="container mx-auto px-6 py-24 min-h-screen"><h1 className="text-4xl font-bold text-brand-orange mb-8 capitalize">Events</h1><p className="text-gray-300">This page is currently under construction. Check back soon!</p></div>); }

import EventsSection from "@/components/events/EventsSection";

export const metadata = {
    title: "Events | Mozilla Firefox Club VIT Bhopal",
    description: "Upcoming and past events, hackathons, workshops, and meetups by the Mozilla Firefox Club at VIT Bhopal.",
};

export default function EventsPage() {
    return <EventsSection />;
}
