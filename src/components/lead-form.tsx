"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const leadSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    phone: z.string().min(10, "Please enter a valid phone number."),
    issue: z.string().min(10, "Please describe the issue in a bit more detail."),
    tvBrand: z.string().optional(),
});

type LeadFormInputs = z.infer<typeof leadSchema>;

export default function LeadForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LeadFormInputs>({
        resolver: zodResolver(leadSchema),
    });
    const { toast } = useToast();
    const router = useRouter();

    const onSubmit: SubmitHandler<LeadFormInputs> = async (data) => {
        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, tvBrand: data.tvBrand }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Something went wrong.");
            }

            reset();
            router.push('/thank-you');

        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: error.message || "Could not submit your request. Please try again.",
            });
        }
    };

    return (
        <Card id="lead-form" className="w-full max-w-lg shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Get a Free Quote</CardTitle>
                <CardDescription>Fill out the form and our expert will call you back in minutes.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" {...register("name")} placeholder="Your Name" />
                        {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Number</Label>
                        <Input id="phone" type="tel" {...register("phone")} placeholder="Your Phone Number" />
                        {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="tvBrand">Brand</Label>
                        <Input id="tvBrand" {...register("tvBrand")} placeholder="e.g., Samsung, LG, Sony" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="issue">Issue</Label>
                        <Textarea id="issue" {...register("issue")} placeholder="e.g., TV not turning on, lines on screen..." />
                        {errors.issue && <p className="text-destructive text-sm">{errors.issue.message}</p>}
                    </div>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
