export function isProUser(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return localStorage.getItem("zuhaib_pro") === "true";
}

export function activateProDemo(): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("zuhaib_pro", "true");
  }
}

export function deactivateProDemo(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("zuhaib_pro");
  }
}