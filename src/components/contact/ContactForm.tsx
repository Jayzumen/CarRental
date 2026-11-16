"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, Input, Label, Select, Textarea } from "@/components/ui/field";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    // No messaging backend yet — simulate a short network round-trip.
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    form.reset();
    toast.success("Message sent", {
      description: "Thanks! We'll get back to you within 2 hours.",
    });
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
      <Field>
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Jane Doe"
        />
      </Field>
      <Field>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@example.com"
        />
      </Field>
      <Field className="sm:col-span-2">
        <Label htmlFor="topic">Topic</Label>
        <Select id="topic" name="topic" defaultValue="booking">
          <option value="booking">Existing booking</option>
          <option value="new">New reservation</option>
          <option value="corporate">Corporate account</option>
          <option value="other">Something else</option>
        </Select>
      </Field>
      <Field className="sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="How can we help?"
        />
      </Field>
      <div className="flex flex-col-reverse items-start justify-between gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          We&apos;ll only use your details to respond to your request.
        </p>
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? <Loader2 className="animate-spin" /> : <Send />}
          Send message
        </Button>
      </div>
    </form>
  );
}
