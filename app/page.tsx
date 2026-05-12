"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Apple,
  Bell,
  ChevronRight,
  Dumbbell,
  Flame,
  HeartPulse,
  LineChart,
  MessageCircle,
  Moon,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  User,
  Watch,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const weeklyRecovery = [
  { day: "Mon", readiness: 76, sleep: 81, strain: 62 },
  { day: "Tue", readiness: 82, sleep: 87, strain: 68 },
  { day: "Wed", readiness: 71, sleep: 74, strain: 72 },
  { day: "Thu", readiness: 88, sleep: 91, strain: 59 },
  { day: "Fri", readiness: 84, sleep: 86, strain: 66 },
  { day: "Sat", readiness: 79, sleep: 83, strain: 71 },
  { day: "Sun", readiness: 91, sleep: 94, strain: 52 },
];

const integrations = [
  {
    name: "Oura Ring",
    type: "Sleep + Recovery",
    status: "Connected",
    icon: Watch,
    lastSync: "4 min ago",
  },
  {
    name: "CalAI",
    type: "Nutrition Tracking",
    status: "Connected",
    icon: Apple,
    lastSync: "12 min ago",
  },
  {
    name: "ShapeScale",
    type: "Body Composition",
    status: "Connected",
    icon: Scale,
    lastSync: "Today, 7:42 AM",
  },
  {
    name: "Coach Portal",
    type: "Plan + Messaging",
    status: "Active",
    icon: MessageCircle,
    lastSync: "Live",
  },
];

const metrics = [
  {
    label: "Readiness",
    value: "91",
    detail: "Prime for training",
    icon: HeartPulse,
    source: "Oura",
  },
  {
    label: "Sleep Score",
    value: "94",
    detail: "8h 14m total sleep",
    icon: Moon,
    source: "Oura",
  },
  {
    label: "Calories Left",
    value: "640",
    detail: "1,760 / 2,400 logged",
    icon: Apple,
    source: "CalAI",
  },
  {
    label: "Body Fat",
    value: "18.7%",
    detail: "Down 0.4% this month",
    icon: Scale,
    source: "ShapeScale",
  },
];

const coachingTasks = [
  "Complete lower-body strength session",
  "Hit 140g protein target",
  "10-minute recovery walk after dinner",
  "Coach check-in due by 7 PM",
];

type PillTone = "default" | "dark" | "success" | "warm";

type PillProps = {
  children: React.ReactNode;
  tone?: PillTone;
};

function Pill({ children, tone = "default" }: PillProps) {
  const tones: Record<PillTone, string> = {
    default: "bg-zinc-800 text-zinc-300 ring-1 ring-zinc-700",
    dark: "bg-amber-400 text-black",
    success: "bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20",
    warm: "bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-zinc-800 bg-zinc-950/80 p-5 shadow-2xl shadow-black/30 backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

export default function FireSwaProofOfConcept() {
  const [selectedView, setSelectedView] = useState("Today");

  const statusText = useMemo(() => {
    if (selectedView === "Today") {
      return "Your recovery is high. Today is a strong training day.";
    }

    if (selectedView === "Week") {
      return "Weekly trend is improving across sleep, readiness, and nutrition.";
    }

    return "Coach view highlights the actions most likely to move the client forward.";
  }, [selectedView]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.08),transparent_35%)]" />

      <div className="relative mx-auto flex max-w-7xl gap-6 px-4 py-6 lg:px-8">
        <aside className="hidden w-64 shrink-0 rounded-[2rem] border border-zinc-800 bg-zinc-950/90 p-5 text-white shadow-2xl shadow-black/40 lg:block">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-black shadow-lg shadow-amber-500/20">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">EVOLV</p>
              <p className="text-xs text-zinc-500">Client Performance Hub</p>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { icon: LineChart, label: "Dashboard" },
              { icon: Watch, label: "Integrations" },
              { icon: Dumbbell, label: "Training" },
              { icon: Apple, label: "Nutrition" },
              { icon: MessageCircle, label: "Coach Chat" },
            ].map(({ icon: Icon, label }, index) => (
              <button
                key={label}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                  index === 0
                    ? "bg-amber-400 text-black"
                    : "text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-10 rounded-3xl border border-amber-400/20 bg-amber-400/10 p-4">
            <Sparkles className="mb-3 h-5 w-5 text-amber-300" />
            <p className="text-sm font-semibold text-amber-100">POC Goal</p>
            <p className="mt-1 text-xs leading-5 text-zinc-400">
              Show how external health apps can feed one branded client
              experience.
            </p>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          <header className="flex flex-col justify-between gap-4 rounded-[2rem] border border-zinc-800 bg-zinc-950/80 p-5 shadow-2xl shadow-black/30 backdrop-blur md:flex-row md:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Pill tone="dark">Proof of Concept</Pill>
                <Pill tone="success">All systems synced</Pill>
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Good morning, Alex
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-zinc-400">
                One branded app that pulls recovery, sleep, nutrition, body
                composition, and coaching into a single premium dashboard.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-2xl border border-zinc-800 p-3 text-zinc-300 hover:bg-zinc-900">
                <Bell className="h-5 w-5" />
              </button>
              <button className="flex items-center gap-2 rounded-2xl bg-amber-400 px-4 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/20">
                <User className="h-4 w-4" />
                Client Profile
              </button>
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="rounded-2xl bg-amber-400/10 p-3 text-amber-300 ring-1 ring-amber-400/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Pill>{metric.source}</Pill>
                    </div>
                    <p className="text-sm text-zinc-500">{metric.label}</p>
                    <p className="mt-1 text-3xl font-bold tracking-tight text-white">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs text-zinc-400">
                      {metric.detail}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <h2 className="text-xl font-bold">Unified Recovery Trend</h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    Oura + training + nutrition data displayed in one place.
                  </p>
                </div>

                <div className="flex rounded-2xl bg-zinc-900 p-1">
                  {["Today", "Week", "Coach"].map((view) => (
                    <button
                      key={view}
                      onClick={() => setSelectedView(view)}
                      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                        selectedView === view
                          ? "bg-amber-400 text-black"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {view}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={weeklyRecovery}
                    margin={{ left: 0, right: 16, top: 12, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="rgba(255,255,255,0.08)"
                    />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#a1a1aa" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      domain={[40, 100]}
                      tick={{ fill: "#a1a1aa" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#09090b",
                        border: "1px solid #27272a",
                        borderRadius: "16px",
                        color: "#ffffff",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="sleep"
                      stroke="#fbbf24"
                      fill="#fbbf24"
                      fillOpacity={0.12}
                    />
                    <Area
                      type="monotone"
                      dataKey="readiness"
                      stroke="#f59e0b"
                      fill="#f59e0b"
                      fillOpacity={0.18}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-amber-50">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  Smart Recommendation
                </p>
                <p className="mt-1 text-sm text-zinc-300">{statusText}</p>
              </div>
            </Card>

            <Card>
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Today’s Plan</h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    Coach-generated priorities.
                  </p>
                </div>
                <Activity className="h-5 w-5 text-amber-300" />
              </div>

              <div className="space-y-3">
                {coachingTasks.map((task, index) => (
                  <div
                    key={task}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-black">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-5 text-zinc-300">{task}</p>
                  </div>
                ))}
              </div>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-4 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 hover:bg-amber-300">
                Message Coach
                <ChevronRight className="h-4 w-4" />
              </button>
            </Card>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <Card>
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Connected Apps</h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    External services feeding the EVOLV dashboard.
                  </p>
                </div>

                <button className="flex items-center gap-2 rounded-2xl border border-zinc-800 px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-900">
                  <RefreshCw className="h-4 w-4" />
                  Sync
                </button>
              </div>

              <div className="space-y-3">
                {integrations.map((integration) => {
                  const Icon = integration.icon;

                  return (
                    <div
                      key={integration.name}
                      className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-amber-400/10 p-3 text-amber-300 ring-1 ring-amber-400/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold">{integration.name}</p>
                          <p className="text-sm text-zinc-400">
                            {integration.type}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <Pill tone="success">{integration.status}</Pill>
                        <p className="mt-1 text-xs text-zinc-500">
                          {integration.lastSync}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="border-amber-400/20 bg-gradient-to-br from-zinc-950 via-zinc-950 to-amber-950/30">
              <div className="mb-8">
                <Pill tone="warm">Top Tier Member Experience</Pill>
                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  The client only needs one daily home base.
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Oura, CalAI, ShapeScale, and coaching tools can still exist in
                  the background, but the client-facing experience becomes
                  simple: open EVOLV and see everything that matters.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Less app switching",
                  "Premium branded feel",
                  "Coach-visible insights",
                  "Subscription differentiator",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-amber-400/10 bg-white/5 p-4 text-sm font-medium text-zinc-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black">
                View Integration Roadmap
                <ChevronRight className="h-4 w-4" />
              </button>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}