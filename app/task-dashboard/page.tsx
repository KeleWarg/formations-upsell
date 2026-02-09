"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import TaskDashboard from "@/pages/TaskDashboard";

function TaskDashboardInner() {
  const searchParams = useSearchParams();
  const state = searchParams?.get("state");
  const dashboardState = state === "ein-received" ? "ein-received" : "ein-pending";

  return <TaskDashboard dashboardState={dashboardState as "ein-pending" | "ein-received"} />;
}

export default function TaskDashboardPage() {
  return (
    <Suspense>
      <TaskDashboardInner />
    </Suspense>
  );
}
