"use client";
import { Check, ChevronRight, Loader2, Mail } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";

const NewsletterForm = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();

  // Accept optional event so we can call this function directly from an onClick
  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e && typeof (e as any).preventDefault === "function") {
      e.preventDefault();
    }
    setLoading(true);
    try {
      console.log("[newsletter] submitting", email);

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        // Use manual redirect so we can detect 3xx responses
        redirect: "manual",
      });

      console.log(
        `[newsletter] response status=${res.status} location=${res.headers.get("location")}`
      );

      const text = await res.text();
      let data: any = null;
      try {
        data = JSON.parse(text);
      } catch (_err) {
        data = { text };
      }

      console.log("[newsletter] response body", data);

      if (!res.ok || data?.error || data?.resendError) {
        const errMsg = data?.error || data?.resendError || text || "Unknown error";
        throw new Error(errMsg);
      }

      toast({
        title: "Welcome aboard! 🚀",
        description: "You've been successfully added to the newsletter.",
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });

      setEmail("");
    } catch (err: any) {
      console.error("[newsletter] error", err);
      toast({
        title: "Error",
        description: err?.message || "Something went wrong! Please try again.",
        className: cn(
          "top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"
        ),
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <form className="max-w-md mx-auto mt-8 relative z-20" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-muted-foreground">
            Subscribe to my newsletter
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              placeholder="you@example.com"
              type="email"
              required
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        
        <Button
          disabled={loading}
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="button"
          onClick={() => handleSubmit()}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <p>Subscribing...</p>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              Subscribe <ChevronRight className="w-4 h-4 ml-2" />
            </div>
          )}
          <BottomGradient />
        </Button>
      </div>
    </form>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-brand to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent orange-400 to-transparent" />
    </>
  );
};

export default NewsletterForm;