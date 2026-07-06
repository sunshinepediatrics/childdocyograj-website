"use client";

import { useState } from "react";
import { AlertTriangle, Brain, Hand, Languages, Smile, Trees } from "lucide-react";
import { milestoneAges, milestones } from "@/data/site";
import { Card } from "@/components/Primitives";
import { cn } from "@/lib/utils";

const groups = [
  { key: "gross", label: "Gross motor", icon: Trees },
  { key: "fine", label: "Fine motor", icon: Hand },
  { key: "language", label: "Language", icon: Languages },
  { key: "social", label: "Social", icon: Smile },
  { key: "cognitive", label: "Cognitive", icon: Brain },
] as const;

export function MilestoneChecker() {
  const [selectedAge, setSelectedAge] = useState<(typeof milestoneAges)[number]>("12 months");
  const current = milestones.find((item) => item.age === selectedAge) ?? milestones[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <Card className="h-fit">
        <h2 className="mb-4 font-heading text-xl font-semibold text-slate-800">Select child’s age</h2>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
          {milestoneAges.map((age) => (
            <button
              key={age}
              type="button"
              onClick={() => setSelectedAge(age)}
              className={cn(
                "rounded-full px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-sky-200",
                age === selectedAge ? "bg-sky-600 text-white shadow-md" : "bg-sky-50 text-slate-700 hover:bg-sky-100",
              )}
            >
              {age}
            </button>
          ))}
        </div>
      </Card>
      <div className="space-y-5">
        <div className="rounded-[28px] bg-gradient-to-br from-sky-600 to-teal-500 p-7 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-100">Milestone guide</p>
          <h1 className="mt-2 font-heading text-3xl font-semibold">{current.age}</h1>
          <p className="mt-3 max-w-2xl leading-7 text-sky-50">
            Children grow at their own pace. This guide helps parents notice progress and know when a pediatric review is wise.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <Card key={group.key}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-teal-50 text-teal-700">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h2 className="font-heading text-xl font-semibold text-slate-800">{group.label}</h2>
                </div>
                <ul className="space-y-2 text-slate-600">
                  {current[group.key].map((item) => (
                    <li key={item} className="leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
        <Card className="border-coral-100 bg-coral-50">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-white text-coral-700">
              <AlertTriangle size={20} aria-hidden="true" />
            </span>
            <h2 className="font-heading text-xl font-semibold text-slate-800">Red flags and when to consult</h2>
          </div>
          <ul className="space-y-2 text-slate-700">
            {current.redFlags.map((item) => (
              <li key={item} className="leading-7">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-2xl bg-white p-4 text-sm leading-6 text-slate-600">
            This tool is educational only. If you are worried about your child, book a pediatric consultation.
          </p>
        </Card>
      </div>
    </div>
  );
}
