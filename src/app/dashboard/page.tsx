"use client";
import { redirect } from "next/navigation";
import { FC, Suspense } from "react";
import { Dashboard as DashboardComponent } from "../components/ui";

const Dashboard: FC<{}> = () => {
  let user: string = "si";

  if (!user) return redirect("/");

  return (
    <Suspense fallback={<div> Cargando ... </div>}>
      <DashboardComponent />
    </Suspense>
  );
};

export default Dashboard;
