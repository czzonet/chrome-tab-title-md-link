export const getWindowTabs = async () => {
  return await chrome.tabs.query({ currentWindow: true });
};
