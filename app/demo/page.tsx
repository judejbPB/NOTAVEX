import dynamic from "next/dynamic";

const DemoDashboard = dynamic(
  () => import("@/components/demo-dashboard"),
  { ssr: false }
);

export default function DemoPage() {
  return <DemoDashboard />;
}
