import { Link } from "react-router-dom";
import Countdown from "@/components/Countdown";
import RSVPForm from "@/components/RSVPForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="wedding-title mb-6">Marta & Goran</h1>
          <p className="wedding-subtitle mb-4">
            Pozivamo vas da podelite sa nama najlepši dan našeg života
          </p>
          <div
            className="text-xl md:text-2xl font-medium"
            style={{ color: "hsl(var(--wedding-text-muted))" }}>
            <span className="inline-block mx-2">30</span>
            <span className="inline-block mx-2">·</span>
            <span className="inline-block mx-2">Maj</span>
            <span className="inline-block mx-2">·</span>
            <span className="inline-block mx-2">2026</span>
          </div>
        </div>

        {/* Countdown */}
        <Countdown />

        {/* RSVP Form */}
        <div className="mt-16">
          <RSVPForm />
        </div>

        {/* Admin Link - Subtle at bottom */}
        <div className="text-center mt-20 opacity-30 hover:opacity-100 transition-opacity">
          <Link
            to="/admin/login"
            className="text-xs text-muted-foreground hover:text-foreground">
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
