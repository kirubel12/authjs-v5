"use client";
import { useRouter } from "next/navigation";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  asChild,
  mode = "redirect",
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/login");
  };

  if (mode === "modal") {
    return <span>TODO: Add Modal Logic</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
