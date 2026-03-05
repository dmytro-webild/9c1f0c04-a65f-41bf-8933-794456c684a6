"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import SplitAbout from "@/components/sections/about/SplitAbout";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Clock, DollarSign, Home, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="largeSmallSizeLargeTitles"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Kenzie Plumbing"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Why Us", id: "why-us" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact-cta" },
            { name: "Call Now", id: "hero" },
          ]}
          bottomLeftText="Hobbs, NM 88240"
          bottomRightText="(575) 397-3218"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Reliable Plumbing When You Need It Most"
          description="24/7 plumbing service for Hobbs and surrounding areas. Fast response, honest pricing, and experienced technicians you can trust."
          background={{ variant: "plain" }}
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/shocked-woman-calling-plumber-while-collecting-water-leaking-from-ceiling-using-utensil_657921-1199.jpg",              alt: "Fast Emergency Service"},
            {
              src: "http://img.b2bpic.net/free-photo/male-worker-operating-machinery-factory_107420-96043.jpg",              alt: "Expert Leak Detection"},
            {
              src: "http://img.b2bpic.net/free-photo/male-worker-operating-machinery-factory_107420-96043.jpg",              alt: "Professional Inspection"},
          ]}
          avatarText="Trusted by 500+ Local Homeowners"
          buttons={[
            { text: "CALL NOW (575) 397-3218", href: "tel:(575)397-3218" },
            { text: "Request Service", href: "#contact-cta" },
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Kenzie Plumbing Hero Section"
        />
      </div>

      <div id="trust-bar" data-section="trust-bar">
        <SocialProofOne
          names={[
            "★★★★★ 5-Star Reviews",            "Same-Day Emergency Response",            "Fair & Transparent Pricing",            "Expert Local Technicians",            "Your Home Treated with Care"]}
          title="Why Hobbs Homeowners Choose Kenzie"
          description="Proven local expertise with a commitment to honesty and professionalism."
          textboxLayout="default"
          useInvertedBackground={false}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardMedia
          title="Our Plumbing Services"
          description="From emergency repairs to full system replacements, we handle it all with professionalism and care."
          features={[
            {
              id: "emergency",              title: "Emergency Plumbing",              description: "Burst pipes, major clogs, urgent leaks — we respond quickly, anytime.",              tag: "24/7 Available",              imageSrc:
                "http://img.b2bpic.net/free-photo/shocked-woman-calling-plumber-while-collecting-water-leaking-from-ceiling-using-utensil_657921-1199.jpg",              imageAlt: "Emergency plumbing service"},
            {
              id: "leak-detection",              title: "Leak Detection & Repairs",              description: "Accurate diagnosis and long-lasting repairs for hidden or visible leaks.",              tag: "Advanced Diagnostics",              imageSrc:
                "http://img.b2bpic.net/free-photo/male-worker-operating-machinery-factory_107420-96043.jpg?_wi=1",              imageAlt: "Leak detection and repair"},
            {
              id: "water-line",              title: "Water Line Repair",              description: "From small repairs to full replacements for older plumbing systems.",              tag: "Full Replacements",              imageSrc:
                "http://img.b2bpic.net/free-photo/male-worker-operating-machinery-factory_107420-96043.jpg?_wi=2",              imageAlt: "Water line services"},
            {
              id: "sewer",              title: "Sewer Line Services",              description: "Inspection, repair and replacement to keep everything flowing properly.",              tag: "Inspection & Repair",              imageSrc:
                "http://img.b2bpic.net/free-photo/male-worker-operating-machinery-factory_107420-96043.jpg?_wi=3",              imageAlt: "Sewer line services"},
            {
              id: "inspections",              title: "Plumbing Inspections",              description: "Thorough inspections with clear recommendations and transparent pricing.",              tag: "Transparent Pricing",              imageSrc:
                "http://img.b2bpic.net/free-photo/male-worker-operating-machinery-factory_107420-96043.jpg?_wi=4",              imageAlt: "Professional plumbing inspection"},
            {
              id: "full-projects",              title: "Full Home Plumbing Projects",              description: "From bathroom remodel plumbing to full system replacements.",              tag: "Complete Solutions",              imageSrc:
                "http://img.b2bpic.net/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990698.jpg",              imageAlt: "Full home plumbing project"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Services offered by Kenzie Plumbing"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="They came out on a Sunday to help with a major clog. The technicians were knowledgeable and very respectful of our home. They really helped us when we were in a bind."
          rating={5}
          author="Karly, Seminole"
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg",              alt: "Karly from Seminole"},
            {
              src: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              alt: "Susan from Hobbs"},
            {
              src: "http://img.b2bpic.net/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148135.jpg",              alt: "Jay from Hobbs"},
            {
              src: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3797.jpg",              alt: "Willis from Hobbs"},
            {
              src: "http://img.b2bpic.net/free-photo/satisfied-businessman-smiling-showing-ok-sign-approve-like-something-good-standing-whit_1258-113185.jpg",              alt: "Local homeowner testimonial"},
            {
              src: "http://img.b2bpic.net/free-photo/smiling-senior-businessman-sitting-stairs_1262-3109.jpg",              alt: "Another satisfied customer"},
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="why-us" data-section="why-us">
        <SplitAbout
          tag="Why Choose Kenzie Plumbing"
          title="Local Experience You Can Trust"
          description="Serving Hobbs and surrounding communities with reliable, honest plumbing service every day and night."
          bulletPoints={[
            {
              title: "Local Experience",              description: "Serving Hobbs and surrounding communities with trusted plumbing service.",              icon: MapPin,
            },
            {
              title: "Fast Response",              description: "Emergency service available 24 hours a day, 7 days a week.",              icon: Clock,
            },
            {
              title: "Honest Pricing",              description: "Clear recommendations and fair pricing before any work begins.",              icon: DollarSign,
            },
            {
              title: "Respect for Your Home",              description: "Clean, professional technicians who treat your home with care.",              icon: Home,
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/male-worker-operating-machinery-factory_107420-96043.jpg?_wi=5"
          imageAlt="Kenzie Plumbing professional service"
          mediaAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="right"
        />
      </div>

      <div id="contact-cta" data-section="contact-cta">
        <ContactCTA
          tag="Ready for Fast, Fair Service?"
          title="Plumbing Problem? We're Ready 24/7."
          description="Fast response. Fair pricing. Professional service. Don't wait—call Kenzie Plumbing today."
          buttons={[
            { text: "CALL NOW (575) 397-3218", href: "tel:(575)397-3218" },
            { text: "Request Service Online", href: "#" },
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/man-fixing-kitchen-sink_53876-13430.jpg"
          imageAlt="Kenzie Plumbing Professional Service"
          logoText="Kenzie Plumbing"
          copyrightText="© 2025 Kenzie Plumbing. All rights reserved."
          columns={[
            {
              title: "Service",              items: [
                { label: "Emergency Plumbing", href: "#services" },
                { label: "Leak Detection", href: "#services" },
                { label: "Water Line Repair", href: "#services" },
                { label: "Sewer Services", href: "#services" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#why-us" },
                { label: "Our Reviews", href: "#testimonials" },
                { label: "Service Area", href: "#" },
                { label: "Contact", href: "#contact-cta" },
              ],
            },
            {
              title: "Contact",              items: [
                { label: "Phone: (575) 397-3218", href: "tel:(575)397-3218" },
                {
                  label: "3124 N Lovington Hwy, Hobbs, NM 88240",                  href: "#"},
                { label: "Open 24 Hours", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
