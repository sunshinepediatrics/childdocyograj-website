"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { brand } from "@/data/site";

const schema = z.object({
  parentName: z.string().min(2, "Please enter your name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email.").optional().or(z.literal("")),
  childName: z.string().min(1, "Please enter your child’s name."),
  childAge: z.string().min(1, "Please enter your child’s age."),
  clinic: z.string().min(1),
  date: z.string().min(1, "Please choose a preferred date."),
  reason: z.string().min(2, "Please share the reason for visit."),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { clinic: "Om Hospital, Hospital Road, Chitwan, Nepal" } });

  return (
    <form
      action={`https://formsubmit.co/${brand.email}`}
      method="POST"
      onSubmit={handleSubmit((_values, event) => {
        const form = event?.target as HTMLFormElement | undefined;
        form?.submit();
      })}
      className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-[0_18px_55px_rgba(14,116,144,0.09)]"
    >
      <input type="hidden" name="_subject" value="New YourChildDoc consultation request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["parentName", "Parent Name"],
          ["phone", "Phone"],
          ["email", "Email"],
          ["childName", "Child Name"],
          ["childAge", "Child Age"],
          ["date", "Preferred Date"],
          ["reason", "Reason"],
        ].map(([name, label]) => (
          <label key={name} className="text-sm font-semibold text-slate-700">
            {label}
            <input
              {...register(name as keyof FormValues)}
              type={name === "date" ? "date" : name === "email" ? "email" : "text"}
              className="mt-2 min-h-12 w-full rounded-2xl border border-sky-100 bg-sky-50/60 px-4 text-slate-800 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            />
            {errors[name as keyof FormValues] ? <span className="mt-1 block text-xs text-coral-700">{errors[name as keyof FormValues]?.message}</span> : null}
          </label>
        ))}
        <label className="text-sm font-semibold text-slate-700">
          Preferred Clinic
          <select
            {...register("clinic")}
            className="mt-2 min-h-12 w-full rounded-2xl border border-sky-100 bg-sky-50/60 px-4 text-slate-800 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          >
            <option>Om Hospital, Hospital Road, Chitwan, Nepal</option>
            <option>Nanibabu Clinic, Hospital Road, Chitwan, Nepal</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold text-slate-700">
        Message
        <textarea
          {...register("message")}
          rows={5}
          className="mt-2 w-full rounded-2xl border border-sky-100 bg-sky-50/60 px-4 py-3 text-slate-800 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        />
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
      >
        <Send size={17} aria-hidden="true" />
        Submit Consultation Request
      </button>
      <p className="mt-4 text-sm leading-6 text-slate-500">Submissions are sent to {brand.email}.</p>
    </form>
  );
}
