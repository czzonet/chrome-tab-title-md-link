export const getWindowTabs = async () => {
  return await chrome.tabs.query({ currentWindow: true });
};

export const getCurrentTab = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);

  return tab;
};
