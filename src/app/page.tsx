

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Tv, Wrench, Clock, Users, ThumbsUp, Check, Settings, Briefcase, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import WhatsAppButton from "@/components/whatsapp-button";
import ClientProvider from "@/components/client-provider";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import LeadForm from "@/components/lead-form";

function FloatingCallButton() {
  return (
    <a
      href="tel:+918858585559"
      className="fixed bottom-6 left-6 z-50 p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform duration-300 drop-shadow-lg flex items-center gap-2"
      aria-label="Call Us Now"
    >
      <Phone className="w-8 h-8"/>
    </a>
  );
}

export default function Home() {
    const services = [
        { icon: <Tv className="h-8 w-8" />, title: "All TV Brands", description: "Samsung, LG, Sony, & more." },
        { icon: <Settings className="h-8 w-8" />, title: "All TV Types", description: "LED, OLED, QLED, 4K, Smart TV." },
        { icon: <Wrench className="h-8 w-8" />, title: "All Issues Fixed", description: "No power, screen issues, sound problems." },
        { icon: <Briefcase className="h-8 w-8" />, title: "In-Home Service", description: "We come to you, same-day repairs." },
    ];

    const benefits = [
        { icon: <Users className="h-10 w-10 text-primary" />, title: "Expert Technicians", description: "Certified professionals with years of experience in TV electronics." },
        { icon: <Clock className="h-10 w-10 text-primary" />, title: "Fast, Same-Day Service", description: "We offer quick turnaround to get your entertainment back on track." },
        { icon: <ShieldCheck className="h-10 w-10 text-primary" />, title: "3-Month Warranty", description: "We stand by our work with a warranty on all repairs and parts." },
        { icon: <ThumbsUp className="h-10 w-10 text-primary" />, title: "Transparent Pricing", description: "Get a clear, upfront quote before any work begins. No hidden fees." },
    ];

    const faqs = [
        {
            question: "Which TV brands do you repair?",
            answer: "We repair all major TV brands, including Samsung, LG, Sony, Panasonic, TCL, Hisense, and many more. Our technicians are trained to handle the specifics of each manufacturer."
        },
        {
            question: "How long does a repair usually take?",
            answer: "Most common repairs, like motherboard or power supply issues, can be completed at your home within 1-2 hours. For more complex issues like screen replacement, it may take longer, but we aim for same-day or next-day service."
        },
        {
            question: "Do you offer a warranty on your repairs?",
            answer: "Yes! We are confident in our work. All our repairs come with a 3-month warranty on the parts replaced and the labor performed."
        },
        {
            question: "Is the inspection or visit charge adjustable?",
            answer: "Absolutely. The initial inspection fee is fully adjusted into the final repair bill if you decide to proceed with the repair. If you choose not to repair, a nominal inspection charge applies."
        }
    ];

    const testimonials = [
        { name: "Anjali S.", comment: "My Samsung TV had vertical lines on the screen. The technician from Custom TV Repair fixed it the same day at my home. Very professional and affordable!", stars: 5 },
        { name: "Vikram Mehta", comment: "The backlight on my LG LED TV went out. They gave me a quote over the phone and stuck to it. Excellent service and very knowledgeable team.", stars: 5 },
        { name: "Priya Rao", comment: "Fastest TV repair I've ever experienced. My Sony TV wouldn't turn on, and they had it working within an hour. Highly recommend their services.", stars: 5 }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32">
                    <div className="absolute inset-0 dots-pattern"></div>
                    <div className="container mx-auto px-4 relative">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="animate-fade-in-up">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-primary">
                                    Expert TV Repair At Your Doorstep.
                                </h1>
                                <p className="mt-6 text-lg md:text-xl max-w-xl text-muted-foreground">
                                    Don't let a broken TV ruin your day. We fix all brands, all models, with a service warranty. Get a free quote now!
                                </p>
                                <div className="mt-8 grid sm:grid-cols-2 gap-6 max-w-md">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                            <ShieldCheck className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Transparent Pricing</h3>
                                            <p className="text-sm text-muted-foreground">No hidden fees, ever.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                            <Clock className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Quick Response</h3>
                                            <p className="text-sm text-muted-foreground">Same-day service available.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="animate-fade-in-up animation-delay-300">
                                <LeadForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Bar */}
                <section className="py-12 bg-card border-y">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {services.map(service => (
                                <div key={service.title} className="flex flex-col items-center gap-2">
                                    <div className="text-primary">{service.icon}</div>
                                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section id="why-us" className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Custom TV Repair?</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                We are Mumbai's trusted choice for fast, reliable, and affordable TV repair services.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {benefits.map((benefit, index) => (
                                <div key={benefit.title} className="text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-headline text-xl font-semibold">{benefit.title}</h3>
                                    <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-16 md:py-24 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Customers Say</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                We've helped hundreds of customers in Mumbai get their TVs back in action.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <Card key={index} className="bg-background animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-0.5 mb-4">
                                            {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                                        </div>
                                        <p className="text-muted-foreground">"{testimonial.comment}"</p>
                                        <p className="font-semibold text-right mt-4">- {testimonial.name}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full mt-12">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </main>
             <ClientProvider>
                <WhatsAppButton />
                <FloatingCallButton />
            </ClientProvider>
        </div>
    );
}

    