import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
