"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionWrapper from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/sections/section-header";
import NewsletterForm from "@/components/NewsletterForm";
import AnimatedBackground from "@/components/animated-background";
import { cn } from "@/lib/utils";

const NewsletterPage = () => {
  return (
    <>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <SectionWrapper
          id="newsletter"
          className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto py-20"
        >
          <SectionHeader
            id="newsletter-header"
            title="Newsletter"
            desc="Stay updated with my latest projects and tech stories."
            className="mb-8"
          />

          <div className="flex justify-center px-4 z-[50]">
            <Card className="w-full max-w-lg bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Join the List</CardTitle>
                <CardDescription>
                  No spam, just code. Unsubscribe at any time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NewsletterForm />
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>
      </main>
    </>
  );
};

export default NewsletterPage;