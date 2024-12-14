// next-auth.d.ts

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultSession } from "next-auth";

// Extend the DefaultSession interface
declare module "next-auth" {
  interface Session {
    user: {
      id: string;  // Add custom user property like `id`
      name?: string;
      email?: string;
      image?: string;
    };
  }
}
