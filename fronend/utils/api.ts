// frontend/utils/api.ts
export interface RegisterUserResponse {
  id: string;
  email: string;
  username: string;
}

export interface LoginUserResponse {
  success: boolean;
  error?: string;
}

export async function registerUser(
  email: string,
  password: string,
  username: string
): Promise<RegisterUserResponse> {
  const response = await fetch("http://localhost:3001/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
  });

  if (!response.ok) {
    throw new Error("Error registering user");
  }

  return response.json();
}

export async function loginUser(
  email: string,
  password: string
): Promise<LoginUserResponse> {
  const response = await fetch("http://localhost:3001/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Error logging in");
  }

  return response.json();
}

