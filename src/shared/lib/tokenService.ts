const TOKEN_KEY = 'auth_token';

export const tokenService = {
  setToken(token: string, rememberMe: boolean = false): void {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem(TOKEN_KEY, token);
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
  },

  clearToken(): void {
    localStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },
};
