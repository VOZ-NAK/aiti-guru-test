import type { RootState } from '@/app/store/store';

export const selectUser = (state: RootState) => state.user.user;
export const selectToken = (state: RootState) => state.user.token;
export const selectUserId = (state: RootState) => state.user.user?.id;
export const selectUserName = (state: RootState) => state.user.user?.username;
export const selectUserFullName = (state: RootState) => {
  const user = state.user.user;
  if (!user) return null;
  return `${user.firstName} ${user.lastName}`;
};
