import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export default async function Home() {
  const user = db.user.count();
  console.log(user);
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[#ffbb5e]">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-[#450026] drop-shadow-md">
          🔐 Auth
        </h1>
        <p className="text-lg">A simple Authentication service</p>
        <div>
          <LoginButton>
            <Button variant="default" size="lg">
              Login
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
